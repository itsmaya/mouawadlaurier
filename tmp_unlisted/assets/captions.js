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
/* Anciennes versions : noms d'entrées et « autres entrées » saisis à la main.
   Ils ne servent plus (noms fixes) et pouvaient contenir des valeurs à la
   place des noms : on les efface. */
(function(){ try{ var r=JSON.parse(localStorage.getItem(CLE_REGLAGES)||"null");
  if(r&&(r.cles||r.autres||r.varTexte)){ delete r.cles; delete r.autres; delete r.varTexte; delete r.varType; delete r.varLangue;
    localStorage.setItem(CLE_REGLAGES, JSON.stringify(r)); } }catch(e){} })();
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

/* ── Appel du workflow : lancement puis attente ────────────────────────
   opts (facultatif) :
     voulues  : morceaux de noms des sorties attendues (ex. ["instagram"]) ;
                dès qu'elles sont prêtes, on s'arrête sans attendre les autres
     partiel  : fonction appelée avec les sorties déjà prêtes, à chaque passage */
function lancer(variables, cb, surEtat, opts){
  lancer.dernier = variables;   /* gardé pour le diagnostic */
  var r = lireReglages();
  if(!r.workflowId){ cb(new Error("Identifiant de workflow manquant.")); return; }
  var entetes = {"Content-Type":"application/json"};
  if(r.cle) entetes["X-CopyAI-Key"] = r.cle;
  fetch(urlRelais(), {method:"POST", headers:entetes,
    body:JSON.stringify({action:"run", workflowId:r.workflowId, variables:variables})})
   .then(lireJson)
   .then(function(res){
      if(!res.ok || !res.j.runId) throw new Error(res.j.error || "Lancement refusé par Copy.ai.");
      lancer.runId = res.j.runId; if(lancer.surRun) lancer.surRun(res.j.runId);
      attendre(res.j.runId, Date.now(), cb, surEtat, opts);
   })
   .catch(function(err){ cb(err); });
}

/* Le workflow AGENT IA fait tourner plusieurs rédacteurs (Instagram, LinkedIn,
   X, YouTube…) : le run peut durer plus de 6 minutes, et l'API annonce
   « PAUSED » tant que certains rédigent encore (constaté le 29/10).
   On affiche donc chaque sortie dès qu'elle est prête, on s'arrête dès que
   celles demandées sont là, et on attend au plus 15 minutes. */
var ATTENTE_MAX_MS = 900000, PAS_MS = 4000;
/* Texte provisoire que Copy.ai met dans une sortie pendant la rédaction. */
function provisoire(t){ return /content agent is working|is working\.\.\.|en cours de r[ée]daction|generating/i.test(String(t||"")); }
function sortiePrete(v){
  if(v && typeof v==="object") return String(v.status||"").toUpperCase().indexOf("COMPLET")===0 && !!String(v.content||"").trim() && !provisoire(v.content);
  return typeof v==="string" && !!v.trim() && !provisoire(v);
}
function sortiesFinies(o){
  if(!o || typeof o!=="object") return false;
  var cles=Object.keys(o); return cles.length>0 && cles.every(function(k){ return sortiePrete(o[k]); });
}
function sortiesPretes(o){
  var r={}; if(!o || typeof o!=="object") return r;
  Object.keys(o).forEach(function(k){ if(sortiePrete(o[k])) r[k]=o[k]; }); return r;
}
function attendre(runId, debut, cb, surEtat, opts){
  opts = opts || {};
  if(Date.now()-debut < 100) attendre.infos = null;
  var r = lireReglages();
  var ecoule = Date.now() - debut;
  if(ecoule > ATTENTE_MAX_MS){
    cb(new Error("Copy.ai n'a pas fini en 15 minutes. Les légendes déjà prêtes sont affichées ; "+
      "pour les autres, clique plus tard sur « Récupérer le résultat du dernier run » (sans nouveau run ni crédits)."));
    return;
  }
  var entetes = {"Content-Type":"application/json"};
  if(r.cle) entetes["X-CopyAI-Key"] = r.cle;
  fetch(urlRelais(), {method:"POST", headers:entetes,
    body:JSON.stringify({action:"status", workflowId:r.workflowId, runId:runId})})
   .then(lireJson)
   .then(function(res){ var j=res.j;
      if(j.error) throw new Error(j.error);
      var etat = String(j.status||"INCONNU").toUpperCase();
      attendre.dernier = etat; if(j.infos) attendre.infos = j.infos;
      var pretes = sortiesPretes(j.output);
      if(surEtat) surEtat(etat, Math.round(ecoule/1000), Object.keys(pretes));
      if(opts.partiel && Object.keys(pretes).length) opts.partiel(pretes);
      if(etat === "COMPLETE" && (!j.output || sortiesFinies(j.output) || !JSON.stringify(j.output).match(/is working/i))){ cb(null, j); return; }
      if(sortiesFinies(j.output)){ cb(null, j); return; }
      /* Les sorties demandées sont prêtes : on le signale, mais on continue de
         suivre le run jusqu'au bout. Tant que Copy.ai travaille, un nouveau
         lancement est bloqué (il consommerait des crédits pour rien). */
      if(!opts._signale && opts.voulues && opts.voulues.length && opts.voulues.every(function(v){
          return Object.keys(pretes).some(function(k){ return k.toLowerCase().indexOf(v)>=0; }); })){
        opts._signale = true;
        if(opts.voulusPrets) opts.voulusPrets(pretes);
      }
      if(etat === "FAILED"){ throw new Error("Le workflow a échoué sur Copy.ai."+(j.detail?" "+JSON.stringify(j.detail).slice(0,200):"")); }
      setTimeout(function(){ attendre(runId, debut, cb, surEtat, opts); }, PAS_MS);
   })
   .catch(function(err){ cb(err); });
}

