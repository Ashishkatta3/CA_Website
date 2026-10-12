import type { MetadataRoute } from "next";
import { services } from "@/content/services";

// Set NEXT_PUBLIC_SITE_URL to the production domain.
const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com";

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
    "/careers",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
    "/legal/disclaimer",
  ];
  return paths.map((p) => ({ url: `${base}${p}` }));
}
