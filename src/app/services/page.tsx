import Link from 'next/link';

const services = [
  {
    title: 'Custom Home Design & Construction',
    description: 'Your home should be a reflection of your lifestyle, not just a set of walls and a roof. We work with you from the ground up, providing tailored architectural designs and handling the entire construction process with a focus on durability and detail.',
  },
  {
    title: 'Home Renovations & Additions',
    description: 'When your home needs more space or a fresh look, our team delivers seamless renovations and additions. We blend new work with existing structures so your home feels natural, functional, and complete.',
  },
  {
    title: 'Garages',
    description: 'We design and build garages that go beyond storage. Whether you need a standalone structure, an addition, or a renovation, we create spaces that are practical, secure, and built to match your property.',
  },
  {
    title: 'Kitchen & Bathroom Remodeling',
    description: 'Kitchens and bathrooms are the most-used spaces in any home. We update layouts, replace outdated fixtures, and bring in high-quality finishes that make everyday routines easier and more enjoyable.',
  },
  {
    title: 'Living & Dining Remodeling',
    description: 'We help you reimagine these rooms with open layouts, updated lighting, and fresh finishes that enhance both style and usability. From cozy family rooms to elegant dining spaces, we create interiors that feel modern and inviting.',
  },
  {
    title: 'Basement Finishing & Interiors',
    description: 'We transform unfinished basements into fully functional extensions of your home—home theater, office, gym, or guest suite. Our services include flooring, walls, lighting, and trim.',
  },
  {
    title: 'Interior Design & Finishing Touches',
    description: 'Details make the difference. We bring everything together with carefully selected finishes, including cabinetry, flooring, trim, and paint—creating cohesive, stylish interiors.',
  },
  {
    title: 'Exterior Renovation',
    description: 'Curb appeal matters, and so does protection from the Colorado elements. We upgrade siding, windows, doors, roofing, and outdoor living areas for energy efficiency, durability, and style.',
  },
  {
    title: 'Licensed Electrical',
    description: 'Our licensed electricians handle everything from new wiring and panel upgrades to lighting, outlets, and system installs—ensuring your project meets the highest safety standards.',
  },
  {
    title: 'Residential & Commercial HVAC',
    description: 'We provide licensed HVAC installation and service for both residential and commercial projects. From furnaces and air conditioning to ventilation and indoor air quality systems.',
  },
  {
    title: 'Licensed Plumbing',
    description: 'From new construction rough-ins to fixture replacements and remodel updates, our licensed plumbers deliver dependable solutions for kitchens, bathrooms, utility lines, and more.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#1a2e1a] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8a96e] font-semibold tracking-widest uppercase text-sm mb-4">
            Well Delivered
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Quality Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            From new builds to renovations, we bring quality, clarity, and craftsmanship to every project.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="bg-[#f5f3f0] rounded-lg p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#1a2e1a] font-bold text-sm bg-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-block bg-[#1a2e1a] text-white px-8 py-4 rounded font-semibold hover:bg-[#2a4a2a] transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
