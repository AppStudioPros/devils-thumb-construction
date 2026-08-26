import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import FadeIn from '@/components/shared/FadeIn';
import { JsonLd } from "@/components/JsonLd";
import { buildWebPageSchema, buildBreadcrumbSchema, toGraph } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/seo/config";
import { services as allServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service general contractor in Arvada, CO — custom home construction, remodeling, garages, ADUs, concrete, excavation, architectural design, insurance work, and more across the Colorado Front Range.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Construction Services | Devil's Thumb Construction",
    description:
      "Custom homes, remodels, garages, ADUs, concrete, excavation, and more — serving Arvada and 40 miles across the Colorado Front Range.",
    url: "/services/",
  },
};



const servicesSchema = toGraph(
  buildWebPageSchema({
    type: "CollectionPage",
    id: `${siteConfig.url}/services/#webpage`,
    url: `${siteConfig.url}/services/`,
    name: "Construction Services — Devil's Thumb Construction",
    description:
      "Residential and light commercial construction services across the Colorado Front Range.",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: `${siteConfig.url}/` },
    { name: "Services", url: `${siteConfig.url}/services/` },
  ])
);

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesSchema as Record<string, unknown>} />
      <PageHero title="Services" bgImage="/images/construction-framing.jpg" />

      <section className="pt-[108px] pb-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <FadeIn>
            <p className="text-sm font-bold text-[#13251e] uppercase tracking-widest mb-2">Well Delivered</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13251e] font-[Montserrat] mb-4">
              Quality Services
            </h2>
            <div className="w-[60px] h-[3px] bg-[#2c4b40]" />
          </FadeIn>
        </div>

        {allServices.map((service, i) => {
          const isEven = i % 2 === 1;
          const bg = isEven ? 'bg-[#f7f7f5]' : 'bg-white';
          return (
            <div key={service.slug} className={`${bg} hover:bg-[#f0efe8] transition-colors duration-300`}>
              <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <FadeIn delay={(i % 3) * 100}>
                  <div className={`grid grid-cols-1 lg:grid-cols-5 gap-12 items-center`}>
                    <div className={`relative aspect-[4/3] lg:col-span-2 overflow-hidden ${isEven ? 'lg:order-2' : ''}`}>
                      <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-500 ease-out hover:scale-105" />
                    </div>
                    <div className={`lg:col-span-3 ${isEven ? 'lg:order-1' : ''}`}>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#13251e] mb-4 font-[Montserrat]">
                        {service.title}
                      </h3>
                      <p className="text-[#5d6661] leading-relaxed text-lg mb-6">{service.shortDescription}</p>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-block bg-[#e09f18] text-white px-6 py-2.5 rounded-[30px] text-sm font-semibold hover:bg-[#c5860e] transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
