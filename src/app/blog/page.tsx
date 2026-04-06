import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getBlogPosts, formatDate, type BlogPost as SanityPost } from "@/lib/sanity-blog";

export const metadata: Metadata = {
  title: "Blog — Devil's Thumb Construction",
  description: "Construction insights, project showcases, and home improvement tips from Devil's Thumb Construction.",
};

export const revalidate = 60;

export default async function BlogPage() {
  let sanityPosts: SanityPost[] = [];
  try {
    sanityPosts = await getBlogPosts();
  } catch (err) {
    console.error("[Blog] Failed to fetch from Sanity:", err);
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
            <span className="text-[#2c4b40]">Blog</span>
          </h1>
          <p className="text-gray-500 text-lg">Construction insights, project tips, and Colorado Front Range building expertise.</p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {sanityPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">Blog posts coming soon.</p>
            </div>
          )}

          {sanityPosts.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug}`}
              className="block group p-6 rounded-2xl border border-gray-200 hover:border-[#e09f18]/40 bg-white hover:shadow-lg hover:shadow-[#e09f18]/5 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                {post.categories?.[0] && (
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border text-[#e09f18] border-[#e09f18]/30 bg-[#e09f18]/5">
                    {post.categories[0]}
                  </span>
                )}
                <span className="text-xs text-gray-400">{formatDate(post.publishedAt)}</span>
              </div>
              <h2 className="text-xl font-bold text-[#2c4b40] group-hover:text-[#e09f18] transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">{post.excerpt || post.seoDescription || ""}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
