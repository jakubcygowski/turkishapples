import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";

const BASE = "https://turkishapples.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${BASE}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...articles.map((a) => ({
      url: `${BASE}/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
