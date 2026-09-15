import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import FadeIn from "@/components/shared/FadeIn";
import { JsonLd } from "@/components/JsonLd";
import { buildWebPageSchema, buildBreadcrumbSchema, toGraph } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/seo/config";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Service Areas | Devils Thumb Construction",
  description:
    "Devils Thumb Construction serves 16 communities across the Colorado Front Range and foothills. Find your city to learn what we build in your area.",
  alternates: { canonical: "/locations/" },
  openGraph: {
    title: "Service Areas | Devils Thumb Construction",
    description:
      "General contractor serving Denver, Boulder, Golden, Evergreen, and 12 more Colorado Front Range communities.",
    url: "/locations/",
  },
};

const schema = toGraph(
  buildWebPageSchema({
    type: "WebPage",
    id: `${siteConfig.url}/locations/#webpage`,
    url: `${siteConfig.url}/locations/`,
    name: "Service Areas | Devils Thumb Construction",
    description:
      "Devils Thumb Construction serves 16 communities across the Colorado Front Range and mountain foothills.",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: `${siteConfig.url}/` },
    { name: "Service Areas", url: `${siteConfig.url}/locations/` },
  ])
);

export default function LocationsIndexPage() {
  return (
    <>
      <JsonLd data={schema as Record<string, unknown>} />

      <PageHero
        title="Service Areas"
        bgImage="/images/colorado-mountains.jpg"
      />

      <section className="pt-16 sm:pt-[108px] pb-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm font-bold text-[#e09f18] uppercase tracking-widest mb-3">
              Where We Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#13251e] font-[Montserrat] mb-4">
              Colorado Front Range Communities We Serve
            </h2>
            <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-6" />
            <p className="text-[#5d6661] leading-relaxed max-w-2xl mb-12">
              We serve residential and light commercial projects within approximately 40 miles
              of Arvada, Colorado. Select a city below to see the services we offer in your area
              and what to expect when building or remodeling there.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {locations.map((location, i) => (
              <FadeIn key={location.slug} delay={i * 40}>
                <Link
                  href={`/locations/${location.slug}`}
                  className="group block bg-white border border-gray-100 rounded-xl p-5 hover:border-[#e09f18] hover:shadow-md transition-all h-full"
                >
                  <p className="text-xs font-bold text-[#e09f18] uppercase tracking-widest mb-1">
                    {location.county}
                  </p>
                  <h3 className="text-xl font-bold text-[#13251e] font-[Montserrat] mb-2 group-hover:text-[#e09f18] transition-colors">
                    {location.name}
                  </h3>
                  <p className="text-[#5d6661] text-sm leading-relaxed line-clamp-3">
                    {location.description.split(".")[0]}.
                  </p>
                  <span className="mt-3 block text-sm font-semibold text-[#e09f18] group-hover:underline">
                    View services →
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={700}>
            <div className="mt-16 bg-[#13251e] rounded-2xl px-8 py-12 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-[Montserrat] mb-3">
                Not sure if you're in our area?
              </h3>
              <p className="text-gray-300 mb-8 max-w-md mx-auto">
                Call us at{" "}
                <a
                  href="tel:720-322-6899"
                  className="text-[#e09f18] font-semibold hover:text-[#c5860e] transition-colors"
                >
                  720-322-6899
                </a>{" "}
                and we'll let you know right away.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#e09f18] text-white px-8 py-3 rounded-[30px] font-semibold hover:bg-[#c5860e] transition-colors"
              >
                Get a Free Consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
