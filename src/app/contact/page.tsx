'use client';

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#1a2e1a] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let&apos;s Talk About Your Project
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Ready to get started? Reach out and we&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Info</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email</p>
                  <a href="mailto:info@devilsthumbconstruction.com" className="text-[#1a2e1a] font-semibold hover:underline">
                    info@devilsthumbconstruction.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Phone</p>
                  <a href="tel:720-322-6899" className="text-[#1a2e1a] font-semibold hover:underline">
                    (720) 322-6899
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Service Area</p>
                  <p className="text-gray-700">Colorado Front Range</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you! We will be in touch soon.');
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1a2e1a] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1a2e1a] focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1a2e1a] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1a2e1a] focus:border-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#1a2e1a] text-white px-8 py-4 rounded font-semibold hover:bg-[#2a4a2a] transition-colors w-full sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
