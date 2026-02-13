'use client';

import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" bgImage="/images/kitchen-pendant.jpg" />

      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <p className="text-[#e09f18] font-semibold tracking-widest uppercase text-sm mb-3">
                Let&apos;s Talk About Your Project
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#13251e] font-[Montserrat] mb-4">
                Contact Devil&apos;s Thumb Construction
              </h2>
              <div className="w-[60px] h-[3px] bg-[#2c4b40] mb-6" />
              <p className="text-[#5d6661] leading-relaxed mb-10 text-lg">
                We&apos;re here to answer your questions and guide you through the next steps. Whether you&apos;re planning a custom home, a remodel, or an addition, our team is ready to help. Reach out today to schedule your free consultation.
              </p>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image src="/images/kitchen-open.jpg" alt="Kitchen" fill className="object-cover" />
              </div>
            </div>

            {/* Right */}
            <div>
              <h3 className="text-2xl font-bold text-[#13251e] font-[Montserrat] mb-6">Get In Touch</h3>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#e09f18] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@devilsthumbconstruction.com" className="text-[#13251e] font-medium hover:text-[#e09f18] transition-colors">
                    info@devilsthumbconstruction.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#e09f18] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:720-322-6899" className="text-[#13251e] font-medium hover:text-[#e09f18] transition-colors">
                    720-322-6899
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#13251e] font-[Montserrat] mb-6">Send Us A Message</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you! We will be in touch soon.');
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#5d6661] mb-1">Name *</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c4b40]" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#5d6661] mb-1">Email *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c4b40]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#5d6661] mb-1">Phone *</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c4b40]" />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-[#5d6661] mb-1">Zip *</label>
                    <input type="text" id="zip" name="zip" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c4b40]" />
                  </div>
                </div>
                <div>
                  <label htmlFor="callTime" className="block text-sm font-medium text-[#5d6661] mb-1">Schedule a phone call</label>
                  <div className="grid grid-cols-3 gap-3">
                    <select id="callHour" name="callHour" className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c4b40]">
                      <option value="">Hour</option>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                        <option key={h} value={h}>{h}</option>
                      ))}
                    </select>
                    <select id="callMinute" name="callMinute" className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c4b40]">
                      <option value="">Minute</option>
                      {['00', '15', '30', '45'].map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                    <select id="callAmPm" name="callAmPm" className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c4b40]">
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#5d6661] mb-1">Message *</label>
                  <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c4b40] resize-none" />
                </div>
                <button
                  type="submit"
                  className="bg-[#e09f18] text-white px-8 py-3 rounded-[30px] font-semibold hover:bg-[#c5860e] transition-colors"
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
