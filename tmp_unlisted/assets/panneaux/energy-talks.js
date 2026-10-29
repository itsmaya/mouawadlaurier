/* ═══ Panneau Energy Talks ════════════════════════════════════════════════
   Format spécial (jamais dans le Carrousel). Mêmes règles que les autres :
   les options communes viennent de assets/panneau.js.                    */
(function(){
function e(){ return React.createElement.apply(React, arguments); }
var CARD = function(){ return SPGCards.get("energytalks"); };
function Info(t){ return Shell.ui.Info ? e(Shell.ui.Info, {texte:t}) : null; }
function lab(t, info){ return e("label", {className:"field-label", style:{display:"flex",alignItems:"center",gap:6}}, t, info ? Info(info) : null); }

var POIDS = [{v:400,l:"Normal"},{v:600,l:"Semi-gras"},{v:700,l:"Gras"}];
function selPoids(ctx, cle, defaut){
  return e(Shell.ui.SegButtons, {value:(ctx.st[cle] || defaut), options:POIDS, onChange:function(v){ ctx.set(cle, v); }});
}

/* ── Type d'émission ── */
function Emission(p){
  var ctx = p.ctx;
  return e(Shell.ui.SegButtons, {value:ctx.st.variante || "podcast",
    options:[{v:"podcast",l:"🎙️ Podcast"},{v:"live",l:"🔴 Live"}], onChange:function(v){ ctx.set("variante", v); }});
}

/* ── Logo et vignette Live / Podcast ── */
function Logo(p){
  var ctx = p.ctx;
  return e(React.Fragment, null,
    lab("Logo Energy Talks", "PNG transparent officiel. Tant qu'il est absent, le lettrage est reconstruit typographiquement."),
    e(FileDrop, {value:ctx.st.logoSrc, placeholder:"Logo ENERGYTALKS", onChange:function(v){ ctx.set("logoSrc", v || null); }}),
    e("div", {style:{height:12}}),
    lab("Vignette Live / Podcast", "Extraite du fichier Illustrator. Dépose ici une autre version si besoin."),
    e(FileDrop, {value:ctx.st.badgeSrc, placeholder:"Pastille", onChange:function(v){ ctx.set("badgeSrc", v || null); }}));
}

/* ── Position de la vignette ── */
function PositionVignette(p){
  var ctx = p.ctx, st = ctx.st, LD = ctx.d.LDEF, fm = ctx.format, ech = (st.badgeEchelle || 100)/100;
  var dx0 = LD.badgeX-LD.logoX, dy0 = LD.badgeY-LD.logoY;
  var dx = st["badgeDX_"+fm] !== undefined ? st["badgeDX_"+fm] : dx0;
  var dy = st["badgeDY_"+fm] !== undefined ? st["badgeDY_"+fm] : dy0;
  var xMin = -LD.logoX, xMax = Math.round(LD.W-LD.badgeW*ech-LD.logoX);
  var yMin = -LD.logoY, yMax = Math.round(LD.H-LD.badgeH*ech-LD.logoY);
  var rot = st.badgeRot !== undefined ? st.badgeRot : (st.variante === "live" ? -12 : 0);
  return e(React.Fragment, null,
    lab("Réglages fins", "La vignette se cale sur le coin haut-droit du logo. Ajuste ici si elle n'est pas exactement au bon endroit."),
    e("div", {style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 12px"}},
      e(Shell.ui.SliderField, {label:"Décalage X : "+Math.round(dx)+" px", min:xMin, max:xMax, step:2,
        value:Math.max(xMin, Math.min(xMax, dx)), onChange:function(v){ ctx.set("badgeDX_"+fm, Math.round(v)); }}),
      e(Shell.ui.SliderField, {label:"Décalage Y : "+Math.round(dy)+" px", min:yMin, max:yMax, step:2,
        value:Math.max(yMin, Math.min(yMax, dy)), onChange:function(v){ ctx.set("badgeDY_"+fm, Math.round(v)); }})),
    e(Shell.ui.SliderField, {label:"Inclinaison : "+rot+"°", min:-30, max:30, value:rot, onChange:function(v){ ctx.set("badgeRot", Math.round(v)); }}),
    e(Shell.ui.SliderField, {label:"Taille : "+(st.badgeEchelle || 100)+" %", min:50, max:180, step:2, value:st.badgeEchelle || 100,
      onChange:function(v){ ctx.set("badgeEchelle", Math.round(v)); }}),
    e("button", {className:"mini-btn", style:{marginTop:6},
      onClick:function(){ ctx.setSt(function(prev){ var c = Object.assign({}, prev);
        delete c.badgeDX; delete c.badgeDY; delete c["badgeDX_"+prev.format]; delete c["badgeDY_"+prev.format]; delete c.badgeRot;
        c.badgeEchelle = 100; return c; }); }}, "Position automatique"));
}

/* ── Dégradé transparent posé sur la photo ── */
function DegradeTransparent(p){
  var ctx = p.ctx, D = CARD().GRAD_DEFAUT, G = ctx.st.etGrad || D;
  function maj(cle, val){ ctx.setSt(function(prev){
    return Object.assign({}, prev, {etGrad:Object.assign({}, prev.etGrad || D, {[cle]:val})}); }); }
  function couleur(lib, cle){
    return e("div", null, e("label", {className:"field-label"}, lib),
      e("input", {type:"color", value:G[cle] || D[cle], style:{width:"100%",height:34,padding:0,border:"1px solid #ddd",borderRadius:6},
        onChange:function(ev){ maj(cle, ev.target.value); }}));
  }
  var angle = G.angle !== undefined ? G.angle : D.angle, op = G.opacite !== undefined ? G.opacite : D.opacite;
  return e(React.Fragment, null,
    lab("Couleurs", "Posé par dessus la photo. Valeurs par défaut relevées sur les visuels Energy Talks."),
    e("div", {style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 12px"}}, couleur("Départ", "de"), couleur("Arrivée", "vers")),
    e(Shell.ui.SliderField, {label:"Angle : "+angle+"°", min:0, max:360, value:angle, onChange:function(v){ maj("angle", Math.round(v)); }}),
    e(Shell.ui.SliderField, {label:"Intensité : "+op+" %", min:0, max:100, value:op, onChange:function(v){ maj("opacite", Math.round(v)); }}),
    e("button", {className:"mini-btn", style:{marginTop:6}, onClick:function(){ ctx.set("etGrad", Object.assign({}, D)); }},
      "Réinitialiser le dégradé"));
}

/* ── Pilule d'édition (« U.S. Edition ») ── */
function Edition(p){
  var ctx = p.ctx, st = ctx.st;
  return e(React.Fragment, null,
    e("label", {className:"field-label"}, "Texte"),
    e("input", {type:"text", spellCheck:true, value:st.editionTexte || "", placeholder:"ex : U.S. Edition",
      onChange:function(ev){ ctx.set("editionTexte", ev.target.value); }}),
    e("div", {className:"hint", style:{margin:"4px 0 8px"}}, "Laisse vide pour masquer la pilule."),
    e("label", {className:"field-label"}, "Style de la pilule"),
    e(Shell.ui.SegButtons, {value:st.editionStyle || "degrade", onChange:function(v){ ctx.set("editionStyle", v); },
      options:[{v:"degrade",l:"Bleu Energy Talks"},{v:"charte",l:"Dégradé charte"},{v:"blanc",l:"Blanc"}]}),
    st.editionStyle === "charte" ? e(React.Fragment, null,
      e("label", {className:"field-label", style:{marginTop:8}}, "Dégradé"),
      e(Shell.ui.GradPicker, {value:st.editionGrad || "bleu", onChange:function(v){ ctx.set("editionGrad", v); }})) : null,
    st.editionStyle === "blanc" ? e(React.Fragment, null,
      e("label", {className:"toggle", style:{margin:"8px 0"}},
        e("input", {type:"checkbox", checked:!!st.editionTexteGrad,
          onChange:function(ev){ ctx.set("editionTexteGrad", ev.target.checked ? (st.editionGrad || "bleu") : ""); }}),
        "Texte en dégradé"),
      st.editionTexteGrad ? e(Shell.ui.GradPicker, {value:st.editionTexteGrad,
        onChange:function(v){ ctx.set("editionTexteGrad", v); ctx.set("editionGrad", v); }}) : null) : null,
    e("label", {className:"field-label", style:{marginTop:8}}, "Graisse du texte"),
    selPoids(ctx, "editionGraisse", 600),
    e("label", {className:"field-label", style:{marginTop:8}}, "Drapeau (emoji, optionnel)"),
    e("input", {type:"text", value:st.editionDrapeau || "", placeholder:"🇺🇸", onChange:function(ev){ ctx.set("editionDrapeau", ev.target.value); }}));
}

/* ── Titre et sous-titre ── */
function Titre(p){
  var ctx = p.ctx, st = ctx.st, LD = ctx.d.LDEF, f = ctx.format, WMAX = LD.W-2*LD.margeG;
  var tw = Math.min(st["titreLargeur_"+f] || st.titreLargeur || LD.titreMaxW, WMAX);
  var sw = Math.min(st["sousTitreLargeur_"+f] || Math.round(LD.W*0.5), WMAX);
  return e(React.Fragment, null,
    e("label", {className:"field-label"}, "Titre ", e("span", {className:"hint"}, "(Entrée = retour à la ligne)")),
    e("textarea", {spellCheck:true, rows:3, value:st.titre || "", style:{fontSize:13,lineHeight:1.5},
      onChange:function(ev){ ctx.set("titre", ev.target.value); }}),
    e(Shell.ui.SliderField, {label:"Taille du titre : "+(st.titreTaille || LD.titreFont)+" px", min:40, max:110,
      value:st.titreTaille || LD.titreFont, onChange:function(v){ ctx.set("titreTaille", Math.round(v)); }}),
    e(Shell.ui.SliderField, {label:"Largeur du titre ("+f+") : "+tw+" px", min:300, max:WMAX, step:5, value:tw,
      onChange:function(v){ ctx.set("titreLargeur_"+f, Math.round(v)); }}),
    e("label", {className:"toggle", style:{margin:"8px 0"}},
      e("input", {type:"checkbox", checked:st["retours_"+f] !== false, onChange:function(ev){ ctx.set("retours_"+f, ev.target.checked); }}),
      "Respecter mes retours à la ligne (ce format)",
      Info("Décoché : le texte passe à la ligne tout seul selon la largeur. Réglé séparément pour chaque format.")),
    e("label", {className:"field-label", style:{marginTop:8}}, "Sous-titre (optionnel)"),
    e("textarea", {spellCheck:true, rows:2, value:st.sousTitre || "", style:{fontSize:13,lineHeight:1.5},
      placeholder:"ex : L'innovation pour répondre aux enjeux…", onChange:function(ev){ ctx.set("sousTitre", ev.target.value); }}),
    e(Shell.ui.SliderField, {label:"Largeur du sous-titre ("+f+") : "+sw+" px", min:300, max:WMAX, step:5, value:sw,
      onChange:function(v){ ctx.set("sousTitreLargeur_"+f, Math.round(v)); }}),
    e(Shell.ui.SliderField, {label:"Taille du sous-titre : "+(st.sousTitreTaille || Math.round(LD.titreFont*0.48))+" px", min:20, max:70,
      value:st.sousTitreTaille || Math.round(LD.titreFont*0.48), onChange:function(v){ ctx.set("sousTitreTaille", Math.round(v)); }}),
    e("button", {className:"mini-btn", style:{marginTop:6},
      onClick:function(){ ctx.setSt(function(prev){ var c = Object.assign({}, prev);
        delete c.titreTaille; delete c.sousTitreTaille; delete c.titreLargeur; delete c["titreLargeur_"+prev.format];
        delete c["sousTitreLargeur_"+prev.format]; return c; }); }}, "Tailles par défaut"));
}

/* ── Intervenants ── */
function Intervenants(p){
  var ctx = p.ctx, st = ctx.st, LD = ctx.d.LDEF, gens = st.intervenants || [];
  var d0 = React.useState(null), detour = d0[0], setDetour = d0[1];
  function maj(i, cle, val){ ctx.setSt(function(prev){ var a = (prev.intervenants || []).slice();
    a[i] = Object.assign({}, a[i], {[cle]:val}); return Object.assign({}, prev, {intervenants:a}); }); }
  function ajouter(){ if(gens.length >= 4) return; ctx.setSt(function(prev){
    return Object.assign({}, prev, {intervenants:(prev.intervenants || []).concat([etNouvelIntervenant()])}); }); }
  function supprimer(i){ if(gens.length <= 1 || !confirm("Supprimer l'intervenant "+(i+1)+" ?")) return;
    ctx.setSt(function(prev){ var a = (prev.intervenants || []).slice(); a.splice(i,1); return Object.assign({}, prev, {intervenants:a}); }); }
  function deplacer(i, d){ var j = i+d; if(j < 0 || j >= gens.length) return;
    ctx.setSt(function(prev){ var a = (prev.intervenants || []).slice(); var t = a[i]; a[i] = a[j]; a[j] = t;
      return Object.assign({}, prev, {intervenants:a}); }); }
  /* Détourage : même moteur que Fiche Métier (rmbg.js), contour blanc en pixels réels. */
  function detourer(i){
    var it = gens[i], src = it.photoRaw || it.photo;
    if(!src){ alert("Charge d'abord une photo."); return; }
    if(!SPGRmbg.disponible()){ alert("Le module de détourage n'est pas encore chargé, réessaie dans quelques secondes."); return; }
    setDetour(i);
    SPGRmbg.detourer(src)
      .then(function(png){ return SPGRmbg.contourBlanc(png, 0.012); })
      .then(function(png){
        ctx.setSt(function(prev){ var a = (prev.intervenants || []).slice();
          a[i] = Object.assign({}, a[i], {photo:png, photoRaw:a[i].photoRaw || src}); return Object.assign({}, prev, {intervenants:a}); });
        setDetour(null); })
      .catch(function(err){ alert("Détourage impossible : "+err.message); setDetour(null); });
  }
  return e(React.Fragment, null,
    e("div", {className:"hint", style:{marginBottom:10}},
      "De 1 à 4 intervenants. Les portraits se répartissent automatiquement en bas à droite, les noms s'empilent en bas à gauche."),
    e("label", {className:"toggle", style:{margin:"0 0 8px"}},
      e("input", {type:"checkbox", checked:!!st.fonctionDegrade, onChange:function(ev){ ctx.set("fonctionDegrade", ev.target.checked); }}),
      "Fonction en texte dégradé"),
    st.fonctionDegrade ? e(Shell.ui.GradPicker, {value:st.fonctionGrad || "bleu", onChange:function(v){ ctx.set("fonctionGrad", v); }}) : null,
    e("div", {style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 12px",margin:"8px 0 4px"}},
      e("div", null, e("label", {className:"field-label"}, "Graisse du nom"), selPoids(ctx, "nomGraisse", 700)),
      e("div", null, e("label", {className:"field-label"}, "Graisse fonction"), selPoids(ctx, "fonctionGraisse", 700))),
    gens.map(function(it, i){
      var gp = window.etGeomPortrait(LD, window.etDispositionPhotos(LD, gens.length)[i], it);
      return e("div", {key:it.id || i, style:{border:"1px solid #e4e4e2",borderRadius:8,padding:10,margin:"10px 0",background:"#fbfbfa"}},
        e("div", {style:{display:"flex",gap:6,alignItems:"center",marginBottom:8}},
          e("span", {style:{fontSize:11,fontWeight:800,color:"#888",flex:1}}, "INTERVENANT "+(i+1)),
          e("button", {className:"mini-btn", disabled:i === 0, onClick:function(){ deplacer(i,-1); }}, "↑"),
          e("button", {className:"mini-btn", disabled:i >= gens.length-1, onClick:function(){ deplacer(i,1); }}, "↓"),
          e("button", {className:"mini-btn", disabled:gens.length <= 1, onClick:function(){ supprimer(i); }}, "×")),
        e(FileDrop, {value:it.photo, placeholder:"Portrait", onChange:function(v){
          ctx.setSt(function(prev){ var a = (prev.intervenants || []).slice();
            a[i] = Object.assign({}, a[i], {photo:v || null, photoRaw:v || null}); return Object.assign({}, prev, {intervenants:a}); }); }}),
        e("button", {onClick:function(){ detourer(i); }, disabled:detour !== null,
          style:{width:"100%",marginTop:8,fontSize:13,fontWeight:700,padding:"9px",borderRadius:7,border:"1px solid #d4d4d4",
            background:detour === i ? "#f5f5f5" : "#fff",cursor:detour !== null ? "default" : "pointer",fontFamily:"inherit"}},
          detour === i ? "⏳ Détourage en cours…" : "✨ Détourer le portrait (IA)"),
        (it.photoRaw && it.photo !== it.photoRaw) ? e("button", {className:"mini-btn", style:{marginTop:6},
          onClick:function(){ maj(i, "photo", it.photoRaw); }}, "Revenir à la photo d'origine") : null,
        e("label", {className:"field-label", style:{marginTop:8}}, "Nom"),
        e("input", {type:"text", spellCheck:true, value:it.nom || "", onChange:function(ev){ maj(i, "nom", ev.target.value); }}),
        e("label", {className:"field-label", style:{marginTop:8}}, "Fonction"),
        e("input", {type:"text", spellCheck:true, value:it.fonction || "", onChange:function(ev){ maj(i, "fonction", ev.target.value); }}),
        e("div", {style:{height:8}}),
        e(Shell.ui.SliderField, {label:"Taille du portrait : "+(it.zoom || 100)+" %", min:40, max:200, value:it.zoom || 100,
          onChange:function(v){ maj(i, "zoom", Math.round(v)); }}),
        e(Shell.ui.SliderField, {label:"Position horizontale : "+Math.round(gp.posX)+" %", min:0, max:100, value:Math.round(gp.posX),
          onChange:function(v){ maj(i, "posX", Math.round(v)); }}),
        e(Shell.ui.SliderField, {label:"Descendre le portrait : "+Math.round(gp.descente)+" %", min:gp.minDescente, max:100,
          value:Math.round(gp.descente), onChange:function(v){ maj(i, "descente", Math.round(v)); }}),
        e("div", {className:"hint", style:{marginTop:4}}, "Le portrait reste posé en bas et dans la carte : il peut seulement être coupé davantage vers le bas."),
        (it.posX != null || it.descente) ? e("button", {className:"mini-btn", style:{marginTop:6},
          onClick:function(){ maj(i, "posX", null); maj(i, "descente", 0); }}, "Position automatique") : null);
    }),
    e("button", {className:"mini-btn", style:{width:"100%",marginTop:4}, disabled:gens.length >= 4, onClick:ajouter},
      gens.length >= 4 ? "Maximum atteint (4)" : "+ Ajouter un intervenant"));
}

SPGPanneau.definir("energytalks", {
  derives:function(ctx){ var C = CARD(); return {LDEF:C.LAYOUT[ctx.format] || C.LAYOUT["1x1"]}; },
  miseEnPage:[
    {titre:"Type d'émission", Rendu:Emission},
    {titre:"Logo et vignette", Rendu:Logo},
    {titre:"Position de la vignette", Rendu:PositionVignette},
    {bloc:"fond", titre:"Photo de fond", modes:["photo"], indicationPhoto:"Dépose une photo de studio ou de plateau."},
    {titre:"Dégradé transparent", Rendu:DegradeTransparent}
  ],
  contenu:[
    {titre:"Édition", Rendu:Edition},
    {titre:"Titre", Rendu:Titre},
    {titre:"Intervenants", Rendu:Intervenants}
  ]
});
})();
