import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import FadeIn from "@/components/shared/FadeIn";
import { JsonLd } from "@/components/JsonLd";
import { buildWebPageSchema, buildBreadcrumbSchema, toGraph } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/seo/config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Devil's Thumb Construction — service area, process, timelines, pricing, permits, ADUs, insurance work, and more. Serving the Colorado Front Range.",
  alternates: { canonical: "/faq/" },
  openGraph: {
    title: "FAQ | Devil's Thumb Construction",
    description:
      "Common questions about working with Devil's Thumb Construction — service area, process, timelines, ADUs, insurance work, and more.",
    url: "/faq/",
  },
};

interface FaqItem {
  q: string;
  a: string;
  link?: { text: string; href: string };
}

const faqs: { category: string; items: FaqItem[] }[] = [
  {
    category: "Service Area",
    items: [
      {
        q: "Where does Devil\'s Thumb Construction work?",
        a: "We serve the Colorado Front Range within approximately 40 miles of Arvada, including Denver, Lakewood, Golden, Westminster, Thornton, Broomfield, Boulder, Longmont, Louisville, Superior, Erie, Evergreen, Conifer, Morrison, and Idaho Springs. Not sure if you\'re in our range? Call us at 720-322-6899 and we\'ll let you know.",
        link: { text: "Contact us to confirm your area", href: "/contact" },
      },
      {
        q: "Do you work in the mountains or only on the Front Range?",
        a: "We serve communities in and around the foothills including Evergreen, Conifer, Morrison, and Idaho Springs. We build mountain-ready — our work accounts for Colorado weather, drainage, and energy efficiency requirements specific to higher elevations.",
      },
    ],
  },
  {
    category: "Services",
    items: [
      {
        q: "What types of construction does Devil\'s Thumb Construction handle?",
        a: "We handle residential and light commercial construction including new home construction, remodeling, home additions, garages, ADUs (accessory dwelling units), basement finishing, kitchen and bathroom remodeling, exterior renovation, concrete flatwork and foundations, excavation, custom stone work, architectural design, project consulting and management, and insurance restoration work. We also carry licensed electrical, plumbing, and HVAC in-house.",
        link: { text: "View all services", href: "/services" },
      },
      {
        q: "What is an ADU and do you build them?",
        a: "An ADU (accessory dwelling unit) is a secondary living space on the same property as a primary home — a detached cottage, a converted garage, or an addition with its own entrance. Yes, we design and build ADUs. They\'re a popular option in Colorado for generating rental income, housing family members, or adding long-term property value.",
        link: { text: "Learn about our Garage ADU service", href: "/services/garage-adu" },
      },
      {
        q: "Do you handle insurance restoration work?",
        a: "Yes. We work with homeowners on insurance-related repairs and reconstruction — including storm damage, hail damage, and other covered losses. We help coordinate the scope of work and ensure repairs are completed to code and to the standard your home deserves.",
        link: { text: "Learn about our Insurance Work service", href: "/services/insurance-work" },
      },
      {
        q: "Can you handle the entire project from design to completion?",
        a: "Yes. Our design-build process means we manage architectural design, permits, trade coordination, and construction under one roof. This keeps your project aligned, on schedule, and avoids the miscommunication that often happens when design and construction are handled by separate firms.",
        link: { text: "Learn about our Architectural Design service", href: "/services/architectural-design" },
      },
    ],
  },
  {
    category: "Process",
    items: [
      {
        q: "How do I get started with Devil\'s Thumb Construction?",
        a: "Call us at 720-322-6899 or send a message through our contact form. We\'ll schedule a free consultation to discuss your project, walk the site if needed, and outline next steps. No commitment required for the initial conversation.",
        link: { text: "Contact us for a free consultation", href: "/contact" },
      },
      {
        q: "Do you pull permits?",
        a: "Yes. We handle permitting as part of our process. All work is completed to Colorado building codes and inspected by the appropriate local authority.",
      },
      {
        q: "Will I have one point of contact throughout my project?",
        a: "Yes. We prioritize clear communication and transparent updates throughout every project. You\'ll know who to call, where things stand, and what\'s coming next.",
        link: { text: "Learn about our Construction Management service", href: "/services/project-management" },
      },
    ],
  },
  {
    category: "Timelines",
    items: [
      {
        q: "How long does a kitchen or bathroom remodel take?",
        a: "Most kitchen or bathroom remodels take between 4 and 10 weeks depending on the scope, material availability, and permit timelines. Larger structural changes or custom work can take longer. We\'ll give you a realistic schedule before work begins.",
        link: { text: "Learn about our Kitchen & Bathroom Remodeling service", href: "/services/kitchen-bathroom-remodeling" },
      },
      {
        q: "How long does a custom home build take in Colorado?",
        a: "A custom home build typically takes 10 to 18 months from design through final walkthrough, depending on size, complexity, site conditions, and permit timelines. We\'ll outline a project schedule during the planning phase so you know what to expect.",
        link: { text: "Learn about our New Home Construction service", href: "/services/new-home-construction" },
      },
      {
        q: "How long does basement finishing take?",
        a: "A standard basement finish typically takes 6 to 12 weeks. Timeline depends on the size of the space, finish level, and whether plumbing or electrical rough-in is needed.",
        link: { text: "Learn about our Basement Finishing service", href: "/services/basement-finishing" },
      },
    ],
  },
  {
    category: "Pricing",
    items: [
      {
        q: "How much does a home addition cost in Colorado?",
        a: "Home addition costs vary significantly based on size, complexity, finish level, and site conditions. We provide detailed estimates after reviewing your project — contact us for a free consultation and we\'ll walk through the scope with you.",
        link: { text: "Request a free estimate", href: "/contact" },
      },
      {
        q: "Do you provide free estimates?",
        a: "Yes. We offer a free initial consultation and project discussion. Detailed estimates are provided once we understand the full scope of your project.",
        link: { text: "Get in touch", href: "/contact" },
      },
    ],
  },
  {
    category: "Colorado-Specific",
    items: [
      {
        q: "Do you build to Colorado\'s energy codes and weather requirements?",
        a: "Yes. All our projects meet Colorado\'s current energy codes. We also build with the Front Range climate in mind — that means proper drainage, insulation appropriate to Colorado\'s altitude and temperature swings, and exterior materials selected for durability in hail, UV exposure, and freeze-thaw cycles.",
      },
      {
        q: "Can you help with excavation and site prep for a new build?",
        a: "Yes. We provide excavation and site preparation services as part of new construction projects. This includes grading, foundation excavation, and site clearing.",
        link: { text: "Learn about our Excavation service", href: "/services/excavation" },
      },
    ],
  },
];

