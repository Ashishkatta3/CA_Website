import type { Metadata } from "next";
import { Button, Container } from "@/components/ui";
import { datesLastReviewed, importantDates } from "@/content/important-dates";
import { DatesBrowser } from "./DatesBrowser";

export const metadata: Metadata = {
  title: "Important Dates",
  description: "Compliance calendar for GST, TDS, income tax and ROC due dates.",
};

export default function ImportantDatesPage() {
  const reviewed = new Date(`${datesLastReviewed}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div className="bg-canvas pb-24">
      <section className="bg-white pt-16 pb-14 text-center sm:pt-24">
        <Container>
          <p className="type-eyebrow text-ink-2">Compliance calendar</p>
          <h1 className="type-hero mt-2">Important dates.</h1>
          <p className="type-intro mx-auto mt-5 max-w-2xl text-ink-2">Key statutory due dates, so nothing catches you by surprise.</p>
        </Container>
      </section>

      <Container className="max-w-[860px] pt-12">
        <p className="mb-10 rounded-[18px] bg-saffron-soft px-5 py-4 text-[14px] text-[#7a4a08]">
          Checked daily against official government sources (incometax.gov.in, gst.gov.in, mca.gov.in); last checked {reviewed}. Each date links to its
          source. Dates can change by notification, so please confirm with us before relying on them.
        </p>
        <DatesBrowser dates={importantDates} />
        <div className="mt-16 text-center">
          <p className="font-display text-[24px] font-semibold">Want us to track these for you?</p>
          <Button href="/contact" className="mt-5">Talk to us</Button>
        </div>
      </Container>
    </div>
  );
}
