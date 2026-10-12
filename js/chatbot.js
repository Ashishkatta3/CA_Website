/* ==========================================================
   MSS Assistant — rule-based help chat + WhatsApp button.
   Firm details, services and due dates come from js/data.js,
   so the bot stays in sync with the rest of the site.
   Loaded automatically by js/site.js on every page.
   ========================================================== */
(function () {
  "use strict";
  var S = window.SITE, F = S.firm, icon = S.icon, esc = S.esc;
  var WA = (F.whatsapp || "").replace(/\D/g, "");

  function waLink(text) { return "https://wa.me/" + WA + (text ? "?text=" + encodeURIComponent(text) : ""); }
  var waSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.99-1.23-.73-.66-1.23-1.47-1.37-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z"/></svg>';

  var MAIN_MENU = [
    { label: "Our services", intent: "services" },
    { label: "Upcoming due dates", intent: "duedates" },
    { label: "Documents needed", intent: "documents" },
    { label: "Office address", intent: "location" },
    { label: "Request a callback", intent: "callback" }
  ];
  if (WA) MAIN_MENU.push({ label: "Chat on WhatsApp", intent: "whatsapp" });

  var serviceKeywords = {
    "income-tax": ["income tax", "itr", "tax return", "refund", "form 16", "26as", "ais", "capital gain", "regime", "advance tax", "tax planning"],
    gst: ["gst", "gstr", "3b", "input tax credit", "itc", "e-invoice", "eway", "e way", "composition", "gst litigation"],
    accounting: ["accounting", "bookkeeping", "tally", "zoho", "books", "mis", "balance sheet", "accounts"],
    audit: ["audit", "statutory audit", "tax audit", "internal audit", "assurance"],
    tds: ["tds", "tcs", "payroll", "24q", "26q", "form 138", "form 140", "form 130", "form 16a", "traces", "tds return"],
    corporate: ["company", "llp", "roc", "mca", "incorporat", "director", "private limited", "pvt ltd", "annual filing"],
    advisory: ["project report", "cma", "loan", "bank", "projection", "feasibility", "dpr", "working capital", "finance", "advisory"],
    registrations: ["registration", "register", "udyam", "msme", "firm registration", "partnership", "trust", "ngo", "pan", "tan", "iec", "startup"]
  };

  function contactLines() {
    var out = [];
    if (F.phone) out.push(icon("phone") + ' <a href="' + F.phoneHref + '">' + F.phone + "</a>");
    if (F.mobile) out.push(icon("phone") + ' <a href="' + F.mobileHref + '">' + F.mobile + "</a>");
    if (WA) out.push(waSvg + ' <a href="' + waLink("Hello MSS Advisory Services, I have a query.") + '" target="_blank" rel="noopener">Chat on WhatsApp</a>');
    out.push(icon("mail") + ' <a href="mailto:' + F.email + '">' + F.email + "</a>");
    return '<span class="cb-lines">' + out.join("<br>") + "</span>";
  }

  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var INTENTS = [
    { id: "greeting", keywords: ["hi", "hello", "hey", "namaste", "good morning", "good afternoon", "good evening"],
      reply: function () { return "Hello! How can I help you today?"; }, options: MAIN_MENU },
    { id: "services", keywords: ["service", "services", "what do you do", "offer", "help with"],
      reply: function () { return "Here's what we help with. Tap one to learn more:"; },
      options: S.services.map(function (s) { return { label: s.short, intent: "svc:" + s.id }; }) },
    { id: "notice", keywords: ["notice", "scrutiny", "assessment", "show cause", "demand", "penalty", "appeal", "department", "litigation"],
      reply: function () { return "Notices from the Income Tax or GST department have strict response deadlines, so please don't ignore them. Share the notice with us as soon as possible — we'll explain what it means, prepare the reply and represent you where needed."; },
      options: [{ label: "Request a callback", intent: "callback" }, { label: "Contact details", intent: "contact" }] },
    { id: "duedates", keywords: ["due date", "deadline", "last date", "calendar", "when to file", "due"],
      reply: function () {
        var up = S.upcoming(4);
        if (!up.length) return 'See our <a href="important-dates.html">compliance calendar</a> for upcoming due dates.';
        return "Next due dates:<ul>" + up.map(function (d) {
          var dt = new Date(d[0] + "T00:00:00");
          return "<li><b>" + dt.getDate() + " " + months[dt.getMonth()] + "</b> · " + esc(d[2]) + "</li>";
        }).join("") + '</ul><small>Indicative — dates can be extended by notification.</small> <a href="important-dates.html">Full calendar ›</a>';
      }, options: [{ label: "Request a callback", intent: "callback" }, { label: "Main menu", intent: "menu" }] },
    { id: "documents", keywords: ["document", "documents", "checklist", "what to bring", "papers", "required"],
      reply: function () {
        return "<b>Income tax return:</b> PAN, Aadhaar, bank details, salary TDS certificate (Form 130, formerly Form 16), Annual Information Statement (AIS), and proofs of interest, capital gains and investments.<br><br>" +
          "<b>GST registration:</b> PAN of the business, constitution proof, ID and photos of owners, place-of-business proof and bank details.<br><br>" +
          "<b>Company / LLP:</b> PAN, Aadhaar and address proof of directors or partners, photos, registered office proof with NOC, and proposed names.<br><br>" +
          "<b>Project report / CMA:</b> last 2–3 years' financials and ITRs, GST returns, bank statements and asset quotations.";
      }, options: [{ label: "Request a callback", intent: "callback" }, { label: "Main menu", intent: "menu" }] },
    { id: "location", keywords: ["address", "location", "where", "office", "visit", "directions", "map", "guntur", "lakshmipuram", "ashok nagar"],
      reply: function () {
        return "<b>" + esc(F.full) + "</b><br>" + esc(F.offices[0].address) +
          (F.hours.length ? "<br><br><b>Hours:</b> " + F.hours.map(function (h) { return h[0] + ": " + h[1]; }).join(" · ") : "") +
          ' <a href="contact.html#visit">View map ›</a>';
      }, options: [{ label: "Contact details", intent: "contact" }, { label: "Main menu", intent: "menu" }] },
    { id: "hours", keywords: ["timing", "timings", "hours", "open", "closed", "sunday", "working day"],
      reply: function () {
        return F.hours.length ? "<b>Office hours:</b><br>" + F.hours.map(function (h) { return h[0] + ": " + h[1]; }).join("<br>")
          : "Please contact us to confirm a convenient time to visit, and we'll make sure the right person is available.";
      }, options: [{ label: "Contact details", intent: "contact" }, { label: "Main menu", intent: "menu" }] },
    { id: "contact", keywords: ["contact", "phone", "call", "number", "mobile", "email", "mail", "reach", "talk"],
      reply: function () { return "You can reach us at:<br>" + contactLines(); },
      options: [{ label: "Request a callback", intent: "callback" }, { label: "Main menu", intent: "menu" }] },
    { id: "whatsapp", keywords: ["whatsapp", "whats app", "wa"],
      reply: function () {
        return WA ? 'Tap below to continue on WhatsApp — our team will reply there.<br><a class="cb-cta cb-cta--wa" href="' + waLink("Hello MSS Advisory Services, I have a query.") + '" target="_blank" rel="noopener">' + waSvg + " Open WhatsApp</a>"
          : "WhatsApp isn't available just yet. You can email us or request a callback instead:<br>" + contactLines();
      }, options: [{ label: "Main menu", intent: "menu" }] },
    { id: "fees", keywords: ["fee", "fees", "cost", "charge", "charges", "price", "pricing", "how much"],
      reply: function () { return "Fees depend on the scope, complexity and volume of work. We agree the fee in writing before we start, so there are no surprises. Share your requirement and we'll send you a quote."; },
      options: [{ label: "Request a callback", intent: "callback" }, { label: "Main menu", intent: "menu" }] },
    { id: "calculators", keywords: ["calculator", "calculate", "emi", "how much tax", "tax calculator"],
      reply: function () { return 'Try our quick calculators: <a href="calculators.html?tab=income-tax">Income tax</a> · <a href="calculators.html?tab=gst">GST</a> · <a href="calculators.html?tab=emi">EMI</a>. For an exact computation, talk to us.'; },
      options: [{ label: "Request a callback", intent: "callback" }, { label: "Main menu", intent: "menu" }] },
    { id: "knowledge", keywords: ["update", "updates", "article", "news", "blog", "learn", "explain"],
      reply: function () {
        var list = (window.ARTICLES || []).slice(0, 3);
        return "Our Knowledge Center explains tax, GST and regulatory topics in plain language" +
          (list.length ? ":<ul>" + list.map(function (a) { return '<li><a href="knowledge.html?a=' + a.id + '">' + esc(a.title) + "</a></li>"; }).join("") + "</ul>" : ". ") +
          '<a href="knowledge.html">All updates ›</a>';
      }, options: [{ label: "Main menu", intent: "menu" }] },
    { id: "careers", keywords: ["job", "jobs", "career", "careers", "articleship", "article", "internship", "vacancy", "hiring", "cv", "resume"],
      reply: function () {
        return "We welcome applications from <b>articled assistants</b>, <b>semi-qualified and qualified CAs</b> and <b>accounts executives</b>. Email your CV to <a href=\"mailto:" + F.careersEmail + "?subject=Job%20application\">" + F.careersEmail + '</a>. <a href="careers.html">Careers page ›</a>';
      }, options: [{ label: "Main menu", intent: "menu" }] },
    { id: "thanks", keywords: ["thank", "thanks", "thank you", "ok", "okay", "great", "bye"],
      reply: function () { return "You're welcome! Is there anything else I can help you with?"; }, options: MAIN_MENU }
  ];
  S.services.forEach(function (s) {
    INTENTS.push({
      id: "svc:" + s.id, keywords: serviceKeywords[s.id] || [],
      reply: function () {
        return "<b>" + esc(s.name) + "</b><br>" + esc(s.summary) + "<ul>" + s.items.slice(0, 4).map(function (i) { return "<li>" + esc(i[0]) + "</li>"; }).join("") +
          '</ul><a href="service.html?s=' + s.id + '">See details ›</a>';
      },
      options: [{ label: "Request a callback", intent: "callback" }, { label: "Other services", intent: "services" }]
    });
  });

  /* ---------- Widget ---------- */
  var root = document.createElement("div");
  root.className = "cb";
  root.innerHTML =
    (WA ? '<a class="cb-wa" href="' + waLink("Hello MSS Advisory Services, I have a query.") + '" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">' + waSvg + "</a>" : "") +
    '<button class="cb-launch" type="button" aria-label="Open chat" aria-expanded="false">' + icon("chat", "cb-i-open") +
      '<svg class="cb-i-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>' +
      '<span class="cb-badge">1</span></button>' +
    '<section class="cb-panel" role="dialog" aria-label="Chat with ' + esc(F.full) + '">' +
      '<header class="cb-head">' + S.logoMark("cb-avatar") + '<div><b>MSS Assistant</b><span><i class="cb-dot"></i>' + esc(F.full) + "</span></div>" +
        '<button class="cb-close" type="button" aria-label="Close chat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button></header>' +
      '<div class="cb-body" aria-live="polite"></div>' +
      '<form class="cb-input" autocomplete="off"><input type="text" placeholder="Type your question…" aria-label="Type your question" maxlength="300">' +
        '<button type="submit" aria-label="Send"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg></button></form>' +
      '<p class="cb-foot">Automated assistant · general information only, not professional advice</p>' +
    "</section>";
  document.body.appendChild(root);

  var launcher = root.querySelector(".cb-launch"), body = root.querySelector(".cb-body");
  var form = root.querySelector(".cb-input"), input = form.querySelector("input");
  var started = false, flow = null;

  function scrollDown() { body.scrollTop = body.scrollHeight; }
  function addUser(text) {
    var m = document.createElement("div");
    m.className = "cb-msg cb-msg--user";
    m.textContent = text;
    body.appendChild(m);
    scrollDown();
  }
  function addBot(html, options) {
    var typing = document.createElement("div");
    typing.className = "cb-msg cb-msg--bot cb-typing";
    typing.innerHTML = "<span></span><span></span><span></span>";
    body.appendChild(typing);
    scrollDown();
    setTimeout(function () {
      typing.remove();
      var m = document.createElement("div");
      m.className = "cb-msg cb-msg--bot";
      m.innerHTML = html;
      body.appendChild(m);
      if (options && options.length) {
        var wrap = document.createElement("div");
        wrap.className = "cb-options";
        options.forEach(function (o) {
          var b = document.createElement("button");
          b.type = "button";
          b.textContent = o.label;
          b.addEventListener("click", function () { wrap.remove(); addUser(o.label); handleIntent(o.intent); });
          wrap.appendChild(b);
        });
        body.appendChild(wrap);
      }
      scrollDown();
    }, 450);
  }
  function findIntent(id) { for (var i = 0; i < INTENTS.length; i++) if (INTENTS[i].id === id) return INTENTS[i]; return null; }
  function handleIntent(id) {
    if (id === "menu") return addBot("What would you like to know?", MAIN_MENU);
    if (id === "callback") return startCallback();
    var it = findIntent(id);
    if (it) addBot(it.reply(), it.options);
  }

  // Score each intent by keyword matches; longer keyword matches weigh more.
  function match(text) {
    var t = " " + text.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").replace(/\s+/g, " ") + " ";
    if (/callback|call back|call me|contact me|consultation|appointment|meeting|book a/.test(t)) return "callback";
    var best = null, bestScore = 0;
    INTENTS.forEach(function (it) {
      var score = 0;
      it.keywords.forEach(function (k) {
        var hit = k.length <= 3 ? t.indexOf(" " + k + " ") !== -1 : t.indexOf(k) !== -1;
        if (hit) score += k.length;
      });
      if (score > bestScore) { bestScore = score; best = it.id; }
    });
    return best;
  }

  /* ---------- Callback request flow ---------- */
  function startCallback() {
    flow = { step: "name", data: {} };
    addBot("Sure, I'll arrange a callback from our team. What is your <b>name</b>?");
  }
  function continueFlow(text) {
    if (flow.step === "name") {
      flow.data.name = text;
      flow.step = "phone";
      addBot("Thanks, " + esc(text.split(" ")[0]) + ". What is your <b>phone number</b>?");
    } else if (flow.step === "phone") {
      if (text.replace(/\D/g, "").length < 10) return addBot("That doesn't look like a valid phone number. Please enter a 10-digit mobile number.");
      flow.data.phone = text;
      flow.step = "need";
      addBot("And briefly, <b>what do you need help with</b>? (e.g. ITR filing, GST registration, project report)");
    } else if (flow.step === "need") {
      flow.data.need = text;
      var d = flow.data;
      flow = null;
      var msg = "Callback request\nName: " + d.name + "\nPhone: " + d.phone + "\nRequirement: " + d.need;
      var mailto = "mailto:" + F.email + "?subject=" + encodeURIComponent("Callback request: " + d.name) + "&body=" + encodeURIComponent(msg + "\n\n(Sent from the website chat assistant)");
      addBot("Sending your request to our team…");
      S.sendEnquiry("Callback request: " + d.name, { Name: d.name, Phone: d.phone, Requirement: d.need, Source: "Website chat assistant" }).then(function () {
        addBot("Done! ✅ Your callback request has been sent. Our team will call you on <b>" + esc(d.phone) + "</b> soon." +
          (WA ? '<a class="cb-cta cb-cta--wa" href="' + waLink(msg) + '" target="_blank" rel="noopener">' + waSvg + " Also message us on WhatsApp</a>" : ""),
          [{ label: "Main menu", intent: "menu" }]);
      }).catch(function () {
        addBot("I couldn't send it automatically. Please send it with one tap instead:" +
          (WA ? '<a class="cb-cta cb-cta--wa" href="' + waLink(msg) + '" target="_blank" rel="noopener">' + waSvg + " Send on WhatsApp</a>" : "") +
          '<a class="cb-cta' + (WA ? " cb-cta--alt" : "") + '" href="' + mailto + '">' + icon("mail") + " Send by email</a>",
          [{ label: "Main menu", intent: "menu" }]);
      });
    }
  }
  function onUserText(text) {
    addUser(text);
    if (flow) return continueFlow(text);
    var id = match(text);
    if (id) return handleIntent(id);
    addBot("I'm not sure I understood that. I can help with our services, due dates, documents, office details and callbacks. For anything specific, our team will be happy to help directly.",
      [{ label: "Main menu", intent: "menu" }, { label: "Request a callback", intent: "callback" }, { label: "Contact details", intent: "contact" }]);
  }

  /* ---------- Open / close ---------- */
  function setOpen(open) {
    root.classList.toggle("is-open", open);
    launcher.setAttribute("aria-expanded", open ? "true" : "false");
    launcher.setAttribute("aria-label", open ? "Close chat" : "Open chat");
    if (open) {
      root.classList.add("is-seen");
      if (!started) {
        started = true;
        addBot("Hello! 👋 Welcome to <b>" + esc(F.full) + "</b>. I can answer common questions about our services, due dates and documents. How can I help?", MAIN_MENU);
      }
      if (window.matchMedia("(min-width: 640px)").matches) setTimeout(function () { input.focus(); }, 250);
    }
  }
  launcher.addEventListener("click", function () { setOpen(!root.classList.contains("is-open")); });
  root.querySelector(".cb-close").addEventListener("click", function () { setOpen(false); launcher.focus(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && root.classList.contains("is-open")) setOpen(false); });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (!text) return;
    input.value = "";
    onUserText(text);
  });
})();
