/* ═══════════════════════════════════════════════════════════════════════════
   HEADER & FOOTER PARTAGÉS v2 — Static Posts Generator Fisheye × TotalEnergies

   v2 :
   - menu déroulant "Générateurs" dans le header (accès à toutes les pages)
   - drawer mobile sortant par la gauche (bouton hamburger)
   - slot StatusBar conservé (#sm-status-slot)

   Pour ajouter un générateur : ajouter une entrée dans NAV_ITEMS.
   ═══════════════════════════════════════════════════════════════════════════ */
(function(){
  /* La config client (config/clients/*.js) peut surcharger la navigation :
     window.CLIENT_CONFIG.nav — sinon, liste par défaut ci-dessous. */
  var NAV_ITEMS = (window.CLIENT_CONFIG && window.CLIENT_CONFIG.nav) || [
    { label: "Fiche Métier",  href: "generators/fiche-metier/index.html"  },
    { label: "Citation Post", href: "generators/citation/index.html"      },
    { label: "Latest News",   href: "generators/latest-news/index.html"   },
    { label: "Split Screen",  href: "generators/split-screen/index.html"  },
    { label: "Block Layouts", href: "generators/block-layouts/index.html", isNew: true },
    /* Carrousel en dernier : il se nourrit des autres générateurs, sa place
       est au bout de la liste, pas au milieu. */
    { label: "Carrousel",     href: "generators/carrousel/index.html"     },
  ];

  /* Répertoire de ce script (assets/) */
  function scriptBase() {
    var scripts = document.querySelectorAll("script[src]");
    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].src && scripts[i].src.indexOf("header.js") >= 0)
        return scripts[i].src.replace(/header\.js.*$/, "");
    }
    return "";
  }
  function rootBase() { return scriptBase().replace(/assets\/?$/, ""); }
  function assetUrl(rel) { return scriptBase() + rel; }
  function pageUrl(rel)  { return rootBase()   + rel; }

  var currentHref = window.location.href.replace(/[#?].*$/, "");
  function isCurrent(href) {
    var abs = pageUrl(href).replace(/^https?:\/\/[^/]+/, "");
    return currentHref.replace(/^https?:\/\/[^/]+/, "").indexOf(abs) >= 0;
  }

  function injectStyles() {
    if (document.getElementById("site-header-styles")) return;
    var s = document.createElement("style");
    s.id = "site-header-styles";
    s.textContent = [
      ".page-header{position:fixed;top:0;left:0;right:0;height:52px;z-index:200;background:#fff;border-bottom:1px solid #e8e8e8;display:flex;align-items:center;padding:0 24px;gap:14px;box-shadow:0 1px 6px rgba(0,0,0,.05);}",
      ".page-header-logo{height:19px;display:block;}",
      ".page-header-sep{width:1px;height:18px;background:#e0e0e0;flex-shrink:0;}",
      ".page-header-title{font-size:11px;font-weight:800;color:#111;letter-spacing:.07em;text-transform:uppercase;white-space:nowrap;}",
      ".page-header-sub{font-size:11px;font-weight:400;color:#aaa;white-space:nowrap;}",

      /* ── Menu déroulant desktop ── */
      ".hdr-menu-wrap{position:relative;flex-shrink:0;}",
      ".hdr-menu-btn{display:flex;align-items:center;gap:7px;font-size:11px;font-weight:800;color:#1a1a1a;letter-spacing:.05em;text-transform:uppercase;padding:6px 14px;border-radius:2px;border:1px solid #dadada;background:#fafafa;cursor:pointer;font-family:inherit;transition:all .15s;white-space:nowrap;}",
      ".hdr-menu-btn:hover,.hdr-menu-btn.open{background:#1a1a1a;color:#fff;border-color:#1a1a1a;}",
      ".hdr-menu-btn svg{transition:transform .18s;}",
      ".hdr-menu-btn.open svg{transform:rotate(180deg);}",
      ".hdr-menu-dd{position:absolute;top:calc(100% + 8px);right:0;min-width:230px;background:#fff;border:1px solid #e0e0e0;border-radius:8px;box-shadow:0 10px 34px rgba(0,0,0,.14);padding:6px;display:none;z-index:300;}",
      ".hdr-menu-dd.open{display:block;}",
      ".hdr-menu-dd a{display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:6px;font-size:12px;font-weight:700;color:#333;text-decoration:none;letter-spacing:.03em;}",
      ".hdr-menu-dd a:hover{background:#f2f2ef;}",
      ".hdr-menu-dd a.active{background:#1a1a1a;color:#fff;}",
      ".hdr-menu-dd a .num{font-size:10px;font-weight:800;color:#bbb;width:18px;}",
      ".hdr-menu-dd a.active .num{color:rgba(255,255,255,.5);}",
      ".hdr-menu-dd a .new-badge{margin-left:auto;font-size:9px;font-weight:800;letter-spacing:.06em;padding:2px 6px;border-radius:99px;background:linear-gradient(135deg,#0098E3,#4632FF);color:#fff;}",
      ".hdr-menu-dd .dd-sep{height:1px;background:#efefef;margin:6px 4px;}",

      /* ── Hamburger + drawer mobile (sort par la gauche) ── */
      ".hdr-burger{display:flex;flex-direction:column;justify-content:center;gap:4px;width:36px;height:36px;padding:8px;border:1px solid #dadada;border-radius:2px;background:#fafafa;cursor:pointer;flex-shrink:0;}",
      ".hdr-burger span{display:block;height:2px;background:#1a1a1a;border-radius:1px;transition:all .2s;}",
      ".mob-drawer{position:fixed;top:0;left:0;bottom:0;width:270px;max-width:82vw;background:#fff;z-index:400;transform:translateX(-100%);transition:transform .22s ease;box-shadow:4px 0 32px rgba(0,0,0,.18);display:flex;flex-direction:column;}",
      ".mob-drawer.open{transform:translateX(0);}",
      ".mob-drawer-head{display:flex;align-items:center;gap:10px;padding:16px 18px;border-bottom:1px solid #efefef;}",
      ".mob-drawer-head img{height:18px;}",
      ".mob-drawer-head .close{margin-left:auto;background:none;border:none;font-size:22px;color:#aaa;cursor:pointer;line-height:1;}",
      ".mob-drawer nav{padding:10px;display:flex;flex-direction:column;gap:2px;overflow-y:auto;}",
      ".mob-drawer nav a{display:flex;align-items:center;gap:10px;padding:12px 12px;border-radius:8px;font-size:13px;font-weight:700;color:#333;text-decoration:none;}",
      ".mob-drawer nav a:hover{background:#f2f2ef;}",
      ".mob-drawer nav a.active{background:#1a1a1a;color:#fff;}",
      ".mob-drawer nav a .new-badge{margin-left:auto;font-size:9px;font-weight:800;padding:2px 6px;border-radius:99px;background:linear-gradient(135deg,#0098E3,#4632FF);color:#fff;}",
      ".mob-overlay{position:fixed;inset:0;background:rgba(0,0,0,.35);z-index:390;opacity:0;pointer-events:none;transition:opacity .2s;}",
      ".mob-overlay.open{opacity:1;pointer-events:auto;}",
      ".hdr-menu-wrap{display:none;}",
      "@media(max-width:768px){",
        ".page-header{padding:0 14px;gap:10px;}",
        ".page-header-sub{display:none;}",
      "}",

      /* ── Footer ── */
      ".page-footer{position:fixed;bottom:0;right:0;z-index:200;display:flex;align-items:center;gap:8px;padding:7px 14px;background:#fff;border-top:1px solid #e5e5e5;border-left:1px solid #e5e5e5;border-radius:10px 0 0 0;}",
      ".page-footer-label{font-size:10px;font-weight:700;color:#bbb;letter-spacing:.06em;text-transform:uppercase;}",
      ".page-footer-logo{height:15px;opacity:.4;}"
    ].join("");
    document.head.appendChild(s);
  }

  function navLink(item, idx, forDrawer) {
    var a = document.createElement("a");
    a.href = pageUrl(item.href);
    if (isCurrent(item.href)) a.className = "active";
    var num = document.createElement("span");
    num.className = "num";
    num.textContent = ("0" + (idx + 1)).slice(-2);
    if (!forDrawer) a.appendChild(num);
    var lbl = document.createElement("span");
    lbl.textContent = item.label;
    a.appendChild(lbl);
    if (item.isNew) {
      var b = document.createElement("span");
      b.className = "new-badge";
      b.textContent = "NEW";
      a.appendChild(b);
    }
    return a;
  }

  function buildHeader() {
    var existing = document.querySelector(".page-header");
    var title = "", sub = "Static Posts Generator";
    if (existing) {
      var t = existing.querySelector(".page-header-title");
      var s = existing.querySelector(".page-header-sub");
      title = t ? t.textContent : "";
      sub   = s ? s.textContent : sub;
      existing.parentNode.removeChild(existing);
    } else {
      title = document.title.replace(/\s*[–—-].*$/, "").trim();
    }

    var header = document.createElement("header");
    header.className = "page-header";

    /* Hamburger mobile */
    var burger = document.createElement("button");
    burger.className = "hdr-burger";
    burger.setAttribute("aria-label", "Menu");
    burger.innerHTML = "<span></span><span></span><span></span>";
    header.appendChild(burger);

    /* Logo cliquable : retour à l'accueil. Enveloppé dans un <a> plutôt que
       piloté par un onClick, pour garder le comportement natif du navigateur
       (clic milieu, ouverture dans un nouvel onglet, aperçu du lien). */
    var logoLien = document.createElement("a");
    logoLien.href = pageUrl("index.html");
    logoLien.title = "Retour à l'accueil";
    logoLien.style.display = "block";
    logoLien.style.flexShrink = "0";
    var logo = document.createElement("img");
    logo.className = "page-header-logo";
    logo.src = assetUrl("logos/fisheye-gallery-logo-vector.png");
    logo.alt = "Fisheye — accueil";
    logoLien.appendChild(logo);
    header.appendChild(logoLien);

    var sep = document.createElement("div");
    sep.className = "page-header-sep";
    header.appendChild(sep);

    if (title) {
      var titleEl = document.createElement("span");
      titleEl.className = "page-header-title";
      titleEl.textContent = title;
      header.appendChild(titleEl);
    }

    var subEl = document.createElement("span");
    subEl.className = "page-header-sub";
    subEl.textContent = sub;
    header.appendChild(subEl);

    /* Slot pour la StatusBar React (nom + statut), avant le menu */
    var statusSlot = document.createElement("div");
    statusSlot.id = "sm-status-slot";
    statusSlot.style.cssText = "display:flex;align-items:center;height:100%;margin-left:auto;min-width:0;overflow:hidden;";
    header.appendChild(statusSlot);

    /* ── Menu déroulant desktop ── */
    var menuWrap = document.createElement("div");
    menuWrap.className = "hdr-menu-wrap";
    var btn = document.createElement("button");
    btn.className = "hdr-menu-btn";
    btn.innerHTML = 'Générateurs <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>';
    var dd = document.createElement("div");
    dd.className = "hdr-menu-dd";

    var home = document.createElement("a");
    home.href = pageUrl("index.html");
    home.innerHTML = "<span class='num'>⌂</span><span>Accueil</span>";
    dd.appendChild(home);
    var ddSep = document.createElement("div");
    ddSep.className = "dd-sep";
    dd.appendChild(ddSep);
    NAV_ITEMS.forEach(function(item, i) { dd.appendChild(navLink(item, i, false)); });

    btn.addEventListener("click", function(ev) {
      ev.stopPropagation();
      var open = dd.classList.toggle("open");
      btn.classList.toggle("open", open);
    });
    document.addEventListener("click", function() {
      dd.classList.remove("open");
      btn.classList.remove("open");
    });

    menuWrap.appendChild(btn);
    menuWrap.appendChild(dd);
    header.appendChild(menuWrap);

    document.body.insertBefore(header, document.body.firstChild);

    /* ── Drawer mobile (gauche) ── */
    var overlay = document.createElement("div");
    overlay.className = "mob-overlay";
    var drawer = document.createElement("div");
    drawer.className = "mob-drawer";

    var dHead = document.createElement("div");
    dHead.className = "mob-drawer-head";
    var dLogoLien = document.createElement("a");
    dLogoLien.href = pageUrl("index.html");
    dLogoLien.title = "Retour à l'accueil";
    dLogoLien.style.display = "block";
    var dLogo = document.createElement("img");
    dLogo.src = assetUrl("logos/fisheye-gallery-logo-vector.png");
    dLogo.alt = "Fisheye — accueil";
    dLogoLien.appendChild(dLogo);
    dHead.appendChild(dLogoLien);
    var dClose = document.createElement("button");
    dClose.className = "close";
    dClose.innerHTML = "×";
    dHead.appendChild(dClose);
    drawer.appendChild(dHead);

    var dNav = document.createElement("nav");
    var dHome = document.createElement("a");
    dHome.href = pageUrl("index.html");
    dHome.textContent = "Accueil";
    dNav.appendChild(dHome);
    NAV_ITEMS.forEach(function(item, i) { dNav.appendChild(navLink(item, i, true)); });
    drawer.appendChild(dNav);

    function openDrawer(o) {
      drawer.classList.toggle("open", o);
      overlay.classList.toggle("open", o);
    }
    burger.addEventListener("click", function() { openDrawer(true); });
    dClose.addEventListener("click", function() { openDrawer(false); });
    overlay.addEventListener("click", function() { openDrawer(false); });

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);
  }

  function buildFooter() {
    var existing = document.querySelector(".page-footer");
    if (existing) existing.parentNode.removeChild(existing);
    var footer = document.createElement("footer");
    footer.className = "page-footer";
    var label = document.createElement("span");
    label.className = "page-footer-label";
    label.textContent = "Developed by";
    footer.appendChild(label);
    var logo = document.createElement("img");
    logo.className = "page-footer-logo";
    logo.src = assetUrl("logos/fisheye-gallery-logo-vector.png");
    logo.alt = "Fisheye";
    footer.appendChild(logo);
    document.body.appendChild(footer);
  }

  function init() {
    injectStyles();
    buildHeader();
    buildFooter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
