/*
 * Hand Coded - site public.
 * Moteur hérité du site Fat-Man Collective 2008 (ActionScript 3 / Papervision3D, Maya Benaïnous), porté en Three.js
 * et piloté par content/content.json : sections, modèles Collada, styles de disposition, types de cartes, tags, FR/EN.
 * Les easings "par frame" restent calés sur les 42 fps du SWF d'origine.
 */
import * as THREE from 'three';
import { ColladaLoader } from 'three/addons/loaders/ColladaLoader.js';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { t, UI, CARDS, LANGS, StaticBackend, DemoBackend, postsOf, sanitizeHTML, htmlToText, mapCoords, escapeHTML, normalizeContent, validLoc, typoOf, typoCSS, googleFontURLs, typoFontLoads, ringLogoURL, skillsOf, projectsOf } from './store.js';

const BASE = window.HC_BASE || '';
const backend = window.HC_MODE === 'demo' ? new DemoBackend(BASE) : new StaticBackend(BASE);
const INLINE = window.HC_ASSETS || null;   // démo, ou site ouvert en local : ressources embarquées
const LOCAL = location.protocol === 'file:';   // en local, le navigateur interdit de lire les images du disque dans la 3D
/* Aperçu depuis le back-office : le brouillon et les fichiers pas encore publiés arrivent de la fenêtre parente. */
const SITE_VERSION = 20261102; window.HC_SITE_VERSION = SITE_VERSION;   // le back-office vérifie que le site du dossier est à jour
let PREVIEW = window.HC_PREVIEW || /[?&]preview\b/.test(location.search) ? (() => { try { return (window.parent !== window && window.parent.__hcPreview) || (window.opener && window.opener.__hcPreview) || null; } catch (e) { return null; } })() : null;
const url = p => {
  if (!p) return p;
  const key = String(p).replace(/^\.\//, '').replace(/\/\.\//g, '/');
  if (PREVIEW && PREVIEW.files && PREVIEW.files[key]) return PREVIEW.files[key];
  if (INLINE && INLINE[key] && INLINE[key].startsWith('data:')) return INLINE[key];
  return backend.url(key);
};
async function modelText(path) {
  if (INLINE && INLINE[path] && !INLINE[path].startsWith('data:')) return INLINE[path];
  const r = await fetch(url(path)); if (!r.ok) throw new Error(path + ' : ' + r.status);
  return r.text();
}

let CONTENT = null;
let LANG = 'en';
const tr = f => t(f, LANG);
const ui = k => (UI[LANG] || UI.en)[k];

/* ================================================================ StyleSheets (valeurs du SWF v10) */
const FPS = 42;
const STYLE = {
  object3DDistance: 800, object3DMaxHeight: 800,
  planeDistance: 500, planeDisOrder: 125,
  planeFrameThickness: 1, planeFrameColor: 0xf1f1f1, planeFrameSelectColor: 0x999999, planeFrameDistance: 1,
  planeSpeed: 1,
  cameraDistance: 600, cameraDistanceProportion: 600,
  cameraEaseSpeed: 7, cameraSpeed: 2.0,
  cameraHeight: 350, cameraTargetHeight: 400,
  cameraKeyboardSpeed: 3, cameraZoomMin: 500, cameraZoomMax: 2000,
  lineThickness: 1, lineColor: 0xdedede, locatorColor: 0xf1b800,
  margin: 20, easing: 6, tween: 1,
  animationMode: true,
};
const CAMERA = { zoom: 2, focus: 300 };
const POST_STAGGER = 0.08;
const SAVED = {};
function setAnimationMode(value) {
  if (STYLE.animationMode === value) return;
  const keys = ['cameraEaseSpeed', 'cameraSpeed', 'planeSpeed', 'cameraKeyboardSpeed', 'planeDisOrder', 'easing', 'tween'];
  if (value) keys.forEach(k => { STYLE[k] = SAVED[k]; });
  else { keys.forEach(k => { SAVED[k] = STYLE[k]; }); Object.assign(STYLE, { easing: 1, tween: 0, cameraEaseSpeed: 1, cameraSpeed: 0, planeSpeed: 0, cameraKeyboardSpeed: 1, planeDisOrder: 0 }); }
  STYLE.animationMode = value;
}

/* ================================================================ Données : un provider par section (tags + pagination) */
class Provider {
  constructor(section) {
    this.section = section;
    this.per = section.skills ? Math.max(section.perPage, 200) : section.perPage;   // les savoir-faire : tous d'un coup d'œil, sans pages
    this.all = postsOf(CONTENT, section.id);
    this.selected = 0;
    this.defaultCategory = section.defaultTag || '';
    this.changeCategory(this.defaultCategory);
  }
  get categoryList() {   // "Tout" + les tags qui ont au moins un contenu publié
    const used = new Set(this.all.flatMap(p => p.tags));
    return [{ id: '', label: { en: UI.en.all, fr: UI.fr.all } }, ...this.section.tags.filter(tg => used.has(tg.id))];
  }
  changeCategory(id) {
    if (id && !this.categoryList.some(c => c.id === id)) id = '';
    this.category = id;
    this.list = id ? this.all.filter(p => p.tags.includes(id)) : this.all;
    this.first = 0; this.posts = this.list.slice(0, this.per); this.last = this.posts.length;
  }
  get currentCatName() { const c = this.categoryList.find(c => c.id === this.category); return c ? tr(c.label) : ''; }
  countOf(id) { return id ? this.all.filter(p => p.tags.includes(id)).length : this.all.length; }   // contenus publiés dans une catégorie
  get page() { return Math.floor(this.first / this.per) + 1; }
  get pages() { return Math.max(1, Math.ceil(this.list.length / this.per)); }
  get currentPost() { return this.posts[this.selected]; }
  hasNewer() { return this.first > 0; }
  hasOlder() { return this.last < this.list.length; }
  newer() { if (!this.hasNewer()) return false; this.last = this.first; this.first = Math.max(0, this.last - this.per); this.posts = this.list.slice(this.first, this.last); return true; }
  older() { if (!this.hasOlder()) return false; this.first = this.last; this.last = Math.min(this.list.length, this.first + this.per); this.posts = this.list.slice(this.first, this.last); return true; }
}
const P = {
  currentSection: 0, degreeCamera: Math.PI, actualDeg: Math.PI, cameraY: STYLE.cameraHeight, postOpen: false, datas: [],
  get data() { return this.datas[this.currentSection]; },
  get section() { return SECTIONS[this.currentSection]; },
  get selected() { return this.data.selected; },
  set selected(i) { this.data.selected = i; },
  resetData() { if (!this.datas[this.currentSection]) this.datas[this.currentSection] = new Provider(this.section.def); else this.data.changeCategory(this.data.defaultCategory); },
};
let SECTIONS = [];
const cam = { x: 0, y: 0, z: 0, zoom: CAMERA.zoom };
const camTarget = { x: 0, y: 0, z: 0 };

/* ================================================================ TweenLite */
let clock = 0;
const tweens = [];
const EASE = {
  linear: x => x, quadOut: x => -x * (x - 2), quartOut: x => 1 - Math.pow(1 - x, 4),
  expoOut: x => (x >= 1 ? 1 : 1 - Math.pow(2, -10 * x)), circOut: x => Math.sqrt(1 - (x - 1) * (x - 1)),
};
function to(obj, time, props, o = {}) {
  for (const tw of tweens) if (tw.obj === obj) for (const k in props) delete tw.props[k];
  const tw = { obj, props: { ...props }, bezier: o.bezier || null, time, start: clock + (o.delay || 0), ease: EASE[o.ease || 'quadOut'], onUpdate: o.onUpdate, onComplete: o.onComplete, from: null };
  tweens.push(tw); return tw;
}
const delayedCall = (time, fn) => to({}, time, {}, { onComplete: fn, ease: 'linear' });
function killTweensOf(obj) { for (let i = tweens.length - 1; i >= 0; i--) if (tweens[i].obj === obj) tweens.splice(i, 1); }
function isTweening(obj) { return tweens.some(tw => tw.obj === obj && clock >= tw.start); }
function stepTween(tw, force) {
  if (!force && clock < tw.start) return false;
  if (!tw.from) { tw.from = {}; for (const k in tw.props) tw.from[k] = tw.obj[k]; }
  const raw = force || tw.time <= 0 ? 1 : Math.min(1, (clock - tw.start) / tw.time);
  const e = raw >= 1 ? 1 : tw.ease(raw);
  for (const k in tw.props) { const b = tw.from[k], v = tw.props[k]; tw.obj[k] = tw.bezier && k in tw.bezier ? b + e * (2 * (1 - e) * (tw.bezier[k] - b) + e * (v - b)) : b + (v - b) * e; }
  if (tw.onUpdate) tw.onUpdate();
  return raw >= 1;
}
function updateTweens() { for (const tw of tweens.slice()) if (stepTween(tw, false)) { const i = tweens.indexOf(tw); if (i >= 0) tweens.splice(i, 1); if (tw.onComplete) tw.onComplete(); } }
function killAllTweens() { tweens.splice(0).forEach(tw => stepTween(tw, true)); }
function cameraGoto(mx, my, mz, tx, ty, tz, speed) {
  killTweensOf(cam);
  to(cam, speed, { x: mx, y: my, z: mz }, { ease: 'quadOut', bezier: { x: (mx - cam.x) / 2, y: my + 500, z: (mz - cam.z) / 2 } });
  cameraTarget(tx, ty, tz, speed);
}
function cameraTarget(x, y, z, speed) { killTweensOf(camTarget); to(camTarget, speed * 3 / 4, { x, y, z }, { ease: 'quartOut' }); }
function cameraOnlyGoto(mx, my, mz, speed) { killTweensOf(cam); to(cam, speed, { x: mx, y: my, z: mz }, { ease: 'quadOut' }); }

let frames = 1;
const ease = k => (k <= 1 ? 1 : 1 - Math.pow(1 - 1 / k, frames));
const D2R = Math.PI / 180;
const pv = (x, y, z) => new THREE.Vector3(x, y, -z);   // Papervision (main gauche) -> Three.js
const postLocal = (x, y, z) => [-x, y, z];             // conteneur de posts tourné de 180°

/* ================================================================ Rendu */
const canvas = document.getElementById('stage');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.debug.checkShaderErrors = false;   // pas de lecture des journaux de compilation : le navigateur compile les shaders sans bloquer l'image
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setClearColor(0xffffff, 1);
const scene = new THREE.Scene();
scene.add(new THREE.HemisphereLight(0xffffff, 0xd8d8d8, 2.2));
const sun = new THREE.DirectionalLight(0xffffff, 1.2); sun.position.set(300, 800, 500); scene.add(sun);
const camera = new THREE.PerspectiveCamera(60, 1, 1, 60000);
const lineMatCenter = new LineMaterial({ color: STYLE.lineColor, linewidth: STYLE.lineThickness });
const lineMatFrame = new LineMaterial({ color: STYLE.planeFrameColor, linewidth: STYLE.planeFrameThickness });
const lineMatSelect = new LineMaterial({ color: STYLE.planeFrameSelectColor, linewidth: STYLE.planeFrameThickness });
const lineMatNet = new LineMaterial({ color: STYLE.locatorColor, linewidth: 1.3 });
const LINE_MATS = [lineMatCenter, lineMatFrame, lineMatSelect, lineMatNet];
const manager = new THREE.LoadingManager();
manager.setURLModifier(u => (/^(blob:|data:|https?:)/.test(u) ? u : url(u)));
const imgCache = new Map();
function loadImage(path) {
  if (!path) return Promise.reject(new Error('no image'));
  if (LOCAL && !/^(data:|blob:|https?:)/.test(url(path))) return Promise.reject(new Error('local'));   // la carte reste typographique
  if (!imgCache.has(path)) imgCache.set(path, new Promise((res, rej) => { const im = new Image(); if (/^https?:/.test(url(path))) im.crossOrigin = 'anonymous'; im.onload = () => (im.decode ? im.decode().catch(() => {}) : Promise.resolve()).then(() => res(im)); im.onerror = rej; im.src = url(path); }));   // image décodée à l'avance, hors de l'image en cours
  return imgCache.get(path);
}
function prepTex(tx) { tx.colorSpace = THREE.SRGBColorSpace; tx.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy()); return tx; }
/* Shaders des cartes gardés en vie : sans ça, détruire les cartes d'une sélection libère leurs programmes et la suivante doit les recompiler
   (un à-coup de 20 à 100 ms à chaque changement de tag ou de section). Trois matériaux témoins, jamais détruits, compilés une fois. */
