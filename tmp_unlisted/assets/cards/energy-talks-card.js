/* ═══════════════════════════════════════════════════════════════════════════
   ENERGY-TALKS-CARD.JS — Visuels Energy Talks (Live et Podcast)

   Logique propre, volontairement distincte des cinq autres cartes :
   - deux formats seulement, 1:1 (1080×1080) et 16:9 (1920×1080)
   - de 1 à 4 intervenants détourés, disposés automatiquement
   - un dégradé transparent posé sur la photo de fond
   - une vignette Live ou Podcast accolée au logo
   Elle n'est PAS intégrable au carrousel : `carrousel:false` à l'enregistrement.

   Toutes les cotes sont en pixels de carte, base 1080 de hauteur, comme le
   reste de la charte. Elles sont regroupées dans LAYOUT pour que les
   ajustements de design se fassent en un seul endroit.

   Dépend de : React, drag-image.js, rich-body.js, components-2026.js
   ═══════════════════════════════════════════════════════════════════════════ */
(function(global){

/* React est chargé après ce fichier (loadScript asynchrone) : on ne peut pas
   capturer createElement au niveau du module, seulement à l'appel. */
function E(){ return global.React.createElement.apply(null, arguments); }
var e = E;

/* ── Formats ─────────────────────────────────────────────────────────────── */
var ET_FORMATS = {
  "1x1" : { label:"Carré 1:1",    outputW:1080, outputH:1080 },
  "16x9": { label:"Paysage 16:9", outputW:1920, outputH:1080 }
};

/* ── Cotes par format ─────────────────────────────────────────────────────
   Relevées sur les visuels de référence fournis par Maya (2250 px et
   4000×2250), ramenées à l'échelle 1080. */
var LAYOUT = {
  /* Relevé fait sur le .ai fourni par Maya (TE_energytalkpod_covers_episode1),
     converti en SVG puis mesuré élément par élément. Ce ne sont plus des
     estimations à la pipette : chaque valeur est la bounding box réelle du
     tracé, en pixels de carte. */
  "1x1": {
    W:1080, H:1080,
    margeG:80,
    logoX:80, logoY:79, logoW:900, logoH:96,
    badgeX:677, badgeY:166, badgeW:357, badgeH:101,
    pilX:82,  pilY:253, pilW:282, pilH:64, pilFont:38,
    titreY:347, titreFont:65, titreLH:1.215, titreMaxW:745,   /* la ligne du fichier source fait 705 px ; Nunito la rend à 713, on laisse la marge */
    nomFont:40, nomH:52, fonctionFont:32, fonctionH:46,
    nomY:902,                    /* haut de la pilule de nom */
    photoH:820, photoBase:0.62
  },
  "16x9": {
    W:1920, H:1080,
    margeG:88,
    logoX:88, logoY:84, logoW:1425, logoH:152,
    badgeX:1039, badgeY:222, badgeW:571, badgeH:162,
    pilX:89,  pilY:324, pilW:282, pilH:64, pilFont:38,
    titreY:417, titreFont:65, titreLH:1.215, titreMaxW:745,
    nomFont:50, nomH:66, fonctionFont:40, fonctionH:57,
    nomY:870,
    photoH:760, photoBase:0.46
  }
};

/* La vignette Live / Podcast est calée sur le logo, et sa taille suit celle du
   logo. Ces quatre rapports sont identiques dans les deux formats du fichier
   source, ce qui confirme qu'il s'agit d'un bloc solidaire :
     1:1   badge x 677 y 166 · 357×101   logo 900 de large
     16:9  badge x 1039 y 222 · 571×162  logo 1425 de large           */
var BADGE_RATIO = { dx:0.6634, dy:0.0967, w:0.3968, h:0.1126 };

/* Chemins par défaut des visuels extraits du .ai. Le générateur les charge au
   démarrage ; un fichier déposé dans le panneau les remplace. */
var ET_ASSETS = {
  logo:  "logo-energytalks.png",
  badge: { podcast:"badge-podcast.png", live:"badge-live.png" },
  /* Portrait du template par défaut, extrait de la version « 17/09 15:40 »
     validée par le client : déjà détouré, contour blanc compris. Le fichier
     source (avant détourage) est gardé à côté pour pouvoir relancer le
     détourage si besoin. */
  portrait: "intervenant-defaut.png",
  portraitSource: "intervenant-defaut-source.png"
};

/* ── Couleurs du dégradé, relevées sur les références ─────────────────────── */
var ET_GRAD_DEFAUT = { de:"#0E2366", vers:"#8A0B6E", angle:102, opacite:72 };

/* Bleus du lettrage et des pilules */
var ET_BLEU_CLAIR = "#1FA2F2";
var ET_BLEU_VIF   = "#2C3BF5";

function degradeCss(st){
  var g = st.etGrad || {};
  var de   = g.de   || ET_GRAD_DEFAUT.de;
  var vers = g.vers || ET_GRAD_DEFAUT.vers;
  var ang  = (g.angle===undefined) ? ET_GRAD_DEFAUT.angle : g.angle;
  return "linear-gradient("+ang+"deg, "+de+" 0%, "+vers+" 100%)";
}
function degradeOpacite(st){
  var g = st.etGrad || {};
  var o = (g.opacite===undefined) ? ET_GRAD_DEFAUT.opacite : g.opacite;
  return Math.max(0,Math.min(100,o))/100;
}

/* ── État par défaut ──────────────────────────────────────────────────────── */
var DEFAULT = Object.assign({
  format:"1x1",
  variante:"podcast",            /* "podcast" | "live" */
  etGrad: Object.assign({},ET_GRAD_DEFAUT),

  /* ── Template par défaut ──────────────────────────────────────────────
     Reprise exacte de la version « 17/09 15:40 » validée par le client :
     textes, cadrage du portrait et réglages du dégradé. Les images ne sont
     pas embarquées ici (elles pèseraient plusieurs méga-octets dans chaque
     sauvegarde) : le générateur charge les fichiers de templates/energy-talks
     au démarrage, tant que l'utilisateur n'a rien déposé. */
  editionTexte:"Live",
  editionDrapeau:"",
  editionStyle:"degrade",        /* "degrade" (pilule bleue) | "blanc" */

  titre:"Low-Cost\nOil Projects",

  /* Les intervenants portent chacun leur portrait détouré. */
  intervenants:[
    { id:"i1", nom:"Jessica Williams", fonction:"President and CEO",
      photo:null, photoRaw:null, x:34, y:55, zoom:99 }
  ],

  /* Sous-titre, utilisé surtout par la variante Live */
  sousTitre:"",
  dateTexte:"",
  logoSrc:null,
  badgeSrc:null,

  /* Réglages fins de la vignette, pour ajuster à l'œil sans toucher au code.
     Laisser undefined = valeurs du format. */
  badgeDX:undefined, badgeDY:undefined, badgeRot:undefined, badgeEchelle:100
}, global.BG_DEFAULT_STATE||{});

/* ── Intervenant vierge ───────────────────────────────────────────────────── */
var _seq=0;
function nouvelIntervenant(p){
  _seq++;
  return Object.assign({ id:"i"+Date.now()+"_"+_seq, nom:"", fonction:"",
    photo:null, photoRaw:null, x:50, y:50, zoom:100 }, p||{});
}

/* ── Répartition des portraits ────────────────────────────────────────────
   Les photos occupent le bas droit. Avec 1 intervenant la photo est large et
   centrée sur le bord droit ; au delà, elles se serrent et se chevauchent
   légèrement, comme sur les visuels Live à trois personnes. */
function dispositionPhotos(L, n){
  if(n<1) return [];
  /* Les portraits sont des silhouettes détourées, pas des vignettes : on ne
     les recadre JAMAIS. Chaque photo garde ses proportions, touche le bas de
     la carte, et la rangée se resserre vers la droite quand il y en a
     plusieurs. Le conteneur ne coupe rien, il ne fait que positionner. */
  var largeurZone = Math.round(L.W*L.photoBase);
  var droite = L.W;
  var gauche = droite - largeurZone;
  /* Chevauchement : les silhouettes se superposent d'autant plus qu'elles sont
     nombreuses, comme sur les visuels Live à trois personnes. */
  var chevauche = (n>=4) ? 0.30 : (n===3 ? 0.24 : (n===2 ? 0.16 : 0));
  var l = Math.round(largeurZone/(n - (n-1)*chevauche));
  var pas = Math.round(l*(1-chevauche));
  var out=[];
  for(var i=0;i<n;i++){
    out.push({ x: gauche + i*pas, w: l, h: L.photoH, y: L.H - L.photoH, z: i+1 });
  }
  return out;
}

/* ── Logo ENERGYTALKS ─────────────────────────────────────────────────────
   Composé typographiquement plutôt que posé en image : le lettrage doit
   pouvoir changer de taille selon le format sans perte, et un PNG de plus
   serait un fichier de plus à ne jamais oublier au déploiement. */
function LogoEnergyTalks(p){
  /* Le vrai lettrage vient du fichier Illustrator, extrait en PNG transparent.
     La reconstruction typographique ne sert plus que de secours si le fichier
     manque : elle a les bonnes proportions (rapport largeur/hauteur 9,4) mais
     pas le dessin exact. */
  if(p.src) return e("img",{src:p.src,alt:"",style:{
    width:p.largeur,height:p.hauteur,display:"block"}});
  var t=Math.round(p.hauteur/0.72);
  return e("div",{style:{display:"flex",alignItems:"baseline",
      width:p.largeur,height:p.hauteur,overflow:"hidden",
      fontFamily:"'Nunito',sans-serif",fontWeight:900,fontSize:t,
      lineHeight:1,letterSpacing:"-0.025em",whiteSpace:"nowrap"}},
    e("span",{style:{color:"#FFFFFF"}},"ENERGY"),
    e("span",{style:{backgroundImage:"linear-gradient(90deg,"+ET_BLEU_CLAIR+" 0%,"+ET_BLEU_VIF+" 100%)",
      WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent",
      WebkitTextFillColor:"transparent"}},"TALKS"));
}

/* ── Vignette Live / Podcast ──────────────────────────────────────────────── */
function VignetteType(p){
  /* Visuel extrait du .ai quand il existe : la pastille porte déjà son
     inclinaison et son dégradé, inutile de les refaire en CSS. */
  if(p.src) return e("img",{src:p.src,alt:"",style:{
    width:p.largeur,height:p.hauteur,display:"block"}});
  var h=p.h, live=(p.variante==="live");
  var fontT=Math.round(h*0.46);
  var base={height:h,borderRadius:h/2,background:"#FFFFFF",
    display:"inline-flex",alignItems:"center",gap:Math.round(h*0.16),
    padding:"0 "+Math.round(h*0.34)+"px",
    fontFamily:"'Nunito',sans-serif",fontWeight:900,
    letterSpacing:"0.01em",whiteSpace:"nowrap",boxSizing:"border-box"};
  if(live){
    return e("div",{style:base},
      e("span",{style:{width:Math.round(h*0.26),height:Math.round(h*0.26),
        borderRadius:"50%",background:"#E2001A",display:"inline-block"}}),
      e("span",{style:{fontSize:fontT,color:"#3A0A5E"}},"LIVE"));
  }
  /* Podcast : le O de PODCAST porte un micro. Rendu par un glyphe SVG posé
     à la place de la lettre, pour garder le mot lisible à l'export. */
  return e("div",{style:base},
    e("span",{style:{fontSize:fontT,color:ET_BLEU_VIF,display:"inline-flex",alignItems:"center"}},
      e("span",null,"P"),
      e("svg",{viewBox:"0 0 24 24",width:fontT*0.86,height:fontT*0.86,
        style:{margin:"0 "+Math.round(fontT*0.02)+"px"}},
        e("circle",{cx:12,cy:12,r:11,fill:ET_BLEU_VIF}),
        e("rect",{x:9.6,y:5.4,width:4.8,height:8.4,rx:2.4,fill:"#FFFFFF"}),
        e("path",{d:"M7.4 11.8a4.6 4.6 0 0 0 9.2 0",stroke:"#FFFFFF",
          strokeWidth:1.5,fill:"none",strokeLinecap:"round"}),
        e("path",{d:"M12 16.6V19",stroke:"#FFFFFF",strokeWidth:1.5,strokeLinecap:"round"})),
      e("span",null,"DCAST")));
}

/* ── Pilule d'édition ─────────────────────────────────────────────────────── */
function PiluleEdition(p){
  var st=p.st, L=p.L;
  if(!st.editionTexte) return null;
  var blanc=(st.editionStyle==="blanc");
  var style={position:"absolute",left:L.pilX,top:L.pilY,height:L.pilH,
    borderRadius:L.pilH/2,display:"inline-flex",alignItems:"center",
    gap:Math.round(L.pilH*0.22),padding:"0 "+Math.round(L.pilH*0.42)+"px",
    fontFamily:"'Nunito',sans-serif",fontWeight:800,fontSize:L.pilFont,
    letterSpacing:"0.005em",whiteSpace:"nowrap",boxSizing:"border-box"};
  if(blanc){ style.background="#FFFFFF"; style.color=ET_BLEU_CLAIR; }
  else { style.backgroundImage="linear-gradient(90deg,"+ET_BLEU_CLAIR+" 0%,"+ET_BLEU_VIF+" 100%)";
         style.color="#FFFFFF"; }
  return e("div",{style:style},
    (blanc&&st.editionDrapeau)?e("span",{style:{fontSize:L.pilFont}},st.editionDrapeau):null,
    e("span",null,st.editionTexte));
}

/* ── Bloc nom + fonction ──────────────────────────────────────────────────── */
function BlocNom(p){
  var L=p.L, it=p.it;
  if(!it.nom && !it.fonction) return null;
  return e("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"}},
    it.nom?e("div",{style:{height:L.nomH,display:"flex",alignItems:"center",
      padding:"0 "+Math.round(L.nomH*0.28)+"px",
      backgroundImage:"linear-gradient(90deg,"+ET_BLEU_CLAIR+" 0%,"+ET_BLEU_VIF+" 100%)",
      color:"#FFFFFF",fontFamily:"'Nunito',sans-serif",fontWeight:700,
      fontSize:L.nomFont,whiteSpace:"nowrap"}},it.nom):null,
    it.fonction?e("div",{style:{height:L.fonctionH,display:"flex",alignItems:"center",
      padding:"0 "+Math.round(L.fonctionH*0.3)+"px",background:"#FFFFFF",
      color:ET_BLEU_VIF,fontFamily:"'Nunito',sans-serif",fontWeight:700,
      fontSize:L.fonctionFont,whiteSpace:"nowrap"}},it.fonction):null);
}

