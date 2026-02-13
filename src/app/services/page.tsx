import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Custom Home Design & Construction',
    description: 'Your home should be a reflection of your lifestyle, not just a set of walls and a roof. We work with you from the ground up, providing tailored architectural designs and handling the entire construction process with a focus on durability and detail. From the first plan to the final walkthrough, we ensure your custom home is built to last and crafted to fit your needs perfectly.',
    image: '/images/custom-home.png',
  },
  {
    title: 'Home Renovations & Additions',
    description: 'When your home needs more space or a fresh look, our team delivers seamless renovations and additions. Whether it\'s adding a new level, expanding a living area, or reconfiguring your floor plan, we make the transition smooth and stress-free. Our goal is to blend new work with existing structures so your home feels natural, functional, and complete.',
    image: '/images/renovation-progress.jpg',
  },
  {
    title: 'Garages',
    description: 'We design and build garages that go beyond storage. Whether you need a standalone structure, an addition to your home, or a renovation of your current garage, we create spaces that are practical, secure, and built to match the style of your property. From simple car storage to multi-purpose workshops, your garage will be as useful as it is durable.',
    image: '/images/garage.jpg',
  },
  {
    title: 'Kitchen & Bathroom Remodeling',
    description: 'Kitchens and bathrooms are the most-used spaces in any home, and we specialize in remodeling them for comfort, efficiency, and beauty. We update layouts, replace outdated fixtures, and bring in high-quality finishes that make everyday routines easier and more enjoyable. Whether it\'s a modern kitchen designed for entertaining or a bathroom built for relaxation, we bring function and style together.',
    image: '/images/kitchen-white.jpg',
  },
  {
    title: 'Living & Dining Remodeling',
    description: 'Your living and dining areas should be welcoming spaces where family and friends can gather comfortably. We help you reimagine these rooms with open layouts, updated lighting, and fresh finishes that enhance both style and usability. From cozy family rooms to elegant dining spaces, we create interiors that feel modern, inviting, and perfectly suited to your lifestyle.',
    image: '/images/dining-room.jpg',
  },
  {
    title: 'Basement Finishing & Interiors',
    description: 'An unfinished basement is full of potential. We transform these spaces into fully functional extensions of your home—whether you need a home theater, office, gym, or guest suite. Our basement finishing services include flooring, walls, lighting, and trim, all designed to make your interiors comfortable and valuable.',
    image: '/images/basement.jpg',
  },
  {
    title: 'Interior Design & Finishing Touches',
    description: 'Details make the difference in every project. We help bring everything together with carefully selected finishes, including cabinetry, flooring, trim, and paint. Our goal is to create cohesive, stylish interiors that balance beauty and practicality, giving your home a polished and complete look.',
    image: '/images/cabinetry.jpg',
  },
  {
    title: 'Exterior Renovation',
    description: 'Curb appeal matters, and so does protection from the Colorado elements. We upgrade siding, windows, doors, roofing, and outdoor living areas to make your home more energy-efficient, durable, and attractive. Whether it\'s a complete exterior remodel or targeted updates, we make sure your home looks great and performs even better.',
    image: '/images/exterior-siding.jpg',
  },
  {
    title: 'Licensed Electrical',
    description: 'Safe and reliable electrical work is essential in every home and business. Our licensed electricians handle everything from new wiring and panel upgrades to lighting, outlets, and system installs — ensuring your project meets the highest safety standards.',
    image: '/images/electrical-panel.jpg',
  },
  {
    title: 'Licensed Plumbing',
    description: 'From new construction rough-ins to fixture replacements and remodel updates, our licensed plumbers deliver dependable solutions. We handle kitchens, bathrooms, utility lines, and more — keeping water systems efficient and problem-free.',
    image: '/images/plumbing-pipes.jpg',
  },
  {
    title: 'Heating, Ventilation & Air Conditioning (HVAC)',
    description: 'We provide licensed HVAC installation and service for both residential and commercial projects. From furnaces and air conditioning to ventilation and indoor air quality systems, we ensure your space stays comfortable year-round.',
    image: '/images/hvac-unit.jpg',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-[#13251e] py-32 sm:py-40">
        <Image src="/images/blueprints.jpg" alt="" fill className="object-cover opacity-20" />
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[40px] sm:text-[72px] lg:text-[112px] font-bold text-white font-[Montserrat] leading-[1.05]">
            Services
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#e09f18] font-semibold tracking-widest uppercase text-sm mb-3">
              Well Delivered
            </p>
            <h2 className="text-[45px] sm:text-[60px] lg:text-[75px] font-bold text-gray-900 font-[Montserrat] leading-tight">
              Quality Services
            </h2>
          </div>

          <div className="space-y-12">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`relative aspect-[16/10] rounded-lg overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-start gap-4">
                    <span className="text-[#e09f18] font-bold text-sm bg-[#13251e] text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0 font-[Montserrat]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 font-[Montserrat]">{service.title}</h3>
                      <p className="text-[#5d6661] leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-block bg-[#e09f18] text-white px-8 py-4 rounded-[30px] font-semibold lowercase hover:bg-[#c5860e] transition-colors"
            >
              get a free quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
