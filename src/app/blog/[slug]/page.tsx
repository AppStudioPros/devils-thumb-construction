import { getGAPBlogPostBySlug, getAllGAPSlugs, estimateReadTime, extractExcerpt, formatDate } from "@/lib/gap";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { buildWebPageSchema, buildBreadcrumbSchema, buildArticleSchema, toGraph } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/seo/config";

const GAP_CLIENT_ID = "421db41e-359c-461e-b901-2335687cf336";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const slugs = await getAllGAPSlugs(GAP_CLIENT_ID);
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getGAPBlogPostBySlug(GAP_CLIENT_ID, slug);
    if (!post) return { title: "Post Not Found — Devil's Thumb Construction" };
    const description = post.blog_meta || extractExcerpt(post.blog_content, 160);
    return {
      title: post.blog_title,
      description,
      alternates: { canonical: `/blog/${slug}/` },
      openGraph: {
        title: `${post.blog_title} | Devil's Thumb Construction`,
        description,
        url: `/blog/${slug}/`,
        type: "article",
        publishedTime: post.created_at,
      },
    };
  } catch {
    return { title: "Blog — Devil's Thumb Construction" };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try { post = await getGAPBlogPostBySlug(GAP_CLIENT_ID, slug); } catch {}
  if (!post) notFound();

  const readTime = estimateReadTime(post.blog_content);
  const pageUrl = `${siteConfig.url}/blog/${slug}/`;
  const pageId = `${pageUrl}#webpage`;
  const articleId = `${pageUrl}#article`;
  const description = post.blog_meta || extractExcerpt(post.blog_content, 160);

  const articleSchema = toGraph(
    buildWebPageSchema({
      id: pageId,
      url: pageUrl,
      name: post.blog_title,
      description,
    }),
    buildBreadcrumbSchema([
      { name: "Home", url: `${siteConfig.url}/` },
      { name: "Blog", url: `${siteConfig.url}/blog/` },
      { name: post.blog_title, url: pageUrl },
    ]),
    buildArticleSchema({
      id: articleId,
      url: pageUrl,
      headline: post.blog_title,
      description,
      datePublished: post.created_at,
      pageId,
    })
  );

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={articleSchema as Record<string, unknown>} />
      <article className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-sm text-gray-400 hover:text-[#e09f18] transition-colors mb-6 inline-block">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border text-[#e09f18] border-[#e09f18]/30 bg-[#e09f18]/5">
              Blog
            </span>
            <span className="text-xs text-gray-400">{formatDate(post.created_at)}</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-400">{readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2c4b40] leading-tight mb-6 font-montserrat">{post.blog_title}</h1>
          {post.blog_meta && (
            <p className="text-lg text-gray-500 mb-8 border-l-2 border-[#e09f18] pl-4">{post.blog_meta}</p>
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
            dangerouslySetInnerHTML={{ __html: post.blog_content }}
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
