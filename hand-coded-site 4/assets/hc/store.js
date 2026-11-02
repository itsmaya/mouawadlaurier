/*
 * Hand Coded - module partagé entre le site public et le back-office.
 * Contenu, traductions, assainissement du HTML, images, et les trois backends :
 *  - StaticBackend : le site public lit content/content.json (GitHub Pages)
 *  - GitHubBackend : le back-office lit et publie dans le dépôt via l'API GitHub (un commit par publication)
 *  - DemoBackend   : aperçu sans serveur, tout reste dans le navigateur (IndexedDB)
 */

export const LANGS = ['en', 'fr', 'ca', 'es'];
export const LANG_NAMES = { en: 'English', fr: 'Français', ca: 'Català', es: 'Español' };
/* Si une traduction manque : le catalan se rabat sur l'espagnol, puis sur l'anglais. */
const FALLBACK = { en: ['fr', 'es', 'ca'], fr: ['en', 'es', 'ca'], ca: ['es', 'en', 'fr'], es: ['ca', 'en', 'fr'] };

/* ---------------------------------------------------------------- Traductions */
export function t(field, lang) {
  if (field == null) return '';
  if (typeof field === 'string') return field;
  if (field[lang]) return field[lang];
  for (const l of FALLBACK[lang] || LANGS) if (field[l]) return field[l];
  return '';
}
export const UI = {
  en: { all: 'All', postedIn: 'Filed under', visit: 'Visit the site:', who: 'Who worked on this project?', leftToRight: 'From left to right.',
        enter: 'Enter', loading: 'Loading', prev: 'Previous posts', next: 'Next posts', keys: 'Keyboard shortcuts', animation: 'Animation',
        section: 'Section', move: 'Move', zoom: 'Zoom', openClose: 'Open / Close', space: 'SPACE BAR', loadError: 'The 3D scene could not load: ', lang: 'Language', photo: 'Photo', toNeg: 'Switch to negative', toPos: 'Switch to positive', play: 'Play', close: 'Close', soundOn: 'Sound on', soundOff: 'Mute', sent: 'Your slogan is now scrolling at the top.', bsLabel: 'Type your bullshit slogan, then press Enter' },
  fr: { all: 'Tout', postedIn: 'Classé dans', visit: 'Voir le site :', who: 'Qui a travaillé sur ce projet ?', leftToRight: 'De gauche à droite.',
        enter: 'Entrer', loading: 'Chargement', prev: 'Contenus précédents', next: 'Contenus suivants', keys: 'Raccourcis clavier', animation: 'Animation',
        section: 'Section', move: 'Bouger', zoom: 'Zoom', openClose: 'Ouvrir / Fermer', space: 'ESPACE', loadError: "La scène 3D n'a pas pu se charger : ", lang: 'Langue', photo: 'Photo', toNeg: 'Passer en négatif', toPos: 'Passer en positif', play: 'Lire', close: 'Fermer', soundOn: 'Activer le son', soundOff: 'Couper le son', sent: 'Ton slogan défile en haut de la page.', bsLabel: 'Tape ton bullshit slogan, puis Entrée' },
  ca: { all: 'Tot', postedIn: 'Classificat a', visit: 'Visita el web:', who: 'Qui hi ha treballat?', leftToRight: 'D\'esquerra a dreta.',
        enter: 'Entra', loading: 'Carregant', prev: 'Anteriors', next: 'Següents', keys: 'Dreceres de teclat', animation: 'Animació',
        section: 'Secció', move: 'Moure', zoom: 'Zoom', openClose: 'Obrir / Tancar', space: 'ESPAI', loadError: 'No s\'ha pogut carregar l\'escena 3D: ', lang: 'Idioma', photo: 'Foto', toNeg: 'Passar a negatiu', toPos: 'Passar a positiu', play: 'Reprodueix', close: 'Tanca', soundOn: 'Activa el so', soundOff: 'Silencia', sent: 'El teu eslògan ja passa a dalt de la pàgina.', bsLabel: 'Escriu el teu bullshit slogan i prem Retorn' },
  es: { all: 'Todo', postedIn: 'Archivado en', visit: 'Visita la web:', who: '¿Quién ha trabajado en este proyecto?', leftToRight: 'De izquierda a derecha.',
        enter: 'Entrar', loading: 'Cargando', prev: 'Anteriores', next: 'Siguientes', keys: 'Atajos de teclado', animation: 'Animación',
        section: 'Sección', move: 'Mover', zoom: 'Zoom', openClose: 'Abrir / Cerrar', space: 'ESPACIO', loadError: 'No se ha podido cargar la escena 3D: ', lang: 'Idioma', photo: 'Foto', toNeg: 'Pasar a negativo', toPos: 'Pasar a positivo', play: 'Reproducir', close: 'Cerrar', soundOn: 'Activar el sonido', soundOff: 'Silenciar', sent: 'Tu eslogan ya pasa arriba de la página.', bsLabel: 'Escribe tu bullshit slogan y pulsa Intro' },
};

