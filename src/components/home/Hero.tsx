import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/shared/FadeIn';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <Image src="/images/mountain-bg.jpg" alt="" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-[#13251e]/65" />
      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <FadeIn>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold text-white font-[Montserrat] leading-[1.1] mb-6">
            Built To Last.<br />
            Crafted For<br />
            Colorado.
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-[#e09f18] text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
            Residential &amp; light commercial construction—design-build, remodels, additions, kitchens, baths, exteriors, and more.
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block bg-[#e09f18] text-white px-8 py-3 rounded-[30px] font-semibold hover:bg-[#c5860e] hover:scale-105 transition-all text-center min-h-[44px]"
            >
              Get a Quote
            </Link>
            <Link
              href="/projects"
              className="inline-block border-2 border-[#e09f18] text-[#e09f18] px-8 py-3 rounded-[30px] font-semibold hover:bg-[#e09f18] hover:text-white hover:scale-105 transition-all text-center min-h-[44px]"
            >
              View Projects
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
