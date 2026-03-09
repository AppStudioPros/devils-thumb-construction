import Image from 'next/image';
import FadeIn from '@/components/shared/FadeIn';
import DiamondBG from '@/components/shared/DiamondBG';

export default function AboutSection() {
  return (
    <section className="relative pt-[108px] pb-20 bg-[#f7f7f5] overflow-hidden">
      <DiamondBG />
      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13251e] font-[Montserrat] mb-4">
            About Devil&apos;s Thumb Construction
          </h2>
          <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-6" />
          <p className="text-[#5d6661] leading-relaxed max-w-3xl text-lg">
            Devil&apos;s Thumb Construction delivers dependable, detail-driven building across the Colorado Front Range. Our design-build process keeps architects, trades, and owners aligned—so projects move efficiently and finish strong. We prioritize craftsmanship, safety, and clear communication, backing every job with a professional warranty and a clean, respectful jobsite.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
