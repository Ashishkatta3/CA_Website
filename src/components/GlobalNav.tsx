"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { firm, nav, type NavItem } from "@/content/site";
import { LogoMark, Wordmark } from "./Brand";
import { Chevron } from "./ui";

const glass = "bg-nav/86 backdrop-blur-[20px] backdrop-saturate-[1.8]";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label={`${firm.name} — Home`} className={`flex shrink-0 items-center gap-2 ${className}`}>
      <LogoMark className="size-[30px]" detail="compact" />
      <Wordmark className="text-[17px]" />
    </Link>
  );
}

export function GlobalNav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  const active = nav.find((n) => n.label === open && n.groups);

  const enter = (item: NavItem) => {
    window.clearTimeout(closeTimer.current);
    setOpen(item.groups ? item.label : null);
  };
  const leave = () => {
    closeTimer.current = window.setTimeout(() => setOpen(null), 120);
  };
  const closeAll = () => {
    setOpen(null);
    setMobileOpen(false);
    setMobileSection(null);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeAll();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header className="relative z-50">
      <nav aria-label="Global" className={`relative z-20 ${glass}`} onMouseLeave={leave}>
        <div className="mx-auto flex h-12 max-w-[1024px] items-center justify-between px-4 sm:px-6 md:h-11">
          <Logo />

          <ul className="hidden flex-1 items-center justify-evenly pl-8 md:flex">
            {nav.map((item) => (
              <li key={item.label} onMouseEnter={() => enter(item)}>
                <Link
                  href={item.href}
                  onClick={closeAll}
                  onFocus={() => enter(item)}
                  aria-expanded={item.groups ? open === item.label : undefined}
                  className={`block px-2 text-[12px] leading-[44px] tracking-[-0.01em] transition-colors ${open === item.label ? "text-ink" : "text-ink/80 hover:text-ink"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="-mr-2 grid size-10 place-items-center md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => (mobileOpen ? closeAll() : setMobileOpen(true))}
          >
            <span className="relative block h-3 w-[18px]">
              <span className={`absolute left-0 h-[1.5px] w-full bg-ink transition-transform duration-300 ${mobileOpen ? "top-[5px] rotate-45" : "top-0.5"}`} />
              <span className={`absolute left-0 h-[1.5px] w-full bg-ink transition-transform duration-300 ${mobileOpen ? "top-[5px] -rotate-45" : "top-[9px]"}`} />
            </span>
          </button>
        </div>

        {/* Desktop flyout */}
        <div
          className={`absolute inset-x-0 top-full hidden overflow-hidden md:grid ${glass} transition-[grid-template-rows,opacity] duration-300 ease-apple ${active ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"}`}
          onMouseEnter={() => window.clearTimeout(closeTimer.current)}
        >
          <div className="min-h-0">
            {active && (
              <div className="mx-auto flex max-w-[1024px] gap-16 px-6 pt-10 pb-16">
                {active.groups!.map((g) => (
                  <div key={g.title}>
                    <h2 className="mb-3.5 text-[12px] text-ink-2">{g.title}</h2>
                    <ul className={g.primary ? "space-y-2.5" : "space-y-2"}>
                      {g.links.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            onClick={closeAll}
                            className={g.primary ? "font-display text-[24px] leading-[1.17] font-semibold tracking-[0.004em] text-ink hover:text-link" : "text-[12px] font-semibold text-ink/90 hover:text-link"}
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Page blur behind flyout */}
      <div
        aria-hidden="true"
        onMouseEnter={() => setOpen(null)}
        className={`fixed inset-0 z-10 hidden bg-white/30 backdrop-blur-[18px] transition-opacity duration-300 md:block ${active ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      {/* Mobile menu */}
      <div className={`fixed inset-x-0 top-12 bottom-0 z-10 overflow-y-auto bg-nav transition-opacity duration-300 md:hidden ${mobileOpen ? "opacity-100" : "pointer-events-none invisible opacity-0"}`}>
        <ul className="px-10 pt-6 pb-16">
          {nav.map((item) => (
            <li key={item.label} className="border-b border-transparent">
              {item.groups ? (
                <>
                  <button
                    type="button"
                    onClick={() => setMobileSection(mobileSection === item.label ? null : item.label)}
                    aria-expanded={mobileSection === item.label}
                    className="flex w-full items-center justify-between py-2 text-left font-display text-[28px] leading-[1.14] font-semibold text-ink"
                  >
                    {item.label}
                    <Chevron className={`size-4 text-ink-2 transition-transform ${mobileSection === item.label ? "rotate-90" : ""}`} />
                  </button>
                  {mobileSection === item.label && (
                    <div className="space-y-5 pt-2 pb-5">
                      {item.groups.map((g) => (
                        <div key={g.title}>
                          <p className="mb-2 text-[12px] text-ink-2">{g.title}</p>
                          <ul className="space-y-2">
                            {g.links.map((l) => (
                              <li key={l.href}>
                                <Link href={l.href} onClick={closeAll} className="text-[17px] font-semibold text-ink">
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} onClick={closeAll} className="block py-2 font-display text-[28px] leading-[1.14] font-semibold text-ink">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
