/* ═══════════════════════════════════════════════════════════════════════════
   PICTO GALLERY — Module partagé Static Posts Generator
   Fisheye × TotalEnergies

   Usage :
   1. <script>window.PICTO_BASE="../../assets/";</script>
      Optionnel : window.PICTO_CATEGORIES=["energies_white","profession_white"]
   2. <script src="../../assets/pictos.js"></script>
   3. PictoGallery.init(containerEl, { grad, selected, custom, onChange, onCustom })

   Structure attendue dans assets/ :
     manifest.json            → { "energies_white": [...], "energies_out": [...], ... }
     pictos/energies_white/   → Battery 1.png, Flame.png ...
     pictos/energies_out/     → biomasse.png, gaz.png ...
     pictos/profession_white/ → Aeronautics.png ...
     pictos/functional_white/ → Camera.png ...

   Catégories et comportement de fond :
     *_white   → picto blanc sur fond dégradé   (fond coloré dans la miniature)
     *_out     → picto coloré, fond transparent  (fond blanc dans la miniature)
     (autres)  → traité comme *_white par défaut

   API :
   - PictoGallery.init(el, opts)   → instance Gallery
   - PictoGallery.getSrc(key)      → URL | null
   - PictoGallery.getKeys()        → string[] (toutes catégories)
   - PictoGallery.load(cb)         → charge manifest + sonde fichiers
   - PictoGallery.setGrad(css)     → met à jour le dégradé live
   ═══════════════════════════════════════════════════════════════════════════ */
