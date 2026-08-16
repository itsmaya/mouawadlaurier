/* ═══════════════════════════════════════════════════════════════════════════
   APP-SHELL.JS — Socle applicatif partagé (v2)
   Static Posts Generator Fisheye × TotalEnergies

   Regroupe en un seul exemplaire tout ce qui était dupliqué entre les
   générateurs : undo, formats, wiring SaveManager, sonde de fond par défaut,
   galerie de pictos, export (Puppeteer + fallback), UI kit du panneau,
   validateur de conformité charte.

   Dépend de : charte-2026.js, te-charte.js, rich-body.js, save-manager.js,
               bg-controls.js, pictos.js, React/ReactDOM (window)

   API principale (dans un composant React) :
     var shell = Shell.useApp({
       pageKey:"blocklayouts", legacy:null,
       DEFAULT:…, formats:["1x1","4x5","9x16","16x9"],
       bgCandidates:function(formatKey){ return [urls…]; },
       normalize:function(state){ return state; }  // rattrape les vieilles saves
     });
   puis : shell.st, shell.set, shell.setSt, shell.format, shell.setFormat,
          shell.bgStatus, shell.bgNat, shell.maxZoom,
          shell.save (wiring complet), shell.doExport(cardRef, opts)

   Hors composant :
     Shell.EXPORT_MODE       true si la page est ouverte par Puppeteer
     Shell.injectStyles()    styles du panneau (appelé automatiquement)
     Shell.ui.*              Section, Tabs, TabNav, SegButtons, GradPicker,
                             FormatPicker, Warnings, SliderField
   ═══════════════════════════════════════════════════════════════════════════ */
