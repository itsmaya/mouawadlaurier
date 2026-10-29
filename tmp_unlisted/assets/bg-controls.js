/* ═══════════════════════════════════════════════════════════════════════════
   BG-CONTROLS.JS — Gestion image de fond partagée
   Dépend de : te-charte.js, drag-image.js, rich-body.js (FileDrop), React

   Exporte :
     BG_DEFAULT_STATE   — valeurs par défaut à mixer dans DEFAULT de la page
     tryLoadDefault     — chargement XHR du fond par défaut avec fallback
     preBlurCanvas      — rendu haute résolution pour export Puppeteer
     BgPhotoPanel       — composant React panneau photo complet
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── Valeurs par défaut image ─────────────────────────────────────────── */
var BG_DEFAULT_STATE={
  bgImg:null, bgCustom:false, bgIsDefault:false,
  bgBlur:0, bgDark:0,
  bgBrightness:100, bgSaturation:100, bgContrast:100,
  bgFlipH:false,
  bgX_1x1:50, bgY_1x1:50, bgZoom_1x1:100,
  bgX_4x5:50, bgY_4x5:50, bgZoom_4x5:100,
  bgX_9x16:50, bgY_9x16:50, bgZoom_9x16:100
};

/* ── Chargement fond par défaut ────────────────────────────────────────────
   bgDir     : répertoire ex. "../../templates/latest-news/"
   candidates: liste d'URLs à tester dans l'ordre
   onSuccess(dataUrl, srcUrl) : fond chargé
   onMissing()                : aucun fond trouvé
   ─────────────────────────────────────────────────────────────────────── */
function tryLoadDefault(candidates, onSuccess, onMissing){
  function probe(list){
    if(!list.length){ onMissing(); return; }
    var u=list[0];
    var img=new Image();
    img.onload=function(){
      /* Charger en base64 via XHR pour l'afficher dans FileDrop */
      var xhr=new XMLHttpRequest();
      xhr.open("GET",u,true); xhr.responseType="blob";
      xhr.onload=function(){
        var rd=new FileReader();
        rd.onload=function(ev){ onSuccess(ev.target.result,u); };
        rd.readAsDataURL(xhr.response);
      };
      xhr.onerror=function(){
        /* Fallback CORS : URL directe */
        onSuccess(u,u);
      };
      xhr.send();
    };
    img.onerror=function(){ probe(list.slice(1)); };
    img.src=u;
  }
  probe(candidates);
}

/* ── preBlurCanvas ─────────────────────────────────────────────────────────
   Génère un canvas haute résolution de l'image de fond, avec :
   blur, flip, luminosité, saturation, contraste, zoom et position.

   opts : { src, w, h, EX, bgX, bgY, bgZoom, bgBlur, bgFlipH,
            bgBrightness, bgSaturation, bgContrast }
   done(dataUrl | null)
   ─────────────────────────────────────────────────────────────────────── */
function preBlurCanvas(opts, done){
  if(!opts.src) return done(null);
  var img=new Image();
  img.crossOrigin="anonymous";
  img.onload=function(){
    var EX=opts.EX||1;
    var OW=Math.round(opts.w*EX), OH=Math.round(opts.h*EX);
    var cv=document.createElement("canvas");
    cv.width=OW; cv.height=OH;
    var ctx=cv.getContext("2d");
    ctx.imageSmoothingEnabled=true;
    ctx.imageSmoothingQuality="high";

    /* Filtres CSS sur canvas */
    var fparts=[];
    if((opts.bgBlur||0)>0) fparts.push("blur("+Math.round(opts.bgBlur*EX)+"px)");
    if((opts.bgBrightness||100)!==100) fparts.push("brightness("+(opts.bgBrightness||100)+"%)");
    if((opts.bgSaturation||100)!==100) fparts.push("saturate("+(opts.bgSaturation||100)+"%)");
    if((opts.bgContrast||100)!==100) fparts.push("contrast("+(opts.bgContrast||100)+"%)");
    if(fparts.length) ctx.filter=fparts.join(" ");

    /* Cover */
    var ir=img.naturalWidth/img.naturalHeight, cr=OW/OH, dw,dh;
    if(ir>cr){dh=OH;dw=dh*ir;}else{dw=OW;dh=dw/ir;}
    var zf=(opts.bgZoom||100)/100;
    dw*=zf; dh*=zf;
    var dx=(OW-dw)*((opts.bgX||50)/100);
    var dy=(OH-dh)*((opts.bgY||50)/100);
    ctx.drawImage(img,dx,dy,dw,dh);

    /* Flip horizontal */
    if(opts.bgFlipH){
      var tmp=document.createElement("canvas");
      tmp.width=OW; tmp.height=OH;
      var tctx=tmp.getContext("2d");
      tctx.translate(OW,0); tctx.scale(-1,1);
      tctx.drawImage(cv,0,0);
      done(tmp.toDataURL("image/png"));
    } else {
      done(cv.toDataURL("image/png"));
    }
  };
  img.onerror=function(){ done(null); };
  img.src=opts.src;
}

/* ── BgPhotoPanel ──────────────────────────────────────────────────────────
   Composant React : panneau complet de contrôle image.

   Props :
     st         : state complet de la page
     set(k,v)   : modifier une clé du state
     setSt(fn)  : modifier le state complet
     bgStatus   : {s:"loading"|"ok"|"missing", p:url}
     bgNat      : {w, h} dimensions naturelles
     bgDir      : string affichée dans les hints
     format     : format courant
     maxZoom    : zoom maximum calculé par la page
     showHint   : texte hint optionnel (fond par défaut manquant, etc.)
   ─────────────────────────────────────────────────────────────────────── */
