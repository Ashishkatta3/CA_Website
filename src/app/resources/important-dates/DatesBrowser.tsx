"use client";

import { useState } from "react";
import { categoryColor, useCalendar } from "@/components/UpcomingDates";
import type { DueDate } from "@/content/important-dates";

const filters = ["All", "GST", "TDS", "Income Tax", "ROC"] as const;

export function DatesBrowser() {
  const dates = useCalendar();
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = dates.filter((d) => filter === "All" || d.category === filter);

  const byMonth = new Map<string, DueDate[]>();
  for (const d of shown) {
    const key = new Date(`${d.date}T00:00:00`).toLocaleString("en-IN", { month: "long", year: "numeric" });
    byMonth.set(key, [...(byMonth.get(key) ?? []), d]);
  }

  return (
    <>
      <div role="group" aria-label="Filter by category" className="no-scrollbar mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full bg-pill p-1">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`shrink-0 rounded-full px-4 py-1.5 text-[14px] transition-all ${filter === f ? "bg-white text-ink shadow-sm" : "text-ink-2 hover:text-ink"}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-12 space-y-12">
        {[...byMonth].map(([month, items]) => (
          <section key={month}>
            <h2 className="font-display text-[28px] font-semibold">{month}</h2>
            <ul className="mt-5 divide-y divide-line/70 overflow-hidden rounded-[22px] bg-white">
              {items.map((d) => {
                const date = new Date(`${d.date}T00:00:00`);
                return (
                  <li key={d.id} className="flex items-center gap-5 p-5 sm:px-7">
                    <div className="w-12 shrink-0 text-center">
                      <div className="font-display text-[28px] leading-none font-semibold">{date.getDate()}</div>
                      <div className="text-[12px] text-ink-2 uppercase">{date.toLocaleString("en-IN", { weekday: "short" })}</div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[16px] leading-snug">
                        {d.title}
                        {d.extendedFrom && (
                          <span className="ml-2 inline-block rounded-full bg-saffron-soft px-2 py-0.5 align-middle text-[11px] font-semibold text-accent-ink">Extended</span>
                        )}
                      </p>
                      {d.note && <p className="mt-0.5 text-[13px] text-ink-2">{d.note}</p>}
                      <a href={d.source.url} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-[12px] text-ink-3 underline-offset-2 hover:text-ink hover:underline">
                        Source: {d.source.label} ↗
                      </a>
                    </div>
                    <span className={`hidden shrink-0 rounded-full px-2.5 py-1 text-[12px] font-semibold sm:inline ${categoryColor[d.category]}`}>{d.category}</span>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
        {!shown.length && <p className="text-center text-ink-2">No dates in this category.</p>}
      </div>
    </>
  );
}
