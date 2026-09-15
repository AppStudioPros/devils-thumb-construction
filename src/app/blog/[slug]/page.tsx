import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/data/blog-posts'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return { title: "Post Not Found — Devils Thumb Construction" }
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://devilsthumbconstruction.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://devilsthumbconstruction.com/blog/${slug}`,
      images: post.image ? [{ url: post.image }] : [],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) notFound()

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: "Devils Thumb Construction", url: 'https://devilsthumbconstruction.com' },
    publisher: { '@type': 'Organization', name: "Devils Thumb Construction", url: 'https://devilsthumbconstruction.com' },
    url: `https://devilsthumbconstruction.com/blog/${slug}`,
  }

  // Parse markdown-ish content to HTML (basic)
  const htmlContent = post.content
    .split('\n')
    .map(line => {
      if (line.startsWith('## ')) return `<h2>${line.replace('## ', '')}</h2>`
      if (line.startsWith('# ')) return `<h1>${line.replace('# ', '')}</h1>`
      if (line.startsWith('- ')) return `<li>${line.replace('- ', '')}</li>`
      if (line.trim() === '') return '<br />'
      return `<p>${line}</p>`
    })
    .join('\n')
    .replace(/(<li>.*<\/li>\n?)+/g, match => `<ul>${match}</ul>`)

  const related = blogPosts.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {/* Hero */}
      <section
        className="relative flex items-end"
        style={{ paddingTop: '108px', minHeight: '320px', background: '#13251e' }}
      >
        {post.image && (
          <div className="absolute inset-0">
            <Image src={post.image} alt={post.title} fill className="object-cover opacity-20" />
          </div>
        )}
        <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <Link href="/blog" className="text-[#e09f18] text-sm font-semibold hover:underline mb-4 inline-block">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span
              className="text-xs font-semibold px-2.5 py-0.5 rounded-full border"
              style={{ color: post.categoryColor, borderColor: `${post.categoryColor}60` }}
            >
              {post.category}
            </span>
            <span className="text-xs text-gray-300">{post.date}</span>
            <span className="text-xs text-gray-300">· {post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[Montserrat] max-w-3xl leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article body */}
      <section className="py-14 bg-white">
        <div className="max-w-[780px] mx-auto px-4 sm:px-6">
          <p className="text-lg text-[#5d6661] leading-relaxed mb-8 font-medium border-l-4 border-[#e09f18] pl-4">
            {post.excerpt}
          </p>
          <div
            className="prose-dtc"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-14 bg-[#f5f6f5]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#13251e] font-[Montserrat] mb-6">More from the Blog</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                  <div className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow bg-white h-full flex flex-col">
                    {p.image && (
                      <div className="relative h-36 overflow-hidden flex-shrink-0">
                        <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    )}
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-xs text-[#5d6661] mb-2">{p.date} · {p.readTime}</p>
                      <h3 className="text-base font-bold text-[#13251e] group-hover:text-[#2c4b40] transition-colors font-[Montserrat] flex-1">{p.title}</h3>
                      <span className="text-[#e09f18] text-sm font-semibold mt-3">Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-14 bg-[#13251e]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-[Montserrat] mb-3">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 mb-6">Free consultation. No pressure.</p>
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
