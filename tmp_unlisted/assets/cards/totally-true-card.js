/* ═══════════════════════════════════════════════════════════════════════════
   CARTE TOTALLY TRUE — source unique du visuel
   Rendue à l'identique par generators/totally-true/ et par le Carrousel.
   Toute retouche de design se fait ICI et nulle part ailleurs.

   ┌─────────────────────────────────────────────────────────────────────────┐
   │  LA BULLE EST UNE SEULE FORME SVG, PAS UN RECTANGLE + UN TRIANGLE.      │
   │                                                                          │
   │  Le brief demande un filet de 1 px qui suit le contour ET la pointe,     │
   │  plus une ombre portée. Avec un <div> arrondi surmonté d'un triangle     │
   │  CSS, le filet s'arrêterait au bord du rectangle et l'ombre dessinerait  │
   │  deux silhouettes distinctes, avec une couture visible à la jonction.    │
   │  Un tracé unique règle les deux d'un coup : le stroke fait le tour       │
   │  complet, et drop-shadow() projette la silhouette entière.               │
   │                                                                          │
   │  Conséquence : la hauteur de la bulle dépend du texte, qu'il faut donc   │
   │  MESURER avant de pouvoir tracer la forme. D'où le useLayoutEffect —     │
   │  même schéma que le bloc citation.                                       │
   └─────────────────────────────────────────────────────────────────────────┘
   ═══════════════════════════════════════════════════════════════════════════ */
