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
    <section className="bg-[#f5f3f0] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#1a2e1a] font-semibold tracking-widest uppercase text-sm mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-100"
            >
              <div className="text-[#c8a96e] text-4xl mb-4">&ldquo;</div>
              <p className="text-gray-700 leading-relaxed mb-6 text-base">
                {t.quote}
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
