import Image from 'next/image';

const projects = [
  { name: 'Custom Home Build', image: '/images/custom-home.png' },
  { name: 'Kitchen Remodel', image: '/images/kitchen-white.jpg' },
  { name: 'Home Addition', image: '/images/mountain-home.jpg' },
  { name: 'Bathroom Renovation', image: '/images/kitchen-pendant.jpg' },
  { name: 'Basement Finish', image: '/images/basement.jpg' },
  { name: 'Exterior Update', image: '/images/cabin-exterior.jpg' },
  { name: 'Garage Build', image: '/images/garage.jpg' },
  { name: 'Living Room Remodel', image: '/images/living-room.jpg' },
  { name: 'HVAC Installation', image: '/images/hvac-unit.jpg' },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="relative bg-[#13251e] min-h-[45vh] flex items-center">
        <Image src="/images/log-cabin-mountain.jpg" alt="" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-[#13251e]/60" />
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-[Montserrat] text-center">
            Projects
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#e09f18] font-semibold tracking-widest uppercase text-sm mb-3">
              See What We&apos;ve Built
            </p>
            <h2 className="text-[45px] sm:text-[60px] lg:text-[75px] font-bold text-gray-900 font-[Montserrat] leading-tight mb-4">
              Our Recent Projects
            </h2>
            <p className="text-[#5d6661] max-w-3xl mx-auto leading-relaxed">
              From custom homes to remodels and additions, every project we complete reflects our commitment to quality and detail. Explore our portfolio to see how Devil&apos;s Thumb Construction transforms ideas into spaces that are functional, beautiful, and built to last.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="aspect-[4/3] rounded-lg relative overflow-hidden group"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#13251e]/0 group-hover:bg-[#13251e]/70 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-[Montserrat]">
                    {project.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
