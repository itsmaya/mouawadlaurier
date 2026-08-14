/* ═══════════════════════════════════════════════════════════════════════════
   HEADER & FOOTER PARTAGÉS — Static Posts Generator Fisheye × TotalEnergies
   Pour ajouter un générateur : ajouter une entrée dans NAV_ITEMS.
   ═══════════════════════════════════════════════════════════════════════════ */
(function(){
  var NAV_ITEMS = [
    { label: "Fiche Métier",  href: "generators/fiche-metier/index.html" },
    { label: "Citation Post", href: "generators/citation/index.html"     },
    { label: "Latest News",   href: "generators/latest-news/index.html"  },
    { label: "Split Screen",  href: "generators/split-screen/index.html" },
    { label: "Carrousel",     href: "generators/carrousel/index.html"    },
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

  /* Racine du site = assets/../ */
  function rootBase() {
    return scriptBase().replace(/assets\/?$/, "");
  }

  /* Chemin vers un asset (logo, etc.) depuis assets/ */
  function assetUrl(rel) { return scriptBase() + rel; }

  /* Chemin vers une page depuis la racine */
  function pageUrl(rel)  { return rootBase()   + rel; }

  /* Page courante */
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
      ".page-header-title{font-size:11px;font-weight:800;color:#111;letter-spacing:.07em;text-transform:uppercase;}",
      ".page-header-sub{font-size:11px;font-weight:400;color:#aaa;}",
      ".page-header-nav{margin-left:auto;display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding-left:12px;}",
      ".page-header-nav::-webkit-scrollbar{display:none;}",
      ".page-header-nav a{font-size:11px;font-weight:700;color:#333;text-decoration:none;padding:5px 12px;border-radius:2px;border:1px solid #ddd;letter-spacing:.03em;text-transform:uppercase;white-space:nowrap;}",
      ".page-header-nav a:hover{background:#f5f5f5;}",
      ".page-header-nav a.active{background:#1a1a1a;color:#fff;border-color:#1a1a1a;}",
      ".page-footer{position:fixed;bottom:0;right:0;z-index:200;display:flex;align-items:center;gap:8px;padding:7px 14px;background:#fff;border-top:1px solid #e5e5e5;border-left:1px solid #e5e5e5;border-radius:10px 0 0 0;}",
      ".page-footer-label{font-size:10px;font-weight:700;color:#bbb;letter-spacing:.06em;text-transform:uppercase;}",
      ".page-footer-logo{height:15px;opacity:.4;}"
    ].join("");
    document.head.appendChild(s);
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

    var logo = document.createElement("img");
    logo.className = "page-header-logo";
    logo.src = assetUrl("logos/fisheye-gallery-logo-vector.png");
    logo.alt = "Fisheye";
    header.appendChild(logo);

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

    var nav = document.createElement("nav");
    nav.className = "page-header-nav";

    /* Slot pour la StatusBar React (nom + statut), avant la nav */
    var statusSlot = document.createElement("div");
    statusSlot.id = "sm-status-slot";
    statusSlot.style.cssText = "display:flex;align-items:center;height:100%;margin-left:auto;";
    header.appendChild(statusSlot);

    var home = document.createElement("a");
    home.href = pageUrl("index.html");
    home.innerHTML = "&larr; Accueil";
    nav.appendChild(home);

    NAV_ITEMS.forEach(function(item) {
      var a = document.createElement("a");
      a.href = pageUrl(item.href);
      a.textContent = item.label;
      if (isCurrent(item.href)) a.className = "active";
      nav.appendChild(a);
    });

    header.appendChild(nav);

    document.body.insertBefore(header, document.body.firstChild);
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
