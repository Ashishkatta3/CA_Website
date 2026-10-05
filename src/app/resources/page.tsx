import type { Metadata } from "next";
import Link from "next/link";
import { Icon, type IconName } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { Chevron, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Resources",
  description: "Compliance due dates, calculators, tax and GST updates, and useful official links.",
};

const hubs: { icon: IconName; title: string; text: string; href: string; tone: string }[] = [
  { icon: "calendar", title: "Important Dates", text: "GST, TDS, income tax and ROC due dates, month by month.", href: "/resources/important-dates", tone: "bg-black text-white" },
  { icon: "calculator", title: "Calculators", text: "Estimate income tax, GST and loan EMIs in seconds.", href: "/resources/calculators", tone: "bg-white" },
  { icon: "document", title: "Knowledge Center", text: "Tax, GST and regulatory updates, explained in plain language.", href: "/resources/knowledge", tone: "bg-white" },
];

const officialLinks = [
  { name: "Income Tax e-Filing", href: "https://www.incometax.gov.in" },
  { name: "GST Portal", href: "https://www.gst.gov.in" },
  { name: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
  { name: "TRACES (TDS)", href: "https://www.tdscpc.gov.in" },
  { name: "CBIC", href: "https://www.cbic.gov.in" },
  { name: "EPFO", href: "https://www.epfindia.gov.in" },
  { name: "Udyam Registration", href: "https://udyamregistration.gov.in" },
  { name: "ICAI", href: "https://www.icai.org" },
];

export default function ResourcesPage() {
  return (
    <div className="bg-canvas pb-24">
      <Container className="pt-16 sm:pt-20">
        <Reveal>
          <h1 className="type-hero max-w-3xl">
            Resources. <span className="text-ink-2">Tools and updates to keep you a step ahead.</span>
          </h1>
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {hubs.map((h, i) => (
            <li key={h.href}>
              <Reveal delay={i * 80} className="h-full">
                <Link href={h.href} className={`group flex h-full min-h-[320px] flex-col justify-between rounded-[28px] p-8 transition-transform duration-500 ease-apple hover:scale-[1.015] ${h.tone}`}>
                  <Icon name={h.icon} className="size-10" strokeWidth={1.3} />
                  <div>
                    <h2 className="font-display text-[28px] font-semibold">{h.title}</h2>
                    <p className={`mt-2 text-[15px] ${h.tone.includes("black") ? "text-[#a1a1a6]" : "text-ink-2"}`}>{h.text}</p>
                    <span className={`mt-5 inline-flex items-center gap-1 text-[15px] ${h.tone.includes("black") ? "text-link-on-dark" : "text-link"}`}>
                      Open <Chevron className="size-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <section id="links" className="mt-20 scroll-mt-6">
          <h2 className="font-display text-[28px] font-semibold">
            Useful links. <span className="text-ink-2">Official portals in one place.</span>
          </h2>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-[22px] bg-line/70 sm:grid-cols-2 lg:grid-cols-4">
            {officialLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="group flex h-full items-center justify-between gap-3 bg-white p-6 hover:bg-[#fbfbfd]">
                  <span className="flex items-center gap-3 text-[15px] font-semibold">
                    <Icon name="link" className="size-5 text-ink-2" />
                    {l.name}
                  </span>
                  <span aria-hidden="true" className="text-ink-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[12px] text-ink-3">External websites open in a new tab. We are not responsible for their content.</p>
        </section>
      </Container>
    </div>
  );
}