/* Premier texte utile d'une sortie (anciennes versions, gardé pour l'API). */
function extraireTexte(sortie, cleVoulue){
  if(!sortie) return "";
  if(typeof sortie === "string") return sortie;
  if(cleVoulue && sortie[cleVoulue] !== undefined) return String(sortie[cleVoulue]);
  for(var k in sortie){ var v=sortie[k]; if(v&&typeof v==="object") v=v.content; if(typeof v==="string"&&v.trim()) return v; }
  return "";
}

/* Relire le résultat d'un run déjà lancé (sans consommer de crédits). */
function relire(runId, cb, surEtat, opts){ attendre(runId, Date.now(), cb, surEtat, opts); }

/* ── Crédits ──────────────────────────────────────────────────────────────
   L'API Copy.ai ne donne pas le solde du compte. Elle indique en revanche
   les crédits consommés par un run terminé : on les additionne ici, par mois,
   pour ce navigateur. Le solde exact reste visible dans l'espace Copy.ai. */
var CLE_CONSO = "spg_copyai_conso";
function moisCourant(){ var d=new Date(); return d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2); }
function lireConso(){
  var c={mois:moisCourant(),credits:0,runs:0,vus:[]};
  try{ var r=JSON.parse(localStorage.getItem(CLE_CONSO)||"null"); if(r&&r.mois===c.mois) c=Object.assign(c,r); }catch(e){}
  return c;
}
function noterConso(runId, credits){
  var c=lireConso();
  if(!runId || c.vus.indexOf(runId)>=0) return c;
  c.vus=c.vus.concat([runId]).slice(-200); c.runs++;
  if(typeof credits==="number" && isFinite(credits)) c.credits+=credits;
  try{ localStorage.setItem(CLE_CONSO, JSON.stringify(c)); }catch(e){}
  return c;
}

global.SPGCaption = {
  lireReglages:lireReglages, ecrireReglages:ecrireReglages,
  configuree:configuree, lancer:lancer, extraireTexte:extraireTexte,
  lireConso:lireConso
};

