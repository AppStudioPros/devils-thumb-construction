// Sanity blog client — uses plain fetch (no @sanity/client needed)

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const DATASET = process.env.SANITY_DATASET || "production";
const SITE_ID = process.env.SANITY_SITE_ID || "";
const API_VERSION = "2024-01-01";

function sanityUrl(query: string, params: Record<string, string> = {}): string {
  const base = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}`;
  const url = new URL(base);
  url.searchParams.set("query", query);
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(`$${k}`, `"${v}"`);
  }
  return url.toString();
}

async function sanityFetch<T>(query: string, params: Record<string, string> = {}): Promise<T> {
  if (!PROJECT_ID) {
    console.warn("[sanity-blog] NEXT_PUBLIC_SANITY_PROJECT_ID not set — returning empty result");
    return [] as unknown as T;
  }
  const res = await fetch(sanityUrl(query, params), { next: { revalidate: 60 } });
  if (!res.ok) {
    console.error("[sanity-blog] Fetch failed:", res.status, await res.text());
    return [] as unknown as T;
  }
  const json = await res.json();
  return json.result as T;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: SanityBlock[];
  publishedAt: string;
  status: "draft" | "published";
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  categories?: string[];
}

export interface SanityBlock {
  _type: "block";
  _key: string;
  style: string;
  children: { _type: "span"; _key: string; text: string; marks?: string[] }[];
  markDefs?: unknown[];
}

/**
 * Fetch all published blog posts for this site
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post" && siteId == $siteId && status == "published"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    status,
    seoDescription,
    categories
  }`;
  return sanityFetch<BlogPost[]>(query, { siteId: SITE_ID });
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug && siteId == $siteId && status == "published"][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    publishedAt,
    status,
    seoTitle,
    seoDescription,
    seoKeywords,
    categories
  }`;
  return sanityFetch<BlogPost | null>(query, { slug, siteId: SITE_ID });
}

/**
 * Get all published slugs for static generation
 */
export async function getAllSlugs(): Promise<string[]> {
  const query = `*[_type == "post" && siteId == $siteId && status == "published"].slug.current`;
  return sanityFetch<string[]>(query, { siteId: SITE_ID });
}

/**
 * Convert portable text blocks to HTML for rendering
 */
export function portableTextToHtml(blocks: SanityBlock[]): string {
  if (!blocks || !Array.isArray(blocks)) return "";

  return blocks
    .map((block) => {
      if (block._type !== "block") return "";

      const text = block.children
        .map((child) => {
          let t = child.text || "";
          if (child.marks?.includes("strong")) t = `<strong>${t}</strong>`;
          if (child.marks?.includes("em")) t = `<em>${t}</em>`;
          return t;
        })
        .join("");

      if (!text.trim()) return "";

      switch (block.style) {
        case "h1": return `<h1>${text}</h1>`;
        case "h2": return `<h2>${text}</h2>`;
        case "h3": return `<h3>${text}</h3>`;
        case "h4": return `<h4>${text}</h4>`;
        case "h5": return `<h5>${text}</h5>`;
        case "h6": return `<h6>${text}</h6>`;
        case "blockquote": return `<blockquote>${text}</blockquote>`;
        default: return `<p>${text}</p>`;
      }
    })
    .filter(Boolean)
    .join("\n");
}

/**
 * Estimate reading time from portable text blocks
 */
export function estimateReadTime(blocks: SanityBlock[]): string {
  if (!blocks) return "1 min read";
  const text = blocks.map(b => b.children?.map(c => c.text).join("") || "").join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.ceil(words / 250));
  return `${mins} min read`;
}

/**
 * Format date for display
 */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
