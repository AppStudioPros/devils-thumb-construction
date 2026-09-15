import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import FadeIn from '@/components/shared/FadeIn'
import { blogPosts } from '@/data/blog-posts'

export const metadata: Metadata = {
  title: 'Blog | Construction Tips & Colorado Building Insights',
  description: "Construction tips, Colorado building insights, and project updates from Devils Thumb Construction — serving Denver, Boulder, Arvada, and the Front Range.",
  alternates: { canonical: 'https://devilsthumbconstruction.com/blog' },
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        bgImage="/images/blueprints.jpg"
      />

      <section className="pt-16 pb-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm font-bold text-[#e09f18] uppercase tracking-widest mb-2">From the Field</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#13251e] font-[Montserrat] mb-3">
              Construction Insights
            </h2>
            <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-10" />
          </FadeIn>

          {/* Featured post — first one, full width */}
          <FadeIn>
            <Link href={`/blog/${blogPosts[0].slug}`} className="group block mb-10">
              <div className="grid sm:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                {blogPosts[0].image && (
                  <div className="relative h-56 sm:h-auto min-h-[240px]">
                    <Image
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col justify-center bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-full border"
                      style={{ color: blogPosts[0].categoryColor, borderColor: `${blogPosts[0].categoryColor}40` }}
                    >
                      {blogPosts[0].category}
                    </span>
                    <span className="text-xs text-[#5d6661]">{blogPosts[0].date}</span>
                    <span className="text-xs text-[#5d6661]">· {blogPosts[0].readTime}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#13251e] group-hover:text-[#2c4b40] transition-colors mb-3 font-[Montserrat]">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-[#5d6661] leading-relaxed text-sm mb-4">{blogPosts[0].excerpt}</p>
                  <span className="text-[#e09f18] font-semibold text-sm">Read Article →</span>
                </div>
              </div>
            </Link>
          </FadeIn>

          {/* Remaining posts — 3-col grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, i) => (
              <FadeIn key={post.slug} delay={i * 100}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="h-full rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                    {post.image && (
                      <div className="relative h-44 overflow-hidden flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span
                          className="text-xs font-semibold px-2.5 py-0.5 rounded-full border"
                          style={{ color: post.categoryColor, borderColor: `${post.categoryColor}40` }}
                        >
                          {post.category}
                        </span>
                        <span className="text-xs text-[#5d6661]">{post.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#13251e] group-hover:text-[#2c4b40] transition-colors mb-2 font-[Montserrat] flex-1">
                        {post.title}
                      </h3>
                      <p className="text-[#5d6661] text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                      <span className="text-[#e09f18] font-semibold text-sm mt-auto">Read More →</span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#13251e]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-[Montserrat] mb-3">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Get a free consultation with our team — no pressure, just an honest conversation about what your project needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#e09f18] text-white px-8 py-3 rounded-[30px] font-semibold hover:bg-[#c5860e] transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}
