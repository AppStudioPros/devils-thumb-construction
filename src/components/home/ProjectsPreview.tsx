import Link from 'next/link';
import Image from 'next/image';

const projects = [
  { name: 'Custom Home Build', image: '/images/custom-home.png' },
  { name: 'Kitchen Remodel', image: '/images/kitchen-white.jpg' },
  { name: 'Home Addition', image: '/images/mountain-home.jpg' },
  { name: 'Basement Finish', image: '/images/basement.jpg' },
  { name: 'Exterior Update', image: '/images/cabin-exterior.jpg' },
  { name: 'Living Room Remodel', image: '/images/living-room.jpg' },
];

export default function ProjectsPreview() {
  return (
    <section className="py-20 sm:py-24 bg-[#f5f3f0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#e09f18] font-semibold tracking-widest uppercase text-sm mb-3">
            Our Latest
          </p>
          <h2 className="text-[45px] sm:text-[60px] lg:text-[75px] font-bold text-gray-900 font-[Montserrat] leading-tight mb-4">
            Projects
          </h2>
          <p className="text-[#5d6661] max-w-2xl mx-auto">
            From new builds to renovations, we bring quality, clarity, and craftsmanship to every project.
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

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-block bg-[#e09f18] text-white px-8 py-4 rounded-[30px] font-semibold lowercase hover:bg-[#c5860e] transition-colors"
          >
            view all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
