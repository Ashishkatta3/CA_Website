/* ==========================================================
   AR Assistant — rule-based help chat for Anil Reddy & Co
   Edit the INTENTS list below to change what the bot answers.
   ========================================================== */
(function () {
  "use strict";

  var PHONE = "+916357445566";
  var PHONE_LABEL = "+91 63574 45566";
  var LANDLINE = "040 - 4024 9702";
  var EMAIL = "caanilreddy@gmail.com";

  var MAIN_MENU = [
    { label: "Our services", intent: "services" },
    { label: "Compliance due dates", intent: "duedates" },
    { label: "Documents needed", intent: "documents" },
    { label: "Office address & hours", intent: "location" },
    { label: "Request a callback", intent: "callback" }
  ];

  // Each intent: keywords to match, the reply (HTML allowed), and optional follow-up buttons.
  var INTENTS = [
    {
      id: "greeting",
      keywords: ["hi", "hello", "hey", "namaste", "good morning", "good afternoon", "good evening"],
      reply: "Hello! How can I help you today?",
      options: MAIN_MENU
    },
    {
      id: "services",
      keywords: ["service", "services", "what do you do", "offer", "help with"],
      reply: "We offer the following services. Tap one to learn more:",
      options: [
        { label: "Income Tax", intent: "incometax" },
        { label: "GST", intent: "gst" },
        { label: "Audit", intent: "audit" },
        { label: "Accounting & Payroll", intent: "accounting" },
        { label: "Company / LLP", intent: "company" },
        { label: "RBI & FEMA / NRI", intent: "fema" },
        { label: "Loans & Project Finance", intent: "finance" }
      ]
    },
    {
      id: "incometax",
      keywords: ["income tax", "itr", "tax return", "tds", "tax filing", "advance tax", "capital gain", "refund", "form 16", "26as", "ais"],
      reply: "<strong>Income Tax</strong>: we handle ITR filing for individuals, firms, companies and trusts, tax planning, advance tax, TDS/TCS returns, capital gains and NRI taxation. We also reply to notices and represent clients in appeals. <a href=\"services.html#income-tax\">See details →</a>",
      options: [{ label: "Documents for ITR", intent: "documents" }, { label: "Received a notice", intent: "notice" }, { label: "Request a callback", intent: "callback" }]
    },
    {
      id: "gst",
      keywords: ["gst", "gstr", "3b", "input tax credit", "itc", "e-invoice", "e way bill", "eway", "gst registration"],
      reply: "<strong>GST</strong>: we handle registration, GSTR-1/3B returns, annual returns (GSTR-9/9C), ITC reconciliation, refunds, e-invoicing, and replies to notices and audits. <a href=\"services.html#gst\">See details →</a>",
      options: [{ label: "GST due dates", intent: "duedates" }, { label: "Documents for GST registration", intent: "documents" }, { label: "Request a callback", intent: "callback" }]
    },
    {
      id: "audit",
      keywords: ["audit", "statutory audit", "tax audit", "internal audit", "stock audit", "bank audit", "assurance"],
      reply: "<strong>Audit & Assurance</strong>: we do statutory audits under the Companies Act, tax audits, and internal, concurrent, stock and bank audits. We also audit trusts and societies and provide certifications. <a href=\"services.html#audit\">See details →</a>",
      options: [{ label: "Request a callback", intent: "callback" }, { label: "Other services", intent: "services" }]
    },
    {
      id: "accounting",
      keywords: ["accounting", "bookkeeping", "tally", "zoho", "payroll", "salary", "pf", "esi", "mis", "books"],
      reply: "<strong>Accounting & Payroll</strong>: we offer bookkeeping on Tally or Zoho, monthly MIS reports, finalisation of accounts, payroll processing, and PF/ESI and professional tax compliance. <a href=\"services.html#accounting\">See details →</a>",
      options: [{ label: "Request a callback", intent: "callback" }, { label: "Other services", intent: "services" }]
    },
    {
      id: "company",
      keywords: ["company", "incorporat", "register company", "private limited", "pvt ltd", "llp", "opc", "roc", "mca", "startup", "start a business", "new business", "partnership", "section 8", "trust", "ngo", "udyam", "msme"],
      reply: "<strong>Company Law & Business Setup</strong>: we incorporate private limited companies, OPCs, LLPs, partnerships, Section 8 companies, trusts and NGOs. We also handle annual ROC filings, director KYC and MSME/Startup India registrations. <a href=\"services.html#startup\">See details →</a>",
      options: [{ label: "Documents for incorporation", intent: "documents" }, { label: "Request a callback", intent: "callback" }]
    },
    {
      id: "fema",
      keywords: ["rbi", "fema", "fdi", "odi", "nri", "foreign", "15ca", "15cb", "remittance", "abroad", "overseas", "ecb"],
      reply: "<strong>RBI, FEMA & NRI matters</strong>: we handle FDI/ODI reporting, the FLA return, ECBs, Form 15CA/15CB certification, NRI taxation and DTAA advisory. <a href=\"services.html#rbi\">See details →</a>",
      options: [{ label: "Request a callback", intent: "callback" }, { label: "Other services", intent: "services" }]
    },
    {
      id: "finance",
      keywords: ["loan", "project report", "dpr", "cma", "bank finance", "working capital", "funding", "valuation", "subsidy", "cfo"],
      reply: "<strong>Project & Corporate Finance</strong>: we prepare detailed project reports and CMA data, and help with term loan and working capital proposals, valuations and subsidy applications. We also offer virtual CFO services. <a href=\"services.html#finance\">See details →</a>",
      options: [{ label: "Request a callback", intent: "callback" }, { label: "Other services", intent: "services" }]
    },
    {
      id: "notice",
      keywords: ["notice", "scrutiny", "assessment", "show cause", "demand", "penalty", "appeal", "department"],
      reply: "Notices from the Income Tax or GST department have strict response deadlines. Please share the notice with us as soon as possible. We'll review it, prepare the reply with supporting documents and represent you before the officer.",
      options: [{ label: "Request a callback", intent: "callback" }, { label: "Call us", intent: "contact" }]
    },
    {
      id: "duedates",
      keywords: ["due date", "deadline", "last date", "calendar", "when to file", "due"],
      reply: "Key <strong>monthly</strong> due dates:<ul><li><strong>7th</strong>: TDS/TCS deposit</li><li><strong>11th</strong>: GSTR-1</li><li><strong>15th</strong>: PF & ESI</li><li><strong>20th</strong>: GSTR-3B</li></ul>Key <strong>annual</strong> dates: ITR (non-audit) 31 Jul · Tax audit 30 Sep · ITR (audit) 31 Oct · GSTR-9 31 Dec.<br><small>Dates are statutory defaults and may be extended by notification.</small> <a href=\"resources.html#calendar\">Full calendar →</a>",
      options: [{ label: "Request a callback", intent: "callback" }, { label: "Main menu", intent: "menu" }]
    },
    {
      id: "documents",
      keywords: ["document", "documents", "checklist", "what to bring", "papers", "required"],
      reply: "For <strong>income tax returns</strong>: PAN, Aadhaar, bank details, salary TDS certificate, AIS/26AS, and interest, capital gains and investment proofs.<br><br>For <strong>company incorporation</strong>: PAN, Aadhaar and address proof of directors, photos, registered office proof with NOC, and proposed names.<br><br>For <strong>GST registration</strong>: PAN of the business, constitution proof, ID of owners, place-of-business proof and bank details. <a href=\"resources.html#checklists\">Full checklists →</a>",
      options: [{ label: "Request a callback", intent: "callback" }, { label: "Main menu", intent: "menu" }]
    },
    {
      id: "location",
      keywords: ["address", "location", "where", "office", "visit", "directions", "map", "timing", "timings", "hours", "open", "kphb", "madhapur", "kavuri"],
      reply: "<strong>Head Office:</strong> HIG-152, Road No. 5, Phase 1, KPHB Colony, JNTU – Hitech City Road, Hyderabad – 500072<br><br><strong>Branch Office:</strong> G2, Dwaraka Icon, Plot No. 131, Kavuri Hills, Madhapur, Hyderabad – 500033<br><br><strong>Hours:</strong> Mon – Sat, 10:00 AM – 7:00 PM <a href=\"contact.html\">View map →</a>",
      options: [{ label: "Call us", intent: "contact" }, { label: "Main menu", intent: "menu" }]
    },
    {
      id: "contact",
      keywords: ["contact", "phone", "call", "number", "mobile", "email", "mail", "whatsapp", "reach", "talk"],
      reply: "You can reach us at:<br>📞 <a href=\"tel:" + PHONE + "\">" + PHONE_LABEL + "</a><br>☎️ <a href=\"tel:+914040249702\">" + LANDLINE + "</a><br>✉️ <a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a>",
      options: [{ label: "Request a callback", intent: "callback" }, { label: "Main menu", intent: "menu" }]
    },
    {
      id: "fees",
      keywords: ["fee", "fees", "cost", "charge", "charges", "price", "pricing", "how much", "rate"],
      reply: "Fees depend on the scope, complexity and volume of work. We agree the fee in writing before we start, so there are no surprises. Share your requirement and we'll send you a quote.",
      options: [{ label: "Request a callback", intent: "callback" }, { label: "Main menu", intent: "menu" }]
    },
    {
      id: "careers",
      keywords: ["job", "jobs", "career", "careers", "articleship", "article", "internship", "vacancy", "hiring", "work with you", "cv", "resume"],
      reply: "We welcome applications for <strong>CA articleship</strong>, <strong>qualified / semi-qualified CAs</strong> and <strong>accounts executives</strong>. Email your CV to <a href=\"mailto:" + EMAIL + "?subject=Job%20Application\">" + EMAIL + "</a> with the position in the subject line. <a href=\"careers.html\">Careers page →</a>",
      options: [{ label: "Main menu", intent: "menu" }]
    },
    {
      id: "thanks",
      keywords: ["thank", "thanks", "thank you", "ok", "okay", "great", "bye"],
      reply: "You're welcome! Is there anything else I can help you with?",
      options: MAIN_MENU
    }
  ];

  // ---------- Build the widget ----------
  var root = document.createElement("div");
  root.className = "chatbot";
  root.innerHTML =
    '<button class="chatbot__launcher" aria-label="Open chat" aria-expanded="false">' +
      '<i class="fa-solid fa-comments chatbot__icon-open"></i><i class="fa-solid fa-xmark chatbot__icon-close"></i>' +
      '<span class="chatbot__badge">1</span>' +
    "</button>" +
    '<section class="chatbot__panel" role="dialog" aria-label="Chat with Anil Reddy & Co">' +
      '<header class="chatbot__head">' +
        '<span class="chatbot__avatar">AR</span>' +
        '<div><strong>AR Assistant</strong><span><i class="chatbot__dot"></i>Anil Reddy &amp; Co</span></div>' +
        '<button class="chatbot__close" aria-label="Close chat"><i class="fa-solid fa-xmark"></i></button>' +
      "</header>" +
      '<div class="chatbot__body" aria-live="polite"></div>' +
      '<form class="chatbot__input" autocomplete="off">' +
        '<input type="text" placeholder="Type your question…" aria-label="Type your question" maxlength="300">' +
        '<button type="submit" aria-label="Send"><i class="fa-solid fa-paper-plane"></i></button>' +
      "</form>" +
      '<p class="chatbot__foot">Automated assistant · general information only, not professional advice</p>' +
    "</section>";
  document.body.appendChild(root);

  var launcher = root.querySelector(".chatbot__launcher");
  var panel = root.querySelector(".chatbot__panel");
  var body = root.querySelector(".chatbot__body");
  var form = root.querySelector(".chatbot__input");
  var input = form.querySelector("input");
  var started = false;
  var flow = null; // active multi-step flow (callback request)

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function scrollDown() { body.scrollTop = body.scrollHeight; }

  function addUser(text) {
    var m = document.createElement("div");
    m.className = "chatbot__msg chatbot__msg--user";
    m.textContent = text;
    body.appendChild(m);
    scrollDown();
  }

  function addBot(html, options) {
    var typing = document.createElement("div");
    typing.className = "chatbot__msg chatbot__msg--bot chatbot__typing";
    typing.innerHTML = "<span></span><span></span><span></span>";
    body.appendChild(typing);
    scrollDown();
    setTimeout(function () {
      typing.remove();
      var m = document.createElement("div");
      m.className = "chatbot__msg chatbot__msg--bot";
      m.innerHTML = html;
      body.appendChild(m);
      if (options && options.length) {
        var wrap = document.createElement("div");
        wrap.className = "chatbot__options";
        options.forEach(function (o) {
          var b = document.createElement("button");
          b.type = "button";
          b.textContent = o.label;
          b.addEventListener("click", function () {
            wrap.remove();
            addUser(o.label);
            handleIntent(o.intent);
          });
          wrap.appendChild(b);
        });
        body.appendChild(wrap);
      }
      scrollDown();
    }, 450);
  }

  function findIntent(id) {
    for (var i = 0; i < INTENTS.length; i++) if (INTENTS[i].id === id) return INTENTS[i];
    return null;
  }

  function handleIntent(id) {
    if (id === "menu") return addBot("What would you like to know?", MAIN_MENU);
    if (id === "callback") return startCallback();
    var it = findIntent(id);
    if (it) addBot(it.reply, it.options);
  }

  // Score each intent by keyword matches; longer keyword matches weigh more.
  function match(text) {
    var t = " " + text.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").replace(/\s+/g, " ") + " ";
    if (/callback|call back|call me|contact me|consultation|appointment|meeting|book/.test(t)) return "callback";
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

  // ---------- Callback request flow ----------
  function startCallback() {
    flow = { step: "name", data: {} };
    addBot("Sure, I'll arrange a callback from our team. What is your <strong>name</strong>?");
  }

  function continueFlow(text) {
    if (flow.step === "name") {
      flow.data.name = text;
      flow.step = "phone";
      addBot("Thanks, " + escapeHtml(text.split(" ")[0]) + ". What is your <strong>phone number</strong>?");
    } else if (flow.step === "phone") {
      var digits = text.replace(/\D/g, "");
      if (digits.length < 10) return addBot("That doesn't look like a valid phone number. Please enter a 10-digit mobile number.");
      flow.data.phone = text;
      flow.step = "need";
      addBot("And briefly, <strong>what do you need help with</strong>? (e.g. ITR filing, GST registration, company audit)");
    } else if (flow.step === "need") {
      flow.data.need = text;
      var d = flow.data;
      flow = null;
      var subject = "Callback request: " + d.name;
      var bodyText = "Name: " + d.name + "\nPhone: " + d.phone + "\nRequirement: " + d.need + "\n\n(Sent from the website chat assistant)";
      var mailto = "mailto:" + EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(bodyText);
      addBot(
        "Here's a summary of your request:<br><strong>Name:</strong> " + escapeHtml(d.name) +
        "<br><strong>Phone:</strong> " + escapeHtml(d.phone) +
        "<br><strong>Need:</strong> " + escapeHtml(d.need) +
        '<br><br><a class="chatbot__cta" href="' + mailto + '"><i class="fa-solid fa-paper-plane"></i> Send request by email</a>' +
        '<a class="chatbot__cta chatbot__cta--alt" href="tel:' + PHONE + '"><i class="fa-solid fa-phone"></i> Or call us now</a>',
        [{ label: "Main menu", intent: "menu" }]
      );
    }
  }

  function onUserText(text) {
    addUser(text);
    if (flow) return continueFlow(text);
    var id = match(text);
    if (id) return handleIntent(id);
    addBot(
      "I'm not sure I understood that. I can help with our services, due dates, documents, office details and callbacks. For a specific query, our team will be happy to help directly.",
      [{ label: "Main menu", intent: "menu" }, { label: "Request a callback", intent: "callback" }, { label: "Call us", intent: "contact" }]
    );
  }

  // ---------- Open / close ----------
  function setOpen(open) {
    root.classList.toggle("is-open", open);
    launcher.setAttribute("aria-expanded", open);
    launcher.setAttribute("aria-label", open ? "Close chat" : "Open chat");
    if (open) {
      root.classList.add("is-seen");
      if (!started) {
        started = true;
        addBot("Hello! 👋 Welcome to <strong>Anil Reddy &amp; Co</strong>, Chartered Accountants. I'm here to answer common questions. How can I help you today?", MAIN_MENU);
      }
      setTimeout(function () { input.focus(); }, 250);
    }
  }

  launcher.addEventListener("click", function () { setOpen(!root.classList.contains("is-open")); });
  root.querySelector(".chatbot__close").addEventListener("click", function () { setOpen(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (!text) return;
    input.value = "";
    onUserText(text);
  });
})();