const KEEP = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 4;
  const tex = prepTex(new THREE.CanvasTexture(c)), g = new THREE.PlaneGeometry(1, 1), sc = new THREE.Scene();
  [THREE.FrontSide, THREE.BackSide, THREE.DoubleSide].forEach(side => sc.add(new THREE.Mesh(g, new THREE.MeshBasicMaterial({ map: tex, side }))));
  sc.add(new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0x111111 })));                 // points du réseau (carte du monde)
  sc.add(new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true })));          // étiquettes des villes
  return sc;
})();
let W = 0, H = 0;
/* Mode négatif : toute la page est inversée en CSS. Ce qu'on veut voir dans sa vraie couleur (photos, vidéos, couleur d'accent) est inversé d'avance, la seconde inversion le rétablit. */
let negMode = false;   // réglage par défaut du back-office, puis le choix du visiteur (clic sur le logo)
const NEG = () => negMode;
const invertHex = hex => { const m = /^#?([0-9a-f]{6})$/i.exec(String(hex).trim()); if (!m) return hex; return '#' + (0xffffff ^ parseInt(m[1], 16)).toString(16).padStart(6, '0'); };
const accent = () => { const a = CONTENT.settings.accent || '#ffcc00'; return NEG() ? invertHex(a) : a; };

/* ================================================================ Textures dessinées (les MovieClips de la bibliothèque, en canvas) */
let SERIF = 'Georgia, Gelasio, "Times New Roman", serif';   // Réglages › Typographie › Cartes 3D
let UIF = '"Lucida Grande", "Lucida Sans Unicode", Verdana, sans-serif';
let CARD_SCALE = 1;
const fz = n => Math.round(n * CARD_SCALE);
function fontsReady() {
  if (!document.fonts || !document.fonts.load) return Promise.resolve();
  const loads = ['22px Gelasio', 'italic 22px Gelasio', ...(CONTENT ? typoFontLoads(CONTENT.settings) : [])];
  return Promise.all(loads.map(f => document.fonts.load(f).catch(() => {}))).catch(() => {});
}
/* Typographie réglée dans le back-office : feuille de style générée, polices Google si besoin, polices des cartes 3D */
/* Une police Google arrive après coup : on redessine ce qui est dessiné sur canvas (logo rond, cartes 3D) */
let typoTimer = 0;
const TYPO_LINKS = [];   // feuilles Google en cours de chargement : le démarrage les attend avant de dessiner les cartes
function typoFontsArrived() {
  clearTimeout(typoTimer);
  typoTimer = setTimeout(async () => {
    try { await Promise.all(typoFontLoads(CONTENT.settings).map(f => document.fonts.load(f).catch(() => {}))); } catch (e) {}
    if (!CONTENT.settings.logo) drawLogos();
    if (postsView && !postsView.loading) postsView.retexture();   // police arrivée après le dessin des cartes seulement
  }, 150);
}
function applyTypo() {
  const s = CONTENT.settings;
  let st = document.getElementById('hc-typo'); if (!st) { st = document.createElement('style'); st.id = 'hc-typo'; document.head.appendChild(st); }
  const css = typoCSS(s); if (st.textContent !== css) st.textContent = css;
  const urls = googleFontURLs(s);
  document.querySelectorAll('link[data-hc-font]').forEach(l => { if (!urls.includes(l.href)) l.remove(); });
  urls.forEach(u => { if (!document.querySelector(`link[data-hc-font][href="${CSS.escape(u)}"]`)) { const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = u; l.dataset.hcFont = ''; TYPO_LINKS.push(new Promise(res => { l.onload = () => { res(); typoFontsArrived(); }; l.onerror = res; })); document.head.appendChild(l); } });
  SERIF = typoOf(s, 'card').css; UIF = typoOf(s, 'cardsm').css; CARD_SCALE = Math.max(0.5, Math.min(2, (+typoOf(s, 'card').scale || 100) / 100));
}
function wrapLines(ctx, text, maxW) {
  const words = String(text).split(/\s+/); const lines = []; let line = '';
  for (const w of words) { const x = line ? line + ' ' + w : w; if (ctx.measureText(x).width > maxW && line) { lines.push(line); line = w; } else line = x; }
  if (line) lines.push(line); return lines;
}
function canvasTex(w, h, draw, scale = 2) {
  const c = document.createElement('canvas'); c.width = Math.round(w * scale); c.height = Math.round(h * scale);
  const ctx = c.getContext('2d'); ctx.scale(scale, scale); draw(ctx);
  return prepTex(new THREE.CanvasTexture(c));
}
function drawCover(ctx, im, x, y, w, h) {
  const r = Math.max(w / im.naturalWidth, h / im.naturalHeight), sw = w / r, sh = h / r;
  ctx.drawImage(im, (im.naturalWidth - sw) / 2, (im.naturalHeight - sh) / 2, sw, sh, x, y, w, h);
  if (NEG()) { ctx.save(); ctx.globalCompositeOperation = 'difference'; ctx.fillStyle = '#fff'; ctx.fillRect(x, y, w, h); ctx.restore(); }   // photo pré-inversée
}
const initials = s => String(s).split(/[\s&]+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('');
function washed(draw) { return ctx => { draw(ctx); ctx.fillStyle = 'rgba(255,255,255,.8)'; ctx.fillRect(0, 0, 4000, 4000); }; }
function mirrored(w, draw) { return ctx => { ctx.translate(w, 0); ctx.scale(-1, 1); draw(ctx); }; }
/* Savoir-faire ↔ projets. Seuls les contenus des sections visibles comptent : on doit pouvoir y aller. */
const onSite = p => SECTIONS.some(s => s.def.id === p.section);
/* Une personne ou un partenaire : les projets où figure son nom dans l'équipe, ou son logo */
const byOrder = (a, b) => SECTIONS.findIndex(s => s.def.id === a.section) - SECTIONS.findIndex(s => s.def.id === b.section) || (a.order ?? 0) - (b.order ?? 0);
const linkedProjects = post => CONTENT.posts.filter(p => p.published && p !== post && onSite(p) && ((p.team || []).includes(post.id) || (post.thumb && (p.logos || []).includes(post.thumb)))).sort(byOrder);
const relProjects = post => { const s = projectsOf(CONTENT, post).filter(onSite); return s.length ? s : linkedProjects(post); };
const isLogo = post => /(^|\/)media\/logos\//.test(post.thumb || '') || (post.tags || []).includes('partners');
const relSkills = post => skillsOf(CONTENT, post).filter(onSite);
const photoOf = p => p.thumb || ((p.media || []).find(m => m && m.src && mediaKind(m.src) === 'image') || {}).src || '';
/* Photo de fond d'une carte savoir-faire : celle d'un de ses projets, tirée au hasard une fois par visite */
const skillPick = new Map();
/* Les projets d'une personne : ceux où elle figure dans l'équipe */
const personProjects = post => linkedProjects(post).filter(photoOf);
async function skillBackdrop(post, from = relProjects(post)) {
  const list = from.filter(photoOf); if (!list.length) return null;
  const kept = list.find(x => x.id === skillPick.get(post.id));
  const order = kept ? [kept] : list.map(x => [Math.random(), x]).sort((a, b) => a[0] - b[0]).map(x => x[1]);
  for (const p of order) {   // une photo introuvable : on essaie le projet suivant
    const im = await loadImage(photoOf(p)).catch(() => null);
    if (im) { skillPick.set(post.id, p.id); return { im, project: p }; }
  }
  return null;
}
/* Recto : la photo sous un voile noir, le texte blanc par-dessus. Dos : la photo plus présente, le texte en transparence. */
function veil(ctx, bd, w, h, alpha) { drawCover(ctx, bd.im, 0, 0, w, h); ctx.fillStyle = `rgba(0,0,0,${alpha})`; ctx.fillRect(0, 0, w, h); }
/* Survol d'une vignette photo : le nom et la description par-dessus, sur un petit fond noir transparent */
function hoverBand(post, w) {   // bandeau seul (fond transparent autour) : il monte du bas de la carte au survol
  const title = tr(post.title).trim(), sub = tr(post.subtitle).trim(); if (!title && !sub) return null;
  const ts = Math.max(9, Math.min(13.5, w * 0.053)), ss = Math.max(7.5, ts * 0.74), pad = Math.round(ts * 0.75), tw = w - 2 * pad;
  const c = document.createElement('canvas').getContext('2d');
  c.font = `${ts}px ${SERIF}`; const tl = title ? wrapLines(c, title, tw).slice(0, 2) : [];
  c.font = `${ss}px ${SERIF}`; const sl = sub ? wrapLines(c, sub, tw).slice(0, 2) : [];
  const tlh = Math.round(ts * 1.2), slh = Math.round(ss * 1.25);
  const bh = Math.ceil(pad + tl.length * tlh + (sl.length ? 3 + sl.length * slh : 0) + pad - 2);
  const tex = canvasTex(w, bh, ctx => {
    ctx.fillStyle = 'rgba(0,0,0,.62)'; ctx.fillRect(0, 0, w, bh);
    ctx.textBaseline = 'top'; let y = pad;
    ctx.fillStyle = '#fff'; ctx.font = `${ts}px ${SERIF}`; tl.forEach(l => { ctx.fillText(l, pad, y); y += tlh; });
    y += 3; ctx.fillStyle = '#d6d6d6'; ctx.font = `${ss}px ${SERIF}`; sl.forEach(l => { ctx.fillText(l, pad, y); y += slh; });
  }, 3);
  return { tex, bh, w };
}
/* Carte image : vignette en recadrage "cover", ou une carte typographique quand il n'y a pas encore d'image. */
async function imageCard(post, w, h) {
  const im = post.thumb ? await loadImage(post.thumb).catch(() => null) : null;
  const back = post.thumbBack ? await loadImage(post.thumbBack).catch(() => null) : null;
  const bd = im ? null : await skillBackdrop(post);
  await fontsReady();
  const face = (ctx, faint = false) => {
    if (im) { drawCover(ctx, im, 0, 0, w, h); return; }   // la photo seule : le nom monte au survol
    if (bd) veil(ctx, bd, w, h, faint ? 0.22 : 0.64); else { ctx.fillStyle = '#111'; ctx.fillRect(0, 0, w, h); }
    ctx.textBaseline = 'top'; if (faint) ctx.globalAlpha = 0.3;
    ctx.fillStyle = accent(); ctx.fillRect(16, 18, 18, 2);
    ctx.fillStyle = '#fff'; ctx.font = `${fz(24)}px ${SERIF}`;
    const lines = wrapLines(ctx, tr(post.title), w - 32).slice(0, 3);
    lines.forEach((l, i) => ctx.fillText(l, 16, 30 + i * 28));
    ctx.fillStyle = bd ? '#c9c9c9' : '#8c8c8c'; ctx.font = `${fz(13)}px ${SERIF}`;
    wrapLines(ctx, tr(post.subtitle), w - 32).slice(0, 2).forEach((l, i) => ctx.fillText(l, 16, 38 + lines.length * 28 + i * 16));
    const sig = bd ? signature(bd.project, bd.project.media[0] && bd.project.media[0].credit) : signature(post, post.media[0] && post.media[0].credit);   // la photo est signée par son projet
    ctx.fillStyle = accent(); ctx.font = `10px ${UIF}`;
    ctx.fillText([post.date, tr(post.place)].filter(Boolean).join('  ·  ').toUpperCase(), 16, h - (sig ? 36 : 22));
    if (sig) {   // signature : l'œuvre et son auteur, en bas de la vignette
      ctx.font = `9px ${UIF}`; let text = sig; while (ctx.measureText(text).width > w - 32 && text.length > 4) text = text.slice(0, -2) + '…';
      ctx.fillStyle = bd ? 'rgba(0,0,0,.55)' : '#2a2a2a'; ctx.fillRect(0, h - 20, w, 20);
      ctx.fillStyle = bd ? '#d0d0d0' : '#9a9a9a'; ctx.textBaseline = 'middle'; ctx.fillText(text, 16, h - 10);
    }
    ctx.globalAlpha = 1;
  };
  const front = canvasTex(w, h, face, 2);
  const backTex = back ? canvasTex(w, h, ctx => drawCover(ctx, back, 0, 0, w, h), 2)
    : bd ? canvasTex(w, h, mirrored(w, ctx => face(ctx, true)), 2)   // vu de dos : dessiné en miroir pour rester à l'endroit
    : canvasTex(w, h, washed(face), 1.5);
  return [front, backTex, im ? hoverBand(post, w) : null];
}
async function portraitCard(post, w, h) {
  const im = post.thumb ? await loadImage(post.thumb).catch(() => null) : null;
  const back = post.thumbBack ? await loadImage(post.thumbBack).catch(() => null) : null;
  const bd = im || isLogo(post) ? null : await skillBackdrop(post, personProjects(post));   // pas encore de portrait : la photo d'un de ses projets, voilée, sous les initiales
  await fontsReady();
  const face = (ctx, faint = false) => {
    if (isLogo(post)) {   // un partenaire : son logo entier, posé sur blanc (ou son nom, tant que le logo manque)
      ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h);
      if (!im) {
        ctx.fillStyle = '#141414'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = `600 ${Math.round(h * 0.13)}px ${UIF}`;
        const ls = wrapLines(ctx, tr(post.title), w * 0.76).slice(0, 3); ls.forEach((l, i) => ctx.fillText(l, w / 2, h / 2 + (i - (ls.length - 1) / 2) * h * 0.16));
        if (NEG()) { ctx.globalCompositeOperation = 'difference'; ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h); ctx.globalCompositeOperation = 'source-over'; }
        return;
      }
      const pad = w * 0.1, r = Math.min((w - 2 * pad) / im.naturalWidth, (h - 2 * pad) / im.naturalHeight), lw = im.naturalWidth * r, lh = im.naturalHeight * r;
      ctx.drawImage(im, (w - lw) / 2, (h - lh) / 2, lw, lh);
      if (NEG()) { ctx.globalCompositeOperation = 'difference'; ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h); ctx.globalCompositeOperation = 'source-over'; }
      return;
    }
    if (im) { drawCover(ctx, im, 0, 0, w, h); return; }
    if (bd) veil(ctx, bd, w, h, faint ? 0.22 : 0.42); else { ctx.fillStyle = '#1b1b1b'; ctx.fillRect(0, 0, w, h); }
    if (faint) ctx.globalAlpha = 0.35;
    ctx.fillStyle = '#fff'; ctx.font = `${Math.round(h * 0.42 * CARD_SCALE)}px ${SERIF}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(initials(tr(post.title)), w / 2, h * 0.45);
    ctx.fillStyle = accent(); ctx.fillRect(w / 2 - 8, h * 0.78, 16, 1.5);
    ctx.globalAlpha = 1;
  };
  const backTex = back ? canvasTex(w, h, ctx => drawCover(ctx, back, 0, 0, w, h), 3)
    : bd ? canvasTex(w, h, mirrored(w, ctx => face(ctx, true)), 2) : canvasTex(w, h, washed(face), 2);
  return [canvasTex(w, h, face, 3), backTex, (im || bd || isLogo(post)) ? hoverBand(post, w) : null];
}
async function textCard(post, w, h) {
  const bd = await skillBackdrop(post);
  if (bd) return textCardPhoto(post, w, h, bd);
  const im = post.thumb ? await loadImage(post.thumb).catch(() => null) : null;
  await fontsReady();
  const title = tr(post.title).trim();
  const x0 = im ? 72 : 18, tw = w - x0 - 14;
  const front = canvasTex(w, h, ctx => {
    ctx.fillStyle = '#333'; ctx.fillRect(0, 0, w, h);
    if (im) drawCover(ctx, im, 13, 12.75, 53, 53); else { ctx.fillStyle = accent(); ctx.fillRect(18, 14, 14, 2); }
    ctx.fillStyle = '#fff'; ctx.font = `${fz(21)}px ${SERIF}`; ctx.textBaseline = 'top';
    wrapLines(ctx, title, tw).slice(0, 3).forEach((l, i) => ctx.fillText(l, x0, (im ? 12 : 20) + i * 22));
  });
  const back = canvasTex(w, h, mirrored(w, ctx => {   // le dos est vu de derrière : dessiné en miroir pour rester lisible
    ctx.fillStyle = 'rgba(255,255,255,.7)'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#c4c4c4'; ctx.font = `${fz(21)}px ${SERIF}`; ctx.textBaseline = 'top';
    wrapLines(ctx, title, tw).slice(0, 3).forEach((l, i) => ctx.fillText(l, x0, (im ? 9 : 17) + i * 22));
  }));
  return [front, back];
}
async function textCardPhoto(post, w, h, bd) {   // bandeau de savoir-faire : la photo d'un projet en fond
  await fontsReady();
  const title = tr(post.title).trim(), tw = w - 32;
  const draw = faint => ctx => {
    veil(ctx, bd, w, h, faint ? 0.2 : 0.62);
    if (faint) ctx.globalAlpha = 0.32;
    ctx.fillStyle = accent(); ctx.fillRect(18, 14, 14, 2);
    ctx.fillStyle = '#fff'; ctx.font = `${fz(21)}px ${SERIF}`; ctx.textBaseline = 'top';
    wrapLines(ctx, title, tw).slice(0, 3).forEach((l, i) => ctx.fillText(l, 18, 20 + i * 22));
    ctx.globalAlpha = 1;
  };
  return [canvasTex(w, h, draw(false), 2), canvasTex(w, h, mirrored(w, draw(true)), 2)];
}
async function placeCard(post, w, h) {
  const im = post.thumb ? await loadImage(post.thumb).catch(() => null) : null;
  await fontsReady();
  const face = ctx => {
    if (im) { ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h); drawCover(ctx, im, 0, 0, w, h); return; }
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#111'; ctx.beginPath(); ctx.arc(w / 2, h / 2 - 8, 34, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = accent(); ctx.beginPath(); ctx.arc(w / 2, h / 2 - 8, 9, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#333'; ctx.font = `${fz(12)}px ${SERIF}`; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    ctx.fillText(tr(post.place) || (post.location && post.location.city) || '', w / 2, h - 26);
  };
  const tx = canvasTex(w, h, face, 2);
  return [tx, tx];
}
const CARD_TEX = { image: imageCard, portrait: portraitCard, text: textCard, place: placeCard };
/* Carte savoir-faire : le nom et une phrase, lisibles d'un coup d'œil ; l'image (la sienne, sinon la photo d'un projet relié) à droite pour illustrer.
   Au dos, vue de derrière : l'image domine, le texte passe en transparence. */
async function skillCard(post, w, h) {
  const own = post.thumb ? await loadImage(post.thumb).catch(() => null) : null;
  const bd = own ? { im: own } : await skillBackdrop(post);
  await fontsReady();
  const title = tr(post.title).trim();
  const sum = (tr(post.subtitle).trim() || htmlToText(tr(post.body)).join(' ')).replace(/\s+/g, ' ').trim();
  const flat = h < 110, iw = bd ? Math.round(flat ? h * 1.15 : Math.min(w * 0.36, h * 0.8)) : 0;
  const x0 = 14, tw = w - iw - x0 - 12;
  const ts = flat ? 15 : 17, tl = flat ? 18 : 20, ss = flat ? 9.5 : 10.5, sl = flat ? 12 : 13.5;
  const draw = faint => ctx => {
    ctx.fillStyle = '#111'; ctx.fillRect(0, 0, w, h);
    if (bd) drawCover(ctx, bd.im, w - iw, 0, iw, h);
    if (faint) { if (bd) { ctx.globalAlpha = 0.55; drawCover(ctx, bd.im, 0, 0, w, h); } ctx.globalAlpha = 0.3; }
    ctx.textBaseline = 'top';
    ctx.fillStyle = accent(); ctx.fillRect(x0, flat ? 9 : 13, 14, 2);
    ctx.fillStyle = '#fff'; ctx.font = `${fz(ts)}px ${SERIF}`;
    const tls = wrapLines(ctx, title, tw).slice(0, 2); let y = flat ? 16 : 22;
    tls.forEach(l => { ctx.fillText(l, x0, y); y += fz(tl); });
    y += flat ? 2 : 5; ctx.fillStyle = '#bdbdbd'; ctx.font = `${fz(ss)}px ${SERIF}`;
    const room = Math.max(0, Math.floor((h - y - 8) / fz(sl)));
    let sls = wrapLines(ctx, sum, tw); if (sls.length > room) { sls = sls.slice(0, room); if (room) { let last = sls[room - 1]; while (last && ctx.measureText(last + '…').width > tw) last = last.replace(/\s*\S+$/, ''); sls[room - 1] = last + '…'; } }
    sls.forEach(l => { ctx.fillText(l, x0, y); y += fz(sl); });
    ctx.globalAlpha = 1;
  };
  return [canvasTex(w, h, draw(false), 2), canvasTex(w, h, mirrored(w, draw(true)), 2), null];
}
function infoTexture(post, kind) {
  return fontsReady().then(() => {
    if (kind === 'place') return canvasTex(380, 300, ctx => {   // MovieClip "contact"
      ctx.fillStyle = '#000'; ctx.fillRect(0, 0, 380, 300); ctx.textBaseline = 'top';
      ctx.fillStyle = '#fff'; ctx.font = `${fz(44)}px ${SERIF}`; ctx.fillText(tr(post.title) + '.', 32, 18);
      ctx.fillStyle = '#979797'; ctx.font = `${fz(18)}px ${SERIF}`; wrapLines(ctx, tr(post.subtitle), 320).slice(0, 2).forEach((l, i) => ctx.fillText(l, 32, 76 + i * 22));
      ctx.fillStyle = accent(); ctx.font = `14px ${UIF}`; ctx.fillText((post.link || '').replace(/^https?:\/\/(www\.)?/, ''), 32, 128);
      ctx.fillStyle = '#fff'; htmlToText(tr(post.body)).slice(0, 4).forEach((l, i) => ctx.fillText(l, 32, 164 + i * 20));
      ctx.fillStyle = accent(); ctx.font = `15px ${UIF}`; ctx.fillText(tr(post.place), 32, 260);
    }, 1.5);
    return canvasTex(200, 200, ctx => {   // MovieClip "people"
      ctx.fillStyle = '#000'; ctx.fillRect(0, 0, 200, 200); ctx.textBaseline = 'top';
      ctx.fillStyle = '#fff'; ctx.font = `${fz(20)}px ${SERIF}`;
      const name = wrapLines(ctx, tr(post.title) + '.', 166).slice(0, 2); name.forEach((l, i) => ctx.fillText(l, 18, 14 + i * 22));
      let y = 20 + name.length * 22;
      ctx.fillStyle = '#8c8c8c'; ctx.font = `${fz(15)}px ${SERIF}`;
      tr(post.subtitle).split(/(?<=\.)\s+/).forEach(l => wrapLines(ctx, l, 166).forEach(s => { if (y < 150) { ctx.fillText(s, 19, y); y += 18; } }));
      ctx.font = `10px ${UIF}`;   // ses projets avec nous, en bas de la fiche
      const projs = linkedProjects(post).map(p => tr(p.title).trim()).filter(Boolean);
      const pl = projs.length ? wrapLines(ctx, projs.join('  ·  '), 166).slice(0, 3) : [];
      const pTop = (tr(post.place) ? 174 : 188) - pl.length * 13 - 13;
      ctx.fillStyle = '#bbb'; ctx.font = `11px ${UIF}`;
      htmlToText(tr(post.body)).join(' ').split(/\s+/).length > 1 && wrapLines(ctx, htmlToText(tr(post.body)).join(' '), 166).slice(0, Math.max(0, Math.floor(((pl.length ? pTop - 6 : 176) - y) / 14))).forEach(s => { ctx.fillText(s, 19, y + 4); y += 14; });
      if (pl.length) {
        ctx.fillStyle = accent(); ctx.font = `8px ${UIF}`; ctx.fillText(ui('together').toUpperCase(), 19, pTop);
        ctx.fillStyle = '#e6e6e6'; ctx.font = `10px ${UIF}`; pl.forEach((l, i) => ctx.fillText(l, 19, pTop + 13 + i * 13));
      }
      if (tr(post.place)) { ctx.fillStyle = accent(); ctx.font = `11px ${UIF}`; ctx.fillText(tr(post.place).toUpperCase(), 19, 180); }
    });
  });
}

function netLabel(text, strong) {   // étiquette de ville, toujours tournée vers la caméra
  const fs = 20, padX = 7, c = document.createElement('canvas'), ctx = c.getContext('2d');
  ctx.font = `${strong ? 'bold ' : ''}${fs}px ${UIF}`; const w = Math.ceil(ctx.measureText(text).width) + 2 * padX, hh = fs + 10;
  c.width = w * 2; c.height = hh * 2; ctx.scale(2, 2);
  ctx.fillStyle = strong ? '#111' : 'rgba(255,255,255,.88)'; ctx.fillRect(0, 0, w, hh);
  ctx.font = `${strong ? 'bold ' : ''}${fs}px ${UIF}`; ctx.textBaseline = 'middle'; ctx.fillStyle = strong ? '#fff' : '#333'; ctx.fillText(text, padX, hh / 2 + 1);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: prepTex(new THREE.CanvasTexture(c)), transparent: true }));
  sp.center.set(0.5, 0); const H0 = 20; sp.scale.set(H0 * w / hh, H0, 1); sp.renderOrder = 2;
  return sp;
}
const netTip = document.createElement('div'); netTip.id = 'net-tip'; netTip.className = 'ui'; netTip.hidden = true; document.body.appendChild(netTip);
function showNetTip(n, x, y) {
  netTip.innerHTML = `<b>${escapeHTML(n.city || '')}</b>${n.titles.map(tt => `<span>${escapeHTML(tt)}</span>`).join('')}`;
  netTip.hidden = false; const r = netTip.getBoundingClientRect();
  netTip.style.left = Math.min(x + 14, W - r.width - 10) + 'px'; netTip.style.top = Math.max(10, y - r.height - 12) + 'px';
}
function hideNetTip() { netTip.hidden = true; }

/* ================================================================ Root3D / SectionObject3D */
class SectionObject3D {
  constructor(def, i) { this.def = def; this.idTable = i; this.container = new THREE.Group(); this.p = { x: 0, y: 0, z: 0 }; this.blockers = []; }
  async load(loader) {
    const m = CONTENT.models.find(x => x.id === this.def.model) || CONTENT.models[0];
    if (!m) return;
    const text = await modelText(m.file);
    const dir = m.file.slice(0, m.file.lastIndexOf('/') + 1);
    const collada = loader.parse(text, dir);
    const shape = collada.scene;
    const holder = new THREE.Group(); holder.add(shape);
    shape.traverse(o => {
      if (!o.isMesh) return;
      const conv = mat => {
        const map = mat.map || mat.emissiveMap || null;
        if (map) return new THREE.MeshBasicMaterial({ map });
        if (m.untextured === 'white') return new THREE.MeshLambertMaterial({ color: 0xf2f2f2 });
        if (m.untextured === 'black') return new THREE.MeshLambertMaterial({ color: 0x222222 });
        return new THREE.MeshBasicMaterial({ color: STYLE.locatorColor, wireframe: true });   // WireframeMaterial jaune de l'original
      };
      o.material = Array.isArray(o.material) ? o.material.map(conv) : conv(o.material);
      this.blockers.push(o);
    });
    const k = Math.max(0.05, Math.min(5, (+m.scale || 100) / 100));   // Taille (%) réglée dans Modèles 3D
    if (m.scaleMode === 'fit') {   // modèle d'une autre source : mis à la hauteur voulue et posé au sol
      holder.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(holder), size = box.getSize(new THREE.Vector3());
      const s = (m.height || 420) / Math.max(size.y, 1e-6) * k;
      holder.scale.setScalar(s); holder.updateMatrixWorld(true);
      const b2 = new THREE.Box3().setFromObject(holder), c = b2.getCenter(new THREE.Vector3());
      holder.position.set(-c.x, -b2.min.y, -c.z);
    } else {
      shape.scale.setScalar(100);   // Papervision ignorait l'unité Collada et affichait les fichiers Maya x100
      holder.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(holder);
      if (box.max.y - box.min.y > STYLE.object3DMaxHeight) holder.scale.setScalar(STYLE.object3DMaxHeight / (box.max.y - box.min.y));
      holder.scale.multiplyScalar(k);
    }
    const turn = new THREE.Group(); turn.rotation.y = (m.rotationY || 0) * D2R; turn.add(holder);
    this.container.add(turn);
  }
  place(i) {
    this.p.x = i * 5 * STYLE.object3DDistance;
    this.p.z = (Math.pow(-1, i + 1) - 1) * i * STYLE.object3DDistance;
    this.container.position.copy(pv(this.p.x, 0, this.p.z));
  }
}

/* ================================================================ PostView */
function makeSegments(points, material) { const g = new LineSegmentsGeometry(); g.setPositions(points); const l = new LineSegments2(g, material); l.computeLineDistances(); return l; }
class PostView {
  constructor(view, w, h, id) {
    this.view = view; this.id_ = id; this.width = w; this.height = h;
    this.thumb = { x: 0, y: 0, z: 0, rotX: 0, rotY: 0, rotZ: 0, scale: 1 };
    this.p2 = { x: 0, y: 0, z: 0, rotX: 0, rotY: 0, rotZ: 0 };
    this.group = new THREE.Group(); this.group.rotation.order = 'YXZ'; this.meshes = []; this.ready = false;
  }
  build(texFront, texBack, band = null) {
    const geo = new THREE.PlaneGeometry(this.width, this.height);
    this.setBand(band);
    const front = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: texFront, side: THREE.FrontSide }));
    const back = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: texBack, side: THREE.BackSide }));
    front.userData = { post: this, face: 'front' }; back.userData = { post: this, face: 'back' };
    this.width += STYLE.planeFrameDistance; this.height += STYLE.planeFrameDistance;
    const w = this.width / 2, h = this.height / 2;
    this.frame = makeSegments([-w, -h, 0, w, -h, 0, -w, -h, 0, -w, h, 0, w, -h, 0, w, h, 0, -w, h, 0, w, h, 0], lineMatFrame);
    this.group.add(front, back, this.frame); this.meshes.push(front, back); this.ready = true;
  }
  setPosition(x, y, z, rotY, rotX = 0, rotZ = 0) { Object.assign(this.p2, { x, y, z, rotY, rotX, rotZ }); }
  apply() {
    const th = this.thumb, g = this.group;
    g.position.set(...postLocal(th.x, th.y, th.z));
    g.rotation.y = -(th.rotY + 180) * D2R; g.rotation.x = -th.rotX * D2R; g.rotation.z = th.rotZ * D2R;
    g.scale.setScalar(Math.max(1e-4, th.scale));
    if (this.band) this.drawBand();
  }
  selectIt() { if (!this.frame) return; this.frame.material = lineMatSelect; delayedCall(0.8, () => { if (this.frame) this.frame.material = lineMatFrame; }); }
  turnAround(axis, degree) {
    const key = { x: 'rotX', y: 'rotY', z: 'rotZ' }[axis];
    Object.assign(this.thumb, { rotX: this.p2.rotX, rotY: this.p2.rotY, rotZ: this.p2.rotZ });
    to(this.thumb, STYLE.tween, { [key]: this.p2[key] + degree }, { ease: 'quartOut' });
  }
  moveToCamera(distance, time = 0) {   // la carte vient se placer devant la caméra (position finale de l'orbite)
    killTweensOf(this.thumb);
    const D = camD(), cl = { x: -D * Math.sin(P.degreeCamera), z: -D * Math.cos(P.degreeCamera) }, p = this.p2;
    const dx = p.x - cl.x, dz = p.z - cl.z, len = Math.hypot(dx, dz) || 1;
    to(this.thumb, time, { x: cl.x + dx * distance / len, y: p.y, z: cl.z + dz * distance / len, rotY: p.rotY + 720 }, { ease: 'quartOut' });
    return { cl, dir: { x: dx / len, z: dz / len } };
  }
  moveBack(time = 0) { killTweensOf(this.thumb); const p = this.p2; to(this.thumb, time, { x: p.x, y: p.y, z: p.z, rotX: p.rotX, rotY: p.rotY, rotZ: p.rotZ }, { ease: 'quartOut' }); }
  jump(x, y, z) { to(this.thumb, STYLE.tween / 2, { x, y, z }, { ease: 'quartOut', onComplete: () => to(this.thumb, STYLE.tween / 2, { x: this.p2.x, y: this.p2.y, z: this.p2.z }, { ease: 'quartOut' }) }); }
  /* Survol : le nom et la description montent du bas de la photo, dans un bandeau noir transparent, coupé au bord de la carte */
  setBand(band) {
    if (this.band) { this.group.remove(this.band.mesh); this.band.mesh.geometry.dispose(); this.band.mesh.material.map.dispose(); this.band.mesh.material.dispose(); killTweensOf(this.band); }
    this.band = null; if (!band) return;
    const w = this.cardW || this.width, h = this.cardH || this.height; this.cardW = w; this.cardH = h;
    const bh = band.bh * w / band.w;   // dessiné à la taille de base, la carte peut être agrandie (Taille des cartes)
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, bh), new THREE.MeshBasicMaterial({ map: band.tex, transparent: true, depthWrite: false, side: THREE.FrontSide }));
    mesh.position.z = 0.4; mesh.renderOrder = 1; mesh.visible = false; mesh.raycast = () => {};
    this.band = { mesh, bh, w, h, k: 0, drawn: -1 }; this.group.add(mesh);
  }
  hover(on) {
    const b = this.band; if (!b) return;
    to(b, on ? 0.85 : 0.5, { k: on ? 1 : 0 }, { ease: on ? 'expoOut' : 'quartOut' });   // départ vif, arrivée très douce, comme l'accueil et les fiches
  }
  drawBand() {
    const b = this.band; if (!b || b.k === b.drawn) return; b.drawn = b.k;
    const k = Math.max(0, Math.min(1, b.k)); b.mesh.visible = k > 0.002;
    const pos = b.mesh.geometry.attributes.position, uv = b.mesh.geometry.attributes.uv, y0 = -b.h / 2, y1 = y0 + k * b.bh;
    pos.setY(0, y1); pos.setY(1, y1); pos.setY(2, y0); pos.setY(3, y0); uv.setY(0, 1); uv.setY(1, 1); uv.setY(2, 1 - k); uv.setY(3, 1 - k);
    pos.needsUpdate = true; uv.needsUpdate = true;
  }
  dispose() { this.setBand(null); killTweensOf(this.thumb); this.group.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material && !LINE_MATS.includes(o.material)) { if (o.material.map) o.material.map.dispose(); o.material.dispose(); } }); }
}

/* ================================================================ Styles de disposition */
function focusFacing(view, id) {   // carrousel, éventail, spirale : la caméra se place face à la carte
  const pv2 = view.postViews[id]; if (!pv2) return false;
  let rot = pv2.p2.rotY * D2R; if (rot === 0) rot = 2 * Math.PI;
  let delta = (rot - P.degreeCamera) % (2 * Math.PI);
  if (delta > Math.PI) delta -= 2 * Math.PI; else if (delta < -Math.PI) delta += 2 * Math.PI;
  P.selected = id; P.cameraY = pv2.p2.y; P.degreeCamera += delta; pv2.selectIt();
  return true;
}
function focusFront(view, id, jumpFn) {   // arc, carte, mur : la caméra revient de face (angle π)
  P.degreeCamera %= 2 * Math.PI; P.actualDeg %= 2 * Math.PI;
  const pv2 = view.postViews[id]; if (!pv2) return;
  P.selected = id; P.degreeCamera = Math.PI;
  if (!pv2.ready) return;
  P.cameraY = pv2.p2.y; pv2.selectIt(); jumpFn(pv2);
}
const moveWobble = (view, dx, dy, k, axis = 'y') => view.postViews.forEach((pv2, i) => {
  if (!pv2.ready || isTweening(pv2.thumb)) return;
  const th = pv2.thumb, move = Math.pow(-1, i) * dx * (Math.random() * 2 + 1);
  th[axis] -= (th[axis] - pv2.p2[axis] + move) * ease(2 * k);
  if (axis === 'y') th.rotX -= (th.rotX - pv2.p2.rotX - dy) * ease(2 * k);
});
const LAYOUT = {
  carousel: {   // CarrousselleView3D
    preset(view) { view.angle = -2 * Math.PI / Math.max(1, view.n); view.postViews.forEach((p, i) => { const pos = this.position(view, p, i); p.setPosition(pos.x, pos.y, pos.z, pos.rotY); }); },
    position: (view, p, i) => ({ x: STYLE.planeDistance * Math.sin(view.angle * i + 2 * Math.PI), y: Math.pow(-1, i + 1) * Math.random() * STYLE.planeDisOrder + STYLE.planeDistance, z: STYLE.planeDistance * Math.cos(view.angle * i + 2 * Math.PI), rotY: view.angle * i / D2R + 540 }),
    keep: true, open: 'twoStep', lineEnd: p => [p.x / 3, p.y / 3, p.z / 3], lineStart: (p, th) => [th.x, th.y, th.z],
    focus: (view, id) => focusFacing(view, id),
    move: (view, dx, dy, k) => moveWobble(view, dx, dy, k),
  },
  arc: {        // LineView3D
    preset(view) { view.angle = Math.PI / (view.n + 1); },
    position(view, p, i) {
      const a = view.angle * (i + 1), S = STYLE;
      return { x: (S.planeDistance - Math.abs(a - Math.PI / 2) * 120 + p.width + Math.pow(-1, i + 1) * S.planeDisOrder / (Math.random() + 1)) * Math.cos(a),
        y: (S.planeDistance + p.height + Math.pow(-1, i + 1) * S.planeDisOrder / (Math.random() + 1)) * Math.sin(a),
        z: Math.pow(-1, Math.round(Math.random() * 5)) * S.planeDisOrder * Math.random(), rotY: 180 };
    },
    open: 'oneStep',
    focus: (view, id) => focusFront(view, id, p => {
      const xp = p.p2.x * (p.width / 2) / Math.hypot(p.p2.x, p.p2.y) + p.p2.x;
      p.jump(xp, p.p2.y * xp / (p.p2.x || 1e-6), p.p2.z); p.turnAround('y', 360);
    }),
    move: (view, dx, dy, k) => moveWobble(view, dx, dy, k),
  },
  fan: {        // CrossView3D
    preset(view) { view.angle = Math.PI / (Math.ceil(view.n / 2) + 1); view.container.position.y += 250 * (view.h / 78 > 1.6 ? 0.4 : 1); view.postViews.forEach((p, i) => { const pos = this.position(view, p, i); p.setPosition(pos.x, pos.y, pos.z, pos.rotY); }); },
    position(view, p, i) {
      const n = view.n, half = Math.ceil(n / 2), S = STYLE;
      const alpha = j => { const r = view.angle * (j + 1); return r - Math.cos(r) * view.angle / 2; };
      let ix = i, sx; if (i + 1 > half) { ix = 2 * Math.round(n / 2) - i - 1; sx = Math.pow(-1, ix); } else sx = Math.pow(-1, i + 1);
      const rx = S.planeDistance * 0.7 + p.width + sx * S.planeDisOrder / (Math.random() + 1) - Math.abs(alpha(ix) - Math.PI / 2) * 120;
      const iy = i + 1 > half ? 2 * Math.round(n / 2) - i - 1 : i;
      const ry = S.planeDistance * 0.7 + p.height + Math.pow(-1, iy) * S.planeDisOrder / (Math.random() + 1) + Math.abs(alpha(iy) - Math.PI / 2) * 120;
      const sz = i + 1 > half ? -1 : 1, dec = i % 2 === 1 ? S.planeDistance * 0.07 : -S.planeDistance * 0.07;
      return { x: rx * Math.cos(alpha(ix)), y: ry * Math.sin(alpha(iy)), z: sz * S.planeDistance * 0.3 + Math.pow(-1, Math.round(Math.random() * 5)) * S.planeDisOrder * Math.random() + dec, rotY: i + 1 > half ? 0 : 180 };
    },
    open: 'twoStep', lineEnd: p => [p.x / 5, p.y / 5, p.z / 5], lineStart: (p, th) => [th.x, th.y - p.height / 2, th.z],
    focus: (view, id) => { if (focusFacing(view, id)) view.postViews[id].turnAround('x', 720); },
    move(view, dx) { view.postViews.forEach((p, i) => { if (!p.ready) return; const th = p.thumb, mv = Math.pow(-1, i) * dx * (Math.random() * 2 + 1); th.y -= (th.y - p.p2.y + mv) * ease(2 * STYLE.cameraEaseSpeed); th.z -= (th.z - p.p2.z + mv) * ease(2 * STYLE.cameraEaseSpeed); }); },
  },
  map: {        // DistributeView3D : les cartes posées par ville
    offsets: [[250, 200], [0, -50], [400, 0], [-600, -100], [-500, 200]],
    preset(view) { view.angle = Math.PI / (view.n + 1); },
    coords(view, i) { return mapCoords(view.posts[i].location) || [((i % 5) - 2) * 160, ((i % 3) - 1) * 120]; },
    offset(i) { return this.offsets[i] || [(i % 2 ? 1 : -1) * (300 + 40 * i), ((i % 3) - 1) * 160]; },
    position(view, p, i) { const c = this.coords(view, i), d = this.offset(i), k = camK(view.def); return { x: c[0] + d[0], y: (STYLE.planeDistance + p.height + Math.pow(-1, i + 1) * STYLE.planeDisOrder / (Math.random() + 1)) * Math.sin(view.angle * (i + 1)) * Math.min(1, 0.2 + k), z: c[1] + d[1], rotY: 180 }; },   // caméra plus proche : les fiches descendent vers la carte
    open: 'oneStep', lineEnd(p, view, i) { const c = this.coords(view, i); return [c[0], 50, c[1]]; }, lineStart: (p, th) => [th.x, th.y - p.height / 2, th.z],
    focus: (view, id) => focusFront(view, id, p => { const xp = p.p2.x * (p.width / 2) / Math.hypot(p.p2.x, p.p2.y) + p.p2.x; p.jump(p.p2.x, p.p2.y * xp / (p.p2.x || 1e-6), p.p2.z); }),
    move(view, dx) { view.postViews.forEach((p, i) => { if (!p.ready || isTweening(p.thumb)) return; const th = p.thumb, mv = -Math.abs(dx * (Math.random() * 2 + 1)) / 2; th.x -= (th.x - p.p2.x + mv) * ease(2 * STYLE.cameraEaseSpeed); const inf = view.infos[i]; if (inf) inf.p.x = p.p2.x - p.width - 20 - (th.x - p.p2.x); }); },
  },
  spiral: {     // nouveau : une hélice qui monte autour de l'objet
    preset(view) { view.angle = -2 * Math.PI / 7; view.postViews.forEach((p, i) => { const pos = this.position(view, p, i); p.setPosition(pos.x, pos.y, pos.z, pos.rotY); }); },
    position(view, p, i) {
      const a = view.angle * i, step = Math.max(p.height * 0.55, 620 / Math.max(1, view.n - 1)), r = STYLE.planeDistance + 40;
      return { x: r * Math.sin(a + 2 * Math.PI), y: 140 + i * Math.min(step, 160) + Math.random() * STYLE.planeDisOrder * 0.2, z: r * Math.cos(a + 2 * Math.PI), rotY: a / D2R + 540 };
    },
    keep: true, open: 'twoStep', lineEnd: p => [0, p.y, 0], lineStart: (p, th) => [th.x, th.y, th.z],
    focus: (view, id) => focusFacing(view, id),
    move: (view, dx, dy, k) => moveWobble(view, dx, dy, k),
  },
  wall: {       // nouveau : une grille derrière l'objet, face au visiteur
    preset(view) { view.cols = Math.max(1, Math.ceil(Math.sqrt(view.n * (view.w > view.h ? 1.2 : 2.2)))); view.rows = Math.ceil(view.n / view.cols); },
    position(view, p, i) {
      const col = i % view.cols, row = Math.floor(i / view.cols), gx = p.width + 26, gy = p.height + 26;
      return { x: (col - (view.cols - 1) / 2) * gx, y: 120 + (view.rows - 1 - row) * gy + p.height / 2, z: -320 + Math.pow(-1, i) * Math.random() * STYLE.planeDisOrder * 0.3, rotY: 180 };
    },
    open: 'oneStep',
    focus: (view, id) => focusFront(view, id, p => p.jump(p.p2.x, p.p2.y, p.p2.z + 90)),
    move(view, dx) { view.postViews.forEach((p, i) => { if (!p.ready || isTweening(p.thumb)) return; const th = p.thumb, mv = Math.pow(-1, i) * dx * (Math.random() + .5); th.z -= (th.z - p.p2.z + mv) * ease(2 * STYLE.cameraEaseSpeed); }); },
  },
};

const _side = new THREE.Vector3(), _back = new THREE.Vector3();
class PostsView3D {
  constructor(section) {
    this.section = section; this.def = section.def;
    this.L = LAYOUT[this.def.layout] || LAYOUT.carousel;
    this.card = this.def.card;
    this.posts = P.data.posts.slice(); this.n = this.posts.length;
    this.tex = this.def.skills ? skillCard : CARD_TEX[this.card];   // savoir-faire : le texte d'abord, l'image l'illustre
    [this.w, this.h] = this.def.skills ? (this.card === 'text' ? CARDS.text.size : CARDS.image.size) : CARDS[this.card].size; this.k = cardK(this.def);   // textures à la taille d'origine, cartes agrandies ou réduites
    this.container = new THREE.Group(); this.container.position.copy(section.container.position); scene.add(this.container);
    this.postViews = this.posts.map((_, i) => new PostView(this, this.w * this.k, this.h * this.k, i));
    this.lines = []; this.following = new Set(); this.infos = []; this.alive = true;
    this.L.preset.call(this.L, this);
    if (this.def.layout === 'map' && this.def.network) this.buildNetwork();
    this.openPosts();
  }
  /* Réseau : tous les lieux d'intervention des contenus du site, reliés au(x) bureau(x) par des arcs au-dessus de la carte */
  buildNetwork() {
    const visible = new Set(SECTIONS.map(s => s.def.id)), nodes = new Map();
    const add = (l, title, base) => {
      if (!validLoc(l)) return;
      const k = (+l.lat).toFixed(1) + ',' + (+l.lon).toFixed(1);
      let n = nodes.get(k); if (!n) nodes.set(k, n = { loc: l, city: l.city || '', titles: [], base: false });
      if (title && !n.titles.includes(title)) n.titles.push(title); if (base) n.base = true;
    };
    postsOf(CONTENT, this.def.id).forEach(p => add(p.location, tr(p.title), true));
    CONTENT.posts.forEach(p => { if (p.published && visible.has(p.section) && p.section !== this.def.id) p.spots.forEach(l => add(l, tr(p.title))); });
    if (!nodes.size) return;
    lineMatNet.color.set(accent());
    const Y = 50, g = new THREE.Group(), list = [...nodes.values()], bases = list.filter(n => n.base);
    const dotGeo = new THREE.SphereGeometry(1, 14, 10);
    const mats = { on: new THREE.MeshBasicMaterial({ color: accent() }), base: new THREE.MeshBasicMaterial({ color: 0x111111 }) };
    this.net = { group: g, mats, items: [], hits: [], start: clock + (STYLE.planeSpeed > 0 ? 0.5 : -60), dispose: [dotGeo, mats.on, mats.base] };
    list.forEach(n => { n.xz = mapCoords(n.loc); });
    list.forEach(n => { n.from = n.base ? null : bases.length ? bases.map(b => [b, Math.hypot(mapCoords(b.loc)[0] - n.xz[0], mapCoords(b.loc)[1] - n.xz[1])]).sort((a, c) => a[1] - c[1])[0][0] : null; n.d = n.from ? Math.hypot(mapCoords(n.from.loc)[0] - n.xz[0], mapCoords(n.from.loc)[1] - n.xz[1]) : 0; });
    list.sort((a, b) => (b.base - a.base) || a.d - b.d);
    /* le cœur du réseau : le lieu qui a le plus de voisins proches, et le centre de ce groupe (l'Europe, en général) */
    const R = 70; let best = null, bestN = -1;
    list.forEach(n => { const near = list.filter(o => Math.hypot(o.xz[0] - n.xz[0], o.xz[1] - n.xz[1]) < R); if (near.length > bestN) { bestN = near.length; best = near; } });
    const fx = best.reduce((a, o) => a + o.xz[0], 0) / best.length, fz = best.reduce((a, o) => a + o.xz[1], 0) / best.length;
    const focus = new THREE.Object3D(); focus.position.set(...postLocal(fx, Y, fz)); g.add(focus); this.net.focus = focus;
    const labeled = [];   // [x, z, seuil] : une étiquette s'affiche tant que l'échelle reste sous son seuil (en zoomant, les voisines apparaissent)
    list.forEach((n, i) => {
      const [x, z] = n.xz, delay = n.base ? 0 : 0.15 + i * 0.07;
      const dot = new THREE.Mesh(dotGeo, n.base ? mats.base : mats.on); dot.scale.setScalar(n.base ? 7 : 4 + Math.min(3, n.titles.length)); dot.position.set(...postLocal(x, Y, z)); g.add(dot);
      dot.userData = { netNode: n }; this.net.hits.push(dot);
      let arc = null, segs = 0;
      if (n.from) {
        const [ax, az] = mapCoords(n.from.loc), top = Y + 18 + n.d * 0.32, cy = 2 * top - Y, mx = (ax + x) / 2, mz = (az + z) / 2;
        segs = Math.max(12, Math.min(48, Math.round(n.d / 6)));
        const pt = t2 => { const u = 1 - t2; return postLocal(u * u * ax + 2 * u * t2 * mx + t2 * t2 * x, u * u * Y + 2 * u * t2 * cy + t2 * t2 * Y, u * u * az + 2 * u * t2 * mz + t2 * t2 * z); };
        const pos = []; for (let k = 0; k < segs; k++) pos.push(...pt(k / segs), ...pt((k + 1) / segs));
        const geo = new LineSegmentsGeometry(); geo.setPositions(pos); arc = new LineSegments2(geo, lineMatNet); arc.computeLineDistances(); geo.instanceCount = 0; g.add(arc);
      }
      let label = null, thr = Infinity;   // une voisine plus importante écrite trop près cache l'étiquette ; en zoomant, la place se libère
      if (n.city) {
        for (const o of labeled) { const need = Math.max(Math.abs(o[0] - x) / 80, Math.abs(o[1] - z) / 22); if (need < o[2]) thr = Math.min(thr, need); }
        if (thr > 0.06) { label = netLabel(n.city.toUpperCase() + (n.titles.length > 1 && !n.base ? ' · ' + n.titles.length : ''), n.base); label.position.set(...postLocal(x, Y + 9, z)); g.add(label); labeled.push([x, z, thr]); }
      }
      this.net.items.push({ dot, arc, segs, label, thr, delay, base: n.base, ds: dot.scale.x, ls: label ? label.scale.clone() : null, x, z });
    });
    this.container.add(g);
  }
  async openPosts() {
    this.loading = true;
    for (let i = 0; i < this.n; i++) {
      let tex; try { tex = await this.tex(this.posts[i], this.w, this.h); } catch (e) { continue; }
      if (!this.alive) return;
      this.postViews[i].build(tex[0], tex[1], tex[2]);
      this.animeOpenPost(this.postViews[i], i);
      if (STYLE.planeSpeed > 0) { const until = clock + POST_STAGGER; while (clock < until) { await new Promise(r => requestAnimationFrame(r)); if (!this.alive) return; } }
    }
    this.loading = false;
  }
  animeOpenPost(p, i) {
    const L = this.L;
    if (!L.keep) { const pos = L.position.call(L, this, p, i); p.setPosition(pos.x, pos.y, pos.z, pos.rotY); }
    const q = p.p2;
    Object.assign(p.thumb, { x: q.x / 2, y: 10, z: q.z / 2, rotY: q.rotY, rotX: 90 - 2 * 360, rotZ: 0, scale: 0.5 });
    const timeAnim = 2 * STYLE.planeSpeed;
    let pending;
    const done = () => { if (--pending <= 0) { this.following.delete(p); if (L.lineEnd) this.followLine(p, i); } };
    if (L.open === 'twoStep') {
      pending = 2;
      to(p.thumb, timeAnim, { y: q.y, rotX: 0 }, { delay: STYLE.planeSpeed / 3, ease: 'expoOut', onComplete: done });
      to(p.thumb, timeAnim, { x: q.x, z: q.z, rotY: q.rotY, scale: 1 }, { ease: 'circOut', onComplete: done });
    } else { pending = 1; to(p.thumb, timeAnim, { x: q.x, y: q.y, z: q.z, rotY: q.rotY, rotX: 0, scale: 1 }, { ease: 'circOut', onComplete: done }); }
    p.apply(); this.container.add(p.group);
    if (L.lineEnd) { this.following.add(p); this.followLine(p, i); }
    if (this.def.layout === 'map' && this.card === 'place') this.openInfo(p, i, timeAnim);
  }
  followLine(p, i) {
    const a = this.L.lineStart(p, p.thumb), b = this.L.lineEnd.call(this.L, p.p2, this, i);
    const pts = [...postLocal(...a), ...postLocal(...b)];
    let l = this.lines[i]; if (!l) { l = this.lines[i] = makeSegments(pts, lineMatCenter); this.container.add(l); } else l.geometry.setPositions(pts);
  }
  async openInfo(p, i, timeAnim) {   // la fiche du lieu à côté de la carte
    const tex = await infoTexture(this.posts[i], 'place'); if (!this.alive) return;
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(165, 130), new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide }));
    mesh.userData = { post: p, face: 'front' }; mesh.visible = false;
    const info = { mesh, p: { x: p.p2.x - p.width - 20 - 165, y: p.p2.y, z: p.p2.z, rotY: 180 } };
    this.infos[i] = info; p.meshes.push(mesh); this.container.add(mesh);
    to(info.p, STYLE.tween / 4, { x: p.p2.x - p.width - 20 }, { delay: timeAnim, ease: 'quartOut' });
    delayedCall(timeAnim, () => { mesh.visible = true; });
  }
  async openPost3D() {   // LineView3D.openPost3D, généralisé à tous les styles
    const id = P.selected, p = this.postViews[id]; if (!p || !p.ready) return;
    const { cl, dir } = p.moveToCamera(60, STYLE.tween);
    if (!this.focusInfo) { this.focusInfo = { mesh: new THREE.Mesh(new THREE.PlaneGeometry(90, 90), new THREE.MeshBasicMaterial({ side: THREE.DoubleSide })), p: { x: 0, y: 0, z: 0, rotY: 150 } }; this.container.add(this.focusInfo.mesh); }
    const info = this.focusInfo; info.mesh.visible = false;
    const tex = await infoTexture(this.posts[id], 'person'); if (!this.alive) return;
    if (info.mesh.material.map) info.mesh.material.map.dispose();
    info.mesh.material.map = tex; info.mesh.material.needsUpdate = true;
    const s = this.h * this.k / 90; info.mesh.scale.setScalar(s);
    delayedCall(STYLE.tween, () => {   // la fiche sort de derrière le portrait et se pose à côté, dans le même plan
      if (!P.postOpen || P.selected !== id) return;
      info.target = p; info.k = 0; info.mesh.visible = true;
      killTweensOf(info); to(info, STYLE.tween / 4, { k: 1 }, { ease: 'quartOut' });
    });
  }
  closePost3D() { const p = this.postViews[P.selected]; if (p) p.moveBack(STYLE.tween / 2); if (this.focusInfo) { killTweensOf(this.focusInfo); this.focusInfo.target = null; this.focusInfo.mesh.visible = false; } }
  movePosts(dx, dy, k) { this.L.move.call(this.L, this, dx, dy, k); }
  resetPostPosition() {
    this.postViews.forEach((p, i) => {
      if (!p.ready || this.following.has(p)) return;
      killTweensOf(p.thumb);
      const pos = this.L.position.call(this.L, this, p, i); p.setPosition(pos.x, pos.y, pos.z, pos.rotY);
      Object.assign(p.thumb, { x: p.p2.x, y: p.p2.y, z: p.p2.z, rotX: 0, rotY: p.p2.rotY, rotZ: 0, scale: 1 });
      if (this.L.lineEnd) this.followLine(p, i);
      const inf = this.infos[i]; if (inf) Object.assign(inf.p, { x: p.p2.x - p.width - 20, y: p.p2.y, z: p.p2.z });
    });
  }
  checkPostSelected() {
    if (!['carousel', 'spiral'].includes(this.def.layout)) return;   // l'éventail n'a que deux orientations (0 et 180°) : l'angle de la caméra ne désigne pas une carte
    const deg = ((Math.round(P.degreeCamera / D2R) % 360) + 360) % 360;
    const gap = p => { const r = ((p.p2.rotY % 360) + 360) % 360; return Math.min(Math.abs(r - deg), 360 - Math.abs(r - deg)); };
    let best = P.selected, diff = this.postViews[P.selected] && this.postViews[P.selected].ready ? gap(this.postViews[P.selected]) : Infinity;   // à égalité, la carte courante reste sélectionnée
    this.postViews.forEach((p, i) => { if (!p.ready) return; const d = gap(p); if (d < diff - 0.5) { diff = d; best = i; } });
    P.selected = best;
  }
  goNext() { return P.selected + 1 >= this.n ? 0 : P.selected + 1; }
  goPrev() { return P.selected - 1 <= -1 ? this.n - 1 : P.selected - 1; }
  focus(id) { if (this.n) this.L.focus.call(this.L, this, id); }
  update() {
    if (this.net) {
      /* points et étiquettes rapetissent quand on zoome : on voit les liaisons de près sans que tout grossisse */
      const want = Math.max(0.2, Math.pow(Math.min(1, STYLE.cameraDistanceProportion / zoomBase), 0.85));
      const prev = this.net.sc ?? want, sc = Math.abs(want - prev) < 0.002 ? want : prev + (want - prev) * ease(STYLE.cameraEaseSpeed);   // suit le mouvement de la caméra
      for (const it of this.net.items) {   // les arcs partent du bureau et se dessinent l'un après l'autre
        const k = Math.max(0, Math.min(1, (clock - this.net.start - it.delay) / 0.9)), e = 1 - (1 - k) * (1 - k);
        if (it.arc) it.arc.geometry.instanceCount = Math.round(e * it.segs);
        const on = it.base || k >= 1; it.dot.visible = on;
        if (it.label) it.label.visible = on && sc <= it.thr + 1e-6;
        if (this.net.sc !== sc) { it.dot.scale.setScalar(it.ds * sc); if (it.label) { it.label.scale.copy(it.ls).multiplyScalar(sc); it.label.position.y = 50 + 9 * sc; } }
      }
      this.net.sc = sc;
    }
    for (const p of this.postViews) if (p.ready) p.apply();
    this.following.forEach(p => this.followLine(p, p.id_));
    this.infos.forEach(inf => { if (!inf) return; inf.mesh.position.set(...postLocal(inf.p.x, inf.p.y, inf.p.z)); inf.mesh.rotation.y = -(inf.p.rotY + 180) * D2R; });
    if (this.focusInfo && this.focusInfo.target) {   // collée au portrait : même orientation, posée sur sa droite
      const f = this.focusInfo, g = f.target.group, k = f.k ?? 1;
      f.mesh.quaternion.copy(g.quaternion);
      _side.set(1, 0, 0).applyQuaternion(g.quaternion).multiplyScalar((f.target.width / 2 + 45 * f.mesh.scale.x + 3) * k * g.scale.x);
      _back.set(0, 0, -1).applyQuaternion(g.quaternion).multiplyScalar(1.5 * (1 - k));
      f.mesh.position.copy(g.position).add(_side).add(_back);
    }
  }
  async retexture() {   // après un passage négatif / positif
    if (this.net) { lineMatNet.color.set(accent()); this.net.mats.on.color.set(accent()); }
    const swap = (mesh, tex) => { const old = mesh.material.map; mesh.material.map = tex; mesh.material.needsUpdate = true; return old; };
    for (let i = 0; i < this.n; i++) {
      const pv2 = this.postViews[i]; if (!pv2.ready) continue;
      let tex; try { tex = await this.tex(this.posts[i], this.w, this.h); } catch (e) { continue; }
      if (!this.alive) { [tex[0], tex[1], tex[2] && tex[2].tex].forEach(x => x && x.dispose()); return; }
      const k = pv2.band ? pv2.band.k : 0;
      pv2.setBand(tex[2] || null); if (pv2.band && k) { pv2.band.k = k; pv2.hover(hovered === pv2); }
      new Set([swap(pv2.meshes[0], tex[0]), swap(pv2.meshes[1], tex[1])]).forEach(x => x && x.dispose());
      const inf = this.infos[i];
      if (inf) { const it = await infoTexture(this.posts[i], 'place'); if (!this.alive) { it.dispose(); return; } const o = swap(inf.mesh, it); if (o) o.dispose(); }
    }
    if (this.focusInfo && this.focusInfo.mesh.material.map && P.postOpen) { const it = await infoTexture(this.posts[P.selected], 'person'); if (this.alive) { const o = swap(this.focusInfo.mesh, it); if (o) o.dispose(); } }
  }
  get meshes() { return this.postViews.flatMap(p => p.meshes); }
  destroy() {
    this.alive = false;
    this.postViews.forEach(p => p.dispose());
    this.lines.forEach(l => l && l.geometry.dispose());
    this.infos.forEach(i => { if (i) { killTweensOf(i.p); i.mesh.material.map && i.mesh.material.map.dispose(); i.mesh.material.dispose(); } });
    if (this.focusInfo) { this.focusInfo.mesh.material.map && this.focusInfo.mesh.material.map.dispose(); this.focusInfo.mesh.material.dispose(); }
    if (this.net) { this.net.items.forEach(it => { if (it.arc) it.arc.geometry.dispose(); if (it.label) { it.label.material.map.dispose(); it.label.material.dispose(); } }); this.net.dispose.forEach(d => d.dispose()); }
    hideNetTip();
    scene.remove(this.container);
  }
}

/* ================================================================ StageView3D */
let sections = [];
let postsView = null;
let easeSpeed = STYLE.cameraEaseSpeed;
let isClicking = false, closeTurn = false;
let mouseX = 0, mouseY = 0, prevX = 0, prevY = 0;
let started = false, inputEnabled = false;
const curSec = () => sections[P.currentSection];
function setUpper() { const h = STYLE.cameraHeight; P.cameraY = P.cameraY + h / 7 <= 3 * h ? P.cameraY + h / 7 : h * 3; }
function setDowner() { const h = STYLE.cameraHeight; P.cameraY = P.cameraY - h / 7 >= h / 7 ? P.cameraY - h / 7 : h / 7; }
/* Réglages par section (back-office) : distance de la caméra et taille des cartes, en %. La carte du monde se regarde de plus près. */
const CAM_DEFAULT = { map: 58 };
const camK = (def = (curSec() || {}).def || {}) => Math.max(0.3, Math.min(2.5, (+def.camera || CAM_DEFAULT[def.layout] || 100) / 100));
const camD = () => STYLE.cameraDistance * camK();
const camTargetY = () => STYLE.cameraTargetHeight * (((curSec() || {}).def || {}).layout === 'map' ? camK() * 0.62 : 1);
const camHeightBase = () => STYLE.cameraHeight * (((curSec() || {}).def || {}).layout === 'map' ? camK() * 1.6 : 1);
/* Carte du monde zoomée : la caméra glisse vers le groupe de lieux le plus dense (l'Europe) et garde le même angle de vue,
   au-dessus de la carte. Au zoom de base, rien ne change : centre de la section, hauteurs d'origine. */
const _fw = new THREE.Vector3();
function mapZoomT() {   // 0 au zoom de base, vers 1 au plus près
  if (!isMap() || STYLE.cameraDistanceProportion >= zoomBase) return 0;
  return Math.min(1, (1 - STYLE.cameraDistanceProportion / zoomBase) * 1.25);
}
function mapFocus() {   // le cœur du réseau, en coordonnées Papervision
  const f = postsView && postsView.net && postsView.net.focus; if (!f) return null;
  f.getWorldPosition(_fw); return { x: _fw.x, y: _fw.y, z: -_fw.z };
}
function orbitCenter() {
  const s = curSec(), t = mapZoomT(), f = t ? mapFocus() : null;
  const ty0 = camTargetY();
  if (!f) return { x: s.p.x, z: s.p.z, ty: ty0 };
  return { x: s.p.x + (f.x - s.p.x) * t, z: s.p.z + (f.z - s.p.z) * t, ty: ty0 + (f.y - ty0) * t };
}
const camHeight = () => {   // sur la carte zoomée, la caméra descend avec la distance : même angle, jamais sous la carte
  if (!isMap()) return camHeightBase();
  const r = Math.min(1, STYLE.cameraDistanceProportion / zoomBase), ty = orbitCenter().ty;
  return ty + (camHeightBase() - camTargetY()) * Math.pow(r, 0.55);   // descend moins vite que la distance : on voit l'Europe de plus en plus d'en haut
};
const cardK = def => Math.max(0.4, Math.min(2.5, (+def.cardScale || 100) / 100));
function placeCameraOnOrbit() { const s = orbitCenter(); cam.x = s.x + camD() * Math.sin(P.actualDeg); cam.z = s.z + camD() * Math.cos(P.actualDeg); }
function changeSection3D() {
  sections.forEach((s, i) => { if (i === P.currentSection) { if (!s.container.parent) scene.add(s.container); } else if (s.container.parent) scene.remove(s.container); });
  isClicking = false; closeTurn = false; canvas.classList.remove('dragging');
  hovered = null;
  if (postsView) postsView.destroy();
  postsView = new PostsView3D(curSec());
  focusPost(P.selected);
  P.actualDeg = P.degreeCamera;
  cameraChangeSection();
}
function cameraChangeSection() {   // comme StageView3D v10 : Parameters.cameraGoto à chaque section et à chaque nouvelle sélection
  const s = orbitCenter(); P.cameraY = camHeight();
  cameraGoto(camD() * Math.sin(P.degreeCamera) + s.x, P.cameraY, camD() * Math.cos(P.degreeCamera) + s.z, s.x, s.ty, s.z, STYLE.cameraSpeed);
}
function focusPost(i) { P.selected = i; if (postsView) postsView.focus(i); }
function selectPost(dir) {
  if (!postsView || !postsView.n) return;
  closeTurn = true; postsView.checkPostSelected(); easeSpeed = STYLE.cameraKeyboardSpeed;
  focusPost(dir === 'NEXT' ? postsView.goNext() : postsView.goPrev());
}
function setCamera() { const hmax = 1000, max = 680, div = STYLE.cameraDistanceProportion / (hmax - 720); STYLE.cameraDistance = Math.round((H < max ? hmax - H : hmax - max) * div); }
function onStageResize3D() {
  closeTurn = false; setCamera(); if (!started) return;
  const s = orbitCenter();
  if (P.postOpen && P.section.def.open === 'focus3d' && postsView && postsView.postViews[P.selected]) postsView.postViews[P.selected].moveToCamera(100, 0);
  cameraOnlyGoto(s.x + camD() * Math.sin(P.actualDeg), isMap() ? P.cameraY : cam.y, s.z + camD() * Math.cos(P.actualDeg), STYLE.cameraSpeed / 2);
  if (isMap()) cameraTarget(s.x, s.ty, s.z, STYLE.cameraSpeed / 2);
}
function renderMachine() {
  if (!inputEnabled) { if (Math.abs(cam.y - P.cameraY) > 0.007 && !isTweening(cam)) cam.y -= (cam.y - P.cameraY) * ease(STYLE.cameraEaseSpeed); return; }
  if (isClicking) {
    easeSpeed = STYLE.cameraEaseSpeed;
    const deg = P.degreeCamera;
    P.degreeCamera += (mouseX - prevX) / 150;
    P.actualDeg -= (P.actualDeg - deg) * ease(easeSpeed);
    placeCameraOnOrbit();
    P.cameraY += (mouseY - prevY) * 2;
    const h = STYLE.cameraHeight, lo = isMap() ? orbitCenter().ty + 12 : h / 3; if (P.cameraY < lo) P.cameraY = lo; else if (P.cameraY > h * 4) P.cameraY = 4 * h;
    cam.y -= (cam.y - P.cameraY) * ease(easeSpeed);
    if (STYLE.animationMode && postsView) postsView.movePosts((prevX - mouseX) / Math.max(frames, .25), (prevY - mouseY) / Math.max(frames, .25), easeSpeed);
    prevX = mouseX; prevY = mouseY;
  } else if (closeTurn) {
    if (Math.abs(P.actualDeg - P.degreeCamera) <= 0.007) closeTurn = false;
    P.actualDeg -= (P.actualDeg - P.degreeCamera) * ease(STYLE.cameraEaseSpeed);
    placeCameraOnOrbit();
    cam.y -= (cam.y - P.cameraY) * ease(easeSpeed);
    if (STYLE.animationMode && postsView) postsView.movePosts(0, 0, STYLE.cameraEaseSpeed);
  } else if (Math.abs(cam.y - P.cameraY) > 0.007) cam.y -= (cam.y - P.cameraY) * ease(STYLE.cameraEaseSpeed);
}
function mainEntrance() {   // zoom d'entrée : focale de 6 à 2 en 1 s
  const time = 1; cam.zoom = 6;
  const p0 = postsView && postsView.postViews[0] ? postsView.postViews[0].p2.y || STYLE.planeDistance : STYLE.planeDistance;
  cam.y = p0 + 100; camTarget.y = p0 + 100;
  cameraTarget(camTarget.x, camTargetY(), camTarget.z, time);
  inputEnabled = false;
  to(cam, time, { zoom: CAMERA.zoom }, { ease: 'expoOut' });
  setTimeout(() => { inputEnabled = true; }, time * 1000 + 50);   // hors des tweens : un clic de menu pendant l'entrée ne bloque plus le clavier
}
const _p = new THREE.Vector3(), _t = new THREE.Vector3(), _dir = new THREE.Vector3();
let eyeK = 1;
function updateCamera() {   // caméra Papervision : focale en pixels (zoom x focus), oeil "focus" unités derrière la caméra
  _p.copy(pv(cam.x, cam.y, cam.z)); _t.copy(pv(camTarget.x, camTarget.y, camTarget.z));
  _dir.subVectors(_t, _p); if (_dir.lengthSq() < 1e-6) _dir.set(0, 0, -1); _dir.normalize();
  /* l'œil est "focus" unités derrière la caméra ; sur la carte zoomée cet écart rétrécit avec le zoom, sinon il bornerait l'approche */
  const fk = isMap() ? Math.min(1, STYLE.cameraDistanceProportion / zoomBase) : 1;
  eyeK += Math.abs(fk - eyeK) < 1e-3 ? fk - eyeK : (fk - eyeK) * ease(STYLE.cameraEaseSpeed);
  camera.position.copy(_p).addScaledVector(_dir, -CAMERA.focus * eyeK); camera.lookAt(_t);
  const narrow = Math.min(1, W / 900);
  const fov = 2 * Math.atan(H / 2 / (cam.zoom * CAMERA.focus * narrow)) / D2R;
  if (Math.abs(camera.fov - fov) > 1e-4) { camera.fov = fov; camera.updateProjectionMatrix(); }
}
function resizeViewport() { W = window.innerWidth; H = window.innerHeight; renderer.setSize(W, H, false); camera.aspect = W / H; camera.updateProjectionMatrix(); LINE_MATS.forEach(m => m.resolution.set(W, H)); }

/* ================================================================ Interface 2D */
const menu = document.getElementById('menu'), sloganEl = document.getElementById('slogan'), langsEl = document.getElementById('langs');
let menuButtons = [];
function buildMenu() {
  menu.innerHTML = '';
  menuButtons = SECTIONS.map((s, i) => {
    const li = document.createElement('li'), b = document.createElement('button');
    b.type = 'button'; b.textContent = tr(s.def.name);
    b.addEventListener('click', () => { if (i !== P.currentSection && inputEnabled) getToSectionView(i); });
    li.appendChild(b); menu.appendChild(li); return b;
  });
  menu.style.setProperty('--n', SECTIONS.length);
  changeActiveButton();
}
function changeActiveButton() { menuButtons.forEach((b, i) => b.setAttribute('aria-current', String(i === P.currentSection))); }
function openMenu() {
  menuButtons.forEach((b, i) => b.animate([{ transform: 'translateX(-260px)', opacity: .5 }, { transform: 'none', opacity: 1 }], { duration: (i + 1) * 200, easing: 'cubic-bezier(.17,.84,.44,1)', fill: 'backwards' }));
  menu.hidden = false; langsEl.hidden = false;
  setTimeout(() => menu.classList.add('ready'), (SECTIONS.length + 1) * 200);
}
/* La fiche 2D garde ses proportions de 2008 (bandes de 355 px), agrandies de 20 %, et se réduit quand l'écran est trop bas.
   Sur un écran étroit, les colonnes de texte prennent la largeur de l'écran. */
const POST_SCALE = 1.44;
function textGeom(mode) {
  const full = mode === 'project' ? { width: 522, x: 79, colW: 362 } : { width: 389, x: 17, colW: 353 };
  const avail = (W - 2 * STYLE.margin) / (post2D.scale || 1);
  if (avail >= full.width) return full;
  const width = Math.max(240, Math.floor(avail)), pad = mode === 'project' ? 26 : 17;
  return { width, x: pad, colW: width - 2 * pad };
}
function fitPost2D() {
  const short = H <= 420;   // téléphone couché : la signature se réduit à sa première ligne, la fiche prend la hauteur
  document.body.classList.toggle('post-short', short && P.postOpen);
  const top = sloganEl.offsetTop + sloganEl.offsetHeight + (short ? 1 : 2) * STYLE.margin, need = post2D.height + 12;
  const reserve = short ? 24 : (menu.offsetHeight || 90) + 70;   // sous la fiche : le menu et une bande blanche qui referme la fiche au clic
  const s = Math.max(short ? 0.4 : 0.5, Math.min(POST_SCALE, (H - top - reserve) / need));
  post2D.scale = s;
  post2dEl.style.top = top + 'px';
  post2dEl.style.transform = s !== 1 ? `scale(${s.toFixed(3)})` : '';
  post2dEl.style.width = s !== 1 ? Math.ceil((W - STYLE.margin) / s) + 'px' : '';
  post2dEl.style.height = Math.ceil(need) + 'px';
  document.body.classList.toggle('post-cramped', H - (top + need * s) < menu.offsetHeight + 60);
}
function setMenuPosition() {
  if (!P.postOpen) document.body.classList.remove('post-cramped', 'post-short');
  if (P.postOpen && post2D.open && post2D.height > 100) {
    let y = sloganEl.offsetTop + sloganEl.offsetHeight + post2D.height * (post2D.scale || 1) + 2 * STYLE.margin + 30;
    y = Math.min(y, H - menu.offsetHeight - 52);   // au-dessus de la ligne des langues
    menu.style.left = STYLE.margin + 'px'; menu.style.top = y + 'px';
  } else if (W <= 700 || H <= 520) {   // téléphone : le menu se pose au-dessus des langues, en bas à gauche
    menu.style.left = STYLE.margin + 'px'; menu.style.top = Math.round(H - (menu.offsetHeight || 86) - 56) + 'px';
  } else { menu.style.left = 3 * STYLE.margin + 'px'; menu.style.top = Math.round(H / 1.4) + 'px'; }
}
/* Logo par défaut : anneau, disque noir, lettres réglées dans Typographie › Logo rond */
const ringLogo = (ring, invert = false) => ringLogoURL(ring, CONTENT.settings, invert);
/* Logo du site, logo de l'accueil et favicon : la même image, dessinée avec la police du rôle « Logo rond » */
function drawLogos() {
  const s = CONTENT.settings, accent = s.accent || '#ffcc00';
  const logo = s.logo ? url(s.logo) : ringLogo(negMode ? '#ffffff' : accent, negMode);   // en négatif, l'image est pré-inversée : la page inversée la remet à l'endroit
  ['logo', 'home-logo'].forEach(id => { const el = document.getElementById(id); if (el) { el.src = logo; el.classList.toggle('raw', !s.logo); } });
  setFavicon(s.logo ? logo : (negMode ? ringLogo(accent) : logo));
}
function setFavicon(href) {
  let l = document.querySelector('link[rel~="icon"]'); if (!l) { l = document.createElement('link'); l.rel = 'icon'; document.head.appendChild(l); }
  if (l.getAttribute('href') !== href) { l.removeAttribute('type'); l.href = href; }
}
function renderTexts() {
  const s = CONTENT.settings;
  applyTypo();
  document.documentElement.lang = LANG;
  document.documentElement.classList.toggle('neg', negMode);
  document.title = s.name || 'Hand Coded';
  const tl = (s.taglines && (s.taglines[LANG] || s.taglines.en)) || [];
  const sloganHTML = tl.length ? `<b class="wm">${escapeHTML(tl[0])}</b>${tl.slice(1).map(l => `<span>${escapeHTML(l)}</span>`).join('')}` : escapeHTML(s.name);
  sloganEl.innerHTML = tl.length ? sloganHTML.replace('<b class="wm">', `<b class="wm" role="link" tabindex="0" title="${escapeHTML(ui('homeLink'))}">`) : sloganHTML;
  document.getElementById('home-slogan').innerHTML = sloganHTML;
  /* Logo par défaut : anneau à la couleur d'accent sur fond blanc, anneau blanc sur fond noir. Il échappe à l'inversion (classe raw). */
  drawLogos();
  if (!s.logo && document.fonts) { const lf = typoOf(s, 'logo'), spec = `${lf.italic ? 'italic ' : ''}${lf.weight || 400} 76px ${lf.css}`; if (!document.fonts.check(spec)) document.fonts.load(spec).then(() => { if (!CONTENT.settings.logo) drawLogos(); }).catch(() => {}); }
  const canToggle = s.negativeToggle !== false;
  ['logo', 'home-logo'].forEach(id => {   // le logo du site et celui de l'accueil basculent tous deux jour / nuit
    const logoEl = document.getElementById(id); if (!logoEl) return;
    logoEl.classList.toggle('toggle', canToggle);
    if (canToggle) { logoEl.setAttribute('role', 'button'); logoEl.tabIndex = 0; logoEl.setAttribute('aria-pressed', String(negMode)); logoEl.alt = logoEl.title = ui(negMode ? 'toPos' : 'toNeg'); }
    else { logoEl.removeAttribute('role'); logoEl.removeAttribute('tabindex'); logoEl.removeAttribute('aria-pressed'); logoEl.alt = ''; logoEl.removeAttribute('title'); }
  });
  const bs = document.getElementById('bs');   // la home "bullshit slogan" du site Fat-Man
  bs.placeholder = tr(s.home.placeholder); bs.setAttribute('aria-label', ui('bsLabel')); fitSlogan();
  document.getElementById('bs-eg').textContent = tr(s.home.example);
  if (document.getElementById('bs-sent').textContent) document.getElementById('bs-sent').textContent = ui('sent');
  const off = document.getElementById('offices'); off.innerHTML = '';
  (s.offices || []).forEach(o => {
    const el = document.createElement('section');
    el.innerHTML = `<h3>${escapeHTML(tr(o.name))}</h3>${(o.lines || []).map(l => `<p>${escapeHTML(l)}</p>`).join('')}${o.mail ? `<p><a href="mailto:${escapeHTML(o.mail)}">${escapeHTML(o.mail)}</a></p>` : ''}`;
    off.appendChild(el);
  });
  (s.social || []).forEach(so => { if (!so.url) return; const el = document.createElement('section'); el.innerHTML = `<h3>${escapeHTML(so.label)}</h3><p><a href="${escapeHTML(so.url)}" target="_blank" rel="noopener">${escapeHTML(so.url.replace(/^https?:\/\/(www\.)?/, ''))}</a></p>`; off.appendChild(el); });
  const figs = homeFigures(), num = f => `<b data-v="${escapeHTML(f.value)}">${escapeHTML(f.value)}</b> ${escapeHTML(f.label)}`;
  if (figs.length) { const el = document.createElement('section'); el.className = 'fig'; el.innerHTML = `<h3>${num(figs[0])}</h3>${figs.slice(1).map(f => `<p>${num(f)}</p>`).join('')}`; off.appendChild(el); }   // les chiffres du studio, en colonne à côté des contacts
  home.classList.toggle('no-ticker', !!(s.home && s.home.tickerOff)); drawFigures();
  enterBtn.textContent = tr(s.home.enter) || ui('enter');
  renderReel(); hvLabels();
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = ui(el.dataset.i18n); });
  document.getElementById('kb-toggle').setAttribute('aria-label', ui('keys'));
  pgPrev.setAttribute('aria-label', ui('prev')); pgNext.setAttribute('aria-label', ui('next'));
  const langs = s.langs && s.langs.length ? s.langs : LANGS;
  [langsEl, document.getElementById('home-langs')].forEach(box => {
    box.innerHTML = '';
    if (langs.length < 2) return;
    langs.forEach(l => { const b = document.createElement('button'); b.type = 'button'; b.textContent = l.toUpperCase(); b.setAttribute('aria-pressed', String(l === LANG)); b.setAttribute('aria-label', ui('lang') + ' ' + l.toUpperCase()); b.addEventListener('click', () => setLang(l)); box.appendChild(b); });
  });
  document.documentElement.style.setProperty('--accent', accent());
  document.documentElement.style.setProperty('--accent-raw', CONTENT.settings.accent || '#ffcc00');
  document.documentElement.style.setProperty('--accent-inv', invertHex(CONTENT.settings.accent || '#ffcc00'));   // affiché en jaune une fois la page inversée
  buildTickerDots();
}
/* Le champ du bullshit slogan : la phrase d'invitation tient toujours sur une ligne, quelle que soit la langue */
function fitSlogan() {
  const bs = document.getElementById('bs'); if (!bs || !bs.offsetWidth) return;
  bs.style.fontSize = '';
  const cs = getComputedStyle(bs), max = parseFloat(cs.fontSize), room = bs.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight) - 6;
  const ctx = document.createElement('canvas').getContext('2d');
  ctx.font = `${cs.fontWeight} ${max}px ${cs.fontFamily}`;
  const ls = parseFloat(cs.letterSpacing) || 0, w = ctx.measureText(bs.placeholder).width + ls * bs.placeholder.length;
  if (w > room) bs.style.fontSize = Math.max(16, Math.floor(max * room / w)) + 'px';
}
window.addEventListener('resize', () => { if (!homeGone) fitSlogan(); });
function setLang(l) {
  if (l === LANG) return;
  LANG = l; try { localStorage.setItem('hc-lang', l); } catch (e) {}
  renderTexts();
  if (started) {
    menuButtons.forEach((b, i) => { b.textContent = tr(SECTIONS[i].def.name); });
    initCategorieData();
    const wasOpen = P.postOpen, sel = P.selected;
    checkPostOpenAndClose();
    P.selected = sel; changeSection3D();   // les cartes typographiques se redessinent dans la nouvelle langue
    if (wasOpen) delayedCall(0.6, () => openThatPost(sel));
  }
}

/* Catégories (tags) + pagination */
const cats = document.getElementById('cats'), catBox = document.getElementById('cat-box'), catList = document.getElementById('cat-list');
const catName = document.getElementById('cat-name'), catOpen = document.getElementById('cat-open');
const pgPrev = document.getElementById('pg-prev'), pgNext = document.getElementById('pg-next');
function initCategorieData() {
  const d = P.data, list = d.categoryList;
  catBox.hidden = list.length <= 1;
  catList.innerHTML = '';
  list.forEach(c => {
    const li = document.createElement('li'), b = document.createElement('button');
    b.type = 'button'; b.innerHTML = `${escapeHTML(tr(c.label))} <span class="n">(${d.countOf(c.id)})</span>`; b.setAttribute('aria-current', String(c.id === d.category));
    b.addEventListener('click', () => { closeCategory(); changeCategory(c.id); });
    li.appendChild(b); catList.appendChild(li);
  });
  catName.innerHTML = `${escapeHTML(d.currentCatName)} <span class="n">(${d.countOf(d.category)})</span>`;
  checkAccess(); closeCategory();
}
const pgNum = document.getElementById('pg-num');
function checkAccess() {
  const d = P.data; pgPrev.disabled = !d.hasNewer(); pgNext.disabled = !d.hasOlder(); pgPrev.hidden = pgNext.hidden = !d.hasNewer() && !d.hasOlder();
  if (pgNum) { pgNum.hidden = pgPrev.hidden; pgNum.textContent = `${d.page}/${d.pages}`; pgNum.setAttribute('aria-label', `${d.page} / ${d.pages}`); }   // où on en est : page 2 sur 5
}
function closeCategory() { clearTimeout(catPeekTimer); catBox.classList.remove('open'); catOpen.setAttribute('aria-expanded', 'false'); }
/* Arrivée sur une section : le menu des catégories s'ouvre puis se referme tout seul, comme le clavier à la première touche */
let catPeekTimer = 0, enteredAt = -1e9;
function peekCategories(delay = 0.7) {
  clearTimeout(catPeekTimer);
  if (catBox.hidden || !P.data || P.data.categoryList.length <= 1) return;
  catPeekTimer = setTimeout(() => {
    if (!homeGone || P.postOpen || cats.classList.contains('hidden')) return;
    catBox.classList.add('open'); catOpen.setAttribute('aria-expanded', 'true');
    catPeekTimer = setTimeout(() => { catBox.classList.remove('open'); catOpen.setAttribute('aria-expanded', 'false'); }, 2600);
  }, delay * 1000);
}
catBox.addEventListener('pointerenter', () => clearTimeout(catPeekTimer));   // la souris dessus : il reste ouvert
catOpen.addEventListener('click', () => { clearTimeout(catPeekTimer); const o = catBox.classList.toggle('open'); catOpen.setAttribute('aria-expanded', String(o)); });
pgPrev.addEventListener('click', () => { if (inputEnabled) entries('newer'); });
pgNext.addEventListener('click', () => { if (inputEnabled) entries('older'); });

/* Guide clavier */
const kb = document.getElementById('kb'), kbToggle = document.getElementById('kb-toggle');
let kbTimer = null;
function openKeyboard() { kb.classList.add('open'); kbToggle.setAttribute('aria-expanded', 'true'); }
function closeKeyboard() { kb.classList.remove('open'); kbToggle.setAttribute('aria-expanded', 'false'); }
kbToggle.addEventListener('click', () => { clearTimeout(kbTimer); kb.classList.contains('open') ? closeKeyboard() : openKeyboard(); });
kb.querySelectorAll('.key').forEach(k => k.addEventListener('click', () => keyBoardNavigation({ code: k.dataset.k, preventDefault() {} })));
function release(code) { const k = kb.querySelector(`.key[data-k="${code}"]`); if (!k) return; k.classList.add('down'); setTimeout(() => k.classList.remove('down'), 200); }
function toggleActivityButton() { kb.querySelector('.key.anim').classList.toggle('off', !STYLE.animationMode); }

/* ================================================================ Fiches 2D (PostView2D) */
const whiteboard = document.getElementById('whiteboard');
const post2dEl = document.getElementById('post2d'), strip = document.getElementById('strip');
/* Signature des images : « Œuvre · Auteur · Photo X », pour qu'on ne prenne pas l'œuvre d'un artiste pour une création du studio */
function signature(post, credit) {
  if (!post || CONTENT.settings.signImages === false) return '';
  const parts = [tr(post.title).trim(), (post.author || CONTENT.settings.name || '').trim()].filter(Boolean);
  if (credit) parts.push(ui('photo') + ' ' + credit.trim());
  return parts.join(' · ');
}
const isVideo = src => /\.(mp4|webm|mov)(\?|#|$)/i.test(src || '');
const ytId = s => { const m = /(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(s || ''); return m && m[1]; };
const vimeoId = s => { const m = /vimeo\.com\/(?:video\/)?(\d+)/.exec(s || ''); return m && m[1]; };
const mediaKind = s => (ytId(s) ? 'youtube' : vimeoId(s) ? 'vimeo' : isVideo(s) ? 'video' : 'image');
const post2D = {
  open: false, height: 0, panels: [], x: 0, finalpos: 0, end: 0, dragging: false, xprev: 0, delay: 0,
  build(post, card) {
    this.clear(); this.post = post;
    this.open = true; this.height = card === 'place' ? 300 : 355;
    post2dEl.classList.remove('closing'); post2dEl.hidden = false;
    fitPost2D(); this.geomKey = JSON.stringify(textGeom('project'));
    this.delay = 0;
    const media = post.media.filter(m => m && m.src);
    if (card === 'place') {
      const first = media[0] ? media[0].src : post.thumb;
      if (first) this.addMedia(first, 300, media[0] ? media[0].credit : '', false);
      this.addContact(post);
    } else if (card === 'text') {
      this.addText(post, 'blog');
      media.forEach(m => this.addMedia(m.src, 355, m.credit, true, m.caption));
      this.addRelations(post);
    } else {
      const first = media[0] ? media[0].src : (post.thumb || null);
      if (first) this.addMedia(first, 355, media[0] ? media[0].credit : '', true, media[0] && media[0].caption);
      this.addText(post, 'project');
      media.slice(1).forEach(m => this.addMedia(m.src, 355, m.credit, true, m.caption));
      this.addRelations(post);
      if ((post.team && post.team.length) || post.credits) this.addTeam(post);
    }
    if (post.logos && post.logos.length && card !== 'place') this.addLogos(post);   // partenaires, avant le lien
    if (post.link && card !== 'place') this.addLink(post);   // le lien du projet ferme la bande, sur la dernière fiche
    this.layout(); this.x = 0; this.finalpos = 0; strip.style.transform = 'translateX(0px)';
  },
  addRelations(post) {   // fiche d'un savoir-faire : ses projets défilent, chacun avec sa vignette
    const projects = relProjects(post); if (!projects.length) return;
    const skill = projectsOf(CONTENT, post).length > 0;
    this.addPanel('relh', 236, `<h2 class="ttl">${escapeHTML(ui(skill ? 'skillProjects' : 'together'))}.</h2><span class="n">${projects.length}</span>`);
    projects.forEach(p => {
      const ph = photoOf(p), meta = [p.date, tr(p.place)].filter(Boolean).join(' | ');
      const el = this.addPanel('proj', 248, `<button type="button" class="go" data-go="${escapeHTML(p.id)}" aria-label="${escapeHTML(tr(p.title))}">` +
        (ph ? `<img src="${escapeHTML(url(ph))}" alt="" draggable="false">` : '') + `<span class="mono"${ph ? ' hidden' : ''}>${escapeHTML(initials(tr(p.title)))}</span>` +
        `<span class="cap"><span class="t">${escapeHTML(tr(p.title).trim())}</span>${meta ? `<span class="m">${escapeHTML(meta)}</span>` : ''}</span></button>`);
      const im = el.querySelector('img'); if (im) im.addEventListener('error', () => { im.remove(); el.querySelector('.mono').hidden = false; });   // photo introuvable : les initiales
    });
  },
  addLogos(post) {   // les logos des partenaires, sur des pastilles blanches
    const n = post.logos.length, cols = n <= 4 ? 2 : 3, rows = Math.ceil(n / cols);
    const w = 68 + cols * 118, el = this.addPanel('logos', w, `<span class="lbl">${escapeHTML(ui('partners'))}</span><div class="grid" style="grid-template-columns:repeat(${cols},110px)">` +
      post.logos.map(src => `<span class="lg"><img src="${escapeHTML(url(src))}" alt="" draggable="false"></span>`).join('') + '</div>');
    if (rows > 3) el.querySelector('.grid').style.gridAutoRows = Math.floor(230 / rows - 6) + 'px';
  },
  addLink(post) {
    const href = /^https?:\/\//.test(post.link) ? post.link : 'https://' + post.link;
    const label = String(ui('visit')).replace(/\s*:\s*$/, '');
    const host = post.link.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
    this.addPanel('link', 300, `<span class="lbl">${escapeHTML(label)}</span><a href="${escapeHTML(href)}" target="_blank" rel="noopener"><span class="host">${escapeHTML(host)}</span><span class="arr" aria-hidden="true">↗</span></a>`);
  },
  addPanel(cls, width, inner) {
    const el = document.createElement('div'); el.className = 'pnl ' + cls; el.style.width = width + 'px'; el.style.height = this.height + 'px';
    el.innerHTML = `<div class="bgx"></div><div class="in">${inner || ''}</div>`;
    strip.appendChild(el); this.panels.push(el);
    const d = STYLE.animationMode ? this.delay : 0;   // Builders.animeBackground : les fonds se déroulent l'un après l'autre
    setTimeout(() => el.classList.add('open'), d * 1000 + 20); this.delay += 0.2;
    return el;
  },
  addMedia(src, h = 355, credit = '', sign = true, caption = null) {
    const kind = mediaKind(src);
    if (kind === 'youtube' || kind === 'vimeo') { this.addEmbed(src, kind, h, credit); return; }
    const vid = kind === 'video', el = this.addPanel('media', h, '');
    const m = document.createElement(vid ? 'video' : 'img'); m.draggable = false; m.style.height = h + 'px';
    if (vid) {   // la vidéo attend un toucher : on peut glisser le bandeau par-dessus sans la lancer
      Object.assign(m, { src: url(src) + (/#t=/.test(src) ? '' : '#t=0.1'), playsInline: true, preload: 'metadata', controls: false });
      const play = document.createElement('button'); play.type = 'button'; play.className = 'play'; play.setAttribute('aria-label', ui('play'));
      play.addEventListener('click', () => { m.controls = true; m.play().catch(() => {}); play.remove(); });
      el.querySelector('.in').appendChild(play);
    } else { m.src = url(src); m.alt = ''; }
    const fit = () => { const w = vid ? Math.round(m.videoWidth * h / m.videoHeight) : Math.round(m.naturalWidth * h / m.naturalHeight); if (w) { el.style.width = w + 'px'; this.layout(); } };
    m.addEventListener(vid ? 'loadedmetadata' : 'load', fit);
    m.addEventListener('error', () => { if (!this.panels.includes(el) || this.panels.length < 2) return; el.remove(); this.panels = this.panels.filter(x => x !== el); this.layout(); });   // image introuvable : le panneau disparaît
    el.querySelector('.in').prepend(m);
    const cap = caption ? tr(caption).trim() : '';
    if (cap) {   // légende de l'image : la première phrase en titre, le reste en dessous
      const k = cap.search(/[.:]\s/), t = k > 0 ? cap.slice(0, k + 1) : '', rest = k > 0 ? cap.slice(k + 2) : cap;
      const d = document.createElement('div'); d.className = 'mcap';
      d.innerHTML = (t ? `<b>${escapeHTML(t)}</b> ` : '') + escapeHTML(rest);
      el.querySelector('.in').appendChild(d);
    }
  },
  addEmbed(src, kind, h, credit = '') {   // YouTube / Vimeo : vignette et bouton, le lecteur ne se charge qu'au toucher
    const w = Math.round(h * 16 / 9), el = this.addPanel('media embed', w, '');
    const inner = el.querySelector('.in'), id = kind === 'youtube' ? ytId(src) : vimeoId(src);
    const cover = document.createElement('div'); cover.className = 'cover';
    const poster = kind === 'youtube' && id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : (this.post && this.post.thumb ? url(this.post.thumb) : '');
    if (poster) { const im = document.createElement('img'); im.src = poster; im.alt = ''; im.draggable = false; im.onerror = () => im.remove(); cover.appendChild(im); }
    cover.insertAdjacentHTML('beforeend', `<span class="brand">${kind === 'youtube' ? 'YouTube' : 'Vimeo'}</span>`);
    const play = document.createElement('button'); play.type = 'button'; play.className = 'play'; play.setAttribute('aria-label', ui('play'));
    play.addEventListener('click', () => {
      const f = document.createElement('iframe');
      f.src = kind === 'youtube' ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0` : `https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0`;
      f.allow = 'autoplay; fullscreen; picture-in-picture'; f.allowFullscreen = true; f.title = kind === 'youtube' ? 'YouTube' : 'Vimeo';
      cover.replaceWith(f);
    });
    cover.appendChild(play); inner.appendChild(cover);
  },
  addText(post, mode) {
    const { width, x, colW } = textGeom(mode);
    let title = tr(post.title).trim(); if (title && !/[.!?]$/.test(title)) title += '.';
    const subtitle = tr(post.subtitle);
    const sec = P.section.def;
    const tags = post.tags.filter(id => id !== 'featured').map(id => sec.tags.find(tg => tg.id === id)).filter(Boolean).map(tg => tr(tg.label));   // « Sélection » est une vitrine, pas une catégorie à afficher
    const posted = tags.length ? `${escapeHTML(ui('postedIn'))} <span>${tags.map(escapeHTML).join(', ')}</span>` : '';
    const fecha = escapeHTML([post.date, tr(post.place)].filter(Boolean).join(' | '));
    const html = sanitizeHTML(tr(post.body));
    const measure = document.createElement('div');
    measure.className = 'txt'; measure.style.cssText = `position:absolute;visibility:hidden;left:-9999px;top:0;width:${colW}px`;
    document.body.appendChild(measure);
    measure.innerHTML = `<h2 class="ttl" style="position:static">${escapeHTML(title)}</h2>${subtitle ? `<p class="stl" style="position:static">${escapeHTML(subtitle)}</p>` : ''}`;
    const tH = measure.firstChild.offsetHeight, sH = subtitle ? measure.lastChild.offsetHeight + 6 : 0;
    /* ses savoir-faire : une petite ligne de tags sous « Classé dans », chacun ouvre sa fiche */
    const skills = mode === 'project' ? relSkills(post) : [];
    let sklLine = '';
    if (skills.length) {
      const sd = (SECTIONS.find(x => x.def.id === skills[0].section) || {}).def;
      sklLine = `${escapeHTML((sd ? tr(sd.name) : ui('skills')).trim())} ${skills.map((k, i) => `<span class="it"><button type="button" class="go" data-go="${escapeHTML(k.id)}">${escapeHTML(tr(k.title).trim())}</button>${i < skills.length - 1 ? ',' : ''}</span>`).join(' ')}`;   // la virgule reste collée à son mot
    }
    if (mode === 'project') {
      /* la date, « Classé dans » et les savoir-faire : un bloc empilé, posé en bas ; s'il passe sur deux lignes, il monte au lieu de se chevaucher */
      const metaHTML = `<div class="fecha">${fecha}</div>${posted ? `<div class="posted">${posted}</div>` : ''}${sklLine ? `<div class="posted skl-tags">${sklLine}</div>` : ''}`;
      measure.innerHTML = `<div class="meta" style="position:static">${metaHTML}</div>`;
      const mH = measure.firstChild.offsetHeight, metaBottom = 322, metaTop = metaBottom - mH;
      const sy = 34 + tH + 6, top = 34 + tH + sH + 20;
      const pages = paginate(html, colW, [335 - top, 335 - 93], measure);   // pages pleines ; le bloc du bas se loge sur la dernière
      measure.innerHTML = `<div class="body" style="position:static">${pages[pages.length - 1]}</div>`;
      const lastTop = pages.length === 1 ? top : 93;
      if (pages[pages.length - 1] && lastTop + measure.firstChild.offsetHeight > metaTop - 12) {   // pas la place : la dernière page se recoupe
        const tail = paginate(pages.pop(), colW, [metaTop - 12 - lastTop, metaTop - 12 - 93], measure);
        pages.push(...tail);
      }
      pages.forEach((pg, i) => {
        const last = i === pages.length - 1;
        this.addPanel('txt', width, (i === 0 ? `<h2 class="ttl" style="left:${x}px;top:34px;width:${colW}px">${escapeHTML(title)}</h2>${subtitle ? `<p class="stl" style="left:${x}px;top:${sy}px;width:${colW}px">${escapeHTML(subtitle)}</p>` : ''}` : '') +
          `<div class="body" style="left:${x}px;top:${i === 0 ? top : 93}px;width:${colW}px">${pg}</div>` +
          (last ? `<div class="meta" style="left:${x}px;top:${metaTop}px;width:${colW}px">${metaHTML}</div>` : ''));
      });
    } else {
      const sy = 13 + tH + 4, fy = 13 + tH + sH + 10, py = fy + 20, top = py + 18 + 20;
      const pages = paginate(html, colW, [355 - top - 14, 355 - 28], measure);
      pages.forEach((pg, i) => {
        this.addPanel('txt', width, (i === 0 ? `<h2 class="ttl" style="left:${x}px;top:13px;width:${colW}px">${escapeHTML(title)}</h2>${subtitle ? `<p class="stl" style="left:${x}px;top:${sy}px;width:${colW}px">${escapeHTML(subtitle)}</p>` : ''}<div class="fecha" style="left:${x}px;top:${fy}px;width:${colW}px">${fecha}</div><div class="posted" style="left:${x}px;top:${py}px;width:${colW}px">${posted}</div>` : '') +
          `<div class="body" style="left:${x}px;top:${i === 0 ? top : 14}px;width:${colW}px">${pg}</div>`);
      });
    }
    measure.remove();
  },
  addTeam(post) {   // "Who worked on this project?" : les portraits viennent des autres sections
    const team = post.team.map(id => CONTENT.posts.find(p => p.id === id)).filter(Boolean);
    const names = team.map(p => tr(p.title)).concat(post.credits ? [post.credits] : []).join(', ');
    const el = this.addPanel('team', 576, `<h2 class="ttl">${escapeHTML(ui('who'))}</h2><div class="names">${escapeHTML(ui('leftToRight'))} <span>${escapeHTML(names)}.</span></div>`);
    const inner = el.querySelector('.in'), nm = inner.querySelector('.names');
    const top0 = Math.max(160, Math.ceil(nm.offsetTop + nm.offsetHeight + 14));   // les visages commencent sous la liste des noms
    team.forEach((p, j) => {
      const f = document.createElement('button'); f.type = 'button'; f.className = 'face';
      f.style.left = (69 + (j % 6) * 59) + 'px'; f.style.top = (top0 + Math.floor(j / 6) * 55) + 'px';
      const other = !p.thumb && (personProjects(p).find(x => x !== post) || personProjects(p)[0]);   // pas de portrait : un de ses autres projets, voilé, sous les initiales
      const bg = other ? ` style="background:linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),url('${escapeHTML(url(photoOf(other))).replace(/'/g, '%27')}') center/cover"` : '';
      f.innerHTML = (p.thumb ? `<img src="${escapeHTML(url(p.thumb))}" alt="" draggable="false">` : `<span class="mono"${bg}>${escapeHTML(initials(tr(p.title)))}</span>`) + `<span class="tab">${escapeHTML(tr(p.title))}.<small>${escapeHTML(tr(p.subtitle))}</small></span>`;
      f.setAttribute('aria-label', tr(p.title));
      ['pointerenter', 'focus'].forEach(ev => f.addEventListener(ev, () => f.classList.add('big')));
      ['pointerleave', 'blur'].forEach(ev => f.addEventListener(ev, () => f.classList.remove('big')));
      inner.appendChild(f);
    });
    el.style.overflow = 'visible';
  },
  addContact(post) {
    const site = (post.link || '').replace(/^https?:\/\/(www\.)?/, '');
    this.addPanel('contact', Math.min(380, Math.max(260, Math.floor((W - 2 * STYLE.margin) / (this.scale || 1)))), `<div class="cn">${escapeHTML(tr(post.title))}.</div><div class="ac">${escapeHTML(tr(post.subtitle))}</div>` +
      `<div class="site">${post.link ? `<a href="${escapeHTML(post.link)}" target="_blank" rel="noopener">${escapeHTML(site)}</a>` : ''}</div>` +
      `<div class="ad">${sanitizeHTML(tr(post.body))}</div><div class="ct">${escapeHTML(tr(post.place))}</div>`);
  },
  layout() {
    let x = 0; this.panels.forEach(p => { p.style.left = x + 'px'; x += p.offsetWidth - 2; });
    const last = this.panels[this.panels.length - 1]; this.end = last ? -parseFloat(last.style.left) : 0;
  },
  close() {
    if (!this.open) return 0; this.open = false;
    const time = STYLE.animationMode ? 0.8 : 0;
    post2dEl.classList.add('closing'); setTimeout(() => { if (!this.open) this.clear(); }, time * 1000);
    return time;
  },
  clear() { strip.querySelectorAll('video').forEach(v => v.pause()); strip.innerHTML = ''; this.panels = []; post2dEl.hidden = true; post2dEl.classList.remove('closing'); },
  action(type) {
    if (this.panels.length < 2) return;
    let post = 0;
    if (this.finalpos > 0) post = 0; else if (this.finalpos < this.end) post = this.panels.length - 1;
    else for (let i = 1; i < this.panels.length; i++) { const a = this.panels[i - 1], b = this.panels[i]; if (-this.finalpos >= a.offsetLeft + a.offsetWidth / 2 && -this.finalpos < b.offsetLeft + b.offsetWidth / 2) { post = i; break; } }
    if (type === 'RIGHT') this.finalpos = -this.panels[Math.min(post + 1, this.panels.length - 1)].offsetLeft;
    if (type === 'LEFT') this.finalpos = -this.panels[Math.max(post - 1, 0)].offsetLeft;
  },
  step() {   // Navigation._navigation
    if (!this.open) return;
    if (this.dragging) { this.finalpos += (mouse2D - this.xprev) * 1.5; this.x -= (this.x - this.finalpos) * ease(STYLE.easing); this.xprev = mouse2D; }
    else if (Math.abs(this.finalpos - this.x) > 0.5) this.x -= (this.x - this.finalpos) * ease(STYLE.easing * 2 / 3);
    else if (this.finalpos > 0) this.finalpos = 0; else if (this.finalpos < this.end) this.finalpos = this.end;
    strip.style.transform = `translateX(${Math.round(this.x)}px)`;
  },
};
function paginate(html, width, heights, measure) {   // PaginatorHtml : remplit chaque panneau mot par mot
  const box = document.createElement('div'); box.className = 'body'; box.style.cssText = `position:static;width:${width}px`;
  measure.innerHTML = ''; measure.appendChild(box);
  const src = document.createElement('div'); src.innerHTML = html;
  const blocks = []; let run = null;
  src.childNodes.forEach(n => {
    if (n.nodeType === 1 && ['P', 'UL', 'OL', 'H3'].includes(n.nodeName)) { run = null; if (n.textContent.trim()) blocks.push(n); return; }
    if (n.nodeType === 1 && n.nodeName === 'BR') { run = null; return; }
    if (n.nodeType === 3 && !n.textContent.trim() && !run) return;
    if (!run) { run = document.createElement('p'); blocks.push(run); }
    run.appendChild(n.cloneNode(true));
  });
  const pages = []; let page = 0;
  const limit = () => heights[Math.min(page, heights.length - 1)];
  const flush = () => { pages.push(box.innerHTML); box.innerHTML = ''; page++; };
  for (const b of blocks) {
    const clone = b.cloneNode(true); box.appendChild(clone);
    if (box.offsetHeight <= limit()) continue;
    box.removeChild(clone);
    if (b.nodeName === 'UL' || b.nodeName === 'OL' || b.nodeName === 'H3') { if (box.childNodes.length) flush(); box.appendChild(b.cloneNode(true)); continue; }
    const words = []; (function walk(node, path) { node.childNodes.forEach(c => { if (c.nodeType === 3) c.textContent.split(/(\s+)/).forEach(w => w && words.push({ w, path })); else walk(c, [...path, c]); }); })(b, []);
    let p = document.createElement('p'); box.appendChild(p);
    const append = ({ w, path }) => { let parent = p; for (const el of path) { let last = parent.lastChild; if (!last || last.nodeType !== 1 || last.dataset.src !== el.outerHTML) { last = el.cloneNode(false); last.dataset.src = el.outerHTML; parent.appendChild(last); } parent = last; } parent.appendChild(document.createTextNode(w)); };
    for (const item of words) {
      append(item);
      if (box.offsetHeight > limit()) {
        const lastText = (function deep(n) { return n.lastChild && n.lastChild.nodeType === 1 ? deep(n.lastChild) : n; })(p);
        lastText.removeChild(lastText.lastChild);
        flush(); p = document.createElement('p'); box.appendChild(p); if (item.w.trim()) append(item);
      }
    }
  }
  if (box.textContent.trim() || !pages.length) pages.push(box.innerHTML);
  return pages.map(h => h.replace(/ data-src="[^"]*"/g, ''));
}
let mouse2D = 0;
let pend2D = null;
post2dEl.addEventListener('pointerdown', e => {
  if (e.target.closest('a, .face, iframe')) return;
  if (e.target.tagName === 'VIDEO' && e.target.controls && e.clientY > e.target.getBoundingClientRect().bottom - 52) return;   // barre de lecture
  pend2D = { id: e.pointerId, x: e.clientX, y: e.clientY }; mouse2D = e.clientX;
});
post2dEl.addEventListener('pointermove', e => {
  if (e.pointerType === 'mouse' && e.buttons === 0 && (pend2D || post2D.dragging)) { stopDrag2D(); return; }   // bouton relâché sans qu'on l'ait vu : la fiche ne suit plus la souris
  mouse2D = e.clientX;
  if (!pend2D || e.pointerId !== pend2D.id || post2D.dragging) return;
  const dx = e.clientX - pend2D.x, dy = e.clientY - pend2D.y;
  if (Math.abs(dx) > 6 && Math.abs(dx) >= Math.abs(dy)) {
    post2D.dragging = true; post2D.xprev = pend2D.x; post2D.finalpos = post2D.x;
    try { post2dEl.setPointerCapture(e.pointerId); } catch (err) {}
    post2dEl.classList.add('grabbing');
  }
});
post2dEl.addEventListener('click', e => { if (post2D.justDragged) { e.preventDefault(); e.stopPropagation(); post2D.justDragged = false; } }, true);
const stopDrag2D = () => { if (post2D.dragging) { post2D.justDragged = true; setTimeout(() => { post2D.justDragged = false; }, 0); } pend2D = null; post2D.dragging = false; post2dEl.classList.remove('grabbing'); };
post2dEl.addEventListener('pointerup', stopDrag2D); post2dEl.addEventListener('pointercancel', stopDrag2D);
post2dEl.addEventListener('lostpointercapture', stopDrag2D);
window.addEventListener('pointerup', () => { if (pend2D || post2D.dragging) stopDrag2D(); });
whiteboard.addEventListener('pointerdown', () => closePost());

/* ================================================================ StageView : navigation générale */
function getToSectionView(index = -1, indexPost = 0) {
  killAllTweens();
  if (index === -1) index = P.currentSection || 0;
  checkPostOpenAndClose();
  if (index !== P.currentSection) resetZoom();
  P.currentSection = index; P.resetData(); P.selected = indexPost;
  changeSection3D(); changeActiveButton(); initCategorieData(); peekCategories(performance.now() - enteredAt < 1500 ? 2.2 : 0.7);   // à l'entrée, après le zoom d'arrivée
  try { history.replaceState(null, '', '#' + P.section.def.id); } catch (e) {}
}
function refreshSectionPosts() { checkPostOpenAndClose(); P.selected = 0; changeSection3D(); checkAccess(); }
function entries(dir) { if (dir === 'newer' ? P.data.newer() : P.data.older()) refreshSectionPosts(); }
function changeCategory(id) { P.data.changeCategory(id); catName.textContent = P.data.currentCatName; refreshSectionPosts(); initCategorieData(); }
function openThatPost(id) { checkPostOpenAndClose(); P.selected = id; openPost(); }
/* Aller à un contenu d'une autre section (savoir-faire ↔ projets) : section, tag et page qui le contiennent, puis sa fiche */
let goToken = 0;
function goToPost(id) {
  const post = CONTENT.posts.find(p => p.id === id), si = post ? SECTIONS.findIndex(s => s.def.id === post.section) : -1;
  if (si < 0 || !inputEnabled) return;
  killAllTweens(); checkPostOpenAndClose();
  const moved = si !== P.currentSection;
  if (moved) resetZoom();
  P.currentSection = si; if (moved) P.resetData();
  const d = P.data;
  const catMoved = !d.list.includes(post); if (catMoved) d.changeCategory('');
  const idx = d.list.indexOf(post); if (idx < 0) return;
  const pageMoved = idx < d.first || idx >= d.last;
  if (pageMoved) { const per = d.per; d.first = Math.floor(idx / per) * per; d.last = Math.min(d.list.length, d.first + per); d.posts = d.list.slice(d.first, d.last); }
  const sel = d.posts.indexOf(post);
  if (!moved && !catMoved && !pageMoved && postsView) { openThatPost(sel); return; }
  P.selected = sel; changeSection3D(); changeActiveButton(); initCategorieData(); if (moved) peekCategories();
  try { history.replaceState(null, '', '#' + P.section.def.id); } catch (e) {}
  const token = ++goToken;
  delayedCall(0.5, () => { if (token === goToken && P.data === d && d.posts[sel] === post) openThatPost(sel); });
}
strip.addEventListener('click', e => { const b = e.target.closest('[data-go]'); if (b) { e.preventDefault(); goToPost(b.dataset.go); } });
function openPost() {
  if (!postsView || !P.data.posts[P.selected]) return;
  hoverCard(null);
  checkPostOpenAndClose();
  P.postOpen = true;
  if (P.section.def.open === 'strip') {
    whiteboard.hidden = false;
    post2D.build(P.data.posts[P.selected], P.section.def.card);
    cats.classList.add('hidden');
    isClicking = false; canvas.classList.remove('dragging');
    closeTurn = true; focusPost(P.selected);
  } else { closeTurn = true; focusPost(P.selected); postsView.openPost3D(); }   // la carte vient vers la caméra
  setMenuPosition();
}
function closePost() {
  if (!P.postOpen) return;
  P.postOpen = false;
  if (post2D.open) { post2D.close(); whiteboard.hidden = true; cats.classList.remove('hidden'); }
  else if (postsView) postsView.closePost3D();
  setMenuPosition();
}
function checkPostOpenAndClose() { if (P.postOpen) closePost(); }
function changeActivity() { setAnimationMode(!STYLE.animationMode); toggleActivityButton(); if (postsView) postsView.resetPostPosition(); closeTurn = true; }
/* Zoom : la carte du monde descend beaucoup plus près ; chaque changement de section revient au zoom de base */
let zoomBase = STYLE.cameraDistanceProportion;
const isMap = () => (((curSec() || {}).def || {}).layout === 'map');
const zoomMin = () => (isMap() ? 60 : STYLE.cameraZoomMin);
function zoomOut() { if (STYLE.cameraDistanceProportion < STYLE.cameraZoomMax) { STYLE.cameraDistanceProportion = Math.min(STYLE.cameraZoomMax, Math.trunc(STYLE.cameraDistanceProportion * 1.5)); zoomMoved(); } }
function zoomIn() { if (STYLE.cameraDistanceProportion > zoomMin()) { STYLE.cameraDistanceProportion = Math.trunc(STYLE.cameraDistanceProportion / 1.5); zoomMoved(); } }
function zoomMoved() { if (isMap()) P.cameraY = camHeight(); onStageResize3D(); }
function resetZoom() { if (STYLE.cameraDistanceProportion === zoomBase) return; STYLE.cameraDistanceProportion = zoomBase; setCamera(); }
let touchedKeyboard = false;
function keyBoardNavigation(e) {
  if (!inputEnabled) return;
  if (!touchedKeyboard) { touchedKeyboard = true; openKeyboard(); kbTimer = setTimeout(closeKeyboard, 6000); }
  const strip2D = P.postOpen && post2D.open, focus3D = P.postOpen && !post2D.open;
  switch (e.code) {
    case 'ArrowLeft': release('ArrowLeft'); if (strip2D) post2D.action('LEFT'); else { checkPostOpenAndClose(); selectPost('PREVIOUS'); if (focus3D) openPost(); } break;
    case 'ArrowRight': release('ArrowRight'); if (strip2D) post2D.action('RIGHT'); else { checkPostOpenAndClose(); selectPost('NEXT'); if (focus3D) openPost(); } break;
    case 'ArrowUp': release('ArrowUp'); if (!strip2D) setUpper(); break;
    case 'ArrowDown': release('ArrowDown'); if (!strip2D) setDowner(); break;
    case 'Tab': release('Tab'); if (!strip2D) getToSectionView((P.currentSection + 1) % SECTIONS.length); else { closePost(); selectPost('NEXT'); openPost(); } break;
    case 'KeyK': kb.classList.contains('open') ? closeKeyboard() : openKeyboard(); break;
    case 'KeyA': release('KeyA'); changeActivity(); break;
    case 'Equal': case 'NumpadAdd': release('Equal'); if (!strip2D) zoomIn(); break;
    case 'Minus': case 'NumpadSubtract': release('Minus'); if (!strip2D) zoomOut(); break;
    case 'Space': release('Space'); if (postsView) postsView.checkPostSelected(); P.postOpen ? closePost() : openPost(); break;
    case 'Escape': checkPostOpenAndClose(); break;
    default: return;
  }
  e.preventDefault();
}
document.addEventListener('click', e => { const btn = e.target.closest('#menu button, #cats button, #kb button, #langs button'); if (btn && e.detail > 0) btn.blur(); });
window.addEventListener('keydown', e => {
  if (e.ctrlKey || e.metaKey || e.altKey || !homeGone) return;
  if ((e.target instanceof HTMLButtonElement || e.target.id === 'logo') && (e.code === 'Space' || e.code === 'Enter')) return;
  keyBoardNavigation(e);
});

/* Souris sur la scène 3D */
const raycaster = new THREE.Raycaster(), ndc = new THREE.Vector2();
function pick(x, y) {
  if (!started || !postsView) return null;
  ndc.set((x / W) * 2 - 1, -(y / H) * 2 + 1); raycaster.setFromCamera(ndc, camera);
  const hit = raycaster.intersectObjects([...curSec().blockers, ...postsView.meshes], false)[0];
  if (hit && hit.object.userData.post) return hit.object.userData;
  return pickNet(x, y) || (hit ? hit.object.userData : null);
}
const _np = new THREE.Vector3();
function pickNet(x, y) {   // les lieux sont petits et serrés : on prend le plus proche à l'écran
  if (!postsView || !postsView.net) return null;
  let best = null, bd = 14;
  for (const d of postsView.net.hits) { if (!d.visible) continue; d.getWorldPosition(_np).project(camera); const dx = (_np.x + 1) / 2 * W - x, dy = (1 - _np.y) / 2 * H - y, dd = Math.hypot(dx, dy); if (dd < bd && _np.z < 1) { bd = dd; best = d.userData; } }
  return best;
}
let dragId = null, downHit = null, downX = 0, downY = 0;
canvas.addEventListener('pointerdown', e => {
  if (!inputEnabled || dragId !== null || (e.pointerType === 'mouse' && e.button !== 0)) return;
  mouseX = downX = e.clientX; mouseY = downY = e.clientY;
  const hit = pick(e.clientX, e.clientY);
  checkPostOpenAndClose();
  downHit = hit && hit.post ? hit : null;
  if (downHit && downHit.face === 'back') { downHit.post.view.focus(downHit.post.id_); closeTurn = true; }
  dragId = e.pointerId; canvas.setPointerCapture(e.pointerId); canvas.classList.add('dragging');
  prevX = mouseX; prevY = mouseY; closeTurn = false; isClicking = true;
});
function endDrag(e, lost = false) {
  if (e.pointerId !== dragId) return;
  dragId = null; canvas.classList.remove('dragging');
  if (isClicking) { closeTurn = true; isClicking = false; }
  if (lost) { downHit = null; return; }   // relâché hors de la page ou capture perdue : on lâche, sans ouvrir de fiche
  if (downHit && downHit.face === 'front' && Math.hypot(e.clientX - downX, e.clientY - downY) < 6) { const hit = pick(e.clientX, e.clientY); if (hit && hit.post === downHit.post) openThatPost(hit.post.id_); }
  else if (!downHit && Math.hypot(e.clientX - downX, e.clientY - downY) < 6) { const hit = pick(e.clientX, e.clientY); if (hit && hit.netNode) showNetTip(hit.netNode, e.clientX, e.clientY); else hideNetTip(); }
  downHit = null;
}
canvas.addEventListener('pointerup', endDrag); canvas.addEventListener('pointercancel', e => endDrag(e, true));
/* Garde-fous : si le navigateur perd le relâchement (Safari, fenêtre qui change, bouton relâché ailleurs), le glisser ne reste jamais collé à la souris */
canvas.addEventListener('lostpointercapture', e => { if (e.pointerId === dragId) endDrag(e, true); });
window.addEventListener('pointerup', e => { if (dragId !== null && e.pointerId === dragId && e.target !== canvas) endDrag(e, true); });
window.addEventListener('blur', () => { if (dragId !== null) endDrag({ pointerId: dragId }, true); stopDrag2D(); });
let hoverQueued = false, hovered = null;
function hoverCard(pv) { if (hovered === pv) return; if (hovered) hovered.hover(false); hovered = pv; if (pv) pv.hover(true); }
canvas.addEventListener('pointerleave', () => hoverCard(null));
canvas.addEventListener('pointermove', e => {
  if (dragId !== null && e.pointerId === dragId && e.pointerType === 'mouse' && e.buttons === 0) { endDrag(e, true); return; }   // bouton déjà relâché
  if (dragId !== null && e.pointerId !== dragId) return;
  mouseX = e.clientX; mouseY = e.clientY;
  if (dragId === null && e.pointerType === 'mouse' && !hoverQueued) { hoverQueued = true; requestAnimationFrame(() => { hoverQueued = false; const h = pick(mouseX, mouseY); canvas.classList.toggle('hover', !!(h && h.post)); hoverCard(h && h.post && h.face === 'front' && !P.postOpen ? h.post : null); if (h && h.netNode && !P.postOpen) showNetTip(h.netNode, mouseX, mouseY); else hideNetTip(); }); }
});
let lastWheel = 0;
canvas.addEventListener('wheel', e => { e.preventDefault(); const now = performance.now(); if (!inputEnabled || now - lastWheel < 220 || !e.deltaY) return; lastWheel = now; e.deltaY < 0 ? zoomIn() : zoomOut(); }, { passive: false });
window.addEventListener('resize', () => {
  resizeViewport(); onStageResize3D(); setMenuPosition(); sizeTicker(); hvSize();
  if (post2D.open) { fitPost2D(); clearTimeout(post2D.relayout); post2D.relayout = setTimeout(() => { if (post2D.open && post2D.post && JSON.stringify(textGeom('project')) !== post2D.geomKey) { post2D.build(post2D.post, P.section.def.card); setMenuPosition(); } }, 250); }   // rotation de l'écran : la fiche se recompose
});

/* Négatif / positif : clic sur le logo. Les cartes se redessinent sur place (photos pré-inversées, accent conservé). */
function toggleNeg() {
  if (CONTENT.settings.negativeToggle === false) return;
  negMode = !negMode;
  if (!PREVIEW) try { localStorage.setItem('hc-neg', negMode ? '1' : '0'); } catch (e) {}
  renderTexts();
  if (postsView) postsView.retexture();
}
['logo', 'home-logo'].forEach(id => {
  const logoClick = document.getElementById(id); if (!logoClick) return;
  logoClick.addEventListener('click', toggleNeg);
  logoClick.addEventListener('keydown', e => { if (e.code === 'Enter' || e.code === 'Space') { e.preventDefault(); e.stopPropagation(); toggleNeg(); } });
});

/* ================================================================ Showreel
   Un bouton sous le logo, visible partout (accueil compris). L'écran glisse au premier plan, son coupé au départ.
   YouTube et Vimeo se pilotent par postMessage (son, pause), une vidéo MP4 directement. */
var reel = null;
const SPEAKER = on => `<svg viewBox="0 0 20 16" aria-hidden="true"><path d="M1 5h4l5-4v14l-5-4H1z" fill="currentColor"/>${on ? '<path d="M13 4.5a5 5 0 0 1 0 7M15.5 2a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' : '<path d="M13 5l6 6M19 5l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'}</svg>`;
function renderReel() {
  const src = (CONTENT.settings.showreel || '').trim();
  if (!reel) {
    const btn = document.createElement('button'); btn.id = 'reel-btn'; btn.type = 'button'; btn.className = 'ui';
    btn.innerHTML = '<i aria-hidden="true"></i><span>Showreel</span>';
    const box = document.createElement('div'); box.id = 'reel'; box.hidden = true; box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true'); box.setAttribute('aria-label', 'Showreel');
    box.innerHTML = '<div class="scrim"></div><div class="scr"><div class="bar"><b>Showreel</b><a class="ext" target="_blank" rel="noopener"></a><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button></div><div class="vid"></div></div>';
    document.body.append(btn, box);
    reel = { btn, box, scr: box.querySelector('.scr'), vid: box.querySelector('.vid'), snd: box.querySelector('.snd'), x: box.querySelector('.x'), ext: box.querySelector('.ext'), src: null, kind: '', player: null, muted: true, open: false, last: null };
    btn.addEventListener('click', () => openReel());
    reel.x.addEventListener('click', closeReel);
    box.querySelector('.scrim').addEventListener('click', closeReel);
    reel.snd.addEventListener('click', () => setReelMuted(!reel.muted));
    window.addEventListener('keydown', e => {   // tant que l'écran est ouvert, le clavier ne pilote plus la scène 3D
      if (!reel.open) return;
      if (e.code === 'Escape') { e.preventDefault(); closeReel(); }
      else if (e.code === 'Tab') { const f = [...box.querySelectorAll('a[href], button')].filter(el => el.offsetParent); if (f.length) { const i = f.indexOf(document.activeElement); if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); } else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); } } }
      e.stopImmediatePropagation();
    }, true);
    window.addEventListener('message', e => {   // YouTube signale quand le visiteur change le son depuis son lecteur
      if (!reel.player || e.source !== reel.player.contentWindow) return;
      let d = e.data; try { if (typeof d === 'string') d = JSON.parse(d); } catch (err) { return; }
      if (d && d.event === 'infoDelivery' && d.info && typeof d.info.muted === 'boolean' && d.info.muted !== reel.muted) { reel.muted = d.info.muted; drawReelSound(); }
    });
  }
  reel.btn.hidden = !src;
  reel.btn.setAttribute('aria-label', 'Showreel');
  reel.x.setAttribute('aria-label', ui('close'));
  if (src !== reel.src) { if (reel.open) closeReel(true); reel.src = src; reel.kind = src ? mediaKind(src) : ''; reel.vid.innerHTML = ''; reel.player = null; }
  const ext = reel.kind === 'youtube' ? `https://www.youtube.com/watch?v=${ytId(src)}` : reel.kind === 'vimeo' ? `https://vimeo.com/${vimeoId(src)}` : '';
  reel.ext.hidden = !ext; if (ext) { reel.ext.href = ext; reel.ext.textContent = (reel.kind === 'youtube' ? 'YouTube' : 'Vimeo') + ' ↗'; }
  drawReelSound();
}
function drawReelSound() { if (!reel) return; reel.snd.innerHTML = SPEAKER(!reel.muted) + `<span>${ui(reel.muted ? 'soundOn' : 'soundOff')}</span>`; reel.snd.setAttribute('aria-pressed', String(!reel.muted)); }
function reelCmd(func, args = []) {
  const f = reel.player; if (!f || !f.contentWindow) return;
  if (reel.kind === 'youtube') f.contentWindow.postMessage(JSON.stringify({ event: 'command', func, args }), '*');
  else if (reel.kind === 'vimeo') { const m = { playVideo: ['play'], pauseVideo: ['pause'], mute: ['setMuted', true], unMute: ['setMuted', false] }[func]; if (m) f.contentWindow.postMessage(JSON.stringify({ method: m[0], value: m[1] }), '*'); }
}
function setReelMuted(m) {
  reel.muted = m; drawReelSound();
  if (reel.kind === 'video') { if (reel.player) { reel.player.muted = m; if (!m) reel.player.volume = 1; } }
  else { reelCmd(m ? 'mute' : 'unMute'); if (!m) reelCmd('setVolume', [100]); }
}
function openReel() {
  if (!reel || !reel.src || reel.open) return;
  reel.open = true; reel.last = document.activeElement;
  if (!reel.player) {
    const src = reel.src, k = reel.kind;
    if (k === 'video') {
      const v = document.createElement('video'); v.src = url(src); v.muted = true; v.autoplay = true; v.loop = true; v.playsInline = true; v.controls = true; v.setAttribute('playsinline', '');
      v.addEventListener('volumechange', () => { if (v.muted !== reel.muted) { reel.muted = v.muted; drawReelSound(); } });
      reel.player = v;
    } else if (k === 'youtube' || k === 'vimeo') {
      const f = document.createElement('iframe'), id = k === 'youtube' ? ytId(src) : vimeoId(src);
      const origin = /^https?:/.test(location.protocol) ? '&origin=' + encodeURIComponent(location.origin) : '';
      f.src = k === 'youtube' ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=${id}&enablejsapi=1${origin}` : `https://player.vimeo.com/video/${id}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0`;
      f.allow = 'autoplay; fullscreen; picture-in-picture; encrypted-media'; f.allowFullscreen = true; f.title = 'Showreel';
      f.referrerPolicy = 'strict-origin-when-cross-origin';
      f.addEventListener('load', () => { if (k === 'youtube') f.contentWindow.postMessage(JSON.stringify({ event: 'listening', id: 'reel', channel: 'widget' }), '*'); if (!reel.muted) setReelMuted(false); });
      reel.player = f;
    } else { const im = document.createElement('img'); im.src = url(src); im.alt = ''; reel.player = im; }
    reel.muted = true; drawReelSound(); reel.vid.appendChild(reel.player);
  } else if (reel.kind === 'video') reel.player.play().catch(() => {});
  else reelCmd('playVideo');
  reel.snd.hidden = !/^(youtube|vimeo|video)$/.test(reel.kind);
  reel.box.hidden = false; reel.btn.setAttribute('aria-expanded', 'true');
  void reel.box.offsetWidth; reel.box.classList.add('on');
  setTimeout(() => { if (reel.open) reel.x.focus({ preventScroll: true }); }, 60);
}
function closeReel(instant) {
  if (!reel || !reel.open) return;
  reel.open = false; reel.btn.setAttribute('aria-expanded', 'false');
  if (reel.kind === 'video') { if (reel.player) reel.player.pause(); } else reelCmd('pauseVideo');
  reel.box.classList.remove('on');
  clearTimeout(reel.t); reel.t = setTimeout(() => { if (!reel.open) reel.box.hidden = true; }, instant === true ? 0 : 650);
  if (reel.last && reel.last.focus && instant !== true) reel.last.focus({ preventScroll: true });
}

