import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { LocalNav } from "@/components/LocalNav";
import { Reveal } from "@/components/Reveal";
import { serviceGradient } from "@/components/ServiceTile";
import { Button, Container, MoreLink } from "@/components/ui";
import { processSteps } from "@/content/about";
import { getService, services } from "@/content/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  return service ? { title: service.name, description: service.summary } : {};
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "included", label: "What's included" },
    { id: "process", label: "How it works" },
    ...(service.faqs.length ? [{ id: "faq", label: "FAQ" }] : []),
  ];
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <LocalNav title={service.name} tabs={tabs} cta={{ label: "Enquire", href: `/contact?service=${service.slug}` }} />

      {/* Hero */}
      <section id="overview" className="scroll-mt-14 bg-white pt-16 pb-20 text-center sm:pt-24">
        <Container>
          <Reveal>
            <span className={`mx-auto grid size-20 place-items-center rounded-[22px] bg-linear-to-br text-white shadow-lg ${serviceGradient[service.slug]}`}>
              <Icon name={service.icon} className="size-10" strokeWidth={1.4} />
            </span>
            <p className="type-eyebrow mt-8 text-ink-2">{service.name}</p>
            <h1 className="type-hero mt-2 whitespace-pre-line">{service.headline}</h1>
            <p className="type-intro mx-auto mt-6 max-w-2xl text-ink-2">{service.summary}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={`/contact?service=${service.slug}`}>Request a consultation</Button>
              <MoreLink href="#included">See what&apos;s included</MoreLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Problems */}
      <section className="bg-canvas py-24">
        <Container>
          <Reveal>
            <h2 className="type-headline text-center">Sound familiar?</h2>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {service.problems.map((p, i) => (
              <li key={p}>
                <Reveal delay={(i % 2) * 100} className="h-full">
                  <div className="flex h-full items-start gap-4 rounded-[22px] bg-white p-7">
                    <span className="font-display text-[34px] leading-none text-ink-3">&ldquo;</span>
                    <p className="font-display text-[19px] leading-snug font-semibold">{p}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center text-ink-2">
            Ideal for: <span className="text-ink">{service.whoFor.join(" · ")}</span>
          </p>
        </Container>
      </section>

      {/* Offerings */}
      <section id="included" className="scroll-mt-14 bg-white py-24">
        <Container>
          <Reveal>
            <h2 className="type-headline text-center">What&apos;s included.</h2>
            <p className="type-intro mx-auto mt-4 max-w-2xl text-center text-ink-2">Choose one, or let us handle all of it.</p>
          </Reveal>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-[28px] bg-line/70 sm:grid-cols-2 lg:grid-cols-3">
            {service.offerings.map((o) => (
              <li key={o.title} className="bg-canvas p-8">
                <Icon name="check" className="size-6 text-accent" strokeWidth={2} />
                <h3 className="mt-4 font-display text-[21px] font-semibold">{o.title}</h3>
                <p className="mt-2 text-[15px] text-ink-2">{o.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-14 bg-night py-24 text-cream">
        <Container>
          <Reveal>
            <h2 className="type-headline text-center">How it works.</h2>
          </Reveal>
          <ol className="no-scrollbar mt-14 flex snap-x gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-6 lg:overflow-visible">
            {processSteps.map((s, i) => (
              <li key={s.title} className="w-[220px] shrink-0 snap-start rounded-[22px] bg-night-2 p-6 lg:w-auto">
                <span className="bg-linear-to-r from-saffron to-[#f6d49a] bg-clip-text font-display text-[32px] font-semibold text-transparent">{i + 1}</span>
                <p className="mt-3 text-[15px] leading-snug font-semibold">{s.title}</p>
                <p className="mt-2 text-[13px] text-mute-dark">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section id="faq" className="scroll-mt-14 bg-white py-24">
          <Container className="max-w-[760px]">
            <h2 className="type-headline text-center">Questions? Answers.</h2>
            <div className="mt-12 divide-y divide-line border-y border-line">
              {service.faqs.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-[19px] font-semibold [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Icon name="plus" className="size-5 shrink-0 text-ink-2 transition-transform duration-300 group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 pr-10 text-ink-2">{f.a}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Other services */}
      <section className="bg-canvas py-20">
        <Container>
          <h2 className="font-display text-[28px] font-semibold">Explore other services.</h2>
          <ul className="no-scrollbar -mx-4 mt-8 flex gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
            {others.map((s) => (
              <li key={s.slug} className="shrink-0">
                <Link href={`/services/${s.slug}`} className="group flex w-[210px] flex-col rounded-[18px] bg-white p-6 transition-shadow hover:shadow-lg">
                  <span className={`grid size-10 place-items-center rounded-[11px] bg-linear-to-br text-white ${serviceGradient[s.slug]}`}>
                    <Icon name={s.icon} className="size-5" />
                  </span>
                  <span className="mt-4 text-[15px] font-semibold group-hover:text-link">{s.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-24 text-center">
        <Container>
          <h2 className="type-headline">Ready when you are.</h2>
          <p className="type-intro mx-auto mt-4 max-w-xl text-ink-2">Tell us a little about what you need help with.</p>
          <Button href={`/contact?service=${service.slug}`} className="mt-8">Request a consultation</Button>
        </Container>
      </section>
    </>
  );
}
