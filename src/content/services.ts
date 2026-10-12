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
      "Return filing, tax planning, assessments and representation for individuals, professionals, firms and companies — so you stay compliant and never pay more than you should.",
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
      { title: "Assessments & Notices", description: "Understand the notice, prepare responses and see the assessment through to closure." },
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
    name: "GST",
    icon: "receipt",
    headline: "GST compliance.\nWithout the guesswork.",
    summary:
      "GST registration, compliance, advisory and litigation support — from your first return to responding to a demand, so your input tax credit stays protected.",
    problems: [
      "Input tax credit mismatches between purchase records and the GST portal",
      "Missed or late GST returns and accumulating late fees",
      "Unsure whether registration is required or which scheme suits you",
      "Received a GST notice, demand or audit intimation",
    ],
    offerings: [
      { title: "GST Registration", description: "Assess applicability, choose the right scheme, and complete registration and amendments." },
      { title: "Compliance & Returns", description: "Regular preparation and filing of applicable GST returns." },
      { title: "Reconciliation", description: "Match books with portal data to identify gaps before they become problems." },
      { title: "Input Tax Credit Review", description: "Review eligibility and documentation of credits claimed." },
      { title: "GST Advisory", description: "Guidance on classification, place of supply and transaction structuring." },
      { title: "Litigation Support", description: "Replies to notices and demands, support through departmental audits, and assistance with appeals." },
    ],
    whoFor: ["Startups", "Small Businesses", "Traders & Manufacturers", "Service Providers"],
    faqs: [
      { q: "Do I need GST registration?", a: "It depends on your turnover, the nature of supplies and where you sell. We'll assess your situation and advise whether registration is mandatory or beneficial." },
      { q: "What is GST reconciliation?", a: "Comparing the GST data in your books with what suppliers and you have reported on the portal, so credits are accurate and discrepancies are fixed early." },
    ],
  },
  {
    slug: "tds",
    name: "TDS Compliance",
    icon: "arrows",
    headline: "Deduct. Deposit. File.\nSorted.",
    summary:
      "TDS compliance, reconciliation, quarterly returns and notice management — so deductions are correct, deposits are on time and returns are clean.",
    problems: [
      "Unsure of the correct TDS section or rate for a payment",
      "Default notices due to short deduction, mismatches or late filing",
      "Deductees waiting on certificates or credits not showing in Form 26AS",
    ],
    offerings: [
      { title: "TDS Computation", description: "Determine applicable sections and rates for payments." },
      { title: "Deposits & Returns", description: "Timely deposit and quarterly TDS/TCS statements." },
      { title: "Reconciliation", description: "Match deductions, challans and returns with TRACES and Form 26AS." },
      { title: "Certificates", description: "Generation and issue of TDS certificates." },
      { title: "Notice Management", description: "Review default notices, correct the data and file revised statements." },
    ],
    whoFor: ["Businesses", "Companies", "Employers"],
    faqs: [
      { q: "We received a TDS default notice. Can it be fixed?", a: "Often, yes. Many defaults arise from data mismatches that can be corrected through revised statements. Share the notice and we'll review it." },
    ],
  },
  {
    slug: "advisory",
    name: "Project Reports & Loan Advisory",
    icon: "chart",
    headline: "Numbers your\nlender can trust.",
    summary:
      "Project reports, CMA data, financial projections, loan documentation and feasibility assessments — prepared to the standard banks and financial institutions expect.",
    problems: [
      "The bank needs a project report or CMA data for a loan",
      "A lender is asking for financial projections or a feasibility study",
      "Planning an expansion or new venture and unsure the numbers add up",
    ],
    offerings: [
      { title: "Project Reports", description: "Detailed reports covering the project, costs, means of finance and expected returns." },
      { title: "CMA Data", description: "Past and projected financials and ratios in the format banks use to assess credit." },
      { title: "Financial Projections", description: "Projected profit and loss, balance sheet and cash flows built on realistic assumptions." },
      { title: "Loan Documentation", description: "Prepare and organise the financial documents a loan application needs." },
      { title: "Business Feasibility Assessments", description: "An honest view of whether a project or venture is financially viable." },
    ],
    whoFor: ["Startups", "MSMEs", "Growing Businesses", "Entrepreneurs"],
    faqs: [
      { q: "What is CMA data?", a: "Credit Monitoring Arrangement data is a set of past and projected financial statements and ratios that banks use to assess working-capital and term-loan proposals. We prepare it from your books and plans." },
      { q: "Is this a one-time engagement?", a: "It can be either — a single project like a loan proposal, or periodic reviews as your business grows." },
    ],
  },
  {
    slug: "registrations",
    name: "Company, LLP, Firm & MSME Registrations",
    icon: "building",
    headline: "Start right.\nStay compliant.",
    summary:
      "Company, LLP, partnership firm and MSME registrations, plus the ROC filings that keep your entity in good standing.",
    problems: [
      "Starting a business and unsure which structure to choose",
      "Not sure which registrations your business needs",
      "Missed annual ROC filings and mounting additional fees",
    ],
    offerings: [
      { title: "Company Incorporation", description: "Choose the right structure and complete incorporation with the MCA." },
      { title: "LLP Registration", description: "Incorporate a limited liability partnership and draft the LLP agreement." },
      { title: "Partnership Firm Registration", description: "Partnership deed and registration of the firm." },
      { title: "MSME / Udyam Registration", description: "Udyam registration so you can access MSME benefits." },
      { title: "Other Registrations", description: "PAN, TAN, professional tax, Import-Export Code and trust or society registrations." },
      { title: "ROC Compliance", description: "Annual filings and event-based filings such as changes in directors, capital or registered office." },
    ],
    whoFor: ["Startups", "Entrepreneurs", "Private Companies", "LLPs & Firms"],
    faqs: [
      { q: "Private limited company or LLP — which should I choose?", a: "It depends on funding plans, number of owners, compliance appetite and tax position. We'll walk you through the trade-offs." },
    ],
  },
  {
    slug: "accounting",
    name: "Accounting & Statutory Compliance",
    icon: "book",
    headline: "Your books.\nAlways in order.",
    summary:
      "Accurate books, financial statements and the statutory and regulatory compliance that goes with them — so you're ready for every filing, audit and bank request.",
    problems: [
      "Books are months behind and tax filings are rushed",
      "No clear view of profit, cash or outstanding payments",
      "Statutory deadlines are hard to keep track of",
    ],
    offerings: [
      { title: "Bookkeeping", description: "Day-to-day recording of transactions in your accounting software." },
      { title: "Bank Reconciliation", description: "Match books with bank statements regularly." },
      { title: "Financial Statements", description: "Preparation of profit & loss, balance sheet and supporting schedules." },
      { title: "Management Reporting", description: "Monthly or quarterly reports that show how the business is really doing." },
      { title: "Statutory Compliance", description: "A compliance calendar and timely filings so recurring obligations don't slip." },
      { title: "Regulatory Support", description: "Help with returns, filings and queries from regulators and authorities." },
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
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
