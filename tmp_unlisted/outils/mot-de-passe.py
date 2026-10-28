#!/usr/bin/env python3
"""Change le mot de passe de la page Réglages (graphistes).

    python3 outils/mot-de-passe.py "nouveau mot de passe"

Seule l'empreinte SHA-256 est écrite dans reglages/index.html."""
import hashlib, os, re, sys
if len(sys.argv) < 2 or len(sys.argv[1]) < 8:
    sys.exit("Donne un mot de passe d'au moins 8 caractères entre guillemets.")
h = hashlib.sha256(sys.argv[1].encode("utf-8")).hexdigest()
p = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "reglages", "index.html")
s = open(p, encoding="utf-8").read()
s2, n = re.subn(r'var MDP_HASH="[0-9a-f]{64}"', 'var MDP_HASH="%s"' % h, s)
if n != 1: sys.exit("Ligne MDP_HASH introuvable dans reglages/index.html")
open(p, "w", encoding="utf-8").write(s2)
print("Mot de passe changé.")
