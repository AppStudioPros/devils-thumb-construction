import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import FadeIn from "@/components/shared/FadeIn";
import { JsonLd } from "@/components/JsonLd";
import {
  buildWebPageSchema,
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  toGraph,
} from "@/lib/seo/schema";
import { siteConfig } from "@/lib/seo/config";
import { locations, getLocationBySlug } from "@/data/locations";
import { services } from "@/data/services";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) return { title: "Location Not Found" };

  return {
    title: `Construction Services in ${location.name}, Colorado | Devils Thumb Construction`,
    description: `Devils Thumb Construction serves ${location.name}, ${location.county}. Design-build general contractor handling remodels, new construction, additions, and licensed trades. Call 720-322-6899.`,
    alternates: { canonical: `/locations/${location.slug}/` },
    openGraph: {
      title: `Construction Services in ${location.name}, CO | Devils Thumb Construction`,
      description: `General contractor serving ${location.name}, Colorado. Remodels, new construction, kitchen and bathroom updates, basement finishing, and more.`,
      url: `/locations/${location.slug}/`,
    },
  };
}

/* Location-specific FAQ content */
const locationFaqs: Record<string, [{ q: string; a: string }, { q: string; a: string }]> = {
  denver: [
    {
      q: "Does Devils Thumb Construction work in Denver?",
      a: "Yes. We work across Denver on remodels, kitchen and bathroom updates, home additions, basement finishing, garage ADU conversions, and full renovations. Denver CPD handles permitting, and we manage that process as part of every project.",
    },
    {
      q: "Can you help with a garage ADU conversion in Denver?",
      a: "Yes. Garage ADUs are a popular option in Denver for adding rental income or housing a family member without moving. We handle the design, permits, and full conversion under one roof.",
    },
  ],
  lakewood: [
    {
      q: "Does Devils Thumb Construction work in Lakewood?",
      a: "Yes. We work throughout Lakewood on remodels, basement finishes, kitchen and bathroom updates, exterior renovations, and home additions. Jefferson County handles permits for Lakewood, and we manage permitting as part of the job.",
    },
    {
      q: "Can you finish an unfinished basement in Lakewood?",
      a: "Yes. Most Lakewood ranch homes have unfinished basements that are good candidates for conversion to living space. We handle egress windows, framing, insulation, electrical, plumbing, drywall, and finishing.",
    },
  ],
  golden: [
    {
      q: "Does Devils Thumb Construction work in Golden?",
      a: "Yes. We work in Golden on hillside builds, remodels, excavation, concrete flatwork, stone work, and exterior renovations. The sloped terrain and rock in Golden requires site planning that we build into every estimate.",
    },
    {
      q: "Do you build retaining walls in Golden?",
      a: "Yes. Retaining walls are common in Golden given the sloped lots. We design and build structural retaining walls using natural stone, concrete block, or poured concrete depending on the site conditions.",
    },
  ],
  arvada: [
    {
      q: "Does Devils Thumb Construction work in Arvada?",
      a: "Yes. Arvada is at the center of our service area. We work across the city on remodels, additions, basement finishes, kitchen and bathroom updates, and new construction from Olde Town to the western subdivisions.",
    },
    {
      q: "Who handles permits for construction projects in Arvada?",
      a: "Arvada has its own building department for projects inside city limits. Unincorporated areas on the Arvada perimeter permit through Jefferson County. We confirm the correct jurisdiction for every project before submitting.",
    },
  ],
  westminster: [
    {
      q: "Does Devils Thumb Construction work in Westminster?",
      a: "Yes. We work throughout Westminster on remodels, basement finishes, kitchen and bathroom updates, exterior work, and home additions. Westminster spans Jefferson and Adams counties, and we confirm the correct building department before permitting.",
    },
    {
      q: "Which county handles permits for my Westminster address?",
      a: "Westminster sits across Jefferson and Adams counties. Which building department handles your permit depends on your exact address. We verify jurisdiction early so there are no surprises during the permitting process.",
    },
  ],
  thornton: [
    {
      q: "Does Devils Thumb Construction work in Thornton?",
      a: "Yes. We work throughout Thornton on kitchen and bathroom remodels, basement finishes, exterior renovations, and full home updates. Adams County handles permitting for Thornton.",
    },
    {
      q: "What kinds of projects do you do in Thornton?",
      a: "We handle kitchen remodels, bathroom updates, basement finishing, exterior siding and roofing, home additions, and concrete flatwork in Thornton. Call 720-322-6899 to talk through your project.",
    },
  ],
  broomfield: [
    {
      q: "Does Devils Thumb Construction work in Broomfield?",
      a: "Yes. We work throughout Broomfield on kitchen remodels, basement finishes, full renovations, and exterior updates. Broomfield is its own combined city and county, so permits go through the Broomfield Community Development department.",
    },
    {
      q: "Is Devils Thumb Construction licensed to work in Broomfield?",
      a: "Yes. We are a registered Colorado LLC operating as a licensed general contractor. All work is permitted, inspected, and completed to Colorado building codes.",
    },
  ],
  boulder: [
    {
      q: "Does Devils Thumb Construction work in Boulder?",
      a: "Yes. We work in Boulder on remodels, home additions, kitchen and bathroom updates, architectural design, and exterior renovations. Boulder's building department has detailed review requirements, and we come prepared with complete documentation.",
    },
    {
      q: "Can you handle the design review process for Boulder projects?",
      a: "Yes. We offer architectural design services in-house, which helps navigate Boulder's design review process for additions and significant exterior changes. Having design and construction under one roof keeps the project consistent from drawings through build.",
    },
  ],
  longmont: [
    {
      q: "Does Devils Thumb Construction work in Longmont?",
      a: "Yes. We work throughout Longmont on remodels, kitchen and bathroom updates, basement finishing, home additions, and electrical and plumbing work. Permits run through the city of Longmont's building department.",
    },
    {
      q: "Do older Longmont homes need electrical updates during a remodel?",
      a: "Often yes. Longmont's older southeast neighborhoods have homes from the 1940s and 1950s. A full kitchen or basement remodel typically requires bringing wiring and plumbing up to current code. We carry licensed electrical and plumbing in-house so these updates are part of the same project.",
    },
  ],
  louisville: [
    {
      q: "Does Devils Thumb Construction work in Louisville?",
      a: "Yes. We work throughout Louisville's neighborhoods on kitchen and bathroom remodels, basement finishes, exterior renovations, and home updates. Louisville's building department is well-organized and permitting has been running smoothly.",
    },
    {
      q: "What should I know about remodeling an older home in Louisville?",
      a: "Many Louisville homes from the 1970s and 1980s have dated electrical panels, galvanized supply lines, and layouts that weren't designed for modern use. A full remodel often includes mechanical upgrades. We carry licensed electrical and plumbing in-house to handle that work cleanly.",
    },
  ],
  superior: [
    {
      q: "Does Devils Thumb Construction work in Superior?",
      a: "Yes. We work in Superior on new home construction, exterior renovations, insurance restoration, and full interior remodels. The Marshall Fire in 2021 drove significant reconstruction activity, and we've worked alongside homeowners navigating that process.",
    },
    {
      q: "Can Devils Thumb help with insurance restoration work in Superior?",
      a: "Yes. We work with homeowners on insurance-related repairs and reconstruction, including scope documentation, coordination with adjusters, and code-compliant rebuilds. Call 720-322-6899 to talk through what your project involves.",
    },
  ],
  erie: [
    {
      q: "Does Devils Thumb Construction work in Erie?",
      a: "Yes. We work throughout Erie on new home construction, garage builds, concrete flatwork, remodels, and home additions. Erie's fast growth means we're active in both the newer developments and the older neighborhoods near downtown.",
    },
    {
      q: "Which building department handles Erie construction permits?",
      a: "Erie spans Boulder and Weld counties. Which building department applies depends on your property's location within those county boundaries. We verify jurisdiction before submitting any permit application.",
    },
  ],
  evergreen: [
    {
      q: "Does Devils Thumb Construction work in Evergreen?",
      a: "Yes. We build and renovate homes in Evergreen with the engineering and material choices that 7,000 feet requires. That means deeper footings, proper snow load roofing, drainage designed for mountain conditions, and HVAC sized for the heating demands.",
    },
    {
      q: "What makes building in Evergreen different from Front Range construction?",
      a: "Frost depths run 36 to 48 inches in Evergreen, snow loads are substantially higher than in Denver, and UV exposure is more intense at elevation. Exterior materials need to be selected with those conditions in mind, and drainage planning is critical given the slope of most properties.",
    },
  ],
  conifer: [
    {
      q: "Does Devils Thumb Construction work in Conifer?",
      a: "Yes. We work throughout Conifer on mountain home builds, renovations, garages, excavation, and site work. Conifer is largely unincorporated Jefferson County, and most projects permit through the county building department.",
    },
    {
      q: "What should I know about building on a mountain lot in Conifer?",
      a: "Conifer properties often involve significant slope, limited access, well and septic systems, and rocky terrain that requires careful excavation planning. We factor all of that into the scope before breaking ground. For projects affecting a private well or septic, we coordinate with Jefferson County Environmental Health.",
    },
  ],
  morrison: [
    {
      q: "Does Devils Thumb Construction work in Morrison?",
      a: "Yes. We work in Morrison on remodels, custom home builds, stone work, excavation, and exterior renovations. The town's canyon character and flood plain considerations along Bear Creek are factors we account for in every project.",
    },
    {
      q: "Are there flood plain restrictions for building near Bear Creek in Morrison?",
      a: "Some properties along Bear Creek fall within a FEMA-designated flood plain. Projects affecting drainage or site grade in those areas require an additional review step. We identify flood plain status early in the planning process so it doesn't become a surprise during permitting.",
    },
  ],
  "idaho-springs": [
    {
      q: "Does Devils Thumb Construction work in Idaho Springs?",
      a: "Yes. We work on mountain homes in Idaho Springs and the Clear Creek corridor, handling new construction, renovations, excavation, and exterior work. Projects permit through Clear Creek County.",
    },
    {
      q: "Does Idaho Springs have historic preservation requirements?",
      a: "Properties in the historic downtown core of Idaho Springs may require review by the local historic preservation board for exterior changes. We identify whether a project falls within a designated historic area before the design phase so we can plan accordingly.",
    },
  ],
};

