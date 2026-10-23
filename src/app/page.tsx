import Link from "next/link";
import { CardCarousel } from "@/components/CardCarousel";
import { Icon, type IconName } from "@/components/Icon";
import { IndustryTabs } from "@/components/IndustryTabs";
import { Reveal } from "@/components/Reveal";
import { ServiceTile } from "@/components/ServiceTile";
import { Button, Container, MoreLink, SectionHeading } from "@/components/ui";
import { UpcomingDates } from "@/components/UpcomingDates";
import { processSteps, trustPoints, whyChoose } from "@/content/about";
import { importantDates } from "@/content/important-dates";
import { industries } from "@/content/industries";
import { getService, services } from "@/content/services";
import { firm } from "@/content/site";

const featured = ["income-tax", "gst"].map((s) => getService(s)!);
const gridServices = services.filter((s) => !["income-tax", "gst"].includes(s.slug));

const tools: { icon: IconName; title: string; href: string }[] = [
  { icon: "calculator", title: "Income Tax Calculator", href: "/resources/calculators?tab=income-tax" },
  { icon: "receipt", title: "GST Calculator", href: "/resources/calculators?tab=gst" },
  { icon: "chart", title: "EMI Calculator", href: "/resources/calculators?tab=emi" },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="overflow-hidden bg-white pt-16 pb-20 text-center sm:pt-24">
        <Container>
          <Reveal>
            <p className="type-eyebrow text-ink-2">{firm.tagline}</p>
            <h1 className="type-hero mx-auto mt-3 max-w-4xl">
              Clarity for every <span className="bg-linear-to-r from-[#1e3a5f] to-[#c27a12] bg-clip-text text-transparent">number</span>.
            </h1>
            <p className="type-intro mx-auto mt-5 max-w-2xl text-ink-2">
              Strategic, reliable and value-driven solutions in taxation, accounting, compliance and business advisory.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Request a consultation</Button>
              <Button href="/services" variant="secondary">Explore our services</Button>
            </div>
            <ul className="mt-10 flex flex-col items-center justify-center gap-x-8 gap-y-2 text-[14px] text-ink-2 sm:flex-row">
              <li className="flex items-center gap-1.5"><Icon name="pin" className="size-4" />{firm.address.city}, India</li>
              <li><a href={firm.phoneHref} className="flex items-center gap-1.5 hover:text-link"><Icon name="phone" className="size-4" />{firm.phone}</a></li>
              <li><a href={`mailto:${firm.email}`} className="flex items-center gap-1.5 hover:text-link"><Icon name="mail" className="size-4" />{firm.email}</a></li>
            </ul>
          </Reveal>
        </Container>

        <Reveal delay={150}>
          <div className="relative mx-auto mt-16 max-w-[1100px] px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-[32px] bg-linear-to-br from-canvas via-[#fbf7ef] to-saffron-soft px-6 py-14 sm:py-20">
              <div aria-hidden="true" className="absolute -top-24 -left-24 size-80 rounded-full bg-ink/10 blur-3xl" />
              <div aria-hidden="true" className="absolute -right-20 -bottom-24 size-80 rounded-full bg-saffron/20 blur-3xl" />
              <ul className="relative grid gap-4 sm:grid-cols-3">
                {[
                  { icon: "percent" as const, title: "Income Tax", text: "Returns, planning & notices", href: "/services/income-tax" },
                  { icon: "receipt" as const, title: "GST", text: "Registration, returns & ITC", href: "/services/gst" },
                  { icon: "shield" as const, title: "Audit", text: "Statutory, tax & internal", href: "/services/audit" },
                ].map((c) => (
                  <li key={c.title}>
                    <Link href={c.href} className="group block h-full rounded-[22px] bg-white/80 p-6 text-left shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur transition-transform duration-500 ease-apple hover:-translate-y-1 hover:scale-[1.02]">
                      <span className="grid size-11 place-items-center rounded-[12px] bg-ink text-white"><Icon name={c.icon} className="size-6" /></span>
                      <p className="mt-5 font-display text-[21px] font-semibold">{c.title}</p>
                      <p className="mt-1 text-[15px] text-ink-2">{c.text}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 2. Trust */}
      <section aria-label="Why clients trust us" className="border-y border-line/60 bg-white">
        <Container className="grid grid-cols-2 gap-x-6 gap-y-8 py-12 md:grid-cols-4">
          {trustPoints.map((t) => (
            <div key={t.title} className="text-center">
              <Icon name={t.icon} className="mx-auto size-8 text-ink" />
              <p className="mt-3 text-[15px] font-semibold">{t.title}</p>
              <p className="mt-1 text-[13px] leading-snug text-ink-2">{t.text}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* 3. Services */}
      <section aria-labelledby="services-heading" className="bg-canvas pt-3">
        <h2 id="services-heading" className="sr-only">Our services</h2>
        <div className="space-y-3">
          <Reveal><ServiceTile service={featured[0]} dark wide /></Reveal>
          <Reveal><ServiceTile service={featured[1]} wide /></Reveal>
        </div>
        <div className="grid gap-3 py-3 sm:px-3 md:grid-cols-2">
          {gridServices.map((s, i) => (
            <Reveal
              key={s.slug}
              delay={(i % 2) * 100}
              className={`h-full ${gridServices.length % 2 && i === gridServices.length - 1 ? "md:col-span-2 md:mx-auto md:w-[calc(50%-0.375rem)]" : ""}`}
            >
              <ServiceTile service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. Who we serve */}
      <section className="bg-canvas py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Who we serve" title={"Built around\nwhat you need."} className="mb-12" />
            <IndustryTabs industries={industries} />
          </Reveal>
        </Container>
      </section>

      {/* 5. Why choose us */}
      <section className="bg-white py-24">
        <Container>
          <Reveal>
            <h2 className="type-headline mb-10 max-w-2xl">Why work with us.</h2>
          </Reveal>
        </Container>
        <CardCarousel label="Reasons to work with us">
          {whyChoose.map((w, i) => (
            <li key={w.eyebrow} className="flex h-[400px] w-[300px] shrink-0 snap-start flex-col justify-between rounded-[28px] bg-canvas p-8 transition-transform duration-500 ease-apple hover:scale-[1.015] sm:h-[460px] sm:w-[360px]">
              <div>
                <p className="text-[12px] font-semibold tracking-wide text-ink-2 uppercase">{String(i + 1).padStart(2, "0")} · {w.eyebrow}</p>
                <p className="mt-3 font-display text-[28px] leading-[1.14] font-semibold">{w.title}</p>
              </div>
              <Icon name={w.icon} className="size-14 text-ink" strokeWidth={1.2} />
            </li>
          ))}
        </CardCarousel>
      </section>

      {/* 6. How it works */}
      <section className="bg-night py-24 text-cream">
        <Container>
          <Reveal>
            <SectionHeading dark eyebrow="How it works" title={"From first call\nto ongoing support."} intro="Here's what happens after you get in touch." />
          </Reveal>
          <ol className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => (
              <li key={s.title} className="border-t border-white/15 pt-6">
                <Reveal delay={(i % 3) * 100}>
                  <span className="bg-linear-to-r from-saffron to-[#f6d49a] bg-clip-text font-display text-[48px] leading-none font-semibold text-transparent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 font-display text-[21px] font-semibold">{s.title}</p>
                  <p className="mt-2 text-[15px] text-mute-dark">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <div className="mt-16 text-center">
            <Button href="/contact">Start with step one</Button>
          </div>
        </Container>
      </section>

      {/* 7. Resources */}
      <section className="bg-canvas py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Resources" title={"Stay ahead of\nevery deadline."} className="mb-14" />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-5">
            <Reveal className="md:col-span-3">
              <div className="h-full rounded-[28px] bg-white p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-[24px] font-semibold">Upcoming due dates</h3>
                  <MoreLink href="/resources/important-dates" className="shrink-0 text-[15px]">View all</MoreLink>
                </div>
                <div className="mt-2">
                  <UpcomingDates dates={importantDates} />
                </div>
              </div>
            </Reveal>
            <div className="grid gap-5 md:col-span-2">
              <Reveal delay={100}>
                <div className="rounded-[28px] bg-white p-8">
                  <h3 className="font-display text-[24px] font-semibold">Calculators</h3>
                  <ul className="mt-4 space-y-1">
                    {tools.map((t) => (
                      <li key={t.title}>
                        <Link href={t.href} className="group flex items-center gap-3 rounded-xl py-2 text-[15px] hover:text-link">
                          <Icon name={t.icon} className="size-5 text-ink-2 group-hover:text-link" />
                          {t.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <Link href="/resources/knowledge" className="group block rounded-[28px] bg-ink p-8 text-white">
                  <Icon name="document" className="size-8" />
                  <h3 className="mt-6 font-display text-[24px] font-semibold">Knowledge Center</h3>
                  <p className="mt-1 text-[15px] text-mute-dark">Tax, GST and regulatory updates explained simply.</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[15px] text-link-on-dark group-hover:underline">Read updates</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Closing CTA */}
      <section className="bg-white py-28 text-center">
        <Container>
          <Reveal>
            <h2 className="type-headline">Let&apos;s talk about<br />your requirement.</h2>
            <p className="type-intro mx-auto mt-4 max-w-xl text-ink-2">Tell us what you need help with and we&apos;ll get back to you.</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Request a consultation</Button>
              <MoreLink href={firm.phoneHref}>Or call {firm.phone}</MoreLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
