import type { Metadata } from "next";
import { IndustryTabs } from "@/components/IndustryTabs";
import { Reveal } from "@/components/Reveal";
import { Button, Container } from "@/components/ui";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Who We Serve",
  description: "Accounting, tax and compliance support for startups, businesses, corporates, individuals, professionals and non-profits.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-16 text-center sm:pt-24">
        <Container>
          <Reveal>
            <p className="type-eyebrow text-ink-2">Who we serve</p>
            <h1 className="type-hero mt-2">Different needs.<br />One trusted team.</h1>
            <p className="type-intro mx-auto mt-6 max-w-2xl text-ink-2">
              A startup, a family business and a salaried professional need very different things. Choose what describes you best.
            </p>
          </Reveal>
        </Container>
      </section>
      <section className="bg-canvas pt-14 pb-24">
        <Container>
          <IndustryTabs industries={industries} syncHash />
        </Container>
      </section>
      <section className="bg-white py-24 text-center">
        <Container>
          <h2 className="type-headline">Don&apos;t see yourself here?</h2>
          <p className="type-intro mx-auto mt-4 max-w-xl text-ink-2">We work with many kinds of clients. Tell us about yours.</p>
          <Button href="/contact" className="mt-8">Get in touch</Button>
        </Container>
      </section>
    </>
  );
}
