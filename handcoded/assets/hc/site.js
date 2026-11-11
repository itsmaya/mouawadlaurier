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
import { daylight } from './sun.js';
import { pageable } from './seo.js';
import { t, UI, CARDS, LANGS, StaticBackend, DemoBackend, postsOf, sanitizeHTML, htmlToText, mapCoords, escapeHTML, normalizeContent, validLoc, typoOf, typoCSS, googleFontURLs, typoFontLoads, ringLogoURL, skillsOf, projectsOf } from './store.js';

const BASE = window.HC_BASE || '';
const backend = window.HC_MODE === 'demo' ? new DemoBackend(BASE) : new StaticBackend(BASE);
const INLINE = window.HC_ASSETS || null;   // démo, ou site ouvert en local : ressources embarquées
const LOCAL = location.protocol === 'file:';   // en local, le navigateur interdit de lire les images du disque dans la 3D
/* Racine du site, fixée une fois pour toutes au chargement. L'adresse change ensuite (/fr/ox/, /es/…) sans recharger la page :
   une base relative (../../) ou absente se recalculerait depuis la nouvelle adresse, et images, vidéos et liens partiraient au mauvais endroit. */
const SITE_ROOT = (() => {
  const b = document.querySelector('base'), root = b ? document.baseURI : new URL('./', location.href).href;
  if (!LOCAL && (window.HC_ROUTE || {}).pages) { if (b) b.href = root; else { const n = document.createElement('base'); n.href = root; document.head.prepend(n); } }
  return new URL(root);
})();
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
  get categoryList() {   // "Tout" (sauf si la section s'en passe) + les tags du menu qui ont au moins un contenu publié
    const used = new Set(this.all.flatMap(p => p.tags)), tags = this.section.tags.filter(tg => used.has(tg.id) && tg.menu !== false);
    const all = { id: '', label: Object.fromEntries(LANGS.map(l => [l, (UI[l] || UI.en).all])) };
    return this.section.noAll && tags.length ? tags : [all, ...tags];
  }
  tagOf(post) { const c = this.categoryList; return post.tags.find(id => c.some(x => x.id === id)) || (c[0] ? c[0].id : ''); }   // le groupe du menu où ranger ce contenu
  changeCategory(id) {
    const list = this.categoryList;
    if (!list.some(c => c.id === id)) id = list.some(c => c.id === this.defaultCategory) ? this.defaultCategory : (list[0] ? list[0].id : '');
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
/* Écran Retina : l'image est déjà calculée deux fois plus fine, l'antialiasing matériel n'y ajoute presque rien et coûte cher à la carte graphique */
const renderer = new THREE.WebGLRenderer({ canvas, antialias: (window.devicePixelRatio || 1) < 1.75, powerPreference: 'high-performance' });
renderer.debug.checkShaderErrors = false;   // pas de lecture des journaux de compilation : le navigateur compile les shaders sans bloquer l'image
/* Finesse de l'image adaptée à la machine : on part de la pleine finesse, on descend par paliers si l'image n'arrive plus à suivre, on remonte quand ça va mieux */
const DPR_MAX = Math.min(window.devicePixelRatio || 1, 2), DPR_MIN = Math.min(DPR_MAX, DPR_MAX >= 2 ? 1.25 : 1);
let dpr = DPR_MAX, dprSlow = 0, dprFast = 0, dprAt = 0;
renderer.setPixelRatio(dpr);
/* Changer la définition vide la toile : on redessine aussitôt, dans la même image, sinon l'écran 3D clignote (Mac Retina surtout) */
function setDpr(v, now) { dpr = v; renderer.setPixelRatio(dpr); renderer.setSize(W, H, false); dprSlow = dprFast = 0; dprAt = now; try { renderer.render(scene, camera); } catch (e) {} }
function dprGovern(now, ms) {   // ms : temps entre deux images dessinées pendant que la 3D bouge
  if (now - dprAt < 1500) return;
  if (ms > 30) { dprFast = 0; if (++dprSlow > 24 && dpr > DPR_MIN) setDpr(Math.max(DPR_MIN, Math.round((dpr - 0.25) * 4) / 4), now); }
  else if (ms < 19) { dprSlow = Math.max(0, dprSlow - 1); if (++dprFast > 240 && dpr < DPR_MAX) setDpr(Math.min(DPR_MAX, dpr + 0.25), now); }
}
/* Vignettes : chaque image du site a une petite copie WebP (640 px) à côté d'elle, « photo.jpg.t.webp ». Les cartes 3D, les sommaires et les
   pastilles n'ont pas besoin de plus : 5 à 10 fois moins lourd à charger et à décoder. Si la copie manque, l'original prend le relais. */
const TN = '.t.webp';
const thumbOf = p => (p && !LOCAL && !PREVIEW_MODE() && !/^(https?:|data:|blob:)/.test(p) && /^media\/.+\.(jpe?g|png|webp)$/i.test(p) && !p.endsWith(TN) ? p + TN : p);
function PREVIEW_MODE() { return !!(window.HC_PREVIEW || /[?&]preview\b/.test(location.search)); }
document.addEventListener('error', e => { const im = e.target; if (im && im.tagName === 'IMG' && im.dataset.full && !im.dataset.fell) { im.dataset.fell = '1'; im.src = im.dataset.full; } }, true);
const smallImg = (path, attrs = '') => { const t = thumbOf(path); return `<img src="${escapeHTML(url(t))}"${t !== path ? ` data-full="${escapeHTML(url(path))}"` : ''} ${attrs}>`; };
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
function loadRaw(path) {
  if (!imgCache.has(path)) imgCache.set(path, new Promise((res, rej) => { const im = new Image(); im.decoding = 'async'; if (/^https?:/.test(url(path))) im.crossOrigin = 'anonymous'; im.onload = () => (im.decode ? im.decode().catch(() => {}) : Promise.resolve()).then(() => res(im)); im.onerror = rej; im.src = url(path); }));   // image décodée à l'avance, hors de l'image en cours
  return imgCache.get(path);
}
function loadImage(path, full = false) {   // full : l'image entière ; sinon sa vignette quand elle existe
  if (!path) return Promise.reject(new Error('no image'));
  if (LOCAL && !/^(data:|blob:|https?:)/.test(url(path))) return Promise.reject(new Error('local'));   // la carte reste typographique
  const t = full ? path : thumbOf(path);
  if (t === path) return loadRaw(path);
  const key = 'tn:' + path;
  if (!imgCache.has(key)) imgCache.set(key, loadRaw(t).catch(() => loadRaw(path)));
  return imgCache.get(key);
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
/* Blanc ou noir à l'arrivée. Réglage 'auto' : blanc quand le soleil est levé chez le visiteur, noir quand il est couché
   (position déduite du fuseau horaire du navigateur, sans rien lui demander). sunNext : prochain lever ou coucher. */
let sunNext = 0, sunTimer = 0;
const autoNeg = () => CONTENT.settings.negative === 'auto';
function arrivalNeg() {
  if (!autoNeg()) { sunNext = 0; return !!CONTENT.settings.negative; }
  const d = daylight(); sunNext = d.next; return !d.day;
}
/* Le choix du visiteur (clic sur le logo) : gardé d'une visite à l'autre ; en mode 'auto', jusqu'au prochain lever ou coucher du soleil */
function visitorNeg() {
  if (PREVIEW || CONTENT.settings.negativeToggle === false) return null;
  try { const m = /^([01])(?:@(\d+))?$/.exec(localStorage.getItem('hc-neg') || ''); if (m && (!autoNeg() || (m[2] && Date.now() < +m[2]))) return m[1] === '1'; } catch (e) {}
  return null;
}
function setNeg(v) { if (v === negMode) return; negMode = v; renderTexts(); if (postsView) postsView.retexture(); }
/* Le site bascule de lui-même au lever et au coucher du soleil si la page reste ouverte (et au retour sur un onglet resté en veille) */
function watchSun() {
  clearTimeout(sunTimer); if (!autoNeg()) return;
  const check = () => { if (Date.now() >= sunNext - 1000) { const v = arrivalNeg(), mine = visitorNeg(); setNeg(mine ?? v); } watchSun(); };
  sunTimer = setTimeout(check, Math.min(Math.max(sunNext - Date.now(), 1000), 3 * 3600e3));
}
document.addEventListener('visibilitychange', () => { if (!document.hidden && sunNext && Date.now() >= sunNext) { const v = arrivalNeg(), mine = visitorNeg(); setNeg(mine ?? v); watchSun(); } });
const invertHex = hex => { const m = /^#?([0-9a-f]{6})$/i.exec(String(hex).trim()); if (!m) return hex; return '#' + (0xffffff ^ parseInt(m[1], 16)).toString(16).padStart(6, '0'); };
const accent = () => { const a = CONTENT.settings.accent || '#ffcc00'; return NEG() ? invertHex(a) : a; };

/* ================================================================ Textures dessinées (les MovieClips de la bibliothèque, en canvas) */
let SERIF = 'Georgia, Gelasio, "Times New Roman", serif';   // Réglages › Typographie › Cartes 3D
let UIF = '"Lucida Grande", "Lucida Sans Unicode", Verdana, sans-serif';
/* Cartes 3D : le titre dans la police et la graisse des « Titres des cartes », les phrases dans celle du sous-titre des fiches (une serif italique, comme un magazine) */
let CARD_W = 400, ITF = SERIF, ITI = false, ITK = 1;
const TF = px => `${CARD_W} ${px}px ${SERIF}`;
const IT = px => `${ITI ? 'italic ' : ''}400 ${Math.round(px * ITK * 10) / 10}px ${ITF}`;
let CARD_SCALE = 1;
const fz = n => Math.round(n * CARD_SCALE);
/* Petit écran : toute la scène est réduite (largeur / 900), le texte dessiné sur les vignettes avec.
   Sous 700 px de large, les vignettes sont redessinées avec un texte plus gros et moins de lignes. */
const PHONE_W = 700;
const phoneMode = () => { const w = W || window.innerWidth, h = H || window.innerHeight; return w < PHONE_W || Math.min(w, h) < 500; };   // téléphone, debout ou couché
const phoneCards = phoneMode;
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
  if (homeGone) { placeCats(); placeReel(); }   // la signature a changé de hauteur : la sélection et le Showreel suivent
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
  const ct = typoOf(s, 'card'), sb = typoOf(s, 'subtitle'); CARD_W = ct.weight || 400; ITF = sb.css; ITI = !!sb.italic; ITK = /Instrument Serif|Playfair|Cormorant/.test(sb.css) ? 1.18 : 1;   // les serifs à petit œil sont un peu agrandies
  SERIF = ct.css; UIF = typoOf(s, 'cardsm').css; CARD_SCALE = Math.max(0.5, Math.min(2, (+typoOf(s, 'card').scale || 100) / 100));
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
/* Texte posé sur une photo : la nuit, la carte garde exactement l'aspect du jour (voile sombre, texte blanc, vraie photo).
   On la dessine comme le jour, puis on l'inverse en entier ; l'inversion de la page la remet à l'endroit. La transparence est gardée. */
function dayTex(w, h, draw, scale = 2) {
  return canvasTex(w, h, ctx => {
    const was = negMode; negMode = false;
    try { draw(ctx); } finally { negMode = was; }
    if (!was) return;
    const c = ctx.canvas;
    try {
      const d = ctx.getImageData(0, 0, c.width, c.height), a = d.data;
      for (let i = 0; i < a.length; i += 4) { a[i] = 255 - a[i]; a[i + 1] = 255 - a[i + 1]; a[i + 2] = 255 - a[i + 2]; }
      ctx.putImageData(d, 0, 0);
    } catch (e) { ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalCompositeOperation = 'difference'; ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height); ctx.restore(); }
  }, scale);
}
function drawCover(ctx, im, x, y, w, h) {
  const r = Math.max(w / im.naturalWidth, h / im.naturalHeight), sw = w / r, sh = h / r;
  ctx.drawImage(im, (im.naturalWidth - sw) / 2, (im.naturalHeight - sh) / 2, sw, sh, x, y, w, h);
  if (NEG()) { ctx.save(); ctx.globalCompositeOperation = 'difference'; ctx.fillStyle = '#fff'; ctx.fillRect(x, y, w, h); ctx.restore(); }   // photo pré-inversée
}
const initials = s => String(s).split(/[\s&/|·,–-]+/).filter(w => /[\p{L}\d]/u.test(w)).slice(0, 2).map(w => w.match(/[\p{L}\d]/u)[0].toUpperCase()).join('');   // « Peupler / Populate » : PP
function washed(draw) { return ctx => { draw(ctx); ctx.fillStyle = 'rgba(255,255,255,.8)'; ctx.fillRect(0, 0, 4000, 4000); }; }
function mirrored(w, draw) { return ctx => { ctx.translate(w, 0); ctx.scale(-1, 1); draw(ctx); }; }
/* Savoir-faire ↔ projets. Seuls les contenus des sections visibles comptent : on doit pouvoir y aller. */
const onSite = p => SECTIONS.some(s => s.def.id === p.section);
/* Une personne ou un partenaire : les projets où figure son nom dans l'équipe, ou son logo */
const byOrder = (a, b) => SECTIONS.findIndex(s => s.def.id === a.section) - SECTIONS.findIndex(s => s.def.id === b.section) || (a.order ?? 0) - (b.order ?? 0);
const linkedProjects = post => CONTENT.posts.filter(p => p.published && p !== post && onSite(p) && ((p.team || []).includes(post.id) || (post.thumb && (p.logos || []).includes(post.thumb)))).sort(byOrder);
const relProjects = post => { const s = projectsOf(CONTENT, post).filter(onSite); return s.length ? s : linkedProjects(post); };
const PERSON_TAGS = ['core', 'artists', 'specialists', 'team', 'people'];
/* un partenaire (marque, agence, lieu, festival, institution…) : tout ce qui, dans le studio, n'est pas une personne. Son logo est posé entier sur blanc. */
const isLogo = post => /(^|\/)media\/logos\//.test(post.thumb || '') || (post.section === 'studio' || (post.tags || []).includes('partners')) && (post.tags || []).length > 0 && !(post.tags || []).some(t => PERSON_TAGS.includes(t));
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
  const ph = phoneCards(), ts = ph ? 15 : Math.max(9, Math.min(13.5, w * 0.053)), ss = ph ? 11 : Math.max(7.5, ts * 0.74), pad = Math.round(ts * (ph ? 0.55 : 0.75)), tw = w - 2 * pad;   // téléphone : la caméra est plus proche, le texte plus petit
  const c = document.createElement('canvas').getContext('2d');
  const one = (txt, f) => { c.font = f; let t = txt; if (c.measureText(t).width <= tw) return [t]; while (t.length > 4 && c.measureText(t + '…').width > tw) t = t.slice(0, -1); return [t.trim() + '…']; };
  c.font = TF(ts); const tl = ph ? (title ? one(title, TF(ts)) : []) : title ? wrapLines(c, title, tw).slice(0, 2) : [];   // téléphone : une seule ligne, le titre, pour laisser voir la photo
  c.font = IT(ss); const sl = ph ? (title ? [] : one(sub, IT(ss))) : sub ? wrapLines(c, sub, tw).slice(0, 2) : [];
  const tlh = Math.round(ts * 1.2), slh = Math.round(ss * 1.25);
  const bh = Math.ceil(pad + tl.length * tlh + (sl.length ? 3 + sl.length * slh : 0) + pad - 2);
  const tex = dayTex(w, bh, ctx => {
    ctx.fillStyle = 'rgba(0,0,0,.62)'; ctx.fillRect(0, 0, w, bh);
    ctx.textBaseline = 'top'; let y = pad;
    ctx.fillStyle = '#fff'; ctx.font = TF(ts); tl.forEach(l => { ctx.fillText(l, pad, y); y += tlh; });
    y += 3; ctx.font = IT(ss); sl.forEach(l => { ctx.fillText(l, pad, y); y += slh; });
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
    const ph = phoneCards(), m = ph ? 14 : 16;   // téléphone : titre et lieu en gros, une ligne de sous-titre
    const T = ph ? [fz(31), fz(34), 2] : [fz(24), 28, 3], S = ph ? [fz(20), fz(23), 1] : [fz(13), 16, 2], dz = ph ? fz(15) : 10, sz = ph ? fz(13) : 9, sh = ph ? 26 : 20;
    ctx.fillStyle = accent(); ctx.fillRect(m, ph ? 13 : 18, 18, 2);
    ctx.fillStyle = '#fff'; ctx.font = TF(T[0]);
    const lines = wrapLines(ctx, tr(post.title), w - 2 * m).slice(0, T[2]);
    const ty = ph ? 22 : 30; lines.forEach((l, i) => ctx.fillText(l, m, ty + i * T[1]));
    ctx.font = IT(S[0]);
    wrapLines(ctx, tr(post.subtitle), w - 2 * m).slice(0, ph && lines.length < 2 ? 2 : S[2]).forEach((l, i) => ctx.fillText(l, m, ty + 8 + lines.length * T[1] + i * S[1]));
    const sig = bd ? signature(bd.project, bd.project.media[0] && bd.project.media[0].credit) : signature(post, post.media[0] && post.media[0].credit);   // la photo est signée par son projet
    ctx.font = `600 ${dz}px ${UIF}`;
    ctx.fillText([post.date, tr(post.place)].filter(Boolean).join('  ·  ').toUpperCase(), m, h - (sig ? sh + dz + 6 : dz + 12));
    if (sig) {   // signature : l'œuvre et son auteur, en bas de la vignette
      ctx.font = `${sz}px ${UIF}`; let text = sig; while (ctx.measureText(text).width > w - 2 * m && text.length > 4) text = text.slice(0, -2) + '…';
      ctx.fillStyle = 'rgba(255,255,255,.5)'; ctx.fillRect(m, h - sh, w - 2 * m, 0.6);   // un filet fin, de marge à marge
      ctx.fillStyle = '#fff'; ctx.textBaseline = 'middle'; ctx.fillText(text, m, h - sh / 2);
    }
    ctx.globalAlpha = 1;
  };
  const front = (bd ? dayTex : canvasTex)(w, h, face, 2);
  const backTex = back ? canvasTex(w, h, ctx => drawCover(ctx, back, 0, 0, w, h), 2)
    : bd ? dayTex(w, h, mirrored(w, ctx => face(ctx, true)), 2)   // vu de dos : dessiné en miroir pour rester à l'endroit
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
        ctx.fillStyle = '#141414'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; const k = phoneCards() ? 1.5 : 1; ctx.font = `600 ${Math.round(h * 0.13 * k)}px ${UIF}`;
        const ls = wrapLines(ctx, tr(post.title), w * (k > 1 ? 0.9 : 0.76)).slice(0, 3); ls.forEach((l, i) => ctx.fillText(l, w / 2, h / 2 + (i - (ls.length - 1) / 2) * h * 0.16 * k));
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
    ctx.fillStyle = '#fff'; ctx.font = IT(Math.round(h * 0.42 * CARD_SCALE)); ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(initials(tr(post.title)), w / 2, h * 0.45);
    ctx.fillStyle = accent(); ctx.fillRect(w / 2 - 8, h * 0.78, 16, 1.5);
    ctx.globalAlpha = 1;
  };
  const backTex = back ? canvasTex(w, h, ctx => drawCover(ctx, back, 0, 0, w, h), 3)
    : bd ? dayTex(w, h, mirrored(w, ctx => face(ctx, true)), 2) : canvasTex(w, h, washed(face), 2);
  return [(bd ? dayTex : canvasTex)(w, h, face, 3), backTex, (im || bd || isLogo(post)) ? hoverBand(post, w) : null];
}
async function textCard(post, w, h) {
  const bd = await skillBackdrop(post);
  if (bd) return textCardPhoto(post, w, h, bd);
  const im = post.thumb ? await loadImage(post.thumb).catch(() => null) : null;
  await fontsReady();
  const title = tr(post.title).trim(), ph = phoneCards(), tz = ph ? fz(30) : fz(21), tl = ph ? fz(32) : 22, tn = ph ? 2 : 3;
  const x0 = im ? 72 : 18, tw = w - x0 - 14;
  const front = canvasTex(w, h, ctx => {
    ctx.fillStyle = '#333'; ctx.fillRect(0, 0, w, h);
    if (im) drawCover(ctx, im, 13, 12.75, 53, 53); else { ctx.fillStyle = accent(); ctx.fillRect(18, 14, 14, 2); }
    ctx.fillStyle = '#fff'; ctx.font = TF(tz); ctx.textBaseline = 'top';
    wrapLines(ctx, title, tw).slice(0, tn).forEach((l, i) => ctx.fillText(l, x0, (im ? 12 : 20) + i * tl));
  });
  const back = canvasTex(w, h, mirrored(w, ctx => {   // le dos est vu de derrière : dessiné en miroir pour rester lisible
    ctx.fillStyle = 'rgba(255,255,255,.7)'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#c4c4c4'; ctx.font = TF(tz); ctx.textBaseline = 'top';
    wrapLines(ctx, title, tw).slice(0, tn).forEach((l, i) => ctx.fillText(l, x0, (im ? 9 : 17) + i * tl));
  }));
  return [front, back];
}
async function textCardPhoto(post, w, h, bd) {   // bandeau de savoir-faire : la photo d'un projet en fond
  await fontsReady();
  const title = tr(post.title).trim(), tw = w - 32, ph = phoneCards(), tz = ph ? fz(30) : fz(21), tl = ph ? fz(32) : 22;
  const draw = faint => ctx => {
    veil(ctx, bd, w, h, faint ? 0.2 : ph ? 0.7 : 0.62);
    if (faint) ctx.globalAlpha = 0.32;
    ctx.fillStyle = accent(); ctx.fillRect(18, 14, 14, 2);
    ctx.fillStyle = '#fff'; ctx.font = TF(tz); ctx.textBaseline = 'top';
    wrapLines(ctx, title, tw).slice(0, ph ? 2 : 3).forEach((l, i) => ctx.fillText(l, 18, 20 + i * tl));
    ctx.globalAlpha = 1;
  };
  return [dayTex(w, h, draw(false), 2), dayTex(w, h, mirrored(w, draw(true)), 2)];
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
  const flat = h < 110, ph = phoneCards();
  /* téléphone : le texte prend toute la largeur, l'image passe en fond sous un voile */
  const iw = bd && !ph ? Math.round(flat ? h * 1.15 : Math.min(w * 0.36, h * 0.8)) : 0;
  const x0 = 14, tw = w - iw - x0 - 12;
  const [ts, tl, ss, sl] = ph ? (flat ? [28, 31, 0, 1] : [36, 40, 0, 1]) : flat ? [15, 18, 9.5, 12] : [17, 20, 10.5, 13.5];   // téléphone : le titre seul, en gros
  /* Dos, vu de derrière : la photo seule en plein cadre, le titre en transparence. Au survol, un voile et le titre bien lisible s'y posent. */
  const titleOnly = (ctx, a) => {
    ctx.globalAlpha = a; ctx.textBaseline = 'top'; const bw = w - x0 - 12;
    ctx.fillStyle = accent(); ctx.fillRect(x0, flat ? 9 : 13, 14, 2);
    ctx.fillStyle = '#fff'; ctx.font = TF(fz(ts)); let y = flat ? 16 : 22;
    wrapLines(ctx, title, bw).slice(0, ph ? 3 : 2).forEach(l => { ctx.fillText(l, x0, y); y += fz(tl); });
    ctx.globalAlpha = 1;
  };
  const backBase = ctx => { ctx.fillStyle = '#111'; ctx.fillRect(0, 0, w, h); if (bd) { drawCover(ctx, bd.im, 0, 0, w, h); ctx.fillStyle = 'rgba(0,0,0,.18)'; ctx.fillRect(0, 0, w, h); } titleOnly(ctx, 0.38); };
  const backHi = ctx => { const g = ctx.createLinearGradient(0, 0, 0, h); g.addColorStop(0, 'rgba(0,0,0,.7)'); g.addColorStop(1, 'rgba(0,0,0,.3)'); ctx.fillStyle = g; ctx.fillRect(0, 0, w, h); titleOnly(ctx, 1); };
  /* téléphone : une couverture de magazine. La photo en plein cadre, le nombre de projets en haut,
     le nom en italique en bas, et sa phrase en petit dessous. */
  const cover = ctx => {
    ctx.fillStyle = '#111'; ctx.fillRect(0, 0, w, h);
    if (bd) { drawCover(ctx, bd.im, 0, 0, w, h); ctx.fillStyle = 'rgba(0,0,0,.22)'; ctx.fillRect(0, 0, w, h); }
    const g = ctx.createLinearGradient(0, h * 0.3, 0, h); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,.82)'); ctx.fillStyle = g; ctx.fillRect(0, h * 0.3, w, h * 0.7);
    const pad = Math.round(w * 0.07), tw2 = w - 2 * pad, n = relProjects(post).length;
    ctx.textBaseline = 'top'; ctx.fillStyle = '#fff';
    if (n) { ctx.font = `600 ${fz(11)}px ${UIF}`; ctx.fillText(`${n} ${ui('nProjects')}`.toUpperCase(), pad, pad); }
    const sub = tr(post.subtitle).trim(); ctx.font = `${fz(11.5)}px ${UIF}`; const subL = sub ? wrapLines(ctx, sub, tw2).slice(0, 2) : [];
    let y = h - pad - subL.length * fz(14);
    subL.forEach((l, i) => ctx.fillText(l, pad, y + i * fz(14)));
    ctx.font = IT(fz(26)); const tl2 = wrapLines(ctx, title, tw2).slice(0, 2); y -= (subL.length ? fz(6) : 0) + tl2.length * fz(25);
    tl2.forEach((l, i) => ctx.fillText(l, pad, y + i * fz(25)));
  };
  const draw = faint => ctx => {
    if (ph && !faint) { cover(ctx); return; }
    ctx.fillStyle = '#111'; ctx.fillRect(0, 0, w, h);
    if (bd && ph && !faint) veil(ctx, bd, w, h, 0.6);
    if (bd && !ph) drawCover(ctx, bd.im, w - iw, 0, iw, h);
    ctx.textBaseline = 'top';
    ctx.fillStyle = accent(); ctx.fillRect(x0, flat ? 9 : 13, 14, 2);
    ctx.fillStyle = '#fff'; ctx.font = TF(fz(ts));
    const tls = wrapLines(ctx, title, tw).slice(0, ph ? 3 : 2); let y = flat ? 16 : 22;
    tls.forEach(l => { ctx.fillText(l, x0, y); y += fz(tl); });
    y += flat ? 2 : 5; ctx.font = IT(fz(ss));
    const room = ph ? 0 : Math.max(0, Math.floor((h - y - 8) / fz(sl)));
    let sls = wrapLines(ctx, sum, tw); if (sls.length > room) { sls = sls.slice(0, room); if (room) { let last = sls[room - 1]; while (last && ctx.measureText(last + '…').width > tw) last = last.replace(/\s*\S+$/, ''); sls[room - 1] = last + '…'; } }
    sls.forEach(l => { ctx.fillText(l, x0, y); y += fz(sl); });
    ctx.globalAlpha = 1;
  };
  return [(bd ? dayTex : canvasTex)(w, h, draw(false), 2), (bd ? dayTex : canvasTex)(w, h, mirrored(w, backBase), 2), null, (bd ? dayTex : canvasTex)(w, h, mirrored(w, backHi), 2)];
}
function infoTexture(post, kind) {
  return fontsReady().then(() => {
    if (kind === 'place') return canvasTex(380, 300, ctx => {   // MovieClip "contact"
      const X = 30, TW = 380 - 2 * X, c = contactParts(sanitizeHTML(tr(post.body)));
      const fit = (t, f) => { ctx.font = f; let l = t; while (l && ctx.measureText(l).width > TW) l = l.slice(0, -2).trim() + '…'; return l; };
      ctx.fillStyle = '#000'; ctx.fillRect(0, 0, 380, 300); ctx.textBaseline = 'top';
      ctx.fillStyle = accent(); ctx.fillRect(X, 24, 16, 2);
      let title = tr(post.title).trim(); if (title && !/[.!?]$/.test(title)) title += '.';
      ctx.fillStyle = '#fff'; ctx.font = TF(fz(40)); let y = 36; wrapLines(ctx, title, TW).slice(0, 1).forEach(l => { ctx.fillText(l, X, y); y += fz(44); });
      ctx.font = IT(fz(17)); wrapLines(ctx, tr(post.subtitle), TW).slice(0, 2).forEach(l => { ctx.fillText(l, X, y); y += fz(21); });
      y = Math.max(y + 16, 150);
      if (!c.ok) { ctx.font = `13px ${UIF}`; htmlToText(tr(post.body)).slice(0, 5).forEach(l => { ctx.fillText(fit(l, `13px ${UIF}`), X, y); y += 19; }); return; }
      if (c.mail[0]) { ctx.fillStyle = accent(); ctx.fillText(fit(c.mail[0], `600 16px ${UIF}`), X, y); y += 24; }
      ctx.fillStyle = '#fff'; if (c.tel[0]) { ctx.fillText(fit(c.tel[0], `15px ${UIF}`), X, y); y += 26; }
      ctx.fillStyle = 'rgba(255,255,255,.62)';
      (c.addr[0] || '').split(/\s+[.·•|]\s+/).slice(0, 3).forEach(l => { if (y < 282) { ctx.fillText(fit(l, `12.5px ${UIF}`), X, y); y += 17; } });
    }, 1.5);
    if (phoneCards()) return canvasTex(200, 200, ctx => {   // téléphone : le nom, la phrase et les projets en gros, sans le texte long
      ctx.fillStyle = '#000'; ctx.fillRect(0, 0, 200, 200); ctx.textBaseline = 'top';
      ctx.fillStyle = '#fff'; ctx.font = TF(fz(25));
      const name = wrapLines(ctx, tr(post.title) + '.', 172).slice(0, 2); name.forEach((l, i) => ctx.fillText(l, 14, 12 + i * fz(27)));
      ctx.font = `${fz(13)}px ${UIF}`;
      const projs = linkedProjects(post).map(p => tr(p.title).trim()).filter(Boolean);
      const pl = projs.length ? wrapLines(ctx, projs.join('  ·  '), 172).slice(0, 2) : [];
      const bottom = tr(post.place) ? 168 : 188, pTop = bottom - pl.length * 16 - 16;
      let y = 18 + name.length * fz(27);
      ctx.font = IT(fz(17));
      const lim = (pl.length ? pTop - 6 : bottom) - fz(20);
      const sub = wrapLines(ctx, tr(post.subtitle), 172), sl = [];
      for (const l of sub) { if (y > lim) break; sl.push(l); y += fz(20); }
      if (sl.length < sub.length && sl.length) { let last = sl[sl.length - 1]; while (last && ctx.measureText(last + '…').width > 172) last = last.replace(/\s*\S+$/, ''); sl[sl.length - 1] = last + '…'; }
      sl.forEach((l, i) => ctx.fillText(l, 14, 18 + name.length * fz(27) + i * fz(20)));
      if (pl.length) {
        ctx.font = `600 ${fz(11)}px ${UIF}`; ctx.fillText(ui('together').toUpperCase(), 14, pTop);
        ctx.font = `${fz(13)}px ${UIF}`; pl.forEach((l, i) => ctx.fillText(l, 14, pTop + 16 + i * 16));
      }
      if (tr(post.place)) { ctx.font = `600 ${fz(13)}px ${UIF}`; ctx.fillText(tr(post.place).toUpperCase(), 14, 176); }
    }, 2.5);
    return canvasTex(200, 200, ctx => {   // MovieClip "people"
      ctx.fillStyle = '#000'; ctx.fillRect(0, 0, 200, 200); ctx.textBaseline = 'top';
      ctx.fillStyle = '#fff'; ctx.font = TF(fz(20));
      const name = wrapLines(ctx, tr(post.title) + '.', 166).slice(0, 2); name.forEach((l, i) => ctx.fillText(l, 18, 14 + i * 22));
      let y = 20 + name.length * 22;
      ctx.font = `10px ${UIF}`;   // ses projets avec nous, en bas de la fiche
      const projs = linkedProjects(post).map(p => tr(p.title).trim()).filter(Boolean);
      const pl = projs.length ? wrapLines(ctx, projs.join('  ·  '), 166).slice(0, 3) : [];
      const pTop = (tr(post.place) ? 174 : 188) - pl.length * 13 - 13;
      ctx.font = IT(fz(15));   // la phrase s'arrête avant le bloc des projets
      const lim = (pl.length ? pTop - 4 : 168) - 18, sub = [];
      tr(post.subtitle).split(/(?<=\.)\s+/).forEach(l => wrapLines(ctx, l, 166).forEach(s => sub.push(s)));
      const shown = []; for (const s of sub) { if (y > lim) break; shown.push(s); y += 18; }
      if (shown.length < sub.length && shown.length) { let last = shown[shown.length - 1]; while (last && ctx.measureText(last + '…').width > 166) last = last.replace(/\s*\S+$/, ''); shown[shown.length - 1] = last + '…'; }
      shown.forEach((s, i) => ctx.fillText(s, 19, 20 + name.length * 22 + i * 18));
      ctx.font = `11px ${UIF}`;
      htmlToText(tr(post.body)).join(' ').split(/\s+/).length > 1 && wrapLines(ctx, htmlToText(tr(post.body)).join(' '), 166).slice(0, Math.max(0, Math.floor(((pl.length ? pTop - 6 : 176) - y) / 14))).forEach(s => { ctx.fillText(s, 19, y + 4); y += 14; });
      if (pl.length) {
        ctx.font = `600 8px ${UIF}`; ctx.fillText(ui('together').toUpperCase(), 19, pTop);
        ctx.font = `10px ${UIF}`; pl.forEach((l, i) => ctx.fillText(l, 19, pTop + 13 + i * 13));
      }
      if (tr(post.place)) { ctx.font = `600 11px ${UIF}`; ctx.fillText(tr(post.place).toUpperCase(), 19, 180); }
    });
  });
}

function netLabel(text, strong) {   // étiquette de ville, toujours tournée vers la caméra
  const fs = 20, padX = 7, c = document.createElement('canvas'), ctx = c.getContext('2d');
  ctx.font = `${strong ? 'bold ' : ''}${fs}px ${UIF}`; const w = Math.ceil(ctx.measureText(text).width) + 2 * padX, hh = fs + 10;
  c.width = w * 2; c.height = hh * 2; ctx.scale(2, 2);
  ctx.fillStyle = strong ? '#111' : 'rgba(255,255,255,.88)'; ctx.fillRect(0, 0, w, hh);
  ctx.font = `${strong ? 'bold ' : ''}${fs}px ${UIF}`; ctx.textBaseline = 'middle'; ctx.fillStyle = strong ? '#fff' : '#333'; ctx.fillText(text, padX, hh / 2 + 1);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: prepTex(new THREE.CanvasTexture(c)), transparent: true, depthTest: false }));   // au-dessus des arcs et des points : le nom reste lisible
  sp.center.set(0.5, 0); const H0 = 20; sp.scale.set(H0 * w / hh, H0, 1); sp.renderOrder = 5;
  return sp;
}
const netTip = document.createElement('div'); netTip.id = 'net-tip'; netTip.className = 'ui'; netTip.hidden = true; document.body.appendChild(netTip);
function showNetTip(n, x, y) {
  netTip.innerHTML = `<b>${escapeHTML(n.city || '')}</b>${n.titles.map(tt => `<span>${escapeHTML(tt)}</span>`).join('')}`;
  netTip.hidden = false; const r = netTip.getBoundingClientRect();
  netTip.style.left = Math.min(x + 14, W - r.width - 10) + 'px'; netTip.style.top = Math.max(10, y - r.height - 12) + 'px';
}
function hideNetTip() { netTip.hidden = true; }

