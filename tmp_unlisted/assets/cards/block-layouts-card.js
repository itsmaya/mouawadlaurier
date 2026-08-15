/* ═══════════════════════════════════════════════════════════════════════════
   CARTE BLOCK LAYOUTS — source unique du visuel (template 05, charte 2026)
   Rendue à l'identique par generators/block-layouts/ et par le Carrousel.
   Toute retouche de design se fait ICI et nulle part ailleurs.
   ═══════════════════════════════════════════════════════════════════════════ */
(function(global){

var CAL = chTypo("blockLayout","callout");   /* ExtraBold 90-125 */

/* ── Blocs ───────────────────────────────────────────────────────────────── */
var BID=1;
function newBlock(kind){
  return { id:"b"+(BID++)+Date.now().toString(36),
    kind:kind||"figure",
    col:"full",        /* "full" | "left" | "right" */
    callout:"18 000",
    text:kind==="body"
      ? "Un modèle **multi-énergies** intégré"
      : "**bornes de recharge** haute puissance",
    gradKey:"auto", widthPct:0, iconSrc:null, inverted:false };
}

/* ── État par défaut ─────────────────────────────────────────────────────── */
var DEFAULT = Object.assign({
  format:"1x1",
  grad:"cyan",
  lowCarbon:false,
  bgMode:"photo",             /* photo | grad | white */
  badgeIconKey:"Bar graph", badgeIconCustom:null,
  badgeMain:"KEY FIGURES", badgeSub:"",
  navMark:"arrow",
  blocksAlign:"left",
  blocks:[
    {id:"b1default",kind:"figure",col:"left",callout:"18 000",
     text:"**bornes de recharge** haute puissance",
     gradKey:"auto",widthPct:60,iconSrc:null,inverted:false},
    {id:"b2default",kind:"body",col:"right",callout:"18 000",
     text:"Un modèle **multi-énergies** intégré",
     gradKey:"auto",widthPct:0,iconSrc:null,inverted:false}
  ],
  /* offset vertical du stack par format (px au-dessus de la position basse) */
  off_1x1:0, off_4x5:0, off_9x16:0, off_16x9:0,
  /* 2 tailles max par visuel (charte p40) : 1 callout + 1 body, par format */
  cs_1x1:0, cs_4x5:0, cs_9x16:0, cs_16x9:0,
  bs_1x1:0, bs_4x5:0, bs_9x16:0, bs_16x9:0
}, global.BG_DEFAULT_STATE||{},
   {bgX_16x9:50, bgY_16x9:50, bgZoom_16x9:100});

/* ── Géométrie dérivée (partagée carte ↔ panneau) ────────────────────────── */
function geometry(st){
  var cf=chFormat(st.format);
  var CW=cf.outputW, CH_=cf.outputH;
  var story=(st.format==="9x16");
  var MARGIN=cf.margin;
  var onGrad=(st.bgMode==="grad"), onWhite=(st.bgMode==="white");
  var bgKind=onGrad?"grad":(onWhite?"white":"photo");
  var _f=st.format;

  var calloutSize=st["cs_"+_f]||Math.round((CAL.min+CAL.max)/2);   /* ~108 */
  var bodySize=st["bs_"+_f]||48;

  var stackLeft  = story ? CHARTE.formats["9x16"].blockLeft : MARGIN;
  var stackRight = story ? cf.rightMin : MARGIN;
  var stackMaxW  = CW - stackLeft - stackRight;
  var gapY       = story ? CHARTE.formats["9x16"].blockGap : 50;

  var CTA_=CHARTE.components.cta;
  var ctaBottom = story ? cf.bottom : MARGIN;
  var off=st["off_"+_f]||0;
  var stackBottom = ctaBottom + (st.navMark!=="none"?CTA_.h+40:0) + off;

  return {cf:cf,CW:CW,CH:CH_,story:story,MARGIN:MARGIN,
    onGrad:onGrad,onWhite:onWhite,bgKind:bgKind,
    calloutSize:calloutSize,bodySize:bodySize,
    stackLeft:stackLeft,stackRight:stackRight,stackMaxW:stackMaxW,gapY:gapY,
    ctaBottom:ctaBottom,stackBottom:stackBottom,off:off,
    capLeft:story?80:MARGIN, capTop:cf.captionTop};
}

/* ═══ COMPOSANT ═══════════════════════════════════════════════════════════ */
function BlockLayoutsCard(p){
  var e=React.createElement,useRef=React.useRef,useState=React.useState,
      useLayoutEffect=React.useLayoutEffect;
  var st=p.st;
  var scale=p.scale||1;
  var onBgMove=p.onBgMove||function(){};
  var bgNat=p.bgNat||{w:0,h:0};

  /* Hauteur du stack — mesurée par la carte, remontée au validateur charte */
  var stackRef=useRef(null);
  var shState=useState(0), stackH=shState[0], setStackH=shState[1];
  useLayoutEffect(function(){
    if(!stackRef.current) return;
    var h=Math.round(stackRef.current.offsetHeight||0);
    if(h>0&&h!==stackH){
      setStackH(h);
      if(p.onMeasure) p.onMeasure({stackH:h});
    }
  });

  var g=geometry(st);
  var CW=g.CW, CH_=g.CH, MARGIN=g.MARGIN, bgKind=g.bgKind;
  var onGrad=g.onGrad, onWhite=g.onWhite;

  var _f=st.format;
  var bgX=st["bgX_"+_f]!==undefined?st["bgX_"+_f]:50;
  var bgY=st["bgY_"+_f]!==undefined?st["bgY_"+_f]:50;
  var bgZoom=st["bgZoom_"+_f]||100;

  var rootAttrs={style:{
    width:CW,height:CH_,position:"relative",
    fontFamily:"'Nunito',sans-serif",overflow:"hidden",
    backgroundColor:"#12203c"}};
  if(p.cardRef) rootAttrs.ref=p.cardRef;
  if(p.exportTarget){ rootAttrs["data-export-card"]="1"; rootAttrs["data-ready"]="1"; }
  if(p.cardId) rootAttrs.id=p.cardId;

  return e("div",rootAttrs,

    /* Fond */
    (onGrad||onWhite)
      ? e("div",{"data-layer":"bg",style:{position:"absolute",inset:0,
          backgroundImage:onGrad?chGrad(st.grad):"none",
          backgroundColor:onWhite?"#FFFFFF":"transparent"}})
      : e("div",{"data-layer":"bg",style:{position:"absolute",inset:0,
          backgroundColor:"#12203c"}},
          e(DragImage,{key:"drag",src:st.bgImg,x:bgX,y:bgY,zoom:bgZoom,
            blur:st.bgBlur,flipH:st.bgFlipH,
            w:CW*scale,h:CH_*scale,scale:scale,
            natW:bgNat.w,natH:bgNat.h,
            brightness:st.bgBrightness,saturation:st.bgSaturation,
            contrast:st.bgContrast,
            onChange:onBgMove})),
    st.bgDark>0&&bgKind==="photo"
      ? e("div",{style:{position:"absolute",inset:0,
          background:"rgba(10,20,45,"+st.bgDark+")"}}):null,

    /* Cartouche */
    e("div",{style:{position:"absolute",left:g.capLeft,top:g.capTop}},
      e(CaptionBox2026,{gradKey:st.grad,bgKind:bgKind,
        iconSrc:st.badgeIconCustom||(global.PictoGallery&&PictoGallery.getSrc(st.badgeIconKey))||null,
        iconIsOut:!st.badgeIconCustom&&global.PictoGallery&&!PictoGallery.isWhite(st.badgeIconKey),
        main:st.badgeMain,sub:st.badgeSub,
        maxWidth:CW-g.capLeft-MARGIN})),

    /* Blocs — tailles globales du visuel injectées (2 tailles max, charte p40) */
    e("div",{ref:stackRef,style:{position:"absolute",
        left:g.stackLeft,right:g.stackRight,bottom:g.stackBottom}},
      e(BlockStack2026,{
        blocks:st.blocks.map(function(b){
          return Object.assign({},b,{calloutSize:g.calloutSize,bodySize:g.bodySize});
        }),
        gradKey:st.grad,bgKind:bgKind,
        align:st.blocksAlign,maxW:g.stackMaxW,gapY:g.gapY})),

    /* CTA */
    st.navMark!=="none"?e("div",{style:{position:"absolute",
        left:st.blocksAlign==="left"?g.stackLeft:undefined,
        right:st.blocksAlign==="right"?g.stackRight:undefined,
        bottom:g.ctaBottom}},
      e(CtaMark2026,{kind:st.navMark,gradKey:st.grad,bgKind:bgKind})):null
  );
}

/* ── Enregistrement ──────────────────────────────────────────────────────── */
SPGCards.register("blocklayouts",{
  label:"Block Layouts",
  icon:"📊",
  pageKey:"blocklayouts",
  href:"generators/block-layouts/",
  formats:["1x1","4x5","9x16","16x9"],
  DEFAULT:DEFAULT,
  shared:SPGCards.COMMON_SHARED,
  newBlock:newBlock,
  CAL:CAL,
  geometry:geometry,
  /* Cette carte se rend à la taille de sortie native, pas à CARD_W */
  cardHeight:function(format){ return chFormat(format).outputH; },
  cardWidth:function(format){ return chFormat(format).outputW; },
  Card:BlockLayoutsCard
});

})(window);
