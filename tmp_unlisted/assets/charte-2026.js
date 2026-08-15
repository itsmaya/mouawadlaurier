/* ═══════════════════════════════════════════════════════════════════════════
   CHARTE-2026.JS — TotalEnergies Social Media Graphic Charter, July 2026
   Source unique de vérité de la charte. Données, pas de logique métier.

   Référence : "Social Media Graphic Charter" EN, 110 pages, juillet 2026.
   Chaque valeur porte la page du PDF d'où elle vient (commentaire pXX).

   Exporte sur window : CHARTE, chGrad, chFormat, chTypo
   Le shim te-charte.js re-expose l'ancienne API (GRADS, FORMATS, T, getLayout)
   à partir de ces données pour les générateurs non migrés.
   ═══════════════════════════════════════════════════════════════════════════ */
(function(global){

var CHARTE = {

  meta: {
    client: "TotalEnergies",
    name: "Social Media Graphic Charter",
    version: "2026-07",
    baseWidth: 1080            /* toutes les cotes px sont en base carte 1080 */
  },

  /* ── Dégradés primaires (p8) ─────────────────────────────────────────────
     Orientation charte : du haut vers le bas du bloc, en diagonale
     coin supérieur gauche → coin inférieur droit (CSS 135deg), texte compris. */
  gradients: {
    bleu:  { label:"Bleu",  from:"#0098E3", to:"#4632FF", lowCarbonOK:true  },
    cyan:  { label:"Cyan",  from:"#0197E6", to:"#00A55E", lowCarbonOK:true  },
    vert:  { label:"Vert",  from:"#3EA400", to:"#00884A", lowCarbonOK:true,
             lowCarbonPreferred:true },                                /* p8 */
    rouge: { label:"Rouge", from:"#EB6A17", to:"#E70000", lowCarbonOK:false }
  },
  gradientAngle: 135,          /* p8 : top-left → bottom-right, blocs ET texte */
  oneGradientPerVisual: true,  /* p8 : recommandation */

  /* ── Couleurs secondaires en aplat (p9-11) ──────────────────────────────
     allowed : contextes autorisés. Tout le reste est interdit (texte,
     caption box, highlight box, inset frame, fond avec texte). */
  secondary: {
    red:       { hex:"#E70000", text:"#FFFFFF" },
    blue:      { hex:"#285AFF", text:"#FFFFFF" },
    redOrange: { hex:"#D43900", text:"#FFFFFF" },
    blueLight: { hex:"#80CDFF", text:"#374649" },
    turquoise: { hex:"#92EAEA", text:"#374649" },
    green:     { hex:"#72EAC5", text:"#374649" },
    fluoGreen: { hex:"#BCF453", text:"#374649" },
    yellow:    { hex:"#FFE74F", text:"#374649" }
  },
  secondaryAllowed: ["chart","illustration","icon","collageBg"],       /* p11 */

  /* ── Texte (p12) ─────────────────────────────────────────────────────── */
  text: {
    font: "Nunito",
    weights: { extrabold:800, bold:700, semibold:600, regular:400 },
    onGradient: "#FFFFFF",     /* sur dégradé : toujours blanc */
    darkGray: "#374649",       /* gris foncé de référence */
    onWhite: ["gradient","#374649","#E70000","#4632FF","#0197E6","#00884A"],
    maxLinesBeforeGray: 5,     /* p12 : >5 lignes → #374649 obligatoire */
    lightBg: "#F5F9FB",        /* p8 : gris clair accessible */
    contrast: { headline:3, body:4.5 }                                 /* p7 */
  },

  /* ── Formats (p22) + marges de layout ───────────────────────────────── */
  formats: {
    "1x1":  { label:"Carré 1:1",      outputW:1080, outputH:1080,
              margin:50, marginInset:100, bottom:100, rightMin:100,
              captionTop:50 },
    "4x5":  { label:"Portrait 4:5",   outputW:1080, outputH:1350,
              margin:50, marginInset:100, bottom:100, rightMin:100,
              captionTop:50, carouselFirstSlideMargin:84 },            /* p45 */
    "9x16": { label:"Story 9:16",     outputW:1080, outputH:1920,
              margin:80, marginInset:100, bottom:230, rightMin:160,
              captionTop:180, blockGap:40, blockLeft:50,
              insetForbidden:true, maxBlocks:3 },                   /* p26,41 */
    "16x9": { label:"Paysage 16:9",   outputW:1920, outputH:1080,
              margin:80, marginInset:100, bottom:100, rightMin:100,
              captionTop:80 }                                          /* p22 */
  },

  /* ── Composants normalisés ──────────────────────────────────────────── */
  components: {

    caption: {                 /* cartouche picto + pilule (p16-17) */
      h:70, iconBox:70, gap:15, padX:25, radius:15,
      fontPt:30, leadingPt:35, weight:800, caseRule:"upper",
      subWeight:600,           /* SemiBold possible en 2e partie (p17) */
      margin:50, marginInset:100,
      onGradient:"outline-white", onOther:"gradient-fill"
    },

    highlight: {               /* mots surlignés (p19) */
      mode:"space-in-flow",    /* largeur = texte + 1 espace de chaque côté */
      weight:800
    },

    underline: { th:0.17, off:0.03, weight:600 },   /* usage historique conservé */

    inset: {                   /* inset frame (p24, 28, 45) */
      radius:20, fills:["white","gradient"], forbiddenFormats:["9x16"]
    },

    block: {                   /* block layouts, template 05 (p31-42) */
      pad:40, radius:20, marginMin:50, gapY:50, gapYLarge:100,
      maxBlocks:4, maxBlocksStory:3, maxFontSizes:2,
      minImageVisible:0.5,     /* p40 : >=50 % de l'image visible */
      iconMargin:40,           /* p38 : icône à 40px du bloc et du texte */
      colorCombos: [           /* p35-36 */
        { bg:"gradient", blocks:"white",    typo:"gradient" },
        { bg:"white",    blocks:"gradient", typo:"white"    },
        { bg:"photo",    blocks:"white",    typo:"gradient" }
      ],
      maxGradientsOnWhite:4    /* p36 : 4 dégradés max, fond blanc seulement */
    },

    quote: {                   /* bloc citation central, template 03 (p29,46) */
      radius:25, pad:40, gap:15, avatar:80,
      shadow:{ opacity:0.10, blur:5, x:0, y:10 },
      sourceStyle:"italic"
    },

    cta: {                     /* flèche carrousel / point de fin (p16,105) */
      w:90, h:71, radius:18, gapBottom:50, gapBottomStory:230,
      onGradient:"outline-white", endMark:"dot"
    },

    collage: {                 /* p20, p38 */
      outlinePt:15,
      shadow:{ mode:"multiply", opacity:0.30, x:4, y:4, blur:5 },
      zIndex:"behind-blocks"
    }
  },

  /* ── Plages typographiques par template (p37, 44-48, 60) ─────────────
     Valeurs en pt charte = px sur carte 1080. [min, max]. */
  typo: {
    splitScreen:   { body:{w:400, s:[40,60],  lh:[47,70]  },
                     hl:  {w:700, s:[45,80]              } },          /* p44 */
    textOnImage:   { body:{w:600, s:[45,80],  lh:[55,95]  },
                     hl:  {w:800, s:[45,80]              } },          /* p45 */
    centralBlock:  { body:{w:400, s:[30,60],  lh:[40,70]  },
                     hl:  {w:600                          } },         /* p46 */
    textOnBg:      { body:{w:400, s:[60,80],  lh:[70,80]  },
                     keyFigure:{w:800, s:[100,160]        } },         /* p47 */
    blockLayout:   { callout:{w:800, s:[90,125] },
                     body:   {w:600, s:[40,60]  } },                   /* p37 */
    reelThumb:     { body:{w:600, s:[90], lh:[90] },
                     callout:{w:800, s:[125], lh:[110] } }             /* p60 */
  },

  /* ── Partenaires : 3 régimes (p62-98) ───────────────────────────────── */
  partners: {
    strategic: {               /* Quartz, Rubia, Excellium, Wash… */
      frame:{ w:250, h:150, opacity:0.95,
              gradient:{ from:1.0, to:0.30, solidTopThird:true },
              corner:"bottom-right" },
      pos:{ std:{ right:50, top:0 }, story:{ right:80, top:180 } },
      textOnBgForbidden:true                                        /* p72-73 */
    },
    partnerBrand: {            /* marques en station + partenaires occasionnels */
      pad:15, radius:15, gap:20,
      horizontal:{ w:190, h:70, rightMin:20 },
      vertical:{ w:130 },
      onWhiteOutline:{ color:"#000000", width:2 },
      noCaptionIcon:true                                               /* p76 */
    },
    official: {                /* co-signature */
      h:165, separator:{ color:"#000000", width:1.5 },
      logoMargin:25, logoMarginMin:22,
      pos:{ std:25, imageTop:70, inset:100, story:{ left:50, top:180 } },
      textBelowMin:100, noCaption:true, whiteBgOnly:true            /* p89-97 */
    }
  },

  /* ── Logo TotalEnergies (p5) ────────────────────────────────────────── */
  logo: { minWidthPx:70, clearSpaceFactor:1.5, colorOnWhiteOnly:true },

  /* ── Vidéo (p50-60) — roadmap, non utilisé par les générateurs statiques */
  video: {
    safeZones: {
      reel:  { top:220, sides:65, bottom:400 },
      tiktok:{ top:120, sides:70, bottom:480 },
      "1x1": { top:50, sides:50, bottom:50 },
      "16x9":{ top:80, sides:80, bottom:80 }
    },
    subtitles:{ maxLines:2, fontPt:50, leadingPt:60,
                shadow:{ opacity:0.10, blur:5, x:0, y:5 },
                y:{ "9x16":1380, "1x1":900, "16x9":900 } },
    progressBar:{ w:20 },
    anim: { blockIn:{ dur:0.6, offset:40, textDelay:0.2 },
            blockOut:{ dur:0.4 },
            reveal:{ dur:1.0, offset:40 },
            highlight:{ dur:0.6, easeIn:0.66, easeOut:1.0 },
            counter:{ dur:0.4 } }
  },

  /* ── Règles vérifiables par le validateur du shell ──────────────────── */
  rules: [
    { id:"low-carbon-green",  level:"info",
      msg:"Sujet bas-carbone : le dégradé vert est recommandé par la charte (p8)." },
    { id:"low-carbon-no-red", level:"warn",
      msg:"Le dégradé rouge n'est pas adapté aux sujets bas-carbone (p8)." },
    { id:"gray-over-5-lines", level:"warn",
      msg:"Paragraphe de plus de 5 lignes : la charte impose le gris #374649 (p12)." },
    { id:"max-4-blocks",      level:"block",
      msg:"Maximum 4 blocs par visuel (p31, p40)." },
    { id:"max-3-blocks-story",level:"warn",
      msg:"En story, la charte recommande 2 à 3 blocs maximum (p41)." },
    { id:"image-50-visible",  level:"warn",
      msg:"Au moins 50 % de l'image de fond doit rester visible (p40)." },
    { id:"max-2-font-sizes",  level:"warn",
      msg:"Maximum 2 tailles de police par visuel : 1 callout + 1 body (p40)." },
    { id:"no-inset-story",    level:"block",
      msg:"Les inset frames ne sont jamais utilisés en format story (p28)." },
    { id:"one-gradient",      level:"info",
      msg:"Un seul dégradé par visuel est recommandé (p8)." }
  ]
};

/* ── Helpers ──────────────────────────────────────────────────────────── */

/* CSS d'un dégradé charte. ctx optionnel : { angle } pour forcer un angle
   (usages hérités) — par défaut, l'angle charte 135°. */
function chGrad(key, ctx){
  var g = CHARTE.gradients[key] || CHARTE.gradients.bleu;
  var a = (ctx && ctx.angle !== undefined) ? ctx.angle : CHARTE.gradientAngle;
  return "linear-gradient(" + a + "deg," + g.from + " 0%," + g.to + " 100%)";
}

/* Données d'un format, avec fallback 1x1. */
function chFormat(key){ return CHARTE.formats[key] || CHARTE.formats["1x1"]; }

/* Plage typo d'un template : chTypo("blockLayout","callout")
   → { w, min, max, lhMin, lhMax } */
function chTypo(template, role){
  var t = CHARTE.typo[template]; if(!t) return null;
  var r = t[role]; if(!r) return null;
  return {
    w: r.w || 400,
    min: r.s ? r.s[0] : null,
    max: r.s ? (r.s[1] !== undefined ? r.s[1] : r.s[0]) : null,
    lhMin: r.lh ? r.lh[0] : null,
    lhMax: r.lh ? (r.lh[1] !== undefined ? r.lh[1] : r.lh[0]) : null
  };
}

global.CHARTE = CHARTE;
global.chGrad = chGrad;
global.chFormat = chFormat;
global.chTypo = chTypo;

})(window);