/* Les points d'accroche des fils : les sommets où se rejoignent le plus de faces (le cœur des fleurs de la lampe,
   les nœuds de la racine), regroupés quand ils sont voisins. En coordonnées du conteneur de la section. */
function modelAnchors(root) {
  root.updateMatrixWorld(true);
  const pts = [], v = new THREE.Vector3(), inv = root.matrixWorld.clone().invert();
  root.traverse(o => {
    if (!o.isMesh || !o.geometry || !o.geometry.attributes.position) return;
    const g = o.geometry; g.computeBoundingBox(); const s = g.boundingBox.getSize(new THREE.Vector3());
    if (Math.min(s.x, s.y, s.z) < 1e-6 * Math.max(s.x, s.y, s.z, 1e-9)) return;   // le sol, à plat
    const pos = g.attributes.position, idx = g.index, n = idx ? idx.count : pos.count, map = new Map(), q = Math.max(s.x, s.y, s.z) / 2000;
    for (let k = 0; k < n; k++) {
      const j = idx ? idx.getX(k) : k, key = Math.round(pos.getX(j) / q) + ',' + Math.round(pos.getY(j) / q) + ',' + Math.round(pos.getZ(j) / q);
      let e = map.get(key); if (!e) map.set(key, e = { j, n: 0 }); e.n++;
    }
    const m = new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld);
    map.forEach(e => { v.fromBufferAttribute(pos, e.j).applyMatrix4(m); pts.push({ p: v.clone(), n: e.n }); });
  });
  if (!pts.length) return null;
  const top = Math.max(...pts.map(x => x.n)); if (top < 8) return null;
  const box = new THREE.Box3(); pts.forEach(x => box.expandByPoint(x.p)); const R = box.getSize(new THREE.Vector3()).length() * 0.09;
  const cl = [];
  pts.filter(x => x.n >= top * 0.8).forEach(x => {
    let c = cl.find(c => c.c.distanceTo(x.p) < R); if (!c) cl.push(c = { s: new THREE.Vector3(), w: 0, c: x.p.clone() });
    c.s.addScaledVector(x.p, x.n); c.w += x.n; c.c.copy(c.s).divideScalar(c.w);
  });
  const wMax = Math.max(...cl.map(c => c.w));
  const out = cl.filter(c => c.w >= wMax * 0.3).map(c => c.c);
  return out.length ? out : null;
}

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
    try { this.anchors = modelAnchors(this.container); } catch (e) { this.anchors = null; }
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
  build(texFront, texBack, band = null, backHi = null) {
    const geo = new THREE.PlaneGeometry(this.width, this.height);
    this.setBand(band);
    if (backHi) {   // le titre lisible du dos, posé juste derrière la carte, apparaît au survol
      const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: backHi, side: THREE.BackSide, transparent: true, opacity: 0, depthWrite: false }));
      m.position.z = -0.4; m.renderOrder = 1; m.visible = false; m.raycast = () => {};
      this.bhi = { mesh: m, k: 0, drawn: -1 }; this.group.add(m);
    }
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
    const b = this.bhi; if (b && b.k !== b.drawn) { b.drawn = b.k; b.mesh.material.opacity = Math.max(0, Math.min(1, b.k)); b.mesh.visible = b.k > 0.002; }
  }
  hoverBack(on) { const b = this.bhi; if (b) to(b, on ? 0.6 : 0.45, { k: on ? 1 : 0 }, { ease: on ? 'expoOut' : 'quartOut' }); }
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
  dispose() { this.setBand(null); killTweensOf(this.thumb); if (this.bhi) killTweensOf(this.bhi); this.group.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material && !LINE_MATS.includes(o.material)) { if (o.material.map) o.material.map.dispose(); o.material.dispose(); } }); }
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
    position(view, p, i) { const c = this.coords(view, i), d = this.offset(i), k = camK(view.def); return { x: c[0] + d[0], y: 0.8 * (STYLE.planeDistance + p.height + Math.pow(-1, i + 1) * STYLE.planeDisOrder / (Math.random() + 1)) * Math.sin(view.angle * (i + 1)) * Math.min(1, 0.2 + k), z: c[1] + d[1], rotY: 180 }; },   // caméra plus proche : les fiches descendent vers la carte (20 % plus bas qu'à l'origine)
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

/* ================================================================ Téléphone : les vignettes en grille, face à la caméra
   Debout, la grille s'allonge en hauteur ; couché, en largeur. Le nombre de colonnes est celui qui donne les plus grandes
   vignettes dans la place laissée libre par le menu, la signature et le logo, et la caméra s'approche pour la cadrer.
   Sur grand écran, rien ne change. */
const GRID_LAYOUTS = ['fan', 'arc', 'map'];
const gridWanted = def => phoneMode() && GRID_LAYOUTS.includes(def.layout);
const ZOOMF = () => CAMERA.zoom * CAMERA.focus * Math.min(1, W / 900);   // pixels à l'écran pour une unité à une unité de l'œil
function freeRect() {   // la zone de l'écran que l'interface laisse libre
  const box = id => { const el = document.getElementById(id); if (!el || el.hidden) return null; const b = el.getBoundingClientRect(); return b.width && b.height ? b : null; };
  const m = 12, r = { l: m, t: m, r: W - m, b: H - m };
  const tops = ['slogan', 'logo', 'reel-btn', 'lang-sq', 'about-btn'].map(box).filter(Boolean), bots = ['menu', 'langs', 'cats', 'kb'].map(box).filter(Boolean);
  if (H >= W) {   // debout : la signature en haut, le menu en bas
    tops.forEach(b => { r.t = Math.max(r.t, b.bottom + 8); });
    bots.forEach(b => { r.b = Math.min(r.b, b.top - 8); });
  } else {        // couché : la signature et le menu à gauche, le logo à droite, les tags en bas à droite
    [box('slogan'), box('menu'), box('langs'), box('reel-btn'), box('lang-sq'), box('about-btn')].filter(Boolean).forEach(b => { if (b.left < W / 2) r.l = Math.max(r.l, b.right + 10); });
    [box('logo'), box('reel-btn')].filter(Boolean).forEach(b => { if (b.left > W / 2) r.r = Math.min(r.r, b.left - 10); });
    [box('cats'), box('kb')].filter(Boolean).forEach(b => { if (b.left < r.r && b.right > r.l) r.b = Math.min(r.b, b.top - 8); });
  }
  if (r.r - r.l < 120) { r.l = m; r.r = W - m; }
  if (r.b - r.t < 120) { r.t = m; r.b = H - m; }
  return r;
}
function computeGrid(view) {
  const fr = freeRect(), aw = fr.r - fr.l, ah = fr.b - fr.t, place = view.def.layout === 'map' && view.card === 'place';
  const w = view.w * view.k + STYLE.planeFrameDistance, h = view.h * view.k + STYLE.planeFrameDistance;
  const uw = place ? 1.5 * w + 102.5 : w, uh = place ? Math.max(h, 130) : h, g = Math.round(Math.min(uw, uh) * 0.1) + 6;   // un lieu : la carte et sa fiche, côte à côte
  let best = null; const n = Math.max(1, view.n);
  for (let c = 1; c <= n; c++) {
    const rows = Math.ceil(n / c), gw = c * uw + (c - 1) * g, gh = rows * uh + (rows - 1) * g, sc = Math.min(aw / gw, ah / gh);
    if (!best || sc > best.sc + 1e-9) best = { cols: c, rows, gw, gh, sc };
  }
  const yOff = view.container.position.y - view.section.container.position.y, floor = place ? 140 : 40;
  return { ...best, sc: best.sc * 0.94, uw, uh, g, aw, ah, rk: [fr.l, fr.t, fr.r, fr.b].map(Math.round).join(), fx: (fr.l + fr.r) / 2 - W / 2, fy: (fr.t + fr.b) / 2 - H / 2,
    zg: 200, gy: floor + best.gh / 2 - yOff, yOff, dx: place ? (w / 2 + 102.5) / 2 : 0 };
}
const gridPos = (view, i) => {
  const G = view.grid, c = i % G.cols, r = Math.floor(i / G.cols), rowN = Math.min(G.cols, view.n - r * G.cols);
  return { x: ((rowN - 1) / 2 - c) * (G.uw + G.g) + G.dx, y: G.gy + ((G.rows - 1) / 2 - r) * (G.uh + G.g), z: G.zg + Math.pow(-1, i) * Math.random() * STYLE.planeDisOrder * 0.1, rotY: 180 };   // de gauche à droite, de haut en bas
};
const TAU = 2 * Math.PI;
const frontDeg = deg => deg + ((((Math.PI - deg) % TAU) + TAU + Math.PI) % TAU - Math.PI);   // l'angle face à la grille le plus proche
function gridLayout(base) {
  return {
    grid: true, base, open: base.open, lineStart: base.lineStart,
    lineEnd: base.lineEnd && base.gridLines !== false ? (p, view, i) => base.lineEnd.call(base, p, view, i) : undefined,
    preset() {}, position: (view, p, i) => gridPos(view, i),
    focus(view, id) {   // la vignette sort de la grille vers la caméra, avec le geste de sa disposition d'origine
      const pv2 = view.postViews[id]; if (!pv2) return;
      P.selected = id; P.degreeCamera = frontDeg(P.degreeCamera); P.cameraY = camHeight();
      if (!pv2.ready) return;
      pv2.selectIt(); pv2.jump(pv2.p2.x, pv2.p2.y, pv2.p2.z + 70);
      const B = base.orig || base; if (B === LAYOUT.fan) pv2.turnAround('x', 720); else if (B === LAYOUT.arc) pv2.turnAround('y', 360);
    },
    move: (view, dx, dy, k) => base.move.call(base, view, dx, dy, k),
  };
}

/* Les fils vont de la carte au cœur de fleur (ou au nœud) qui lui fait face, un par carte tant qu'il en reste de ce côté.
   La disposition, les mouvements et les animations des cartes restent ceux d'origine : seul le bout du fil change. */
function anchoredLayout(base, view) {
  const L = Object.create(base), own = [], used = new Map();
  const local = () => {   // les accroches dans le repère des cartes
    const yOff = view.container.position.y - view.section.container.position.y;
    return view.section.anchors.map(a => [-a.x, a.y - yOff, a.z]);
  };
  L.orig = base; L.gridLines = false; L.addedLines = !base.lineEnd;   // fils ajoutés : suivis à part, les cartes gardent leur comportement
  L.lineStart = base.lineStart || ((p, th) => [th.x, th.y - p.height / 2, th.z]);
  L.lineEnd = function (q, v, i) {
    if (own[i] == null) {
      const A = local(), c = [0, 1, 2].map(k => A.reduce((s, a) => s + a[k], 0) / A.length);
      const dir = a => { const d = [a[0] - c[0], a[1] - c[1], a[2] - c[2]], l = Math.hypot(...d) || 1; return d.map(x => x / l); };
      const cd = dir([q.x, q.y, q.z]);
      const score = A.map((a, k) => { const d = dir(a); return [k, d[0] * cd[0] + d[1] * cd[1] + d[2] * cd[2]]; }).sort((a, b) => b[1] - a[1]);
      const free = score.find(([k, s]) => !used.has(k) && s > score[0][1] - 0.6);
      own[i] = (free || score[0])[0]; used.set(own[i], i);
    }
    return local()[own[i]];
  };
  return L;
}

const _side = new THREE.Vector3(), _back = new THREE.Vector3();
class PostsView3D {
  constructor(section) {
    this.section = section; this.def = section.def;
    this.base = this.L = LAYOUT[this.def.layout] || LAYOUT.carousel;
    if (section.anchors && (this.def.layout === 'carousel' || (this.def.layout === 'arc' && this.def.skills))) this.base = this.L = anchoredLayout(this.base, this);
    this.card = this.def.card;
    this.posts = P.data.posts.slice(); this.n = this.posts.length;
    this.tex = this.def.skills ? skillCard : CARD_TEX[this.card];   // savoir-faire : le texte d'abord, l'image l'illustre
    [this.w, this.h] = this.def.skills ? (this.card === 'text' ? CARDS.text.size : CARDS.image.size) : CARDS[this.card].size; this.k = cardK(this.def);   // textures à la taille d'origine, cartes agrandies ou réduites
    this.container = new THREE.Group(); this.container.position.copy(section.container.position); scene.add(this.container);
    this.postViews = this.posts.map((_, i) => new PostView(this, this.w * this.k, this.h * this.k, i));
    this.lines = []; this.following = new Set(); this.trail = new Set(); this.infos = []; this.alive = true;
    this.L.preset.call(this.L, this);
    if (gridWanted(this.def)) { this.grid = computeGrid(this); this.L = this.gridL = gridLayout(this.base); }
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
        const lb = netLabel(n.city.toUpperCase() + (n.titles.length > 1 && !n.base ? ' · ' + n.titles.length : ''), n.base), lw = lb.scale.x;   // la vraie largeur du nom : les noms longs se gênent plus tôt
        for (const o of labeled) { const need = Math.max(Math.abs(o[0] - x) / ((o[3] + lw) / 2 + 6), Math.abs(o[1] - z) / 24); if (need < o[2]) thr = Math.min(thr, need); }
        if (thr > 0.06) { label = lb; label.position.set(...postLocal(x, Y + 9, z)); g.add(label); labeled.push([x, z, thr, lw]); } else { lb.material.map.dispose(); lb.material.dispose(); }
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
      this.postViews[i].build(tex[0], tex[1], tex[2], tex[3]);
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
    const done = () => { if (--pending <= 0) { this.following.delete(p); this.trail.delete(p); if (L.lineEnd) this.followLine(p, i); } };
    if (L.open === 'twoStep') {
      pending = 2;
      to(p.thumb, timeAnim, { y: q.y, rotX: 0 }, { delay: STYLE.planeSpeed / 3, ease: 'expoOut', onComplete: done });
      to(p.thumb, timeAnim, { x: q.x, z: q.z, rotY: q.rotY, scale: 1 }, { ease: 'circOut', onComplete: done });
    } else { pending = 1; to(p.thumb, timeAnim, { x: q.x, y: q.y, z: q.z, rotY: q.rotY, rotX: 0, scale: 1 }, { ease: 'circOut', onComplete: done }); }
    p.apply(); this.container.add(p.group);
    if (L.lineEnd) { (L.addedLines ? this.trail : this.following).add(p); this.followLine(p, i); }
    if (this.def.layout === 'map' && this.card === 'place') this.openInfo(p, i, timeAnim);
  }
  followLine(p, i) {
    if (!this.L.lineEnd) return;
    const a = this.L.lineStart(p, p.thumb), b = this.L.lineEnd.call(this.L, p.p2, this, i);
    const pts = [...postLocal(...a), ...postLocal(...b)];
    let l = this.lines[i]; if (!l) { l = this.lines[i] = makeSegments(pts, lineMatCenter); this.container.add(l); } else { l.geometry.setPositions(pts); l.visible = true; }
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
    if (this.L.grid) this.gridToCamera(p, STYLE.tween); else p.moveToCamera(60, STYLE.tween);
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
  /* Changement de format (rotation, fenêtre) : grille ↔ disposition d'origine. Les vignettes glissent vers leur nouvelle place. */
  relayout() {
    const want = gridWanted(this.def), was = !!this.L.grid;
    if (!want && !was) return false;
    const G = want ? computeGrid(this) : null, old = this.grid;
    const same = want && was && old && ['cols', 'rows', 'uw', 'uh', 'gy'].every(k => Math.abs(G[k] - old[k]) < 0.5);
    this.grid = G || old; this.L = want ? (this.gridL || (this.gridL = gridLayout(this.base))) : this.base;
    if (!this.L.lineEnd) this.lines.forEach(l => { if (l) l.visible = false; });   // grille sans fils : ceux de la disposition d'origine se cachent
    if (same) return true;   // même grille : seule la caméra recadre
    const T = STYLE.tween * 1.2;
    const held = P.postOpen && curOpenMode() === 'focus3d' ? P.selected : -1;   // la personne ouverte reste devant la caméra
    this.postViews.forEach((p, i) => {
      if (!p.ready) return;
      const pos = this.L.position.call(this.L, this, p, i); p.setPosition(pos.x, pos.y, pos.z, pos.rotY);
      if (i === held) return;
      const opening = this.following.has(p); killTweensOf(p.thumb); this.following.add(p);
      to(p.thumb, T, { x: pos.x, y: pos.y, z: pos.z, rotX: 0, rotY: pos.rotY, rotZ: 0, scale: 1 }, { ease: 'quartOut', onComplete: () => { if (!opening) this.following.delete(p); if (this.L.lineEnd) this.followLine(p, i); } });
      const inf = this.infos[i]; if (inf) { killTweensOf(inf.p); to(inf.p, T, { x: pos.x - p.width - 20, y: pos.y, z: pos.z }, { ease: 'quartOut' }); }
    });
    return true;
  }
  /* Grille : la vignette ouverte (studio) vient se poser devant la caméra, avec sa fiche à droite, au centre de la place libre */
  gridToCamera(p, time) {
    const G = this.grid, o = orbitNow(), zf = ZOOMF(), pairW = 2 * p.width + 3;
    const depth = Math.max(90, zf * Math.max(pairW / (G.aw * 0.92), p.height / (G.ah * 0.85)));
    const eyeZ = camD() + CAMERA.focus, k = depth / zf;
    const ax = this.section.p.x - o.x, ay = o.ty - this.container.position.y;   // l'axe de la caméra, en coordonnées des vignettes
    killTweensOf(p.thumb);
    to(p.thumb, time, { x: ax - G.fx * k + (p.width + 3) / 2, y: ay - G.fy * k, z: eyeZ - depth, rotY: p.p2.rotY + 720, rotX: 0, rotZ: 0 }, { ease: 'quartOut' });
  }
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
    this.following.forEach(p => this.followLine(p, p.id_)); this.trail.forEach(p => this.followLine(p, p.id_));
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
      if (!this.alive) { [tex[0], tex[1], tex[2] && tex[2].tex, tex[3]].forEach(x => x && x.dispose()); return; }
      const k = pv2.band ? pv2.band.k : 0;
      pv2.setBand(tex[2] || null); if (pv2.band && k) { pv2.band.k = k; pv2.hover(hovered === pv2); }
      new Set([swap(pv2.meshes[0], tex[0]), swap(pv2.meshes[1], tex[1])]).forEach(x => x && x.dispose());
      if (pv2.bhi && tex[3]) { const o = swap(pv2.bhi.mesh, tex[3]); if (o) o.dispose(); } else if (tex[3]) tex[3].dispose();
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
/* Grille du téléphone : la caméra se place face à elle, à la distance qui la fait tenir dans la place libre (le zoom à deux doigts reste actif) */
const gridView = () => (postsView && postsView.L.grid && postsView.grid && postsView.section === curSec() ? postsView : null);
const gridDepth = G => ZOOMF() / G.sc * Math.min(1, STYLE.cameraDistanceProportion / zoomBase);
function gridCam(v) {
  const G = v.grid, depth = gridDepth(G), k = depth / ZOOMF();
  return { d: Math.max(20, depth - CAMERA.focus + G.zg), ty: v.container.position.y + G.gy + G.fy * k, dx: G.fx * k };
}
const camD = () => { const v = gridView(); return v ? gridCam(v).d : STYLE.cameraDistance * camK(); };
const camTargetY = () => { const v = gridView(); return v ? gridCam(v).ty : STYLE.cameraTargetHeight * (((curSec() || {}).def || {}).layout === 'map' ? camK() * 0.62 : 1); };
const camHeightBase = () => { const v = gridView(); return v ? gridCam(v).ty : STYLE.cameraHeight * (((curSec() || {}).def || {}).layout === 'map' ? camK() * 1.6 : 1); };
/* Carte du monde zoomée : la caméra glisse vers le groupe de lieux le plus dense (l'Europe) et garde le même angle de vue,
   au-dessus de la carte. Au zoom de base, rien ne change : centre de la section, hauteurs d'origine. */
const _fw = new THREE.Vector3();
function mapZoomT() {   // 0 au zoom de base, vers 1 au plus près
  if (!isMap() || gridView() || STYLE.cameraDistanceProportion >= zoomBase) return 0;
  return Math.min(1, (1 - STYLE.cameraDistanceProportion / zoomBase) * 1.25);
}
function mapFocus() {   // le cœur du réseau, en coordonnées Papervision
  const f = postsView && postsView.net && postsView.net.focus; if (!f) return null;
  f.getWorldPosition(_fw); return { x: _fw.x, y: _fw.y, z: -_fw.z };
}
function orbitCenter() {
  const s = curSec(), t = mapZoomT(), f = t ? mapFocus() : null;
  const ty0 = camTargetY(), v = gridView();
  if (v) return { x: s.p.x - gridCam(v).dx, z: s.p.z, ty: ty0 };   // la grille au centre de la place libre
  if (!f) return { x: s.p.x, z: s.p.z, ty: ty0 };
  return { x: s.p.x + (f.x - s.p.x) * t, z: s.p.z + (f.z - s.p.z) * t, ty: ty0 + (f.y - ty0) * t };
}
const camHeight = () => {   // sur la carte zoomée, la caméra descend avec la distance : même angle, jamais sous la carte
  if (!isMap() || gridView()) return camHeightBase();
  const r = Math.min(1, STYLE.cameraDistanceProportion / zoomBase), ty = orbitCenter().ty;
  return ty + (camHeightBase() - camTargetY()) * Math.pow(r, 0.55);   // descend moins vite que la distance : on voit l'Europe de plus en plus d'en haut
};
const cardK = def => Math.max(0.4, Math.min(2.5, (+def.cardScale || 100) / 100));
/* Rayon, centre et hauteur de visée de l'orbite. Au changement de format, ils glissent vers leurs nouvelles valeurs
   avec la même douceur que la caméra (cameraEaseSpeed) au lieu de sauter. */
const orbitNow = () => { const s = orbitCenter(); return { d: camD(), x: s.x, z: s.z, ty: s.ty }; };
let orbitE = null;
function reflow(before) {   // grille ↔ disposition d'origine, ou grille recadrée : vignettes et caméra glissent ensemble
  if (!before || !postsView || !postsView.relayout()) return;
  killTweensOf(cam); killTweensOf(camTarget); orbitE = before;
  if (gridView()) P.degreeCamera = frontDeg(P.degreeCamera);
  P.cameraY = camHeight(); closeTurn = true; easeSpeed = STYLE.cameraEaseSpeed;
  const pv2 = P.postOpen && curOpenMode() === 'focus3d' && !post2D.open && postsView.postViews[P.selected];
  if (pv2 && pv2.ready) { if (postsView.L.grid) postsView.gridToCamera(pv2, STYLE.tween / 2); else pv2.moveToCamera(60, STYLE.tween / 2); }
}
let gridTick = 0;
function watchGrid() {   // la place libre change (menu posé, polices arrivées, barre du navigateur) : la grille se recadre
  if (++gridTick % 20 || !started || P.postOpen || isClicking || !inputEnabled) return;
  const v = gridView(); if (!v) return;
  const r = freeRect(); if ([r.l, r.t, r.r, r.b].map(Math.round).join() !== v.grid.rk) reflow(orbitE || orbitNow());
}
function settleOrbit() {
  if (!orbitE) return;
  const t = orbitNow(), k = ease(STYLE.cameraEaseSpeed); let done = true;
  for (const key of ['d', 'x', 'z', 'ty']) { const dd = t[key] - orbitE[key]; if (Math.abs(dd) > 0.05) { orbitE[key] += dd * k; done = false; } else orbitE[key] = t[key]; }
  if (!isTweening(camTarget)) { camTarget.x = orbitE.x; camTarget.y = orbitE.ty; camTarget.z = orbitE.z; }
  if (!isClicking && !closeTurn && !isTweening(cam)) placeCameraOnOrbit();
  if (done) orbitE = null;
}
function placeCameraOnOrbit() { const o = orbitE || orbitNow(); cam.x = o.x + o.d * Math.sin(P.actualDeg); cam.z = o.z + o.d * Math.cos(P.actualDeg); }
function changeSection3D() {
  sections.forEach((s, i) => { if (i === P.currentSection) { if (!s.container.parent) scene.add(s.container); } else if (s.container.parent) scene.remove(s.container); });
  isClicking = false; closeTurn = false; canvas.classList.remove('dragging');
  hovered = null; mouseCard = null; backHovered = null;
  if (postsView) postsView.destroy();
  orbitE = null;
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
const wideScreen = () => W > 700 && H > 520;
function setCamera() { const hmax = 1000, max = 680, div = STYLE.cameraDistanceProportion / (hmax - 720); STYLE.cameraDistance = Math.round((H < max ? hmax - H : hmax - max) * div); }
function onStageResize3D() {
  closeTurn = false; setCamera(); if (!started) return;
  const s = orbitCenter();
  if (P.postOpen && curOpenMode() === 'focus3d' && !post2D.open && postsView && postsView.postViews[P.selected]) { const pv2 = postsView.postViews[P.selected]; if (postsView.L.grid) postsView.gridToCamera(pv2, STYLE.tween / 2); else pv2.moveToCamera(100, 0); }
  const fixed = isMap() || gridView();
  cameraOnlyGoto(s.x + camD() * Math.sin(P.actualDeg), fixed ? P.cameraY : cam.y, s.z + camD() * Math.cos(P.actualDeg), STYLE.cameraSpeed / 2);
  if (fixed) cameraTarget(s.x, s.ty, s.z, STYLE.cameraSpeed / 2);
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
let eyeK = 1, phoneK = 1;
const PHONE_NEAR = 1.45;
function updateCamera() {   // caméra Papervision : focale en pixels (zoom x focus), oeil "focus" unités derrière la caméra
  _p.copy(pv(cam.x, cam.y, cam.z)); _t.copy(pv(camTarget.x, camTarget.y, camTarget.z));
  _dir.subVectors(_t, _p); if (_dir.lengthSq() < 1e-6) _dir.set(0, 0, -1); _dir.normalize();
  /* l'œil est "focus" unités derrière la caméra ; sur la carte zoomée cet écart rétrécit avec le zoom, sinon il bornerait l'approche */
  const fk = isMap() && !gridView() ? Math.min(1, STYLE.cameraDistanceProportion / zoomBase) : 1;
  eyeK += Math.abs(fk - eyeK) < 1e-3 ? fk - eyeK : (fk - eyeK) * ease(STYLE.cameraEaseSpeed);
  camera.position.copy(_p).addScaledVector(_dir, -CAMERA.focus * eyeK); camera.lookAt(_t);
  /* téléphone debout : l'écran étroit élargit le champ (narrow) et éloignait trop les cartes du carrousel ; on rapproche, sauf en grille et sur la carte */
  const near = W < 700 && H > W && !gridView() && !isMap() ? PHONE_NEAR : 1;
  phoneK += Math.abs(near - phoneK) < 1e-3 ? near - phoneK : (near - phoneK) * ease(STYLE.cameraEaseSpeed);
  const narrow = Math.min(1, W / 900 * phoneK);
  const fov = 2 * Math.atan(H / 2 / (cam.zoom * CAMERA.focus * narrow)) / D2R;
  if (Math.abs(camera.fov - fov) > 1e-4) { camera.fov = fov; camera.updateProjectionMatrix(); }
}
function resizeViewport() { W = window.innerWidth; H = window.innerHeight; renderer.setSize(W, H, false); camera.aspect = W / H; camera.updateProjectionMatrix(); LINE_MATS.forEach(m => m.resolution.set(W, H)); if (started) try { renderer.render(scene, camera); } catch (e) {} }   // la toile vidée est redessinée tout de suite

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
  menu.hidden = false; langsEl.hidden = false; setMenuPosition();
  setTimeout(() => menu.classList.add('ready'), (SECTIONS.length + 1) * 200);
}
/* La fiche 2D garde ses proportions de 2008 (bandes de 355 px), agrandies de 20 %, et se réduit quand l'écran est trop bas.
   Sur un écran étroit, les colonnes de texte prennent la largeur de l'écran. */
const POST_SCALE = 1.44;
/* Mise en page des fiches Réalisations et Savoir-faire, comme un article en colonnes ; réglable dans le back-office (Réglages › Fiches),
   en unités de la fiche (355 de haut). col : largeur d'une colonne ; gutter : espace entre deux colonnes ; side : avant la première
   et après la dernière ; top : au-dessus du titre, et du texte des colonnes suivantes ; bottom : sous le texte. */
const FICHE = { col: 362, gutter: 160, side: 79, top: 34, bottom: 20 };
const FICHE_LIM = { col: [200, 520], gutter: [10, 240], side: [8, 140], top: [8, 100], bottom: [6, 80] };
function ficheM() {
  const f = (CONTENT && CONTENT.settings && CONTENT.settings.fiche) || {}, o = {};
  for (const k in FICHE) { const v = f[k]; o[k] = v === '' || v == null || !Number.isFinite(+v) ? FICHE[k] : Math.max(FICHE_LIM[k][0], Math.min(FICHE_LIM[k][1], Math.round(+v))); }
  return o;
}
function textGeom(mode) {
  const fm = ficheM();
  const full = mode === 'project' ? { width: fm.col + 2 * fm.side, x: fm.side, colW: fm.col, press: true } : { width: 389, x: 17, colW: 353 };
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
  /* sur un écran d'ordinateur bas, la fiche ne rapetisse pas au point que le texte passe sous 14 px : elle prend alors la place du menu (qui s'efface) */
  const fit = (H - top - reserve) / need, room = (H - top - 56) / need, read = W > 700 && !short ? 14 / (+typoOf(CONTENT.settings, 'body').size || 14) : 0;
  const s = Math.max(short ? 0.4 : 0.5, Math.min(POST_SCALE, Math.max(fit, Math.min(read, room))));
  post2D.scale = s;
  post2dEl.style.top = top + 'px';
  post2dEl.style.transform = s !== 1 ? `scale(${s.toFixed(3)})` : '';
  post2dEl.style.width = s !== 1 ? Math.ceil((W - STYLE.margin) / s) + 'px' : '';
  post2dEl.style.height = Math.ceil(need) + 'px';
  document.body.classList.toggle('post-cramped', H - (top + need * s) < menu.offsetHeight + 60);
}
const langsTop = () => { const r = langsEl.getBoundingClientRect(); return r.height ? r.top : H - (wideScreen() ? 44 : 48); };   // l'ancien « ▸ FR » du bas est masqué (la langue est dans un carré en haut) : le menu garde sa place d'avant
function setMenuPosition() {
  if (!P.postOpen) document.body.classList.remove('post-cramped', 'post-short');
  if (P.postOpen && post2D.open && post2D.height > 100) {
    let y = sloganEl.offsetTop + sloganEl.offsetHeight + post2D.height * (post2D.scale || 1) + 2 * STYLE.margin + 30;
    y = Math.min(y, langsTop() - menu.offsetHeight - 22);   // toujours au-dessus du bas de l'écran
    menu.style.left = STYLE.margin + 'px'; menu.style.top = y + 'px';
  } else {   // en bas à gauche, au-dessus des langues (plus haut sur grand écran, au niveau des flèches de pages)
    let lt = langsEl.hidden ? H - 30 : langsTop();
    if (!wideScreen() && !catBox.hidden) { const cb = catBox.getBoundingClientRect(); if (cb.height && cb.left < W / 2) lt = Math.min(lt, cb.top); }   // téléphone : le menu passe au-dessus de la Sélection
    menu.style.left = (wideScreen() ? 26 : STYLE.margin) + 'px'; menu.style.top = Math.round(Math.min(H - (menu.offsetHeight || 86) - (wideScreen() ? 100 : 56), lt - (menu.offsetHeight || 86) - 24)) + 'px';
  }
  document.body.classList.toggle('post-open-wide', wideScreen() && !!P.postOpen);   // fiche ouverte : le Showreel sous la signature s'efface
  placeCats(); placeReel();
  if (!(P.postOpen && post2D.open && post2D.height > 100)) {   // le menu ne passe jamais sur les carrés (téléphone couché : peu de hauteur)
    const sb = Math.max(0, ...['reel-btn', 'about-btn', 'lang-sq'].map(id => document.getElementById(id)).filter(e => e && !e.hidden && e.offsetHeight).map(e => e.offsetTop + e.offsetHeight));
    if (sb && menu.offsetTop < sb + 18) menu.style.top = (sb + 18) + 'px';
  }
}
/* grand écran : le Showreel sous la signature, en haut à gauche ; téléphone : sous le logo */
function placeReel() {
  if (!reel || !reel.btn) return;
  const b = reel.btn;
  b.style.top = Math.round(sloganEl.offsetTop + sloganEl.offsetHeight + (wideScreen() ? 26 : 16)) + 'px'; b.style.left = (sloganEl.offsetLeft + 2) + 'px'; b.style.right = 'auto';   // la même place sur ordinateur, tablette et téléphone
  placeAbout();
}
/* la sélection (tags) sous la signature, en haut à gauche : au même endroit que le bouton Showreel de l'accueil */
function placeCats() {   // grand écran : en bas au centre, sous les flèches de pages ; téléphone : sous la signature
  catBox.style.top = catBox.style.left = ''; catList.style.maxHeight = Math.max(140, H - 200) + 'px';   // en bas, comme sur ordinateur ; une longue liste défile au lieu de sortir de l'écran
  document.body.classList.toggle('cats-up', !wideScreen() && W < 560);   // téléphone debout : au centre, sous les flèches de pages, une ligne au-dessus des langues et du clavier
}
/* Logo par défaut : anneau, disque noir, lettres réglées dans Typographie › Logo rond */
const ringLogo = (ring, invert = false) => ringLogoURL(ring, CONTENT.settings, invert);
/* Logo du site, logo de l'accueil et favicon : la même image, dessinée avec la police du rôle « Logo rond » */
function drawLogos() {
  const s = CONTENT.settings, accent = s.accent || '#ffcc00';
  const logo = s.logo ? url(s.logo) : ringLogo(negMode ? '#ffffff' : accent, negMode);   // en négatif, l'image est pré-inversée : la page inversée la remet à l'endroit
  const hl = document.getElementById('home-logo'); if (hl) { hl.src = s.logo ? logo : ringLogo('#ffffff', false); hl.classList.toggle('raw', !s.logo); }
  const sl = document.getElementById('logo'); if (sl) { sl.style.backgroundImage = s.logo ? `url("${logo}")` : ''; sl.classList.toggle('img', !!s.logo); }   // le logo du site est un simple disque : noir le jour, jaune la nuit   // l'accueil reste sombre : il prend toujours le logo de nuit, anneau blanc, ombre jaune
  setFavicon(s.logo ? logo : WHITE_DOT);   // le favicon : un simple disque blanc, cerclé d'un gris léger pour se voir sur un onglet clair
}
const WHITE_DOT = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="29" fill="#fff" stroke="#c4c4c4" stroke-width="2.5"/></svg>');
function setFavicon(href) {
  let l = document.querySelector('link[rel~="icon"]'); if (!l) { l = document.createElement('link'); l.rel = 'icon'; document.head.appendChild(l); }
  if (l.getAttribute('href') !== href) { l.removeAttribute('type'); l.href = href; }
}
/* Titre et description de la page, et adresse ?p= : ils suivent la fiche ouverte (partage, moteurs de recherche) */
let deepPost = '';
const metaDesc = document.querySelector('meta[name="description"]'), BASE_DESC = metaDesc ? metaDesc.content : '';
let BASE_TITLE = document.title;
function setPageMeta(post) {
  if (PREVIEW || !CONTENT) return;
  document.title = post ? `${tr(post.title).trim()} · ${CONTENT.settings.name || 'Hand Coded'}` : BASE_TITLE;
  if (metaDesc) metaDesc.content = post ? (htmlToText(tr(post.body).split(/<h3/i)[0]).join(' ').slice(0, 160) || tr(post.subtitle) || BASE_DESC) : BASE_DESC;
  try {
    const u = new URL(location.href), R = window.HC_ROUTE || {};
    if (R.pages && location.protocol !== 'file:') {   // les vraies pages existent : /fr/ox/ pour une fiche, /fr/ pour le reste, comme les moteurs les connaissent
      const root = SITE_ROOT;
      u.searchParams.delete('p'); u.searchParams.delete('lang');
      u.pathname = root.pathname + (post && pageable(CONTENT, post) ? `${LANG}/${encodeURIComponent(post.id)}/` : R.p || u.pathname !== root.pathname ? `${LANG}/` : '');
      if (post && !pageable(CONTENT, post)) u.searchParams.set('p', post.id);
    } else if (post) u.searchParams.set('p', post.id); else u.searchParams.delete('p');
    if (u.href !== location.href) history.replaceState(history.state, '', u.pathname + u.search + u.hash);
  } catch (e) {}
  if (post) countView('?p=' + post.id, document.title);
}
/* Audience : GoatCounter (sans cookie, sans bandeau de consentement). Le code se règle dans le back-office, onglet Audience. */
function setupStats() {
  const code = String(((CONTENT.settings.analytics || {}).goatcounter) || '').trim().replace(/^https?:\/\//, '').replace(/\.goatcounter\.com.*$/, '').replace(/[^a-z0-9-]/gi, '');
  if (!code || PREVIEW || location.protocol === 'file:' || /^(localhost|127\.|0\.0\.0\.0)/.test(location.hostname) || window.goatcounter) return;
  window.goatcounter = { no_onload: true };
  const sc = document.createElement('script'); sc.async = true; sc.src = 'https://gc.zgo.at/count.js';
  sc.dataset.goatcounter = `https://${code}.goatcounter.com/count`; sc.dataset.goatcounterSettings = JSON.stringify({ no_onload: true });
  sc.addEventListener('load', () => { if (!deepPost) countView('', BASE_TITLE); });
  document.head.appendChild(sc);
}
function countView(path, title, event = false) {
  try { if (window.goatcounter && typeof window.goatcounter.count === 'function') window.goatcounter.count({ path: event ? path : ((window.HC_ROUTE || {}).pages ? SITE_ROOT.pathname : location.pathname.replace(/index\.html$/, '')) + path, title, event }); } catch (e) {}
}
function renderTexts() {
  const s = CONTENT.settings;
  applyTypo(); buildStory(); dockLabels();
  document.documentElement.lang = LANG;
  document.documentElement.classList.toggle('neg', negMode);
  if (!P.postOpen) document.title = BASE_TITLE || s.name || 'Hand Coded';
  const tl = (s.taglines && (s.taglines[LANG] || s.taglines.en)) || [];
  const sloganHTML = tl.length ? `<b class="wm">${escapeHTML(tl[0])}</b>${tl.slice(1).map(l => `<span>${escapeHTML(l)}</span>`).join('')}` : escapeHTML(s.name);
  sloganEl.innerHTML = tl.length ? `<b class="wm" role="link" tabindex="0" title="${escapeHTML(ui('homeLink'))}">${escapeHTML(tl[0])}</b><span class="tls">${tl.slice(1).map(l => `<span>${escapeHTML(l)}</span>`).join('')}</span>` : sloganHTML;   // les mots du slogan en petit, à droite de la signature
  document.getElementById('home-slogan').innerHTML = sloganHTML;
  /* Logo par défaut : anneau à la couleur d'accent sur fond blanc, anneau blanc sur fond noir. Il échappe à l'inversion (classe raw). */
  drawLogos();
  if (!s.logo && document.fonts) { const lf = typoOf(s, 'logo'), spec = `${lf.italic ? 'italic ' : ''}${lf.weight || 400} 76px ${lf.css}`; if (!document.fonts.check(spec)) document.fonts.load(spec).then(() => { if (!CONTENT.settings.logo) drawLogos(); }).catch(() => {}); }
  const canToggle = s.negativeToggle !== false;
  ['logo'].forEach(id => {   // le logo du site bascule jour / nuit (l'accueil, lui, reste sombre)
    const logoEl = document.getElementById(id); if (!logoEl) return;
    logoEl.classList.toggle('toggle', canToggle);
    if (canToggle) { logoEl.setAttribute('role', 'button'); logoEl.tabIndex = 0; logoEl.setAttribute('aria-pressed', String(negMode)); logoEl.title = ui(negMode ? 'toPos' : 'toNeg'); logoEl.setAttribute('aria-label', logoEl.title); }
    else { logoEl.removeAttribute('role'); logoEl.removeAttribute('tabindex'); logoEl.removeAttribute('aria-pressed'); logoEl.removeAttribute('aria-label'); logoEl.removeAttribute('title'); }
  });
  home.classList.toggle('no-ticker', !!(s.home && s.home.tickerOff));
  if (!enterBtn.classList.contains('wait')) setEnterLabel(tr(s.home.enter) || ui('enter'));
  renderReel(); renderAbout(); hvLabels();
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = ui(el.dataset.i18n); });
  document.getElementById('kb-toggle').setAttribute('aria-label', ui('keys'));
  pgPrev.setAttribute('aria-label', ui('prev')); pgNext.setAttribute('aria-label', ui('next'));
  const cap = document.getElementById('cat-cap'); if (cap) cap.textContent = ui('category');
  const langs = s.langs && s.langs.length ? s.langs : LANGS;
  renderLangMenu(langs);
  let sq = document.getElementById('lang-sq');
  if (!sq) { sq = document.createElement('div'); sq.id = 'lang-sq'; sq.className = 'ui'; document.body.appendChild(sq);   // dans la 3D aussi : le carré de la langue, comme sur l'accueil
    document.addEventListener('pointerdown', e => { if (!e.target.closest('#lang-sq')) sq.classList.remove('open'); }); }
  [document.getElementById('home-langs'), sq].forEach(box => {   // accueil et 3D : un carré avec la langue, les autres glissent dedans au survol
    box.innerHTML = ''; box.classList.add('hlg'); box.classList.remove('open'); box.hidden = langs.length < 2;
    if (langs.length < 2) return;
    const cur = document.createElement('button'); cur.type = 'button'; cur.className = 'cur'; cur.setAttribute('aria-expanded', 'false'); cur.setAttribute('aria-label', ui('lang') + ' : ' + LANG.toUpperCase());
    cur.innerHTML = `<b class="ic">${LANG.toUpperCase()}</b>`;
    cur.addEventListener('click', () => { const o = box.classList.toggle('open'); cur.setAttribute('aria-expanded', String(o)); });
    const opts = document.createElement('span'); opts.className = 'opts';
    langs.filter(l => l !== LANG).forEach(l => { const b = document.createElement('button'); b.type = 'button'; b.textContent = l.toUpperCase(); b.lang = l; b.setAttribute('aria-label', ui('lang') + ' ' + l.toUpperCase()); b.addEventListener('click', () => setLang(l)); opts.appendChild(b); });
    box.append(cur, opts);
  });
  placeAbout();   // la langue s'insère entre le Showreel et le « i »
  document.documentElement.style.setProperty('--accent', accent());
  document.documentElement.style.setProperty('--accent-raw', CONTENT.settings.accent || '#ffcc00');
  document.documentElement.style.setProperty('--accent-inv', invertHex(CONTENT.settings.accent || '#ffcc00'));   // affiché en jaune une fois la page inversée
  buildTickerDots();
}
/* Langues du site : un petit menu déroulant vertical (▸ FR), qui s'ouvre vers le haut */
function renderLangMenu(langs) {
  langsEl.innerHTML = ''; langsEl.classList.remove('open');
  if (langs.length < 2) return;
  const open = document.createElement('button'); open.type = 'button'; open.className = 'lg-open'; open.setAttribute('aria-expanded', 'false'); open.setAttribute('aria-haspopup', 'true');
  open.setAttribute('aria-label', ui('lang') + ' : ' + LANG.toUpperCase()); open.innerHTML = `<i class="tri"></i><span>${LANG.toUpperCase()}</span>`;
  const list = document.createElement('ul'); list.className = 'lg-list';
  langs.filter(l => l !== LANG).forEach(l => { const li = document.createElement('li'), b = document.createElement('button'); b.type = 'button'; b.textContent = l.toUpperCase(); b.lang = l; b.setAttribute('aria-label', ui('lang') + ' ' + l.toUpperCase()); b.addEventListener('click', () => { langsEl.classList.remove('open'); setLang(l); }); li.appendChild(b); list.appendChild(li); });
  open.addEventListener('click', () => { const o = langsEl.classList.toggle('open'); open.setAttribute('aria-expanded', String(o)); });
  langsEl.append(list, open);
}
document.addEventListener('pointerdown', e => { if (langsEl.classList.contains('open') && !langsEl.contains(e.target)) { langsEl.classList.remove('open'); const o = langsEl.querySelector('.lg-open'); if (o) o.setAttribute('aria-expanded', 'false'); } });
langsEl.addEventListener('keydown', e => { if (e.code === 'Escape' && langsEl.classList.contains('open')) { e.stopPropagation(); langsEl.classList.remove('open'); const o = langsEl.querySelector('.lg-open'); if (o) { o.setAttribute('aria-expanded', 'false'); o.focus(); } } });
function setLang(l) {
  if (l === LANG) return;
  LANG = l; try { localStorage.setItem('hc-lang', l); } catch (e) {}
  document.documentElement.lang = l;
  renderTexts();
  if (started) {
    menuButtons.forEach((b, i) => { b.textContent = tr(SECTIONS[i].def.name); });
    initCategorieData();
    const wasOpen = P.postOpen, sel = P.selected;
    checkPostOpenAndClose();
    P.selected = sel; changeSection3D();   // les cartes typographiques se redessinent dans la nouvelle langue
    if (wasOpen) delayedCall(0.6, () => openThatPost(sel));
  }
  if (!P.postOpen) setPageMeta(null);   // /en/ devient /fr/
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
    b.type = 'button'; b.innerHTML = `${escapeHTML(tr(c.label))} <span class="n">${d.countOf(c.id)}</span>`; b.setAttribute('aria-current', String(c.id === d.category));
    b.addEventListener('click', () => { closeCategory(); changeCategory(c.id); });
    li.appendChild(b); catList.appendChild(li);
  });
  catName.innerHTML = `<span class="t">${escapeHTML(d.currentCatName)}</span> <span class="n">${d.countOf(d.category)}</span>`;
  checkAccess(); closeCategory(); ovSync();
}
const pgNum = document.getElementById('pg-num');
function checkAccess() {
  const d = P.data; pgPrev.disabled = !d.hasNewer(); pgNext.disabled = !d.hasOlder(); pgPrev.hidden = pgNext.hidden = !d.hasNewer() && !d.hasOlder();
  if (pgNum) { pgNum.hidden = pgPrev.hidden; pgNum.textContent = `${d.page}/${d.pages}`; pgNum.setAttribute('aria-label', `${d.page} / ${d.pages}`); }   // où on en est : page 2 sur 5
}
function closeCategory() { clearTimeout(catPeekTimer); catBox.classList.remove('open'); catOpen.setAttribute('aria-expanded', 'false'); }
/* ===== maj-157 : la vue d'ensemble. Toutes les réalisations d'un coup d'œil, en mosaïque : les vignettes bord à bord, séparées par un filet,
   la Sélection en grand (la toute première en très grand), les marques en large. Un clic ouvre la fiche, comme dans la 3D. */
