import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import FadeIn from '@/components/shared/FadeIn';
import { getGAPBlogPosts, slugify, estimateReadTime, extractExcerpt } from '@/lib/gap';

const GAP_CLIENT_ID = "421db41e-359c-461e-b901-2335687cf336";
export const revalidate = 60;

const FALLBACK_POSTS = [
  { slug: "colorado-construction-trends", category: "Construction", categoryColor: "#2c4b40", date: "March 26, 2026", readTime: "5 min read", title: "Colorado Construction Trends for 2026", excerpt: "From sustainable builds to smart home integration, here's what's shaping residential construction across the Front Range." },
];

export default async function BlogPage() {
  const gapPosts = await getGAPBlogPosts(GAP_CLIENT_ID);
  const posts = gapPosts.length > 0
    ? gapPosts.map((p) => ({ slug: slugify(p.blog_title), category: "Blog", categoryColor: "#2c4b40", date: new Date(p.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }), readTime: estimateReadTime(p.blog_content), title: p.blog_title, excerpt: extractExcerpt(p.blog_content) }))
    : FALLBACK_POSTS;

  return (
    <>
      <PageHero title="Blog" bgImage="/gallery/dining-spaces/diningroom-c1.jpg" />
      <section className="pt-[108px] pb-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13251e] font-[Montserrat] mb-4">Latest Updates</h2>
            <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-12" />
          </FadeIn>
          <div className="space-y-6">
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 100}>
                <Link href={`/blog/${post.slug}`} className="block group p-6 md:p-8 rounded-lg border border-gray-200 hover:border-[#2c4b40]/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border" style={{ color: post.categoryColor, borderColor: `${post.categoryColor}40` }}>{post.category}</span>
                    <span className="text-xs text-[#5d6661]">{post.date}</span><span className="text-xs text-[#5d6661]">·</span><span className="text-xs text-[#5d6661]">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#13251e] group-hover:text-[#2c4b40] transition-colors mb-2">{post.title}</h3>
                  <p className="text-[#5d6661] text-sm leading-relaxed">{post.excerpt}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
