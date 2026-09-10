/* ═══════════════════════════════════════════════════════════════════════════
   BOOT-GATE.JS — Portail de démarrage
   Static Posts Generator Fisheye × TotalEnergies

   ┌─────────────────────────────────────────────────────────────────────────┐
   │  CE QU'IL FAIT                                                          │
   │                                                                          │
   │  Une page charge ses dépendances de DEUX façons :                        │
   │   a) les <script src> écrits dans le HTML (app-shell.js, les cartes…) ;  │
   │   b) React / ReactDOM / dom-to-image, injectés par loadScript(), donc     │
   │      asynchrones.                                                        │
   │                                                                          │
   │  Le portail attend que les deux groupes soient prêts avant de démarrer.  │
   │                                                                          │
   │  HONNÊTETÉ SUR SON UTILITÉ : on a d'abord soupçonné une course entre     │
   │  ces deux groupes d'expliquer le symptôme « page à charger deux fois ».  │
   │  La mesure de l'ordre réel d'exécution a réfuté cette hypothèse — le     │
   │  navigateur donne la priorité aux scripts bloquants, les fichiers        │
   │  locaux arrivent avant les bibliothèques. Ce portail n'est donc PAS le   │
   │  correctif de ce symptôme : c'est une ceinture de sécurité, qui garantit │
   │  l'ordre quelles que soient les conditions et remplace une page blanche  │
   │  par un message lisible.                                                 │
   │                                                                          │
   │  Il tient aussi le journal d'erreurs affiché par diagnostic.html — la    │
   │  seule façon de lire une erreur sur iPhone sans brancher un Mac.         │
   └─────────────────────────────────────────────────────────────────────────┘

   Usage — dans <head>, AVANT tout le reste :

     <script src="../../assets/boot-gate.js"></script>

   puis, à la fin de la chaîne loadScript :

     SPGBoot.libsReady();

   et, dans le script de la page :

     function boot(){ … }
     SPGBoot.run(boot);

   Le démarrage n'a lieu que lorsque les TROIS conditions sont réunies :
   bibliothèques externes prêtes, document analysé (donc tous les <script src>
   exécutés), et fonction boot enregistrée. L'ordre d'arrivée n'importe plus.
   ═══════════════════════════════════════════════════════════════════════════ */
(function(global){

  /* ═══ Journal d'erreurs persistant ═══════════════════════════════════════
     Sur iPhone, lire la console demande un Mac relié en USB. On enregistre
     donc les erreurs dans localStorage : la page diagnostic.html les affiche
     ensuite à l'écran du téléphone, sans aucun outil.
     Journal borné à 40 entrées — il ne doit jamais grossir indéfiniment. */
  var LOG_KEY = "spg_diag_log";
  var LOG_MAX = 40;

  function journaliser(type, message, detail){
    try{
      var j = JSON.parse(localStorage.getItem(LOG_KEY) || "[]");
      j.push({
        t: new Date().toISOString(),
        /* Nom lisible : « citation », « carrousel »… plutôt que « index.html »
           partout, sinon le journal ne dit pas de quelle page vient l'erreur. */
        page: (function(){
          var m = location.pathname.split("/").filter(Boolean);
          var f = m[m.length-1] || "";
          if(/^index\.html?$/i.test(f)) return m[m.length-2] || "accueil";
          return f.replace(/\.html?$/i,"") || "accueil";
        })(),
        type: type,
        msg: String(message||"").slice(0,300),
        detail: String(detail||"").slice(0,200)
      });
      if(j.length > LOG_MAX) j = j.slice(-LOG_MAX);
      localStorage.setItem(LOG_KEY, JSON.stringify(j));
    }catch(e){ /* quota plein ou stockage refusé : on n'insiste pas */ }
  }

  /* Erreurs JavaScript non rattrapées */
  global.addEventListener("error", function(ev){
    if(ev.target && ev.target !== global && ev.target.tagName){
      /* Échec de chargement d'une ressource (script, image, feuille de style) */
      journaliser("ressource", (ev.target.src || ev.target.href || "?"), ev.target.tagName);
    } else {
      journaliser("js", ev.message, (ev.filename||"") + ":" + (ev.lineno||""));
    }
  }, true);   /* capture : indispensable pour voir les erreurs de ressources */

  /* Promesses rejetées sans traitement */
  global.addEventListener("unhandledrejection", function(ev){
    var r = ev.reason;
    journaliser("promesse", (r && r.message) || r, (r && r.stack || "").split("\n")[1] || "");
  });

  var libsOk = false;   /* chaîne loadScript terminée */
  var domOk  = false;   /* document analysé : tous les <script src> ont tourné */
  var bootFn = null;    /* fonction de démarrage de la page */
  var started = false;  /* garde-fou : on ne démarre qu'une fois */

  function attempt(){
    if(started || !libsOk || !domOk || !bootFn) return;
    started = true;
    try{
      bootFn();
    }catch(err){
      console.error("Échec du démarrage :", err);
      journaliser("demarrage", err && err.message || err, (err && err.stack || "").split("\n")[1] || "");
      var root = document.getElementById("root");
      if(root && !root.firstChild){
        root.innerHTML = '<div style="font:14px/1.6 system-ui,sans-serif;'
          + 'padding:40px;color:#a02a2a;max-width:640px;margin:60px auto;'
          + 'border:1px solid #f3c9c9;background:#fdeaea;border-radius:10px">'
          + '<b>Le générateur n\'a pas pu démarrer.</b><br>'
          + 'Rechargez la page. Si le problème persiste, ouvrez la console '
          + 'du navigateur : le détail de l\'erreur y est affiché.<br>'
          + '<code style="font-size:12px;color:#666">' + String(err && err.message || err)
          + '</code></div>';
      }
    }
  }

  /* DOMContentLoaded ne se déclenche qu'une fois TOUS les <script src> de la
     page exécutés : c'est exactement la garantie qu'il nous faut. */
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", function(){ domOk = true; attempt(); });
  } else {
    domOk = true;
  }

  global.SPGBoot = {
    /* Appelé au bout de la chaîne loadScript. */
    libsReady: function(){ libsOk = true; attempt(); },
    /* Appelé par la page avec sa fonction de démarrage. */
    run: function(fn){ bootFn = fn; attempt(); },
    /* Diagnostic : où en est le démarrage ? */
    status: function(){
      return {librairies:libsOk, document:domOk, bootEnregistre:!!bootFn, demarre:started};
    },
    /* Journal des erreurs, lu par diagnostic.html */
    journal: function(){
      try{ return JSON.parse(localStorage.getItem(LOG_KEY) || "[]"); }catch(e){ return []; }
    },
    viderJournal: function(){
      try{ localStorage.removeItem(LOG_KEY); }catch(e){}
    },
    noter: journaliser
  };

})(window);