/* ================================================================ Vidéo de l'accueil en carrés
   La bande noire de l'accueil montre une vidéo (Réglages › Accueil) en grille de carrés : chaque carré grossit avec la lumière de son pixel.
   Sans vidéo réglée, ce sont les photos des projets en travelling lent. Les visiteurs ont un petit clavier, comme celui du site :
   grille, contraste, couleur, inversion, son (coupé au départ) et leur caméra (l'image reste sur leur écran). La lecture démarre à un endroit au hasard. */
var hv = null;
const HV_COLORS = ['white', 'grey', 'accent', 'source'], HV_MAX_DELAY = 8;
function hvSettings() {
  const c = Object.assign({ src: '', cell: 14, contrast: 1, size: 92, color: 'white', mode: 'light', delay: 4, controls: true, random: true }, CONTENT.settings.homeVideo || {});
  if (c.random !== false) {   // chaque visite tombe sur un réglage différent
    const r = (a, b) => a + Math.random() * (b - a), pick = (list, w) => { let x = Math.random() * w.reduce((a, b) => a + b, 0); for (let i = 0; i < list.length; i++) { if ((x -= w[i]) < 0) return list[i]; } return list[0]; };
    Object.assign(c, { cell: 2 * Math.round(r(4, 12)), contrast: +r(0.6, 2).toFixed(1), size: Math.round(r(72, 100)), color: pick(HV_COLORS, [4, 2, 2, 1]), mode: Math.random() < 0.75 ? 'light' : 'dark', delay: Math.round(r(1, 8)) });
  }
  return c;
}
function setupHomeVideo() {
  if (hv) return;
  const band = document.getElementById('home-band'); if (!band) return;
  const cfg = hvSettings();
  const cv = document.createElement('canvas'); cv.id = 'home-video'; cv.setAttribute('aria-hidden', 'true');
  const shade = document.createElement('div'); shade.className = 'hv-shade';
  band.prepend(cv, shade);
  hv = { cv, ctx: cv.getContext('2d'), off: document.createElement('canvas'), cell: +cfg.cell || 14, gamma: +cfg.contrast || 1, fill: (+cfg.size || 92) / 100,
    color: HV_COLORS.includes(cfg.color) ? cfg.color : 'white', mode: cfg.mode === 'dark' ? 'dark' : 'light', delay: Math.max(1, Math.min(HV_MAX_DELAY, +cfg.delay || 1)), sound: false, cam: null, video: null, pics: [], lo: 0, hi: 1,
    tainted: false, last: 0, t0: performance.now() - Math.random() * 60000, W: 0, H: 0, interval: 1000 / 30, floor: 0, cost: 0, slow: 0, fast: 0 };
  hv.octx = hv.off.getContext('2d', { willReadFrequently: true });
  hv.raw = document.createElement('canvas'); hv.rctx = hv.raw.getContext('2d', { willReadFrequently: true });   // l'image du moment ; « off » garde l'image lissée par le delay
  const src = (cfg.src || '').trim();
  if (src && /\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(src)) {
    const v = document.createElement('video');
    if (/^https?:/.test(src) && !src.startsWith(location.origin)) v.crossOrigin = 'anonymous';
    Object.assign(v, { muted: true, loop: true, playsInline: true, autoplay: true, preload: 'auto', src: url(src) }); v.setAttribute('playsinline', '');
    v.addEventListener('loadedmetadata', () => { if (isFinite(v.duration) && v.duration > 2) v.currentTime = Math.random() * (v.duration - 1); v.play().catch(() => {}); }, { once: true });   // jamais le même départ
    hv.video = v;
  } else {   // les photos des projets mis en avant, hébergées avec le site (une image d'un autre site ne se lit pas pixel par pixel)
    const seen = new Set();
    CONTENT.posts.filter(p => p.published !== false).forEach(p => [p.thumb, ...(p.media || []).map(m => m && m.src)].forEach(x => { if (x && !/^(https?:|data:)/.test(x) && /\.(jpe?g|png|webp)$/i.test(x) && !seen.has(x) && seen.size < 10) seen.add(x); }));
    hv.pics = [...seen].sort(() => Math.random() - 0.5).map(x => { const im = new Image(); im.src = url(x); return im; });
  }
  if (cfg.controls !== false) buildHvKeys(document.getElementById('home'));
  const langs = document.getElementById('home-langs'); if (langs) document.getElementById('home').appendChild(langs);   // les langues passent dans la partie blanche, juste au-dessus de la bande
  hvSize();
}
function hvSize() { if (!hv) return; const r = hv.cv.getBoundingClientRect(), d = Math.min(2, devicePixelRatio || 1); hv.W = Math.max(1, Math.round(r.width)); hv.H = Math.max(1, Math.round(r.height)); hv.cv.width = hv.W * d; hv.cv.height = hv.H * d; hv.ctx.setTransform(d, 0, 0, d, 0, 0); }
function buildHvKeys(band) {
  const box = document.createElement('div'); box.id = 'hv';
  box.innerHTML = `<div id="hv-panel">
      <div class="lbl" data-k="grid"></div><div class="row"><button type="button" class="key" data-a="grid-" data-code="ArrowLeft">◂</button><button type="button" class="key" data-a="grid+" data-code="ArrowRight">▸</button></div>
      <div class="lbl" data-k="contrast"></div><div class="row"><button type="button" class="key" data-a="con-" data-code="ArrowDown">▾</button><button type="button" class="key" data-a="con+" data-code="ArrowUp">▴</button></div>
      <div class="lbl" data-k="delay"></div><div class="row"><button type="button" class="key" data-a="del-" data-code="Minus">−</button><button type="button" class="key" data-a="del+" data-code="Equal">+</button></div>
      <div class="lbl" data-k="color"></div><div class="row"><button type="button" class="key sw" data-a="color" data-code="KeyC"><i></i> C</button></div>
      <div class="lbl" data-k="invert"></div><button type="button" class="key" data-a="invert" data-code="KeyI" aria-pressed="false">I</button>
      <div class="lbl" data-k="sound"></div><button type="button" class="key" data-a="sound" data-code="KeyS" aria-pressed="false">S</button>
      <div class="lbl" data-k="cam"></div><button type="button" class="key" data-a="cam" data-code="KeyV" aria-pressed="false">V</button>
      <span class="hv-note" hidden></span>
    </div><button id="hv-toggle" type="button" aria-expanded="false"></button>`;
  band.appendChild(box);
  hv.box = box; hv.note = box.querySelector('.hv-note');
  const setOpen = open => { box.classList.toggle('open', open); box.querySelector('#hv-toggle').setAttribute('aria-expanded', String(open)); };
  hv.setOpen = setOpen;
  box.querySelector('#hv-toggle').addEventListener('click', () => setOpen(!box.classList.contains('open')));
  /* les touches du vrai clavier, comme dans le site : flèches, C, I, S, V, K pour ouvrir ou fermer */
  window.addEventListener('keydown', e => {
    if (homeGone || e.ctrlKey || e.metaKey || e.altKey || (reel && reel.open)) return;
    const inInput = e.target && e.target.id === 'bs', typed = inInput && e.target.value.length > 0;
    if (e.code === 'Escape' && inInput) { e.target.blur(); return; }
    if (e.code === 'KeyK' && !inInput) { e.preventDefault(); setOpen(!box.classList.contains('open')); return; }
    const key = box.querySelector(`[data-code="${e.code}"]`); if (!key) return;
    if (inInput && !/^Arrow/.test(e.code)) return;      // on écrit son slogan : lettres, tirets et signes restent du texte
    if (/^Arrow/.test(e.code) && typed) return;          // les flèches déplacent le curseur dans le slogan
    e.preventDefault();
    if (!hv.touched) { hv.touched = true; setOpen(true); }
    key.click();
  });
  box.querySelector('#hv-panel').addEventListener('click', e => {
    const b = e.target.closest('button[data-a]'); if (!b) return; const a = b.dataset.a;
    b.classList.add('down'); setTimeout(() => b.classList.remove('down'), 200);
    if (a === 'grid+') hv.cell = Math.max(6, hv.cell - 2);          // plus de grille : plus de carrés, plus petits
    else if (a === 'grid-') hv.cell = Math.min(40, hv.cell + 2);
    else if (a === 'con-') hv.gamma = Math.max(0.4, +(hv.gamma - 0.2).toFixed(2));
    else if (a === 'con+') hv.gamma = Math.min(3, +(hv.gamma + 0.2).toFixed(2));
    else if (a === 'del-') hv.delay = Math.max(1, hv.delay - 1);
    else if (a === 'del+') hv.delay = Math.min(HV_MAX_DELAY, hv.delay + 1);
    else if (a === 'color') hv.color = HV_COLORS[(HV_COLORS.indexOf(hv.color) + 1) % HV_COLORS.length];
    else if (a === 'invert') hv.mode = hv.mode === 'light' ? 'dark' : 'light';
    else if (a === 'sound') { hv.sound = !hv.sound; if (hv.video) { hv.video.muted = !hv.sound; hv.video.volume = 1; hv.video.play().catch(() => {}); } }
    else if (a === 'cam') { hv.cam ? hvCamOff() : hvCamOn(); }
    hvLabels();
  });
  hvLabels();
}
function hvLabels() {
  if (!hv || !hv.box) return;
  hv.box.querySelectorAll('.lbl[data-k]').forEach(el => { el.textContent = ui('hv_' + el.dataset.k); });
  hv.box.querySelector('#hv-toggle').setAttribute('aria-label', ui('hv_tab'));
  const sw = hv.box.querySelector('.sw i'); sw.className = 'c-' + hv.color;
  const set = (a, on, label) => { const b = hv.box.querySelector(`[data-a="${a}"]`); b.setAttribute('aria-pressed', String(on)); b.classList.toggle('on', on); if (label) b.setAttribute('aria-label', label); };
  set('invert', hv.mode === 'dark', ui('hv_invert'));
  set('sound', hv.sound, ui('hv_sound'));
  set('cam', !!hv.cam, ui('hv_cam'));
  hv.box.querySelector('[data-a="sound"]').disabled = !hv.video || !!hv.cam;
  hv.box.querySelector('[data-a="color"]').setAttribute('aria-label', ui('hv_color'));
  ['grid-', 'grid+', 'con-', 'con+', 'del-', 'del+'].forEach(a => hv.box.querySelector(`[data-a="${a}"]`).setAttribute('aria-label', ui(a.startsWith('grid') ? 'hv_grid' : a.startsWith('con') ? 'hv_contrast' : 'hv_delay') + (a.endsWith('+') ? ' +' : ' −')));
  const dl = hv.box.querySelector('.lbl[data-k="delay"]'); if (dl) dl.textContent = ui('hv_delay') + ' ' + hvDelay() + (hvDelay() < hv.delay ? '*' : '');
  const dk = hv.box.querySelector('[data-a="del+"]'); if (dk) dk.disabled = hv.delay >= HV_MAX_DELAY;
}
async function hvCamOn() {
  hv.note.hidden = true;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: { ideal: 640 } }, audio: false });
    const v = document.createElement('video'); Object.assign(v, { muted: true, playsInline: true, autoplay: true, srcObject: stream }); v.setAttribute('playsinline', ''); await v.play().catch(() => {});
    hv.cam = { stream, video: v }; hv.lo = 0; hv.hi = 1;
    if (hv.video) hv.video.pause();
    hv.note.textContent = ui('hv_camNote'); hv.note.hidden = false;
  } catch (e) { hv.note.textContent = ui('hv_camDenied'); hv.note.hidden = false; }
  hvLabels();
}
function hvCamOff() {
  if (hv && hv.cam) { hv.cam.stream.getTracks().forEach(t => t.stop()); hv.cam = null; if (hv.video) hv.video.play().catch(() => {}); hv.note.hidden = true; }
  if (hv) hvLabels();
}
function stopHomeVideo() { if (!hv) return; hvCamOff(); if (hv.video) hv.video.pause(); }
function hvCover(src, sw, sh, zoom = 1, dx = 0, dy = 0, mirror = false) {
  const c = hv.rctx, cw = hv.raw.width, ch = hv.raw.height, s = Math.max(cw / sw, ch / sh) * zoom, w = sw * s, h = sh * s;
  if (mirror) { c.save(); c.translate(cw, 0); c.scale(-1, 1); }
  c.drawImage(src, (cw - w) / 2 + dx * cw, (ch - h) / 2 + dy * ch, w, h);
  if (mirror) c.restore();
}
function hvSource(t) {
  const c = hv.rctx; c.globalAlpha = 1; c.fillStyle = '#000'; c.fillRect(0, 0, hv.raw.width, hv.raw.height);
  if (hv.cam && hv.cam.video.readyState >= 2) { hvCover(hv.cam.video, hv.cam.video.videoWidth, hv.cam.video.videoHeight, 1, 0, 0, true); return true; }
  if (hv.video) { if (hv.video.readyState < 2) return false; hvCover(hv.video, hv.video.videoWidth, hv.video.videoHeight); return true; }
  const ok = hv.pics.filter(p => p.complete && p.naturalWidth); if (!ok.length) return false;
  const per = 7, k = Math.max(0, t) / per, n = ok.length, i = ((Math.floor(k) % n) + n) % n, f = k - Math.floor(k);
  const pan = (p, ph, a) => { c.globalAlpha = a; hvCover(p, p.naturalWidth, p.naturalHeight, 1.18 - 0.12 * ph, Math.sin(ph * 2.2) * 0.06, Math.cos(ph * 1.7) * 0.05); };
  pan(ok[i], f, 1); if (f > 0.78 && n > 1) pan(ok[(i + 1) % n], f - 1, (f - 0.78) / 0.22);
  c.globalAlpha = 1; return true;
}
/* Ouvert depuis le disque, le navigateur interdit de lire les pixels d'un fichier local. Les carrés se fabriquent alors sans les lire :
   l'image en blocs (moitié) + une pyramide par case (moitié), puis un seuil très dur : chaque case garde un carré d'autant plus grand que le bloc est clair. */
