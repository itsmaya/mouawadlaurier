/*
 * Hand Coded - back-office.
 * Sections (objet 3D, disposition, type de carte, tags), contenus bilingues, modèles Collada, médias, réglages, historique.
 * Le dépôt GitHub sert de serveur : chaque « Publier » fait un seul commit, puis GitHub Pages remet le site à jour.
 * Le brouillon (textes et fichiers pas encore publiés) est gardé dans le navigateur tant qu'il n'est pas publié.
 */
import * as THREE from 'three';
import { ColladaLoader } from 'three/addons/loaders/ColladaLoader.js';
import { LANGS, LANG_NAMES, t, LAYOUTS, CARDS, CITIES, findCities, normalizeContent, emptyField, postsOf, slugify, uniqueId, escapeHTML, sanitizeHTML, htmlToText,
  resizeImage, extOf, blobToBase64, kvGet, kvSet, kvDel, GitHubBackend, DemoBackend,
  FONTS, TYPO, TYPO_PROPS, typoOf, googleFontURLs, typoFontLoads, ringLogoURL } from './store.js';

const SITE = window.HC_SITE ?? '../';
const INLINE = window.HC_ASSETS || null;
const DEMO = window.HC_MODE === 'demo';
const app = document.getElementById('app');

const S = {
  backend: null, cfg: null, content: null, base: '', head: null,
  staged: new Map(),   // chemin -> {blob, url} : fichiers ajoutés, pas encore publiés
  recent: new Map(),   // fichiers publiés pendant cette session (GitHub Pages met une minute à les servir)
  deletes: new Set(),  // fichiers du dépôt à supprimer au prochain « Publier »
  view: 'sections', sel: { section: null, post: null, model: null }, filter: { section: null, tag: '', q: '', status: '' },
  refreshList: null, draftKey: 'draft:demo:v6', busy: false,
};

