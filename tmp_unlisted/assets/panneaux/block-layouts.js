/* ═══ Panneau Block Layouts ═══════════════════════════════════════════════
   Utilisé par generators/block-layouts/ ET par le Carrousel.            */
(function(){
function e(){ return React.createElement.apply(React, arguments); }
var CARD = function(){ return SPGCards.get("blocklayouts"); };
function TOL(){ return (CHARTE.composition && CHARTE.composition.tolerance) || 0.2; }

/* ── Un bloc (chiffre clé ou texte) ── */
function EditeurBloc(p){
  var ctx = p.ctx, st = ctx.st, b = p.b, i = p.i, blocks = st.blocks || [];
  function majId(id, patch){ ctx.setSt(function(prev){ var c = Object.assign({}, prev);
    c.blocks = prev.blocks.map(function(x){ return x.id === id ? Object.assign({}, x, patch) : x; }); return c; }); }
  function maj(patch){ majId(b.id, patch); }
  function deplacer(dir){ ctx.setSt(function(prev){ var c = Object.assign({}, prev);
    var arr = prev.blocks.slice(), j = i+dir; if(j < 0 || j >= arr.length) return prev;
    var t = arr[i]; arr[i] = arr[j]; arr[j] = t; c.blocks = arr; return c; }); }
  function retirer(){ ctx.setSt(function(prev){ var c = Object.assign({}, prev);
    c.blocks = prev.blocks.filter(function(x){ return x.id !== b.id; }); return c; }); }

  /* Largeur : rangée à deux colonnes = répartition (portée par le bloc de
     gauche, réglable des deux côtés) ; bloc seul = largeur simple. */
  var estG = (b.col === "left"), estD = (b.col === "right");
  var appariee = estG ? (i+1 < blocks.length && blocks[i+1].col === "right")
                      : (estD && i > 0 && blocks[i-1].col === "left");
  var largeur;
  if(appariee){
    var porteur = estG ? b : blocks[i-1], pct = porteur.widthPct || 50;
    largeur = e(React.Fragment, null,
      e(Shell.ui.SliderField, {label:"Répartition : gauche "+pct+" / droite "+(100-pct)+" %", min:30, max:70, step:5, value:pct,
        onChange:function(v){ majId(porteur.id, {widthPct:Math.round(v)}); }}),
      e("div", {className:"hint", style:{marginTop:2}}, "Réglable depuis les deux blocs de la rangée."));
  } else {
    largeur = e(React.Fragment, null,
      e(Shell.ui.SliderField, {label:"Largeur du bloc : "+(b.widthPct ? b.widthPct+" %" : "automatique"),
        min:0, max:100, step:5, value:b.widthPct || 0, onChange:function(v){ maj({widthPct:Math.round(v)}); }}),
      (estG || estD) ? e("div", {className:"hint", style:{marginTop:2}},
        "Bloc seul sur sa rangée : associe-le à un bloc "+(estG ? "« Droite »" : "« Gauche »")+" pour obtenir deux colonnes.") : null);
  }

  return e("div", {style:{border:"1px solid #e4e4e2",borderRadius:8,padding:10,marginBottom:10,background:"#fbfbfa"}},
    e("div", {style:{display:"flex",alignItems:"center",gap:6,marginBottom:8}},
      e("span", {style:{fontSize:11,fontWeight:800,color:"#888",flex:1}}, "BLOC "+(i+1)),
      e("button", {className:"mini-btn", onClick:function(){ deplacer(-1); }}, "▲"),
      e("button", {className:"mini-btn", onClick:function(){ deplacer(1); }}, "▼"),
      e("button", {className:"mini-btn", style:{color:"#c0392b"}, onClick:retirer}, "×")),
    e(Shell.ui.SegButtons, {value:b.kind, onChange:function(v){ maj({kind:v}); },
      options:[{v:"figure",l:"Chiffre clé"},{v:"body",l:"Texte"}]}),
    b.kind === "figure" ? e(React.Fragment, null,
      e("div", {style:{height:8}}),
      e("label", {className:"field-label"}, "Chiffre"),
      e("input", {type:"text", value:b.callout || "", onChange:function(ev){ maj({callout:ev.target.value}); }}),
      e("div", {style:{height:8}}),
      e("label", {className:"field-label"}, "Position du chiffre"),
      e(Shell.ui.SegButtons, {value:b.calloutPos || "top", onChange:function(v){ maj({calloutPos:v}); },
        options:[{v:"top",l:"↑ Au-dessus"},{v:"bottom",l:"↓ En dessous"}]})) : null,
    e("div", {style:{height:8}}),
    e("label", {className:"field-label"}, b.kind === "figure" ? "Libellé (**mot** = surlignage)" : "Texte (**mot** = surlignage)"),
    e("textarea", {spellCheck:true, rows:2, value:b.text || "", onChange:function(ev){ maj({text:ev.target.value}); }}),
    e("div", {style:{height:8}}),
    e("label", {className:"field-label"}, "Position"),
    e(Shell.ui.SegButtons, {value:b.col || "full", onChange:function(v){ maj({col:v}); },
      options:[{v:"full",l:"Pleine largeur"},{v:"left",l:"← Gauche"},{v:"right",l:"Droite →"}]}),
    e("div", {style:{height:8}}),
    largeur,
    e("div", {style:{height:8}}),
    e(Shell.ui.PictoSelect, {value:b.iconKey || null, label:"Pictogramme du bloc",
      onChange:function(k){ maj({iconKey:k, iconSrc:null}); }}),
    e("div", {style:{height:8}}),
    e("label", {className:"toggle", style:{marginBottom:6}},
      e("input", {type:"checkbox", checked:!!b.inverted, onChange:function(ev){ maj({inverted:ev.target.checked}); }}),
      "Inverser couleurs"),
    e("label", {className:"field-label"}, "Dégradé du bloc"),
    e("select", {value:b.gradKey || "auto", onChange:function(ev){ maj({gradKey:ev.target.value}); },
      style:{width:"100%",fontSize:12,padding:"6px",borderRadius:6,border:"1px solid #d4d4d4",fontFamily:"inherit"}},
      e("option", {value:"auto"}, "Auto (dégradé du visuel)"),
      Object.keys(GRADS).map(function(k){ return e("option", {key:k, value:k}, GRADS[k].label); })));
}

function Blocs(p){
  var ctx = p.ctx, st = ctx.st, B = CHARTE.components.block, NB = CARD().newBlock;
  function ajouter(kind){ ctx.setSt(function(prev){ var c = Object.assign({}, prev);
    c.blocks = prev.blocks.concat([NB(kind)]); return c; }); }
  return e(React.Fragment, null,
    e("div", {className:"hint", style:{marginBottom:10}},
      "4 blocs max (2-3 en story). Un bloc « ← Gauche » suivi d'un « Droite → » forme une rangée de deux colonnes."),
    (st.blocks || []).map(function(b, i){ return e(EditeurBloc, {key:b.id, ctx:ctx, b:b, i:i}); }),
    (st.blocks || []).length < B.maxBlocks
      ? e("div", {style:{display:"flex",gap:8,marginBottom:4}},
          e("button", {className:"mini-btn", onClick:function(){ ajouter("figure"); }}, "+ Chiffre clé"),
          e("button", {className:"mini-btn", onClick:function(){ ajouter("body"); }}, "+ Bloc texte"))
      : e("div", {className:"hint"}, "Maximum charte atteint (4 blocs)."));
}

/* ── Tailles et espacements ── */
function Composition(p){
  var ctx = p.ctx, st = ctx.st, g = ctx.d, f = ctx.format, v = ctx.verdict, t = TOL();
  var CAL = chTypo("blockLayout","callout"), BOD = chTypo("blockLayout","body");
  var G = window.SPGGuard;
  function al(ids){ return G ? G.pour(v, ids) : null; }
  var stackH = ctx.mesures.stackH || 0;
  return e(React.Fragment, null,
    e("label", {className:"field-label"}, "Alignement des blocs"),
    e(Shell.ui.SegButtons, {value:st.blocksAlign || "left", onChange:function(x){ ctx.set("blocksAlign", x); },
      options:[{v:"left",l:"← Gauche"},{v:"right",l:"Droite →"}]}),
    e("div", {style:{height:12}}),
    e(Shell.ui.SliderField, {label:"Taille du chiffre : "+g.calloutSize+" pt (charte "+CAL.min+"-"+CAL.max+")",
      alerte:al(["tailleCallout"].concat(G ? G.CAUSES_HAUTEUR : [])),
      min:Math.round(CAL.min*(1-t)), max:Math.round(CAL.max*(1+t)), value:g.calloutSize,
      onChange:function(x){ ctx.set("cs_"+f, Math.round(x)); }}),
    e(Shell.ui.SliderField, {label:"Taille du texte : "+g.bodySize+" pt (charte "+BOD.min+"-"+BOD.max+")",
      alerte:al(["tailleCorps"]),
      min:Math.round(BOD.min*(1-t)), max:Math.round(BOD.max*(1+t)), value:g.bodySize,
      onChange:function(x){ ctx.set("bs_"+f, Math.round(x)); }}),
    e(Shell.ui.SliderField, {label:"Remonter les blocs : "+g.off+" px",
      min:0, max:Math.max(0, stackH ? g.CH-stackH-g.ctaBottom-200 : 400), value:g.off,
      onChange:function(x){ ctx.set("off_"+f, Math.round(x)); }}),
    e(Shell.ui.SliderField, {label:"Écart entre les blocs : "+g.gapY+" px"+(g.gapY === g.gapCharte ? " (charte)" : " · charte "+g.gapCharte),
      alerte:al(["ecartBlocs"]),
      min:Math.round(g.gapCharte*(1-t)), max:Math.round(g.gapCharte*(1+t)), step:2, value:g.gapY,
      onChange:function(x){ ctx.set("gap_"+f, Math.round(x)); }}),
    e(Shell.ui.SliderField, {label:"Marge intérieure des blocs : "+g.padBloc+" px"+(g.padBloc === g.padCharte ? " (charte)" : " · charte "+g.padCharte),
      alerte:al(["paddingBloc"]),
      min:Math.round(g.padCharte*(1-t)), max:Math.round(g.padCharte*(1+t)), step:2, value:g.padBloc,
      onChange:function(x){ ctx.set("pad_"+f, Math.round(x)); }}),
    e("button", {className:"mini-btn", style:{marginTop:6},
      onClick:function(){ ctx.setSt(function(prev){ var c = Object.assign({}, prev); c["gap_"+f] = 0; c["pad_"+f] = 0; return c; }); }},
      "Revenir aux valeurs de charte"));
}

SPGPanneau.definir("blocklayouts", {
  formats:["1x1","4x5","9x16","16x9"],
  derives:function(ctx){ return CARD().geometry(ctx.st); },
  /* Règles de composition (nombre de blocs, surface d'image, un dégradé). */
  avertissements:function(ctx){
    var st = ctx.st, g = ctx.d, used = {}; used[st.grad] = 1;
    (st.blocks || []).forEach(function(b){ if(b.gradKey && b.gradKey !== "auto") used[b.gradKey] = 1; });
    var h = ctx.mesures.stackH || 0;
    return Shell.validate({lowCarbon:st.lowCarbon, gradKey:st.grad, nBlocks:(st.blocks || []).length, isStory:g.story,
      gradientsUsed:Object.keys(used).length, bgKind:g.bgKind,
      imageCoverage:(g.bgKind === "photo" && h > 0) ? (h*g.stackMaxW)/(g.CW*g.CH) : undefined})
      .filter(function(w){ return !(w.id === "low-carbon-no-red" || w.id === "low-carbon-green"); });
  },
  miseEnPage:[
    {bloc:"cartouche", majuscules:false}, "repere",
    "couleurs",
    {bloc:"fond", indications:{
      grad:"Sur aplat dégradé, les blocs sont blancs avec typo dégradée ; la cartouche et la flèche passent en filet blanc (charte p35).",
      white:"Sur fond blanc, les blocs prennent le dégradé et la typo passe en blanc (charte p35)."}}
  ],
  contenu:[
    {titre:"Blocs", Rendu:Blocs},
    {titre:"Tailles et espacements", Rendu:Composition}
  ]
});
})();
