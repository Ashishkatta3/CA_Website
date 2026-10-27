// Compliance calendar.
//
// Recurring statutory due dates are generated from the rules below, so the
// calendar never runs out. Extensions and one-off deadlines live in
// calendar-updates.json, which the daily updater maintains from official
// government sources only (see docs/calendar-updater.md).

import updates from "./calendar-updates.json";

export type Category = "GST" | "TDS" | "Income Tax" | "ROC";
export type Source = { label: string; url: string };

export type DueDate = {
  id: string; // "<rule>@<original YYYY-MM-DD>" — used as the override key
  date: string; // YYYY-MM-DD
  category: Category;
  title: string;
  note?: string;
  source: Source;
  extendedFrom?: string; // original date, when an official extension applies
};

type Override = { key: string; date: string; note?: string; source: Source };
type Updates = { lastChecked: string; overrides: Override[]; events: DueDate[] };

const data = updates as Updates;

export const datesLastReviewed = data.lastChecked;

const INCOME_TAX: Source = { label: "incometax.gov.in", url: "https://www.incometax.gov.in/iec/foportal/" };
const TRACES: Source = { label: "TRACES (tdscpc.gov.in)", url: "https://www.tdscpc.gov.in/" };
const GST: Source = { label: "gst.gov.in", url: "https://www.gst.gov.in/" };
const MCA: Source = { label: "mca.gov.in", url: "https://www.mca.gov.in/" };

const MONTHS = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const prevMonth = (m: number) => MONTHS[m === 1 ? 12 : m - 1];
// Financial year that ended on or before month m of year y, e.g. "2025-26".
const fyEnded = (y: number, m: number) => {
  const start = m >= 4 ? y - 1 : y - 2;
  return `${start}-${String(start + 1).slice(2)}`;
};
// Quarter that ended before month m, e.g. "July–September 2026".
const quarterBefore = (y: number, m: number) => {
  const end = [3, 6, 9, 12].filter((q) => q < m).pop() ?? 12;
  const endYear = end === 12 && m <= 3 ? y - 1 : y;
  return `${MONTHS[end - 2]}–${MONTHS[end]} ${endYear}`;
};

type Occurrence = { day: number; title: string; note?: string } | null;
type Rule = { id: string; category: Category; source: Source; occurs: (y: number, m: number) => Occurrence };

const AFTER_QUARTER = [1, 4, 7, 10];

