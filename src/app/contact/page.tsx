'use client';

import Image from 'next/image';

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-[#13251e] py-32 sm:py-40">
        <Image src="/images/blueprints.jpg" alt="" fill className="object-cover opacity-20" />
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[40px] sm:text-[72px] lg:text-[112px] font-bold text-white font-[Montserrat] leading-[1.05]">
            Contact
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#e09f18] font-semibold tracking-widest uppercase text-sm mb-3">
              Let&apos;s Talk About Your Project
            </p>
            <h2 className="text-[45px] sm:text-[60px] lg:text-[75px] font-bold text-gray-900 font-[Montserrat] leading-tight mb-4">
              Contact Devil&apos;s Thumb Construction
            </h2>
            <p className="text-[#5d6661] max-w-3xl mx-auto leading-relaxed">
              We&apos;re here to answer your questions and guide you through the next steps. Whether you&apos;re planning a custom home, a remodel, or an addition, our team is ready to help. Reach out today to schedule your free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 font-[Montserrat]">Get In Touch</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email</p>
                  <a href="mailto:info@devilsthumbconstruction.com" className="text-[#13251e] font-semibold hover:text-[#e09f18] transition-colors">
                    info@devilsthumbconstruction.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Phone</p>
                  <a href="tel:720-322-6899" className="text-[#13251e] font-semibold hover:text-[#e09f18] transition-colors">
                    (720) 322-6899
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Service Area</p>
                  <p className="text-[#5d6661]">Denver, Colorado &amp; the Front Range</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 font-[Montserrat]">Send Us a Message</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you! We will be in touch soon.');
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#5d6661] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c4b40] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#5d6661] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c4b40] focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#5d6661] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c4b40] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#5d6661] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c4b40] focus:border-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#e09f18] text-white px-8 py-4 rounded-[30px] font-semibold lowercase hover:bg-[#c5860e] transition-colors w-full sm:w-auto"
                >
                  send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
