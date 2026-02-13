import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/shared/FadeIn';

const services = [
  {
    title: 'Custom Homes & Additions',
    subtitle: 'Design-Build Excellence',
    description: 'From the ground up or expanding what you have, we deliver custom homes and additions built to last.',
  },
  {
    title: 'Remodeling & Interiors',
    subtitle: 'Kitchens, Baths & More',
    description: 'Transform your living spaces with expert remodeling that combines style, function, and quality craftsmanship.',
  },
  {
    title: 'Electrical & Plumbing',
    subtitle: 'Licensed & Insured',
    description: 'Safe, reliable electrical and plumbing services handled by licensed professionals for every project.',
  },
  {
    title: 'Residential & Commercial HVAC',
    subtitle: 'Year-Round Comfort',
    description: 'Licensed HVAC installation and service to keep your home or business comfortable in every season.',
  },
];

export default function ServicesOverview() {
  return (
    <section className="relative py-24">
      <Image src="/images/blueprint-bg.jpg" alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-[#13251e]/85" />
      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-[#e09f18] font-semibold tracking-widest uppercase text-sm mb-3">
              What We Do Best
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[Montserrat] mb-4">
              Our Services
            </h2>
            <div className="w-[60px] h-[3px] bg-[#2c4b40] mx-auto mb-6" />
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              From custom builds to licensed trade work, we deliver quality construction services across the Colorado Front Range.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 100}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col h-full border-2 border-transparent hover:border-[#e09f18] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-bold text-[#13251e] font-[Montserrat] mb-1">{s.title}</h3>
                <p className="text-sm font-bold text-[#13251e] mb-3">{s.subtitle}</p>
                <p className="text-[#5d6661] text-sm leading-relaxed mb-6 flex-1">{s.description}</p>
                <Link
                  href="/services"
                  className="inline-block bg-[#e09f18] text-white text-center px-6 py-2.5 rounded-[30px] text-sm font-semibold hover:bg-[#c5860e] hover:scale-105 transition-all"
                >
                  Learn More
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
