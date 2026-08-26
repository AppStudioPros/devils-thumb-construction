import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import FadeIn from '@/components/shared/FadeIn';
import { JsonLd } from "@/components/JsonLd";
import { buildWebPageSchema, toGraph } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Devil's Thumb Construction — a detail-driven Colorado general contractor serving the Front Range with design-build expertise, transparent pricing, and quality craftsmanship.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Devil's Thumb Construction",
    description:
      "Design-build general contractor serving the Colorado Front Range. Built Right. Built Local.",
    url: "/about/",
  },
};

// Organization is already emitted globally in layout.tsx — reference it, don't repeat it
const aboutSchema = toGraph(
  buildWebPageSchema({
    type: "AboutPage",
    id: `${siteConfig.url}/about/#webpage`,
    url: `${siteConfig.url}/about/`,
    name: "About Devil's Thumb Construction",
    description:
      "Colorado design-build general contractor serving Denver, Arvada, Boulder, and surrounding Front Range communities.",
  })
);

const whatWeBuild = [
  "New home construction",
  "Custom home design & construction",
  "Home renovations & additions",
  "Remodeling",
  "Garage ADU conversions",
  "Kitchen & bathroom remodeling",
  "Basement finishing",
  "Exterior renovation",
  "Concrete flatwork & foundations",
  "Excavation",
  "Custom stone work",
  "Licensed electrical, plumbing & HVAC",
  "Architectural design",
  "Construction consulting & management",
  "Insurance restoration work",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema as Record<string, unknown>} />
      <PageHero title="About" bgImage="/images/colorado-mountains.jpg" />

      <section className="pt-16 sm:pt-[108px] pb-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            <FadeIn direction="right">
              <div className="py-8 sm:py-12 pr-0 lg:pr-16">
                <p className="text-sm font-bold text-[#13251e] uppercase tracking-widest mb-3">
                  Devil&apos;s Thumb Construction
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#13251e] font-[Montserrat] leading-tight mb-4">
                  Built Right.<br />Built Local.
                </h2>
                <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-6" />
                <p className="text-[#5d6661] leading-relaxed mb-8">
                  Devil&apos;s Thumb Construction is a residential and light commercial general contractor serving the Colorado Front Range. We provide design-build construction services — managing architectural design, permits, trade coordination, and construction under one roof. Our service area covers approximately 40 miles from Arvada, Colorado, including Denver, Boulder, Golden, Lakewood, Westminster, Broomfield, Thornton, Longmont, and surrounding communities.
                </p>
                <ul className="space-y-3">
                  <li className="font-bold text-[#13251e]">Clarity: Transparent Scopes, Schedules, And Pricing.</li>
                  <li className="italic text-[#e09f18]">Craft: Quality Materials And Proven Methods.</li>
                  <li className="font-bold text-[#13251e]">Care: Jobsite Safety And Respect For Your Home And Neighbors.</li>
                  <li className="italic text-[#e09f18]">Colorado: Mountain-Ready Solutions For Weather, Drainage, And Energy Efficiency.</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                <Image
                  src="/images/mountain-home.jpg"
                  alt="Custom mountain home built by Devil's Thumb Construction on the Colorado Front Range"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            <FadeIn direction="right">
              <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                <Image
                  src="/images/living-room.jpg"
                  alt="Finished living room interior by Devil's Thumb Construction"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="bg-[#f7f7f5] py-10 px-4 sm:py-16 sm:px-8 lg:px-16">
                <p className="text-[#e09f18] font-semibold tracking-widest uppercase text-sm mb-3">
                  Our Mission
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#13251e] font-[Montserrat] leading-tight mb-4">
                  Building With Integrity, Craft, And Care
                </h2>
                <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-6" />
                <p className="italic text-[#e09f18] leading-relaxed mb-6">
                  We believe in honest communication, clear expectations, and transparent pricing—so our clients always know where their project stands.
                </p>
                <h3 className="text-xl font-bold text-[#13251e] font-[Montserrat] mb-3">
                  Craftsmanship That Lasts
                </h3>
                <p className="text-[#5d6661] leading-relaxed mb-6">
                  From foundation to finish, we use proven methods, quality materials, and skilled trades to deliver homes and spaces built for generations.
                </p>
                <p className="italic text-[#e09f18] leading-relaxed">
                  We care deeply about our clients, our community, and the lasting impact of every project we take on.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-16 sm:py-20 bg-[#f7f7f5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm font-bold text-[#e09f18] uppercase tracking-widest mb-3">Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#13251e] font-[Montserrat] mb-4">What We Build</h2>
            <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-8" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {whatWeBuild.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#5d6661]">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#e09f18] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="inline-block bg-[#e09f18] text-white px-8 py-3 rounded-[30px] font-semibold hover:bg-[#c5860e] transition-colors"
            >
              View All Services
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-16 sm:py-20 bg-[#13251e]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm font-bold text-[#e09f18] uppercase tracking-widest mb-3">Service Area</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-[Montserrat] mb-4">Where We Work</h2>
            <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-6" />
            <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl">
              We serve residential and light commercial projects within approximately 40 miles of Arvada, Colorado — covering the following Front Range communities and beyond:
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {siteConfig.serviceAreas.map((city) => (
                <span key={city} className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                  {city}
                </span>
              ))}
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Not sure if you&apos;re in our service area? Call us at{" "}
              <a href="tel:720-322-6899" className="text-[#e09f18] font-semibold hover:underline">
                720-322-6899
              </a>
              .
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#e09f18] text-white px-8 py-3 rounded-[30px] font-semibold hover:bg-[#c5860e] transition-colors"
            >
              Get a Free Consultation
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
