import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Button, Container } from "@/components/ui";
import { articles, categories } from "@/content/articles";

export const metadata: Metadata = {
  title: "Knowledge Center",
  description: "Tax, GST, regulatory and business updates explained in plain language.",
};

const fmt = (iso: string) => new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export default async function KnowledgePage(props: PageProps<"/resources/knowledge">) {
  const { c } = await props.searchParams;
  const active = categories.find((x) => x.id === c)?.id ?? "all";
  const shown = articles
    .filter((a) => active === "all" || a.category === active)
    .sort((a, b) => b.updated.localeCompare(a.updated));

  return (
    <div className="bg-canvas pb-24">
      <section className="bg-white pt-16 pb-14 text-center sm:pt-24">
        <Container>
          <p className="type-eyebrow text-ink-2">Knowledge Center</p>
          <h1 className="type-hero mt-2">Updates, explained.</h1>
          <p className="type-intro mx-auto mt-5 max-w-2xl text-ink-2">What changed, who it affects, and what to do about it.</p>
        </Container>
      </section>

      <Container className="pt-12">
        <nav aria-label="Categories" className="no-scrollbar mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full bg-pill p-1">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.id === "all" ? "/resources/knowledge" : `/resources/knowledge?c=${cat.id}`}
              aria-current={active === cat.id ? "page" : undefined}
              scroll={false}
              className={`shrink-0 rounded-full px-4 py-1.5 text-[14px] transition-all ${active === cat.id ? "bg-white text-ink shadow-sm" : "text-ink-2 hover:text-ink"}`}
            >
              {cat.label}
            </Link>
          ))}
        </nav>

        {shown.length ? (
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((a) => (
              <li key={a.slug}>
                <Link href={a.href ?? "#"} className="flex h-full flex-col rounded-[22px] bg-white p-7 transition-shadow hover:shadow-lg">
                  <span className="text-[12px] font-semibold tracking-wide text-ink-2 uppercase">{categories.find((x) => x.id === a.category)?.label}</span>
                  <h2 className="mt-3 font-display text-[21px] leading-snug font-semibold">{a.title}</h2>
                  <p className="mt-2 flex-1 text-[15px] text-ink-2">{a.excerpt}</p>
                  <p className="mt-6 text-[12px] text-ink-3">
                    {a.author} · Updated {fmt(a.updated)} · {a.readingMinutes} min read
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mx-auto mt-12 max-w-xl rounded-[28px] bg-white p-12 text-center">
            <Icon name="document" className="mx-auto size-12 text-ink-3" strokeWidth={1.2} />
            <h2 className="mt-5 font-display text-[24px] font-semibold">Articles coming soon.</h2>
            <p className="mt-2 text-ink-2">We&apos;re preparing updates for this section. In the meantime, ask us anything.</p>
            <Button href="/contact" className="mt-6">Ask a question</Button>
          </div>
        )}
      </Container>
    </div>
  );
}
