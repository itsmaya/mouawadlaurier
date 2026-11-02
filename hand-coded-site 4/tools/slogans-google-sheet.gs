/**
 * Collecte des bullshit slogans du site Hand Coded dans une feuille Google.
 *
 * Mise en place (une fois, environ cinq minutes) :
 *  1. Crée une feuille Google Sheets vide, par exemple « Hand Coded · slogans ».
 *  2. Dans la feuille : Extensions › Apps Script. Efface le code proposé et colle tout ce fichier. Enregistre.
 *  3. Déployer › Nouveau déploiement › type « Application Web ».
 *       Exécuter en tant que : Moi
 *       Qui a accès : Tout le monde
 *     Autorise l'accès quand Google le demande (c'est ta propre feuille).
 *  4. Copie l'adresse qui finit par /exec et colle-la dans le back-office : Réglages › Accueil › Collecte des slogans. Publie.
 *
 * Chaque slogan validé sur le site ajoute une ligne : date, slogan, langue du visiteur, tag du lien client (?tag=…), site.
 * Aucune donnée personnelle n'est enregistrée (ni adresse IP, ni identifiant).
 * Le back-office lit les dernières lignes (bouton « Afficher les slogans reçus ») et peut les ajouter au bandeau LED.
 * Note : l'adresse /exec permet à qui la connaît de lire la liste des slogans, qui sont de toute façon des textes publics.
 *
 * Après une modification de ce code : Déployer › Gérer les déploiements › modifier › Nouvelle version (l'adresse reste la même).
 */
const SHEET_NAME = 'Slogans';
const MAX_LENGTH = 70;

function doPost(e) {
  let data = {};
  try { data = JSON.parse((e && e.postData && e.postData.contents) || '{}'); } catch (err) { return json_({ ok: false }); }
  const slogan = String(data.slogan || '').replace(/\s+/g, ' ').trim().slice(0, MAX_LENGTH);
  if (!slogan) return json_({ ok: false });
  const clean = (v, n) => String(v || '').replace(/^[=+\-@]/, "'").slice(0, n);   // pas de formule dans la feuille
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try { sheet_().appendRow([new Date(), clean(slogan, MAX_LENGTH + 1), clean(data.lang, 5), clean(data.tag, 40), clean(data.site, 80)]); }
  finally { lock.releaseLock(); }
  return json_({ ok: true });
}

function doGet(e) {
  const sh = sheet_(), last = sh.getLastRow();
  const limit = Math.max(1, Math.min(2000, Number((e && e.parameter && e.parameter.limit) || 500)));
  const first = Math.max(2, last - limit + 1);
  const rows = last >= 2 ? sh.getRange(first, 1, last - first + 1, 4).getValues() : [];
  return json_({ slogans: rows.reverse().map(r => ({ date: r[0] instanceof Date ? r[0].toISOString() : String(r[0]), slogan: String(r[1]).replace(/^'/, ''), lang: r[2], tag: r[3] })) });
}

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) { sh = ss.insertSheet(SHEET_NAME); sh.appendRow(['Date', 'Slogan', 'Langue', 'Tag', 'Site']); sh.setFrozenRows(1); }
  return sh;
}

function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
