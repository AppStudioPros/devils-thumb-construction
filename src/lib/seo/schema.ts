import { siteConfig } from "./config";

/** Reusable schema builders — use @graph arrays to connect entities cleanly */

export function buildWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: `${siteConfig.url}/`,
    name: siteConfig.name,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function buildOrganizationSchema() {
  return {
    "@type": "GeneralContractor",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: `${siteConfig.url}/`,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    logo: {
      "@type": "ImageObject",
      url: siteConfig.logo,
    },
    areaServed: siteConfig.serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
    })),
    description: siteConfig.description,
  };
}

export function buildWebPageSchema({
  type = "WebPage",
  id,
  url,
  name,
  description,
}: {
  type?: string;
  id: string;
  url: string;
  name: string;
  description?: string;
}) {
  return {
    "@type": type,
    "@id": id,
    url,
    name,
    ...(description ? { description } : {}),
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildServiceSchema({
  id,
  name,
  url,
  description,
}: {
  id: string;
  name: string;
  url: string;
  description: string;
}) {
  return {
    "@type": "Service",
    "@id": id,
    name,
    url,
    description,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: siteConfig.serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
    })),
    serviceType: name,
  };
}

export function buildArticleSchema({
  id,
  url,
  headline,
  description,
  datePublished,
  dateModified,
  pageId,
}: {
  id: string;
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  pageId: string;
}) {
  return {
    "@type": "BlogPosting",
    "@id": id,
    headline,
    description,
    url,
    datePublished,
    ...(dateModified ? { dateModified } : {}),
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntityOfPage: { "@id": pageId },
  };
}

/** Wrap one or more schema nodes in a @graph */
export function toGraph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
