import type { IconName } from "@/components/Icon";

export type Industry = {
  id: string;
  name: string;
  icon: IconName;
  headline: string;
  description: string;
  needs: string[];
  services: string[]; // service slugs
};

export const industries: Industry[] = [
  {
    id: "startups",
    name: "Startups",
    icon: "spark",
    headline: "Build on solid ground.",
    description: "Get the structure, registrations and books right from day one, so you can focus on growth and be ready when investors ask.",
    needs: ["Business setup & structuring", "Company / LLP incorporation", "Tax & GST registration", "Accounting from day one", "Compliance calendar", "Financial projections"],
    services: ["corporate", "registrations", "accounting", "gst", "advisory"],
  },
  {
    id: "smb",
    name: "Small & Medium Businesses",
    icon: "store",
    headline: "Run the business. We'll run the compliance.",
    description: "Regular bookkeeping, GST, TDS and tax filings handled on schedule, with reports that show how you're really doing.",
    needs: ["Bookkeeping", "GST returns & reconciliation", "TDS & payroll compliance", "Income tax", "Financial statements", "Tax audit"],
    services: ["accounting", "gst", "tds", "income-tax", "audit"],
  },
  {
    id: "corporates",
    name: "Corporates",
    icon: "building",
    headline: "Assurance at scale.",
    description: "Audit, ROC compliance and advisory support for companies with more complex reporting and governance needs.",
    needs: ["Statutory & internal audit", "Corporate tax", "ROC / MCA compliance", "Internal control review", "Business advisory"],
    services: ["audit", "income-tax", "corporate", "advisory"],
  },
  {
    id: "individuals",
    name: "Individuals",
    icon: "person",
    headline: "Your taxes, simplified.",
    description: "Return filing, planning and notice support for salaried individuals, pensioners, investors and NRIs.",
    needs: ["Income tax return filing", "Tax planning", "Capital gains", "Responding to notices", "Advance tax"],
    services: ["income-tax"],
  },
  {
    id: "professionals",
    name: "Professionals",
    icon: "briefcase",
    headline: "For those who advise, heal and build.",
    description: "Doctors, lawyers, consultants, architects and freelancers — accounting and tax handled so you can focus on your practice.",
    needs: ["Professional income tax", "GST registration & returns", "Books of accounts", "Advance tax", "Tax audit where applicable"],
    services: ["income-tax", "gst", "accounting", "audit"],
  },
  {
    id: "nonprofits",
    name: "Non-Profit Organisations",
    icon: "heart",
    headline: "Compliance that protects your mission.",
    description: "Registrations, audits and filings for trusts, societies and Section 8 companies, so exemptions stay intact.",
    needs: ["Trust / society registration", "Tax-exemption registrations", "Audit", "Return filing", "Accounting"],
    services: ["registrations", "audit", "accounting", "income-tax"],
  },
];
