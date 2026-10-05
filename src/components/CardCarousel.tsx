"use client";

import { useRef, type ReactNode } from "react";
import { Chevron } from "./ui";

// Horizontally scrolling card gallery, like Apple's "Why Apple" row.
export function CardCarousel({ children, label }: { children: ReactNode; label: string }) {
  const track = useRef<HTMLUListElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 800), behavior: "smooth" });
  };

  return (
    <div>
      <ul
        ref={track}
        aria-label={label}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-8 sm:scroll-px-[max(1.5rem,calc((100vw-1024px)/2+1.5rem))] sm:px-[max(1.5rem,calc((100vw-1024px)/2+1.5rem))]"
      >
        {children}
      </ul>
      <div className="mx-auto flex max-w-[1024px] justify-end gap-4 px-4 sm:px-6">
        {([-1, 1] as const).map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => scroll(d)}
            aria-label={d < 0 ? "Previous" : "Next"}
            className="grid size-9 place-items-center rounded-full bg-[#e8e8ed] text-ink/70 transition-colors hover:bg-[#dcdce1] hover:text-ink"
          >
            <Chevron className={`size-3.5 ${d < 0 ? "rotate-180" : ""}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