/* ---------------------------------------------------------------- Styles et cartes disponibles */
export const LAYOUTS = {
  carousel: { label: { en: 'Carousel', fr: 'Carrousel' }, hint: { en: 'Cards in a ring around the object', fr: "Les cartes en cercle autour de l'objet" } },
  arc:      { label: { en: 'Arc', fr: 'Arc' }, hint: { en: 'A rainbow arc above the object, facing the visitor', fr: "Un arc-en-ciel au-dessus de l'objet, face au visiteur" } },
  fan:      { label: { en: 'Fan', fr: 'Éventail' }, hint: { en: 'Two fans, front and back, cards turn on focus', fr: "Deux éventails devant et derrière, les cartes pivotent au focus" } },
  map:      { label: { en: 'Map', fr: 'Carte' }, hint: { en: 'Cards placed by city, linked to the ground', fr: 'Les cartes placées par ville, reliées au sol' } },
  spiral:   { label: { en: 'Spiral', fr: 'Spirale' }, hint: { en: 'A rising helix around the object', fr: "Une hélice qui monte autour de l'objet" } },
  wall:     { label: { en: 'Wall', fr: 'Mur' }, hint: { en: 'A grid behind the object, like a mood board', fr: "Une grille derrière l'objet, comme un mur d'images" } },
};
export const CARDS = {
  image:    { label: { en: 'Image', fr: 'Image' }, size: [256, 169], open: 'strip' },
  portrait: { label: { en: 'Portrait', fr: 'Portrait' }, size: [90, 90], open: 'focus3d' },
  text:     { label: { en: 'Text', fr: 'Texte' }, size: [312, 78], open: 'strip' },
  place:    { label: { en: 'Place', fr: 'Lieu' }, size: [140, 130], open: 'strip' },
};

/* ---------------------------------------------------------------- Contenu */
export function emptyField() { return Object.fromEntries(LANGS.map(l => [l, ''])); }
export function normalizeContent(c) {
  c = c && typeof c === 'object' ? c : {};
  c.version = c.version || 1;
  c.settings = Object.assign({ name: 'Hand Coded', since: '', langs: LANGS.slice(), defaultLang: 'en', accent: '#ffcc00', logo: '', negative: false, negativeToggle: true, signImages: true, showreel: '', sloganInbox: '', taglines: { en: [], fr: [] },
    home: {}, offices: [], social: [], startSection: '' }, c.settings || {});
  const h = c.settings.home;
  h.headline = h.headline || emptyField(); h.sub = h.sub || emptyField(); h.enter = h.enter || { en: 'Enter', fr: 'Entrer', ca: 'Entra', es: 'Entrar' };
  h.ticker = Array.isArray(h.ticker) ? h.ticker : []; h.figures = Array.isArray(h.figures) ? h.figures : [];
  h.placeholder = h.placeholder || { en: 'type bullshit slogan here', fr: 'tape ton bullshit slogan ici', ca: 'escriu aquí el teu bullshit slogan', es: 'escribe aquí tu bullshit slogan' }; h.example = h.example || emptyField();
  c.models = Array.isArray(c.models) ? c.models : [];
  c.sections = Array.isArray(c.sections) ? c.sections : [];
  c.sections.forEach(s => {
    s.tags = Array.isArray(s.tags) ? s.tags : [];
    s.layout = LAYOUTS[s.layout] ? s.layout : 'carousel';
    s.card = CARDS[s.card] ? s.card : 'image';
    s.open = s.open === 'focus3d' ? 'focus3d' : 'strip';
    s.perPage = Math.max(1, Math.min(40, +s.perPage || 8));
    if (s.visible === undefined) s.visible = true;
    s.network = !!s.network;
  });
  c.posts = Array.isArray(c.posts) ? c.posts : [];
  c.posts.forEach(p => {
    ['title', 'subtitle', 'place', 'body'].forEach(k => { if (!p[k] || typeof p[k] !== 'object') p[k] = Object.fromEntries(LANGS.map(l => [l, p[k] || ''])); LANGS.forEach(l => { if (p[k][l] == null) p[k][l] = ''; }); });
    p.tags = Array.isArray(p.tags) ? p.tags : []; p.media = Array.isArray(p.media) ? p.media : []; p.team = Array.isArray(p.team) ? p.team : [];
    p.author = typeof p.author === 'string' ? p.author : '';   // auteur de l'œuvre, signé sur les images
    p.media.forEach(m => { if (m && typeof m.credit !== 'string') m.credit = ''; });
    p.spots = Array.isArray(p.spots) ? p.spots.filter(validLoc) : [];   // lieux d'intervention, pour le réseau de la carte
    if (p.published === undefined) p.published = true;
  });
  return c;
}
export function postsOf(content, sectionId, { all = false } = {}) {
  return content.posts.filter(p => p.section === sectionId && (all || p.published)).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}
