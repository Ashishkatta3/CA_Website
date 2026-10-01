(function () {
  "use strict";

  // Sticky header shadow + back-to-top
  var header = document.querySelector(".header");
  var toTop = document.querySelector(".to-top");
  function onScroll() {
    var y = window.scrollY;
    if (header) header.classList.toggle("is-scrolled", y > 10);
    if (toTop) toTop.classList.toggle("is-visible", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener("click", function () { window.scrollTo({ top: 0 }); });

  // Mobile navigation
  var nav = document.querySelector(".nav");
  document.querySelectorAll("[data-nav-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      document.body.style.overflow = open ? "hidden" : "";
    });
  });
  if (nav) nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { nav.classList.remove("is-open"); document.body.style.overflow = ""; });
  });

  // Reveal on scroll
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Services page: highlight current section in side nav
  var sideLinks = document.querySelectorAll(".service-nav a");
  if (sideLinks.length && "IntersectionObserver" in window) {
    var map = {};
    sideLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          sideLinks.forEach(function (a) { a.classList.remove("active"); });
          if (map[e.target.id]) map[e.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll(".service-block").forEach(function (b) { so.observe(b); });
  }

  // ICAI-style disclaimer shown once per visitor
  var modal = document.getElementById("disclaimer");
  var KEY = "arc_disclaimer_ok";
  var accepted = false;
  try { accepted = localStorage.getItem(KEY) === "1"; } catch (e) {}
  if (modal && !accepted) modal.classList.add("is-open");
  document.querySelectorAll("[data-accept]").forEach(function (b) {
    b.addEventListener("click", function () {
      try { localStorage.setItem(KEY, "1"); } catch (e) {}
      modal.classList.remove("is-open");
    });
  });

  // Contact form: opens the visitor's email client with a pre-filled message
  var form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var d = new FormData(form);
      var subject = "Website enquiry: " + (d.get("service") || "General");
      var body =
        "Name: " + d.get("name") + "\n" +
        "Phone: " + d.get("phone") + "\n" +
        "Email: " + d.get("email") + "\n" +
        "Service: " + d.get("service") + "\n\n" +
        d.get("message");
      window.location.href = "mailto:caanilreddy@gmail.com?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }

  // Current year in footer
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
