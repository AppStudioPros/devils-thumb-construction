const testimonials = [
  {
    quote: "They delivered quality craftsmanship and clear communication every step of the way. We'll definitely use them again for future projects.",
    name: 'Emily T.',
    location: 'Lakewood',
  },
  {
    quote: "From start to finish, the team kept us informed and on schedule. Our kitchen remodel turned out even better than we imagined.",
    name: 'Sarah M.',
    location: 'Wheat Ridge',
  },
  {
    quote: "Professional, detail-oriented, and reliable. Devil's Thumb Construction made our home addition seamless and stress-free.",
    name: 'David R.',
    location: 'Golden',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f7f7f5] py-20 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#e09f18] font-semibold tracking-widest uppercase text-sm mb-3">
            Testimonials
          </p>
          <h2 className="text-[45px] sm:text-[60px] lg:text-[75px] font-bold text-gray-900 font-[Montserrat] leading-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[#5d6661] max-w-3xl mx-auto">
            We&apos;re proud to earn the trust of homeowners and businesses across Colorado. Here&apos;s what a few of them had to share about their experience with Devil&apos;s Thumb Construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-100"
            >
              <div className="text-[#e09f18] text-4xl mb-4">&ldquo;</div>
              <p className="text-[#5d6661] leading-relaxed mb-6 text-base">
                {t.quote}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-[#5d6661]">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
