/* ═══════════════════════════════════════════════════════════════════════════
   CHARTE-GUARD.JS — garde-fou charte : trois niveaux, export contrôlé
   ---------------------------------------------------------------------------
   Principe (décision du 21/10/2026) : n'importe qui doit pouvoir produire un
   post, et ce post doit toujours respecter la charte.
     - conforme               -> rien à signaler
     - dérogation <= tolérance -> alerte + confirmation avant export
                                  (tolérance : CHARTE.composition.tolerance, 20 %)
     - au-delà                -> export BLOQUÉ, avec la raison

   Une règle listée dans CHARTE.composition.aConfirmer n'a pas encore été
   vérifiée dans le PDF de la charte : elle alerte mais ne bloque jamais.

   API
     SPGGuard.niveau(valeur, regle, {sens:"min"|"max", id})   -> "ok"|"derog"|"block"
     SPGGuard.evaluer(faits)  -> [{id, level:"info"|"warn"|"block", derog, msg}]
         faits : { gapTitre, texte:{taille,min}, debord }
     SPGGuard.publier(items)  : la page publie le verdict courant
     SPGGuard.controleExport(): appelé par Shell.doExport ; renvoie true si
                                l'export peut continuer.
   ═══════════════════════════════════════════════════════════════════════════ */