/* Service short descriptions for the grid cards */
const serviceDescriptions: Record<string, string> = {
  "new-home-construction": "Ground-up residential builds from design through final walkthrough.",
  remodeling: "Targeted or whole-home remodels that improve how your space looks and works.",
  "garage-adu": "Convert your garage into a permitted, livable accessory dwelling unit.",
  "insurance-work": "Storm and hail damage restoration completed to code and to your home's original standard.",
  "architectural-design": "Buildable plans from concept through permit-ready drawings.",
  consulting: "Project feasibility, scope review, and budget guidance before you commit.",
  "project-management": "Trade coordination, scheduling, and quality oversight for your build.",
  "concrete-flatwork-foundations": "Driveways, patios, and structural foundations built for Colorado's freeze-thaw conditions.",
  excavation: "Site clearing, grading, and foundation excavation for new construction and site prep.",
  "custom-stone-work": "Fireplaces, retaining walls, veneer, and decorative masonry built to last.",
  "custom-home-design-construction": "Your home, your design, built from the ground up with design and construction under one roof.",
  "home-renovations-additions": "Expand your square footage or update what you have with a well-built addition.",
  garages: "Attached and detached garage builds, from basic storage to finished multi-bay shops.",
  "kitchen-bathroom-remodeling": "Kitchen and bathroom remodels focused on the details that actually matter.",
  "living-dining-remodeling": "Open concept conversions, floor plan reconfigurations, and living space updates.",
  "basement-finishing": "Convert an unfinished basement into functional living space built to the same standard as the rest of your home.",
  "interior-design-finishing": "Material selections, cabinetry, flooring, and finishes that pull the project together.",
  "exterior-renovation": "Siding, roofing, windows, and doors selected for Colorado's climate.",
  electrical: "Licensed electrical work integrated into your project from rough-in through finish.",
  plumbing: "Licensed plumbing for new construction, remodels, and fixture replacements.",
  hvac: "Heating and cooling systems properly sized and installed for Colorado's temperature range.",
};

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const location = getLocationBySlug(city);

  if (!location) notFound();

  const faqs = locationFaqs[location.slug] ?? null;
  const featuredServiceData = location.featuredServices
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean);

  const pageUrl = `${siteConfig.url}/locations/${location.slug}/`;

  const schema = toGraph(
    buildWebPageSchema({
      type: "WebPage",
      id: `${pageUrl}#webpage`,
      url: pageUrl,
      name: `Construction Services in ${location.name}, Colorado | Devils Thumb Construction`,
      description: `Devils Thumb Construction serves ${location.name}, ${location.county}. General contractor handling remodels, new construction, additions, and licensed trades.`,
    }),
    buildBreadcrumbSchema([
      { name: "Home", url: `${siteConfig.url}/` },
      { name: "Service Areas", url: `${siteConfig.url}/locations/` },
      { name: location.name, url: pageUrl },
    ]),
    buildOrganizationSchema(),
    ...(faqs
      ? [
          {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faqpage`,
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          },
        ]
      : [])
  );

  return (
    <>
      <JsonLd data={schema as Record<string, unknown>} />

      {/* Hero */}
      <PageHero
        title={`Construction Services in ${location.name}, Colorado`}
        bgImage="/images/colorado-mountains.jpg"
      />

      {/* Intro */}
      <section className="pt-16 sm:pt-[108px] pb-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm font-bold text-[#e09f18] uppercase tracking-widest mb-3">
              {location.name}, {location.county}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#13251e] font-[Montserrat] mb-4">
              Serving {location.name} and the Surrounding Area
            </h2>
            <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-6" />
            <p className="text-[#5d6661] leading-relaxed max-w-3xl mb-4">
              {location.description}
            </p>
            <p className="text-[#5d6661] leading-relaxed max-w-3xl text-sm italic">
              {location.localNote}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-[#f7f7f5]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm font-bold text-[#e09f18] uppercase tracking-widest mb-3">
              What We Do in {location.name}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#13251e] font-[Montserrat] mb-4">
              Services We Offer Here
            </h2>
            <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-10" />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServiceData.map((service, i) => {
              if (!service) return null;
              const description =
                serviceDescriptions[service.slug] ?? service.shortDescription;
              return (
                <FadeIn key={service.slug} delay={i * 60}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block bg-white rounded-xl p-6 border border-gray-100 hover:border-[#e09f18] hover:shadow-md transition-all h-full"
                  >
                    <h3 className="text-lg font-bold text-[#13251e] font-[Montserrat] mb-2 group-hover:text-[#e09f18] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#5d6661] text-sm leading-relaxed mb-4">
                      {description}
                    </p>
                    <span className="text-sm font-semibold text-[#e09f18] group-hover:underline">
                      Learn more →
                    </span>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn delay={400}>
            <div className="mt-10">
              <Link
                href="/services"
                className="inline-block text-[#13251e] font-semibold border border-[#13251e] px-6 py-3 rounded-[30px] hover:bg-[#13251e] hover:text-white transition-colors"
              >
                View All Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why DTC */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm font-bold text-[#e09f18] uppercase tracking-widest mb-3">
              Why Devils Thumb Construction
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#13251e] font-[Montserrat] mb-4">
              What We Bring to Every {location.name} Project
            </h2>
            <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-8" />
            <ul className="space-y-4 max-w-2xl">
              <li className="flex items-start gap-4">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#e09f18] shrink-0" />
                <div>
                  <span className="font-bold text-[#13251e]">Licensed trades in-house.</span>{" "}
                  <span className="text-[#5d6661]">
                    We carry electrical, plumbing, and HVAC under one license, which keeps
                    coordination tight and quality consistent across every system in your home.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#e09f18] shrink-0" />
                <div>
                  <span className="font-bold text-[#13251e]">Design-build under one roof.</span>{" "}
                  <span className="text-[#5d6661]">
                    We handle architectural design, permits, and construction together, which
                    cuts the gaps that cause cost overruns and scheduling problems when design
                    and build are split between separate firms.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#e09f18] shrink-0" />
                <div>
                  <span className="font-bold text-[#13251e]">Warranty on our work.</span>{" "}
                  <span className="text-[#5d6661]">
                    We stand behind what we build. If something isn't right, we fix it.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#e09f18] shrink-0" />
                <div>
                  <span className="font-bold text-[#13251e]">Free initial consultation.</span>{" "}
                  <span className="text-[#5d6661]">
                    We talk through your project before you commit. No pressure, no obligation.
                    You'll know what's involved and what it will realistically cost before any
                    contracts are signed.
                  </span>
                </div>
              </li>
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      {faqs && (
        <section className="py-16 sm:py-20 bg-[#f7f7f5]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <p className="text-sm font-bold text-[#e09f18] uppercase tracking-widest mb-3">
                Common Questions
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#13251e] font-[Montserrat] mb-4">
                {location.name} FAQ
              </h2>
              <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-8" />
              <dl className="space-y-8 max-w-3xl">
                {faqs.map((item) => (
                  <div key={item.q}>
                    <dt className="text-lg font-bold text-[#13251e] font-[Montserrat] mb-2">
                      {item.q}
                    </dt>
                    <dd className="text-[#5d6661] leading-relaxed">{item.a}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[#13251e]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm font-bold text-[#e09f18] uppercase tracking-widest mb-3">
              Start Your Project
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-[Montserrat] mb-4">
              Ready to start your {location.name} project?
            </h2>
            <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-6" />
            <p className="text-gray-300 leading-relaxed max-w-xl mb-8">
              Call us at{" "}
              <a
                href="tel:720-322-6899"
                className="text-[#e09f18] font-semibold hover:text-[#c5860e] transition-colors"
              >
                720-322-6899
              </a>{" "}
              or send a message and we'll get back to you promptly. The first consultation
              is free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-[#e09f18] text-white px-8 py-3 rounded-[30px] font-semibold hover:bg-[#c5860e] transition-colors text-center"
              >
                Get a Free Consultation
              </Link>
              <a
                href="tel:720-322-6899"
                className="inline-block border border-white text-white px-8 py-3 rounded-[30px] font-semibold hover:bg-white hover:text-[#13251e] transition-colors text-center"
              >
                Call 720-322-6899
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
