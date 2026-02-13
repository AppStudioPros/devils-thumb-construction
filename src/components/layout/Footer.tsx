import Link from 'next/link';

const communities = [
  'Denver', 'Arvada', 'Wheat Ridge', 'Golden', 'Lakewood',
  'Littleton', 'Evergreen', 'Conifer', 'Morrison', 'Highlands Ranch',
];

export default function Footer() {
  return (
    <footer>
      {/* CTA Section */}
      <section className="bg-[#2c4b40] py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white text-xl sm:text-2xl max-w-3xl mx-auto mb-6 leading-relaxed">
            &ldquo;Your project deserves a solid partner. We&apos;ll bring the planning, craft, and communication to deliver it right.&rdquo;
          </p>
          <a
            href="tel:720-322-6899"
            className="inline-block bg-[#e09f18] text-white px-8 py-4 rounded-[30px] font-semibold lowercase hover:bg-[#c5860e] transition-colors text-lg"
          >
            call 720-322-6899
          </a>
        </div>
      </section>

      {/* Main Footer */}
      <div className="bg-gradient-to-b from-[#2c4b40] to-[#13251e] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 font-[Montserrat]">Devil&apos;s Thumb Construction</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Residential &amp; light commercial construction across the Colorado Front Range.
                Design‑build, remodels, additions, and more.
              </p>
              <div>
                <h4 className="font-semibold mb-3 text-gray-100 text-sm">Communities We Serve</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {communities.join(' • ')}
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-100 font-[Montserrat]">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About' },
                  { href: '/services', label: 'Services' },
                  { href: '/projects', label: 'Projects' },
                  { href: '/contact', label: 'Contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-300 hover:text-[#e09f18] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-100 font-[Montserrat]">Contact</h4>
              <div className="space-y-3 text-sm text-gray-300">
                <p>
                  <span className="block text-gray-400 text-xs uppercase tracking-wide mb-1">Email</span>
                  <a href="mailto:info@devilsthumbconstruction.com" className="hover:text-[#e09f18] transition-colors">
                    info@devilsthumbconstruction.com
                  </a>
                </p>
                <p>
                  <span className="block text-gray-400 text-xs uppercase tracking-wide mb-1">Phone</span>
                  <a href="tel:720-322-6899" className="hover:text-[#e09f18] transition-colors">
                    (720) 322-6899
                  </a>
                </p>
                <p>
                  <span className="block text-gray-400 text-xs uppercase tracking-wide mb-1">Service Area</span>
                  Colorado Front Range
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#1a3027] py-6">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Devil&apos;s Thumb Construction. All Rights Reserved. Proudly serving Denver, Colorado and surrounding areas.</p>
            <p className="mt-2 text-xs">
              Created by{' '}
              <a href="https://webdesignpros365.com" target="_blank" rel="noopener noreferrer" className="text-[#e09f18] hover:underline">
                WebDesignPros365
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
