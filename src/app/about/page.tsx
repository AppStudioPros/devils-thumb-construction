import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#13251e] py-32 sm:py-40">
        <Image src="/images/blueprint-bg.jpg" alt="" fill className="object-cover opacity-20" />
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[40px] sm:text-[72px] lg:text-[112px] font-bold text-white font-[Montserrat] leading-[1.05]">
            About
          </h1>
        </div>
      </section>

      {/* Built Right */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[45px] sm:text-[60px] lg:text-[75px] font-bold text-gray-900 font-[Montserrat] leading-tight mb-8">
                Built Right.<br />Built Local.
              </h2>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/construction-framing.jpg" alt="Construction framing" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Building with Integrity */}
      <section className="py-20 bg-[#f5f3f0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#e09f18] font-semibold tracking-widest uppercase text-sm mb-3">
            Devil&apos;s Thumb Construction
          </p>
          <h2 className="text-[30px] sm:text-[45px] lg:text-[60px] font-bold text-gray-900 font-[Montserrat] leading-tight mb-8">
            Building with Integrity, Craft, and Care
          </h2>
          <p className="text-[#5d6661] text-lg leading-relaxed">
            Devil&apos;s Thumb Construction delivers dependable, detail‑driven building across the
            Colorado Front Range. Our design‑build process keeps architects, trades, and owners
            aligned—so projects move efficiently and finish strong. We prioritize craftsmanship,
            safety, and clear communication, backing every job with a professional warranty and
            a clean, respectful jobsite.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#e09f18] font-semibold tracking-widest uppercase text-sm mb-3">
            Our Mission
          </p>
          <h2 className="text-[30px] sm:text-[45px] lg:text-[60px] font-bold text-gray-900 font-[Montserrat] leading-tight mb-8">
            Integrity in Every Step
          </h2>
          <p className="text-[#5d6661] text-lg leading-relaxed mb-12">
            We believe in honest communication, clear expectations, and transparent pricing—so
            our clients always know where their project stands.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#13251e]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[30px] sm:text-[45px] font-bold text-white text-center mb-16 font-[Montserrat]">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-[#1e3a32] rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold text-[#e09f18] mb-3 font-[Montserrat]">Clarity</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Transparent scopes, schedules, and pricing.</p>
            </div>
            <div className="bg-[#1e3a32] rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold text-[#e09f18] mb-3 font-[Montserrat]">Care</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Jobsite safety and respect for your home and neighbors.</p>
            </div>
            <div className="bg-[#1e3a32] rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold text-[#e09f18] mb-3 font-[Montserrat]">Craftsmanship That Lasts</h3>
              <p className="text-gray-300 text-sm leading-relaxed">From foundation to finish, we use proven methods, quality materials, and skilled trades to deliver homes and spaces built for generations.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
