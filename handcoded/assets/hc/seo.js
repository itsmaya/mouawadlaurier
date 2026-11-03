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

export function seoParts(content, opts = {}) {
  const s = content.settings || {}, seo = s.seo || {};
  const base = (seo.url || opts.base || '').replace(/\/?$/, '/');
  const lang = s.defaultLang || 'en', langs = (s.langs && s.langs.length ? s.langs : LANGS);
  const name = s.name || 'Hand Coded';
  const desc = tr(seo.description, lang) || SEO_DEFAULT[lang] || SEO_DEFAULT.en;
  const sections = (content.sections || []).filter(x => x.visible !== false);
  const posts = (content.posts || []).filter(p => p.published !== false && sections.some(x => x.id === p.section));
  const photo = p => p.thumb || ((p.media || []).find(m => m && m.src && /\.(jpe?g|png|webp)(\?|$)/i.test(m.src)) || {}).src || '';
  const image = abs(base, seo.image || photo(posts.find(p => photo(p) && !/^https?:/.test(photo(p))) || {}) || 'assets/hc/ui/logo-default.svg');
  const people = posts.filter(p => (p.tags || []).includes('core'));
  const office = (s.offices || [])[0];
  const city = office ? (tr(office.name, lang) || '').split(',').pop().trim() : '';
  const addr = office ? [tr(office.name, lang), ...(office.lines || []).map(x => String(x).replace(/,\s*$/, '')), office.mail].filter(Boolean).join(', ') : '';
  const social = (s.social || []).map(x => x && (x.url || x.href || x.link)).filter(u => /^https?:\/\//.test(u || ''));
  const works = posts.filter(p => p.section === (sections[0] || {}).id);

  /* ---------------- <head> */
  const title = `${name} · ${tr({ en: 'interactive art and technology studio', fr: 'studio d’art et de technologies interactives', ca: 'estudi d’art i tecnologies interactives', es: 'estudio de arte y tecnologías interactivas' }, lang)}`;
  const ld = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Organization', '@id': base + '#studio', name, url: base, logo: abs(base, 'assets/hc/ui/logo-default.svg'), description: desc,
      ...(s.since || s.founded ? { foundingDate: String(s.founded || s.since) } : {}),
      ...(city ? { address: { '@type': 'PostalAddress', addressLocality: city } } : {}),
      ...(people.length ? { founder: people.map(p => ({ '@type': 'Person', name: tr(p.title, lang), jobTitle: tr(p.subtitle, lang) })) } : {}),
      ...(social.length ? { sameAs: social } : {}) },
    { '@type': 'ItemList', name: tr((sections[0] || {}).name, lang) || 'Work', itemListElement: works.map((p, i) => ({ '@type': 'ListItem', position: i + 1, item: {
      '@type': 'CreativeWork', name: tr(p.title, lang), url: base + '?p=' + encodeURIComponent(p.id),
      ...(p.date ? { dateCreated: String(p.date).match(/\d{4}/) ? String(p.date).match(/\d{4}/)[0] : String(p.date) } : {}),
      ...(intro(tr(p.body, lang)) ? { description: cut(intro(tr(p.body, lang)), 280) } : {}),
      ...(photo(p) ? { image: abs(base, photo(p)) } : {}),
      ...(tr(p.place, lang) ? { locationCreated: { '@type': 'Place', name: tr(p.place, lang) } } : {}),
      ...(p.author ? { creator: { '@type': 'Person', name: p.author } } : {}),
      producer: { '@id': base + '#studio' } } })) },
  ] };
  const head = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(desc)}">`,
    `<link rel="canonical" href="${esc(base)}">`,
    ...langs.map(l => `<link rel="alternate" hreflang="${l}" href="${esc(base + '?lang=' + l)}">`),
    `<link rel="alternate" hreflang="x-default" href="${esc(base)}">`,
    `<meta property="og:type" content="website">`, `<meta property="og:site_name" content="${esc(name)}">`,
    `<meta property="og:title" content="${esc(title)}">`, `<meta property="og:description" content="${esc(desc)}">`,
    `<meta property="og:url" content="${esc(base)}">`, `<meta property="og:image" content="${esc(image)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`,
  ].join('\n');

  /* ---------------- résumé lisible sans JavaScript */
  const line = p => [tr(p.subtitle, lang), p.date, tr(p.place, lang)].filter(Boolean).join(' · ');
  const body = [`<div id="seo-text" lang="${lang}">`, `<h1>${esc(name)}</h1>`, `<p>${esc(desc)}</p>`,
    ...sections.map(sec => {
      const list = posts.filter(p => p.section === sec.id); if (!list.length) return '';
      return `<section><h2>${esc(tr(sec.name, lang))}</h2>` + list.map(p => {
        const story = cut(intro(tr(p.body, lang)), 420);
        return `<article><h3><a href="?p=${esc(encodeURIComponent(p.id))}">${esc(tr(p.title, lang))}</a></h3>` + (line(p) ? `<p>${esc(line(p))}</p>` : '') + (story ? `<p>${esc(story)}</p>` : '') + '</article>';
      }).join('') + '</section>';
    }),
    addr ? `<address>${esc(addr)}</address>` : '',
    `<p>${langs.map(l => `<a href="?lang=${l}" hreflang="${l}">${l.toUpperCase()}</a>`).join(' ')}</p>`, '</div>'].filter(Boolean).join('\n');

  /* ---------------- llms.txt */
  const md = [`# ${name}`, '', `> ${desc}`, '',
    ...(people.length ? ['## ' + tr({ en: 'Founders', fr: 'Fondateurs', ca: 'Fundadors', es: 'Fundadores' }, lang), ...people.map(p => `- ${tr(p.title, lang)}: ${tr(p.subtitle, lang)}`), ''] : []),
    ...sections.flatMap(sec => {
      const list = posts.filter(p => p.section === sec.id && sec.layout !== 'map'); if (!list.length) return [];
      return [`## ${tr(sec.name, lang)}`, ...list.map(p => { const st = cut(intro(tr(p.body, lang)), 300); return `- [${tr(p.title, lang)}](${base}?p=${encodeURIComponent(p.id)})${line(p) ? `: ${line(p)}` : ''}${st ? `. ${st}` : ''}`; }), ''];
    }),
    ...(addr ? ['## Contact', `- ${addr}`, ...social.map(u => `- ${u}`), ''] : []),
    ...(langs.length > 1 ? [`${tr({ en: 'Other languages', fr: 'Autres langues', ca: 'Altres llengües', es: 'Otros idiomas' }, lang)}: ${langs.map(l => `${base}?lang=${l}`).join(' ')}`, ''] : [])].join('\n');

  /* ---------------- sitemap.xml */
  const day = (opts.date || new Date()).toISOString().slice(0, 10);
  const urls = [base, ...langs.map(l => base + '?lang=' + l), ...posts.filter(p => !(p.tags || []).includes('partners')).map(p => base + '?p=' + encodeURIComponent(p.id))];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u, i) => `  <url><loc>${esc(u)}</loc><lastmod>${day}</lastmod><priority>${i === 0 ? '1.0' : i <= langs.length ? '0.8' : '0.6'}</priority></url>`).join('\n') + '\n</urlset>\n';

  return { head, body, llms: md, sitemap, base };
}

/* Remplace les blocs générés entre leurs marqueurs dans index.html ; le reste de la page ne bouge pas */
export function applySEO(indexHTML, parts) {
  const put = (html, tag, inner) => {
    const a = `<!--${tag}-->`, b = `<!--/${tag}-->`, i = html.indexOf(a), j = html.indexOf(b);
    return i >= 0 && j > i ? html.slice(0, i + a.length) + '\n' + inner + '\n' + html.slice(j) : html;
  };
  return put(put(indexHTML, 'seo-head', parts.head), 'seo-body', parts.body);
}