export function slugify(s) {
  return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48) || 'item';
}
export function uniqueId(base, taken) {
  let id = slugify(base), n = 2; const set = new Set(taken);
  while (set.has(id)) id = slugify(base) + '-' + n++;
  return id;
}
export function escapeHTML(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

/* Seuls quelques éléments de mise en forme passent : le texte saisi ne peut pas injecter de script. */
const ALLOWED = new Set(['P', 'BR', 'STRONG', 'B', 'EM', 'I', 'A', 'UL', 'OL', 'LI', 'H3']);
export function sanitizeHTML(html) {
  const doc = new DOMParser().parseFromString(`<div>${html || ''}</div>`, 'text/html');
  const root = doc.body.firstChild;
  (function clean(node) {
    [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) return;
      if (n.nodeType !== 1) { n.remove(); return; }
      clean(n);
      if (n.tagName === 'DIV') { const p = doc.createElement('p'); while (n.firstChild) p.appendChild(n.firstChild); n.replaceWith(p); return; }
      if (!ALLOWED.has(n.tagName)) { n.replaceWith(...n.childNodes); return; }
      [...n.attributes].forEach(a => { if (!(n.tagName === 'A' && a.name === 'href')) n.removeAttribute(a.name); });
      if (n.tagName === 'A') {
        const href = n.getAttribute('href') || '';
        if (!/^(https?:|mailto:)/i.test(href)) n.removeAttribute('href');
        else { n.setAttribute('target', '_blank'); n.setAttribute('rel', 'noopener'); }
      }
    });
  })(root);
  return root.innerHTML.replace(/<p>(\s|&nbsp;|<br>)*<\/p>/g, '').trim();
}
export function htmlToText(html) {
  const d = new DOMParser().parseFromString(`<div>${(html || '').replace(/<\/p>|<br\s*\/?>/gi, '\n')}</div>`, 'text/html');
  return d.body.textContent.split('\n').map(s => s.trim()).filter(Boolean);
}

export const validLoc = l => !!l && isFinite(l.lat) && isFinite(l.lon) && l.lat !== '' && l.lon !== '';
/* Noms français ou locaux -> nom de la table des villes */
export const CITY_ALIASES = { Barcelone: 'Barcelona', Venise: 'Venice', Bruxelles: 'Brussels', 'Pékin': 'Beijing', Pekin: 'Beijing', Londres: 'London', Lisbonne: 'Lisbon',
  'Séoul': 'Seoul', Mexico: 'Mexico City', 'Montréal': 'Montreal', Beyrouth: 'Beirut', 'Bogotá': 'Bogota', 'Dubaï': 'Dubai', 'Murano': 'Murano', 'Charjah': 'Sharjah', 'Lausana': 'Lausanne' };
/* Villes connues citées dans un texte (« Venice Biennale, Dakar » -> Venice, Dakar) */
export function findCities(text) {
  const out = [], s = ' ' + String(text || '') + ' ';
  const names = [...Object.keys(CITIES), ...Object.keys(CITY_ALIASES)].sort((a, b) => b.length - a.length);
  let rest = s;
  for (const n of names) {
    const re = new RegExp('[^\\p{L}]' + n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![\\p{L}])', 'iu');
    const at = rest.search(re);
    if (at >= 0) { const c = CITY_ALIASES[n] || n; if (!out.some(o => o.c === c)) out.push({ c, at }); rest = rest.replace(re, m => m[0] + ' '.repeat(m.length - 1)); }
  }
  return out.sort((a, b) => a.at - b.at).map(o => o.c);
}
/* Correspondance latitude / longitude -> coordonnées de la carte world.dae (calée sur les villes de l'original). */
export function mapCoords(loc) {
  if (!loc || !isFinite(loc.lat) || !isFinite(loc.lon)) return null;
  return [35 - 2.9 * loc.lon, 44 - 2.98 * loc.lat];
}
export const CITIES = {
  Barcelona: [41.39, 2.17], Paris: [48.86, 2.35], London: [51.51, -0.13], Reims: [49.26, 4.03], Lausanne: [46.52, 6.63], Berlin: [52.52, 13.4],
  Madrid: [40.42, -3.7], Brussels: [50.85, 4.35], Amsterdam: [52.37, 4.9], Helsinki: [60.17, 24.94], Venice: [45.44, 12.33], Dakar: [14.72, -17.47],
  Sharjah: [25.35, 55.42], Beijing: [39.9, 116.4], Puebla: [19.04, -98.2], 'Mexico City': [19.43, -99.13], 'New York': [40.71, -74.0],
  Montreal: [45.5, -73.57], Beirut: [33.89, 35.5], Lisbon: [38.72, -9.14], Aveiro: [40.64, -8.65], 'La Rochelle': [46.16, -1.15], Durham: [54.78, -1.58],
  Lyon: [45.76, 4.84], Hebei: [40.77, 114.88], Chengdu: [30.57, 104.07], Bogota: [4.71, -74.07], Tokyo: [35.68, 139.69], Seoul: [37.57, 126.98], Dubai: [25.2, 55.27], Murano: [45.46, 12.35],
};