const canFilter = (() => { try { const c = document.createElement('canvas').getContext('2d'); return typeof c.filter === 'string'; } catch (e) { return false; } })();
function hvPyramid(cell) {
  if (hv.pyr && hv.pyr.cell === cell && hv.pyr.fill === hv.fill) return hv.pyr.pat;
  const c = document.createElement('canvas'); c.width = c.height = cell; const x = c.getContext('2d'), im = x.createImageData(cell, cell), half = cell / 2;
  for (let j = 0; j < cell; j++) for (let i = 0; i < cell; i++) {
    const dd = Math.max(Math.abs(i + 0.5 - half), Math.abs(j + 0.5 - half)) / half, v = Math.max(0, Math.min(1, 1 - dd / hv.fill)) * 255, q = (j * cell + i) * 4;
    im.data[q] = im.data[q + 1] = im.data[q + 2] = v; im.data[q + 3] = 255;
  }
  x.putImageData(im, 0, 0);
  hv.pyr = { cell, fill: hv.fill, pat: hv.ctx.createPattern(c, 'repeat') };
  return hv.pyr.pat;
}
function hvComposite(cols, rows, cell) {
  const ctx = hv.ctx, W = hv.W, H = hv.H, ox = Math.round((W - cols * cell) / 2), oy = Math.round((H - rows * cell) / 2);
  ctx.imageSmoothingEnabled = false;
  if (!canFilter) { ctx.globalAlpha = 0.45; ctx.drawImage(hv.off, ox, oy, cols * cell, rows * cell); ctx.globalAlpha = 1; return; }   // navigateur sans filtres : image en blocs, assombrie
  if (!hv.tmp) { hv.tmp = document.createElement('canvas'); hv.tctx = hv.tmp.getContext('2d'); }
  const t = hv.tmp, tc = hv.tctx;
  if (t.width !== W || t.height !== H) { t.width = W; t.height = H; }
  tc.setTransform(1, 0, 0, 1, 0, 0); tc.globalCompositeOperation = 'source-over'; tc.globalAlpha = 1; tc.filter = 'none';
  tc.fillStyle = '#000'; tc.fillRect(0, 0, W, H);
  tc.imageSmoothingEnabled = false;
  tc.filter = `grayscale(1)${hv.mode === 'dark' ? ' invert(1)' : ''} brightness(1.25) contrast(${(1.05 + hv.gamma * 0.45).toFixed(2)})`;   // sans lecture des pixels, pas de contraste automatique : on éclaircit d'office
  tc.globalAlpha = 0.5; tc.drawImage(hv.off, ox, oy, cols * cell, rows * cell);
  tc.filter = 'none'; tc.globalCompositeOperation = 'lighter';
  tc.save(); tc.translate(ox, oy); tc.fillStyle = hvPyramid(cell); tc.fillRect(-ox, -oy, W, H); tc.restore();
  tc.globalCompositeOperation = 'source-over'; tc.globalAlpha = 1;
  ctx.save(); ctx.filter = 'contrast(4000%)'; ctx.drawImage(t, 0, 0, W, H); ctx.restore();   // seuil : blanc dans les carrés, noir ailleurs
  if (hv.color === 'white') return;
  ctx.save(); ctx.globalCompositeOperation = 'multiply';
  if (hv.color === 'source') ctx.drawImage(hv.off, ox, oy, cols * cell, rows * cell);
  else { ctx.fillStyle = hv.color === 'grey' ? '#8d8d8d' : (CONTENT.settings.accent || '#ffcc00'); ctx.fillRect(0, 0, W, H); }
  ctx.restore();
}
/* Coût mesuré à chaque image : sur un ordinateur lent, la grille grossit d'office et la cadence descend (30 → 24 → 20 images/s), puis remonte quand ça va mieux. */
const HV_REDUCE = window.matchMedia ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
const RGB = new Map();   // couleurs déjà écrites, pour ne pas reconstruire la chaîne à chaque carré
const rgbStr = (r, g, b) => { const k = (r >> 3) << 10 | (g >> 3) << 5 | (b >> 3); let v = RGB.get(k); if (!v) { v = `rgb(${r & 248},${g & 248},${b & 248})`; RGB.set(k, v); } return v; };
/* le delay ne s'applique que si l'ordinateur suit : dès que la machine peine, le mouvement redevient direct */
const hvDelay = () => (hv.floor || hv.interval > 1000 / 29 ? 1 : hv.delay);
function homeVideoStep(now) {
  if (!hv || !hv.W || now - hv.last < hv.interval) return; hv.last = now;
  const t0 = performance.now(), t = HV_REDUCE.matches ? 0 : (now - hv.t0) / 1000;
  const ctx = hv.ctx, W = hv.W, H = hv.H, cell = Math.max(hv.cell, hv.floor), cols = Math.ceil(W / cell), rows = Math.ceil(H / cell);
  ctx.fillStyle = '#0b0b0b'; ctx.fillRect(0, 0, W, H);
  if (hv.off.width !== cols || hv.off.height !== rows) { hv.off.width = hv.raw.width = cols; hv.off.height = hv.raw.height = rows; hv.fresh = true; }
  if (!hvSource(t)) return;
  /* delay : le lissage du site Fat-Man, valeur = valeur − (valeur − cible) / delay, sur chaque pixel de la grille */
  const dl = hvDelay(); hv.octx.globalAlpha = hv.fresh || dl <= 1 ? 1 : 1 / dl; hv.octx.drawImage(hv.raw, 0, 0); hv.octx.globalAlpha = 1; hv.fresh = false;
  let d = null;
  if (!hv.tainted) { try { d = hv.octx.getImageData(0, 0, cols, rows).data; } catch (e) { hv.tainted = true; } }
  if (hv.tainted) hvComposite(cols, rows, cell); else hvSquares(d, cols, rows, cell);
  /* adaptation à la machine */
  const cost = performance.now() - t0; hv.cost = hv.cost * 0.9 + cost * 0.1;
  if (hv.cost > 14 && ++hv.slow > 15) { if (hv.box) setTimeout(hvLabels, 0); hv.slow = 0; if (hv.interval < 1000 / 21) hv.interval = hv.interval < 1000 / 25 ? 1000 / 24 : 1000 / 20; else hv.floor = Math.min(40, Math.max(hv.floor, cell) + 2); }
  else if (hv.cost < 5 && ++hv.fast > 60) { if (hv.box) setTimeout(hvLabels, 0); hv.fast = 0; if (hv.floor) hv.floor = Math.max(0, hv.floor - 2); else if (hv.interval > 1000 / 30) hv.interval = hv.interval > 1000 / 22 ? 1000 / 24 : 1000 / 30; }
}
function hvSquares(d, cols, rows, cell) {
  const ctx = hv.ctx, n = cols * rows, lum = hv.lum && hv.lum.length === n ? hv.lum : (hv.lum = new Float32Array(n));
  let mn = 1, mx = 0;
  for (let i = 0, q = 0; i < n; i++, q += 4) { const l = (0.2126 * d[q] + 0.7152 * d[q + 1] + 0.0722 * d[q + 2]) / 255; lum[i] = l; if (l < mn) mn = l; if (l > mx) mx = l; }
  hv.lo += (mn - hv.lo) * 0.15; hv.hi += (Math.max(mx, hv.lo + 0.15) - hv.hi) * 0.15;   // contraste automatique, lissé dans le temps
  const lo = hv.lo, k = 1 / (hv.hi - lo), dark = hv.mode === 'dark', g = hv.gamma, max = cell * hv.fill;
  const ox = (hv.W - cols * cell) / 2, oy = (hv.H - rows * cell) / 2, useSrc = hv.color === 'source';
  if (!useSrc) { ctx.fillStyle = hv.color === 'grey' ? '#8d8d8d' : hv.color === 'accent' ? (CONTENT.settings.accent || '#ffcc00') : '#f2f2f2'; ctx.beginPath(); }
  for (let y = 0, i = 0; y < rows; y++) {
    const cy = oy + y * cell + cell / 2;
    for (let x = 0; x < cols; x++, i++) {
      let l = (lum[i] - lo) * k; l = l < 0 ? 0 : l > 1 ? 1 : l; if (dark) l = 1 - l;
      const sz = (g === 1 ? l : Math.pow(l, g)) * max; if (sz < 0.6) continue;
      const px = ox + x * cell + (cell - sz) / 2, py = cy - sz / 2;
      if (useSrc) { const q = i * 4; ctx.fillStyle = rgbStr(d[q], d[q + 1], d[q + 2]); ctx.fillRect(px, py, sz, sz); }
      else ctx.rect(px, py, sz, sz);   // une seule forme pour toute la grille : un seul dessin
    }
  }
  if (!useSrc) ctx.fill();
}