const faqSchema = toGraph(
  buildWebPageSchema({
    type: "FAQPage",
    id: `${siteConfig.url}/faq/#webpage`,
    url: `${siteConfig.url}/faq/`,
    name: "Frequently Asked Questions | Devil's Thumb Construction",
    description:
      "Common questions about Devil's Thumb Construction — service area, process, timelines, pricing, ADUs, insurance work, and more.",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: `${siteConfig.url}/` },
    { name: "FAQ", url: `${siteConfig.url}/faq/` },
  ]),
  {
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/faq/#faqpage`,
    mainEntity: faqs.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      }))
    ),
  }
);

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema as Record<string, unknown>} />
      <PageHero title="FAQ" bgImage="/images/dtc-faq-hero.jpg" />

      <section className="pt-16 sm:pt-[108px] pb-16 sm:pb-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-sm font-bold text-[#e09f18] uppercase tracking-widest mb-3">
                Got Questions?
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13251e] font-[Montserrat] mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-[60px] h-[3px] bg-[#2c4b40] mx-auto mb-6" />
              <p className="text-[#5d6661] max-w-2xl mx-auto leading-relaxed">
                Common questions about working with Devil&apos;s Thumb Construction.
                Don&apos;t see yours?{" "}
                <Link href="/contact" className="text-[#e09f18] font-semibold hover:underline">
                  Reach out directly
                </Link>{" "}
                — we&apos;re happy to help.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-14">
            {faqs.map((cat, ci) => (
              <FadeIn key={cat.category} delay={ci * 80}>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#e09f18] mb-6 border-b border-gray-100 pb-3">
                    {cat.category}
                  </h3>
                  <dl className="space-y-8">
                    {cat.items.map((item) => (
                      <div key={item.q}>
                        <dt className="text-lg font-bold text-[#13251e] font-[Montserrat] mb-2">
                          {item.q}
                        </dt>
                        <dd className="text-[#5d6661] leading-relaxed">
                          {item.a}
                          {item.link && (
                            <Link href={item.link.href} className="block mt-2 text-sm text-[#e09f18] font-semibold hover:underline">
                              {item.link.text} →
                            </Link>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA */}
          <FadeIn delay={400}>
            <div className="mt-20 bg-[#13251e] rounded-2xl px-8 py-12 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-[Montserrat] mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-300 mb-8 max-w-md mx-auto">
                Call us at{" "}
                <a href="tel:720-322-6899" className="text-[#e09f18] font-semibold hover:text-[#c5860e] transition-colors">
                  720-322-6899
                </a>{" "}
                or send us a message and we&apos;ll get back to you promptly.
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
