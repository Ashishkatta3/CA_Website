// Knowledge Center entries. Add articles here (or move to a CMS later).
// `updated` matters for tax content — always refresh it when you revise a piece.

export type ArticleCategory = "tax" | "gst" | "regulatory" | "business";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "note"; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  author: string;
  published: string; // YYYY-MM-DD
  updated: string;
  readingMinutes: number;
  body: Block[];
  sources?: { label: string; url: string }[];
};

export const categories: { id: ArticleCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "tax", label: "Tax Updates" },
  { id: "gst", label: "GST Updates" },
  { id: "regulatory", label: "Regulatory" },
  { id: "business", label: "Business" },
];

const AUTHOR = "MSS Advisory Services";

export const articles: Article[] = [
  {
    slug: "advance-tax-december-instalment",
    title: "Advance tax: the 15 December instalment",
    excerpt: "Who has to pay advance tax, how much is due by each date, and what happens if an instalment is missed.",
    category: "tax",
    author: AUTHOR,
    published: "2026-11-20",
    updated: "2026-11-20",
    readingMinutes: 4,
    body: [
      { type: "p", text: "Advance tax means paying income tax during the year, as income is earned, instead of in one go when the return is filed. The third instalment for the current financial year falls due on 15 December." },
      { type: "h2", text: "Who has to pay" },
      { type: "ul", items: [
        "Anyone whose tax for the year, after subtracting TDS and TCS, is expected to be ₹10,000 or more.",
        "This commonly applies to business owners, professionals, landlords, investors with capital gains, and salaried people with significant income besides their salary.",
        "Resident senior citizens (60 or older) who have no income from business or profession do not have to pay advance tax.",
      ] },
      { type: "h2", text: "How much is due by each date" },
      { type: "table", head: ["Due date", "Cumulative tax to be paid"], rows: [
        ["15 June", "15% of the year's tax"],
        ["15 September", "45%"],
        ["15 December", "75%"],
        ["15 March", "100%"],
      ] },
      { type: "p", text: "Businesses and professionals who declare income on a presumptive basis may pay the whole amount in a single instalment by 15 March." },
      { type: "h2", text: "If an instalment is missed or short" },
      { type: "p", text: "Interest is charged at 1% a month on the shortfall: once for deferring an instalment, and again if less than 90% of the year's tax has been paid by 31 March. Paying the balance as early as possible limits the interest." },
      { type: "h2", text: "Before 15 December" },
      { type: "ul", items: [
        "Estimate the year's income from all sources, including interest, rent and capital gains booked so far.",
        "Subtract TDS already deducted (check Form 26AS or the Annual Information Statement).",
        "Pay any shortfall on the e-filing portal using challan ITNS 280, choosing \"Advance Tax\".",
      ] },
    ],
    sources: [{ label: "incometax.gov.in", url: "https://www.incometax.gov.in/iec/foportal/" }],
  },
  {
    slug: "new-vs-old-tax-regime",
    title: "New or old tax regime: which one suits you?",
    excerpt: "The new regime is now the default and costs less tax for most people. Here is how to check whether the old regime still works out better for you.",
    category: "tax",
    author: AUTHOR,
    published: "2026-11-20",
    updated: "2026-11-20",
    readingMinutes: 5,
    body: [
      { type: "p", text: "Individuals can choose between two ways of computing income tax. The new regime has lower slab rates but allows very few deductions. The old regime has higher rates but lets you claim deductions such as 80C investments, health insurance, HRA and home loan interest. The new regime applies unless you opt out." },
      { type: "h2", text: "New regime slabs" },
      { type: "table", head: ["Taxable income", "Rate"], rows: [
        ["Up to ₹4,00,000", "Nil"],
        ["₹4,00,001 – ₹8,00,000", "5%"],
        ["₹8,00,001 – ₹12,00,000", "10%"],
        ["₹12,00,001 – ₹16,00,000", "15%"],
        ["₹16,00,001 – ₹20,00,000", "20%"],
        ["₹20,00,001 – ₹24,00,000", "25%"],
        ["Above ₹24,00,000", "30%"],
      ] },
      { type: "p", text: "A rebate means no tax is payable when taxable income is ₹12 lakh or less. Salaried individuals also get a ₹75,000 standard deduction, so a salary of up to ₹12.75 lakh is effectively tax-free. Health and education cess of 4% applies on top of the tax." },
      { type: "h2", text: "What the old regime still offers" },
      { type: "ul", items: [
        "Up to ₹1,50,000 under section 80C (PF, PPF, ELSS, life insurance, children's tuition fees, home loan principal).",
        "Health insurance premiums under section 80D.",
        "House rent allowance (HRA) exemption and interest on a home loan for a self-occupied house (up to ₹2,00,000).",
        "An additional ₹50,000 for NPS contributions, and a ₹50,000 standard deduction for salaried people.",
      ] },
      { type: "h2", text: "A worked example" },
      { type: "p", text: "Take a salary of ₹18 lakh, with ₹4.25 lakh of old-regime deductions (80C ₹1.5 lakh, 80D ₹25,000, home loan interest ₹2 lakh, NPS ₹50,000) plus the standard deduction." },
      { type: "table", head: ["", "New regime", "Old regime"], rows: [
        ["Taxable income", "₹17,25,000", "₹13,25,000"],
        ["Tax including cess", "₹1,50,800", "₹2,18,400"],
      ] },
      { type: "p", text: "Even with substantial deductions, the new regime costs about ₹67,600 less in this example. The old regime tends to win only when deductions are very large, typically with a high HRA claim as well as a home loan." },
      { type: "h2", text: "Switching between regimes" },
      { type: "ul", items: [
        "Salaried individuals and others without business income can choose a regime afresh every year when filing the return.",
        "Those with business or professional income can move back to the old regime only once.",
      ] },
      { type: "note", text: "Run your own figures through our income tax calculator, or ask us to compare both regimes for you." },
    ],
    sources: [{ label: "incometax.gov.in", url: "https://www.incometax.gov.in/iec/foportal/" }],
  },
  {
    slug: "audit-itr-deadline-extended-21-november",
    title: "Audit-case ITR deadline extended to 21 November 2026",
    excerpt: "CBDT Circular 07/2026 moved the return due date for audited taxpayers from 31 October to 21 November, and the audit report date to 21 October.",
    category: "tax",
    author: AUTHOR,
    published: "2026-11-20",
    updated: "2026-11-20",
    readingMinutes: 2,
    body: [
      { type: "p", text: "On 28 September 2026 the Central Board of Direct Taxes issued Circular No. 07/2026, extending two deadlines for Assessment Year 2026-27 (financial year 2025-26)." },
      { type: "table", head: ["What", "Original date", "Extended to"], rows: [
        ["Tax audit report", "30 September 2026", "21 October 2026"],
        ["Income tax return for taxpayers whose accounts must be audited", "31 October 2026", "21 November 2026"],
      ] },
      { type: "h2", text: "Who it covers" },
      { type: "p", text: "The extension applies to taxpayers whose accounts are required to be audited, such as companies, and businesses and professionals whose turnover or receipts exceed the audit limits. Partners of firms that are audited are also covered. It does not apply to returns that were due on 31 July or 31 August." },
      { type: "h2", text: "If the deadline is missed" },
      { type: "p", text: "A return can still be filed late as a belated return, but a late fee applies, interest on unpaid tax continues to run, and certain losses can no longer be carried forward. File by the extended date where possible." },
    ],
    sources: [{ label: "CBDT Circular 07/2026", url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-09/Circular-7-2026.pdf" }],
  },
  {
    slug: "gst-qrmp-scheme-explained",
    title: "GST QRMP scheme: quarterly returns, monthly payments",
    excerpt: "Small businesses can file GST returns once a quarter while paying tax monthly. Who qualifies, the due dates, and the two ways to pay.",
    category: "gst",
    author: AUTHOR,
    published: "2026-11-20",
    updated: "2026-11-20",
    readingMinutes: 4,
    body: [
      { type: "p", text: "The Quarterly Return Monthly Payment (QRMP) scheme lets smaller businesses file GSTR-1 and GSTR-3B four times a year instead of twelve. Tax is still paid every month." },
      { type: "h2", text: "Who can opt in" },
      { type: "p", text: "Any registered person whose aggregate turnover in the previous financial year was ₹5 crore or less, and who files GSTR-3B, can opt in. The choice is made on the GST portal for each quarter, between the first day of the second month of the previous quarter and the last day of the first month of the quarter." },
      { type: "h2", text: "Due dates under QRMP" },
      { type: "table", head: ["What", "When"], rows: [
        ["Invoice Furnishing Facility (IFF), optional", "1st–13th of the month after each of the first two months of the quarter"],
        ["Tax payment (PMT-06)", "25th of the month after each of the first two months of the quarter"],
        ["GSTR-1", "13th of the month after the quarter"],
        ["GSTR-3B", "22nd of the month after the quarter in Andhra Pradesh, Telangana and other southern and western states; 24th in the rest"],
      ] },
      { type: "h2", text: "Two ways to pay monthly tax" },
      { type: "ul", items: [
        "Fixed sum method: the portal pre-fills a challan for 35% of the tax paid in cash for the last quarter (or the full amount of the last month, if returns were monthly).",
        "Self-assessment method: work out the actual tax for the month after input tax credit and pay that.",
      ] },
      { type: "h2", text: "Why IFF matters" },
      { type: "p", text: "Business customers can claim input tax credit only once your invoices appear in their GSTR-2B. Uploading B2B invoices through IFF each month (up to ₹50 lakh a month) means customers don't have to wait until the quarter ends for their credit." },
      { type: "note", text: "Late filing attracts a fee for each day of delay, and late payment attracts interest, so it is worth setting reminders for the 13th, 22nd and 25th." },
    ],
    sources: [{ label: "gst.gov.in", url: "https://www.gst.gov.in/" }],
  },
  {
    slug: "tds-return-due-dates-and-penalties",
    title: "TDS returns: due dates, late fees and penalties",
    excerpt: "Quarterly TDS statements, monthly deposits and certificates: the calendar every deductor needs, and what a delay costs.",
    category: "regulatory",
    author: AUTHOR,
    published: "2026-11-20",
    updated: "2026-11-20",
    readingMinutes: 4,
    body: [
      { type: "p", text: "Deducting tax at source (TDS) involves three obligations: depositing the tax, filing a quarterly statement, and issuing certificates to the people whose tax was deducted. Each has its own deadline." },
      { type: "h2", text: "Depositing TDS" },
      { type: "p", text: "Tax deducted in a month must be deposited by the 7th of the next month. For tax deducted in March, the deadline is 30 April." },
      { type: "h2", text: "Quarterly TDS statements" },
      { type: "table", head: ["Quarter", "Due date"], rows: [
        ["April – June", "31 July"],
        ["July – September", "31 October"],
        ["October – December", "31 January"],
        ["January – March", "31 May"],
      ] },
      { type: "p", text: "Form 24Q covers salaries, 26Q other payments to residents, and 27Q payments to non-residents." },
      { type: "h2", text: "Certificates" },
      { type: "ul", items: [
        "Form 16 (salary): by 15 June after the end of the financial year.",
        "Form 16A (other payments): within 15 days of the due date of the quarterly statement.",
      ] },
      { type: "h2", text: "What a delay costs" },
      { type: "ul", items: [
        "Late statement: a fee of ₹200 for each day of delay, up to the amount of TDS in the statement.",
        "Late deposit: interest of 1.5% a month from the date of deduction to the date of deposit.",
        "Not deducting at all: interest of 1% a month, and the expense may be partly disallowed.",
        "Statement not filed within a year of the due date: a penalty of ₹10,000 to ₹1,00,000 may also apply.",
      ] },
    ],
    sources: [
      { label: "incometax.gov.in", url: "https://www.incometax.gov.in/iec/foportal/" },
      { label: "TRACES (tdscpc.gov.in)", url: "https://www.tdscpc.gov.in/" },
    ],
  },
  {
    slug: "annual-roc-compliance-companies-llps",
    title: "Annual ROC filings for private companies and LLPs",
    excerpt: "The yearly filings with the Registrar of Companies, their due dates, and why late filing gets expensive quickly.",
    category: "regulatory",
    author: AUTHOR,
    published: "2026-11-20",
    updated: "2026-11-20",
    readingMinutes: 4,
    body: [
      { type: "p", text: "Every company and LLP must file annual returns and financial statements with the Registrar of Companies (ROC) through the MCA portal, even if it had no business during the year." },
      { type: "h2", text: "Private limited companies" },
      { type: "table", head: ["Filing", "Due"], rows: [
        ["Annual general meeting (AGM)", "By 30 September (the first AGM within 9 months of the first year-end)"],
        ["ADT-1: auditor appointment", "Within 15 days of the AGM"],
        ["AOC-4: financial statements", "Within 30 days of the AGM"],
        ["MGT-7 / MGT-7A: annual return", "Within 60 days of the AGM"],
        ["DPT-3: return of deposits and outstanding loans", "30 June"],
        ["MSME-1: dues to MSME suppliers (if any)", "30 April and 31 October"],
      ] },
      { type: "p", text: "Companies must also hold at least four board meetings a year, with no more than 120 days between them. Small companies and one-person companies need only two, one in each half of the year." },
      { type: "h2", text: "LLPs" },
      { type: "table", head: ["Filing", "Due"], rows: [
        ["Form 11: annual return", "30 May"],
        ["Form 8: statement of accounts and solvency", "30 October"],
      ] },
      { type: "p", text: "An LLP's accounts must be audited if its turnover exceeds ₹40 lakh or its partners' contribution exceeds ₹25 lakh." },
      { type: "h2", text: "Late filing" },
      { type: "p", text: "Late ROC forms carry an additional fee of ₹100 a day for each form, with no upper limit, so a missed year can cost far more than the filing itself. Continued non-filing can lead to directors or designated partners being disqualified and the company or LLP being struck off." },
    ],
    sources: [{ label: "mca.gov.in", url: "https://www.mca.gov.in/" }],
  },
  {
    slug: "choosing-a-business-structure",
    title: "Proprietorship, partnership, LLP or company?",
    excerpt: "How the common business structures compare on liability, compliance, tax and fundraising, so you can pick the right one at the start.",
    category: "business",
    author: AUTHOR,
    published: "2026-11-20",
    updated: "2026-11-20",
    readingMinutes: 5,
    body: [
      { type: "p", text: "The structure you choose decides who is liable for the business's debts, how much paperwork you will have each year, how profits are taxed, and how easily you can bring in investors. Changing it later is possible but takes time and money." },
      { type: "table", head: ["", "Proprietorship", "Partnership firm", "LLP", "Private limited company"], rows: [
        ["Owners", "One", "2 or more partners", "2 or more partners", "2 or more shareholders and directors"],
        ["Liability", "Unlimited", "Unlimited", "Limited to contribution", "Limited to shares"],
        ["Setting up", "GST / Udyam registration as needed", "Partnership deed, registration with the state Registrar of Firms", "Incorporation with MCA", "Incorporation with MCA"],
        ["Annual compliance", "Low", "Low", "Moderate", "Highest"],
        ["Raising equity", "Not possible", "Difficult", "Limited", "Easiest"],
      ] },
      { type: "h2", text: "Proprietorship" },
      { type: "p", text: "The simplest and cheapest to run. The business and the owner are the same person for tax and law, so profits are taxed at individual slab rates and personal assets are exposed to business debts. It suits freelancers and small traders starting out." },
      { type: "h2", text: "Partnership firm and LLP" },
      { type: "p", text: "Both are taxed at a flat 30% (plus surcharge and cess), and partners can be paid salary and interest within limits. The key difference is liability: an LLP protects partners' personal assets, while a traditional partnership does not. LLPs file two annual forms with the ROC." },
      { type: "h2", text: "Private limited company" },
      { type: "p", text: "A company is a separate legal entity with limited liability and can issue shares to investors, which makes it the usual choice for businesses planning to grow or raise funds. Companies may opt for a concessional tax rate of 22% (about 25.17% including surcharge and cess). In return, every company needs a statutory audit, board meetings, an AGM and several annual ROC filings." },
      { type: "h2", text: "A rule of thumb" },
      { type: "ul", items: [
        "Testing an idea alone, with modest turnover: proprietorship.",
        "Professionals or family businesses wanting limited liability with light compliance: LLP.",
        "Plans to raise investment, issue ESOPs or scale up: private limited company.",
      ] },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