/* ---------------------------------------------------------------- Images */
export function loadImageFile(fileOrBlob) {
  return new Promise((res, rej) => { const url = URL.createObjectURL(fileOrBlob); const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = url; });
}
/* Réduit une image avant envoi (les vignettes 3D n'ont pas besoin de plus). */
export async function resizeImage(file, maxW, maxH, quality = 0.86) {
  if (/svg|gif/i.test(file.type)) return file;
  const im = await loadImageFile(file);
  const r = Math.min(1, maxW / im.naturalWidth, maxH / im.naturalHeight);
  if (r >= 1 && /jpe?g|webp/i.test(file.type) && file.size < 900000) return file;
  const c = document.createElement('canvas'); c.width = Math.round(im.naturalWidth * r); c.height = Math.round(im.naturalHeight * r);
  c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
  const keepPng = /png/i.test(file.type) && hasAlpha(c);
  return new Promise(res => c.toBlob(b => res(b), keepPng ? 'image/png' : 'image/jpeg', quality));
}
function hasAlpha(c) {
  const d = c.getContext('2d').getImageData(0, 0, Math.min(c.width, 64), Math.min(c.height, 64)).data;
  for (let i = 3; i < d.length; i += 4) if (d[i] < 250) return true;
  return false;
}
export function extOf(name) { const m = /\.([a-z0-9]+)$/i.exec(name || ''); return m ? m[1].toLowerCase() : ''; }
export function blobToBase64(blob) {
  return new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(String(r.result).split(',')[1] || ''); r.onerror = rej; r.readAsDataURL(blob); });
}
export function utf8ToBase64(str) { const bytes = new TextEncoder().encode(str); let s = ''; for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode(...bytes.subarray(i, i + 0x8000)); return btoa(s); }
export function base64ToUtf8(b64) { const bin = atob(b64.replace(/\s/g, '')); const bytes = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i); return new TextDecoder().decode(bytes); }

/* ---------------------------------------------------------------- Petite base IndexedDB (brouillon, démo) */
function idb() {
  return new Promise((res, rej) => {
    const r = indexedDB.open('handcoded-cms', 1);
    r.onupgradeneeded = () => { r.result.createObjectStore('kv'); };
    r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
  });
}
export async function kvGet(key) {
  try { const db = await idb(); return await new Promise((res, rej) => { const q = db.transaction('kv').objectStore('kv').get(key); q.onsuccess = () => res(q.result); q.onerror = () => rej(q.error); }); }
  catch (e) { return undefined; }
}
export async function kvSet(key, value) {
  const db = await idb();
  return new Promise((res, rej) => { const tx = db.transaction('kv', 'readwrite'); tx.objectStore('kv').put(value, key); tx.oncomplete = () => res(); tx.onerror = () => rej(tx.error); });
}
export async function kvDel(key) {
  try { const db = await idb(); return await new Promise(res => { const tx = db.transaction('kv', 'readwrite'); tx.objectStore('kv').delete(key); tx.oncomplete = () => res(); tx.onerror = () => res(); }); } catch (e) {}
}

/* ---------------------------------------------------------------- Backends */
/* Le site public : lit le fichier publié, rien d'autre. */
export class StaticBackend {
  constructor(base = '') { this.base = base; this.kind = 'static'; }
  async load() {
    if (window.HC_CONTENT) return normalizeContent(structuredClone(window.HC_CONTENT));
    const r = await fetch(this.base + 'content/content.json?v=' + Date.now(), { cache: 'no-store' });
    if (!r.ok) throw new Error('content/content.json : ' + r.status);
    return normalizeContent(await r.json());
  }
  url(path) { return !path || /^(https?:|data:|blob:)/.test(path) ? path : this.base + path; }
}

