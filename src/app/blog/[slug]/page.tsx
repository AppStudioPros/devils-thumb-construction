import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getBlogPost, getAllSlugs, portableTextToHtml, formatDate, estimateReadTime } from "@/lib/sanity-blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const slugs = await getAllSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getBlogPost(slug);
    if (!post) return { title: "Post Not Found" };
    return {
      title: `${post.seoTitle || post.title} — Devil's Thumb Construction`,
      description: post.seoDescription || post.excerpt || "",
    };
  } catch {
    return { title: "Blog — Devil's Thumb Construction" };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try { post = await getBlogPost(slug); } catch {}
  if (!post) notFound();

  const bodyHtml = portableTextToHtml(post.body);
  const readTime = estimateReadTime(post.body);

  return (
    <main className="min-h-screen bg-white">
      <article className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-sm text-gray-400 hover:text-[#e09f18] transition-colors mb-6 inline-block">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            {post.categories?.[0] && (
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border text-[#e09f18] border-[#e09f18]/30 bg-[#e09f18]/5">
                {post.categories[0]}
              </span>
            )}
            <span className="text-xs text-gray-400">{formatDate(post.publishedAt)}</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-400">{readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2c4b40] leading-tight mb-6 font-montserrat">{post.title}</h1>
          {post.excerpt && (
            <p className="text-lg text-gray-500 mb-8 border-l-2 border-[#e09f18] pl-4">{post.excerpt}</p>
          )}
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-[#2c4b40] prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
              prose-strong:text-[#2c4b40]
              prose-blockquote:border-[#e09f18] prose-blockquote:text-gray-500
              prose-a:text-[#e09f18] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-400 text-sm mb-4">Ready to start your construction project?</p>
            <a href="/contact" className="inline-block text-sm font-semibold bg-[#e09f18] hover:bg-[#c5860e] text-white px-6 py-3 rounded-xl transition-all">
              Get a Free Estimate
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
