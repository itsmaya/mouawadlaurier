/* ═══════════════════════════════════════════════════════════════════════════
   BOOT-GATE.JS — Portail de démarrage
   Static Posts Generator Fisheye × TotalEnergies

   ┌─────────────────────────────────────────────────────────────────────────┐
   │  LE PROBLÈME QU'IL RÉSOUT                                               │
   │                                                                          │
   │  Une page charge ses dépendances de DEUX façons différentes :            │
   │                                                                          │
   │   a) les <script src> écrits dans le HTML (app-shell.js, les cartes…).   │
   │      Ils sont insérés par l'analyseur, s'exécutent dans l'ordre, et      │
   │      bloquent la construction du document.                              │
   │                                                                          │
   │   b) React / ReactDOM / dom-to-image, injectés à l'exécution par        │
   │      loadScript(). Un <script> créé en JavaScript est ASYNCHRONE par     │
   │      défaut : il s'exécute dès qu'il est arrivé, sans aucun rapport      │
   │      avec la position des autres scripts dans la page.                   │
   │                                                                          │
   │  Sur un poste de bureau, les fichiers locaux du groupe (a) arrivent en   │
   │  quelques millisecondes et gagnent toujours la course. Sur mobile, avec  │
   │  une latence variable, un CDN déjà en cache peut répondre AVANT eux :    │
   │  boot() démarrait alors que Shell ou SPGCards n'existaient pas encore.   │
   │  Résultat : page blanche, puis tout fonctionne au second chargement      │
   │  (les délais changent une fois le cache chaud). Symptôme classique :     │
   │  « je dois charger la page deux fois ».                                  │
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
    /* Diagnostic (console) : où en est-on ? */
    status: function(){
      return {librairies:libsOk, document:domOk, bootEnregistre:!!bootFn, demarre:started};
    }
  };

})(window);
