'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/services', label: 'services' },
  { href: '/projects', label: 'projects' },
  { href: '/contact', label: 'contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || mobileOpen ? 'bg-[#13251e]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="/">
          <Image src="/images/logo.png" alt="Devil's Thumb Construction" width={120} height={120} className="w-[100px] sm:w-[120px]" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href ? 'text-[#e09f18]' : 'text-white hover:text-[#e09f18]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger / close */}
        <button
          className="md:hidden text-[#e09f18] min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className="md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-[#13251e]"
        style={{ maxHeight: mobileOpen ? `${navLinks.length * 64 + 32}px` : '0px' }}
      >
        <nav className="px-6 pb-6">
          {navLinks.map((link, i) => (
            <div key={link.href}>
              {i > 0 && <div className="border-t border-white/10" />}
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-4 text-base font-medium transition-colors ${
                  pathname === link.href ? 'text-[#e09f18]' : 'text-white hover:text-[#e09f18]'
                }`}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
