import Link from 'next/link';
import Image from 'next/image';

const images = [
  '/images/kitchen-island.jpg',
  '/images/living-room.jpg',
  '/images/custom-home.png',
  '/images/cabin-exterior.jpg',
  '/images/dining-room.jpg',
];

export default function ProjectsPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-sm font-bold text-[#13251e] uppercase tracking-widest mb-2">Our Latest</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13251e] font-[Montserrat] mb-4">
          Projects
        </h2>
        <div className="w-[60px] h-[3px] bg-[#2c4b40]" />
      </div>

      {/* Full-width image strip */}
      <div className="flex w-full h-[250px]">
        {images.map((img) => (
          <div key={img} className="relative flex-1 min-w-0">
            <Image src={img} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/projects"
          className="inline-block border-2 border-[#e09f18] text-[#e09f18] px-8 py-3 rounded-[30px] font-semibold hover:bg-[#e09f18] hover:text-white transition-colors"
        >
          View Past Work
        </Link>
      </div>
    </section>
  );
}
