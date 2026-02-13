import Link from 'next/link';
import Image from 'next/image';

const communities = [
  'Denver', 'Lakewood', 'Golden', 'Arvada', 'Westminster', 'Thornton',
  'Broomfield', 'Boulder', 'Longmont', 'Louisville', 'Superior', 'Erie',
  'Evergreen', 'Conifer', 'Morrison', 'Idaho Springs',
];

export default function Footer() {
  return (
    <footer>
      {/* Tier 1 — Communities */}
      <div className="bg-white py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#13251e] font-[Montserrat] mb-6">
            Communities We Serve
          </h3>
          <p className="text-[#5d6661] text-sm leading-relaxed">
            {communities.map((c, i) => (
              <span key={c}>
                {c}
                {i < communities.length - 1 && <span className="mx-2">•</span>}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Tier 2 — CTA */}
      <div className="bg-[#13251e] py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <Image src="/images/logo.png" alt="Devil's Thumb Construction" width={200} height={200} />
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white font-[Montserrat] mb-4">
              Your Project Deserves A Solid Partner.
            </h3>
            <p className="text-gray-300 mb-6">
              We&apos;ll bring the planning, craft, and communication to deliver it right.
            </p>
            <p className="mb-6">
              <span className="text-gray-300">Call </span>
              <a href="tel:720-322-6899" className="text-[#e09f18] font-semibold hover:text-[#c5860e] transition-colors">
                720-322-6899
              </a>
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#e09f18] text-white px-8 py-3 rounded-[30px] font-semibold hover:bg-[#c5860e] transition-colors"
            >
              get a quote
            </Link>
          </div>
        </div>
      </div>

      {/* Tier 3 — Copyright */}
      <div className="bg-[#0f1a0f] py-6">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-sm text-gray-400 text-center sm:text-left">
          <p>
            © 2025 Devil&apos;s Thumb Construction. All Rights Reserved. Proudly serving Denver, Colorado and surrounding areas.{' '}
            <Link href="/privacy" className="text-[#e09f18] hover:text-[#c5860e] transition-colors">
              Privacy Policy
            </Link>
          </p>
          <p>
            Created by{' '}
            <a href="https://wdp365.com" target="_blank" rel="noopener noreferrer" className="text-[#e09f18] hover:text-[#c5860e] transition-colors">
              WDP365
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
