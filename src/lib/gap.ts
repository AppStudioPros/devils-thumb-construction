// ============================================================================
// GrowthAutoPilot (GAP) Supabase Client
// Fetches published blog content from GAP's database
// ============================================================================

const GAP_SUPABASE_URL = "https://kpfmkkztgqjqokvfayca.supabase.co";
const GAP_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwZm1ra3p0Z3FqcW9rdmZheWNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2MTU1MzYsImV4cCI6MjA4NjE5MTUzNn0.3SALiL1O_m5kJEuYC6PDUhT4-0oBI5s4mTU8LWWzRV8";

export interface GAPBlogPost {
  id: string;
  name: string;
  blog_title: string;
  blog_content: string;
  blog_meta: string;
  featured_image: string | null;
  created_at: string;
  updated_at: string;
  status: string;
}

export async function getGAPBlogPosts(clientId: string): Promise<GAPBlogPost[]> {
  try {
    const res = await fetch(
      `${GAP_SUPABASE_URL}/rest/v1/content_projects?client_id=eq.${clientId}&blog_title=not.is.null&blog_content=not.is.null&order=created_at.desc&limit=50`,
      {
        headers: {
          apikey: GAP_SUPABASE_ANON_KEY,
          Authorization: `Bearer ${GAP_SUPABASE_ANON_KEY}`,
        },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) return [];
    const data = await res.json();
    return data.filter((post: GAPBlogPost) => post.blog_title && post.blog_content);
  } catch {
    return [];
  }
}

export async function getGAPBlogPostBySlug(clientId: string, slug: string): Promise<GAPBlogPost | null> {
  const posts = await getGAPBlogPosts(clientId);
  return posts.find((p) => slugify(p.blog_title) === slug) || null;
}

export async function getAllGAPSlugs(clientId: string): Promise<string[]> {
  const posts = await getGAPBlogPosts(clientId);
  return posts.map((p) => slugify(p.blog_title));
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function estimateReadTime(content: string): string {
  const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export function extractExcerpt(html: string, maxLength: number = 200): string {
  const text = html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).replace(/\s\S*$/, "") + "...";
}
