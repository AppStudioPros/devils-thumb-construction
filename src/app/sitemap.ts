import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/config";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const base = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = services.map((s) => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: new Date(),
  }));

  const locationPages = locations.map((l) => ({
    url: `${base}/locations/${l.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/about/`, lastModified: new Date() },
    { url: `${base}/services/`, lastModified: new Date() },
    ...servicePages,
    { url: `${base}/locations/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    ...locationPages,
    { url: `${base}/projects/`, lastModified: new Date() },
    { url: `${base}/blog/`, lastModified: new Date() },
    { url: `${base}/faq/`, lastModified: new Date() },
    { url: `${base}/contact/`, lastModified: new Date() },
  ];
}
