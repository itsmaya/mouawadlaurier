/* ═══════════════════════════════════════════════════════════════════════════
   TE-CHARTE.JS — Shim de compatibilité vers CHARTE 2026
   Les générateurs historiques (latest-news, citation, fiche-metier) continuent
   d'utiliser cette API. Les valeurs proviennent désormais de charte-2026.js,
   qui doit être chargé AVANT ce fichier :

     <script src="../../assets/charte-2026.js"></script>
     <script src="../../assets/te-charte.js"></script>

   Exporte sur window : GRADS, gradCss, COLOR_GREY, TE_WHITE,
   CARD_W, K, px, FORMATS, ML_W, ML_RADIUS, T, getLayout
   ═══════════════════════════════════════════════════════════════════════════ */

(function(global){

var CH = global.CHARTE;
if(!CH){
  console.error("te-charte.js : charte-2026.js doit être chargé avant. " +
    "Ajoute <script src=\"…/assets/charte-2026.js\"></script> avant te-charte.js.");
  return;
}

/* ── Dégradés ─────────────────────────────────────────────────────────── */
var GRADS = CH.gradients;

/* Charte 2026 : orientation unique 135° (top-left → bottom-right), blocs,
   fonds et texte. L'argument deg des anciens appels (90, 180) est ignoré
   par défaut pour appliquer la charte partout d'un coup.
   Échappatoire : gradCss(k, deg, true) force l'angle demandé. */
function gradCss(k, deg, literal){
  if(literal === true) return global.chGrad(k, { angle: deg === undefined ? 90 : deg });
  return global.chGrad(k);
}

/* ── Couleurs texte ───────────────────────────────────────────────────── */
var COLOR_GREY = CH.text.darkGray;   /* #374649 */
var TE_WHITE   = "#FFFFFF";

/* ── Layout — base 1080 px charte ─────────────────────────────────────── */
var CARD_W = CH.meta.baseWidth, K = 1;
function px(v){ return Math.round(v * K); }

/* Les 3 formats historiques. Le 16:9 (nouveau, p22) est disponible via
   CHARTE.formats pour les générateurs migrés sur le shell ; il n'est pas
   injecté ici pour ne pas faire apparaître un format non testé dans les
   sélecteurs des pages non migrées. */
var FORMATS = {
  "1x1" : { label: CH.formats["1x1"].label,  outputW:1080, outputH:1080, cardH:1080 },
  "4x5" : { label: CH.formats["4x5"].label,  outputW:1080, outputH:1350, cardH:1350 },
  "9x16": { label: CH.formats["9x16"].label, outputW:1080, outputH:1920, cardH:1920 }
};

/* 16:9 (nouveau format p22) : accessible en accès direct (FORMATS["16x9"])
   pour les générateurs migrés, mais non énumérable pour ne pas apparaître
   dans les sélecteurs des pages historiques (Object.keys). */
Object.defineProperty(FORMATS, "16x9", {
  value: { label: CH.formats["16x9"].label, outputW:1920, outputH:1080, cardH:1080 },
  enumerable: false, configurable: true
});

var ML_W      = px(50);
var ML_RADIUS = px(CH.components.inset.radius);

/* ── Typo & mise en page — mêmes clés qu'avant, valeurs charte 2026 ──── */
var CPT = CH.components.caption;
var CTA = CH.components.cta;
var T = {
  BADGE_H_PT      : CPT.h,            /* 70  (p16) */
  BADGE_ICON_PT   : CPT.iconBox,      /* 70 */
  BADGE_ICON_RATIO: 0.68,
  BADGE_GAP_PT    : CPT.gap,          /* 15 */
  BADGE_RADIUS_PT : CPT.radius,       /* 15 — charte 2026 (était 22 en V8) */
  BADGE_PADX_PT   : CPT.padX,         /* 25 */
  BADGE_FONT_PT   : CPT.fontPt,       /* 30 */
  BADGE_LEADING_PT: CPT.leadingPt,    /* 35 (p16) */
  PAVE_PAD_PT     : 30,
  PAVE_RADIUS_PT  : CH.components.block.radius,   /* 20 */
  ARROW_W_PT      : CTA.w,            /* 90 */
  ARROW_H_PT      : CTA.h,            /* 71 */
  ARROW_RADIUS_PT : CTA.radius,       /* 18 */
  ARROW_GAP_PT    : 30,
  ARROW_GAP_STORY : 50,
  TEXT_MIN_PT     : 45,
  TEXT_MAX_PT     : 80,
  TEXT_DEF_PT     : 48,
  TEXT_LH         : 1.25,
  FW_TEXT         : 500,
  FW_HIGHLIGHT    : CH.components.highlight.weight,  /* 800 */
  FW_UNDERLINE    : CH.components.underline.weight,  /* 600 */
  FW_BADGE_MAIN   : CPT.weight,       /* 800 */
  FW_BADGE_SUB    : 200,
  /* Surlignage 2026 : la largeur vient d'espaces insérés DANS le flux (p19).
     HIGHLIGHT_PAD_X ne sert plus qu'aux anciens rendus non migrés. */
  HIGHLIGHT_PAD_X : 0,
  HIGHLIGHT_H     : 1.14,
  UNDERLINE_TH    : CH.components.underline.th,
  UNDERLINE_OFF   : CH.components.underline.off
};

/* ── getLayout — inchangé dans sa signature ───────────────────────────── */
function getLayout(k, opts){
  opts = opts || {};
  var f = FORMATS[k] || FORMATS["1x1"];
  var cf = global.chFormat(k);
  var story = (k === "9x16");
  var base = story ? px(cf.margin)
           : (opts.firstSlide ? px(CH.formats["4x5"].carouselFirstSlideMargin) : px(cf.margin));
  var ml = (!story && opts.hasML) ? ML_W : 0;
  return {
    CARD_H      : f.cardH,
    EXPORT_SCALE: f.outputW / CARD_W,
    STORY       : story,
    ML          : ml,
    MARGIN      : base + ml,
    BADGE_TOP   : story ? px(cf.captionTop) : base + ml,
    RIGHT_MIN   : px(cf.rightMin) + ml,
    BOTTOM      : px(cf.bottom) + ml,
    IMG_RADIUS  : opts.imgRadius !== undefined ? opts.imgRadius : px(CH.components.inset.radius),
    BADGE_H     : px(T.BADGE_H_PT),
    BADGE_ICON  : px(T.BADGE_ICON_PT),
    BADGE_GAP   : px(T.BADGE_GAP_PT),
    BADGE_RADIUS: px(T.BADGE_RADIUS_PT),
    BADGE_PADX  : px(T.BADGE_PADX_PT),
    BADGE_FONT  : px(T.BADGE_FONT_PT),
    PAVE_PAD    : px(T.PAVE_PAD_PT),
    PAVE_RADIUS : px(T.PAVE_RADIUS_PT),
    ARROW_W     : px(T.ARROW_W_PT),
    ARROW_H     : px(T.ARROW_H_PT),
    ARROW_RADIUS: px(T.ARROW_RADIUS_PT),
    ARROW_GAP   : story ? px(T.ARROW_GAP_STORY) : px(T.ARROW_GAP_PT),
    TEXT_MIN    : px(T.TEXT_MIN_PT),
    TEXT_MAX    : px(T.TEXT_MAX_PT),
    TEXT_DEF    : px(T.TEXT_DEF_PT),
    TEXT_LH     : T.TEXT_LH
  };
}

global.GRADS = GRADS;
global.gradCss = gradCss;
global.COLOR_GREY = COLOR_GREY;
global.TE_WHITE = TE_WHITE;
global.CARD_W = CARD_W;
global.K = K;
global.px = px;
global.FORMATS = FORMATS;
global.ML_W = ML_W;
global.ML_RADIUS = ML_RADIUS;
global.T = T;
global.getLayout = getLayout;

})(window);
