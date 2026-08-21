/* ═══════════════════════════════════════════════════════════════════════════
   CARTE LATEST NEWS — source unique du visuel
   Rendue à l'identique par generators/latest-news/ et par le Carrousel.
   Toute retouche de design se fait ICI et nulle part ailleurs.
   ═══════════════════════════════════════════════════════════════════════════ */
(function(global){

/* ── Blocs ───────────────────────────────────────────────────────────────── */
var BLOC_ID=0;
function newBloc(overrides){
  return Object.assign({
    id:Date.now()+(++BLOC_ID)+Math.random(),
    type:"encadre",
    text:"TotalEnergies acquires\n**Shell's renewables business**",
    inverted:false,liveMode:false,textMode:"uni",align:"left",
    fs_1x1:0,fs_4x5:0,fs_9x16:0,
    w_1x1:0,w_4x5:0,w_9x16:0
  },overrides||{});
}

/* ── État par défaut ─────────────────────────────────────────────────────── */
var DEFAULT = Object.assign({
  format:"1x1",grad:"bleu",lowCarbon:false,firstSlide:false,
  bgMode:"photo",hasML:false,mlStyle:"white",
  badgeIconKey:"Place",badgeIconCustom:null,
  badgeMain:"LATEST NEWS",badgeSub:"LEUNA, GERMANY",
  navMark:"arrow",
  b_1x1:-1,b_4x5:-1,b_9x16:-1,
  blocs:[newBloc()]
}, global.BG_DEFAULT_STATE||{});

/* ── Compatibilité ascendante : normalise les saves mono-bloc ────────────── */
function normalize(loaded){
  var s=Object.assign({},DEFAULT,loaded||{});
  if(!s.blocs||!Array.isArray(s.blocs)||s.blocs.length===0){
    var legacyBloc=newBloc({
      text:(loaded&&loaded.text)||DEFAULT.blocs[0].text,
      inverted:(loaded&&loaded.inverted)||false,
      align:(loaded&&loaded.align)||"left",
      liveMode:(loaded&&loaded.liveMode)||false,
      textMode:(loaded&&loaded.textMode)||"uni"
    });
    ["fs_1x1","fs_4x5","fs_9x16","w_1x1","w_4x5","w_9x16"].forEach(function(k){
      if(loaded&&loaded[k]) legacyBloc[k]=loaded[k];
    });
    s.blocs=[legacyBloc];
  } else {
    s.blocs=s.blocs.map(function(b){return Object.assign({},newBloc(),b);});
  }
  return s;
}

/* ── Mise en page d'un bloc ──────────────────────────────────────────────── */
function blocLayout(bloc,L,fmt){
  var bfs=bloc["fs_"+fmt]||L.TEXT_DEF;
  bfs=Math.max(L.TEXT_MIN,Math.min(L.TEXT_MAX,bfs));
  var autoW=CARD_W-L.MARGIN-L.RIGHT_MIN;
  var bwRaw=bloc["w_"+fmt]||0;
  var BW=bwRaw?Math.round(CARD_W*bwRaw/100):autoW;
  BW=Math.max(Math.round(CARD_W*0.30),Math.min(CARD_W-L.MARGIN*2,BW));
  return {fs:bfs,w:BW,align:(bloc.align==="right")?"right":"left"};
}

/* ── Géométrie dérivée (partagée carte ↔ panneau) ────────────────────────── */
function geometry(st,paveH){
  var L=getLayout(st.format,{firstSlide:st.firstSlide,hasML:st.hasML});
  var CARD_H=L.CARD_H;
  var _f=st.format;
  var _rawB=(st["b_"+_f]!==undefined)?st["b_"+_f]:-1;
  var BLOC_GAP=px(20);
  var markH=(st.navMark!=="none")?L.ARROW_H+L.ARROW_GAP:0;
  var BOTTOM_MIN=Math.max(L.MARGIN,st.navMark==="none"?px(100):px(50));
  var BOTTOM_MAX=Math.max(BOTTOM_MIN,CARD_H-L.BADGE_TOP-L.BADGE_H-px(60)-(paveH||0)-markH);
  var bottomTarget;
  if(_rawB<0){bottomTarget=Math.max(BOTTOM_MIN,Math.min(BOTTOM_MAX,L.BOTTOM));}
  else{bottomTarget=BOTTOM_MIN+(_rawB/1000)*(BOTTOM_MAX-BOTTOM_MIN);}
  bottomTarget=Math.round(bottomTarget);
  return {L:L,CARD_H:CARD_H,rawB:_rawB,BLOC_GAP:BLOC_GAP,markH:markH,
    BOTTOM_MIN:BOTTOM_MIN,BOTTOM_MAX:BOTTOM_MAX,bottomTarget:bottomTarget,
    stackBottom:bottomTarget+markH,
    stackContainerLeft:L.MARGIN,stackContainerW:CARD_W-L.MARGIN*2,
    firstAlign:(st.blocs&&st.blocs[0]&&st.blocs[0].align)||"left",
    onGrad:(st.bgMode==="grad"),onWhite:(st.bgMode==="white")};
}

/* ═══ COMPOSANT ═══════════════════════════════════════════════════════════ */
function LatestNewsCard(p){
  var e=React.createElement,useRef=React.useRef,useState=React.useState,
      useLayoutEffect=React.useLayoutEffect;
  var st=p.st;
  var scale=p.scale||1;
  var onBgMove=p.onBgMove||function(){};
  var bgNat=p.bgNat||{w:0,h:0};

  /* Hauteur du stack — mesurée par la carte, remontée au panneau */
  var paveRef=useRef(null);
  var phState=useState(120), paveH=phState[0], setPaveH=phState[1];
  useLayoutEffect(function(){
    if(!paveRef.current) return;
    var h=Math.round(paveRef.current.offsetHeight||0);
    if(h>0&&h!==paveH){
      setPaveH(h);
      if(p.onMeasure) p.onMeasure({paveH:h});
    }
  });

  var g=geometry(st,paveH);
  var L=g.L, CARD_H=g.CARD_H;
  var onGrad=g.onGrad, onWhite=g.onWhite;
  var BLOC_GAP=g.BLOC_GAP, bottomTarget=g.bottomTarget, stackBottom=g.stackBottom;
  var stackContainerLeft=g.stackContainerLeft, stackContainerW=g.stackContainerW;
  var firstAlign=g.firstAlign;

  var G=GRADS[st.grad]||GRADS.bleu;
  var GRAD_H=gradCss(st.grad,90),GRAD_V=gradCss(st.grad,180);

  var _f=st.format;
  var bgX=st["bgX_"+_f]!==undefined?st["bgX_"+_f]:50;
  var bgY=st["bgY_"+_f]!==undefined?st["bgY_"+_f]:50;
  var bgZoom=st["bgZoom_"+_f]||100;

  /* Badge font adaptative */
  var badgeFont=L.BADGE_FONT;
  try{
    var avail=CARD_W-L.MARGIN*2-L.BADGE_ICON-L.BADGE_GAP-L.BADGE_PADX*2;
    var ctx=document.createElement("canvas").getContext("2d");
    ctx.font="800 "+L.BADGE_FONT+"px Nunito";
    var w1=ctx.measureText(st.badgeMain||"").width;
    ctx.font="600 "+L.BADGE_FONT+"px Nunito";
    var w2=ctx.measureText(st.badgeSub?(" "+st.badgeSub):"").width;
    var tot=w1+w2;
    if(tot>avail&&tot>0) badgeFont=Math.max(9,L.BADGE_FONT*(avail/tot));
  }catch(ex){}

  var badgeBoxStyle=onGrad
    ?{height:L.BADGE_ICON,width:L.BADGE_ICON,borderRadius:L.BADGE_RADIUS,
       display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,
       background:"transparent",border:"2px solid #FFFFFF",boxSizing:"border-box"}
    :{height:L.BADGE_ICON,width:L.BADGE_ICON,borderRadius:L.BADGE_RADIUS,
       display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,
       backgroundImage:GRAD_H,border:"none"};
  var pillStyle=onGrad
    ?{height:L.BADGE_H,borderRadius:L.BADGE_RADIUS,display:"flex",alignItems:"center",
       padding:"0 "+L.BADGE_PADX+"px",color:TE_WHITE,fontSize:badgeFont,
       letterSpacing:".05em",whiteSpace:"nowrap",
       background:"transparent",border:"2px solid #FFFFFF",boxSizing:"border-box"}
    :{height:L.BADGE_H,borderRadius:L.BADGE_RADIUS,display:"flex",alignItems:"center",
       padding:"0 "+L.BADGE_PADX+"px",color:TE_WHITE,fontSize:badgeFont,
       letterSpacing:".05em",whiteSpace:"nowrap",
       backgroundImage:GRAD_H,border:"none"};

  function renderBloc(bloc){
    var bl=blocLayout(bloc,L,_f);
    var tMode=bloc.inverted?(bloc.type==="texte"?"grad":"uni"):bloc.textMode;
    if(bloc.type==="texte"&&onGrad&&!bloc.inverted) tMode="uni";
    if(bloc.type==="texte"&&onGrad&&bloc.inverted) tMode="uni";
    if(bloc.type==="texte"){
      var colorTexte=(onWhite&&!bloc.inverted)?COLOR_GREY:TE_WHITE;
      return e("div",{key:bloc.id,style:{width:bl.w,alignSelf:(bloc.align==="right")?"flex-end":"flex-start"}},
        e(RichBody,{text:bloc.text,fs:bl.fs,lh:L.TEXT_LH,grad:GRAD_H,
          color:colorTexte,align:bl.align,live:bloc.liveMode,
          textMode:tMode,inverted:bloc.inverted,gradFrom:G.from,gradTo:G.to}));
    }
    return e("div",{key:bloc.id,style:{
        width:bl.w,alignSelf:(bloc.align==="right")?"flex-end":"flex-start",
        background:bloc.inverted?"none":TE_WHITE,
        backgroundImage:bloc.inverted?GRAD_H:"none",
        borderRadius:L.PAVE_RADIUS,padding:L.PAVE_PAD,boxSizing:"border-box"}},
      e(RichBody,{text:bloc.text,fs:bl.fs,lh:L.TEXT_LH,grad:GRAD_H,
        color:bloc.inverted?TE_WHITE:(tMode==="grad"?"transparent":COLOR_GREY),
        align:bl.align,live:bloc.liveMode,
        textMode:tMode,inverted:bloc.inverted,gradFrom:G.from,gradTo:G.to}));
  }

  var rootAttrs={style:{
    width:CARD_W,height:CARD_H,position:"relative",
    fontFamily:"'Nunito',sans-serif",overflow:"hidden",
    backgroundImage:(st.hasML&&st.mlStyle==="grad")?GRAD_V:"none",
    backgroundColor:(st.hasML&&st.mlStyle==="grad")?"transparent":(st.hasML?"#FFFFFF":"#12203c")}};
  if(p.cardRef) rootAttrs.ref=p.cardRef;
  if(p.exportTarget){ rootAttrs["data-export-card"]="1"; rootAttrs["data-ready"]="1"; }
  if(p.cardId) rootAttrs.id=p.cardId;

  return e("div",rootAttrs,

    (onGrad||onWhite)
      ?e("div",{"data-layer":"bg",style:{position:"absolute",
          left:L.ML,top:L.ML>0?L.ML:-1,right:L.ML,bottom:L.ML,
          backgroundImage:onGrad?GRAD_V:"none",
          backgroundColor:onWhite?"#FFFFFF":"transparent",
          borderRadius:L.ML>0?ML_RADIUS:0}})
      :e("div",{"data-layer":"bg",style:{position:"absolute",
          left:L.ML,top:L.ML>0?L.ML:-1,right:L.ML,bottom:L.ML,
          backgroundColor:"#12203c",overflow:"hidden",
          borderRadius:L.ML>0?ML_RADIUS:0}},
        e(DragImage,{key:"drag-"+(st.hasML?"ml":"noml"),src:st.bgImg,x:bgX,y:bgY,zoom:bgZoom,
          blur:st.bgBlur,flipH:st.bgFlipH,
          w:CARD_W*(1-2*L.ML/CARD_W)*scale,
          h:CARD_H*(1-2*L.ML/CARD_H)*scale,
          scale:scale,
          natW:bgNat.w,natH:bgNat.h,
          brightness:st.bgBrightness,saturation:st.bgSaturation,contrast:st.bgContrast,
          onChange:onBgMove})),
    (!onGrad&&!onWhite&&st.bgDark>0)?e("div",{style:{position:"absolute",
      left:L.ML,top:L.ML,right:L.ML,bottom:L.ML,
      background:"rgba(10,20,45,"+st.bgDark+")"}}):null,

    /* Cartouche légende */
    e("div",{style:{position:"absolute",left:L.MARGIN,top:L.BADGE_TOP,
        display:"flex",alignItems:"flex-start",gap:L.BADGE_GAP}},
      (function(){
        var src=st.badgeIconCustom||(global.PictoGallery&&PictoGallery.getSrc(st.badgeIconKey))||null;
        var hasSrc=!!(global.PictoGallery&&PictoGallery.getSrc(st.badgeIconKey));
        var isOut=!st.badgeIconCustom&&hasSrc&&global.PictoGallery&&!PictoGallery.isWhite(st.badgeIconKey);
        var boxStyle=isOut?Object.assign({},badgeBoxStyle,{backgroundImage:"none",backgroundColor:"#FFFFFF"}):badgeBoxStyle;
        return e("div",{style:boxStyle},
          src
            ?e("img",{src:src,alt:"",style:{width:L.BADGE_ICON*T.BADGE_ICON_RATIO+"px",height:L.BADGE_ICON*T.BADGE_ICON_RATIO+"px",objectFit:"contain"}})
            :e("svg",{viewBox:"0 0 24 24",width:L.BADGE_ICON*0.5,height:L.BADGE_ICON*0.5,fill:TE_WHITE},
               e("path",{d:"M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"})));
      })(),
      e("div",{style:pillStyle},
        e("span",{style:{fontWeight:T.FW_BADGE_MAIN,textTransform:"uppercase"}},st.badgeMain),
        /* Espace insécable OBLIGATOIRE : les deux <span> sont des flex items,
           une espace ASCII y serait supprimée par le moteur de rendu. */
        st.badgeSub?e("span",{style:{fontWeight:T.FW_BADGE_SUB,textTransform:"uppercase"}},"\u0020\u00a0"+st.badgeSub):null)),

    /* Stack de blocs */
    (st.blocs&&st.blocs.length>0)?e("div",{ref:paveRef,style:{position:"absolute",
        left:stackContainerLeft,bottom:stackBottom,width:stackContainerW,
        display:"flex",flexDirection:"column",gap:BLOC_GAP}},
      st.blocs.map(function(b){return renderBloc(b);})):null,

    /* Repère carrousel */
    (st.navMark!=="none")?e("div",{style:{position:"absolute",
        left:(firstAlign==="right")?(CARD_W-L.MARGIN-L.ARROW_W):L.MARGIN,
        bottom:bottomTarget}},
      e(NavMark,{kind:st.navMark,w:L.ARROW_W,h:L.ARROW_H,radius:px(18),
        grad:GRAD_H,from:G.from,to:G.to,onGrad:onGrad})):null
  );
}

/* ── Enregistrement ──────────────────────────────────────────────────────── */
SPGCards.register("latestnews",{
  label:"Latest News",
  icon:"📰",
  pageKey:"latestnews",
  href:"generators/latest-news/",
  formats:["1x1","4x5","9x16"],
  DEFAULT:DEFAULT,
  shared:SPGCards.COMMON_SHARED,
  newBloc:newBloc,
  normalize:normalize,
  blocLayout:blocLayout,
  geometry:geometry,
  cardHeight:function(format,st){
    return getLayout(format,{firstSlide:(st&&st.firstSlide)||false,
                             hasML:(st&&st.hasML)||false}).CARD_H;
  },
  Card:LatestNewsCard
});

})(window);
