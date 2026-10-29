/* ═══ Panneau Split Screen ════════════════════════════════════════════════
   Utilisé par generators/split-screen/ ET par le Carrousel.             */
(function(){
function e(){ return React.createElement.apply(React, arguments); }
var CARD = function(){ return SPGCards.get("splitscreen"); };

/* ── Disposition de la photo (avant le bloc image) ── */
function Disposition(p){
  var ctx = p.ctx, st = ctx.st, cote = (st.layout === "left" || st.layout === "right");
  return e(React.Fragment, null,
    e("label", {className:"field-label"}, "Disposition"),
    e(Shell.ui.SegButtons, {value:st.layout, onChange:function(v){ ctx.set("layout", v); },
      options:[{v:"bottom",l:"Bas"},{v:"top",l:"Haut"},{v:"left",l:"Gauche"},{v:"right",l:"Droite"}]}),
    e("div", {style:{height:8}}),
    e(Shell.ui.SliderField, {label:(cote ? "Largeur" : "Hauteur")+" photo : "+Math.round((st.imgRatio || 0.55)*100)+" %",
      min:30, max:72, value:Math.round((st.imgRatio || 0.55)*100), onChange:function(v){ ctx.set("imgRatio", Math.round(v)/100); }}),
    e("div", {style:{height:12}}));
}

/* ── Texte ── */
function Texte(p){
  var ctx = p.ctx, st = ctx.st, L = ctx.d.L, f = ctx.format, G = window.SPGGuard;
  var fs = Math.max(L.TEXT_MIN, Math.min(L.TEXT_MAX, st["fs_"+f] || L.TEXT_DEF));
  /* La carte réduit toute seule un texte trop long (jusqu'à -20 % sous la charte). */
  var faits = ctx.mesures.garde, auto = faits && faits.texteAuto;
  var reelle = auto ? auto.taille : fs, reduit = auto && reelle < fs;
  function setF(k, v){ ctx.set(k+f, Math.round(v)); }
  return e(React.Fragment, null,
    e("div", {className:"upload-hint", style:{marginBottom:6}},
      e("b", null, "**mot**"), " = surlignage  •  ", e("b", null, "__mot__"), " = soulignage"),
    e("textarea", {spellCheck:true, rows:5, value:st.text || "", style:{fontSize:13,lineHeight:1.5},
      onChange:function(ev){ ctx.set("text", ev.target.value); }}),
    e("div", {style:{height:12}}),
    e(Shell.ui.SliderField, {alerte:G ? G.pour(ctx.verdict, ["debordTexte","texteReduit"]) : null,
      label:"Taille du texte : "+fs.toFixed(0)+" px"+(reduit ? "  (ajustée à "+reelle+" px pour tenir)" : ""),
      min:L.TEXT_MIN, max:L.TEXT_MAX, value:fs, onChange:function(v){ setF("fs_", v); }}),
    e("div", {className:"hint", style:{margin:"2px 0 10px"}},
      "Charte : "+L.TEXT_MIN+" à "+L.TEXT_MAX+" px. Si le texte ne tient pas, il est réduit automatiquement, jusqu'à 20 % sous la charte."),
    e("label", {className:"field-label", style:{display:"flex",alignItems:"center",gap:6}}, "Texte ferré",
      Shell.ui.Info ? e(Shell.ui.Info, {texte:"Charte p24 et p44 : texte ferré à gauche ou à droite, à 50 px de la marge."}) : null),
    e(Shell.ui.SegButtons, {value:st.textAlign || "left", onChange:function(v){ ctx.set("textAlign", v); },
      options:[{v:"left",l:"← À gauche"},{v:"right",l:"À droite →"}]}),
    e("div", {style:{height:10}}),
    e(Shell.ui.SliderField, {alerte:G ? G.pour(ctx.verdict, ["motTropLarge"]) : null,
      label:"Largeur du bloc texte : "+(st["txtW_"+f] || 100)+" % de la zone",
      min:40, max:100, value:st["txtW_"+f] || 100, onChange:function(v){ setF("txtW_", v); }}),
    e(Shell.ui.SliderField, {label:"Position horizontale : "+(st["txtX_"+f] || 0)+" %  (0 = gauche, 100 = droite)",
      min:0, max:100, value:st["txtX_"+f] || 0, onChange:function(v){ setF("txtX_", v); }}),
    e(Shell.ui.SliderField, {label:"Position verticale : "+(st["txtY_"+f] || 0)+" %  (0 = haut, 100 = bas)",
      min:0, max:100, value:st["txtY_"+f] || 0, onChange:function(v){ setF("txtY_", v); }}),
    e("div", {className:"hint", style:{marginTop:4}}, "Le bloc texte reste toujours dans sa zone : il ne peut recouvrir ni l'image ni la cartouche."),
    e("button", {className:"mini-btn", style:{marginTop:6},
      onClick:function(){ ctx.setSt(function(prev){ var c = Object.assign({}, prev);
        ["fs_","txtW_","txtX_","txtY_"].forEach(function(k){ delete c[k+prev.format]; }); return c; }); }},
      "Valeurs par défaut"));
}

SPGPanneau.definir("splitscreen", {
  derives:function(ctx){ return {L:CARD().getLayout(ctx.format, {hasML:ctx.st.hasML})}; },
  /* Zoom maximal sans perte : calculé sur la zone image, pas la carte entière. */
  maxZoom:function(ctx){
    var L = ctx.d.L, n = ctx.bgNat || {}, st = ctx.st;
    if(!(n.w > 0 && n.h > 0)) return 300;
    var R = CARD().computeRects(L, L.CARD_H, st.layout, st.imgRatio || 0.55), EX = L.EXPORT_SCALE;
    var outW = Math.round(R.img.w*EX), outH = Math.round(R.img.h*EX);
    var ir = n.w/n.h, cr = outW/outH;
    var cw = (ir > cr) ? outH*ir : outW, ch = (ir > cr) ? outH : outW/ir;
    return Math.max(100, Math.min(300, Math.min(Math.floor(n.w/cw*100), Math.floor(n.h/ch*100))));
  },
  miseEnPage:[
    {bloc:"cartouche"}, "repere",
    {bloc:"couleurs", texte:true}, "marieLouise",
    {titre:"Image", Rendu:Disposition},
    {bloc:"fond", titre:null, modes:["photo"]}
  ],
  contenu:[
    {titre:"Texte", Rendu:Texte}
  ]
});
})();
