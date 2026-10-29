/* ═══ Panneau Latest News ═════════════════════════════════════════════════
   Utilisé par generators/latest-news/ ET par le Carrousel.
   Options communes : voir assets/panneau.js. Ici : l'ordre des blocs et les
   réglages propres à Latest News (blocs de texte, marge basse).          */
(function(){
function e(){ return React.createElement.apply(React, arguments); }
var CARD = function(){ return SPGCards.get("latestnews"); };

/* ── Blocs de texte ── */
function BlocsTexte(p){
  var ctx = p.ctx, st = ctx.st, set = ctx.setSt;
  var a = React.useState(0), actif = a[0], setActif = a[1];
  var g = ctx.d, L = g.L, f = ctx.format;
  var GRAD_H = gradCss(st.grad, 90);
  var onGrad = g.onGrad;

  function setBloc(id, k, v){ set(function(prev){
    return Object.assign({}, prev, {blocs:prev.blocs.map(function(b){
      return b.id === id ? Object.assign({}, b, typeof k === "object" ? k : {[k]:v}) : b; })}); }); }
  function ajouter(){ set(function(prev){
    var arr = (prev.blocs||[]).concat(CARD().newBloc());
    setTimeout(function(){ setActif(arr.length-1); }, 0);
    return Object.assign({}, prev, {blocs:arr}); }); }
  function retirer(id){ set(function(prev){
    return Object.assign({}, prev, {blocs:prev.blocs.filter(function(b){ return b.id !== id; })}); }); }
  function deplacer(i, j){ set(function(prev){
    var arr = prev.blocs.slice(); var it = arr.splice(i,1)[0]; arr.splice(j,0,it);
    return Object.assign({}, prev, {blocs:arr}); }); }

  var blocs = st.blocs || [];
  var fleche = function(lib, off, cb){ return e("button", {disabled:off, onClick:function(ev){ ev.stopPropagation(); cb(); },
    style:{border:"none",background:"none",color:off?"#ddd":"#888",fontSize:10,cursor:off?"default":"pointer",
      padding:"0 2px",lineHeight:1,fontFamily:"inherit",display:"block"}}, lib); };

  return e(React.Fragment, null,
    e("div", {className:"hint", style:{marginBottom:10}},
      e("b", null, "**mot**"), " = surlignage  •  ", e("b", null, "__mot__"), " = soulignage"),
    e("div", {style:{display:"flex",flexDirection:"column",gap:6,marginBottom:10}},
      blocs.map(function(bloc, idx){
        var ouvert = actif === idx;
        var lib = (bloc.text||"").replace(/\*\*|__/g,"").substring(0,32) || ("Bloc "+(idx+1));
        return e("div", {key:bloc.id, style:{border:"1px solid "+(ouvert?"#1a1a1a":"#e0e0e0"),
            borderRadius:8, overflow:"hidden", background:ouvert?"#f9f9f7":"#fff"}},
          e("div", {style:{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",cursor:"pointer"},
              onClick:function(){ setActif(ouvert ? -1 : idx); }},
            e("div", {style:{display:"flex",flexDirection:"column",gap:1}},
              fleche("▲", idx===0, function(){ deplacer(idx, idx-1); setActif(idx-1); }),
              fleche("▼", idx===blocs.length-1, function(){ deplacer(idx, idx+1); setActif(idx+1); })),
            e("span", {style:{flex:1,fontSize:12,fontWeight:700,color:"#333",overflow:"hidden",
              textOverflow:"ellipsis",whiteSpace:"nowrap"}}, (bloc.type==="texte"?"✦ ":"▪ ")+lib),
            e("span", {style:{fontSize:10,color:"#aaa",fontWeight:600,textTransform:"uppercase",letterSpacing:".05em"}},
              bloc.type==="texte" ? "Texte" : "Encadré"),
            e("button", {onClick:function(ev){ ev.stopPropagation(); if(confirm("Supprimer ce bloc ?")) retirer(bloc.id); },
              style:{marginLeft:4,border:"none",background:"none",color:"#ccc",fontSize:14,cursor:"pointer",
                padding:"0 2px",lineHeight:1,fontFamily:"inherit"}}, "×")),
          ouvert ? e("div", {style:{padding:"10px 10px 14px",borderTop:"1px solid #efefef"}},
            e("label", {className:"field-label"}, "Texte"),
            e("textarea", {spellCheck:true, rows:4, value:bloc.text,
              onChange:function(ev){
                var v = ev.target.value;
                if(st.bgMode === "photo" && bloc.type === "texte") v = "**"+v.replace(/\*\*/g,"").replace(/__/g,"")+"**";
                setBloc(bloc.id, "text", v);
              }, style:{fontSize:13,lineHeight:1.5,marginBottom:4}}),
            (st.bgMode === "photo" && bloc.type === "texte")
              ? e("div", {className:"hint", style:{marginBottom:8}}, "Sur fond photo, le texte est entièrement surligné.") : null,
            e("label", {className:"field-label"}, "Type de bloc"),
            e(Shell.ui.SegButtons, {value:bloc.type, onChange:function(v){
                var maj = {type:v};
                if(st.bgMode === "photo"){
                  var nu = bloc.text.replace(/\*\*/g,"").replace(/__/g,"").trim();
                  maj.text = (v === "texte") ? "**"+nu+"**" : nu;
                }
                setBloc(bloc.id, maj); },
              options:[{v:"encadre",l:"Encadré"},{v:"texte",l:"Texte surligné"}]}),
            e("div", {style:{height:8}}),
            e("label", {className:"toggle", style:{marginBottom:10}},
              e("input", {type:"checkbox", checked:!!bloc.inverted,
                onChange:function(ev){ setBloc(bloc.id, {inverted:ev.target.checked}); }}),
              e("span", {style:{display:"inline-flex",alignItems:"center",gap:6}},
                e("span", {style:{display:"inline-block",width:16,height:10,borderRadius:3,backgroundImage:GRAD_H,flexShrink:0}}),
                bloc.type === "encadre" ? "Inverser : fond dégradé, texte blanc" : "Inverser : texte dégradé, surlignage blanc")),
            !bloc.inverted ? e(React.Fragment, null,
              e("label", {className:"field-label"}, "Couleur du texte"),
              e(Shell.ui.SegButtons, {value:bloc.textMode||"uni", onChange:function(v){ setBloc(bloc.id, "textMode", v); },
                options:(onGrad && bloc.type === "texte")
                  ? [{v:"uni",l:"Couleur unie"}]
                  : [{v:"uni",l:"Couleur unie"},{v:"grad",l:"Dégradé diagonal"}]}),
              e("div", {style:{height:8}})) : null,
            e("label", {className:"toggle", style:{marginBottom:10}},
              e("input", {type:"checkbox", checked:!!bloc.liveMode,
                onChange:function(ev){ setBloc(bloc.id, "liveMode", ev.target.checked); }}),
              e("span", {style:{display:"inline-flex",alignItems:"center",gap:6}},
                e("span", {style:{width:10,height:10,borderRadius:"50%",background:"#E70000",display:"inline-block",flexShrink:0}}),
                "Mode LIVE : rond rouge")),
            e("label", {className:"field-label"}, "Alignement"),
            e(Shell.ui.SegButtons, {value:bloc.align||"left", onChange:function(v){ setBloc(bloc.id, "align", v); },
              options:[{v:"left",l:"← Gauche"},{v:"center",l:"↔ Centre"},{v:"right",l:"Droite →"}]}),
            e("div", {style:{height:8}}),
            (function(){
              var bfs = Math.max(L.TEXT_MIN, Math.min(L.TEXT_MAX, bloc["fs_"+f] || L.TEXT_DEF));
              var al = window.SPGGuard ? SPGGuard.pour(ctx.verdict, SPGGuard.CAUSES_HAUTEUR) : null;
              return e(Shell.ui.SliderField, {alerte:al,
                label:"Taille : "+(bfs/K).toFixed(0)+" pt"+(bloc["fs_"+f] ? "" : " (défaut)"),
                min:L.TEXT_MIN, max:L.TEXT_MAX, value:bfs,
                onChange:function(v){ setBloc(bloc.id, "fs_"+f, Math.round(v)); }});
            })(),
            (function(){
              var auto = CARD_W - L.MARGIN - L.RIGHT_MIN;
              var brut = bloc["w_"+f] || 0;
              var BW = brut ? Math.round(CARD_W*brut/100) : auto;
              BW = Math.max(Math.round(CARD_W*0.30), Math.min(CARD_W-L.MARGIN*2, BW));
              var pct = Math.round(BW/CARD_W*100);
              return e(Shell.ui.SliderField, {label:"Largeur : "+pct+" %", min:30, max:90, value:pct,
                onChange:function(v){ setBloc(bloc.id, "w_"+f, Math.round(v)); }});
            })()) : null);
      })),
    blocs.length < 4
      ? e("button", {onClick:ajouter, style:{width:"100%",padding:"8px",border:"1px dashed #ccc",borderRadius:8,
          background:"#fafafa",cursor:"pointer",fontSize:12,fontWeight:700,color:"#888",fontFamily:"inherit"}},
          "+ Ajouter un bloc")
      : e("div", {className:"hint", style:{textAlign:"center"}}, "Maximum 4 blocs"));
}

/* ── Position de la pile de blocs ── */
function Position(p){
  var ctx = p.ctx, g = ctx.d, f = ctx.format;
  var brut = (ctx.st["b_"+f] !== undefined) ? ctx.st["b_"+f] : -1;
  return e(React.Fragment, null,
    e("label", {className:"field-label"}, "Marge basse : "+g.bottomTarget+" px"+(brut < 0 ? " (auto)" : "")),
    e("input", {type:"range", min:0, max:1000, step:1,
      value:brut < 0 ? Math.round((g.bottomTarget-g.BOTTOM_MIN)/Math.max(1,g.BOTTOM_MAX-g.BOTTOM_MIN)*1000) : brut,
      onChange:function(ev){ ctx.set("b_"+f, parseInt(ev.target.value,10)); }}),
    e("button", {className:"mini-btn", style:{marginTop:6}, onClick:function(){ ctx.set("b_"+f, -1); }},
      "Position automatique"));
}

/* ── Sous le choix du format ── */
function SousFormat(p){
  var ctx = p.ctx, L = ctx.d.L;
  return e(React.Fragment, null,
    ctx.format === "4x5" ? e("label", {className:"toggle", style:{marginTop:10}},
      e("input", {type:"checkbox", checked:!!ctx.st.firstSlide, onChange:function(ev){ ctx.set("firstSlide", ev.target.checked); }}),
      "Marge 84 px (format portrait Instagram)") : null,
    L.STORY ? e("div", {className:"hint", style:{marginTop:6}}, "Marges story : 80 px de bord, cartouche à 180 px du haut.") : null);
}

SPGPanneau.definir("latestnews", {
  derives:function(ctx){ return CARD().geometry(ctx.st, ctx.mesures.paveH || 120); },
  /* Zoom maximal sans perte : tient compte de la marie-louise. */
  maxZoom:function(ctx){
    var L = ctx.d.L, cf = chFormat(ctx.format), n = ctx.bgNat || {};
    if(!(n.w > 0 && n.h > 0)) return 300;
    var outW = cf.outputW - L.ML*2*L.EXPORT_SCALE, outH = cf.outputH - L.ML*2*L.EXPORT_SCALE;
    var ir = n.w/n.h, cr = outW/outH;
    var cw = (ir > cr) ? outH*ir : outW, ch = (ir > cr) ? outH : outW/ir;
    return Math.max(100, Math.min(300, Math.min(Math.floor(n.w/cw*100), Math.floor(n.h/ch*100))));
  },
  sousFormat:SousFormat,
  miseEnPage:[
    {bloc:"cartouche"}, "repere",
    {bloc:"couleurs", texte:true}, "marieLouise",
    {bloc:"fond", indications:{grad:"Sur aplat dégradé, la charte impose une cartouche transparente entourée d'un filet blanc de 2 px. C'est automatique."}}
  ],
  contenu:[
    {titre:"Textes", Rendu:BlocsTexte},
    {titre:"Position", Rendu:Position}
  ]
});
})();
