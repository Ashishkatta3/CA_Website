import Link from "next/link";
import { firm, footerColumns, legalLinks } from "@/content/site";
import { LogoMark, Wordmark } from "./Brand";

export function Footer() {
  return (
    <footer className="bg-canvas text-[12px] leading-[1.33] text-ink-2">
      <div className="mx-auto max-w-[1024px] px-4 sm:px-6">
        <div className="space-y-2 border-b border-line py-4">
          <p>
            The information on this website is for general information only and does not constitute professional advice. Please consult us
            about your specific circumstances before acting on any information here.
          </p>
          <p>
            Tax rates, due dates and calculators are indicative and may change through notifications or amendments. Verify against official
            sources or speak to us before relying on them.
          </p>
        </div>

        <div className="flex items-center gap-3 pt-6">
          <LogoMark className="size-9" />
          <Wordmark caption className="text-[17px]" />
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-6 py-5 sm:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-2 font-semibold text-ink">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-ink hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="border-t border-line py-4">
          <p className="mb-2">
            {firm.address.line1}, {firm.address.line2}, {firm.address.city}, {firm.address.state} {firm.address.pin} ·{" "}
            <a href={firm.phoneHref} className="hover:text-ink hover:underline">{firm.phone}</a> ·{" "}
            <a href={`mailto:${firm.email}`} className="hover:text-ink hover:underline">{firm.email}</a>
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Copyright © {new Date().getFullYear()} {firm.name} All rights reserved. {firm.frn}
            </p>
            <ul className="flex flex-wrap items-center">
              {legalLinks.map((l, i) => (
                <li key={l.href} className="flex items-center">
                  {i > 0 && <span className="mx-2 text-line">|</span>}
                  <Link href={l.href} className="hover:text-ink hover:underline">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
