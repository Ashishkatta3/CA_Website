// Rates used by the calculators. Update whenever the law changes and bump
// `label` so visitors can see which rules the numbers are based on.

export const incomeTaxConfig = {
  label: "New tax regime · slabs as per FY 2025-26 — verify for the current year",
  slabs: [
    { upTo: 400000, rate: 0 },
    { upTo: 800000, rate: 0.05 },
    { upTo: 1200000, rate: 0.1 },
    { upTo: 1600000, rate: 0.15 },
    { upTo: 2000000, rate: 0.2 },
    { upTo: 2400000, rate: 0.25 },
    { upTo: Infinity, rate: 0.3 },
  ],
  standardDeduction: 75000,
  rebateIncomeLimit: 1200000,
  rebateMax: 60000,
  cess: 0.04,
  surchargeThreshold: 5000000,
};

export const gstRates = [5, 18, 40];
