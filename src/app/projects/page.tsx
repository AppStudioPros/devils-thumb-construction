import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';

const projects = [
  { name: 'Custom Home Build', image: '/images/custom-home.png' },
  { name: 'Kitchen Remodel', image: '/images/kitchen-white.jpg' },
  { name: 'Mountain Home', image: '/images/mountain-home.jpg' },
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
      <PageHero title="Projects" bgImage="/images/kitchen-island.jpg" />

      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold text-[#13251e] uppercase tracking-widest mb-2">
            See What We&apos;ve Built
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13251e] font-[Montserrat] mb-4">
            Our Recent Projects
          </h2>
          <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-6" />
          <p className="text-[#5d6661] max-w-3xl leading-relaxed mb-12 text-lg">
            From custom homes to remodels and additions, every project we complete reflects our commitment to quality and detail. Explore our portfolio to see how Devil&apos;s Thumb Construction transforms ideas into spaces that are functional, beautiful, and built to last.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="aspect-[4/3] relative overflow-hidden group"
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
