// Firm details. Everything here is a PLACEHOLDER — replace with the firm's real
// information before going live. Only publish credentials the firm actually holds.

export const firm = {
  name: "MSS Advisory Services",
  shortName: "MSS",
  monogram: "MSS",
  tagline: "Chartered Accountants · Business Advisory",
  frn: "[ICAI Firm Registration No. — XXXXXXS]",
  offices: [
    {
      label: "Guntur office",
      line1: "3rd Lane, Ashok Nagar",
      line2: "Lakshmipuram",
      city: "Guntur",
      state: "Andhra Pradesh",
      pin: "522002",
      mapQuery: "3rd Lane, Ashok Nagar, Lakshmipuram, Guntur, Andhra Pradesh 522002",
    },
    {
      label: "Vijayawada office",
      line1: "D.No: 40-6/1-7A, Ground Floor, Revenue Colony",
      line2: "Park Street, Near Income Tax Office, Mogalrajpuram",
      city: "Vijayawada",
      state: "Andhra Pradesh",
      pin: "520010",
      mapQuery: "Revenue Colony, Park Street, Mogalrajpuram, Vijayawada, Andhra Pradesh 520010",
    },
  ],
  phone: "+91 99593 96789",
  phoneHref: "tel:+919959396789",
  email: "info@mssadvisoryservices.com",
  careersEmail: "info@mssadvisoryservices.com",
  hours: [
    { days: "Monday – Friday", time: "9:30 AM – 6:30 PM" },
    { days: "Saturday", time: "10:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  founded: null as number | null, // e.g. 2010 — leave null to hide
};

export type NavLink = { label: string; href: string };
export type NavGroup = { title: string; links: NavLink[]; primary?: boolean };
export type NavItem = { label: string; href: string; groups?: NavGroup[] };

export const nav: NavItem[] = [
  {
    label: "About",
    href: "/about",
    groups: [
      {
        title: "Explore the Firm",
        primary: true,
        links: [
          { label: "Firm Profile", href: "/about#profile" },
          { label: "Our Team", href: "/about#team" },
          { label: "Our Approach", href: "/about#approach" },
          { label: "Why Choose Us", href: "/about#why" },
        ],
      },
      {
        title: "More",
        links: [
          { label: "Careers", href: "/careers" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    groups: [
      {
        title: "Explore Services",
        primary: true,
        links: [
          { label: "Income Tax", href: "/services/income-tax" },
          { label: "GST", href: "/services/gst" },
          { label: "TDS Compliance", href: "/services/tds" },
          { label: "Project Reports & Loan Advisory", href: "/services/advisory" },
        ],
      },
      {
        title: "Business Services",
        links: [
          { label: "Company, LLP, Firm & MSME Registrations", href: "/services/registrations" },
          { label: "Accounting & Statutory Compliance", href: "/services/accounting" },
          { label: "Audit & Assurance", href: "/services/audit" },
        ],
      },
      {
        title: "Get Started",
        links: [
          { label: "All Services", href: "/services" },
          { label: "Request a Consultation", href: "/contact" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    groups: [
      {
        title: "Who We Serve",
        primary: true,
        links: [
          { label: "Startups", href: "/industries#startups" },
          { label: "Small & Medium Businesses", href: "/industries#smb" },
          { label: "Corporates", href: "/industries#corporates" },
        ],
      },
      {
        title: "Also For",
        links: [
          { label: "Individuals", href: "/industries#individuals" },
          { label: "Professionals", href: "/industries#professionals" },
          { label: "Non-Profit Organisations", href: "/industries#nonprofits" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    groups: [
      {
        title: "Explore Resources",
        primary: true,
        links: [
          { label: "Important Dates", href: "/resources/important-dates" },
          { label: "Calculators", href: "/resources/calculators" },
          { label: "Knowledge Center", href: "/resources/knowledge" },
        ],
      },
      {
        title: "Updates",
        links: [
          { label: "Tax Updates", href: "/resources/knowledge?c=tax" },
          { label: "GST Updates", href: "/resources/knowledge?c=gst" },
          { label: "Regulatory Updates", href: "/resources/knowledge?c=regulatory" },
        ],
      },
      {
        title: "Tools",
        links: [
          { label: "Income Tax Calculator", href: "/resources/calculators?tab=income-tax" },
          { label: "GST Calculator", href: "/resources/calculators?tab=gst" },
          { label: "EMI Calculator", href: "/resources/calculators?tab=emi" },
          { label: "Useful Links", href: "/resources#links" },
        ],
      },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns: NavGroup[] = [
  {
    title: "Services",
    links: [
      { label: "Income Tax", href: "/services/income-tax" },
      { label: "GST", href: "/services/gst" },
      { label: "TDS", href: "/services/tds" },
      { label: "Project Reports & Loans", href: "/services/advisory" },
      { label: "Registrations", href: "/services/registrations" },
      { label: "Accounting & Compliance", href: "/services/accounting" },
      { label: "Audit", href: "/services/audit" },
    ],
  },
  {
    title: "Who We Serve",
    links: [
      { label: "Startups", href: "/industries#startups" },
      { label: "Small & Medium Businesses", href: "/industries#smb" },
      { label: "Corporates", href: "/industries#corporates" },
      { label: "Individuals", href: "/industries#individuals" },
      { label: "Professionals", href: "/industries#professionals" },
      { label: "Non-Profits", href: "/industries#nonprofits" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Important Dates", href: "/resources/important-dates" },
      { label: "Calculators", href: "/resources/calculators" },
      { label: "Knowledge Center", href: "/resources/knowledge" },
      { label: "Useful Links", href: "/resources#links" },
    ],
  },
  {
    title: "About the Firm",
    links: [
      { label: "Firm Profile", href: "/about#profile" },
      { label: "Our Team", href: "/about#team" },
      { label: "Our Approach", href: "/about#approach" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Request a Consultation", href: "/contact" },
      { label: "Office & Hours", href: "/contact#visit" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Use", href: "/legal/terms" },
  { label: "Disclaimer", href: "/legal/disclaimer" },
  { label: "Sitemap", href: "/sitemap.xml" },
];
