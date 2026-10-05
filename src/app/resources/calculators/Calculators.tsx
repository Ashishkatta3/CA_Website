"use client";

import { useState, type ReactNode } from "react";
import { gstRates, incomeTaxConfig as cfg } from "@/content/tax-config";
import { calculatorTabs, type CalcTab } from "./tabs";

const inr = (n: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(Math.round(n));


export function Calculators({ initialTab }: { initialTab: CalcTab }) {
  const [tab, setTab] = useState<CalcTab>(initialTab);
  const select = (id: CalcTab) => {
    setTab(id);
    history.replaceState(null, "", `?tab=${id}`);
  };

  return (
    <>
      <div role="tablist" aria-label="Calculators" className="mx-auto flex w-fit gap-1 rounded-full bg-[#e8e8ed] p-1">
        {calculatorTabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            type="button"
            aria-selected={tab === t.id}
            onClick={() => select(t.id)}
            className={`rounded-full px-5 py-2 text-[15px] transition-all ${tab === t.id ? "bg-white text-ink shadow-sm" : "text-ink-2 hover:text-ink"}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div key={tab} role="tabpanel" className="mt-10 animate-[fadeUp_.5s_var(--ease-apple)]">
        {tab === "income-tax" && <IncomeTax />}
        {tab === "gst" && <Gst />}
        {tab === "emi" && <Emi />}
      </div>
    </>
  );
}

/* ---------- shared bits ---------- */

function Panel({ inputs, results, note }: { inputs: ReactNode; results: ReactNode; note?: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[28px] bg-white">
      <div className="grid md:grid-cols-2">
        <div className="space-y-7 p-7 sm:p-10">{inputs}</div>
        <div className="bg-black p-7 text-white sm:p-10">{results}</div>
      </div>
      {note && <p className="border-t border-line/70 px-7 py-4 text-[12px] text-ink-2 sm:px-10">{note}</p>}
    </div>
  );
}

function MoneyInput({ id, label, value, onChange, max, step = 1000, prefix = "₹", suffix }: { id: string; label: string; value: number; onChange: (n: number) => void; max: number; step?: number; prefix?: string; suffix?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-[14px] font-semibold text-ink-2">{label}</label>
      <div className="mt-2 flex items-center rounded-xl border border-ink-3 px-4 focus-within:border-accent focus-within:ring-4 focus-within:ring-accent/15">
        {prefix && <span className="text-[19px] text-ink-2">{prefix}</span>}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={0}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value)))}
          className="h-12 w-full bg-transparent px-2 font-display text-[21px] font-semibold outline-none"
        />
        {suffix && <span className="text-[15px] text-ink-2">{suffix}</span>}
      </div>
      <input
        type="range"
        aria-label={`${label} slider`}
        min={0}
        max={max}
        step={step}
        value={Math.min(value, max)}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-accent"
      />
    </div>
  );
}

function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (b: boolean) => void; label: string }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4">
      <span className="text-[15px]">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-[31px] w-[51px] shrink-0 rounded-full transition-colors ${checked ? "bg-[#34c759]" : "bg-[#e9e9eb]"}`}
      >
        <span className={`absolute top-[2px] left-[2px] size-[27px] rounded-full bg-white shadow transition-transform ${checked ? "translate-x-5" : ""}`} />
      </button>
    </label>
  );
}

function Big({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[14px] text-[#a1a1a6]">{label}</p>
      <p className="mt-1 font-display text-[44px] leading-none font-semibold tracking-tight sm:text-[52px]">{value}</p>
    </div>
  );
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={`flex justify-between gap-4 py-2.5 text-[15px] ${strong ? "font-semibold" : "text-[#d2d2d7]"}`}>
      <span>{label}</span>
      <span className="tabular-nums">{value}</span>
    </div>
  );
}

/* ---------- Income tax (new regime) ---------- */

function computeIncomeTax(gross: number, salaried: boolean) {
  const taxable = Math.max(0, gross - (salaried ? cfg.standardDeduction : 0));
  let prev = 0;
  const bands = cfg.slabs.map((s) => {
    const portion = Math.max(0, Math.min(taxable, s.upTo) - prev);
    const band = { from: prev, to: s.upTo, rate: s.rate, tax: portion * s.rate };
    prev = s.upTo;
    return band;
  });
  const slabTax = bands.reduce((a, b) => a + b.tax, 0);
  let rebate = 0;
  if (taxable <= cfg.rebateIncomeLimit) rebate = Math.min(slabTax, cfg.rebateMax);
  else rebate = Math.max(0, slabTax - (taxable - cfg.rebateIncomeLimit)); // marginal relief
  const afterRebate = slabTax - rebate;
  const cess = afterRebate * cfg.cess;
  return { taxable, bands, slabTax, rebate, cess, total: afterRebate + cess };
}

function IncomeTax() {
  const [income, setIncome] = useState(1500000);
  const [salaried, setSalaried] = useState(true);
  const r = computeIncomeTax(income, salaried);

  return (
    <Panel
      inputs={
        <>
          <MoneyInput id="income" label="Annual gross income" value={income} onChange={setIncome} max={5000000} step={10000} />
          <Toggle label={`Salaried (standard deduction ${inr(cfg.standardDeduction)})`} checked={salaried} onChange={setSalaried} />
          <div className="rounded-xl bg-canvas p-4 text-[13px] text-ink-2">{cfg.label}</div>
        </>
      }
      results={
        <>
          <Big label="Estimated tax payable" value={inr(r.total)} />
          <p className="mt-2 text-[14px] text-[#a1a1a6]">
            {income > 0 ? `About ${((r.total / income) * 100).toFixed(1)}% of gross income` : " "}
          </p>
          <div className="mt-8 divide-y divide-white/10">
            <Row label="Taxable income" value={inr(r.taxable)} />
            {r.bands.filter((b) => b.tax > 0).map((b) => (
              <Row key={b.from} label={`${b.rate * 100}% on ${inr(b.from)} – ${b.to === Infinity ? "above" : inr(b.to)}`} value={inr(b.tax)} />
            ))}
            {r.rebate > 0 && <Row label="Rebate / marginal relief" value={`− ${inr(r.rebate)}`} />}
            <Row label={`Health & education cess (${cfg.cess * 100}%)`} value={inr(r.cess)} />
            <Row label="Total" value={inr(r.total)} strong />
          </div>
        </>
      }
      note={
        <>
          For information only. Excludes surcharge{r.taxable > cfg.surchargeThreshold ? " (which applies at your income level)" : ""}, special-rate income such as
          capital gains, and the old regime. Please consult us for an accurate computation.
        </>
      }
    />
  );
}

/* ---------- GST ---------- */

function Gst() {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(18);
  const [inclusive, setInclusive] = useState(false);
  const [interstate, setInterstate] = useState(false);

  const base = inclusive ? amount / (1 + rate / 100) : amount;
  const gst = base * (rate / 100);
  const total = base + gst;

  return (
    <Panel
      inputs={
        <>
          <MoneyInput id="amount" label={inclusive ? "Amount (including GST)" : "Amount (excluding GST)"} value={amount} onChange={setAmount} max={1000000} />
          <div>
            <p className="text-[14px] font-semibold text-ink-2">GST rate</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {gstRates.map((r) => (
                <button
                  key={r}
                  type="button"
                  aria-pressed={rate === r}
                  onClick={() => setRate(r)}
                  className={`rounded-full border px-5 py-2 text-[15px] transition-colors ${rate === r ? "border-accent bg-accent text-white" : "border-ink-3 hover:border-ink"}`}
                >
                  {r}%
                </button>
              ))}
              <label className="flex items-center gap-1 rounded-full border border-ink-3 px-3 text-[15px]">
                <span className="sr-only">Custom rate</span>
                <input
                  type="number"
                  min={0}
                  max={100}
                  step={0.01}
                  value={rate}
                  onChange={(e) => setRate(Math.max(0, Number(e.target.value)))}
                  className="w-14 bg-transparent py-2 text-right outline-none"
                />
                %
              </label>
            </div>
          </div>
          <Toggle label="Amount includes GST" checked={inclusive} onChange={setInclusive} />
          <Toggle label="Inter-state supply (IGST)" checked={interstate} onChange={setInterstate} />
        </>
      }
      results={
        <>
          <Big label={inclusive ? "Amount before GST" : "Total including GST"} value={inr(inclusive ? base : total)} />
          <div className="mt-8 divide-y divide-white/10">
            <Row label="Taxable value" value={inr(base)} />
            {interstate ? (
              <Row label={`IGST @ ${rate}%`} value={inr(gst)} />
            ) : (
              <>
                <Row label={`CGST @ ${rate / 2}%`} value={inr(gst / 2)} />
                <Row label={`SGST @ ${rate / 2}%`} value={inr(gst / 2)} />
              </>
            )}
            <Row label="Total GST" value={inr(gst)} />
            <Row label="Invoice value" value={inr(total)} strong />
          </div>
        </>
      }
      note="For information only. The applicable rate depends on the classification of goods or services; confirm the correct rate before invoicing."
    />
  );
}

/* ---------- EMI ---------- */

function Emi() {
  const [principal, setPrincipal] = useState(2500000);
  const [rate, setRate] = useState(9);
  const [years, setYears] = useState(15);

  const n = years * 12;
  const r = rate / 12 / 100;
  const emi = n === 0 ? 0 : r === 0 ? principal / n : (principal * r * (1 + r) ** n) / ((1 + r) ** n - 1);
  const totalPaid = emi * n;

  return (
    <Panel
      inputs={
        <>
          <MoneyInput id="principal" label="Loan amount" value={principal} onChange={setPrincipal} max={20000000} step={50000} />
          <MoneyInput id="rate" label="Interest rate (per annum)" value={rate} onChange={setRate} max={20} step={0.1} prefix="" suffix="%" />
          <MoneyInput id="years" label="Tenure" value={years} onChange={(v) => setYears(Math.round(v))} max={30} step={1} prefix="" suffix="years" />
        </>
      }
      results={
        <>
          <Big label="Monthly EMI" value={inr(emi)} />
          <div className="mt-8 divide-y divide-white/10">
            <Row label="Principal" value={inr(principal)} />
            <Row label="Total interest" value={inr(Math.max(0, totalPaid - principal))} />
            <Row label="Total payable" value={inr(totalPaid)} strong />
          </div>
          {totalPaid > 0 && (
            <div className="mt-8">
              <div className="flex h-2.5 overflow-hidden rounded-full bg-white/10">
                <div className="bg-[#2997ff]" style={{ width: `${(principal / totalPaid) * 100}%` }} />
                <div className="bg-[#bf5af2]" style={{ flex: 1 }} />
              </div>
              <div className="mt-3 flex gap-5 text-[12px] text-[#a1a1a6]">
                <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[#2997ff]" />Principal</span>
                <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[#bf5af2]" />Interest</span>
              </div>
            </div>
          )}
        </>
      }
      note="For information only. Actual EMIs depend on the lender's terms, fees and rate resets."
    />
  );
}
