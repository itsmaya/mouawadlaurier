/* ═══════════════════════════════════════════════════════════════════════════
   HEADER PARTAGÉ v3 — Static Posts Generator Fisheye × TotalEnergies

   UN SEUL OBJET POUR TOUTES LES PAGES.
   L'accueil et les huit générateurs chargent ce fichier : la barre du haut
   est donc strictement identique partout, et une modification faite ici se
   voit sur tout le site.

   Ce que la barre contient, de gauche à droite :
     1. le logotype Static Post Generator (retour à l'accueil) ;
     2. la navigation : Accueil, Carrousel, Fiche métier, EnergyTalks,
        puis un menu déroulant « Vignettes » pour les cinq types de slides ;
     3. le slot #sm-status-slot, où app-shell.js monte la StatusBar du
        SaveManager : pastille d'état, nom de la version ouverte, bouton
        Enregistrer / Mettre à jour. C'est ce qui dit, sur chaque page, quel
        document est en cours d'édition et s'il est à jour ;
     4. le logo Fisheye.

   HAUTEUR : 52 px, et cette valeur n'est pas libre. app-shell.js et les
   générateurs calculent leurs colonnes avec calc(100vh - 52px) et un
   padding-top de 52px. Changer HAUTEUR ici impose de changer ces règles.

   TAILLE DU MENU : la constante MENU_TAILLE ci-dessous, et rien d'autre.
   Une page peut encore la surcharger avec :root{--menu-taille:…} .
   ═══════════════════════════════════════════════════════════════════════════ */
