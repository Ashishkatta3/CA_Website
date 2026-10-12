"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Chevron } from "./ui";

type Tab = { id: string; label: string };

// Apple-style sticky product sub-nav: page title, in-page tabs with scroll-spy, and a CTA.
export function LocalNav({ title, tabs = [], cta }: { title: string; tabs?: Tab[]; cta?: { label: string; href: string } }) {
  const [current, setCurrent] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!tabs.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setCurrent(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px" },
    );
    tabs.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [tabs]);

  return (
    <div className={`sticky top-0 z-40 transition-colors duration-500 ${stuck ? "bg-[rgba(255,255,255,0.8)] backdrop-blur-[20px] backdrop-saturate-[1.8]" : "bg-white"}`}>
      <div className="mx-auto flex h-[52px] max-w-[1024px] items-center justify-between border-b border-line/70 px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <h2 className="font-display text-[19px] font-semibold tracking-[0.012em] sm:text-[21px]">{title}</h2>
          {tabs.length > 0 && (
            <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Sections" className="p-1 md:hidden">
              <Chevron className={`size-3 text-ink-2 transition-transform ${menuOpen ? "-rotate-90" : "rotate-90"}`} />
            </button>
          )}
        </div>
        <div className="flex items-center gap-6">
          {tabs.length > 0 && (
            <ul className="hidden items-center gap-6 md:flex">
              {tabs.map((t) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className={`text-[12px] transition-colors ${current === t.id ? "text-ink" : "text-ink/70 hover:text-link"}`}
                    aria-current={current === t.id ? "true" : undefined}
                  >
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {cta && (
            <Link href={cta.href} className="rounded-full bg-accent px-[11px] py-1 text-[12px] text-white transition-colors hover:bg-accent-hover">
              {cta.label}
            </Link>
          )}
        </div>
      </div>
      {menuOpen && (
        <ul className="border-b border-line/70 bg-white/95 px-6 py-3 backdrop-blur md:hidden">
          {tabs.map((t) => (
            <li key={t.id}>
              <a href={`#${t.id}`} onClick={() => setMenuOpen(false)} className="block py-2 text-[14px] text-ink">
                {t.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