const rules: Rule[] = [
  // ── Monthly ────────────────────────────────────────────────
  { id: "tds-deposit", category: "TDS", source: INCOME_TAX, occurs: (_, m) =>
    m === 4
      ? { day: 30, title: "Deposit of TDS deducted in March" }
      : { day: 7, title: `Deposit of TDS/TCS deducted in ${prevMonth(m)}` } },
  { id: "tcs-deposit-march", category: "TDS", source: INCOME_TAX, occurs: (_, m) =>
    m === 4 ? { day: 7, title: "Deposit of TCS collected in March" } : null },
  { id: "gstr1-monthly", category: "GST", source: GST, occurs: (_, m) =>
    ({ day: 11, title: `GSTR-1 for ${prevMonth(m)} (monthly filers)` }) },
  { id: "gstr3b-monthly", category: "GST", source: GST, occurs: (_, m) =>
    ({ day: 20, title: `GSTR-3B for ${prevMonth(m)} (monthly filers)` }) },
  { id: "pmt06", category: "GST", source: GST, occurs: (_, m) =>
    AFTER_QUARTER.includes(m) ? null : { day: 25, title: `GST payment (PMT-06) for ${prevMonth(m)} (QRMP filers)` } },

  // ── Quarterly ──────────────────────────────────────────────
  { id: "gstr1-qrmp", category: "GST", source: GST, occurs: (y, m) =>
    AFTER_QUARTER.includes(m) ? { day: 13, title: `GSTR-1 for ${quarterBefore(y, m)} (QRMP filers)` } : null },
  { id: "cmp08", category: "GST", source: GST, occurs: (y, m) =>
    AFTER_QUARTER.includes(m) ? { day: 18, title: `CMP-08 for ${quarterBefore(y, m)} (composition taxpayers)` } : null },
  { id: "gstr3b-qrmp", category: "GST", source: GST, occurs: (y, m) =>
    AFTER_QUARTER.includes(m)
      ? { day: 22, title: `GSTR-3B for ${quarterBefore(y, m)} (QRMP filers)`, note: "22nd in Andhra Pradesh and Telangana; 24th in some other states" }
      : null },
  { id: "tcs-statement", category: "TDS", source: TRACES, occurs: (y, m) =>
    [1, 5, 7, 10].includes(m) ? { day: 15, title: `Quarterly TCS statement for ${quarterBefore(y, m === 5 ? 4 : m)}` } : null },
  { id: "form27d", category: "TDS", source: TRACES, occurs: (y, m) =>
    [1, 5, 7, 10].includes(m) ? { day: 30, title: `Issue of TCS certificates (Form 27D) for ${quarterBefore(y, m === 5 ? 4 : m)}` } : null },
  { id: "tds-statement", category: "TDS", source: TRACES, occurs: (y, m) =>
    [1, 5, 7, 10].includes(m) ? { day: 31, title: `Quarterly TDS statements for ${quarterBefore(y, m === 5 ? 4 : m)}` } : null },
  { id: "form16a", category: "TDS", source: TRACES, occurs: (y, m) =>
    [2, 6, 8, 11].includes(m) ? { day: 15, title: `Issue of TDS certificates (Form 16A) for ${quarterBefore(y, m - 1 === 5 ? 4 : m - 1)}` } : null },
  { id: "advance-tax", category: "Income Tax", source: INCOME_TAX, occurs: (_, m) => {
    const pct = { 6: 15, 9: 45, 12: 75, 3: 100 }[m];
    return pct ? { day: 15, title: `Advance tax instalment (${pct}% of tax for the year)` } : null;
  } },

  // ── Annual ─────────────────────────────────────────────────
  { id: "gstr4", category: "GST", source: GST, occurs: (y, m) =>
    m === 4 ? { day: 30, title: `GSTR-4 annual return for FY ${fyEnded(y, m)} (composition taxpayers)` } : null },
  { id: "msme1", category: "ROC", source: MCA, occurs: (_, m) =>
    m === 4 ? { day: 30, title: "MSME Form 1 for October–March (dues to MSME suppliers)" }
    : m === 10 ? { day: 31, title: "MSME Form 1 for April–September (dues to MSME suppliers)" }
    : null },
  { id: "llp11", category: "ROC", source: MCA, occurs: (y, m) =>
    m === 5 ? { day: 30, title: `LLP annual return (Form 11) for FY ${fyEnded(y, m)}` } : null },
  { id: "form16", category: "TDS", source: TRACES, occurs: (y, m) =>
    m === 6 ? { day: 15, title: `Issue of salary TDS certificates (Form 16) for FY ${fyEnded(y, m)}` } : null },
  { id: "dpt3", category: "ROC", source: MCA, occurs: (y, m) =>
    m === 6 ? { day: 30, title: `Return of deposits (DPT-3) for FY ${fyEnded(y, m)}` } : null },
  { id: "itr", category: "Income Tax", source: INCOME_TAX, occurs: (y, m) =>
    m === 7 ? { day: 31, title: `Income tax return for FY ${fyEnded(y, m)} (ITR-1 / ITR-2 filers)` } : null },
  { id: "itr-business", category: "Income Tax", source: INCOME_TAX, occurs: (y, m) =>
    m === 8 ? { day: 31, title: `Income tax return for FY ${fyEnded(y, m)} (ITR-3 / ITR-4, business or profession not subject to audit)` } : null },
  { id: "agm", category: "ROC", source: MCA, occurs: (y, m) =>
    m === 9 ? { day: 30, title: `Last date to hold the AGM for FY ${fyEnded(y, m)} (companies)` } : null },
  { id: "tax-audit-report", category: "Income Tax", source: INCOME_TAX, occurs: (y, m) =>
    m === 9 ? { day: 30, title: `Tax audit report for FY ${fyEnded(y, m)}` } : null },
  { id: "adt1", category: "ROC", source: MCA, occurs: (_, m) =>
    m === 10 ? { day: 14, title: "Intimation of auditor appointment (ADT-1)", note: "Within 15 days of the AGM" } : null },
  { id: "aoc4", category: "ROC", source: MCA, occurs: (y, m) =>
    m === 10 ? { day: 30, title: `Financial statements (AOC-4) for FY ${fyEnded(y, m)}`, note: "Within 30 days of the AGM" } : null },
  { id: "llp8", category: "ROC", source: MCA, occurs: (y, m) =>
    m === 10 ? { day: 30, title: `LLP Statement of Account & Solvency (Form 8) for FY ${fyEnded(y, m)}` } : null },
  { id: "itr-audit", category: "Income Tax", source: INCOME_TAX, occurs: (y, m) =>
    m === 10 ? { day: 31, title: `Income tax return for FY ${fyEnded(y, m)} (taxpayers subject to audit)` } : null },
  { id: "mgt7", category: "ROC", source: MCA, occurs: (y, m) =>
    m === 11 ? { day: 29, title: `Annual return (MGT-7/7A) for FY ${fyEnded(y, m)}`, note: "Within 60 days of the AGM" } : null },
  { id: "itr-tp", category: "Income Tax", source: INCOME_TAX, occurs: (y, m) =>
    m === 11 ? { day: 30, title: `Income tax return for FY ${fyEnded(y, m)} (transfer-pricing cases)` } : null },
  { id: "itr-belated", category: "Income Tax", source: INCOME_TAX, occurs: (y, m) =>
    m === 12 ? { day: 31, title: `Belated income tax return for FY ${fyEnded(y, m)}`, note: "Last date to revise a return without the late-revision fee" } : null },
  { id: "itr-revised", category: "Income Tax", source: INCOME_TAX, occurs: (y, m) =>
    m === 3 ? { day: 31, title: `Last date to file a revised income tax return for FY ${fyEnded(y, m)}`, note: "A fee applies to revisions filed after 31 December" } : null },
  { id: "gstr9", category: "GST", source: GST, occurs: (y, m) =>
    m === 12 ? { day: 31, title: `GSTR-9 / 9C annual return for FY ${fyEnded(y, m)}` } : null },
];