/* ================================================================ Petits outils DOM */
const PROPS = new Set(['value', 'checked', 'disabled', 'hidden', 'multiple', 'selected', 'indeterminate', 'open']);
function h(tag, props, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(props || {})) {
    if (v == null || v === false) continue;
    if (k === 'class') el.className = v;
    else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
    else if (k === 'html') el.innerHTML = v;
    else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
    else if (PROPS.has(k)) el[k] = v;
    else el.setAttribute(k, v === true ? '' : v);
  }
  kids.flat(Infinity).forEach(c => { if (c == null || c === false) return; el.append(c instanceof Node ? c : document.createTextNode(String(c))); });
  return el;
}
function fill(el, ...kids) { el.replaceChildren(...kids.flat(Infinity).filter(k => k != null && k !== false)); return el; }
const svg = markup => { const d = document.createElement('div'); d.innerHTML = markup.trim(); return d.firstChild; };
const ytIdOf = s => { const m = /(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(s || ''); return m && m[1]; };
const mediaKindOf = s => (ytIdOf(s) ? 'youtube' : /vimeo\.com\/(?:video\/)?\d+/.test(s || '') ? 'vimeo' : /\.(mp4|webm|mov)(\?|#|$)/i.test(s || '') ? 'video' : 'image');
const defaultLogo = () => ringLogoURL((S.content && S.content.settings.accent) || '#ffcc00', S.content && S.content.settings);   // dessiné comme sur le site (Typographie › Logo rond)
const fr = f => t(f, 'fr') || t(f, 'en');
const rand = () => Math.random().toString(36).slice(2, 6);
const move = (arr, from, to) => { const [x] = arr.splice(from, 1); arr.splice(to, 0, x); };
const fmtSize = n => n == null ? '' : n < 1024 ? n + ' o' : n < 1048576 ? Math.round(n / 1024) + ' Ko' : (n / 1048576).toFixed(1) + ' Mo';
const initials = s => String(s || '').split(/[\s&/]+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('') || '·';
function btn(label, onclick, cls = '', extra = {}) { return h('button', { type: 'button', class: 'btn ' + cls, onclick, ...extra }, label); }

/* Notifications et fenêtres (pas de alert/confirm/prompt natifs, bloqués dans certains cadres) */
const toasts = h('div', { class: 'toasts', role: 'status', 'aria-live': 'polite' });
document.body.appendChild(toasts);
function toast(msg, kind = 'ok', ms = 4200) { const el = h('div', { class: 'toast ' + kind }, msg); toasts.appendChild(el); setTimeout(() => el.remove(), ms); }
function modal(title, body, buttons) {
  return new Promise(resolve => {
    const prev = document.activeElement;
    const close = v => { bg.remove(); document.removeEventListener('keydown', onKey); if (prev && prev.focus) prev.focus(); resolve(v); };
    const onKey = e => { if (e.key === 'Escape') close(null); };
    const foot = h('div', { class: 'mf' }, buttons.map(b => btn(b.label, () => close(typeof b.value === 'function' ? b.value() : b.value), b.cls || '')));
    const box = h('div', { class: 'modal', role: 'dialog', 'aria-modal': 'true', 'aria-label': title }, h('h2', null, title), h('div', { class: 'mb' }, body), foot);
    const bg = h('div', { class: 'modal-bg', onmousedown: e => { if (e.target === bg) close(null); } }, box);
    document.body.appendChild(bg); document.addEventListener('keydown', onKey);
    const first = box.querySelector('input, textarea, select') || foot.lastChild; if (first) first.focus();
  });
}
const confirmBox = (title, text, ok = 'Confirmer', cls = 'dark') => modal(title, h('p', null, text), [{ label: 'Annuler', value: false, cls: 'ghost' }, { label: ok, value: true, cls }]);
async function askText(title, label, value = '', ok = 'OK') {
  const input = h('input', { type: 'text', value });
  input.addEventListener('keydown', e => { if (e.key === 'Enter') e.target.closest('.modal').querySelector('.mf .btn:last-child').click(); });
  return modal(title, h('label', { class: 'f' }, h('span', null, label), input), [{ label: 'Annuler', value: null, cls: 'ghost' }, { label: ok, value: () => input.value, cls: 'dark' }]);
}

/* ================================================================ Fichiers */
function fileURL(path) {
  if (!path) return '';
  if (/^(https?:|data:|blob:)/.test(path)) return path;
  if (INLINE && INLINE[path] && INLINE[path].startsWith('data:')) return INLINE[path];
  const s = S.staged.get(path) || S.recent.get(path); if (s) return s.url;
  if (S.backend && S.backend.kind === 'demo') return S.backend.url(path);
  return SITE + path;
}
function stageFile(path, blob) {
  const old = S.staged.get(path); if (old) URL.revokeObjectURL(old.url);
  S.staged.set(path, { blob, url: URL.createObjectURL(blob) }); S.deletes.delete(path);
}
function usedPaths(c = S.content) {
  const set = new Set();
  c.posts.forEach(p => { [p.thumb, p.thumbBack].forEach(x => x && set.add(x)); p.media.forEach(m => m && m.src && set.add(m.src)); });
  c.models.forEach(m => { if (m.file) { set.add(m.file); (m.textures || []).forEach(tx => set.add(m.file.replace(/[^/]+$/, '') + tx)); } });
  if (c.settings.logo) set.add(c.settings.logo);
  return new Set([...set].filter(p => !/^(https?:|data:|blob:)/.test(p)));
}
const IMG_EXT = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif', 'image/svg+xml': 'svg' };
async function prepareUpload(file, folder, kind) {   // kind : thumb | media | logo
  const isVid = /^video\/(mp4|webm)$/.test(file.type) || /\.(mp4|webm)$/i.test(file.name);
  if (isVid) {
    if (kind !== 'media') throw new Error('Ici, seules les images sont acceptées.');
    if (file.size > 95e6) throw new Error(`${file.name} pèse ${fmtSize(file.size)} : GitHub refuse les fichiers de plus de 100 Mo. Réduis la vidéo (720p, H.264) avant de l'envoyer.`);
    if (file.size > 40e6) toast(`${file.name} pèse ${fmtSize(file.size)}. Elle passera, mais la page sera lente à charger : vise moins de 20 Mo.`, 'ok', 7000);
    return { path: `${folder}/${slugify(file.name.replace(/\.[^.]+$/, ''))}-${rand()}.${extOf(file.name) || 'mp4'}`, blob: file };
  }
  if (!/^image\//.test(file.type)) throw new Error(`${file.name} : format non reconnu (images JPG, PNG, WebP, GIF, SVG ou vidéos MP4, WebM).`);
  const max = kind === 'media' ? [3200, 1000] : kind === 'logo' ? [600, 600] : [1400, 1400];
  const blob = await resizeImage(file, max[0], max[1]);
  const ext = IMG_EXT[blob.type] || extOf(file.name) || 'jpg';
  return { path: `${folder}/${slugify(file.name.replace(/\.[^.]+$/, ''))}-${rand()}.${ext}`, blob };
}
function filePicker(accept, multiple, cb) { const i = h('input', { type: 'file', accept, multiple }); i.addEventListener('change', () => cb([...i.files])); i.click(); }
function dropTarget(el, cb) {
  el.addEventListener('dragover', e => { if (![...e.dataTransfer.types].includes('Files')) return; e.preventDefault(); el.classList.add('over'); });
  el.addEventListener('dragleave', () => el.classList.remove('over'));
  el.addEventListener('drop', e => { if (!e.dataTransfer.files.length) return; e.preventDefault(); el.classList.remove('over'); cb([...e.dataTransfer.files]); });
}

/* ================================================================ Brouillon, état, publication */
let saveTimer = null, statusTimer = null;
function change(opts = {}) {
  if (opts.after) opts.after();
  if (S.onChange) S.onChange();
  clearTimeout(saveTimer); saveTimer = setTimeout(saveDraft, 600);
  clearTimeout(statusTimer); statusTimer = setTimeout(updateStatus, 200);
  if (opts.list && S.refreshList) S.refreshList();
  if (opts.nav) renderNav();
}
function pendingFiles() { const used = usedPaths(); return [...S.staged.keys()].filter(p => used.has(p)); }
function isDirty() { return JSON.stringify(S.content) !== S.base || S.deletes.size > 0 || pendingFiles().length > 0; }
async function saveDraft() {
  try {
    if (!isDirty()) { await kvDel(S.draftKey); return; }
    const used = usedPaths();
    await kvSet(S.draftKey, { content: S.content, base: S.base, head: S.head, at: Date.now(), deletes: [...S.deletes],
      staged: [...S.staged].filter(([p]) => used.has(p)).map(([path, s]) => ({ path, blob: s.blob })) });
  } catch (e) { console.warn('brouillon non sauvegardé', e); }
}
async function restoreDraft() {
  const d = await kvGet(S.draftKey);
  if (!d || !d.content) return;
  if (d.base !== S.base) {
    const keep = await modal('Un brouillon attend', h('div', null,
      h('p', null, `Tu as un brouillon non publié du ${new Date(d.at).toLocaleString('fr-FR')}.`),
      h('p', null, "Le site a été publié depuis (peut-être depuis un autre ordinateur). Si tu reprends ce brouillon, sa publication remplacera ces changements.")),
      [{ label: 'Partir de la version en ligne', value: false, cls: 'ghost' }, { label: 'Reprendre mon brouillon', value: true, cls: 'dark' }]);
    if (!keep) { await kvDel(S.draftKey); return; }
  }
  S.content = normalizeContent(d.content);
  (d.staged || []).forEach(f => stageFile(f.path, f.blob));
  (d.deletes || []).forEach(p => S.deletes.add(p));
  toast('Brouillon non publié retrouvé : rien n’est perdu.');
}
function changeSummary() {
  const base = JSON.parse(S.base), cur = S.content, out = [];
  const diff = (a, b, key, name, fem) => {
    const e = fem ? 'ée' : 'é';
    const A = new Map(a.map(x => [x[key], JSON.stringify(x)])), B = new Map(b.map(x => [x[key], JSON.stringify(x)]));
    const add = [...B.keys()].filter(k => !A.has(k)).length, del = [...A.keys()].filter(k => !B.has(k)).length, mod = [...B.keys()].filter(k => A.has(k) && A.get(k) !== B.get(k)).length;
    const n = k => (k > 1 ? name + 's' : name), ag = k => (k > 1 ? e + 's' : e);
    if (add) out.push(`${add} ${n(add)} ajout${ag(add)}`); if (mod) out.push(`${mod} ${n(mod)} modifi${ag(mod)}`); if (del) out.push(`${del} ${n(del)} supprim${ag(del)}`);
  };
  diff(base.sections, cur.sections, 'id', 'section', true); diff(base.posts, cur.posts, 'id', 'contenu'); diff(base.models, cur.models, 'id', 'modèle');
  if (JSON.stringify(base.settings) !== JSON.stringify(cur.settings)) out.push('réglages modifiés');
  const ids = x => x.sections.map(s => s.id);
  if (JSON.stringify(ids(base)) !== JSON.stringify(ids(cur)) && JSON.stringify(ids(base).slice().sort()) === JSON.stringify(ids(cur).slice().sort())) out.push('ordre des sections');
  const nf = pendingFiles().length; if (nf) out.push(`${nf} fichier${nf > 1 ? 's' : ''} à envoyer`);
  if (S.deletes.size) out.push(`${S.deletes.size} fichier${S.deletes.size > 1 ? 's' : ''} à supprimer`);
  return out;
}
function orphanFiles() {   // fichiers publiés que plus rien n'utilise après ces changements
  const before = usedPaths(JSON.parse(S.base)), now = usedPaths();
  const builtin = new Set(JSON.parse(S.base).models.filter(m => m.builtin).flatMap(m => [m.file, ...(m.textures || []).map(x => m.file.replace(/[^/]+$/, '') + x)]));
  return [...before].filter(p => !now.has(p) && !builtin.has(p) && /^(media|models)\//.test(p) && !S.staged.has(p));
}
async function publish() {
  if (S.busy) return;
  if (!isDirty()) { toast('Rien de nouveau à publier.'); return; }
  const summary = changeSummary(), orphans = orphanFiles();
  const msg = h('input', { type: 'text', value: summary.length ? summary.slice(0, 3).join(', ').replace(/^./, c => c.toUpperCase()) : 'Mise à jour du contenu' });
  const cleanup = h('input', { type: 'checkbox', checked: true });
  const body = h('div', null,
    h('ul', null, summary.map(s => h('li', null, s))),
    h('label', { class: 'f' }, h('span', null, 'Note pour l’historique'), msg),
    orphans.length ? h('label', { class: 'switch' }, cleanup, `Supprimer aussi ${orphans.length} ancien${orphans.length > 1 ? 's' : ''} fichier${orphans.length > 1 ? 's' : ''} qui ne sert plus`) : null,
    S.backend.kind === 'github' ? h('p', { class: 'hint' }, 'Le site se met à jour 1 à 2 minutes après la publication.') : h('p', { class: 'hint' }, 'Mode démo : la publication reste dans ce navigateur.'));
  const go = await modal('Publier sur le site', body, [{ label: 'Annuler', value: false, cls: 'ghost' }, { label: 'Publier', value: true, cls: 'primary' }]);
  if (!go) return;
  S.busy = true; updateStatus('Publication en cours…');
  try {
    if (S.backend.kind === 'github') {
      const head = await headSha();
      if (S.head && head !== S.head) {
        const remote = await S.backend.loadAt(head);
        if (JSON.stringify(remote) !== S.base) {
          const force = await confirmBox('Le site a changé entre-temps', 'Quelqu’un (ou toi, depuis un autre onglet) a publié depuis que tu as ouvert le back-office. Publier maintenant remplacera ces changements par les tiens.', 'Publier quand même', 'danger');
          if (!force) { S.busy = false; updateStatus(); return; }
        }
      }
    }
    const used = usedPaths();
    const files = [...S.staged].filter(([p]) => used.has(p)).map(([path, s]) => ({ path, blob: s.blob }));
    if (S.backend.kind === 'github') {   // copies en JavaScript pour ouvrir le site en local (double-clic sur index.html)
      files.push({ path: 'content/content.js', text: 'window.HC_CONTENT = ' + JSON.stringify(S.content) + ';\n' });
      if (JSON.stringify(JSON.parse(S.base).models) !== JSON.stringify(S.content.models)) { updateStatus('Préparation des modèles 3D…'); files.push({ path: 'models/models.js', text: await modelsJS() }); }
    }
    const dels = new Set([...S.deletes].filter(p => !used.has(p)));
    if (orphans.length && cleanup.checked) orphans.forEach(p => dels.add(p));
    const sha = await S.backend.publish(S.content, [...files, ...[...dels].map(path => ({ path, delete: true }))], msg.value.trim() || 'Mise à jour du contenu');
    S.base = JSON.stringify(S.content); if (S.backend.kind === 'github') S.head = sha;
    files.forEach(f => { S.recent.set(f.path, S.staged.get(f.path)); S.staged.delete(f.path); });
    S.staged.forEach(s => URL.revokeObjectURL(s.url)); S.staged.clear(); S.deletes.clear(); S.files = null;
    await kvDel(S.draftKey);
    toast(S.backend.kind === 'github' ? 'Publié. Le site sera à jour dans une minute ou deux.' : 'Publié dans la démo.');
  } catch (err) {
    console.error(err); toast('La publication a échoué : ' + humanError(err), 'bad', 9000);
  } finally { S.busy = false; updateStatus(); renderNav(); if (S.view === 'history' || S.view === 'media') renderMain(); }
}
async function modelsJS() {
  const out = {}, mime = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', gif: 'image/gif', tga: 'image/x-tga', webp: 'image/webp' };
  for (const m of S.content.models) {
    const dir = m.file.replace(/[^/]+$/, '');
    for (const p of [m.file, ...(m.textures || []).map(x => dir + x)]) {
      const r = await fetch(fileURL(p)); if (!r.ok) throw new Error(p + ' : ' + r.status);
      out[p] = /\.dae$/i.test(p) ? await r.text() : `data:${mime[extOf(p)] || 'application/octet-stream'};base64,${await blobToBase64(await r.blob())}`;
    }
  }
  return 'window.HC_ASSETS = ' + JSON.stringify(out) + ';\n';
}
async function headSha() { const r = await S.backend.req(`${S.backend.repoPath}/git/ref/heads/${encodeURIComponent(S.backend.cfg.branch)}`); return r.object.sha; }
async function revertAll() {
  if (!isDirty()) return;
  if (!await confirmBox('Annuler les modifications', 'Tout ce qui n’a pas été publié sera perdu : textes, images ajoutées, suppressions.', 'Tout annuler', 'danger')) return;
  S.content = normalizeContent(JSON.parse(S.base)); S.staged.forEach(s => URL.revokeObjectURL(s.url)); S.staged.clear(); S.deletes.clear();
  await kvDel(S.draftKey); render(); toast('Retour à la version en ligne.');
}
function humanError(err) {
  const s = err && err.status;
  if (s === 401) return 'jeton refusé (expiré, révoqué ou mal copié).';
  if (s === 403) return err.message.includes('écrire') ? err.message : 'accès refusé. Vérifie que le jeton a « Contents : Read and write » sur ce dépôt.';
  if (s === 404) return 'dépôt ou branche introuvable, ou le jeton n’a pas accès à ce dépôt.';
  if (s === 409) return 'conflit sur la branche, recharge la page et réessaie.';
  if (s === 422) return 'GitHub a refusé un fichier (trop lourd ?). ' + (err.message || '');
  if (err instanceof TypeError) return 'pas de connexion à GitHub (réseau ?).';
  return err && err.message ? err.message : String(err);
}

/* ================================================================ Modèles 3D : chargement et vignettes */
const daeCache = new Map();
async function daeText(path) {
  if (INLINE && INLINE[path] && !INLINE[path].startsWith('data:')) return INLINE[path];
  if (!daeCache.has(path) || S.staged.has(path)) {
    const p = fetch(fileURL(path)).then(r => { if (!r.ok) throw new Error(path + ' : ' + r.status); return r.text(); });
    if (S.staged.has(path)) return p;
    daeCache.set(path, p); p.catch(() => daeCache.delete(path));
  }
  return daeCache.get(path);
}
const manager = new THREE.LoadingManager();
manager.setURLModifier(u => (/^(blob:|data:|https?:)/.test(u) ? u : fileURL(u.replace(/^\.\//, '').replace(/\/\.\//g, '/'))));
function buildModel(text, m) {   // mêmes règles que le site public
  const collada = new ColladaLoader(manager).parse(text, m.file.slice(0, m.file.lastIndexOf('/') + 1));
  const shape = collada.scene, holder = new THREE.Group(); holder.add(shape);
  let meshes = 0;
  shape.traverse(o => {
    if (!o.isMesh) return; meshes++;
    const conv = mat => {
      const map = mat.map || mat.emissiveMap || null;
      if (map) return new THREE.MeshBasicMaterial({ map });
      if (m.untextured === 'white') return new THREE.MeshLambertMaterial({ color: 0xf2f2f2 });
      if (m.untextured === 'black') return new THREE.MeshLambertMaterial({ color: 0x222222 });
      return new THREE.MeshBasicMaterial({ color: 0xf1b800, wireframe: true });
    };
    o.material = Array.isArray(o.material) ? o.material.map(conv) : conv(o.material);
  });
  if (!meshes) throw new Error('aucune forme 3D dans ce fichier');
  if (m.scaleMode === 'fit') {
    holder.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(holder), size = box.getSize(new THREE.Vector3());
    holder.scale.setScalar((m.height || 420) / Math.max(size.y, 1e-6)); holder.updateMatrixWorld(true);
    const b2 = new THREE.Box3().setFromObject(holder), c = b2.getCenter(new THREE.Vector3());
    holder.position.set(-c.x, -b2.min.y, -c.z);
  } else {
    shape.scale.setScalar(100); holder.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(holder);
    if (box.max.y - box.min.y > 800) holder.scale.setScalar(800 / (box.max.y - box.min.y));
  }
  const turn = new THREE.Group(); turn.rotation.y = (m.rotationY || 0) * Math.PI / 180; turn.add(holder);
  return turn;
}
const viewer = (() => {
  let renderer = null;
  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xffffff, 0xd8d8d8, 2.2));
  const sun = new THREE.DirectionalLight(0xffffff, 1.2); sun.position.set(300, 800, 500); scene.add(sun);
  const camera = new THREE.PerspectiveCamera(30, 4 / 3, 1, 20000);
  const spin = new THREE.Group(); scene.add(spin);
  let current = null, host = null, dragging = false, lastX = 0, vel = 0.004, snapCache = new Map(), queue = Promise.resolve();
  function ensure() {
    if (renderer) return renderer;
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)); renderer.setClearColor(0xffffff, 0);
    const c = renderer.domElement;
    c.addEventListener('pointerdown', e => { dragging = true; lastX = e.clientX; c.setPointerCapture(e.pointerId); });
    c.addEventListener('pointermove', e => { if (!dragging) return; vel = (e.clientX - lastX) * 0.01; spin.rotation.y += vel; lastX = e.clientX; });
    c.addEventListener('pointerup', () => { dragging = false; });
    requestAnimationFrame(loop);
    return renderer;
  }
  function frameObject(obj) {
    const box = new THREE.Box3().setFromObject(obj), size = box.getSize(new THREE.Vector3()), c = box.getCenter(new THREE.Vector3());
    const r = Math.max(size.y * 0.8, Math.min(size.x, size.z) * 0.55, Math.max(size.x, size.z) * 0.38) || 100;   // cadré sur l'objet plus que sur son sol
    const d = r / Math.tan(15 * Math.PI / 180);
    camera.position.set(0, c.y + r * 0.55, d); camera.near = d / 50; camera.far = d * 10; camera.lookAt(0, c.y, 0); camera.updateProjectionMatrix();
  }
  function setObject(obj) { spin.clear(); spin.rotation.y = 0.6; if (obj) { spin.add(obj); frameObject(spin); } current = obj; }
  function loop() {
    requestAnimationFrame(loop);
    if (!host || !host.isConnected || !current) return;
    const w = host.clientWidth, hh = host.clientHeight; if (!w || !hh) return;
    const c = renderer.domElement;
    if (c.parentNode !== host) host.prepend(c);
    if (c.width !== Math.round(w * renderer.getPixelRatio()) || c.height !== Math.round(hh * renderer.getPixelRatio())) { renderer.setSize(w, hh, false); camera.aspect = w / hh; camera.updateProjectionMatrix(); }
    if (!dragging) { spin.rotation.y += vel; vel += (0.004 - vel) * 0.03; }
    renderer.render(scene, camera);
  }
  return {
    async show(el, m, msgEl) {
      ensure(); host = el; setObject(null);
      if (msgEl) msgEl.textContent = 'Chargement du modèle…';
      try { const obj = buildModel(await daeText(m.file), m); if (host !== el) return; setObject(obj); if (msgEl) msgEl.textContent = 'Glisse pour tourner autour.'; }
      catch (e) { if (msgEl) msgEl.textContent = 'Impossible d’afficher ce modèle : ' + e.message; }
    },
    async snapshot(m) {   // vignette fixe pour les listes
      const key = m.file + JSON.stringify([m.scaleMode, m.height, m.rotationY, m.untextured]) + (S.staged.has(m.file) ? 's' : '');
      if (snapCache.has(key)) return snapCache.get(key);
      const p = queue.then(async () => {   // une vignette à la fois : elles partagent le même rendu
        ensure();
        const obj = buildModel(await daeText(m.file), m);
        const keep = current, keepRot = spin.rotation.y;
        setObject(obj); spin.rotation.y = 0.6;
        renderer.setSize(320, 200, false); camera.aspect = 1.6; camera.updateProjectionMatrix();
        await new Promise(r => setTimeout(r, 400));   // les textures arrivent un peu après
        renderer.render(scene, camera);
        const url = renderer.domElement.toDataURL('image/png');
        setObject(keep); spin.rotation.y = keepRot; renderer.setSize(1, 1, false);
        return url;
      });
      queue = p.catch(() => {});
      snapCache.set(key, p); p.catch(() => snapCache.delete(key));
      return p;
    },
  };
})();
function modelPic(m) {
  const pic = h('div', { class: 'pic' }, h('span', { style: { color: '#aaa', fontSize: '12px' } }, '…'));
  viewer.snapshot(m).then(u => fill(pic, h('img', { src: u, alt: '' }))).catch(() => fill(pic, h('span', { style: { color: '#c0362c', fontSize: '12px', padding: '8px' } }, 'aperçu indisponible')));
  return pic;
}

/* ================================================================ Dessins des styles et des cartes */
function layoutSVG(kind) {
  const obj = '<path d="M80 62 l9 6 l-3 11 h-12 l-3 -11z" fill="#d8d8d8" stroke="#bdbdbd" stroke-width=".6"/>';
  const card = (x, y, w, hh, op = 1, fill = '#151515') => `<rect x="${(x - w / 2).toFixed(1)}" y="${(y - hh / 2).toFixed(1)}" width="${w.toFixed(1)}" height="${hh.toFixed(1)}" fill="${fill}" opacity="${op.toFixed(2)}"/>`;
  const ln = (x1, y1, x2, y2) => `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#cfcfcf" stroke-width=".7"/>`;
  let out = '';
  const ring = (n, rx, ry, cy, size, lines, lift = 0) => {
    const items = [];
    for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2, d = (Math.cos(a) + 1) / 2; items.push({ x: 80 + rx * Math.sin(a), y: cy + ry * Math.cos(a) - i * lift, d }); }
    items.sort((a, b) => a.d - b.d).forEach(it => { if (lines) out += ln(it.x, it.y, 80, 70); out += card(it.x, it.y, size[0] * (.6 + .4 * it.d), size[1] * (.6 + .4 * it.d), .3 + .7 * it.d); });
  };
  switch (kind) {
    case 'carousel': out += obj; ring(8, 60, 13, 40, [22, 14], true); break;
    case 'arc': for (let i = 0; i < 7; i++) { const a = Math.PI * (i + 1) / 8; out += card(80 - 62 * Math.cos(a), 74 - 58 * Math.sin(a), 16, 11, 1); } out += obj; break;
    case 'fan': out += obj; for (let i = 0; i < 4; i++) { const a = Math.PI * (i + 1) / 5; out += ln(80 - 48 * Math.cos(a), 60 - 40 * Math.sin(a), 80, 66) + card(80 - 48 * Math.cos(a), 60 - 40 * Math.sin(a), 24, 7, .35); }
      for (let i = 0; i < 4; i++) { const a = Math.PI * (i + 1) / 5; out += ln(80 - 64 * Math.cos(a), 66 - 50 * Math.sin(a), 80, 66) + card(80 - 64 * Math.cos(a), 66 - 50 * Math.sin(a), 30, 8, 1, '#333'); } break;
    case 'map': out += '<ellipse cx="80" cy="78" rx="70" ry="13" fill="#ececec"/><path d="M28 77 q8 -6 18 -2 t20 0 q6 -4 12 1 M92 75 q10 -5 22 -1 t18 3" stroke="#cfcfcf" stroke-width="3" fill="none" stroke-linecap="round"/>';
      [[48, 76, 46, 30], [100, 75, 104, 22], [124, 79, 132, 42]].forEach(([px, py, cx, cy]) => { out += ln(px, py, cx, cy) + `<circle cx="${px}" cy="${py}" r="2" fill="#f1b800"/>` + card(cx, cy, 15, 14, 1, '#fff').replace('/>', ' stroke="#151515" stroke-width=".8"/>') + card(cx - 20, cy, 18, 14, 1); }); break;
    case 'spiral': out += obj; { const items = []; for (let i = 0; i < 9; i++) { const a = i * 0.95, d = (Math.cos(a) + 1) / 2; items.push({ x: 80 + 48 * Math.sin(a), y: 66 - i * 6.6, d }); } items.sort((a, b) => a.d - b.d).forEach(it => { out += ln(it.x, it.y, 80, it.y) + card(it.x, it.y, 18 * (.6 + .4 * it.d), 12 * (.6 + .4 * it.d), .3 + .7 * it.d); }); } break;
    case 'wall': for (let r = 0; r < 3; r++) for (let c = 0; c < 5; c++) out += card(32 + c * 24, 16 + r * 17, 20, 13, .9); out += obj; break;
    default: out += obj;
  }
  return `<svg viewBox="0 0 160 100" aria-hidden="true">${out}</svg>`;
}
function cardSVG(kind) {
  const a = 'var(--accent)';
  switch (kind) {
    case 'image': return `<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="32" y="18" width="96" height="63" fill="#111"/><rect x="40" y="26" width="8" height="1.5" fill="${a}"/><rect x="40" y="32" width="54" height="5" fill="#fff"/><rect x="40" y="41" width="36" height="3" fill="#777"/><rect x="40" y="72" width="34" height="2.5" fill="${a}"/></svg>`;
    case 'portrait': return `<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="55" y="25" width="50" height="50" fill="#1b1b1b"/><text x="80" y="57" text-anchor="middle" font-family="Georgia" font-size="20" fill="#fff">MM</text><rect x="75" y="64" width="10" height="1.4" fill="${a}"/></svg>`;
    case 'text': return `<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="20" y="36" width="120" height="30" fill="#333"/><rect x="27" y="41" width="7" height="1.4" fill="${a}"/><rect x="27" y="46" width="80" height="5" fill="#fff"/><rect x="27" y="54" width="54" height="5" fill="#fff"/></svg>`;
    case 'place': return `<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="52" y="24" width="56" height="52" fill="#fff" stroke="#ccc"/><circle cx="80" cy="46" r="13" fill="#111"/><circle cx="80" cy="46" r="3.5" fill="${a}"/><rect x="66" y="66" width="28" height="3" fill="#444"/></svg>`;
  }
  return '';
}
function tiles(options, current, onPick, label) {
  const box = h('div', { class: 'tiles', role: 'radiogroup', 'aria-label': label });
  const draw = cur => {
    fill(box, ...options.map(o => h('button', { type: 'button', class: 'tile', role: 'radio', 'aria-checked': String(o.value === cur), onclick: () => { onPick(o.value); draw(o.value); } },
      o.pic || h('div', { class: 'pic' }), h('div', { class: 'cap' }, h('b', null, o.label), o.hint ? h('span', null, o.hint) : null))));
  };
  draw(current); return box;
}

/* ================================================================ Champs */
function field(label, input, hint) { return h('label', { class: 'f' }, h('span', null, label), input, hint ? h('p', { class: 'hint' }, hint) : null); }
function textInput(get, set, opts = {}) {
  const i = h('input', { type: opts.type || 'text', value: get() ?? '', placeholder: opts.placeholder, min: opts.min, max: opts.max, step: opts.step, spellcheck: opts.spell === false ? 'false' : null });
  i.addEventListener('input', () => { set(opts.type === 'number' ? (i.value === '' ? '' : +i.value) : i.value); change(opts); });
  if (opts.onBlur) i.addEventListener('blur', () => opts.onBlur(i));
  return i;
}
const siteLangs = () => { const l = (S.content && S.content.settings.langs) || LANGS; return LANGS.filter(x => l.includes(x)); };   // langues activées, dans l'ordre en, fr, ca, es
function pairInput(label, obj, key, opts = {}) {   // un champ par langue du site
  if (!obj[key] || typeof obj[key] !== 'object') obj[key] = Object.fromEntries(LANGS.map(l => [l, obj[key] || '']));
  const one = l => h('div', { class: 'lang', 'data-l': l.toUpperCase() }, textInput(() => obj[key][l] ?? '', v => { obj[key][l] = v; }, { ...opts, placeholder: opts.placeholder ? opts.placeholder[l] : LANG_NAMES[l] }));
  return h('div', { class: 'f' }, h('span', { class: 'lbl' }, label), h('div', { class: 'pair' }, siteLangs().map(one)), opts.hint ? h('p', { class: 'hint' }, opts.hint) : null);
}
function toggle(label, get, set, opts = {}) {
  const i = h('input', { type: 'checkbox', checked: !!get(), role: 'switch' });
  i.addEventListener('change', () => { set(i.checked); change(opts); });
  return h('label', { class: 'switch' }, i, label);
}
function selectInput(options, get, set, opts = {}) {
  const s = h('select', null, options.map(o => h('option', { value: o.value, selected: o.value === get() }, o.label)));
  s.addEventListener('change', () => { set(s.value); change(opts); });
  return s;
}
/* Éditeur de texte riche, minimal : gras, italique, lien, liste, intertitre. Le HTML est assaini à chaque frappe. */
function richText(fieldObj, placeholder) {
  let lang = siteLangs().includes('fr') ? 'fr' : siteLangs()[0];
  const ed = h('div', { class: 'rte', contenteditable: 'true', 'data-ph': placeholder, role: 'textbox', 'aria-multiline': 'true' });
  const foot = h('div', { class: 'rte-foot' });
  const tabs = h('div', { class: 'lang-tabs', role: 'tablist' });
  const status = () => { const w = l => htmlToText(fieldObj[l]).join(' ').split(/\s+/).filter(Boolean).length; fill(foot, h('span', null, `${w(lang)} mots`), h('span', null, siteLangs().map(l => `${l.toUpperCase()} ${w(l) ? '✓' : '· à écrire'}`).join('   '))); };
  const load = () => { ed.innerHTML = sanitizeHTML(fieldObj[lang]); tabs.querySelectorAll('button').forEach(b => b.setAttribute('aria-selected', String(b.dataset.l === lang))); status(); };
  siteLangs().forEach(l => tabs.appendChild(h('button', { type: 'button', role: 'tab', 'data-l': l, onclick: () => { lang = l; load(); } }, l.toUpperCase())));
  ed.addEventListener('input', () => { fieldObj[lang] = sanitizeHTML(ed.innerHTML); status(); change(); });
  ed.addEventListener('paste', e => { e.preventDefault(); const txt = e.clipboardData.getData('text/plain'); document.execCommand('insertText', false, txt); });
  ed.addEventListener('focus', () => { try { document.execCommand('defaultParagraphSeparator', false, 'p'); } catch (e) {} });
  ed.addEventListener('keydown', e => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); addLink(); } });
  const exec = (cmd, val) => { ed.focus(); document.execCommand(cmd, false, val); ed.dispatchEvent(new Event('input')); };
  async function addLink() {
    const sel = window.getSelection(); const range = sel.rangeCount ? sel.getRangeAt(0).cloneRange() : null;
    const u = await askText('Ajouter un lien', 'Adresse (https://… ou mailto:…)', 'https://', 'Ajouter');
    if (!u || u === 'https://') return;
    ed.focus(); if (range) { sel.removeAllRanges(); sel.addRange(range); }
    if (range && range.collapsed) document.execCommand('insertText', false, u.replace(/^https?:\/\/|^mailto:/, ''));
    if (range && range.collapsed) { const r2 = sel.getRangeAt(0); r2.setStart(r2.startContainer, Math.max(0, r2.startOffset - u.replace(/^https?:\/\/|^mailto:/, '').length)); }
    exec('createLink', /^(https?:|mailto:)/.test(u) ? u : 'https://' + u);
  }
  const tb = (label, title, fn) => h('button', { type: 'button', title, 'aria-label': title, onmousedown: e => e.preventDefault(), onclick: fn }, label);
  const bar = h('div', { class: 'rte-bar' },
    tb(h('b', null, 'G'), 'Gras', () => exec('bold')), tb(h('i', null, 'I'), 'Italique', () => exec('italic')),
    h('span', { class: 'sep' }), tb('Lien', 'Lien (Ctrl+K)', addLink), tb('• Liste', 'Liste à puces', () => exec('insertUnorderedList')), tb('Intertitre', 'Intertitre', () => exec('formatBlock', 'h3')), tb('¶', 'Paragraphe normal', () => exec('formatBlock', 'p')),
    h('span', { class: 'sep' }), tb('Effacer', 'Retirer la mise en forme', () => { exec('removeFormat'); exec('unlink'); }), tabs);
  load();
  return h('div', { class: 'rte-wrap' }, bar, ed, foot);
}

/* ================================================================ Ossature */
const VIEWS = [
  ['sections', 'Sections'], ['posts', 'Contenus'], ['models', 'Modèles 3D'], ['media', 'Médias'], ['settings', 'Réglages'], ['history', 'Historique'],
];
let topEl, navEl, mainEl, statusEl;
function render() {
  fill(app, );
  topEl = h('header', { class: 'top' }); navEl = h('nav', { class: 'nav', 'aria-label': 'Back-office' }); mainEl = h('main', { class: 'main', id: 'main' });
  app.appendChild(h('div', { class: 'shell' }, topEl, navEl, mainEl));
  const logo = S.content.settings.logo ? fileURL(S.content.settings.logo) : defaultLogo();
  statusEl = h('div', { class: 'status', 'aria-live': 'polite' });
  topEl.append(
    h('div', { class: 'brand' }, h('img', { src: logo, alt: '' }), h('span', null, S.content.settings.name || 'Hand Coded'), h('small', null, S.backend.kind === 'demo' ? 'Back-office · démo' : 'Back-office')),
    statusEl,
    h('div', { class: 'acts' }, btn('Aperçu', () => openPreview(), 'ghost', { title: 'Voir le site avec les modifications non publiées' }), btn('Publier', publish, 'primary', { title: 'Ctrl+S' })));
  renderNav(); updateStatus(); renderMain();
}
function renderNav() {
  if (!navEl) return;
  const c = S.content;
  const counts = { sections: c.sections.length, posts: c.posts.length, models: c.models.length };
  fill(navEl, 
    h('ul', null, VIEWS.map(([id, label]) => h('li', null, h('button', { type: 'button', 'aria-current': String(S.view === id), onclick: () => go(id) }, label, counts[id] != null ? h('small', null, counts[id]) : null)))),
    h('div', { class: 'foot' },
      S.backend.kind === 'github' ? h('a', { href: `https://github.com/${S.cfg.owner}/${S.cfg.repo}`, target: '_blank', rel: 'noopener' }, `${S.cfg.owner}/${S.cfg.repo}`) : null,
      window.HC_SITE_HTML ? h('a', { href: '#', onclick: e => { e.preventDefault(); openPreview(); } }, 'Voir le site') : h('a', { href: SITE + 'index.html', target: '_blank', rel: 'noopener' }, 'Voir le site en ligne ↗'),
      isDirty() ? h('a', { href: '#', onclick: e => { e.preventDefault(); revertAll(); } }, 'Annuler les modifications') : null,
      S.backend.kind === 'github' ? h('a', { href: '#', onclick: e => { e.preventDefault(); logout(); } }, 'Se déconnecter') : null));
}
function updateStatus(text) {
  if (!statusEl) return;
  const dirty = isDirty();
  statusEl.className = 'status' + (dirty ? ' dirty' : '');
  const sum = dirty ? changeSummary() : [];
  fill(statusEl, h('i', { class: 'dot' }), h('span', null, text || (dirty ? 'Non publié : ' + (sum.join(', ') || 'modifications') : 'Tout est publié')));
}
function go(view) { S.view = view; try { history.replaceState(null, '', '#/' + view); } catch (e) {} renderNav(); renderMain(); mainEl.scrollTop = 0; }
function renderMain() {
  S.refreshList = null; S.onChange = null;
  const v = { sections: viewSections, posts: viewPosts, models: viewModels, media: viewMedia, settings: viewSettings, history: viewHistory }[S.view] || viewSections;
  fill(mainEl, v());
}
function page(title, intro, acts, ...content) {
  return h('div', { class: 'page' }, h('header', null, h('h1', null, title), acts && acts.length ? h('div', { class: 'acts' }, acts) : null, intro ? h('p', null, intro) : null), content);
}
function toEditor(el) { if (window.innerWidth < 980) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30); }   // colonnes empilées : on descend vers la fiche
function makeSortable(ul, onMove) {
  let from = null;
  const clear = () => ul.querySelectorAll('.drop-before, .drop-after').forEach(x => x.classList.remove('drop-before', 'drop-after'));
  ul.querySelectorAll('[data-i]').forEach(li => {
    li.draggable = true;
    li.addEventListener('dragstart', e => { from = +li.dataset.i; li.classList.add('dragging'); e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', String(from)); });
    li.addEventListener('dragend', () => { li.classList.remove('dragging'); clear(); from = null; });
    li.addEventListener('dragover', e => { if (from === null) return; e.preventDefault(); const r = li.getBoundingClientRect(); clear(); li.classList.add(e.clientY > r.top + r.height / 2 ? 'drop-after' : 'drop-before'); });
    li.addEventListener('drop', e => {
      if (from === null) return; e.preventDefault();
      const r = li.getBoundingClientRect(); let to = +li.dataset.i + (e.clientY > r.top + r.height / 2 ? 1 : 0);
      if (to > from) to--; const f = from; from = null; clear(); if (to !== f) onMove(f, to);
    });
  });
}

/* ================================================================ Vue : Sections */
const sectionCount = id => S.content.posts.filter(p => p.section === id).length;
function viewSections() {
  const c = S.content;
  if (!c.sections.find(s => s.id === S.sel.section)) S.sel.section = c.sections[0] && c.sections[0].id;
  const listBox = h('div', { class: 'card sticky' }), edBox = h('div');
  const drawList = () => {
    const ul = h('ul', { class: 'list' }, c.sections.map((s, i) => h('li', {
      class: 'row', 'data-i': i, tabindex: 0, 'aria-current': String(s.id === S.sel.section),
      onclick: () => { S.sel.section = s.id; drawList(); drawEd(); toEditor(edBox); }, onkeydown: e => { if (e.key === 'Enter') e.currentTarget.click(); },
    }, h('span', { class: 'grip', 'aria-hidden': 'true' }, '⋮⋮'),
      h('div', { class: 'th', style: { background: '#fafafa', border: '1px solid var(--line)' }, html: layoutSVG(s.layout) }),
      h('div', null, h('div', { class: 't' }, fr(s.name) || s.id), h('div', { class: 'm' }, `${t(LAYOUTS[s.layout].label, 'fr')} · ${t(CARDS[s.card].label, 'fr')} · ${sectionCount(s.id)} contenus`)),
      h('div', { class: 'b' }, !s.visible ? h('span', { class: 'badge off' }, 'masquée') : null, c.settings.startSection === s.id ? h('span', { class: 'badge' }, 'arrivée') : null))));
    makeSortable(ul, (f, to) => { move(c.sections, f, to); change({ nav: true }); drawList(); });
    fill(listBox, 
      h('header', { class: 'toolbar', style: { justifyContent: 'space-between' } }, h('span', { class: 'lbl', style: { margin: 0 } }, 'Ordre du menu'), btn('+ Nouvelle section', addSection, 'sm dark')),
      ul, h('p', { class: 'hint', style: { padding: '10px 12px', margin: 0 } }, 'Glisse les sections pour changer l’ordre du menu du site.'));
  };
  const drawEd = () => { fill(edBox, sectionEditor(c.sections.find(s => s.id === S.sel.section), () => { drawList(); }, drawEd)); };
  S.refreshList = drawList;
  drawList(); drawEd();
  return page('Sections', 'Chaque section du site est un objet 3D entouré de cartes. Choisis l’objet, la façon dont les cartes se disposent, leur type, et les tags qui servent à trier.', [],
    h('div', { class: 'cols' }, listBox, edBox));
}
function addSection() {
  const c = S.content;
  const id = uniqueId('section', c.sections.map(s => s.id));
  c.sections.push({ id, name: { en: 'New section', fr: 'Nouvelle section', ca: 'Nova secció', es: 'Nueva sección' }, model: c.models[0] ? c.models[0].id : '', layout: 'carousel', card: 'image', open: 'strip', perPage: 8, defaultTag: '', visible: true, tags: [] });
  S.sel.section = id; change({ nav: true }); renderMain();
}
function sectionEditor(sec, redrawList, redraw) {
  const c = S.content;
  if (!sec) return h('div', { class: 'card' }, h('div', { class: 'empty' }, 'Aucune section. Crée la première avec « + Nouvelle section ».'));
  const count = sectionCount(sec.id);
  const nameH = h('h2', null, fr(sec.name) || sec.id);
  const idHint = h('p', { class: 'hint' }, `Adresse directe : …/#${sec.id}`);
  const idInput = textInput(() => sec.id, () => {}, { spell: false, onBlur: i => {
    const want = slugify(i.value); if (want === sec.id) { i.value = sec.id; return; }
    const id = uniqueId(want, c.sections.filter(s => s !== sec).map(s => s.id));
    c.posts.forEach(p => { if (p.section === sec.id) p.section = id; });
    if (c.settings.startSection === sec.id) c.settings.startSection = id;
    sec.id = id; S.sel.section = id; i.value = id; idHint.textContent = `Adresse directe : …/#${id}`; change({ list: true });
  } });
  const remove = async () => {
    const ok = await confirmBox('Supprimer la section', count ? `« ${fr(sec.name)} » contient ${count} contenu${count > 1 ? 's' : ''}. Ils seront supprimés avec elle.` : `Supprimer « ${fr(sec.name)} » ?`, 'Supprimer', 'danger');
    if (!ok) return;
    c.posts = c.posts.filter(p => p.section !== sec.id); c.sections.splice(c.sections.indexOf(sec), 1);
    if (c.settings.startSection === sec.id) c.settings.startSection = c.sections[0] ? c.sections[0].id : '';
    S.sel.section = null; change({ nav: true }); renderMain();
  };
  const modelOpts = c.models.map(m => ({ value: m.id, label: m.name, pic: modelPic(m) }));
  const layoutOpts = Object.entries(LAYOUTS).map(([k, v]) => ({ value: k, label: t(v.label, 'fr'), hint: t(v.hint, 'fr'), pic: h('div', { class: 'pic', html: layoutSVG(k) }) }));
  const cardOpts = Object.entries(CARDS).map(([k, v]) => ({ value: k, label: t(v.label, 'fr'), hint: { image: 'Vignette paysage, titre, lieu', portrait: 'Carré : visage ou initiales', text: 'Bandeau de texte, image facultative', place: 'Logo ou photo et fiche du lieu' }[k], pic: h('div', { class: 'pic', html: cardSVG(k) }) }));
  /* Style « Carte » : le réseau relie tous les lieux d'intervention des contenus */
  const netBox = h('div', { class: 'f', style: { marginTop: '16px' } });
  const drawNet = () => {
    netBox.hidden = sec.layout !== 'map';
    const places = new Map(); c.posts.forEach(p => { if (p.published) p.spots.forEach(l => { const k = l.city || `${l.lat}, ${l.lon}`; places.set(k, (places.get(k) || 0) + 1); }); });
    fill(netBox, h('span', { class: 'lbl' }, 'Réseau'),
      toggle('Relier tous les lieux d’intervention par des arcs depuis le bureau', () => sec.network, v => { sec.network = v; }, { after: drawNet }),
      h('p', { class: 'hint' }, places.size ? `${places.size} lieux renseignés dans les contenus : ${[...places.keys()].join(', ')}. On les ajoute dans chaque contenu, bloc « Lieux d’intervention ».` : 'Aucun lieu pour l’instant : on les ajoute dans chaque contenu, bloc « Lieux d’intervention ».'),
      sec.network && !postsOf(c, sec.id).some(p => p.location) ? h('p', { class: 'hint', style: { color: 'var(--warn)' } }, 'Donne une position à un contenu de cette section (ton bureau) : les arcs partent de là.') : null);
  };
  drawNet();
  const openBox = h('div', { class: 'chips', role: 'radiogroup', 'aria-label': 'Ouverture' });
  const drawOpen = () => fill(openBox, ...[['strip', 'Fiche 2D : images et texte en bandeau'], ['focus3d', 'La carte vient vers la caméra (fiche 3D)']].map(([v, l]) =>
    h('button', { type: 'button', class: 'chip', role: 'radio', 'aria-pressed': String(sec.open === v), 'aria-checked': String(sec.open === v), onclick: () => { sec.open = v; change(); drawOpen(); } }, l)));
  drawOpen();
  return h('div', { class: 'card' },
    h('header', null, nameH, h('div', { class: 'acts' }, btn('Aperçu', () => openPreview(sec.id), 'sm'), btn('Contenus →', () => { S.filter.section = sec.id; go('posts'); }, 'sm'), btn('Supprimer', remove, 'sm danger'))),
    h('div', { class: 'block' }, h('h3', null, 'Nom et adresse'),
      pairInput('Nom dans le menu', sec, 'name', { list: true, after: () => { nameH.textContent = fr(sec.name) || sec.id; } }),
      h('div', { class: 'grid2' },
        h('label', { class: 'f' }, h('span', null, 'Identifiant'), idInput, idHint),
        h('div', { style: { display: 'grid', gap: '10px', alignContent: 'start', paddingTop: '20px' } },
          toggle('Visible sur le site', () => sec.visible, v => { sec.visible = v; }, { list: true }),
          toggle('Section d’arrivée (après ENTER)', () => c.settings.startSection === sec.id, v => { c.settings.startSection = v ? sec.id : (c.sections.find(s => s !== sec) || {}).id || ''; }, { list: true })))),
    h('div', { class: 'block' }, h('h3', null, 'Objet 3D', h('small', null, 'le modèle au centre de la section')),
      tiles(modelOpts, sec.model, v => { sec.model = v; change(); }, 'Objet 3D'),
      h('p', { class: 'hint' }, 'Pour ajouter ton propre fichier Collada (.dae), passe par ', h('a', { href: '#', onclick: e => { e.preventDefault(); go('models'); } }, 'Modèles 3D'), '.')),
    h('div', { class: 'block' }, h('h3', null, 'Disposition des cartes', h('small', null, 'le style de la section')),
      tiles(layoutOpts, sec.layout, v => { sec.layout = v; drawNet(); change({ list: true }); }, 'Disposition'), netBox),
    h('div', { class: 'block' }, h('h3', null, 'Type de carte'),
      tiles(cardOpts, sec.card, v => { sec.card = v; sec.open = CARDS[v].open; drawOpen(); change({ list: true }); }, 'Type de carte'),
      h('div', { style: { marginTop: '14px' } }, h('span', { class: 'lbl' }, 'Au clic sur une carte'), openBox)),
    h('div', { class: 'block' }, h('h3', null, 'Tags', h('small', null, 'pour trier les contenus, comme le menu « catégories » du site')),
      tagsEditor(sec, redraw),
      h('div', { class: 'grid2', style: { marginTop: '16px' } },
        field('Tag affiché à l’ouverture', selectInput([{ value: '', label: 'Tout' }, ...sec.tags.map(tg => ({ value: tg.id, label: fr(tg.label) || tg.id }))], () => sec.defaultTag || '', v => { sec.defaultTag = v; })),
        field('Cartes par page', textInput(() => sec.perPage, v => { sec.perPage = Math.max(1, Math.min(40, v || 1)); }, { type: 'number', min: 1, max: 40 }), 'Au-delà, les flèches du site passent à la page suivante.')),
      sec.tags.length ? clientLinks(sec) : null));
}
function siteBase() {   // adresse publique du site, devinée depuis celle du back-office
  if (/^https?:$/.test(location.protocol) && /\/admin\/?/.test(location.pathname)) return location.origin + location.pathname.replace(/admin\/?(index\.html)?$/, '');
  return 'https://hand-coded.net/';
}
function clientLinks(sec) {   // un lien par tag, à envoyer à un client : le site s'ouvre sur ce tag
  const base = siteBase();
  return h('div', { class: 'f', style: { marginTop: '16px' } }, h('span', { class: 'lbl' }, 'Liens à envoyer'),
    h('div', { class: 'chips' }, sec.tags.map(tg => h('button', { type: 'button', class: 'chip', title: base + '?tag=' + tg.id, onclick: async () => {
      const link = base + '?tag=' + tg.id;
      try { await navigator.clipboard.writeText(link); toast('Lien copié : ' + link); } catch (e) { toast(link, 'ok', 9000); }
    } }, (fr(tg.label) || tg.id) + ' ⧉'))),
    h('p', { class: 'hint' }, `Un clic copie le lien. Le site s’ouvre sur l’accueil, puis cette section arrive avec ce tag déjà choisi, par exemple ${base}?tag=${sec.tags[0].id}. Le nom du tag marche aussi, dans n’importe quelle langue (?tag=son). Pour sauter l’accueil : ${base}#${sec.id}/${sec.tags[0].id}.`));
}
function tagsEditor(sec, redraw) {
  const c = S.content;
  const used = id => c.posts.filter(p => p.section === sec.id && p.tags.includes(id)).length;
  const box = h('div', { class: 'tags-ed' });
  const rowStyle = { gridTemplateColumns: `20px repeat(${siteLangs().length}, minmax(0, 1fr)) 96px 46px auto` };
  const draw = () => {
    fill(box, 
      sec.tags.length ? h('div', { class: 'tag-row head', style: rowStyle }, h('span'), siteLangs().map(l => h('span', null, LANG_NAMES[l])), h('span', null, 'Identifiant'), h('span', null, 'Contenus'), h('span')) : h('p', { class: 'hint', style: { margin: 0 } }, 'Pas encore de tag : tous les contenus s’affichent ensemble.'),
      ...sec.tags.map((tg, i) => {
        const n = used(tg.id);
        const en = textInput(() => tg.label.en, v => { tg.label.en = v; }, { placeholder: 'English', onBlur: () => {
          if (!used(tg.id) && /^tag(-\d+)?$/.test(tg.id) && tg.label.en.trim()) { const old = tg.id; tg.id = uniqueId(tg.label.en, sec.tags.filter(x => x !== tg).map(x => x.id)); if (sec.defaultTag === old) sec.defaultTag = tg.id; change(); draw(); }
        } });
        return h('div', { class: 'tag-row', style: rowStyle },
          h('span', { class: 'n', style: { textAlign: 'left' } }, i + 1),
          siteLangs().map(l => l === 'en' ? en : textInput(() => tg.label[l] ?? '', v => { tg.label[l] = v; }, { placeholder: LANG_NAMES[l] })),
          h('span', { class: 'id', title: tg.id }, tg.id), h('span', { class: 'n' }, n),
          h('span', { style: { display: 'flex', gap: '2px' } },
            btn('↑', () => { if (i) { move(sec.tags, i, i - 1); change(); draw(); } }, 'sm icon ghost', { 'aria-label': 'Monter', disabled: !i }),
            btn('↓', () => { if (i < sec.tags.length - 1) { move(sec.tags, i, i + 1); change(); draw(); } }, 'sm icon ghost', { 'aria-label': 'Descendre', disabled: i === sec.tags.length - 1 }),
            btn('×', async () => {
              if (n && !await confirmBox('Supprimer le tag', `« ${fr(tg.label)} » est utilisé par ${n} contenu${n > 1 ? 's' : ''}. Il leur sera retiré.`, 'Supprimer', 'danger')) return;
              c.posts.forEach(p => { if (p.section === sec.id) p.tags = p.tags.filter(x => x !== tg.id); });
              sec.tags.splice(i, 1); if (sec.defaultTag === tg.id) sec.defaultTag = ''; change(); redraw();
            }, 'sm icon ghost danger', { 'aria-label': 'Supprimer le tag' })));
      }),
      h('div', null, btn('+ Ajouter un tag', () => { sec.tags.push({ id: uniqueId('tag', sec.tags.map(x => x.id)), label: emptyField() }); change(); redraw(); setTimeout(() => { const ins = box.querySelectorAll('.tag-row input'); if (ins.length) ins[ins.length - 2].focus(); }, 0); }, 'sm')));
  };
  draw(); return box;
}

/* ================================================================ Vue : Contenus */
const LABELS = {
  image: { title: 'Titre', subtitle: 'Sous-titre (artiste, client…)', place: 'Lieu', body: 'Description', thumb: 'Vignette de la carte' },
  portrait: { title: 'Nom', subtitle: 'Rôle', place: 'Ville', body: 'Bio courte', thumb: 'Portrait' },
  text: { title: 'Titre', subtitle: 'Sous-titre', place: 'Lieu', body: 'Texte', thumb: 'Petite image (facultative)' },
  place: { title: 'Nom du lieu ou du bureau', subtitle: 'Activité', place: 'Ville affichée', body: 'Adresse et coordonnées', thumb: 'Logo ou photo' },
};
function missing(p) {
  const sec = S.content.sections.find(s => s.id === p.section), out = [];
  const langs = siteLangs(), hasBody = l => htmlToText(p.body[l]).length > 0;
  if (langs.some(l => !p.title[l])) out.push('titre à traduire');
  if (!langs.some(hasBody)) out.push('pas de texte');
  else if (!langs.every(hasBody)) out.push('texte à traduire (' + langs.filter(l => !hasBody(l)).map(l => l.toUpperCase()).join(', ') + ')');
  if (sec && ['image', 'portrait'].includes(sec.card) && !p.thumb) out.push('pas d’image');
  if (sec && sec.layout === 'map' && !p.location) out.push('pas de position');
  return out;
}
function viewPosts() {
  const c = S.content;
  if (!c.sections.find(s => s.id === S.filter.section)) S.filter.section = c.sections[0] && c.sections[0].id;
  if (!c.sections.length) return page('Contenus', null, [], h('div', { class: 'card' }, h('div', { class: 'empty' }, 'Crée d’abord une section.')));
  const listBox = h('div', { class: 'card sticky' }), edBox = h('div');
  const sec = () => c.sections.find(s => s.id === S.filter.section);
  const filtered = () => {
    const q = S.filter.q.trim().toLowerCase();
    return postsOf(c, S.filter.section, { all: true }).filter(p =>
      (!S.filter.tag || p.tags.includes(S.filter.tag)) &&
      (!q || [p.title.en, p.title.fr, p.subtitle.en, p.subtitle.fr, p.place.en, p.place.fr, p.id].join(' ').toLowerCase().includes(q)) &&
      (!S.filter.status || (S.filter.status === 'on' && p.published) || (S.filter.status === 'off' && !p.published) || (S.filter.status === 'todo' && missing(p).length)));
  };
  const drawList = () => {
    const s = sec(), posts = filtered(), filtering = S.filter.tag || S.filter.q || S.filter.status;
    if (S.filter.tag && !s.tags.find(tg => tg.id === S.filter.tag)) S.filter.tag = '';
    const tabs = h('div', { class: 'tabs', role: 'tablist' }, c.sections.map(x => h('button', { type: 'button', role: 'tab', 'aria-selected': String(x.id === s.id), onclick: () => { S.filter.section = x.id; S.filter.tag = ''; S.sel.post = null; drawList(); drawEd(); } }, fr(x.name) || x.id, h('small', null, sectionCount(x.id)))));
    const search = h('input', { type: 'search', placeholder: 'Chercher…', value: S.filter.q, 'aria-label': 'Chercher' });
    search.addEventListener('input', () => { S.filter.q = search.value; drawRows(); });
    const tools = h('div', { class: 'toolbar' },
      selectInput([{ value: '', label: 'Tous les tags' }, ...s.tags.map(tg => ({ value: tg.id, label: fr(tg.label) || tg.id }))], () => S.filter.tag, v => { S.filter.tag = v; drawRows(); }),
      selectInput([{ value: '', label: 'Tous' }, { value: 'on', label: 'Visibles' }, { value: 'off', label: 'Masqués' }, { value: 'todo', label: 'À compléter' }], () => S.filter.status, v => { S.filter.status = v; drawRows(); }),
      search);
    const rows = h('div');
    function drawRows() {
      const list = filtered(), filt = S.filter.tag || S.filter.q || S.filter.status;
      const ul = h('ul', { class: 'list' }, list.map((p, i) => {
        const miss = missing(p);
        const th = h('div', { class: 'th' + (s.card === 'portrait' ? ' portrait' : '') }, p.thumb ? null : initials(fr(p.title)));
        if (p.thumb) th.style.backgroundImage = `url("${fileURL(p.thumb)}")`;
        return h('li', { class: 'row', 'data-i': i, tabindex: 0, 'aria-current': String(p.id === S.sel.post), onclick: () => { S.sel.post = p.id; drawRows(); drawEd(); toEditor(edBox); }, onkeydown: e => { if (e.key === 'Enter') e.currentTarget.click(); } },
          filt ? null : h('span', { class: 'grip', 'aria-hidden': 'true' }, '⋮⋮'), th,
          h('div', null, h('div', { class: 't' }, fr(p.title) || h('i', { style: { color: 'var(--ink-4)' } }, 'Sans titre')),
            h('div', { class: 'm' }, [p.tags.map(id => { const tg = s.tags.find(x => x.id === id); return tg ? fr(tg.label) : null; }).filter(Boolean).join(', '), p.date].filter(Boolean).join(' · ') || ' ')),
          h('div', { class: 'b' }, !p.published ? h('span', { class: 'badge off' }, 'masqué') : null, miss.length ? h('span', { class: 'badge warn', title: miss.join(', ') }, 'à compléter') : null));
      }));
      if (!filt) makeSortable(ul, (f, to) => { const all = postsOf(c, s.id, { all: true }); move(all, f, to); all.forEach((p, k) => { p.order = k; }); change(); drawRows(); });
      fill(rows, list.length ? ul : h('div', { class: 'empty' }, filtering ? 'Aucun contenu ne correspond.' : 'Aucun contenu dans cette section.'),
        h('p', { class: 'hint', style: { padding: '10px 12px', margin: 0 } }, filt ? 'Retire les filtres pour changer l’ordre.' : 'Glisse pour changer l’ordre des cartes sur le site.'));
    }
    drawRows();
    fill(listBox, tabs, h('div', { class: 'toolbar', style: { justifyContent: 'space-between' } }, h('span', { class: 'lbl', style: { margin: 0 } }, `${posts.length} contenu${posts.length > 1 ? 's' : ''}`), btn('+ Nouveau contenu', () => addPost(s), 'sm dark')), tools, rows);
    S.refreshList = drawRows;
  };
  const drawEd = () => {
    const p = c.posts.find(x => x.id === S.sel.post && x.section === S.filter.section);
    fill(edBox, p ? postEditor(p, drawList, drawEd) : h('div', { class: 'card' }, h('div', { class: 'empty' }, 'Choisis un contenu dans la liste, ou crée-en un nouveau.')));
  };
  drawList(); drawEd();
  return page('Contenus', 'Projets, savoir-faire, portraits, lieux : chaque contenu devient une carte dans sa section. Les textes s’écrivent en anglais et en français.', [],
    h('div', { class: 'cols' }, listBox, edBox));
}
function blankPost(sec) {
  const c = S.content;
  return { id: uniqueId('nouveau-contenu', c.posts.map(p => p.id)), section: sec.id, order: Math.max(-1, ...postsOf(c, sec.id, { all: true }).map(p => p.order ?? 0)) + 1, published: false,
    title: emptyField(), subtitle: emptyField(), place: emptyField(), date: '', tags: S.filter.tag ? [S.filter.tag] : [], thumb: '', thumbBack: '', body: emptyField(), media: [], link: '', team: [], credits: '', location: null };
}
function addPost(sec) { const p = blankPost(sec); S.content.posts.push(p); S.sel.post = p.id; S.filter.q = ''; S.filter.status = ''; change({ nav: true }); renderMain(); setTimeout(() => { const i = mainEl.querySelector('.card .lang input'); if (i) i.focus(); }, 30); }
function postEditor(p, redrawList, redraw) {
  const c = S.content, sec = c.sections.find(s => s.id === p.section), L = LABELS[sec.card];
  const title = h('h2', null, fr(p.title) || 'Sans titre');
  const afterTitle = () => { title.textContent = fr(p.title) || 'Sans titre'; };
  const opts = { list: true };
  const folder = `media/${p.id}`;
  const remove = async () => {
    if (!await confirmBox('Supprimer ce contenu', `« ${fr(p.title) || 'Sans titre'} » sera retiré du site à la prochaine publication.`, 'Supprimer', 'danger')) return;
    c.posts.splice(c.posts.indexOf(p), 1); c.posts.forEach(x => { x.team = x.team.filter(id => id !== p.id); }); S.sel.post = null; change({ nav: true }); renderMain();
  };
  const duplicate = () => { const copy = structuredClone(p); copy.id = uniqueId(p.id + '-copie', c.posts.map(x => x.id)); copy.order = (p.order ?? 0) + 0.5; copy.published = false; LANGS.forEach(l => { if (copy.title[l]) copy.title[l] += { fr: ' (copie)', ca: ' (còpia)', es: ' (copia)' }[l] || ' (copy)'; }); c.posts.push(copy); postsOf(c, sec.id, { all: true }).forEach((x, k) => { x.order = k; }); S.sel.post = copy.id; change({ nav: true }); renderMain(); };

  /* Image de la carte (et dos facultatif) */
  const imageSlot = (key, label, hint) => {
    const prev = h('div', { class: 'prev ' + sec.card });
    const acts = h('div', { class: 'acts' });
    const box = h('div', { class: 'drop' }, prev, acts);
    const draw = () => {
      prev.style.backgroundImage = p[key] ? `url("${fileURL(p[key])}")` : '';
      prev.textContent = p[key] ? '' : (key === 'thumb' ? initials(fr(p.title)) : '');
      fill(acts, 
        btn(p[key] ? 'Remplacer…' : 'Choisir une image…', () => filePicker('image/*', false, pick), 'sm'),
        p[key] ? btn('Retirer', () => { p[key] = ''; change(opts); draw(); }, 'sm ghost danger') : null,
        h('p', null, hint));
    };
    const pick = async files => {
      if (!files[0]) return;
      try { const up = await prepareUpload(files[0], folder, 'thumb'); stageFile(up.path, up.blob); p[key] = up.path; change(opts); draw(); }
      catch (e) { toast(e.message, 'bad', 7000); }
    };
    dropTarget(box, pick); draw();
    return h('div', { class: 'f' }, h('span', { class: 'lbl' }, label), box);
  };

  /* Images et vidéos du bandeau */
  const mediaBox = h('div', { class: 'media-list' });
  const drawMedia = () => {
    const add = h('div', { class: 'media-add', role: 'button', tabindex: 0, onclick: () => filePicker('image/*,video/mp4,video/webm', true, addMedia), onkeydown: e => { if (e.key === 'Enter') e.currentTarget.click(); } }, h('span', null, '+ Ajouter des images ou des vidéos', h('br'), h('small', null, 'ou glisse-les ici')));
    dropTarget(add, addMedia);
    const addLink = h('div', { class: 'media-add', role: 'button', tabindex: 0, onkeydown: e => { if (e.key === 'Enter') e.currentTarget.click(); }, onclick: async () => {
      const u = await askText('Ajouter un lien', 'Adresse d’une vidéo YouTube ou Vimeo, ou d’une image en ligne', 'https://', 'Ajouter');
      if (!u || !/^https?:\/\/\S+$/.test(u.trim())) return;
      p.media.push({ src: u.trim() }); change(); drawMedia();
    } }, h('span', null, '+ Ajouter un lien', h('br'), h('small', null, 'YouTube, Vimeo, image en ligne')));
    fill(mediaBox, ...p.media.map((m, i) => {
      const k = mediaKindOf(m.src), vid = k === 'video';
      const el = k === 'youtube' ? h('img', { src: `https://i.ytimg.com/vi/${ytIdOf(m.src)}/hqdefault.jpg`, alt: '', loading: 'lazy' })
        : k === 'vimeo' ? h('span', { style: { color: '#888', font: 'italic 18px Georgia, serif' } }, 'Vimeo')
        : vid ? h('video', { src: fileURL(m.src), muted: true, preload: 'metadata', playsinline: true }) : h('img', { src: fileURL(m.src), alt: '', loading: 'lazy' });
      return h('div', { class: 'media-item' }, h('div', { class: 'pv' }, el),
        h('div', { class: 'ft' }, h('span', { title: m.src }, (k === 'image' ? '' : '▶ ') + (k === 'youtube' ? 'YouTube' : k === 'vimeo' ? 'Vimeo ' + m.src.split('/').pop() : decodeURIComponent(m.src.split('?')[0].split('/').pop()))),
          btn('←', () => { if (i) { move(p.media, i, i - 1); change(); drawMedia(); } }, 'sm icon ghost', { 'aria-label': 'Avant', disabled: !i }),
          btn('→', () => { if (i < p.media.length - 1) { move(p.media, i, i + 1); change(); drawMedia(); } }, 'sm icon ghost', { 'aria-label': 'Après', disabled: i === p.media.length - 1 }),
          btn('×', () => { p.media.splice(i, 1); change(); drawMedia(); }, 'sm icon ghost danger', { 'aria-label': 'Retirer' })),
        h('div', { class: 'cr' }, textInput(() => m.credit || '', v => { m.credit = v; }, { placeholder: 'Crédit photo' })));
    }), add, addLink);
  };
  const addMedia = async files => {
    for (const f of files) {
      try { const up = await prepareUpload(f, folder, 'media'); stageFile(up.path, up.blob); p.media.push({ src: up.path }); change(); drawMedia(); }
      catch (e) { toast(e.message, 'bad', 7000); }
    }
  };
  drawMedia();

  /* Tags */
  const tagBox = h('div', { class: 'chips' });
  const drawTags = () => {
    fill(tagBox, ...sec.tags.map(tg => h('button', { type: 'button', class: 'chip', 'aria-pressed': String(p.tags.includes(tg.id)), onclick: () => {
      p.tags = p.tags.includes(tg.id) ? p.tags.filter(x => x !== tg.id) : sec.tags.map(x => x.id).filter(id => id === tg.id || p.tags.includes(id));
      change(opts); drawTags();
    } }, fr(tg.label) || tg.id)),
    btn('+ Nouveau tag', async () => {
      const label = await askText('Nouveau tag', `Nom du tag (section « ${fr(sec.name)} »)`, '', 'Créer'); if (!label) return;
      const tg = { id: uniqueId(label, sec.tags.map(x => x.id)), label: Object.fromEntries(LANGS.map(l => [l, label])) }; sec.tags.push(tg); p.tags.push(tg.id); change(opts); drawTags();
      toast('Tag créé. Tu peux traduire son nom dans Sections.');
    }, 'sm ghost'));
  };
  drawTags();

  /* Équipe : renvoie vers les portraits des autres sections */
  const people = c.posts.filter(x => x.id !== p.id && (c.sections.find(s => s.id === x.section) || {}).card === 'portrait');
  const teamBox = h('div', { class: 'chips' });
  const drawTeam = () => fill(teamBox, ...(people.length ? people.map(x => h('button', { type: 'button', class: 'chip', 'aria-pressed': String(p.team.includes(x.id)), onclick: () => { p.team = p.team.includes(x.id) ? p.team.filter(id => id !== x.id) : [...p.team, x.id]; change(); drawTeam(); } }, fr(x.title))) : [h('p', { class: 'hint', style: { margin: 0 } }, 'Ajoute des portraits dans une section de type « Portrait » pour les relier ici.')]));
  drawTeam();

  /* Position sur la carte */
  /* Lieux d'intervention : les points du réseau sur la carte du monde */
  const spotBox = h('div');
  const netSec = c.sections.find(s => s.layout === 'map' && s.network);
  const drawSpots = () => {
    const has = cn => p.spots.some(l => l.city === cn);
    const addCity = cn => { p.spots.push({ city: cn, lat: CITIES[cn][0], lon: CITIES[cn][1] }); change(); drawSpots(); };
    const sugg = findCities([t(p.place, 'en'), t(p.place, 'fr')].join(' , ')).filter(cn => CITIES[cn] && !has(cn));
    const sel = h('select', { 'aria-label': 'Ajouter une ville' }, h('option', { value: '' }, '+ Ajouter une ville…'),
      Object.keys(CITIES).sort().filter(k => !has(k)).map(k => h('option', { value: k }, k)), h('option', { value: '__other' }, 'Autre lieu (coordonnées)…'));
    sel.addEventListener('change', async () => {
      const v = sel.value; if (!v) return;
      if (v !== '__other') { addCity(v); return; }
      const l = await askPlace(); if (l) { p.spots.push(l); change(); } drawSpots();
    });
    fill(spotBox,
      h('div', { class: 'chips' }, p.spots.length ? p.spots.map((l, i) => h('span', { class: 'chip on' }, l.city || `${l.lat}, ${l.lon}`,
        h('button', { type: 'button', class: 'x', 'aria-label': 'Retirer ' + (l.city || 'ce lieu'), onclick: () => { p.spots.splice(i, 1); change(); drawSpots(); } }, '×'))) : h('span', { class: 'hint', style: { margin: 0 } }, 'Aucun lieu pour ce contenu.')),
      sugg.length ? h('p', { class: 'hint' }, 'Repéré dans le champ « Lieu » :', sugg.map(cn => h('button', { type: 'button', class: 'chip sugg', onclick: () => addCity(cn) }, '+ ' + cn))) : null,
      h('div', { style: { marginTop: '10px', maxWidth: '320px' } }, sel));
  };
  drawSpots();
  const locBox = h('div');
  const drawLoc = () => {
    const loc = p.location;
    const city = selectInput([{ value: '', label: 'Pas de position' }, ...Object.keys(CITIES).sort().map(k => ({ value: k, label: k })), { value: '__other', label: 'Autre (latitude / longitude)…' }],
      () => (loc ? (CITIES[loc.city] ? loc.city : '__other') : ''),
      v => { if (!v) p.location = null; else if (v === '__other') p.location = { city: loc ? loc.city : '', lat: loc ? loc.lat : 0, lon: loc ? loc.lon : 0 }; else p.location = { city: v, lat: CITIES[v][0], lon: CITIES[v][1] }; drawLoc(); }, opts);
    fill(locBox, h('div', { class: 'grid3' },
      field('Ville', city),
      loc ? field('Latitude', textInput(() => loc.lat, v => { loc.lat = +v || 0; }, { type: 'number', step: 0.01 })) : null,
      loc ? field('Longitude', textInput(() => loc.lon, v => { loc.lon = +v || 0; }, { type: 'number', step: 0.01 })) : null));
  };
  drawLoc();

  const idInput = textInput(() => p.id, () => {}, { spell: false, onBlur: i => {
    const want = slugify(i.value); if (want === p.id) { i.value = p.id; return; }
    const id = uniqueId(want, c.posts.filter(x => x !== p).map(x => x.id));
    c.posts.forEach(x => { x.team = x.team.map(t2 => (t2 === p.id ? id : t2)); });
    p.id = id; S.sel.post = id; i.value = id; change(opts);
  } });
  const missBadge = h('span', { class: 'badge' });
  const drawMiss = () => { const miss = missing(p); missBadge.className = 'badge' + (miss.length ? ' warn' : ''); missBadge.textContent = miss.length ? 'À compléter : ' + miss.join(', ') : 'Complet'; };
  drawMiss(); S.onChange = drawMiss;
  return h('div', { class: 'card' },
    h('header', null, title, h('div', { class: 'acts' },
      btn('Aperçu', () => openPreview(sec.id), 'sm'), btn('Dupliquer', duplicate, 'sm'), btn('Supprimer', remove, 'sm danger'))),
    h('div', { class: 'block', style: { display: 'flex', gap: '18px', alignItems: 'center', flexWrap: 'wrap' } },
      toggle('Visible sur le site', () => p.published, v => { p.published = v; }, opts),
      field('Section', selectInput(c.sections.map(s => ({ value: s.id, label: fr(s.name) || s.id })), () => p.section, v => {
        const to = c.sections.find(s => s.id === v); p.section = v; p.tags = p.tags.filter(id => to.tags.some(tg => tg.id === id));
        p.order = Math.max(-1, ...postsOf(c, v, { all: true }).filter(x => x !== p).map(x => x.order ?? 0)) + 1;
        S.filter.section = v; toast(`Déplacé dans « ${fr(to.name)} ».`); renderMain();
      })),
      missBadge),
    h('div', { class: 'block' }, h('h3', null, 'Textes de la carte'),
      pairInput(L.title, p, 'title', { list: true, after: afterTitle }),
      pairInput(L.subtitle, p, 'subtitle', opts),
      pairInput(L.place, p, 'place', { ...opts, after: () => drawSpots() }),
      h('div', { class: 'grid2' },
        field('Auteur de l’œuvre', textInput(() => p.author || '', v => { p.author = v; }, { placeholder: 'Ex. Romain Tardy' }), `Signé sur la vignette 3D : « ${fr(p.title) || 'Titre'} · ${p.author || S.content.settings.name} ». Vide : signé ${S.content.settings.name}.`),
        h('div'),
        field('Date', textInput(() => p.date, v => { p.date = v; }, { ...opts, placeholder: '2019, ou 2017 – 2019' })),
        field('Lien', textInput(() => p.link, v => { p.link = v.trim(); }, { type: 'url', placeholder: 'https://…' }), sec.card === 'place' ? 'Affiché sur la fiche du lieu.' : 'Affiché sous la fiche : « Voir le site ».'))),
    h('div', { class: 'block' }, h('h3', null, L.body), richText(p.body, 'Écris ici. Les paragraphes se répartissent tout seuls sur les panneaux du site.')),
    h('div', { class: 'block' }, h('h3', null, 'Images'),
      imageSlot('thumb', L.thumb, sec.card === 'image' ? 'Format paysage. Sans image, la carte affiche le titre sur fond noir.' : sec.card === 'portrait' ? 'Carré, cadré sur le visage. Sans image : les initiales.' : 'Facultatif.'),
      ['image', 'portrait'].includes(sec.card) ? h('details', null, h('summary', { class: 'lbl', style: { cursor: 'pointer', margin: '6px 0 10px' } }, 'Dos de la carte (facultatif)'),
        imageSlot('thumbBack', 'Image au dos', 'Vue quand la carte est de dos. Par défaut : la vignette, pâlie.')) : null,
      sec.open === 'strip' ? h('div', { class: 'f', style: { marginTop: '6px' } }, h('span', { class: 'lbl' }, 'Images et vidéos de la fiche'), mediaBox,
        h('p', { class: 'hint' }, 'La première s’affiche avant le texte, les autres après. Vidéos MP4 ou WebM, idéalement moins de 20 Mo.')) : null),
    h('div', { class: 'block' }, h('h3', null, 'Tags'), tagBox),
    ['image', 'text'].includes(sec.card) ? h('div', { class: 'block' }, h('h3', null, 'Qui a travaillé dessus ?', h('small', null, 'les portraits s’affichent sur la fiche')), teamBox,
      h('div', { style: { marginTop: '12px' } }, field('Autres crédits', textInput(() => p.credits, v => { p.credits = v; }, { placeholder: 'Ex. Tigre Lab, Studio X' })))) : null,
    sec.layout !== 'map' ? h('div', { class: 'block' }, h('h3', null, 'Lieux d’intervention', h('small', null, netSec ? `les points du réseau sur la carte de « ${fr(netSec.name)} »` : 'pour le réseau d’une section en style « Carte »')), spotBox) : null,
    h('details', { class: 'block', open: sec.layout === 'map' }, h('summary', { class: 'lbl', style: { cursor: 'pointer', margin: 0 } }, 'Position sur la carte du monde', sec.layout === 'map' ? '' : ' (pour le style « Carte »)'), h('div', { style: { marginTop: '12px' } }, locBox)),
    h('details', { class: 'block' }, h('summary', { class: 'lbl', style: { cursor: 'pointer', margin: 0 } }, 'Avancé'),
      h('div', { class: 'grid2', style: { marginTop: '12px' } }, field('Identifiant', idInput, 'Sert aux liens « équipe » et au dossier des images.'), field('Dossier des fichiers', h('input', { type: 'text', value: folder + '/', disabled: true })))));
}

/* ================================================================ Vue : Modèles 3D */
function viewModels() {
  const c = S.content;
  if (!c.models.find(m => m.id === S.sel.model)) S.sel.model = c.models[0] && c.models[0].id;
  const listBox = h('div', { class: 'card sticky' }), edBox = h('div');
  const drawList = () => {
    fill(listBox, 
      h('header', { class: 'toolbar', style: { justifyContent: 'space-between' } }, h('span', { class: 'lbl', style: { margin: 0 } }, `${c.models.length} modèle${c.models.length > 1 ? 's' : ''}`), btn('+ Importer un .dae', importModel, 'sm dark')),
      h('ul', { class: 'list' }, c.models.map(m => {
        const uses = c.sections.filter(s => s.model === m.id);
        return h('li', { class: 'row', tabindex: 0, 'aria-current': String(m.id === S.sel.model), onclick: () => { S.sel.model = m.id; drawList(); drawEd(); toEditor(edBox); }, onkeydown: e => { if (e.key === 'Enter') e.currentTarget.click(); } },
          h('div', { class: 'th', style: { background: '#f4f4f2' } }, '▲'),
          h('div', null, h('div', { class: 't' }, m.name), h('div', { class: 'm' }, uses.length ? 'Utilisé par ' + uses.map(s => fr(s.name)).join(', ') : 'Pas utilisé')),
          h('div', { class: 'b' }, m.builtin ? h('span', { class: 'badge' }, 'origine') : null, S.staged.has(m.file) ? h('span', { class: 'badge new' }, 'nouveau') : null));
      })),
      h('div', { class: 'block' }, h('h3', null, 'Importer un modèle'),
        h('p', { class: 'hint', style: { marginTop: 0 } }, 'Sélectionne ensemble le fichier .dae et ses textures (JPG, PNG). Export Collada depuis Maya, Blender, Cinema 4D… Les noms de fichiers des textures doivent correspondre à ceux cités dans le .dae.'),
        (() => { const d = h('div', { class: 'media-add', role: 'button', tabindex: 0, style: { minHeight: '80px' }, onclick: importModel }, 'Glisse ici le .dae et ses textures'); dropTarget(d, files => importModelFiles(files)); return d; })()));
    listBox.querySelectorAll('.row .th').forEach((th, i) => { const m = c.models[i]; viewer.snapshot(m).then(u => { th.style.background = `#f4f4f2 url("${u}") center / cover`; th.textContent = ''; }).catch(() => {}); });
  };
  const drawEd = () => {
    const m = c.models.find(x => x.id === S.sel.model);
    if (!m) { fill(edBox, h('div', { class: 'card' }, h('div', { class: 'empty' }, 'Aucun modèle.'))); return; }
    const view = h('div', { class: 'model-view' }), msg = h('p', { class: 'msg' });
    view.appendChild(msg);
    const refresh = () => { viewer.show(view, m, msg); };
    const uses = c.sections.filter(s => s.model === m.id);
    const remove = async () => {
      if (uses.length) { toast(`Ce modèle sert à ${uses.map(s => fr(s.name)).join(', ')}. Choisis un autre objet pour ces sections d’abord.`, 'bad', 7000); return; }
      if (!await confirmBox('Supprimer le modèle', `« ${m.name} » sera retiré de la liste${m.builtin ? '' : ' et ses fichiers supprimés du dépôt à la prochaine publication'}.`, 'Supprimer', 'danger')) return;
      if (!m.builtin) { const dir = m.file.replace(/[^/]+$/, ''); [m.file, ...(m.textures || []).map(x => dir + x)].forEach(p => { if (S.staged.has(p)) { URL.revokeObjectURL(S.staged.get(p).url); S.staged.delete(p); } }); }
      c.models.splice(c.models.indexOf(m), 1); S.sel.model = null; change({ nav: true }); renderMain();
    };
    const rot = h('input', { type: 'range', min: -180, max: 180, step: 5, value: m.rotationY || 0 });
    const rotVal = h('b', null, (m.rotationY || 0) + '°');
    rot.addEventListener('input', () => { m.rotationY = +rot.value; rotVal.textContent = rot.value + '°'; change(); });
    rot.addEventListener('change', refresh);
    const height = textInput(() => m.height || 420, v => { m.height = Math.max(50, Math.min(1200, v || 420)); }, { type: 'number', min: 50, max: 1200, step: 10 });
    height.addEventListener('change', refresh);
    const heightField = field('Hauteur dans la scène', height, 'En unités de la scène : les cartes sont posées à environ 500 du centre. 420 donne la taille des objets d’origine.');
    heightField.hidden = m.scaleMode !== 'fit';
    fill(edBox, h('div', { class: 'card' },
      h('header', null, h('h2', null, m.name), h('div', { class: 'acts' }, uses[0] ? btn('Aperçu', () => openPreview(uses[0].id), 'sm') : null, btn('Supprimer', remove, 'sm danger'))),
      view,
      h('div', { class: 'block' },
        field('Nom', textInput(() => m.name, v => { m.name = v; }, { list: true })),
        h('div', { class: 'grid2' },
          field('Taille', selectInput([{ value: 'pv', label: 'Comme le fichier (×100, règle de 2008)' }, { value: 'fit', label: 'Ajuster à une hauteur' }], () => m.scaleMode, v => { m.scaleMode = v; heightField.hidden = v !== 'fit'; if (v === 'fit' && !m.height) m.height = 420; refresh(); })),
          heightField),
        h('div', { class: 'f' }, h('span', { class: 'lbl' }, 'Rotation ', rotVal), rot),
        field('Faces sans texture', selectInput([{ value: 'wire', label: 'Fil de fer jaune (comme 2008)' }, { value: 'white', label: 'Blanc mat' }, { value: 'black', label: 'Noir mat' }], () => m.untextured, v => { m.untextured = v; refresh(); })),
        h('p', { class: 'hint' }, 'Fichier : ', h('code', null, m.file), (m.textures || []).length ? ` · ${m.textures.length} texture${m.textures.length > 1 ? 's' : ''}` : '', uses.length ? ' · utilisé par ' + uses.map(s => fr(s.name)).join(', ') : ''))));
    refresh();
  };
  S.refreshList = drawList;
  drawList(); drawEd();
  return page('Modèles 3D', 'Les objets Collada (.dae) posés au centre des sections. Ceux d’origine viennent du site de 2008 ; tu peux importer les tiens.', [], h('div', { class: 'cols' }, listBox, edBox));
}
function importModel() { filePicker('.dae,.DAE,image/*,.tga', true, importModelFiles); }
function askPlace() {
  const name = h('input', { type: 'text', placeholder: 'Ex. Puebla' }), lat = h('input', { type: 'number', step: 'any', placeholder: '19.04' }), lon = h('input', { type: 'number', step: 'any', placeholder: '-98.20' });
  return modal('Ajouter un lieu', h('div', null, field('Nom affiché', name), h('div', { class: 'grid2' }, field('Latitude', lat), field('Longitude', lon)),
    h('p', { class: 'hint' }, 'Dans Google Maps, un clic droit sur un endroit affiche ses coordonnées : la latitude d’abord, puis la longitude.')),
    [{ label: 'Annuler', value: null, cls: 'ghost' }, { label: 'Ajouter', cls: 'dark', value: () => (name.value.trim() && lat.value !== '' && lon.value !== '' && Math.abs(+lat.value) <= 90 && Math.abs(+lon.value) <= 180 ? { city: name.value.trim(), lat: +lat.value, lon: +lon.value } : null) }]);
}
function whitePNG() { const c = document.createElement('canvas'); c.width = c.height = 4; const x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, 4, 4); return new Promise(r => c.toBlob(r, 'image/png')); }
async function importModelFiles(files) {
  const c = S.content;
  const dae = files.find(f => /\.dae$/i.test(f.name));
  if (!dae) { toast('Il faut un fichier .dae (Collada) dans la sélection.', 'bad'); return; }
  if (dae.size > 30e6) { toast('Ce .dae pèse plus de 30 Mo : allège le maillage avant de l’importer.', 'bad', 7000); return; }
  const doc = new DOMParser().parseFromString(await dae.text(), 'application/xml');
  if (doc.querySelector('parsererror') || doc.documentElement.nodeName !== 'COLLADA') { toast('Ce fichier n’est pas un Collada lisible.', 'bad'); return; }
  const id = uniqueId(dae.name.replace(/\.dae$/i, ''), c.models.map(m => m.id)), dir = `models/${id}/`;
  const textures = [], missingTex = [], done = new Map();
  for (const node of doc.querySelectorAll('library_images image init_from')) {
    const ref = (node.querySelector('ref') || node).textContent.trim(); if (!ref) continue;
    const base = decodeURIComponent(ref.replace(/^file:\/*/, '').split(/[\\/]/).pop());
    let safe = done.get(base.toLowerCase());
    if (safe === undefined) {
      const f = files.find(x => x.name.toLowerCase() === base.toLowerCase());
      safe = slugify(base.replace(/\.[^.]+$/, '')) + '.' + (f ? (extOf(base) || 'jpg') : 'png');
      let n = 2; while (textures.includes(safe)) safe = slugify(base.replace(/\.[^.]+$/, '')) + '-' + n++ + '.' + (extOf(base) || 'jpg');
      if (!f) missingTex.push(base);   // texture absente : un carré blanc la remplace, sinon la face sortirait noire
      stageFile(dir + safe, f || await whitePNG()); textures.push(safe); done.set(base.toLowerCase(), safe);
    }
    (node.querySelector('ref') || node).textContent = safe;
  }
  const text = new XMLSerializer().serializeToString(doc);
  const m = { id, name: dae.name.replace(/\.dae$/i, ''), file: dir + id + '.dae', textures, scaleMode: 'fit', height: 420, rotationY: 0, untextured: textures.length ? 'wire' : 'white', builtin: false };
  stageFile(m.file, new Blob([text], { type: 'model/vnd.collada+xml' }));
  try { buildModel(text, m); }
  catch (e) { [m.file, ...textures.map(x => dir + x)].forEach(p => S.staged.delete(p)); toast('Three.js ne parvient pas à lire ce modèle : ' + e.message, 'bad', 8000); return; }
  c.models.push(m); S.sel.model = id; change({ nav: true });
  if (S.view !== 'models') go('models'); else renderMain();
  toast(missingTex.length ? `Modèle importé. ${missingTex.length} texture${missingTex.length > 1 ? 's' : ''} manque${missingTex.length > 1 ? 'nt' : ''} (${missingTex.join(', ')}) : remplacée${missingTex.length > 1 ? 's' : ''} par du blanc. Réimporte le modèle avec ces fichiers pour les voir.` : 'Modèle importé. Choisis-le dans une section pour l’utiliser.', missingTex.length ? 'bad' : 'ok', 9000);
}

/* ================================================================ Vue : Médias */
/* Images encore hébergées ailleurs (l'ancien site Squarespace) : on peut les rapatrier dans le dépôt */
function remoteRefs() {
  const refs = [];
  S.content.posts.forEach(p => {
    ['thumb', 'thumbBack'].forEach(k => { if (/^https?:/.test(p[k] || '')) refs.push({ p, get: () => p[k], set: v => { p[k] = v; } }); });
    p.media.forEach(m => { if (/^https?:/.test(m.src) && mediaKindOf(m.src) === 'image') refs.push({ p, get: () => m.src, set: v => { m.src = v; } }); });
  });
  return refs;
}
function remoteBlock() {
  const refs = remoteRefs(); if (!refs.length) return null;
  const urls = new Set(refs.map(r => r.get()));
  const bar = h('div', { class: 'progress', hidden: true }, h('i'));
  const go = btn('Rapatrier dans le dépôt', async () => {
    go.disabled = true; bar.hidden = false;
    const done = new Map(); let ok = 0, ko = 0, n = 0;
    for (const u of urls) {
      const owner = refs.find(r => r.get() === u).p;
      try {
        const r = await fetch(u, { mode: 'cors' }); if (!r.ok) throw new Error(r.status);
        const blob = await r.blob();
        const name = decodeURIComponent(u.split('?')[0].split('/').pop()).replace(/\+/g, ' ') || 'image.jpg';
        const up = await prepareUpload(new File([blob], name, { type: blob.type || 'image/jpeg' }), `media/${owner.id}`, 'media');
        stageFile(up.path, up.blob); done.set(u, up.path); ok++;
      } catch (e) { ko++; }
      bar.firstChild.style.width = Math.round(++n / urls.size * 100) + '%';
    }
    refs.forEach(r => { if (done.has(r.get())) r.set(done.get(r.get())); });
    change({ nav: true });
    toast(ko ? `${ok} image${ok > 1 ? 's' : ''} rapatriée${ok > 1 ? 's' : ''}. ${ko} n’ont pas pu être lues depuis ce navigateur (le serveur d’origine les protège) : télécharge-les et renvoie-les depuis la fiche du contenu.` : `${ok} images rapatriées. Publie pour les envoyer dans le dépôt.`, ko ? 'bad' : 'ok', 10000);
    renderMain();
  }, 'sm dark');
  return h('div', { class: 'card', style: { marginBottom: '18px' } },
    h('header', null, h('h2', null, `${urls.size} image${urls.size > 1 ? 's' : ''} encore en ligne ailleurs`), h('div', { class: 'acts' }, go)),
    h('div', { class: 'body' }, h('p', { class: 'hint', style: { marginTop: 0 } }, 'Ces images viennent de l’ancien site (Squarespace) et sont affichées depuis son serveur. Pour que ton site n’en dépende plus, rapatrie-les : elles seront réduites puis envoyées dans media/ à la prochaine publication.'), bar));
}
function viewMedia() {
  const c = S.content, used = usedPaths();
  const box = h('div', { class: 'card' }, h('div', { class: 'empty' }, 'Lecture des fichiers du dépôt…'));
  const whoUses = path => {
    const out = [];
    c.posts.forEach(p => { if (p.thumb === path || p.thumbBack === path || p.media.some(m => m.src === path)) out.push(fr(p.title) || p.id); });
    c.models.forEach(m => { if (m.file === path || (m.textures || []).some(x => m.file.replace(/[^/]+$/, '') + x === path)) out.push('Modèle ' + m.name); });
    if (c.settings.logo === path) out.push('Logo');
    return out;
  };
  (async () => {
    let files = [];
    try { files = S.files || (S.files = await S.backend.listFiles(['media/', 'models/'])); }
    catch (e) { fill(box, h('div', { class: 'empty' }, 'Impossible de lister les fichiers : ' + humanError(e))); return; }
    const all = new Map(files.filter(f => !/(^|\/)\./.test(f.path)).map(f => [f.path, { ...f, state: 'online' }]));
    S.staged.forEach((s, path) => all.set(path, { path, size: s.blob.size, state: 'new' }));
    const rows = [...all.values()].sort((a, b) => a.path.localeCompare(b.path));
    const builtinFile = path => /^models\/[^/]+$/.test(path);   // les fichiers d'origine, à la racine de models/
    const unused = rows.filter(r => r.state === 'online' && !used.has(r.path) && !S.deletes.has(r.path) && !builtinFile(r.path));
    const selected = new Set();
    const delBtn = btn('Supprimer la sélection', () => { selected.forEach(p => S.deletes.add(p)); change({ nav: true }); toast(`${selected.size} fichier${selected.size > 1 ? 's' : ''} sera supprimé à la prochaine publication.`); renderMain(); }, 'sm danger', { disabled: true });
    const sync = () => { delBtn.disabled = !selected.size; delBtn.textContent = selected.size ? `Supprimer la sélection (${selected.size})` : 'Supprimer la sélection'; };
    const table = h('table', { class: 'files' },
      h('thead', null, h('tr', null, h('th', { style: { width: '30px' } }), h('th', { style: { width: '60px' } }), h('th', null, 'Fichier'), h('th', null, 'Utilisé par'), h('th', null, 'Taille'), h('th', null, 'État'))),
      h('tbody', null, rows.map(r => {
        const users = whoUses(r.path), isImg = /\.(jpe?g|png|webp|gif|svg)$/i.test(r.path), del = S.deletes.has(r.path);
        const can = unused.includes(r);
        const cb = can ? h('input', { type: 'checkbox', 'aria-label': 'Sélectionner ' + r.path }) : null;
        if (cb) cb.addEventListener('change', () => { cb.checked ? selected.add(r.path) : selected.delete(r.path); sync(); });
        return h('tr', { style: del ? { opacity: .5 } : null },
          h('td', null, cb), h('td', null, isImg ? h('img', { class: 'mini', src: fileURL(r.path), alt: '', loading: 'lazy' }) : h('span', { class: 'badge' }, extOf(r.path))),
          h('td', { class: 'p' }, r.path), h('td', null, users.length ? users.join(', ') : h('span', { style: { color: 'var(--ink-4)' } }, '—')),
          h('td', null, fmtSize(r.size)),
          h('td', null, del ? h('span', null, h('span', { class: 'badge warn' }, 'à supprimer'), ' ', btn('Garder', () => { S.deletes.delete(r.path); change({ nav: true }); renderMain(); }, 'sm ghost')) :
            r.state === 'new' ? h('span', { class: 'badge new' }, used.has(r.path) ? 'à envoyer' : 'ajouté, plus utilisé') : users.length ? h('span', { class: 'badge' }, 'en ligne') : builtinFile(r.path) ? h('span', { class: 'badge off' }, 'origine') : h('span', { class: 'badge off' }, 'inutilisé')));
      })));
    fill(box, 
      h('header', null, h('h2', null, `${rows.length} fichier${rows.length > 1 ? 's' : ''}`), h('div', { class: 'acts' },
        unused.length ? btn(`Tout sélectionner : ${unused.length} inutilisé${unused.length > 1 ? 's' : ''}`, () => { table.querySelectorAll('tbody input[type=checkbox]').forEach(cb => { cb.checked = true; selected.add(cb.closest('tr').querySelector('.p').textContent); }); sync(); }, 'sm') : null,
        delBtn, S.backend.kind === 'github' ? btn('Relire le dépôt', () => { S.files = null; renderMain(); }, 'sm ghost') : null)),
      rows.length ? h('div', { style: { overflowX: 'auto' } }, table) : h('div', { class: 'empty' }, S.backend.kind === 'demo' ? 'En démo, seuls les fichiers ajoutés depuis ce navigateur apparaissent ici.' : 'Aucun fichier dans media/ ni models/.'));
  })();
  return page('Médias', 'Tous les fichiers du dossier media/ et des modèles 3D. Les fichiers qui ne servent plus peuvent être supprimés pour garder le dépôt léger.', [], remoteBlock(), box);
}

/* ================================================================ Typographie (Réglages) */
function loadTypoFonts(settings) {   // polices Google choisies : chargées aussi dans le back-office pour les aperçus
  const urls = googleFontURLs(settings);
  urls.forEach(u => { if (!document.querySelector(`link[data-hc-font][href="${CSS.escape(u)}"]`)) document.head.appendChild(h('link', { rel: 'stylesheet', href: u, 'data-hc-font': '' })); });
}
const WEIGHTS = [[100, 'Thin 100'], [200, 'Extra light 200'], [300, 'Light 300'], [400, 'Regular 400'], [500, 'Medium 500'], [600, 'Semibold 600'], [700, 'Bold 700'], [800, 'Extra bold 800'], [900, 'Black 900']];
function typoBlock(s) {
  const box = h('div');
  const groups = [...new Set(TYPO.map(r => r.group))];
  const draw = () => fill(box, groups.map(g => h('div', { class: 'typo-group' }, h('h4', null, g), TYPO.filter(r => r.group === g).map(typoRow))));
  const typoRow = role => {
    const row = h('div', { class: 'typo-row' });
    const only = role.only || ['font', 'size', 'lh', 'weight', 'italic', 'ls', 'upper'];
    const get = k => typoOf(s, role.id)[k];
    const put = (k, v) => {
      s.typo = s.typo || {}; const o = s.typo[role.id] = s.typo[role.id] || {};
      if (v === '' || v === null || v === undefined || v === role[k] || (k === 'italic' && !v && !role.italic) || (k === 'upper' && !v && !role.upper) || (k === 'ls' && +v === (role.ls || 0))) delete o[k]; else o[k] = v;
      if (!Object.keys(o).length) delete s.typo[role.id];
      loadTypoFonts(s); change(); paint();
      if (role.id === 'logo') { const b = document.querySelector('.top .brand img'); if (b && !s.logo) b.src = defaultLogo(); const lp = document.querySelector('.logo-prev'); if (lp && !s.logo) lp.style.backgroundImage = `url("${defaultLogo()}")`; }
    };
    const num = (k, label, opts = {}) => { const i = h('input', { type: 'number', step: opts.step || 1, min: opts.min, max: opts.max, value: get(k) ?? '', placeholder: opts.ph }); i.addEventListener('input', () => put(k, i.value === '' ? '' : +i.value)); return h('label', null, label, i); };
    const ck = (k, label) => { const i = h('input', { type: 'checkbox', checked: !!get(k) }); i.addEventListener('change', () => put(k, i.checked)); return h('label', { class: 'ck' }, i, label); };
    const famCtl = () => {
      const cur = get('font'), isG = /^g:/.test(cur || '');
      const sel = h('select', null, [...new Set(FONTS.map(f => f.group))].map(gr => h('optgroup', { label: gr }, FONTS.filter(f => f.group === gr).map(f => h('option', { value: f.id, selected: f.id === cur }, f.label + (f.id === role.font ? ' · défaut' : ''))))),
        h('optgroup', { label: 'Google Fonts' }, h('option', { value: '__g', selected: isG }, 'Autre police Google Fonts…')));
      const gin = h('input', { type: 'text', placeholder: 'Nom exact, ex. Inter, Playfair Display', value: isG ? cur.slice(2) : '', spellcheck: 'false' });
      gin.hidden = !isG;
      sel.addEventListener('change', () => { if (sel.value === '__g') { gin.hidden = false; gin.focus(); if (gin.value.trim()) put('font', 'g:' + gin.value.trim()); } else { gin.hidden = true; put('font', sel.value); } });
      gin.addEventListener('change', () => { const v = gin.value.trim(); if (v) put('font', 'g:' + v); });
      return h('label', { class: 'fam' }, 'Police', sel, gin);
    };
    const weightCtl = () => { const sel = h('select', null, WEIGHTS.map(([w, l]) => h('option', { value: w, selected: +get('weight') === w }, l))); sel.addEventListener('change', () => put('weight', +sel.value)); return h('label', null, 'Graisse', sel); };
    const textCtl = () => { const i = h('input', { type: 'text', value: get('text') ?? '', maxlength: 4, style: { width: '70px' } }); i.addEventListener('input', () => put('text', i.value)); return h('label', null, 'Lettres', i); };
    const sample = h('div', { class: 'typo-sample' + (/^(bs|bseg|offh|offp|menu|ui|sig1|sig2)$/.test(role.id) ? ' light' : '') });
    const rst = btn('Rétablir', () => { if (s.typo) delete s.typo[role.id]; change(); draw(); if (role.id === 'logo') { const b = document.querySelector('.top .brand img'); if (b && !s.logo) b.src = defaultLogo(); } }, 'sm ghost rst');
    const paint = () => {
      const r = typoOf(s, role.id);
      row.classList.toggle('changed', !!r.changed); rst.hidden = !r.changed;
      if (role.id === 'logo') { fill(sample, h('img', { src: ringLogoURL((s.accent || '#ffcc00'), s), alt: '', style: { width: '64px', height: '64px', display: 'block' } })); sample.style.background = '#fff'; return; }
      const size = role.scale ? 22 * (r.scale || 100) / 100 : (r.size || 14);
      Object.assign(sample.style, { fontFamily: r.css, fontSize: Math.min(size, 56) + 'px', lineHeight: r.lh ? Math.min(r.lh, 64) + 'px' : '1.2', fontWeight: r.weight || 400, fontStyle: r.italic ? 'italic' : 'normal', letterSpacing: (r.ls || 0) + 'em', textTransform: r.upper ? 'uppercase' : 'none' });
      sample.textContent = role.sample || 'Hand Coded';
      if (document.fonts) document.fonts.load(`${r.italic ? 'italic ' : ''}${r.weight || 400} ${size}px ${r.css}`).catch(() => {});
    };
    const ctl = h('div', { class: 'typo-ctl' },
      only.includes('font') ? famCtl() : null,
      only.includes('size') ? num('size', role.id === 'logo' ? 'Taille' : 'Taille (px)', { min: 6, max: 160 }) : null,
      only.includes('lh') ? num('lh', 'Interligne (px)', { min: 6, max: 200, step: 0.5 }) : null,
      only.includes('weight') ? weightCtl() : null,
      only.includes('ls') ? num('ls', 'Espacement (em)', { step: 0.01, min: -0.2, max: 1, ph: '0' }) : null,
      only.includes('scale') ? num('scale', 'Taille (%)', { min: 50, max: 200, step: 5 }) : null,
      only.includes('text') ? textCtl() : null,
      only.includes('italic') ? ck('italic', 'Italique') : null,
      only.includes('upper') ? ck('upper', 'Majuscules') : null);
    fill(row, h('div', { class: 'nm' }, h('b', null, role.label), role.hint ? h('small', null, role.hint) : null, rst), ctl, sample);
    paint(); return row;
  };
  draw();
  return h('div', { class: 'block' }, h('h3', null, 'Typographie', h('small', null, 'police, taille, interligne, graisse de chaque texte du site')),
    h('p', { class: 'hint' }, 'Par défaut, le site garde la typographie d’origine. Un point jaune signale un réglage modifié ; « Rétablir » revient à l’origine. Les polices hébergées avec le site marchent partout, même hors ligne. Une police Google Fonts se charge depuis Google quand le site est en ligne : tape son nom exact, tel qu’il apparaît sur fonts.google.com.'),
    box,
    h('div', { style: { marginTop: '12px' } }, btn('Tout rétablir', () => { delete s.typo; change(); draw(); const b = document.querySelector('.top .brand img'); if (b && !s.logo) b.src = defaultLogo(); }, 'sm ghost')));
}

/* ================================================================ Vue : Réglages */
function viewSettings() {
  const c = S.content, s = c.settings;
  const lines = (obj, key, ph) => {
    const ta = h('textarea', { rows: 3, placeholder: ph }); ta.value = (obj[key] || []).join('\n');
    ta.addEventListener('input', () => { obj[key] = ta.value.split('\n').map(x => x.trim()).filter(Boolean); change(); });
    return ta;
  };
  const tickerTa = lines(s.home, 'ticker', 'Un slogan par ligne');
  /* Slogans reçus : lus dans la feuille Google, un clic les ajoute au bandeau LED */
  const inboxBox = h('div', { class: 'f' });
  const drawInbox = (state, rows = []) => {
    const ticker = new Set((s.home.ticker || []).map(x => x.toUpperCase()));
    fill(inboxBox, h('span', { class: 'lbl' }, 'Slogans reçus', rows.length ? h('small', null, ' ' + rows.length) : null),
      h('div', { style: { display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' } },
        btn(state === 'loading' ? 'Chargement…' : rows.length ? 'Actualiser' : 'Afficher les slogans reçus', loadInbox, 'sm', { disabled: state === 'loading' }),
        state && state !== 'loading' && state !== 'ok' ? h('span', { class: 'hint', style: { margin: 0 } }, state) : null),
      rows.length ? h('div', { class: 'inbox' }, rows.map(r => {
        const up = String(r.slogan).toUpperCase(), on = ticker.has(up);
        return h('div', { class: 'inbox-row' },
          h('span', { class: 'd' }, r.date ? new Date(r.date).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: '2-digit' }) : ''),
          h('span', { class: 's' }, r.slogan), h('span', { class: 'm' }, [r.lang, r.tag].filter(Boolean).join(' · ')),
          btn(on ? 'Au bandeau' : '+ Bandeau', () => { s.home.ticker = [...(s.home.ticker || []), up]; tickerTa.value = s.home.ticker.join('\n'); change(); drawInbox('ok', rows); }, 'sm ghost', { disabled: on }));
      })) : null);
  };
  const loadInbox = async () => {
    if (!/^https:\/\//.test(s.sloganInbox || '')) { drawInbox('Renseigne d’abord l’adresse de collecte ci-dessus.'); return; }
    drawInbox('loading');
    try {
      const r = await fetch(s.sloganInbox + (s.sloganInbox.includes('?') ? '&' : '?') + 'limit=500');
      const d = await r.json(); drawInbox(d.slogans && d.slogans.length ? 'ok' : 'Aucun slogan pour l’instant.', d.slogans || []);
    } catch (e) { drawInbox('Lecture impossible : vérifie l’adresse et que le script est déployé pour « Tout le monde ».'); }
  };
  drawInbox('');
  /* Logo et couleur */
  const logoPrev = h('div', { class: 'logo-prev' });
  const logoActs = h('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' } });
  const drawLogo = () => {
    logoPrev.style.backgroundImage = `url("${s.logo ? fileURL(s.logo) : defaultLogo()}")`;
    fill(logoActs, btn(s.logo ? 'Remplacer…' : 'Choisir un logo…', () => filePicker('image/*', false, pickLogo), 'sm'), s.logo ? btn('Logo par défaut', () => { s.logo = ''; change(); drawLogo(); }, 'sm ghost') : null,
      h('span', { class: 'hint', style: { margin: 0 } }, 'SVG ou PNG carré, fond transparent. Affiché en haut à droite et sur l’accueil.'));
  };
  const pickLogo = async files => { if (!files[0]) return; try { const up = await prepareUpload(files[0], 'media/site', 'logo'); stageFile(up.path, up.blob); s.logo = up.path; change(); drawLogo(); } catch (e) { toast(e.message, 'bad'); } };
  drawLogo();
  const color = h('input', { type: 'color', value: s.accent || '#ffcc00', 'aria-label': 'Couleur d’accent' });
  const sw = h('div', { class: 'swatches' });
  const tint = col => { s.accent = col; color.value = col; document.documentElement.style.setProperty('--accent', col); drawLogo(); const b = document.querySelector('.top .brand img'); if (b && !s.logo) b.src = defaultLogo(); change(); drawSw(); };
  const drawSw = () => fill(sw, color, ...['#ffcc00', '#f1b800', '#ff5a1f', '#e8175d', '#00b3a4', '#2f6bff', '#111111'].map(col => h('button', { type: 'button', style: { background: col }, 'aria-label': col, 'aria-pressed': String((s.accent || '').toLowerCase() === col), onclick: () => tint(col) })));
  color.addEventListener('input', () => tint(color.value));
  drawSw();
  /* Bureaux */
  const offBox = h('div');
  const drawOff = () => fill(offBox, ...s.offices.map((o, i) => {
    if (typeof o.name !== 'object') o.name = Object.fromEntries(LANGS.map(l => [l, o.name || '']));
    const ta = h('textarea', { rows: 2, placeholder: 'Adresse, une ligne par ligne' }); ta.value = (o.lines || []).join('\n');
    ta.addEventListener('input', () => { o.lines = ta.value.split('\n').map(x => x.trim()).filter(Boolean); change(); });
    return h('div', { class: 'office-row' },
      siteLangs().map(l => h('div', { class: 'lang', 'data-l': l.toUpperCase() }, textInput(() => o.name[l] ?? '', v => { o.name[l] = v; }, { placeholder: 'Nom (' + LANG_NAMES[l] + ')' }))),
      h('div', { class: 'full' }, ta), h('div', { class: 'full' }, textInput(() => o.mail, v => { o.mail = v.trim(); }, { type: 'email', placeholder: 'contact@…' })),
      btn('Retirer ce bureau', () => { s.offices.splice(i, 1); change(); drawOff(); }, 'sm ghost danger del'));
  }), btn('+ Ajouter un bureau', () => { s.offices.push({ name: emptyField(), lines: [], mail: '' }); change(); drawOff(); }, 'sm', { style: { marginTop: '10px' } }));
  drawOff();
  const socBox = h('div');
  const drawSoc = () => fill(socBox, ...s.social.map((so, i) => h('div', { class: 'social-row' },
    textInput(() => so.label, v => { so.label = v; }, { placeholder: 'Instagram' }), textInput(() => so.url, v => { so.url = v.trim(); }, { type: 'url', placeholder: 'https://…' }),
    btn('×', () => { s.social.splice(i, 1); change(); drawSoc(); }, 'sm icon ghost danger', { 'aria-label': 'Retirer' }))),
  btn('+ Ajouter un lien', () => { s.social.push({ label: '', url: '' }); change(); drawSoc(); }, 'sm', { style: { marginTop: '10px' } }));
  drawSoc();
  const langBox = h('div', { class: 'chips' });
  const drawLangs = () => fill(langBox, ...LANGS.map(l => h('button', { type: 'button', class: 'chip', 'aria-pressed': String(s.langs.includes(l)), onclick: () => {
      if (s.langs.includes(l)) { if (s.langs.length === 1) return; s.langs = s.langs.filter(x => x !== l); } else s.langs = LANGS.filter(x => x === l || s.langs.includes(x));
      if (!s.langs.includes(s.defaultLang)) s.defaultLang = s.langs[0]; change(); renderMain();
    } }, LANG_NAMES[l])),
    s.langs.length > 1 ? h('span', { class: 'hint', style: { margin: '0 0 0 6px' } }, 'Si la langue du visiteur n’est pas proposée : ', selectInput(s.langs.map(l => ({ value: l, label: LANG_NAMES[l] })), () => s.defaultLang, v => { s.defaultLang = v; })) : null);
  drawLangs();
  const tagl = l => { const ta = h('textarea', { rows: 3 }); ta.value = (s.taglines[l] || []).join('\n'); ta.addEventListener('input', () => { s.taglines[l] = ta.value.split('\n').map(x => x.trim()).filter(Boolean); change(); }); return h('div', { class: 'lang', 'data-l': l.toUpperCase() }, ta); };
  return page('Réglages', 'Identité, accueil et coordonnées, dans chaque langue du site.', [],
    h('div', { class: 'card' },
      h('div', { class: 'block' }, h('h3', null, 'Identité'),
        h('div', { class: 'grid2' }, field('Nom du studio', textInput(() => s.name, v => { s.name = v; })), field('Depuis', textInput(() => s.since, v => { s.since = v; }, { placeholder: '2012' }))),
        h('div', { class: 'f' }, h('span', { class: 'lbl' }, 'Logo'), h('div', { style: { display: 'flex', gap: '14px', alignItems: 'center' } }, logoPrev, logoActs)),
        h('div', { class: 'f' }, h('span', { class: 'lbl' }, 'Couleur d’accent'), sw, h('p', { class: 'hint' }, 'Bandeau LED, tirets des cartes, lieux, bouton ENTER.'))),
      h('div', { class: 'block' }, h('h3', null, 'Apparence'),
        toggle('Site en négatif à l’arrivée', () => s.negative, v => { s.negative = v; }),
        h('p', { class: 'hint' }, 'Toute la page s’inverse : fond noir, scène 3D et textes en négatif. Les images et vidéos des contenus gardent leurs vraies couleurs, et la couleur d’accent reste la même.'),
        h('div', { style: { marginTop: '12px' } }, toggle('Signer les vignettes 3D (œuvre · auteur · crédit photo)', () => s.signImages !== false, v => { s.signImages = v; })),
        h('p', { class: 'hint' }, 'Une mention discrète en bas de chaque vignette des cartes 3D, pour que l’œuvre d’un artiste ne passe pas pour une création du studio. L’auteur et le crédit photo (celui de la première image) se règlent dans chaque contenu.'),
        h('div', { style: { marginTop: '12px' } }, toggle('Les visiteurs basculent négatif / positif en cliquant sur le logo', () => s.negativeToggle !== false, v => { s.negativeToggle = v; })),
        h('p', { class: 'hint' }, 'Le logo par défaut a un anneau à la couleur d’accent sur fond blanc, et blanc sur fond noir. Le choix du visiteur est gardé pour sa prochaine visite.')),
      typoBlock(s),
      h('div', { class: 'block' }, h('h3', null, 'Showreel'),
        field('Lien de la vidéo', textInput(() => s.showreel, v => { s.showreel = v.trim(); }, { placeholder: 'https://youtu.be/…', spell: false }), 'YouTube, Vimeo ou adresse d’un fichier MP4. Un bouton « Showreel » sous le logo l’ouvre à tout moment : l’écran glisse au premier plan, la vidéo part son coupé, le visiteur active le son d’un clic. Laisse vide pour retirer le bouton.')),
      h('div', { class: 'block' }, h('h3', null, 'Langues du site'), langBox,
        h('p', { class: 'hint' }, 'Le site s’ouvre dans la langue du navigateur du visiteur quand elle est proposée. Il peut ensuite en changer en bas à gauche. Le back-office affiche un champ par langue activée.')),
      h('div', { class: 'block' }, h('h3', null, 'Signature', h('small', null, 'en haut à gauche du site, une ligne par ligne')), h('div', { class: 'pair' }, siteLangs().map(tagl))),
      h('div', { class: 'block' }, h('h3', null, 'Accueil'),
        pairInput('Invitation dans le champ', s.home, 'placeholder', { hint: 'Le texte gris du grand champ où les visiteurs tapent leur bullshit slogan.' }),
        pairInput('Exemple sous le champ', s.home, 'example'),
        field('Slogans du bandeau LED', tickerTa, 'Ils défilent en points LED tout en haut. Les slogans tapés par un visiteur s’ajoutent devant, sur son écran.'),
        field('Collecte des slogans', textInput(() => s.sloganInbox, v => { s.sloganInbox = v.trim(); }, { placeholder: 'https://script.google.com/macros/s/…/exec', spell: false }), 'Adresse d’un script Google relié à une feuille de calcul : chaque slogan validé par un visiteur y est enregistré, avec la date, la langue et le tag du lien client. La mise en place prend cinq minutes, voir le fichier tools/slogans-google-sheet.gs. Vide : les slogans restent sur l’écran du visiteur.'),
        inboxBox,
        pairInput('Bouton d’entrée', s.home, 'enter'),
        field('Section d’arrivée', selectInput(c.sections.map(x => ({ value: x.id, label: fr(x.name) || x.id })), () => s.startSection, v => { s.startSection = v; }))),
      h('div', { class: 'block' }, h('h3', null, 'Bureaux'), offBox),
      h('div', { class: 'block' }, h('h3', null, 'Réseaux et liens'), socBox)));
}

/* ================================================================ Vue : Historique */
function viewHistory() {
  const box = h('div', { class: 'card' }, h('div', { class: 'empty' }, 'Lecture de l’historique…'));
  if (S.backend.kind !== 'github') {
    fill(box, h('div', { class: 'block' }, h('h3', null, 'Démo'),
      h('p', null, 'En démo, chaque publication remplace la précédente dans ce navigateur. Sur GitHub, chaque publication devient une version que tu peux restaurer ici.'),
      btn('Revenir au contenu d’origine', async () => { if (!await confirmBox('Réinitialiser la démo', 'Le contenu de démonstration d’origine sera rechargé. Tes essais seront effacés.', 'Réinitialiser', 'danger')) return; await S.backend.reset(); await kvDel(S.draftKey); location.reload(); }, 'danger')));
    return page('Historique', null, [], box);
  }
  (async () => {
    try {
      const commits = await S.backend.lastCommits(20);
      fill(box, ...commits.map((cm, i) => h('div', { class: 'commit' },
        h('div', null, h('b', null, cm.commit.message.split('\n')[0]), h('small', null, `${new Date(cm.commit.author.date).toLocaleString('fr-FR')} · ${cm.commit.author.name}`, i === 0 ? ' · version en ligne' : '')),
        h('div', { style: { display: 'flex', gap: '6px' } },
          h('a', { class: 'btn sm ghost', href: cm.html_url, target: '_blank', rel: 'noopener' }, 'Sur GitHub'),
          i === 0 ? null : btn('Restaurer', async () => {
            if (!await confirmBox('Restaurer cette version', 'Le contenu de cette version remplace ton brouillon. Rien ne change en ligne tant que tu ne publies pas. Les images supprimées depuis peuvent manquer.', 'Restaurer dans le brouillon')) return;
            try { S.content = await S.backend.loadAt(cm.sha); change({ nav: true }); toast('Version chargée dans le brouillon. Vérifie avec l’aperçu, puis publie.'); }
            catch (e) { toast('Lecture impossible : ' + humanError(e), 'bad'); }
          }, 'sm')))));
      if (!commits.length) fill(box, h('div', { class: 'empty' }, 'Pas encore de version publiée.'));
    } catch (e) { fill(box, h('div', { class: 'empty' }, 'Impossible de lire l’historique : ' + humanError(e))); }
  })();
  return page('Historique', 'Chaque publication est une version du site. Tu peux en recharger une dans le brouillon, la vérifier, puis la republier.', [], box);
}

/* ================================================================ Aperçu du brouillon */
function openPreview(start) {
  if (location.protocol === 'file:' && !window.HC_SITE_HTML) toast('Ouvert depuis le disque, l’aperçu montre la version enregistrée dans le dossier, sans tes modifications en cours. En ligne, il montre le brouillon.', 'ok', 9000);
  const files = {};
  S.recent.forEach((s, p) => { files[p] = s.url; }); S.staged.forEach((s, p) => { files[p] = s.url; });
  if (S.backend.kind === 'demo' && S.backend.urls) S.backend.urls.forEach((u, p) => { if (!files[p]) files[p] = u; });
  const sections = S.content.sections.filter(s => s.visible);
  let current = start || (S.view === 'posts' ? S.filter.section : S.view === 'sections' ? S.sel.section : '') || S.content.settings.startSection;
  if (current && !sections.find(s => s.id === current)) current = sections[0] && sections[0].id;
  const frameWrap = h('div', { class: 'frame' });
  let size = 'desk';
  const load = () => {
    window.__hcPreview = { content: structuredClone(S.content), files, start: current };
    const ifr = h('iframe', { title: 'Aperçu du site', allow: 'fullscreen' });
    if (window.HC_SITE_HTML) ifr.srcdoc = window.HC_SITE_HTML; else ifr.src = SITE + 'index.html?preview=' + Date.now();
    const dims = { desk: ['100%', '100%'], tab: ['820px', '1080px'], mob: ['390px', '780px'] }[size];
    ifr.style.width = dims[0]; ifr.style.height = dims[1]; ifr.style.maxHeight = '100%';
    fill(frameWrap, ifr);
  };
  const sizes = h('div', { class: 'sizes', role: 'group', 'aria-label': 'Taille d’écran' });
  const drawSizes = () => fill(sizes, ...[['desk', 'Bureau'], ['tab', 'Tablette'], ['mob', 'Mobile']].map(([v, l]) => h('button', { type: 'button', 'aria-pressed': String(size === v), onclick: () => { size = v; drawSizes(); load(); } }, l)));
  drawSizes();
  const sel = h('select', { 'aria-label': 'Section' }, sections.map(s => h('option', { value: s.id, selected: s.id === current }, fr(s.name))));
  sel.addEventListener('change', () => { current = sel.value; load(); });
  const close = () => { wrap.remove(); document.removeEventListener('keydown', onKey); };
  const onKey = e => { if (e.key === 'Escape' && document.activeElement && !document.activeElement.closest('iframe')) close(); };
  const wrap = h('div', { class: 'preview', role: 'dialog', 'aria-label': 'Aperçu' },
    h('div', { class: 'bar' }, h('b', null, 'Aperçu'), h('span', null, isDirty() ? 'avec les modifications non publiées' : 'identique au site en ligne'), h('span', { class: 'sp' }), sel, sizes,
      btn('Recharger', load, 'sm'), btn('Fermer', close, 'sm primary')),
    frameWrap);
  document.body.appendChild(wrap); document.addEventListener('keydown', onKey);
  load();
}

/* ================================================================ Connexion */
const LS = 'hc-admin';
function readSaved() {
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(LS) || '{}'); } catch (e) {}
  try { const tk = sessionStorage.getItem(LS + ':token'); if (tk && !saved.token) saved.token = tk; } catch (e) {}
  return saved;
}
function guessRepo() {   // sur https://<owner>.github.io/<repo>/admin/ on devine le dépôt
  const m = /^([a-z0-9-]+)\.github\.io$/i.exec(location.hostname); if (!m) return {};
  const seg = location.pathname.split('/').filter(Boolean);
  return { owner: m[1], repo: seg.length > 1 && seg[0] !== 'admin' ? seg[0] : `${m[1]}.github.io` };
}
async function loginView(error) {
  let cfg = {};
  try { const r = await fetch('config.json', { cache: 'no-store' }); if (r.ok) cfg = await r.json(); } catch (e) {}
  const saved = readSaved(), g = guessRepo();
  const v = k => saved[k] || cfg[k] || g[k] || '';
  const owner = h('input', { type: 'text', value: v('owner'), required: true, autocomplete: 'username', spellcheck: 'false' });
  const repo = h('input', { type: 'text', value: v('repo'), required: true, spellcheck: 'false' });
  const branch = h('input', { type: 'text', value: v('branch') || 'main', spellcheck: 'false' });
  const root = h('input', { type: 'text', value: v('root'), placeholder: '(racine du dépôt)', spellcheck: 'false' });
  const token = h('input', { type: 'password', value: saved.token || '', required: true, autocomplete: 'current-password', placeholder: 'github_pat_…', spellcheck: 'false' });
  const remember = h('input', { type: 'checkbox', checked: !!saved.remember });
  const err = h('p', { class: 'err', role: 'alert', hidden: !error }, error || '');
  const submit = h('button', { type: 'submit', class: 'btn primary' }, 'Se connecter');
  const form = h('form', { onsubmit: async e => {
    e.preventDefault(); err.hidden = true; submit.disabled = true; submit.textContent = 'Connexion…';
    const conf = { owner: owner.value.trim(), repo: repo.value.trim(), branch: branch.value.trim() || 'main', root: root.value.trim(), token: token.value.trim(), remember: remember.checked };
    try { await connect(conf); }
    catch (ex) { err.textContent = 'Connexion impossible : ' + humanError(ex); err.hidden = false; submit.disabled = false; submit.textContent = 'Se connecter'; }
  } },
    h('h2', null, 'Connexion'),
    h('p', { class: 'lead' }, 'Le back-office publie directement dans ton dépôt GitHub. Il lui faut un jeton d’accès limité à ce dépôt.'),
    h('details', null, h('summary', null, 'Créer le jeton (2 minutes)'),
      h('ol', null,
        h('li', null, 'Ouvre ', h('a', { href: 'https://github.com/settings/personal-access-tokens/new', target: '_blank', rel: 'noopener' }, 'GitHub › Fine-grained tokens › Generate new token'), '.'),
        h('li', null, 'Repository access : « Only select repositories », choisis le dépôt du site.'),
        h('li', null, 'Permissions › Repository › ', h('b', null, 'Contents : Read and write'), '. Rien d’autre.'),
        h('li', null, 'Choisis une date d’expiration, génère, et colle le jeton ci-dessous.'))),
    err,
    h('div', { class: 'grid2' }, field('Propriétaire (compte GitHub)', owner), field('Dépôt', repo)),
    field('Jeton d’accès', token, 'Il reste dans ce navigateur et ne part que vers api.github.com.'),
    h('details', { style: { background: '#fff' } }, h('summary', null, 'Options avancées'), h('div', { class: 'grid2', style: { marginTop: '12px' } }, field('Branche', branch), field('Dossier du site dans le dépôt', root, 'Vide si le site est à la racine.'))),
    h('label', { class: 'switch', style: { margin: '4px 0 16px' } }, remember, 'Rester connectée sur cet ordinateur'),
    h('div', { class: 'actions' }, submit, btn('Essayer sans GitHub (démo)', () => startDemo(), 'ghost')));
  fill(app, h('div', { class: 'login' },
    h('aside', { class: 'side' }, h('div', null, h('img', { src: SITE + 'assets/hc/ui/logo-default.svg', alt: '' }), h('h1', null, 'Hand Coded.'), h('p', null, 'Back-office du site : sections, objets 3D, contenus, tags.')), h('small', null, 'Moteur 3D d’après le site Fat-Man Collective de 2008.')),
    form));
  (owner.value && repo.value ? token : owner).focus();
}
async function connect(conf, silent) {
  const be = new GitHubBackend(conf);
  await be.check();
  const content = await be.load();
  S.head = await be.req(`${be.repoPath}/git/ref/heads/${encodeURIComponent(be.cfg.branch)}`).then(r => r.object.sha);
  try {
    localStorage.setItem(LS, JSON.stringify({ owner: conf.owner, repo: conf.repo, branch: conf.branch, root: conf.root, remember: !!conf.remember, token: conf.remember ? conf.token : undefined }));
    if (!conf.remember) sessionStorage.setItem(LS + ':token', conf.token); else sessionStorage.removeItem(LS + ':token');
  } catch (e) {}
  S.backend = be; S.cfg = conf; S.draftKey = `draft:${conf.owner}/${conf.repo}@${be.cfg.branch}`;
  await start(content);
}
function logout() {
  try { const s = JSON.parse(localStorage.getItem(LS) || '{}'); delete s.token; localStorage.setItem(LS, JSON.stringify(s)); sessionStorage.removeItem(LS + ':token'); } catch (e) {}
  location.reload();
}
async function startDemo() {
  S.backend = new DemoBackend(SITE); S.draftKey = 'draft:demo:v6';
  const content = await S.backend.load(); await S.backend.prepare(content);
  await start(content);
}
async function start(content) {
  S.content = content; S.base = JSON.stringify(content);
  try { loadTypoFonts(content.settings); if (document.fonts) await Promise.race([Promise.all(typoFontLoads(content.settings).map(f => document.fonts.load(f).catch(() => {}))), new Promise(r => setTimeout(r, 2500))]); } catch (e) {}
  await restoreDraft();
  document.documentElement.style.setProperty('--accent', S.content.settings.accent || '#ffcc00');
  const v = (location.hash.match(/^#\/(\w+)/) || [])[1]; if (VIEWS.some(([id]) => id === v)) S.view = v;
  render();
}
document.addEventListener('keydown', e => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 's' && S.content) { e.preventDefault(); publish(); } });
window.addEventListener('beforeunload', () => { if (S.content) saveDraft(); });

(async function boot() {
  try {
    if (DEMO) { await startDemo(); return; }
    const saved = readSaved();
    if (saved.token && saved.owner && saved.repo) {
      try { await connect(saved, true); return; } catch (e) { return loginView('Reconnexion impossible : ' + humanError(e)); }
    }
    await loginView();
  } catch (e) { console.error(e); fill(app, h('p', { class: 'boot' }, 'Le back-office n’a pas pu démarrer : ' + (e.message || e))); }
})();

window.__admin = { S, publish, go, openPreview, importModelFiles };
