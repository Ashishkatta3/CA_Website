import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { LocalNav } from "@/components/LocalNav";
import { Reveal } from "@/components/Reveal";
import { Button, Container } from "@/components/ui";
import { approach, team, whyChoose } from "@/content/about";
import { firm } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${firm.name} — our firm, team and approach.`,
};

const tabs = [
  { id: "profile", label: "Firm Profile" },
  { id: "team", label: "Our Team" },
  { id: "approach", label: "Our Approach" },
  { id: "why", label: "Why Choose Us" },
];

export default function AboutPage() {
  return (
    <>
      <LocalNav title="About" tabs={tabs} cta={{ label: "Contact", href: "/contact" }} />

      <section id="profile" className="scroll-mt-14 bg-white pt-16 pb-24 sm:pt-24">
        <Container>
          <Reveal className="text-center">
            <p className="type-eyebrow text-ink-2">{firm.name}</p>
            <h1 className="type-hero mt-2">Numbers are personal.<br />We treat them that way.</h1>
          </Reveal>
          <Reveal delay={100}>
            <div className="mx-auto mt-14 grid max-w-4xl gap-10 text-[19px] leading-relaxed text-ink-2 md:grid-cols-2">
              {/* Placeholder copy — replace with the firm's real profile. */}
              <p>
                <span className="font-semibold text-ink">{firm.name}</span> is a firm of chartered accountants based in {firm.address.city},
                providing accounting, taxation, audit, compliance and advisory services to individuals and businesses.
              </p>
              <p>
                We combine technical expertise with a practical understanding of how businesses operate — so our clients stay compliant and make
                better-informed financial decisions.
              </p>
            </div>
          </Reveal>
          <dl className="mx-auto mt-16 grid max-w-4xl gap-px overflow-hidden rounded-[22px] bg-line/70 sm:grid-cols-3">
            {[
              { k: "Registration", v: firm.frn },
              { k: "Office", v: `${firm.address.city}, ${firm.address.state}` },
              { k: "Practice areas", v: "Tax · Audit · Accounting · Advisory" },
            ].map((d) => (
              <div key={d.k} className="bg-canvas p-6 text-center">
                <dt className="text-[12px] tracking-wide text-ink-2 uppercase">{d.k}</dt>
                <dd className="mt-2 text-[15px] font-semibold">{d.v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section id="team" className="scroll-mt-14 bg-canvas py-24">
        <Container>
          <Reveal>
            <h2 className="type-headline text-center">The people behind the work.</h2>
          </Reveal>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <li key={i}>
                <Reveal delay={(i % 4) * 80}>
                  <div className="rounded-[22px] bg-white p-7 text-center">
                    <div className="mx-auto grid size-24 place-items-center rounded-full bg-linear-to-br from-[#e8e8ed] to-[#d2d2d7] font-display text-[28px] font-semibold text-ink-2">
                      {m.initials}
                    </div>
                    <p className="mt-5 font-display text-[19px] font-semibold">{m.name}</p>
                    <p className="mt-1 text-[14px] text-ink-2">{m.role}</p>
                    <p className="mt-3 inline-block rounded-full bg-canvas px-3 py-1 text-[12px] font-semibold">{m.qualifications}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="approach" className="scroll-mt-14 bg-black py-24 text-[#f5f5f7]">
        <Container>
          <Reveal>
            <h2 className="type-headline text-center">Our approach.</h2>
          </Reveal>
          <ol className="mt-14 grid gap-5 md:grid-cols-2">
            {approach.map((a, i) => (
              <li key={a.title}>
                <Reveal delay={(i % 2) * 100}>
                  <div className="rounded-[22px] bg-[#1d1d1f] p-8">
                    <span className="bg-linear-to-r from-[#2997ff] to-[#bf5af2] bg-clip-text font-display text-[17px] font-semibold text-transparent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-display text-[28px] font-semibold">{a.title}</h3>
                    <p className="mt-3 text-[#a1a1a6]">{a.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="why" className="scroll-mt-14 bg-white py-24">
        <Container>
          <Reveal>
            <h2 className="type-headline text-center">Why clients choose us.</h2>
          </Reveal>
          <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w) => (
              <li key={w.eyebrow}>
                <Icon name={w.icon} className="size-9 text-accent" />
                <h3 className="mt-4 font-display text-[21px] font-semibold">{w.eyebrow}</h3>
                <p className="mt-1 text-ink-2">{w.title}</p>
              </li>
            ))}
          </ul>
          <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact">Request a consultation</Button>
            <Button href="/careers" variant="secondary">Join our team</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
