/* ==========================================================
   Site content: firm details, services, industries, due dates.
   Edit this file to update text across every page.
   ========================================================== */
window.SITE = (function () {
  var firm = {
    name: "MSS",
    suffix: "Advisory Services",
    full: "MSS Advisory Services",
    tagline: "Chartered Accountants · Business Advisory",
    slogan: "Your Trusted Partner for Financial Excellence and Regulatory Compliance",
    practice: "Taxation | GST | TDS | Accounting | Compliance | Business Advisory",
    city: "Guntur · Vijayawada",
    region: "Guntur & Vijayawada, Andhra Pradesh",
    // Shown on the About page and in the footer once filled in (while it contains XXXX it is hidden).
    frn: "[ICAI Firm Registration No. — XXXXXXS]",
    // Leave phone/mobile empty to hide them everywhere; add e.g. "+91 98765 43210" and "tel:+919876543210".
    phone: "+91 99593 96789",
    phoneHref: "tel:+919959396789",
    mobile: "",
    mobileHref: "",
    // WhatsApp number in international format, digits only, e.g. "919876543210".
    // The green WhatsApp button and the chatbot's WhatsApp option appear once this is filled in.
    whatsapp: "919959396789",
    email: "info@mssadvisoryservices.com",
    careersEmail: "info@mssadvisoryservices.com",
    offices: [
      { name: "Guntur Office", area: "Lakshmipuram, Guntur", lines: ["3rd Lane, Ashok Nagar", "Lakshmipuram", "Guntur, Andhra Pradesh 522002"], address: "3rd Lane, Ashok Nagar, Lakshmipuram, Guntur, Andhra Pradesh 522002", map: "Ashok Nagar 3rd Lane Lakshmipuram Guntur 522002" },
      { name: "Vijayawada Office", area: "Mogalrajpuram, Vijayawada", lines: ["D.No: 40-6/1-7A, Ground Floor, Revenue Colony", "Park Street, Near Income Tax Office", "Mogalrajpuram, Vijayawada 520010"], address: "D.No: 40-6/1-7A, Ground Floor, Revenue Colony, Park Street, Near Income Tax Office, Mogalrajpuram, Vijayawada, Andhra Pradesh 520010", map: "Revenue Colony Park Street Mogalrajpuram Vijayawada 520010" }
    ],
    // Office hours: add rows like ["Monday – Saturday", "10:00 AM – 7:00 PM"]; the card is hidden while empty.
    hours: [["Monday – Saturday", "10:00 AM – 7:00 PM"], ["Sunday", "Closed"]]
  };

  // 24x24 line icons (stroke = currentColor)
  var P = {
    percent: '<circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/><path d="M19 5 5 19"/>',
    receipt: '<path d="M5 2.5h14v19l-2.33-1.5-2.33 1.5L12 20l-2.33 1.5L7.33 20 5 21.5z"/><path d="M9 7.5h6M9 11.5h6M9 15.5h3"/>',
    shield: '<path d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
    book: '<rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M8.5 7h7M8.5 10.5h7M8.5 14h4M5 17.5h14"/>',
    swap: '<path d="M4.5 8.5h15M15.5 4.5l4 4-4 4"/><path d="M19.5 15.5h-15M8.5 11.5l-4 4 4 4"/>',
    bars: '<path d="M3.5 3.5v17h17"/><path d="M8 16.5v-4M11.5 16.5v-7M15 16.5v-5M18.5 16.5v-9"/>',
    people: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.2.6 3.5 2.8 3.5 6"/>',
    building: '<path d="M4 21.5V4.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17"/><path d="M15 9.5h4a1 1 0 0 1 1 1v11"/><path d="M2.5 21.5h19M7.5 7.5h4M7.5 11.5h4M7.5 15.5h4"/>',
    chart: '<path d="M3.5 20.5h17"/><path d="M6 16.5l4.5-5 3.5 3 5.5-7"/><path d="M15.5 7.5h4v4"/>',
    stamp: '<path d="M9.5 3.5h5l-.8 7h-3.4z"/><path d="M4.5 14.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3h-15z"/><path d="M5.5 20.5h13"/>',
    pin: '<path d="M12 21.5s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9.5" r="2.5"/>',
    phone: '<path d="M5 3.5h3.5l1.8 4.5-2.3 1.5a11 11 0 0 0 6.5 6.5l1.5-2.3 4.5 1.8V19a2 2 0 0 1-2 2A16.5 16.5 0 0 1 3 5.5a2 2 0 0 1 2-2z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6 8.5 7 8.5-7"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7.5 5-2.5 5 2.5-1.5-7.5"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
    lock: '<rect x="4.5" y="10.5" width="15" height="10.5" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>',
    chat: '<path d="M4 5.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4z"/>',
    spark: '<path d="M13 2.5 5 13.5h6l-1 8 8-11h-6z"/>',
    store: '<path d="M3.5 9.5 5 3.5h14l1.5 6"/><path d="M3.5 9.5a2.8 2.8 0 0 0 5.7 0 2.8 2.8 0 0 0 5.6 0 2.8 2.8 0 0 0 5.7 0"/><path d="M5 12v8.5h14V12M10 20.5v-5h4v5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.2 3.6-7 8-7s8 2.8 8 7"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8.5 7V5a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 15.5 5v2M3 12.5h18"/>',
    heart: '<path d="M12 20.5s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8 4.5 4.5 0 0 1 8 2.8c0 6.2-8 11-8 11z"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/>',
    calc: '<rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M8 6.5h8M8.5 11h.01M12 11h.01M15.5 11h.01M8.5 14.5h.01M12 14.5h.01M15.5 14.5h.01M8.5 18h.01M12 18h.01M15.5 18h.01"/>',
    bank: '<path d="M3 9.5 12 4l9 5.5"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20.5h18"/>',
    news: '<path d="M14 2.5H6.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8z"/><path d="M14 2.5V8h5.5M8.5 13h7M8.5 16.5h7"/>',
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
      id: "income-tax", name: "Income Tax", short: "Income Tax", icon: "percent", grad: ["#2e4e73", "#4f7ca8"],
      card: "Returns, planning & notices",
      tagline: "Tax, done right.\nAnd on time.",
      summary: "Return filing, tax planning, assessments and representation for individuals, professionals, firms and companies — so you stay compliant and never pay more than you should.",
      pains: ["Unsure which tax regime or deductions apply to you", "Received a notice from the Income Tax Department", "Multiple income sources — salary, business, capital gains, rent", "Need to plan advance tax and avoid interest"],
      ideal: "Individuals · Professionals · Businesses · Companies",
      items: [
        ["Individual Income Tax", "Return filing for salaried individuals, pensioners and those with capital gains or foreign income."],
        ["Business & Corporate Tax", "Computation and filing for proprietorships, firms, LLPs and companies."],
        ["Tax Planning", "Structure income, investments and expenses within the law to manage your tax outgo."],
        ["Advance Tax", "Estimate liability and schedule instalments to avoid interest."],
        ["Assessments & Notices", "Understand the notice, prepare responses and see the assessment through to closure."],
        ["Representation", "Represent you before tax authorities, including in appellate proceedings where applicable."]
      ],
      faq: [
        ["What documents do I need to file my return?", "Typically your PAN, Aadhaar, salary TDS certificate if salaried (Form 130, formerly Form 16), bank statements, investment proofs and details of any other income. We share a checklist tailored to your situation."],
        ["I received a tax notice. What should I do?", "Don't ignore it, and note the response deadline. Share the notice with us and we'll explain what it means and how to respond."],
        ["Can you handle my return remotely?", "Yes. Documents can be shared securely and most work is completed without an office visit."]
      ]
    },
    {
      id: "gst", name: "GST", short: "GST", icon: "receipt", grad: ["#c27a12", "#e8a33d"],
      card: "Registration, returns & ITC",
      tagline: "GST compliance.\nWithout the guesswork.",
      summary: "GST registration, compliance, advisory and litigation support — from your first return to responding to a demand, so your input tax credit stays protected.",
      pains: ["Input tax credit mismatches between purchase records and the GST portal", "Missed or late GST returns and accumulating late fees", "Unsure whether registration is required or which scheme suits you", "Received a GST notice, demand or audit intimation"],
      ideal: "Startups · Small Businesses · Traders & Manufacturers · Service Providers",
      items: [
        ["GST Registration", "Assess applicability, choose the right scheme, and complete registration and amendments."],
        ["Compliance & Returns", "Regular preparation and filing of applicable GST returns."],
        ["Reconciliation", "Match books with portal data to identify gaps before they become problems."],
        ["Input Tax Credit Review", "Review eligibility and documentation of credits claimed."],
        ["GST Advisory", "Guidance on classification, place of supply and transaction structuring."],
        ["Litigation Support", "Replies to notices and demands, support through departmental audits, and assistance with appeals."]
      ],
      faq: [
        ["Do I need GST registration?", "It depends on your turnover, the nature of supplies and where you sell. We'll assess your situation and advise whether registration is mandatory or beneficial."],
        ["What is GST reconciliation?", "Comparing the GST data in your books with what suppliers and you have reported on the portal, so credits are accurate and discrepancies are fixed early."]
      ]
    },
    {
      id: "tds", name: "TDS Compliance", short: "TDS", icon: "swap", grad: ["#24476b", "#5d86b0"],
      card: "Returns, reconciliation & notices",
      tagline: "Deduct. Deposit. File.\nSorted.",
      summary: "TDS compliance, reconciliation, quarterly returns and notice management — so deductions are correct, deposits are on time and returns are clean.",
      pains: ["Unsure of the correct TDS section or rate for a payment", "Default notices due to short deduction, mismatches or late filing", "Deductees waiting on certificates, or credits not showing up for them"],
      ideal: "Businesses · Companies · Employers",
      items: [
        ["TDS Computation", "Determine applicable sections and rates for payments."],
        ["Deposits & Returns", "Timely deposit and quarterly TDS/TCS statements."],
        ["Reconciliation", "Match deductions, challans and returns with the department's TRACES records."],
        ["Certificates", "Generation and issue of TDS certificates."],
        ["Notice Management", "Review default notices, correct the data and file revised statements."]
      ],
      faq: [
        ["We received a TDS default notice. Can it be fixed?", "Often, yes. Many defaults arise from data mismatches that can be corrected through revised statements. Share the notice and we'll review it."],
        ["When is TDS due?", "TDS deducted in a month is generally deposited by the 7th of the following month (with a later date for March), and quarterly TDS statements are filed after each quarter. See our Important Dates page for the current calendar."]
      ]
    },
    {
      id: "advisory", name: "Project Reports & Loan Advisory", short: "Project Reports & Loans", icon: "bars", grad: ["#d98a1f", "#f2c46b"],
      tagline: "Numbers your\nlender can trust.",
      summary: "Project reports, CMA data, financial projections, loan documentation and feasibility assessments — prepared to the standard banks and financial institutions expect.",
      pains: ["The bank needs a project report or CMA data for a loan", "A lender is asking for financial projections or a feasibility study", "Planning an expansion or new venture and unsure the numbers add up"],
      ideal: "Startups · MSMEs · Growing Businesses · Entrepreneurs",
      items: [
        ["Project Reports", "Detailed reports covering the project, costs, means of finance and expected returns."],
        ["CMA Data", "Past and projected financials and ratios in the format banks use to assess credit."],
        ["Financial Projections", "Projected profit and loss, balance sheet and cash flows built on realistic assumptions."],
        ["Loan Documentation", "Prepare and organise the financial documents a loan application needs."],
        ["Business Feasibility Assessments", "An honest view of whether a project or venture is financially viable."]
      ],
      faq: [
        ["What is CMA data?", "Credit Monitoring Arrangement data is a set of past and projected financial statements and ratios that banks use to assess working-capital and term-loan proposals. We prepare it from your books and plans."],
        ["Is this a one-time engagement?", "It can be either — a single project like a loan proposal, or periodic reviews as your business grows."]
      ]
    },
    {
      id: "registrations", name: "Company, LLP, Firm & MSME Registrations", short: "Registrations", icon: "building", grad: ["#2e4e73", "#d98a1f"],
      tagline: "Start right.\nStay compliant.",
      summary: "Company, LLP, partnership firm and MSME registrations, plus the ROC filings that keep your entity in good standing.",
      pains: ["Starting a business and unsure which structure to choose", "Not sure which registrations your business needs", "Missed annual ROC filings and mounting additional fees"],
      ideal: "Startups · Entrepreneurs · Private Companies · LLPs & Firms",
      items: [
        ["Company Incorporation", "Choose the right structure and complete incorporation with the MCA."],
        ["LLP Registration", "Incorporate a limited liability partnership and draft the LLP agreement."],
        ["Partnership Firm Registration", "Partnership deed and registration of the firm."],
        ["MSME / Udyam Registration", "Udyam registration so you can access MSME benefits."],
        ["Other Registrations", "PAN, TAN, professional tax, Import-Export Code and trust or society registrations."],
        ["ROC Compliance", "Annual filings and event-based filings such as changes in directors, capital or registered office."]
      ],
      faq: [
        ["Private limited company or LLP — which should I choose?", "It depends on funding plans, number of owners, compliance appetite and tax position. We'll walk you through the trade-offs."],
        ["How long does company or LLP registration take?", "Once documents and digital signatures are ready, incorporation is usually completed within a few weeks, depending on name approval and MCA processing times."],
        ["What happens if annual ROC filings are missed?", "Additional fees accrue for each day of delay, and directors or designated partners can face further consequences. It's best to bring filings up to date as early as possible — we can help regularise past years."],
        ["Is MSME / Udyam registration worth it for a small business?", "Usually, yes. It is free, and it can help with priority-sector lending, certain government schemes and protection against delayed payments from buyers."]
      ]
    },
    {
      id: "accounting", name: "Accounting & Statutory Compliance", short: "Accounting & Compliance", icon: "book", grad: ["#3b5f86", "#7fa6c9"],
      tagline: "Your books.\nAlways in order.",
      summary: "Accurate books, financial statements and the statutory and regulatory compliance that goes with them — so you're ready for every filing, audit and bank request.",
      pains: ["Books are months behind and tax filings are rushed", "No clear view of profit, cash or outstanding payments", "Statutory deadlines are hard to keep track of"],
      ideal: "Startups · Small & Medium Businesses · Professionals · Non-Profits",
      items: [
        ["Bookkeeping", "Day-to-day recording of transactions in your accounting software."],
        ["Bank Reconciliation", "Match books with bank statements regularly."],
        ["Financial Statements", "Preparation of profit & loss, balance sheet and supporting schedules."],
        ["Management Reporting", "Monthly or quarterly reports that show how the business is really doing."],
        ["Statutory Compliance", "A compliance calendar and timely filings so recurring obligations don't slip."],
        ["Regulatory Support", "Help with returns, filings and queries from regulators and authorities."]
      ],
      faq: [
        ["Which accounting software do you work with?", "We work with commonly used accounting software. Tell us what you use and we'll confirm."],
        ["Can you catch up on books that are behind?", "Yes. We can bring past records up to date and then move to a regular schedule."]
      ]
    },
    {
      id: "audit", name: "Audit & Assurance", short: "Audit", icon: "shield", grad: ["#b5651d", "#e8a33d"],
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
    }
  ];
  // Old service ids (from the previous site) that now live under another service
  var serviceAliases = { corporate: "registrations" };

  var industries = [
    { id: "startups", name: "Startups", icon: "spark", headline: "Build on solid ground.", description: "Get the structure, registrations and books right from day one, so you can focus on growth and be ready when investors ask.", needs: ["Business setup & structuring", "Company / LLP incorporation", "Tax & GST registration", "Accounting from day one", "Compliance calendar", "Financial projections"], services: ["registrations", "accounting", "gst", "advisory"] },
    { id: "smb", name: "Small & Medium Businesses", icon: "store", headline: "Run the business. We'll run the compliance.", description: "Regular bookkeeping, GST, TDS and tax filings handled on schedule, with reports that show how you're really doing.", needs: ["Bookkeeping", "GST returns & reconciliation", "TDS compliance", "Income tax", "Financial statements", "Project reports & bank loans"], services: ["accounting", "gst", "tds", "income-tax", "advisory"] },
    { id: "corporates", name: "Corporates", icon: "building", headline: "Assurance at scale.", description: "Audit, ROC compliance and advisory support for companies with more complex reporting and governance needs.", needs: ["Statutory & internal audit", "Corporate tax", "ROC / MCA compliance", "Internal control review", "Financial projections & CMA data"], services: ["audit", "income-tax", "registrations", "advisory"] },
    { id: "individuals", name: "Individuals", icon: "user", headline: "Your taxes, simplified.", description: "Return filing, planning and notice support for salaried individuals, pensioners, investors and NRIs.", needs: ["Income tax return filing", "Tax planning", "Capital gains", "Responding to notices", "Advance tax"], services: ["income-tax"] },
    { id: "professionals", name: "Professionals", icon: "briefcase", headline: "For those who advise, heal and build.", description: "Doctors, lawyers, consultants, architects and freelancers — accounting and tax handled so you can focus on your practice.", needs: ["Professional income tax", "GST registration & returns", "Books of accounts", "Advance tax", "Tax audit where applicable"], services: ["income-tax", "gst", "accounting", "audit"] },
    { id: "nonprofits", name: "Non-Profit Organisations", short: "Non-Profits", icon: "heart", headline: "Compliance that protects your mission.", description: "Registrations, audits and filings for trusts, societies and Section 8 companies, so exemptions stay intact.", needs: ["Trust / society registration", "Tax-exemption registrations", "Audit", "Return filing", "Accounting"], services: ["registrations", "audit", "accounting", "income-tax"] }
  ];

  // Indicative statutory due dates. Type: GST | TDS | IT | ROC
  var dates = [
    ["2026-10-07", "TDS", "Deposit of TDS/TCS deducted in September"],
    ["2026-10-11", "GST", "GSTR-1 for September (monthly filers)"],
    ["2026-10-13", "GST", "GSTR-1 for July–September quarter (QRMP filers)"],
    ["2026-10-14", "ROC", "Intimation of auditor appointment (ADT-1)", "Within 15 days of the AGM"],
    ["2026-10-15", "TDS", "Quarterly TCS statement for July–September"],
    ["2026-10-18", "GST", "CMP-08 for July–September (composition taxpayers)"],
    ["2026-10-20", "GST", "GSTR-3B for September (monthly filers)"],
    ["2026-10-22", "GST", "GSTR-3B for July–September quarter (QRMP filers)", "22nd in Andhra Pradesh and Telangana; 24th in some other states"],
    ["2026-10-30", "ROC", "Financial statements (AOC-4) for FY 2025-26", "Within 30 days of the AGM"],
    ["2026-10-30", "ROC", "LLP Statement of Account & Solvency (Form 8) for FY 2025-26"],
    ["2026-10-31", "ROC", "MSME Form 1 for April–September (dues to MSME suppliers)"],
    ["2026-10-31", "TDS", "Quarterly TDS statements for July–September", "Forms 138 / 140 / 144 (formerly 24Q / 26Q / 27Q)"],
    ["2026-10-31", "IT", "Income tax return for taxpayers subject to audit", "Subject to any extension notified"],
    ["2026-11-07", "TDS", "Deposit of TDS/TCS deducted in October"],
    ["2026-11-11", "GST", "GSTR-1 for October (monthly filers)"],
    ["2026-11-15", "TDS", "Issue of quarterly TDS certificates (non-salary)"],
    ["2026-11-20", "GST", "GSTR-3B for October (monthly filers)"],
    ["2026-11-25", "GST", "GST payment (PMT-06) for October (QRMP filers)"],
    ["2026-11-29", "ROC", "Annual return (MGT-7 / 7A) for FY 2025-26", "Within 60 days of the AGM"],
    ["2026-11-30", "IT", "Income tax return for taxpayers with transfer-pricing reports"],
    ["2026-12-07", "TDS", "Deposit of TDS/TCS deducted in November"],
    ["2026-12-11", "GST", "GSTR-1 for November (monthly filers)"],
    ["2026-12-15", "IT", "Third instalment of advance tax (75%)"],
    ["2026-12-20", "GST", "GSTR-3B for November (monthly filers)"],
    ["2026-12-25", "GST", "GST payment (PMT-06) for November (QRMP filers)"],
    ["2026-12-31", "GST", "Annual return GSTR-9 / 9C for FY 2025-26"],
    ["2026-12-31", "IT", "Belated or revised income tax return for FY 2025-26"],
    ["2027-01-07", "TDS", "Deposit of TDS/TCS deducted in December"],
    ["2027-01-11", "GST", "GSTR-1 for December (monthly filers)"],
    ["2027-01-13", "GST", "GSTR-1 for October–December quarter (QRMP filers)"],
    ["2027-01-15", "TDS", "Quarterly TCS statement for October–December"],
    ["2027-01-18", "GST", "CMP-08 for October–December (composition taxpayers)"],
    ["2027-01-20", "GST", "GSTR-3B for December (monthly filers)"],
    ["2027-01-22", "GST", "GSTR-3B for October–December quarter (QRMP filers)", "22nd in Andhra Pradesh and Telangana; 24th in some other states"],
    ["2027-01-31", "TDS", "Quarterly TDS statements for October–December", "Forms 138 / 140 / 144 (formerly 24Q / 26Q / 27Q)"],
    ["2027-02-07", "TDS", "Deposit of TDS/TCS deducted in January"],
    ["2027-02-11", "GST", "GSTR-1 for January (monthly filers)"],
    ["2027-02-15", "TDS", "Issue of quarterly TDS certificates (non-salary)"],
    ["2027-02-20", "GST", "GSTR-3B for January (monthly filers)"],
    ["2027-02-25", "GST", "GST payment (PMT-06) for January (QRMP filers)"],
    ["2027-03-07", "TDS", "Deposit of TDS/TCS deducted in February"],
    ["2027-03-11", "GST", "GSTR-1 for February (monthly filers)"],
    ["2027-03-15", "IT", "Fourth instalment of advance tax (100%)"],
    ["2027-03-20", "GST", "GSTR-3B for February (monthly filers)"],
    ["2027-03-25", "GST", "GST payment (PMT-06) for February (QRMP filers)"],
    ["2027-04-11", "GST", "GSTR-1 for March (monthly filers)"],
    ["2027-04-13", "GST", "GSTR-1 for January–March quarter (QRMP filers)"],
    ["2027-04-18", "GST", "CMP-08 for January–March (composition taxpayers)"],
    ["2027-04-20", "GST", "GSTR-3B for March (monthly filers)"],
    ["2027-04-22", "GST", "GSTR-3B for January–March quarter (QRMP filers)", "22nd in Andhra Pradesh and Telangana; 24th in some other states"],
    ["2027-04-30", "TDS", "Deposit of TDS/TCS deducted in March"],
    ["2027-04-30", "GST", "Annual return GSTR-4 for FY 2026-27 (composition taxpayers)"],
    ["2027-04-30", "ROC", "MSME Form 1 for October–March (dues to MSME suppliers)"]
  ];
  var dateTypes = { GST: "GST", TDS: "TDS", IT: "Income Tax", ROC: "ROC" };

  // [title, statement, icon]
  var whyUs = [
    ["Two decades of excellence", "Over twenty years of professional practice behind every engagement.", "award"],
    ["Integrated solutions", "Taxation, compliance and advisory, all under one roof.", "compass"],
    ["Experienced team", "Chartered accountants and specialists who know their field.", "people"],
    ["Timely & accurate", "Practical business guidance, delivered on time and done right.", "clock"],
    ["Client-centric", "Focused on long-term value, not one-off transactions.", "heart"],
    ["Sustainable growth", "Committed to your growth, and to staying compliant along the way.", "bars"]
  ];

  var approach = [
    ["Understand first", "Every engagement starts with understanding your business, your history and what you're trying to achieve."],
    ["Get it right", "Accuracy and compliance come first. We review our work before anything is filed."],
    ["Explain clearly", "We tell you what we did, why it matters and what you need to do next — in plain language."],
    ["Stay ahead", "We track deadlines and regulatory changes so you hear about them from us, early."]
  ];

  // Photos are embedded in js/team-photos.js under these paths; a .jpg saved at the same path also works.
  // If neither exists, the initials are shown instead. "title" (e.g. CA) is shown in grey before the name.
  var directors = [
    { initials: "VK", name: "Venkat Vidya Sagar Reddy Karumuri", role: "Director", photo: "images/team-vidya-sagar-reddy-karumuri.jpg" }
  ];
  var team = [
    { initials: "BM", title: "CA", name: "V. Bala Murali Krishna Reddy", badges: ["FCA"], bio: "20+ years of professional excellence", photo: "images/team-murali-krishna-reddy.jpg" },
    { initials: "SR", name: "P. Srinivas Rao", badges: ["B.Com"], bio: "15+ years of expertise in Accounting & Compliance", photo: "images/team-srinivas-rao.jpg" },
    { initials: "SS", title: "CA", name: "G. Siva Sankar Reddy", badges: ["ACA"], bio: "5+ years of experience in Taxation, GST & Advisory Services", photo: "images/team-siva-sankar-reddy.jpg" },
    { initials: "SV", title: "CA", name: "Sainadh Velugula", badges: ["ACA", "CMA", "LLB"], bio: "3+ years of experience in Taxation, Corporate Law & Financial Advisory", photo: "images/team-sainadh-velugula.jpg" }
  ];

  // Logo mark: two cream peaks with a path winding up to a gold flag, on a navy disc.
  // Keep images/favicon.svg in sync if you change this.
  // Navy emblem: white "M" monogram crowned with a gold diamond, framed by a fine gold inner border
  function logoMark(cls) {
    return '<svg class="' + (cls || "") + '" viewBox="0 0 100 100" aria-hidden="true">' +
      '<rect width="100" height="100" rx="22" fill="#0d1b2a"/>' +
      '<rect x="7" y="7" width="86" height="86" rx="16" fill="none" stroke="#e8a33d" stroke-width="1.6" opacity=".7"/>' +
      '<path d="M27,74 V34 L50,59 L73,34 V74" fill="none" stroke="#fff" stroke-width="9" stroke-linejoin="miter" stroke-linecap="square"/>' +
      '<polygon points="50,19 58,28 50,37 42,28" fill="#e8a33d"/></svg>';
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

  function service(id) {
    id = serviceAliases[id] || id;
    for (var i = 0; i < services.length; i++) if (services[i].id === id) return services[i];
    return null;
  }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function appIcon(svc, cls) {
    return '<span class="app-icon' + (cls ? " " + cls : "") + '" style="background:linear-gradient(135deg,' + svc.grad[0] + "," + svc.grad[1] + ')">' + icon(svc.icon) + "</span>";
  }
  function upcoming(n, from) {
    var today = from || new Date(); today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return dates.filter(function (d) { return new Date(d[0] + "T00:00:00") >= today; }).slice(0, n);
  }
  function hasFrn() { return !!firm.frn && firm.frn.indexOf("XXXX") < 0; }

  return { firm: firm, icon: icon, logoMark: logoMark, sendEnquiry: sendEnquiry, steps: steps, services: services, industries: industries, dates: dates, dateTypes: dateTypes, whyUs: whyUs, approach: approach, directors: directors, team: team, service: service, esc: esc, appIcon: appIcon, upcoming: upcoming, hasFrn: hasFrn };
})();