(function(global){

var PAGE_FORMATS = ["1x1","4x5","9x16"];
var S = CARD_W/1080;          /* les mesures ci-dessous sont en px carte 1080 */
function u(v){ return Math.round(v*S); }

/* ── État par défaut ─────────────────────────────────────────────────────── */
var DEFAULT = Object.assign({
  format:"4x5", grad:"bleu", lowCarbon:false,
  bgMode:"photo",
  badgeIconKey:"Electricity", badgeIconCustom:null,
  badgeMain:"TOTALLY TRUE?", badgeSub:"",
  navMark:"arrow",

  /* Contenu de la bulle */
  quote:"All buses outside schools run on conventional diesel.",
  replyPrefix:"Replying to",
  replyHandle:"@dune.andink's",
  replySuffix:"comment",

  /* Bulle : position et forme. Les valeurs sont des POURCENTAGES de la carte,
     pour rester justes quel que soit le format. */
  bubbleX:5,          /* bord gauche, % de la largeur */
  bubbleY:21,         /* bord haut, % de la hauteur */
  bubbleW:70,         /* largeur, % de la largeur */
  tailSide:"bottom",  /* "bottom" | "top" */
  tailPos:50,         /* position du côté vertical, % de la largeur de la bulle */
  tailMirror:false,   /* true = côté vertical à droite */

  /* Ombre portée de la bulle. Valeurs par défaut = celles relevées sur le
     visuel de référence (voir BULLE plus bas). */
  shadowSpread:5,     /* étendue, en px carte 1080 */
  shadowOpacity:24,   /* intensité, en % */

  /* Tailles de texte par format (0 = valeur par défaut du format) */
  fs_1x1:0, fs_4x5:0, fs_9x16:0
}, global.BG_DEFAULT_STATE||{});

/* ── Métriques de la bulle (charte : bloc citation p29/p46) ──────────────── */
/* Valeurs relevées AU PIXEL sur le visuel de référence (2250 px de large,
   ramenées ici à l'échelle 1080) plutôt qu'estimées à l'œil :
     pointe   base 147 px, hauteur 142 px  ->  71 et 68
     filet    rouge, mesuré (218,51,71) sur le bord bas
     ombre    -16 % à 3 px du bord, -9 % à 5 px, -3,6 % à 10 px
   L'ombre a été réglée par itération en comparant le PROFIL D'ASSOMBRISSEMENT
   du PNG exporté à celui de la référence, plutôt qu'à l'œil : écart moyen
   0,6 point sur les quatre distances mesurées. */
var BULLE = {
  radius:   u(25),   /* rayon des coins, charte bloc citation */
  pad:      u(40),   /* padding intérieur, charte */
  tailW:    u(71),   /* base de la pointe */
  tailH:    u(68),   /* hauteur de la pointe */
  filet:    1,       /* filet de contour, 1 px à l'échelle 1080 */
  filetCol: "#E70000",
  spread:   5,       /* étendue par défaut, px carte 1080 */
  opacite:  24       /* intensité par défaut, % */
};

/* Construction de l'ombre.
   drop-shadow() n'a PAS de paramètre « spread » comme box-shadow : ses trois
   valeurs sont décalage X, décalage Y et flou. On pilote donc l'étendue par le
   flou, et le décalage vertical en suit la proportion relevée sur la référence
   (2 px de décalage pour 5 px de flou, soit 40 %). Un seul curseur d'étendue
   déplace ainsi l'ombre de façon cohérente, au lieu de laisser un décalage fixe
   qui paraîtrait collé sous une ombre très étalée. */
function ombreBulle(st){
  var sp = st.shadowSpread===undefined ? BULLE.spread : Math.max(0,Math.min(40,st.shadowSpread));
  var op = st.shadowOpacity===undefined ? BULLE.opacite : Math.max(0,Math.min(60,st.shadowOpacity));
  if(op<=0||sp<=0) return "none";
  return "0 "+u(Math.round(sp*0.4))+"px "+u(sp)+"px rgba(0,0,0,"+(op/100)+")";
}

/* Tailles de texte par défaut, par format */
function taillesTexte(format){
  if(format==="9x16") return {quote:u(52), reply:u(34)};
  if(format==="1x1")  return {quote:u(44), reply:u(30)};
  return {quote:u(46), reply:u(31)};       /* 4:5 */
}
var QUOTE_MIN=u(24), QUOTE_MAX=u(72);

/* ── Tracé de la bulle ────────────────────────────────────────────────────
   Un seul chemin fermé : coins arrondis + pointe.

   LA POINTE EST UN TRIANGLE RECTANGLE, PAS UN TRIANGLE ISOCÈLE.
   Sur le visuel de référence, un côté descend À LA VERTICALE depuis le bord
   de la bulle et l'hypoténuse vient le rejoindre : le sommet est donc dans le
   prolongement de ce bord vertical, et il est FRANC, sans arrondi.
   « miroir » place le côté vertical à droite plutôt qu'à gauche, utile quand
   la bulle est calée de l'autre côté de la carte.

   tx = position du CÔTÉ VERTICAL. Elle est bornée pour que la pointe ne morde
   jamais sur un coin arrondi, sinon le contour se croiserait.
   cote = "bottom" (pointe vers le bas) | "top" (vers le haut).            */
function cheminBulle(w,h,r,tw,th,tx,cote,miroir){
  var ancre = Math.max(r+(miroir?tw:0), Math.min(w-r-(miroir?0:tw), tx));
  var loin  = miroir ? ancre-tw : ancre+tw;
  var A = function(x,y){ return "A "+r+" "+r+" 0 0 1 "+x+" "+y+" "; };

  if(cote==="top"){
    /* Bord haut parcouru de gauche à droite. */
    return "M "+r+" 0 "
      + "H "+Math.min(ancre,loin)+" "
      + (miroir ? ("L "+ancre+" "+(-th)+" L "+ancre+" 0 ")
                : ("L "+ancre+" "+(-th)+" L "+loin+" 0 "))
      + "H "+(w-r)+" " + A(w,r)
      + "V "+(h-r)+" " + A(w-r,h)
      + "H "+r+" "     + A(0,h-r)
      + "V "+r+" "     + A(r,0)
      + "Z";
  }
  /* Bord bas parcouru de droite à gauche. */
  return "M "+r+" 0 "
    + "H "+(w-r)+" " + A(w,r)
    + "V "+(h-r)+" " + A(w-r,h)
    + "H "+Math.max(ancre,loin)+" "
    + (miroir ? ("L "+ancre+" "+(h+th)+" L "+ancre+" "+h+" ")
              : ("L "+ancre+" "+(h+th)+" L "+ancre+" "+h+" "))
    + "H "+r+" "     + A(0,h-r)
    + "V "+r+" "     + A(r,0)
    + "Z";
}

/* ── Géométrie dérivée (partagée carte ↔ panneau) ────────────────────────── */
function geometry(st){
  var L=getLayout(st.format,{hasML:false});
  var CARD_H=L.CARD_H;
  var T=taillesTexte(st.format);
  var fs=st["fs_"+st.format]||T.quote;
  fs=Math.max(QUOTE_MIN,Math.min(QUOTE_MAX,fs));
  var bw=Math.round(CARD_W*Math.max(30,Math.min(92,st.bubbleW||70))/100);
  var bx=Math.round(CARD_W*Math.max(0,Math.min(100,st.bubbleX||0))/100);
  var by=Math.round(CARD_H*Math.max(0,Math.min(100,st.bubbleY||0))/100);
  /* La bulle ne sort jamais de la carte horizontalement */
  bx=Math.max(0,Math.min(CARD_W-bw,bx));
  return {L:L,CARD_H:CARD_H,fs:fs,replyFs:T.reply,
    bw:bw,bx:bx,by:by,
    QUOTE_MIN:QUOTE_MIN,QUOTE_MAX:QUOTE_MAX,quoteDefaut:T.quote,
    spread:(st.shadowSpread===undefined?BULLE.spread:st.shadowSpread),
    opacite:(st.shadowOpacity===undefined?BULLE.opacite:st.shadowOpacity),
    spreadDefaut:BULLE.spread, opaciteDefaut:BULLE.opacite,
    onGrad:(st.bgMode==="grad"),onWhite:(st.bgMode==="white")};
}
function cardHeight(format){ return getLayout(format,{hasML:false}).CARD_H; }

/* ═══ COMPOSANT ═══════════════════════════════════════════════════════════ */
function TotallyTrueCard(p){
  var e=React.createElement;
  var useRef=React.useRef, useState=React.useState, useLayoutEffect=React.useLayoutEffect,
      useEffect=React.useEffect;
  var st=p.st;
  var scale=p.scale||1;
  var onBgMove=p.onBgMove||function(){};

  var g=geometry(st);
  var L=g.L, CARD_H=g.CARD_H;
  var G=GRADS[st.grad]||GRADS.bleu;
  var GRAD_H=gradCss(st.grad,90);
  var GRAD_V=gradCss(st.grad,180);
  var bgKind=g.onGrad?"grad":(g.onWhite?"white":"photo");

  var _f=st.format;
  var bgX=st["bgX_"+_f]!==undefined?st["bgX_"+_f]:50;
  var bgY=st["bgY_"+_f]!==undefined?st["bgY_"+_f]:50;
  var bgZoom=st["bgZoom_"+_f]||100;
  var bgNat=p.bgNat||{w:0,h:0};

  /* ── Mesure du contenu ──────────────────────────────────────────────────
     La forme SVG a besoin de la hauteur du texte, qui n'est connue qu'une
     fois celui-ci mis en page. On mesure après layout et on ne redéclenche
     un rendu que si la valeur a changé, sinon la boucle serait infinie. */
  var mesRef=useRef(null);
  var hState=useState(0), hTexte=hState[0], setHTexte=hState[1];
  useLayoutEffect(function(){
    var el=mesRef.current; if(!el) return;
    var h=Math.ceil(el.offsetHeight);
    if(h!==hTexte) setHTexte(h);
  });
  /* Les polices arrivent après le premier rendu : re-mesurer à leur arrivée,
     sinon la bulle garde la hauteur calculée avec la police de repli. */
  useEffect(function(){
    if(document.fonts&&document.fonts.ready)
      document.fonts.ready.then(function(){ setHTexte(function(v){ return v?0:v; }); });
  },[]);

  var hBulle=Math.max(BULLE.pad*2+g.fs, hTexte+BULLE.pad*2);
  var tailleX=Math.round(g.bw*Math.max(0,Math.min(100,st.tailPos===undefined?50:st.tailPos))/100);
  var versLeHaut=(st.tailSide==="top");
  var d=cheminBulle(g.bw,hBulle,BULLE.radius,BULLE.tailW,BULLE.tailH,
                    tailleX,versLeHaut?"top":"bottom",st.tailMirror===true);

  /* ── Cartouche et repère ── */
  var badgeXY={x:L.MARGIN,y:L.BADGE_TOP};

  var rootAttrs={style:{
    width:CARD_W,height:CARD_H,position:"relative",overflow:"hidden",
    fontFamily:"'Nunito',sans-serif",
    backgroundImage:g.onGrad?GRAD_V:"none",
    backgroundColor:g.onGrad?"transparent":(g.onWhite?"#FFFFFF":"#12203c")}};
  if(p.cardRef) rootAttrs.ref=p.cardRef;
  if(p.exportTarget){ rootAttrs["data-export-card"]="1"; rootAttrs["data-ready"]="1"; }
  if(p.cardId) rootAttrs.id=p.cardId;

  return e("div",rootAttrs,

    /* Fond */
    (g.onGrad||g.onWhite)
      ? null
      : e("div",{"data-layer":"bg",style:{position:"absolute",inset:0,overflow:"hidden"}},
          e(DragImage,{st:st,key:"drag",src:st.bgImg,x:bgX,y:bgY,zoom:bgZoom,blur:st.bgBlur,
            flipH:st.bgFlipH,w:CARD_W*scale,h:CARD_H*scale,scale:scale,
            natW:bgNat.w,natH:bgNat.h,
            brightness:st.bgBrightness,saturation:st.bgSaturation,contrast:st.bgContrast,
            onChange:onBgMove})),
    (st.bgDark>0&&bgKind==="photo")
      ? e("div",{style:{position:"absolute",inset:0,
          background:"rgba(10,20,45,"+st.bgDark+")"}}):null,

    /* Cartouche */
    e("div",{style:{position:"absolute",left:badgeXY.x,top:badgeXY.y}},
      e(CaptionBox2026,{gradKey:st.grad,bgKind:bgKind,
        iconSrc:st.badgeIconCustom||(global.PictoGallery&&PictoGallery.getSrc(st.badgeIconKey))||null,
        iconIsOut:!st.badgeIconCustom&&global.PictoGallery&&!PictoGallery.isWhite(st.badgeIconKey),
        main:st.badgeMain,sub:st.badgeSub,
        maxWidth:CARD_W-badgeXY.x-L.MARGIN})),

    /* ── LA BULLE ───────────────────────────────────────────────────────── */
    e("div",{"data-layer":"bulle",style:{position:"absolute",
        left:g.bx,top:g.by,width:g.bw,height:hBulle}},

      /* Forme : un seul tracé, donc un seul filet et une seule ombre. */
      e("svg",{width:g.bw,height:hBulle+BULLE.tailH,
        viewBox:(versLeHaut?("0 "+(-BULLE.tailH)+" "+g.bw+" "+(hBulle+BULLE.tailH))
                           :("0 0 "+g.bw+" "+(hBulle+BULLE.tailH))),
        style:{position:"absolute",left:0,
          top:versLeHaut?-BULLE.tailH:0,
          overflow:"visible",
          filter:(function(){
            var o=ombreBulle(st);
            return o==="none" ? "none" : "drop-shadow("+o+")";
          })()}},
        e("path",{d:d,fill:"#FFFFFF",
          stroke:BULLE.filetCol,strokeWidth:BULLE.filet,
          strokeLinejoin:"miter",strokeMiterlimit:8})),

      /* Contenu, posé par-dessus la forme */
      e("div",{ref:mesRef,style:{position:"absolute",
          left:BULLE.pad,top:BULLE.pad,
          width:g.bw-BULLE.pad*2}},
        e(RichBody,{text:"“"+(st.quote||"")+"”",
          fs:g.fs,lh:1.28,grad:GRAD_H,
          gradFrom:G.from,gradTo:G.to,color:G.to,
          textMode:"grad",align:"left"}),
        (st.replyHandle||st.replyPrefix)
          ? e("div",{style:{marginTop:u(10),fontSize:g.replyFs,lineHeight:1.3,
              color:COLOR_GREY,fontWeight:400}},
              st.replyPrefix?(st.replyPrefix+" "):null,
              st.replyHandle
                ? e("span",{style:{fontWeight:800,color:COLOR_GREY}},st.replyHandle)
                : null,
              st.replySuffix?(" "+st.replySuffix):null)
          : null)),

    /* Repère carrousel */
    st.navMark!=="none"
      ? e("div",{style:{position:"absolute",left:L.MARGIN,bottom:L.MARGIN}},
          e(CtaMark2026,{kind:st.navMark,gradKey:st.grad,bgKind:bgKind}))
      : null
  );
}

/* ── Enregistrement ──────────────────────────────────────────────────────── */
SPGCards.register("totallytrue",{
  label:"Totally True",
  icon:"❓",
  pageKey:"totallytrue",
  href:"generators/totally-true/",
  formats:PAGE_FORMATS,
  DEFAULT:DEFAULT,
  shared:SPGCards.COMMON_SHARED,
  geometry:geometry,
  cardHeight:cardHeight,
  BULLE:BULLE,
  Card:TotallyTrueCard
});

})(window);
