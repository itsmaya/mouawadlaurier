/* ═══ Panneau Totally True ════════════════════════════════════════════════
   Utilisé par generators/totally-true/ ET par le Carrousel.             */
(function(){
function e(){ return React.createElement.apply(React, arguments); }
var CARD = function(){ return SPGCards.get("totallytrue"); };
function Info(t){ return Shell.ui.Info ? e(Shell.ui.Info, {texte:t}) : null; }

/* ── Bulle : position, pointe, ombre ── */
function Bulle(p){
  var ctx = p.ctx, st = ctx.st, g = ctx.d, D = CARD().DEFAULT;
  return e(React.Fragment, null,
    e("label", {className:"field-label", style:{display:"flex",alignItems:"center",gap:6}}, "Position",
      Info("La hauteur s'adapte au texte. Position et largeur sont en pourcentage de la carte, donc conservées d'un format à l'autre.")),
    e(Shell.ui.SliderField, {label:"Horizontale : "+Math.round(st.bubbleX || 0)+" %", min:0, max:100, value:st.bubbleX || 0,
      onChange:function(v){ ctx.set("bubbleX", Math.round(v)); }}),
    e(Shell.ui.SliderField, {alerte:window.SPGGuard ? SPGGuard.pour(ctx.verdict, ["debordement","recouvreCartouche","gapSousCartouche"]) : null,
      label:"Verticale : "+Math.round(st.bubbleY || 0)+" %", min:0, max:100, value:st.bubbleY || 0,
      onChange:function(v){ ctx.set("bubbleY", Math.round(v)); }}),
    e(Shell.ui.SliderField, {label:"Largeur : "+Math.round(st.bubbleW || 70)+" %", min:30, max:92, value:st.bubbleW || 70,
      onChange:function(v){ ctx.set("bubbleW", Math.round(v)); }}),
    (ctx.mesures.garde && ctx.mesures.garde.remonteAuto > 0)
      ? e("div", {className:"charte-warn info", style:{marginTop:4}},
          e("span", null, "ℹ"), e("span", null, "Bulle remontée automatiquement de "+ctx.mesures.garde.remonteAuto+
            " px pour laisser la place à la flèche de carrousel.")) : null,
    e("button", {className:"mini-btn", style:{marginTop:6},
      onClick:function(){ ctx.setSt(function(prev){ var c = Object.assign({}, prev);
        c.bubbleX = D.bubbleX; c.bubbleY = D.bubbleY; c.bubbleW = D.bubbleW; return c; }); }}, "Position par défaut"),

    e("div", {style:{height:16}}),
    e("label", {className:"field-label", style:{display:"flex",alignItems:"center",gap:6}}, "Pointe",
      Info("La pointe est un triangle rectangle : un côté descend à la verticale, l'autre est l'hypoténuse. Sa position est conservée quand elle change de côté.")),
    e(Shell.ui.SegButtons, {value:st.tailSide || "bottom", onChange:function(v){ ctx.set("tailSide", v); },
      options:[{v:"top",l:"↑ En haut"},{v:"bottom",l:"↓ En bas"}]}),
    e("div", {style:{height:8}}),
    e(Shell.ui.SliderField, {label:"Position sur la bulle : "+Math.round(st.tailPos === undefined ? 50 : st.tailPos)+" %",
      min:0, max:100, value:st.tailPos === undefined ? 50 : st.tailPos, onChange:function(v){ ctx.set("tailPos", Math.round(v)); }}),
    e("label", {className:"field-label"}, "Côté vertical de la pointe"),
    e(Shell.ui.SegButtons, {value:st.tailMirror ? "droite" : "gauche", onChange:function(v){ ctx.set("tailMirror", v === "droite"); },
      options:[{v:"gauche",l:"À gauche"},{v:"droite",l:"À droite"}]}),

    e("div", {style:{height:16}}),
    e("label", {className:"field-label", style:{display:"flex",alignItems:"center",gap:6}}, "Ombre portée",
      Info("L'étendue règle le flou ; le décalage vertical suit la même proportion, pour que l'ombre reste cohérente à toutes les tailles.")),
    e(Shell.ui.SliderField, {label:"Étendue : "+g.spread+" px"+(g.spread === g.spreadDefaut ? " (référence)" : ""),
      min:0, max:40, value:g.spread, onChange:function(v){ ctx.set("shadowSpread", Math.round(v)); }}),
    e(Shell.ui.SliderField, {label:"Intensité : "+g.opacite+" %"+(g.opacite === g.opaciteDefaut ? " (référence)" : ""),
      min:0, max:60, value:g.opacite, onChange:function(v){ ctx.set("shadowOpacity", Math.round(v)); }}),
    e("button", {className:"mini-btn", style:{marginTop:6},
      onClick:function(){ ctx.setSt(function(prev){ var c = Object.assign({}, prev);
        c.shadowSpread = g.spreadDefaut; c.shadowOpacity = g.opaciteDefaut; return c; }); }}, "Valeurs de la référence"));
}

/* ── Affirmation ── */
function Affirmation(p){
  var ctx = p.ctx, st = ctx.st, g = ctx.d, f = ctx.format, G = window.SPGGuard;
  return e(React.Fragment, null,
    e("div", {className:"upload-hint", style:{marginBottom:6}},
      "Les guillemets sont ajoutés automatiquement.  ", e("b", null, "**mot**"), " = surlignage"),
    e("textarea", {spellCheck:true, rows:4, value:st.quote || "", style:{fontSize:13,lineHeight:1.5},
      onChange:function(ev){ ctx.set("quote", ev.target.value); }}),
    e("div", {style:{height:12}}),
    e(Shell.ui.SliderField, {alerte:G ? G.pour(ctx.verdict, ["tailleTexte"].concat(G.CAUSES_HAUTEUR)) : null,
      label:"Taille du texte : "+g.fs+" px"+(st["fs_"+f] ? "" : " (défaut)"),
      min:g.QUOTE_MIN, max:g.QUOTE_MAX, value:g.fs, onChange:function(v){ ctx.set("fs_"+f, Math.round(v)); }}),
    e("button", {className:"mini-btn", style:{marginTop:4}, onClick:function(){ ctx.set("fs_"+f, 0); }}, "Taille par défaut"));
}

/* ── Référence au commentaire ── */
function Reference(p){
  var ctx = p.ctx, st = ctx.st;
  function champ(lib, cle, ph, ortho){
    return e(React.Fragment, null,
      e("label", {className:"field-label"}, lib),
      e("input", {type:"text", spellCheck:!!ortho, value:st[cle] || "", placeholder:ph,
        onChange:function(ev){ ctx.set(cle, ev.target.value); }}),
      e("div", {style:{height:8}}));
  }
  return e(React.Fragment, null,
    e("div", {className:"hint", style:{marginBottom:10}}, "Ligne grise sous l'affirmation. Le pseudo est mis en gras automatiquement."),
    champ("Avant le pseudo", "replyPrefix", "Replying to", true),
    champ("Pseudo", "replyHandle", "@dune.andink's", false),
    champ("Après le pseudo", "replySuffix", "comment", true),
    e("div", {style:{height:6}}),
    e("label", {className:"field-label"}, "Photo de l'auteur (facultatif)"),
    e(FileDrop, {value:st.avatar, placeholder:"Photo ronde", onChange:function(v){ ctx.set("avatar", v || null); }}),
    st.avatar
      ? e("div", {style:{marginTop:8}},
          e(Shell.ui.SliderField, {label:"Diamètre : "+(st.avatarTaille || 72)+" px", value:st.avatarTaille || 72, min:40, max:140, step:2,
            onChange:function(v){ ctx.set("avatarTaille", v); }}))
      : e("div", {className:"hint", style:{marginTop:6}}, "Sans photo, la ligne reste telle quelle."));
}

SPGPanneau.definir("totallytrue", {
  derives:function(ctx){ return CARD().geometry(ctx.st); },
  miseEnPage:[
    {bloc:"cartouche"}, "repere",
    "couleurs",
    "fond",
    {titre:"Bulle", Rendu:Bulle}
  ],
  contenu:[
    {titre:"Affirmation", Rendu:Affirmation},
    {titre:"Référence au commentaire", Rendu:Reference}
  ]
});
})();
