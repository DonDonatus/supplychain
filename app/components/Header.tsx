'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Successes', href: '/successes' },
    { name: 'Clients', href: '/clients' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Single Blue Navigation Bar */}
      <nav className="bg-brand-blue py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/scv.png"
                alt="SCV Supply Chain Solutions"
                width={100}
                height={32}
                priority
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation - Rounded Pill */}
            <div className="hidden md:flex items-center flex-1 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 flex items-center gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white font-medium text-[15px] hover:text-white/80 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Us Button */}
            <div className="hidden md:block flex-shrink-0">
              <Link
                href="/contacts"
                className="bg-brand-orange text-white font-semibold text-[15px] px-6 py-3 rounded-full hover:bg-brand-orange-dark transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                Contact Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {!mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contacts"
                  className="block mt-4 px-4 py-3 bg-brand-orange text-white font-semibold rounded-lg hover:bg-brand-orange-dark transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us →
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
