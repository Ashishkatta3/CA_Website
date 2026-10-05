"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Industry } from "@/content/industries";
import { services } from "@/content/services";
import { Icon } from "./Icon";
import { Button, MoreLink } from "./ui";

const serviceName = (slug: string) => services.find((s) => s.slug === slug)?.name ?? slug;

export function IndustryTabs({ industries, syncHash = false }: { industries: Industry[]; syncHash?: boolean }) {
  const [activeId, setActiveId] = useState(industries[0].id);
  const active = industries.find((i) => i.id === activeId) ?? industries[0];

  useEffect(() => {
    if (!syncHash) return;
    const fromHash = () => {
      const id = window.location.hash.slice(1);
      if (industries.some((i) => i.id === id)) {
        setActiveId(id);
        document.getElementById("industry-tabs")?.scrollIntoView({ block: "start" });
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [industries, syncHash]);

  const select = (id: string) => {
    setActiveId(id);
    if (syncHash) history.replaceState(null, "", `#${id}`);
  };

  return (
    <div id="industry-tabs" className="scroll-mt-20">
      <div role="tablist" aria-label="Who we serve" className="no-scrollbar -mx-4 flex snap-x gap-2 overflow-x-auto px-4 sm:mx-0 sm:justify-center sm:gap-6 sm:px-0">
        {industries.map((i) => {
          const selected = i.id === active.id;
          return (
            <button
              key={i.id}
              role="tab"
              type="button"
              id={`tab-${i.id}`}
              aria-selected={selected}
              aria-controls={`panel-${i.id}`}
              onClick={() => select(i.id)}
              className={`group flex min-w-[92px] shrink-0 snap-start flex-col items-center gap-2 border-b-2 px-2 pb-3 transition-colors ${selected ? "border-ink text-ink" : "border-transparent text-ink-2 hover:text-ink"}`}
            >
              <Icon name={i.icon} className="size-7" />
              <span className="text-center text-[12px] leading-tight font-semibold">{i.name}</span>
            </button>
          );
        })}
      </div>

      <div
        key={active.id}
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        className="mt-10 grid animate-[fadeUp_.6s_var(--ease-apple)] gap-6 rounded-[28px] bg-white p-8 sm:p-12 md:grid-cols-2 md:gap-12"
      >
        <div>
          <p className="type-eyebrow text-ink-2">{active.name}</p>
          <h3 className="type-tile mt-2">{active.headline}</h3>
          <p className="mt-4 text-ink-2">{active.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Button href={`/contact?for=${active.id}`}>Talk to us</Button>
            {!syncHash && <MoreLink href={`/industries#${active.id}`}>More for {active.name.toLowerCase()}</MoreLink>}
          </div>
        </div>
        <div>
          <p className="mb-4 text-[14px] font-semibold text-ink-2">Typically helps with</p>
          <ul className="space-y-3">
            {active.needs.map((n) => (
              <li key={n} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#e8f2fd] text-accent">
                  <Icon name="check" className="size-3" strokeWidth={2.5} />
                </span>
                {n}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-2">
            {active.services.map((slug) => (
              <Link key={slug} href={`/services/${slug}`} className="rounded-full border border-line px-3.5 py-1.5 text-[13px] text-ink transition-colors hover:border-ink">
                {serviceName(slug)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
