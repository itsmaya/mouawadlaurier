/* ═══════════════════════════════════════════════════════════════════════════
   TE-CHARTE.JS — Charte TotalEnergies V8
   Module partagé entre tous les générateurs Static Posts Generator.

   Exporte sur window : GRADS, gradCss, COLOR_GREY, TE_WHITE,
   CARD_W, K, px, FORMATS, ML_W, ML_RADIUS, T, getLayout
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── Dégradés principaux ───────────────────────────────────────────────── */
var GRADS={
  bleu:  {label:"Bleu",   from:"#0098E3", to:"#4632FF", lowCarbonOK:true },
  cyan:  {label:"Cyan",   from:"#0197E6", to:"#00A55E", lowCarbonOK:true },
  vert:  {label:"Vert",   from:"#3EA400", to:"#00884A", lowCarbonOK:true },
  rouge: {label:"Rouge",  from:"#EB6A17", to:"#E70000", lowCarbonOK:false}
};
function gradCss(k,deg){
  var g=GRADS[k]||GRADS.bleu;
  return "linear-gradient("+(deg===undefined?90:deg)+"deg,"+g.from+" 0%,"+g.to+" 100%)";
}

/* ── Couleurs texte ────────────────────────────────────────────────────── */
var COLOR_GREY="#374649";
var TE_WHITE="#FFFFFF";

/* ── Layout — base 1080 px charte ─────────────────────────────────────── */
var CARD_W=1080, K=1;
function px(v){ return Math.round(v*K); }

var FORMATS={
  "1x1" :{label:"Carré 1:1",    outputW:1080,outputH:1080,cardH:1080},
  "4x5" :{label:"Portrait 4:5", outputW:1080,outputH:1350,cardH:1350},
  "9x16":{label:"Story 9:16",   outputW:1080,outputH:1920,cardH:1920}
};

var ML_W=px(50);
var ML_RADIUS=px(20);

/* ── Typo & mise en page ───────────────────────────────────────────────── */
var T={
  BADGE_H_PT      : 70,
  BADGE_ICON_PT   : 70,
  BADGE_ICON_RATIO: 0.68,
  BADGE_GAP_PT    : 15,
  BADGE_RADIUS_PT : 22,
  BADGE_PADX_PT   : 25,
  BADGE_FONT_PT   : 30,
  PAVE_PAD_PT     : 30,
  PAVE_RADIUS_PT  : 22,
  ARROW_W_PT      : 90,
  ARROW_H_PT      : 71,
  ARROW_RADIUS_PT : 18,
  ARROW_GAP_PT    : 30,
  ARROW_GAP_STORY : 50,
  TEXT_MIN_PT     : 45,
  TEXT_MAX_PT     : 80,
  TEXT_DEF_PT     : 48,
  TEXT_LH         : 1.25,
  FW_TEXT         : 500,
  FW_HIGHLIGHT    : 800,
  FW_UNDERLINE    : 600,
  FW_BADGE_MAIN   : 800,
  FW_BADGE_SUB    : 200,
  HIGHLIGHT_PAD_X : 0.28,
  HIGHLIGHT_H     : 1.14,
  UNDERLINE_TH    : 0.17,
  UNDERLINE_OFF   : 0.03
};

/* ── getLayout ─────────────────────────────────────────────────────────────
   Paramètres :
     k          : clé de format ("1x1", "4x5", "9x16")
     opts       : objet optionnel { firstSlide, hasML, imgRadius }
                  firstSlide : marge basse élargie à 84px (1re slide carrousel)
                  hasML      : true si marie-louise activée
                  imgRadius  : rayon des coins d'image (ex: split-screen)
   ─────────────────────────────────────────────────────────────────────── */
function getLayout(k, opts){
  opts=opts||{};
  var f=FORMATS[k]||FORMATS["1x1"];
  var story=(k==="9x16");
  var base = story ? px(80) : (opts.firstSlide ? px(84) : px(50));
  var ml   = (!story && opts.hasML) ? ML_W : 0;
  return {
    CARD_H      : f.cardH,
    EXPORT_SCALE: f.outputW/CARD_W,
    STORY       : story,
    ML          : ml,
    MARGIN      : base+ml,
    BADGE_TOP   : story ? px(180) : base+ml,
    RIGHT_MIN   : (story ? px(160) : px(100)) + ml,
    BOTTOM      : (story ? px(230) : px(100)) + ml,
    IMG_RADIUS  : opts.imgRadius!==undefined ? opts.imgRadius : px(20),
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
