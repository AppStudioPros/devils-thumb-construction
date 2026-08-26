import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import FadeIn from "@/components/shared/FadeIn";
import { JsonLd } from "@/components/JsonLd";
import { buildWebPageSchema, buildBreadcrumbSchema, buildServiceSchema, toGraph } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/seo/config";
import { services, getServiceBySlug } from "@/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}/` },
    openGraph: {
      title: `${service.title} | Devil's Thumb Construction`,
      description: service.metaDescription,
      url: `/services/${service.slug}/`,
      images: [{ url: service.heroImage, width: 1200, height: 630, alt: service.title }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const pageUrl = `${siteConfig.url}/services/${service.slug}/`;
  const pageId = `${pageUrl}#webpage`;
  const serviceId = `${pageUrl}#service`;

  const schema = toGraph(
    buildWebPageSchema({
      id: pageId,
      url: pageUrl,
      name: `${service.title} — Devil's Thumb Construction`,
      description: service.metaDescription,
    }),
    buildBreadcrumbSchema([
      { name: "Home", url: `${siteConfig.url}/` },
      { name: "Services", url: `${siteConfig.url}/services/` },
      { name: service.title, url: pageUrl },
    ]),
    buildServiceSchema({
      id: serviceId,
      name: service.title,
      url: pageUrl,
      description: service.metaDescription,
    })
  );

  return (
    <>
      <JsonLd data={schema as Record<string, unknown>} />
      <PageHero title={service.title} bgImage={service.heroImage} />

      <section className="pt-[108px] pb-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-20">
            <FadeIn direction="right" className="lg:col-span-3">
              <p className="text-sm font-bold text-[#e09f18] uppercase tracking-widest mb-3">
                Devil&apos;s Thumb Construction
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13251e] font-[Montserrat] mb-4 leading-tight">
                {service.title}
              </h2>
              <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-6" />
              <p className="text-[#5d6661] leading-relaxed text-lg mb-6">{service.intro}</p>
              <Link
                href="/contact"
                className="inline-block bg-[#e09f18] text-white px-8 py-3 rounded-[30px] font-semibold hover:bg-[#c5860e] transition-colors"
              >
                Get a Free Consultation
              </Link>
            </FadeIn>
            <FadeIn direction="left" className="lg:col-span-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

          {/* What it is + Who it's for */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <FadeIn>
              <div className="bg-[#f7f7f5] rounded-xl p-8 h-full">
                <h3 className="text-xl font-bold text-[#13251e] font-[Montserrat] mb-4">
                  What Is {service.title}?
                </h3>
                <p className="text-[#5d6661] leading-relaxed">{service.whatItIs}</p>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="bg-[#f7f7f5] rounded-xl p-8 h-full">
                <h3 className="text-xl font-bold text-[#13251e] font-[Montserrat] mb-4">
                  Who Is This For?
                </h3>
                <p className="text-[#5d6661] leading-relaxed">{service.whoItsFor}</p>
              </div>
            </FadeIn>
          </div>

          {/* What's included */}
          <FadeIn>
            <div className="mb-20">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#13251e] font-[Montserrat] mb-6">
                What&apos;s Included
              </h3>
              <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-8" />
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#5d6661]">
                    <span className="mt-1 w-5 h-5 rounded-full bg-[#e09f18]/20 flex items-center justify-center shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[#e09f18]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Service area */}
          <FadeIn>
            <div className="bg-[#13251e] rounded-2xl p-8 sm:p-12 mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-[Montserrat] mb-4">
                Service Area
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">{service.areaNote}</p>
              <p className="text-gray-400 text-sm">
                Call{" "}
                <a href="tel:720-322-6899" className="text-[#e09f18] font-semibold hover:text-[#c5860e] transition-colors">
                  720-322-6899
                </a>{" "}
                to confirm service availability in your area.
              </p>
            </div>
          </FadeIn>

          {/* Back + CTA */}
          <FadeIn>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <Link href="/services" className="text-[#5d6661] hover:text-[#13251e] font-medium transition-colors">
                ← Back to All Services
              </Link>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:720-322-6899"
                  className="px-8 py-3 rounded-[30px] border-2 border-[#13251e] text-[#13251e] font-semibold hover:bg-[#13251e] hover:text-white transition-all text-center"
                >
                  Call 720-322-6899
                </a>
                <Link
                  href="/contact"
                  className="px-8 py-3 rounded-[30px] bg-[#e09f18] text-white font-semibold hover:bg-[#c5860e] transition-colors text-center"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
