/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENTS-2026.JS — Composants de carte conformes charte 2026
   Dépend de : charte-2026.js, te-charte.js (TE_WHITE), rich-body.js (RichBody),
               pictos.js (PictoGallery), React

   Toutes les cotes sont en pixels charte (base carte = dimensions d'export :
   1080×1080, 1080×1350, 1080×1920, 1920×1080).

   Exporte (globals) : CaptionBox2026, CtaMark2026, InsetFrame2026,
   BlockStack2026, QuoteBlock2026, LogoFrame2026, fitFont
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── fitFont : réduit une taille de police pour tenir dans une largeur ──── */
function fitFont(text, weight, baseSize, maxWidth, minSize){
  try{
    var cvs=document.createElement("canvas"), ctx=cvs.getContext("2d");
    ctx.font=weight+" "+baseSize+"px Nunito";
    var w=ctx.measureText(text||"").width;
    if(w<=maxWidth||w===0) return baseSize;
    return Math.max(minSize||9, baseSize*(maxWidth/w));
  }catch(ex){ return baseSize; }
}

/* ── CaptionBox2026 — cartouche picto + pilule (charte p16-17) ──────────────
   Props :
     gradKey       : clé de dégradé charte
     bgKind        : "photo" | "white" | "grad"  (fond du visuel)
     iconSrc       : URL/dataURL du picto (null = picto absent)
     iconIsOut     : true si picto couleur sur fond blanc (catégories *_out)
     main          : texte principal (CAPITALES appliquées si caseRule)
     sub           : seconde partie optionnelle (SemiBold, charte p17)
     maxWidth      : largeur dispo pour auto-réduction de la police
     hideIcon      : true pour les cartouches partenaires (charte p76)
   ─────────────────────────────────────────────────────────────────────── */
function CaptionBox2026(p){
  var e=React.createElement;
  var C=CHARTE.components.caption;
  var onGrad=(p.bgKind==="grad");
  var grad=chGrad(p.gradKey);
  var font=C.fontPt;
  var mainTxt=p.main||"";
  var subTxt=p.sub||"";
  var full=mainTxt+(subTxt?" "+subTxt:"");
  if(p.maxWidth){
    var avail=p.maxWidth-(p.hideIcon?0:C.iconBox+C.gap)-C.padX*2;
    font=fitFont(full,"800",C.fontPt,avail,12);
  }
  var boxBase={height:C.iconBox,width:C.iconBox,borderRadius:C.radius,
    display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0};
  var iconBox=onGrad
    ? Object.assign({},boxBase,{background:"transparent",
        border:"2px solid "+TE_WHITE,boxSizing:"border-box"})
    : (p.iconIsOut
        ? Object.assign({},boxBase,{backgroundColor:"#FFFFFF"})
        : Object.assign({},boxBase,{backgroundImage:grad}));
  var pill=onGrad
    ? {height:C.h,borderRadius:C.radius,display:"flex",alignItems:"center",
       padding:"0 "+C.padX+"px",color:TE_WHITE,fontSize:font,
       lineHeight:(C.leadingPt/C.fontPt),
       fontWeight:C.weight,letterSpacing:".055em",whiteSpace:"nowrap",
       background:"transparent",border:"2px solid "+TE_WHITE,boxSizing:"border-box"}
    : {height:C.h,borderRadius:C.radius,display:"flex",alignItems:"center",
       padding:"0 "+C.padX+"px",color:TE_WHITE,fontSize:font,
       lineHeight:(C.leadingPt/C.fontPt),
       fontWeight:C.weight,letterSpacing:".055em",whiteSpace:"nowrap",
       backgroundImage:grad};
  /* Casse charte : capitales, sauf phrase complète (heuristique : contient
     un point d'interrogation ou plus de 6 mots avec minuscules d'origine) */
  var isSentence=/[?.]$/.test(mainTxt.trim())&&mainTxt.trim().split(/\s+/).length>4;
  var mainDisplay=isSentence?mainTxt:mainTxt.toUpperCase();
  return e("div",{style:{display:"flex",alignItems:"center",gap:C.gap}},
    p.hideIcon?null:e("div",{style:iconBox},
      p.iconSrc
        ? e("img",{src:p.iconSrc,alt:"",style:{
            width:C.iconBox*0.68,height:C.iconBox*0.68,objectFit:"contain"}})
        : e("svg",{viewBox:"0 0 24 24",width:C.iconBox*0.5,height:C.iconBox*0.5,
            fill:"none",stroke:TE_WHITE,strokeWidth:2},
            e("path",{d:"M13 10V3L4 14h7v7l9-11h-7z"}))),
    e("div",{style:pill},
      e("span",null,mainDisplay),
      subTxt?e("span",{style:{fontWeight:CHARTE.components.caption.subWeight,
        marginLeft:"0.45em"}},subTxt):null));
}

