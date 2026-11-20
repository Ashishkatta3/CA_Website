import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, Container } from "@/components/ui";
import { articles, categories, getArticle, type Block } from "@/content/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: PageProps<"/resources/knowledge/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticle(slug);
  return article ? { title: article.title, description: article.excerpt } : {};
}

const fmt = (iso: string) => new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return <p className="mt-5 text-[17px] leading-relaxed text-ink-2">{block.text}</p>;
    case "h2":
      return <h2 className="mt-12 font-display text-[24px] font-semibold">{block.text}</h2>;
    case "ul":
      return (
        <ul className="mt-5 list-disc space-y-2 pl-6 text-[17px] leading-relaxed text-ink-2 marker:text-ink-3">
          {block.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      );
    case "table":
      return (
        <div className="mt-6 overflow-x-auto rounded-[18px] bg-white">
          <table className="w-full min-w-[480px] text-left text-[15px]">
            <thead>
              <tr className="border-b border-line">
                {block.head.map((h, i) => <th key={i} className="px-5 py-3 font-semibold">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-b border-line/60 last:border-0">
                  {row.map((cell, c) => <td key={c} className={`px-5 py-3 ${c === 0 ? "font-medium text-ink" : "text-ink-2"}`}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "note":
      return <p className="mt-8 rounded-[18px] bg-white px-6 py-5 text-[16px] text-ink">{block.text}</p>;
  }
}

export default async function ArticlePage(props: PageProps<"/resources/knowledge/[slug]">) {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) notFound();
  const category = categories.find((c) => c.id === article.category);

  return (
    <div className="bg-canvas pb-24">
      <section className="bg-white pt-16 pb-14 sm:pt-24">
        <Container className="max-w-[760px]">
          <Link href="/resources/knowledge" className="text-[14px] text-ink-2 hover:text-ink hover:underline">← Knowledge Center</Link>
          <p className="type-eyebrow mt-8 text-ink-2">
            <Link href={`/resources/knowledge?c=${article.category}`} className="hover:text-ink">{category?.label}</Link>
          </p>
          <h1 className="mt-2 font-display text-[36px] leading-tight font-semibold sm:text-[44px]">{article.title}</h1>
          <p className="type-intro mt-5 text-ink-2">{article.excerpt}</p>
          <p className="mt-6 text-[13px] text-ink-3">
            {article.author} · Updated {fmt(article.updated)} · {article.readingMinutes} min read
          </p>
        </Container>
      </section>

      <Container className="max-w-[760px] pt-6">
        <article>
          {article.body.map((block, i) => <BlockView key={i} block={block} />)}
        </article>

        {article.sources?.length ? (
          <p className="mt-12 text-[14px] text-ink-2">
            Official sources:{" "}
            {article.sources.map((s, i) => (
              <span key={s.url}>
                {i > 0 && " · "}
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ink">{s.label}</a>
              </span>
            ))}
          </p>
        ) : null}

        <p className="mt-6 border-t border-line pt-6 text-[13px] text-ink-3">
          This article is general information based on the law as on {fmt(article.updated)}. It is not professional advice; rules change and
          individual circumstances differ, so please consult us before acting on it.
        </p>

        <div className="mt-12 rounded-[28px] bg-white p-10 text-center">
          <h2 className="font-display text-[24px] font-semibold">Have a question about this?</h2>
          <Button href="/contact" className="mt-6">Ask a question</Button>
        </div>
      </Container>
    </div>
  );
}
