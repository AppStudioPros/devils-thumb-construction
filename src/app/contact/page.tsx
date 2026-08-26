import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { buildWebPageSchema, buildBreadcrumbSchema, toGraph } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/seo/config";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Devil's Thumb Construction for a free consultation. Call 720-322-6899 or send a message. Serving Arvada, Denver, Boulder, Golden, and the Colorado Front Range.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact Devil's Thumb Construction",
    description:
      "Request a free consultation — call 720-322-6899 or send a message. Serving the Colorado Front Range.",
    url: "/contact/",
  },
};

const contactSchema = toGraph(
  buildWebPageSchema({
    type: "ContactPage",
    id: `${siteConfig.url}/contact/#webpage`,
    url: `${siteConfig.url}/contact/`,
    name: "Contact Devil's Thumb Construction",
    description:
      "Contact Devil's Thumb Construction for a free consultation. Serving Arvada, Denver, Boulder, Golden, and surrounding Colorado Front Range communities.",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: `${siteConfig.url}/` },
    { name: "Contact", url: `${siteConfig.url}/contact/` },
  ])
);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema as Record<string, unknown>} />
      <ContactClient />
    </>
  );
}
