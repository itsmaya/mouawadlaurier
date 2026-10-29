/* ═══════════════════════════════════════════════════════════════════════════
   PANNEAU.JS — Moteur des panneaux de réglages
   Static Posts Generator Fisheye × TotalEnergies

   ┌─────────────────────────────────────────────────────────────────────────┐
   │  RÈGLE                                                                  │
   │  Une option de réglage est codée À UN SEUL ENDROIT.                      │
   │                                                                          │
   │  • Les options communes à plusieurs posts (cartouche, couleurs,          │
   │    marie-louise, image de fond, repère de carrousel…) sont des BLOCS     │
   │    déclarés ici avec SPGPanneau.bloc().                                  │
   │  • Chaque type de post déclare son panneau dans assets/panneaux/ avec    │
   │    SPGPanneau.definir() : la liste des blocs dont il a besoin, dans      │
   │    l'ordre, plus ses blocs propres (ses textes).                         │
   │  • La page du générateur ET le Carrousel affichent ce même panneau.      │
   │    Déplacer ou ajouter une option = une ligne, dans un seul fichier.     │
   └─────────────────────────────────────────────────────────────────────────┘

   Un bloc (commun ou propre à un type) :
     { titre   : "Couleurs" | null   (null = suit le bloc précédent, sans titre)
       cles    : ["grad",…]          clés d'état réglées ; si toutes sont
                                     imposées par le Carrousel (SPGCards.shared),
                                     le bloc disparaît dans une vignette
       visible : function(ctx,opts)  facultatif
       auFormat: function(etat,k)    facultatif : règle appliquée quand le
                                     format change (ex. marie-louise en story)
       Rendu   : composant React, reçoit {ctx, opts} }

   Le contexte (ctx) transmis à chaque bloc :
     st, set(k,v), setSt(fn), format, type, card (module de carte),
     vignette (true dans le Carrousel), actif (l'onglet est visible),
     mesures (hauteurs mesurées par la carte), verdict (garde-fou charte),
     d (valeurs dérivées calculées par la définition du type),
     bgStatus, bgNat, bgDir, maxZoom (image de fond)
   ═══════════════════════════════════════════════════════════════════════════ */
