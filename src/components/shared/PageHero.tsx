import Image from 'next/image';

interface PageHeroProps {
  title: string;
  bgImage: string;
}

export default function PageHero({ title, bgImage }: PageHeroProps) {
  return (
    <section className="relative min-h-[40vh] flex items-end">
      <Image src={bgImage} alt="" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-[#13251e]/70" />
      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-16">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white font-[Montserrat]">
          {title}
        </h1>
      </div>
    </section>
  );
}
