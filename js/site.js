/* ==========================================================
   Shared layout: global nav, flyout menus, mobile menu,
   footer, ICAI disclaimer, reveal-on-scroll, small widgets.
   ========================================================== */
(function () {
  var S = window.SITE, F = S.firm, icon = S.icon, esc = S.esc;
  var page = document.body.getAttribute("data-page") || "";

  var menus = [
    { id: "about", label: "About", href: "about.html", groups: [
      { title: "Explore About", big: true, links: [["About Us", "about.html#profile"], ["Leadership Associates", "about.html#team"], ["Service Portfolio", "about.html#portfolio"], ["Why Choose MSS", "about.html#why"]] },
      { title: "More", links: [["Careers", "careers.html"], ["Contact", "contact.html"]] }
    ] },
    { id: "services", label: "Services", href: "services.html", groups: [
      { title: "Explore Services", big: true, links: S.services.slice(0, 4).map(function (s) { return [s.name, "service.html?s=" + s.id]; }) },
      { title: "More Services", links: S.services.slice(4).map(function (s) { return [s.name, "service.html?s=" + s.id]; }).concat([["All Services", "services.html"]]) }
    ] },
    { id: "industries", label: "Industries", href: "industries.html", groups: [
      { title: "Who We Serve", big: true, links: S.industries.slice(0, 3).map(function (i) { return [i.name, "industries.html#" + i.id]; }) },
      { title: "Also", links: S.industries.slice(3).map(function (i) { return [i.name, "industries.html#" + i.id]; }) }
    ] },
    { id: "resources", label: "Resources", href: "resources.html", groups: [
      { title: "Explore Resources", big: true, links: [["Important Dates", "important-dates.html"], ["Calculators", "calculators.html"], ["Knowledge Center", "knowledge.html"]] },
      { title: "Tools", links: [["Income Tax Calculator", "calculators.html?tab=income-tax"], ["GST Calculator", "calculators.html?tab=gst"], ["EMI Calculator", "calculators.html?tab=emi"], ["Useful Links", "resources.html#links"]] }
    ] },
    { id: "careers", label: "Careers", href: "careers.html" },
    { id: "contact", label: "Contact", href: "contact.html" }
  ];

  function brand() {
    return S.logoMark("brand__mark") +
      '<span class="brand__name"><b>' + esc(F.full) + "</b><small>Chartered Accountants</small></span>";
  }

  /* ---------- Header ---------- */
  var header = document.getElementById("site-header");
  if (header) {
    var links = menus.map(function (m) {
      return '<li><a href="' + m.href + '" data-menu="' + m.id + '"' + (page === m.id ? ' class="is-active" aria-current="page"' : "") + ">" + m.label + "</a></li>";
    }).join("");
    var flyouts = menus.filter(function (m) { return m.groups; }).map(function (m) {
      return '<div class="flyout" data-flyout="' + m.id + '"><div><div class="flyout__inner">' + m.groups.map(function (g) {
        return '<div class="flyout__col' + (g.big ? " flyout__col--big" : "") + '"><h3>' + g.title + "</h3><ul>" +
          g.links.map(function (l) { return '<li><a href="' + l[1] + '">' + esc(l[0]) + "</a></li>"; }).join("") + "</ul></div>";
      }).join("") + "</div></div></div>";
    }).join("");
    var mobile = menus.map(function (m) {
      if (!m.groups) return '<li class="mmenu__item"><a href="' + m.href + '">' + m.label + "</a></li>";
      var sub = [[ "Overview", m.href ]];
      m.groups.forEach(function (g) { sub = sub.concat(g.links); });
      return '<li class="mmenu__item"><button type="button" aria-expanded="false">' + m.label + icon("chevron") + '</button><div class="mmenu__sub">' +
        sub.map(function (l) { return '<a href="' + l[1] + '">' + esc(l[0]) + "</a>"; }).join("") + "</div></li>";
    }).join("");

    header.className = "gnav";
    header.innerHTML =
      '<nav class="gnav__bar" aria-label="Main"><div class="gnav__inner">' +
        '<a class="brand" href="index.html" aria-label="' + esc(F.full) + ' home">' + brand() + "</a>" +
        '<ul class="gnav__links">' + links + "</ul>" +
        '<a class="gnav__cta" href="contact.html">Enquire</a>' +
        '<button class="gnav__burger" type="button" aria-label="Menu" aria-expanded="false"><span><i></i><i></i></span></button>' +
      "</div>" + flyouts + "</nav>" +
      '<div class="flyout-scrim"></div>' +
      '<div class="mmenu"><ul class="mmenu__list">' + mobile +
        '<li class="mmenu__cta"><a class="btn btn--primary" href="contact.html">Request a consultation</a></li></ul></div>';

    // Desktop flyouts (hover with a small close delay)
    var scrim = header.querySelector(".flyout-scrim"), openId = null, closeT;
    function setFlyout(id) {
      clearTimeout(closeT);
      openId = id;
      header.querySelectorAll(".flyout").forEach(function (f) { f.classList.toggle("is-open", f.getAttribute("data-flyout") === id); });
      scrim.classList.toggle("is-open", !!id);
    }
    function scheduleClose() { clearTimeout(closeT); closeT = setTimeout(function () { setFlyout(null); }, 180); }
    header.querySelectorAll(".gnav__links a").forEach(function (a) {
      a.addEventListener("mouseenter", function () {
        var id = a.getAttribute("data-menu");
        setFlyout(header.querySelector('[data-flyout="' + id + '"]') ? id : null);
      });
      a.addEventListener("focus", function () {
        var id = a.getAttribute("data-menu");
        setFlyout(header.querySelector('[data-flyout="' + id + '"]') ? id : null);
      });
    });
    header.querySelector(".gnav__bar").addEventListener("mouseleave", scheduleClose);
    header.querySelectorAll(".flyout").forEach(function (f) { f.addEventListener("mouseenter", function () { clearTimeout(closeT); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { setFlyout(null); closeMobile(); } });
    header.addEventListener("focusout", function (e) { if (!header.contains(e.relatedTarget)) setFlyout(null); });

    // Mobile menu
    var burger = header.querySelector(".gnav__burger");
    function closeMobile() { document.body.classList.remove("menu-open"); burger.setAttribute("aria-expanded", "false"); }
    burger.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    header.querySelectorAll(".mmenu__item > button").forEach(function (b) {
      b.addEventListener("click", function () {
        var li = b.parentNode, open = li.classList.toggle("is-open");
        b.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
    header.querySelectorAll(".mmenu a").forEach(function (a) { a.addEventListener("click", closeMobile); });
  }

  /* ---------- Footer ---------- */
  var footer = document.getElementById("site-footer");
  if (footer) {
    var cols = [
      ["Services", S.services.map(function (s) { return [s.short, "service.html?s=" + s.id]; })],
      ["Who We Serve", S.industries.map(function (i) { return [i.short || i.name, "industries.html#" + i.id]; })],
      ["Resources", [["Important Dates", "important-dates.html"], ["Calculators", "calculators.html"], ["Knowledge Center", "knowledge.html"], ["Useful Links", "resources.html#links"]]],
      ["About the Firm", [["About Us", "about.html#profile"], ["Leadership", "about.html#team"], ["Service Portfolio", "about.html#portfolio"], ["Careers", "careers.html"]]],
      ["Contact", [["Request a Consultation", "contact.html"], ["Office & Hours", "contact.html#visit"]]]
    ];
    footer.className = "gfoot";
    footer.innerHTML = '<div class="wrap">' +
      '<div class="gfoot__notes"><p>The information on this website is for general information only and does not constitute professional advice. Please consult us about your specific circumstances before acting on any information here.</p>' +
      "<p>Tax rates, due dates and calculators are indicative and may change through notifications or amendments. Verify against official sources or speak to us before relying on them.</p></div>" +
      '<div class="gfoot__brand"><a class="brand" href="index.html" aria-label="' + esc(F.full) + ' home">' + brand() + "</a></div>" +
      '<nav class="gfoot__nav" aria-label="Footer">' + cols.map(function (c) {
        return "<div><h3>" + c[0] + "</h3><ul>" + c[1].map(function (l) { return '<li><a href="' + l[1] + '">' + esc(l[0]) + "</a></li>"; }).join("") + "</ul></div>";
      }).join("") + "</nav>" +
      '<div class="gfoot__legal"><p class="gfoot__practice">' + esc(F.practice) + "<br>" + esc(F.slogan) + "</p><p>" + [esc(F.offices[0].address)]
        .concat(F.phone ? ['<a href="' + F.phoneHref + '">' + F.phone + "</a>"] : [])
        .concat(F.mobile ? ['<a href="' + F.mobileHref + '">' + F.mobile + "</a>"] : [])
        .concat(['<a href="mailto:' + F.email + '">' + F.email + "</a>"]).join(" · ") + "</p>" +
      '<div class="gfoot__bottom"><p>Copyright © ' + new Date().getFullYear() + " " + esc(F.full) + ". All rights reserved." + (F.frn && F.frn.indexOf("XXXX") < 0 ? " " + esc(F.frn) : "") + "</p>" +
      '<ul><li><a href="privacy.html">Privacy Policy</a></li><li><a href="terms.html">Terms of Use</a></li><li><a href="disclaimer.html">Disclaimer</a></li></ul></div></div>' +
      "</div>";
  }

  /* ---------- ICAI disclaimer (shown once per browser) ---------- */
  var KEY = "arco-disclaimer-agreed";
  var agreed = false;
  try { agreed = localStorage.getItem(KEY) === "1"; } catch (e) {}
  if (!agreed && page !== "disclaimer") {
    var modal = document.createElement("div");
    modal.className = "modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "disc-title");
    modal.innerHTML = '<div class="modal__box"><p class="t-eyebrow" style="font-size:15px">Disclaimer</p><h2 id="disc-title">Before you continue.</h2>' +
      "<p>As per the guidelines of the Institute of Chartered Accountants of India (ICAI), Chartered Accountants are not permitted to solicit work or advertise. By clicking “I Agree”, you acknowledge that:</p><ul>" +
      "<li>You are seeking information about " + esc(F.full) + " of your own accord and there has been no advertisement, solicitation or inducement from the firm or its members.</li>" +
      "<li>The information on this website is for general informational purposes only and does not constitute professional advice.</li>" +
      "<li>Use of this website does not create a client relationship. The firm is not liable for any action taken on the basis of its content.</li></ul>" +
      '<div class="btn-row"><button type="button" class="btn btn--primary" data-agree>I Agree</button><a class="btn btn--outline" href="https://www.icai.org" rel="noopener">I Disagree</a></div></div>';
    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";
    var agreeBtn = modal.querySelector("[data-agree]");
    agreeBtn.focus();
    agreeBtn.addEventListener("click", function () {
      try { localStorage.setItem(KEY, "1"); } catch (e) {}
      modal.remove();
      document.body.style.overflow = "";
    });
  }

  // Page scripts run after this file and may add .reveal elements, so wait for them.
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initWidgets);
  else initWidgets();
})();

function initWidgets() {
  /* ---------- Chat assistant + WhatsApp button (js/chatbot.js) ---------- */
  if (!document.querySelector(".cb")) {
    var cb = document.createElement("script");
    cb.src = "js/chatbot.js";
    document.body.appendChild(cb);
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Horizontal scroller buttons ---------- */
  document.querySelectorAll("[data-scroll-target]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var el = document.getElementById(btn.getAttribute("data-scroll-target"));
      var card = el && el.firstElementChild;
      var step = card ? card.getBoundingClientRect().width + 20 : 320;
      el.scrollBy({ left: btn.getAttribute("data-dir") === "prev" ? -step : step, behavior: "smooth" });
    });
  });
}

/* Shared renderer for the "Who we serve" tabs (home + industries page) */
window.renderSegments = function (root, opts) {
  var S = window.SITE, icon = S.icon, esc = S.esc;
  opts = opts || {};
  var current = opts.initial || S.industries[0].id;
  root.innerHTML = '<div class="seg-tabs no-scrollbar" role="tablist">' + S.industries.map(function (ind) {
    return '<button type="button" class="seg-tab" role="tab" data-id="' + ind.id + '">' + icon(ind.icon) + "<span>" + esc(ind.name) + "</span></button>";
  }).join("") + '</div><div class="seg-holder"></div>';
  var holder = root.querySelector(".seg-holder");
  function show(id, focus) {
    var ind = S.industries.filter(function (i) { return i.id === id; })[0] || S.industries[0];
    current = ind.id;
    root.querySelectorAll(".seg-tab").forEach(function (b) {
      var on = b.getAttribute("data-id") === ind.id;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
      if (on && focus) b.scrollIntoView({ block: "nearest", inline: "nearest" });
    });
    holder.innerHTML = '<div class="seg-panel fade-up" role="tabpanel"><div><p class="t-eyebrow">' + esc(ind.name) + '</p><h3 class="t-tile">' + esc(ind.headline) + "</h3>" +
      '<p class="seg-panel__desc">' + esc(ind.description) + "</p>" +
      '<div class="seg-panel__actions"><a class="btn btn--primary" href="contact.html?for=' + ind.id + '">Talk to us</a>' +
      (opts.moreLink ? '<a class="more" href="industries.html#' + ind.id + '">More for ' + esc(ind.name.toLowerCase()) + icon("chevron") + "</a>" : "") + "</div></div>" +
      '<div><p class="seg-panel__label">Typically helps with</p><ul class="checks">' + ind.needs.map(function (n) { return "<li><i>" + icon("check") + "</i>" + esc(n) + "</li>"; }).join("") + "</ul>" +
      '<div class="pills">' + ind.services.map(function (sid) { var s = S.service(sid); return '<a href="service.html?s=' + s.id + '">' + esc(s.name) + "</a>"; }).join("") + "</div></div></div>";
    if (opts.onChange) opts.onChange(ind.id);
  }
  root.querySelectorAll(".seg-tab").forEach(function (b) { b.addEventListener("click", function () { show(b.getAttribute("data-id"), true); }); });
  show(current);
  return show;
};
