import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/config";

const base = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/about/`, lastModified: new Date() },
    { url: `${base}/services/`, lastModified: new Date() },
    { url: `${base}/projects/`, lastModified: new Date() },
    { url: `${base}/blog/`, lastModified: new Date() },
    { url: `${base}/faq/`, lastModified: new Date() },
    { url: `${base}/contact/`, lastModified: new Date() },
  ];
}
