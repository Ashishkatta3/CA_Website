// Knowledge Center entries. Add articles here (or move to a CMS later).
// `updated` matters for tax content — always refresh it when you revise a piece.

export type ArticleCategory = "tax" | "gst" | "regulatory" | "business";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  author: string;
  published: string; // YYYY-MM-DD
  updated: string;
  readingMinutes: number;
  href?: string;
};

export const categories: { id: ArticleCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "tax", label: "Tax Updates" },
  { id: "gst", label: "GST Updates" },
  { id: "regulatory", label: "Regulatory" },
  { id: "business", label: "Business" },
];

export const articles: Article[] = [];
