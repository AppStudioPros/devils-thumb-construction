import Image from 'next/image';
import FadeIn from '@/components/shared/FadeIn';

const testimonials = [
  {
    name: 'Emily T., Lakewood',
    text: 'From start to finish, the team at Devil\'s Thumb was professional, communicative, and incredibly skilled. Our kitchen remodel exceeded every expectation. We couldn\'t be happier with the result.',
  },
  {
    name: 'Sarah M., Golden',
    text: 'We hired Devil\'s Thumb for a full basement finish and they delivered on time and on budget. The craftsmanship is outstanding and the crew was respectful of our home throughout the process.',
  },
  {
    name: 'David R., Arvada',
    text: 'The addition they built for us blends perfectly with the original structure. You\'d never know it wasn\'t part of the original home. Highly recommend their team for any project.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13251e] font-[Montserrat] mb-4">
                Testimonials
              </h2>
              <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-6" />
              <p className="text-[#5d6661] leading-relaxed text-lg">
                Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with Devil&apos;s Thumb Construction.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="bg-[#f5f3f0] rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <p className="text-[#5d6661] leading-relaxed mb-4">{testimonials[0].text}</p>
              <p className="font-bold text-[#13251e]">{testimonials[0].name}</p>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <FadeIn delay={200}>
            <div className="bg-[#f5f3f0] rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <p className="text-[#5d6661] leading-relaxed mb-4">{testimonials[1].text}</p>
              <p className="font-bold text-[#13251e]">{testimonials[1].name}</p>
            </div>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="bg-[#f5f3f0] rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <p className="text-[#5d6661] leading-relaxed mb-4">{testimonials[2].text}</p>
              <p className="font-bold text-[#13251e]">{testimonials[2].name}</p>
            </div>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/custom-home-2.jpg" alt="Custom home" fill className="object-cover transition-transform duration-500 ease-out hover:scale-105" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
