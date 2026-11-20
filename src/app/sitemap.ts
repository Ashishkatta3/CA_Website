import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { services } from "@/content/services";

// NEXT_PUBLIC_SITE_URL overrides (set it once a custom domain is live);
// otherwise Vercel's production URL is used.
const base =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/services",
    ...services.map((s) => `/services/${s.slug}`),
    "/industries",
    "/resources",
    "/resources/important-dates",
    "/resources/calculators",
    "/resources/knowledge",
    ...articles.map((a) => `/resources/knowledge/${a.slug}`),
    "/careers",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
    "/legal/disclaimer",
  ];
  return paths.map((p) => ({ url: `${base}${p}` }));
}
