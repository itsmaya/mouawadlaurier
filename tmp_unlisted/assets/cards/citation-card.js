/* ═══════════════════════════════════════════════════════════════════════════
   CARTE CITATION — source unique du visuel
   Rendue à l'identique par generators/citation/ et par le Carrousel.
   Toute retouche de design se fait ICI et nulle part ailleurs.
   ═══════════════════════════════════════════════════════════════════════════ */
(function(global){

var CITE_S = CARD_W/600; /* 1.8 */
var CITE_FORMATS = ["1x1","4x5","9x16"];

/* ── État par défaut ─────────────────────────────────────────────────────── */
var DEFAULT = Object.assign({
  format:"1x1",grad:"bleu",lowCarbon:false,
  bgMode:"photo",hasML:false,mlStyle:"white",
  badgeIconKey:"Electricity",badgeIconCustom:null,
  badge:"MORE ENERGY, LESS EMISSIONS",
  photo:null,name:"PATRICK POUYANNÉ",
  title:"Chairman & CEO\nof TotalEnergies",
  quoteStyle:"curly",
  quote:"Our first challenge is to continue to **provide the energy the world needs** while __significantly reducing the emissions generated__ by our operations.",
  blockAlign:"center",
  blockYPct_1x1:-1,blockPct_1x1:0,
  blockYPct_4x5:-1,blockPct_4x5:0,
  blockYPct_9x16:-1,blockPct_9x16:0,
  fs_1x1:0,fs_4x5:0,fs_9x16:0,
  navMark:"arrow",showLogo:false,logoImg:null,
  template:"libre",
  avatarSrc:null,source:"",
  blockW_t03_1x1:0,blockW_t03_4x5:0,blockW_t03_9x16:0,
  shadowT03:true
}, global.BG_DEFAULT_STATE||{});

/* ── Layout spécifique Citation ──────────────────────────────────────────── */
function getCiteLayout(format){
  var f=FORMATS[format]||FORMATS["1x1"];
  var S=CITE_S, EX=f.outputW/CARD_W;
  if(format==="4x5"){
    var ch=Math.round(f.cardH*(CARD_W/f.outputW));
    return{
      CARD_H:ch,EXPORT_SCALE:EX,
      BADGE_X:Math.round(32*S),BADGE_TOP:Math.round(31*S),
      BADGE_ICON:Math.round(36*S),BADGE_GAP:Math.round(10*S),
      BADGE_H:Math.round(36*S),BADGE_FONT:Math.round(12.5*S),
      BADGE_PADX:Math.round(18*S),BADGE_RADIUS:Math.round(9*S),
      MARGIN:Math.round(32*S),
      PERSON_X:Math.round(70*S),PERSON_Y:Math.round(136*S),
      PHOTO_W:Math.round(87*S),PHOTO_H:Math.round(96*S),PHOTO_R:Math.round(10*S),
      PERSON_GAP:Math.round(7*S),PERSON_PADX:Math.round(22*S),
      NAME_FONT:Math.round(19*S),TITLE_FONT:Math.round(16.5*S),
      QUOTE_X:Math.round(70*S),QUOTE_Y:Math.round(246*S),
      QUOTE_W:Math.round(469*S),QUOTE_PAD:Math.round(34*S),
      QUOTE_R:Math.round(13*S),QUOTE_FONT:55,QUOTE_LH:1.42,
      GUIL_H:Math.round(34*S),LOGO_H:Math.round(30*S),
      ARROW_W:px(T.ARROW_W_PT),ARROW_H:px(T.ARROW_H_PT)
    };
  }
  var ch2=(format==="9x16")?Math.round(CARD_W*(f.outputH/f.outputW)):CARD_W;
  return{
    CARD_H:ch2,EXPORT_SCALE:EX,
    BADGE_X:Math.round(30*S),BADGE_TOP:Math.round(28*S),
    BADGE_ICON:Math.round(36*S),BADGE_GAP:Math.round(10*S),
    BADGE_H:Math.round(36*S),BADGE_FONT:Math.round(12*S),
    BADGE_PADX:Math.round(17*S),BADGE_RADIUS:Math.round(9*S),
    MARGIN:Math.round(30*S),
    PERSON_X:Math.round(106*S),PERSON_Y:Math.round(129*S),
    PHOTO_W:Math.round(71*S),PHOTO_H:Math.round(90*S),PHOTO_R:Math.round(10*S),
    PERSON_GAP:Math.round(9*S),PERSON_PADX:Math.round(20*S),
    NAME_FONT:Math.round(17.5*S),TITLE_FONT:Math.round(15*S),
    QUOTE_X:Math.round(106*S),QUOTE_Y:Math.round(227*S),
    QUOTE_W:Math.round(388*S),QUOTE_PAD:Math.round(32*S),
    QUOTE_R:Math.round(11*S),QUOTE_FONT:50,QUOTE_LH:1.42,
    GUIL_H:Math.round(31*S),LOGO_H:Math.round(26*S),
    ARROW_W:px(T.ARROW_W_PT),ARROW_H:px(T.ARROW_H_PT)
  };
}

/* ── Guillemets ──────────────────────────────────────────────────────────── */
var GID=0;
function Guil(p){
  var e=React.createElement;
  if(p.qstyle!=="chevron"){
    return e("img",{src:p.close?"../../templates/citation/ferme.png":"../../templates/citation/ouvert.png",
      alt:"",style:{height:p.h+"px",width:"auto",display:"block"}});
  }
  var id="gc"+(++GID);
  var VW=108,VH=74,SW=19;
  var d=p.close
    ?"M 64 10 L 88 37 L 64 64 M 20 10 L 44 37 L 20 64"
    :"M 44 10 L 20 37 L 44 64 M 88 10 L 64 37 L 88 64";
  var w=p.h*(VW/VH);
  return e("svg",{width:w,height:p.h,viewBox:"0 0 "+VW+" "+VH,style:{display:"block",overflow:"visible"}},
    e("defs",null,e("linearGradient",{id:id,x1:"0",y1:"0",x2:"1",y2:"0"},
      e("stop",{offset:"0%",stopColor:p.gradFrom||"#0098E3"}),
      e("stop",{offset:"100%",stopColor:p.gradTo||"#4632FF"}))),
    e("path",{d:d,fill:"none",stroke:"url(#"+id+")",strokeWidth:SW,strokeLinecap:"round",strokeLinejoin:"round"}));
}
function guilWidth(qstyle,h){return qstyle==="chevron"?h*(108/74):h*1.28;}

/* ── Bloc citation (surlignage + guillemets mesurés) ─────────────────────── */
function QuoteBody(props){
  var e=React.createElement,useRef=React.useRef,useState=React.useState,
      useEffect=React.useEffect,useLayoutEffect=React.useLayoutEffect;
  var fs=props.fs,lh=props.lh,qs=props.qstyle,gh=props.guilH;
  var grad="linear-gradient(90deg,"+(props.gradFrom||"#0098E3")+" 0%,"+(props.gradTo||"#4632FF")+" 100%)";
  var gw=guilWidth(qs,gh);
  var GAP=fs*0.34;
  var ANCHOR=gw+GAP;
  var hostRef=useRef(null);
  var s0=useState({h:[],u:[],open:null,close:null,lastText:null,hostW:0});
  var M=s0[0],setM=s0[1];
  useEffect(function(){
    if(document.fonts&&document.fonts.ready)
      document.fonts.ready.then(function(){setM(function(m){return Object.assign({},m);});});
  },[]);
  useLayoutEffect(function(){
    var host=hostRef.current; if(!host) return;
    var base=host.getBoundingClientRect();
    var SC=host.offsetWidth?(base.width/host.offsetWidth):1;
    if(!SC||!isFinite(SC)||SC<=0) SC=1;
    function N(v){return v/SC;}
    var res={h:[],u:[],open:null,close:null,lastText:null,hostW:host.offsetWidth};
    host.querySelectorAll("[data-seg]").forEach(function(seg){
      var kind=seg.getAttribute("data-seg");
      var validRects=[];
      var rs=seg.getClientRects();
      for(var j=0;j<rs.length;j++){if(rs[j].width>=0.5)validRects.push(rs[j]);}
      validRects.forEach(function(r,j){
        var o={x:N(r.left-base.left),y:N(r.top-base.top),
               w:N(r.width),h:N(r.height),b:N(r.bottom-base.top),
               isFirst:j===0,isLast:j===validRects.length-1};
        if(kind==="h") res.h.push(o); else res.u.push(o);
      });
    });
    host.querySelectorAll("[data-part]").forEach(function(part){
      var rs2=part.getClientRects();
      for(var j=0;j<rs2.length;j++){
        var r=rs2[j]; if(r.width<0.5) continue;
        res.lastText={x:N(r.left-base.left),y:N(r.top-base.top),
          w:N(r.width),h:N(r.height),b:N(r.bottom-base.top),r:N(r.right-base.left)};
      }
    });
    var ao=host.querySelector("[data-anchor='open']");
    var ac=host.querySelector("[data-anchor='close']");
    if(ao){var ra=ao.getBoundingClientRect();res.open={x:N(ra.left-base.left),b:N(ra.bottom-base.top)};}
    if(ac){var rc=ac.getBoundingClientRect();res.close={x:N(rc.left-base.left),b:N(rc.bottom-base.top),y:N(rc.top-base.top)};}
    if(JSON.stringify(res)!==JSON.stringify(M)) setM(res);
  });
  var parts=parseRich(props.text||"");
  var H_H=fs*1.12;
  var U_TH=Math.max(2,fs*0.17),U_OFF=fs*0.03;
  return e("div",{style:{position:"relative"}},
    M.h.map(function(r,i){
      var cy=r.y+r.h/2;
      return e("div",{key:"h"+i,style:{position:"absolute",
        left:r.x,top:cy-H_H/2,width:r.w,height:H_H,
        background:grad,borderRadius:1,zIndex:0}});
    }),
    M.u.map(function(r,i){
      return e("div",{key:"u"+i,style:{position:"absolute",
        left:r.x,top:r.b-U_OFF,width:r.w,height:U_TH,
        background:grad,borderRadius:U_TH/2,zIndex:0}});
    }),
    e("div",{ref:hostRef,style:{position:"relative",zIndex:1,
        color:props.textColor||"#2B5AF1",fontSize:fs,lineHeight:lh,fontWeight:props.fw||600}},
      e("span",{"data-anchor":"open",style:{display:"inline-block",
        width:qs!=="none"?ANCHOR:0,height:0,verticalAlign:"baseline"}}),
      parts.map(function(p,i){
        if(p.t==="h") return e("span",{key:i,"data-seg":"h","data-part":"1",
          style:{color:TE_WHITE,fontWeight:800}}," "+p.v+" ");
        if(p.t==="u") return e("span",{key:i,"data-seg":"u","data-part":"1"},p.v);
        return e("span",{key:i,"data-part":"1"},p.v);
      }),
      e("span",{"data-anchor":"close",style:{display:"inline-block",
        width:qs!=="none"?ANCHOR:0,height:0,verticalAlign:"baseline"}})),
    qs!=="none"&&M.open?e("div",{style:{position:"absolute",left:M.open.x,
        top:M.open.b-gh,width:gw,height:gh,zIndex:2}},
      e(Guil,{qstyle:qs,h:gh,close:false,gradFrom:props.gradFrom,gradTo:props.gradTo})):null,
    (function(){
      if(!M.close) return null;
      var lt=M.lastText,hw=M.hostW||0;
      var sameLine=lt?(M.close.b>=lt.y-1&&M.close.b<=lt.b+1):false;
      var fits=lt?(lt.r+GAP*0.5+gw<=hw+0.5):false;
      var left,top;
      if(sameLine&&fits){left=lt.r+GAP*0.5;top=lt.y;}
      else{left=Math.max(0,hw-gw);top=(lt?lt.b:M.close.b)-gh;if(!sameLine)top=M.close.b-gh;}
      return qs!=="none"?e("div",{style:{position:"absolute",left:left,top:top,width:gw,height:gh,zIndex:2}},
        e(Guil,{qstyle:qs,h:gh,close:true,gradFrom:props.gradFrom,gradTo:props.gradTo})):null;
    })()
  );
}

/* ── Géométrie dérivée ───────────────────────────────────────────────────────
   Partagée entre la carte et le panneau du générateur (sliders position /
   largeur / taille de texte), pour qu'ils ne divergent jamais.
   quoteH = hauteur mesurée du bloc citation (0 si pas encore mesurée).      */
function geometry(st,quoteH){
  var L=getCiteLayout(st.format), CARD_H=L.CARD_H;
  var _cfs=st["fs_"+st.format]||0;
  var isT03=(st.template==="t03");
  var QUOTE_FONT_MIN=isT03?30:45, QUOTE_FONT_MAX=isT03?60:80;
  var cfs=_cfs?Math.max(QUOTE_FONT_MIN,Math.min(QUOTE_FONT_MAX,_cfs)):L.QUOTE_FONT;

  var _fmt=st.format;
  var _rawY=st["blockYPct_"+_fmt]!==undefined?st["blockYPct_"+_fmt]:-1;
  var _rawW=st["blockPct_"+_fmt]||0;
  var autoPct=Math.round(L.QUOTE_W/CARD_W*100);
  var curPct=Math.max(30,Math.min(90,_rawW||autoPct));
  var QW=Math.round(CARD_W*curPct/100), dW=QW-L.QUOTE_W;

  var TOP_MIN=L.BADGE_TOP+L.BADGE_H+10+L.PHOTO_H+10;
  var TOP_MAX=CARD_H-20-(quoteH||0);
  if(TOP_MAX<TOP_MIN) TOP_MAX=TOP_MIN;
  var targetTop=(_rawY<0)
    ?Math.max(TOP_MIN,Math.min(TOP_MAX,L.QUOTE_Y))
    :TOP_MIN+(_rawY/1000)*(TOP_MAX-TOP_MIN);
  var dY=Math.round(targetTop-L.QUOTE_Y);

  var ALIGN_MARGIN=L.BADGE_X, blockX, personX;
  if(st.blockAlign==="left"){blockX=ALIGN_MARGIN;personX=ALIGN_MARGIN;}
  else if(st.blockAlign==="right"){blockX=CARD_W-QW-ALIGN_MARGIN;personX=CARD_W-QW-ALIGN_MARGIN;}
  else{blockX=L.QUOTE_X-dW/2;personX=L.PERSON_X-dW/2;}

  return {L:L,CARD_H:CARD_H,cfs:cfs,isT03:isT03,
    QUOTE_FONT_MIN:QUOTE_FONT_MIN,QUOTE_FONT_MAX:QUOTE_FONT_MAX,
    autoPct:autoPct,curPct:curPct,QW:QW,dW:dW,
    TOP_MIN:TOP_MIN,TOP_MAX:TOP_MAX,targetTop:targetTop,dY:dY,
    blockX:blockX,personX:personX,rawY:_rawY,
    onGrad:(st.bgMode==="grad"),onWhite:(st.bgMode==="white"),onML:!!st.hasML};
}

/* ── Pilule personne : adaptation de fonte (mesure canvas) ───────────────── */
function fitPerson(st,L,pillW){
  var nFont=L.NAME_FONT,tFont=L.TITLE_FONT,nameDisplay=st.name,nameWrap="nowrap";
  try{
    var inner=Math.max(1,pillW-L.PERSON_PADX*2);
    var ctx=document.createElement("canvas").getContext("2d");
    ctx.font="900 "+L.NAME_FONT+"px Nunito";
    var nameW=ctx.measureText(st.name).width;
    ctx.font="400 "+L.TITLE_FONT+"px Nunito";
    var tW=(st.title||"").split("\n").reduce(function(mx,l){return Math.max(mx,ctx.measureText(l).width);},0);
    if(Math.max(nameW,tW)<=inner) return {nFont:nFont,tFont:tFont,nameDisplay:nameDisplay,nameWrap:nameWrap};
    var words=st.name.split(" ");
    if(words.length>=2){
      var bc=-1,bm=Infinity;
      for(var wi=1;wi<words.length;wi++){
        ctx.font="900 "+L.NAME_FONT+"px Nunito";
        var mm=Math.max(ctx.measureText(words.slice(0,wi).join(" ")).width,ctx.measureText(words.slice(wi).join(" ")).width);
        if(mm<bm){bm=mm;bc=wi;}
      }
      if(Math.max(bm,tW)<=inner){
        nameDisplay=words.slice(0,bc).join(" ")+"\n"+words.slice(bc).join(" ");
        nameWrap="pre-line";
        return {nFont:nFont,tFont:tFont,nameDisplay:nameDisplay,nameWrap:nameWrap};
      }
    }
    var worstW=Math.max(ctx.measureText(st.name).width,tW);
    if(worstW>inner){var sc=inner/worstW;nFont=L.NAME_FONT*sc;tFont=L.TITLE_FONT*sc;}
  }catch(ex){}
  return {nFont:nFont,tFont:tFont,nameDisplay:nameDisplay,nameWrap:nameWrap};
}

/* ═══ COMPOSANT ═══════════════════════════════════════════════════════════ */
function CitationCard(p){
  var e=React.createElement,useRef=React.useRef,useState=React.useState,
      useLayoutEffect=React.useLayoutEffect;
  var st=p.st;
  var scale=p.scale||1;
  var onBgMove=p.onBgMove||function(){};
  var bgNat=p.bgNat||{w:0,h:0};

  /* Hauteur réelle du bloc citation — mesurée par la carte elle-même,
     remontée au panneau via onMeasure pour ses libellés de slider. */
  var quoteBlockRef=useRef(null);
  var qhState=useState(100), quoteH=qhState[0], setQuoteH=qhState[1];
  useLayoutEffect(function(){
    if(!quoteBlockRef.current) return;
    var h=Math.round(quoteBlockRef.current.offsetHeight||0);
    if(h>0&&h!==quoteH){
      setQuoteH(h);
      if(p.onMeasure) p.onMeasure({quoteH:h});
    }
  });

  var g=geometry(st,quoteH);
  var L=g.L, CARD_H=g.CARD_H, cfs=g.cfs, isT03=g.isT03;
  var QW=g.QW, dY=g.dY, blockX=g.blockX, personX=g.personX;
  var onGrad=g.onGrad, onWhite=g.onWhite, onML=g.onML;

  var G=GRADS[st.grad]||GRADS.bleu;
  var GRAD_H=gradCss(st.grad,90), GRAD_V=gradCss(st.grad,180);

  var _fmt=st.format;
  var bgX=st["bgX_"+_fmt]!==undefined?st["bgX_"+_fmt]:50;
  var bgY=st["bgY_"+_fmt]!==undefined?st["bgY_"+_fmt]:50;
  var bgZoom=st["bgZoom_"+_fmt]||100;

  var pillW=QW-L.PHOTO_W-L.PERSON_GAP;
  var fp=fitPerson(st,L,pillW);
  var nFont=fp.nFont,tFont=fp.tFont,nameDisplay=fp.nameDisplay,nameWrap=fp.nameWrap;

  /* Badge — font adaptative */
  var badgeFont=L.BADGE_FONT;
  try{
    var avail=CARD_W-L.BADGE_X*2-L.BADGE_ICON-L.BADGE_GAP-L.BADGE_PADX*2;
    var ctx2=document.createElement("canvas").getContext("2d");
    ctx2.font="800 "+L.BADGE_FONT+"px Nunito";
    var bw=ctx2.measureText(st.badge||"").width;
    if(bw>avail&&bw>0) badgeFont=Math.max(9,L.BADGE_FONT*(avail/bw));
  }catch(ex2){}

  var badgeBoxStyle=onGrad
    ?{height:L.BADGE_ICON,width:L.BADGE_ICON,borderRadius:L.BADGE_RADIUS,
       display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,
       background:"transparent",border:"2px solid "+TE_WHITE,boxSizing:"border-box"}
    :{height:L.BADGE_ICON,width:L.BADGE_ICON,borderRadius:L.BADGE_RADIUS,
       display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,
       backgroundImage:GRAD_H};
  var pillStyle=onGrad
    ?{height:L.BADGE_H,borderRadius:L.BADGE_RADIUS,display:"flex",alignItems:"center",
       padding:"0 "+L.BADGE_PADX+"px",color:TE_WHITE,fontSize:badgeFont,fontWeight:T.FW_BADGE_MAIN,
       letterSpacing:".055em",textTransform:"uppercase",whiteSpace:"nowrap",
       background:"transparent",border:"2px solid "+TE_WHITE,boxSizing:"border-box"}
    :{height:L.BADGE_H,borderRadius:L.BADGE_RADIUS,display:"flex",alignItems:"center",
       padding:"0 "+L.BADGE_PADX+"px",color:TE_WHITE,fontSize:badgeFont,fontWeight:T.FW_BADGE_MAIN,
       letterSpacing:".055em",textTransform:"uppercase",backgroundImage:GRAD_H,whiteSpace:"nowrap"};

  /* Template 03 */
  var t03WPct=st["blockW_t03_"+st.format]||75;
  var t03W=Math.round(CARD_W*t03WPct/100),t03Xp=Math.round((CARD_W-t03W)/2);
  var AVTR_D=Math.round(80*CITE_S);
  var T03_R=Math.round(25*CITE_S),T03_PAD_FULL=Math.round(40*CITE_S);
  var T03_GAP=Math.round(15*CITE_S),T03_N_F=Math.round(17*CITE_S);
  var T03_T_F=Math.round(13*CITE_S),T03_CART_H=Math.round(52*CITE_S);
  var T03_CART_PX=Math.round(20*CITE_S),T03_CART_GAP=Math.round(8*CITE_S);
  var t03Shadow=st.shadowT03!==false?"0 "+Math.round(10*CITE_S)+"px "+Math.round(5*CITE_S)+"px rgba(0,0,0,0.10)":"none";
  var t03GroupY=Math.max(L.BADGE_TOP+L.BADGE_H+Math.round(20*CITE_S),Math.round(CARD_H*0.22));

  var rootAttrs={style:{
    width:CARD_W,minHeight:CARD_H,position:"relative",
    fontFamily:"'Nunito',sans-serif",overflow:"hidden",
    backgroundImage:onML&&st.mlStyle==="grad"?GRAD_V:"none",
    backgroundColor:onML&&st.mlStyle==="grad"?"transparent":"#12203c"}};
  if(p.cardRef) rootAttrs.ref=p.cardRef;
  if(p.exportTarget){ rootAttrs["data-export-card"]="1"; rootAttrs["data-ready"]="1"; }
  if(p.cardId) rootAttrs.id=p.cardId;

  return e("div",rootAttrs,

    /* Fond */
    (onGrad||onWhite)
      ?e("div",{"data-layer":"bg",style:{position:"absolute",inset:0,
          backgroundImage:onGrad?GRAD_V:"none",
          backgroundColor:onWhite?"#FFFFFF":"transparent"}})
      :e("div",{"data-layer":"bg",style:{position:"absolute",inset:0,backgroundColor:"#12203c"}},
          e(DragImage,{key:"drag",src:st.bgImg,x:bgX,y:bgY,zoom:bgZoom,blur:st.bgBlur,
            flipH:st.bgFlipH,w:CARD_W*scale,h:CARD_H*scale,scale:scale,
            natW:bgNat.w,natH:bgNat.h,
            brightness:st.bgBrightness,saturation:st.bgSaturation,contrast:st.bgContrast,
            onChange:onBgMove})
        ),
    st.bgDark>0&&!onGrad&&!onWhite?e("div",{style:{position:"absolute",inset:0,background:"rgba(10,20,45,"+st.bgDark+")"}}):null,

    /* Marie-louise */
    onML?e("div",{style:{position:"absolute",
      left:Math.round(CARD_W*0.046),top:Math.round(CARD_W*0.046),
      right:Math.round(CARD_W*0.046),bottom:Math.round(CARD_W*0.046),
      backgroundColor:st.mlStyle==="grad"?"transparent":"#FFFFFF"}}):null,

    /* Cartouche légende */
    e("div",{style:{position:"absolute",left:L.BADGE_X,top:L.BADGE_TOP,display:"flex",alignItems:"center",gap:L.BADGE_GAP}},
      (function(){
        var src=st.badgeIconCustom||(global.PictoGallery&&PictoGallery.getSrc(st.badgeIconKey))||null;
        var isOut=!st.badgeIconCustom&&!!(global.PictoGallery&&PictoGallery.getSrc(st.badgeIconKey))&&global.PictoGallery&&!PictoGallery.isWhite(st.badgeIconKey);
        var bStyle=isOut?Object.assign({},badgeBoxStyle,{backgroundImage:"none",backgroundColor:"#FFFFFF"}):badgeBoxStyle;
        return e("div",{style:bStyle},src
          ?e("img",{src:src,alt:"",style:{width:L.BADGE_ICON*T.BADGE_ICON_RATIO+"px",height:L.BADGE_ICON*T.BADGE_ICON_RATIO+"px",objectFit:"contain"}})
          :e("svg",{viewBox:"0 0 24 24",width:L.BADGE_ICON*0.5,height:L.BADGE_ICON*0.5,fill:"none",stroke:TE_WHITE,strokeWidth:2},
             e("path",{d:"M13 10V3L4 14h7v7l9-11h-7z"})));
      })(),
      e("div",{style:pillStyle},st.badge)),

    /* Style libre : personne */
    !isT03?e("div",{style:{position:"absolute",left:personX,top:L.PERSON_Y+dY,display:"flex",alignItems:"stretch",gap:L.PERSON_GAP}},
      e("div",{style:{width:L.PHOTO_W+"px",height:L.PHOTO_H+"px",borderRadius:L.PHOTO_R+"px",
          overflow:"hidden",flexShrink:0,position:"relative",background:"rgba(255,255,255,.14)"}},
        st.photo
          ?e("img",{"data-photo":"1","data-pw":L.PHOTO_W,"data-ph":L.PHOTO_H,src:st.photo,alt:"",
              style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",
                     width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top",display:"block"}})
          :e("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",
              color:"rgba(255,255,255,.4)",fontSize:10,fontWeight:700,letterSpacing:".08em"}},"PHOTO")),
      e("div",{style:{height:L.PHOTO_H+"px",borderRadius:L.PHOTO_R+"px",width:pillW+"px",
          backgroundImage:GRAD_H,display:"flex",flexDirection:"column",justifyContent:"center",
          padding:"0 "+L.PERSON_PADX+"px",boxSizing:"border-box",overflow:"hidden"}},
        e("div",{style:{color:TE_WHITE,fontWeight:900,fontSize:nFont,lineHeight:1.16,
            letterSpacing:".01em",whiteSpace:nameWrap}},nameDisplay),
        e("div",{style:{color:TE_WHITE,fontWeight:400,fontSize:tFont,lineHeight:1.28,
            whiteSpace:"pre-line",marginTop:3,overflow:"hidden"}},st.title))):null,

    /* Style libre : bloc citation */
    !isT03?e("div",{ref:quoteBlockRef,style:{position:"absolute",left:blockX,top:L.QUOTE_Y+dY,width:QW,
        background:TE_WHITE,borderRadius:L.QUOTE_R+"px",
        padding:L.QUOTE_PAD+"px",paddingBottom:(L.QUOTE_PAD+6)+"px",boxSizing:"border-box"}},
      e(QuoteBody,{text:st.quote,fs:cfs,lh:L.QUOTE_LH,
        qstyle:st.quoteStyle,guilH:L.GUIL_H,width:QW-L.QUOTE_PAD*2,
        gradFrom:G.from,gradTo:G.to}),
      st.showLogo&&st.logoImg?e("div",{style:{marginTop:14,textAlign:"right"}},
        e("img",{src:st.logoImg,alt:"",style:{height:L.LOGO_H+"px",objectFit:"contain"}})):null):null,

    /* Template 03 : bloc central */
    isT03?e("div",{style:{position:"absolute",left:t03Xp,top:t03GroupY,
        width:t03W,display:"flex",flexDirection:"column",alignItems:"flex-start"}},
      (st.name||st.title)?e("div",{style:{
          display:"inline-flex",flexDirection:"column",justifyContent:"center",
          backgroundImage:GRAD_H,borderRadius:T03_CART_H+"px",
          paddingLeft:T03_CART_PX+"px",paddingRight:T03_CART_PX+"px",
          height:T03_CART_H+"px",maxWidth:"100%",
          boxSizing:"border-box",marginBottom:T03_CART_GAP+"px",overflow:"hidden"}},
        st.name?e("div",{style:{color:TE_WHITE,fontWeight:900,fontSize:T03_N_F,lineHeight:1.2,letterSpacing:".01em"}},st.name):null,
        st.title?e("div",{style:{color:TE_WHITE,fontWeight:400,fontSize:T03_T_F,lineHeight:1.3}},st.title):null):null,
      e("div",{ref:quoteBlockRef,style:{
          width:"100%",background:TE_WHITE,borderRadius:T03_R+"px",
          padding:T03_PAD_FULL+"px",boxSizing:"border-box",boxShadow:t03Shadow}},
        e("div",{style:{display:"flex",gap:T03_GAP+"px",alignItems:"flex-start"}},
          st.avatarSrc?e("div",{style:{
              width:AVTR_D+"px",height:AVTR_D+"px",borderRadius:"50%",
              overflow:"hidden",flexShrink:0,background:"rgba(0,0,0,.08)"}},
            e("img",{src:st.avatarSrc,alt:"",style:{width:"100%",height:"100%",
              objectFit:"cover",objectPosition:"center top",display:"block"}})):null,
          e("div",{style:{flex:1,minWidth:0}},
            e(QuoteBody,{text:st.quote,fs:cfs,lh:L.QUOTE_LH,
              qstyle:st.quoteStyle,guilH:L.GUIL_H,fw:400,
              width:st.avatarSrc?(t03W-T03_PAD_FULL*2-AVTR_D-T03_GAP):(t03W-T03_PAD_FULL*2),
              gradFrom:G.from,gradTo:G.to}),
            st.source?e("div",{style:{marginTop:Math.round(14*CITE_S),fontStyle:"italic",
              fontSize:Math.round(13*CITE_S),color:"#7a8a8d",fontWeight:400}},"— "+st.source):null)))):null,

    /* Repère carrousel */
    st.navMark!=="none"?e("div",{style:{position:"absolute",right:L.MARGIN,bottom:L.MARGIN}},
      e(NavMark,{kind:st.navMark,w:L.ARROW_W,h:L.ARROW_H,radius:px(T.ARROW_RADIUS_PT),grad:GRAD_H,from:G.from,to:G.to,onGrad:onGrad})):null
  );
}

/* ── Enregistrement ──────────────────────────────────────────────────────── */
SPGCards.register("citation",{
  label:"Citation",
  icon:"💬",
  pageKey:"citation",
  href:"generators/citation/",
  formats:CITE_FORMATS,
  DEFAULT:DEFAULT,
  shared:["format","grad","lowCarbon","badgeIconKey","badgeIconCustom","navMark"],
  badgeField:"badge",           /* cette carte n'a qu'un seul champ de cartouche */
  getLayout:getCiteLayout,
  geometry:geometry,
  cardHeight:function(format){ return getCiteLayout(format).CARD_H; },
  Card:CitationCard
});

})(window);
