/* ═══ Panneau Citation ════════════════════════════════════════════════════
   Utilisé par generators/citation/ ET par le Carrousel.                 */
(function(){
function e(){ return React.createElement.apply(React, arguments); }
var CARD = function(){ return SPGCards.get("citation"); };

/* ── Gabarit : style libre ou template 03 de la charte ── */
function Gabarit(p){
  var ctx = p.ctx, t03 = ctx.d.isT03;
  function bouton(val, lib, sous){
    var on = (val === "t03") === t03;
    return e("button", {onClick:function(){ ctx.set("template", val); },
      style:{flex:1,padding:"10px 8px",borderRadius:8,cursor:"pointer",border:"none",fontFamily:"inherit",
        fontSize:12,fontWeight:700,lineHeight:1.3,background:on?"#1a1a1a":"#f0f0f0",color:on?"#fff":"#555"}},
      lib, sous ? e("br") : null, sous ? e("span", {style:{fontWeight:600,opacity:.7,fontSize:10}}, sous) : null);
  }
  return e("div", {style:{display:"flex",gap:6}}, bouton("libre","Style libre"), bouton("t03","Template 03","Charte 2026"));
}

/* ── Personne ── */
function Personne(p){
  var ctx = p.ctx, st = ctx.st, t03 = ctx.d.isT03;
  return e(React.Fragment, null,
    e("div", {className:"upload-hint"}, "Format idéal : ", e("b", null, t03 ? "Portrait carré (~400×400 px)" : "Portrait 3:4 (~400×530 px)")),
    t03
      ? e(FileDrop, {value:st.avatarSrc || st.photo, placeholder:"Photo (ronde dans le bloc)", small:true,
          onChange:function(v){ ctx.setSt(function(prev){ var c = Object.assign({}, prev); c.photo = v || null; c.avatarSrc = null; return c; }); }})
      : e(FileDrop, {value:st.photo, placeholder:"Portrait", small:true, onChange:function(v){ ctx.set("photo", v); }}),
    t03 ? e("label", {className:"toggle", style:{margin:"8px 0"}},
      e("input", {type:"checkbox", checked:!st.hideAvatar, onChange:function(ev){ ctx.set("hideAvatar", !ev.target.checked); }}),
      "Afficher la photo dans le bloc") : null,
    e("div", {style:{height:10}}),
    e("label", {className:"field-label"}, "Nom"),
    e("input", {type:"text", spellCheck:true, value:st.name || "", style:{textTransform:"uppercase"},
      onChange:function(ev){ ctx.set("name", ev.target.value.toUpperCase()); }}),
    e("div", {style:{height:8}}),
    e("label", {className:"field-label"}, "Fonction ", e("span", {className:"hint"}, "(Entrée = retour à la ligne)")),
    e("textarea", {spellCheck:true, rows:2, value:st.title || "", onChange:function(ev){ ctx.set("title", ev.target.value); }}));
}

/* ── Citation ── */
function Citation(p){
  var ctx = p.ctx, st = ctx.st, g = ctx.d, f = ctx.format, t03 = g.isT03, G = window.SPGGuard;
  var al = G ? G.pour(ctx.verdict, ["tailleTexte","texteReduit"].concat(G.CAUSES_HAUTEUR)) : null;
  var quoteH = ctx.mesures.quoteH || 100;
  return e(React.Fragment, null,
    e("label", {className:"field-label"}, "Guillemets"),
    e(Shell.ui.SegButtons, {value:st.quoteStyle, onChange:function(v){ ctx.set("quoteStyle", v); },
      options:[{v:"curly",l:"“”  English"},{v:"chevron",l:"«»  Français"},{v:"none",l:"Aucun"}]}),
    t03 ? e(React.Fragment, null,
      e("div", {style:{height:12}}),
      e("label", {className:"field-label"}, "Source (en italique)"),
      e("input", {type:"text", spellCheck:true, value:st.source || "", placeholder:"ex : Rapport Développement Durable 2025",
        onChange:function(ev){ ctx.set("source", ev.target.value); }})) : null,
    e("div", {style:{height:12}}),
    e("div", {className:"upload-hint", style:{marginBottom:6}},
      e("b", null, "**mot**"), " = surlignage  •  ", e("b", null, "__mot__"), " = soulignage"),
    e("textarea", {spellCheck:true, rows:7, value:st.quote || "", style:{fontSize:13,lineHeight:1.5},
      onChange:function(ev){ ctx.set("quote", ev.target.value); }}),
    e("div", {style:{height:12}}),
    e(Shell.ui.SliderField, {alerte:al, label:"Taille du texte : "+g.cfs+" pt"+(st["fs_"+f] ? "" : " (défaut)"),
      min:g.QUOTE_FONT_MIN, max:g.QUOTE_FONT_MAX, value:g.cfs, onChange:function(v){ ctx.set("fs_"+f, Math.round(v)); }}),
    e("button", {className:"mini-btn", style:{marginTop:4}, onClick:function(){ ctx.set("fs_"+f, 0); }}, "Taille par défaut"),
    e("div", {style:{height:12}}),
    t03
      ? e(React.Fragment, null,
          e(Shell.ui.SliderField, {alerte:G ? G.pour(ctx.verdict, ["debordement"]) : null,
            label:"Largeur du bloc : "+(st["blockW_t03_"+f] || 75)+" %", min:50, max:95, step:5,
            value:st["blockW_t03_"+f] || 75, onChange:function(v){ ctx.set("blockW_t03_"+f, Math.round(v)); }}),
          e("label", {className:"toggle", style:{marginTop:8}},
            e("input", {type:"checkbox", checked:st.shadowT03 !== false, onChange:function(ev){ ctx.set("shadowT03", ev.target.checked); }}),
            "Ombre portée"))
      : e(React.Fragment, null,
          e("label", {className:"field-label"}, "Alignement horizontal"),
          e(Shell.ui.SegButtons, {value:st.blockAlign || "center", onChange:function(v){ ctx.set("blockAlign", v); },
            options:[{v:"left",l:"← Gauche"},{v:"center",l:"↔ Centre"},{v:"right",l:"Droite →"}]}),
          e("div", {style:{height:12}}),
          e("label", {className:"field-label"},
            g.rawY < 0 ? "Position automatique" : "Position : bas à "+(g.L.CARD_H-(Math.round(g.targetTop)+quoteH))+" px du bord"),
          e("input", {type:"range", min:0, max:1000, step:1,
            value:g.rawY < 0 ? (Math.round((g.targetTop-g.TOP_MIN)/Math.max(1,g.TOP_MAX-g.TOP_MIN)*1000) || 500) : g.rawY,
            onChange:function(ev){ ctx.set("blockYPct_"+f, parseInt(ev.target.value,10)); }}),
          e(Shell.ui.SliderField, {alerte:G ? G.pour(ctx.verdict, ["debordement"]) : null,
            label:"Largeur : "+g.curPct+" % ("+g.QW+" px)"+(st["blockPct_"+f] ? "" : " (natif)"),
            min:30, max:90, value:g.curPct, onChange:function(v){ ctx.set("blockPct_"+f, Math.round(v)); }}),
          e("button", {className:"mini-btn", style:{marginTop:6},
            onClick:function(){ ctx.setSt(function(prev){ var c = Object.assign({}, prev); c["blockYPct_"+f] = -1; c["blockPct_"+f] = 0; return c; }); }},
            "Position et largeur automatiques")),
    e("div", {style:{height:12}}),
    e("label", {className:"toggle"},
      e("input", {type:"checkbox", checked:!!st.showLogo, onChange:function(ev){ ctx.set("showLogo", ev.target.checked); }}),
      "Logo en bas du bloc"),
    st.showLogo ? e("div", {style:{marginTop:8}},
      e(FileDrop, {value:st.logoImg, placeholder:"Logo PNG transparent", small:true, onChange:function(v){ ctx.set("logoImg", v); }})) : null);
}

SPGPanneau.definir("citation", {
  derives:function(ctx){ return CARD().geometry(ctx.st, ctx.mesures.quoteH || 100); },
  miseEnPage:[
    {titre:"Gabarit", Rendu:Gabarit},
    {bloc:"cartouche", champ:"simple", masquable:true}, "repere",
    "couleurs", "marieLouise",
    {bloc:"fond", indications:{grad:"Sur aplat dégradé, la cartouche et le repère de carrousel s'affichent avec un filet blanc automatiquement.",
                               white:"Fond blanc uni."}}
  ],
  contenu:[
    {titre:"Personne", Rendu:Personne},
    {titre:"Citation", Rendu:Citation}
  ]
});
})();
