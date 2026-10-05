import type { IconName } from "@/components/Icon";

// Only list services the firm actually provides. Remove or edit freely.

export type Service = {
  slug: string;
  name: string;
  icon: IconName;
  headline: string;
  summary: string;
  problems: string[];
  offerings: { title: string; description: string }[];
  whoFor: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "income-tax",
    name: "Income Tax",
    icon: "percent",
    headline: "Tax, done right.\nAnd on time.",
    summary:
      "Return preparation, planning and representation for individuals, firms and companies — so you stay compliant and never pay more than you should.",
    problems: [
      "Unsure which tax regime or deductions apply to you",
      "Received a notice from the Income Tax Department",
      "Multiple income sources — salary, business, capital gains, rent",
      "Need to plan advance tax and avoid interest",
    ],
    offerings: [
      { title: "Individual Income Tax", description: "Return filing for salaried individuals, pensioners and those with capital gains or foreign income." },
      { title: "Business & Corporate Tax", description: "Computation and filing for proprietorships, firms, LLPs and companies." },
      { title: "Tax Planning", description: "Structure income, investments and expenses within the law to manage your tax outgo." },
      { title: "Advance Tax", description: "Estimate liability and schedule instalments to avoid interest." },
      { title: "Notices & Assessments", description: "Understand the notice, prepare responses and track it to closure." },
      { title: "Representation", description: "Represent you before tax authorities, including in appellate proceedings where applicable." },
    ],
    whoFor: ["Individuals", "Professionals", "Businesses", "Companies"],
    faqs: [
      { q: "What documents do I need to file my return?", a: "Typically your PAN, Aadhaar, Form 16 (if salaried), bank statements, investment proofs and details of any other income. We share a checklist tailored to your situation." },
      { q: "I received a tax notice. What should I do?", a: "Don't ignore it, and note the response deadline. Share the notice with us and we'll explain what it means and how to respond." },
      { q: "Can you handle my return remotely?", a: "Yes. Documents can be shared securely and most work is completed without an office visit." },
    ],
  },
  {
    slug: "gst",
    name: "GST & Indirect Tax",
    icon: "receipt",
    headline: "GST compliance.\nWithout the guesswork.",
    summary:
      "From registration to monthly returns, reconciliations and notices — we keep your GST compliance accurate so your input tax credit is protected.",
    problems: [
      "Input tax credit mismatches between purchase records and the GST portal",
      "Missed or late GST returns and accumulating late fees",
      "Unsure whether registration is required or which scheme suits you",
      "Received a GST notice or demand",
    ],
    offerings: [
      { title: "GST Registration", description: "Assess applicability, choose the right scheme, and complete registration and amendments." },
      { title: "Return Filing", description: "Regular preparation and filing of applicable GST returns." },
      { title: "Reconciliation", description: "Match books with portal data to identify gaps before they become problems." },
      { title: "Input Tax Credit Review", description: "Review eligibility and documentation of credits claimed." },
      { title: "Notices & Audits", description: "Respond to notices and support you through departmental audits." },
      { title: "GST Advisory", description: "Guidance on classification, place of supply and transaction structuring." },
    ],
    whoFor: ["Startups", "Small Businesses", "Traders & Manufacturers", "Service Providers"],
    faqs: [
      { q: "Do I need GST registration?", a: "It depends on your turnover, the nature of supplies and where you sell. We'll assess your situation and advise whether registration is mandatory or beneficial." },
      { q: "What is GST reconciliation?", a: "Comparing the GST data in your books with what suppliers and you have reported on the portal, so credits are accurate and discrepancies are fixed early." },
    ],
  },
  {
    slug: "accounting",
    name: "Accounting & Bookkeeping",
    icon: "book",
    headline: "Your books.\nAlways in order.",
    summary:
      "Accurate, organised financial records so you understand how your business is performing and are ready for every filing and audit.",
    problems: [
      "Books are months behind and tax filings are rushed",
      "No clear view of profit, cash or outstanding payments",
      "Records aren't ready when the auditor or bank asks",
    ],
    offerings: [
      { title: "Bookkeeping", description: "Day-to-day recording of transactions in your accounting software." },
      { title: "Payables & Receivables", description: "Track what you owe and what you're owed, with ageing reports." },
      { title: "Bank Reconciliation", description: "Match books with bank statements regularly." },
      { title: "Financial Statements", description: "Preparation of profit & loss, balance sheet and supporting schedules." },
      { title: "Management Reporting", description: "Monthly or quarterly reports that show how the business is really doing." },
      { title: "Software Setup", description: "Help choosing and setting up accounting software for your business." },
    ],
    whoFor: ["Startups", "Small & Medium Businesses", "Professionals", "Non-Profits"],
    faqs: [
      { q: "Which accounting software do you work with?", a: "We work with commonly used accounting software. Tell us what you use and we'll confirm." },
      { q: "Can you catch up on books that are behind?", a: "Yes. We can bring past records up to date and then move to a regular schedule." },
    ],
  },
  {
    slug: "audit",
    name: "Audit & Assurance",
    icon: "shield",
    headline: "Assurance you\ncan stand behind.",
    summary:
      "Independent audits and reviews that help businesses maintain reliable financial reporting and meet statutory requirements.",
    problems: [
      "Statutory or tax audit is required and the deadline is approaching",
      "Need confidence that internal controls are working",
      "Banks, investors or partners require audited financials",
    ],
    offerings: [
      { title: "Statutory Audit", description: "Audits required under applicable law for companies and other entities." },
      { title: "Tax Audit", description: "Audit and reporting where required under income tax law." },
      { title: "Internal Audit", description: "Independent review of processes, risks and controls." },
      { title: "Financial Statement Review", description: "Limited-scope review of financial statements." },
      { title: "Compliance Review", description: "Check adherence to applicable regulatory requirements." },
      { title: "Internal Control Review", description: "Assess design and effectiveness of internal financial controls." },
    ],
    whoFor: ["Companies", "LLPs & Firms", "Non-Profits", "Businesses"],
    faqs: [
      { q: "How do I know if a tax audit applies to me?", a: "Applicability depends on turnover, receipts and the nature of your income. We'll review your figures and confirm." },
    ],
  },
  {
    slug: "tds",
    name: "TDS & Payroll Compliance",
    icon: "arrows",
    headline: "Deduct. Deposit. File.\nSorted.",
    summary:
      "End-to-end TDS compliance and payroll-related statutory filings, so deductions are correct, deposits are on time and returns are clean.",
    problems: [
      "Unsure of the correct TDS section or rate for a payment",
      "Default notices due to short deduction or late filing",
      "Employees waiting on certificates",
    ],
    offerings: [
      { title: "TDS Computation", description: "Determine applicable sections and rates for payments." },
      { title: "Deposits & Returns", description: "Timely deposit and quarterly TDS/TCS statements." },
      { title: "Certificates", description: "Generation and issue of TDS certificates." },
      { title: "Default Resolution", description: "Review and correct defaults and file revised statements." },
      { title: "Payroll Compliance", description: "Support with payroll-related statutory deductions and filings." },
    ],
    whoFor: ["Businesses", "Companies", "Employers"],
    faqs: [
      { q: "We received a TDS default notice. Can it be fixed?", a: "Often, yes. Many defaults arise from data mismatches that can be corrected through revised statements. Share the notice and we'll review it." },
    ],
  },
  {
    slug: "corporate",
    name: "Corporate & ROC Compliance",
    icon: "building",
    headline: "From incorporation\nto annual filings.",
    summary:
      "Company and LLP formation, ROC/MCA filings and ongoing secretarial compliance — handled end to end.",
    problems: [
      "Starting a company or LLP and unsure of the structure",
      "Missed annual filings and mounting additional fees",
      "Board resolutions, registers and documentation not maintained",
    ],
    offerings: [
      { title: "Company & LLP Formation", description: "Choose the right structure and complete incorporation." },
      { title: "Annual ROC Filings", description: "Financial statements and annual return filings with the MCA." },
      { title: "Event-based Filings", description: "Changes in directors, capital, registered office and more." },
      { title: "Board Documentation", description: "Minutes, resolutions and statutory registers." },
      { title: "Ongoing Compliance", description: "A compliance calendar so nothing slips." },
    ],
    whoFor: ["Startups", "Private Companies", "LLPs"],
    faqs: [
      { q: "Private limited company or LLP — which should I choose?", a: "It depends on funding plans, number of owners, compliance appetite and tax position. We'll walk you through the trade-offs." },
    ],
  },
  {
    slug: "advisory",
    name: "Business Advisory",
    icon: "chart",
    headline: "Numbers that\ndrive decisions.",
    summary:
      "Financial planning, analysis and structuring that help you understand your position and make informed business decisions.",
    problems: [
      "Growing revenue but cash is always tight",
      "Need a business plan or projections for a bank or investor",
      "Considering restructuring, expansion or a new venture",
    ],
    offerings: [
      { title: "Financial Planning & Budgeting", description: "Set realistic budgets and track performance against them." },
      { title: "Cash Flow Analysis", description: "Understand where cash goes and how to improve it." },
      { title: "Business Plans & Projections", description: "Projections and reports for lenders and investors." },
      { title: "Project Finance", description: "Support preparing loan proposals and project reports." },
      { title: "Business Structuring", description: "Choose or change the structure that fits your goals." },
      { title: "Investment Analysis", description: "Evaluate the financial viability of proposals." },
    ],
    whoFor: ["Startups", "Growing Businesses", "Corporates"],
    faqs: [
      { q: "Is advisory a one-time engagement?", a: "It can be either — a single project like a loan proposal, or ongoing periodic reviews." },
    ],
  },
  {
    slug: "registrations",
    name: "Registrations & Other Services",
    icon: "grid",
    headline: "Registrations\nand everything else.",
    summary:
      "The many registrations and certifications a business or organisation needs, handled in one place.",
    problems: [
      "Not sure which registrations your business needs",
      "Need certificates or attestations for a bank, tender or authority",
    ],
    offerings: [
      { title: "Business Registrations", description: "PAN, TAN, MSME/Udyam, professional tax and other registrations." },
      { title: "Non-Profit Registrations", description: "Trust/society registration and tax-exemption registrations." },
      { title: "Certifications", description: "Net-worth, turnover and other certificates as permitted." },
      { title: "Import-Export Code", description: "IEC registration and updates." },
    ],
    whoFor: ["Startups", "Businesses", "Non-Profits"],
    faqs: [],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
