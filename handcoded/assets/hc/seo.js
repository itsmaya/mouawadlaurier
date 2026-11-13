/* Référencement (SEO) et lisibilité par les IA (GEO), produits à partir du contenu à chaque publication.
   - dans index.html : titre, description, partage (Open Graph), langues, données structurées (schema.org),
     et un résumé texte de tout le site, lisible sans JavaScript (moteurs, assistants IA, lecteurs d'écran) ;
   - llms.txt : le même résumé en Markdown, pour les assistants IA ;
   - sitemap.xml : l'accueil, ses langues et une adresse par fiche (?p=identifiant).
   Pas de dépendance au navigateur : le même code tourne dans le back-office et dans les scripts de préparation. */

const LANGS = ['en', 'fr', 'ca', 'es'];
const tr = (f, l) => (f && typeof f === 'object' ? (f[l] || f.en || f.fr || Object.values(f).find(Boolean) || '') : String(f || '')).trim();
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'", nbsp: ' ', rsquo: '’', lsquo: '‘', laquo: '«', raquo: '»' };
const text = html => String(html || '').replace(/<\/(p|li|h3)>|<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '').replace(/&(#?\w+);/g, (m, e) => ENT[e] ?? m).split('\n').map(s => s.replace(/\s+/g, ' ').trim()).filter(Boolean);
const intro = html => text(String(html || '').split(/<h3/i)[0]).join(' ');   // le récit, sans les crédits
const cut = (s, n) => s.length <= n ? s : s.slice(0, n).replace(/\s+\S*$/, '') + '…';
const abs = (base, p) => !p ? '' : /^https?:\/\//.test(p) ? p : base + p.replace(/^\.?\//, '');

export const SEO_DEFAULT = {
  en: 'Hand Coded is a Barcelona studio that designs and builds interactive art installations, immersive spaces and real-time software: light, sound, AI and our own tools.',
  fr: 'Hand Coded est un studio de Barcelone qui conçoit et construit des installations artistiques interactives, des espaces immersifs et des logiciels temps réel : lumière, son, IA et nos propres outils.',
  ca: 'Hand Coded és un estudi de Barcelona que dissenya i construeix instal·lacions artístiques interactives, espais immersius i programari en temps real: llum, so, IA i les nostres pròpies eines.',
  es: 'Hand Coded es un estudio de Barcelona que diseña y construye instalaciones artísticas interactivas, espacios inmersivos y software en tiempo real: luz, sonido, IA y nuestras propias herramientas.',
};

/* ---------------- des pages réelles : une par fiche et par langue (/fr/ox/), et l'accueil de chaque langue (/fr/).
   Les robots qui ne lancent pas le JavaScript (ChatGPT, Claude, Perplexity) y lisent tout le texte ; les visiteurs y trouvent le site en 3D, ouvert sur la fiche. */
export const PEOPLE_TAGS = ['core', 'artists', 'specialists', 'team', 'people'];
export function pageable(content, p) {
  const sec = (content.sections || []).find(s => s.id === p.section && s.visible !== false);
  if (!sec || p.published === false) return false;
  const person = (p.tags || []).some(t => PEOPLE_TAGS.includes(t));
  if (sec.card === 'portrait') return person && (text(tr(p.body, 'en')).join(' ') + text(tr(p.body, 'fr')).join(' ')).length > 40;   // les portraits avec une bio ; pas les logos des partenaires
  return true;
}
const L10N = {
  home: { en: 'Home', fr: 'Accueil', ca: 'Inici', es: 'Inicio' },
  updated: { en: 'Updated', fr: 'Mis à jour le', ca: 'Actualitzat el', es: 'Actualizado el' },
  team: { en: 'Team', fr: 'Équipe', ca: 'Equip', es: 'Equipo' },
  videos: { en: 'Videos', fr: 'Vidéos', ca: 'Vídeos', es: 'Vídeos' },
  photos: { en: 'Photos', fr: 'Photos', ca: 'Fotos', es: 'Fotos' },
  more: { en: 'More', fr: 'Voir aussi', ca: 'Vegeu també', es: 'Ver también' },
  langs: { en: 'Languages', fr: 'Langues', ca: 'Llengües', es: 'Idiomas' },
  tagline: { en: 'interactive and immersive experiences for brands and museums, Barcelona', fr: 'expériences interactives et immersives pour les marques et les musées, Barcelone', ca: 'experiències interactives i immersives per a marques i museus, Barcelona', es: 'experiencias interactivas e inmersivas para marcas y museos, Barcelona' },   // maj-172 : les mots d’une recherche de marque, plutôt que « studio d’art »
  not: { en: 'Creative technology studio based in Barcelona, founded in %Y. Not to be confused with “hand-coded”, the generic term for code written by hand.',
    fr: 'Studio de creative technology basé à Barcelone, fondé en %Y. À ne pas confondre avec « hand-coded », l’expression générique pour du code écrit à la main.',
    ca: 'Estudi de creative technology amb seu a Barcelona, fundat el %Y. No s’ha de confondre amb «hand-coded», l’expressió genèrica per a codi escrit a mà.',
    es: 'Estudio de creative technology con sede en Barcelona, fundado en %Y. No confundir con «hand-coded», la expresión genérica para código escrito a mano.' },
};
const L = (k, l) => tr(L10N[k], l);
const year = d => (String(d || '').match(/\d{4}/) || [''])[0];
const clean = html => String(html || '').replace(/<(script|style|iframe|object|embed)\b[\s\S]*?<\/\1>/gi, '').replace(/\son\w+="[^"]*"/gi, '').replace(/&nbsp;/g, ' ');
const isVideo = u => /youtu\.?be|vimeo\.com/i.test(u || '');
const isImage = u => /\.(jpe?g|png|webp|gif|avif)(\?|$)/i.test(u || '');
const ytId = u => (String(u).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/) || [])[1];
const fmtDate = (d, l) => { try { return new Intl.DateTimeFormat(l, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(d + 'T12:00:00Z')); } catch (e) { return d; } };
/* le récit d'une fiche sans la ligne « Notre rôle » du début : pour la description et les résumés */
const story = html => { const h = String(html || '').split(/<h3/i)[0]; return text(h.replace(/^\s*<p>\s*<(strong|b)>[^<]*<\/\1>[^<]*<\/p>/i, '')).join(' ') || intro(html); };

function site(content, opts) {
  const s = content.settings || {}, seo = s.seo || {};
  const base = (seo.url || opts.base || '').replace(/\/?$/, '/');
  const def = s.defaultLang || 'en', langs = (s.langs && s.langs.length ? s.langs : LANGS);
  const name = s.name || 'Hand Coded';
  const sections = (content.sections || []).filter(x => x.visible !== false);
  const posts = (content.posts || []).filter(p => p.published !== false && sections.some(x => x.id === p.section))
    .sort((a, b) => sections.findIndex(x => x.id === a.section) - sections.findIndex(x => x.id === b.section) || (a.order ?? 0) - (b.order ?? 0));
  const pages = posts.filter(p => pageable(content, p));
  const photo = p => p.thumb && !/^https?:/.test(p.thumb) ? p.thumb : ((p.media || []).find(m => m && isImage(m.src) && !/^https?:/.test(m.src)) || {}).src || '';
  const image = abs(base, seo.image || photo(posts.find(p => photo(p)) || {}) || 'assets/hc/ui/logo-default.svg');
  const office = (s.offices || [])[0];
  const social = (s.social || []).map(x => x && (x.url || x.href || x.link)).filter(u => /^https?:\/\//.test(u || ''));
  const sameAs = [...social, ...(/hand-coded\.net/.test(base + ' ' + social.join(' ')) ? [] : ['https://hand-coded.net/'])];   // maj-172 : l’ancien site du studio, que les moteurs et les IA connaissent déjà, est le même studio
  const desc = l => tr(seo.description, l) || SEO_DEFAULT[l] || SEO_DEFAULT.en;
  const founded = String(s.founded || s.since || '');
  const href = (l, p) => p ? `${l}/${encodeURIComponent(p.id)}/` : `${l}/`;          // relatif à la racine du site
  const url = (l, p) => base + href(l, p);
  const has = p => pages.includes(p);
  const updated = p => (p && p.updated) || '';
  const lastmod = [...posts.map(updated)].filter(Boolean).sort().pop() || '';
  /* l'adresse du studio, en morceaux pour les données structurées */
  const address = (() => {
    if (!office) return null;
    const lines = (office.lines || []).map(x => String(x).replace(/,\s*$/, '').trim());
    const pc = lines.map(x => x.match(/^(\d{4,5})\s+(.+)$/)).find(Boolean);
    const street = lines.find(x => !/^\+?[\d\s().-]{7,}$/.test(x) && !/^\d{4,5}\s/.test(x));
    const phone = lines.find(x => /^\+?[\d\s().-]{7,}$/.test(x));
    const city = pc ? pc[2] : (tr(office.name, def) || '').split(',').pop().trim();
    return { street, postalCode: pc && pc[1], city, phone, mail: office.mail };
  })();
  const org = l => ({ '@type': 'Organization', '@id': base + '#studio', name, alternateName: [name + ' Studio', name.replace(/\s+/g, '-')], url: base,
    logo: abs(base, 'assets/hc/ui/logo-default.svg'), image, description: desc(l),
    disambiguatingDescription: L('not', l).replace('%Y', founded || '2008'),
    ...(founded ? { foundingDate: founded } : {}),
    ...(address ? { address: { '@type': 'PostalAddress', ...(address.street ? { streetAddress: address.street } : {}), ...(address.postalCode ? { postalCode: address.postalCode } : {}), addressLocality: address.city, addressCountry: 'ES' },
      ...(address.mail ? { email: address.mail } : {}), ...(address.phone ? { telephone: address.phone.replace(/\s+/g, ' ') } : {}) } : {}),
    areaServed: 'Worldwide',
    founder: posts.filter(p => (p.tags || []).includes('core')).map(p => ({ '@id': url(l, p) + '#person' })),
    knowsAbout: posts.filter(p => (sections.find(x => x.id === p.section) || {}).skills).map(p => tr(p.title, l)).filter(Boolean),
    ...(sameAs.length ? { sameAs } : {}) });
  return { s, seo, base, def, langs, name, sections, posts, pages, photo, image, office, social, desc, href, url, has, updated, lastmod, address, org };
}

export function seoParts(content, opts = {}) {
  const S = site(content, opts), { base, def: lang, langs, name, sections, posts } = S;
  const desc = S.desc(lang);
  const title = `${name} · ${L('tagline', lang)}`;
  const ld = { '@context': 'https://schema.org', '@graph': [S.org(lang), { '@type': 'WebSite', '@id': base + '#website', url: base, name, inLanguage: langs, publisher: { '@id': base + '#studio' } }] };
  const head = [
    `<script>window.HC_ROUTE={"pages":1}</script>`,
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(desc)}">`,
    `<link rel="canonical" href="${esc(base)}">`,
    ...langs.map(l => `<link rel="alternate" hreflang="${l}" href="${esc(S.url(l))}">`),
    `<link rel="alternate" hreflang="x-default" href="${esc(base)}">`,
    `<meta name="robots" content="max-image-preview:large">`,
    `<meta property="og:type" content="website">`, `<meta property="og:site_name" content="${esc(name)}">`,
    `<meta property="og:title" content="${esc(title)}">`, `<meta property="og:description" content="${esc(desc)}">`,
    `<meta property="og:url" content="${esc(base)}">`, `<meta property="og:image" content="${esc(S.image)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`,
  ].join('\n');
  const body = homeArticle(S, lang);
  const line = p => [tr(p.subtitle, lang), p.date, tr(p.place, lang)].filter(Boolean).join(' · ');

  /* ---------------- llms.txt */
  const people = posts.filter(p => (p.tags || []).includes('core'));
  const md = [`# ${name}`, '', `> ${desc}`, '', S.org(lang).disambiguatingDescription, '',
    ...(people.length ? ['## ' + tr({ en: 'Founders', fr: 'Fondateurs', ca: 'Fundadors', es: 'Fundadores' }, lang), ...people.map(p => `- [${tr(p.title, lang)}](${S.url(lang, p)}): ${tr(p.subtitle, lang)}`), ''] : []),
    ...sections.flatMap(sec => {
      const list = S.pages.filter(p => p.section === sec.id); if (!list.length) return [];
      return [`## ${tr(sec.name, lang)}`, ...list.map(p => { const st = cut(story(tr(p.body, lang)), 300); return `- [${tr(p.title, lang)}](${S.url(lang, p)})${line(p) ? `: ${line(p)}` : ''}${st ? `. ${st}` : ''}`; }), ''];
    }),
    ...(S.address ? ['## Contact', `- ${[tr(S.office.name, lang), S.address.street, [S.address.postalCode, S.address.city].filter(Boolean).join(' '), S.address.mail].filter(Boolean).join(', ')}`, ...S.social.map(u => `- ${u}`), ''] : []),
    `${tr({ en: 'Other languages', fr: 'Autres langues', ca: 'Altres llengües', es: 'Otros idiomas' }, lang)}: ${langs.map(l => S.url(l)).join(' ')}`, ''].join('\n');

  /* ---------------- sitemap.xml : chaque page avec ses langues (hreflang) et ses images */
  const alt = (p) => langs.map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${esc(S.url(l, p))}"/>`).concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(p ? S.url(lang, p) : base)}"/>`).join('\n');
  const imgs = p => [S.photo(p), ...(p.media || []).filter(m => m && isImage(m.src)).map(m => m.src)].filter((x, i, a) => x && a.indexOf(x) === i).slice(0, 8).map(u => `    <image:image><image:loc>${esc(abs(base, u))}</image:loc></image:image>`).join('\n');
  const entry = (loc, mod, pri, extra) => `  <url>\n    <loc>${esc(loc)}</loc>${mod ? `\n    <lastmod>${mod}</lastmod>` : ''}\n    <priority>${pri}</priority>${extra ? '\n' + extra : ''}\n  </url>`;
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
    [entry(base, S.lastmod, '1.0', alt(null)),
     ...langs.map(l => entry(S.url(l), S.lastmod, '0.9', alt(null))),
     ...S.pages.flatMap(p => langs.map(l => entry(S.url(l, p), S.updated(p), sections[0] && p.section === sections[0].id ? '0.8' : '0.6', alt(p) + (imgs(p) ? '\n' + imgs(p) : ''))))].join('\n') + '\n</urlset>\n';
  /* ---------------- l'ouverture : la phrase du studio, au centre, ligne par ligne, avant même les scripts du site (Réglages › Accueil › Phrase du studio).
     Chaque ligne entre en glissant vers la droite, au rythme de la lecture, par-dessus la vidéo déjà lancée ; le site les fait repartir une à une. */
  const cutLines = t => { const out = []; let cur = ''; String(t).split(/(?<=,)\s+/).forEach(ch => { if (cur && (cur + ' ' + ch).length > 62) { out.push(cur); cur = ch; } else cur = cur ? cur + ' ' + ch : ch; }); if (cur) out.push(cur); return out; };   // sans lignes écrites : coupée aux virgules
  const lines = {}; langs.forEach(l => { const ph = tr((S.s.home || {}).sub, l), t = /\n/.test(ph) ? ph.split(/\n+/).map(x => x.trim()).filter(Boolean) : cutLines(ph); if (t.length) lines[l] = t; });   // les retours à la ligne de la phrase du studio font les coupures
  const sf = (() => { const r = (S.s.typo || {}).sig2 || {}, f = String(r.font || ''); if (!/^g:/.test(f)) return null; const fam = f.slice(2), it = r.italic ? 1 : 0, w = +(r.weight || 400);
    return { fam, it, w, css: `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fam).replace(/%20/g, '+')}:ital,wght@${it},${w}&display=swap` }; })();   // la police du slogan sous la signature (« Réactif. Sensible. Immersif. »), même adresse que le site
  const hm = S.s.home || {}, pace = Math.max(25, Math.min(400, +hm.introPace || 100)), hold = Math.max(0, Math.min(15, hm.introHold == null || hm.introHold === '' ? 2 : +hm.introHold));   // maj-182 : Réglages › Accueil, vitesse de la phrase et temps de lecture en plus
  const data = { langs, def: lang, lines, f: sf, k: +(100 / pace).toFixed(3), h: Math.round(hold * 1000) };
  const opening = !Object.keys(lines).length ? '' :
    `<div id="hc-intro" class="hold" aria-hidden="true"><i class="beat"></i><div class="ln"></div></div>\n` +
    `<script>(function(){var D=${JSON.stringify(data).replace(/</g, '\\u003c')},el=document.getElementById('hc-intro');try{var q=new URLSearchParams(location.search);` +
    `var RT=window.HC_ROUTE||{};if(q.get('p')||RT.p||!/^(#(accueil|home|inici|inicio)?)?$/i.test(location.hash||'')||(matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)||!el.animate){el.remove();return;}` +
    `var sv=null;try{sv=localStorage.getItem('hc-lang')}catch(e){}var nl=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'']).map(function(x){return String(x).toLowerCase().slice(0,2)});` +
    `var ql=(q.get('lang')||RT.lang||'').toLowerCase(),has=function(l){return D.langs.indexOf(l)>=0},L=has(ql)?ql:has(sv)?sv:(nl.filter(has)[0]||D.def);` +
    `var T=D.lines[L]||D.lines[D.def]||D.lines[Object.keys(D.lines)[0]],box=el.querySelector('.ln');` +
    `if(D.f){box.style.fontFamily='"'+D.f.fam+'", var(--ui)';box.style.fontStyle=D.f.it?'italic':'normal';box.style.fontWeight=D.f.w;}` +
    `T.forEach(function(t){var x=document.createElement('span');x.className='l';x.textContent=t;box.appendChild(x);});` +
    /* le rythme : une ligne, le temps de la parcourir (0,12 s + 16 ms par lettre, entre 0,65 et 1,7 s), puis la suivante ; la vidéo apparaît avec la dernière ligne, puis les lignes s'en vont par-dessus */
    `var go=function(){if(go.d)return;go.d=1;var at=0;for(var i=0;i<T.length;i++){box.children[i].animate([{opacity:0,transform:'translateX(-36px)',filter:'blur(6px)'},{opacity:1,transform:'none',filter:'blur(0)'}],{duration:1000,delay:at,easing:'cubic-bezier(.22,.61,.36,1)',fill:'both'});` +
    `if(i===T.length-1)var va=at;at+=Math.max(650,Math.min(1700,120+16*T[i].length))*(D.k||1);}window.HC_INTRO={t0:performance.now(),video:va,depart:at+150+(D.h==null?2000:D.h)};};` +
    /* l'ordre de l'ouverture : le site pose d'abord la signature et les carrés (hc-stage), lance la phrase (HC_GO), puis le bandeau et « Entrer » à la toute fin (hc-late) */
    `var R=document.documentElement;R.classList.add('hc-stage','hc-late');var fl=null;` +
    `if(D.f&&document.fonts){var k=document.createElement('link');k.rel='stylesheet';k.href=D.f.css;document.head.appendChild(k);fl=document.fonts.load((D.f.it?'italic ':'')+D.f.w+' 30px "'+D.f.fam+'"');}` +
    `window.HC_GO=function(){if(fl){fl.then(go,go);setTimeout(go,800);}else go();};` +
    `setTimeout(function(){if(!go.d&&!window.HC_NOINTRO){R.classList.remove('hc-stage','hc-late');go();}},14000);}catch(e){document.documentElement.classList.remove('hc-stage','hc-late');el.remove();}})();</script>`;

  return { head, body, llms: md, sitemap, base, intro: opening };
}

/* Remplace les blocs générés entre leurs marqueurs dans index.html ; le reste de la page ne bouge pas */
export function applySEO(indexHTML, parts) {
  const put = (html, tag, inner) => {
    const a = `<!--${tag}-->`, b = `<!--/${tag}-->`, i = html.indexOf(a), j = html.indexOf(b);
    return i >= 0 && j > i ? html.slice(0, i + a.length) + '\n' + inner + '\n' + html.slice(j) : html;
  };
  let out = put(put(indexHTML, 'seo-head', parts.head), 'seo-body', parts.body);
  if (parts.intro != null) {
    if (out.indexOf('<!--hc-intro-->') < 0) out = out.replace('<body>', '<body>\n<!--hc-intro-->\n<!--/hc-intro-->');   // première fois : on pose les marqueurs juste après <body>
    out = put(out, 'hc-intro', parts.intro);
  }
  return out;
}

/* ---------------- le texte visible des pages : lisible sans JavaScript ; le site en 3D se pose par-dessus et le retire une fois prêt */
function footer(S, l, p) {
  const a = S.address;
  return `<footer><p><strong>${esc(S.name)}</strong>. ${esc(S.desc(l))}</p>` +
    (a ? `<address>${esc([tr(S.office.name, l), a.street, [a.postalCode, a.city].filter(Boolean).join(' ')].filter(Boolean).join(', '))}${a.mail ? ` · <a href="mailto:${esc(a.mail)}">${esc(a.mail)}</a>` : ''}</address>` : '') +
    (S.social.length ? `<p>${S.social.map(u => `<a href="${esc(u)}" rel="me">${esc(u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''))}</a>`).join(' · ')}</p>` : '') +
    `<p>${esc(L('langs', l))} : ${S.langs.map(x => `<a href="${S.href(x, p)}" hreflang="${x}" lang="${x}">${x.toUpperCase()}</a>`).join(' ')}</p></footer>`;
}
function homeArticle(S, l) {
  const phrase = tr((S.s.home || {}).sub, l).replace(/\s*\n\s*/g, ' ');
  return `<main id="seo-page" lang="${l}"><header><h1>${esc(S.name)}</h1><p>${esc(L('tagline', l))}</p>${phrase ? `<p>${esc(phrase)}</p>` : ''}</header>` +
    S.sections.map(sec => {
      const list = S.posts.filter(p => p.section === sec.id); if (!list.length) return '';
      return `<section><h2>${esc(tr(sec.name, l))}</h2><ul>` + list.map(p => {
        const t = esc(tr(p.title, l)), sub = [tr(p.subtitle, l), p.date, tr(p.place, l)].filter(Boolean).join(' · '), st = cut(story(tr(p.body, l)), 220);
        return `<li>${S.has(p) ? `<a href="${S.href(l, p)}">${t}</a>` : `<strong>${t}</strong>`}${sub ? ` · ${esc(sub)}` : ''}${st && S.has(p) ? `<br>${esc(st)}` : ''}</li>`;
      }).join('') + '</ul></section>';
    }).join('') + footer(S, l, null) + '</main>';
}
function postArticle(S, content, l, p) {
  const sec = S.sections.find(x => x.id === p.section), t = tr(p.title, l);
  const imgs = [S.photo(p), ...(p.media || []).filter(m => m && isImage(m.src)).map(m => m.src)].filter((x, i, a) => x && a.indexOf(x) === i);
  const cap = src => { const m = (p.media || []).find(x => x && x.src === src) || {}; return { alt: (m.caption && tr(m.caption, l)) || `${t}${tr(p.subtitle, l) ? ', ' + tr(p.subtitle, l) : ''}`, credit: m.credit || '' }; };
  const vids = (p.media || []).filter(m => m && isVideo(m.src)).map(m => m.src);
  const team = (p.team || []).map(id => content.posts.find(x => x.id === id && x.published !== false)).filter(Boolean);
  const skills = (p.skills || []).map(id => S.posts.find(x => x.id === id)).filter(Boolean);
  const projects = S.posts.filter(x => x !== p && ((x.skills || []).includes(p.id) || (x.team || []).includes(p.id)) && S.has(x));
  const sibs = S.pages.filter(x => x.section === p.section && x !== p).slice(0, 12);
  const link = x => S.has(x) ? `<a href="${S.href(l, x)}">${esc(tr(x.title, l))}</a>` : esc(tr(x.title, l));
  const meta = [tr(p.subtitle, l), p.date, tr(p.place, l)].filter(Boolean).join(' · ');
  return `<main id="seo-page" lang="${l}"><nav aria-label="breadcrumb"><a href="${S.href(l)}">${esc(S.name)}</a> › <a href="${S.href(l)}#${esc(p.section)}">${esc(tr(sec.name, l))}</a> › ${esc(t)}</nav>` +
    `<article><h1>${esc(t)}</h1>${meta ? `<p>${esc(meta)}</p>` : ''}` + clean(tr(p.body, l)) +
    (imgs.length ? `<section><h2>${esc(L('photos', l))}</h2>` + imgs.slice(0, 12).map((u, i) => { const c = cap(u); return `<figure><img src="${esc(u)}" alt="${esc(c.alt)}" loading="${i ? 'lazy' : 'eager'}" decoding="async">${c.credit ? `<figcaption>© ${esc(c.credit)}</figcaption>` : ''}</figure>`; }).join('') + '</section>' : '') +
    (vids.length ? `<section><h2>${esc(L('videos', l))}</h2><ul>${vids.map(u => `<li><a href="${esc(u)}">${esc(u.replace(/^https?:\/\/(www\.)?/, ''))}</a></li>`).join('')}</ul></section>` : '') +
    (team.length ? `<section><h2>${esc(L('team', l))}</h2><ul>${team.map(x => `<li>${link(x)}${tr(x.subtitle, l) ? ` · ${esc(tr(x.subtitle, l))}` : ''}</li>`).join('')}</ul></section>` : '') +
    (skills.length ? `<section><h2>${esc(tr((S.sections.find(x => x.skills) || {}).name, l))}</h2><ul>${skills.map(x => `<li>${link(x)}</li>`).join('')}</ul></section>` : '') +
    (projects.length ? `<section><h2>${esc(tr(S.sections[0].name, l))}</h2><ul>${projects.map(x => `<li>${link(x)}${tr(x.subtitle, l) ? ` · ${esc(tr(x.subtitle, l))}` : ''}</li>`).join('')}</ul></section>` : '') +
    (S.updated(p) ? `<p><time datetime="${S.updated(p)}">${esc(L('updated', l))} ${esc(fmtDate(S.updated(p), l))}</time></p>` : '') + '</article>' +
    (sibs.length ? `<aside><h2>${esc(L('more', l))} : ${esc(tr(sec.name, l))}</h2><ul>${sibs.map(x => `<li>${link(x)}</li>`).join('')}</ul></aside>` : '') +
    footer(S, l, p) + '</main>';
}
function postLD(S, content, l, p) {
  const sec = S.sections.find(x => x.id === p.section), u = S.url(l, p), t = tr(p.title, l);
  const imgs = [S.photo(p), ...(p.media || []).filter(m => m && isImage(m.src)).map(m => m.src)].filter((x, i, a) => x && a.indexOf(x) === i).slice(0, 8);
  const imageObjs = imgs.map(src => { const m = (p.media || []).find(x => x && x.src === src) || {}; return { '@type': 'ImageObject', contentUrl: abs(S.base, src), ...(m.caption && tr(m.caption, l) ? { caption: tr(m.caption, l) } : {}), ...(m.credit ? { creditText: m.credit, creator: { '@type': 'Person', name: m.credit } } : {}) }; });
  const isPerson = x => (x.tags || []).some(t2 => PEOPLE_TAGS.includes(t2)) || (!(x.tags || []).length && (S.sections.find(z => z.id === x.section) || {}).card === 'portrait');
  const team = (p.team || []).map(id => content.posts.find(x => x.id === id && x.published !== false)).filter(Boolean)
    .map(x => S.has(x) ? { '@id': S.url(l, x) + '#person' } : { '@type': isPerson(x) ? 'Person' : 'Organization', name: tr(x.title, l) });
  const creators = String(p.author || '').split(/\s*&\s*/).filter(Boolean).map(n => /mouawad\s*\+?\s*laurier/i.test(n) ? { '@type': 'Organization', name: 'Mouawad + Laurier' } : { '@type': /\+|studio|collective/i.test(n) ? 'Organization' : 'Person', name: n });
  const vids = (p.media || []).filter(m => m && isVideo(m.src)).map(m => { const y = ytId(m.src); return { '@type': 'VideoObject', name: t, description: cut(story(tr(p.body, l)), 200) || t, embedUrl: y ? `https://www.youtube.com/embed/${y}` : m.src.replace(/vimeo\.com\/(\d+)/, 'player.vimeo.com/video/$1'), thumbnailUrl: y ? `https://i.ytimg.com/vi/${y}/hqdefault.jpg` : (imgs[0] ? abs(S.base, imgs[0]) : S.image) }; });
  const press = (() => { const b = tr(p.body, l), i = b.search(/<h3>\s*(Press|Presse|Premsa|Prensa)\s*<\/h3>/i); if (i < 0) return []; const out = []; b.slice(i).replace(/<a href="(https?:[^"]+)"[^>]*>([\s\S]*?)<\/a>/g, (m, h, n) => { out.push({ '@type': 'CreativeWork', url: h, name: text(n).join(' ') }); return m; }); return out; })();
  const crumbs = { '@type': 'BreadcrumbList', itemListElement: [{ name: S.name, item: S.url(l) }, { name: tr(sec.name, l), item: S.url(l) + '#' + p.section }, { name: t, item: u }].map((x, i) => ({ '@type': 'ListItem', position: i + 1, ...x })) };
  const descr = cut(story(tr(p.body, l)), 300);
  const person = (p.tags || []).some(x => PEOPLE_TAGS.includes(x));
  const main = sec.skills ? { '@type': 'Service', name: t, description: descr, provider: { '@id': S.base + '#studio' }, areaServed: 'Worldwide', url: u }
    : person ? { '@type': 'Person', '@id': u + '#person', name: t, jobTitle: tr(p.subtitle, l), description: descr, url: u, ...(imgs[0] ? { image: abs(S.base, imgs[0]) } : {}),
        ...((p.tags || []).includes('core') ? { worksFor: { '@id': S.base + '#studio' } } : {}), ...(/^https?:/.test(p.link || '') ? { sameAs: [p.link] } : {}) }
    : sec.card === 'place' ? { '@type': 'ContactPage', name: t, url: u, about: { '@id': S.base + '#studio' } }
    : { '@type': 'CreativeWork', '@id': u + '#work', name: t, url: u, inLanguage: l, description: descr, ...(tr(p.subtitle, l) ? { alternativeHeadline: tr(p.subtitle, l) } : {}),
        ...(year(p.date) ? { dateCreated: year(p.date) } : {}), ...(tr(p.place, l) ? { locationCreated: { '@type': 'Place', name: tr(p.place, l) } } : {}),
        ...(creators.length ? { creator: creators.length > 1 ? creators : creators[0] } : {}), producer: { '@id': S.base + '#studio' },
        ...(team.length ? { contributor: team } : {}), ...(imageObjs.length ? { image: imageObjs } : {}), ...(vids.length ? { video: vids } : {}), ...(press.length ? { subjectOf: press } : {}) };
  const page = { '@type': 'WebPage', '@id': u, url: u, name: t, inLanguage: l, isPartOf: { '@id': S.base + '#website' }, breadcrumb: crumbs, ...(S.updated(p) ? { dateModified: S.updated(p) } : {}),
    ...(imgs[0] ? { primaryImageOfPage: { '@type': 'ImageObject', contentUrl: abs(S.base, imgs[0]) } } : {}), mainEntity: main['@id'] ? { '@id': main['@id'] } : main };
  return { '@context': 'https://schema.org', '@graph': [page, ...(main['@id'] ? [main] : []), S.org(l), { '@type': 'WebSite', '@id': S.base + '#website', url: S.base, name: S.name, publisher: { '@id': S.base + '#studio' } }] };
}
const put = (html, tag, inner) => { const a = `<!--${tag}-->`, b = `<!--/${tag}-->`, i = html.indexOf(a), j = html.indexOf(b); return i >= 0 && j > i ? html.slice(0, i + a.length) + '\n' + inner + '\n' + html.slice(j) : html; };
/* Toutes les pages, à partir de index.html déjà mis à jour : [{ path: 'fr/ox/index.html', text }] */
export function buildPages(indexHTML, content, opts = {}) {
  const S = site(content, opts), out = [];
  const page = (l, p, headInner, bodyInner) => {
    let h = indexHTML.replace(/<html lang="[^"]*"/, `<html lang="${l}"`);
    h = put(h, 'seo-head', headInner); h = put(h, 'seo-body', bodyInner);
    if (p) h = put(h, 'hc-intro', '');   // une fiche s'ouvre directement, sans la phrase d'ouverture
    return h;
  };
  const og = (t, d, u, img, l, type) => [`<meta property="og:type" content="${type}">`, `<meta property="og:site_name" content="${esc(S.name)}">`, `<meta property="og:title" content="${esc(t)}">`,
    `<meta property="og:description" content="${esc(d)}">`, `<meta property="og:url" content="${esc(u)}">`, `<meta property="og:image" content="${esc(img)}">`,
    `<meta property="og:locale" content="${{ en: 'en_GB', fr: 'fr_FR', ca: 'ca_ES', es: 'es_ES' }[l] || l}">`, `<meta name="twitter:card" content="summary_large_image">`];
  for (const l of S.langs) {
    const t = `${S.name} · ${L('tagline', l)}`, d = S.desc(l), u = S.url(l);
    const ld = { '@context': 'https://schema.org', '@graph': [S.org(l), { '@type': 'WebSite', '@id': S.base + '#website', url: S.base, name: S.name, inLanguage: S.langs, publisher: { '@id': S.base + '#studio' } },
      { '@type': 'WebPage', '@id': u, url: u, name: t, inLanguage: l, isPartOf: { '@id': S.base + '#website' }, about: { '@id': S.base + '#studio' }, ...(S.lastmod ? { dateModified: S.lastmod } : {}) }] };
    out.push({ path: `${l}/index.html`, text: page(l, null, [`<base href="../">`, `<script>window.HC_ROUTE=${JSON.stringify({ pages: 1, lang: l })}</script>`, `<title>${esc(t)}</title>`,
      `<meta name="description" content="${esc(d)}">`, `<link rel="canonical" href="${esc(u)}">`, ...S.langs.map(x => `<link rel="alternate" hreflang="${x}" href="${esc(S.url(x))}">`),
      `<link rel="alternate" hreflang="x-default" href="${esc(S.base)}">`, `<meta name="robots" content="max-image-preview:large">`, ...og(t, d, u, S.image, l, 'website'),
      `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`].join('\n'), homeArticle(S, l)) });
    for (const p of S.pages) {
      const pt = tr(p.title, l), sub = tr(p.subtitle, l);
      const title = (pt + (sub && (pt + sub).length < 58 ? ' · ' + sub : '') + ' · ' + S.name).replace(/\s+/g, ' ');
      const d = cut(story(tr(p.body, l)), 158) || sub || S.desc(l), pu = S.url(l, p), img = abs(S.base, S.photo(p)) || S.image;
      out.push({ path: `${l}/${p.id}/index.html`, text: page(l, p, [`<base href="../../">`, `<script>window.HC_ROUTE=${JSON.stringify({ pages: 1, lang: l, p: p.id })}</script>`, `<title>${esc(title)}</title>`,
        `<meta name="description" content="${esc(d)}">`, `<link rel="canonical" href="${esc(pu)}">`, ...S.langs.map(x => `<link rel="alternate" hreflang="${x}" href="${esc(S.url(x, p))}">`),
        `<link rel="alternate" hreflang="x-default" href="${esc(S.url(S.def, p))}">`, `<meta name="robots" content="max-image-preview:large">`, ...og(`${pt} · ${S.name}`, d, pu, img, l, 'article'),
        ...(S.updated(p) ? [`<meta property="article:modified_time" content="${S.updated(p)}">`] : []),
        `<script type="application/ld+json">${JSON.stringify(postLD(S, content, l, p)).replace(/</g, '\\u003c')}</script>`].join('\n'), postArticle(S, content, l, p)) });
    }
  }
  return out;
}