/* ═══ INTERFACE ═══════════════════════════════════════════════════════════ */
function monterUI(){
  if(!global.Shell || !global.Shell.ui || !global.React) return;
  var e = React.createElement;

  /* ── Brief envoyé au workflow « AGENT IA » ─────────────────────────────
     Sept entrées obligatoires côté Copy.ai. Les noms techniques par défaut
     sont déduits des titres ; ils se corrigent dans les réglages si l'onglet
     API du workflow en affiche d'autres. */
  var CHAMPS = [
    {id:"sujet",      titre:"Sujet du post",        cle:"sujet_du_post"},
    {id:"visuel",     titre:"Description visuel",   cle:"description_visuel"},
    {id:"url",        titre:"URL info",             cle:"url_info"},
    {id:"livrables",  titre:"Liste des livrables",  cle:"liste_des_livrables"},
    {id:"pilier",     titre:"Pilier",               cle:"pilier"},
    {id:"thematique", titre:"Thématique",           cle:"thematique"},
    {id:"langue",     titre:"Langue",               cle:"langue"}
  ];
  var LIVRABLES = ["Instagram organique","LinkedIn","X","Facebook dark post","YouTube shorts"];
  var PILIERS = ["Proche","Innovante","Performante"];
  var THEMATIQUES = ["Sponsoring Jeunesse","Transition Stratégie","Innovation Tech","Exploration Production",
    "Marque Employeur","Ancrage Local","Marketing Services","Raffinerie Pétrochimie","Renouvelables","Sécurité"];
  var LANGUES = ["Français","Anglais","Français et Anglais"];

  var NOMS_SORTIES = {final_output:"Synthèse",content_agent_instagram:"Instagram",content_agent_linkedin:"LinkedIn",
    content_agent_x:"X",content_agent_youtube:"YouTube",content_agent_facebook:"Facebook"};
  function joli(k){ return NOMS_SORTIES[k] || String(k).replace(/^content_agent_/,"").replace(/[_-]+/g," ").replace(/\b\w/g,function(c){return c.toUpperCase();}); }

  /* ── Préremplissage : on devine le brief à partir du post ────────────────
     Simples mots-clés (FR et EN). Tout reste modifiable ; ce qui est deviné
     est signalé « suggéré ». */
  var MOTS_THEMES = [
    ["Renouvelables",/(renouvel|renewab|solaire|solar|éolien|eolien|wind|offshore|hydrog|biogaz|biométhane|photovolt)/i],
    ["Raffinerie Pétrochimie",/(raffiner|refiner|pétrochim|petrochem|polymère|polymer|plastique)/i],
    ["Sécurité",/(sécurit|securit|safety|accident|prévention|prevention)/i],
    ["Marque Employeur",/(recrut|recruit|talent|carrière|career|emploi|job|métier|stagiaire|intern|graduate|femmes|women)/i],
    ["Sponsoring Jeunesse",/(sponsor|sport|football|rugby|cyclis|vélo|tour de france|jeunes|youth|partenariat sportif)/i],
    ["Innovation Tech",/(innov|tech|digital|numérique|\bia\b|\bai\b|intelligence artificielle|data|robot|r&d|recherche)/i],
    ["Exploration Production",/(explor|forage|drilling|gisement|\blng\b|\bgnl\b|gaz naturel|natural gas|pétrole|\boil\b|upstream)/i],
    ["Marketing Services",/(station|recharge|charging|borne|client|customer|carburant|fuel|lubrifiant|quartz|offre)/i],
    ["Ancrage Local",/(local|territoire|communaut|community|région|region|ville|city|riverain)/i],
    ["Transition Stratégie",/(transition|stratég|strateg|résultat|results|net zero|neutralit|carbone|carbon|émission|emission|acquisi|acquires)/i]
  ];
  function suggerer(texte, format){
    var t=texte||"", theme="";
    for(var i=0;i<MOTS_THEMES.length;i++){ if(MOTS_THEMES[i][1].test(t)){ theme=MOTS_THEMES[i][0]; break; } }
    var pilier = /(innov|tech|digital|\bia\b|\bai\b|\bnouveau|\bnouvelle|\bnew\b|\bfirst\b|premi[eè]re?\b)/i.test(t) ? "Innovante"
               : /(\d[\d\s.,]*\s?(%|gw|mw|tw|milliard|billion|million|km|tonnes|bornes|points))|record|leader|résultat|results/i.test(t) ? "Performante"
               : "Proche";
    var anglais = (t.match(/\b(the|and|of|to|with|for|our|is|are|its|will|has|have|acquires|business|company|energy|power|news)\b|'s\b/gi)||[]).length;
    var francais = (t.match(/\b(le|la|les|et|des|pour|avec|notre|est|du)\b/gi)||[]).length;
    var livrables = (format==="16x9") ? ["LinkedIn"] : (format==="9x16") ? ["Instagram organique"] : ["Instagram organique","LinkedIn"];
    return {thematique:theme, pilier:pilier, langue:(anglais>francais?"Anglais":"Français"), livrables:livrables};
  }
  function decrireVisuel(p, sujet){
    var st=p.st||{}, bouts=[];
    bouts.push("Post "+(p.libelle||p.pageKey)+" au format "+(st.format||"1x1").replace("x",":")+", charte TotalEnergies.");
    var badge=[st.badgeMain||st.badge, st.badgeSub].filter(Boolean).join(" – ");
    if(badge) bouts.push("Cartouche : "+badge+".");
    if(st.bgImg || st.photo) bouts.push("Photo en fond ou en illustration.");
    if(st.grad) bouts.push("Dégradé "+st.grad+".");
    return bouts.join(" ");
  }

  Shell.ui.PanneauCaption = function(p){
    var useState = React.useState;
    var r0 = useState(lireReglages()), reg = r0[0], setReg = r0[1];
    var o0 = useState(false), ouvert = o0[0], setOuvert = o0[1];
    var t0 = useState(p.st && p.st.caption || ""), texte = t0[0], setTexte = t0[1];
    var e0 = useState(null), etat = e0[0], setEtat = e0[1];
    var s0 = useState(p.st && p.st.captionSorties || null), sorties = s0[0], setSorties = s0[1];
    var a0 = useState(null), onglet = a0[0], setOnglet = a0[1];

    function majReg(k,v){ var n = Object.assign({}, reg); n[k] = v; setReg(n); ecrireReglages(n); }

    /* Les textes de la carte, assemblés dans l'ordre où ils apparaissent. */
    function textesDeLaCarte(){
      if(typeof p.textes === "string") return p.textes.replace(/\*\*|__/g,"");
      var champs = (global.SPGCards && SPGCards.textFields) ? SPGCards.textFields(p.pageKey) : [];
      var bouts = [];
      champs.forEach(function(c){
        if(typeof c === "string"){ if(p.st[c]) bouts.push(String(p.st[c])); }
        else if(c && c.list && Array.isArray(p.st[c.list])){
          p.st[c.list].forEach(function(it){ c.fields.forEach(function(f){ if(it[f]) bouts.push(String(it[f])); }); });
        }
      });
      return bouts.join("\n").replace(/\*\*|__/g,"");
    }

    /* Brief du projet (enregistré avec lui). Le sujet suit les textes de la
       carte tant qu'on ne l'a pas réécrit à la main. */
    var sujetAuto = textesDeLaCarte();
    var sug = suggerer(sujetAuto, p.st.format);
    if(p.st.langTarget==="EN") sug.langue="Anglais";
    var choix = p.st.briefCopy||{};
    var b = Object.assign({ url:"RAS" }, sug, choix);
    function estSuggere(k){ return choix[k]===undefined || choix[k]===null; }
    var sujet = (choix.sujet!==undefined && choix.sujet!==null) ? choix.sujet : sujetAuto;
    var visuel = (choix.visuel!==undefined && choix.visuel!==null) ? choix.visuel : decrireVisuel(p, sujetAuto);
    function majBrief(k,v){ var n=Object.assign({}, p.st.briefCopy||{}); n[k]=v; if(p.set) p.set("briefCopy", n); }

    function valeur(id){
      if(id==="sujet") return sujet;
      if(id==="visuel") return visuel;
      if(id==="livrables") return (b.livrables||[]).join(", ");
      return b[id]||"";
    }

    function generer(){
      if(!sujet.trim()){ setEtat({err:"Le sujet du post est vide."}); return; }
      if(!b.thematique){ setEtat({err:"Choisis une thématique : le workflow l'exige."}); return; }
      if(!(b.livrables||[]).length){ setEtat({err:"Choisis au moins un livrable."}); return; }
      var variables = {};
      /* Noms des entrées : ceux de l'API du workflow AGENT IA, fixes. */
      CHAMPS.forEach(function(c){ variables[c.cle] = valeur(c.id); });
      if(verrou.current) return;          /* un run tourne déjà */
      verrou.current = true;
      setEtat({encours:true});
      lancer.surRun = function(id){ if(p.set){ p.set("captionRunId", id); p.set("captionRunAt", Date.now()); p.set("captionFini", false); } };
      lancer(variables, recevoir, suivi, optsAttente());
    }
    /* Sorties attendues = livrables cochés ; on n'attend pas les autres agents. */
    function optsAttente(){
      var carte={instagram:"instagram",linkedin:"linkedin",x:"agent_x",facebook:"facebook",youtube:"youtube"};
      var voulues=(b.livrables||[]).map(function(l){ return carte[String(l).split(" ")[0].toLowerCase()]; }).filter(Boolean);
      return {voulues:voulues, partiel:function(pretes){ afficher(pretes, true); },
        voulusPrets:function(){ setEtat(function(e0){ return Object.assign({}, e0||{}, {encours:true, voulusPrets:true}); }); }};
    }
    function suivi(etatCopy, sec, pretes){ setEtat(function(e0){ return {encours:true, etatCopy:etatCopy, sec:sec, pretes:pretes||[],
      voulusPrets:!!(e0&&e0.voulusPrets)}; }); }
    function recuperer(){
      if(!p.st.captionRunId || verrou.current) return;
      verrou.current = true;
      setEtat({encours:true});
      relire(p.st.captionRunId, recevoir, suivi, optsAttente());
    }
    var dejaAffiche = React.useRef(false);
    var verrou = React.useRef(false);
    var c0 = useState(lireConso()), conso = c0[0], setConso = c0[1];
    function recevoir(err, res){
        verrou.current = false;
        if(err){ setEtat({err:err.message}); return; }
        afficher(res.output, false);
        if(p.set) p.set("captionFini", true);
        setConso(noterConso(p.st.captionRunId || lancer.runId, res.credits));
        setEtat({ok:true, credits:res.credits, partiel:!!res.partiel});
    }
    /* Page rouverte pendant qu'un run tournait (moins de 15 min) : on reprend
       le suivi au lieu de laisser relancer. */
    React.useEffect(function(){
      var st=p.st||{};
      if(st.captionRunId && st.captionFini===false && st.captionRunAt && Date.now()-st.captionRunAt < ATTENTE_MAX_MS) recuperer();
    },[]);
    /* Affiche les sorties reçues. En cours de route (enCours), on ne change
       d'onglet que la première fois, pour ne pas gêner la lecture. */
    function afficher(o, enCours){
        if(!o){ if(!enCours) setEtat({err:"Copy.ai a terminé sans renvoyer de texte."}); return; }
        if(typeof o==="string") o={"Légende":o};
        /* Chaque sortie du workflow AGENT IA est un objet {content, title, status}
           (final_output, content_agent_instagram, _linkedin, _x, _youtube). */
        var propres={}; Object.keys(o).forEach(function(k){
          var v=o[k]; if(v&&typeof v==="object") v=(v.content!==undefined?v.content:(v.text||v.value||""));
          if(typeof v==="string"&&v.trim()) propres[k]=v.trim(); });
        setSorties(propres); if(p.set) p.set("captionSorties", propres);
        /* onglet par défaut : la sortie qui correspond au premier livrable demandé */
        var cles=Object.keys(propres), voulu=String((b.livrables||[""])[0]).split(" ")[0].toLowerCase();
        var k=cles.filter(function(c){ return c.toLowerCase().indexOf("agent_"+voulu)>=0; })[0]
           ||(propres.final_output?"final_output":cles[0]);
        if(!enCours || !dejaAffiche.current){
          setOnglet(k);
          if(k){ setTexte(propres[k]); if(p.set) p.set("caption", propres[k]); }
          dejaAffiche.current = true;
        }
        if(!enCours) dejaAffiche.current = false;
    }
    var pret = !!(reg.workflowId && (reg.cle || reg.cleSurServeur));
    var lab = function(t){ return e("label",{className:"field-label"},t); };
    var sel = function(val, opts, onCh, vide){
      return e("select",{value:val||"",onChange:function(ev){onCh(ev.target.value);},
        style:{width:"100%",padding:"6px",borderRadius:6,border:"1px solid #d4d4d4",fontFamily:"inherit",fontSize:12.5}},
        vide?e("option",{value:""},vide):null,
        opts.map(function(o){ return e("option",{key:o,value:o},o); }));
    };
    var clesSorties = sorties ? Object.keys(sorties) : [];
    /* Plateformes attendues (livrables cochés), puis la synthèse. Celles qui
       ne sont pas encore prêtes s'affichent en gris clignotant. */
    var AGENTS={instagram:"content_agent_instagram",linkedin:"content_agent_linkedin",x:"content_agent_x",youtube:"content_agent_youtube"};
    var attendues=[];
    (b.livrables||[]).forEach(function(l){ var k=AGENTS[String(l).split(" ")[0].toLowerCase()]; if(k&&attendues.indexOf(k)<0) attendues.push(k); });
    attendues.push("final_output");
    var enCours = !!(etat && etat.encours);
    var ongletsVus = attendues.concat(clesSorties.filter(function(k){ return attendues.indexOf(k)<0 && !/aucun livrable/i.test(sorties[k]); }));

    var ouvrirConnexion = ouvert || !pret;
    var sugTag = function(k){ return estSuggere(k) ? e("span",{style:{marginLeft:6,fontSize:9.5,fontWeight:800,letterSpacing:".06em",
      textTransform:"uppercase",color:"#0098E3"}},"suggéré") : null; };
    var labS = function(t,k){ return e("label",{className:"field-label"},t,sugTag(k)); };
    /* Explication en une ligne sous chaque champ : à quoi il sert pour Copy.ai. */
    var aide = function(t){ return e("div",{style:{fontSize:11,lineHeight:1.4,color:"#8a8f98",margin:"-2px 0 5px"}},t); };
    var b0 = useState(false), briefOuvert = b0[0], setBriefOuvert = b0[1];
    var resume = [b.thematique||"thématique à choisir", b.pilier, b.langue, (b.livrables||[]).join(" + ")].join(" · ");

    return e(Shell.ui.Section, {title:"Légende"},
      e("div",{className:"hint",style:{marginBottom:10}},
        "Le brief est rempli automatiquement à partir du post. Vérifie-le si besoin, puis génère."),

      /* ── 1. Action principale ── */
      e("button",{onClick:generer, disabled:!pret || enCours,
        title:enCours?"Copy.ai travaille encore sur le run lancé : attends la fin pour en relancer un.":"",
        style:{width:"100%",padding:"13px 14px",border:0,borderRadius:9,cursor:(!pret||enCours)?"not-allowed":"pointer",
          background:(!pret||enCours)?"#c9d3e0":"linear-gradient(135deg,#0098E3,#4632FF)",color:"#fff",
          fontFamily:"inherit",fontSize:13,fontWeight:800,letterSpacing:".04em",
          boxShadow:(pret&&!enCours)?"0 6px 16px rgba(70,50,255,.25)":"none",marginBottom:8}},
        enCours ? ((etat.voulusPrets?"Copy.ai termine les autres réseaux…":"Génération en cours…")+(etat.sec?" "+etat.sec+" s":""))
                : "✨ Générer les légendes"),
      (etat && etat.encours && etat.etatCopy) ? e("div",{className:"hint",style:{marginBottom:8}},
        (etat.voulusPrets?"Tes légendes sont prêtes ci-dessous. ":"")+"Copy.ai : "+({NEW:"demande reçue",WAITING:"en file d'attente",PROCESSING:"rédaction en cours",
          RETRYING:"nouvel essai en cours",PAUSED:"les rédacteurs travaillent",COMPLETE:"terminé"}[etat.etatCopy]||etat.etatCopy)+
        (etat.pretes&&etat.pretes.length?" · prêt : "+etat.pretes.map(joli).join(", "):"")) : null,
      (pret && conso.runs) ? e("div",{className:"hint",style:{marginBottom:8}},
        "Ce mois-ci depuis ce navigateur : "+conso.runs+" run"+(conso.runs>1?"s":"")+
        (conso.credits?" · "+conso.credits+" crédit"+(conso.credits>1?"s":"")+" consommé"+(conso.credits>1?"s":""):"")) : null,
      !pret ? e("div",{className:"hint",style:{marginBottom:10,color:"#b4690e"}},
        "Connexion Copy.ai à faire une fois sur ce navigateur : voir tout en bas.") : null,
      (etat && etat.err) ? e("div",{className:"hint",style:{color:"#c0392b",marginBottom:8}}, etat.err) : null,
      (p.st.captionRunId && !(etat && etat.encours)) ? e("button",{className:"mini-btn",style:{width:"100%",marginBottom:8},
        onClick:recuperer,title:"Relit le résultat du dernier run chez Copy.ai, sans relancer ni consommer de crédits"},
        "↻ Récupérer le résultat du dernier run") : null,
      (etat && etat.ok) ? e("div",{className:"hint",style:{marginBottom:8}},
        "Terminé."+(etat.credits?" Ce run a consommé "+etat.credits+" crédit"+(etat.credits>1?"s":"")+".":"")) : null,

      /* ── 2. Résultats : une sortie par agent ── */
      (enCours || clesSorties.length) ? e("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:6}},
        e("style",null,"@keyframes spgAttente{0%,100%{opacity:1}50%{opacity:.35}}"),
        ongletsVus.map(function(k){
          var pret = sorties && sorties[k];
          if(!pret && !enCours) return null;
          return e("button",{key:k,className:"mini-btn",disabled:!pret,
            title:pret?"":"En cours de rédaction chez Copy.ai",
            style:{padding:"4px 8px",fontSize:11,
              background:!pret?"#eceef2":(onglet===k?"#1a1a1a":"#fff"),
              color:!pret?"#9aa1ab":(onglet===k?"#fff":"#333"),
              borderColor:!pret?"#e1e4ea":undefined,cursor:pret?"pointer":"default",
              animation:!pret?"spgAttente 1.4s ease-in-out infinite":"none"},
            onClick:function(){ if(!pret) return; setOnglet(k); setTexte(sorties[k]); if(p.set) p.set("caption", sorties[k]); }},
            joli(k)+(pret?"":" …"));
        })) : null,
      (texte || clesSorties.length) ? e(React.Fragment,null,
        e("textarea",{value:texte, rows:8,
          onChange:function(ev){ setTexte(ev.target.value); if(p.set) p.set("caption", ev.target.value); },
          style:{width:"100%",marginBottom:8}}),
        e("button",{className:"mini-btn",style:{width:"100%",marginBottom:14},
          onClick:function(){ try{ navigator.clipboard.writeText(texte); }catch(err){} }},
          "Copier la légende")) : null,

      /* ── 3. Brief prérempli, replié : on l'ouvre pour ajuster ── */
      e("div",{style:{border:"1px solid #e6e6e6",borderRadius:9,padding:"10px 12px",marginBottom:12,background:"#fafbfc"}},
        e("div",{style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",gap:8},
            onClick:function(){ setBriefOuvert(!briefOuvert); }},
          e("div",null,
            e("div",{style:{fontSize:11,fontWeight:800,letterSpacing:".06em",textTransform:"uppercase",color:"#555"}},"Brief envoyé à Copy.ai"),
            e("div",{style:{fontSize:11.5,color:"#777",marginTop:2}},resume)),
          e("span",{style:{fontSize:11,fontWeight:700,color:"#285AFF",whiteSpace:"nowrap"}},briefOuvert?"Fermer":"Ajuster")),
        briefOuvert ? e("div",{style:{marginTop:10}},
          labS("Sujet du post","sujet"),
          aide("De quoi parle le post. Repris des textes de la carte : ajoute si besoin le contexte (qui, quoi, où, quand, chiffre clé)."),
          e("textarea",{rows:4,value:sujet,onChange:function(ev){ majBrief("sujet",ev.target.value); },style:{width:"100%",fontSize:12.5}}),
          labS("Description du visuel","visuel"),
          aide("Ce qu'on voit sur l'image. Rédigée automatiquement à partir du post ; précise-la si l'image montre quelque chose d'important (lieu, personne, produit)."),
          e("textarea",{rows:3,value:visuel,onChange:function(ev){ majBrief("visuel",ev.target.value); },style:{width:"100%",fontSize:12.5}}),
          lab("Lien source"),
          aide("Lien du communiqué ou de l'article d'origine, pour que l'IA reprenne les bons faits. Si tu n'en as pas, laisse RAS."),
          e("input",{type:"text",value:b.url||"",onChange:function(ev){ majBrief("url",ev.target.value||"RAS"); }}),
          labS("Livrables","livrables"),
          aide("Les réseaux pour lesquels écrire une légende. Un texte est produit par réseau coché."),
          e("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px 12px",marginBottom:6}},
            LIVRABLES.map(function(l){
              var on=(b.livrables||[]).indexOf(l)>=0;
              return e("label",{key:l,style:{fontSize:12,display:"flex",alignItems:"center",gap:4,cursor:"pointer"}},
                e("input",{type:"checkbox",checked:on,onChange:function(){
                  var a=(b.livrables||[]).filter(function(x){return x!==l;}); if(!on) a.push(l); majBrief("livrables",a); }}),l);
            })),
          e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 10px"}},
            e("div",null,labS("Pilier","pilier"),sel(b.pilier,PILIERS,function(v){majBrief("pilier",v);})),
            e("div",null,labS("Langue","langue"),sel(b.langue,LANGUES,function(v){majBrief("langue",v);}))),
          aide("Pilier = l'angle de marque : Proche (humain, terrain, local), Innovante (nouveauté, technologie), Performante (chiffres, résultats). Langue = langue des légendes."),
          labS("Thématique","thematique"),
          aide("Le sujet de fond du post. Il oriente le ton et les règles éditoriales de l'agent."),
          sel(b.thematique,THEMATIQUES,function(v){majBrief("thematique",v);},"Choisir…"),
          (Object.keys(choix).length) ? e("button",{className:"mini-btn",style:{marginTop:8},
            onClick:function(){ if(p.set) p.set("briefCopy", {}); }},"Tout reprendre du post") : null
        ) : null),

      /* ── Réglages, repliés par défaut ── */
      e("div",{style:{borderTop:"1px solid #eee",paddingTop:10}},
        e("div",{style:{cursor:"pointer",fontSize:11,fontWeight:800,letterSpacing:".06em",
            textTransform:"uppercase",color:"#888"},
          onClick:function(){ setOuvert(!ouvert); }},
          (ouvrirConnexion?"▾ ":"▸ ")+"Connexion Copy.ai"+(pret?" (connecté)":" (à faire une fois)")),
        ouvrirConnexion ? e("div",{style:{marginTop:10}},
          e("div",{className:"hint",style:{marginBottom:8}},
            "Ces réglages restent dans ce navigateur. La clé transite vers Copy.ai ",
            "via ton propre serveur et n'y est pas conservée."),
          lab("Clé API Copy.ai"),
          e("input",{type:"password",value:reg.cle||"",placeholder:"collée depuis ton espace Copy.ai",
            onChange:function(ev){ majReg("cle", ev.target.value); }}),
          e("div",{style:{height:6}}),
          lab("Identifiant du workflow"),
          e("div",{className:"hint",style:{marginBottom:4}},
            "Celui du WORKFLOW, dans son onglet API sur Copy.ai (il commence par WCFG- ou WCPC-)."),
          e("input",{type:"text",value:reg.workflowId||"",placeholder:"ex. WCFG-…",
            onChange:function(ev){ majReg("workflowId", ev.target.value.trim()); }}),
          e("div",{className:"hint",style:{marginTop:10}},
            "Solde exact des crédits : dans ton espace ",
            e("a",{href:"https://app.copy.ai",target:"_blank",rel:"noopener"},"Copy.ai"),
            " (l'API ne le communique pas)."),
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
