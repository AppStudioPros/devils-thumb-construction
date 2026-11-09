import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/config";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const base = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
  }));

  const locationPages = locations.map((l) => ({
    url: `${base}/locations/${l.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: `${base}/` },
    { url: `${base}/about` },
    { url: `${base}/services` },
    ...servicePages,
    { url: `${base}/locations`, changeFrequency: "monthly" as const, priority: 0.7 },
    ...locationPages,
    { url: `${base}/projects` },
    { url: `${base}/blog` },
    { url: `${base}/faq` },
    { url: `${base}/contact` },
  ];
}