/* ================================================================ Home */
const home = document.getElementById('home'), enterBtn = document.getElementById('enter');
const ticker = document.getElementById('ticker'), tctx = ticker.getContext('2d');
let tickerDots = null, tickerX = 0, tickerDpr = 1;
const SLOGAN_KEY = 'hc-bullshit-slogans';
let typedSlogans = [];
try { const v = JSON.parse(localStorage.getItem(SLOGAN_KEY) || '[]'); if (Array.isArray(v)) typedSlogans = v.filter(x => typeof x === 'string').slice(0, 8); } catch (e) {}
/* Entrée (ou le bouton ENTER) valide le slogan tapé, s'il y en a un, puis fait entrer dans le site.
   Le slogan passe en tête du bandeau LED du visiteur et part vers la collecte (Réglages › Accueil), si elle est configurée. */
function submitSlogan() {
  const input = document.getElementById('bs'), v = input.value.replace(/\s+/g, ' ').trim().slice(0, 70);
  if (!v) return false;
  typedSlogans = [v.toUpperCase(), ...typedSlogans.filter(x => x !== v.toUpperCase())].slice(0, 8);
  try { localStorage.setItem(SLOGAN_KEY, JSON.stringify(typedSlogans)); } catch (err) {}
  liveDots = null; buildTickerDots(); tickerX = 0; input.value = '';
  document.getElementById('bs-sent').textContent = ui('sent');
  sendSlogan(v);
  return true;
}
function sendSlogan(v) {
  const inbox = (CONTENT.settings.sloganInbox || '').trim();
  if (!inbox || PREVIEW || !/^https:\/\//.test(inbox)) return;   // pas d'envoi depuis l'aperçu du back-office
  const body = JSON.stringify({ slogan: v, lang: LANG, tag: urlTag('') || '', site: location.host || 'local' });
  try { fetch(inbox, { method: 'POST', mode: 'no-cors', keepalive: true, headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body }).catch(() => {}); } catch (e) {}
}
document.getElementById('bs-form').addEventListener('submit', e => { e.preventDefault(); submitSlogan(); document.getElementById('bs').blur(); enterBtn.click(); });
/* Police LED 5 x 7, celle des afficheurs à matrice de points : chaque caractère = 7 lignes de 5 points (bit 4 = colonne de gauche). */
const LED_FONT = {
  A: '0e11111f111111', B: '1e11111e11111e', C: '0e11101010110e', D: '1c12111111121c', E: '1f10101e10101f', F: '1f10101e101010',
  G: '0e111017111f0f'.replace('1f0f', '110f'), H: '1111111f111111', I: '0e04040404040e', J: '0702020202120c', K: '11121418141211', L: '1010101010101f',
  M: '111b1515111111', N: '11111915131111', O: '0e11111111110e', P: '1e11111e101010', Q: '0e111111151 20d'.replace(/ /g, ''), R: '1e11111e141211',
  S: '0f10100e01011e', T: '1f040404040404', U: '1111111111110e', V: '1111111111 0a04'.replace(/ /g, ''), W: '1111111515150a', X: '11110a040a1111',
  Y: '1111110a040404', Z: '1f01020408101f',
  '0': '0e111315191 10e'.replace(/ /g, ''), '1': '040c040404040e', '2': '0e110102040 81f'.replace(/ /g, ''), '3': '1f020402 01110e'.replace(/ /g, ''),
  '4': '02060a121f0202', '5': '1f101e0101110e', '6': '0608101e11110e', '7': '1f010204080808', '8': '0e11110e11110e', '9': '0e11110f01020c',
  ' ': '00000000000000', '!': '04040404040004', '?': '0e110102040004', '.': '00000000000c0c', ',': '000000000c0408', ':': '000c0c000c0c00',
  ';': '000c0c000c0408', '-': '0000001f000000', '+': '0004041f040400', "'": '0c040800000000', '"': '0a0a0a00000000', '/': '00010204081000',
  '(': '02040808080402', ')': '08040202020408', '&': '0c1214081512 0d'.replace(/ /g, ''), '@': '0e11010d15150e', '#': '0a0a1f0a1f0a0a',
  '*': '0004150e150400', '=': '00001f001f0000', '%': '18190204081303', '✚': '0004 0e1f0e0400'.replace(/ /g, ''),
};
const ledGlyph = ch => {
  const c = String(ch).normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase();
  const hex = LED_FONT[c] || LED_FONT['?'];
  return Array.from({ length: 7 }, (_, r) => parseInt(hex.substr(r * 2, 2), 16) || 0);
};
/* Les chiffres de l'accueil : « auto:… » se calcule depuis le contenu, sinon la valeur écrite dans Réglages › Accueil */
function figureValue(v) {
  const pub = p => p.published && CONTENT.sections.some(s => s.id === p.section && s.visible);
  const work = CONTENT.sections.find(s => s.card === 'image' && !s.skills && s.visible);
  switch (String(v)) {
    case 'auto:years': return String(new Date().getFullYear() - (+CONTENT.settings.founded || 2012));
    case 'auto:projects': return String(CONTENT.posts.filter(p => pub(p) && work && p.section === work.id).length);
    case 'auto:partners': return String(CONTENT.posts.filter(p => pub(p) && (p.tags || []).includes('partners')).length);
    case 'auto:people': return String(CONTENT.posts.filter(p => pub(p) && (p.tags || []).some(t => ['core', 'specialists', 'artists'].includes(t))).length);
    case 'auto:cities': return String(new Set(CONTENT.posts.filter(pub).flatMap(p => (p.spots || []).map(x => x.city))).size);
    default: return String(v || '');
  }
}
const homeFigures = () => ((CONTENT.settings.home && CONTENT.settings.home.figures) || []).map(f => ({ value: figureValue(f.value), label: tr(f.label) })).filter(f => f.value && f.label);
const homeFigureLines = () => (CONTENT.settings.home.figuresInTicker ? homeFigures().map(f => `${f.value} ${f.label}`) : []);
function drawFigures() {   // les nombres comptent jusqu'à leur valeur à l'arrivée sur l'accueil
  const box = document.getElementById('offices'); if (!box) return;
  const t0 = performance.now(), nums = [...box.querySelectorAll('.fig b')].map(b => { const m = /^(\d+)(.*)$/.exec(b.dataset.v); return m && { b, n: +m[1], rest: m[2] }; }).filter(Boolean);
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const step = now => { const k = Math.min(1, (now - t0 - 500) / 1600); if (k < 0) { nums.forEach(x => { x.b.textContent = '0' + x.rest; }); requestAnimationFrame(step); return; }
    const e = 1 - Math.pow(1 - k, 4); nums.forEach(x => { x.b.textContent = Math.round(x.n * e) + x.rest; }); if (k < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}
function buildTickerDots() {   // le message en colonnes de 7 points ; les mots tapés passent en premier
  const items = [...typedSlogans, ...homeFigureLines(), ...(CONTENT.settings.home.ticker || [])].filter(Boolean);
  const text = (items.length ? items : [CONTENT.settings.name]).map(x => String(x).toUpperCase().trim()).join('   ✚   ') + '   ✚   ';
  tickerDots = dotsOf(text);
}
let liveDots = null;   // ce que le visiteur est en train de taper : le bandeau l'allume aussitôt
function dotsOf(text) {
  const cols = [];
  for (const ch of text) {
    const g = ledGlyph(ch), w = ch === ' ' ? 3 : 5;
    for (let x = 0; x < w; x++) { let m = 0; for (let r = 0; r < 7; r++) if (g[r] & (1 << (4 - x))) m |= 1 << r; cols.push(m); }
    cols.push(0);   // un point d'espace entre les lettres
  }
  return { w: cols.length, cols };
}
const LED = { pitch: 3.2, rows: 7, h: 30 };
let ledSprites = null, ledColor = '';
function ledSprite(color, lit) {   // un point : cœur net, halo doux pour les points allumés
  const k = tickerDpr, size = Math.ceil(LED.pitch * 2 * k), c = document.createElement('canvas'); c.width = c.height = size;
  const x = c.getContext('2d'), mid = size / 2;
  if (lit) { const g = x.createRadialGradient(mid, mid, 0, mid, mid, mid); g.addColorStop(0, color); g.addColorStop(0.35, color); g.addColorStop(1, 'rgba(0,0,0,0)'); x.globalAlpha = 0.35; x.fillStyle = g; x.fillRect(0, 0, size, size); x.globalAlpha = 1; }
  x.fillStyle = lit ? color : color; x.globalAlpha = lit ? 1 : 0.13;
  x.beginPath(); x.arc(mid, mid, LED.pitch * 0.38 * k, 0, Math.PI * 2); x.fill();
  if (lit) { x.globalAlpha = 0.55; x.fillStyle = '#fff'; x.beginPath(); x.arc(mid - LED.pitch * 0.1 * k, mid - LED.pitch * 0.1 * k, LED.pitch * 0.12 * k, 0, Math.PI * 2); x.fill(); }
  return c;
}
function sizeTicker() { tickerDpr = Math.min(window.devicePixelRatio || 1, 2); ticker.width = Math.round(window.innerWidth * tickerDpr); ticker.height = Math.round(LED.h * tickerDpr); ledSprites = null; }
let tickerAcc = 0;
function drawTicker(dt) {   // le texte avance d'une colonne de points à la fois, comme un vrai panneau
  const on = accent();
  if (!ledSprites || ledColor !== on) { ledColor = on; ledSprites = { on: ledSprite(on, true), off: ledSprite(on, false) }; }
  tickerAcc += dt * 26;
  if (tickerAcc >= 1) { tickerX = (tickerX + Math.floor(tickerAcc)) % tickerDots.w; tickerAcc %= 1; }
  const k = tickerDpr, p = LED.pitch, cols = Math.ceil(window.innerWidth / p) + 1, top = (LED.h - LED.rows * p) / 2;
  tctx.setTransform(1, 0, 0, 1, 0, 0); tctx.fillStyle = '#000'; tctx.fillRect(0, 0, ticker.width, ticker.height);
  const half = ledSprites.on.width / 2;
  const live = liveDots, lead = live && live.w <= cols ? Math.floor((cols - live.w) / 2) : 0;   // un mot court se pose au centre, un long défile
  for (let c = 0; c < cols; c++) {
    const m = !live ? tickerDots.cols[(tickerX + c) % tickerDots.w]
      : live.w <= cols ? (c >= lead && c < lead + live.w ? live.cols[c - lead] : 0)
      : live.cols[(tickerX + c) % live.w];
    const cx = (c * p + p / 2) * k - half;
    for (let r = 0; r < LED.rows; r++) tctx.drawImage((m >> r) & 1 ? ledSprites.on : ledSprites.off, cx, (top + r * p + p / 2) * k - half);
  }
}
let homeGone = false, assetsLoaded = false, clickedEnter = false;
const isHomeHash = () => /^(#(accueil|home|inici|inicio)?)?$/i.test(location.hash || '');
let homeTimer = 0, behindUntil = 0;   // la 3D derrière l'accueil ne se dessine que pendant les glissements
function enterToTheWeb() {
  if (homeGone) return;
  homeGone = true; clearTimeout(homeTimer); enteredAt = performance.now();
  if (!PREVIEW && isHomeHash()) try { history.pushState(null, '', location.pathname + location.search + '#' + ((CONTENT.sections.find(x => x.id === CONTENT.settings.startSection && x.visible) || SECTIONS[0].def).id)); } catch (e) {}   // le bouton Retour du navigateur ramène à l'accueil
  home.classList.add('out'); homeTimer = setTimeout(() => { home.hidden = true; stopHomeVideo(); }, 1100);
  startRender(); mainEntrance();
  sloganEl.classList.add('on');
  setTimeout(openMenu, 1500);
  kb.hidden = false; cats.classList.remove('hidden');
  canvas.focus({ preventScroll: true });
}
/* Retour à l'accueil : clic sur la signature « Hand Coded. » en haut à gauche, bouton Retour du navigateur, ou adresse …/#accueil (accueil.html) */
function backToHome(push = true) {
  if (!homeGone) return;
  checkPostOpenAndClose(); closeKeyboard(); closeCategory(); hideNetTip(); hoverCard(null); resetZoom();
  homeGone = false; clickedEnter = false; clearTimeout(homeTimer); behindUntil = performance.now() + 1300;
  enterBtn.textContent = tr(CONTENT.settings.home.enter) || ui('enter'); enterBtn.classList.remove('wait');
  home.hidden = false; void home.offsetWidth; home.classList.remove('out');
  if (hv && hv.video) hv.video.play().catch(() => {});
  if (push && !PREVIEW) try { history.pushState(null, '', location.pathname + location.search + '#accueil'); } catch (e) {}
  fitSlogan();
}
window.addEventListener('popstate', () => {
  if (PREVIEW) return;
  if (isHomeHash()) backToHome(false);
  else if (!homeGone && assetsLoaded) enterToTheWeb();
  else if (homeGone && started) {   // adresse …#studio tapée ou lien interne : on va à la section
    const i = SECTIONS.findIndex(x => x.def.id === decodeURIComponent(location.hash.slice(1).split('/')[0]));
    if (i >= 0 && i !== P.currentSection && inputEnabled) getToSectionView(i);
  }
});
sloganEl.addEventListener('click', e => { if (e.target.closest('.wm') && homeGone) backToHome(); });
sloganEl.addEventListener('keydown', e => { if ((e.code === 'Enter' || e.code === 'Space') && e.target.closest('.wm') && homeGone) { e.preventDefault(); backToHome(); } });
enterBtn.addEventListener('click', () => { submitSlogan(); clickedEnter = true; if (assetsLoaded) enterToTheWeb(); else { enterBtn.textContent = ui('loading'); enterBtn.classList.add('wait'); } });

/* ================================================================ Démarrage */
/* Lien client : ?tag=sound (ou ?cat=, ?categorie=) choisit le tag affiché en premier. Identifiant ou nom du tag, dans n'importe quelle langue, sans accents ni majuscules. */
const slugTag = v => String(v || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '');
function urlTag(fromHash) {
  let q = ''; try { const sp = new URLSearchParams(location.search); q = sp.get('tag') || sp.get('cat') || sp.get('categorie') || sp.get('category') || sp.get('tags') || ''; } catch (e) {}
  if (PREVIEW && PREVIEW.tag) q = PREVIEW.tag;
  return slugTag(q || fromHash);
}
function matchTag(def, want) {
  const tags = def.tags || [];
  const tg = tags.find(t => slugTag(t.id) === want) || tags.find(t => Object.values(t.label || {}).some(l => slugTag(l) === want));
  return tg ? tg.id : '';
}
function startRender() {
  try { renderer.compile(KEEP, camera, scene); } catch (e) {}   // compilés avec les lumières de la scène : les mêmes programmes que les cartes
  setCamera();
  const hash = (PREVIEW && PREVIEW.start) || decodeURIComponent((location.hash || '').slice(1));
  const [hSec, hTag] = hash.split('/');
  let start = SECTIONS.findIndex(s => s.def.id === hSec);
  if (start < 0) start = Math.max(0, SECTIONS.findIndex(s => s.def.id === CONTENT.settings.startSection));
  const want = urlTag(hTag || (hSec && start < 0 ? hSec : ''));   // lien client : ?tag=sound, #work/sound
  if (want) {
    const order = SECTIONS.findIndex(s => s.def.id === hSec) >= 0 ? [start] : [start, ...SECTIONS.keys()];
    for (const i of order) { const tg = matchTag(SECTIONS[i].def, want); if (tg) { start = i; SECTIONS[i].def.defaultTag = tg; break; } }
  }
  zoomBase = STYLE.cameraDistanceProportion;
  P.currentSection = start; P.resetData();
  const s = curSec();
  P.cameraY = camHeight();
  cam.x = camD() * Math.sin(P.degreeCamera) + s.p.x; cam.y = P.cameraY; cam.z = camD() * Math.cos(P.degreeCamera) + s.p.z;
  camTarget.x = s.p.x; camTarget.y = camTargetY(); camTarget.z = s.p.z;
  started = true;
  getToSectionView(start, 0); if (W <= 700 || H <= 520) setMenuPosition();   // téléphone : le menu se range tout de suite au-dessus des langues
}
let last = performance.now();
function frame(now) {
  const dt = Math.min(0.25, Math.max(0, (now - last) / 1000)); last = now; clock += dt; frames = dt * FPS;
  if (!homeGone && tickerDots) drawTicker(dt);
  if (hv && !home.hidden) homeVideoStep(now);
  if (started && (homeGone || now < behindUntil)) {
    updateTweens(); renderMachine(); if (postsView) postsView.update(); post2D.step(); updateCamera();
    renderer.render(scene, camera);
  }
  requestAnimationFrame(frame);
}
function showError(err) {
  console.error(err);
  const box = document.getElementById('load-error'); box.textContent = ui('loadError') + (err && err.message ? err.message : err); box.hidden = false;
}
/* Aperçu du back-office ouvert depuis le disque : le navigateur cloisonne les pages file://, le brouillon arrive alors par message */
async function awaitPreview() {
  if (PREVIEW || !/[?&]preview\b/.test(location.search) || window.parent === window) return;
  PREVIEW = await new Promise(res => {
    const t = setTimeout(() => res(null), 2500);
    window.addEventListener('message', e => {
      const d = e.data; if (e.source !== window.parent || !d || d.type !== 'hc-preview' || !d.data) return;
      clearTimeout(t); const pv = d.data; pv.files = Object.assign({}, pv.files);
      Object.entries(d.blobs || {}).forEach(([k, b]) => { try { pv.files[k] = URL.createObjectURL(b); } catch (err) {} });
      res(pv);
    });
    try { window.parent.postMessage({ type: 'hc-preview-ready', version: SITE_VERSION }, '*'); } catch (e) {}
  });
}
(async function boot() {
  try {
    await awaitPreview();
    if (PREVIEW) CONTENT = normalizeContent(structuredClone(PREVIEW.content));
    else { CONTENT = await backend.load(); if (backend.prepare) await backend.prepare(CONTENT); }
  } catch (err) { showError(err); return; }
  negMode = !!CONTENT.settings.negative;
  applyTypo();
  if (!PREVIEW && CONTENT.settings.negativeToggle !== false) try { const v = localStorage.getItem('hc-neg'); if (v === '1' || v === '0') negMode = v === '1'; } catch (e) {}
  let saved = null; try { saved = localStorage.getItem('hc-lang'); } catch (e) {}
  const langs = CONTENT.settings.langs && CONTENT.settings.langs.length ? CONTENT.settings.langs : LANGS;
  /* langue automatique : la première langue du navigateur que le site propose (ca, es, fr, en), sinon la langue par défaut */
  const nav = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || '']).map(l => String(l).toLowerCase().slice(0, 2)).find(l => langs.includes(l));
  LANG = langs.includes(saved) ? saved : nav || (CONTENT.settings.defaultLang || langs[0]);
  SECTIONS = CONTENT.sections.filter(s => s.visible).map(def => ({ def }));
  if (!SECTIONS.length) { showError(new Error('aucune section visible')); return; }
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) setAnimationMode(false);
  toggleActivityButton(); renderTexts(); buildMenu(); setupHomeVideo();
  resizeViewport(); setCamera(); sizeTicker();
  requestAnimationFrame(frame);
  sections = SECTIONS.map((s, i) => new SectionObject3D(s.def, i));
  SECTIONS.forEach((s, i) => { s.object = sections[i]; });
  SECTIONS.forEach(s => { s.container = s.object.container; s.p = s.object.p; });
  const loader = new ColladaLoader(manager);
  try {
    const results = await Promise.allSettled(sections.map(s => s.load(loader)));   // un modèle illisible ne bloque pas le site : sa section reste sans objet
    results.forEach((r, i) => { if (r.status === 'rejected') console.warn('Modèle 3D illisible pour la section « ' + sections[i].def.id + ' » :', r.reason); });
    sections.forEach((s, i) => s.place(i));
    await Promise.race([Promise.all(TYPO_LINKS).then(fontsReady), new Promise(r => setTimeout(r, 3000))]);   // cartes et fiches se dessinent directement avec les bonnes polices
    assetsLoaded = true;
    if (clickedEnter || !isHomeHash() || (PREVIEW && PREVIEW.start)) enterToTheWeb();
  } catch (err) { showError(err); }
})();

window.__hc = { P, STYLE, cam, camera, renderer, get hv() { return hv && { cell: hv.cell, floor: hv.floor, fps: Math.round(1000 / hv.interval), cost: +hv.cost.toFixed(1), tainted: hv.tainted }; }, get input() { return inputEnabled; }, get homeGone() { return homeGone; }, get content() { return CONTENT; }, get postsView() { return postsView; }, getToSectionView, openThatPost, closePost, goToPost, setLang, enter: () => enterBtn.click() };
