export default function AboutPage() {
  const values = [
    {
      title: 'Clarity',
      description: 'Transparent scopes, schedules, and pricing.',
    },
    {
      title: 'Craft',
      description: 'Quality materials and proven methods.',
    },
    {
      title: 'Care',
      description: 'Jobsite safety and respect for your home and neighbors.',
    },
    {
      title: 'Colorado',
      description: 'Mountain‑ready solutions for weather, drainage, and energy efficiency.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a2e1a] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8a96e] font-semibold tracking-widest uppercase text-sm mb-4">
            Devil&apos;s Thumb Construction
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Built Right. Built Local.
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Devil&apos;s Thumb Construction delivers dependable, detail‑driven building across the 
            Colorado Front Range. Our design‑build process keeps architects, trades, and owners 
            aligned—so projects move efficiently and finish strong. We prioritize craftsmanship, 
            safety, and clear communication, backing every job with a professional warranty and 
            a clean, respectful jobsite.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f5f3f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-lg p-8 shadow-sm text-center">
                <h3 className="text-xl font-bold text-[#1a2e1a] mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#1a2e1a] font-semibold tracking-widest uppercase text-sm mb-3">
            Our Mission
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Building with Integrity, Craft, and Care
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Integrity in Every Step</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe in honest communication, clear expectations, and transparent pricing—so 
                our clients always know where their project stands.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Craftsmanship That Lasts</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From foundation to finish, we use proven methods, quality materials, and skilled 
                trades to deliver homes and spaces built for generations.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Care for Clients &amp; Community</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We treat every project as a partnership, respecting our clients&apos; vision, their 
                home, and the Colorado environment we all share.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