/* ── Carte ────────────────────────────────────────────────────────────────── */
function EnergyTalksCard(props){
  var st = props.st || DEFAULT;
  var L  = LAYOUT[st.format] || LAYOUT["1x1"];
  var gens = (st.intervenants||[]).slice(0,4);
  var rects = dispositionPhotos(L, gens.length);

  var racine = {position:"relative",width:L.W,height:L.H,overflow:"hidden",
    background:"#14205C",fontFamily:"'Nunito',sans-serif"};

  return e("div", Object.assign({ref:props.cardRef, style:racine},
      props.exportTarget?{"data-export-card":"1","data-ready":"1"}:{}),

    /* Fond photo, repositionnable, avec la mention IA qui vit dedans */
    e("div",{"data-layer":"bg",style:{position:"absolute",inset:0,overflow:"hidden"}},
      e(global.DragImage,{st:st,src:st.bgImg,
        x:st["bgX_"+st.format]||50, y:st["bgY_"+st.format]||50,
        zoom:st["bgZoom_"+st.format]||100, blur:st.bgBlur,
        brightness:st.bgBrightness, saturation:st.bgSaturation, contrast:st.bgContrast,
        scale:props.scale||1,
        onChange:function(x,y){ if(props.onBgMove) props.onBgMove(x,y); }})),

    /* Dégradé transparent par dessus la photo */
    e("div",{"data-layer":"degrade",style:{position:"absolute",inset:0,
      backgroundImage:degradeCss(st), opacity:degradeOpacite(st),
      mixBlendMode:"multiply", pointerEvents:"none"}}),
    e("div",{"data-layer":"degrade-clair",style:{position:"absolute",inset:0,
      backgroundImage:degradeCss(st), opacity:degradeOpacite(st)*0.45,
      pointerEvents:"none"}}),

    /* Portraits détourés, au dessus du dégradé et sous les textes */
    /* Portraits. Chaque silhouette est ANCRÉE EN BAS AU CENTRE de son pavé :
       le zoom la fait grandir vers le haut, les pieds restent posés, et le
       cadrage ne saute pas. La version précédente laissait le flex recalculer
       la position à chaque changement de taille, d'où l'impression que le zoom
       déplaçait l'image au lieu de l'agrandir. */
    e("div",{"data-layer":"portraits",style:{position:"absolute",inset:0,
        overflow:"hidden",zIndex:1}},
      gens.map(function(it,i){
        var r=rects[i]; if(!r||!it.photo) return null;
        var zoom=Math.max(20,Math.min(300,it.zoom||100));
        var hauteur=Math.round(r.h*zoom/100);
        /* Les curseurs X et Y déplacent en pixels de carte, amplitude bornée à
           une demi-largeur et un quart de hauteur de pavé. */
        var dx=Math.round(((it.x||50)-50)/50 * r.w*0.5);
        var dy=Math.round(((it.y||50)-50)/50 * r.h*0.25);
        return e("div",{key:it.id||i,style:{position:"absolute",
            left:r.x, top:r.y, width:r.w, height:r.h, zIndex:r.z}},
          e("img",{src:it.photo,alt:"",style:{
            position:"absolute", left:"50%", bottom:0,
            height:hauteur, width:"auto", maxWidth:"none",
            transform:"translateX(-50%) translate("+dx+"px,"+dy+"px)",
            display:"block"}}));
      })),

    /* HABILLAGE — un calque au dessus des portraits. Textes et pastilles
       passent toujours devant la photo, jamais derrière. */
    e("div",{"data-layer":"habillage",style:{position:"absolute",inset:0,
        zIndex:10, pointerEvents:"none"}},

    /* Logo et vignette : un seul bloc solidaire. La vignette est posée sur le
       logo aux rapports relevés dans le fichier source, donc son placement est
       juste dans les deux formats sans réglage. */
    (function(){
      var lw = L.logoW, lh = L.logoH;
      /* Cotes exactes du fichier source, pas les rapports arrondis : le
         placement tombe au pixel dans les deux formats. */
      var bw = L.badgeW, bh = L.badgeH;
      var bdx = (st.badgeDX!==undefined) ? st.badgeDX : (L.badgeX - L.logoX);
      var bdy = (st.badgeDY!==undefined) ? st.badgeDY : (L.badgeY - L.logoY);
      var ech = (st.badgeEchelle||100)/100;
      var badgeSrc = st.badgeSrc || null;
      return e("div",{key:"logo",style:{position:"absolute",
          left:L.logoX, top:L.logoY, width:lw, height:lh}},
        e(LogoEnergyTalks,{largeur:lw,hauteur:lh,src:st.logoSrc||null}),
        e("div",{style:{position:"absolute",left:bdx,top:bdy,
            transform:(st.badgeRot?"rotate("+st.badgeRot+"deg)":"none"),
            transformOrigin:"left top"}},
          e(VignetteType,{src:badgeSrc,
            largeur:Math.round(bw*ech), hauteur:Math.round(bh*ech),
            h:Math.round(bh*ech), variante:st.variante})));
    })(),

    e(PiluleEdition,{st:st,L:L}),

    /* Titre */
    e("div",{style:{position:"absolute",left:L.margeG,top:L.titreY,
      maxWidth:L.titreMaxW,
      color:"#FFFFFF",fontWeight:800,fontSize:L.titreFont,
      lineHeight:L.titreLH,whiteSpace:"pre-wrap"}}, st.titre||""),

    /* Sous-titre optionnel (variante Live) */
    st.sousTitre?e("div",{style:{position:"absolute",left:L.margeG,
      top:L.titreY+Math.round(L.titreFont*L.titreLH*2.3),
      maxWidth:Math.round(L.W*0.5),color:"#FFFFFF",fontWeight:600,
      fontSize:Math.round(L.titreFont*0.48),lineHeight:1.3}},st.sousTitre):null,

    /* Noms, empilés en bas à gauche */
    e("div",{style:{position:"absolute",left:L.margeG,top:L.nomY,
      display:"flex",flexDirection:"column",gap:Math.round(L.nomH*0.28),
      alignItems:"flex-start"}},
      gens.map(function(it,i){ return e(BlocNom,{key:it.id||i,L:L,it:it}); }))

    ) /* /habillage */
  );
}

/* ── Enregistrement ───────────────────────────────────────────────────────── */
global.SPGCards.register("energytalks",{
  label:"Energy Talks",
  icon:"🎙️",
  pageKey:"energytalks",
  href:"generators/energy-talks/",
  formats:["1x1","16x9"],
  carrousel:false,        /* logique propre : jamais une vignette de carrousel */
  DEFAULT:DEFAULT,
  shared:[],
  textFields:["titre","sousTitre","editionTexte",
              {list:"intervenants",fields:["nom","fonction"]}],
  FORMATS:ET_FORMATS,
  LAYOUT:LAYOUT,
  GRAD_DEFAUT:ET_GRAD_DEFAUT,
  nouvelIntervenant:nouvelIntervenant,
  dispositionPhotos:dispositionPhotos,
  cardWidth:function(format){ return (LAYOUT[format]||LAYOUT["1x1"]).W; },
  cardHeight:function(format){ return (LAYOUT[format]||LAYOUT["1x1"]).H; },
  Card:EnergyTalksCard
});

global.EnergyTalksCard = EnergyTalksCard;
global.ET_LAYOUT = LAYOUT;
global.ET_FORMATS = ET_FORMATS;
global.etNouvelIntervenant = nouvelIntervenant;

})(window);