(function(){

  var HAUTEUR = 52;          /* px — voir l'avertissement ci-dessus */
  var MENU_TAILLE = "11px";  /* taille par défaut des entrées du menu */

  /* ── Navigation ────────────────────────────────────────────────────────
     PRINCIPAUX : les outils qui produisent un post complet.
     VIGNETTES  : les types de slides, regroupés dans le menu déroulant,
     parce qu'ils s'utilisent le plus souvent depuis le Carrousel.
     window.CLIENT_CONFIG.nav reste prioritaire (config/clients/*.js) : s'il
     existe, il remplace la liste principale. */
  var PRINCIPAUX = (window.CLIENT_CONFIG && window.CLIENT_CONFIG.nav) || [
    { label: "Carrousel",    href: "generators/carrousel/index.html"    },
    { label: "Fiche métier", href: "generators/fiche-metier/index.html" },
    { label: "EnergyTalks",  href: "generators/energy-talks/index.html" }
  ];
  var VIGNETTES = (window.CLIENT_CONFIG && window.CLIENT_CONFIG.vignettes) || [
    { label: "Totally True",  href: "generators/totally-true/index.html"  },
    { label: "Citation Post", href: "generators/citation/index.html"      },
    { label: "Latest News",   href: "generators/latest-news/index.html"   },
    { label: "Split Screen",  href: "generators/split-screen/index.html"  },
    { label: "Block Layouts", href: "generators/block-layouts/index.html" }
  ];

  /* ── Chemins : tout est résolu depuis l'URL de ce script, donc la barre
        marche aussi bien à la racine que dans generators/xxx/. ────────── */
  function scriptBase(){
    var s = document.querySelectorAll("script[src]");
    for (var i=0;i<s.length;i++)
      if (s[i].src && s[i].src.indexOf("header.js")>=0)
        return s[i].src.replace(/header\.js.*$/,"");
    return "";
  }
  function rootBase(){ return scriptBase().replace(/assets\/?$/,""); }
  function assetUrl(r){ return scriptBase()+r; }
  function pageUrl(r){ return rootBase()+r; }

  var ici = window.location.href.replace(/[#?].*$/,"").replace(/^https?:\/\/[^/]+/,"");
  function estCourant(href){
    var abs = pageUrl(href).replace(/^https?:\/\/[^/]+/,"");
    /* L'accueil ne doit pas s'allumer sur toutes les pages : son chemin se
       termine par index.html, présent partout. On exige l'égalité. */
    if (href === "index.html")
      return ici === abs || ici === abs.replace(/index\.html$/,"") ;
    return ici.indexOf(abs) >= 0;
  }

  function styles(){
    if (document.getElementById("site-header-styles")) return;
    var s = document.createElement("style");
    s.id = "site-header-styles";
    s.textContent = [
      /* ── Barre ── */
      ".page-header{position:fixed;top:0;left:0;right:0;height:"+HAUTEUR+"px;z-index:200;",
        "background:#000;display:flex;align-items:center;gap:18px;padding:0 18px;",
        "font-family:'Nunito',sans-serif;}",
      ".page-header a{text-decoration:none;}",
      ".hdr-mark{display:flex;align-items:center;flex-shrink:0;}",
      ".hdr-mark img{height:22px;display:block;}",

      /* ── Navigation ── */
      ".hdr-nav{display:flex;align-items:center;gap:6px;min-width:0;}",
      ".hdr-nav a,.hdr-vign-btn{font-size:var(--menu-taille,"+MENU_TAILLE+");font-weight:500;",
        "color:#9aa3ae;white-space:nowrap;padding:.62em 1.05em;border-radius:.55em;",
        "background:none;border:none;font-family:inherit;cursor:pointer;",
        "display:flex;align-items:center;gap:.5em;transition:color .18s,background .18s;}",
      ".hdr-nav a:hover,.hdr-vign-btn:hover{color:#e8ebef;}",
      ".hdr-nav a.actif,.hdr-vign-btn.actif{color:#fff;background:#1b212c;}",
      ".hdr-vign-btn svg{transition:transform .18s;}",
      ".hdr-vign-btn.ouvert svg{transform:rotate(180deg);}",
      ".hdr-vign-btn.ouvert{color:#fff;background:#1b212c;}",

      /* ── Déroulant Vignettes : même grammaire que la barre, en plus sombre
            que le fond de page pour rester lisible sur l'accueil clair. ── */
      ".hdr-vign{position:relative;flex-shrink:0;}",
      ".hdr-vign-dd{position:absolute;top:calc(100% + 7px);left:0;min-width:190px;",
        "background:#11161f;border:1px solid rgba(255,255,255,.10);border-radius:10px;",
        "box-shadow:0 14px 38px rgba(0,0,0,.45);padding:6px;display:none;z-index:300;}",
      ".hdr-vign-dd.ouvert{display:block;}",
      ".hdr-vign-dd a{display:flex;align-items:center;gap:9px;padding:.62em .8em;",
        "border-radius:7px;font-size:var(--menu-taille,"+MENU_TAILLE+");font-weight:500;color:#9aa3ae;",
        "white-space:nowrap;transition:color .15s,background .15s;}",
      ".hdr-vign-dd a:hover{background:#1b212c;color:#fff;}",
      ".hdr-vign-dd a.actif{background:#1b212c;color:#fff;}",
      ".hdr-vign-dd .num{font-size:.85em;font-weight:800;color:#4f5865;width:1.5em;}",
      ".hdr-vign-dd a.actif .num{color:rgba(255,255,255,.45);}",

      /* ── Zone de droite : état du document, puis logo ── */
      "#sm-status-slot{display:flex;align-items:center;height:100%;margin-left:auto;",
        "min-width:0;overflow:hidden;}",
      ".hdr-fish{display:flex;align-items:center;flex-shrink:0;padding-left:4px;}",
      ".hdr-fish img{height:14px;display:block;filter:invert(1);}",

      /* ── Mobile : la navigation passe dans un tiroir ── */
      ".hdr-burger{display:none;flex-direction:column;justify-content:center;gap:4px;",
        "width:32px;height:32px;padding:7px;border:1px solid rgba(255,255,255,.18);",
        "border-radius:6px;background:none;cursor:pointer;flex-shrink:0;}",
      ".hdr-burger span{display:block;height:2px;background:#fff;border-radius:1px;}",
      ".hdr-drawer{position:fixed;top:0;left:0;bottom:0;width:250px;max-width:80vw;",
        "background:#0b0f16;z-index:400;transform:translateX(-100%);",
        "transition:transform .22s ease;display:flex;flex-direction:column;",
        "box-shadow:4px 0 32px rgba(0,0,0,.5);}",
      ".hdr-drawer.ouvert{transform:translateX(0);}",
      ".hdr-drawer-head{display:flex;align-items:center;padding:14px 16px;",
        "border-bottom:1px solid rgba(255,255,255,.08);}",
      ".hdr-drawer-head img{height:20px;}",
      ".hdr-drawer-head .fermer{margin-left:auto;background:none;border:none;",
        "font-size:22px;color:#6b7482;cursor:pointer;line-height:1;}",
      ".hdr-drawer nav{padding:10px;display:flex;flex-direction:column;gap:2px;overflow-y:auto;}",
      ".hdr-drawer nav a{padding:11px 12px;border-radius:8px;font-size:13px;",
        "font-weight:600;color:#9aa3ae;}",
      ".hdr-drawer nav a:hover{background:#1b212c;color:#fff;}",
      ".hdr-drawer nav a.actif{background:#1b212c;color:#fff;}",
      ".hdr-drawer .groupe{font-size:9px;font-weight:800;letter-spacing:.18em;",
        "text-transform:uppercase;color:#4f5865;padding:14px 12px 6px;}",
      ".hdr-voile{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:390;",
        "opacity:0;pointer-events:none;transition:opacity .2s;}",
      ".hdr-voile.ouvert{opacity:1;pointer-events:auto;}",
      "@media(max-width:900px){",
        ".page-header{gap:12px;padding:0 12px;}",
        ".hdr-nav{display:none;}",
        ".hdr-burger{display:flex;}",
      "}",
      /* Téléphone : la barre débordait de quelques dizaines de pixels et
         faisait défiler toute la page en largeur. On retire le logo Fisheye
         (il reste dans le pied), on réduit le logotype, et le nom du document
         se tronque au lieu de pousser. */
      "@media(max-width:600px){",
        ".page-header{gap:8px;padding:0 8px;}",
        ".hdr-mark img{height:17px;}",
        ".hdr-fish{display:none;}",
        "#sm-statusbar{padding:0 6px!important;gap:6px!important;}",
        "#sm-statusbar>div{max-width:34vw;}",
      "}",

      /* ── Pastille Fisheye en bas à droite (pages générateurs) ── */
      ".page-footer{position:fixed;bottom:0;right:0;z-index:200;display:flex;",
        "align-items:center;gap:8px;padding:7px 14px;background:#fff;",
        "border-top:1px solid #e5e5e5;border-left:1px solid #e5e5e5;border-radius:10px 0 0 0;}",
      ".page-footer-label{font-size:10px;font-weight:700;color:#bbb;",
        "letter-spacing:.06em;text-transform:uppercase;}",
      ".page-footer-logo{height:15px;opacity:.4;}"
    ].join("");
    document.head.appendChild(s);
  }

  function lien(item, numero){
    var a = document.createElement("a");
    a.href = pageUrl(item.href);
    if (estCourant(item.href)) a.className = "actif";
    if (numero){
      var n = document.createElement("span");
      n.className = "num";
      n.textContent = numero;
      a.appendChild(n);
    }
    var l = document.createElement("span");
    l.textContent = item.label;
    a.appendChild(l);
    return a;
  }

  function construireBarre(){
    var ancien = document.querySelector(".page-header");
    if (ancien) ancien.parentNode.removeChild(ancien);

    var header = document.createElement("header");
    header.className = "page-header";

    /* Hamburger (mobile) */
    var burger = document.createElement("button");
    burger.className = "hdr-burger";
    burger.setAttribute("aria-label","Menu");
    burger.innerHTML = "<span></span><span></span><span></span>";
    header.appendChild(burger);

    /* Logotype */
    var mark = document.createElement("a");
    mark.className = "hdr-mark";
    mark.href = pageUrl("index.html");
    mark.title = "Retour à l'accueil";
    var mimg = document.createElement("img");
    mimg.src = assetUrl("logos/logotype-spg-blanc.png");
    mimg.alt = "Static Post Generator";
    /* Repli : si le logotype n'a pas été déposé sur le serveur, on écrit le
       nom plutôt que d'afficher une image cassée. */
    mimg.onerror = function(){
      var t = document.createElement("span");
      t.textContent = "Static Post Generator";
      t.style.cssText = "font-family:'DM Serif Display',serif;font-size:15px;color:#fff;";
      mark.replaceChild(t, mimg);
    };
    mark.appendChild(mimg);
    header.appendChild(mark);

    /* Navigation */
    var nav = document.createElement("nav");
    nav.className = "hdr-nav";
    nav.appendChild(lien({label:"Accueil",href:"index.html"}));
    PRINCIPAUX.forEach(function(it){ nav.appendChild(lien(it)); });
    header.appendChild(nav);

    /* Déroulant Vignettes — placé DANS la nav, sinon le gap de 18 px de la
       barre l'écartait des autres entrées comme s'il n'en faisait pas partie. */
    var vign = document.createElement("div");
    vign.className = "hdr-vign";
    var btn = document.createElement("button");
    btn.className = "hdr-vign-btn";
    btn.type = "button";
    btn.setAttribute("aria-haspopup","true");
    btn.setAttribute("aria-expanded","false");
    btn.innerHTML = 'Vignettes <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>';
    var dd = document.createElement("div");
    dd.className = "hdr-vign-dd";
    var actifDansLeMenu = false;
    VIGNETTES.forEach(function(it,i){
      if (estCourant(it.href)) actifDansLeMenu = true;
      dd.appendChild(lien(it, ("0"+(i+1)).slice(-2)));
    });
    if (actifDansLeMenu) btn.classList.add("actif");

    function ouvrir(o){
      dd.classList.toggle("ouvert",o);
      btn.classList.toggle("ouvert",o);
      btn.setAttribute("aria-expanded",o?"true":"false");
    }
    btn.addEventListener("click",function(ev){
      ev.stopPropagation();
      ouvrir(!dd.classList.contains("ouvert"));
    });
    document.addEventListener("click",function(){ ouvrir(false); });
    document.addEventListener("keydown",function(ev){
      if (ev.key === "Escape") ouvrir(false);
    });
    vign.appendChild(btn);
    vign.appendChild(dd);
    nav.appendChild(vign);

    /* Slot de la StatusBar : nom de la version ouverte + bouton d'enregistrement.
       app-shell.js y monte SaveManager.StatusBar au premier rendu ; sur
       l'accueil il reste vide, ce qui est normal : rien n'y est édité. */
    var slot = document.createElement("div");
    slot.id = "sm-status-slot";
    header.appendChild(slot);

    /* Logo Fisheye */
    var fish = document.createElement("a");
    fish.className = "hdr-fish";
    fish.href = "https://fisheye.fr";
    fish.target = "_blank";
    fish.rel = "noopener";
    var fimg = document.createElement("img");
    fimg.src = assetUrl("logos/fisheye-gallery-logo-vector.png");
    fimg.alt = "Fisheye";
    fish.appendChild(fimg);
    header.appendChild(fish);

    document.body.insertBefore(header, document.body.firstChild);

    /* ── Tiroir mobile ── */
    var voile = document.createElement("div");
    voile.className = "hdr-voile";
    var tiroir = document.createElement("div");
    tiroir.className = "hdr-drawer";

    var tHead = document.createElement("div");
    tHead.className = "hdr-drawer-head";
    var tLien = document.createElement("a");
    tLien.href = pageUrl("index.html");
    var tImg = document.createElement("img");
    tImg.src = assetUrl("logos/logotype-spg-blanc.png");
    tImg.alt = "Static Post Generator";
    tLien.appendChild(tImg);
    tHead.appendChild(tLien);
    var tClose = document.createElement("button");
    tClose.className = "fermer";
    tClose.innerHTML = "×";
    tHead.appendChild(tClose);
    tiroir.appendChild(tHead);

    var tNav = document.createElement("nav");
    tNav.appendChild(lien({label:"Accueil",href:"index.html"}));
    PRINCIPAUX.forEach(function(it){ tNav.appendChild(lien(it)); });
    var grp = document.createElement("div");
    grp.className = "groupe";
    grp.textContent = "Vignettes";
    tNav.appendChild(grp);
    VIGNETTES.forEach(function(it){ tNav.appendChild(lien(it)); });
    tiroir.appendChild(tNav);

    function ouvrirTiroir(o){
      tiroir.classList.toggle("ouvert",o);
      voile.classList.toggle("ouvert",o);
    }
    burger.addEventListener("click",function(){ ouvrirTiroir(true); });
    tClose.addEventListener("click",function(){ ouvrirTiroir(false); });
    voile.addEventListener("click",function(){ ouvrirTiroir(false); });

    document.body.appendChild(voile);
    document.body.appendChild(tiroir);
  }

  /* La pastille « Developed by Fisheye » n'a de sens que sur les générateurs :
     l'accueil a son propre pied de page, en pleine largeur. */
  function construirePastille(){
    if (document.querySelector(".ftr")) return;
    var ancien = document.querySelector(".page-footer");
    if (ancien) ancien.parentNode.removeChild(ancien);
    var f = document.createElement("footer");
    f.className = "page-footer";
    var l = document.createElement("span");
    l.className = "page-footer-label";
    l.textContent = "Developed by";
    f.appendChild(l);
    var img = document.createElement("img");
    img.className = "page-footer-logo";
    img.src = assetUrl("logos/fisheye-gallery-logo-vector.png");
    img.alt = "Fisheye";
    f.appendChild(img);
    document.body.appendChild(f);
  }

  function init(){ styles(); construireBarre(); construirePastille(); }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", init);
  else
    init();
})();
