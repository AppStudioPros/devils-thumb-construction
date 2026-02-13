import Link from 'next/link';

const services = [
  {
    title: 'Custom Homes & Additions',
    subtitle: 'Build & Expand with Confidence',
    description: 'From new custom builds to seamless renovations and additions, we create spaces tailored to your lifestyle and vision.',
    icon: '🏠',
  },
  {
    title: 'Remodeling & Interiors',
    subtitle: 'Transform Every Room',
    description: 'From kitchens and bathrooms to living spaces and basements, we remodel and finish interiors to be functional, modern, and inviting.',
    icon: '🔨',
  },
  {
    title: 'Electrical & Plumbing',
    subtitle: 'Licensed Expertise for Every Project',
    description: 'From full installations to upgrades and repairs, our licensed electricians and plumbers keep your home running safely and efficiently.',
    icon: '⚡',
  },
  {
    title: 'Residential & Commercial HVAC',
    subtitle: 'Heating, Cooling & Comfort',
    description: 'We design, install, and service residential and commercial HVAC systems for energy-efficient comfort year-round.',
    icon: '❄️',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#1a2e1a] font-semibold tracking-widest uppercase text-sm mb-3">
            What We Do Best
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From new builds to renovations, we bring quality, clarity, and craftsmanship to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-[#f5f3f0] rounded-lg p-8 hover:bg-[#1a2e1a] transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm font-semibold text-[#1a2e1a] group-hover:text-[#c8a96e] mb-3 transition-colors">
                {service.subtitle}
              </p>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block bg-[#1a2e1a] text-white px-8 py-4 rounded font-semibold hover:bg-[#2a4a2a] transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
