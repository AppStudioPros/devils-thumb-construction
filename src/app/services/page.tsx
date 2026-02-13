import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import FadeIn from '@/components/shared/FadeIn';

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
      <PageHero title="Services" bgImage="/images/construction-framing.jpg" />

      <section className="py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <FadeIn>
            <p className="text-sm font-bold text-[#13251e] uppercase tracking-widest mb-2">Well Delivered</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13251e] font-[Montserrat] mb-4">
              Quality Services
            </h2>
            <div className="w-[60px] h-[3px] bg-[#2c4b40]" />
          </FadeIn>
        </div>

        {services.map((service, i) => {
          const isEven = i % 2 === 1;
          const bg = isEven ? 'bg-[#f7f7f5]' : 'bg-white';
          return (
            <div key={service.title} className={`${bg} hover:bg-[#f0efe8] transition-colors duration-300`}>
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
                      <p className="text-[#5d6661] leading-relaxed text-lg">{service.description}</p>
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