(function(global){

function tolerance(){ return (global.CHARTE&&CHARTE.composition&&CHARTE.composition.tolerance)||0.2; }
function aConfirmer(id){
  var l=(global.CHARTE&&CHARTE.composition&&CHARTE.composition.aConfirmer)||[];
  return l.indexOf(id)>=0;
}

/* Une valeur à atteindre au minimum (écart, taille de police) :
   >= regle -> ok ; >= regle*(1-tol) -> dérogation ; sinon bloqué. */
function niveau(valeur, regle, o){
  o=o||{};
  var t=tolerance(), niv;
  if(o.sens==="plage"){            /* regle = {min,max} */
    var lo=regle.min, hi=regle.max;
    niv = (valeur>=lo && valeur<=hi) ? "ok"
        : (valeur>=lo*(1-t) && valeur<=hi*(1+t)) ? "derog" : "block";
  } else if(o.sens==="egal"){      /* valeur imposée, écart toléré de t */
    var ecart=Math.abs(valeur-regle);
    niv = ecart<0.5 ? "ok" : (ecart<=regle*t ? "derog" : "block");
  } else if(o.sens==="max"){
    niv = valeur<=regle ? "ok" : (valeur<=regle*(1+t) ? "derog" : "block");
  } else {
    niv = valeur>=regle ? "ok" : (valeur>=regle*(1-t) ? "derog" : "block");
  }
  if(niv==="block" && o.id && aConfirmer(o.id)) niv="derog";   /* règle non vérifiée : jamais bloquante */
  return niv;
}

function px(v){ return Math.round(v); }

function evaluer(f){
  var out=[], C=(global.CHARTE&&CHARTE.composition)||{}, pc=Math.round(tolerance()*100);
  f=f||{};

  /* 1. Écart sous la cartouche titre */
  if(f.gapTitre!==undefined && f.gapTitre!==null && C.gapSousCartouche){
    var n=niveau(f.gapTitre, C.gapSousCartouche, {id:"gapSousCartouche"});
    if(n!=="ok"){
      var mini=Math.round(C.gapSousCartouche*(1-tolerance()));
      /* Règle encore à confirmer dans le PDF : on affiche, sans exiger de
         confirmation à l'export (voir CHARTE.composition.aConfirmer). */
      out.push({id:"gapSousCartouche", level:n==="block"?"block":"warn", derog:!aConfirmer("gapSousCartouche"),
        msg:"Écart sous la cartouche titre : "+px(f.gapTitre)+" px (charte : "+C.gapSousCartouche+
            " px, tolérance jusqu'à "+mini+" px). Réduis le texte ou la taille du bloc."});
    }
  }

  /* 2. Taille du texte */
  if(f.texte && f.texte.min){
    var nt=niveau(f.texte.taille, f.texte.min, {id:"tailleTexte"});
    if(nt!=="ok"){
      var plancher=Math.round(f.texte.min*(1-tolerance()));
      out.push({id:"tailleTexte", level:nt==="block"?"block":"warn", derog:true,
        msg:"Taille du texte : "+px(f.texte.taille)+" px (charte : "+f.texte.min+
            " px minimum, tolérance de "+pc+" % jusqu'à "+plancher+" px). Raccourcis le texte."});
    }
  }

  /* 2 bis. Mesures génériques : {id,label,valeur,regle,sens,unite}
     sens : "min" (défaut), "max", "plage" ({min,max}) ou "egal". */
  (f.mesures||[]).forEach(function(m){
    var nm=niveau(m.valeur, m.regle, {sens:m.sens, id:m.id});
    if(nm==="ok") return;
    var u=m.unite||"px", t=tolerance();
    var txtRegle, txtLim;
    if(m.sens==="plage"){
      txtRegle=m.regle.min+" à "+m.regle.max+" "+u;
      txtLim=Math.round(m.regle.min*(1-t))+" à "+Math.round(m.regle.max*(1+t))+" "+u;
    } else if(m.sens==="egal"){
      txtRegle=px(m.regle)+" "+u;
      txtLim=Math.round(m.regle*(1-t))+" à "+Math.round(m.regle*(1+t))+" "+u;
    } else {
      txtRegle=m.regle+" "+u+(m.sens==="max"?" maximum":" minimum");
      txtLim=m.sens==="max"?Math.round(m.regle*(1+t))+" "+u:Math.round(m.regle*(1-t))+" "+u;
    }
    out.push({id:m.id, level:nm==="block"?"block":"warn", derog:!aConfirmer(m.id),
      msg:m.label+" : "+px(m.valeur)+" "+u+" (charte : "+txtRegle+", tolérance de "+Math.round(t*100)+
          " % : "+((m.sens==="plage"||m.sens==="egal")?"de ":"jusqu'à ")+txtLim+")."+(m.conseil?" "+m.conseil:"")});
  });

  /* 2 ter. Le contenu recouvre la cartouche titre : chevauchement, pas style. */
  if(f.gapTitre!==undefined && f.gapTitre!==null && f.gapTitre<0){
    out.push({id:"recouvreCartouche", level:"block", derog:false,
      msg:"Le contenu recouvre la cartouche titre de "+px(-f.gapTitre)+" px. Raccourcis le texte ou réduis sa taille."});
  }

  /* 3. Débordement : le contenu empiète sur la marge basse ou la flèche.
        Ce n'est pas une tolérance de style, c'est un chevauchement : bloqué. */
  if(f.debord && f.debord>2){
    out.push({id:"debordement", level:"block", derog:false,
      msg:"Le contenu dépasse de "+px(f.debord)+" px dans la zone réservée (marge basse ou flèche de carrousel). "+
          "Raccourcis le texte ou réduis sa taille."});
  }
  return out;
}

var G={ items:[], niveau:niveau, evaluer:evaluer };

G.publier=function(items){ G.items=items||[]; };

/* Contrôle appelé juste avant l'export. */
G.controleExport=function(){
  var items=G.items||[];
  var bloquants=items.filter(function(i){return i.level==="block";});
  if(bloquants.length){
    global.alert("Export impossible : le visuel n'est pas conforme à la charte.\n\n"+
      bloquants.map(function(i){return "• "+i.msg;}).join("\n"));
    return false;
  }
  var derogs=items.filter(function(i){return i.derog;});
  if(derogs.length){
    return global.confirm("Ce visuel déroge à la charte (tolérance de "+Math.round(tolerance()*100)+" %) :\n\n"+
      derogs.map(function(i){return "• "+i.msg;}).join("\n")+"\n\nExporter quand même ?");
  }
  return true;
};

global.SPGGuard=G;
})(window);
