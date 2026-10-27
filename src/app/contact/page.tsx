import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { Container } from "@/components/ui";
import { firm } from "@/content/site";
import { EnquiryForm } from "./EnquiryForm";
import { needOptions } from "./options";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Request a consultation or visit our office.",
};

const forToClientType: Record<string, string> = {
  startups: "startup",
  smb: "business",
  corporates: "company",
  individuals: "individual",
  professionals: "professional",
  nonprofits: "nonprofit",
};

export default async function ContactPage(props: PageProps<"/contact">) {
  const sp = await props.searchParams;
  const service = typeof sp.service === "string" ? sp.service : undefined;
  const audience = typeof sp.for === "string" ? sp.for : undefined;
  const defaultNeed = needOptions.some((n) => n.id === service) ? service : undefined;


  return (
    <div className="bg-canvas">
      <section className="bg-white pt-16 pb-16 text-center sm:pt-24">
        <Container>
          <p className="type-eyebrow text-ink-2">Contact us</p>
          <h1 className="type-hero mt-2">Let&apos;s talk.</h1>
          <p className="type-intro mx-auto mt-5 max-w-xl text-ink-2">
            Tell us a little about your requirement and the right person from our team will get back to you.
          </p>
        </Container>
      </section>

      <Container className="grid gap-6 py-16 lg:grid-cols-[1fr_340px]">
        <EnquiryForm defaultNeed={defaultNeed} defaultClientType={audience ? forToClientType[audience] : undefined} />

        <aside id="visit" className="scroll-mt-6 space-y-6">
          <div className="rounded-[28px] bg-white p-8">
            <h2 className="font-display text-[21px] font-semibold">Reach us directly</h2>
            <ul className="mt-5 space-y-5 text-[15px]">
              <li className="flex gap-3">
                <Icon name="phone" className="mt-0.5 size-5 shrink-0 text-ink-2" />
                <a href={firm.phoneHref} className="text-link hover:underline">{firm.phone}</a>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" className="mt-0.5 size-5 shrink-0 text-ink-2" />
                <a href={`mailto:${firm.email}`} className="text-link hover:underline">{firm.email}</a>
              </li>
              {firm.offices.map((o) => (
                <li key={o.label} className="flex gap-3">
                  <Icon name="pin" className="mt-0.5 size-5 shrink-0 text-ink-2" />
                  <address className="not-italic">
                    <span className="font-semibold">{o.label}</span>
                    <br />{o.line1}<br />{o.line2}<br />{o.city}, {o.state} {o.pin}
                  </address>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] bg-white p-8">
            <h2 className="flex items-center gap-2 font-display text-[21px] font-semibold">
              <Icon name="clock" className="size-5" /> Office hours
            </h2>
            <dl className="mt-5 space-y-3 text-[15px]">
              {firm.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4">
                  <dt className="text-ink-2">{h.days}</dt>
                  <dd className={h.time === "Closed" ? "text-ink-3" : ""}>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          {firm.offices.map((o) => (
            <div key={o.label} className="overflow-hidden rounded-[28px] bg-white">
              <p className="px-6 pt-5 pb-4 text-[15px] font-semibold">{o.label}</p>
              <iframe
                title={`${o.label} map`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(o.mapQuery)}&output=embed`}
                className="h-56 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ))}
        </aside>
      </Container>
    </div>
  );
}
