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
    description: 'We design, install, and service residential and commercial HVAC systems. From furnaces and A/C to ventilation, we deliver energy-efficient comfort.',
    icon: '❄️',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#e09f18] font-semibold tracking-widest uppercase text-sm mb-3">
            What We Do Best
          </p>
          <h2 className="text-[45px] sm:text-[60px] lg:text-[75px] font-bold text-gray-900 mb-4 font-[Montserrat] leading-tight">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-[#f5f3f0] rounded-lg p-8 hover:bg-[#13251e] transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors font-[Montserrat]">
                {service.title}
              </h3>
              <p className="text-sm font-semibold text-[#13251e] group-hover:text-[#e09f18] mb-3 transition-colors">
                {service.subtitle}
              </p>
              <p className="text-sm text-[#5d6661] group-hover:text-gray-300 leading-relaxed transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block bg-[#e09f18] text-white px-8 py-4 rounded-[30px] font-semibold lowercase hover:bg-[#c5860e] transition-colors"
          >
            view all services
          </Link>
        </div>
      </div>
    </section>
  );
}
