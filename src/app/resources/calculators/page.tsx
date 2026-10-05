import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { Calculators } from "./Calculators";
import { calculatorTabs, type CalcTab } from "./tabs";

export const metadata: Metadata = {
  title: "Calculators",
  description: "Income tax, GST and EMI calculators.",
};

export default async function CalculatorsPage(props: PageProps<"/resources/calculators">) {
  const { tab } = await props.searchParams;
  const initialTab = (calculatorTabs.find((t) => t.id === tab)?.id ?? "income-tax") as CalcTab;

  return (
    <div className="bg-canvas pb-24">
      <section className="bg-white pt-16 pb-14 text-center sm:pt-24">
        <Container>
          <p className="type-eyebrow text-ink-2">Financial tools</p>
          <h1 className="type-hero mt-2">Calculators.</h1>
          <p className="type-intro mx-auto mt-5 max-w-2xl text-ink-2">Quick estimates to help you plan. For decisions, talk to us.</p>
        </Container>
      </section>
      <Container className="pt-12">
        <Calculators key={initialTab} initialTab={initialTab} />
      </Container>
    </div>
  );
}