function BgPhotoPanel(props){
  var e=React.createElement;
  var st=props.st, set=props.set, setSt=props.setSt;
  var format=props.format||st.format;
  var bgZoom=st["bgZoom_"+format]||100;
  var maxZoom=props.maxZoom||300;
  var Info=(window.Shell&&Shell.ui&&Shell.ui.Info)||function(){return null;};
  var ouvState=React.useState(false), ouvert=ouvState[0], setOuvert=ouvState[1];

  /* Retouches modifiées ? (pastille sur le menu replié) */
  var retouche=(st.bgBlur||0)>0||(st.bgDark||0)>0||(st.bgBrightness||100)!==100||
    (st.bgSaturation||100)!==100||(st.bgContrast||100)!==100;

  function curseur(label, cle, min, max, pas, val, conv){
    return e("div",null,
      e("label",{className:"field-label"},label),
      e("input",{type:"range",min:min,max:max,step:pas,value:val,
        onChange:function(ev){ set(cle, conv(ev.target.value)); }}));
  }

  return e(React.Fragment,null,
    e("div",{className:"upload-hint"},
      "Format idéal : ",e("b",null,FORMATS[format].outputW+" × "+FORMATS[format].outputH+" px"),
      e("br",null),
      st.bgCustom?"Image personnalisée en cours d'utilisation."
      :st.bgIsDefault?["Fond par défaut : ",e("b",{key:"p"},props.bgStatus&&props.bgStatus.p?props.bgStatus.p.replace(props.bgDir||"",""):"")]
      :(props.bgStatus&&props.bgStatus.s==="loading")?"Recherche du fond par défaut…"
      :props.showHint||"Aucun fond par défaut trouvé."),

    e(FileDrop,{value:st.bgImg,placeholder:"Photo de fond",
      onChange:function(v){setSt(function(p){var c=Object.assign({},p);
        c.bgImg=v||null;c.bgCustom=!!v;c.bgIsDefault=!v&&p.bgIsDefault;return c;});}}),

    /* 1. Flip, puis zoom juste en dessous */
    e("label",{className:"toggle",style:{marginTop:10,marginBottom:10}},
      e("input",{type:"checkbox",checked:!!st.bgFlipH,
        onChange:function(ev){set("bgFlipH",ev.target.checked);}}),
      "Flip horizontal"),

    e("label",{className:"field-label",style:{display:"flex",alignItems:"center",gap:6}},
      "Zoom image — "+Math.round(bgZoom)+" %",
      maxZoom<300?e("span",{className:"hint"},"(max "+maxZoom+" % sans perte)"):null,
      e(Info,{texte:"Glisse directement sur l'image pour la repositionner. Au-delà du maximum indiqué, l'image perd en netteté."})),
    e("input",{type:"range",min:100,max:maxZoom,step:1,
      value:Math.min(Math.round(bgZoom),maxZoom),
      onChange:function(ev){setSt(function(p){var c=Object.assign({},p);
        c["bgZoom_"+p.format]=parseInt(ev.target.value,10);return c;});}}),

    /* 2. Mention IA, juste après. Elle suit l'image : dans le carrousel ce
       panneau est instancié par vignette, chaque vignette décide pour sa photo. */
    (window.Shell && Shell.ui && Shell.ui.MentionIA)
      ? e(Shell.ui.MentionIA,{st:st,set:set}) : null,

    /* 3. Retouches dans un menu déroulant, fermé par défaut */
    e("div",{className:"repli"+(ouvert?" on":"")},
      e("button",{type:"button",className:"repli-tete",onClick:function(){setOuvert(!ouvert);}},
        e("span",{className:"repli-fleche"},ouvert?"▾":"▸"),
        "Retouches de l'image",
        retouche?e("span",{className:"repli-pastille"},"modifiée"):null),
      ouvert?e("div",{className:"repli-corps"},
        e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6px 16px"}},
          curseur("Flou ("+(st.bgBlur||0)+" px)","bgBlur",0,12,0.5,st.bgBlur||0,parseFloat),
          curseur("Assombrir ("+Math.round((st.bgDark||0)*100)+" %)","bgDark",0,0.7,0.05,st.bgDark||0,parseFloat),
          curseur("Luminosité ("+(st.bgBrightness||100)+" %)","bgBrightness",20,200,5,st.bgBrightness||100,function(v){return parseInt(v,10);}),
          curseur("Saturation ("+(st.bgSaturation||100)+" %)","bgSaturation",0,200,5,st.bgSaturation||100,function(v){return parseInt(v,10);}),
          curseur("Contraste ("+(st.bgContrast||100)+" %)","bgContrast",20,200,5,st.bgContrast||100,function(v){return parseInt(v,10);}))):null),

    /* 4. Un seul bouton : remet l'image à zéro (retouches, flip, cadrage). */
    e("button",{type:"button",className:"mini-btn",style:{width:"100%",marginTop:10},
      onClick:function(){setSt(function(p){var c=Object.assign({},p);
        c.bgBlur=0;c.bgDark=0;c.bgBrightness=100;c.bgSaturation=100;c.bgContrast=100;c.bgFlipH=false;
        c["bgX_"+p.format]=50;c["bgY_"+p.format]=50;c["bgZoom_"+p.format]=100;return c;});}},
      "↺ Réinitialiser l'image")
  );
}
