/* ═══════════════════════════════════════════════════════════════════════════
   CONFIG CLIENT — TotalEnergies
   Paramètres globaux de l'application pour ce client (backend "designer").

   Principe multi-clients : dupliquer ce fichier (ex. autre-client.js),
   fournir un fichier de charte équivalent à charte-2026.js, et charger la
   bonne config dans les pages. Une "page client" allégée = une config qui
   n'active que certains générateurs et masque les options avancées.

   Chargement (optionnel — les pages fonctionnent sans) :
     <script src="…/config/clients/totalenergies.js"></script>
   avant header.js. header.js lit window.CLIENT_CONFIG.nav si présent.
   ═══════════════════════════════════════════════════════════════════════════ */
window.CLIENT_CONFIG = {
  key: "totalenergies",
  label: "TotalEnergies",
  charte: "charte-2026",        /* fichier de tokens actif */

  /* Navigation / générateurs activés (ordre d'affichage) */
  nav: [
    { label: "Fiche Métier",  href: "generators/fiche-metier/index.html"  },
    { label: "Citation Post", href: "generators/citation/index.html"      },
    { label: "Latest News",   href: "generators/latest-news/index.html"   },
    { label: "Split Screen",  href: "generators/split-screen/index.html"  },
    { label: "Carrousel",     href: "generators/carrousel/index.html"     },
    { label: "Block Layouts", href: "generators/block-layouts/index.html", isNew: true }
  ],

  /* Features activées pour ce client */
  features: {
    translate: true,            /* proxy DeepL / worker */
    removeBg:  true,            /* détourage RMBG dans le navigateur */
    upscale:   false,           /* upscale IA : à activer quand l'API sera branchée */
    partners:  true,            /* composants LogoFrame (3 régimes) */
    saveDrawer:true,
    zipExport: true
  },

  /* Valeurs par défaut côté designer (modifiables sans toucher au code) */
  defaults: {
    grad: "bleu",
    navMark: "arrow",
    formats: ["1x1","4x5","9x16","16x9"]
  }
};

/* Exemple de config "page client" allégée (à servir sur une URL dédiée) :
window.CLIENT_CONFIG = {
  key: "totalenergies-client",
  label: "TotalEnergies — accès client",
  charte: "charte-2026",
  nav: [
    { label: "Latest News",   href: "generators/latest-news/index.html" },
    { label: "Block Layouts", href: "generators/block-layouts/index.html" }
  ],
  features: { translate:true, removeBg:true, upscale:false,
              partners:false, saveDrawer:true, zipExport:false }
};
*/
