"use client";

import { useSyncExternalStore } from "react";
import type { DueDate } from "@/content/important-dates";

export const categoryColor: Record<DueDate["category"], string> = {
  GST: "text-[#00a37a] bg-[#e6f7f2]",
  TDS: "text-[#7a5af8] bg-[#f1edfe]",
  "Income Tax": "text-accent bg-[#e6ecf2]",
  ROC: "text-[#c25e00] bg-[#fdf1e6]",
};

const fmt = (iso: string) => {
  const d = new Date(`${iso}T00:00:00`);
  return { day: d.getDate(), month: d.toLocaleString("en-IN", { month: "short" }) };
};

// Next few due dates from today (falls back to the first entries before hydration).
export function UpcomingDates({ dates, limit = 4 }: { dates: DueDate[]; limit?: number }) {
  const today = useSyncExternalStore(
    () => () => {},
    () => new Date().toLocaleDateString("en-CA"),
    () => null,
  );

  const upcoming = (today ? dates.filter((d) => d.date >= today) : dates).slice(0, limit);

  if (!upcoming.length) return <p className="text-ink-2">No upcoming dates listed. Check back soon.</p>;

  return (
    <ul className="divide-y divide-line/70">
      {upcoming.map((d) => {
        const { day, month } = fmt(d.date);
        return (
          <li key={d.id} className="flex items-center gap-4 py-4">
            <div className="w-12 shrink-0 text-center">
              <div className="font-display text-[26px] leading-none font-semibold">{day}</div>
              <div className="text-[12px] tracking-wide text-ink-2 uppercase">{month}</div>
            </div>
            <div className="min-w-0">
              <span className={`inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold ${categoryColor[d.category]}`}>{d.category}</span>
              <p className="mt-1 text-[15px] leading-snug">{d.title}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
