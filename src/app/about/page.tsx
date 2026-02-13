import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';

export default function AboutPage() {
  return (
    <>
      <PageHero title="About" bgImage="/images/mountain-bg.jpg" />

      {/* Built Right */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            <div className="py-12 pr-8 lg:pr-16">
              <p className="text-sm font-bold text-[#13251e] uppercase tracking-widest mb-3">
                Devil&apos;s Thumb Construction
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#13251e] font-[Montserrat] leading-tight mb-4">
                Built Right.<br />Built Local.
              </h2>
              <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-6" />
              <p className="text-[#5d6661] leading-relaxed mb-8">
                Devil&apos;s Thumb Construction delivers dependable, detail-driven building across the Colorado Front Range. Our design-build process keeps architects, trades, and owners aligned—so projects move efficiently and finish strong.
              </p>
              <ul className="space-y-3">
                <li className="font-bold text-[#13251e]">Clarity: Transparent Scopes, Schedules, And Pricing.</li>
                <li className="italic text-[#e09f18]">Craft: Quality Materials And Proven Methods.</li>
                <li className="font-bold text-[#13251e]">Care: Jobsite Safety And Respect For Your Home And Neighbors.</li>
                <li className="italic text-[#e09f18]">Colorado: Mountain-Ready Solutions For Weather, Drainage, And Energy Efficiency.</li>
              </ul>
            </div>
            <div className="relative min-h-[500px]">
              <Image src="/images/mountain-home.jpg" alt="Mountain home" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            <div className="relative min-h-[500px]">
              <Image src="/images/living-room.jpg" alt="Living room" fill className="object-cover" />
            </div>
            <div className="bg-[#f7f7f5] py-16 px-8 lg:px-16">
              <p className="text-[#e09f18] font-semibold tracking-widest uppercase text-sm mb-3">
                Our Mission
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#13251e] font-[Montserrat] leading-tight mb-4">
                Building With Integrity, Craft, And Care
              </h2>
              <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-6" />
              <p className="italic text-[#e09f18] leading-relaxed mb-6">
                We believe in honest communication, clear expectations, and transparent pricing—so our clients always know where their project stands.
              </p>
              <h3 className="text-xl font-bold text-[#13251e] font-[Montserrat] mb-3">
                Craftsmanship That Lasts
              </h3>
              <p className="text-[#5d6661] leading-relaxed mb-6">
                From foundation to finish, we use proven methods, quality materials, and skilled trades to deliver homes and spaces built for generations.
              </p>
              <p className="italic text-[#e09f18] leading-relaxed">
                We care deeply about our clients, our community, and the lasting impact of every project we take on.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
