import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { serviceGradient } from "@/components/ServiceTile";
import { Button, Chevron, Container } from "@/components/ui";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Income tax, GST, accounting, audit, TDS, corporate compliance and business advisory services.",
};

export default function ServicesPage() {
  return (
    <div className="bg-canvas pb-24">
      <Container className="pt-16 sm:pt-20">
        <Reveal>
          <h1 className="type-hero max-w-3xl">
            Services. <span className="text-ink-2">Everything your finances need, under one roof.</span>
          </h1>
        </Reveal>

        {/* Icon strip, like Apple Store's product row */}
        <nav aria-label="Services" className="no-scrollbar -mx-4 mt-12 flex gap-6 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group flex w-[96px] shrink-0 flex-col items-center gap-2.5 text-center">
              <span className={`grid size-[60px] place-items-center rounded-[16px] bg-linear-to-br text-white transition-transform duration-300 group-hover:scale-105 ${serviceGradient[s.slug]}`}>
                <Icon name={s.icon} className="size-7" />
              </span>
              <span className="text-[13px] leading-tight font-semibold group-hover:text-link">{s.name}</span>
            </Link>
          ))}
        </nav>
      </Container>

      <Container className="mt-16">
        <h2 className="font-display text-[28px] font-semibold">
          All services. <span className="text-ink-2">Pick what you need.</span>
        </h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={(i % 3) * 80} className="h-full">
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-[18px] bg-white p-7 shadow-[2px_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 ease-apple hover:scale-[1.01] hover:shadow-[2px_4px_16px_rgba(0,0,0,0.16)]"
                >
                  <span className={`grid size-12 place-items-center rounded-[13px] bg-linear-to-br text-white ${serviceGradient[s.slug]}`}>
                    <Icon name={s.icon} className="size-6" />
                  </span>
                  <h3 className="mt-6 font-display text-[24px] leading-tight font-semibold">{s.name}</h3>
                  <p className="mt-2 flex-1 text-[15px] text-ink-2">{s.summary}</p>
                  <p className="mt-5 text-[12px] text-ink-3">{s.offerings.length} services included</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-[15px] text-link">
                    Learn more <Chevron className="size-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-[28px] bg-white p-10 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-display text-[24px] font-semibold">Not sure what you need?</p>
            <p className="mt-1 text-ink-2">Describe your situation and we&apos;ll point you to the right service.</p>
          </div>
          <Button href="/contact" className="shrink-0">Ask us</Button>
        </div>
      </Container>
    </div>
  );
}
