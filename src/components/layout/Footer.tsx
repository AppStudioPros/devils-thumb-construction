import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a2e1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Devil&apos;s Thumb Construction</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Residential &amp; light commercial construction across the Colorado Front Range.
              Design‑build, remodels, additions, and more.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-100">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/projects', label: 'Projects' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-100">Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <span className="block text-gray-400 text-xs uppercase tracking-wide mb-1">Email</span>
                <a href="mailto:info@devilsthumbconstruction.com" className="hover:text-white transition-colors">
                  info@devilsthumbconstruction.com
                </a>
              </p>
              <p>
                <span className="block text-gray-400 text-xs uppercase tracking-wide mb-1">Phone</span>
                <a href="tel:720-322-6899" className="hover:text-white transition-colors">
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

        <div className="border-t border-[#2a4a2a] mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Devil&apos;s Thumb Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
