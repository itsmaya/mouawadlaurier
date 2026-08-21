/* ═══════════════════════════════════════════════════════════════════════════
   SAVE MANAGER v2 — module partagé de sauvegarde
   Static Posts Generator Fisheye × TotalEnergies

   Architecture :
   - SaveManager.createStore(key, opts) → handle de store
   - SaveManager.StatusBar  → composant React pour le header (nom + statut + bouton)

   Nommage export : DOSSIER_NOM_FORMAT_AAAMMJJ_HHMM.png
   ═══════════════════════════════════════════════════════════════════════════ */
(function(){

  /* ═══ IndexedDB ═══════════════════════════════════════════════════════════ */
  var DB_NAME    = "wie_db";
  var DB_VERSION = 7;   /* v7 : ajout du store Block Layouts (charte 2026) */
  var ALL_STORES = [
    "saves","citation_saves","latestnews_saves","carrousel_saves","splitscreen_saves",
    "sm_fichemetier","sm_citation","sm_latestnews","sm_carrousel","sm_splitscreen",
    "sm_blocklayouts"
  ];

  function openDB(ok, ko){
    var q = indexedDB.open(DB_NAME, DB_VERSION);
    q.onupgradeneeded = function(ev){
      var db = ev.target.result;
      ALL_STORES.forEach(function(s){
        if(!db.objectStoreNames.contains(s)){
          db.createObjectStore(s, {keyPath: s.indexOf("sm_")===0 ? "id" : "name"});
        }
      });
    };
    q.onsuccess = function(ev){ ok(ev.target.result); };
    q.onerror   = function(){ ko && ko(q.error); };
  }

  function uid(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,9); }

  /* ═══ Téléchargement d'un blob ════════════════════════════════════════════
     Point unique pour TOUS les téléchargements de l'application.

     Deux pièges évités :
     1. Le lien doit être attaché au document avant le clic — Firefox ignore
        parfois un <a download> détaché, ce qui laisse un fichier .part.
     2. L'URL du blob ne doit pas être libérée tant que le navigateur écrit sur
        le disque. Un revoke trop tôt (2 s) tronque les gros ZIP et laisse, là
        encore, un .part dans le dossier Téléchargements.
     On libère donc tardivement, et au plus tard quand l'onglet se ferme. */
  var _pendingUrls = [];
  /* iOS ne télécharge pas : Safari et Chrome iOS ignorent l'attribut download
     d'un lien pointant vers un blob. Le clic ne produit rien, ou ouvre l'image
     dans un onglet sans nom de fichier — c'est le « l'export ne fonctionne pas
     sur téléphone ». Deux replis, dans l'ordre :
       1. la feuille de partage native (navigator.share avec un fichier), qui
          permet « Enregistrer dans Photos » — disponible sur iOS 15+ ;
       2. à défaut, ouverture de l'image dans un nouvel onglet, où un appui long
          permet de l'enregistrer.
     Sur les autres plateformes, rien ne change : le lien download fonctionne. */
  function estIOS(){
    var ua = navigator.userAgent || "";
    /* iPadOS 13+ se présente comme un Mac : on le distingue au tactile. */
    return /iPad|iPhone|iPod/.test(ua)
      || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  }

  function partageIOS(blob, filename){
    try{
      var fichier = new File([blob], filename || "export.png", {type: blob.type || "image/png"});
      if(navigator.canShare && navigator.canShare({files:[fichier]}) && navigator.share){
        navigator.share({files:[fichier]}).catch(function(){ /* annulé : rien à faire */ });
        return true;
      }
    }catch(e){}
    return false;
  }

  function downloadBlob(blob, filename){
    if(estIOS()){
      if(partageIOS(blob, filename)) return null;
      var urlIOS = URL.createObjectURL(blob);
      window.open(urlIOS, "_blank");
      setTimeout(function(){ URL.revokeObjectURL(urlIOS); }, 120000);
      return urlIOS;
    }
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename || "export";
    a.rel = "noopener";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    setTimeout(function(){ if(a.parentNode) a.parentNode.removeChild(a); }, 0);
    _pendingUrls.push(url);
    setTimeout(function(){
      URL.revokeObjectURL(url);
      _pendingUrls = _pendingUrls.filter(function(u){ return u!==url; });
    }, 120000);
    return url;
  }
  window.addEventListener("pagehide", function(){
    _pendingUrls.forEach(function(u){ try{ URL.revokeObjectURL(u); }catch(e){} });
    _pendingUrls = [];
  });

  /* ═══ Bus de changement ═══════════════════════════════════════════════════
     Toute écriture dans un store prévient les abonnés. Sans cela, une liste
     déjà affichée (onglet Export) reste figée quand on enregistre depuis le
     header : la sauvegarde existe en base mais reste invisible. */
  var _listeners = [];
  function onChange(cb){
    _listeners.push(cb);
    return function(){ _listeners = _listeners.filter(function(f){ return f!==cb; }); };
  }
  function emitChange(storeName){
    _listeners.slice().forEach(function(cb){
      try{ cb(storeName); }catch(err){ console.warn("SaveManager.onChange",err); }
    });
  }

  function dbAll(store, cb){
    openDB(function(db){
      var req = db.transaction(store,"readonly").objectStore(store).getAll();
      req.onsuccess = function(){ cb(req.result||[]); };
      req.onerror   = function(){ cb([]); };
    }, function(){ cb([]); });
  }

  function dbPut(store, record, cb){
    openDB(function(db){
      var tx = db.transaction(store,"readwrite");
      tx.objectStore(store).put(record);
      tx.oncomplete = function(){ cb && cb(true); };
      tx.onerror    = function(){ cb && cb(false); };
    }, function(){ cb && cb(false); });
  }

  function dbDelete(store, id, cb){
    openDB(function(db){
      var tx = db.transaction(store,"readwrite");
      tx.objectStore(store).delete(id);
      tx.oncomplete = function(){ cb && cb(true); };
      tx.onerror    = function(){ cb && cb(false); };
    }, function(){ cb && cb(false); });
  }

  function hashState(s){
    try{ return JSON.stringify(s); } catch(e){ return ""+Math.random(); }
  }

  /* Format de nom d'export : DOSSIER_NOM_FORMAT_AAAMMJJ_HHMM */
  function exportFilename(folder, name, format){
    var now = new Date();
    var pad = function(n){ return String(n).padStart(2,"0"); };
    var date = ""+now.getFullYear()+pad(now.getMonth()+1)+pad(now.getDate())
              +"_"+pad(now.getHours())+pad(now.getMinutes());
    var slug = function(s){ return (s||"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""); };
    var parts = [];
    if(folder) parts.push(slug(folder));
    parts.push(slug(name)||"export");
    parts.push(format||"1x1");
    parts.push(date);
    return parts.join("_")+".png";
  }

  /* ═══ createStore — API CRUD ══════════════════════════════════════════════ */
  function createStore(pageKey, opts){
    opts = opts||{};
    var storeName  = "sm_"+pageKey;
    var legacyName = opts.legacy;
    var migFlag    = "sm_migrated_"+pageKey;

    var handle = {
      storeName: storeName,

      list: function(cb){ dbAll(storeName, cb); },

      get: function(id, cb){
        dbAll(storeName, function(all){
          cb(all.filter(function(r){ return r.id===id; })[0]||null);
        });
      },

      save: function(rec, cb){
        var now = new Date().toISOString();
        var record = {
          id:          rec.id||uid(),
          name:        rec.name||"Sans titre",
          folder:      rec.folder||"",
          date:        rec.date||now,
          updatedDate: now,
          state:       rec.state
        };
        dbPut(storeName, record, function(ok){
          if(ok) emitChange(storeName);
          cb && cb(ok ? record : null);
        });
      },

      rename: function(id, name, cb){
        handle.get(id, function(r){
          if(!r) return cb&&cb(false);
          r.name = name; r.updatedDate = new Date().toISOString();
          dbPut(storeName, r, function(ok){ if(ok) emitChange(storeName); cb && cb(ok); });
        });
      },

      setFolder: function(id, folder, cb){
        handle.get(id, function(r){
          if(!r) return cb&&cb(false);
          r.folder = folder||""; r.updatedDate = new Date().toISOString();
          dbPut(storeName, r, function(ok){ if(ok) emitChange(storeName); cb && cb(ok); });
        });
      },

      remove: function(id, cb){
        dbDelete(storeName, id, function(ok){ emitChange(storeName); cb && cb(ok); });
      },

      exportJson: function(cb){
        handle.list(function(all){
          downloadBlob(new Blob([JSON.stringify(all,null,2)],{type:"application/json"}),
            pageKey+"-sauvegardes.json");
          cb&&cb(true);
        });
      },

      /* Export JSON limité à un dossier (idée backlog : sauvegarde partagée
         par dossier de campagne) */
      exportJsonFolder: function(folder, cb){
        handle.list(function(all){
          var subset = all.filter(function(r){ return (r.folder||"")===folder; });
          var b = new Blob([JSON.stringify(subset,null,2)],{type:"application/json"});
          var slug = (folder||"dossier").toLowerCase().replace(/[^a-z0-9]+/g,"-");
          downloadBlob(b, pageKey+"-"+slug+".json");
          cb&&cb(true);
        });
      },

      importJson: function(file, cb){
        var r = new FileReader();
        r.onload = function(){
          try{
            var arr = JSON.parse(r.result);
            if(!Array.isArray(arr)) throw new Error("format invalide");
            var p = arr.length; if(!p) return cb&&cb(true);
            arr.forEach(function(rec){
              dbPut(storeName,{id:rec.id||uid(),name:rec.name||"Import",
                folder:rec.folder||"",date:rec.date||new Date().toISOString(),
                updatedDate:rec.updatedDate||new Date().toISOString(),state:rec.state},
                function(){ if(!--p) cb&&cb(true); });
            });
          }catch(e){ cb&&cb(false,e); }
        };
        r.readAsText(file);
      },

      migrateLegacy: function(cb){
        if(!legacyName||localStorage.getItem(migFlag)){ return cb&&cb(0); }
        dbAll(legacyName, function(old){
          if(!old.length){ localStorage.setItem(migFlag,"1"); return cb&&cb(0); }
          var p = old.length;
          old.forEach(function(o){
            dbPut(storeName,{id:uid(),name:o.name||"Sans titre",folder:"",
              date:o.date||new Date().toISOString(),
              updatedDate:o.date||new Date().toISOString(),state:o.state},
              function(){ if(!--p){ localStorage.setItem(migFlag,"1"); cb&&cb(old.length); }});
          });
        });
      },

      exportFilename: exportFilename
    };
    return handle;
  }

  /* ═══ Composants React ════════════════════════════════════════════════════ */
  function makeComponents(){
    var R = window.React;
    if(!R) return {};
    var e = R.createElement, useState = R.useState, useEffect = R.useEffect, useRef = R.useRef;

    /* ── StatusBar ──────────────────────────────────────────────────────────
       Props: store, state, currentId, currentName, dirty, isNew,
              onSave (quickSave), onOpen (ouvre le drawer)                    */
    function StatusBar(props){
      var isNew  = !props.currentId;
      var dirty  = props.dirty;
      var dot    = isNew ? "#bbb" : (dirty ? "#e0a020" : "#2a9d4a");
      var label  = isNew ? "Document sans titre" : props.currentName;
      var status = isNew ? "Pas encore enregistré"
                 : dirty ? "Modifications non enregistrées"
                         : "Enregistré";
      return e("div",{id:"sm-statusbar",style:{
          display:"flex",alignItems:"center",gap:10,
          padding:"0 16px",height:"100%"}},
        /* Indicateur + nom (non cliquable) */
        e("div",{style:{display:"flex",alignItems:"center",gap:7,
            flex:1,minWidth:0,overflow:"hidden"},
          title:status},
          e("span",{style:{width:8,height:8,borderRadius:"50%",
            background:dot,flexShrink:0,
            boxShadow:dirty?"0 0 0 2px rgba(224,160,32,.25)":"none"}}),
          e("span",{style:{fontSize:12,fontWeight:700,color:"#1a1a1a",
            overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},
            label)),
        /* Bouton Enregistrer / Mettre à jour
           Actionnable dès qu'il y a quelque chose à écrire : un document neuf
           n'est jamais « dirty » (rien n'a encore été enregistré), mais il doit
           évidemment pouvoir être enregistré. */
        e("button",{onClick:props.onSave,
          title:isNew?"Enregistrer ce projet":(dirty?"Enregistrer les modifications":"Aucune modification depuis le dernier enregistrement"),
          style:{background:(isNew||dirty)?"#1a1a1a":"#e8e8e8",
            color:(isNew||dirty)?"#fff":"#999",border:"none",borderRadius:6,
            padding:"5px 14px",cursor:"pointer",fontWeight:700,
            fontSize:12,fontFamily:"inherit",flexShrink:0,
            transition:"all .15s"}},
          isNew?"Enregistrer":"Mettre à jour"));
    }

    return {StatusBar:StatusBar};
  }

  var _components = null;
  function getComponents(){
    if(!_components) _components = makeComponents();
    return _components||{};
  }

  window.SaveManager = {
    createStore:    createStore,
    downloadBlob:   downloadBlob,
    onChange:       onChange,
    emitChange:     emitChange,
    hashState:      hashState,
    exportFilename: exportFilename,
    get StatusBar(){ return getComponents().StatusBar; }
  };


})();