/* Le back-office : le dépôt GitHub est le serveur. Chaque publication = un commit. */
export class GitHubBackend {
  constructor(cfg) { this.kind = 'github'; this.cfg = Object.assign({ branch: 'main', root: '' }, cfg); this.api = 'https://api.github.com'; }
  get repoPath() { return `/repos/${this.cfg.owner}/${this.cfg.repo}`; }
  full(path) { const r = (this.cfg.root || '').replace(/^\/+|\/+$/g, ''); return r ? r + '/' + path : path; }
  async req(path, opts = {}) {
    const r = await fetch(this.api + path, { ...opts, headers: { Accept: 'application/vnd.github+json', Authorization: 'Bearer ' + this.cfg.token, 'X-GitHub-Api-Version': '2022-11-28', ...(opts.body ? { 'Content-Type': 'application/json' } : {}), ...(opts.headers || {}) } });
    if (!r.ok) {
      let msg = r.status + ''; try { const j = await r.json(); msg += ' ' + (j.message || ''); } catch (e) {}
      const err = new Error(msg); err.status = r.status; throw err;
    }
    return r.status === 204 ? null : (opts.raw ? r.text() : r.json());
  }
  async check() {
    const repo = await this.req(this.repoPath);
    if (!repo.permissions || !repo.permissions.push) throw Object.assign(new Error("Ce jeton peut lire le dépôt mais pas y écrire. Donne-lui l'accès « Contents : Read and write »."), { status: 403 });
    if (!this.cfg.branch) this.cfg.branch = repo.default_branch;
    return repo;
  }
  async load() {
    const txt = await this.req(`${this.repoPath}/contents/${this.full('content/content.json')}?ref=${encodeURIComponent(this.cfg.branch)}`, { raw: true, headers: { Accept: 'application/vnd.github.raw+json' } });
    return normalizeContent(JSON.parse(txt));
  }
  /* files : [{path, blob}|{path, text}|{path, delete:true}] — tout part dans un seul commit. */
  async publish(content, files = [], message = 'Mise à jour du contenu') {
    const ref = await this.req(`${this.repoPath}/git/ref/heads/${encodeURIComponent(this.cfg.branch)}`);
    const head = ref.object.sha;
    const commit = await this.req(`${this.repoPath}/git/commits/${head}`);
    const tree = [];
    const all = [...files, { path: 'content/content.json', text: JSON.stringify(content, null, 1) + '\n' }];
    for (const f of all) {
      if (f.delete) { tree.push({ path: this.full(f.path), mode: '100644', type: 'blob', sha: null }); continue; }
      const body = f.text != null ? { content: f.text, encoding: 'utf-8' } : { content: await blobToBase64(f.blob), encoding: 'base64' };
      const blob = await this.req(`${this.repoPath}/git/blobs`, { method: 'POST', body: JSON.stringify(body) });
      tree.push({ path: this.full(f.path), mode: '100644', type: 'blob', sha: blob.sha });
    }
    const newTree = await this.req(`${this.repoPath}/git/trees`, { method: 'POST', body: JSON.stringify({ base_tree: commit.tree.sha, tree }) });
    const newCommit = await this.req(`${this.repoPath}/git/commits`, { method: 'POST', body: JSON.stringify({ message, tree: newTree.sha, parents: [head] }) });
    await this.req(`${this.repoPath}/git/refs/heads/${encodeURIComponent(this.cfg.branch)}`, { method: 'PATCH', body: JSON.stringify({ sha: newCommit.sha }) });
    return newCommit.sha;
  }
  async listFiles(prefixes = ['media/', 'models/']) {
    const ref = await this.req(`${this.repoPath}/git/ref/heads/${encodeURIComponent(this.cfg.branch)}`);
    const tree = await this.req(`${this.repoPath}/git/trees/${ref.object.sha}?recursive=1`);
    const root = this.full('');
    return tree.tree.filter(e => e.type === 'blob').map(e => ({ path: root && e.path.startsWith(root) ? e.path.slice(root.length) : e.path, size: e.size }))
      .filter(e => prefixes.some(p => e.path.startsWith(p)));
  }
  async lastCommits(n = 8) {
    const path = this.full('content/content.json');
    return this.req(`${this.repoPath}/commits?sha=${encodeURIComponent(this.cfg.branch)}&path=${encodeURIComponent(path)}&per_page=${n}`);
  }
  async loadAt(sha) {
    const txt = await this.req(`${this.repoPath}/contents/${this.full('content/content.json')}?ref=${sha}`, { raw: true, headers: { Accept: 'application/vnd.github.raw+json' } });
    return normalizeContent(JSON.parse(txt));
  }
}

