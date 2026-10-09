/* ==========================================================
   Site content: firm details, services, industries, due dates.
   Edit this file to update text across every page.
   ========================================================== */
window.SITE = (function () {
  var firm = {
    name: "MSS",
    suffix: "Advisory Services",
    full: "MSS Advisory Services",
    tagline: "Chartered Accountants & Business Advisory Professionals",
    slogan: "Your Trusted Partner for Financial Excellence and Regulatory Compliance",
    practice: "Taxation | GST | TDS | Accounting | Compliance | Business Advisory",
    city: "Guntur, Andhra Pradesh",
    frn: "[ICAI Firm Registration No. — XXXXXXS]",
    // Leave phone/mobile empty to hide them everywhere; add e.g. "+91 98765 43210" and "tel:+919876543210".
    phone: "",
    phoneHref: "",
    mobile: "",
    mobileHref: "",
    // WhatsApp number in international format, digits only, e.g. "919876543210".
    // The green WhatsApp button and the chatbot's WhatsApp option appear once this is filled in.
    whatsapp: "",
    email: "Info@mssadvisoryservices.com",
    careersEmail: "Info@mssadvisoryservices.com",
    offices: [
      { name: "Office", area: "Lakshmipuram, Guntur", address: "3rd Lane, Ashok Nagar, Lakshmipuram, Guntur, AP 522002", map: "Ashok Nagar 3rd Lane Lakshmipuram Guntur 522002" }
    ],
    // Office hours: add rows like ["Monday – Saturday", "10:00 AM – 7:00 PM"]; the card is hidden while empty.
    hours: [["Monday – Saturday", "10:00 AM – 7:00 PM"], ["Sunday", "Closed"]]
  };

  // 24x24 line icons (stroke = currentColor)
  var P = {
    percent: '<circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/><path d="M19 5 5 19"/>',
    receipt: '<path d="M5 2.5h14v19l-2.33-1.5-2.33 1.5L12 20l-2.33 1.5L7.33 20 5 21.5z"/><path d="M9 7.5h6M9 11.5h6M9 15.5h3"/>',
    shield: '<path d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
    book: '<path d="M4 4.5A2 2 0 0 1 6 2.5h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 20.5a2 2 0 0 0 2 2h13v-4"/><path d="M8.5 7h6M8.5 10.5h4"/>',
    people: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.2.6 3.5 2.8 3.5 6"/>',
    building: '<path d="M4 21.5V4.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17"/><path d="M15 9.5h4a1 1 0 0 1 1 1v11"/><path d="M2.5 21.5h19M7.5 7.5h4M7.5 11.5h4M7.5 15.5h4"/>',
    chart: '<path d="M3.5 20.5h17"/><path d="M6 16.5l4.5-5 3.5 3 5.5-7"/><path d="M15.5 7.5h4v4"/>',
    stamp: '<path d="M9.5 3.5h5l-.8 7h-3.4z"/><path d="M4.5 14.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3h-15z"/><path d="M5.5 20.5h13"/>',
    pin: '<path d="M12 21.5s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9.5" r="2.5"/>',
    phone: '<path d="M5 3.5h3.5l1.8 4.5-2.3 1.5a11 11 0 0 0 6.5 6.5l1.5-2.3 4.5 1.8V19a2 2 0 0 1-2 2A16.5 16.5 0 0 1 3 5.5a2 2 0 0 1 2-2z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6 8.5 7 8.5-7"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7.5 5-2.5 5 2.5-1.5-7.5"/>',
    lock: '<rect x="4.5" y="10.5" width="15" height="10.5" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>',
    chat: '<path d="M4 5.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4z"/><path d="M8 8.5h8M8 12h5"/>',
    spark: '<path d="M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5M5.3 5.3l3.5 3.5M15.2 15.2l3.5 3.5M5.3 18.7l3.5-3.5M15.2 8.8l3.5-3.5"/>',
    store: '<path d="M3.5 9.5 5 3.5h14l1.5 6"/><path d="M3.5 9.5a2.8 2.8 0 0 0 5.7 0 2.8 2.8 0 0 0 5.6 0 2.8 2.8 0 0 0 5.7 0"/><path d="M5 12v8.5h14V12M10 20.5v-5h4v5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.2 3.6-7 8-7s8 2.8 8 7"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8.5 7V5a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 15.5 5v2M3 12.5h18"/>',
    heart: '<path d="M12 20.5s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8 4.5 4.5 0 0 1 8 2.8c0 6.2-8 11-8 11z"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/>',
    calc: '<rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M8 6.5h8M8.5 11h.01M12 11h.01M15.5 11h.01M8.5 14.5h.01M12 14.5h.01M15.5 14.5h.01M8.5 18h.01M12 18h.01M15.5 18h.01"/>',
    bank: '<path d="M3 9.5 12 4l9 5.5"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20.5h18"/>',
    news: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8.5h10M7 12h10M7 15.5h6"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    chevron: '<path d="m9 5 7 7-7 7"/>',
    chevronL: '<path d="m15 5-7 7 7 7"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    arrowUpRight: '<path d="M7 17 17 7M8 7h9v9"/>'
  };
  function icon(name, cls) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' + (cls ? ' class="' + cls + '"' : "") + ">" + (P[name] || "") + "</svg>";
  }

  var steps = [
    ["Tell us your requirement", "Share a few details through the enquiry form, phone or email."],
    ["Initial consultation", "We talk through your situation and ask the right questions."],
    ["Scope & proposal", "We recommend the right service and share a clear scope."],
    ["Engagement & documents", "We formalise the engagement and collect what's needed."],
    ["Service delivery", "We do the work and keep you updated along the way."],
    ["Ongoing support", "We stay on top of future deadlines and changes."]
  ];

  var services = [
    {
      id: "income-tax", name: "Income Tax", short: "Income Tax", icon: "percent", grad: ["#2997ff", "#7a5af8"],
      card: "Returns, planning & notices",
      tagline: "Tax, done right.\nAnd on time.",
      summary: "Return preparation, planning and representation for individuals, firms and companies — so you stay compliant and never pay more than you should.",
      pains: ["Unsure which tax regime or deductions apply to you", "Received a notice from the Income Tax Department", "Multiple income sources — salary, business, capital gains, rent", "Need to plan advance tax and avoid interest"],
      ideal: "Individuals · Professionals · Businesses · Companies",
      items: [
        ["Individual Income Tax", "Return filing for salaried individuals, pensioners and those with capital gains or foreign income."],
        ["Business & Corporate Tax", "Computation and filing for proprietorships, firms, LLPs and companies."],
        ["Tax Planning", "Structure income, investments and expenses within the law to manage your tax outgo."],
        ["Advance Tax", "Estimate liability and schedule instalments to avoid interest."],
        ["Notices & Assessments", "Understand the notice, prepare responses and track it to closure."],
        ["Representation", "Represent you before tax authorities, including in appellate proceedings where applicable."]
      ],
      faq: [
        ["What documents do I need to file my return?", "Typically your PAN, Aadhaar, salary TDS certificate if salaried (Form 130, formerly Form 16), bank statements, investment proofs and details of any other income. We share a checklist tailored to your situation."],
        ["I received a tax notice. What should I do?", "Don't ignore it, and note the response deadline. Share the notice with us and we'll explain what it means and how to respond."],
        ["Can you handle my return remotely?", "Yes. Documents can be shared securely and most work is completed without an office visit."]
      ]
    },
    {
      id: "gst", name: "GST & Indirect Tax", short: "GST", icon: "receipt", grad: ["#00c6a7", "#1e88e5"],
      card: "Registration, returns & ITC",
      tagline: "GST compliance.\nWithout the guesswork.",
      summary: "From registration to monthly returns, reconciliations and notices — we keep your GST compliance accurate so your input tax credit is protected.",
      pains: ["Input tax credit mismatches between purchase records and the GST portal", "Missed or late GST returns and accumulating late fees", "Unsure whether registration is required or which scheme suits you", "Received a GST notice or demand"],
      ideal: "Startups · Small Businesses · Traders & Manufacturers · Service Providers",
      items: [
        ["GST Registration", "Assess applicability, choose the right scheme, and complete registration and amendments."],
        ["Return Filing", "Regular preparation and filing of applicable GST returns."],
        ["Reconciliation", "Match books with portal data to identify gaps before they become problems."],
        ["Input Tax Credit Review", "Review eligibility and documentation of credits claimed."],
        ["Notices & Litigation Support", "Respond to notices and support you through departmental audits, assessments and appeals."],
        ["GST Advisory", "Guidance on classification, place of supply and transaction structuring."]
      ],
      faq: [
        ["Do I need GST registration?", "It depends on your turnover, the nature of supplies and where you sell. We'll assess your situation and advise whether registration is mandatory or beneficial."],
        ["What is GST reconciliation?", "Comparing the GST data in your books with what suppliers and you have reported on the portal, so credits are accurate and discrepancies are fixed early."]
      ]
    },
    {
      id: "accounting", name: "Accounting & Bookkeeping", short: "Accounting", icon: "book", grad: ["#ff9f0a", "#ff375f"],
      tagline: "Your books.\nAlways in order.",
      summary: "Accurate, organised financial records so you understand how your business is performing and are ready for every filing and audit.",
      pains: ["Books are months behind and tax filings are rushed", "No clear view of profit, cash or outstanding payments", "Records aren't ready when the auditor or bank asks"],
      ideal: "Startups · Small & Medium Businesses · Professionals · Non-Profits",
      items: [
        ["Bookkeeping", "Day-to-day recording of transactions in your accounting software."],
        ["Payables & Receivables", "Track what you owe and what you're owed, with ageing reports."],
        ["Bank Reconciliation", "Match books with bank statements regularly."],
        ["Financial Statements", "Preparation of profit & loss, balance sheet and supporting schedules."],
        ["Management Reporting", "Monthly or quarterly reports that show how the business is really doing."],
        ["Software Setup", "Help choosing and setting up accounting software for your business."]
      ],
      faq: [
        ["Which accounting software do you work with?", "We work with commonly used accounting software. Tell us what you use and we'll confirm."],
        ["Can you catch up on books that are behind?", "Yes. We can bring past records up to date and then move to a regular schedule."]
      ]
    },
    {
      id: "audit", name: "Audit & Assurance", short: "Audit", icon: "shield", grad: ["#30d158", "#0a84ff"],
      card: "Statutory, tax & internal",
      tagline: "Assurance you\ncan stand behind.",
      summary: "Independent audits and reviews that help businesses maintain reliable financial reporting and meet statutory requirements.",
      pains: ["Statutory or tax audit is required and the deadline is approaching", "Need confidence that internal controls are working", "Banks, investors or partners require audited financials"],
      ideal: "Companies · LLPs & Firms · Non-Profits · Businesses",
      items: [
        ["Statutory Audit", "Audits required under applicable law for companies and other entities."],
        ["Tax Audit", "Audit and reporting where required under income tax law."],
        ["Internal Audit", "Independent review of processes, risks and controls."],
        ["Financial Statement Review", "Limited-scope review of financial statements."],
        ["Compliance Review", "Check adherence to applicable regulatory requirements."],
        ["Internal Control Review", "Assess design and effectiveness of internal financial controls."]
      ],
      faq: [
        ["How do I know if a tax audit applies to me?", "Applicability depends on turnover, receipts and the nature of your income. We'll review your figures and confirm."],
        ["What do you need from us for an audit?", "Books of account, bank statements, invoices, fixed asset records and key agreements. We share a detailed list before fieldwork starts so the audit runs smoothly."]
      ]
    },
    {
      id: "tds", name: "TDS & Payroll Compliance", short: "TDS & Payroll", icon: "people", grad: ["#5e5ce6", "#bf5af2"],
      card: "Returns, reconciliation & notices",
      tagline: "Deduct. Deposit. File.\nSorted.",
      summary: "End-to-end TDS compliance and payroll-related statutory filings, so deductions are correct, deposits are on time and returns are clean.",
      pains: ["Unsure of the correct TDS section or rate for a payment", "Default notices due to short deduction or late filing", "Employees waiting on certificates"],
      ideal: "Businesses · Companies · Employers",
      items: [
        ["TDS Computation", "Determine applicable sections and rates for payments."],
        ["Deposits & Returns", "Timely deposit and quarterly TDS/TCS statements."],
        ["Certificates", "Generation and issue of TDS certificates."],
        ["Reconciliation", "Match TDS deducted with the department's TRACES records and fix mismatches."],
        ["Notice Management", "Review defaults and notices, correct them and file revised statements."],
        ["Payroll Compliance", "Support with payroll-related statutory deductions and filings."]
      ],
      faq: [
        ["We received a TDS default notice. Can it be fixed?", "Often, yes. Many defaults arise from data mismatches that can be corrected through revised statements. Share the notice and we'll review it."],
        ["When is TDS due?", "TDS deducted in a month is generally deposited by the 7th of the following month (with a later date for March), and quarterly TDS statements are filed after each quarter. See our Important Dates page for the current calendar."]
      ]
    },
    {
      id: "corporate", name: "Corporate & ROC Compliance", short: "Corporate Compliance", icon: "building", grad: ["#64748b", "#1d1d1f"],
      tagline: "From incorporation\nto annual filings.",
      summary: "Company and LLP formation, ROC/MCA filings and ongoing secretarial compliance — handled end to end.",
      pains: ["Starting a company or LLP and unsure of the structure", "Missed annual filings and mounting additional fees", "Board resolutions, registers and documentation not maintained"],
      ideal: "Startups · Private Companies · LLPs",
      items: [
        ["Company & LLP Formation", "Choose the right structure and complete incorporation."],
        ["Annual ROC Filings", "Financial statements and annual return filings with the MCA."],
        ["Event-based Filings", "Changes in directors, capital, registered office and more."],
        ["Board Documentation", "Minutes, resolutions and statutory registers."],
        ["Ongoing Compliance", "A compliance calendar so nothing slips."]
      ],
      faq: [
        ["Private limited company or LLP — which should I choose?", "It depends on funding plans, number of owners, compliance appetite and tax position. We'll walk you through the trade-offs."],
        ["What happens if annual ROC filings are missed?", "Additional fees accrue for each day of delay, and directors or designated partners can face further consequences. It's best to bring filings up to date as early as possible — we can help regularise past years."]
      ]
    },
    {
      id: "advisory", name: "Business Advisory", short: "Business Advisory", icon: "chart", grad: ["#ff6b00", "#ffb340"],
      tagline: "Numbers that\ndrive decisions.",
      summary: "Project reports, CMA data, financial projections, loan documentation and feasibility assessments that help you raise finance and make informed business decisions.",
      pains: ["Need a project report or CMA data for a bank loan", "Need projections for a lender or investor", "Considering expansion or a new venture and unsure if it's viable"],
      ideal: "Startups · MSMEs · Growing Businesses · Corporates",
      items: [
        ["Project Reports", "Detailed project reports for term loans, subsidies and new ventures."],
        ["CMA Data", "Credit Monitoring Arrangement data prepared to bank requirements."],
        ["Financial Projections", "Projected financial statements for lenders and investors."],
        ["Loan Documentation", "Support preparing and organising documents for loan applications."],
        ["Business Feasibility Assessments", "Evaluate the financial viability of a project or proposal."],
        ["Financial Planning & Budgeting", "Set realistic budgets and track performance against them."]
      ],
      faq: [
        ["What is CMA data and when do I need it?", "CMA (Credit Monitoring Arrangement) data is a set of financial statements and projections banks use to assess working-capital and term-loan requests. It's usually needed for new loans, renewals and limit enhancements."],
        ["Is advisory a one-time engagement?", "It can be either — a single project like a loan proposal, or ongoing periodic reviews."]
      ]
    },
    {
      id: "registrations", name: "Registrations & Other Services", short: "Registrations", icon: "stamp", grad: ["#0a84ff", "#64d2ff"],
      tagline: "Registrations\nand everything else.",
      summary: "Company, LLP, firm and MSME registrations, plus the other registrations and certifications a business needs, handled in one place.",
      pains: ["Not sure which registrations your business needs", "Need certificates or attestations for a bank, tender or authority"],
      ideal: "Startups · Businesses · Non-Profits",
      items: [
        ["Company & LLP Registration", "Incorporation of private limited companies and LLPs."],
        ["Firm Registration", "Partnership deed drafting and registration of firms."],
        ["MSME / Udyam Registration", "Udyam registration and updates for micro, small and medium enterprises."],
        ["Business Registrations", "PAN, TAN, professional tax and other registrations."],
        ["Non-Profit Registrations", "Trust/society registration and tax-exemption registrations."],
        ["Certifications", "Net-worth, turnover and other certificates as permitted."]
      ],
      faq: [
        ["How long does company or LLP registration take?", "Once documents and digital signatures are ready, incorporation is usually completed within a few weeks, depending on name approval and MCA processing times."],
        ["Is MSME / Udyam registration worth it for a small business?", "Usually, yes. It is free, and it can help with priority-sector lending, certain government schemes and protection against delayed payments from buyers."],
        ["What documents do I need to start?", "Typically PAN and Aadhaar of the owners or partners, address proof for the business premises, and photographs. We share a checklist for your specific registration."]
      ]
    }
  ];

  var industries = [
    { id: "startups", name: "Startups", icon: "spark", headline: "Build on solid ground.", description: "Get the structure, registrations and books right from day one, so you can focus on growth and be ready when investors ask.", needs: ["Business setup & structuring", "Company / LLP incorporation", "Tax & GST registration", "Accounting from day one", "Compliance calendar", "Financial projections"], services: ["corporate", "registrations", "accounting", "gst", "advisory"] },
    { id: "smb", name: "Small & Medium Businesses", icon: "store", headline: "Run the business. We'll run the compliance.", description: "Regular bookkeeping, GST, TDS and tax filings handled on schedule, with reports that show how you're really doing.", needs: ["Bookkeeping", "GST returns & reconciliation", "TDS & payroll compliance", "Income tax", "Financial statements", "Tax audit"], services: ["accounting", "gst", "tds", "income-tax", "audit"] },
    { id: "corporates", name: "Corporates", icon: "building", headline: "Assurance at scale.", description: "Audit, ROC compliance and advisory support for companies with more complex reporting and governance needs.", needs: ["Statutory & internal audit", "Corporate tax", "ROC / MCA compliance", "Internal control review", "Business advisory"], services: ["audit", "income-tax", "corporate", "advisory"] },
    { id: "individuals", name: "Individuals", icon: "user", headline: "Your taxes, simplified.", description: "Return filing, planning and notice support for salaried individuals, pensioners, investors and NRIs.", needs: ["Income tax return filing", "Tax planning", "Capital gains", "Responding to notices", "Advance tax"], services: ["income-tax"] },
    { id: "professionals", name: "Professionals", icon: "briefcase", headline: "For those who advise, heal and build.", description: "Doctors, lawyers, consultants, architects and freelancers — accounting and tax handled so you can focus on your practice.", needs: ["Professional income tax", "GST registration & returns", "Books of accounts", "Advance tax", "Tax audit where applicable"], services: ["income-tax", "gst", "accounting", "audit"] },
    { id: "nonprofits", name: "Non-Profit Organisations", short: "Non-Profits", icon: "heart", headline: "Compliance that protects your mission.", description: "Registrations, audits and filings for trusts, societies and Section 8 companies, so exemptions stay intact.", needs: ["Trust / society registration", "Tax-exemption registrations", "Audit", "Return filing", "Accounting"], services: ["registrations", "audit", "accounting", "income-tax"] }
  ];

  // Indicative statutory due dates. Type: GST | TDS | IT | ROC
  var datesReviewed = "8 October 2026";
  var dates = [
    ["2026-10-07", "TDS", "Deposit of TDS/TCS deducted in September"],
    ["2026-10-11", "GST", "GSTR-1 for September (monthly filers)"],
    ["2026-10-13", "GST", "GSTR-1 for July–September quarter (QRMP filers)"],
    ["2026-10-15", "TDS", "Quarterly TCS statement for July–September"],
    ["2026-10-20", "GST", "GSTR-3B for September (monthly filers)"],
    ["2026-10-22", "GST", "GSTR-3B for July–September quarter (QRMP filers)", "22nd or 24th depending on state"],
    ["2026-10-30", "ROC", "Filing of financial statements with ROC", "Within 30 days of the AGM"],
    ["2026-10-31", "TDS", "Quarterly TDS statements for July–September", "Forms 138 / 140 / 144 (formerly 24Q / 26Q / 27Q)"],
    ["2026-10-31", "IT", "Income tax return for taxpayers subject to audit", "Subject to any extension notified"],
    ["2026-11-07", "TDS", "Deposit of TDS/TCS deducted in October"],
    ["2026-11-11", "GST", "GSTR-1 for October (monthly filers)"],
    ["2026-11-15", "TDS", "Issue of quarterly TDS certificates (non-salary)"],
    ["2026-11-20", "GST", "GSTR-3B for October (monthly filers)"],
    ["2026-11-29", "ROC", "Filing of annual return with ROC", "Within 60 days of the AGM"],
    ["2026-11-30", "IT", "Income tax return for taxpayers with transfer-pricing reports"],
    ["2026-12-07", "TDS", "Deposit of TDS/TCS deducted in November"],
    ["2026-12-11", "GST", "GSTR-1 for November (monthly filers)"],
    ["2026-12-15", "IT", "Third instalment of advance tax (75%)"],
    ["2026-12-20", "GST", "GSTR-3B for November (monthly filers)"],
    ["2026-12-31", "GST", "Annual return GSTR-9 / 9C for FY 2025-26"],
    ["2026-12-31", "IT", "Belated or revised income tax return for FY 2025-26"],
    ["2027-01-07", "TDS", "Deposit of TDS/TCS deducted in December"],
    ["2027-01-11", "GST", "GSTR-1 for December (monthly filers)"],
    ["2027-01-13", "GST", "GSTR-1 for October–December quarter (QRMP filers)"],
    ["2027-01-15", "TDS", "Quarterly TCS statement for October–December"],
    ["2027-01-20", "GST", "GSTR-3B for December (monthly filers)"],
    ["2027-01-22", "GST", "GSTR-3B for October–December quarter (QRMP filers)", "22nd or 24th depending on state"],
    ["2027-01-31", "TDS", "Quarterly TDS statements for October–December", "Forms 138 / 140 / 144 (formerly 24Q / 26Q / 27Q)"],
    ["2027-02-07", "TDS", "Deposit of TDS/TCS deducted in January"],
    ["2027-02-11", "GST", "GSTR-1 for January (monthly filers)"],
    ["2027-02-15", "TDS", "Issue of quarterly TDS certificates (non-salary)"],
    ["2027-02-20", "GST", "GSTR-3B for January (monthly filers)"],
    ["2027-03-07", "TDS", "Deposit of TDS/TCS deducted in February"],
    ["2027-03-11", "GST", "GSTR-1 for February (monthly filers)"],
    ["2027-03-15", "IT", "Fourth instalment of advance tax (100%)"],
    ["2027-03-20", "GST", "GSTR-3B for February (monthly filers)"]
  ];
  var dateTypes = { GST: "GST", TDS: "TDS", IT: "Income Tax", ROC: "ROC" };

  var whyUs = [
    ["Professional excellence", "Over two decades of professional excellence.", "award"],
    ["Integrated solutions", "Integrated taxation, compliance & advisory solutions.", "briefcase"],
    ["Experienced team", "Experienced team of Chartered Accountants & specialists.", "people"],
    ["Practical guidance", "Timely, accurate & practical business guidance.", "calendar"],
    ["Client-centric", "A client-centric approach focused on long-term value creation.", "chat"],
    ["Sustainable growth", "Commitment to sustainable growth & regulatory compliance.", "chart"]
  ];

  // Photos are embedded in js/team-photos.js under these paths; a .jpg saved at the same path also works.
  // If neither exists, the initials are shown instead.
  var directors = [
    { initials: "VK", name: "Venkat Vidya Sagar Reddy Karumuri", role: "Director", photo: "images/team-vidya-sagar-reddy-karumuri.jpg" }
  ];
  var team = [
    { initials: "BM", name: "CA V. Bala Murali Krishna Reddy", badge: "FCA", years: "20+ years", bio: "20+ years of professional excellence.", photo: "images/team-bala-murali-krishna-reddy.jpg" },
    { initials: "SR", name: "P. Srinivas Rao", badge: "B.Com", years: "15+ years", bio: "15+ years of expertise in Accounting & Compliance.", photo: "images/team-srinivas-rao.jpg" },
    { initials: "SS", name: "CA G. Siva Sankar Reddy", badge: "ACA", years: "5+ years", bio: "5+ years of experience in Taxation, GST & Advisory Services.", photo: "images/team-siva-sankar-reddy.jpg" },
    { initials: "SV", name: "CA Sainadh Velugula", badge: "ACA, CMA, LLB", years: "3+ years", bio: "3+ years of experience in Taxation, Corporate Law & Financial Advisory.", photo: "images/team-sainadh-velugula.jpg" }
  ];

  var portfolio = [
    "Income Tax Filing, Planning, Assessments & Representation",
    "GST Registration, Compliance, Advisory & Litigation Support",
    "TDS Compliance, Reconciliation, Returns & Notice Management",
    "Project Reports, CMA Data & Financial Projections",
    "Loan Documentation & Business Feasibility Assessments",
    "Company, LLP, Firm & MSME Registrations",
    "Accounting, Statutory Compliance & Regulatory Support"
  ];

  // Logo mark: a white "M" over a gold double underline (the accountant's mark under a final total).
  // Keep images/favicon.svg in sync if you change this.
  var logoN = 0;
  function logoMark(cls) {
    var n = ++logoN;
    return '<svg class="' + (cls || "") + '" viewBox="0 0 64 64" aria-hidden="true"><defs>' +
      '<linearGradient id="lm-bg' + n + '" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#123a7a"/><stop offset="1" stop-color="#071a3d"/></linearGradient>' +
      '<linearGradient id="lm-au' + n + '" x1="0" y1="0" x2="64" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f6d27a"/><stop offset="1" stop-color="#d99a2b"/></linearGradient></defs>' +
      '<rect width="64" height="64" rx="14" fill="url(#lm-bg' + n + ')"/>' +
      '<path d="M17 41V17.5L32 32.5 47 17.5V41" fill="none" stroke="#fff" stroke-width="5.2" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M15 48.5h34M15 54h34" stroke="url(#lm-au' + n + ')" stroke-width="2.6" stroke-linecap="round"/></svg>';
  }

  // Sends an enquiry to the firm's inbox through FormSubmit (https://formsubmit.co).
  // The very first submission triggers a one-time activation email to firm.email — click the link in it.
  function sendEnquiry(subject, fields, replyTo) {
    var payload = { _subject: subject, _template: "table", _captcha: "false" };
    if (replyTo) payload._replyto = replyTo;
    for (var k in fields) payload[k] = fields[k];
    return fetch("https://formsubmit.co/ajax/" + encodeURIComponent(firm.email), {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload)
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) {
        if (!r.ok || String(j.success) === "false") throw new Error(j.message || "Send failed");
        return j;
      });
    });
  }

  function service(id) { for (var i = 0; i < services.length; i++) if (services[i].id === id) return services[i]; return null; }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function appIcon(svc, cls) {
    return '<span class="app-icon' + (cls ? " " + cls : "") + '" style="background:linear-gradient(135deg,' + svc.grad[0] + "," + svc.grad[1] + ')">' + icon(svc.icon) + "</span>";
  }
  function upcoming(n, from) {
    var today = from || new Date(); today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return dates.filter(function (d) { return new Date(d[0] + "T00:00:00") >= today; }).slice(0, n);
  }

  return { firm: firm, icon: icon, logoMark: logoMark, sendEnquiry: sendEnquiry, steps: steps, services: services, industries: industries, dates: dates, dateTypes: dateTypes, datesReviewed: datesReviewed, whyUs: whyUs, directors: directors, team: team, portfolio: portfolio, service: service, esc: esc, appIcon: appIcon, upcoming: upcoming };
})();