const ovBtn = document.createElement('button'); ovBtn.id = 'ov-btn'; ovBtn.type = 'button'; ovBtn.hidden = true;
ovBtn.innerHTML = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1 1h8v8H1zM10.5 1H15v3.5h-4.5zM10.5 5.5H15V9h-4.5zM1 10.5h3.5V15H1zM5.5 10.5H9V15H5.5zM10.5 10.5H15V15h-4.5z" fill="currentColor"/></svg><span></span>';
catBox.appendChild(ovBtn);
let ovEl = null, ovCat = '';
const ovWanted = () => !!(P.section && P.section.def.card === 'image' && !P.section.def.skills && P.data && P.data.all.length >= 8);
function ovSync() { ovBtn.hidden = !ovWanted(); ovBtn.querySelector('span').textContent = ui('overview'); ovBtn.setAttribute('aria-label', ui('overview')); }
ovBtn.addEventListener('click', e => { e.stopPropagation(); openOverview(); });
function ovFit() {   // pas de trou en bas : quelques petites vignettes s'élargissent pour que la dernière ligne soit pleine
  if (!ovEl) return;
  const g = ovEl.querySelector('.mos'), cols = getComputedStyle(g).gridTemplateColumns.split(' ').length, ts = [...g.children];
  [...g.children].forEach(t => { t.className = 't ' + t.dataset.k; t.style.gridColumn = ''; });
  const size = t => t.classList.contains('xl') ? (cols < 6 ? cols * 2 : 8) : t.classList.contains('l') ? 4 : t.classList.contains('w') ? 2 : 1;
  let need = (cols - ts.reduce((a, t) => a + size(t), 0) % cols) % cols;
  for (let i = ts.length - 1; i >= 0 && need > 0; i--) if (!ts[i].dataset.k) { ts[i].classList.add('w'); need--; }
  /* s'il reste un trou sur la dernière ligne (grandes vignettes seules), les dernières vignettes s'élargissent pour le combler */
  const gr = g.getBoundingClientRect(), cw = gr.width / cols; if (!ts.length || !cw) return;
  const box = t => { const r = t.getBoundingClientRect(); return { t, c: Math.round((r.left - gr.left) / cw), n: Math.round(r.width / cw), b: Math.round(r.bottom) }; };
  const bs = ts.map(box), bottom = Math.max(...bs.map(x => x.b)), last = bs.filter(x => x.b >= bottom - 2).sort((x, y) => x.c - y.c);
  let free = cols - last.reduce((a, x) => a + x.n, 0);
  for (let i = last.length - 1, k = 0; free > 0; k++) { const x = last[(last.length - 1 - (k % last.length))]; x.n++; free--; i--; }
  last.forEach(x => { x.t.style.gridColumn = 'span ' + x.n; });
}
function ovFilter(id, scroll = true) {   // maj-158 : la mosaïque reste entière ; une catégorie fait ressortir ses projets, les autres s'effacent
  ovCat = id; if (!ovEl) return;
  ovEl.querySelectorAll('.chips button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.cat === id)));
  const g = ovEl.querySelector('.mos'); g.classList.toggle('sel', !!id);
  let firstHit = null;
  g.querySelectorAll('.t').forEach(t => { const hit = !!id && t.dataset.tags.split(' ').includes(id); t.classList.toggle('hit', hit); t.classList.toggle('dim', !!id && !hit); if (hit && !firstHit) firstHit = t; });
  if (scroll && firstHit) { const r = firstHit.getBoundingClientRect(); if (r.top > innerHeight * 0.8 || r.bottom < 0) ovEl.scrollTo({ top: ovEl.scrollTop + r.top - 140, behavior: 'smooth' }); }
}
function openOverview() {
  if (!ovWanted() || !inputEnabled) return;
  closeCategory();
  const d = P.data, def = P.section.def, list = d.all, star = def.defaultTag || 'featured';
  const brand = (def.tags || []).some(t => t.id === 'advertising') ? 'advertising' : '';
  let first = true;
  const tiles = list.map(p => {
    const f = (p.tags || []).includes(star), auto = f && first ? 'xl' : f ? 'l' : brand && (p.tags || []).includes(brand) ? 'w' : ''; if (f) first = false;
    const k = p.ovSize === 's' ? '' : /^(xl|l|w)$/.test(p.ovSize || '') ? p.ovSize : auto;   // la taille choisie dans l'admin, sinon la règle automatique
    const img = !p.thumb ? '' : k === 'xl' ? `<img src="${escapeHTML(url(p.thumb))}" alt="" loading="lazy" draggable="false">` : smallImg(p.thumb, 'alt="" loading="lazy" draggable="false"');
    return `<a class="t ${k}" data-k="${k}" data-ov="${escapeHTML(p.id)}" data-tags="${escapeHTML((p.tags || []).join(' '))}" href="?p=${encodeURIComponent(p.id)}&amp;lang=${LANG}">${img}` +
      `<em>${escapeHTML(p.date || '')}</em><span class="tx"><b>${escapeHTML(tr(p.title))}</b><i>${escapeHTML(tr(p.subtitle))}</i></span></a>`;
  }).join('');
  const chips = (d.categoryList.some(c => c.id === '') ? d.categoryList : [{ id: '', label: Object.fromEntries(LANGS.map(l => [l, (UI[l] || UI.en).all])) }, ...d.categoryList]).map(c => `<button type="button" data-cat="${escapeHTML(c.id)}" aria-pressed="false">${escapeHTML(tr(c.label))}<span>${d.countOf(c.id)}</span></button>`).join('');
  if (!ovEl) {
    ovEl = document.createElement('section'); ovEl.id = 'hc-ov'; ovEl.className = 'ui'; ovEl.setAttribute('role', 'dialog'); ovEl.setAttribute('aria-modal', 'true'); ovEl.hidden = true;
    document.body.appendChild(ovEl);
    ovEl.addEventListener('click', e => {
      const t = e.target.closest('[data-ov]');
      if (t) { if (e.metaKey || e.ctrlKey || e.shiftKey) return; e.preventDefault(); const id = t.dataset.ov; closeOverview(); goToPost(id); return; }
      const c = e.target.closest('[data-cat]'); if (c) { ovFilter(c.dataset.cat); return; }
      if (e.target.closest('.x')) closeOverview();
    });
    window.addEventListener('keydown', e => {   // tant que la vue d'ensemble est ouverte, le clavier ne pilote plus la scène 3D
      if (!ovEl || ovEl.hidden) return;
      if (e.code === 'Escape') { e.preventDefault(); closeOverview(); }
      if (e.code !== 'Tab' && e.code !== 'Enter' && e.code !== 'Space') e.stopImmediatePropagation();
    }, true);
    window.addEventListener('resize', ovFit);
  }
  ovEl.setAttribute('aria-label', ui('overview'));
  ovEl.innerHTML = `<div class="ov-in"><div class="bar"><h2>${escapeHTML(ui('overview'))}</h2><span class="n">${list.length} ${escapeHTML(ui('ov_n'))}</span>` +
    `<button type="button" class="x" aria-label="${escapeHTML(ui('close'))}"><svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2 2l10 10M12 2 2 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button>` +
    `<div class="chips">${chips}</div></div><div class="mos">${tiles}</div></div>`;
  ovEl.hidden = false; ovEl.scrollTop = 0; document.documentElement.classList.add('ov-open');
  requestAnimationFrame(() => { ovEl.classList.add('on'); });
  ovFit(); ovFilter('', false);   // tout, d'un coup d'œil
  setTimeout(() => { const x = ovEl.querySelector('.x'); if (x) x.focus({ preventScroll: true }); }, 50);
  countView('#overview', ui('overview'), true);
}
function closeOverview() {
  if (!ovEl || ovEl.hidden) return;
  ovEl.classList.remove('on'); document.documentElement.classList.remove('ov-open');
  setTimeout(() => { if (!ovEl.classList.contains('on')) ovEl.hidden = true; }, 350);
  ovBtn.focus({ preventScroll: true });
}
/* Arrivée sur une section : le menu des catégories s'ouvre puis se referme tout seul, comme le clavier à la première touche */
let catPeekTimer = 0, enteredAt = -1e9;
function peekCategories(delay = 0.7) {
  clearTimeout(catPeekTimer);
  if (catBox.hidden || !P.data || P.data.categoryList.length <= 1) return;
  catPeekTimer = setTimeout(() => {
    if (!homeGone || P.postOpen || cats.classList.contains('hidden')) return;
    catBox.classList.add('open'); catOpen.setAttribute('aria-expanded', 'true');
    catPeekTimer = setTimeout(() => { catBox.classList.remove('open'); catOpen.setAttribute('aria-expanded', 'false'); }, 1300);
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
/* Une vidéo Vimeo « non répertoriée » a une clé privée (vimeo.com/123/abcd ou ?h=abcd) : sans elle, le lecteur intégré refuse de la jouer. On la garde dans l'identifiant, « 123/abcd ». */
const vimeoId = s => { const m = /vimeo\.com\/(?:video\/)?(\d+)(?:\/([0-9a-f]{6,}))?/i.exec(s || ''); if (!m) return null; const h = m[2] || ((/[?&]h=([0-9a-f]{6,})/i.exec(s) || [])[1]); return h ? m[1] + '/' + h : m[1]; };
const vimeoPlayer = (id, q) => { const [n, h] = String(id).split('/'); return `https://player.vimeo.com/video/${n}?${h ? 'h=' + h + '&' : ''}${q}`; };
/* La vignette d'une vidéo Vimeo (son oEmbed public). La première vidéo d'une fiche garde la vignette de la fiche ; les suivantes ont chacune la leur. */
const vimeoThumbs = new Map();
const vimeoThumb = id => { if (!vimeoThumbs.has(id)) vimeoThumbs.set(id, fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent('https://vimeo.com/' + id)}&width=1280`).then(r => (r.ok ? r.json() : null)).then(j => (j && j.thumbnail_url) || '').catch(() => '')); return vimeoThumbs.get(id); };
const firstEmbed = (post, src) => { const v = ((post && post.media) || []).filter(m => m && /youtu\.?be|vimeo\.com/.test(m.src || '')); return !v.length || v[0].src === src; };
const mediaKind = s => (ytId(s) ? 'youtube' : vimeoId(s) ? 'vimeo' : isVideo(s) ? 'video' : 'image');
/* ================================================================ Contact : petit questionnaire
   Le site n'a pas de serveur : le message part par FormSubmit (formsubmit.co), qui le transmet par e-mail.
   La toute première fois, FormSubmit envoie un e-mail d'activation à l'adresse : il faut cliquer le lien une fois. */
const CONTACT_FORM = { to: 'maya@hand-coded.net' };
const CF = {
  fr: { title: 'Restons en contact.', intro: 'Nos nouvelles, quelques fois par an : projets et coulisses. Un projet en tête ? Dites-nous en plus.', email: 'Votre e-mail', who: 'Vous êtes', whoO: ['Une marque', 'Une agence', 'Un(e) artiste', 'Une institution ou un festival', 'Autre'],
        what: 'Un projet en tête ? (facultatif)', whatO: ['Une installation', 'Un événement ou une tournée', 'Un outil ou un logiciel', 'Du conseil', 'Autre chose'], when: 'Pour quand', whenO: ['Moins de 3 mois', '3 à 6 mois', 'Plus tard', 'Je ne sais pas encore'],
        msg: 'En quelques mots (facultatif)', send: 'S’inscrire', sending: 'Envoi…', ok: 'Merci, vous êtes inscrit(e) ! Et si vous nous avez parlé d’un projet, on vous répond très vite.', err: 'L’envoi n’a pas marché. Écrivez-nous directement à ', bad: 'Il manque une adresse e-mail valide.', note: 'Quelques e-mails par an. Désinscription en un clic.' },
  en: { title: 'Let’s keep in touch.', intro: 'Our news, a few times a year: projects and behind the scenes. A project in mind? Tell us more.', email: 'Your email', who: 'You are', whoO: ['A brand', 'An agency', 'An artist', 'An institution or a festival', 'Other'],
        what: 'A project in mind? (optional)', whatO: ['An installation', 'An event or a tour', 'A tool or software', 'Consulting', 'Something else'], when: 'When', whenO: ['Within 3 months', '3 to 6 months', 'Later', 'Not sure yet'],
        msg: 'In a few words (optional)', send: 'Sign up', sending: 'Sending…', ok: 'Thank you, you’re signed up! And if you told us about a project, we’ll get back to you very soon.', err: 'Sending failed. Write to us directly at ', bad: 'Please enter a valid email address.', note: 'A few emails a year. Unsubscribe in one click.' },
  ca: { title: 'Mantinguem el contacte.', intro: 'Les nostres novetats, unes quantes vegades l’any: projectes i bastidors. Teniu un projecte al cap? Expliqueu-nos-en més.', email: 'El vostre correu', who: 'Sou', whoO: ['Una marca', 'Una agència', 'Un/a artista', 'Una institució o un festival', 'Altres'],
        what: 'Un projecte al cap? (opcional)', whatO: ['Una instal·lació', 'Un esdeveniment o una gira', 'Una eina o un programari', 'Assessorament', 'Una altra cosa'], when: 'Per a quan', whenO: ['Menys de 3 mesos', 'De 3 a 6 mesos', 'Més endavant', 'Encara no ho sé'],
        msg: 'En poques paraules (opcional)', send: 'Subscriure’s', sending: 'Enviant…', ok: 'Gràcies, ja us heu subscrit! I si ens heu parlat d’un projecte, us responem molt aviat.', err: 'L’enviament no ha funcionat. Escriviu-nos directament a ', bad: 'Falta una adreça de correu vàlida.', note: 'Uns quants correus l’any. Baixa amb un clic.' },
  es: { title: 'Sigamos en contacto.', intro: 'Nuestras novedades, unas pocas veces al año: proyectos y bastidores. ¿Un proyecto en mente? Cuéntanos más.', email: 'Tu correo', who: 'Eres', whoO: ['Una marca', 'Una agencia', 'Un/a artista', 'Una institución o un festival', 'Otro'],
        what: '¿Un proyecto en mente? (opcional)', whatO: ['Una instalación', 'Un evento o una gira', 'Una herramienta o un software', 'Asesoría', 'Otra cosa'], when: 'Para cuándo', whenO: ['Menos de 3 meses', 'De 3 a 6 meses', 'Más adelante', 'Aún no lo sé'],
        msg: 'En pocas palabras (opcional)', send: 'Suscribirme', sending: 'Enviando…', ok: '¡Gracias, ya te has suscrito! Y si nos has hablado de un proyecto, te respondemos muy pronto.', err: 'El envío no ha funcionado. Escríbenos directamente a ', bad: 'Falta una dirección de correo válida.', note: 'Unos pocos correos al año. Baja con un clic.' },
};
const cft = () => CF[LANG] || CF.en;
let cfSeq = 0;
function contactFormHTML(kind) {
  const t = cft(), E = escapeHTML, id = 'cf' + (++cfSeq);
  const chips = (name, label, opts) => `<fieldset class="cf-q"><legend>${E(label)}</legend><div class="cf-chips">${opts.map((o, i) => `<label class="cf-chip"><input type="radio" name="${id}-${name}" value="${E(o)}"${i === -1 ? ' checked' : ''}><span>${E(o)}</span></label>`).join('')}</div></fieldset>`;
  return `<form class="cform-f cf-${kind}" novalidate>` +
    `<div class="cf-col"><h2 class="${kind === 'pv' ? 'pv-ttl' : 'ttl'}">${E(t.title)}</h2><p class="cf-intro">${E(t.intro)}</p>` +
    `<label class="cf-q cf-mail"><span>${E(t.email)}</span><input type="email" name="email" autocomplete="email" required spellcheck="false"></label>` +
    chips('who', t.who, t.whoO) + chips('when', t.when, t.whenO) + `</div>` +
    `<div class="cf-col">` + chips('what', t.what, t.whatO) +
    `<label class="cf-q cf-msg"><span>${E(t.msg)}</span><textarea name="message" rows="${kind === 'pv' ? 3 : 2}"></textarea></label>` +
    `<input type="text" name="_honey" class="cf-hp" tabindex="-1" autocomplete="off" aria-hidden="true">` +
    `<div class="cf-end"><button type="submit" class="cf-send">${E(t.send)}</button><span class="cf-note">${E(t.note)}</span></div><p class="cf-st" role="status" aria-live="polite"></p></div></form>`;
}
function bindContactForm(root) {
  const f = root.querySelector('.cform-f'); if (!f || f.dataset.bound) return; f.dataset.bound = '1';
  const st = f.querySelector('.cf-st'), btn = f.querySelector('.cf-send');
  const val = n => { const x = f.querySelector(`input[name$="-${n}"]:checked`); return x ? x.value : ''; };
  f.addEventListener('submit', async e => {
    e.preventDefault(); const t = cft(), mail = f.email.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) { st.textContent = t.bad; st.className = 'cf-st bad'; f.email.focus(); return; }
    if (f._honey.value) return;   // un robot a rempli le champ caché
    btn.disabled = true; btn.textContent = t.sending; st.textContent = ''; st.className = 'cf-st';
    const proj = !!(val('what') || val('when') || f.message.value.trim());
    const body = { email: mail, 'Newsletter': 'oui', 'Vous êtes': val('who'), 'Projet': val('what'), 'Pour quand': val('when'), 'Message': f.message.value.trim(), 'Langue': LANG, 'Page': location.href,
      _subject: 'Hand Coded · ' + (proj ? 'newsletter + projet' : 'inscription newsletter') + (val('who') ? ' (' + val('who') + ')' : ''), _template: 'table', _captcha: 'false' };
    let ok = false, why = '';
    if (location.protocol === 'file:') why = 'page ouverte depuis le disque : l’envoi ne marche que sur le site en ligne';
    else try {
      const r = await fetch('https://formsubmit.co/ajax/' + CONTACT_FORM.to, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body) });
      const j = await r.json().catch(() => ({})); ok = r.ok && String(j.success) !== 'false';
      if (!ok) why = j.message || ('HTTP ' + r.status);
    } catch (err) { why = err && err.message || 'réseau'; }
    if (!ok) console.warn('[contact] envoi refusé :', why);
    btn.disabled = false; btn.textContent = t.send;
    if (ok) { f.reset(); st.textContent = t.ok; st.className = 'cf-st ok'; countView('contact-form', 'Formulaire de contact envoyé', true); }
    else { st.innerHTML = escapeHTML(t.err) + `<a href="mailto:${escapeHTML(CONTACT_FORM.to)}">${escapeHTML(CONTACT_FORM.to)}</a>` + (why ? `<small class="cf-why">${escapeHTML(why)}</small>` : ''); st.className = 'cf-st bad'; }   // la raison exacte, en petit : utile pour la première activation
  });
}
/* Réseaux sociaux : un lien dont le texte est le nom du réseau devient une petite pastille discrète (initiales, sans logo de marque) */
const SOCIAL = [[/instagram\.com/i, 'IG', 'Instagram'], [/vimeo\.com/i, 'Vi', 'Vimeo'], [/facebook\.com/i, 'Fb', 'Facebook'], [/linkedin\.com/i, 'in', 'LinkedIn'], [/youtube\.com|youtu\.be/i, 'YT', 'YouTube'], [/tiktok\.com/i, 'TT', 'TikTok'], [/(?:^|\/\/|\.)(?:x|twitter)\.com/i, 'X', 'X'], [/behance\.net/i, 'Be', 'Behance']];
function socialIcons(html) {
  const d = document.createElement('div'); d.innerHTML = html;
  d.querySelectorAll('p').forEach(p => {
    const links = [...p.querySelectorAll('a[href]')]; if (!links.length) return;
    const nets = links.map(a => SOCIAL.find(([re, , name]) => re.test(a.getAttribute('href')) && a.textContent.trim().toLowerCase() === name.toLowerCase()));
    if (nets.some(n => !n)) return;
    const rest = [...p.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join('').replace(/[\s·•|,\/-]/g, '');
    if (rest) return;   // une phrase avec des liens : on n'y touche pas
    p.className = 'socs';
    p.innerHTML = links.map((a, i) => `<a class="soc" href="${escapeHTML(a.getAttribute('href'))}" target="_blank" rel="noopener" aria-label="${nets[i][2]}" title="${nets[i][2]}">${nets[i][1]}</a>`).join('');
  });
  return d.innerHTML;
}
/* Contact : le texte des Réglages se range tout seul. La phrase d'accueil, puis des lignes nommées (écrire, appeler, adresse, suivre),
   puis le mot pour Mouawad + Laurier, détaché en bas. Un paragraphe qu'on ne reconnaît pas reste à sa place, tel quel. */
function contactParts(html) {
  const d = document.createElement('div'); d.innerHTML = socialIcons(html || '');
  const ps = [...d.children], out = { lead: '', mail: [], tel: [], addr: [], socs: '', note: [], rest: [] };
  ps.forEach((p, i) => {
    const txt = p.textContent.replace(/\s+/g, ' ').trim(); if (!txt && !p.classList.contains('socs')) return;
    const links = [...p.querySelectorAll('a[href]')];
    if (p.classList.contains('socs')) out.socs = p.innerHTML;
    else if (links.some(a => /^mailto:/i.test(a.getAttribute('href')))) links.filter(a => /^mailto:/i.test(a.getAttribute('href'))).forEach(a => out.mail.push(a.getAttribute('href').replace(/^mailto:/i, '').split('?')[0]));
    else if (/^\+?[\d\s().\-]{8,}$/.test(txt)) out.tel.push(txt);
    else if (i === 0 && !links.length && p.querySelector('b, strong') && p.querySelector('b, strong').textContent.trim() === txt) out.lead = p.querySelector('b, strong').innerHTML;
    else if (i === 0 && !links.length && p.firstElementChild && /^(B|STRONG)$/.test(p.firstElementChild.tagName) && p.textContent.trim().startsWith(p.firstElementChild.textContent.trim())) {   // la phrase d'accueil, puis une ligne en dessous (les fondateurs)
      const b = p.firstElementChild; out.lead = b.innerHTML; b.remove(); out.sub = p.innerHTML.replace(/^\s*(<br\s*\/?>\s*)+/i, '').trim();
    }
    else if (links.length) out.note.push(p.innerHTML);
    else if (/\d/.test(txt) && txt.length < 120) out.addr.push(txt);
    else out.rest.push(p.outerHTML);
  });
  out.ok = !!(out.mail.length || out.tel.length || out.addr.length);
  return out;
}
function contactHTML(html) {
  const c = contactParts(html), E = escapeHTML; if (!c.ok) return socialIcons(html || '');
  const row = (k, v) => `<div class="cr"><dt>${E(ui(k))}</dt><dd>${v}</dd></div>`;
  const tel = t => `<a href="tel:${E(t.replace(/[^\d+]/g, ''))}">${E(t)}</a>`;
  const addr = a => { const [rue, ...reste] = a.split(/\s+[.·•|]\s+/); return E(rue) + (reste.length ? '<br>' + E(reste.join(' · ')) : ''); };   // « rue . ville . pays » : la rue, puis la ville et le pays
  return (c.lead ? `<p class="lead">${c.lead}</p>` : '') + (c.sub ? `<p class="csub">${c.sub}</p>` : '') +
    `<dl class="crows">` +
    (c.mail.length ? row('c_write', c.mail.map(m => `<a class="mail" href="mailto:${E(m)}">${E(m)}</a>`).join('<br>')) : '') +
    (c.tel.length ? row('c_call', c.tel.map(tel).join('<br>')) : '') +
    (c.addr.length ? row('c_addr', c.addr.map(addr).join('<br>')) : '') +
    (c.socs ? row('c_follow', `<span class="socs">${c.socs}</span>`) : '') + `</dl>` +
    c.rest.join('') +
    (c.note.length ? `<div class="cnote">${c.note.map(n => `<p>${n}</p>`).join('')}</div>` : '');
}
const OVER_MAX = 56;   // dépassement maximal de la bande à ses bouts, en pixels
const post2D = {
  open: false, height: 0, panels: [], x: 0, finalpos: 0, over: 0, ov: 0, end: 0, dragging: false, xprev: 0, vel: 0, delay: 0,
  build(post, card) {
    this.clear(); this.post = post;
    /* savoir-faire : un petit bandeau fixe rappelle où l'on est quand la bande a défilé au-delà de la description */
    this.open = true; this.height = 355;   // le contact a la hauteur des autres fiches
    post2dEl.classList.remove('closing'); post2dEl.hidden = false;
    fitPost2D(); this.geomKey = JSON.stringify(textGeom('project'));
    { const fm = ficheM(); strip.style.setProperty('--ft', fm.top + 'px'); strip.style.setProperty('--fb', fm.bottom + 'px'); }
    this.delay = 0;
    const media = post.media.filter(m => m && m.src);
    if (card === 'place') {
      const first = media[0] ? media[0].src : post.thumb;
      if (first) this.addMedia(first, 355, media[0] ? media[0].credit : '', false);
      this.addContact(post);
      if (CONTACT_FORM.to) this.addForm();
    } else if (card === 'text') {
      this.addText(post, 'blog');
      media.forEach(m => this.addMedia(m.src, 355, m.credit, true, m.caption));
      this.addRelations(post);
    } else if (P.section.def.skills) {   // savoir-faire : sa description et ses projets forment un seul bloc, les autres images ensuite
      const first = media[0] ? media[0].src : (post.thumb || null);
      if (first) this.addMedia(first, 355, media[0] ? media[0].credit : '', true, media[0] && media[0].caption);
      this.addText(post, 'project');
      this.addRelations(post);
      this.addGallery(media.slice(1));
      if ((post.team && post.team.length) || post.credits) this.addTeam(post);
    } else {
      const first = media[0] ? media[0].src : (post.thumb || null);
      if (first) this.addMedia(first, 355, media[0] ? media[0].credit : '', true, media[0] && media[0].caption);
      this.addText(post, 'project');
      this.addGallery(media.slice(1));
      this.addRelations(post);
      if ((post.team && post.team.length) || post.credits) this.addTeam(post);
    }
    if (post.logos && post.logos.length && card !== 'place') this.addLogos(post);   // partenaires, avant le lien
    if (post.link && card !== 'place') this.addLink(post);   // le lien du projet ferme la bande, sur la dernière fiche
    this.layout(); this.x = 0; this.finalpos = 0; this.over = 0; this.ov = 0; this.tx = 0; strip.style.transform = 'translateX(0px)';
  },
  addRelations(post) {   // fiche d'un savoir-faire : ses projets défilent, chacun avec sa vignette
    const projects = relProjects(post); if (!projects.length) return;
    const skill = projectsOf(CONTENT, post).length > 0;
    /* l'en-tête suit la mise en page des fiches (Réglages › Fiches) : même marge haute que le titre, même police que le titre */
    const fm = ficheM(), txt = this.panels[this.panels.length - 1], inSkill = P.section.def.skills && txt && txt.classList.contains('txt');
    const padL = inSkill ? Math.max(12, fm.gutter - fm.side) : fm.side, W = Math.max(200, Math.min(300, fm.col)) + padL + fm.side;
    const head = `<h2 class="ttl" style="left:${padL}px;right:${fm.side}px;top:${fm.top}px">${escapeHTML(ui(skill ? 'skillProjects' : 'together'))}.</h2><span class="n" style="left:${padL}px;bottom:${fm.bottom}px">${projects.length}</span>`;
    if (!skill) { this.addIndex(projects, fm); return; }   // une personne : ses projets en sommaire, page après page
    if (!inSkill) this.addPanel('relh', W, head);   // savoir-faire : l'en-tête est déjà dans la cartouche (moitié basse)
    projects.forEach(p => {
      const ph = photoOf(p), meta = [p.date, tr(p.place)].filter(Boolean).join(' | ');
      const el = this.addPanel('proj', 248, `<button type="button" class="go" data-go="${escapeHTML(p.id)}" aria-label="${escapeHTML(tr(p.title))}">` +
        (ph ? smallImg(ph, 'alt="" draggable="false"') : '') + `<span class="mono"${ph ? ' hidden' : ''}>${escapeHTML(initials(tr(p.title)))}</span>` +
        `<span class="cap"><span class="t">${escapeHTML(tr(p.title).trim())}</span>${meta ? `<span class="m">${escapeHTML(meta)}</span>` : ''}</span></button>`);
      const im = el.querySelector('img'); if (im) im.addEventListener('error', () => { im.remove(); el.querySelector('.mono').hidden = false; });   // photo introuvable : les initiales
    });
  },
  /* Les projets d'une personne, comme le sommaire d'un magazine : des pages de deux colonnes, une petite vignette carrée,
     le numéro, le titre et l'année à côté. La première page porte le titre « Nos projets ensemble. » */
  addIndex(projects, fm) {
    const top = fm.top, low = 355 - fm.bottom, rowH = 66, headH = 58, colW = 252, gap = 30, L = fm.side;
    const rowsFirst = Math.max(1, Math.floor((low - top - headH) / rowH)), rows = Math.max(1, Math.floor((low - top) / rowH));
    const pages = []; let i = 0;
    while (i < projects.length) { const per = (pages.length ? rows : rowsFirst) * 2; pages.push(projects.slice(i, i + per)); i += per; }
    const E = escapeHTML, n2 = k => String(k).padStart(2, '0');
    let k = 0;
    pages.forEach((list, pi) => {
      const r = pi ? rows : rowsFirst, cols = list.length > r ? 2 : 1;
      const head = pi ? '' : `<h2 class="ttl" style="left:${L}px;top:${top}px">${E(ui('together'))}.<span class="n">${projects.length}</span></h2>`;
      const items = list.map(p => {
        const ph = photoOf(p), meta = [p.date, tr(p.place)].filter(Boolean).join(' | '); k++;
        return `<button type="button" class="go" data-go="${E(p.id)}" aria-label="${E(tr(p.title))}"><span class="no">${n2(k)}</span>` +
          `<span class="th">${ph ? smallImg(ph, 'alt="" draggable="false" loading="lazy"') : ''}<span class="mono"${ph ? ' hidden' : ''}>${E(initials(tr(p.title)))}</span></span>` +
          `<span class="cap"><span class="t">${E(tr(p.title).trim())}</span>${meta ? `<span class="m">${E(meta)}</span>` : ''}</span></button>`;
      }).join('');
      const el = this.addPanel('idx', L * 2 + cols * colW + (cols - 1) * gap, head +
        `<div class="list" style="left:${L}px;top:${pi ? top : top + headH}px;grid-template-columns:repeat(${cols},${colW}px);grid-template-rows:repeat(${Math.min(r, list.length)},${rowH}px);column-gap:${gap}px">${items}</div>`);
      el.querySelectorAll('img').forEach(im => im.addEventListener('error', () => { const m = im.nextElementSibling; im.remove(); if (m) m.hidden = false; }));   // photo introuvable : les initiales
    });
  },
  addLogos(post) {   // les partenaires : leurs logos en blanc sur le noir de la fiche, dans une grille aux filets fins, comme une page de crédits de magazine
    const fm = ficheM(), n = post.logos.length, top = fm.top, low = 355 - fm.bottom, labH = 34, L = fm.side;
    const cw = 96, ch0 = 50, maxRows = Math.max(1, Math.floor((low - top - labH) / ch0)), cols = Math.max(1, Math.min(n, Math.ceil(n / maxRows))), rows = Math.ceil(n / cols);   // une cartouche étroite : deux colonnes en général
    const ch = Math.min(ch0, Math.floor((low - top - labH) / rows));
    const cells = post.logos.map(src => `<span class="lg"><img data-src="${escapeHTML(src)}" alt="" draggable="false"></span>`).concat(Array(rows * cols - n).fill('<span class="lg"></span>')).join('');
    const gy = Math.round(top + labH + Math.max(0, (low - top - labH - rows * ch) / 2));
    const el = this.addPanel('logos', L * 2 + cols * cw, `<h3 class="lbl" style="left:${L}px;top:${top}px">${escapeHTML(ui('partners'))}</h3>` +
      `<div class="grid" style="left:${L}px;top:${gy}px;grid-template-columns:repeat(${cols},${cw - 1}px);grid-auto-rows:${ch - 1}px">${cells}</div>`);
    el.querySelectorAll('img[data-src]').forEach(im => monoLogo(im.dataset.src).then(u => { im.src = u.src; im.classList.toggle('raw', !!u.raw); }));
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
  /* Les images après le texte, en rythme, comme un magazine : une image en marie-louise (posée sur blanc, avec sa marge),
     une composition de quatre, une image pleine hauteur, et ainsi de suite. Les vidéos restent pleine hauteur. Jusqu'à deux images : pleine hauteur. */
  addGallery(list) {
    const isImg = m => mediaKind(m.src) === 'image';
    if (list.filter(isImg).length < 3) { list.forEach(m => this.addMedia(m.src, 355, m.credit, true, m.caption)); return; }
    /* Dix mises en page qui alternent fond blanc et fond noir, sans jamais couper une image. Chaque projet entre dans le cycle à un endroit différent,
       pour que deux fiches voisines ne se ressemblent pas. Une mise en page qui demande plus d'images qu'il n'en reste devient une image pleine. */
    const CYCLE = ['mat', 'big2', 'bleed', 'collage', 'trio', 'bleed', 'duo', 'grid', 'offset', 'bleed', 'inset', 'bleed'];
    const NEED = { duo: 2, big2: 3, collage: 3, trio: 3, grid: 4 };
    const id = String(this.post && this.post.id || ''); let h = 0; for (const c of id) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    let k = h % CYCLE.length; if (CYCLE[k] === 'bleed') k++;
    let i = 0;
    while (i < list.length) {
      const m = list[i];
      if (!isImg(m)) { this.addMedia(m.src, 355, m.credit, true, m.caption); i++; continue; }
      const mode = CYCLE[k++ % CYCLE.length], n = NEED[mode] || 1, run = list.slice(i, i + n);
      if (n > 1 && !(run.length === n && run.every(isImg))) { this.addMedia(m.src, 355, m.credit, true, m.caption); i++; continue; }
      if (mode === 'mat') this.addMat(m);
      else if (mode === 'grid') this.addGrid(run);
      else if (mode === 'duo') this.addDuo(run);
      else if (mode === 'big2') this.addBig2(run);
      else if (mode === 'collage') this.addCollage(run);
      else if (mode === 'trio') this.addTrio(run);
      else if (mode === 'offset') this.addOffset(m);
      else if (mode === 'inset') this.addInset(m);
      else this.addMedia(m.src, 355, m.credit, true, m.caption);
      i += n;
    }
  },
  /* Planche sans recadrage : chaque cadre prend les proportions de son image. La planche se calcule d'abord avec des proportions
     moyennes, puis se recalcule à mesure que les images arrivent. place(ratios) rend { w, boxes: [[x, y, l, h]…], cap: [x, y, l] }. */
  addFit(cls, list, place, cap = '') {
    const R = list.map(() => 1.5);
    const el = this.addPanel('media comp ' + cls, 400, list.map(m => `<img src="${escapeHTML(url(m.src))}" alt="" draggable="false" decoding="async">`).join('') + (cap ? `<p class="mcap2">${escapeHTML(cap)}</p>` : ''));
    const ims = [...el.querySelectorAll('img')], pc = el.querySelector('.mcap2'), px = v => Math.round(v) + 'px';
    const apply = relayout => {
      const L = place(R);
      ims.forEach((im, j) => { const [x, y, w, h] = L.boxes[j]; Object.assign(im.style, { left: px(x), top: px(y), width: px(w), height: px(h) }); });
      if (pc) { if (L.cap) Object.assign(pc.style, { left: px(L.cap[0]), top: px(L.cap[1]), width: px(L.cap[2]), display: '' }); else pc.style.display = 'none'; }
      el.style.width = px(L.w); if (relayout) this.layout();
    };
    ims.forEach((im, j) => {
      const got = () => { if (im.naturalWidth) { R[j] = im.naturalWidth / im.naturalHeight; apply(true); } };
      im.addEventListener('load', got); im.addEventListener('error', () => { im.style.visibility = 'hidden'; });
      if (im.complete) got();
    });
    apply(false); return el;
  },
  capOf(list) { const m = list.find(x => x.caption && tr(x.caption).trim()); return m ? tr(m.caption).trim() : ''; },
  addDuo(two) {   // deux images en vis-à-vis sur blanc, à la même hauteur, entières
    const M = 46, g = 16, h = 355 - 2 * M;
    this.addFit('wht duo', two, R => { const a = h * R[0], b = h * R[1]; return { w: 2 * M + a + g + b, boxes: [[M, M, a, h], [M + a + g, M, b, h]] }; });
  },
  addBig2(three) {   // une grande image, deux plus petites empilées à côté, toutes entières, sur noir
    const M = Math.max(16, Math.min(34, ficheM().top)), g = 8, H = 355 - 2 * M;
    this.addFit('big2', three, R => {
      const W = H * R[0], sw = (H - g) / (1 / R[1] + 1 / R[2]), h1 = sw / R[1];
      return { w: 2 * M + W + g + sw, boxes: [[M, M, W, H], [M + W + g, M, sw, h1], [M + W + g, M + h1 + g, sw, H - g - h1]] };
    });
  },
  addCollage(three) {   // trois tailles décalées sur blanc, la légende à côté de la plus petite
    const fit = (r, mw, mh) => (mw / r > mh ? [mh * r, mh] : [mw, mw / r]);
    this.addFit('wht collage', three, R => {
      const [aw, ah] = fit(R[0], 210, 263), xb = 46 + aw + 26, [bw, bh] = fit(R[1], 230, 160), yc = 30 + bh + 20, [cw, chh] = fit(R[2], 150, 355 - 40 - yc);
      return { w: Math.max(xb + bw, xb + cw + 120) + 46, boxes: [[46, 46, aw, ah], [xb, 30, bw, bh], [xb, yc, cw, chh]], cap: [xb + cw + 16, yc + 2, 96] };
    }, this.capOf(three));
  },
  addTrio(three) {   // trois images en rang, à la même hauteur, sur noir, comme une planche contact
    const M = 34, g = 10;
    this.addFit('trio', three, R => {
      let h = 230; const sum = R[0] + R[1] + R[2]; if (h * sum > 1100) h = 1100 / sum;
      const y = (355 - h) / 2; let x = M; const boxes = R.map(r => { const b = [x, y, h * r, h]; x += h * r + g; return b; });
      return { w: x - g + M, boxes };
    });
  },
  addGrid(four) {   // quatre images en deux rangs justifiés : chaque rang prend toute la largeur, aucune image n'est coupée
    const M = Math.max(16, Math.min(34, ficheM().top)), g = 8, Hin = 355 - 2 * M;
    this.addFit('grid4', four, R => {
      const S1 = R[0] + R[1], S2 = R[2] + R[3], W = g + (Hin - g) / (1 / S1 + 1 / S2), h1 = (W - g) / S1, h2 = (W - g) / S2, y2 = M + h1 + g;
      return { w: W + 2 * M, boxes: [[M, M, h1 * R[0], h1], [M + h1 * R[0] + g, M, h1 * R[1], h1], [M, y2, h2 * R[2], h2], [M + h2 * R[2] + g, y2, h2 * R[3], h2]] };
    });
  },
  addOffset(m) {   // une petite image posée en bas, beaucoup de blanc autour, la légende en haut à droite : une respiration
    const M = 46, h = 170, cap = m.caption ? tr(m.caption).trim() : '';
    this.addFit('wht offset', [m], R => { const w = Math.min(h * R[0], 300), hh = w / R[0]; return { w: Math.max(360, M + w + 170), boxes: [[M, 355 - M - hh, w, hh]], cap: [M + w + 24, M, 130] }; }, cap);
  },
  addInset(m) {   // une image plus petite, au centre du noir, avec sa légende dessous
    const cap = m.caption ? tr(m.caption).trim() : '';
    this.addFit('inset', [m], R => { const h = 200, w = Math.min(h * R[0], 360), hh = w / R[0], y = (355 - hh) / 2 - (cap ? 10 : 0); return { w: w + 140, boxes: [[70, y, w, hh]], cap: [70, y + hh + 10, w] }; }, cap);
  },
  addMat(m) {   // marie-louise : l'image sur fond blanc, avec une marge égale tout autour ; la légende dans la marge du bas
    const M = 46, cap = m.caption ? tr(m.caption).trim() : '', ih = 355 - 2 * M;
    const el = this.addPanel('media mat', Math.round(ih * 1.5 + 2 * M), `<img src="${escapeHTML(url(m.src))}" alt="" draggable="false" decoding="async" style="left:${M}px;top:${M}px;height:${ih}px">` + (cap ? `<p class="mcap2" style="left:${M}px;top:${355 - M + 10}px">${escapeHTML(cap)}</p>` : ''));
    const im = el.querySelector('img');
    const fit = () => { if (!im.naturalWidth) return; const w = Math.round(im.naturalWidth * ih / im.naturalHeight); el.style.width = (w + 2 * M) + 'px'; const c = el.querySelector('.mcap2'); if (c) c.style.width = w + 'px'; this.layout(); };
    im.addEventListener('load', fit); if (im.complete) fit();
    im.addEventListener('error', () => { el.remove(); this.panels = this.panels.filter(x => x !== el); this.layout(); });
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
    const own = kind === 'vimeo' && id && !firstEmbed(this.post, src), fallback = this.post && this.post.thumb ? url(this.post.thumb) : '';
    const poster = kind === 'youtube' && id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : own ? '' : fallback;
    if (poster || own) { const im = document.createElement('img'); im.alt = ''; im.draggable = false; im.onerror = () => im.remove(); if (poster) im.src = poster; else vimeoThumb(id).then(u => { if (u || fallback) im.src = u || fallback; else im.remove(); }); cover.appendChild(im); }
    cover.insertAdjacentHTML('beforeend', `<span class="brand">${kind === 'youtube' ? 'YouTube' : 'Vimeo'}</span>`);
    const play = document.createElement('button'); play.type = 'button'; play.className = 'play'; play.setAttribute('aria-label', ui('play'));
    play.addEventListener('click', () => {
      const f = document.createElement('iframe');
      f.src = kind === 'youtube' ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0` : vimeoPlayer(id, 'autoplay=1&title=0&byline=0&portrait=0');
      f.allow = 'autoplay; fullscreen; picture-in-picture'; f.allowFullscreen = true; f.title = kind === 'youtube' ? 'YouTube' : 'Vimeo';
      cover.replaceWith(f);
    });
    cover.appendChild(play); inner.appendChild(cover);
  },
  addText(post, mode) {
    let { width, x, colW, press } = textGeom(mode);
    const fm = ficheM(), low = 355 - fm.bottom;   // bas du texte
    if (mode === 'project' && P.section.def.skills) { width = Math.min(width, 261); x = 26; colW = width - 52; press = false; }
    /* marges gauche et droite de la colonne i sur n : en colonnes de presse, la gouttière se partage entre deux colonnes voisines */
    const pads = (i, n) => press ? [i === 0 ? fm.side : Math.floor(fm.gutter / 2), i === n - 1 ? fm.side : Math.ceil(fm.gutter / 2)] : [x, width - x - colW];   // savoir-faire : peu de texte, une fiche deux fois plus étroite
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
      const mH = measure.firstChild.offsetHeight, metaBottom = low - 13, metaTop = metaBottom - mH;
      /* savoir-faire : la cartouche se partage en deux, la description en haut, ses projets en bas (un filet, le libellé, leur nombre, la flèche vers les vignettes) */
      const relN = P.section.def.skills ? relProjects(post).length : 0;
      let relHTML = '', relH = 0;
      if (relN) {
        relHTML = `<span class="lbl">${escapeHTML(ui(projectsOf(CONTENT, post).length ? 'skillProjects' : 'together'))}</span><span class="row"><span class="n">${relN}</span><span class="arr" aria-hidden="true">→</span></span>`;
        measure.innerHTML = `<div class="relp" style="position:static">${relHTML}</div>`; relH = measure.firstChild.offsetHeight;
      }
      const stackTop = relH ? metaTop - relH - 18 : metaTop;   // le haut de ce qui est posé en bas de la dernière colonne
      const sy = fm.top + tH + 6, top = fm.top + tH + sH + 20;
      const pages = paginate(html, colW, [low - top, low - fm.top], measure);   // pages pleines ; le bloc du bas se loge sur la dernière
      measure.innerHTML = `<div class="body" style="position:static">${pages[pages.length - 1]}</div>`;
      let lastTop = pages.length === 1 ? top : fm.top;
      if (pages[pages.length - 1] && lastTop + measure.firstChild.offsetHeight > stackTop - 12) {   // pas la place : la dernière page se recoupe
        /* savoir-faire : la colonne reste pleine, la suite et le bloc des projets passent dans la colonne d'à côté */
        const tail = paginate(pages.pop(), colW, relH ? [low - lastTop, stackTop - 12 - fm.top] : [stackTop - 12 - lastTop, stackTop - 12 - fm.top], measure);
        pages.push(...tail);
        if (relH && tail.length === 1) pages.push('');
      }
      let relTop = 0;
      if (relH) {   // au milieu de la cartouche si le texte le permet, sinon juste sous le texte
        lastTop = pages.length === 1 ? top : fm.top;
        measure.innerHTML = `<div class="body" style="position:static">${pages[pages.length - 1] || ''}</div>`;
        const end = lastTop + (pages[pages.length - 1] ? measure.firstChild.offsetHeight : 0) + 18;
        relTop = pages[pages.length - 1] ? Math.min(stackTop, Math.max(Math.round((fm.top + low) / 2) - 10, end)) : fm.top + 4;   // colonne à lui seul : en haut, à la hauteur du titre
      }
      pages.forEach((pg, i) => {
        const last = i === pages.length - 1, [x, rp] = pads(i, pages.length);
        this.addPanel('txt', x + colW + rp, (i === 0 ? `<h2 class="ttl" style="left:${x}px;top:${fm.top}px;width:${colW}px">${escapeHTML(title)}</h2>${subtitle ? `<p class="stl" style="left:${x}px;top:${sy}px;width:${colW}px">${escapeHTML(subtitle)}</p>` : ''}` : '') +
          `<div class="body" style="left:${x}px;top:${i === 0 ? top : fm.top}px;width:${colW}px">${pg}</div>` +
          (last && relH ? `<div class="relp" style="left:${x}px;top:${relTop}px;width:${colW}px">${relHTML}</div>` : '') +
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
  addTeam(post) {   // « Qui a travaillé sur ce projet ? » : à gauche le titre et l'index numéroté, à droite les portraits en planche, de tailles variées, comme une page de magazine
    const team = post.team.map(id => CONTENT.posts.find(p => p.id === id)).filter(Boolean);
    const fm = ficheM(), top = fm.top, low = 355 - fm.bottom, L = fm.side, gap = Math.max(24, Math.min(36, fm.gutter));
    const num = j => String(j + 1).padStart(2, '0');
    const el = this.addPanel('team', 900, `<h2 class="ttl" style="left:${L}px;top:${top}px">${escapeHTML(ui('who'))}</h2>` +
      `<ol class="idx" style="left:${L}px">${team.map((p, j) => `<li data-i="${j}"><b>${num(j)}</b><span><span class="nm">${escapeHTML(tr(p.title).trim())}</span>${tr(p.subtitle).trim() ? `<i>${escapeHTML(tr(p.subtitle).trim())}</i>` : ''}</span></li>`).join('')}` +
      (post.credits ? `<li class="more"><span><i>${escapeHTML(ui('with'))}</i> ${escapeHTML(post.credits)}</span></li>` : '') + '</ol>');
    const inner = el.querySelector('.in'), ttl = inner.querySelector('.ttl'), idx = inner.querySelector('.idx');
    const it = Math.ceil(ttl.offsetTop + ttl.offsetHeight + 18);
    idx.style.top = it + 'px'; idx.style.height = Math.max(60, low - it) + 'px';
    const idxW = Math.max(200, idx.scrollWidth, Math.min(ttl.scrollWidth, 260));   // un long index passe sur une deuxième colonne
    /* la planche : des colonnes de portraits carrés, de tailles qui alternent, décalées d'une colonne à l'autre */
    const SIZES = [116, 82, 98, 70, 108, 76, 90, 66], x0 = L + idxW + gap;
    let x = x0, y = top, colW = 0, col = 0, right = x0;
    team.forEach((p, j) => {
      const sz = SIZES[j % SIZES.length] * (team.length > 12 ? 0.8 : 1), cap = 16;
      if (y + sz + cap > low && y > top + 1) { x += colW + 16; col++; y = top + (col % 2 ? 34 : 0); colW = 0; }
      const go = onSite(p) && p.published !== false;
      const f = document.createElement(go ? 'button' : 'div'); f.className = 'face' + (go ? ' go' : ''); if (go) { f.type = 'button'; f.dataset.go = p.id; }
      f.dataset.i = j; Object.assign(f.style, { left: x + 'px', top: y + 'px', width: sz + 'px', height: sz + 'px' });
      const other = !p.thumb && (personProjects(p).find(q => q !== post) || personProjects(p)[0]);   // pas de portrait : un de ses autres projets, voilé, sous les initiales
      const bg = other ? ` style="background:linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),url('${escapeHTML(url(photoOf(other))).replace(/'/g, '%27')}') center/cover"` : '';
      f.innerHTML = (p.thumb ? smallImg(p.thumb, 'alt="" draggable="false"') : `<span class="mono"${bg}>${escapeHTML(initials(tr(p.title)))}</span>`) + `<b class="n">${num(j)}</b>`;
      f.setAttribute('aria-label', tr(p.title));
      inner.appendChild(f);
      colW = Math.max(colW, sz); y += sz + cap; right = Math.max(right, x + sz);
    });
    el.style.width = Math.ceil((team.length ? right : L + idxW) + L) + 'px';
    /* un portrait et son nom s'allument ensemble */
    const lite = (i, on) => inner.querySelectorAll(`[data-i="${i}"]`).forEach(n => n.classList.toggle('on', on));
    inner.querySelectorAll('[data-i]').forEach(n => { ['pointerenter', 'focus'].forEach(ev => n.addEventListener(ev, () => lite(n.dataset.i, true))); ['pointerleave', 'blur'].forEach(ev => n.addEventListener(ev, () => lite(n.dataset.i, false))); });
    inner.querySelectorAll('.idx li[data-i]').forEach(li => { const f = inner.querySelector(`.face.go[data-i="${li.dataset.i}"]`); if (f) { li.classList.add('go'); li.dataset.go = f.dataset.go; } });
  },

  addForm() {   // le petit questionnaire, à côté du contact
    const fm = ficheM(), { x, colW } = textGeom('project'), gap = fm.gutter || 40;
    this.addPanel('txt contact cform', x + colW * 2 + gap + x, `<div class="cbox" style="left:${x}px;top:${fm.top}px;bottom:${fm.bottom}px;width:${colW * 2 + gap}px;--cf-gap:${gap}px">${contactFormHTML('pnl')}</div>`);
    bindContactForm(strip.lastElementChild);
  },
  /* Contact : la même fiche que les projets et les personnes (marges, titre, sous-titre et texte des Réglages › Typographie › Fiches) */
  addContact(post) {
    const fm = ficheM(), { width, x, colW } = textGeom('project'), E = escapeHTML;
    const site = (post.link || '').replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
    let title = tr(post.title).trim(); if (title && !/[.!?]$/.test(title)) title += '.';
    const sub = tr(post.subtitle).trim();
    this.addPanel('txt contact', width, `<div class="cbox" style="left:${x}px;top:${fm.top}px;bottom:${fm.bottom}px;width:${colW}px">` +
      `<h2 class="ttl">${E(title)}</h2>${sub ? `<p class="stl">${E(sub)}</p>` : ''}` +
      `<div class="body">${contactHTML(sanitizeHTML(tr(post.body)))}${post.link ? `<p class="site"><a href="${E(post.link)}" target="_blank" rel="noopener">${E(site)}</a></p>` : ''}</div>` +
      `</div>`);   // le lieu est déjà dans l'adresse : pas de ligne en plus
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
  /* Aux deux bouts, la bande résiste comme un élastique : elle dépasse un peu, de moins en moins, puis revient en douceur */
  rubber(v) { const lo = Math.min(0, this.end), M = OVER_MAX, r = e => M * (1 - 1 / (e / M * 0.55 + 1)); return v > 0 ? r(v) : v < lo ? lo - r(lo - v) : v; },
  push(d) {   // molette, pavé tactile, élan : ce qui dépasse les bouts devient de l'élastique
    const lo = Math.min(0, this.end), v = this.finalpos + d;
    if (v > 0 || v < lo) {   // l'excès donne un élan à un ressort amorti : la bande part, ralentit, revient, sans jamais trembler
      const ex = v > 0 ? v : v - lo, out = !this.over || Math.sign(ex) === Math.sign(this.over);
      this.finalpos = Math.max(lo, Math.min(0, v)); this.ov += ex * 12 * (out ? Math.pow(Math.max(0, 1 - Math.abs(this.over) / OVER_MAX), 2) : 1);
    }
    else this.finalpos = v;
  },
  step() {   // Navigation._navigation
    if (!this.open) return;
    const lo = Math.min(0, this.end);
    if (this.dragging) {   // la bande est réduite sur téléphone : le doigt la fait avancer de la même distance à l'écran
      const d = (mouse2D - this.xprev) * 1.5 / (this.scale || 1);
      this.finalpos += d; this.vel = this.vel * 0.6 + d * 0.4; this.x -= (this.x - this.finalpos) * ease(STYLE.easing); this.xprev = mouse2D;
    } else {
      /* tirée à la main au-delà d'un bout : elle file, puis revient d'elle-même, avec l'élan d'origine */
      if (Math.abs(this.finalpos - this.x) > 0.5) this.x -= (this.x - this.finalpos) * ease(STYLE.easing * 2 / 3);
      else if (this.finalpos > 0) this.finalpos = 0; else if (this.finalpos < lo) this.finalpos = lo;
      if (this.over || this.ov) {   // molette et pavé tactile aux bouts : un petit ressort, vif
        const t = Math.min(0.1, frames / FPS), w = 17, e = Math.exp(-w * t), o = this.over, v = this.ov, b = v + w * o;
        this.over = Math.max(-OVER_MAX, Math.min(OVER_MAX, (o + b * t) * e)); this.ov = (v - w * b * t) * e;
        if (Math.abs(this.over) < 0.2 && Math.abs(this.ov) < 5) this.over = this.ov = 0;
      }
    }
    const tx = Math.round(this.x + this.over); if (tx !== this.tx) { this.tx = tx; strip.style.transform = `translateX(${tx}px)`; }
  },
};
/* ================================================================ Fiche verticale (téléphone)
   Sur téléphone, la 3D sert à choisir un projet ; on le lit ensuite de haut en bas, comme une page de magazine :
   la première image, le titre, le texte sur une colonne, les rubriques (crédits, presse…) qui s'ouvrent d'un toucher,
   les images entières, l'équipe, les partenaires, et le projet suivant. La croix ou le geste retour du téléphone ramènent à la 3D. */
const postvEl = document.createElement('div'); postvEl.id = 'postv'; postvEl.hidden = true; postvEl.setAttribute('role', 'dialog'); postvEl.setAttribute('aria-modal', 'true');
document.body.appendChild(postvEl);
const verticalFiche = () => phoneMode();
const postV = {
  open: false, pushed: false, keepHistory: false, post: null,
  build(post, card) {
    this.post = post; this.open = true;
    const sec = P.section.def, media = post.media.filter(m => m && m.src), E = escapeHTML;
    let title = tr(post.title).trim(); if (title && !/[.!?]$/.test(title)) title += '.';
    const subtitle = tr(post.subtitle).trim(), out = [];
    out.push(`<div class="pv-bar"><span class="pv-sec">${E(tr(sec.name).trim())}</span><button type="button" class="pv-x" aria-label="${E(ui('close'))}"><span></span><span></span></button></div>`);
    const first = media[0] ? media[0] : (post.thumb ? { src: post.thumb } : null);
    if (first) out.push(this.media(first, 'pv-hero' + (!media[0] && isLogo(post) ? ' pv-logo' : '')));
    if (card === 'place') {
      const site = (post.link || '').replace(/^https?:\/\/(www\.)?/, '');
      out.push(`<div class="pv-txt"><h1 class="pv-ttl">${E(title)}</h1>${subtitle ? `<p class="pv-stl">${E(subtitle)}</p>` : ''}` +
        (post.link ? `<p class="pv-site"><a href="${E(post.link)}" target="_blank" rel="noopener">${E(site)}</a></p>` : '') +
        `<div class="pv-body pv-contact">${contactHTML(sanitizeHTML(tr(post.body)))}</div></div>` +
        (CONTACT_FORM.to ? `<div class="pv-form">${contactFormHTML('pv')}</div>` : ''));
    } else {
      out.push(this.text(post, title, subtitle, sec));
      if (sec.skills) out.push(this.relations(post));
      if (card === 'text') media.slice(1).forEach(m => out.push(this.media(m, 'pv-full')));
      else out.push(this.gallery(media.slice(1)));
      if (!sec.skills) out.push(this.relations(post));
      if (card !== 'text' && ((post.team && post.team.length) || post.credits)) out.push(this.team(post));
      if (post.logos && post.logos.length) out.push(`<section class="pv-logos"><h2 class="pv-h">${E(ui('partners'))}</h2><div class="pv-lgrid">${post.logos.map(src => `<span><img data-src="${E(src)}" alt=""></span>`).join('')}</div></section>`);
      if (post.link) { const href = /^https?:\/\//.test(post.link) ? post.link : 'https://' + post.link, host = post.link.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
        out.push(`<p class="pv-link"><span>${E(String(ui('visit')).replace(/\s*:\s*$/, ''))}</span><a href="${E(href)}" target="_blank" rel="noopener">${E(host)} ↗</a></p>`); }
      out.push(this.next(post));
    }
    postvEl.innerHTML = `<div class="pv-page">${out.join('')}</div>`;
    const cf = postvEl.querySelector('.pv-form'); if (cf) bindContactForm(cf);
    this.wire();
    postvEl.hidden = false; postvEl.scrollTop = 0; void postvEl.offsetWidth; postvEl.classList.add('on');
    document.body.classList.add('pv-open');
    if (!this.pushed && !PREVIEW) { try { history.pushState({ hcv: 1 }, '', location.href); this.pushed = true; } catch (e) {} }
  },
  text(post, title, subtitle, sec) {
    const E = escapeHTML, html = sanitizeHTML(tr(post.body)), parts = html.split(/(?=<h3[\s>])/i);
    const lead = /^\s*<h3/i.test(parts[0]) ? '' : parts.shift();
    const folds = parts.map(pt => { const m = /^<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*)$/i.exec(pt.trim()); return m ? `<details class="pv-fold"><summary>${m[1]}</summary><div class="pv-body">${m[2]}</div></details>` : pt; }).join('');
    const tags = post.tags.filter(id => id !== 'featured').map(id => sec.tags.find(tg => tg.id === id)).filter(Boolean).map(tg => tr(tg.label));
    const fecha = [post.date, tr(post.place)].filter(Boolean).join(' | ');
    const skills = relSkills(post);
    let skl = '';
    if (skills.length) { const sd = (SECTIONS.find(x => x.def.id === skills[0].section) || {}).def;
      skl = `<p class="pv-meta"><span>${E((sd ? tr(sd.name) : ui('skills')).trim())}</span> ${skills.map(k => `<button type="button" class="go" data-go="${E(k.id)}">${E(tr(k.title).trim())}</button>`).join(', ')}</p>`; }
    return `<div class="pv-txt"><h1 class="pv-ttl">${E(title)}</h1>${subtitle ? `<p class="pv-stl">${E(subtitle)}</p>` : ''}` +
      (fecha ? `<p class="pv-date">${E(fecha)}</p>` : '') + `<div class="pv-body">${lead || ''}</div>` +
      (folds ? `<div class="pv-folds">${folds}</div>` : '') +
      (tags.length ? `<p class="pv-meta"><span>${E(ui('postedIn'))}</span> ${tags.map(E).join(', ')}</p>` : '') + skl + '</div>';
  },
  media(m, cls) {   // une image, une vidéo ou un lecteur, toujours entier, en pleine largeur
    const E = escapeHTML, kind = mediaKind(m.src), cap = m.caption ? tr(m.caption).trim() : '';
    const fc = cap ? `<figcaption>${E(cap)}</figcaption>` : '';
    if (kind === 'youtube' || kind === 'vimeo') {
      const id = kind === 'youtube' ? ytId(m.src) : vimeoId(m.src), own = kind === 'vimeo' && id && !firstEmbed(this.post, m.src);
      const poster = kind === 'youtube' && id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : own ? '' : (this.post && this.post.thumb ? url(this.post.thumb) : '');
      return `<figure class="${cls} pv-embed" data-kind="${kind}" data-id="${E(id || '')}"><div class="pv-cover">${poster ? `<img src="${E(poster)}" alt="">` : own ? `<img data-vimeo="${E(id)}" alt="">` : ''}<button type="button" class="play" aria-label="${E(ui('play'))}"></button><span class="brand">${kind === 'youtube' ? 'YouTube' : 'Vimeo'}</span></div>${fc}</figure>`;
    }
    if (kind === 'video') return `<figure class="${cls}"><video src="${E(url(m.src) + (/#t=/.test(m.src) ? '' : '#t=0.1'))}" controls playsinline preload="metadata"></video>${fc}</figure>`;
    return `<figure class="${cls}"><img src="${E(url(m.src))}" alt="" loading="lazy" decoding="async">${fc}</figure>`;
  },
  /* les images à la suite, en rythme : pleine largeur, marie-louise, deux côte à côte, quatre en deux rangs… toujours entières */
  gallery(list) {
    const isImg = m => mediaKind(m.src) === 'image', out = [], E = escapeHTML;
    const row = two => `<div class="pv-row">${two.map(m => `<img src="${E(url(m.src))}" alt="" loading="lazy" decoding="async">`).join('')}</div>`;
    const CYCLE = ['full', 'mat', 'pair', 'full', 'quad', 'full', 'big2', 'mat', 'full', 'pair'], NEED = { pair: 2, quad: 4, big2: 3 };
    const id = String(this.post.id || ''); let h = 0; for (const c of id) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    let k = h % CYCLE.length, i = 0;
    while (i < list.length) {
      const m = list[i];
      if (!isImg(m)) { out.push(this.media(m, 'pv-full')); i++; continue; }
      const mode = CYCLE[k++ % CYCLE.length], n = NEED[mode] || 1, run = list.slice(i, i + n);
      if (n > 1 && !(run.length === n && run.every(isImg))) { out.push(this.media(m, 'pv-full')); i++; continue; }
      const cap = run.map(x => (x.caption ? tr(x.caption).trim() : '')).filter(Boolean)[0] || '';
      const fc = cap ? `<figcaption>${E(cap)}</figcaption>` : '';
      if (mode === 'mat') out.push(this.media(m, 'pv-mat'));
      else if (mode === 'pair') out.push(`<figure class="pv-grid">${row(run)}${fc}</figure>`);
      else if (mode === 'quad') out.push(`<figure class="pv-grid">${row(run.slice(0, 2))}${row(run.slice(2))}${fc}</figure>`);
      else if (mode === 'big2') out.push(`<figure class="pv-grid"><img class="pv-one" src="${E(url(run[0].src))}" alt="" loading="lazy">${row(run.slice(1))}${fc}</figure>`);
      else out.push(this.media(m, 'pv-full'));
      i += n;
    }
    return out.length ? `<div class="pv-gal">${out.join('')}</div>` : '';
  },
  relations(post) {
    const projects = relProjects(post); if (!projects.length) return '';
    const E = escapeHTML, skill = projectsOf(CONTENT, post).length > 0;
    return `<section class="pv-rel"><h2 class="pv-h">${E(ui(skill ? 'skillProjects' : 'together'))} <span>${projects.length}</span></h2><div class="pv-tiles">` +
      projects.map(p => { const ph = photoOf(p), meta = [p.date, tr(p.place)].filter(Boolean).join(' | ');
        return `<button type="button" class="go pv-tile" data-go="${E(p.id)}">${ph ? smallImg(ph, 'alt="" loading="lazy"') : `<span class="mono">${E(initials(tr(p.title)))}</span>`}<span class="t">${E(tr(p.title).trim())}</span>${meta ? `<span class="m">${E(meta)}</span>` : ''}</button>`; }).join('') + '</div></section>';
  },
  team(post) {
    const E = escapeHTML, team = (post.team || []).map(id => CONTENT.posts.find(p => p.id === id)).filter(Boolean);
    return `<section class="pv-team"><h2 class="pv-h">${E(ui('who'))}</h2><div class="pv-faces">` +
      team.map(p => { const go = onSite(p) && p.published !== false, tag = go ? 'button' : 'div';
        return `<${tag} ${go ? `type="button" class="go pv-face" data-go="${E(p.id)}"` : 'class="pv-face"'}>${p.thumb ? smallImg(p.thumb, 'alt="" loading="lazy"') : `<span class="mono">${E(initials(tr(p.title)))}</span>`}<span class="t">${E(tr(p.title).trim())}</span>${tr(p.subtitle).trim() ? `<span class="m">${E(tr(p.subtitle).trim())}</span>` : ''}</${tag}>`; }).join('') +
      '</div>' + (post.credits ? `<p class="pv-with"><i>${E(ui('with'))}</i> ${E(post.credits)}</p>` : '') + '</section>';
  },
  next(post) {   // le projet suivant de la section, pour enchaîner sans repasser par la 3D
    const list = (P.data && P.data.list) || [], i = list.indexOf(post); if (list.length < 2 || i < 0) return '';
    const n = list[(i + 1) % list.length], ph = photoOf(n), E = escapeHTML;
    return `<button type="button" class="go pv-next" data-go="${E(n.id)}"><span class="l">${E(ui('nextProject'))} →</span><span class="t">${E(tr(n.title).trim())}</span>${ph ? smallImg(ph, 'alt="" loading="lazy"') : ''}</button>`;
  },
  wire() {
    postvEl.querySelector('.pv-x').addEventListener('click', () => closePost());
    postvEl.querySelectorAll('.pv-row img').forEach(im => {   // deux images côte à côte : chacune prend une largeur proportionnelle à son format, à la même hauteur
      const set = () => { if (im.naturalWidth) im.style.flexGrow = (im.naturalWidth / im.naturalHeight).toFixed(3); };
      im.addEventListener('load', set); if (im.complete) set();
    });
    postvEl.querySelectorAll('img[data-vimeo]').forEach(im => { const fb = this.post && this.post.thumb ? url(this.post.thumb) : ''; vimeoThumb(im.dataset.vimeo).then(u => { if (u || fb) im.src = u || fb; else im.remove(); }); });   // chaque vidéo Vimeo sa vignette
    postvEl.querySelectorAll('img').forEach(im => im.addEventListener('error', () => { const f = im.closest('figure.pv-full, figure.pv-mat'); if (f && !f.classList.contains('pv-hero')) f.remove(); else im.style.visibility = 'hidden'; }));
    postvEl.querySelectorAll('.pv-lgrid img[data-src]').forEach(im => monoLogo(im.dataset.src).then(u => { im.src = u.src; im.classList.toggle('raw', !!u.raw); }));
    postvEl.querySelectorAll('.pv-embed').forEach(fg => fg.querySelector('.play').addEventListener('click', () => {
      const kind = fg.dataset.kind, id = fg.dataset.id, f = document.createElement('iframe');
      f.src = kind === 'youtube' ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0` : vimeoPlayer(id, 'autoplay=1&title=0&byline=0&portrait=0');
      f.allow = 'autoplay; fullscreen; picture-in-picture'; f.allowFullscreen = true; f.title = kind === 'youtube' ? 'YouTube' : 'Vimeo';
      fg.querySelector('.pv-cover').replaceWith(f);
    }));
  },
  close() {
    if (!this.open) return; this.open = false;
    postvEl.querySelectorAll('video').forEach(v => v.pause());
    postvEl.classList.remove('on'); document.body.classList.remove('pv-open');
    setTimeout(() => { if (!this.open) { postvEl.hidden = true; postvEl.innerHTML = ''; } }, 420);
    if (this.keepHistory) { this.keepHistory = false; return; }   // on passe à un autre projet depuis la fiche : l'entrée d'historique sert au suivant
    if (this.pushed) { this.pushed = false; try { history.back(); } catch (e) {} }
  },
};
postvEl.addEventListener('click', e => { const b = e.target.closest('[data-go]'); if (b) { e.preventDefault(); postV.keepHistory = true; goToPost(b.dataset.go); postV.keepHistory = false; } });
postvEl.addEventListener('keydown', e => { if (e.code === 'Escape') closePost(); });
/* Un logo de partenaire en blanc sur transparent, quels que soient ses couleurs et son fond : on repère le fond sur les bords de l'image,
   et chaque pixel garde d'autant plus d'encre qu'il s'en écarte. Une image d'un autre site (illisible au pixel) passe par un filtre. */
const MONO = new Map();
function monoLogo(src) {
  if (MONO.has(src)) return MONO.get(src);
  const job = loadImage(src).then(im => {
    const k = Math.min(1, 480 / Math.max(im.naturalWidth, im.naturalHeight)), w = Math.max(1, Math.round(im.naturalWidth * k)), h = Math.max(1, Math.round(im.naturalHeight * k));
    const c = document.createElement('canvas'); c.width = w; c.height = h; const x = c.getContext('2d', { willReadFrequently: true }); x.drawImage(im, 0, 0, w, h);
    let d; try { d = x.getImageData(0, 0, w, h); } catch (e) { return { src: url(src), raw: true }; }
    const px = d.data, lum = i => (0.2126 * px[i] + 0.7152 * px[i + 1] + 0.0722 * px[i + 2]) / 255;
    let n = 0, clear = 0, sum = 0;   // le fond : les pixels du bord
    const edge = i => { n++; if (px[i + 3] < 40) clear++; else sum += lum(i); };
    for (let X = 0; X < w; X++) { edge(X * 4); edge(((h - 1) * w + X) * 4); }
    for (let Y = 0; Y < h; Y++) { edge(Y * w * 4); edge((Y * w + w - 1) * 4); }
    const transparent = clear > n * 0.5, bg = transparent ? 0 : sum / Math.max(1, n - clear);
    let inkLum = 0, cnt = 0; if (transparent) { for (let i = 0; i < px.length; i += 16) if (px[i + 3] > 128) { inkLum += lum(i); cnt++; } inkLum = cnt ? inkLum / cnt : 0; }
    const ref = transparent ? (inkLum < 0.5 ? 1 : 0) : bg, span = Math.max(0.25, Math.max(ref, 1 - ref));
    for (let i = 0; i < px.length; i += 4) {
      const a = px[i + 3] / 255, l = lum(i), sat = (Math.max(px[i], px[i + 1], px[i + 2]) - Math.min(px[i], px[i + 1], px[i + 2])) / 255;
      let ink = Math.min(1, Math.max(Math.abs(l - ref), sat * 0.8) / span); ink = ink < 0.08 ? 0 : Math.min(1, (ink - 0.08) * 1.35);
      px[i] = px[i + 1] = px[i + 2] = 255; px[i + 3] = Math.round(255 * ink * a);
    }
    x.putImageData(d, 0, 0);
    let x0 = w, y0 = h, x1 = -1, y1 = -1;   // on recadre sur l'encre : les logos aux grandes marges gardent la même présence que les autres
    for (let Y = 0; Y < h; Y++) for (let X = 0; X < w; X++) if (px[(Y * w + X) * 4 + 3] > 24) { if (X < x0) x0 = X; if (X > x1) x1 = X; if (Y < y0) y0 = Y; if (Y > y1) y1 = Y; }
    if (x1 < x0) return { src: c.toDataURL('image/png') };
    const o = document.createElement('canvas'); o.width = x1 - x0 + 1; o.height = y1 - y0 + 1; o.getContext('2d').drawImage(c, -x0, -y0);
    return { src: o.toDataURL('image/png') };
  }).catch(() => ({ src: url(src), raw: true }));
  MONO.set(src, job); return job;
}
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
  /* changement de colonne ; un intertitre (Crédits, Presse…) ne reste jamais seul en bas : il passe avec ce qui le suit */
  const flush = () => {
    while (box.lastChild && !box.lastChild.textContent.trim()) box.removeChild(box.lastChild);
    const last = box.lastElementChild, carry = last && last.nodeName === 'H3' && box.children.length > 1 ? box.removeChild(last) : null;
    pages.push(box.innerHTML); box.innerHTML = ''; page++;
    if (carry) box.appendChild(carry);
  };
  for (const b of blocks) {
    const clone = b.cloneNode(true); box.appendChild(clone);
    if (box.offsetHeight <= limit()) continue;
    box.removeChild(clone);
    if (b.nodeName === 'H3') { if (box.childNodes.length) flush(); box.appendChild(b.cloneNode(true)); continue; }
    if (b.nodeName === 'UL' || b.nodeName === 'OL') {   // une liste trop longue se coupe entre deux puces ; son intertitre la suit toujours
      const start = +(b.getAttribute('start') || 1); let list = b.cloneNode(false), n = 0; box.appendChild(list);
      for (const li of [...b.children]) {
        const c = li.cloneNode(true); list.appendChild(c); n++;
        if (box.offsetHeight <= limit()) continue;
        if (list.children.length === 1 && [...box.children].every(e => e === list || e.nodeName === 'H3')) continue;   // colonne déjà neuve : rien à gagner à passer à la suivante
        list.removeChild(c); flush();
        list = b.cloneNode(false); if (b.nodeName === 'OL') list.setAttribute('start', String(start + n - 1));
        box.appendChild(list); list.appendChild(c);
      }
      continue;
    }
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
  if (e.target.closest('a, .face, iframe, input, textarea, select, label, button')) return;
  if (e.target.tagName === 'VIDEO' && e.target.controls && e.clientY > e.target.getBoundingClientRect().bottom - 52) return;   // barre de lecture
  pend2D = { id: e.pointerId, x: e.clientX, y: e.clientY }; mouse2D = e.clientX;
});
post2dEl.addEventListener('pointermove', e => {
  if (e.pointerType === 'mouse' && e.buttons === 0 && (pend2D || post2D.dragging)) { stopDrag2D(); return; }   // bouton relâché sans qu'on l'ait vu : la fiche ne suit plus la souris
  mouse2D = e.clientX;
  if (!pend2D || e.pointerId !== pend2D.id || post2D.dragging) return;
  const dx = e.clientX - pend2D.x, dy = e.clientY - pend2D.y;
  if (Math.abs(dx) > 6 && Math.abs(dx) >= Math.abs(dy)) {
    post2D.dragging = true; post2D.xprev = pend2D.x; post2D.finalpos = post2D.x; post2D.vel = 0;
    try { post2dEl.setPointerCapture(e.pointerId); } catch (err) {}
    post2dEl.classList.add('grabbing');
  }
});
post2dEl.addEventListener('click', e => { if (post2D.justDragged) { e.preventDefault(); e.stopPropagation(); post2D.justDragged = false; } }, true);
/* Pavé tactile et molette sur la fiche : la bande défile, et un balayage horizontal ne renvoie jamais à la page précédente */
post2dEl.addEventListener('wheel', e => {
  e.preventDefault(); if (!post2D.open || post2D.dragging) return;
  const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY, k = e.deltaMode === 1 ? 16 : 1;
  post2D.push(-d * k / (post2D.scale || 1));
}, { passive: false });
window.addEventListener('wheel', e => { if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && !e.target.closest('.scroll-x')) e.preventDefault(); }, { passive: false });
const stopDrag2D = () => { if (post2D.dragging) { post2D.justDragged = true; setTimeout(() => { post2D.justDragged = false; }, 0); post2D.finalpos += (post2D.vel || 0) * 10; } post2D.vel = 0; pend2D = null; post2D.dragging = false; post2dEl.classList.remove('grabbing'); };   // élan : un geste rapide lance la bande
post2dEl.addEventListener('pointerup', stopDrag2D); post2dEl.addEventListener('pointercancel', stopDrag2D);
post2dEl.addEventListener('lostpointercapture', e => { if (e.target === post2dEl) stopDrag2D(); });   // au doigt, la capture passe de l'élément touché à la bande : ce transfert ne doit pas arrêter le glissement
window.addEventListener('pointerup', () => { if (pend2D || post2D.dragging) stopDrag2D(); });
whiteboard.addEventListener('pointerdown', () => closePost());
/* Au bout de la fiche, un clic dans le vide à droite (ou avant le début, à gauche) : on sort, retour à la 3D */
post2dEl.addEventListener('click', e => {
  if (!post2D.open || post2D.justDragged || e.target.closest('.pnl, a, button, iframe, video, input')) return;
  const ps = post2dEl.querySelectorAll('#strip .pnl'); if (!ps.length) return;
  const first = ps[0].getBoundingClientRect(), last = ps[ps.length - 1].getBoundingClientRect();
  if (e.clientX > last.right + 4 || e.clientX < first.left - 4) closePost();
});

/* ================================================================ StageView : navigation générale */
function getToSectionView(index = -1, indexPost = 0) {
  killAllTweens();
  if (index === -1) index = P.currentSection || 0;
  checkPostOpenAndClose();
  if (index !== P.currentSection) resetZoom();
  P.currentSection = index; P.resetData(); P.selected = indexPost;
  changeSection3D(); changeActiveButton(); initCategorieData();   // le menu des catégories ne s'ouvre jamais tout seul
  try { history.replaceState(null, '', '#' + P.section.def.id); } catch (e) {}
  countView('#' + P.section.def.id, tr(P.section.def.name).trim());
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
  const catMoved = !d.list.includes(post); if (catMoved) d.changeCategory(d.categoryList.some(c => c.id === '') ? '' : d.tagOf(post));
  const idx = d.list.indexOf(post); if (idx < 0) return;
  const pageMoved = idx < d.first || idx >= d.last;
  if (pageMoved) { const per = d.per; d.first = Math.floor(idx / per) * per; d.last = Math.min(d.list.length, d.first + per); d.posts = d.list.slice(d.first, d.last); }
  const sel = d.posts.indexOf(post);
  if (!moved && !catMoved && !pageMoved && postsView) { openThatPost(sel); return; }
  P.selected = sel; changeSection3D(); changeActiveButton(); initCategorieData();
  try { history.replaceState(null, '', '#' + P.section.def.id); } catch (e) {}
  countView('#' + P.section.def.id, tr(P.section.def.name).trim());
  const token = ++goToken;
  delayedCall(0.5, () => { if (token === goToken && P.data === d && d.posts[sel] === post) openThatPost(sel); });
}
strip.addEventListener('click', e => { const b = e.target.closest('[data-go]'); if (b) { e.preventDefault(); goToPost(b.dataset.go); } });
/* Ouverture d'une fiche : celle de la section, sauf pour un tag réglé « pleine page » (le cœur du studio) : la fiche 2D au premier plan */
/* Le studio : toutes les personnes s'ouvrent en fiche pleine page, comme Maya et Cyril ; les partenaires (logos) gardent l'ouverture en 3D */
const postOpenMode = (post, def = P.section && P.section.def) => (!def ? '' : post && def.open === 'focus3d' && ((def.tags || []).some(t => t.page && (post.tags || []).includes(t.id)) || !isLogo(post)) ? 'strip' : def.open);
const curOpenMode = () => postOpenMode(P.data && P.data.posts[P.selected]);
function openPost() {
  if (!postsView || !P.data.posts[P.selected]) return;
  const mode = curOpenMode();
  hoverCard(null); hoverBackCard(null);
  checkPostOpenAndClose();
  P.postOpen = true;
  if ((mode === 'strip' || mode === 'focus3d') && verticalFiche()) {   // téléphone : la fiche (projet, savoir-faire, personne) se lit de haut en bas
    postV.build(P.data.posts[P.selected], P.section.def.card);
    cats.classList.add('hidden');
    isClicking = false; canvas.classList.remove('dragging');
    closeTurn = true; focusPost(P.selected);
  } else if (mode === 'strip') {
    whiteboard.hidden = false;
    post2D.build(P.data.posts[P.selected], P.section.def.card);
    cats.classList.add('hidden');
    isClicking = false; canvas.classList.remove('dragging');
    closeTurn = true; focusPost(P.selected);
  } else { closeTurn = true; focusPost(P.selected); postsView.openPost3D(); }   // la carte vient vers la caméra
  setMenuPosition(); setPageMeta(P.data.posts[P.selected]);
}
function closePost() {
  if (!P.postOpen) return;
  P.postOpen = false;
  if (postV.open) { postV.close(); cats.classList.remove('hidden'); }
  else if (post2D.open) { post2D.close(); whiteboard.hidden = true; cats.classList.remove('hidden'); }
  else if (postsView) postsView.closePost3D();
  setMenuPosition(); setPageMeta(null);
}
function checkPostOpenAndClose() { if (P.postOpen) closePost(); }
function changeActivity() { setAnimationMode(!STYLE.animationMode); toggleActivityButton(); if (postsView) postsView.resetPostPosition(); closeTurn = true; }
/* Zoom : la carte du monde descend beaucoup plus près ; chaque changement de section revient au zoom de base */
let zoomBase = STYLE.cameraDistanceProportion;
const isMap = () => (((curSec() || {}).def || {}).layout === 'map');
const zoomMin = () => (isMap() ? 60 : STYLE.cameraZoomMin);
function zoomOut() { if (STYLE.cameraDistanceProportion < STYLE.cameraZoomMax) { STYLE.cameraDistanceProportion = Math.min(STYLE.cameraZoomMax, Math.trunc(STYLE.cameraDistanceProportion * 1.5)); zoomMoved(); } }
function zoomIn() { if (STYLE.cameraDistanceProportion > zoomMin()) { STYLE.cameraDistanceProportion = Math.trunc(STYLE.cameraDistanceProportion / 1.5); zoomMoved(); } }
function zoomMoved() { if (isMap() || gridView()) P.cameraY = camHeight(); onStageResize3D(); }
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
  if (e.target.closest && e.target.closest('input, textarea, select, [contenteditable]')) return;   // on écrit dans le formulaire : pas de raccourcis
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
  if (!inputEnabled || dragId !== null || (e.pointerType === 'mouse' && e.button !== 0) || (e.pointerType === 'touch' && touches.size > 0)) return;
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
  if (isClicking) { closeTurn = true; isClicking = false; if (gridView()) { P.degreeCamera = frontDeg(P.degreeCamera); P.cameraY = camHeight(); } }   // grille : on la retrouve de face en lâchant
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
let hoverQueued = false, hovered = null, mouseCard = null, backHovered = null;
function hoverBackCard(pv) { if (backHovered === pv) return; if (backHovered) backHovered.hoverBack(false); backHovered = pv; if (pv) pv.hoverBack(true); }
/* Quelle vignette montre son nom ? Une seule décision, pour que survol et vignette de face ne se contredisent jamais :
   la vignette survolée à la souris d'abord ; sinon, sur petit écran et dans le carrousel, celle que la caméra voit de face. */
const facingBand = () => phoneMode() && inputEnabled && postsView && ['carousel', 'spiral'].includes(postsView.def.layout);
function bandTarget() {
  if (P.postOpen || !postsView) return null;
  if (mouseCard && mouseCard.view === postsView) return mouseCard;
  if (!facingBand()) return null;
  postsView.checkPostSelected(); return postsView.postViews[P.selected] || null;
}
let bandTick = 0;
function phoneBand() { if (++bandTick % 6 === 0 && facingBand()) hoverCard(bandTarget()); }   // le carrousel tourne : la vignette de face change
function hoverCard(pv) { if (hovered === pv) return; if (hovered) hovered.hover(false); hovered = pv; if (pv) pv.hover(true); }
canvas.addEventListener('pointerleave', () => { mouseCard = null; hoverCard(bandTarget()); hoverBackCard(null); });
canvas.addEventListener('pointermove', e => {
  if (dragId !== null && e.pointerId === dragId && e.pointerType === 'mouse' && e.buttons === 0) { endDrag(e, true); return; }   // bouton déjà relâché
  if (dragId !== null && e.pointerId !== dragId) return;
  mouseX = e.clientX; mouseY = e.clientY;
  if (dragId === null && e.pointerType === 'mouse' && !hoverQueued) { hoverQueued = true; requestAnimationFrame(() => { hoverQueued = false; const h = pick(mouseX, mouseY); canvas.classList.toggle('hover', !!(h && h.post)); mouseCard = h && h.post && h.face === 'front' && !P.postOpen ? h.post : null; hoverCard(bandTarget()); hoverBackCard(h && h.post && h.face === 'back' && h.post.bhi && !P.postOpen ? h.post : null); if (h && h.netNode && !P.postOpen) showNetTip(h.netNode, mouseX, mouseY); else hideNetTip(); }); }
});
let lastWheel = 0;
/* Deux doigts : écarter zoome, pincer dézoome, par crans comme la molette ; le premier doigt cesse alors de faire tourner la scène */
const touches = new Map(); let pinch = null;
const pinchDist = () => { const [a, b] = [...touches.values()]; return Math.hypot(a.x - b.x, a.y - b.y); };
window.addEventListener('pointerdown', e => {   // le deuxième doigt peut tomber sur un bouton ou une étiquette : on le suit partout, dès que le premier est sur la scène
  if (e.pointerType !== 'touch' || !homeGone || post2D.open) return;
  if (!touches.size && e.target !== canvas) return;
  touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (touches.size === 2) { if (dragId !== null) endDrag({ pointerId: dragId }, true); pinch = { last: pinchDist() }; }
});
window.addEventListener('pointermove', e => {
  if (!touches.has(e.pointerId)) return;
  touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (!pinch || touches.size < 2 || !inputEnabled) return;
  const d = pinchDist(), r = d / pinch.last;
  if (r > 1.15) { zoomIn(); pinch.last = d; } else if (r < 1 / 1.15) { zoomOut(); pinch.last = d; }
});
const dropTouch = e => { touches.delete(e.pointerId); if (touches.size < 2) pinch = null; };
['pointerup', 'pointercancel'].forEach(t => window.addEventListener(t, dropTouch));
canvas.addEventListener('wheel', e => { e.preventDefault(); const now = performance.now(); if (!inputEnabled || now - lastWheel < 220 || !e.deltaY || now - enteredAt < 1400) return; /* la molette qui a fait entrer ne zoome pas */ lastWheel = now; e.deltaY < 0 ? zoomIn() : zoomOut(); }, { passive: false });
window.addEventListener('resize', () => {
  const ph0 = phoneCards(), before = started && postsView ? orbitE || orbitNow() : null;
  resizeViewport(); onStageResize3D(); setMenuPosition();
  reflow(before);
  if (phoneCards() !== ph0 && postsView) postsView.retexture();   // passage téléphone ↔ grand écran : texte redessiné
  sizeTicker(); hvSize();
  if (post2D.open) { fitPost2D(); clearTimeout(post2D.relayout); post2D.relayout = setTimeout(() => { if (post2D.open && post2D.post && JSON.stringify(textGeom('project')) !== post2D.geomKey) { post2D.build(post2D.post, P.section.def.card); setMenuPosition(); } }, 250); }   // rotation de l'écran : la fiche se recompose
});

/* Négatif / positif : clic sur le logo. Les cartes se redessinent sur place (photos pré-inversées, accent conservé). */
function toggleNeg() {
  if (CONTENT.settings.negativeToggle === false) return;
  negMode = !negMode;
  if (autoNeg()) arrivalNeg();   // met à jour sunNext : le choix vaut jusqu'au prochain lever ou coucher
  if (!PREVIEW) try { localStorage.setItem('hc-neg', (negMode ? '1' : '0') + (autoNeg() ? '@' + sunNext : '')); } catch (e) {}
  renderTexts();
  if (postsView) postsView.retexture();
}
/* Le disque du logo : quand la souris s'approche, un disque d'ombre glisse devant, du côté de la souris, et fait une éclipse.
   L'ombre est un trou dans le disque (masque) : on voit le vrai fond à travers, de jour comme de nuit. */
(() => {
  const el = document.getElementById('logo'); if (!el) return;
  let mx = 0, my = 0, ang = Math.atan2(0.38, -1), ta = ang, tm = 2.3, ca = ang, cm = 2.3;   // l'ombre : angle et distance au centre, en rayons ; au repos, hors du cercle
  const draw = () => {
    const R = el.offsetWidth / 2; if (!R) return;
    if (cm > 2.02) { el.style.webkitMaskImage = el.style.maskImage = ''; return; }
    const x = R + Math.cos(ca) * cm * R, y = R + Math.sin(ca) * cm * R;
    const k = Math.max(0, Math.min(1, 1 - cm / 0.28)), h = R - k * Math.max(2, R * 0.085);   // près du centre, l'ombre rétrécit un peu : il reste un anneau (noir le jour, jaune la nuit), l'éclipse totale
    el.style.webkitMaskImage = el.style.maskImage = `radial-gradient(circle ${R}px at ${x.toFixed(2)}px ${y.toFixed(2)}px, transparent ${(h - 0.6).toFixed(2)}px, #000 ${(h + 0.6).toFixed(2)}px)`;
  };
  const aim = m => { ca = ta = ang; cm = tm = m; draw(); };   // l'ombre suit la souris directement, sans inertie
  const track = () => {
    const r = el.getBoundingClientRect(), R = r.width / 2; if (!R) return;
    const dx = mx - (r.left + R), dy = my - (r.top + R), d = Math.hypot(dx, dy);
    if (d > 0.5) ang = Math.atan2(dy, dx);   // sur le disque, l'ombre suit la souris en ligne droite : elle passe par le centre sans sauter
    const u = d / R, t = Math.max(0, Math.min(1, (5.5 - u) / 4.5)), e = t * t * (3 - 2 * t);
    aim(u <= 1 ? 0.62 * u : 0.62 + 1.68 * (1 - e));   // la souris à 5 rayons : l'ombre arrive ; au bord du disque : un croissant ; au centre : l'ombre couvre tout le disque
  };
  let q = false;
  window.addEventListener('pointermove', e => { if (e.pointerType !== 'mouse' || !el.classList.contains('toggle')) return; mx = e.clientX; my = e.clientY; if (!q) { q = true; requestAnimationFrame(() => { q = false; track(); }); } }, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => aim(2.3));
  el.addEventListener('focus', () => { if (el.matches(':focus-visible')) { ang = Math.atan2(0.38, -1); aim(0.55); } });
  el.addEventListener('blur', () => aim(2.3));
})();
['logo'].forEach(id => {
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
    btn.innerHTML = '<i class="tri"></i><span>Showreel</span>';   // un carré et un triangle « lecture » ; au survol, le mot glisse dans le rectangle
    const box = document.createElement('div'); box.id = 'reel'; box.hidden = true; box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true'); box.setAttribute('aria-label', 'Showreel');
    box.innerHTML = '<div class="scrim"></div><div class="scr"><div class="bar"><b>Showreel</b><a class="ext" target="_blank" rel="noopener"></a><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button></div><div class="vid"></div></div>';
    document.body.append(btn, box);
    reel = { btn, box, scr: box.querySelector('.scr'), vid: box.querySelector('.vid'), snd: box.querySelector('.snd'), x: box.querySelector('.x'), ext: box.querySelector('.ext'), src: null, kind: '', player: null, muted: true, open: false, last: null };
    btn.addEventListener('click', () => showreelClick());
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
      f.src = k === 'youtube' ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=${id}&enablejsapi=1${origin}` : vimeoPlayer(id, 'autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0');
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
    Object.assign(c, { cell: Math.round(r(5, 16)), contrast: +r(0.6, 2).toFixed(1), size: Math.round(r(72, 100)), color: pick(HV_COLORS, [4, 2, 2, 1]), mode: Math.random() < 0.75 ? 'light' : 'dark', delay: Math.round(r(1, 8)) });
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
  if (window.ResizeObserver) new ResizeObserver(() => hvSize()).observe(cv);   // la barre de Safari se replie : la bande grandit, la grille suit
  hv = { cv, ctx: cv.getContext('2d'), off: document.createElement('canvas'), cell: +cfg.cell || 14, gamma: +cfg.contrast || 1, fill: (+cfg.size || 92) / 100, round: cfg.shape !== 'square',   // des ronds (ou des carrés, Réglages › Accueil)
    color: HV_COLORS.includes(cfg.color) ? cfg.color : 'white', mode: cfg.mode === 'dark' ? 'dark' : 'light', delay: Math.max(1, Math.min(HV_MAX_DELAY, +cfg.delay || 1)), sound: false, cam: null, video: null, pics: [], lo: 0, hi: 1,
    tainted: false, last: 0, t0: performance.now() - Math.random() * 60000, W: 0, H: 0, interval: 1000 / 30, floor: 0, cost: 0, slow: 0, fast: 0 };
  hv.octx = hv.off.getContext('2d', { willReadFrequently: true });
  hv.gl = hvGLInit(cv);   // les carrés dessinés par la carte graphique : un seul dessin, quel que soit leur nombre
  if (hv.gl) hv.interval = 1000 / 60;   // la carte graphique suit : 60 images/s
  hv.raw = document.createElement('canvas'); hv.rctx = hv.raw.getContext('2d', { willReadFrequently: true });   // l'image du moment ; « off » garde l'image lissée par le delay
  const src = (cfg.src || '').trim();
  if (src && /\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(src)) {
    const v = document.createElement('video');
    if (/^https?:/.test(src) && !src.startsWith(location.origin)) v.crossOrigin = 'anonymous';
    Object.assign(v, { muted: true, loop: true, playsInline: true, autoplay: true, preload: 'auto', src: url(src) }); v.setAttribute('playsinline', '');
    v.addEventListener('loadedmetadata', () => { if (isFinite(v.duration) && v.duration > 2) v.currentTime = Math.random() * (v.duration - 1); v.play().catch(() => {}); }, { once: true });   // jamais le même départ
    hv.video = v;
  } else {   // diaporama : les vignettes de dix projets différents, hébergées avec le site (une image d'un autre site ne se lit pas pixel par pixel), les mêmes que les cartes 3D
    const local = x => x && !/^(https?:|data:)/.test(x) && /\.(jpe?g|png|webp)$/i.test(x);
    const work = CONTENT.sections.find(x => x.visible && x.card === 'image' && !x.skills) || {};
    const posts = CONTENT.posts.filter(p => p.published !== false && local(p.thumb)), first = posts.filter(p => p.section === work.id);
    const mix = list => list.map(p => p.thumb).sort(() => Math.random() - 0.5);
    const pick = [...new Set([...mix(first), ...mix(posts)])].slice(0, 10);   // d'abord les réalisations
    hv.pics = pick.map(x => { const im = new Image(), t = thumbOf(x); im.decoding = 'async'; if (t !== x) im.onerror = () => { im.onerror = null; im.src = url(x); }; im.src = url(t); return im; });   // la grille de carrés n'a pas besoin de plus que la vignette
  }
  buildHomeDock(cfg.controls !== false);
  /* à l'arrivée sur l'accueil, le showreel part tout seul, son coupé (pas sur une adresse de fiche ou de section, ni si le visiteur réduit les animations) */
  /* il attend que la 3D ait fini de se charger : lancé en même temps, le lecteur faisait ramer l'accueil les premières secondes */
  if (reelPlayable() && isHomeHash() && !/[?&]p=/.test(location.search) && !HV_REDUCE.matches && !(PREVIEW && PREVIEW.start) && !document.getElementById('hc-intro')) {   // avec l'ouverture, c'est elle qui lance le showreel
    const t0 = performance.now(), go = () => { if (!homeGone && !hv.reelOn && !hv.cam && !hv.userReel && isHomeHash()) hvReelStart(true); };
    const wait = setInterval(() => { if (assetsLoaded || performance.now() - t0 > 6000) { clearInterval(wait); setTimeout(go, 500); } }, 150);
  }
  const langs = document.getElementById('home-langs'), ctl = document.getElementById('home-ctl');
  if (langs && ctl) ctl.insertBefore(langs, document.getElementById('home-about')); else if (langs) document.getElementById('home').appendChild(langs);   // la langue rejoint les carrés sous la signature
  hvSize();
}
/* ================================================================ À côté du clavier de la vidéo : vidéo ou caméra, la photo souvenir, et le « ? » de l'histoire du site */
const ICON = {
  about: '<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.3" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M10 8.8v5.2" stroke="currentColor" stroke-width="1.7"/><circle cx="10" cy="6.3" r="1.05" fill="currentColor"/></svg>',
  video: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5.5v9l7.5-4.5z" fill="currentColor"/></svg>',
  cam: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 6.5h3l1.4-2h4.2l1.4 2h3v9h-13z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="10" cy="11" r="2.7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
  shot: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M2.5 6.5h3.3l1.6-2.3h5.2l1.6 2.3h3.3v9.6h-15z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="10" cy="11.1" r="3.2" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',   // un appareil photo
  faders: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 3v14M10 3v14M15 3v14" stroke="currentColor" stroke-width="1.3" opacity=".55"/><rect x="2.5" y="10" width="5" height="3" rx=".5" fill="currentColor"/><rect x="7.5" y="5" width="5" height="3" rx=".5" fill="currentColor"/><rect x="12.5" y="12" width="5" height="3" rx=".5" fill="currentColor"/></svg>',
};
function buildHomeDock(withKeys) {
  const home = document.getElementById('home'); if (!home || document.getElementById('home-dock')) return;
  const camOK = !!(hv && navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  const src = camOK ? `<div id="hv-src" class="seg" role="group"><button type="button" data-src="video" aria-pressed="true"></button><button type="button" data-src="cam" aria-pressed="false"></button></div>` : '';
  const dock = document.createElement('div'); dock.id = 'home-dock';
  dock.innerHTML = `<span class="hv-note" role="status" hidden></span>
    ${withKeys ? '' : `<input type="text" id="hv-words" maxlength="80" autocomplete="off" enterkeyhint="done" hidden>
    <button type="button" id="hv-shot" hidden>${ICON.shot}<span></span></button>`}
    ${withKeys ? '' : src}
    <button type="button" id="story-btn" aria-expanded="false" hidden><span class="lbl"></span><b class="ic">?</b></button>`;
  home.appendChild(dock);
  /* sous la signature, en haut à gauche : le Showreel, et dessous les réglages des carrés (cachés pendant que le showreel joue) */
  const ctl = document.createElement('div'); ctl.id = 'home-ctl';
  ctl.innerHTML = `<button type="button" id="home-reel" aria-pressed="false" hidden><b class="ic"><i aria-hidden="true"></i></b><span>Showreel</span></button><button type="button" id="home-snd" aria-pressed="false" hidden><b class="ic"></b></button>` +
    (withKeys ? `<button type="button" id="hv-toggle" aria-expanded="false"><b class="ic">${ICON.faders}</b><span class="lbl"></span></button>` : '') +
    `<button type="button" id="home-about" aria-expanded="false" hidden><b class="ic">${ICON.about}</b></button><figure id="home-pitch" hidden><img alt="" decoding="async"><figcaption><p></p></figcaption></figure>`;   // des carrés : le mot glisse dedans au survol ; le dernier dit en une phrase ce que fait le studio
  const band = document.getElementById('home-band'), lg = band.querySelector('.lg'); if (lg) lg.after(ctl); else band.appendChild(ctl);
  if (withKeys) buildHvPanel(home, src, ctl);
  buildReelBar(home);
  ctl.querySelector('#home-reel').addEventListener('click', () => { if (hv.reelOn) hvReelStop(); else showreelClick(); });
  ctl.querySelector('#home-snd').addEventListener('click', () => hvSound(!hv.sound));   // le son du showreel, à côté de lecture / stop (plus de barre de temps)
  const ab = ctl.querySelector('#home-about'), pitch = ctl.querySelector('#home-pitch');
  /* une petite fiche : une photo de projet (une autre à chaque ouverture), le nom du studio, la phrase en grand */
  const showPitch = on => {
    if (on) {
      fillPitch(pitch);
      pitch.hidden = false; void pitch.offsetWidth;
      const ct = ctl.getBoundingClientRect().top, room = window.innerHeight - 20 - ct - pitch.offsetHeight;   // la fiche reste dans l'écran
      pitch.style.setProperty('--y', Math.max(-ct + 20, Math.min(ab.offsetTop, room)) + 'px');
    }
    pitch.classList.toggle('on', on); ab.classList.toggle('on', on); ab.setAttribute('aria-expanded', String(on));
  };
  ab.addEventListener('click', () => saySentence());   // le « i » rejoue la phrase de l'ouverture, au centre, par-dessus ce qui se passe
  home.addEventListener('pointerdown', e => { if (pitch.classList.contains('on') && !e.target.closest('#home-about')) showPitch(false); if (!e.target.closest('#home-langs')) { const hl = document.getElementById('home-langs'); if (hl) hl.classList.remove('open'); } });
  document.querySelectorAll('#hv-src button').forEach(b => b.addEventListener('click', () => { if (b.dataset.src === 'cam' && !hv.cam) hvCamOn(); else if (b.dataset.src === 'video' && hv.cam) hvCamOff(); }));
  document.getElementById('hv-shot').addEventListener('click', hvPhoto);
  document.getElementById('hv-words').addEventListener('keydown', e => { e.stopPropagation(); if (e.key === 'Enter') { e.preventDefault(); e.target.blur(); } });
  dock.querySelector('#story-btn').addEventListener('click', () => toggleStory());
  buildStory(); dockLabels();
}
function dockLabels() {
  const dock = document.getElementById('home-dock'); if (!dock) return;
  const cam = !!(hv && hv.cam);
  document.querySelectorAll('#hv-src button').forEach(b => { const on = (b.dataset.src === 'cam') === cam; b.setAttribute('aria-pressed', String(on)); b.classList.toggle('on', on); b.textContent = ui(b.dataset.src === 'cam' ? 'hv_cam' : hv && hv.video ? 'hv_video' : 'hv_slides'); });
  const src = document.getElementById('hv-src'); if (src) src.setAttribute('aria-label', ui('hv_src'));
  const inPanel = !!(hv && hv.panel);   // dans le panneau des paramètres : la photo marche aussi avec le diaporama
  const words = document.getElementById('hv-words'); words.hidden = !inPanel && !cam; words.placeholder = ui('hv_words'); words.setAttribute('aria-label', ui('hv_words'));
  const shot = document.getElementById('hv-shot'); shot.hidden = !inPanel && !cam; shot.setAttribute('aria-label', ui('hv_shot')); shot.querySelector('span').textContent = ui(inPanel ? 'hv_shot' : 'photo');
  const priv = document.querySelector('#hv-panel .priv'); if (priv) priv.textContent = ui('hv_private');
  const sb = dock.querySelector('#story-btn'); sb.setAttribute('aria-label', ui('story')); sb.querySelector('.lbl').textContent = ui('story');
  const ab = document.getElementById('home-about'), pitch = document.getElementById('home-pitch'), say = pitchText();
  if (ab) { ab.hidden = !say; fillPitch(pitch, false); ab.setAttribute('aria-label', say); }
  const tl = document.querySelector('#hv-toggle .lbl'); if (tl) tl.textContent = ui('params');
  const rb = document.getElementById('home-reel'); rb.hidden = !(CONTENT.settings.showreel || '').trim();
  const on = !!(hv && hv.reelOn); rb.setAttribute('aria-pressed', String(on)); rb.classList.toggle('on', on); rb.setAttribute('aria-label', on ? ui('stop') + ' : Showreel' : 'Showreel');
  rb.querySelector('span').textContent = on ? ui('stop') : 'Showreel';   // pendant la lecture : un carré « stop »
  const sb2 = document.getElementById('home-snd');
  if (sb2 && !rb._rwObs && window.ResizeObserver) { rb._rwObs = new ResizeObserver(() => { if (rb.offsetWidth) sb2.style.setProperty('--rw', rb.offsetWidth + 'px'); }); rb._rwObs.observe(rb); }   // le son suit le bouton quand il s'ouvre sur son nom
  if (sb2) { sb2.hidden = !on; if (on) requestAnimationFrame(() => sb2.style.setProperty('--rw', rb.offsetWidth + 'px')); const snd = !!(hv && hv.sound); sb2.querySelector('.ic').innerHTML = SPEAKER(snd); sb2.classList.toggle('on', snd); sb2.setAttribute('aria-pressed', String(snd)); sb2.setAttribute('aria-label', ui(snd ? 'soundOff' : 'soundOn')); sb2.title = ui(snd ? 'soundOff' : 'soundOn'); }
}
/* Sur iPhone, le « click » d'un doigt se dit souvent « mouse » : on regarde plutôt ce qui a appuyé (pointerdown). Clavier : pas d'appui, on bascule. */
function pressKind(el) {
  let k = '', at = 0;
  el.addEventListener('pointerdown', e => { k = e.pointerType; at = performance.now(); }, true);
  el.addEventListener('touchstart', () => { k = 'touch'; at = performance.now(); }, { capture: true, passive: true });
  return () => (performance.now() - at < 1500 ? k : '');
}
let noteTimer = 0;
/* La fiche « i » (accueil et 3D) : une photo de la sélection des réalisations, le nom du studio, la phrase du studio (Réglages › Accueil) */
const pitchText = () => tr((CONTENT.settings.home || {}).sub || {}).replace(/\s*\n\s*/g, ' ').trim();   // la phrase sur une ligne (ses retours à la ligne ne servent qu'à l'ouverture)
function pitchPhotos() {
  const work = CONTENT.sections.find(x => x.visible && x.card === 'image' && !x.skills) || {}, tag = work.defaultTag;
  const ok = p => p.published !== false && p.section === work.id && p.thumb && /\.(jpe?g|png|webp)$/i.test(p.thumb);
  const sel = CONTENT.posts.filter(p => ok(p) && (!tag || (p.tags || []).includes(tag)));
  return (sel.length ? sel : CONTENT.posts.filter(ok)).map(p => url(p.thumb));
}
function fillPitch(fig, photo = true) {
  fig.querySelector('p').textContent = pitchText();
  if (!photo) return;
  const list = pitchPhotos(), im = fig.querySelector('img');
  if (list.length) { let src = list[Math.floor(Math.random() * list.length)]; if (list.length > 1 && src === fig.dataset.last) src = list[(list.indexOf(src) + 1) % list.length]; fig.dataset.last = src; im.src = src; im.hidden = false; } else im.hidden = true;   // jamais deux fois la même de suite
}
/* Dans la 3D : le même carré « i » sous le Showreel, la même fiche au survol */
let aboutBtn = null, aboutCard = null;
function renderAbout() {
  if (!aboutBtn) {
    aboutBtn = document.createElement('button'); aboutBtn.type = 'button'; aboutBtn.id = 'about-btn'; aboutBtn.className = 'ui'; aboutBtn.setAttribute('aria-expanded', 'false');
    aboutBtn.innerHTML = `<b class="ic">${ICON.about}</b>`;
    aboutCard = document.createElement('figure'); aboutCard.id = 'about-card'; aboutCard.className = 'ui'; aboutCard.hidden = true;
    aboutCard.innerHTML = '<img alt="" decoding="async"><figcaption><p></p></figcaption>';
    document.body.append(aboutBtn, aboutCard);
    const show = on => {
      if (on) { fillPitch(aboutCard); aboutCard.hidden = false; placeAbout(); void aboutCard.offsetWidth; }
      aboutCard.classList.toggle('on', on); aboutBtn.classList.toggle('on', on); aboutBtn.setAttribute('aria-expanded', String(on));
    };
    aboutBtn.addEventListener('click', () => saySentence());   // dans la 3D aussi : la phrase, ligne par ligne, au centre
  }
  const say = pitchText(); aboutBtn.hidden = !say; aboutBtn.setAttribute('aria-label', say); fillPitch(aboutCard, false);
  placeAbout();
}
function placeAbout() {   // sous le Showreel ; la fiche à droite du carré (grand écran) ou dessous (téléphone)
  if (!aboutBtn) return;
  const rb = reel && reel.btn && !reel.btn.hidden ? reel.btn : null;
  const sq = document.getElementById('lang-sq'), langOn = sq && !sq.hidden;
  if (!wideScreen()) {   // téléphone, debout ou couché : les carrés en ligne sous la signature, comme sur l'accueil ; la langue en dernier, elle s'ouvre vers la droite
    const top = rb ? rb.offsetTop : Math.round(sloganEl.offsetTop + sloganEl.offsetHeight + 16);
    let left = rb ? rb.offsetLeft + rb.offsetWidth + 8 : sloganEl.offsetLeft + 2;
    aboutBtn.style.top = top + 'px'; aboutBtn.style.left = left + 'px'; if (!aboutBtn.hidden) left += aboutBtn.offsetWidth + 8;
    if (langOn) { sq.style.top = top + 'px'; sq.style.left = left + 'px'; }
    if (!aboutCard.hidden) { aboutCard.style.left = (sloganEl.offsetLeft + 2) + 'px'; aboutCard.style.top = (top + aboutBtn.offsetHeight + 8) + 'px'; }
    return;
  }
  let top = rb ? rb.offsetTop + rb.offsetHeight + 8 : Math.round(sloganEl.offsetTop + sloganEl.offsetHeight + (wideScreen() ? 26 : 16));
  if (langOn) { sq.style.top = top + 'px'; sq.style.left = (sloganEl.offsetLeft + 2) + 'px'; top += aboutBtn.offsetHeight + 8; }   // sous le Showreel : la langue, puis le « i » (le même ordre que l'accueil)
  aboutBtn.style.top = top + 'px'; aboutBtn.style.left = (sloganEl.offsetLeft + 2) + 'px';
  if (!aboutCard.hidden) {
    const wide = wideScreen(), l = sloganEl.offsetLeft + 2;
    if (wide) { const y = Math.max(16, Math.min(top, H - 20 - aboutCard.offsetHeight)); aboutCard.style.left = (l + aboutBtn.offsetWidth + 12) + 'px'; aboutCard.style.top = y + 'px'; }
    else { aboutCard.style.left = l + 'px'; aboutCard.style.top = (top + aboutBtn.offsetHeight + 8) + 'px'; }
  }
}
function hvNote(text, ms) {
  const n = document.querySelector('#home-dock .hv-note'); if (!n) return;
  clearTimeout(noteTimer); n.textContent = text || ''; n.hidden = !text;
  if (text && ms) noteTimer = setTimeout(() => { n.hidden = true; }, ms);
}
/* Photo souvenir : l'image de la caméra en carrés, le slogan tapé et la signature du studio. Elle reste sur l'appareil du visiteur. */
async function hvPhoto() {
  if (!hv || (hv.cam && hv.cam.video.readyState < 2)) return;   // caméra ou diaporama : l'image du moment
  const W = 1080, H = 1350, c = document.createElement('canvas'); c.width = W; c.height = H; const ctx = c.getContext('2d');
  ctx.fillStyle = '#0b0b0b'; ctx.fillRect(0, 0, W, H);
  const band = document.getElementById('home-band'); band.classList.remove('flash'); void band.offsetWidth; band.classList.add('flash');
  /* les carrés à la taille de la photo, avec autant de colonnes qu'à l'écran */
  const scr = Math.max(hv.cell, hv.floor), cell = Math.max(10, Math.min(36, Math.round(scr * W / Math.max(320, hv.W))));
  const cols = Math.ceil(W / cell), rows = Math.ceil(H / cell);
  const keep = { ctx: hv.ctx, W: hv.W, H: hv.H, ow: hv.off.width, oh: hv.off.height, lo: hv.lo, hi: hv.hi };
  try {
    hv.ctx = ctx; hv.W = W; hv.H = H;
    hv.off.width = hv.raw.width = cols; hv.off.height = hv.raw.height = rows;
    if (!hvSource(HV_REDUCE.matches ? 0 : (performance.now() - hv.t0) / 1000)) return; hv.octx.globalAlpha = 1; hv.octx.drawImage(hv.raw, 0, 0);
    let d = null; try { d = hv.octx.getImageData(0, 0, cols, rows).data; } catch (e) {}
    if (d) hvSquares(d, cols, rows, cell); else hvComposite(cols, rows, cell);   // même contraste qu'à l'écran
  } finally {
    hv.ctx = keep.ctx; hv.W = keep.W; hv.H = keep.H; hv.off.width = hv.raw.width = keep.ow; hv.off.height = hv.raw.height = keep.oh; hv.lo = keep.lo; hv.hi = keep.hi; hv.fresh = true;
  }
  /* en haut : le logo et « Hand Coded. » dans la police de la signature du site ; en bas : la signature */
  const gTop = ctx.createLinearGradient(0, 0, 0, 230); gTop.addColorStop(0, 'rgba(11,11,11,.9)'); gTop.addColorStop(1, 'rgba(11,11,11,0)');
  ctx.fillStyle = gTop; ctx.fillRect(0, 0, W, 230);
  const gBot = ctx.createLinearGradient(0, H * 0.5, 0, H); gBot.addColorStop(0, 'rgba(11,11,11,0)'); gBot.addColorStop(0.5, 'rgba(11,11,11,.8)'); gBot.addColorStop(1, 'rgba(11,11,11,.95)');
  ctx.fillStyle = gBot; ctx.fillRect(0, H * 0.5, W, H * 0.5);
  const wordsEl = document.getElementById('hv-words'), slogan = (wordsEl ? wordsEl.value : '').replace(/\s+/g, ' ').trim().toUpperCase();   // le texte tapé par le visiteur ; sans texte, la photo n'a que la signature
  /* maj-158 : la mise en page reprend l'en-tête du site. En haut, « Hand Coded. » et ses trois mots, le rond jaune à droite ;
     en bas, le trait jaune, le texte tapé dans la police des titres, et l'adresse du site en blanc. Les polices sont celles de Réglages › Typographie. */
  const ST = CONTENT.settings, fT = typoOf(ST, 'title'), f2 = typoOf(ST, 'sig2');
  const wmEl = document.querySelector('#slogan .wm') || document.querySelector('#home-band .sl .wm') || document.getElementById('slogan');
  const wcs = getComputedStyle(wmEl), wmFont = size => `${wcs.fontStyle === 'italic' ? 'italic ' : ''}${wcs.fontWeight} ${size}px ${wcs.fontFamily}`;
  const ttlFont = size => `${fT.italic ? 'italic ' : ''}${fT.weight || 600} ${size}px ${fT.css}`, smlFont = size => `${f2.italic ? 'italic ' : ''}${f2.weight || 500} ${size}px ${f2.css}`;
  try { await Promise.all([document.fonts.load(ttlFont(80)), document.fonts.load(smlFont(30)), document.fonts.load(wmFont(96))]); } catch (e) {}
  const mx = 72, top = 70, R = 34, tl = (ST.taglines && (ST.taglines[LANG] || ST.taglines.en)) || [];
  const studio = tl[0] || ((ST.name || 'Hand Coded') + '.'), words = tl.slice(1);
  let ws = 96, ss = Math.round(ws * 0.31);
  const fitHead = () => { ss = Math.round(ws * 0.31); ctx.font = smlFont(ss); const sw = words.length ? Math.max(...words.map(w => ctx.measureText(w).width)) + ws * 0.24 : 0; ctx.font = wmFont(ws); return ctx.measureText(studio).width + sw; };
  while (fitHead() > W - 2 * mx - 2 * R - 40 && ws > 48) ws -= 4;
  ctx.font = wmFont(ws); const nameW = ctx.measureText(studio).width, base = top + ws * 0.78;
  ctx.fillStyle = '#fff'; ctx.textBaseline = 'alphabetic'; ctx.fillText(studio, mx, base);
  ctx.font = smlFont(ss); ctx.textBaseline = 'top'; const slh = Math.round(ss * 1.18);
  words.forEach((w, i) => ctx.fillText(w, mx + nameW + ws * 0.24, top + ws * 0.1 + i * slh));
  ctx.fillStyle = accent(); ctx.beginPath(); ctx.arc(W - mx - R, top + ws * 0.42, R, 0, Math.PI * 2); ctx.fill();   // le rond du logo, en haut à droite comme sur le site
  /* en bas : le texte tapé, jusqu'à quatre lignes, aussi grand que possible */
  const tw = W - 2 * mx; let size = 84, lines = [];
  const track = sz => { if ('letterSpacing' in ctx) ctx.letterSpacing = Math.round((+fT.ls || -0.02) * sz) + 'px'; };
  for (; size >= 36; size -= 4) { ctx.font = ttlFont(size); track(size); lines = wrapLines(ctx, slogan, tw); if (lines.length <= 4) break; }
  lines = slogan ? lines.slice(0, 4) : [];
  const urlSize = 30, urlY = H - 64 - urlSize, lh = Math.round(size * 1.02), y0 = urlY - 64 - lines.length * lh;
  ctx.textBaseline = 'top';
  if (lines.length) { ctx.fillStyle = accent(); ctx.fillRect(mx, y0 - 34, 46, 6); }
  ctx.fillStyle = '#fff'; ctx.font = ttlFont(size); track(size);
  lines.forEach((l, i) => ctx.fillText(l, mx - size * 0.03, y0 + i * lh));
  if ('letterSpacing' in ctx) ctx.letterSpacing = '0px';
  ctx.font = smlFont(urlSize); ctx.fillStyle = '#fff'; ctx.fillText('hand-coded.net', mx, urlY);
  const blob = await new Promise(r => c.toBlob(r, 'image/jpeg', 0.92)); if (!blob) return;
  countView('photo-souvenir', 'Photo souvenir', true);
  const name = 'hand-coded-' + new Date().toISOString().slice(0, 19).replace(/[-:T]/g, '') + '.jpg';
  const file = typeof File === 'function' ? new File([blob], name, { type: 'image/jpeg' }) : null;
  if (file && navigator.canShare && matchMedia('(pointer: coarse)').matches && navigator.canShare({ files: [file] })) {   // téléphone : la feuille de partage propose « Enregistrer l'image »
    try { await navigator.share({ files: [file], title: CONTENT.settings.name || 'Hand Coded' }); hvNote(ui('hv_shotDone'), 2500); return; } catch (e) { if (e && e.name === 'AbortError') return; }
  }
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 2000);
  hvNote(ui('hv_shotDone'), 2500);
}
/* L'histoire du site : un panneau qui monte par-dessus la vidéo (Réglages › Accueil › Histoire du site) */
function buildStory() {
  const btn = document.getElementById('story-btn'), band = document.getElementById('home-band'); if (!btn || !band) return;
  const st = (CONTENT.settings.home || {}).story || {};
  const title = tr(st.title || {}).trim(), body = sanitizeHTML(tr(st.body || {})), has = !!(title || htmlToText(body).join('').trim());
  btn.hidden = !has; let box = document.getElementById('hc-story');
  if (!has) { if (box) box.remove(); return; }
  if (!box) { box = document.createElement('section'); box.id = 'hc-story'; box.hidden = true; band.appendChild(box); }
  box.setAttribute('aria-label', title || ui('story'));
  const imgs = (st.images || []).filter(Boolean);
  box.innerHTML = `<div class="in"><button type="button" class="x" aria-label="${escapeHTML(ui('close'))}">×</button>` +
    `<h2>${escapeHTML(title || ui('story'))}</h2><div class="cols"><div class="txt">${body}` +
    (st.link ? `<a class="go" href="${escapeHTML(st.link)}" target="_blank" rel="noopener">${escapeHTML(tr(st.linkLabel || {}).trim() || st.link.replace(/^https?:\/\//, ''))} <span aria-hidden="true">↗</span></a>` : '') + '</div>' +
    (imgs.length ? `<div class="shots scroll-x">${imgs.map(src => `<a href="${escapeHTML(url(src))}" target="_blank" rel="noopener"><img src="${escapeHTML(url(src))}" alt="" loading="lazy" draggable="false" onerror="this.parentNode.remove()"></a>`).join('')}</div>` : '') + '</div></div>';   // une image absente du dépôt : pas de cadre vide
  box.querySelector('.x').addEventListener('click', () => toggleStory(false));
  if (!buildStory.out) {   // un panneau, plus une page : on le ferme en touchant ailleurs
    buildStory.out = true;
    document.addEventListener('pointerdown', e => { const b = document.getElementById('hc-story'); if (b && b.classList.contains('on') && !e.target.closest('#hc-story, #story-btn')) toggleStory(false); });
  }
}
let storyT = 0;
function toggleStory(open) {
  const box = document.getElementById('hc-story'), btn = document.getElementById('story-btn'); if (!box) return;
  if (open === undefined) open = !box.classList.contains('on');
  clearTimeout(storyT); btn.setAttribute('aria-expanded', String(open)); btn.classList.toggle('on', open);
  if (open) { box.hidden = false; void box.offsetWidth; box.classList.add('on'); box.scrollTop = 0; setTimeout(() => { if (box.classList.contains('on')) box.querySelector('.x').focus({ preventScroll: true }); }, 60); }
  else { box.classList.remove('on'); storyT = setTimeout(() => { if (!box.classList.contains('on')) box.hidden = true; }, 700); }
}
window.addEventListener('keydown', e => { if (e.code === 'Escape' && document.getElementById('hc-story') && document.getElementById('hc-story').classList.contains('on')) { e.stopPropagation(); toggleStory(false); } }, true);
function hvSize() { if (!hv) return; const r = hv.cv.getBoundingClientRect(), d = Math.min(2, devicePixelRatio || 1), w = Math.max(1, Math.round(r.width)), h = Math.max(1, Math.round(r.height));
  if (r.width < 2 || r.height < 2 || (w === hv.W && h === hv.H && d === hv.dpr)) return;   // accueil caché ou même taille : on ne réalloue pas les deux canvas (très coûteux)
  hv.W = w; hv.H = h; hv.dpr = d; hv.cv.width = hv.W * d; hv.cv.height = hv.H * d; hv.ctx.setTransform(d, 0, 0, d, 0, 0); if (hv.gl) { hv.gl.c.width = hv.W * d; hv.gl.c.height = hv.H * d; hv.gl.dpr = d; } if (hv.reelOn) { const hr = homeReel(); if (hv.rp && hv.rp.key !== hr.kind + '|' + hr.src) { const auto = !hv.userReel; hvReelStop(); hvReelStart(auto); } else hvReelFit(); } }   // téléphone tourné : l'autre version du showreel
/* Le panneau de réglages de la vidéo, comme une console de lumière : des faders, des boutons à témoin, la grille et la cadence en direct.
   Raccourcis : K ouvre ou ferme, C couleur, I inverser, V caméra. */
const HV_FADERS = [
  { p: 'cell', min: 3, max: 40, step: 1, get: () => hv.cell, set: v => { hv.cell = v; }, show: () => Math.max(hv.cell, hv.floor) + 'px' + (hv.floor > hv.cell ? '*' : '') },
  { p: 'size', min: 40, max: 100, step: 2, get: () => Math.round(hv.fill * 100), set: v => { hv.fill = v / 100; }, show: () => Math.round(hv.fill * 100) + '%' },
  { p: 'contrast', min: 0.4, max: 3, step: 0.1, get: () => hv.gamma, set: v => { hv.gamma = v; }, show: () => '×' + hv.gamma.toFixed(1) },
  { p: 'delay', min: 1, max: HV_MAX_DELAY, step: 1, get: () => hv.delay, set: v => { hv.delay = v; }, show: () => hvDelay() + (hvDelay() < hv.delay ? '*' : '') },
];
const paintFader = i => i.style.setProperty('--p', ((i.value - i.min) / (i.max - i.min) * 100).toFixed(1) + '%');
function buildHvPanel(home, src, host = home) {
  const panel = document.createElement('div'); panel.id = 'hv-panel'; panel.setAttribute('role', 'group'); panel.hidden = true;
  panel.innerHTML = `<div class="hd"><i class="led" aria-hidden="true"></i><b data-k="panel"></b><span class="stat" aria-hidden="true"></span><button type="button" class="more" aria-expanded="false">+</button></div>` +
    (src ? `<div class="rw"><span class="lb" data-k="source"></span>${src}</div><p class="priv"></p>` : '') +
    HV_FADERS.map(f => `<label class="rw"><span class="lb" data-k="${f.p}"></span><input type="range" data-p="${f.p}" min="${f.min}" max="${f.max}" step="${f.step}"><output></output></label>`).join('') +
    `<div class="rw"><span class="lb" data-k="color"></span><div class="seg sw" role="group">${HV_COLORS.map(c => `<button type="button" data-c="${c}"><i class="c-${c}"></i></button>`).join('')}</div></div>` +
    `<div class="rw tg"><button type="button" class="tgl" data-a="invert"><i aria-hidden="true"></i><span data-k="invert"></span></button></div>` +
    `<div class="pic"><input type="text" id="hv-words" maxlength="80" autocomplete="off" enterkeyhint="done"><button type="button" id="hv-shot">${ICON.shot}<span></span></button></div>`;   // tout en bas : le titre de la photo, puis le bouton
  host.appendChild(panel);
  const toggle = document.getElementById('hv-toggle');
  hv.panel = panel; hv.toggle = toggle;
  let hideT = 0;
  const setOpen = open => {
    clearTimeout(hideT);
    if (open) { panel.hidden = false; void panel.offsetWidth; panel.classList.add('open'); }
    else { panel.classList.remove('open'); hideT = setTimeout(() => { if (!panel.classList.contains('open')) panel.hidden = true; }, 320); }
    toggle.setAttribute('aria-expanded', String(open)); toggle.classList.toggle('on', open); home.classList.toggle('hv-open', open);
    if (open) hvLabels();
  };
  hv.setOpen = setOpen;
  toggle.addEventListener('click', () => { if (hv.reelOn) { hvReelStop(); setOpen(true); return; } setOpen(!panel.classList.contains('open')); });   // pendant le showreel aussi : un clic l'arrête et ouvre les réglages (caméra, photo)
  /* téléphone + caméra : le panneau se réduit à une barre en bas (source, titre, photo) pour qu'on se voie ; « + » rouvre les curseurs */
  const more = panel.querySelector('.more');
  more.addEventListener('click', () => { const on = !panel.classList.contains('more-on'); panel.classList.toggle('more-on', on); more.setAttribute('aria-expanded', String(on)); more.textContent = on ? '−' : '+'; });
  home.addEventListener('pointerdown', e => { if (panel.classList.contains('open') && !e.target.closest('#hv-panel, #hv-toggle, #hv-src, #hv-consent')) setOpen(false); });
  panel.querySelectorAll('input[data-p]').forEach(i => {
    const f = HV_FADERS.find(x => x.p === i.dataset.p);
    i.addEventListener('input', () => { f.set(+i.value); hvLabels(); });
  });
  const act = a => {
    if (a === 'color') hv.color = HV_COLORS[(HV_COLORS.indexOf(hv.color) + 1) % HV_COLORS.length];
    else if (a === 'invert') hv.mode = hv.mode === 'light' ? 'dark' : 'light';
    else if (a === 'sound') { hvSound(!hv.sound); return; }
    else if (a === 'cam') { if (!document.getElementById('hv-src')) return; if (hv.cam) hvCamOff(); else hvCamOn(); }
    hvLabels();
  };
  panel.querySelectorAll('[data-c]').forEach(b => b.addEventListener('click', () => { hv.color = b.dataset.c; hvLabels(); }));
  panel.querySelectorAll('.tgl').forEach(b => b.addEventListener('click', () => act(b.dataset.a)));
  window.addEventListener('keydown', e => {
    if (homeGone || e.ctrlKey || e.metaKey || e.altKey || (reel && reel.open)) return;
    if (e.target && e.target.id === 'hv-words') return;   // on tape le texte de la photo
    if (e.code === 'Escape' && panel.classList.contains('open')) { setOpen(false); toggle.focus({ preventScroll: true }); return; }
    if (e.code === 'Escape' && hv.reelOn) { hvReelStop(); return; }
    const k = { KeyK: 'panel', KeyC: 'color', KeyI: 'invert', KeyV: 'cam' }[e.code]; if (!k) return;
    e.preventDefault();
    if (k === 'panel') { setOpen(!panel.classList.contains('open')); return; }
    if (!hv.touched) { hv.touched = true; setOpen(true); }
    act(k);
  });
  hvLabels();
}
function hvLabels() {
  dockLabels();
  if (!hv || !hv.panel) return;
  const P = hv.panel;
  P.querySelectorAll('[data-k]').forEach(el => { el.textContent = ui('hv_' + el.dataset.k); });
  hv.toggle.setAttribute('aria-label', ui('hv_panel')); hv.toggle.title = ui('hv_panel') + ' (K)';
  HV_FADERS.forEach(f => {
    const i = P.querySelector(`input[data-p="${f.p}"]`); if (!i) return;
    if (document.activeElement !== i) i.value = f.get();
    paintFader(i); i.setAttribute('aria-label', ui('hv_' + f.p));
    i.nextElementSibling.textContent = f.show();
  });
  P.querySelectorAll('[data-c]').forEach(b => { const on = b.dataset.c === hv.color; b.setAttribute('aria-pressed', String(on)); b.classList.toggle('on', on); b.setAttribute('aria-label', ui('hv_color') + ' ' + ui('hv_c_' + b.dataset.c)); });
  const tg = (a, on) => { const b = P.querySelector(`.tgl[data-a="${a}"]`); b.setAttribute('aria-pressed', String(on)); b.classList.toggle('on', on); };
  tg('invert', hv.mode === 'dark');
  P.classList.toggle('cam', !!hv.cam);
  if (!hv.cam && P.classList.contains('more-on')) P.querySelector('.more').click();
  P.querySelector('.more').setAttribute('aria-label', ui('params'));
  hvStat();
}
function hvStat() {
  const st = hv && hv.panel && hv.panel.querySelector('.stat'); if (!st) return;
  const cell = Math.max(hv.cell, hv.floor);
  st.textContent = `${Math.ceil(hv.W / cell)}×${Math.ceil(hv.H / cell)} · ${Math.round(1000 / hv.interval)} FPS`;
}
/* ================================================================ Showreel dans le fond de l'accueil
   Le bouton Showreel joue la vraie vidéo sur tout le fond de l'accueil, sous une grille fine (comme un écran LED), avec une barre de lecture.
   Fichier MP4 du site, YouTube ou Vimeo : la vidéo n'est jamais lue pixel par pixel, il n'y a presque rien à calculer.
   Pendant ce temps, les carrés s'arrêtent. Depuis la 3D, le bouton Showreel ramène à l'accueil et lance la lecture. */
const hvPlayer = () => (hv && !hv.reelOn ? hv.video : null);
function hvSound(on) {
  hv.sound = on;
  if (hv.reelOn && hv.rp) hv.rp.mute(!on);
  else if (hv.video) { hv.video.muted = !on; if (on) hv.video.volume = 1; if (hv.video.paused && !hv.frozen) hv.video.play().catch(() => {}); }
  hvLabels(); hvReelBar();
}
const reelPlayable = () => !!(reel && reel.src && /^(video|youtube|vimeo)$/.test(reel.kind));
function showreelClick() {
  if (hv && reelPlayable()) { if (homeGone) backToHome(); hvReelStart(); }
  else openReel();
}
function makeReelPlayer(kind, src) {
  const box = document.createElement('div'); box.id = 'hv-rv'; box.setAttribute('aria-hidden', 'true');
  const rp = { kind, box, t: 0, d: 0, paused: false, ratio: 16 / 9 };
  if (kind === 'video') {
    const v = document.createElement('video'); Object.assign(v, { muted: true, playsInline: true, preload: 'auto', src: url(src) }); v.setAttribute('playsinline', '');
    const sync = () => { rp.t = v.currentTime; rp.d = isFinite(v.duration) ? v.duration : 0; rp.paused = v.paused; hvReelBar(); };
    ['timeupdate', 'durationchange', 'play', 'pause'].forEach(ev => v.addEventListener(ev, sync));
    v.addEventListener('loadedmetadata', () => { if (v.videoWidth) rp.ratio = v.videoWidth / v.videoHeight; hvReelFit(); sync(); });
    v.addEventListener('ended', () => hvReelStop());
    Object.assign(rp, { el: v, play: () => v.play().catch(() => {}), pause: () => v.pause(), mute: m => { v.muted = m; if (!m) v.volume = 1; }, seek: x => { v.currentTime = x; } });
  } else {
    const f = document.createElement('iframe'), yt = kind === 'youtube', id = yt ? ytId(src) : vimeoId(src);
    const origin = /^https?:/.test(location.protocol) ? '&origin=' + encodeURIComponent(location.origin) : '';
    f.src = yt ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&enablejsapi=1${origin}`
      : vimeoPlayer(id, 'autoplay=1&muted=1&controls=0&title=0&byline=0&portrait=0&dnt=1&autopause=0');
    f.allow = 'autoplay; encrypted-media'; f.tabIndex = -1; f.title = 'Showreel'; f.referrerPolicy = 'strict-origin-when-cross-origin';
    const post = m => { try { f.contentWindow.postMessage(JSON.stringify(m), '*'); } catch (e) {} };
    const cmd = yt ? (func, args = []) => post({ event: 'command', func, args }) : (method, value) => post(value === undefined ? { method } : { method, value });
    /* YouTube ne répond qu'une fois son lecteur prêt : on se présente toutes les 250 ms jusqu'à sa première réponse (un seul message pouvait se perdre, et l'accueil restait noir) */
    f.addEventListener('load', () => { if (!yt) return; let n = 0; clearInterval(rp.hello); post({ event: 'listening', id: 'hvreel', channel: 'widget' }); rp.hello = setInterval(() => { if (rp.heard || ++n > 60) { clearInterval(rp.hello); return; } post({ event: 'listening', id: 'hvreel', channel: 'widget' }); }, 250); });
    /* YouTube pose son titre et la photo de la chaîne sur les premières secondes, et à chaque pause :
       le lecteur reste caché (les carrés continuent dessous) jusqu'à ce que cet habillage soit parti */
    rp.showAt = yt ? 3.2 : 0.4; box.classList.add('wait');
    Object.assign(rp, { el: f, post,
      play: () => { rp.paused = false; rp.playAt = performance.now(); rp.showAt = rp.t + (yt ? 2.6 : 0.3); cmd(yt ? 'playVideo' : 'play'); hvReelVeil(); hvReelBar(); },
      pause: () => { rp.paused = true; cmd(yt ? 'pauseVideo' : 'pause'); hvReelVeil(); hvReelBar(); },
      mute: m => { if (yt) { cmd(m ? 'mute' : 'unMute'); if (!m) cmd('setVolume', [100]); } else { cmd('setMuted', m); if (!m) cmd('setVolume', 1); } },
      seek: x => { if (yt) cmd('seekTo', [x, true]); else cmd('setCurrentTime', x); rp.t = x; hvReelBar(); } });
  }
  return finishReel(rp, box);
}
function hvReelVeil() {   // le lecteur YouTube / Vimeo apparaît quand son habillage a disparu ; d'ici là, les carrés de l'accueil restent visibles
  const rp = hv && hv.rp; if (!rp || rp.kind === 'video') return;
  const show = hv.reelOn && !rp.paused && (rp.forced || rp.t >= (rp.showAt || 0));
  if (show === !!rp.shown) return; rp.shown = show;
  rp.box.classList.toggle('wait', !show);
  if (hv.video && !homeGone && !hv.frozen) { if (show) hv.video.pause(); else if (hv.reelOn) hv.video.play().catch(() => {}); }
}
function finishReel(rp, box) {
  const grid = document.createElement('div'); grid.className = 'grid';
  box.append(rp.el, grid);
  return rp;
}
/* messages de YouTube et Vimeo : position, durée, lecture, fin */
window.addEventListener('message', e => {
  const rp = hv && hv.rp; if (!rp || rp.kind === 'video' || !rp.el.contentWindow || e.source !== rp.el.contentWindow) return;
  let d = e.data; try { if (typeof d === 'string') d = JSON.parse(d); } catch (err) { return; } if (!d) return;
  if (!rp.heard) { rp.heard = true; clearInterval(rp.hello); if (rp.kind === 'youtube') rp.mute(!hv.sound); }   // le lecteur répond : le son choisi avant qu'il soit prêt s'applique maintenant
  if (rp.kind === 'youtube') {
    const i = d.event === 'infoDelivery' && d.info; if (!i) return;
    if (typeof i.currentTime === 'number') rp.t = i.currentTime;
    if (typeof i.duration === 'number' && i.duration) rp.d = i.duration;
    if (typeof i.playerState === 'number') { if (i.playerState === 0 && hv.reelOn) { hvReelStop(); return; } if (i.playerState === 1) rp.paused = false; else if (i.playerState === 2) rp.paused = true; }
  } else {
    if (d.event === 'ready') { ['timeupdate', 'play', 'pause', 'ended'].forEach(ev => rp.post({ method: 'addEventListener', value: ev })); if (hv.sound) rp.mute(false); return; }
    if (d.event === 'timeupdate' && d.data) { rp.t = d.data.seconds || 0; rp.d = d.data.duration || rp.d; }
    else if (d.event === 'play') rp.paused = false;
    else if (d.event === 'pause') rp.paused = true;
    else if (d.event === 'ended' && hv.reelOn) { hvReelStop(); return; }
  }
  hvReelBar(); hvReelVeil();
});
/* maj-151 : téléphone debout, la version verticale du showreel si elle existe (Réglages › Showreel), sinon la vidéo en plein écran, recadrée */
const portraitScreen = () => window.innerHeight > window.innerWidth * 1.1;
function homeReel() {
  const m = ((CONTENT && CONTENT.settings.showreelMobile) || '').trim(), k = m ? mediaKind(m) : '';
  if (m && /^(video|youtube|vimeo)$/.test(k) && portraitScreen()) return { kind: k, src: m, vertical: true };
  return { kind: reel.kind, src: reel.src, vertical: false };
}
function hvReelFit() {   // la vidéo couvre tout l'écran, même en hauteur ; trop recadrée, on propose de tourner le téléphone
  const rp = hv && hv.rp; if (!rp) return;
  const W = rp.box.clientWidth, H = rp.box.clientHeight; if (!W || !H) return;
  const r = rp.ratio;
  let w = W, h = W / r; if (h < H) { h = H; w = H * r; }
  Object.assign(rp.el.style, { width: Math.ceil(w) + 'px', height: Math.ceil(h) + 'px', left: Math.round((W - w) / 2) + 'px', top: Math.round((H - h) / 2) + 'px' });
  let t = document.getElementById('hv-turn');
  if (!t) { t = document.createElement('p'); t.id = 'hv-turn'; t.className = 'ui'; t.setAttribute('aria-hidden', 'true'); document.getElementById('home-band').appendChild(t); }
  t.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 13.5a8.5 8.5 0 0 0 6 6.6M2.2 16.6l1.3-3.2 3 1.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg><span>' + escapeHTML(ui('hv_turn')) + '</span>';
  home.classList.toggle('reel-crop', r / (W / H) > 1.6);   // on ne voit plus qu'une petite partie de l'image
}
function hvReelStart(auto = false) {
  if (!hv || !reelPlayable()) return false;
  if (!auto) hv.userReel = true;
  if (hv.reelOn) return true;
  if (hv.setOpen) hv.setOpen(false);
  if (hv.cam) hvCamOff();
  const hr = homeReel(), key = hr.kind + '|' + hr.src;
  if (!hv.rp || hv.rp.key !== key) {
    if (hv.rp) { hv.rp.pause(); hv.rp.box.remove(); }
    hv.rp = makeReelPlayer(hr.kind, hr.src); hv.rp.key = key; if (hr.vertical) hv.rp.ratio = 9 / 16;
    const band = document.getElementById('home-band'); band.insertBefore(hv.rp.box, band.querySelector('.hv-shade'));
    if (hv.sound && hr.kind === 'video') hv.rp.mute(false);
    if (hr.kind === 'video') hv.rp.play();
  } else { hv.rp.seek(0); hv.rp.play(); hv.rp.mute(!hv.sound); }
  hv.reelOn = true; hv.rp.box.hidden = false; hv.rp.playAt = performance.now(); reelWatch();
  if (hv.rp.kind === 'video') { if (hv.video) hv.video.pause(); } else { hv.rp.shown = true; hvReelVeil(); }   // YouTube / Vimeo : les carrés jouent jusqu'à ce que le lecteur soit propre
  home.classList.add('reel-on'); hvReelFit(); hvReelBar(); hvLabels();
  if (!auto) countView('showreel', 'Showreel', true);
  return true;
}
/* Un lecteur YouTube / Vimeo qui ne se montre pas (bloqué par une extension, réseau lent, vidéo refusée) : au bout de 8 s,
   le showreel lancé tout seul s'arrête et les carrés reprennent ; lancé par le visiteur, on montre ce que le lecteur affiche */
let reelWatchT = 0;
function reelWatch() {
  clearInterval(reelWatchT);
  reelWatchT = setInterval(() => {
    const rp = hv && hv.rp;
    if (!rp || !hv.reelOn || rp.kind === 'video' || rp.shown) { clearInterval(reelWatchT); return; }
    if (rp.paused || homeGone || performance.now() - (rp.playAt || 0) < 8000) return;   // en pause (l'ouverture le garde sur sa première image) : on attend
    clearInterval(reelWatchT);
    if (!rp.heard || !hv.userReel) { hvReelStop(); return; }
    rp.showAt = 0; rp.forced = true; rp.shown = true; rp.box.classList.remove('wait');
    if (hv.video && !hv.frozen) hv.video.pause();
  }, 500);
}
function hvReelStop() {
  if (!hv || !hv.reelOn) return;
  hv.reelOn = false; hv.rp.pause(); hv.rp.box.hidden = true; hv.fresh = true; hv.rp.shown = false; if (hv.rp.kind !== 'video') hv.rp.box.classList.add('wait');
  if (hv.video && !homeGone && !hv.frozen) { hv.video.muted = !hv.sound; hv.video.play().catch(() => {}); }
  home.classList.remove('reel-on'); hvReelBar(); hvLabels();
}
const PLAY_ICON = p => p ? '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9-5.5z" fill="currentColor"/></svg>' : '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5h3v11H3zM8 1.5h3v11H8z" fill="currentColor"/></svg>';
const mmss = x => { x = Math.max(0, Math.floor(x || 0)); return Math.floor(x / 60) + ':' + String(x % 60).padStart(2, '0'); };
const reelToggle = () => { const rp = hv && hv.rp; if (!rp || !hv.reelOn) return; if (rp.paused) rp.play(); else rp.pause(); };
function buildReelBar(home) {
  const bar = document.createElement('div'); bar.id = 'hv-reel'; bar.hidden = true; bar.setAttribute('role', 'group'); bar.setAttribute('aria-label', 'Showreel');
  bar.innerHTML = `<button type="button" class="pp"></button><div class="tl" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><i></i></div><span class="tm"></span><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button>`;
  home.appendChild(bar); hv.reelBar = bar;
  bar.querySelector('.pp').addEventListener('click', reelToggle);
  bar.querySelector('.snd').addEventListener('click', () => hvSound(!hv.sound));
  bar.querySelector('.x').addEventListener('click', hvReelStop);
  const tl = bar.querySelector('.tl');
  tl.addEventListener('pointerdown', e => { const rp = hv.rp, r = tl.getBoundingClientRect(); if (rp && rp.d) rp.seek(Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * rp.d); });
  tl.addEventListener('keydown', e => { const rp = hv.rp; if (!rp || !(e.code === 'ArrowRight' || e.code === 'ArrowLeft')) return; e.preventDefault(); e.stopPropagation(); rp.seek(Math.max(0, rp.t + (e.code === 'ArrowRight' ? 5 : -5))); });
}
function hvReelBar() {
  const bar = hv && hv.reelBar; if (!bar) return;
  bar.hidden = !hv.reelOn; dockLabels(); if (!hv.reelOn) return;
  const rp = hv.rp, d = rp.d || 0, c = rp.t || 0;
  const pp = bar.querySelector('.pp'); pp.innerHTML = PLAY_ICON(rp.paused); pp.setAttribute('aria-label', ui(rp.paused ? 'play' : 'pause'));
  bar.querySelector('.tl i').style.width = (d ? Math.min(100, c / d * 100) : 0).toFixed(2) + '%';
  bar.querySelector('.tl').setAttribute('aria-valuenow', String(d ? Math.round(c / d * 100) : 0)); bar.querySelector('.tl').setAttribute('aria-label', 'Showreel');
  bar.querySelector('.tm').textContent = d ? `${mmss(c)} / ${mmss(d)}` : mmss(c);
  const snd = bar.querySelector('.snd'); snd.innerHTML = SPEAKER(hv.sound); snd.setAttribute('aria-label', ui(hv.sound ? 'soundOff' : 'soundOn')); snd.setAttribute('aria-pressed', String(hv.sound));
  bar.querySelector('.x').setAttribute('aria-label', ui('close'));
}
/* Avant la demande du navigateur, la nôtre : la vidéo de la caméra reste sur l'écran du visiteur */
function hvConsent() {
  return new Promise(res => {
    const band = document.getElementById('home-band'); let box = document.getElementById('hv-consent'); if (box) box.remove();
    box = document.createElement('div'); box.id = 'hv-consent'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true');
    box.innerHTML = `<p>${escapeHTML(ui('hv_consent'))}</p><div class="bt"><button type="button" class="ok">${ICON.shot}<span>${escapeHTML(ui('hv_camYes'))}</span></button><button type="button" class="no">${escapeHTML(ui('cancel'))}</button></div>`;
    band.appendChild(box); box.setAttribute('aria-label', ui('hv_cam'));
    const done = v => { window.removeEventListener('keydown', key, true); box.classList.remove('on'); setTimeout(() => box.remove(), 250); res(v); };
    const key = e => { if (e.code === 'Escape') { e.preventDefault(); e.stopImmediatePropagation(); done(false); } };
    window.addEventListener('keydown', key, true);
    box.querySelector('.ok').addEventListener('click', () => done(true)); box.querySelector('.no').addEventListener('click', () => done(false));
    requestAnimationFrame(() => { box.classList.add('on'); box.querySelector('.ok').focus({ preventScroll: true }); });
  });
}
async function hvCamOn() {
  hvNote('');
  if (!hv.camOK) { if (!(await hvConsent())) { hvLabels(); return; } hv.camOK = true; }   // une fois accepté, on ne redemande pas pendant la visite
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: { ideal: 640 } }, audio: false });
    const v = document.createElement('video'); Object.assign(v, { muted: true, playsInline: true, autoplay: true, srcObject: stream }); v.setAttribute('playsinline', ''); await v.play().catch(() => {});
    if (hv.reelOn) hvReelStop();
    hv.cam = { stream, video: v }; hv.lo = 0; hv.hi = 1;
    if (hv.video) hv.video.pause();
    if (!hv.panel) hvNote(ui('hv_camNote'), 6000);
  } catch (e) { hvNote(ui('hv_camDenied'), 4000); }
  hvLabels();
}
function hvCamOff() {
  if (hv && hv.cam) { hv.cam.stream.getTracks().forEach(t => t.stop()); hv.cam = null; const v = hvPlayer(); if (v && !homeGone) v.play().catch(() => {}); hvNote(''); }
  if (hv) hvLabels();
}
function stopHomeVideo() { if (!hv) return; hvReelStop(); hvCamOff(); if (hv.video) hv.video.pause(); }
function hvCover(src, sw, sh, zoom = 1, dx = 0, dy = 0, mirror = false, fit = false) {   // fit : l'image entière, bandes noires autour
  const c = hv.rctx, cw = hv.raw.width, ch = hv.raw.height, s = (fit ? Math.min(cw / sw, ch / sh) : Math.max(cw / sw, ch / sh)) * zoom, w = sw * s, h = sh * s;
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
  if (hv.pyr && hv.pyr.cell === cell && hv.pyr.fill === hv.fill && hv.pyr.round === hv.round) return hv.pyr.pat;
  const c = document.createElement('canvas'); c.width = c.height = cell; const x = c.getContext('2d'), im = x.createImageData(cell, cell), half = cell / 2;
  for (let j = 0; j < cell; j++) for (let i = 0; i < cell; i++) {
    const dd = (hv.round ? Math.hypot(i + 0.5 - half, j + 0.5 - half) / 1.12 : Math.max(Math.abs(i + 0.5 - half), Math.abs(j + 0.5 - half))) / half, v = Math.max(0, Math.min(1, 1 - dd / hv.fill)) * 255, q = (j * cell + i) * 4;
    im.data[q] = im.data[q + 1] = im.data[q + 2] = v; im.data[q + 3] = 255;
  }
  x.putImageData(im, 0, 0);
  hv.pyr = { cell, fill: hv.fill, round: hv.round, pat: hv.ctx.createPattern(c, 'repeat') };
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
/* le delay ne s'applique que si l'ordinateur suit : dès que la machine peine, le mouvement redevient direct */
const hvDelay = () => (hv.floor || hv.interval > 1000 / 29 ? 1 : hv.delay);   // 30 ou 60 images/s : le delay ; en dessous, le mouvement direct
function homeVideoStep(now) {
  if (!hv || !hv.W) return;
  const ex = hv.exit ? now - hv.exit : -1;
  if (ex > HV_EXIT) { if (!hv.cleared) { hv.cleared = true; hv.ctx.fillStyle = '#0b0b0b'; hv.ctx.fillRect(0, 0, hv.W, hv.H); hvGLClear(); } return; }   // tout est aspiré : plus rien à calculer, la 3D a la main
  if (hv.reelOn && (!hv.rp || hv.rp.kind === 'video' || hv.rp.shown)) return;   // le showreel joue : les carrés se reposent (tant que YouTube / Vimeo reste caché, ils continuent : l'accueil ne se fige pas)
  if (now - hv.last < (ex >= 0 ? 1000 / 60 : hv.interval) - 2) return; hv.last = now;   // l'aspiration se dessine à 60 images/s : ce n'est plus que du dessin
  const t0 = performance.now(), t = HV_REDUCE.matches ? 0 : (now - hv.t0) / 1000;
  const ctx = hv.ctx, W = hv.W, H = hv.H;
  if (hv.panel && hv.panel.classList.contains('open') && now - (hv.statAt || 0) > 500) { hv.statAt = now; hvStat(); }
  if (!hvGLOn()) { ctx.fillStyle = '#0b0b0b'; ctx.fillRect(0, 0, W, H); }
  if (hv.intro && now < hv.intro) { hvGLClear(); return; }   // retour à l'accueil : le noir, le temps que la fenêtre remonte
  const intro = hv.intro ? now - hv.intro : -1; if (intro > HV_INTRO) hv.intro = 0;
  if (hv.frozen || (ex >= 0 && hv.frozenAt && now - hv.sampleAt < hv.interval)) {   // flux arrêté, ou image pas encore renouvelée : on redessine la dernière
    const f = hv.frozenAt; if (!f) return;
    if (hv.tainted) { if (ex < HV_EXIT / 3) hvComposite(f.cols, f.rows, f.cell); }
    else hvDraw(f.d, f.cols, f.rows, f.cell, ex, -1);
    return;
  }
  const cell = Math.max(hv.cell, hv.floor), cols = Math.ceil(W / cell), rows = Math.ceil(H / cell);
  if (hv.off.width !== cols || hv.off.height !== rows) { hv.off.width = hv.raw.width = cols; hv.off.height = hv.raw.height = rows; hv.fresh = true; }
  if (!hvSource(t)) return;
  /* delay : le lissage du site Fat-Man, valeur = valeur − (valeur − cible) / delay, sur chaque pixel de la grille */
  const dl = hvDelay(); hv.octx.globalAlpha = hv.fresh || dl <= 1 ? 1 : 1 - Math.pow(1 - 1 / dl, hv.interval / (1000 / 30)); hv.octx.drawImage(hv.raw, 0, 0); hv.octx.globalAlpha = 1; hv.fresh = false;   // le delay garde le même rythme à 30 ou à 60 images/s
  let d = null;
  if (!hv.tainted) { try { d = hv.octx.getImageData(0, 0, cols, rows).data; } catch (e) { hv.tainted = true; } }
  hv.frozenAt = { d, cols, rows, cell }; hv.sampleAt = now;
  if (hv.tainted) { if (hv.gl) { hv.gl.c.style.display = 'none'; hv.gl = null; } hvComposite(cols, rows, cell); }
  else hvDraw(d, cols, rows, cell, ex, intro);
  if (ex >= 0) return;   // pendant l'aspiration, on ne touche pas aux réglages de la machine
  /* adaptation à la machine */
  const cost = performance.now() - t0; hv.cost = hv.cost * 0.9 + cost * 0.1;
  const LADDER = hv.gl ? [60, 30, 24, 20] : [30, 24, 20], fps = Math.round(1000 / hv.interval), at = Math.max(0, LADDER.indexOf(fps));
  if (hv.cost > (hv.gl ? 9 : 14) && ++hv.slow > 15) { if (hv.panel) setTimeout(hvLabels, 0); hv.slow = 0; if (at < LADDER.length - 1) hv.interval = 1000 / LADDER[at + 1]; else hv.floor = Math.min(Math.max(hv.cell + 6, 14), Math.max(hv.floor, cell) + 2); }   // au plus 6 px de plus que le réglage
  else if (hv.cost < 4 && ++hv.fast > 60) { if (hv.panel) setTimeout(hvLabels, 0); hv.fast = 0; if (hv.floor) hv.floor = Math.max(0, hv.floor - 2); else if (at > 0) hv.interval = 1000 / LADDER[at - 1]; }
}
/* Sortie de l'accueil : chaque carré rétrécit jusqu'à disparaître, avec le delay du site Fat-Man (taille = taille − taille / delay, à chaque image) :
   très vite au début, puis il ralentit (ease out). Le delay suit la taille d'origine : les petits carrés partent presque tout de suite,
   les gros (les lumières de l'image) tiennent un peu plus. Retour à l'accueil : la même courbe, les carrés regrandissent depuis rien.
   Calculé sur le temps écoulé : même rythme à 30 ou à 120 images/s. */
const HV_EXIT = 420, HV_INTRO = 650;
const zeno = (delay, ms) => Math.pow(1 - 1 / delay, ms * 0.06);   // ce qui reste après ms millisecondes (60 images/s de référence)
function hvSquares(d, cols, rows, cell, ex = -1, intro = -1) {
  const ctx = hv.ctx, n = cols * rows, lum = hv.lum && hv.lum.length === n ? hv.lum : (hv.lum = new Float32Array(n));
  let mn = 1, mx = 0;
  for (let i = 0, q = 0; i < n; i++, q += 4) { const l = (0.2126 * d[q] + 0.7152 * d[q + 1] + 0.0722 * d[q + 2]) / 255; lum[i] = l; if (l < mn) mn = l; if (l > mx) mx = l; }
  hv.lo += (mn - hv.lo) * 0.15; hv.hi += (Math.max(mx, hv.lo + 0.15) - hv.hi) * 0.15;   // contraste automatique, lissé dans le temps
  const lo = hv.lo, k = 1 / (hv.hi - lo), dark = hv.mode === 'dark', g = hv.gamma, max = cell * hv.fill;
  const ox = (hv.W - cols * cell) / 2, oy = (hv.H - rows * cell) / 2, useSrc = hv.color === 'source';
  const anim = ex >= 0 || intro >= 0;
  /* vraies couleurs : les carrés forment un masque, l'image agrandie (pixels nets) le remplit. Un seul tracé et deux copies, au lieu d'une couleur par carré. */
  const m = useSrc ? hvMask(ctx) : ctx;
  m.fillStyle = useSrc ? '#fff' : hv.color === 'grey' ? '#8d8d8d' : hv.color === 'accent' ? (CONTENT.settings.accent || '#ffcc00') : '#f2f2f2'; m.beginPath();
  for (let y = 0, i = 0; y < rows; y++) {
    const cy = oy + y * cell + cell / 2;
    for (let x = 0; x < cols; x++, i++) {
      let l = (lum[i] - lo) * k; l = l < 0 ? 0 : l > 1 ? 1 : l; if (dark) l = 1 - l;
      let sz = (g === 1 ? l : Math.pow(l, g)) * max; if (sz < 0.6) continue;
      const cx = ox + x * cell + cell / 2, cyy = cy;
      if (anim) {
        const w = sz / max;   // 0 : petit carré, 1 : carré plein
        if (ex >= 0) sz *= zeno(2.4 + 4.6 * w, ex);   // delay 2,4 pour les plus petits, 7 pour les carrés pleins
        else sz *= 1 - zeno(3 + 4 * w, intro);
        if (sz < 0.6) continue;
      }
      if (hv.round) { const r = Math.min(sz * 0.56, cell / 2); m.moveTo(cx + r, cyy); m.arc(cx, cyy, r, 0, 6.2832); }   // un rond un peu plus large que le carré : la même lumière
      else m.rect(cx - sz / 2, cyy - sz / 2, sz, sz);   // une seule forme pour toute la grille : un seul dessin
    }
  }
  m.fill();
  if (useSrc) {
    m.globalCompositeOperation = 'source-in'; m.imageSmoothingEnabled = false; m.drawImage(hv.off, ox, oy, cols * cell, rows * cell); m.globalCompositeOperation = 'source-over';
    ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.drawImage(m.canvas, 0, 0); ctx.restore();
  }
}
/* Les carrés en WebGL : la grille lissée (une petite image, une case = un pixel) part sur la carte graphique, qui dessine chaque carré
   d'après la luminosité de sa case. Même calcul que hvSquares (contraste automatique, gamma, inversion, aspiration), en un seul passage. */
function hvGLInit(under) {
  try {
    const c = document.createElement('canvas'); c.id = 'home-gl'; c.setAttribute('aria-hidden', 'true');
    const gl = c.getContext('webgl', { alpha: false, antialias: false, depth: false, stencil: false, premultipliedAlpha: false, powerPreference: 'high-performance' });
    if (!gl) return null;
    const sh = (type, src) => { const o = gl.createShader(type); gl.shaderSource(o, src); gl.compileShader(o); if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(o)); return o; };
    const pr = gl.createProgram();
    gl.attachShader(pr, sh(gl.VERTEX_SHADER, 'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}'));
    gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, `precision highp float;
uniform sampler2D T;uniform vec2 grid,org,res;uniform float cell,maxs,lo,k,gam,dark,ex,intro,dpr,src,rnd;uniform vec3 col,bg;
void main(){
  vec2 p=vec2(gl_FragCoord.x,res.y-gl_FragCoord.y)/dpr-org;vec2 ci=floor(p/cell);
  if(ci.x<0.||ci.y<0.||ci.x>=grid.x||ci.y>=grid.y){gl_FragColor=vec4(bg,1.);return;}
  vec4 s=texture2D(T,(ci+.5)/grid);
  float l=clamp((dot(s.rgb,vec3(.2126,.7152,.0722))-lo)*k,0.,1.);if(dark>.5)l=1.-l;
  float sz=(gam==1.?l:pow(max(l,1e-4),gam))*maxs;
  if(sz<.6){gl_FragColor=vec4(bg,1.);return;}
  float w=sz/maxs;
  if(ex>=0.)sz*=pow(1.-1./(2.4+4.6*w),ex*.06);else if(intro>=0.)sz*=1.-pow(1.-1./(3.+4.*w),intro*.06);
  vec2 d=abs(p-(ci+.5)*cell);float h=sz*.5;
  float a=rnd>.5?clamp((min(h*1.12,cell*.5)-length(d))*dpr+.5,0.,1.):clamp((h-d.x)*dpr+.5,0.,1.)*clamp((h-d.y)*dpr+.5,0.,1.);if(sz<.6)a=0.;
  gl_FragColor=vec4(mix(bg,src>.5?s.rgb:col,a),1.);
}`));
    gl.linkProgram(pr); if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return null;
    gl.useProgram(pr);
    const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(pr, 'a'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const tex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, tex);
    [[gl.TEXTURE_MIN_FILTER, gl.NEAREST], [gl.TEXTURE_MAG_FILTER, gl.NEAREST], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]].forEach(([a, b]) => gl.texParameteri(gl.TEXTURE_2D, a, b));
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
    const u = {}; ['grid', 'org', 'res', 'cell', 'maxs', 'lo', 'k', 'gam', 'dark', 'ex', 'intro', 'dpr', 'src', 'rnd', 'col', 'bg'].forEach(n => { u[n] = gl.getUniformLocation(pr, n); });
    under.after(c);
    return { c, gl, u, dpr: 1, data: null };
  } catch (e) { return null; }
}
const hvGLOn = () => !!(hv && hv.gl && !hv.gl.gl.isContextLost());
function hvGLClear() { if (!hvGLOn()) return; const g = hv.gl.gl; g.viewport(0, 0, hv.gl.c.width, hv.gl.c.height); g.clearColor(11 / 255, 11 / 255, 11 / 255, 1); g.clear(g.COLOR_BUFFER_BIT); }
const hexRGB = h => { const m = /^#?([0-9a-f]{6})$/i.exec(String(h || '').trim()); const n = m ? parseInt(m[1], 16) : 0xf2f2f2; return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255]; };
function hvDraw(d, cols, rows, cell, ex = -1, intro = -1) {
  if (!hvGLOn()) { hvSquares(d, cols, rows, cell, ex, intro); return; }
  const G = hv.gl, gl = G.gl, u = G.u, n = cols * rows;
  let mn = 1, mx = 0;
  for (let i = 0, q = 0; i < n; i++, q += 4) { const l = (0.2126 * d[q] + 0.7152 * d[q + 1] + 0.0722 * d[q + 2]) / 255; if (l < mn) mn = l; if (l > mx) mx = l; }
  hv.lo += (mn - hv.lo) * 0.15; hv.hi += (Math.max(mx, hv.lo + 0.15) - hv.hi) * 0.15;   // le même contraste automatique que hvSquares
  if (G.data !== d) { G.data = d; gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, cols, rows, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(d.buffer, d.byteOffset, n * 4)); }
  gl.viewport(0, 0, G.c.width, G.c.height);
  const col = hexRGB(hv.color === 'grey' ? '#8d8d8d' : hv.color === 'accent' ? (CONTENT.settings.accent || '#ffcc00') : '#f2f2f2');
  gl.uniform2f(u.grid, cols, rows); gl.uniform2f(u.org, (hv.W - cols * cell) / 2, (hv.H - rows * cell) / 2); gl.uniform2f(u.res, G.c.width, G.c.height);
  gl.uniform1f(u.cell, cell); gl.uniform1f(u.maxs, cell * hv.fill); gl.uniform1f(u.lo, hv.lo); gl.uniform1f(u.k, 1 / (hv.hi - hv.lo)); gl.uniform1f(u.gam, hv.gamma);
  gl.uniform1f(u.dark, hv.mode === 'dark' ? 1 : 0); gl.uniform1f(u.ex, ex); gl.uniform1f(u.intro, intro); gl.uniform1f(u.dpr, G.dpr); gl.uniform1f(u.src, hv.color === 'source' ? 1 : 0); gl.uniform1f(u.rnd, hv.round ? 1 : 0);
  gl.uniform3f(u.col, col[0], col[1], col[2]); gl.uniform3f(u.bg, 11 / 255, 11 / 255, 11 / 255);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}
function hvMask(ctx) {   // calque de la taille du dessin en cours (écran ou photo souvenir)
  const c = ctx.canvas;
  if (!hv.mask) { hv.mask = document.createElement('canvas'); hv.mctx = hv.mask.getContext('2d'); }
  if (hv.mask.width !== c.width || hv.mask.height !== c.height) { hv.mask.width = c.width; hv.mask.height = c.height; }
  const m = hv.mctx; m.setTransform(1, 0, 0, 1, 0, 0); m.globalCompositeOperation = 'source-over'; m.clearRect(0, 0, c.width, c.height); m.setTransform(ctx.getTransform());
  return m;
}

/* ================================================================ Home */
/* L'accueil : la vidéo en carrés plein écran, la phrase du studio sur le bandeau LED, une flèche pour entrer.
   On entre en cliquant la flèche, en faisant défiler vers le bas (molette, pavé tactile), en glissant vers le haut sur téléphone, ou au clavier. */
const home = document.getElementById('home'), enterBtn = document.getElementById('enter'), enterLbl = enterBtn.querySelector('.lbl');
const ticker = document.getElementById('ticker'), tctx = ticker.getContext('2d');
let tickerDots = null, tickerX = 0, tickerDpr = 1;
function setEnterLabel(t) { enterLbl.textContent = t; enterBtn.setAttribute('aria-label', t); }
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
  const c = String(ch).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[‘’]/g, "'").replace(/[“”«»]/g, '"').toUpperCase();   // apostrophes et guillemets typographiques : le glyphe droit
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
const homeFigureLines = () => homeFigures().map(f => `${f.value} ${f.label}`);   // les chiffres du studio défilent sur le bandeau LED, dans la langue du visiteur
function buildTickerDots() {   // la phrase du studio en colonnes de 7 points (Réglages › Accueil) ; sans phrase, les chiffres
  const phrase = tr(CONTENT.settings.home.sub || {}).replace(/\s*\n\s*/g, ' ').trim();
  const quotes = tr(CONTENT.settings.home.quotes || {}).split(/\n+/).map(x => x.trim()).filter(Boolean);   // après la phrase : les citations de presse (Réglages › Accueil)
  const items = phrase ? [phrase, ...quotes] : [...homeFigureLines(), ...quotes, ...(CONTENT.settings.home.ticker || [])].filter(Boolean);
  const text = (items.length ? items : [CONTENT.settings.name]).map(x => String(x).replace(/œ/g, 'oe').replace(/Œ/g, 'OE').replace(/æ/g, 'ae').replace(/…/g, '...').replace(/·/g, '.').toUpperCase().trim()).join('   ✚   ') + '   ✚   ';
  tickerDots = dotsOf(text);
}
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
function sizeTicker() { tickerDpr = Math.min(window.devicePixelRatio || 1, 2); ticker.width = Math.round(window.innerWidth * tickerDpr); ticker.height = Math.round(LED.h * tickerDpr); ledSprites = null; tickerStrip = null; }
let tickerAcc = 0;
let tickerStrip = null;   // toute la phrase en points LED, dessinée une fois ; l'écran n'en recopie qu'une fenêtre
function tickerStripFor(on) {
  const k = tickerDpr, p = LED.pitch, cols = Math.ceil(window.innerWidth / p) + 1, key = [tickerDots.w, cols, k, on].join('|');
  if (tickerStrip && tickerStrip.dots === tickerDots && tickerStrip.key === key) return tickerStrip;
  if (!ledSprites || ledColor !== on) { ledColor = on; ledSprites = { on: ledSprite(on, true), off: ledSprite(on, false) }; }
  const n = cols + tickerDots.w + cols, c = document.createElement('canvas'); c.width = Math.ceil(n * p * k); c.height = Math.round(LED.h * k);   // un écran de points éteints devant : la phrase arrive par la droite, comme si rien n'était écrit avant
  const x = c.getContext('2d'), top = (LED.h - LED.rows * p) / 2, half = ledSprites.on.width / 2;
  x.fillStyle = '#000'; x.fillRect(0, 0, c.width, c.height);
  for (let i = 0; i < n; i++) {
    const m = i < cols ? 0 : tickerDots.cols[(i - cols) % tickerDots.w], cx = (i * p + p / 2) * k - half;
    for (let r = 0; r < LED.rows; r++) x.drawImage((m >> r) & 1 ? ledSprites.on : ledSprites.off, cx, (top + r * p + p / 2) * k - half);
  }
  return (tickerStrip = { canvas: c, dots: tickerDots, key, shown: -1, lead: cols });
}
function drawTicker(dt) {   // le texte avance d'une colonne de points à la fois, comme un vrai panneau
  const sp = +((CONTENT.settings.home || {}).tickerSpeed); tickerAcc += dt * (sp > 0 ? Math.min(120, sp) : 26);   // vitesse réglable : Réglages › Accueil
  const st = tickerStripFor(CONTENT.settings.accent || '#ffcc00');   // l'accueil est remis à l'endroit en négatif : la vraie couleur
  if (tickerAcc >= 1) { tickerX += Math.floor(tickerAcc); tickerAcc %= 1; }
  if (tickerX >= st.lead + tickerDots.w) tickerX = st.lead + (tickerX - st.lead) % tickerDots.w;   // après le premier passage, la phrase boucle sans revenir au noir
  if (st.shown === tickerX) return;   // rien n'a bougé : rien à redessiner
  st.shown = tickerX;
  tctx.setTransform(1, 0, 0, 1, 0, 0);
  tctx.drawImage(st.canvas, tickerX * LED.pitch * tickerDpr, 0, ticker.width, ticker.height, 0, 0, ticker.width, ticker.height);
}
let homeGone = false, assetsLoaded = false, clickedEnter = false;
const isHomeHash = () => /^(#(accueil|home|inici|inicio)?)?$/i.test(location.hash || '');
let homeTimer = 0, behindUntil = 0;   // la 3D derrière l'accueil ne se dessine que pendant les glissements
/* Entrer : 1. le flux s'arrête (vidéo, showreel, caméra) et les carrés de la dernière image rétrécissent ; ce n'est plus que du dessin, sans lecture de pixels ;
   2. vers 180 ms, la 3D démarre, puis la fenêtre descend à l'image suivante (Quart.easeOut, 1,2 s, comme le site de 2008) ;
   3. vers 420 ms, il ne reste plus un carré : l'accueil ne calcule plus rien. La vidéo et la 3D ne se calculent jamais en même temps. */
let leaving = false;
const HV_SLIDE_AT = 180;
function enterToTheWeb(animate = clickedEnter) {
  if (homeGone || leaving) return;
  if (!(animate && hv && hv.W && !home.hidden && !HV_REDUCE.matches)) { goInside(); return; }
  leaving = true; home.classList.add('leaving');
  if (hv.setOpen) hv.setOpen(false);
  if (hv.reelOn) hvReelStop();
  hvFreeze(); hv.exit = performance.now(); hv.cleared = false; hv.intro = 0;
  setTimeout(() => { leaving = false; goInside(); }, HV_SLIDE_AT);
}
function hvFreeze() {   // le flux s'arrête : vidéo, showreel et caméra
  if (!hv) return; hv.frozen = true;
  if (hv.video) hv.video.pause();
  if (hv.rp) hv.rp.pause();
  if (hv.cam) { hv.cam.stream.getTracks().forEach(t => t.stop()); hv.cam = null; }
}
function goInside() {
  if (homeGone) return;
  homeGone = true; clearTimeout(homeTimer); enteredAt = performance.now();
  if (!PREVIEW && isHomeHash()) try { history.pushState(null, '', location.pathname + location.search + '#' + ((CONTENT.sections.find(x => x.id === CONTENT.settings.startSection && x.visible) || SECTIONS[0].def).id)); } catch (e) {}   // le bouton Retour du navigateur ramène à l'accueil
  startRender(); mainEntrance(); setMenuPosition();   // la 3D se prépare (compilation) pendant que la fenêtre est encore en place…
  requestAnimationFrame(() => requestAnimationFrame(() => { home.classList.add('out'); homeTimer = setTimeout(() => { home.hidden = true; stopHomeVideo(); }, 1250); }));   // …puis elle descend, sans à-coup au départ
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
  enterBtn.classList.remove('wait'); setEnterLabel(tr(CONTENT.settings.home.enter) || ui('enter')); homeShownAt = performance.now();
  if (hv) { hv.exit = 0; hv.frozen = false; hv.cleared = false; hv.fresh = true; hv.intro = performance.now() + 450; }   // les carrés renaissent quand la fenêtre est presque remontée
  home.classList.remove('leaving');
  home.hidden = false; void home.offsetWidth; home.classList.remove('out');
  if (hv && hv.video) hv.video.play().catch(() => {});
  if (push && !PREVIEW) try { history.pushState(null, '', location.pathname + location.search + '#accueil'); } catch (e) {}
}
window.addEventListener('popstate', () => {
  if (PREVIEW) return;
  if (postV.open) { postV.pushed = false; closePost(); try { history.replaceState(null, '', location.pathname + location.search + '#' + P.section.def.id); } catch (e) {} return; }   // le geste retour du téléphone referme la fiche, l'adresse suit la section affichée
  postV.pushed = false;
  if (isHomeHash()) backToHome(false);
  else if (!homeGone && assetsLoaded) enterToTheWeb();
  else if (homeGone && started) {   // adresse …#studio tapée ou lien interne : on va à la section
    const i = SECTIONS.findIndex(x => x.def.id === decodeURIComponent(location.hash.slice(1).split('/')[0]));
    if (i >= 0 && i !== P.currentSection && inputEnabled) getToSectionView(i);
  }
});
sloganEl.addEventListener('click', e => { if (e.target.closest('.wm') && homeGone) backToHome(); });
sloganEl.addEventListener('keydown', e => { if ((e.code === 'Enter' || e.code === 'Space') && e.target.closest('.wm') && homeGone) { e.preventDefault(); backToHome(); } });
enterBtn.addEventListener('click', () => { clickedEnter = true; if (assetsLoaded) enterToTheWeb(); else { setEnterLabel(ui('loading')); enterBtn.classList.add('wait'); } });
/* Faire défiler vers le bas fait descendre l'accueil. Le panneau de réglages et l'histoire du site gardent leurs gestes. */
let homeShownAt = 0, wheelAcc = 0, wheelAt = 0, touchY = null;
const homeOwnGesture = el => !!(el && el.closest && el.closest('#hc-story, #hv-panel'));
function scrollEnter() {
  if (homeGone || clickedEnter || performance.now() - homeShownAt < 900 || (reel && reel.open)) return;
  const st = document.getElementById('hc-story'); if (st && st.classList.contains('on')) return;
  enterBtn.click();
}
home.addEventListener('wheel', e => {
  if (homeGone || homeOwnGesture(e.target)) return;
  const now = performance.now(); if (now - wheelAt > 350) wheelAcc = 0; wheelAt = now;
  if (e.deltaY > 0) { wheelAcc += e.deltaY * (e.deltaMode ? 30 : 1); if (wheelAcc > 40) { wheelAcc = 0; scrollEnter(); } }
}, { passive: true });
home.addEventListener('touchstart', e => { touchY = e.touches.length === 1 && !homeOwnGesture(e.target) ? e.touches[0].clientY : null; }, { passive: true });
home.addEventListener('touchmove', e => { if (touchY !== null && e.touches.length === 1 && touchY - e.touches[0].clientY > 46) { touchY = null; scrollEnter(); } }, { passive: true });
home.addEventListener('touchend', () => { touchY = null; }, { passive: true });
window.addEventListener('keydown', e => {
  if (homeGone || e.ctrlKey || e.metaKey || e.altKey || (reel && reel.open)) return;
  const t = e.target, onCtl = t && t.closest && t.closest('button, a, input, select, textarea, [contenteditable="true"]');
  if (e.code === 'Space' && !onCtl && hv && hv.reelOn) { e.preventDefault(); reelToggle(); return; }   // showreel : espace = pause
  if (e.code === 'ArrowDown' || e.code === 'PageDown' || ((e.code === 'Space' || e.code === 'Enter') && !onCtl)) {
    if (t && t.tagName === 'INPUT') return;   // un curseur du panneau garde ses flèches
    e.preventDefault(); scrollEnter();
  }
});

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
/* La 3D ne se redessine que si quelque chose a changé : caméra, objets, matières, textures, animations en cours, ou un geste du visiteur.
   Immobile, elle ne coûte presque plus rien (une image de contrôle toutes les deux secondes, au cas où). */
let lastSig = NaN, lastDraw = 0, wakeUntil = 0;
const wake = (ms = 700) => { wakeUntil = Math.max(wakeUntil, performance.now() + ms); };
['pointerdown', 'pointermove', 'pointerup', 'wheel', 'keydown', 'touchstart', 'touchmove', 'resize'].forEach(ev => window.addEventListener(ev, () => wake(), { passive: true }));
function sceneSig() {
  const p = camera.position, q = camera.quaternion;
  let s = p.x + p.y * 1.3 + p.z * 1.7 + q.x * 31 + q.y * 37 + q.z * 41 + q.w * 43 + camera.fov * 7.3, k = 1;
  scene.traverseVisible(o => {
    k += 1.13; const a = o.position, r = o.rotation, c = o.scale;
    s += (a.x + a.y * 1.3 + a.z * 1.7 + r.x * 3.1 + r.y * 3.7 + r.z * 4.3 + c.x * 5.3 + c.y * 5.9 + c.z * 6.1) * k;
    const m = o.material; if (m && !Array.isArray(m)) s += (m.opacity * 11 + m.version * 13 + (m.map ? m.map.version * 17 + m.map.id * 0.01 : 0)) * k;
    const g = o.geometry; if (g && Number.isFinite(g.instanceCount)) s += g.instanceCount * 19 * k;
  });
  return s;
}
/* Les shaders (petits programmes de la carte graphique) se compilent pendant l'accueil, en arrière-plan quand le navigateur le permet,
   au lieu de bloquer la première image de la 3D (jusqu'à une seconde et demie sur une machine modeste) */
function warmShaders() {
  if (!renderer.compileAsync) return;
  const g = new LineSegmentsGeometry(); g.setPositions([0, 0, 0, 1, 1, 1]);
  const lines = new THREE.Scene(); LINE_MATS.forEach(m => lines.add(new LineSegments2(g, m)));
  /* compilés « dans » la vraie scène (mêmes lumières, donc les mêmes programmes), puis un dessin dans une image de 1 pixel :
     c'est là que le navigateur finit vraiment le travail, pendant l'accueil plutôt qu'au clic */
  const prime = () => {
    if (homeGone) { g.dispose(); return; }   // déjà dans la 3D : plus rien à préparer
    const tmp = new THREE.Group();   // dessiné sur la vraie toile, cachée sous l'accueil : exactement les mêmes programmes qu'au clic
    [...KEEP.children, ...lines.children].forEach(o => { const c = o.clone(); c.frustumCulled = false; tmp.add(c); });
    scene.add(tmp);
    try { renderer.render(scene, camera); } catch (e) {}
    scene.remove(tmp); try { renderer.render(scene, camera); } catch (e) {} g.dispose();
  };
  const go = () => Promise.all([KEEP, lines, scene].map(sc => renderer.compileAsync(sc, camera, scene).catch(() => {}))).then(() => (window.requestIdleCallback || (f => setTimeout(f, 50)))(prime, { timeout: 800 }));
  (window.requestIdleCallback || (f => setTimeout(f, 200)))(go, { timeout: 1500 });
}
let drewAt = 0;
function frame(now) {
  const dt = Math.min(0.25, Math.max(0, (now - last) / 1000)); last = now; clock += dt; frames = dt * FPS;
  if (!homeGone && tickerDots && !R0.classList.contains('hc-late')) drawTicker(dt);   // caché pendant l'ouverture : il ne calcule rien
  if (hv && !home.hidden) homeVideoStep(now);
  if (started && (homeGone || now < behindUntil)) {
    updateTweens(); watchGrid(); settleOrbit(); renderMachine(); if (postsView) postsView.update(); phoneBand(); post2D.step(); updateCamera();
    const busy = tweens.length || now < wakeUntil || now < behindUntil || isClicking || closeTurn || orbitE || now - lastDraw > 2000;
    const sig = sceneSig();
    if (busy || sig !== lastSig) { renderer.render(scene, camera); if (now - drewAt < 100 && homeGone && !document.hidden) dprGovern(now, now - drewAt); drewAt = now; lastDraw = now; lastSig = sig; }
  }
  requestAnimationFrame(frame);
}
function showError(err) {
  console.error(err); introOut(true);
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
/* L'ouverture (posée dans index.html à chaque publication) : la phrase du studio, ligne par ligne, au rythme de la lecture.
   Pendant ce temps le showreel se charge, puis s'arrête sur sa première image, caché. Quand la dernière ligne est lue,
   les lignes repartent une à une vers la droite ; sur le départ de la dernière, la vidéo démarre et le bouton son clignote deux fois.
   Un geste du visiteur (clic, touche, molette) accélère tout. Si la vidéo tarde, cinq secondes de patience au plus. */
/* Le « i » : la phrase de l'ouverture, rejouée au centre de l'écran avec la même animation, quoi qu'il se passe derrière (vidéo, 3D, fiche).
   Rien ne s'arrête dessous. Un nouveau clic sur « i » ou n'importe où la fait partir tout de suite. */
const sentenceLines = () => {   // les retours à la ligne de la phrase du studio font les coupures ; sans eux, coupée aux virgules
  const ph = tr((CONTENT.settings.home || {}).sub || {}).trim();
  if (/\n/.test(ph)) return ph.split(/\n+/).map(x => x.trim()).filter(Boolean);
  const out = []; let cur = '';
  ph.split(/(?<=,)\s+/).forEach(ch => { if (cur && (cur + ' ' + ch).length > 62) { out.push(cur); cur = ch; } else cur = cur ? cur + ' ' + ch : ch; });
  if (cur) out.push(cur); return out;
};
/* Dans l'aperçu du back-office, l'ouverture écrite dans index.html est celle de la dernière publication : on la refait avec le contenu en cours */
function introRebuild() {
  const el = document.getElementById('hc-intro'); if (!el) return;
  const box = el.querySelector('.ln'), lines = sentenceLines(); if (!lines.length) { el.remove(); return; }
  box.querySelectorAll('.l').forEach(x => x.getAnimations().forEach(a => a.cancel()));
  box.innerHTML = ''; lines.forEach(t => { const x = document.createElement('span'); x.className = 'l'; x.textContent = t; box.appendChild(x); });
  let at = 0, va = 0;
  [...box.children].forEach((x, i) => { x.animate([{ opacity: 0, transform: 'translateX(-36px)', filter: 'blur(6px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }], { duration: 1000, delay: at, easing: 'cubic-bezier(.22,.61,.36,1)', fill: 'both' }); if (i === lines.length - 1) va = at; at += Math.max(650, Math.min(1700, 120 + 16 * lines[i].length)); });
  window.HC_INTRO = { t0: performance.now(), video: va, depart: at + 150 };
}
let sayBox = null;
function saySentence() {
  if (sayBox) { sayGo(sayBox, true); return; }   // déjà là : un clic la fait partir
  const lines = sentenceLines(); if (!lines.length) return;
  const onHome = !homeGone, box = document.createElement('div'); box.id = 'hc-say'; box.className = onHome ? 'home' : 'world'; box.setAttribute('role', 'status');
  const ln = document.createElement('div'); ln.className = 'ln'; box.appendChild(ln);
  const ref = document.querySelector('#home-band .sl span, #slogan span');   // la police du slogan sous la signature
  if (ref) { const cs = getComputedStyle(ref); ln.style.fontFamily = cs.fontFamily; ln.style.fontWeight = cs.fontWeight; ln.style.fontStyle = cs.fontStyle; }
  lines.forEach(t => { const x = document.createElement('span'); x.className = 'l'; x.textContent = t; ln.appendChild(x); });
  (onHome ? document.getElementById('home') : document.body).appendChild(box); sayBox = box;
  let at = 0;
  [...ln.children].forEach((x, i) => { x.animate([{ opacity: 0, transform: 'translateX(-36px)', filter: 'blur(6px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }], { duration: 1000, delay: at, easing: 'cubic-bezier(.22,.61,.36,1)', fill: 'both' }); at += Math.max(650, Math.min(1700, 120 + 16 * lines[i].length)); });
  box.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, fill: 'both' });
  box._t = setTimeout(() => sayGo(box), at + 900);   // le « i » : un peu plus de temps pour lire, on l'a demandé
  const away = e => { if (e.target.closest && e.target.closest('#home-about, #about-btn')) return; sayGo(box, true); };
  setTimeout(() => { if (sayBox === box) { box._away = away; window.addEventListener('pointerdown', away, true); window.addEventListener('keydown', away, true); } }, 50);
}
function sayGo(box, fast = false) {
  if (box._gone) return; box._gone = true; clearTimeout(box._t); if (sayBox === box) sayBox = null;   // un nouveau « i » pendant le départ relance la phrase
  if (box._away) { window.removeEventListener('pointerdown', box._away, true); window.removeEventListener('keydown', box._away, true); }
  const ls = [...box.querySelectorAll('.l')], step = fast ? 80 : INTRO_STEP, dur = fast ? 450 : 750, last = (ls.length - 1) * step;
  ls.forEach((l, i) => l.animate([{ opacity: 0, transform: 'translateX(36px)', filter: 'blur(5px)' }], { duration: dur, delay: i * step, easing: 'cubic-bezier(.45,0,.75,.3)', fill: 'forwards' }));
  box.animate([{ opacity: 0 }], { duration: 600, delay: last + dur * 0.4, fill: 'forwards' });
  setTimeout(() => box.remove(), last + dur + 50);
}
let introDone = false, introKicked = false, introShown = false, introReady = false, introReadyAt = 0, introLinesAt = 0, introLinesGo = false;
const INTRO_STEP = 240;
function introRelease() {   // la vidéo apparaît sous les lignes
  if (introShown) return; introShown = true;
  const el = document.getElementById('hc-intro'); if (el) el.classList.remove('hold');
  introVideo();
}
function introOut(now = false, fast = false) {
  const el = document.getElementById('hc-intro'); if (!el || introDone) return; introDone = true; window.HC_NOINTRO = true;   // la phrase ne reviendra plus
  if (now || !el.animate) { el.remove(); introRelease(); introLate(true); return; }
  if (fast) { introRelease(); R0.classList.remove('hc-stage'); }
  const ls = [...el.querySelectorAll('.l')], step = fast ? 80 : INTRO_STEP, dur = fast ? 450 : 750, last = (ls.length - 1) * step;
  ls.forEach((l, i) => l.animate([{ opacity: 0, transform: 'translateX(36px)', filter: 'blur(5px)' }], { duration: dur, delay: i * step, easing: 'cubic-bezier(.45,0,.75,.3)', fill: 'forwards' }));
  setTimeout(introRelease, last);   // au plus tard au départ de la dernière ligne
  setTimeout(() => introLate(), last + dur + (fast ? 0 : 500));   // la toute fin : le bandeau
  setTimeout(() => el.remove(), last + dur + 1300);
}
function introVideo() {
  if (!hv || homeGone) return;
  if (hv.reelOn && hv.rp && !hv.userReel) { if (!introKicked) { introKicked = true; hv.rp.seek(0); hv.rp.play(); } }
  else if (!hv.reelOn && !hv.userReel && !hv.cam && reelPlayable() && isHomeHash() && !HV_REDUCE.matches && !(PREVIEW && PREVIEW.start)) {   // le visiteur a pressé le pas avant que le showreel soit prêt : il part dès que possible
    const wait = setInterval(() => { if (homeGone || hv.reelOn || hv.cam) { clearInterval(wait); return; } if (assetsLoaded) { clearInterval(wait); hvReelStart(true); dockLabels(); introBlink(); } }, 150);
    return;
  }
  introBlink();
}
function introBlink() {
  const sb = document.getElementById('home-snd');
  if (sb && !sb.hidden && !hv.sound) { sb.classList.remove('blink'); void sb.offsetWidth; sb.classList.add('blink'); setTimeout(() => sb.classList.remove('blink'), 1400); }
}
/* L'ouverture, dans l'ordre : la signature, le slogan et les carrés ; puis la phrase ; puis la vidéo ; le bandeau et « Entrer » à la toute fin.
   Une seule chose bouge à la fois, en opacité et en translation : rien de lourd pendant que la vidéo se charge. */
const R0 = document.documentElement;
const EASE_IN = 'cubic-bezier(.22,.61,.36,1)';
function introStage() {
  if (!R0.classList.contains('hc-stage')) return;
  const run = () => {
    if (!R0.classList.contains('hc-stage')) return;
    const wm = document.querySelector('#home-slogan .wm'), sl = [...document.querySelectorAll('#home-slogan > span')], sq = [...document.querySelectorAll('#home-ctl > *')];   // les carrés encore cachés aussi (le son arrive avec la vidéo) : ils prennent leur tour
    R0.classList.remove('hc-stage');
    const show = (el, delay, dx = -24, dur = 900) => el && el.animate([{ opacity: 0, transform: `translateX(${dx}px)`, filter: 'blur(6px)' }, { opacity: getComputedStyle(el).opacity, transform: 'none', filter: 'blur(0)' }], { duration: dur, delay, easing: EASE_IN, fill: 'backwards' });
    show(wm, 0, -30, 1100);
    sl.forEach((x, i) => show(x, 380 + i * 130, -18, 800));
    sq.forEach((x, i) => x.animate([{ opacity: 0, transform: 'scale(.6)' }, { opacity: getComputedStyle(x).opacity, transform: 'none' }], { duration: 520, delay: 760 + i * 90, easing: 'cubic-bezier(.34,1.4,.64,1)', fill: 'backwards' }));
    const en = document.getElementById('enter'); if (en) en.animate([{ opacity: 0, transform: 'translate(-50%, 10px)' }, { opacity: 1, transform: 'translateX(-50%)' }], { duration: 700, delay: 900, easing: EASE_IN, fill: 'backwards' });   // « Entrer » tout de suite : on n'est pas obligé de regarder l'ouverture
    setTimeout(() => { introReady = true; }, 1150 + sq.length * 60);   // maj-151 : quand les boutons sont posés, la vidéo d'abord, puis la phrase par-dessus
    const settled = Math.max(1100, 380 + Math.max(0, sl.length - 1) * 130 + 800, 760 + Math.max(0, sq.length - 1) * 90 + 520) + 120;
    setTimeout(() => { const el = document.getElementById('hc-intro'); if (el && !introShown) el.classList.add('beat-on'); }, settled);   // maj-160 : le cœur ne bat qu'une fois l'interface posée, et seulement si la vidéo se fait attendre
  };
  /* la signature dans sa vraie police, sinon elle apparaît en police de secours puis change */
  const f = document.fonts && document.fonts.ready ? Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1200))]) : Promise.resolve();
  f.then(() => requestAnimationFrame(run));
}
function introLate(now = false) {   // le bandeau LED, « Entrer » et le « ? » arrivent en dernier
  if (!R0.classList.contains('hc-late')) return;
  R0.classList.remove('hc-stage', 'hc-late');
  tickerX = 0; tickerAcc = 0; if (tickerStrip) tickerStrip.shown = -1;   // le bandeau part du noir : la phrase entre par la droite
  if (now) return;
  ['#ticker', '#home-dock'].forEach((q, i) => { const el = document.querySelector(q); if (el) el.animate([{ opacity: 0 }, { opacity: getComputedStyle(el).opacity }], { duration: 1200, delay: i * 220, easing: 'ease', fill: 'backwards' }); });
}
function introWatch() {
  const el = document.getElementById('hc-intro'); if (!el) return;
  const wantsReel = !!hv && reelPlayable() && isHomeHash() && !HV_REDUCE.matches && !(PREVIEW && PREVIEW.start);
  let started = false, primed = !wantsReel, kickAt = 0;
  const hurry = () => introOut(false, true);
  ['pointerdown', 'keydown', 'wheel', 'touchmove'].forEach(ev => window.addEventListener(ev, hurry, { once: true, passive: true, capture: true }));
  const tick = setInterval(() => {
    if (introDone && introShown) { clearInterval(tick); return; }
    if (homeGone) { clearInterval(tick); introOut(true); return; }
    if (wantsReel && assetsLoaded && !started && !hv.reelOn && !hv.cam) started = hvReelStart(true);   // le showreel se charge pendant la phrase…
    if (started && !primed && hv.rp && hv.rp.t > 0.05) { hv.rp.pause(); hv.rp.seek(0); primed = true; }   // …et attend sur sa première image, caché
    if (started && !hv.reelOn) primed = true;   // arrêté par le visiteur
    const now = performance.now();
    /* YouTube et Vimeo couvrent leurs premières secondes de leur habillage : on les relance un peu avant, caché, pour qu'ils soient nets quand ils apparaissent */
    const lead = !hv || !hv.rp ? 0 : hv.rp.kind === 'youtube' ? 2900 : hv.rp.kind === 'vimeo' ? 500 : 0;
    if (!introReady && !R0.classList.contains('hc-stage') && !R0.classList.contains('hc-late')) introReady = true;   // l'ouverture a été court-circuitée
    if (!introShown && introReady) {   // d'abord la vidéo…
      if (!introReadyAt) introReadyAt = now;
      if (lead && primed && hv.reelOn && !introKicked) { introKicked = true; kickAt = now; hv.rp.seek(0); hv.rp.play(); }
      const ready = !wantsReel ? assetsLoaded : !hv.reelOn ? true : !primed ? false : !lead ? true : introKicked && now >= kickAt + lead;
      if (ready || now - introReadyAt > 7000) { introRelease(); introLinesAt = now + 1000; }
    }
    if (introShown && !introLinesGo && !introDone && now >= introLinesAt) { introLinesGo = true; if (window.HC_GO) window.HC_GO(); }   // …puis la phrase, par-dessus
    const I = window.HC_INTRO; if (!I) return;
    if (!introDone && introShown && now >= I.t0 + I.depart + 600) introOut();   // puis les lignes s'en vont
  }, 60);
}
(async function boot() {
  try {
    await awaitPreview();
    if (PREVIEW) CONTENT = normalizeContent(structuredClone(PREVIEW.content));
    else { CONTENT = await backend.load(); if (backend.prepare) await backend.prepare(CONTENT); }
  } catch (err) { showError(err); return; }
  negMode = arrivalNeg();
  applyTypo();
  { const mine = visitorNeg(); if (mine !== null) negMode = mine; }
  watchSun();
  let saved = null; try { saved = localStorage.getItem('hc-lang'); } catch (e) {}
  const langs = CONTENT.settings.langs && CONTENT.settings.langs.length ? CONTENT.settings.langs : LANGS;
  /* langue automatique : la première langue du navigateur que le site propose (ca, es, fr, en), sinon la langue par défaut */
  const nav = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || '']).map(l => String(l).toLowerCase().slice(0, 2)).find(l => langs.includes(l));
  let qLang = ''; try { qLang = (new URLSearchParams(location.search).get('lang') || '').toLowerCase(); } catch (e) {}
  const rLang = ((window.HC_ROUTE || {}).lang || '').toLowerCase();   // /fr/ox/ : la page dit sa langue
  LANG = langs.includes(qLang) ? qLang : langs.includes(rLang) ? rLang : langs.includes(saved) ? saved : nav || (CONTENT.settings.defaultLang || langs[0]);   // ?lang=fr : lien vers une langue (référencement)
  SECTIONS = CONTENT.sections.filter(s => s.visible).map(def => ({ def }));
  if (!SECTIONS.length) { showError(new Error('aucune section visible')); return; }
  /* ?p=identifiant : l'adresse d'une fiche. On entre directement dans sa section, puis la fiche s'ouvre. */
  if (!PREVIEW) try {
    const OLD_IDS = { 'nouveau-contenu': 'immersive', 'nouveau-contenu-4': 'la-traversee-du-temps', 'nouveau-contenu-5': 'valentin-ducros', 'nouveau-contenu-7': 'laurent-delforge', 'fat-site-2008': 'les-debuts', 'nokia-navigator': 'les-debuts', 'lexus': 'les-debuts', 'pubs-interactives': 'les-debuts' };   // les anciennes adresses mènent toujours à la bonne fiche
    const q = new URLSearchParams(location.search).get('p') || (window.HC_ROUTE || {}).p, id = q && !CONTENT.posts.some(p => p.id === q) && OLD_IDS[q] ? OLD_IDS[q] : q, post = id && CONTENT.posts.find(p => p.id === id && p.published !== false && SECTIONS.some(x => x.def.id === p.section));
    if (post) { deepPost = post.id; history.replaceState(null, '', location.pathname + location.search + '#' + post.section); }
  } catch (e) {}
  setupStats();
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) setAnimationMode(false);
  toggleActivityButton(); renderTexts(); buildMenu(); setupHomeVideo(); if (PREVIEW) introRebuild(); introWatch(); introStage();
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
    warmShaders();   // pendant que l'accueil joue : la 3D sera prête à s'afficher sans à-coup au clic
    { const sp = document.getElementById('seo-page'); if (sp) sp.remove(); }   // le texte des robots : le site est prêt, il prend le relais
    if (clickedEnter || !isHomeHash() || (PREVIEW && PREVIEW.start)) enterToTheWeb();
    if (deepPost) { const id = deepPost, t0 = performance.now(), wait = setInterval(() => { if (inputEnabled || performance.now() - t0 > 8000) { clearInterval(wait); if (inputEnabled) goToPost(id); } }, 120); }
  } catch (err) { showError(err); }
})();

window.__hc = { P, STYLE, cam, camera, renderer, get hv() { return hv && { cell: hv.cell, floor: hv.floor, fps: Math.round(1000 / hv.interval), cost: +hv.cost.toFixed(1), tainted: hv.tainted }; }, get input() { return inputEnabled; }, get homeGone() { return homeGone; }, get content() { return CONTENT; }, get postsView() { return postsView; }, getToSectionView, openThatPost, closePost, goToPost, setLang, enter: () => enterBtn.click() };