/* L'aperçu de démonstration : contenu et fichiers dans IndexedDB, dans ce navigateur seulement. */
export class DemoBackend {
  constructor(base = '') { this.kind = 'demo'; this.base = base; this.urls = new Map(); }
  async load() {
    const saved = await kvGet('demo:content:v6');
    if (saved) return normalizeContent(saved);
    if (window.HC_CONTENT) return normalizeContent(structuredClone(window.HC_CONTENT));
    const r = await fetch(this.base + 'content/content.json'); return normalizeContent(await r.json());
  }
  async publish(content, files = []) {
    for (const f of files) {
      if (f.delete) { await kvDel('demo:file:' + f.path); continue; }
      await kvSet('demo:file:' + f.path, f.blob || new Blob([f.text], { type: 'text/plain' }));
    }
    await kvSet('demo:content:v6', content);
    return 'demo';
  }
  async reset() { await kvDel('demo:content:v6'); }
  async listFiles() { return []; }
  /* Les fichiers envoyés en démo vivent dans IndexedDB : on les sert en URL blob. */
  async prepare(content) {
    const paths = new Set();
    content.posts.forEach(p => { [p.thumb, p.thumbBack].forEach(x => x && paths.add(x)); p.media.forEach(m => m.src && paths.add(m.src)); });
    content.models.forEach(m => { if (!m.builtin && m.file) { paths.add(m.file); (m.textures || []).forEach(tx => paths.add(m.file.replace(/[^/]+$/, '') + tx)); } });
    if (content.settings.logo) paths.add(content.settings.logo);
    for (const p of paths) {
      if (this.urls.has(p)) continue;
      const blob = await kvGet('demo:file:' + p);
      if (blob) this.urls.set(p, URL.createObjectURL(blob));
    }
  }
  url(path) { if (!path) return path; if (this.urls.has(path)) return this.urls.get(path); return /^(https?:|data:|blob:)/.test(path) ? path : this.base + path; }
}

/* ================================================================ Typographie
   Chaque rôle (titre des fiches, texte, menu…) a une police, une taille, un interlignage, une graisse, etc.
   Les valeurs par défaut sont celles du site d'origine ; Réglages › Typographie ne stocke que ce qui change (settings.typo). */
