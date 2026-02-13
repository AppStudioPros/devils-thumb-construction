import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <Image
        src="/images/mountain-bg.jpg"
        alt="Colorado mountain construction"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-[#13251e]/70" />
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 w-full">
        <div className="max-w-3xl">
          <h1 className="text-[40px] sm:text-[72px] lg:text-[112px] font-bold text-white leading-[1.05] mb-6 font-[Montserrat]">
            Built to Last.<br />
            Crafted for Colorado.
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            Residential &amp; light commercial construction—design‑build, remodels, additions,
            kitchens, baths, exteriors, and more. From the first blueprint to the final walkthrough,
            we deliver results you&apos;ll be proud of.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block bg-[#e09f18] text-white px-8 py-4 rounded-[30px] font-bold text-base lowercase hover:bg-[#c5860e] transition-colors text-center"
            >
              start your project
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-[30px] font-bold text-base lowercase hover:bg-white hover:text-[#13251e] transition-colors text-center"
            >
              our services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
