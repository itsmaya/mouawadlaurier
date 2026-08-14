/* ═══════════════════════════════════════════════════════════════════════════
   SAVE MANAGER v2 — module partagé de sauvegarde
   Static Posts Generator Fisheye × TotalEnergies

   Architecture :
   - SaveManager.createStore(key, opts) → handle de store
   - SaveManager.StatusBar  → composant React pour le header (nom + statut + bouton)
   - SaveManager.Drawer     → composant React pour le drawer latéral (liste, dossiers)

   Nommage export : DOSSIER_NOM_FORMAT_AAAMMJJ_HHMM.png
   ═══════════════════════════════════════════════════════════════════════════ */
(function(){

  /* ═══ IndexedDB ═══════════════════════════════════════════════════════════ */
  var DB_NAME    = "wie_db";
  var DB_VERSION = 6;
  var ALL_STORES = [
    "saves","citation_saves","latestnews_saves","carrousel_saves","splitscreen_saves",
    "sm_fichemetier","sm_citation","sm_latestnews","sm_carrousel","sm_splitscreen"
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
        dbPut(storeName, record, function(ok){ cb && cb(ok ? record : null); });
      },

      rename: function(id, name, cb){
        handle.get(id, function(r){
          if(!r) return cb&&cb(false);
          r.name = name; r.updatedDate = new Date().toISOString();
          dbPut(storeName, r, cb);
        });
      },

      setFolder: function(id, folder, cb){
        handle.get(id, function(r){
          if(!r) return cb&&cb(false);
          r.folder = folder||""; r.updatedDate = new Date().toISOString();
          dbPut(storeName, r, cb);
        });
      },

      remove: function(id, cb){ dbDelete(storeName, id, cb); },

      exportJson: function(cb){
        handle.list(function(all){
          var b = new Blob([JSON.stringify(all,null,2)],{type:"application/json"});
          var a = document.createElement("a");
          a.href = URL.createObjectURL(b);
          a.download = pageKey+"-sauvegardes.json";
          a.click(); cb&&cb(true);
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
        /* Bouton Enregistrer */
        e("button",{onClick:props.onSave,
          style:{background:dirty?"#1a1a1a":"#e8e8e8",
            color:dirty?"#fff":"#999",border:"none",borderRadius:6,
            padding:"5px 14px",cursor:dirty?"pointer":"default",fontWeight:700,
            fontSize:12,fontFamily:"inherit",flexShrink:0,
            transition:"all .15s"}},
          isNew?"Enregistrer":"Mettre à jour"));
    }

    /* ── Drawer ─────────────────────────────────────────────────────────────
       Props: store, state, open, onClose, currentId, currentName,
              onLoad, onSaved, doExportOne                                    */
    function Drawer(props){
      var store = props.store;
      var a1=useState([]); var records=a1[0],setRecords=a1[1];
      var a2=useState({}); var folderCollapsed=a2[0],setFolderCollapsed=a2[1];
      var a3=useState(null); var renamingId=a3[0],setRenamingId=a3[1];
      var a4=useState(""); var renameVal=a4[0],setRenameVal=a4[1];
      var a5=useState(""); var newName=a5[0],setNewName=a5[1];
      var a6=useState(""); var newFolder=a6[0],setNewFolder=a6[1];
      var a7=useState(null); var dlFolder=a7[0],setDlFolder=a7[1];
      var a8=useState({p:0,t:0}); var dlProg=a8[0],setDlProg=a8[1];
      var a9=useState({"1x1":true,"4x5":false,"9x16":false});
      var dlFormats=a9[0],setDlFormats=a9[1];
      var impRef = useRef(null);

      function refresh(){
        store.list(function(all){
          all.sort(function(a,b){ return (b.updatedDate||"").localeCompare(a.updatedDate||""); });
          setRecords(all);
        });
      }

      useEffect(function(){
        store.migrateLegacy(function(){ refresh(); });
      },[]);

      useEffect(function(){
        if(props.open) refresh();
      },[props.open]);

      /* Grouper */
      var folders={}, noFolder=[];
      records.forEach(function(r){
        var f=r.folder||"";
        if(!f){ noFolder.push(r); return; }
        (folders[f]=folders[f]||[]).push(r);
      });
      var folderNames=Object.keys(folders).sort();
      var allFolderNames=folderNames.slice();

      /* Enregistrer */
      function doSave(){
        var name=(newName||"").trim()||("Version "+new Date().toLocaleString("fr-FR"));
        store.save({id:props.currentId||undefined,name:name,
          folder:newFolder,state:props.state},function(rec){
          if(!rec) return;
          setNewName(""); setNewFolder("");
          props.onSaved&&props.onSaved(rec);
          refresh();
        });
      }

      /* Download dossier */
      function downloadFolder(folderName, recs){
        if(!props.doExportOne){ alert("Export non disponible."); return; }
        var fmts=Object.keys(dlFormats).filter(function(f){ return dlFormats[f]; });
        if(!fmts.length){ alert("Sélectionne au moins un format."); return; }
        setDlFolder(folderName); setDlProg({p:0,t:recs.length*fmts.length});
        function withJSZip(cb){
          if(window.JSZip) return cb(window.JSZip);
          var sc=document.createElement("script");
          sc.src="https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js";
          sc.onload=function(){ cb(window.JSZip); }; document.head.appendChild(sc);
        }
        withJSZip(function(JSZip){
          var zip=new JSZip(), done=0, total=recs.length*fmts.length;
          function next(ri,fi){
            if(ri>=recs.length){ finish(); return; }
            if(fi>=fmts.length){ next(ri+1,0); return; }
            var rec=recs[ri], fmt=fmts[fi];
            var fname=exportFilename(folderName,rec.name,fmt);
            props.doExportOne(rec.state,fmt,fname)
              .then(function(blob){ return blob.arrayBuffer(); })
              .then(function(buf){ zip.file(fname,buf); })
              .catch(function(e){ console.error(e); })
              .then(function(){ done++; setDlProg({p:done,t:total}); next(ri,fi+1); });
          }
          function finish(){
            zip.generateAsync({type:"blob"}).then(function(b){
              var a=document.createElement("a");
              a.href=URL.createObjectURL(b);
              a.download=(folderName||"export")+".zip"; a.click();
              setDlFolder(null); setDlProg({p:0,t:0});
            });
          }
          next(0,0);
        });
      }

      function btn(label, onClick, style){
        return e("button",{onClick:onClick,style:Object.assign({
          border:"1px solid #e0e0e0",borderRadius:6,padding:"4px 10px",
          cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"inherit",
          background:"#fafafa",color:"#333"},style||{})},label);
      }

      function renderRow(rec){
        var isCurrent = rec.id===props.currentId;
        var isRenaming = renamingId===rec.id;
        return e("div",{key:rec.id,style:{
            display:"flex",alignItems:"center",gap:6,padding:"7px 10px",
            borderRadius:8,background:isCurrent?"#f0f4ff":"transparent",
            borderLeft:isCurrent?"3px solid #1a1a1a":"3px solid transparent"}},

          isRenaming
            ? e("input",{type:"text",value:renameVal,autoFocus:true,
                onChange:function(ev){setRenameVal(ev.target.value);},
                onKeyDown:function(ev){
                  if(ev.key==="Enter"){ store.rename(rec.id,renameVal,function(){ setRenamingId(null); refresh(); }); }
                  if(ev.key==="Escape") setRenamingId(null);
                },
                style:{flex:1,fontSize:13,padding:"3px 6px",borderRadius:5,border:"1px solid #ddd"}})
            : e("div",{style:{flex:1,minWidth:0,cursor:"pointer"},
                onClick:function(){ props.onLoad&&props.onLoad(rec); }},
                e("div",{style:{fontSize:13,fontWeight:isCurrent?800:600,
                  overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",
                  color:isCurrent?"#1a1a1a":"#333"}}, rec.name),
                e("div",{style:{fontSize:10,color:"#aaa",marginTop:1}},
                  new Date(rec.updatedDate||rec.date).toLocaleString("fr-FR"))),

          /* Actions */
          isRenaming
            ? btn("✓",function(){ store.rename(rec.id,renameVal.trim(),function(){ setRenamingId(null); refresh(); }); },{background:"#eef7ee",color:"#2a7a2a"})
            : e(R.Fragment,null,
                btn("✎",function(){ setRenamingId(rec.id); setRenameVal(rec.name); },{title:"Renommer"}),
                /* Déplacer vers dossier */
                e("select",{value:rec.folder||"",
                  title:"Déplacer vers un dossier",
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
                    padding:"3px 4px",background:"#fafafa",color:"#666",
                    maxWidth:80,cursor:"pointer"}},
                  e("option",{value:""},"— dossier —"),
                  allFolderNames.map(function(f){ return e("option",{key:f,value:f},f); }),
                  e("option",{value:"__new__"},"+ Nouveau…")),
                btn("×",function(){
                  if(confirm("Supprimer « "+rec.name+" » ?"))
                    store.remove(rec.id,function(){ refresh(); });
                },{background:"#fff0f0",color:"#c0392b"})));
      }

      if(!props.open) return null;

      return e(R.Fragment,null,
        /* Overlay */
        e("div",{onClick:props.onClose,style:{
          position:"fixed",inset:0,background:"rgba(0,0,0,.35)",
          zIndex:1000,backdropFilter:"blur(2px)"}}),

        /* Drawer */
        e("div",{style:{
          position:"fixed",top:0,right:0,bottom:0,width:380,
          background:"#fff",zIndex:1001,
          boxShadow:"-4px 0 32px rgba(0,0,0,.18)",
          display:"flex",flexDirection:"column",overflowY:"hidden"}},

          /* Header du drawer */
          e("div",{style:{padding:"18px 20px 14px",borderBottom:"1px solid #efefef",
              flexShrink:0}},
            e("div",{style:{display:"flex",alignItems:"center",gap:10}},
              e("span",{style:{fontSize:14,fontWeight:800,letterSpacing:".06em",
                textTransform:"uppercase",color:"#1a1a1a",flex:1}},"Sauvegardes"),
              e("button",{onClick:props.onClose,style:{background:"none",border:"none",
                fontSize:20,cursor:"pointer",color:"#aaa",lineHeight:1,padding:"0 2px"}},
                "×"))),

          /* Zone d'enregistrement */
          e("div",{style:{padding:"14px 20px",borderBottom:"1px solid #efefef",
              flexShrink:0,background:"#fafaf8"}},
            e("div",{style:{fontSize:11,fontWeight:800,color:"#aaa",letterSpacing:".08em",
                textTransform:"uppercase",marginBottom:8}},"Enregistrer sous"),
            e("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},
              e("input",{type:"text",placeholder:"Nom du fichier…",value:newName,
                onChange:function(ev){setNewName(ev.target.value);},
                onKeyDown:function(ev){if(ev.key==="Enter")doSave();},
                style:{flex:"2 1 140px",fontSize:13,padding:"7px 10px",
                  border:"1px solid #ddd",borderRadius:7}}),
              e("input",{type:"text",placeholder:"Dossier (optionnel)",
                value:newFolder,list:"sm-folders-list",
                onChange:function(ev){setNewFolder(ev.target.value);},
                style:{flex:"1 1 100px",fontSize:13,padding:"7px 10px",
                  border:"1px solid #ddd",borderRadius:7}}),
              e("datalist",{id:"sm-folders-list"},
                allFolderNames.map(function(f){ return e("option",{key:f,value:f}); })),
              e("button",{onClick:doSave,style:{
                background:"#1a1a1a",color:"#fff",border:"none",borderRadius:7,
                padding:"7px 16px",cursor:"pointer",fontWeight:700,fontSize:13,
                fontFamily:"inherit",flexShrink:0}},
                "Enregistrer"))),

          /* Formats pour download ZIP */
          e("div",{style:{padding:"10px 20px",borderBottom:"1px solid #efefef",
              flexShrink:0,display:"flex",alignItems:"center",gap:12}},
            e("span",{style:{fontSize:11,color:"#aaa",fontWeight:700,
              textTransform:"uppercase",letterSpacing:".06em"}},"Formats ZIP"),
            ["1x1","4x5","9x16"].map(function(f){
              return e("label",{key:f,style:{display:"inline-flex",alignItems:"center",
                  gap:4,fontSize:12,cursor:"pointer",color:"#555",fontWeight:600}},
                e("input",{type:"checkbox",checked:!!dlFormats[f],
                  onChange:function(ev){var v=ev.target.checked;
                    setDlFormats(function(p){ var c=Object.assign({},p); c[f]=v; return c; });}}),
                f);
            })),

          /* Liste des sauvegardes */
          e("div",{style:{flex:1,overflowY:"auto",padding:"14px 20px"}},

            records.length===0
              ? e("div",{style:{fontSize:13,color:"#bbb",textAlign:"center",
                  padding:"40px 0"}},"Aucune sauvegarde")
              : e(R.Fragment,null,

                  /* Dossiers */
                  folderNames.map(function(f){
                    var isCollapsed = !!folderCollapsed[f];
                    var isDl = dlFolder===f;
                    return e("div",{key:f,style:{marginBottom:12}},
                      e("div",{style:{display:"flex",alignItems:"center",gap:8,
                          padding:"6px 0",cursor:"pointer",
                          borderBottom:"1px solid #f0f0f0"},
                        onClick:function(){ setFolderCollapsed(function(p){
                          var c=Object.assign({},p); c[f]=!c[f]; return c; }); }},
                        e("span",{style:{fontSize:11,color:"#bbb",
                          transform:isCollapsed?"rotate(-90deg)":"none",
                          display:"inline-block",transition:"transform .15s"}},"▾"),
                        e("span",{style:{fontSize:12,fontWeight:800,color:"#555",
                          flex:1,letterSpacing:".04em"}},"📁 "+f+" ("+folders[f].length+")"),
                        /* Bouton ZIP */
                        props.doExportOne
                          ? e("button",{onClick:function(ev){
                              ev.stopPropagation();
                              if(!isDl) downloadFolder(f,folders[f]);},
                              style:{fontSize:11,border:"1px solid #ddd",borderRadius:5,
                                padding:"3px 9px",cursor:isDl?"default":"pointer",
                                background:isDl?"#eef7ee":"#f5f5f5",
                                color:isDl?"#2a9d4a":"#555",fontWeight:700,fontFamily:"inherit"}},
                              isDl?"⬇ "+dlProg.p+"/"+dlProg.t:"⬇ ZIP")
                          : null),
                      !isCollapsed
                        ? e("div",{style:{marginTop:4}},folders[f].map(renderRow))
                        : null);
                  }),

                  /* Sans dossier */
                  noFolder.length
                    ? e("div",null,
                        folderNames.length
                          ? e("div",{style:{fontSize:11,fontWeight:800,color:"#bbb",
                              textTransform:"uppercase",letterSpacing:".04em",
                              padding:"8px 0 4px"}},"Sans dossier")
                          : null,
                        noFolder.map(renderRow))
                    : null)),

          /* Footer : import / export JSON */
          e("div",{style:{padding:"12px 20px",borderTop:"1px solid #efefef",
              flexShrink:0,display:"flex",gap:8}},
            e("button",{onClick:function(){ store.exportJson(); },
              style:{flex:1,background:"#f5f5f5",border:"1px solid #ddd",borderRadius:7,
                padding:"8px",cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"inherit"}},
              "Export .json"),
            e("button",{onClick:function(){ if(impRef.current) impRef.current.click(); },
              style:{flex:1,background:"#f5f5f5",border:"1px solid #ddd",borderRadius:7,
                padding:"8px",cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"inherit"}},
              "Import .json"),
            e("input",{ref:impRef,type:"file",accept:".json",style:{display:"none"},
              onChange:function(ev){
                var f=ev.target.files&&ev.target.files[0];
                if(f) store.importJson(f,function(){ refresh(); });
              }}))));
    }

    return {StatusBar:StatusBar, Drawer:Drawer};
  }

  var _components = null;
  function getComponents(){
    if(!_components) _components = makeComponents();
    return _components||{};
  }

  window.SaveManager = {
    createStore:    createStore,
    hashState:      hashState,
    exportFilename: exportFilename,
    get StatusBar(){ return getComponents().StatusBar; },
    get Drawer(){    return getComponents().Drawer; }
  };

  /* ═══ Languette fixe sur le bord droit ═══════════════════════════════════
     Injectée au chargement, indépendante de React.
     Contient : bouton disquette (drawer) + bouton téléchargement.
     Branché sur window.smDrawerToggle et window.smDownloadTrigger.          */
  function injectTab(){
    if(document.getElementById("sm-side-tab")) return;
    var style=document.createElement("style");
    style.textContent=[
      "#sm-side-tab{position:fixed;right:0;top:50%;transform:translateY(-50%);",
      "z-index:999;display:flex;flex-direction:column;gap:0;",
      "border-radius:12px 0 0 12px;overflow:hidden;",
      "box-shadow:-2px 0 16px rgba(0,0,0,.15);}",
      ".sm-tab-btn{width:48px;height:56px;display:flex;flex-direction:column;",
      "align-items:center;justify-content:center;gap:3px;",
      "border:none;cursor:pointer;transition:background .15s;padding:0;}",
      ".sm-tab-btn:hover{filter:brightness(.92);}",
      ".sm-tab-btn svg{display:block;flex-shrink:0;}",
      ".sm-tab-btn span{font-size:8px;font-weight:800;letter-spacing:.06em;",
      "text-transform:uppercase;line-height:1;}"
    ].join("");
    document.head.appendChild(style);

    var tab=document.createElement("div");
    tab.id="sm-side-tab";

    /* Bouton disquette */
    var btnSave=document.createElement("button");
    btnSave.className="sm-tab-btn";
    btnSave.title="Sauvegardes";
    btnSave.style.cssText="background:#1a1a1a;color:#fff;border-bottom:1px solid rgba(255,255,255,.1);";
    btnSave.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">'+
      '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>'+
      '<polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>'+
      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-top:1px"><polyline points="9 18 15 12 9 6"/></svg>';
    btnSave.onclick=function(){ if(window.smDrawerToggle) window.smDrawerToggle(); };

    /* Bouton téléchargement */
    var btnDl=document.createElement("button");
    btnDl.className="sm-tab-btn";
    btnDl.id="sm-tab-download";
    btnDl.title="Télécharger le PNG";
    btnDl.style.cssText="background:#2a7a2a;color:#fff;";
    btnDl.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">'+
      '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>'+
      '<polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>'+
      '<span>PNG</span>';
    btnDl.onclick=function(){ if(window.smDownloadTrigger) window.smDownloadTrigger(); };

    tab.appendChild(btnSave);
    tab.appendChild(btnDl);
    document.body.appendChild(tab);
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded", injectTab);
  } else {
    injectTab();
  }

})();
