import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import FadeIn from '@/components/shared/FadeIn';
import { galleryCategories } from '@/data/gallery';

export default function ProjectsPage() {
  return (
    <>
      <PageHero title="Projects" bgImage="/images/kitchen-island.jpg" />

      <section className="pt-[108px] pb-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm font-bold text-[#13251e] uppercase tracking-widest mb-2">
              See What We&apos;ve Built
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13251e] font-[Montserrat] mb-4">
              Our Recent Projects
            </h2>
            <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-6" />
            <p className="text-[#5d6661] max-w-3xl leading-relaxed mb-12 text-lg">
              From custom homes to remodels and additions, every project we complete reflects our commitment to quality and detail. Explore our portfolio to see how Devil&apos;s Thumb Construction transforms ideas into spaces that are functional, beautiful, and built to last.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryCategories.map((category, i) => (
              <FadeIn key={category.slug} delay={(i % 3) * 100}>
                <Link href={`/projects/${category.slug}`}>
                  <div className="aspect-[4/3] relative overflow-hidden group cursor-pointer">
                    <Image
                      src={category.hero}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[#13251e]/0 group-hover:bg-[#13251e]/70 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-[Montserrat] text-center px-4">
                        {category.name}
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
