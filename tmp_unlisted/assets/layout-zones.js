/* ═══════════════════════════════════════════════════════════════════════════
   LAYOUT-ZONES.JS — où se placent cartouche, contenu et flèche
   ---------------------------------------------------------------------------
   Jusqu'ici chaque carte recalculait seule ces positions (voir
   claude/audit-centralisation-layout.md). Ce module les calcule UNE fois,
   à partir de la charte, et les rend sous forme de rectangles en px de carte
   (origine en haut à gauche).

   Dépend de : charte-2026.js (CHARTE, chFormat) et te-charte.js (getLayout,
   qui porte déjà la marie-louise et la marge de 1re slide du carrousel).

   SPGLayout.zones(format, opts) -> {
     W, H,
     cartouche : { x, y, w:null, h, visible }   w inconnue : dépend du texte
     fleche    : { x, y, w, h, cote, visible }
     contenu   : { top, bottom, left, right, w, h }   zone libre pour la carte
     regles    : { gapSousCartouche, gapContenuFleche, tolerance }
   }
   opts : firstSlide, hasML, navMark ("arrow"|"dot"|"none"), hideBadge,
          cote ("left"|"right" ; défaut CHARTE.composition.flecheCoteDefaut)

   Ce module ne dessine rien et n'est lu par aucune carte pour l'instant :
   la migration se fait carte par carte, avec comparaison d'images.
   ═══════════════════════════════════════════════════════════════════════════ */
(function(global){

function zones(format, opts){
  opts = opts || {};
  var CH = global.CHARTE, C = CH.composition, cta = CH.components.cta,
      cap = CH.components.caption;
  var f  = CH.formats[format] || CH.formats["1x1"];
  var L  = global.getLayout(format, {firstSlide:!!opts.firstSlide, hasML:!!opts.hasML});
  var story = (format === "9x16");
  var W = f.outputW, H = L.CARD_H || f.outputH;
  var ml = L.ML || 0;

  var avecFleche = !!opts.navMark && opts.navMark !== "none";
  var cote = opts.cote || C.flecheCoteDefaut;

  /* Cartouche : toujours en haut à gauche (p16) ; sa largeur dépend du texte. */
  var cart = { x:L.MARGIN, y:L.BADGE_TOP, w:null, h:cap.h, visible:!opts.hideBadge };

  /* Flèche : coin bas, à la marge de la charte. */
  var margeBas = global.chFleche(format).bas + ml;
  var fl = { w:cta.w, h:cta.h, cote:cote, visible:avecFleche };
  fl.y = H - margeBas - cta.h;
  fl.x = (cote === "right") ? (W - L.MARGIN - cta.w) : L.MARGIN;

  /* Zone libre pour le contenu. */
  var gapFl = story ? C.gapContenuFlecheStory : C.gapContenuFleche;
  var top    = cart.visible ? (cart.y + cart.h + C.gapSousCartouche) : L.MARGIN;
  var bottom = avecFleche ? (fl.y - gapFl) : (H - L.BOTTOM);
  var left   = L.MARGIN;
  var right  = W - (story ? L.RIGHT_MIN : L.MARGIN);

  return {
    W:W, H:H, cartouche:cart, fleche:fl,
    contenu:{ top:top, bottom:bottom, left:left, right:right,
              w:right-left, h:bottom-top },
    regles:{ gapSousCartouche:C.gapSousCartouche, gapContenuFleche:gapFl,
             tolerance:C.tolerance }
  };
}

global.SPGLayout = { zones:zones };

})(window);
