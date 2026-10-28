#!/usr/bin/env python3
"""Ajoute (ou met à jour) un numéro de version ?v=… sur tous les scripts et
feuilles de style locaux des pages HTML. À lancer AVANT chaque mise en ligne :

    python3 outils/versionner.py

Pourquoi : sans numéro de version, un navigateur peut garder en cache l'ancien
assets/xxx.js avec le nouvel index.html. Les deux ne se parlent plus et la page
reste blanche, chez certaines personnes seulement. Avec ?v=, un fichier modifié
est toujours rechargé."""
import re, glob, os, sys, time
racine = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
version = sys.argv[1] if len(sys.argv) > 1 else time.strftime("%Y%m%d%H%M")
motif = re.compile(r'(<(?:script|link)\b[^>]*?\b(?:src|href)=")((?:\.\./|\./)*assets/[^"?#]+\.(?:js|css))(?:\?v=[^"]*)?(")')
n = 0
for chemin in glob.glob(os.path.join(racine, "*.html")) + glob.glob(os.path.join(racine, "generators", "*", "*.html")) + glob.glob(os.path.join(racine, "reglages", "*.html")):
    with open(chemin, encoding="utf-8") as f: s = f.read()
    s2, k = motif.subn(lambda m: m.group(1) + m.group(2) + "?v=" + version + m.group(3), s)
    if s2 != s:
        with open(chemin, "w", encoding="utf-8") as f: f.write(s2)
    n += k
print("version", version, "-", n, "références mises à jour")
