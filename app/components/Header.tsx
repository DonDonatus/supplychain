'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Successes', href: '/successes' },
        { name: 'Clients', href: '/clients' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Dynamic Navigation Bar - Transparent at top, solid when scrolled */}
            <nav className={`py-4 transition-all duration-300 ${isScrolled
                ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between gap-8">
                        {/* Logo */}
                        <Link href="/" className="flex items-center shrink-0">
                            <Image
                                src="/scv.png"
                                alt="SCV Supply Chain Solutions"
                                width={100}
                                height={32}
                                priority
                                className="h-8 w-auto dark:invert"
                            />
                        </Link>

                        {/* Desktop Navigation - Rounded Pill */}
                        <div className="hidden md:flex items-center flex-1 justify-center">
                            <div className={`rounded-full px-4 md:px-6 lg:px-8 py-2 md:py-2.5 lg:py-3 flex items-center gap-4 md:gap-6 lg:gap-8 transition-all duration-300 ${isScrolled
                                ? 'bg-gray-100 dark:bg-gray-800'
                                : 'bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm border-white/40 dark:border-gray-700/40'
                                }`}>
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`font-medium text-sm md:text-[15px] transition-colors duration-200 ${isScrolled
                                                ? isActive
                                                    ? 'text-brand-orange'
                                                    : 'text-gray-900 dark:text-gray-100 hover:text-brand-blue dark:hover:text-brand-orange'
                                                : isActive
                                                    ? 'text-brand-orange'
                                                    : 'text-white hover:text-white/80'
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right side buttons */}
                        <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
                            {/* Contact Us Button */}
                            <Link
                                href="/contacts"
                                className="btn-primary text-sm md:text-[15px] px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 shadow-lg hover:shadow-xl"
                            >
                                Contact Us
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" fill="white" />
                                    <path d="M5.904 10.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" fill="#f68921" />
                                </svg>
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex md:hidden">
                            <button
                                type="button"
                                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                                className={`inline-flex items-center justify-center p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 min-w-[44px] min-h-[44px] ${isScrolled
                                    ? 'text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-brand-blue'
                                    : 'text-white hover:bg-white/10 focus:ring-white/50'
                                    }`}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {!mobileMenuOpen ? (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu backdrop */}
                    {mobileMenuOpen && (
                        <div
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                            aria-hidden="true"
                            style={{ top: '73px' }}
                        />
                    )}

                    {/* Mobile menu */}
                    <div
                        className={`md:hidden mt-3 pb-3 transition-all duration-300 ease-in-out overflow-hidden relative z-50 ${
                            mobileMenuOpen
                                ? 'max-h-[500px] opacity-100'
                                : 'max-h-0 opacity-0'
                        }`}
                    >
                        <div className={`rounded-xl p-3 space-y-1 ${isScrolled
                            ? 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg'
                            : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-white/30 dark:border-gray-700/30 shadow-xl'
                            }`}>
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`flex items-center px-3 py-2.5 font-medium rounded-md transition-all duration-200 min-h-[40px] text-sm ${isScrolled
                                            ? isActive
                                                ? 'text-brand-orange'
                                                : 'text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700'
                                            : isActive
                                                ? 'text-brand-orange'
                                                : 'text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700'
                                            }`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                            <div className="pt-1.5 mt-1.5 border-t border-gray-200 dark:border-gray-700">
                                <Link
                                    href="/contacts"
                                    className="btn-primary block w-full px-3 py-2.5 rounded-lg text-center min-h-[40px] text-sm"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contact Us
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                        <circle cx="8" cy="8" r="8" fill="white" />
                                        <path d="M5.904 10.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" fill="#f68921" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
