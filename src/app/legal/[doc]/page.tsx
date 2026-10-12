import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui";
import { firm } from "@/content/site";

// Placeholder legal text — have the firm (and its counsel) review before launch.
const docs: Record<string, { title: string; sections: { h: string; p: string }[] }> = {
  privacy: {
    title: "Privacy Policy",
    sections: [
      { h: "Information we collect", p: "When you submit an enquiry we collect the details you provide, such as your name, phone number, email address and the nature of your requirement." },
      { h: "How we use it", p: "We use this information only to respond to your enquiry and, if you engage us, to provide our services. We do not sell your information." },
      { h: "Confidentiality", p: "Client information is treated as confidential in line with our professional obligations." },
      { h: "Contact", p: `For any privacy-related request, write to ${firm.email}.` },
    ],
  },
  terms: {
    title: "Terms of Use",
    sections: [
      { h: "Use of this website", p: "This website provides general information about the firm and its services. By using it, you agree to these terms." },
      { h: "No professional relationship", p: "Using this website or submitting an enquiry does not create a client relationship. An engagement begins only on written acceptance." },
      { h: "Calculators and content", p: "Calculators, due dates and articles are indicative and may not reflect the latest changes in law." },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    sections: [
      { h: "No solicitation", p: "The rules of the Institute of Chartered Accountants of India do not permit chartered accountants to solicit work or advertise. This website is meant only to provide information to those who seek it of their own accord." },
      { h: "Not professional advice", p: "Information on this website is general in nature and is not professional advice. Please consult us about your specific circumstances before acting on it." },
      { h: "No liability", p: `${firm.name} is not liable for any consequence of action taken on the basis of information on this website.` },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(docs).map((doc) => ({ doc }));
}

export async function generateMetadata(props: PageProps<"/legal/[doc]">): Promise<Metadata> {
  const { doc } = await props.params;
  return docs[doc] ? { title: docs[doc].title } : {};
}

export default async function LegalPage(props: PageProps<"/legal/[doc]">) {
  const { doc } = await props.params;
  const page = docs[doc];
  if (!page) notFound();

  return (
    <Container className="max-w-[720px] py-20">
      <h1 className="type-headline">{page.title}</h1>
      <div className="mt-10 space-y-8">
        {page.sections.map((s) => (
          <section key={s.h}>
            <h2 className="font-display text-[21px] font-semibold">{s.h}</h2>
            <p className="mt-2 text-ink-2">{s.p}</p>
          </section>
        ))}
      </div>
    </Container>
  );
}
