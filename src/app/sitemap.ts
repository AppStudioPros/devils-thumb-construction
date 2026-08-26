import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/config";
import { services } from "@/data/services";

const base = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = services.map((s) => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: new Date(),
  }));

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/about/`, lastModified: new Date() },
    { url: `${base}/services/`, lastModified: new Date() },
    ...servicePages,
    { url: `${base}/projects/`, lastModified: new Date() },
    { url: `${base}/blog/`, lastModified: new Date() },
    { url: `${base}/faq/`, lastModified: new Date() },
    { url: `${base}/contact/`, lastModified: new Date() },
  ];
}
