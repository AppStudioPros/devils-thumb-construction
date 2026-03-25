import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import FadeIn from '@/components/shared/FadeIn';
import CategoryGallery from '@/components/gallery/CategoryGallery';
import { galleryCategories } from '@/data/gallery';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return galleryCategories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = galleryCategories.find((c) => c.slug === slug);
  if (!category) return { title: 'Not Found' };
  return {
    title: `${category.name} | Devil's Thumb Construction`,
    description: `Browse our ${category.name.toLowerCase()} projects. Quality craftsmanship by Devil's Thumb Construction.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = galleryCategories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <PageHero title={category.name} bgImage={category.hero} />

      <section className="pt-[108px] pb-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/projects"
              className="inline-flex items-center text-[#2c4b40] hover:text-[#13251e] transition-colors font-medium mb-8 group"
            >
              <span className="mr-2 transition-transform duration-200 group-hover:-translate-x-1">←</span>
              Back to All Projects
            </Link>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13251e] font-[Montserrat] mb-4">
              {category.name}
            </h2>
            <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-12" />
          </FadeIn>

          <FadeIn delay={100}>
            <CategoryGallery images={category.images} categoryName={category.name} />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
