import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-[#1a2e1a] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a4a2a] to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-[#c8a96e] font-semibold tracking-widest uppercase text-sm mb-4">
            Colorado Construction
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
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
              className="inline-block bg-white text-[#1a2e1a] px-8 py-4 rounded font-bold text-base hover:bg-gray-100 transition-colors text-center"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded font-bold text-base hover:bg-white hover:text-[#1a2e1a] transition-colors text-center"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
