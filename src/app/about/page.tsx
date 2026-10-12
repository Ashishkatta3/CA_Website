import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { LocalNav } from "@/components/LocalNav";
import { Reveal } from "@/components/Reveal";
import { Button, Container } from "@/components/ui";
import { approach, managingDirector, team, whyChoose, type TeamMember } from "@/content/about";
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
              <p>
                <span className="font-semibold text-ink">{firm.name}</span> is a firm of Chartered Accountants and Business Advisory Professionals
                dedicated to delivering strategic, reliable and value-driven solutions.
              </p>
              <p>
                We assist businesses, entrepreneurs, professionals and organisations in navigating taxation, accounting, regulatory compliance and
                financial management requirements with confidence and efficiency.
              </p>
            </div>
          </Reveal>
          <dl className="mx-auto mt-16 grid max-w-4xl gap-px overflow-hidden rounded-[22px] bg-line/70 sm:grid-cols-3">
            {[
              { k: "Registration", v: firm.frn },
              { k: "Office", v: `${firm.address.city}, ${firm.address.state}` },
              { k: "Practice areas", v: "Tax · GST · Audit · Advisory" },
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
            <h2 className="type-headline text-center">Leadership Associates.</h2>
          </Reveal>
          <Reveal>
            <div className="mx-auto mt-14 max-w-[438px]">
              <TeamCard member={managingDirector} />
            </div>
          </Reveal>
          <ul className="mx-auto mt-5 grid max-w-4xl gap-5 sm:grid-cols-2">
            {team.map((m, i) => (
              <li key={i}>
                <Reveal delay={(i % 2) * 80}>
                  <TeamCard member={m} />
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="approach" className="scroll-mt-14 bg-night py-24 text-cream">
        <Container>
          <Reveal>
            <h2 className="type-headline text-center">Our approach.</h2>
          </Reveal>
          <ol className="mt-14 grid gap-5 md:grid-cols-2">
            {approach.map((a, i) => (
              <li key={a.title}>
                <Reveal delay={(i % 2) * 100}>
                  <div className="rounded-[22px] bg-night-2 p-8">
                    <span className="bg-linear-to-r from-saffron to-[#f6d49a] bg-clip-text font-display text-[17px] font-semibold text-transparent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-display text-[28px] font-semibold">{a.title}</h3>
                    <p className="mt-3 text-mute-dark">{a.text}</p>
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
            <h2 className="type-headline text-center">Why organisations choose MSS.</h2>
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

function TeamCard({ member: m }: { member: TeamMember }) {
  // Show the "CA" designation as a lighter prefix so the name itself leads.
  const [, prefix, name] = m.name.match(/^(CA)\s+(.*)$/) ?? [null, null, m.name];
  return (
    <div className="h-full rounded-[22px] bg-white p-7 text-center">
      {m.photo ? (
        <Image
          src={m.photo}
          alt={m.name}
          width={640}
          height={800}
          sizes="160px"
          className="mx-auto aspect-[4/5] w-40 rounded-[18px] object-cover"
        />
      ) : (
        <div className="mx-auto grid size-24 place-items-center rounded-full bg-linear-to-br from-pill to-pill-hover font-display text-[28px] font-semibold text-ink-2">
          {m.initials}
        </div>
      )}
      <h3 className="mt-6 text-balance font-display text-[21px] leading-snug font-semibold tracking-[-0.015em] text-ink">
        {prefix && <span className="mr-1.5 font-medium text-ink-3">{prefix}</span>}
        {name}
      </h3>
      <span aria-hidden className="mx-auto mt-3 block h-0.5 w-8 rounded-full bg-saffron" />
      {m.title && (
        <p className="mt-3 text-[12px] font-semibold tracking-[0.14em] text-ink uppercase">{m.title}</p>
      )}
      {m.experience && <p className="mt-3 text-[14.5px] leading-relaxed text-ink-2">{m.experience}</p>}
      {m.qualifications && (
        <ul className="mt-4 flex flex-wrap justify-center gap-1.5">
          {m.qualifications.map((q) => (
            <li key={q} className="rounded-full border border-line px-2.5 py-0.5 text-[11.5px] font-semibold tracking-[0.06em] text-ink">
              {q}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