(function(global){

  /* ── Chemins ─────────────────────────────────────────────────────────── */
  function scriptBase(){
    if(global.PICTO_BASE) return global.PICTO_BASE;
    var tags=document.querySelectorAll("script[src]");
    for(var i=0;i<tags.length;i++)
      if(tags[i].src&&tags[i].src.indexOf("pictos.js")>=0)
        return tags[i].src.replace(/pictos\.js.*$/,"");
    return window.location.href
      .replace(/\/generators\/[^/]+\/[^/?#]+.*$/,"")
      .replace(/[^/]+\/?$/,"")+"assets/";
  }
  var _base=null;
  function base(){ if(!_base)_base=scriptBase(); return _base; }
  function manifestUrl(){ return base()+"manifest.json"; }

  /* Chemin d'un picto selon sa catégorie.
     Ancien format (rétrocompat) : energies_white → assets/pictos/energies_white/NOM.png */
  function pictoUrl(cat,key){
    return base()+"pictos/"+cat+"/"+key+".png";
  }

  /* Est-ce que la catégorie utilise des pictos blancs (fond dégradé) ? */
  function isWhiteCat(cat){ return cat.indexOf("_out")<0; }

  /* Label lisible pour une catégorie */
  function catLabel(k){
    return k.replace(/_white$/," (blancs)")
             .replace(/_out$/," (couleur)")
             .replace(/_/g," ")
             .replace(/\b\w/g,function(c){return c.toUpperCase();})
             .trim();
  }

  /* ── Chargement ──────────────────────────────────────────────────────── */
  /* _cats  = { catName: [key, ...] }
     _files = { key: { url, cat } }   — key peut exister dans plusieurs catégories
                                         mais on garde la première occurrence */
  var _cats={},_keys=[],_files={},_loaded=false,_pending=[];

  function probe(cats,cb){
    var allEntries=[];
    Object.keys(cats).forEach(function(cat){
      cats[cat].forEach(function(key){
        allEntries.push({cat:cat,key:key});
      });
    });
    var result={},rem=allEntries.length;
    if(!rem){cb(result);return;}
    allEntries.forEach(function(entry){
      var url=pictoUrl(entry.cat,entry.key);
      var im=new Image();
      im.onload=function(){
        /* Conserver la première occurrence si la clé existe déjà */
        if(!result[entry.key]) result[entry.key]={url:url,cat:entry.cat};
        if(!--rem)cb(result);
      };
      im.onerror=function(){
        if(!--rem)cb(result);
      };
      im.src=url;
    });
  }

  function load(cb){
    if(_loaded){cb();return;}
    _pending.push(cb);
    if(_pending.length>1)return;
    fetch(manifestUrl())
      .then(function(r){return r.ok?r.json():Promise.reject();})
      .then(function(data){
        var allowed=global.PICTO_CATEGORIES||null;
        var cats={};
        /* Rétrocompat : ancien format {"pictos":[...]} */
        if(Array.isArray(data.pictos)){
          cats={energies_white:data.pictos};
        } else {
          Object.keys(data).forEach(function(cat){
            if(!allowed||allowed.indexOf(cat)>=0)
              if(Array.isArray(data[cat])) cats[cat]=data[cat];
          });
        }
        probe(cats,function(files){
          _cats=cats;
          /* Construire _keys dans l'ordre des catégories, dédupliqué */
          var keys=[],seen={};
          Object.keys(cats).forEach(function(cat){
            cats[cat].forEach(function(k){
              if(!seen[k]&&files[k]){seen[k]=true;keys.push(k);}
            });
          });
          _keys=keys; _files=files; _loaded=true;
          _pending.forEach(function(fn){fn();}); _pending=[];
        });
      })
      .catch(function(){
        _cats={};_keys=[];_files={};_loaded=true;
        _pending.forEach(function(fn){fn();}); _pending=[];
      });
  }

  /* ── Styles ──────────────────────────────────────────────────────────── */
  function injectStyles(){
    if(document.getElementById("pg-styles"))return;
    var s=document.createElement("style");
    s.id="pg-styles";
    s.textContent=[
      ".pg-wrap{position:relative;font-family:inherit;}",

      /* Trigger */
      ".pg-trigger{display:flex;align-items:center;gap:8px;cursor:pointer;",
        "border:1px solid #d4d4d4;border-radius:8px;padding:6px 10px;",
        "background:#fff;transition:border-color .15s;user-select:none;}",
      ".pg-trigger:hover{border-color:#a3a3a3;}",
      ".pg-trigger.pg-open{border-color:#1a1a1a;",
        "border-bottom-left-radius:0;border-bottom-right-radius:0;}",

      /* Preview picto dans le trigger */
      ".pg-sel-box{width:36px;height:36px;border-radius:6px;flex-shrink:0;",
        "display:flex;align-items:center;justify-content:center;}",
      ".pg-sel-box img{width:24px;height:24px;object-fit:contain;display:block;}",
      ".pg-sel-info{flex:1;min-width:0;}",
      ".pg-sel-label{font-size:11px;font-weight:700;color:#1a1a1a;",
        "white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:inherit;}",
      ".pg-sel-hint{font-size:10px;color:#888;font-family:inherit;}",
      ".pg-chevron{flex-shrink:0;transition:transform .2s;color:#888;}",
      ".pg-open .pg-chevron{transform:rotate(180deg);}",

      /* Dropdown */
      ".pg-dropdown{position:absolute;top:100%;left:0;right:0;z-index:999;",
        "background:#fff;border:1px solid #1a1a1a;border-top:none;",
        "border-bottom-left-radius:8px;border-bottom-right-radius:8px;",
        "box-shadow:0 6px 20px rgba(0,0,0,.12);",
        "max-height:340px;overflow-y:auto;scrollbar-width:thin;}",
      ".pg-dropdown::-webkit-scrollbar{width:6px;}",
      ".pg-dropdown::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:3px;}",

      /* En-tête de catégorie — sticky */
      ".pg-cat-label{font-size:9px;font-weight:800;letter-spacing:.1em;",
        "text-transform:uppercase;color:#888;padding:8px 10px 4px;",
        "font-family:inherit;position:sticky;top:0;background:#fff;z-index:1;",
        "border-bottom:1px solid #f0f0f0;}",

      /* Grille */
      ".pg-grid{display:grid;",
        "grid-template-columns:repeat(auto-fill,minmax(68px,1fr));",
        "gap:5px;padding:6px 8px 10px;}",

      /* Item */
      ".pg-item{display:flex;flex-direction:column;align-items:center;gap:4px;",
        "cursor:pointer;border-radius:7px;padding:6px 4px 5px;",
        "transition:background .12s;border:2px solid transparent;}",
      ".pg-item:hover{background:#f5f5f5;}",
      ".pg-item.pg-on{border-color:#1a1a1a;background:#f0f0f0;}",

      /* Miniature — deux variantes selon fond */
      ".pg-thumb{width:44px;height:44px;border-radius:6px;flex-shrink:0;",
        "display:flex;align-items:center;justify-content:center;}",
      ".pg-thumb img{width:28px;height:28px;object-fit:contain;display:block;}",
      /* fond blanc pour les _out */
      ".pg-thumb.pg-bg-white{background:#f0f0f0;border:1px solid #e0e0e0;}",

      /* Label */
      ".pg-lbl{font-size:9px;color:#555;line-height:1.2;text-align:center;",
        "font-family:inherit;word-break:break-word;}",
      ".pg-item.pg-on .pg-lbl{color:#1a1a1a;font-weight:700;}",

      /* Séparateur import */
      ".pg-sep-row{display:flex;align-items:center;gap:8px;",
        "padding:4px 10px 6px;font-size:10px;color:#aaa;font-family:inherit;}",
      ".pg-sep-line{flex:1;height:1px;background:#e8e8e8;}",

      /* FileDrop */
      ".pg-drop{position:relative;cursor:pointer;border-radius:7px;",
        "border:2px dashed #d4d4d4;overflow:hidden;display:flex;",
        "align-items:center;justify-content:center;background:#fafafa;",
        "height:52px;margin:0 8px 8px;transition:border-color .15s;}",
      ".pg-drop:hover{border-color:#a3a3a3;}",
      ".pg-drop img{width:100%;height:100%;object-fit:contain;padding:6px;}",
      ".pg-drop-empty{display:flex;flex-direction:column;align-items:center;",
        "gap:3px;color:#a3a3a3;font-size:10px;text-align:center;font-family:inherit;}",
      ".pg-drop .pg-rm{position:absolute;top:4px;right:4px;",
        "background:rgba(255,255,255,.9);border-radius:999px;padding:3px;",
        "border:none;cursor:pointer;display:flex;line-height:1;}",
    ].join("");
    document.head.appendChild(s);
  }

  /* ── Gallery ─────────────────────────────────────────────────────────── */
  function Gallery(el,opts){
    this.el=el;
    this.grad=opts.grad||"linear-gradient(90deg,#0098E3,#4632FF)";
    this.selected=opts.selected||null;
    this.custom=opts.custom||null;
    this.onChange=opts.onChange||function(){};
    this.onCustom=opts.onCustom||function(){};
    this._open=false;
    this._fileInput=null;
    this._trigger=null;
    this._selBox=null;
    this._selLabel=null;
    this._selHint=null;
    this._dropdown=null;
    this._outsideListener=null;
  }

  Gallery.prototype.render=function(){
    var self=this;
    this.el.innerHTML="";
    var wrap=document.createElement("div");
    wrap.className="pg-wrap";

    /* ── Trigger ── */
    var trigger=document.createElement("div");
    trigger.className="pg-trigger"+(this._open?" pg-open":"");
    this._trigger=trigger;

    var selBox=document.createElement("div");
    selBox.className="pg-sel-box";
    this._selBox=selBox;
    var entry=_files[this.selected]||null;
    var isOut=entry&&!isWhiteCat(entry.cat);
    selBox.style.backgroundImage=isOut?"none":this.grad;
    if(isOut) selBox.style.background="#f0f0f0";
    this._renderSelBox();
    trigger.appendChild(selBox);

    var selInfo=document.createElement("div");
    selInfo.className="pg-sel-info";
    var selLabel=document.createElement("div");
    selLabel.className="pg-sel-label";
    selLabel.textContent=this.custom?"Picto personnalisé":(this.selected||"Choisir un pictogramme");
    this._selLabel=selLabel;
    var selHint=document.createElement("div");
    selHint.className="pg-sel-hint";
    selHint.textContent=_loaded?(_keys.length+" pictos disponibles"):"Chargement…";
    this._selHint=selHint;
    selInfo.appendChild(selLabel); selInfo.appendChild(selHint);
    trigger.appendChild(selInfo);

    var chev=document.createElement("span");
    chev.className="pg-chevron";
    chev.innerHTML='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>';
    trigger.appendChild(chev);

    trigger.addEventListener("click",function(e){
      e.stopPropagation();
      self._open=!self._open;
      trigger.className="pg-trigger"+(self._open?" pg-open":"");
      if(self._open){
        self._renderDropdownInto(wrap);
        if(!self._outsideListener){
          self._outsideListener=function(ev){
            if(!self.el.contains(ev.target)){
              self._open=false;
              trigger.className="pg-trigger";
              self._removeDropdown();
              document.removeEventListener("click",self._outsideListener);
              self._outsideListener=null;
            }
          };
          setTimeout(function(){document.addEventListener("click",self._outsideListener);},0);
        }
      } else {
        self._removeDropdown();
      }
    });
    wrap.appendChild(trigger);
    if(this._open) this._renderDropdownInto(wrap);
    this.el.appendChild(wrap);
  };

  Gallery.prototype._renderSelBox=function(){
    if(!this._selBox)return;
    this._selBox.innerHTML="";
    var src=this.custom||(_files[this.selected]?_files[this.selected].url:null);
    if(src){
      var img=document.createElement("img");
      img.src=src; img.alt=this.selected||"";
      this._selBox.appendChild(img);
    } else {
      this._selBox.innerHTML='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>';
    }
  };

  Gallery.prototype._removeDropdown=function(){
    if(this._dropdown&&this._dropdown.parentNode)
      this._dropdown.parentNode.removeChild(this._dropdown);
    this._dropdown=null;
  };

  Gallery.prototype._renderDropdownInto=function(wrap){
    var self=this;
    this._removeDropdown();
    var dd=document.createElement("div");
    dd.className="pg-dropdown";
    this._dropdown=dd;

    if(!_loaded){
      var hint=document.createElement("div");
      hint.style.cssText="padding:12px;font-size:11px;color:#888;font-family:inherit;";
      hint.textContent="Chargement…"; dd.appendChild(hint);
      wrap.appendChild(dd); return;
    }
    var catKeys=Object.keys(_cats);
    if(!catKeys.length){
      var h2=document.createElement("div");
      h2.style.cssText="padding:12px;font-size:11px;color:#888;font-family:inherit;";
      h2.innerHTML="Aucun picto trouv\u00e9. V\u00e9rifie <b>manifest.json</b>.";
      dd.appendChild(h2); wrap.appendChild(dd); return;
    }

    var showHeaders=catKeys.length>1;

    catKeys.forEach(function(cat){
      var keys=(_cats[cat]||[]).filter(function(k){return _files[k];});
      if(!keys.length)return;
      var white=isWhiteCat(cat);

      if(showHeaders){
        var lbl=document.createElement("div");
        lbl.className="pg-cat-label";
        lbl.textContent=catLabel(cat);
        dd.appendChild(lbl);
      }

      var grid=document.createElement("div");
      grid.className="pg-grid";

      keys.forEach(function(k){
        var entry=_files[k];
        var src=entry.url;
        var on=!self.custom&&self.selected===k;
        var item=document.createElement("div");
        item.className="pg-item"+(on?" pg-on":"");
        item.title=k;

        var thumb=document.createElement("div");
        thumb.className="pg-thumb"+(white?"":" pg-bg-white");
        if(white) thumb.style.backgroundImage=self.grad;

        var img=document.createElement("img");
        img.src=src; img.alt=k;
        thumb.appendChild(img);

        var lbl=document.createElement("div");
        lbl.className="pg-lbl"; lbl.textContent=k;

        item.appendChild(thumb); item.appendChild(lbl);
        item.addEventListener("click",function(e){
          e.stopPropagation();
          self.selected=k; self.custom=null;
          /* Mettre à jour le trigger */
          if(self._selBox){
            self._selBox.style.backgroundImage=white?self.grad:"none";
            self._selBox.style.background=white?"":("#f0f0f0");
            self._renderSelBox();
          }
          if(self._selLabel) self._selLabel.textContent=k;
          /* Mettre à jour sélection dans la grille */
          var allItems=dd.querySelectorAll(".pg-item");
          for(var i=0;i<allItems.length;i++) allItems[i].className="pg-item";
          item.className="pg-item pg-on";
          /* Fermer */
          self._open=false;
          self._trigger&&(self._trigger.className="pg-trigger");
          if(self._outsideListener){
            document.removeEventListener("click",self._outsideListener);
            self._outsideListener=null;
          }
          self._removeDropdown();
          self.onChange(k,src);
        });
        grid.appendChild(item);
      });
      dd.appendChild(grid);
    });

    /* Import custom */
    var sepRow=document.createElement("div");
    sepRow.className="pg-sep-row";
    var l1=document.createElement("div"); l1.className="pg-sep-line";
    var st=document.createElement("span"); st.textContent="ou import personnalis\u00e9";
    var l2=document.createElement("div"); l2.className="pg-sep-line";
    sepRow.appendChild(l1); sepRow.appendChild(st); sepRow.appendChild(l2);
    dd.appendChild(sepRow);

    var drop=document.createElement("div");
    drop.className="pg-drop";
    this._renderDrop(drop);
    dd.appendChild(drop);

    wrap.appendChild(dd);
  };

  Gallery.prototype._renderDrop=function(drop){
    var self=this; drop.innerHTML="";
    if(this.custom){
      var img=document.createElement("img");
      img.src=this.custom; img.alt="custom";
      var rm=document.createElement("button"); rm.className="pg-rm";
      rm.innerHTML='<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="#666" stroke-width="2"><line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/></svg>';
      rm.addEventListener("click",function(e){
        e.stopPropagation();
        self.custom=null; self.onCustom(null);
        self._renderSelBox();
        if(self._selLabel) self._selLabel.textContent=self.selected||"Choisir un pictogramme";
        self._removeDropdown(); self._open=false;
        self._trigger&&(self._trigger.className="pg-trigger");
      });
      drop.appendChild(img); drop.appendChild(rm);
    } else {
      var empty=document.createElement("div"); empty.className="pg-drop-empty";
      empty.innerHTML='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#a3a3a3" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><span>Cliquer ou d\u00e9poser un PNG</span>';
      drop.appendChild(empty);
    }
    if(!this._fileInput){
      var inp=document.createElement("input");
      inp.type="file"; inp.accept="image/*"; inp.style.display="none";
      inp.addEventListener("change",function(){
        var f=inp.files&&inp.files[0]; if(!f)return;
        var rd=new FileReader();
        rd.onload=function(ev){
          self.custom=ev.target.result; self.selected=null;
          self.onCustom(self.custom);
          if(self._selBox){ self._selBox.style.backgroundImage="none"; self._selBox.style.background="#f0f0f0"; self._renderSelBox(); }
          if(self._selLabel) self._selLabel.textContent="Picto personnalis\u00e9";
          self._removeDropdown(); self._open=false;
          self._trigger&&(self._trigger.className="pg-trigger");
        };
        rd.readAsDataURL(f);
      });
      document.body.appendChild(inp);
      this._fileInput=inp;
    }
    drop.addEventListener("click",function(e){e.stopPropagation();self._fileInput.click();});
    drop.addEventListener("dragover",function(e){e.preventDefault();});
    drop.addEventListener("drop",function(e){
      e.preventDefault();
      var f=e.dataTransfer.files&&e.dataTransfer.files[0]; if(!f)return;
      var rd=new FileReader();
      rd.onload=function(ev){
        self.custom=ev.target.result; self.selected=null;
        self.onCustom(self.custom);
        if(self._selBox){ self._selBox.style.backgroundImage="none"; self._selBox.style.background="#f0f0f0"; self._renderSelBox(); }
        if(self._selLabel) self._selLabel.textContent="Picto personnalis\u00e9";
        self._removeDropdown(); self._open=false;
        self._trigger&&(self._trigger.className="pg-trigger");
      };
      rd.readAsDataURL(f);
    });
  };

  /* ── setGrad — live sans re-render ───────────────────────────────────── */
  Gallery.prototype.setGrad=function(grad){
    this.grad=grad;
    /* Trigger : seulement si le picto sélectionné est de type _white */
    if(this._selBox){
      var entry=_files[this.selected];
      if(!this.custom&&entry&&isWhiteCat(entry.cat))
        this._selBox.style.backgroundImage=grad;
    }
    /* Miniatures ouvertes dans le dropdown */
    if(this._dropdown){
      var thumbs=this._dropdown.querySelectorAll(".pg-thumb:not(.pg-bg-white)");
      for(var i=0;i<thumbs.length;i++) thumbs[i].style.backgroundImage=grad;
    }
  };

  /* ── API publique ─────────────────────────────────────────────────────── */
  var _galleries=[];

  global.PictoGallery={
    load:function(cb){ load(cb||function(){}); },
    init:function(el,opts){
      injectStyles();
      var g=new Gallery(el,opts||{});
      _galleries.push(g);
      load(function(){ g.render(); });
      return g;
    },
    getSrc:function(key){ return _files[key]?_files[key].url:null; },
    getKeys:function(){ return _keys.slice(); },
    setGrad:function(grad){ _galleries.forEach(function(g){g.setGrad(grad);}); },
    /* Retourne la catégorie d'un picto ('energies_white', 'energies_out', etc.) */
    getCat:function(key){ return _files[key]?_files[key].cat:null; },
    /* True si le picto est de type blanc (fond dégradé) */
    isWhite:function(key){ var e=_files[key]; return !e||isWhiteCat(e.cat); },
  };

})(window);
