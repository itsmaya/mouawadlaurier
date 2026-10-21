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
  /* La cartouche de titre peut être retirée : sur le modèle du template 03
     de la charte, le visuel commence directement par la pastille guillemet
     et le nom. */
  hideBadge:false,
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
      BADGE_X:chFormat("4x5").margin,BADGE_TOP:chFormat("4x5").captionTop,
      BADGE_ICON:Math.round(36*S),BADGE_GAP:Math.round(10*S),
      BADGE_H:Math.round(36*S),BADGE_FONT:Math.round(12.5*S),
      BADGE_PADX:Math.round(18*S),BADGE_RADIUS:px(T.BADGE_RADIUS_PT),
      MARGIN:chFormat("4x5").margin,
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
    BADGE_X:chFormat(format).margin,BADGE_TOP:chFormat(format).captionTop,
    BADGE_ICON:Math.round(36*S),BADGE_GAP:Math.round(10*S),
    BADGE_H:Math.round(36*S),BADGE_FONT:Math.round(12*S),
    BADGE_PADX:Math.round(17*S),BADGE_RADIUS:px(T.BADGE_RADIUS_PT),
    MARGIN:chFormat(format).margin,
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
    /* GUILLEMETS COURBES — le PNG ne sert plus que de forme.
       Ces fichiers contiennent le dégradé BLEU cuit dans les pixels (deux
       couleurs seulement : #0098E3 et #4632FF) : affichés tels quels, ils
       restaient bleus quel que soit le dégradé choisi. On les utilise donc
       comme masque alpha sur un aplat dégradé — le dessin est strictement le
       même, seule la couleur suit la charte. */
    var url=p.close?"../../templates/citation/ferme.png":"../../templates/citation/ouvert.png";
    var masque="url("+url+") no-repeat center / contain";
    var degrade="linear-gradient(90deg,"+(p.gradFrom||"#0098E3")+" 0%,"+(p.gradTo||"#4632FF")+" 100%)";
    return e("div",{style:{height:p.h+"px",width:(p.h*1.28)+"px",display:"block",
      backgroundImage:degrade,
      mask:masque,WebkitMask:masque}});
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
  var H_PAD=fs*0.12;          /* débord du surligné : moitié d'une espace */
  /* Rognage typographique : demi-interligne + vide au-dessus des capitales
     (0,12 em pour Nunito), et sous la ligne de base (0,10 em). */
  var DEMI_INTERLIGNE=Math.max(0,(fs*lh-fs)/2);
  var TRIM_HAUT=Math.round(DEMI_INTERLIGNE+fs*0.12);
  var TRIM_BAS =Math.round(DEMI_INTERLIGNE+fs*0.10);
  var U_TH=Math.max(2,fs*0.17),U_OFF=fs*0.03;
  return e("div",{style:{position:"relative"}},
    /* Le surligné déborde du texte d'un demi-espace de chaque côté, comme
       la charte le demande. Avant, cet espace était injecté DANS le texte,
       ce qui mangeait l'espace tapé par l'utilisateur : le mot surligné se
       retrouvait collé au mot d'à côté. Maintenant c'est le rectangle qui
       s'élargit, le texte n'est pas touché. */
    (props.hlStyle==="gras"?[]:M.h).map(function(r,i){
      var cy=r.y+r.h/2;
      return e("div",{key:"h"+i,style:{position:"absolute",
        left:r.x-H_PAD,top:cy-H_H/2,width:r.w+H_PAD*2,height:H_H,
        background:grad,borderRadius:1,zIndex:0}});
    }),
    M.u.map(function(r,i){
      return e("div",{key:"u"+i,style:{position:"absolute",
        left:r.x,top:r.b-U_OFF,width:r.w,height:U_TH,
        background:grad,borderRadius:U_TH/2,zIndex:0}});
    }),
    e("div",{ref:hostRef,style:{position:"relative",zIndex:1,
        color:props.textColor||"#2B5AF1",fontSize:fs,lineHeight:lh,fontWeight:props.fw||600,
        /* pre-wrap : les espaces multiples et les retours à la ligne tapés
           dans l'éditeur arrivent tels quels dans le visuel. */
        whiteSpace:"pre-wrap",
        /* La boîte d'une ligne est plus haute que les lettres : sans ce
           rognage, la marge visible en haut et en bas valait le padding
           PLUS la demi-interligne, d'où un bloc qui paraissait trop grand
           au-dessus du texte. */
        marginTop:-TRIM_HAUT, marginBottom:-TRIM_BAS}},
      e("span",{"data-anchor":"open",style:{display:"inline-block",
        width:qs!=="none"?ANCHOR:0,height:0,verticalAlign:"baseline"}}),
      parts.map(function(p,i){
        /* Template 03 de la charte : les mots mis en avant passent en
           SemiBold dans la couleur du texte, sans fond coloré. C'est la
           règle « surlignés SemiBold » de la page 29, et c'est ce que montre
           la planche de référence. */
        if(p.t==="h") return e("span",{key:i,"data-seg":"h","data-part":"1",
          style:props.hlStyle==="gras"
            ?{fontWeight:700}
            :{color:TE_WHITE,fontWeight:800}},p.v);
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

/* Écart imposé entre le bas du bloc citation et la flèche de carrousel. */
var ARROW_GAP_CITE=30;
/* Écart imposé entre la cartouche de titre et ce qui vient en dessous. */
var GAP_TITRE=100;

/* ── Géométrie dérivée ───────────────────────────────────────────────────────
   Partagée entre la carte et le panneau du générateur (sliders position /
   largeur / taille de texte), pour qu'ils ne divergent jamais.
   quoteH = hauteur mesurée du bloc citation (0 si pas encore mesurée).      */
function geometry(st,quoteH){
  var L=getCiteLayout(st.format), CARD_H=L.CARD_H;
  var _cfs=st["fs_"+st.format]||0;
  var isT03=(st.template==="t03");
  /* Plancher abaissé à 15 pt : demandé pour les citations longues, qui
     dépassaient du bloc au minimum précédent (30/45). Le plafond ne bouge
     pas. Ces valeurs sont exprimées dans l'unité de dessin de la carte —
     la même que celle affichée par le curseur du panneau. */
  var QUOTE_FONT_MIN=15, QUOTE_FONT_MAX=isT03?60:80;
  var cfs=_cfs?Math.max(QUOTE_FONT_MIN,Math.min(QUOTE_FONT_MAX,_cfs)):L.QUOTE_FONT;

  var _fmt=st.format;
  var _rawY=st["blockYPct_"+_fmt]!==undefined?st["blockYPct_"+_fmt]:-1;
  var _rawW=st["blockPct_"+_fmt]||0;
  var autoPct=Math.round(L.QUOTE_W/CARD_W*100);
  var curPct=Math.max(30,Math.min(90,_rawW||autoPct));
  var QW=Math.round(CARD_W*curPct/100), dW=QW-L.QUOTE_W;

  /* ── Bornes verticales ────────────────────────────────────────────────
     En haut : 100 px sous la cartouche de titre, plus la place du bloc
     personne qui vit juste au-dessus de la citation.
     En bas : la marge de charte du format (100 px en 1:1 et 4:5, 230 en
     story) ; et quand la flèche de carrousel est là, on réserve en plus sa
     hauteur et son écart, sinon la citation lui passerait dessus. */
  var cfFmt=chFormat(st.format);
  var mlIns=(st.hasML&&st.format!=="9x16")?Math.round(CARD_W*0.046):0;
  var zoneFleche=(st.navMark&&st.navMark!=="none")
    ? L.MARGIN+L.ARROW_H+ARROW_GAP_CITE : 0;
  /* La marie-louise rogne la carte : sa largeur s'ajoute à la réserve
     basse, sinon le bloc descend jusque dans le cadre. */
  var reserveBas=Math.max(cfFmt.bottom, zoneFleche)+mlIns;
  var TOP_MIN=L.BADGE_TOP+L.BADGE_H+GAP_TITRE+L.PHOTO_H+Math.max(0,L.QUOTE_Y-L.PERSON_Y-L.PHOTO_H);
  var TOP_MAX=CARD_H-reserveBas-(quoteH||0);
  /* Quand le contenu ne tient pas entre les deux bornes, c'est la borne
     BASSE qui gagne : un bloc qui passe sous la flèche de carrousel se voit
     tout de suite, un écart un peu court sous la cartouche de titre non.
     Plancher absolu : on ne remonte jamais dans la cartouche. */
  if(TOP_MAX<TOP_MIN){
    var plancher=L.BADGE_TOP+L.BADGE_H+Math.round(GAP_TITRE*0.2)+mlIns;
    TOP_MIN=Math.max(plancher,TOP_MAX);
    if(TOP_MAX<TOP_MIN) TOP_MAX=TOP_MIN;
  }
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
    /* Marie-louise interdite au format story (charte p24/28, « inset frame :
       jamais en story ») — Citation l'autorisait, contrairement aux autres. */
    onGrad:(st.bgMode==="grad"),onWhite:(st.bgMode==="white"),
    onML:(!!st.hasML && st.format!=="9x16")};
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
  var t03Ref=useRef(null);
  var t03S=useState(0), t03H=t03S[0], setT03H=t03S[1];
  React.useLayoutEffect(function(){
    if(!t03Ref.current) return;
    var h=Math.round(t03Ref.current.offsetHeight||0);
    if(h>0&&h!==t03H) setT03H(h);
  });
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

  /* Cartouche du nom : elle épouse son texte, avec la même marge à gauche
     et à droite, au lieu de s'aligner sur la largeur du bloc citation en
     dessous. pillW ne sert donc plus que de garde-fou : c'est la largeur
     maximale, celle qui reste entre la photo et le bord de la carte. */
  /* Écart entre le bas du bloc personne et le haut du bloc citation. On
     reprend exactement l'écart d'origine, pour que les projets déjà
     enregistrés gardent la même allure. */
  var GAP_PERSONNE=Math.max(0,L.QUOTE_Y-L.PERSON_Y-L.PHOTO_H);

  var pillW=QW-L.PHOTO_W-L.PERSON_GAP;
  var pillMax=CARD_W-personX-L.PHOTO_W-L.PERSON_GAP-L.MARGIN;
  var fp=fitPerson(st,L,pillMax);
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
  /* Cotes relevées sur la planche de référence, ramenées en px carte 1080 :
     bloc large de 723 px (67 %), corps 40 px, interligne 46 px (1,15). */
  var t03WPct=st["blockW_t03_"+st.format]||67;
  var t03W=Math.round(CARD_W*t03WPct/100),t03Xp=Math.round((CARD_W-t03W)/2);
  /* ⚠ Les cotes du bloc citation de la charte (rayon 25, padding 40, avatar
     80, écart 15) sont DÉJÀ exprimées en pixels de carte 1080. Elles étaient
     multipliées par CITE_S (1,8), l'échelle interne héritée de la V8 : le
     bloc sortait donc avec un rayon de 45 px et un padding de 72, d'où un
     encadré bien plus arrondi et plus épais que celui de la charte. */
  var Q=CHARTE.components.quote;
  var AVTR_D=Q.avatar;
  var T03_R=Q.radius, T03_PAD_FULL=Q.pad;
  var T03_GAP=Q.gap,T03_N_F=Math.round(17*CITE_S);
  var T03_PASTILLE=CHARTE.components.caption.iconBox||70;
  var T03_T_F=Math.round(13*CITE_S),T03_CART_H=Math.round(52*CITE_S);
  var T03_CART_PX=Math.round(20*CITE_S),T03_CART_GAP=Math.round(8*CITE_S);
  var t03Shadow=st.shadowT03!==false?"0 "+Math.round(10*CITE_S)+"px "+Math.round(5*CITE_S)+"px rgba(0,0,0,0.10)":"none";
  /* Le groupe du template 03 (pastille + nom + bloc) est CENTRÉ dans la
     zone utile, comme le demande la charte, au lieu d'être posé à une
     ordonnée fixe. La zone utile tient compte de la cartouche de titre
     quand elle est affichée, de la marge basse de charte, de la flèche de
     carrousel, et du cadre marie-louise qui rogne la carte de tous les
     côtés. Sans ça, le groupe sortait du cadre par le bas. */
  var cfBas=chFormat(st.format);
  var reserveBas=Math.max(cfBas.bottom,
    (st.navMark&&st.navMark!=="none")?L.MARGIN+L.ARROW_H+ARROW_GAP_CITE:0);
  var mlIns=(st.hasML&&st.format!=="9x16")?Math.round(CARD_W*0.046):0;
  var hautLimite=(st.hideBadge?0:(L.BADGE_TOP+L.BADGE_H+GAP_TITRE))||L.MARGIN;
  if(st.hideBadge) hautLimite=L.MARGIN;
  var basLimite=CARD_H-2*mlIns-reserveBas;
  var zoneH=Math.max(0,basLimite-hautLimite);
  var t03GroupY=Math.max(hautLimite,
    hautLimite+Math.round((zoneH-(t03H||0))/2));
  if(t03GroupY+(t03H||0)>basLimite) t03GroupY=Math.max(hautLimite,basLimite-(t03H||0));

  /* Largeur du cadre marie-louise et rayon de l'image insérée (charte : 20 px
     sur une carte de 1080, mise à l'échelle du rendu). */
  var ML_INSET=Math.round(CARD_W*0.046);
  /* Décalage de l'avant-plan quand la marie-louise est active. Le cadre
     était dessiné correctement, mais la cartouche, la personne, le bloc
     citation et la flèche restaient calés sur le bord de la carte : ils
     mordaient donc sur le cadre, et la flèche en débordait. */
  var mlDec = onML ? ML_INSET : 0;
  var ML_RADIUS_CITE=Math.round(20*(CARD_W/1080));

  var rootAttrs={style:{
    width:CARD_W,minHeight:CARD_H,position:"relative",
    fontFamily:"'Nunito',sans-serif",overflow:"hidden",
    /* Avec marie-louise, le fond de la carte EST le cadre : blanc ou dégradé.
       Sans elle, fond sombre de repli derrière la photo. */
    backgroundImage:onML&&st.mlStyle==="grad"?GRAD_V:"none",
    backgroundColor:onML?(st.mlStyle==="grad"?"transparent":"#FFFFFF"):"#12203c"}};
  if(p.cardRef) rootAttrs.ref=p.cardRef;
  if(p.exportTarget){ rootAttrs["data-export-card"]="1"; rootAttrs["data-ready"]="1"; }
  if(p.cardId) rootAttrs.id=p.cardId;

  return e("div",rootAttrs,

    /* FOND — et marie-louise.
       La marie-louise est un CADRE : le fond de carte porte sa couleur et
       l'image est insérée à l'intérieur, avec le rayon de 20 px de la charte.
       L'ancienne version faisait l'inverse — elle posait un rectangle blanc
       PAR-DESSUS la photo, qui ne restait donc visible qu'en mince liseré sur
       le pourtour. C'est le « marie-louise marche pas » : elle recouvrait
       l'image au lieu de l'encadrer. */
    (onGrad||onWhite)
      ?e("div",{"data-layer":"bg",style:Object.assign({position:"absolute"},
          onML?{left:ML_INSET,top:ML_INSET,right:ML_INSET,bottom:ML_INSET,
                borderRadius:ML_RADIUS_CITE}:{inset:0},{
          backgroundImage:onGrad?GRAD_V:"none",
          backgroundColor:onWhite?"#FFFFFF":"transparent"})})
      :e("div",{"data-layer":"bg",style:Object.assign({position:"absolute",
          backgroundColor:"#12203c",overflow:"hidden"},
          onML?{left:ML_INSET,top:ML_INSET,right:ML_INSET,bottom:ML_INSET,
                borderRadius:ML_RADIUS_CITE,
                clipPath:"inset(0 round "+ML_RADIUS_CITE+"px)",
                WebkitClipPath:"inset(0 round "+ML_RADIUS_CITE+"px)"}:{inset:0}),},
          e(DragImage,{st:st,key:"drag",src:st.bgImg,x:bgX,y:bgY,zoom:bgZoom,blur:st.bgBlur,
            flipH:st.bgFlipH,w:CARD_W*scale,h:CARD_H*scale,scale:scale,
            natW:bgNat.w,natH:bgNat.h,
            brightness:st.bgBrightness,saturation:st.bgSaturation,contrast:st.bgContrast,
            onChange:onBgMove})
        ),
    st.bgDark>0&&!onGrad&&!onWhite?e("div",{style:{position:"absolute",inset:0,background:"rgba(10,20,45,"+st.bgDark+")"}}):null,

    /* (Le rectangle blanc qui se posait ici par-dessus la photo a été
       supprimé : le cadre est désormais rendu par le fond de carte, et la
       photo insérée dedans — voir le calque « bg » ci-dessus.) */

    /* Cartouche légende */
    st.hideBadge?null:
    e("div",{style:{position:"absolute",left:L.BADGE_X+mlDec,top:L.BADGE_TOP+mlDec,display:"flex",alignItems:"center",gap:L.BADGE_GAP}},
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
    /* MISE EN PAGE DYNAMIQUE — le bloc personne est ancré PAR LE BAS, à un
       écart constant au-dessus du bloc citation, et non à une ordonnée fixe.
       Conséquence : quand la cartouche du nom gagne une ligne, elle pousse
       le bloc vers le HAUT et l'écart avec la citation ne bouge pas. Avec
       une position haute figée, c'est l'inverse qui se produisait : le bloc
       s'allongeait vers le bas et venait coller la citation. */
    !isT03?e("div",{style:{position:"absolute",left:personX+mlDec,
        bottom:(CARD_H-(L.QUOTE_Y+dY)+GAP_PERSONNE),
        display:"flex",alignItems:"flex-end",gap:L.PERSON_GAP}},
      e("div",{style:{width:L.PHOTO_W+"px",height:L.PHOTO_H+"px",borderRadius:L.PHOTO_R+"px",
          overflow:"hidden",flexShrink:0,position:"relative",background:"rgba(255,255,255,.14)"}},
        st.photo
          ?e("img",{"data-photo":"1","data-pw":L.PHOTO_W,"data-ph":L.PHOTO_H,src:st.photo,alt:"",
              style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",
                     width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top",display:"block"}})
          :e("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",
              color:"rgba(255,255,255,.4)",fontSize:10,fontWeight:700,letterSpacing:".08em"}},"PHOTO")),
      /* Hauteur : la cartouche fait TOUJOURS la hauteur de son texte plus la
         marge haute et basse, quelle que soit la photo. Quand elle est plus
         courte que la photo, c'est son bas qui s'aligne sur le bas de la
         photo (la rangée est calée en flex-end), jamais son haut. */
      e("div",{style:{height:"auto",
          borderRadius:L.PHOTO_R+"px",
          width:"max-content",maxWidth:pillMax+"px",
          backgroundImage:GRAD_H,display:"flex",flexDirection:"column",justifyContent:"center",
          padding:Math.round(L.PERSON_PADX*0.7)+"px "+L.PERSON_PADX+"px",
          boxSizing:"border-box"}},
        e("div",{style:{color:TE_WHITE,fontWeight:900,fontSize:nFont,lineHeight:1.16,
            letterSpacing:".01em",whiteSpace:nameWrap}},nameDisplay),
        e("div",{style:{color:TE_WHITE,fontWeight:400,fontSize:tFont,lineHeight:1.28,
            whiteSpace:"pre-line",marginTop:3,overflow:"hidden"}},st.title))):null,

    /* Style libre : bloc citation */
    !isT03?e("div",{ref:quoteBlockRef,style:{position:"absolute",left:blockX+mlDec,top:L.QUOTE_Y+dY,
        width:Math.min(QW,CARD_W-2*mlDec-blockX),
        background:TE_WHITE,borderRadius:L.QUOTE_R+"px",
        padding:L.QUOTE_PAD+"px",paddingBottom:(L.QUOTE_PAD+6)+"px",boxSizing:"border-box"}},
      e(QuoteBody,{text:st.quote,fs:cfs,lh:L.QUOTE_LH,
        qstyle:st.quoteStyle,guilH:L.GUIL_H,width:QW-L.QUOTE_PAD*2,
        /* Texte sur bloc blanc : couleur du dégradé actif (charte p12).
           Auparavant QuoteBody retombait sur un #2B5AF1 codé en dur, jamais
           transmis par le générateur : la citation restait bleue. */
        textColor:st.textColor||G.to,
        gradFrom:G.from,gradTo:G.to}),
      st.showLogo&&st.logoImg?e("div",{style:{marginTop:14,textAlign:"right"}},
        e("img",{src:st.logoImg,alt:"",style:{height:L.LOGO_H+"px",objectFit:"contain"}})):null):null,

    /* Template 03 : bloc central */
    isT03?e("div",{ref:t03Ref,style:{position:"absolute",left:t03Xp+mlDec,top:t03GroupY+mlDec,
        width:t03W,display:"flex",flexDirection:"column",alignItems:"flex-start"}},
      /* Rangée d'en-tête : pastille guillemet, puis pilule nom et fonction.
         C'est le dessin de la charte : le guillemet sort du bloc blanc et
         sert de repère, au lieu d'être posé dans le texte. */
      /* Cotes relevées sur la planche : pastille carrée de 71 px, calée en
         HAUT de la pilule et non centrée sur elle, et arrondis identiques à
         ceux de l'autre version de Citation (rayon de la photo et du bloc),
         pas le 25 px du bloc ni une pilule complètement ronde. */
      e("div",{style:{display:"flex",alignItems:"flex-start",gap:T03_GAP,
          marginBottom:T03_CART_GAP,maxWidth:"100%"}},
        (st.quoteStyle&&st.quoteStyle!=="none")
          ? e("div",{style:{width:T03_PASTILLE,height:T03_PASTILLE,
              borderRadius:L.PHOTO_R,
              backgroundImage:GRAD_H,display:"flex",alignItems:"center",
              justifyContent:"center",flexShrink:0}},
              e(Guil,{qstyle:st.quoteStyle,h:Math.round(T03_PASTILLE*0.42),close:false,
                gradFrom:"#FFFFFF",gradTo:"#FFFFFF"}))
          : null,
        (st.name||st.title)?e("div",{style:{
            display:"inline-flex",flexDirection:"column",justifyContent:"center",
            backgroundImage:GRAD_H,borderRadius:L.PHOTO_R+"px",
            paddingLeft:T03_CART_PX+"px",paddingRight:T03_CART_PX+"px",
            minHeight:T03_CART_H+"px",maxWidth:"100%",
            boxSizing:"border-box",overflow:"hidden"}},
          st.name?e("div",{style:{color:TE_WHITE,fontWeight:900,fontSize:T03_N_F,lineHeight:1.2,letterSpacing:".01em"}},st.name):null,
          st.title?e("div",{style:{color:TE_WHITE,fontWeight:400,fontSize:T03_T_F,lineHeight:1.3}},st.title):null):null),
      e("div",{ref:quoteBlockRef,style:{
          width:"100%",background:TE_WHITE,borderRadius:L.QUOTE_R+"px",
          padding:T03_PAD_FULL+"px",boxSizing:"border-box",boxShadow:t03Shadow}},
        e("div",{style:{display:"flex",gap:T03_GAP+"px",alignItems:"flex-start"}},
          st.avatarSrc?e("div",{style:{
              width:AVTR_D+"px",height:AVTR_D+"px",borderRadius:"50%",
              overflow:"hidden",flexShrink:0,background:"rgba(0,0,0,.08)"}},
            e("img",{src:st.avatarSrc,alt:"",style:{width:"100%",height:"100%",
              objectFit:"cover",objectPosition:"center top",display:"block"}})):null,
          e("div",{style:{flex:1,minWidth:0}},
            e(QuoteBody,{text:st.quote,
              fs:(st["fs_"+st.format]||40),lh:1.15,hlStyle:"gras",
              /* Le guillemet vit dans la pastille d'en-tête : on ne le
                 redessine pas autour du texte. */
              qstyle:"none",guilH:L.GUIL_H,fw:400,
              textColor:st.textColor||G.to,
              width:st.avatarSrc?(t03W-T03_PAD_FULL*2-AVTR_D-T03_GAP):(t03W-T03_PAD_FULL*2),
              gradFrom:G.from,gradTo:G.to}),
            st.source?e("div",{style:{marginTop:Math.round(14*CITE_S),fontStyle:"italic",
              fontSize:Math.round(13*CITE_S),color:"#7a8a8d",fontWeight:400}},"— "+st.source):null)))):null,

    /* Repère carrousel */
    st.navMark!=="none"?e("div",{style:{position:"absolute",right:L.MARGIN+mlDec,bottom:L.MARGIN+mlDec}},
      e(NavMark,{kind:st.navMark,w:L.ARROW_W,h:L.ARROW_H,radius:px(T.ARROW_RADIUS_PT),grad:GRAD_H,from:G.from,to:G.to,onGrad:onGrad})):null
  );
}

/* ── Enregistrement ──────────────────────────────────────────────────────── */
SPGCards.register("citation",{
  /* Le nom de la personne reste tel quel : on ne traduit pas un patronyme. */
  textFields:["badge","title","quote","source"],

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