(function(global){

var BLOCS = {};
var TYPES = {};

var SPGPanneau = {
  bloc: function(id, def){ BLOCS[id] = def; return def; },
  definir: function(type, def){ TYPES[type] = def; return def; },
  get: function(type){ return TYPES[type] || null; },
  blocCommun: function(id){ return BLOCS[id] || null; }
};

/* ── Résolution d'un élément de liste ──────────────────────────────────────
   "couleurs"                         bloc commun sans option
   {bloc:"fond", modes:["photo"]}     bloc commun avec options
   {titre:"Texte", Rendu:fn}          bloc propre au type                    */
function resoudre(item){
  if(typeof item === "string"){
    var b = BLOCS[item];
    if(!b){ console.warn("SPGPanneau : bloc inconnu « "+item+" »"); return null; }
    return {def:b, opts:{}, id:item};
  }
  if(item && item.bloc){
    var c = BLOCS[item.bloc];
    if(!c){ console.warn("SPGPanneau : bloc inconnu « "+item.bloc+" »"); return null; }
    var o = Object.assign({}, item); delete o.bloc;
    return {def:Object.assign({}, c, item.titre!==undefined?{titre:item.titre}:{}), opts:o, id:item.bloc};
  }
  if(item && item.Rendu) return {def:item, opts:item.opts||{}, id:item.id||item.titre||"bloc"};
  return null;
}

/* Clés imposées par le Carrousel pour ce type de vignette. */
function imposees(ctx){
  if(ctx.imposees) return ctx.imposees;      /* liste exacte fournie par le Carrousel */
  return (global.SPGCards && SPGCards.sharedKeys) ? SPGCards.sharedKeys(ctx.type) : [];
}
function blocVisible(r, ctx){
  if(!r) return false;
  if(ctx.vignette && r.def.cles && r.def.cles.length){
    var imp = imposees(ctx);
    var libres = r.def.cles.filter(function(k){ return imp.indexOf(k) < 0; });
    if(!libres.length) return false;
  }
  if(ctx.vignette && r.opts.vignette === false) return false;
  if(r.def.visible && !r.def.visible(ctx, r.opts)) return false;
  return true;
}
/* Une clé est-elle réglable ici ? (fausse dans une vignette si le Carrousel
   l'impose). Les blocs s'en servent pour masquer une partie d'eux-mêmes. */
function reglable(ctx, cle){
  return !ctx.vignette || imposees(ctx).indexOf(cle) < 0;
}
SPGPanneau.reglable = reglable;

/* ── Rendu d'une liste de blocs ─────────────────────────────────────────── */
function Blocs(p){
  var e = React.createElement;
  var ctx = p.ctx;
  /* Un bloc sans titre suit le précédent. Si le précédent est masqué (ex. le
     dégradé, imposé par le Carrousel), son titre passe au bloc suivant. */
  var vus = [], titreEnAttente = null;
  (p.items||[]).map(resoudre).forEach(function(r){
    if(!r) return;
    var t = r.def.titre;
    if(!blocVisible(r, ctx)){ if(t) titreEnAttente = t; return; }
    if(t) titreEnAttente = null;
    else if(titreEnAttente){ r = Object.assign({}, r, {titreAffiche:titreEnAttente}); titreEnAttente = null; }
    vus.push(r);
  });
  return e(React.Fragment, null, vus.map(function(r, i){
    var t = r.titreAffiche || r.def.titre;
    return e(React.Fragment, {key:r.id+"_"+i},
      t ? e("h2", {className:"bloc-titre"}, typeof t==="function"?t(ctx,r.opts):t) : null,
      e(r.def.Rendu, {ctx:ctx, opts:r.opts}));
  }));
}
SPGPanneau.Blocs = Blocs;

/* Règles de changement de format portées par les blocs d'un type. */
function reglesFormat(def){
  var regles = [];
  (def.miseEnPage||[]).concat(def.contenu||[]).forEach(function(it){
    var r = resoudre(it);
    if(r && r.def.auFormat) regles.push(r.def.auFormat);
  });
  if(def.auFormat) regles.push(def.auFormat);
  return regles;
}
SPGPanneau.changerFormat = function(type, setSt, k){
  var def = TYPES[type] || {};
  var regles = reglesFormat(def);
  setSt(function(p){
    var c = Object.assign({}, p); c.format = k;
    regles.forEach(function(f){ f(c, k); });
    return c;
  });
};

/* ── Contexte complet d'un type ─────────────────────────────────────────── */
SPGPanneau.contexte = function(type, base){
  var def = TYPES[type] || {};
  var card = global.SPGCards ? SPGCards.get(type) : null;
  var ctx = Object.assign({
    type:type, card:card, vignette:false, actif:true,
    mesures:{}, verdict:[], bgStatus:{s:"idle"}, bgNat:{w:0,h:0}, bgDir:"", maxZoom:300
  }, base);
  ctx.format = ctx.st.format;
  ctx.d = def.derives ? (def.derives(ctx) || {}) : {};
  if(def.maxZoom) ctx.maxZoom = def.maxZoom(ctx);
  return ctx;
};

/* ── Verdict du garde-fou pour un type ──────────────────────────────────── */
/* garde : écarts mesurés par le garde-fou (ceux qui peuvent bloquer l'export)
   tous  : garde + avertissements de composition propres au type (affichés) */
SPGPanneau.verdict = function(type, ctx){
  var def = TYPES[type] || {};
  var garde = global.SPGGuard ? (SPGGuard.evaluer(ctx.mesures && ctx.mesures.garde || null) || []) : [];
  var autres = def.avertissements ? (def.avertissements(ctx) || []) : [];
  return {garde:garde, tous:autres.concat(garde)};
};

/* ── Mesures remontées par la carte (hauteurs, faits du garde-fou) ─────────
   Fusion sans rendu inutile : on ne met à jour que si une valeur change. */
SPGPanneau.useMesures = function(){
  var s = React.useState({}), m = s[0], setM = s[1];
  function fusion(part){
    setM(function(prev){
      var change = Object.keys(part).some(function(k){
        return JSON.stringify(prev[k]) !== JSON.stringify(part[k]); });
      return change ? Object.assign({}, prev, part) : prev;
    });
  }
  return {
    valeurs: m,
    reset: function(){ setM({}); },
    onMeasure: function(x){ fusion(x||{}); },
    onGarde: function(f){ fusion({garde:f||null}); }
  };
};

/* ═══ PANNEAU D'UNE PAGE GÉNÉRATRICE ══════════════════════════════════════
   Construit tout le panneau : alertes, format, onglets Mise en page /
   Contenu / Légende / Export, boutons Suivant / Précédent.
   Props : type, shell, cardRef, mesures, bgDir, formats (facultatif)      */
var ONGLETS = [{id:"miseenpage",label:"Mise en page"},{id:"contenu",label:"Contenu"},
               {id:"caption",label:"Légende"},{id:"export",label:"Export"}];

SPGPanneau.PanneauPage = function(p){
  var e = React.createElement, UI = Shell.ui;
  var def = TYPES[p.type] || {};
  var card = SPGCards.get(p.type) || {};
  var shell = p.shell, st = shell.st;
  var o = React.useState("miseenpage"), onglet = o[0], setOnglet = o[1];

  var ctx = SPGPanneau.contexte(p.type, {
    st:st, set:shell.set, setSt:shell.setSt, shell:shell,
    mesures:p.mesures||{}, bgStatus:shell.bgStatus, bgNat:shell.bgNat,
    bgDir:p.bgDir||"", maxZoom:shell.maxZoom
  });
  var V = SPGPanneau.verdict(p.type, ctx), verdict = V.tous;
  ctx.verdict = V.garde;
  if(global.SPGGuard) SPGGuard.publier(V.garde);

  function groupe(id, contenu, nav){
    return e("div", {className:"panel-tab-content"+(onglet===id?" on":""), style:{paddingTop:16}},
      contenu, nav ? e(UI.TabNav, nav) : null);
  }
  function aller(id){ return function(){ setOnglet(id); }; }
  var formats = p.formats || def.formats || card.formats || Object.keys(global.FORMATS||{});
  var champsTrad = def.traduction === false ? null : (def.champsTraduction || SPGCards.textFields(p.type));

  return e("div", {className:"panel"},
    verdict.length ? e("div", {style:{padding:"10px 16px 0"}}, e(UI.Warnings, {items:verdict,
      onCorriger:function(c){ shell.set(c.cle, c.valeur); }})) : null,
    e(UI.Section, {title:"Format"},
      e(UI.FormatPicker, {formats:formats, value:st.format,
        onChange:function(k){ SPGPanneau.changerFormat(p.type, shell.setSt, k); }}),
      def.sousFormat ? e(def.sousFormat, {ctx:ctx}) : null),
    e(UI.Tabs, {tabs:global.SPGGuard ? SPGGuard.marquer(ONGLETS, V.garde, "contenu") : ONGLETS,
      active:onglet, onChange:setOnglet}),

    groupe("miseenpage",
      e(Blocs, {items:def.miseEnPage, ctx:Object.assign({}, ctx, {actif:onglet==="miseenpage"})}),
      {next:"Contenu", onNext:aller("contenu")}),

    groupe("contenu", e(React.Fragment, null,
        e(Blocs, {items:def.contenu, ctx:Object.assign({}, ctx, {actif:onglet==="contenu"})}),
        champsTrad && champsTrad.length ? e(UI.TraductionIA, {st:st, setSt:shell.setSt, champs:champsTrad}) : null),
      {prev:"Mise en page", onPrev:aller("miseenpage"), next:"Légende", onNext:aller("caption")}),

    groupe("caption",
      UI.PanneauCaption
        ? e(UI.PanneauCaption, {st:st, set:shell.set, pageKey:p.type, libelle:card.label||p.type})
        : e("div", {className:"hint"}, "Module de légende non chargé."),
      {prev:"Contenu", onPrev:aller("contenu"), next:"Export", onNext:aller("export")}),

    groupe("export", e(UI.ExportTab, Object.assign({shell:shell, cardRef:p.cardRef}, p.exportProps||{})), null)
  );
};

/* ═══ PANNEAU D'UNE VIGNETTE (Carrousel) ══════════════════════════════════
   Mêmes blocs que la page, sauf ceux que le Carrousel impose à toutes les
   vignettes (cartouche, dégradé, repère…). Props : type, ctx               */
SPGPanneau.PanneauVignette = function(p){
  var e = React.createElement;
  var def = TYPES[p.type] || {};
  var ctx = SPGPanneau.contexte(p.type, Object.assign({vignette:true}, p.ctx));
  var V = SPGPanneau.verdict(p.type, ctx);
  ctx.verdict = V.garde;
  /* Deux grandes sections bien distinctes, collantes en haut du panneau
     pendant le défilement : on sait toujours ce qu'on règle. */
  function section(titre){
    return e("div", {className:"vignette-section"},
      e("span", {className:"vignette-section-titre"}, titre),
      p.legende ? e("span", {className:"vignette-section-sous"}, p.legende) : null);
  }
  return e(React.Fragment, null,
    V.tous.length ? e(Shell.ui.Warnings, {items:V.tous, onCorriger:function(c){ ctx.set(c.cle, c.valeur); }}) : null,
    section("Contenu"),
    e(Blocs, {items:def.contenu, ctx:ctx}),
    section("Mise en page"),
    e(Blocs, {items:def.miseEnPage, ctx:ctx}));
};

/* ═══════════════════════════════════════════════════════════════════════════
   BLOCS COMMUNS
   ═══════════════════════════════════════════════════════════════════════════ */
var e = function(){ return React.createElement.apply(React, arguments); };
function Info(t){ return Shell.ui.Info ? e(Shell.ui.Info, {texte:t}) : null; }
function labelInfo(txt, info, style){
  return e("label", {className:"field-label", style:Object.assign({display:"flex",alignItems:"center",gap:6}, style||{})},
    txt, info ? Info(info) : null);
}

/* ── Cartouche ─────────────────────────────────────────────────────────────
   opts : champ "double" (titre + complément, défaut) | "simple" (un champ
          « badge »), majuscules (défaut true), masquable (case « afficher »)  */
SPGPanneau.bloc("cartouche", {
  titre:"Cartouche",
  cles:["badgeMain","badgeSub","badge","badgeIconKey","badgeIconCustom"],
  /* Dans une vignette, le texte et le picto sont ceux du Carrousel : seul le
     choix d'afficher ou non la cartouche reste propre à la vignette. */
  visible:function(ctx, o){ return !ctx.vignette || !!o.masquable; },
  Rendu:function(p){
    var ctx = p.ctx, o = p.opts, st = ctx.st;
    var simple = (o.champ === "simple");
    var maj = (o.majuscules !== false);
    var ref = React.useRef(null);
    /* Galerie de pictogrammes : chargée une fois, montée quand l'onglet est
       visible (le widget mesure son conteneur). */
    React.useEffect(function(){
      if(ctx.vignette || !global.PictoGallery) return;
      global.PictoGallery.load(function(){
        var keys = global.PictoGallery.getKeys();
        ctx.setSt(function(prev){
          if(keys.indexOf(prev.badgeIconKey) >= 0) return prev;
          var c = Object.assign({}, prev); c.badgeIconKey = keys[0]; return c;
        });
      });
    }, []);
    React.useEffect(function(){
      if(ctx.vignette || !ctx.actif || !global.PictoGallery) return;
      var ct = ref.current;
      if(ct && !ct._pg){
        ct._pg = global.PictoGallery.init(ct, {
          grad:global.chGrad(st.grad), selected:st.badgeIconKey, custom:st.badgeIconCustom,
          onChange:function(key){ ctx.setSt(function(prev){ var c=Object.assign({},prev);
            c.badgeIconKey=key; c.badgeIconCustom=null; return c; }); },
          onCustom:function(d){ ctx.setSt(function(prev){ var c=Object.assign({},prev);
            c.badgeIconCustom=d; return c; }); }
        });
      }
      if(ct && ct._pg) ct._pg.setGrad(global.chGrad(st.grad));
    }, [ctx.actif, st.grad]);

    if(ctx.vignette) return e("label", {className:"toggle"},
      e("input", {type:"checkbox", checked:!st.hideBadge, onChange:function(ev){ ctx.set("hideBadge", !ev.target.checked); }}),
      "Afficher la cartouche sur cette vignette");
    function champ(cle){
      return function(ev){ var v = ev.target.value; if(maj && !simple) v = v.toUpperCase(); ctx.set(cle, v); };
    }
    var style = (maj && !simple) ? {textTransform:"uppercase"} : {};
    var masque = o.masquable && st.hideBadge;
    return e(React.Fragment, null,
      o.masquable ? e("label", {className:"toggle", style:{marginBottom:10}},
        e("input", {type:"checkbox", checked:!st.hideBadge,
          onChange:function(ev){ ctx.set("hideBadge", !ev.target.checked); }}),
        "Afficher la cartouche de titre") : null,
      masque ? null : (simple
        ? e(React.Fragment, null,
            e("label", {className:"field-label"}, "Titre"),
            e("input", {type:"text", spellCheck:true, value:st.badge||"", onChange:champ("badge")}))
        : e(React.Fragment, null,
            e("label", {className:"field-label"}, "Titre ", e("span", {className:"hint"}, "(ExtraBold)")),
            e("input", {type:"text", spellCheck:true, style:style, value:st.badgeMain||"", onChange:champ("badgeMain")}),
            e("div", {style:{height:8}}),
            labelInfo(e("span", null, "Complément ", e("span", {className:"hint"}, "(optionnel)")),
              "SemiBold : lieu, fonction… (charte p17)"),
            e("input", {type:"text", spellCheck:true, style:style, value:st.badgeSub||"", onChange:champ("badgeSub")}))),
      e("div", {style:{height:10}}),
      e("label", {className:"field-label"}, "Pictogramme"),
      e("div", {ref:ref, className:"spg-picto"}));
  }
});

/* ── Repère de carrousel (imposé par le Carrousel, absent des vignettes) ── */
SPGPanneau.bloc("repere", {
  titre:null, cles:["navMark"],
  Rendu:function(p){
    var ctx = p.ctx;
    return e("div", {style:{marginTop:12}},
      e(Shell.ui.NavMarkPicker, {value:ctx.st.navMark||"arrow", grad:ctx.st.grad,
        onChange:function(v){ ctx.set("navMark", v); }}));
  }
});

/* ── Couleurs ──────────────────────────────────────────────────────────────
   opts : texte (true = choix de la couleur du texte : unie / dégradé)
          basCarbone (défaut true)                                          */
SPGPanneau.bloc("couleurs", {
  titre:"Couleurs",
  cles:["grad","lowCarbon","textMode","textColor"],
  visible:function(ctx, o){ return reglable(ctx,"grad") || !!o.texte; },
  Rendu:function(p){
    var ctx = p.ctx, o = p.opts, st = ctx.st;
    var GR = global.GRADS || {}, G = GR[st.grad] || GR.bleu || {};
    var GRIS = global.COLOR_GREY || "#374649";
    /* Changer de dégradé : une couleur de texte unie qui suivait l'ancien
       dégradé suit le nouveau (le gris foncé, lui, reste). */
    function choisirGrad(v){
      ctx.setSt(function(prev){
        var c = Object.assign({}, prev); c.grad = v;
        if((prev.textMode||"uni") === "uni" && prev.textColor && prev.textColor !== GRIS && GR[v]) c.textColor = GR[v].to;
        return c;
      });
    }
    var warn = (st.lowCarbon && G && !G.lowCarbonOK)
      ? "Le dégradé rouge est réservé au pétrole. La charte l'interdit sur les créations bas carbone : passe sur le dégradé vert." : null;
    var mode = st.textMode || o.texteDefaut || "uni";
    return e(React.Fragment, null,
      reglable(ctx,"grad") ? e(React.Fragment, null,
        e("label", {className:"field-label"}, "Dégradé"),
        e(Shell.ui.GradPicker, {value:st.grad, onChange:choisirGrad})) : null,
      o.texte ? e(React.Fragment, null,
        e("div", {style:{height:14}}),
        labelInfo("Couleur du texte", "La couleur unie suit automatiquement le dégradé choisi ; le gris foncé reste fixe."),
        e(Shell.ui.SegButtons, {value:mode, onChange:function(v){ ctx.set("textMode", v); },
          options:[{v:"uni",l:"Couleur unie"},{v:"grad",l:"Dégradé diagonal"}]}),
        mode === "uni" ? e("div", {style:{display:"flex",gap:8,marginTop:8}},
          e("div", {title:"Couleur du dégradé", onClick:function(){ ctx.set("textColor", G.to); },
            style:{backgroundImage:global.gradCss?gradCss(st.grad,90):"", width:48, height:30, borderRadius:6, cursor:"pointer",
              border:st.textColor!==GRIS?"2px solid #1a1a1a":"2px solid #e5e5e5"}}),
          e("div", {title:"Gris foncé "+GRIS, onClick:function(){ ctx.set("textColor", GRIS); },
            style:{background:GRIS, width:48, height:30, borderRadius:6, cursor:"pointer",
              border:st.textColor===GRIS?"2px solid #1a1a1a":"2px solid #e5e5e5"}})) : null) : null,
      (o.basCarbone !== false && reglable(ctx,"lowCarbon")) ? e(React.Fragment, null,
        e("div", {style:{height:14}}),
        e("label", {className:"toggle"},
          e("input", {type:"checkbox", checked:!!st.lowCarbon,
            onChange:function(ev){ ctx.set("lowCarbon", ev.target.checked); }}),
          "Sujet énergie bas carbone",
          Info("Active le contrôle charte : le dégradé rouge est interdit sur le bas carbone.")),
        warn ? e("div", {className:"charte-warn warn"}, e("span", null, "⚠"), e("span", null, warn)) : null) : null);
  }
});

/* ── Encadré marie-louise (avec les couleurs, interdit en story) ────────── */
SPGPanneau.bloc("marieLouise", {
  titre:null, cles:["hasML","mlStyle"],
  auFormat:function(c, k){ if(k === "9x16") c.hasML = false; },
  Rendu:function(p){
    var ctx = p.ctx, st = ctx.st, story = (ctx.format === "9x16");
    return e("div", {style:{marginTop:14}},
      e("label", {className:"toggle"+(story?" off":"")},
        e("input", {type:"checkbox", checked:!!st.hasML && !story, disabled:story,
          onChange:function(ev){ ctx.set("hasML", ev.target.checked); }}),
        "Encadré marie-louise",
        story ? Info("La charte n'autorise pas la marie-louise au format story.") : null),
      (st.hasML && !story) ? e("div", {style:{marginTop:8}},
        e(Shell.ui.SegButtons, {value:st.mlStyle||"white", onChange:function(v){ ctx.set("mlStyle", v); },
          options:[{v:"white",l:"Blanche"},{v:"grad",l:"Dégradée"}]})) : null);
  }
});

/* ── Image de fond ─────────────────────────────────────────────────────────
   opts : modes (défaut ["photo","grad","white"]), indications {grad, white} */
var INDICATIONS = {
  grad:"Sur aplat dégradé, la cartouche et le repère de carrousel passent en filet blanc (charte p35). C'est automatique.",
  white:"Fond blanc uni : les blocs prennent le dégradé."
};
SPGPanneau.bloc("fond", {
  titre:"Image de fond",
  cles:["bgMode","bgImg"],
  Rendu:function(p){
    var ctx = p.ctx, o = p.opts, st = ctx.st;
    var modes = o.modes || ["photo","grad","white"];
    var NOMS = {photo:"Image", grad:"Aplat dégradé", white:"Fond blanc"};
    var mode = (modes.length === 1) ? modes[0] : (st.bgMode || "photo");
    var ind = Object.assign({}, INDICATIONS, o.indications || {});
    return e(React.Fragment, null,
      modes.length > 1 ? e(Shell.ui.SegButtons, {value:mode, onChange:function(v){ ctx.set("bgMode", v); },
        options:modes.map(function(m){ return {v:m, l:NOMS[m]}; })}) : null,
      mode === "photo"
        ? e("div", {style:{marginTop:modes.length > 1 ? 10 : 0}},
            e(global.BgPhotoPanel, {st:st, set:ctx.set, setSt:ctx.setSt, format:ctx.format,
              bgStatus:ctx.bgStatus, bgNat:ctx.bgNat, bgDir:ctx.bgDir, maxZoom:ctx.maxZoom,
              showHint:ctx.vignette ? "Dépose une image, puis glisse-la sur la vignette pour la recadrer." : o.indicationPhoto}))
        : e("div", {className:"hint", style:{marginTop:8}}, ind[mode] || ""));
  }
});

global.SPGPanneau = SPGPanneau;
})(window);