const WINDOW_MONTHS = 6;
// Generate from a little before the window so an extension can move an
// earlier original date into it (e.g. 30 Sep → 21 Oct).
const LOOKBACK_MONTHS = 3;

const iso = (y: number, m: number, d: number) => `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

// Due dates from `today` (YYYY-MM-DD) up to WINDOW_MONTHS ahead, so the
// calendar rolls forward on its own.
export function calendarFrom(today: string): DueDate[] {
  const [startY, startM, startD] = today.split("-").map(Number);
  const overrides = new Map(data.overrides.map((o) => [o.key, o]));

  const generated: DueDate[] = [];
  for (let i = -LOOKBACK_MONTHS; i <= WINDOW_MONTHS; i++) {
    const idx = startY * 12 + (startM - 1) + i;
    const y = Math.floor(idx / 12);
    const m = (idx % 12) + 1;
    for (const rule of rules) {
      const o = rule.occurs(y, m);
      if (!o) continue;
      const date = iso(y, m, o.day);
      const id = `${rule.id}@${date}`;
      const entry: DueDate = { id, date, category: rule.category, title: o.title, note: o.note, source: rule.source };
      const ov = overrides.get(id);
      generated.push(ov ? { ...entry, date: ov.date, note: ov.note ?? entry.note, source: ov.source, extendedFrom: date } : entry);
    }
  }

  const endIdx = startY * 12 + (startM - 1) + WINDOW_MONTHS;
  const windowEnd = iso(Math.floor(endIdx / 12), (endIdx % 12) + 1, startD);
  return [...generated, ...data.events]
    .filter((d) => d.date >= today && d.date < windowEnd)
    .sort((a, b) => a.date.localeCompare(b.date) || a.title.localeCompare(b.title));
}
