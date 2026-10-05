import type { Metadata } from "next";
import { Icon, type IconName } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/ui";
import { firm } from "@/content/site";

export const metadata: Metadata = { title: "Careers", description: `Careers at ${firm.name}` };

// Add openings here. Leave empty to show the "send your CV" message only.
const openings: { title: string; type: string; location: string }[] = [];

const perks: { icon: IconName; title: string; text: string }[] = [
  { icon: "compass", title: "Real exposure", text: "Work across tax, audit, GST and advisory engagements." },
  { icon: "users", title: "Mentorship", text: "Learn directly from experienced chartered accountants." },
  { icon: "chart", title: "Growth", text: "Responsibility grows with your skills." },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-20 text-center sm:pt-24">
        <Container>
          <Reveal>
            <p className="type-eyebrow text-ink-2">Careers</p>
            <h1 className="type-hero mt-2">Do work that matters<br />to real businesses.</h1>
            <p className="type-intro mx-auto mt-6 max-w-2xl text-ink-2">
              We&apos;re always interested in hearing from articled assistants, semi-qualified and qualified professionals.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-canvas py-20">
        <Container>
          <ul className="grid gap-5 md:grid-cols-3">
            {perks.map((p) => (
              <li key={p.title} className="rounded-[22px] bg-white p-8">
                <Icon name={p.icon} className="size-8 text-accent" />
                <h2 className="mt-5 font-display text-[21px] font-semibold">{p.title}</h2>
                <p className="mt-1 text-ink-2">{p.text}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-20 font-display text-[28px] font-semibold">Current openings.</h2>
          {openings.length ? (
            <ul className="mt-6 divide-y divide-line overflow-hidden rounded-[22px] bg-white">
              {openings.map((o) => (
                <li key={o.title} className="flex flex-col justify-between gap-2 p-6 sm:flex-row sm:items-center">
                  <span className="font-semibold">{o.title}</span>
                  <span className="text-[14px] text-ink-2">{o.type} · {o.location}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-ink-2">There are no open positions listed right now.</p>
          )}

          <div className="mt-10 rounded-[22px] bg-black p-10 text-center text-white">
            <p className="font-display text-[24px] font-semibold">Send us your CV.</p>
            <p className="mt-2 text-[#a1a1a6]">Mention the role or area you&apos;re interested in.</p>
            <a href={`mailto:${firm.careersEmail}`} className="mt-6 inline-block rounded-full bg-accent px-6 py-3 transition-colors hover:bg-accent-hover">
              {firm.careersEmail}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
