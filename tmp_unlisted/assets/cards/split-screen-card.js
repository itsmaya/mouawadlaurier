/* ═══════════════════════════════════════════════════════════════════════════
   CARTE SPLIT SCREEN — source unique du visuel
   Rendue à l'identique par generators/split-screen/ et par le Carrousel.
   Toute retouche de design se fait ICI et nulle part ailleurs.
   ═══════════════════════════════════════════════════════════════════════════ */
(function(global){

var PAGE_FORMATS = ["1x1","4x5","9x16"];

/* ── État par défaut ─────────────────────────────────────────────────────── */
var DEFAULT = Object.assign({
  format:"1x1", grad:"rouge", lowCarbon:false,
  hasML:false, mlStyle:"grad",
  layout:"left", imgRatio:0.61,
  badgeIconKey:"Electricity", badgeIconCustom:null,
  badgeMain:"MOBILITÉ ÉLECTRIQUE", badgeSub:"",
  navMark:"arrow",
  textMode:"grad", textColor:"#E70000",
  text:"TotalEnergies déploie **20 000 points de recharge**\nsur les autoroutes européennes d'ici 2028.",
  fs_1x1:0, fs_4x5:0, fs_9x16:0
}, global.BG_DEFAULT_STATE||{});

/* ── Géométrie des zones image / texte ───────────────────────────────────── */
function computeRects(L2,CH,layout,imgRatio){
  var m=L2.MARGIN,bt=L2.BOTTOM,rt=L2.RIGHT_MIN;
  var left=m,top=m,right=CARD_W-m,bottom=CH-bt;
  var cw=right-left,ch=bottom-top;
  var gap=Math.round(0.04*CH);
  var badgeClear=L2.BADGE_H+gap;
  var img,txt;
  if(layout==="bottom"){
    var ih=Math.round(ch*imgRatio);var imgTop=bottom-ih;
    img={x:left,y:imgTop,w:cw,h:ih};
    txt={x:left,y:top+badgeClear,w:cw,h:imgTop-gap-(top+badgeClear)};
  } else if(layout==="top"){
    var ih2=Math.round(ch*imgRatio);img={x:left,y:top,w:cw,h:ih2};
    var txtTop=top+ih2+gap;
    txt={x:left,y:txtTop,w:cw,h:bottom-txtTop};
  } else if(layout==="left"){
    var iw=Math.round(cw*imgRatio);img={x:left,y:top,w:iw,h:ch};
    var txtLeft=left+iw+gap;
    txt={x:txtLeft,y:top,w:CARD_W-m-rt-iw-gap,h:ch};
  } else {
    var iw2=Math.round(cw*imgRatio);img={x:right-iw2,y:top,w:iw2,h:ch};
    txt={x:left,y:top+badgeClear,w:right-iw2-gap-left,h:ch-badgeClear};
  }
  return {img:img,txt:txt};
}

/* ── Largeur du texte du cartouche (mesure canvas) ───────────────────────── */
function measureBadge(st,L){
  var badgeFont=L.BADGE_FONT, textW=0;
  try{
    var avail=CARD_W-L.MARGIN*2-L.BADGE_ICON-L.BADGE_GAP-L.BADGE_PADX*2;
    var ctx=document.createElement("canvas").getContext("2d");
    ctx.font="800 "+L.BADGE_FONT+"px Nunito";
    var w1=ctx.measureText(st.badgeMain||"").width;
    ctx.font="600 "+L.BADGE_FONT+"px Nunito";
    var w2=ctx.measureText(st.badgeSub?(" – "+st.badgeSub):"").width;
    var tot=w1+w2;
    if(tot>avail&&tot>0) badgeFont=Math.max(9,L.BADGE_FONT*(avail/tot));
    textW=Math.min(tot,avail);
  }catch(ex){}
  return {font:badgeFont,textW:textW};
}

/* ── Hauteur de carte ────────────────────────────────────────────────────── */
function cardHeight(format,st){
  return getLayout(format,{hasML:(st&&st.hasML)||false}).CARD_H;
}

/* ═══ COMPOSANT ═══════════════════════════════════════════════════════════ */
function SplitScreenCard(p){
  var e=React.createElement;
  var st=p.st;
  var scale=p.scale||1;
  var onBgMove=p.onBgMove||function(){};

  var G=GRADS[st.grad]||GRADS.bleu;
  var GRAD_H=gradCss(st.grad,90);
  var GRAD_V=gradCss(st.grad,180);
  var L=getLayout(st.format,{hasML:st.hasML});
  var CARD_H=L.CARD_H;
  var fs=st["fs_"+st.format]||L.TEXT_DEF;
  fs=Math.max(L.TEXT_MIN,Math.min(L.TEXT_MAX,fs));

  var R=computeRects(L,CARD_H,st.layout,st.imgRatio||0.55);

  var bgX=st["bgX_"+st.format]!==undefined?st["bgX_"+st.format]:50;
  var bgY=st["bgY_"+st.format]!==undefined?st["bgY_"+st.format]:50;
  var bgZoom=st["bgZoom_"+st.format]||100;
  var bgNat=p.bgNat||{w:0,h:0};

  var bm=measureBadge(st,L);
  var badgeFont=bm.font, _badgeTextW=bm.textW;

  var badgeBoxStyle={height:L.BADGE_ICON,width:L.BADGE_ICON,borderRadius:L.BADGE_RADIUS,
    display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,backgroundImage:GRAD_H};
  var pillStyle={height:L.BADGE_H,borderRadius:L.BADGE_RADIUS,display:"flex",alignItems:"center",
    padding:"0 "+L.BADGE_PADX+"px",color:TE_WHITE,fontSize:badgeFont,fontWeight:T.FW_BADGE_MAIN,
    letterSpacing:".04em",whiteSpace:"nowrap",textTransform:"uppercase",backgroundImage:GRAD_H};

  var onML=st.hasML&&!L.STORY;
  var badgeOnPhoto=(st.layout==="top"||st.layout==="left");
  var badgeNudge=badgeOnPhoto?Math.round(0.035*CARD_H):0;
  var badgeXY={x:L.MARGIN+badgeNudge,y:L.BADGE_TOP+badgeNudge};
  var arrowOnPhoto=(st.layout==="bottom"||st.layout==="right");
  var arrowNudge=arrowOnPhoto?Math.round(0.035*CARD_H):0;

  /* Règles avancées de disposition (évitent le chevauchement cartouche/zones) */
  (function(){
    var bi=L.BADGE_ICON,bg=L.BADGE_GAP,bp=L.BADGE_PADX,bh=L.BADGE_H,bt=L.BADGE_TOP;
    var ah=L.ARROW_H,am=L.MARGIN;
    if(st.layout==="left"){
      var br=(am+badgeNudge)+bi+bg+2*bp+_badgeTextW;
      if(R.txt.x-br<20){var nty=bt+badgeNudge+bh+20;R.txt.h=Math.max(0,(R.img.y+R.img.h)-nty);R.txt.y=nty;}
    }
    if(st.layout==="bottom"&&st.navMark!=="none"){
      var res=ah+am+arrowNudge+10;R.img.y=Math.max(R.txt.y+40,R.img.y-res);
    }
    if(st.layout==="right"){
      var brR=am+bi+bg+2*bp+_badgeTextW;
      if(R.img.x-brR<20){var niy=bt+bh+20;R.img.h=Math.max(0,R.img.h-(niy-R.img.y));R.img.y=niy;}
      if(st.navMark!=="none"){var resR=ah+am+arrowNudge+10;R.img.h=Math.max(0,R.img.h-resR);}
    }
  })();

  var cardBgImg=onML&&st.mlStyle==="grad"?GRAD_V:"none";
  var cardBgColor=onML&&st.mlStyle==="grad"?"transparent":"#FFFFFF";

  var rootAttrs={style:{
    width:CARD_W,height:CARD_H,position:"relative",overflow:"hidden",
    fontFamily:"'Nunito',sans-serif",backgroundImage:cardBgImg,backgroundColor:cardBgColor}};
  if(p.cardRef) rootAttrs.ref=p.cardRef;
  if(p.exportTarget){ rootAttrs["data-export-card"]="1"; rootAttrs["data-ready"]="1"; }
  if(p.cardId) rootAttrs.id=p.cardId;

  return e("div",rootAttrs,

    onML?e("div",{style:{position:"absolute",left:L.ML,top:L.ML,right:L.ML,bottom:L.ML,backgroundColor:"#FFFFFF"}}):null,

    e("div",{"data-layer":"bg",style:{position:"absolute",left:R.img.x,top:R.img.y,
        width:R.img.w,height:R.img.h,borderRadius:L.IMG_RADIUS,overflow:"hidden",backgroundColor:"#E4E4E4"}},
      e(DragImage,{key:"drag-"+(st.hasML?"ml":"noml"),src:st.bgImg,x:bgX,y:bgY,zoom:bgZoom,
        blur:st.bgBlur,flipH:st.bgFlipH,
        w:R.img.w*scale,h:R.img.h*scale,scale:scale,
        natW:bgNat.w,natH:bgNat.h,
        brightness:st.bgBrightness,saturation:st.bgSaturation,contrast:st.bgContrast,
        onChange:onBgMove}),
      st.bgDark>0?e("div",{style:{position:"absolute",inset:0,background:"rgba(10,20,45,"+st.bgDark+")"}}):null),

    e("div",{style:{position:"absolute",left:R.txt.x,top:R.txt.y,width:R.txt.w,color:st.textColor}},
      e(RichBody,{text:st.text,fs:fs,lh:L.TEXT_LH,grad:GRAD_H,
        gradFrom:G.from,gradTo:G.to,color:st.textColor,align:"left",textMode:st.textMode})),

    e("div",{style:{position:"absolute",left:badgeXY.x,top:badgeXY.y,display:"flex",alignItems:"center",gap:L.BADGE_GAP}},
      (function(){
        var src=st.badgeIconCustom||(global.PictoGallery&&PictoGallery.getSrc(st.badgeIconKey))||null;
        var hasSrc=!!(global.PictoGallery&&PictoGallery.getSrc(st.badgeIconKey));
        var isOut=!st.badgeIconCustom&&hasSrc&&global.PictoGallery&&!PictoGallery.isWhite(st.badgeIconKey);
        var bStyle=isOut?Object.assign({},badgeBoxStyle,{backgroundImage:"none",backgroundColor:"#FFFFFF"}):badgeBoxStyle;
        return e("div",{style:bStyle},src
          ?e("img",{src:src,alt:"",style:{width:L.BADGE_ICON*T.BADGE_ICON_RATIO+"px",height:L.BADGE_ICON*T.BADGE_ICON_RATIO+"px",objectFit:"contain"}})
          :e("svg",{viewBox:"0 0 24 24",width:L.BADGE_ICON*0.5,height:L.BADGE_ICON*0.5,fill:"none",stroke:TE_WHITE,strokeWidth:2},
              e("path",{d:"M13 10V3L4 14h7v7l9-11h-7z"})));
      })(),
      e("div",{style:pillStyle},st.badgeMain,
        st.badgeSub?e("span",{style:{fontWeight:T.FW_BADGE_SUB}}," – "+st.badgeSub):null)),

    st.navMark!=="none"?e("div",{style:{position:"absolute",right:L.MARGIN+arrowNudge,bottom:L.MARGIN+arrowNudge}},
      e(NavMark,{kind:st.navMark,w:L.ARROW_W,h:L.ARROW_H,radius:px(18),grad:GRAD_H,from:G.from,to:G.to})):null
  );
}

/* ── Enregistrement ──────────────────────────────────────────────────────── */
SPGCards.register("splitscreen",{
  label:"Split Screen",
  icon:"◧",
  pageKey:"splitscreen",
  href:"generators/split-screen/",
  formats:PAGE_FORMATS,
  DEFAULT:DEFAULT,
  shared:SPGCards.COMMON_SHARED,
  cardHeight:cardHeight,
  getLayout:getLayout,         /* exposé : le Carrousel y lit TEXT_MIN/MAX/DEF */
  computeRects:computeRects,   /* exposé : le panneau en a besoin pour maxZoom */
  Card:SplitScreenCard
});

})(window);