/* ── CtaMark2026 — flèche de carrousel / point de fin (charte p16, p105) ────
   Props : kind ("arrow"|"dot"|"none"), gradKey, bgKind ("grad" → filet blanc)
   Flèche dessinée en SVG : aucune dépendance à un PNG.
   ─────────────────────────────────────────────────────────────────────── */
function CtaMark2026(p){
  var e=React.createElement;
  if(p.kind==="none") return null;
  var C=CHARTE.components.cta;
  var onGrad=(p.bgKind==="grad");
  var box=onGrad
    ? {width:C.w,height:C.h,borderRadius:C.radius,background:"transparent",
       border:"2px solid "+TE_WHITE,boxSizing:"border-box",
       display:"flex",alignItems:"center",justifyContent:"center"}
    : {width:C.w,height:C.h,borderRadius:C.radius,backgroundImage:chGrad(p.gradKey),
       display:"flex",alignItems:"center",justifyContent:"center"};
  if(p.kind==="dot"){
    var ds=C.h*0.32;
    return e("div",{style:box},
      e("div",{style:{width:ds,height:ds,borderRadius:"50%",background:TE_WHITE}}));
  }
  /* Même image que NavMark pour la cohérence visuelle avec les autres générateurs */
  return e("div",{style:box},
    e("img",{src:(window.PICTO_BASE||"../../assets/")+"pictos/arrow-next.png",alt:"→",
      style:{width:"59%",height:"auto",display:"block",objectFit:"contain"}}));
}

/* ── InsetFrame2026 — cadre image inséré (charte p24, p28, p45) ─────────────
   Props : x, y, w, h, fill ("white"|gradKey), radius?, children (l'image)
   Refuse le format story (charte p28) : rendre null si formatKey === "9x16".
   ─────────────────────────────────────────────────────────────────────── */
function InsetFrame2026(p){
  var e=React.createElement;
  if(p.formatKey==="9x16") return null;
  var r=p.radius!==undefined?p.radius:CHARTE.components.inset.radius;
  var pad=p.pad!==undefined?p.pad:14;
  var outer={position:"absolute",left:p.x,top:p.y,width:p.w,height:p.h,
    borderRadius:r,overflow:"hidden",
    background:p.fill==="white"?"#FFFFFF":chGrad(p.fill)};
  return e("div",{style:outer},
    e("div",{style:{position:"absolute",left:pad,top:pad,right:pad,bottom:pad,
      borderRadius:Math.max(4,r-pad*0.5),overflow:"hidden"}},p.children));
}

/* ── BlockStack2026 — moteur du template 05 Block Layouts (charte p31-42) ───
   Props :
     blocks   : [{ id, kind:"figure"|"body",
                   col:"full"|"left"|"right"  (défaut "full")
                   callout, calloutSize,        (kind figure)
                   text, bodySize,              (rich **…** / __…__)
                   gradKey ("auto" = dégradé global),
                   widthPct :
                     col "full"  → 0=auto, 1-100 = % de maxW
                     col "left"  → % de la largeur de la colonne gauche (0=50)
                     col "right" → ignoré (calculé depuis le left)
                   iconSrc (optionnel) }]
     gradKey  : dégradé global du visuel
     bgKind   : "grad" | "white" | "photo"
     align    : "left" | "right"   (affecte les blocs "full" non pleine-largeur)
     maxW     : largeur maximale du stack (px carte)
     gapY     : espacement vertical entre rangées (défaut 50, story 40)

   Mise en colonnes :
     Un bloc "left" IMMÉDIATEMENT suivi d'un bloc "right" forme une rangée
     côte à côte. Leur largeur est calculée depuis widthPct du bloc gauche
     (défaut 50/50). Aucun risque de superposition.

   Combinaisons charte (p35) appliquées automatiquement :
     fond dégradé → blocs blancs, typo dégradée
     fond blanc   → blocs dégradés, typo blanche
     fond photo   → blocs blancs, typo dégradée
   ─────────────────────────────────────────────────────────────────────── */
