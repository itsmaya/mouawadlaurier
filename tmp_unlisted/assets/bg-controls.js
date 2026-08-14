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

  return e(React.Fragment,null,
    e("div",{className:"upload-hint"},
      "Format idéal : ",e("b",null,FORMATS[format].outputW+" × "+FORMATS[format].outputH+" px"),
      e("br",null),
      st.bgCustom?"Image personnalisée en cours d'utilisation."
      :st.bgIsDefault?["Fond par défaut : ",e("b",{key:"p"},props.bgStatus&&props.bgStatus.p?props.bgStatus.p.replace(props.bgDir||"",""):"")]
      :(props.bgStatus&&props.bgStatus.s==="loading")?"Recherche du fond par défaut\u2026"
      :props.showHint||"Aucun fond par défaut trouvé."),

    e(FileDrop,{value:st.bgImg,placeholder:"Photo de fond",
      onChange:function(v){setSt(function(p){var c=Object.assign({},p);
        c.bgImg=v||null;c.bgCustom=!!v;c.bgIsDefault=!v&&p.bgIsDefault;return c;});}}),

    e("div",{style:{display:"flex",gap:16,marginTop:6,marginBottom:4}},
      e("label",{className:"toggle"},
        e("input",{type:"checkbox",checked:!!st.bgFlipH,
          onChange:function(ev){set("bgFlipH",ev.target.checked);}}),
        "Flip horizontal")),

    e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6px 16px",marginBottom:8}},
      e("div",null,
        e("label",{className:"field-label"},"Flou ("+st.bgBlur+" px)"),
        e("input",{type:"range",min:0,max:12,step:0.5,value:st.bgBlur,
          onChange:function(ev){set("bgBlur",parseFloat(ev.target.value));}})),
      e("div",null,
        e("label",{className:"field-label"},"Assombrissement ("+Math.round(st.bgDark*100)+" %)"),
        e("input",{type:"range",min:0,max:0.7,step:0.05,value:st.bgDark,
          onChange:function(ev){set("bgDark",parseFloat(ev.target.value));}})),
      e("div",null,
        e("label",{className:"field-label"},"Luminosité ("+(st.bgBrightness||100)+" %)"),
        e("input",{type:"range",min:20,max:200,step:5,value:st.bgBrightness||100,
          onChange:function(ev){set("bgBrightness",parseInt(ev.target.value,10));}})),
      e("div",null,
        e("label",{className:"field-label"},"Saturation ("+(st.bgSaturation||100)+" %)"),
        e("input",{type:"range",min:0,max:200,step:5,value:st.bgSaturation||100,
          onChange:function(ev){set("bgSaturation",parseInt(ev.target.value,10));}})),
      e("div",null,
        e("label",{className:"field-label"},"Contraste ("+(st.bgContrast||100)+" %)"),
        e("input",{type:"range",min:20,max:200,step:5,value:st.bgContrast||100,
          onChange:function(ev){set("bgContrast",parseInt(ev.target.value,10));}})),
      e("button",{
        onClick:function(){setSt(function(p){var c=Object.assign({},p);
          c.bgBlur=0;c.bgDark=0;c.bgBrightness=100;c.bgSaturation=100;c.bgContrast=100;return c;});},
        style:{alignSelf:"end",fontSize:10,fontWeight:700,padding:"3px 8px",
          borderRadius:5,border:"1px solid #ddd",background:"#f5f5f5",
          cursor:"pointer",fontFamily:"inherit"}},
        "Reset")),

    e("label",{className:"field-label"},
      "Zoom image — "+Math.round(bgZoom)+" %",
      maxZoom<300?e("span",{className:"hint",style:{marginLeft:6}},"(max "+maxZoom+"% sans perte)"):null),
    e("input",{type:"range",min:100,max:maxZoom,step:1,
      value:Math.min(Math.round(bgZoom),maxZoom),
      onChange:function(ev){setSt(function(p){var c=Object.assign({},p);
        c["bgZoom_"+p.format]=parseInt(ev.target.value,10);return c;});}}),
    e("div",{className:"hint",style:{marginTop:4}},
      "Glisse directement sur l'image pour la repositionner."),
    e("button",{
      onClick:function(){setSt(function(p){var c=Object.assign({},p);
        c["bgX_"+p.format]=50;c["bgY_"+p.format]=50;c["bgZoom_"+p.format]=100;return c;});},
      style:{marginTop:8,fontSize:11,fontWeight:700,padding:"4px 10px",borderRadius:5,
        border:"1px solid #ddd",background:"#f5f5f5",cursor:"pointer",fontFamily:"inherit"}},
      "Réinitialiser position et zoom")
  );
}