(function(global){

var Shell = {};

/* ═══ 1. Mode export ══════════════════════════════════════════════════════
   Correction B1 + B2 : parsing robuste de #exportkey et rendu à l'échelle 1
   quand la page est ouverte par le serveur Puppeteer. */
function readExportKey(){
  var h = global.location.hash || "";
  var m = h.match(/exportkey=([^&#]+)/);
  return m ? m[1] : null;
}
Shell.readExportKey = readExportKey;
Shell.EXPORT_MODE = !!readExportKey();

/* ═══ 2. Styles du panneau (UI kit) — design system unifié ═══════════════
   Aligné sur le langage visuel du Carrousel :
   panel latéral sticky 320px, tabs underline, seg buttons connectés,
   toggle CSS (appearance:none), couleur primaire #0098E3, gradient export. */
function injectStyles(){
  if(document.getElementById("shell-styles")) return;
  var s=document.createElement("style");
  s.id="shell-styles";
  s.textContent=[
/* ── Reset & base ── */
"*{box-sizing:border-box;}",
"body{margin:0;font-family:'Nunito',sans-serif;background:#f0f2f5;color:#1a1a1a;}",
"#root{min-height:100vh;}",
/* ── Layout : panel fixe gauche + workspace droit ── */
".app-layout{display:flex;min-height:100vh;padding-top:52px;}",
".panel{width:320px;flex-shrink:0;background:#fff;border-right:1px solid #e0e0e0;",
  "height:calc(100vh - 52px);position:sticky;top:52px;overflow-y:auto;padding:16px;}",
".preview-wrap{flex:1;display:flex;align-items:flex-start;justify-content:center;",
  "padding:32px 24px;}",
/* ── Sections ── */
".section{margin-bottom:16px;}.section:last-child{margin-bottom:0;}",
".section>h2{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;",
  "color:#888;margin:0 -16px 12px;padding:10px 16px;",
  "border-top:1px solid #f0f0f0;border-bottom:1px solid #f0f0f0;",
  "display:flex;align-items:center;gap:6px;}",
".section>h2::before{content:'';display:block;width:3px;height:12px;",
  "background:linear-gradient(135deg,#0098E3,#4632FF);border-radius:2px;flex-shrink:0;}",
/* ── Labels & hints ── */
"label.field-label{display:block;font-size:12px;font-weight:600;color:#404040;margin-bottom:4px;}",
".hint{font-size:11px;color:#737373;}",
/* ── Inputs ── */
"input[type=text],textarea{width:100%;font-size:13px;border:1px solid #d4d4d4;",
  "border-radius:6px;padding:7px 10px;font-family:'Nunito',sans-serif;",
  "transition:border-color .15s,box-shadow .15s;}",
"input[type=text]:focus,textarea:focus{outline:none;border-color:#0098E3;",
  "box-shadow:0 0 0 2px rgba(0,152,227,.15);}",
"textarea{resize:vertical;min-height:66px;line-height:1.5;}",
"input[type=range]{width:100%;accent-color:#0098E3;}",
/* ── File drop ── */
".file-drop{position:relative;cursor:pointer;border-radius:8px;border:1.5px dashed #ccc;",
  "overflow:hidden;display:flex;align-items:center;justify-content:center;",
  "background:#fafafa;height:96px;transition:border-color .15s;}",
".file-drop.small{height:64px;}",
".file-drop:hover{border-color:#0098E3;}",
".file-drop img{width:100%;height:100%;object-fit:contain;padding:4px;}",
".file-drop-empty{display:flex;flex-direction:column;align-items:center;gap:4px;",
  "color:#a3a3a3;font-size:11px;text-align:center;padding:0 6px;}",
".file-drop .remove-btn{position:absolute;top:4px;right:4px;background:rgba(255,255,255,.92);",
  "border-radius:999px;padding:4px;border:none;cursor:pointer;display:flex;}",
/* ── Spinner ── */
"@keyframes spin{to{transform:rotate(360deg);}}.spin{animation:spin 1s linear infinite;display:inline-flex;}",
/* ── Segment buttons — style connecté ── */
".seg{display:flex;border:1px solid #ddd;border-radius:6px;overflow:hidden;}",
".seg button{flex:1;padding:7px 6px;border:none;border-right:1px solid #ddd;",
  "background:#fff;font-size:12px;cursor:pointer;color:#555;font-family:inherit;",
  "transition:background .1s,color .1s;min-width:0;}",
".seg button:last-child{border-right:none;}",
".seg button.on{background:#0098E3;color:#fff;font-weight:600;}",
".seg button:hover:not(.on){background:#f0f8ff;}",
/* ── Upload hint ── */
".upload-hint{font-size:11px;color:#737373;background:#f8f8f8;border:1px solid #e5e5e5;",
  "border-radius:6px;padding:8px 10px;margin-bottom:10px;}",
".upload-hint b{color:#404040;}",
/* ── Gradient swatches ── */
".grad-row{display:flex;gap:7px;flex-wrap:wrap;}",
".grad-sw{flex:1;height:38px;border-radius:7px;cursor:pointer;border:2px solid transparent;",
  "transition:border-color .12s,transform .12s;}",
".grad-sw:hover{transform:translateY(-1px);}",
".grad-sw.on{border-color:#1a1a1a;box-shadow:0 0 0 2px #fff inset,0 2px 8px rgba(0,0,0,.18);}",
/* ── Toggle — rendu custom via appearance:none, sans changer le HTML ── */
".toggle{display:flex;align-items:center;gap:9px;font-size:13px;font-weight:600;",
  "cursor:pointer;user-select:none;}",
".toggle.off{opacity:.4;cursor:default;}",
".toggle input[type=checkbox]{-webkit-appearance:none;appearance:none;",
  "width:38px;height:21px;border-radius:11px;background:#ccc;",
  "position:relative;cursor:pointer;flex-shrink:0;transition:background .15s;}",
".toggle input[type=checkbox]:checked{background:#0098E3;}",
".toggle input[type=checkbox]::before{content:'';position:absolute;",
  "top:2.5px;left:2.5px;width:16px;height:16px;border-radius:50%;",
  "background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.25);transition:transform .15s;}",
".toggle input[type=checkbox]:checked::before{transform:translateX(17px);}",
".toggle input[type=checkbox]:disabled{opacity:.5;cursor:default;}",
/* ── Tabs — style underline comme le Carrousel ── */
".panel-tabs-wrap{margin:-16px -16px 0;border-bottom:1px solid #e0e0e0;background:#fafafa;flex-shrink:0;display:flex;align-items:center;}",
".panel-tabs{flex:1;display:flex;overflow-x:auto;padding:0 4px;gap:0;scrollbar-width:none;align-items:stretch;}",
".panel-tabs::-webkit-scrollbar{display:none;}",
".panel-tab{padding:9px 12px;font-size:12px;font-weight:500;color:#666;border:none;",
  "background:none;cursor:pointer;white-space:nowrap;",
  "border-bottom:2px solid transparent;transition:color .15s,border-color .15s;flex-shrink:0;}",
".panel-tab.on{color:#0098E3;border-bottom-color:#0098E3;font-weight:600;}",
".panel-tab:hover:not(.on){color:#333;}",
".panel-tab-content{display:none;padding-top:16px;}",
".panel-tab-content.on{display:block;}",
/* ── Tab nav (boutons Précédent / Suivant / Export) ── */
".tab-nav{display:flex;justify-content:space-between;align-items:center;padding:14px 0 4px;gap:8px;}",
".tab-nav-btn{display:flex;align-items:center;gap:6px;padding:7px 14px;border-radius:6px;",
  "border:1px solid #ddd;background:#fff;cursor:pointer;font-size:12px;",
  "font-weight:600;font-family:inherit;color:#333;transition:background .12s;}",
".tab-nav-btn:hover{background:#f5f5f5;}",
".tab-nav-btn.primary{background:linear-gradient(135deg,#0098E3,#4632FF);",
  "color:#fff;border:none;font-weight:700;}",
".tab-nav-btn.primary:hover{opacity:.9;}",
/* ── Avertissements charte ── */
".charte-warn{display:flex;gap:8px;align-items:flex-start;font-size:11px;",
  "border-radius:7px;padding:8px 10px;margin-top:8px;line-height:1.45;}",
".charte-warn.info{background:#eef5fb;color:#2a5a8a;border:1px solid #d5e6f5;}",
".charte-warn.warn{background:#fdf3e4;color:#8a5a1a;border:1px solid #f3e0bd;}",
".charte-warn.block{background:#fdeaea;color:#a02a2a;border:1px solid #f3c9c9;}",
/* ── Mini boutons utilitaires ── */
".mini-btn{font-size:11px;font-weight:600;padding:5px 12px;border-radius:6px;",
  "border:1px solid #ddd;background:#fff;cursor:pointer;font-family:inherit;",
  "transition:background .1s;}.mini-btn:hover{background:#f5f5f5;}",
/* ── Mobile : panneau slide-in depuis la gauche ── */
".panel-backdrop{display:none;position:fixed;inset:0;top:52px;background:rgba(0,0,0,.45);z-index:140;}",
".panel-backdrop.open{display:block;}",
".panel-fab{display:none;position:fixed;bottom:52px;left:16px;z-index:130;",
  "width:48px;height:48px;border-radius:50%;border:none;cursor:pointer;",
  "background:linear-gradient(135deg,#0098E3,#4632FF);color:#fff;",
  "align-items:center;justify-content:center;",
  "box-shadow:0 4px 20px rgba(0,0,0,.28);transition:opacity .15s;}",
".panel-fab:hover{opacity:.88;}",
".panel-close-btn{display:none;border:none;background:none;font-size:22px;color:#aaa;",
  "cursor:pointer;padding:2px 10px 0 4px;line-height:1;flex-shrink:0;transition:color .15s;}",
".panel-close-btn:hover{color:#333;}",
"@media(max-width:768px){",
  ".panel{position:fixed!important;left:-340px;top:52px;",
    "height:calc(100vh - 52px);z-index:150;",
    "transition:left .28s cubic-bezier(.4,0,.2,1);box-shadow:none;width:300px;}",
  ".panel.panel-open{left:0;box-shadow:4px 0 32px rgba(0,0,0,.18);}",
  ".panel-fab{display:flex;}",
  ".panel-close-btn{display:flex;align-items:center;}",
  ".preview-wrap{padding:20px 14px!important;}",
"}",
  ].join("");
  document.head.appendChild(s);
}
Shell.injectStyles = injectStyles;

/* ═══ 3. Hook principal ══════════════════════════════════════════════════ */
Shell.useApp = function(cfg){
  var R=global.React, e=R.createElement;
  var useState=R.useState, useRef=R.useRef, useEffect=R.useEffect;

  /* ── State + annulation (Ctrl/Cmd+Z) ──────────────────────────────────────
     La pile est bornée DEUX FOIS : en nombre d'entrées et en poids mémoire.

     Pourquoi le poids : les images (fond, portrait, picto personnalisé) vivent
     dans l'état sous forme de data:URL base64, soit plusieurs Mo chacune. Les
     instantanés partagent leurs références tant que l'image ne change pas,
     mais dès qu'on remplace un fond, l'ancien base64 reste retenu par la pile.
     Trente remplacements = trente images en mémoire, pour rien.
     On plafonne donc la charge base64 cumulée ; au-delà, les entrées les plus
     anciennes sont libérées (on garde toujours quelques crans d'annulation). */
  var HIST_MAX_ENTRIES = 30;
  var HIST_MAX_BYTES   = 48 * 1024 * 1024;   /* ~48 Mo de base64 cumulés */
  var HIST_MIN_KEEP    = 5;                  /* jamais moins de 5 annulations */

  /* Poids base64 d'un état. Mémoïsé par identité d'objet : un instantané n'est
     jamais muté, son poids est donc stable, et les sous-objets non modifiés sont
     partagés entre instantanés — le calcul reste négligeable. */
  var weightCache = (typeof WeakMap!=="undefined") ? new WeakMap() : null;
  function stateWeight(o, depth){
    if(o===null || o===undefined) return 0;
    var t = typeof o;
    if(t==="string") return (o.length>256 && o.lastIndexOf("data:",0)===0) ? o.length : 0;
    if(t!=="object") return 0;
    if(depth>5) return 0;                      /* garde-fou anti-récursion */
    if(weightCache){ var c=weightCache.get(o); if(c!==undefined) return c; }
    var total=0, i;
    if(Array.isArray(o)){
      for(i=0;i<o.length;i++) total+=stateWeight(o[i],depth+1);
    } else {
      for(var k in o) if(Object.prototype.hasOwnProperty.call(o,k))
        total+=stateWeight(o[k],depth+1);
    }
    if(weightCache) weightCache.set(o,total);
    return total;
  }

  var a0=useState(cfg.DEFAULT), st=a0[0], _setSt=a0[1];
  var histRef=useRef([]), histIdx=useRef(-1);

  function trimHistory(){
    var h=histRef.current;
    if(h.length>HIST_MAX_ENTRIES) h.splice(0, h.length-HIST_MAX_ENTRIES);
    var total=0, i;
    for(i=0;i<h.length;i++) total+=stateWeight(h[i],0);
    while(h.length>HIST_MIN_KEEP && total>HIST_MAX_BYTES){
      total-=stateWeight(h[0],0);
      h.shift();
    }
  }

  function setSt(fn){
    _setSt(function(prev){
      var next = typeof fn==="function" ? fn(prev) : fn;
      if(next===prev) return prev;
      histRef.current=histRef.current.slice(0,histIdx.current+1);
      histRef.current.push(prev);
      trimHistory();
      histIdx.current=histRef.current.length-1;
      return next;
    });
  }
  function set(k,v){ setSt(function(p){ var c=Object.assign({},p); c[k]=v; return c; }); }
  useEffect(function(){
    function onKey(ev){
      if((ev.ctrlKey||ev.metaKey)&&ev.key==="z"&&!ev.shiftKey){
        ev.preventDefault();
        if(histIdx.current<0) return;
        var p=histRef.current[histIdx.current]; histIdx.current--; _setSt(p);
      }
    }
    global.addEventListener("keydown",onKey);
    return function(){ global.removeEventListener("keydown",onKey); };
  },[]);

  /* ── SaveManager ── */
  var saveStore=useRef(null);
  if(!saveStore.current) saveStore.current=global.SaveManager.createStore(cfg.pageKey,{legacy:cfg.legacy||undefined});
  var s1=useState(null), currentId=s1[0], setCurrentId=s1[1];
  var s2=useState(""), currentName=s2[0], setCurrentName=s2[1];
  /* La signature de l'état enregistré doit être un STATE, pas un ref :
     sur une mise à jour, currentId et currentName ne changent pas, donc
     seul un changement d'état peut redéclencher le rendu et remettre le
     bouton du header au propre. (Avec un ref, la sauvegarde avait bien lieu
     mais l'interface restait figée sur « modifications non enregistrées ».) */
  var shSt=useState(null), smHash=shSt[0], setSmHash=shSt[1];
  var smFolder=useRef("");
  var statusRootRef=useRef(null);
  var dirty = currentId!==null && smHash!==null &&
              global.SaveManager.hashState(st)!==smHash;

  /* ── Fond par défaut ── */
  var s4=useState({s:"loading",p:null}), bgStatus=s4[0], setBgStatus=s4[1];
  useEffect(function(){
    if(!cfg.bgCandidates) return;
    if(st.bgCustom) return;
    var k=st.format; setBgStatus({s:"loading",p:null});
    global.tryLoadDefault(cfg.bgCandidates(k),
      function(dataUrl,srcUrl){
        setSt(function(p){ if(p.bgCustom||p.format!==k) return p;
          var c=Object.assign({},p); c.bgImg=dataUrl; c.bgIsDefault=true; return c; });
        setBgStatus({s:"ok",p:srcUrl});
      },
      function(){
        setSt(function(p){ if(p.bgCustom||p.format!==k) return p;
          var c=Object.assign({},p); c.bgImg=null; c.bgIsDefault=false; return c; });
        setBgStatus({s:"missing",p:null});
      });
  },[st.format,st.bgCustom]);

  /* ── Dimensions naturelles du fond + zoom max sans perte ── */
  var s5=useState({w:0,h:0}), bgNat=s5[0], setBgNat=s5[1];
  useEffect(function(){
    if(!st.bgImg){ setBgNat({w:0,h:0}); return; }
    var im=new Image();
    im.onload=function(){ setBgNat({w:im.naturalWidth,h:im.naturalHeight}); };
    im.onerror=function(){ setBgNat({w:0,h:0}); };
    im.src=st.bgImg;
  },[st.bgImg]);
  var maxZoom=300;
  (function(){
    if(bgNat.w>0&&bgNat.h>0){
      var cf=global.chFormat(st.format);
      var ir=bgNat.w/bgNat.h, cr=cf.outputW/cf.outputH;
      var coverW=(ir>cr)?cf.outputH*ir:cf.outputW, coverH=(ir>cr)?cf.outputH:cf.outputW/ir;
      maxZoom=Math.max(100,Math.min(300,Math.min(
        Math.floor(bgNat.w/coverW*100), Math.floor(bgNat.h/coverH*100))));
    }
  })();

  /* ── StatusBar dans le header + languette ── */
  useEffect(function(){
    var slot=document.getElementById("sm-status-slot");
    if(slot&&global.SaveManager.StatusBar){
      if(!statusRootRef.current) statusRootRef.current=global.ReactDOM.createRoot(slot);
      statusRootRef.current.render(e(global.SaveManager.StatusBar,{
        currentId:currentId,currentName:currentName,dirty:dirty,
        onSave:function(){
          var name=currentName||("Version "+new Date().toLocaleString("fr-FR"));
          saveStore.current.save({id:currentId||undefined,name:name,
            folder:smFolder.current,state:st},function(rec){
            if(!rec) return;
            setCurrentId(rec.id); setCurrentName(rec.name);
            setSmHash(global.SaveManager.hashState(st));
          });
        }
      }));
    }
    if(currentId) localStorage.setItem("sm_last_id_"+cfg.pageKey,currentId);
  },[currentId,currentName,dirty,st]);

  /* Normalisation d'un état chargé — appliquée aux DEUX chemins de
     chargement (restauration au démarrage ET chargement depuis la liste).
     Permet à une page de rattraper ses anciennes sauvegardes. */
  function normalizeLoaded(state){
    var merged = Object.assign({},cfg.DEFAULT,state||{});
    return cfg.normalize ? cfg.normalize(merged) : merged;
  }

  /* ── Restauration : exportkey (Puppeteer) puis dernier projet ── */
  useEffect(function(){
    var key=readExportKey();
    if(key){
      try{
        var raw=localStorage.getItem(key);
        if(raw){ setSt(Object.assign({},cfg.DEFAULT,JSON.parse(raw)));
                 localStorage.removeItem(key); return; }
      }catch(err){}
    }
    var lastId=localStorage.getItem("sm_last_id_"+cfg.pageKey);
    if(!lastId) return;
    saveStore.current.get(lastId,function(rec){
      if(!rec||!rec.state) return;
      var loaded=normalizeLoaded(rec.state);
      setSt(loaded);
      setCurrentId(rec.id); setCurrentName(rec.name);
      smFolder.current=rec.folder||"";
      setSmHash(global.SaveManager.hashState(loaded));
    });
  },[]);

  /* ── Export unifié (correction B1/B2/B4) ──
     doExport(cardRef, {stateOverride, formatKey, filename}) → Promise<Blob>
     et déclenche le téléchargement si opts.download !== false. */
  var busyState=useState(false), busy=busyState[0], setBusy=busyState[1];
  function doExport(cardRef, opts){
    opts=opts||{};
    var stx=opts.stateOverride||st;
    var fk=opts.formatKey||stx.format;
    var cf=global.chFormat(fk);
    var fname=opts.filename||global.SaveManager.exportFilename(
      smFolder.current,currentName||cfg.pageKey,fk);
    setBusy(true);
    var exportKey="wie_export_"+Date.now();
    try{ localStorage.setItem(exportKey,JSON.stringify(
      Object.assign({},stx,{format:fk}))); }catch(er){}
    var currentUrl=global.location.href.split("#")[0]+"#exportkey="+exportKey;
    var SRV="http://localhost:3001";
    var p=fetch(SRV+"/ping",{signal:AbortSignal.timeout(1500)})
      .then(function(r){ if(!r.ok) throw new Error("ping");
        return fetch(SRV+"/export",{method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({url:currentUrl,selector:"[data-export-card]",
            width:cf.outputW,height:cf.outputH,filename:fname})});
      })
      .then(function(r){ if(!r.ok) throw new Error("export server "+r.status); return r.blob(); })
      .catch(function(){
        /* Repli dom-to-image : capture le DOM local.
           On incorpore d'abord les images externes (voir Shell.inlineImages),
           et on attend que les polices soient réellement prêtes — sans quoi le
           PNG sortirait dans la police de repli du système. */
        var restaurer = null;
        return document.fonts.ready
          .then(function(){ return Shell.inlineImages(cardRef.current); })
          .then(function(fn){
            restaurer = fn;
            return global.domtoimage.toPng(cardRef.current,{
              width:cardRef.current.offsetWidth,height:cardRef.current.offsetHeight,useCORS:true});
          })
          .then(function(d){ if(restaurer) restaurer(); return fetch(d); })
          .then(function(r){ return r.blob(); })
          .catch(function(err){ if(restaurer) restaurer(); throw err; });
      });
    return p.then(function(blob){
        if(opts.download!==false) global.SaveManager.downloadBlob(blob,fname);
        setBusy(false); return blob;
      })
      .catch(function(er){
        setBusy(false);
        console.error("Export :",er);
        alert("L'export a échoué : "+(er&&er.message?er.message:er));
        throw er;
      });
  }
  useEffect(function(){ global.smDownloadTrigger=function(){
    if(cfg.onDownload) cfg.onDownload(); }; });

  return {
    st:st, setSt:setSt, set:set,
    format:st.format,
    setFormat:function(k){ set("format",k); },
    bgStatus:bgStatus, bgNat:bgNat, maxZoom:maxZoom,
    busy:busy,
    save:{
      store:saveStore.current,
      currentId:currentId, currentName:currentName, dirty:dirty,
      folder:smFolder,
      onLoad:function(rec){
        var loaded=normalizeLoaded(rec.state);
        setSt(loaded);
        setCurrentId(rec.id); setCurrentName(rec.name);
        smFolder.current=rec.folder||"";
        setSmHash(global.SaveManager.hashState(loaded));
      },
      onSaved:function(rec){
        setCurrentId(rec.id); setCurrentName(rec.name);
        smFolder.current=rec.folder||"";
        setSmHash(global.SaveManager.hashState(st));
      }
    },
    doExport:doExport,

    /* Diagnostic : état courant de la pile d'annulation (nombre d'entrées et
       charge base64 retenue). Utile pour vérifier que le plafond mémoire fait
       son travail — sans effet de bord. */
    historyInfo:function(){
      var h=histRef.current, total=0, i;
      for(i=0;i<h.length;i++) total+=stateWeight(h[i],0);
      return {entries:h.length, bytes:total};
    }
  };
};


/* ═══ 3 bis. Incorporation des images avant export ════════════════════════
   ┌─────────────────────────────────────────────────────────────────────────┐
   │  POURQUOI                                                               │
   │  Une carte contient des <img> qui pointent vers des fichiers du site :   │
   │  les pictogrammes du cartouche et les guillemets de la citation.         │
   │  À l'écran, le navigateur les affiche normalement.                       │
   │                                                                          │
   │  Au moment de fabriquer le PNG, l'exporteur doit relire ces images       │
   │  lui-même pour les incorporer. S'il n'y parvient pas — requête refusée,  │
   │  cache capricieux, connexion mobile qui coupe — il abandonne l'image     │
   │  SANS ERREUR. D'où le symptôme « les images ne sont pas dans l'export    │
   │  alors qu'on les voit à l'écran ».                                       │
   │                                                                          │
   │  On ne lui laisse plus ce travail : avant capture, chaque <img> externe  │
   │  est converti en data:URL (donc autonome), puis restauré ensuite.        │
   │  Le résultat ne dépend plus de ce que l'exporteur arrive à retélécharger.│
   └─────────────────────────────────────────────────────────────────────────┘ */

/* Cache : une même image n'est convertie qu'une fois par session. */
var _inlineCache = {};

/* Convertit une <img> DÉJÀ AFFICHÉE en data:URL, sans aucune requête réseau.
   C'est le point essentiel : l'image est déjà décodée par le navigateur, on
   se contente de la peindre dans un canvas. Re-télécharger l'image (ce que
   fait l'exporteur, et ce que faisait une première version de ce code) échoue
   précisément dans les situations qu'on veut couvrir — réseau mobile coupé,
   fichier devenu inaccessible, cache capricieux. */
function liveImgToDataUrl(im){
  var cle = im.currentSrc || im.src;
  if(_inlineCache[cle]) return _inlineCache[cle];
  if(!im.complete || !im.naturalWidth) return null;   /* pas encore décodée */
  try{
    var c = document.createElement("canvas");
    c.width  = im.naturalWidth;
    c.height = im.naturalHeight;
    c.getContext("2d").drawImage(im, 0, 0);
    var d = c.toDataURL("image/png");
    _inlineCache[cle] = d;
    return d;
  }catch(err){
    /* Canvas « teinté » : image d'un autre domaine sans en-tête CORS.
       On renonce à celle-ci plutôt que de faire échouer tout l'export. */
    console.warn("Image non incorporable (origine externe) :", cle);
    return null;
  }
}

/* Incorpore les <img> externes du nœud ; renvoie la fonction de restauration. */
Shell.inlineImages = function(node){
  if(!node) return Promise.resolve(function(){});
  var cibles = Array.prototype.slice.call(node.querySelectorAll("img"))
    .filter(function(im){
      var src = im.getAttribute("src") || "";
      return src && src.lastIndexOf("data:",0) !== 0;
    });
  if(!cibles.length) return Promise.resolve(function(){});

  /* Attendre que les images en cours de chargement soient décodées : sans ça,
     naturalWidth vaut 0 et on ne pourrait rien peindre. */
  var attentes = cibles.map(function(im){
    if(im.complete && im.naturalWidth) return Promise.resolve();
    return new Promise(function(res){
      var fini = false;
      function stop(){ if(!fini){ fini=true; res(); } }
      im.addEventListener("load", stop, {once:true});
      im.addEventListener("error", stop, {once:true});
      setTimeout(stop, 3000);            /* jamais bloquer l'export */
    });
  });

  return Promise.all(attentes).then(function(){
    var anciens = [];
    cibles.forEach(function(im){
      var d = liveImgToDataUrl(im);
      anciens.push(d ? im.getAttribute("src") : null);
      if(d) im.setAttribute("src", d);
    });
    return function(){
      cibles.forEach(function(im,i){
        if(anciens[i]!==null) im.setAttribute("src", anciens[i]);
      });
    };
  });
};

/* ═══ 4. UI kit ══════════════════════════════════════════════════════════ */
Shell.ui = {};

Shell.ui.Section = function(p){
  var e=React.createElement;
  return e("div",{className:"section"},
    e("h2",null,p.title),
    p.children);
};

Shell.ui.SegButtons = function(p){
  var e=React.createElement;
  return e("div",{className:"seg"},p.options.map(function(o){
    return e("button",{key:o.v,className:p.value===o.v?"on":"",
      onClick:function(){ p.onChange(o.v); }},o.l);
  }));
};

Shell.ui.GradPicker = function(p){
  var e=React.createElement;
  var G=window.GRADS;
  return e(React.Fragment,null,
    e("div",{className:"grad-row"},Object.keys(G).map(function(k){
      return e("div",{key:k,className:"grad-sw"+(p.value===k?" on":""),
        title:G[k].label,
        style:{backgroundImage:window.chGrad(k)},
        onClick:function(){ p.onChange(k); }});
    })),
    e("div",{style:{fontSize:11,color:"#404040",marginTop:8,display:"flex",alignItems:"center",gap:6}},
      e("i",{style:{width:12,height:12,borderRadius:3,display:"inline-block",
        backgroundImage:window.chGrad(p.value)}}),
      G[p.value].label," : ",G[p.value].from," → ",G[p.value].to,
      "  ·  diagonale 135° (charte 2026)"));
};

Shell.ui.FormatPicker = function(p){
  var e=React.createElement;
  return e("div",{style:{display:"flex",gap:4,flexWrap:"wrap"}},
    p.formats.map(function(k){
      var f=window.chFormat(k), on=p.value===k;
      var vh=14, vw=Math.round(vh*(f.outputW/f.outputH));
      if(vw>22){ vw=22; vh=Math.round(vw*(f.outputH/f.outputW)); }
      return e("div",{key:k,onClick:function(){ p.onChange(k); },
        style:{display:"flex",alignItems:"center",gap:6,flex:"1 1 0",
          padding:"7px 8px",borderRadius:7,cursor:"pointer",
          border:on?"2px solid #1a1a1a":"2px solid #e8e8e8",
          background:on?"#f0efec":"#fafafa",transition:"all .15s",
          minWidth:0,justifyContent:"center",flexDirection:"column"}},
        e("div",{style:{width:vw,height:vh,borderRadius:2,
          background:on?"#1a1a1a":"#ccc",flexShrink:0}}),
        e("div",{style:{fontWeight:700,fontSize:10,color:on?"#1a1a1a":"#555",
          textAlign:"center",lineHeight:1.2,marginTop:3}},f.label));
    }));
};

Shell.ui.Tabs = function(p){
  var e=React.createElement;
  return e("div",{className:"panel-tabs-wrap"},
    e("div",{className:"panel-tabs"},
      p.tabs.map(function(t){
        return e("div",{key:t.id,
          className:"panel-tab"+(p.active===t.id?" on":""),
          onClick:function(){ p.onChange(t.id); }},t.label);
      })),
    e("button",{
      className:"panel-close-btn",
      onClick:function(){ if(Shell._panelClose) Shell._panelClose(); },
      "aria-label":"Fermer le panneau"
    },"×")
  );
};

Shell.ui.TabNav = function(p){
  var e=React.createElement;
  return e("div",{className:"tab-nav"},
    p.prev?e("button",{className:"tab-nav-btn",onClick:p.onPrev},"← ",p.prev):e("div",null),
    p.next?e("button",{className:"tab-nav-btn primary",onClick:p.onNext},p.next," →"):
    (p.action||null));
};

Shell.ui.SliderField = function(p){
  var e=React.createElement;
  return e(React.Fragment,null,
    e("label",{className:"field-label"},p.label),
    e("input",{type:"range",min:p.min,max:p.max,step:p.step||1,value:p.value,
      onChange:function(ev){ p.onChange(parseFloat(ev.target.value)); }}));
};

/* ═══ 5. Validateur de conformité charte ════════════════════════════════
   facts : { lowCarbon, gradKey, nBlocks, isStory, fontSizesCount,
             imageCoverage, hasInset, textLines, gradientsUsed }
   Retourne [{level:"info"|"warn"|"block", msg}] */
Shell.validate = function(facts){
  var out=[], CH=global.CHARTE;
  function rule(id){ for(var i=0;i<CH.rules.length;i++) if(CH.rules[i].id===id) return CH.rules[i]; return null; }
  function push(id){ var r=rule(id); if(r) out.push(r); }
  if(facts.lowCarbon){
    if(facts.gradKey==="rouge") push("low-carbon-no-red");
    else if(facts.gradKey!=="vert") push("low-carbon-green");
  }
  if(facts.nBlocks!==undefined){
    if(facts.nBlocks>CH.components.block.maxBlocks) push("max-4-blocks");
    else if(facts.isStory&&facts.nBlocks>CH.components.block.maxBlocksStory) push("max-3-blocks-story");
  }
  if(facts.fontSizesCount!==undefined&&facts.fontSizesCount>CH.components.block.maxFontSizes)
    push("max-2-font-sizes");
  if(facts.imageCoverage!==undefined&&facts.imageCoverage>(1-CH.components.block.minImageVisible))
    push("image-50-visible");
  if(facts.hasInset&&facts.isStory) push("no-inset-story");
  if(facts.textLines!==undefined&&facts.textLines>CH.text.maxLinesBeforeGray&&!facts.usesGray)
    push("gray-over-5-lines");
  if(facts.gradientsUsed!==undefined&&facts.gradientsUsed>1&&facts.bgKind!=="white")
    push("one-gradient");
  return out;
};

Shell.ui.Warnings = function(p){
  var e=React.createElement;
  if(!p.items||!p.items.length) return null;
  return e(React.Fragment,null,p.items.map(function(w,i){
    return e("div",{key:i,className:"charte-warn "+w.level},
      e("span",{style:{flexShrink:0}},w.level==="info"?"ℹ":w.level==="warn"?"⚠":"⛔"),
      e("span",null,w.msg));
  }));
};

/* ─── NavMarkPicker ────────────────────────────────────────────────────────
   Props : value, onChange                                                  */
Shell.ui.NavMarkPicker = function(p){
  var e=React.createElement;
  return e(React.Fragment,null,
    e("label",{className:"field-label"},"Repère de carrousel"),
    e(Shell.ui.SegButtons,{value:p.value,onChange:p.onChange,
      options:[{v:"arrow",l:"Flèche →"},{v:"dot",l:"Point (fin)"},{v:"none",l:"Aucun"}]}));
};

/* ─── BadgeEditor ──────────────────────────────────────────────────────────
   Gère badge main/sub + PictoGallery (init + sync dégradé).
   Props : st, set, setSt, active (booléen : onglet visible ?),
           uppercase (booléen optionnel : forcer MAJUSCULES sur les inputs)  */
Shell.ui.BadgeEditor = function(p){
  var e=React.createElement,useEffect=React.useEffect;
  /* Chargement pictos une seule fois */
  useEffect(function(){
    global.PictoGallery.load(function(){
      var keys=global.PictoGallery.getKeys();
      p.setSt(function(prev){
        var c=Object.assign({},prev);
        if(keys.indexOf(prev.badgeIconKey)<0) c.badgeIconKey=keys[0];
        return c;
      });
    });
  },[]);
  /* Init + sync dégradé quand l'onglet devient visible */
  useEffect(function(){
    if(!p.active) return;
    var ct=document.getElementById("spg-picto-gallery");
    if(ct&&!ct._pg){
      ct._pg=global.PictoGallery.init(ct,{
        grad:global.chGrad(p.st.grad),
        selected:p.st.badgeIconKey,
        custom:p.st.badgeIconCustom,
        onChange:function(key){
          p.setSt(function(prev){var c=Object.assign({},prev);c.badgeIconKey=key;c.badgeIconCustom=null;return c;});
        },
        onCustom:function(d){
          p.setSt(function(prev){var c=Object.assign({},prev);c.badgeIconCustom=d;return c;});
        }
      });
    }
    if(ct&&ct._pg) ct._pg.setGrad(global.chGrad(p.st.grad));
  },[p.active,p.st.grad]);

  function onChange(field){
    return function(ev){
      var v=ev.target.value;
      if(p.uppercase) v=v.toUpperCase();
      p.setSt(function(prev){var c=Object.assign({},prev);c[field]=v;return c;});
    };
  }
  var inputStyle=p.uppercase?{textTransform:"uppercase"}:{};
  return e(React.Fragment,null,
    e("label",{className:"field-label"},"Titre ",e("span",{className:"hint"},"(ExtraBold)")),
    e("input",{type:"text",spellCheck:true,style:inputStyle,
      value:p.st.badgeMain||"",onChange:onChange("badgeMain")}),
    e("div",{style:{height:8}}),
    e("label",{className:"field-label"},"Complément ",
      e("span",{className:"hint"},"(optionnel — ex. lieu, charte p17)")),
    e("input",{type:"text",spellCheck:true,style:inputStyle,
      value:p.st.badgeSub||"",onChange:onChange("badgeSub")}),
    e("div",{style:{height:10}}),
    e("label",{className:"field-label"},"Pictogramme"),
    e("div",{id:"spg-picto-gallery"})
  );
};

/* ─── previewScale ─────────────────────────────────────────────────────────
   Calcule l'échelle d'affichage de la carte dans le workspace.
   cf = chFormat(format)                                                    */
Shell.ui.previewScale = function(cf){
  if(Shell.EXPORT_MODE) return 1;
  /* Panel fixe 320px + padding 48px → workspace disponible */
  var availW=Math.max(400,(global.innerWidth||1200)-320-48);
  var maxW=Math.min(availW,560); /* cap à 560px pour les très grands écrans */
  return Math.min(maxW/cf.outputW,(global.innerHeight-140)/cf.outputH,1);
};

/* ─── Stage ────────────────────────────────────────────────────────────────
   Wrapper de prévisualisation : applique la mise à l'échelle.
   Props : cf (chFormat(format)), children (la carte au format natif)       */
Shell.ui.Stage = function(p){
  var e=React.createElement;
  var CW=p.cf.outputW, CH=p.cf.outputH;
  var scale=Shell.ui.previewScale(p.cf);
  return e("div",{style:{width:CW*scale,minHeight:CH*scale,
      position:"relative",flexShrink:0}},
    e("div",{style:{width:CW,transform:"scale("+scale+")",
        transformOrigin:"top left",position:"absolute",top:0,left:0}},
      p.children));
};

/* ─── ExportTab ────────────────────────────────────────────────────────────
   Onglet inline Sauvegardes + Export — remplace le Drawer modal.
   Props : shell (objet complet de Shell.useApp), cardRef,
           onLoad (optionnel : surcharge shell.save.onLoad pour normalisation),
           doExportOne (optionnel : export batch ZIP par dossier)              */
Shell.ui.ExportTab = function(p){
  var e=React.createElement, R=React;
  var useState=R.useState, useEffect=R.useEffect, useRef=R.useRef;
  var store=p.shell.save.store;
  var currentId=p.shell.save.currentId;
  var st=p.shell.st;

  var a1=useState([]); var records=a1[0],setRecords=a1[1];
  var a2=useState(""); var newName=a2[0],setNewName=a2[1];
  var a3=useState(""); var newFolder=a3[0],setNewFolder=a3[1];
  var a4=useState({}); var folderCollapsed=a4[0],setFolderCollapsed=a4[1];
  var a5=useState(null); var renamingId=a5[0],setRenamingId=a5[1];
  var a6=useState(""); var renameVal=a6[0],setRenameVal=a6[1];
  var impRef=useRef(null);

  function refresh(){
    store.list(function(all){
      all.sort(function(a,b){ return (b.updatedDate||"").localeCompare(a.updatedDate||""); });
      setRecords(all);
    });
  }
  useEffect(function(){
    if(store.migrateLegacy) store.migrateLegacy(function(){ refresh(); });
    else refresh();
    /* Se resynchronise sur toute écriture, y compris celles venant du bouton
       du header : sinon la version enregistrée n'apparaît pas dans la liste. */
    if(global.SaveManager.onChange){
      return global.SaveManager.onChange(function(storeName){
        if(storeName===store.storeName) refresh();
      });
    }
  },[]);

  /* Grouper par dossier */
  var folders={}, noFolder=[];
  records.forEach(function(r){
    var f=r.folder||"";
    if(!f){ noFolder.push(r); return; }
    (folders[f]=folders[f]||[]).push(r);
  });
  var folderNames=Object.keys(folders).sort();
  var allFolderNames=folderNames.slice();

  function doSave(){
    var name=(newName||"").trim()||("Version "+new Date().toLocaleString("fr-FR"));
    store.save({id:currentId||undefined,name:name,folder:newFolder||"",state:st},
      function(rec){
        if(!rec) return;
        setNewName(""); setNewFolder("");
        p.shell.save.onSaved(rec); refresh();
      });
  }
  function doLoad(rec){ (p.onLoad||p.shell.save.onLoad)(rec); }

  function smBtn(label, onClick, style){
    return e("button",{onClick:onClick,style:Object.assign({
      border:"1px solid #e0e0e0",borderRadius:5,padding:"3px 8px",
      cursor:"pointer",fontSize:11,fontWeight:600,fontFamily:"inherit",
      background:"#fafafa",color:"#555",flexShrink:0},style||{})},label);
  }

  function renderRow(rec){
    var isCurrent=rec.id===currentId;
    var isRenaming=renamingId===rec.id;
    return e("div",{key:rec.id,style:{
      display:"flex",alignItems:"center",gap:5,padding:"7px 10px",
      borderRadius:8,
      background:isCurrent?"#eef5fb":"#fafafa",
      border:"1px solid "+(isCurrent?"#c0dff0":"#e8e8e8"),
      borderLeft:"3px solid "+(isCurrent?"#0098E3":"transparent")}},
      isRenaming
        ? e("input",{type:"text",value:renameVal,autoFocus:true,
            onChange:function(ev){setRenameVal(ev.target.value);},
            onKeyDown:function(ev){
              if(ev.key==="Enter"){
                store.rename(rec.id,renameVal.trim(),function(){ setRenamingId(null); refresh(); });
              }
              if(ev.key==="Escape") setRenamingId(null);
            },
            style:{flex:1,fontSize:12,padding:"3px 6px",borderRadius:5,
              border:"1px solid #ddd",fontFamily:"inherit"}})
        : e("div",{style:{flex:1,minWidth:0,cursor:"pointer"},onClick:function(){doLoad(rec);}},
            e("div",{style:{fontSize:13,fontWeight:isCurrent?800:600,
              overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",
              color:isCurrent?"#0098E3":"#333"}},rec.name),
            e("div",{style:{fontSize:10,color:"#aaa",marginTop:1}},
              new Date(rec.updatedDate||rec.date).toLocaleString("fr-FR"))),
      isRenaming
        ? smBtn("\u2713",function(){
            store.rename(rec.id,renameVal.trim(),function(){ setRenamingId(null); refresh(); });
          },{background:"#eef7ee",color:"#2a7a2a",border:"1px solid #c0dfc0"})
        : e(R.Fragment,null,
            smBtn("\u270e",function(){ setRenamingId(rec.id); setRenameVal(rec.name); },
              {title:"Renommer"}),
            e("select",{value:rec.folder||"",title:"D\xe9placer vers un dossier",
              onChange:function(ev){
                var v=ev.target.value;
                if(v==="__new__"){
                  var n=prompt("Nouveau dossier :"); if(!n||!n.trim()) return;
                  store.setFolder(rec.id,n.trim(),function(){ refresh(); });
                } else {
                  store.setFolder(rec.id,v,function(){ refresh(); });
                }
              },
              style:{fontSize:11,border:"1px solid #e0e0e0",borderRadius:5,
                padding:"2px 3px",background:"#fafafa",color:"#666",
                maxWidth:76,cursor:"pointer",fontFamily:"inherit",flexShrink:0}},
              e("option",{value:""},"\u2014 dossier \u2014"),
              allFolderNames.map(function(f){ return e("option",{key:f,value:f},f); }),
              e("option",{value:"__new__"},"+ Nouveau\u2026")),
            smBtn("\xd7",function(){
              if(confirm("Supprimer \xab "+rec.name+" \xbb ?"))
                store.remove(rec.id,function(){ refresh(); });
            },{background:"#fff0f0",color:"#c0392b",border:"1px solid #f5c6c6"}))
    );
  }

  function IcoDl(){ return e("svg",{width:15,height:15,viewBox:"0 0 24 24",fill:"none",
    stroke:"currentColor",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round",
    style:{flexShrink:0}},
    e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),
    e("polyline",{points:"7 10 12 15 17 10"}),
    e("line",{x1:12,y1:15,x2:12,y2:3})); }

  return e(R.Fragment,null,

    /* Section Sauvegardes */
    e(Shell.ui.Section,{title:"Sauvegardes"},

      /* Champs enregistrement */
      e("div",{style:{marginBottom:10}},
        e("input",{type:"text",placeholder:"Nom de la version\u2026",value:newName,
          onChange:function(ev){setNewName(ev.target.value);},
          onKeyDown:function(ev){if(ev.key==="Enter") doSave();},
          style:{marginBottom:6}}),
        e("input",{type:"text",placeholder:"Dossier (optionnel)",value:newFolder,
          list:"sm-etab-folders",
          onChange:function(ev){setNewFolder(ev.target.value);},
          style:{marginBottom:6}}),
        e("datalist",{id:"sm-etab-folders"},
          allFolderNames.map(function(f){ return e("option",{key:f,value:f}); })),
        e("button",{className:"mini-btn",onClick:doSave,
          style:{width:"100%",background:"#0098E3",color:"#fff",
            border:"none",padding:"7px 0",fontSize:12,borderRadius:6}},
          "Sauvegarder")),

      /* Liste des sauvegardes */
      records.length===0
        ? e("div",{className:"hint",style:{marginTop:4}},
            "Aucune version sauvegard\xe9e.")
        : e("div",{style:{display:"flex",flexDirection:"column",gap:8}},

            /* Dossiers */
            folderNames.map(function(f){
              var isCollapsed=!!folderCollapsed[f];
              return e("div",{key:f,style:{marginBottom:2}},
                e("div",{style:{display:"flex",alignItems:"center",gap:6,
                    padding:"5px 0",cursor:"pointer",
                    borderBottom:"1px solid #f0f0f0"},
                  onClick:function(){
                    setFolderCollapsed(function(prev){
                      var c=Object.assign({},prev); c[f]=!c[f]; return c;
                    });
                  }},
                  e("span",{style:{fontSize:11,color:"#bbb",display:"inline-block",
                    transform:isCollapsed?"rotate(-90deg)":"none",
                    transition:"transform .15s"}},"\u25be"),
                  e("span",{style:{fontSize:12,fontWeight:800,color:"#555",flex:1,
                    letterSpacing:".04em"}},"\ud83d\udcc1 "+f+" ("+folders[f].length+")"),
                  e("button",{onClick:function(ev){
                      ev.stopPropagation(); store.exportJsonFolder(f);},
                    title:"Exporter ce dossier en .json",
                    style:{fontSize:10,border:"1px solid #ddd",borderRadius:4,
                      padding:"2px 7px",cursor:"pointer",background:"#f5f5f5",
                      color:"#555",fontWeight:700,fontFamily:"inherit",flexShrink:0}},
                    "{} JSON")),
                !isCollapsed
                  ? e("div",{style:{marginTop:4,display:"flex",flexDirection:"column",gap:4}},
                      folders[f].map(renderRow))
                  : null);
            }),

            /* Sans dossier */
            noFolder.length
              ? e("div",null,
                  folderNames.length
                    ? e("div",{style:{fontSize:11,fontWeight:700,color:"#bbb",
                        textTransform:"uppercase",letterSpacing:".04em",
                        padding:"6px 0 4px"}},"Sans dossier")
                    : null,
                  e("div",{style:{display:"flex",flexDirection:"column",gap:4}},
                    noFolder.map(renderRow)))
              : null),

      /* Import / Export JSON global */
      e("div",{style:{display:"flex",gap:6,marginTop:12}},
        e("button",{className:"mini-btn",onClick:function(){ store.exportJson(); },
          style:{flex:1,fontSize:11}},"Export .json"),
        e("button",{className:"mini-btn",onClick:function(){ if(impRef.current) impRef.current.click(); },
          style:{flex:1,fontSize:11}},"Import .json"),
        e("input",{ref:impRef,type:"file",accept:".json",style:{display:"none"},
          onChange:function(ev){
            var f=ev.target.files&&ev.target.files[0];
            if(f) store.importJson(f,function(){ refresh(); });
          }}))),

    /* Section Export PNG */
    e(Shell.ui.Section,{title:"Export"},
      p.exportHint?e("div",{className:"hint",style:{marginBottom:8}},p.exportHint):null,
      e("button",{className:"tab-nav-btn primary",
        style:{width:"100%",justifyContent:"center",padding:"10px",marginTop:4},
        onClick:function(){p.shell.doExport(p.cardRef);},
        disabled:p.shell.busy},
        p.shell.busy?e("span",{className:"spin"},e(IcoDl)):e(IcoDl),
        "\xa0",
        p.shell.busy?"Export\u2026":(p.exportLabel||"T\xe9l\xe9charger le PNG")))
  );
};

/* ═══ 6. Panneau mobile — FAB + backdrop + fermeture ═════════════════════
   Injecte le bouton flottant (FAB) et le fond semi-transparent dans le DOM.
   Fonctionne pour tous les générateurs qui utilisent app-shell.js.
   Shell._panelClose est appelé par Shell.ui.Tabs (bouton ×, React). */
Shell._panelClose = null;

Shell.initMobilePanel = function(){
  /* Backdrop */
  var backdrop = document.createElement("div");
  backdrop.className = "panel-backdrop";
  document.body.appendChild(backdrop);

  /* FAB (hamburger) */
  var fab = document.createElement("button");
  fab.className = "panel-fab";
  fab.setAttribute("aria-label","Ouvrir le panneau d'édition");
  fab.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" '
    + 'stroke="currentColor" stroke-width="2.5" stroke-linecap="round">'
    + '<line x1="3" y1="6" x2="21" y2="6"/>'
    + '<line x1="3" y1="12" x2="15" y2="12"/>'
    + '<line x1="3" y1="18" x2="18" y2="18"/>'
    + '</svg>';
  document.body.appendChild(fab);

  function openPanel(o){
    var panel = document.querySelector(".panel");
    if(panel) panel.classList.toggle("panel-open", o);
    backdrop.classList.toggle("open", o);
  }

  Shell._panelClose = function(){ openPanel(false); };

  fab.addEventListener("click", function(){ openPanel(true); });
  backdrop.addEventListener("click", function(){ openPanel(false); });
};

injectStyles();
if(!global._skipMobilePanel){
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", Shell.initMobilePanel);
  } else {
    Shell.initMobilePanel();
  }
}
global.Shell = Shell;

})(window);