function BlockStack2026(p){
  var e=React.createElement;
  var B=CHARTE.components.block;
  var gapY=p.gapY!==undefined?p.gapY:B.marginMin;
  var gapX=40;   /* écart horizontal entre colonnes */
  /* blocksWhite global — peut être surchargé par b.inverted au niveau du bloc */
  var blocksWhiteGlobal=(p.bgKind!=="white"); /* p35 */
  var blocks=(p.blocks||[]).slice(0,B.maxBlocks);

  /* ── Groupement en rangées ─────────────────────────────────────────── */
  var rows=[];
  var i=0;
  while(i<blocks.length){
    var b=blocks[i];
    var bCol=(b.col||"full");
    if(bCol==="left"&&i+1<blocks.length&&(blocks[i+1].col||"full")==="right"){
      rows.push({kind:"pair",left:b,right:blocks[i+1]});
      i+=2;
    } else {
      rows.push({kind:"single",block:b});
      i++;
    }
  }

  /* ── Rendu d'un bloc individuel ────────────────────────────────────── */
  function renderBlock(b, forcedW){
    /* Invert par bloc : chaque bloc peut inverser son schéma de couleurs */
    var blocksWhite=b.inverted?!blocksWhiteGlobal:blocksWhiteGlobal;
    var gk=(b.gradKey&&b.gradKey!=="auto")?b.gradKey:p.gradKey;
    var grad=chGrad(gk);
    var w=forcedW!==undefined?forcedW
      :(b.widthPct?Math.round(p.maxW*b.widthPct/100):undefined);
    var blockStyle={
      padding:B.pad, borderRadius:B.radius, boxSizing:"border-box",
      maxWidth:"100%",
      width:w!==undefined?w:"auto",
      flexShrink:forcedW!==undefined?0:1,
      background:blocksWhite?"#FFFFFF":undefined,
      backgroundImage:blocksWhite?"none":grad,
      display:"flex",alignItems:"center",gap:B.iconMargin
    };
    var typoGrad=blocksWhite;
    function gradText(txt,size,weight,lh){
      return typoGrad
        ? e("div",{style:{fontFamily:"'Nunito',sans-serif",fontWeight:weight,
            fontSize:size,lineHeight:lh||1.1,
            backgroundImage:grad,WebkitBackgroundClip:"text",
            backgroundClip:"text",color:"transparent",
            WebkitTextFillColor:"transparent",whiteSpace:"pre-line"}},txt)
        : e("div",{style:{fontFamily:"'Nunito',sans-serif",fontWeight:weight,
            fontSize:size,lineHeight:lh||1.1,color:TE_WHITE,
            whiteSpace:"pre-line"}},txt);
    }
    var content;
    if(b.kind==="figure"){
      content=e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
        b.callout?gradText(b.callout,b.calloutSize||100,800,1.0):null,
        b.text?e(RichBody,{text:b.text,fs:b.bodySize||48,lh:1.25,
          grad:grad,gradFrom:GRADS[gk].from,gradTo:GRADS[gk].to,
          color:typoGrad?GRADS[gk].to:TE_WHITE,
          textMode:typoGrad?"grad":"solid",inverted:!typoGrad,
          align:"left"}):null);
    } else {
      content=e(RichBody,{text:b.text||"",fs:b.bodySize||48,lh:1.25,
        grad:grad,gradFrom:GRADS[gk].from,gradTo:GRADS[gk].to,
        color:typoGrad?GRADS[gk].to:TE_WHITE,
        textMode:typoGrad?"grad":"solid",inverted:!typoGrad,
        align:"left"});
    }
    return e("div",{key:b.id,style:blockStyle},
      content,
      b.iconSrc?e("img",{src:b.iconSrc,alt:"",style:{
        width:b.calloutSize?b.calloutSize*0.9:64,
        height:b.calloutSize?b.calloutSize*0.9:64,
        objectFit:"contain",flexShrink:0,
        filter:blocksWhite?"none":"brightness(0) invert(1)"}}):null);
  }

  /* ── Rendu d'une rangée ────────────────────────────────────────────── */
  function renderRow(row, ri){
    if(row.kind==="pair"){
      /* Largeurs calculées depuis widthPct du bloc gauche — jamais de superposition */
      var leftPct=(row.left.widthPct&&row.left.widthPct>0)?row.left.widthPct:50;
      var leftW=Math.round((p.maxW-gapX)*leftPct/100);
      var rightW=p.maxW-gapX-leftW;
      return e("div",{key:"row"+ri,style:{
          display:"flex",flexDirection:"row",
          gap:gapX,alignItems:"flex-start",
          width:p.maxW,flexShrink:0}},
        renderBlock(row.left,leftW),
        renderBlock(row.right,rightW));
    }
    return renderBlock(row.block);
  }

  return e("div",{style:{display:"flex",flexDirection:"column",
      alignItems:p.align==="right"?"flex-end":"flex-start",gap:gapY,
      maxWidth:p.maxW}},
    rows.map(renderRow));
}

