/* ═══════════════════════════════════════════════════════════════════════════
   REGISTRY.JS — Registre des cartes partagées
   Static Posts Generator Fisheye × TotalEnergies

   ┌─────────────────────────────────────────────────────────────────────────┐
   │  RÈGLE FONDAMENTALE                                                     │
   │  Le visuel d'un type de post est défini À UN SEUL ENDROIT : son module   │
   │  de carte dans assets/cards/. La page génératrice ET le Carrousel        │
   │  rendent le MÊME composant. Toute retouche de design faite dans le       │
   │  module se répercute donc automatiquement des deux côtés.                │
   │                                                                          │
   │  Ne jamais réécrire une carte dans une page. Si un rendu doit varier,    │
   │  cela passe par une prop du composant, pas par une copie.                │
   └─────────────────────────────────────────────────────────────────────────┘

   Un module de carte s'enregistre ainsi :

     SPGCards.register("splitscreen", {
       label:"Split Screen", icon:"◧",
       pageKey:"splitscreen",            // clé du store SaveManager
       href:"generators/split-screen/",  // page génératrice
       DEFAULT:{…},                      // état complet par défaut
       shared:["format","grad",…],       // clés pilotées par le Carrousel
       Card:function(p){…}               // composant React
     });

   Contrat du composant Card — props :
     st           état complet de la carte (jamais partiel : passer par
                  SPGCards.resolve() qui applique les défauts)
     cardRef      ref optionnelle posée sur la racine
     exportTarget true → pose data-export-card="1" (un seul par page !)
     scale        échelle d'affichage à l'écran, pour DragImage (défaut 1)
     interactive  true → le fond est repositionnable à la souris
     onBgMove     (xPct,yPct) → appelé au drag du fond si interactive

   La carte se rend TOUJOURS à l'échelle 1 (CARD_W × L.CARD_H). C'est
   l'appelant qui applique un transform:scale pour l'affichage.

   Dépend de : te-charte.js, charte-2026.js, rich-body.js, drag-image.js,
               components-2026.js, pictos.js, bg-controls.js
   ═══════════════════════════════════════════════════════════════════════════ */
(function(global){

  var reg = {};
  var order = [];

  var SPGCards = {

    /* ── Enregistrement ── */
    register: function(key, def){
      if(reg[key]) console.warn("SPGCards : « "+key+" » déjà enregistré, remplacement.");
      else order.push(key);
      reg[key] = Object.assign({ key:key, label:key, icon:"", shared:[] }, def);
      return reg[key];
    },

    /* ── Lecture ── */
    get:  function(key){ return reg[key] || null; },
    keys: function(){ return order.slice(); },
    all:  function(){ return order.map(function(k){ return reg[k]; }); },
    has:  function(key){ return !!reg[key]; },

    /* ── État complet d'une carte ──
       defaults du type  ←  état enregistré  ←  surcharges (Carrousel)
       Garantit qu'aucune clé ne manque, même sur une vieille sauvegarde. */
    resolve: function(key, state, overrides){
      var d = reg[key];
      if(!d) return null;
      return Object.assign({}, d.DEFAULT, state||{}, overrides||{});
    },

    /* ── Sous-ensemble « commun » d'un état ──
       Les clés que le Carrousel impose à toutes ses vignettes. */
    sharedKeys: function(key){
      var d = reg[key];
      return d ? d.shared.slice() : [];
    },

    /* ── Rendu ── */
    render: function(key, props){
      var d = reg[key];
      if(!d) return null;
      return global.React.createElement(d.Card, props);
    },

    /* ── Hauteur de carte pour un format donné ──
       Permet de dimensionner un conteneur sans monter le composant. */
    cardHeight: function(key, format, st){
      var d = reg[key];
      if(d && d.cardHeight) return d.cardHeight(format, st);
      return global.getLayout(format).CARD_H;
    }
  };

  /* Clés communes par défaut : tout ce que le Carrousel pilote globalement.
     Un module peut en déclarer d'autres via sa propriété `shared`. */
  SPGCards.COMMON_SHARED = ["format","grad","lowCarbon",
    "badgeMain","badgeSub","badgeIconKey","badgeIconCustom","navMark"];

  global.SPGCards = SPGCards;

})(window);
