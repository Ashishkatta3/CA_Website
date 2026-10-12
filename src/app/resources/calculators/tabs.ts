export const calculatorTabs = [
  { id: "income-tax", label: "Income Tax" },
  { id: "gst", label: "GST" },
  { id: "emi", label: "EMI" },
] as const;
export type CalcTab = (typeof calculatorTabs)[number]["id"];