/* ── QuoteBlock2026 — bloc citation central (charte p29, p46) ───────────────
   Props : gradKey, avatarSrc, text (rich), fs, source, width, shadow(bool)
   ─────────────────────────────────────────────────────────────────────── */
function QuoteBlock2026(p){
  var e=React.createElement;
  var Q=CHARTE.components.quote;
  var gk=p.gradKey, grad=chGrad(gk);
  var sh=Q.shadow;
  return e("div",{style:{width:p.width,background:"#FFFFFF",
      borderRadius:Q.radius,padding:Q.pad,boxSizing:"border-box",
      boxShadow:p.shadow!==false
        ? sh.x+"px "+sh.y+"px "+sh.blur+"px rgba(0,0,0,"+sh.opacity+")":"none"}},
    e("div",{style:{display:"flex",gap:Q.gap,alignItems:"flex-start"}},
      p.avatarSrc?e("div",{style:{width:Q.avatar,height:Q.avatar,
          borderRadius:"50%",overflow:"hidden",flexShrink:0,
          background:"#eee"}},
        e("img",{src:p.avatarSrc,alt:"",style:{width:"100%",height:"100%",
          objectFit:"cover",objectPosition:"center top",display:"block"}})):null,
      e("div",{style:{flex:1,minWidth:0}},
        e(RichBody,{text:p.text||"",fs:p.fs||44,lh:1.35,
          grad:grad,gradFrom:GRADS[gk].from,gradTo:GRADS[gk].to,
          color:GRADS[gk].to,textMode:"solid",align:"left"}),
        p.source?e("div",{style:{marginTop:14,fontStyle:"italic",
          fontSize:(p.fs||44)*0.6,color:"#7a8a8d",fontWeight:400}},p.source):null)));
}

/* ── LogoFrame2026 — cartouches logos partenaires (charte p62-98) ───────────
   Props :
     regime  : "strategic" | "partnerBrand" | "official"
     logoSrc : logo du partenaire
     teSrc   : logo TotalEnergies (régime official)
     orientation : "horizontal" | "vertical" (partnerBrand)
     onWhiteBg   : true → contour noir 2px (partnerBrand, charte p78)
   Le positionnement (coin, marges) est de la responsabilité du parent,
   les cotes internes sont appliquées ici.
   ─────────────────────────────────────────────────────────────────────── */
function LogoFrame2026(p){
  var e=React.createElement;
  var P=CHARTE.partners;
  if(p.regime==="strategic"){
    var S=P.strategic.frame;
    return e("div",{style:{width:S.w,height:S.h,opacity:S.opacity,
        borderRadius:"0 0 "+CHARTE.components.inset.radius+"px 0",
        background:"linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 33%,rgba(255,255,255,"+S.gradient.to+") 100%)",
        display:"flex",alignItems:"center",justifyContent:"center",
        padding:20,boxSizing:"border-box"}},
      p.logoSrc?e("img",{src:p.logoSrc,alt:"",style:{maxWidth:"100%",
        maxHeight:"100%",objectFit:"contain"}}):null);
  }
  if(p.regime==="official"){
    var O=P.official;
    return e("div",{style:{height:O.h,background:"#FFFFFF",
        display:"inline-flex",alignItems:"center",
        padding:"0 "+O.logoMargin+"px",gap:O.logoMargin}},
      p.teSrc?e("img",{src:p.teSrc,alt:"TotalEnergies",
        style:{height:O.h-O.logoMargin*2,display:"block"}}):null,
      e("div",{style:{width:O.separator.width,alignSelf:"stretch",
        margin:(O.logoMargin*0.6)+"px 0",background:O.separator.color}}),
      p.logoSrc?e("img",{src:p.logoSrc,alt:"",
        style:{height:O.h-O.logoMargin*2,display:"block"}}):null);
  }
  /* partnerBrand / occasionnel */
  var B=P.partnerBrand;
  var horiz=(p.orientation!=="vertical");
  return e("div",{style:{
      width:horiz?B.horizontal.w:B.vertical.w,
      height:horiz?B.horizontal.h:"auto",
      minHeight:horiz?undefined:B.horizontal.h,
      background:"#FFFFFF",borderRadius:B.radius,
      border:p.onWhiteBg?B.onWhiteOutline.width+"px solid "+B.onWhiteOutline.color:"none",
      display:"flex",alignItems:"center",justifyContent:"center",
      padding:B.pad,boxSizing:"border-box"}},
    p.logoSrc?e("img",{src:p.logoSrc,alt:"",style:{maxWidth:"100%",
      maxHeight:horiz?(B.horizontal.h-B.pad*2):"none",objectFit:"contain"}}):null);
}
