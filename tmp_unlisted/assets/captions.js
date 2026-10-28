/* ═══════════════════════════════════════════════════════════════════════════
   CAPTIONS COPY.AI — module partagé
   ---------------------------------------------------------------------------
   Deux choses, volontairement séparées :

     1. SPGCaption : les réglages (clé, identifiant de workflow, noms des
        variables) et l'appel au workflow. Les réglages vivent dans le
        navigateur, dans localStorage. RIEN n'est envoyé ailleurs que vers
        ton propre serveur, qui relaie vers Copy.ai (voir api/caption.php).

     2. Shell.ui.PanneauCaption : l'interface, à monter dans l'onglet d'un
        générateur. Elle lit les textes de la carte en cours et propose de
        générer la légende.

   La clé n'est jamais écrite dans le code ni envoyée à qui que ce soit
   d'autre : elle part du navigateur vers le relais, dans un en-tête, et le
   relais ne la conserve pas.
   ═══════════════════════════════════════════════════════════════════════════ */
(function(global){

var CLE_REGLAGES = "spg_copyai";

/* ── Réglages ──────────────────────────────────────────────────────────── */
function lireReglages(){
  var d = { cle:"", workflowId:"", varTexte:"Input 1", varType:"", varLangue:"",
            sortie:"" };
  try{
    var brut = localStorage.getItem(CLE_REGLAGES);
    if(brut) return Object.assign(d, JSON.parse(brut));
  }catch(e){}
  return d;
}
function ecrireReglages(r){
  try{ localStorage.setItem(CLE_REGLAGES, JSON.stringify(r)); }catch(e){}
}
function configuree(){
  var r = lireReglages();
  return !!(r.workflowId && (r.cle || r.cleSurServeur));
}

/* ── Chemin du relais : même logique que la traduction ─────────────────── */
function urlRelais(){
  if(global.Shell && Shell.apiUrl) return Shell.apiUrl("caption.php");
  var base = global.location.pathname.indexOf("/generators/")>=0 ? "../../" : "";
  return base + "api/caption.php";
}

/* Le relais doit répondre en JSON. S'il renvoie autre chose (page d'erreur
   du serveur, code PHP brut), c'est que PHP ne s'exécute pas sur ce chemin :
   on le dit clairement au lieu de l'obscur « JSON.parse: unexpected character ». */
function lireJson(rep){
  return rep.text().then(function(t){
    try{ return {ok:rep.ok, j:JSON.parse(t)}; }
    catch(_){
      var php=/<\?php/.test(t), html=/<html|<!doctype/i.test(t);
      throw new Error("Le relais api/caption.php ne répond pas correctement (code "+rep.status+(php?", PHP non exécuté":html?", page d'erreur du serveur":"")+
        "). Le serveur doit exécuter PHP sur le dossier api/.");
    }
  });
}

/* ── Appel du workflow : lancement puis attente ────────────────────────── */
function lancer(variables, cb){
  var r = lireReglages();
  if(!r.workflowId){ cb(new Error("Identifiant de workflow manquant.")); return; }

  var entetes = {"Content-Type":"application/json"};
  if(r.cle) entetes["X-CopyAI-Key"] = r.cle;

  fetch(urlRelais(), {method:"POST", headers:entetes,
    body:JSON.stringify({action:"run", workflowId:r.workflowId, variables:variables})})
   .then(lireJson)
   .then(function(res){
      if(!res.ok || !res.j.runId) throw new Error(res.j.error || "Lancement refusé par Copy.ai.");
      attendre(res.j.runId, 0, cb);
   })
   .catch(function(err){ cb(err); });
}

/* Le workflow est asynchrone : on interroge jusqu'à COMPLETE.
   40 tentatives espacées de 1,5 s = une minute d'attente maximum. */
function attendre(runId, essai, cb){
  var r = lireReglages();
  if(essai > 40){ cb(new Error("Le workflow n'a pas répondu dans la minute.")); return; }
  var entetes = {"Content-Type":"application/json"};
  if(r.cle) entetes["X-CopyAI-Key"] = r.cle;
  fetch(urlRelais(), {method:"POST", headers:entetes,
    body:JSON.stringify({action:"status", workflowId:r.workflowId, runId:runId})})
   .then(lireJson)
   .then(function(res){ var j=res.j;
      if(j.error) throw new Error(j.error);
      if(j.status === "COMPLETE"){ cb(null, j); return; }
      setTimeout(function(){ attendre(runId, essai+1, cb); }, 1500);
   })
   .catch(function(err){ cb(err); });
}

/* La sortie d'un workflow est un objet dont les clés sont libres. On prend
   celle demandée dans les réglages, sinon la première valeur texte venue. */
function extraireTexte(sortie, cleVoulue){
  if(!sortie) return "";
  if(typeof sortie === "string") return sortie;
  if(cleVoulue && sortie[cleVoulue] !== undefined) return String(sortie[cleVoulue]);
  for(var k in sortie){
    if(typeof sortie[k] === "string" && sortie[k].trim()) return sortie[k];
  }
  try{ return JSON.stringify(sortie, null, 1); }catch(e){ return ""; }
}

global.SPGCaption = {
  lireReglages:lireReglages, ecrireReglages:ecrireReglages,
  configuree:configuree, lancer:lancer, extraireTexte:extraireTexte
};

/* ═══ INTERFACE ═══════════════════════════════════════════════════════════ */
function monterUI(){
  if(!global.Shell || !global.Shell.ui || !global.React) return;
  var e = React.createElement;

  Shell.ui.PanneauCaption = function(p){
    var useState = React.useState;
    var r0 = useState(lireReglages()), reg = r0[0], setReg = r0[1];
    var o0 = useState(false), ouvert = o0[0], setOuvert = o0[1];
    var t0 = useState(p.st && p.st.caption || ""), texte = t0[0], setTexte = t0[1];
    var e0 = useState(null), etat = e0[0], setEtat = e0[1];

    function majReg(k,v){
      var n = Object.assign({}, reg); n[k] = v;
      setReg(n); ecrireReglages(n);
    }

    /* Les textes de la carte, assemblés dans l'ordre où ils apparaissent. */
    function textesDeLaCarte(){
      var champs = (global.SPGCards && SPGCards.textFields) ? SPGCards.textFields(p.pageKey) : [];
      var bouts = [];
      champs.forEach(function(c){
        if(typeof c === "string"){ if(p.st[c]) bouts.push(String(p.st[c])); }
        else if(c && c.list && Array.isArray(p.st[c.list])){
          p.st[c.list].forEach(function(it){
            c.fields.forEach(function(f){ if(it[f]) bouts.push(String(it[f])); });
          });
        }
      });
      return bouts.join("\n");
    }

    function generer(){
      var contenu = textesDeLaCarte();
      if(!contenu.trim()){ setEtat({err:"La carte ne contient aucun texte à résumer."}); return; }
      var variables = {};
      variables[reg.varTexte || "Input 1"] = contenu;
      if(reg.varType)   variables[reg.varType]   = p.libelle || p.pageKey;
      if(reg.varLangue) variables[reg.varLangue] = (p.st.langTarget === "EN") ? "English" : "French";
      setEtat({encours:true});
      lancer(variables, function(err, res){
        if(err){ setEtat({err:err.message}); return; }
        var t = extraireTexte(res.output, reg.sortie);
        setTexte(t);
        if(p.set) p.set("caption", t);
        setEtat({ok:true, credits:res.credits});
      });
    }

    var pret = !!(reg.workflowId && (reg.cle || reg.cleSurServeur));

    return e(Shell.ui.Section, {title:"Légende"},
      e("div",{className:"hint",style:{marginBottom:10}},
        "La légende est générée par ton compte Copy.ai, à partir des textes de la carte. ",
        "Elle est enregistrée avec le projet."),

      e("button",{className:"mini-btn",style:{width:"100%",marginBottom:10},
        onClick:generer, disabled:!pret || (etat && etat.encours)},
        (etat && etat.encours) ? "Génération en cours…" : "Générer la légende"),

      !pret ? e("div",{className:"hint",style:{marginBottom:10,color:"#b4690e"}},
        "Renseigne d'abord tes réglages Copy.ai ci-dessous.") : null,

      (etat && etat.err) ? e("div",{className:"hint",style:{color:"#c0392b",marginBottom:8}}, etat.err) : null,
      (etat && etat.ok && etat.credits) ? e("div",{className:"hint",style:{marginBottom:8}},
        "Terminé, "+etat.credits+" crédits consommés.") : null,

      e("textarea",{value:texte, rows:7, placeholder:"La légende apparaîtra ici, modifiable.",
        onChange:function(ev){ setTexte(ev.target.value); if(p.set) p.set("caption", ev.target.value); },
        style:{width:"100%",marginBottom:8}}),
      e("button",{className:"mini-btn",style:{width:"100%",marginBottom:14},
        onClick:function(){ try{ navigator.clipboard.writeText(texte); }catch(e){} }},
        "Copier la légende"),

      /* ── Réglages, repliés par défaut ── */
      e("div",{style:{borderTop:"1px solid #eee",paddingTop:10}},
        e("div",{style:{cursor:"pointer",fontSize:11,fontWeight:800,letterSpacing:".06em",
            textTransform:"uppercase",color:"#888"},
          onClick:function(){ setOuvert(!ouvert); }},
          (ouvert?"▾ ":"▸ ")+"Réglages Copy.ai"),
        ouvert ? e("div",{style:{marginTop:10}},
          e("div",{className:"hint",style:{marginBottom:8}},
            "Ces réglages restent dans ce navigateur. La clé transite vers Copy.ai ",
            "via ton propre serveur et n'y est pas conservée."),

          e("label",{className:"field-label"},"Clé API Copy.ai"),
          e("input",{type:"password",value:reg.cle||"",placeholder:"collée depuis ton espace Copy.ai",
            onChange:function(ev){ majReg("cle", ev.target.value); }}),
          e("label",{className:"toggle",style:{margin:"8px 0"}},
            e("input",{type:"checkbox",checked:!!reg.cleSurServeur,
              onChange:function(ev){ majReg("cleSurServeur", ev.target.checked); }}),
            "La clé est déjà sur le serveur"),

          e("div",{style:{height:6}}),
          e("label",{className:"field-label"},"Identifiant du workflow"),
          e("div",{className:"hint",style:{marginBottom:4}},
            "Ni l'identifiant de connexion, ni celui de la clé : l'identifiant du WORKFLOW, ",
            "dans l'onglet API du workflow sur Copy.ai (il commence en général par WCPC-)."),
          e("input",{type:"text",value:reg.workflowId||"",placeholder:"ex. 0f3a…",
            onChange:function(ev){ majReg("workflowId", ev.target.value); }}),

          e("div",{style:{height:10}}),
          e("div",{className:"hint",style:{marginBottom:6}},
            "Noms exacts des variables de ton workflow, tels qu'ils apparaissent dans Copy.ai."),
          e("label",{className:"field-label"},"Variable du texte"),
          e("input",{type:"text",value:reg.varTexte||"",placeholder:"Input 1",
            onChange:function(ev){ majReg("varTexte", ev.target.value); }}),
          e("div",{style:{height:6}}),
          e("label",{className:"field-label"},"Variable du type de post (optionnel)"),
          e("input",{type:"text",value:reg.varType||"",placeholder:"laisser vide si absent",
            onChange:function(ev){ majReg("varType", ev.target.value); }}),
          e("div",{style:{height:6}}),
          e("label",{className:"field-label"},"Variable de langue (optionnel)"),
          e("input",{type:"text",value:reg.varLangue||"",placeholder:"laisser vide si absent",
            onChange:function(ev){ majReg("varLangue", ev.target.value); }}),
          e("div",{style:{height:6}}),
          e("label",{className:"field-label"},"Variable de sortie (optionnel)"),
          e("input",{type:"text",value:reg.sortie||"",placeholder:"sinon, la première sortie texte",
            onChange:function(ev){ majReg("sortie", ev.target.value); }})
        ) : null)
    );
  };
}

/* React et Shell arrivent de façon asynchrone (CDN + boot-gate) : on attend
   qu'ils soient là plutôt que de parier sur l'ordre des balises script. */
(function attendreSocle(essai){
  if(global.React && global.Shell && global.Shell.ui){ monterUI(); return; }
  if(essai>200) return;
  setTimeout(function(){ attendreSocle(essai+1); }, 50);
})(0);

})(window);