export const FONTS = [
  { id: 'georgia', label: 'Georgia (serif du site)', css: 'Georgia, Gelasio, "Times New Roman", serif', group: 'Système' },
  { id: 'lucida', label: 'Lucida Grande (interface du site)', css: '"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif', group: 'Système' },
  { id: 'helvetica', label: 'Helvetica', css: '"Helvetica Neue", Helvetica, Arial, sans-serif', group: 'Système' },
  { id: 'arial', label: 'Arial', css: 'Arial, "Helvetica Neue", sans-serif', group: 'Système' },
  { id: 'verdana', label: 'Verdana', css: 'Verdana, Geneva, sans-serif', group: 'Système' },
  { id: 'times', label: 'Times', css: '"Times New Roman", Times, serif', group: 'Système' },
  { id: 'courier', label: 'Courier', css: '"Courier New", Courier, monospace', group: 'Système' },
  { id: 'gelasio', label: 'Gelasio', css: 'Gelasio, Georgia, serif', group: 'Hébergées avec le site', local: true },
  { id: 'montserrat', label: 'Montserrat', css: 'Montserrat, "Helvetica Neue", Arial, sans-serif', group: 'Hébergées avec le site', local: true },
  { id: 'wireone', label: 'Wire One', css: '"Wire One", "Arial Narrow", sans-serif', group: 'Hébergées avec le site', local: true },
];
/* Rôles : sel = sélecteurs CSS ; mob = rapport de taille sur mobile ; only = réglages proposés */
export const TYPO = [
  { id: 'sig1', group: 'Signature', label: 'Première ligne', hint: '« Hand Coded. » en haut à gauche et sur l’accueil', font: 'georgia', size: 30, lh: 34, weight: 400, sample: 'Hand Coded.', sel: ['#slogan .wm', '#home-band .sl .wm'], mob: 0.74 },
  { id: 'sig2', group: 'Signature', label: 'Lignes suivantes', font: 'georgia', size: 26, lh: 30, weight: 400, sample: 'Responsive. Intelligent.', sel: ['#slogan span', '#home-band .sl span'], mob: 0.72 },
  { id: 'menu', group: 'Navigation', label: 'Menu des sections', font: 'georgia', size: 15, lh: 21.5, weight: 400, sample: 'Réalisations  Savoir-faire  Le studio', sel: ['#menu button'] },
  { id: 'ui', group: 'Navigation', label: 'Interface', hint: 'langues, tags, bouton ENTER, clavier', font: 'lucida', only: ['font'], sample: 'EN FR CA ES · SÉLECTION', vars: ['--ui'] },
  { id: 'title', group: 'Fiches', label: 'Titre', font: 'georgia', size: 30, lh: 36, weight: 400, sample: 'Kinematope.', sel: ['.txt .ttl', '.team .ttl'] },
  { id: 'subtitle', group: 'Fiches', label: 'Sous-titre', font: 'georgia', size: 16, lh: 20, weight: 400, sample: 'Pablo Valbuena, Paisaje Técnico', sel: ['.txt .stl'] },
  { id: 'body', group: 'Fiches', label: 'Texte', font: 'georgia', size: 14, lh: 18, weight: 400, sample: 'Animated light and shadow reveal the architecture and offer a new way to experience the space.', sel: ['.txt .body'] },
  { id: 'h3', group: 'Fiches', label: 'Intertitres', hint: 'Crédits, intertitres du texte riche', font: 'georgia', size: 14, lh: 18, weight: 700, sample: 'Credits', sel: ['.txt .body h3'] },
  { id: 'date', group: 'Fiches', label: 'Date et lieu', font: 'georgia', size: 13, lh: 18, weight: 400, sample: '2016 | Fundación Telefónica, Madrid', sel: ['.txt .fecha'] },
  { id: 'meta', group: 'Fiches', label: '« Classé dans »', font: 'lucida', size: 10, lh: 14, weight: 400, ls: 0.03, sample: 'Filed under Selected, Light', sel: ['.txt .posted'] },
  { id: 'names', group: 'Fiches', label: 'Équipe, noms', font: 'lucida', size: 11, lh: 15, weight: 400, sample: 'Cyril Laurier, Maya Benainous', sel: ['.team .names'] },
  { id: 'cname', group: 'Contact', label: 'Nom', font: 'georgia', size: 44, lh: 50, weight: 400, sample: 'Hand Coded', sel: ['.contact .cn'] },
  { id: 'csub', group: 'Contact', label: 'Sous-titre', font: 'georgia', size: 18, lh: 24, weight: 400, sample: 'Barcelona studio', sel: ['.contact .ac'] },
  { id: 'cinfo', group: 'Contact', label: 'Coordonnées', font: 'lucida', size: 14, lh: 20, weight: 400, sample: 'maya@hand-coded.net', sel: ['.contact .site', '.contact .ad', '.contact .ct'] },
  { id: 'bs', group: 'Accueil', label: 'Champ du slogan', hint: 'taille maximale, elle se réduit sur petit écran', font: 'helvetica', size: 50, weight: 700, ls: -0.04, only: ['font', 'size', 'weight', 'italic', 'ls', 'upper'], sample: 'type bullshit slogan here', sel: ['#bs'], clamp: [0.52, 961] },
  { id: 'bseg', group: 'Accueil', label: 'Exemple sous le champ', font: 'helvetica', size: 15, weight: 700, ls: -0.01, only: ['font', 'size', 'weight', 'italic', 'ls', 'upper'], sample: 'e.g We seamlessly leverage technology', sel: ['#bs-eg'], clamp: [0.8, 940] },
  { id: 'offh', group: 'Accueil', label: 'Bureaux, titres', font: 'georgia', size: 15, lh: 20, weight: 400, sample: 'Hand Coded, Barcelona', sel: ['#offices h3'] },
  { id: 'offp', group: 'Accueil', label: 'Bureaux, adresses', font: 'georgia', size: 11, lh: 16, weight: 400, sample: 'Carrer de la Providència, 55', sel: ['#offices p'] },
  { id: 'card', group: 'Cartes 3D', label: 'Titres des cartes', hint: 'taille en % du dessin d’origine', font: 'georgia', scale: 100, only: ['font', 'scale'], sample: 'Rising · Mouawad Laurier' },
  { id: 'cardsm', group: 'Cartes 3D', label: 'Mentions des cartes', hint: 'lieux, signatures, étiquettes de la carte du monde', font: 'lucida', only: ['font'], sample: 'AVEIRO, LA ROCHELLE, PARIS' },
  { id: 'logo', group: 'Logo', label: 'Logo rond', hint: 'le logo dessiné par défaut, quand aucun logo n’est envoyé', font: 'georgia', size: 38, weight: 400, italic: true, text: 'hc', only: ['font', 'size', 'weight', 'italic', 'text'], sample: 'hc' },
];
export const TYPO_PROPS = ['font', 'size', 'lh', 'weight', 'italic', 'ls', 'upper'];
const googleName = id => /^g:/.test(id || '') ? String(id).slice(2).trim() : '';
export function fontCSS(id) {
  const f = FONTS.find(x => x.id === id); if (f) return f.css;
  const g = googleName(id); if (g) return `"${g.replace(/["\\]/g, '')}", ${/serif|garamond|playfair|lora|merriweather|baskerville|crimson|caslon|bodoni|didot/i.test(g) ? 'Georgia, serif' : '"Helvetica Neue", Arial, sans-serif'}`;
  return FONTS[0].css;
}
export function fontLabel(id) { const f = FONTS.find(x => x.id === id); return f ? f.label : googleName(id) ? googleName(id) + ' (Google Fonts)' : id; }
export function typoOf(settings, id) {   // rôle complet : défauts + réglages
  const role = TYPO.find(r => r.id === id); const o = (settings && settings.typo && settings.typo[id]) || {};
  const r = Object.assign({}, role); for (const k of [...TYPO_PROPS, 'scale', 'text']) if (o[k] !== undefined && o[k] !== '' && o[k] !== null) r[k] = o[k];
  r.css = fontCSS(r.font); r.changed = Object.keys(o).some(k => o[k] !== undefined && o[k] !== '' && o[k] !== null && o[k] !== role[k]); return r;
}
/* Feuille de style des réglages : seules les propriétés modifiées sont écrites, le reste garde le CSS d'origine */
export function typoCSS(settings) {
  const out = [], mob = [], low = [];
  for (const role of TYPO) {
    const o = (settings && settings.typo && settings.typo[role.id]) || {}, r = typoOf(settings, role.id);
    const set = k => o[k] !== undefined && o[k] !== '' && o[k] !== null && o[k] !== role[k];
    if (role.vars) { if (set('font')) out.push(`:root { ${role.vars.map(v => `${v}: ${r.css};`).join(' ')} }`); continue; }
    if (!role.sel) continue;
    const d = [];
    if (set('font')) d.push(`font-family: ${r.css}`);
    if (set('size')) d.push(role.clamp ? `font-size: clamp(${Math.round(r.size * role.clamp[0])}px, ${(r.size / role.clamp[1] * 100).toFixed(2)}vw, ${r.size}px)` : `font-size: ${r.size}px`);
    if (set('lh') || (set('size') && !role.clamp && !set('lh') && role.lh)) d.push(`line-height: ${set('lh') ? r.lh : +(role.lh * r.size / role.size).toFixed(1)}px`);
    if (set('weight')) d.push(`font-weight: ${r.weight}`);
    if (set('italic')) d.push(`font-style: ${r.italic ? 'italic' : 'normal'}`);
    if (set('ls')) d.push(`letter-spacing: ${r.ls}em`);
    if (set('upper')) d.push(`text-transform: ${r.upper ? 'uppercase' : 'none'}`);
    if (d.length) out.push(`${role.sel.join(', ')} { ${d.join('; ')} }`);
    if (role.mob && (set('size') || set('lh'))) {
      const lh = set('lh') ? r.lh : role.lh * r.size / role.size;
      mob.push(`${role.sel.join(', ')} { font-size: ${Math.round(r.size * role.mob)}px; line-height: ${Math.round(lh * role.mob)}px }`);
      low.push(`${role.sel.join(', ')} { font-size: ${Math.round(r.size * role.mob * 0.9)}px; line-height: ${Math.round(lh * role.mob * 0.9)}px }`);
    }
  }
  if (mob.length) out.push(`@media (max-width: 700px) { ${mob.join(' ')} }`, `@media (max-height: 520px) and (min-width: 701px) { ${low.join(' ')} }`);
  return out.join('\n');
}
/* Polices Google utilisées : une feuille par graisse et style (une graisse absente ne bloque pas les autres) */
export function googleFontURLs(settings) {
  const want = new Map();
  for (const role of TYPO) {
    const r = typoOf(settings, role.id), g = googleName(r.font); if (!g) continue;
    const ws = new Set([+(r.weight || 400), 400, 700]);
    ws.forEach(w => want.set(`${g}|${r.italic ? 1 : 0}|${w}`, [g, r.italic ? 1 : 0, w]));
  }
  return [...want.values()].map(([g, it, w]) => `https://fonts.googleapis.com/css2?family=${encodeURIComponent(g).replace(/%20/g, '+')}:ital,wght@${it},${w}&display=swap`);
}
export function typoFontLoads(settings) {   // pour document.fonts.load avant de dessiner
  const set = new Set();
  for (const role of TYPO) { const r = typoOf(settings, role.id); set.add(`${r.italic ? 'italic ' : ''}${r.weight || 400} 24px ${r.css}`); }
  return [...set];
}
/* Logo rond par défaut : anneau à la couleur d'accent, disque noir, lettres blanches */
export function ringLogoURL(ring, settings) {
  const r = typoOf(settings, 'logo'), c = document.createElement('canvas'); c.width = c.height = 240; const x = c.getContext('2d');
  x.fillStyle = ring; x.beginPath(); x.arc(120, 120, 112, 0, Math.PI * 2); x.fill();
  x.fillStyle = '#111'; x.beginPath(); x.arc(120, 120, 88, 0, Math.PI * 2); x.fill();
  const text = String(r.text ?? 'hc').slice(0, 4);
  x.fillStyle = '#fff'; x.textAlign = 'center'; x.textBaseline = 'alphabetic';
  x.font = `${r.italic ? 'italic ' : ''}${r.weight || 400} ${Math.max(8, +r.size || 38) * 2}px ${r.css}`;
  const m = x.measureText(text), hgt = (m.actualBoundingBoxAscent || r.size * 1.4) - (m.actualBoundingBoxDescent || 0);
  x.fillText(text, 120, 120 + hgt / 2); return c.toDataURL('image/png');
}
