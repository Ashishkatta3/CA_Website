// SAMPLE compliance calendar. Due dates change through notifications and
// extensions — verify every entry against official sources (incometax.gov.in,
// gst.gov.in, mca.gov.in) before publishing, and update this file each month.

export type DueDate = {
  date: string; // YYYY-MM-DD
  category: "GST" | "TDS" | "Income Tax" | "ROC";
  title: string;
  note?: string;
};

export const datesLastReviewed = "2026-10-01";

export const importantDates: DueDate[] = [
  { date: "2026-10-07", category: "TDS", title: "Deposit of TDS/TCS deducted in September" },
  { date: "2026-10-11", category: "GST", title: "GSTR-1 for September (monthly filers)" },
  { date: "2026-10-13", category: "GST", title: "GSTR-1 for July–September quarter (QRMP filers)" },
  { date: "2026-10-15", category: "TDS", title: "Quarterly TCS statement for July–September" },
  { date: "2026-10-20", category: "GST", title: "GSTR-3B for September (monthly filers)" },
  { date: "2026-10-22", category: "GST", title: "GSTR-3B for July–September quarter (QRMP filers)", note: "22nd or 24th depending on state" },
  { date: "2026-10-30", category: "ROC", title: "Filing of financial statements with ROC", note: "Within 30 days of the AGM" },
  { date: "2026-10-31", category: "TDS", title: "Quarterly TDS statements for July–September" },
  { date: "2026-10-31", category: "Income Tax", title: "Income tax return for taxpayers subject to audit", note: "Subject to any extension notified" },
  { date: "2026-11-07", category: "TDS", title: "Deposit of TDS/TCS deducted in October" },
  { date: "2026-11-11", category: "GST", title: "GSTR-1 for October (monthly filers)" },
  { date: "2026-11-15", category: "TDS", title: "Issue of quarterly TDS certificates (non-salary)" },
  { date: "2026-11-20", category: "GST", title: "GSTR-3B for October (monthly filers)" },
  { date: "2026-11-29", category: "ROC", title: "Filing of annual return with ROC", note: "Within 60 days of the AGM" },
  { date: "2026-11-30", category: "Income Tax", title: "Income tax return for taxpayers with transfer-pricing reports" },
];
