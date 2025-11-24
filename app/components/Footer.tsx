'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { theme, setTheme } = useTheme();

    return (
        <footer className="bg-brand-cream dark:bg-black text-gray-800 dark:text-gray-200 border-t border-gray-300 dark:border-gray-800">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
                    {/* Company Info - Takes 2 columns */}
                    <div className="col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-2">
                        <Link href="/" className="inline-block mb-3 sm:mb-4">
                            <Image
                                src="/scv.png"
                                alt="SCV Supply Chain"
                                width={120}
                                height={40}
                                className="h-8 sm:h-10 w-auto"
                            />
                        </Link>
                        <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed max-w-sm">
                            Experts the experts turn to for strategic supply chain insights and solutions.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-gray-900 dark:text-gray-100 font-semibold text-sm mb-3 sm:mb-4 uppercase">Company</h3>
                        <ul className="space-y-2.5 sm:space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-brand-orange transition-colors duration-200 text-sm py-1 block">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-700 dark:text-gray-300 hover:text-brand-orange transition-colors duration-200 text-sm py-1 block">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/successes" className="text-gray-700 dark:text-gray-300 hover:text-brand-orange transition-colors duration-200 text-sm py-1 block">
                                    Success Stories
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-gray-900 dark:text-gray-100 font-semibold text-sm mb-3 sm:mb-4 uppercase">Resources</h3>
                        <ul className="space-y-2.5 sm:space-y-2">
                            <li>
                                <Link href="/support" className="text-gray-700 dark:text-gray-300 hover:text-brand-orange transition-colors duration-200 text-sm py-1 block">
                                    Support
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs" className="text-gray-700 dark:text-gray-300 hover:text-brand-orange transition-colors duration-200 text-sm py-1 block">
                                    Docs
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-brand-orange transition-colors duration-200 text-sm py-1 block">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect Links */}
                    <div>
                        <h3 className="text-gray-900 dark:text-gray-100 font-semibold text-sm mb-3 sm:mb-4 uppercase">Connect</h3>
                        <ul className="space-y-2.5 sm:space-y-2">
                            <li>
                                <Link href="/contacts" className="text-gray-700 dark:text-gray-300 hover:text-brand-orange transition-colors duration-200 text-sm py-1 block">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/jobs" className="text-gray-700 dark:text-gray-300 hover:text-brand-orange transition-colors duration-200 text-sm py-1 block">
                                    Jobs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-gray-900 dark:text-gray-100 font-semibold text-sm mb-3 sm:mb-4 uppercase">Legal</h3>
                        <ul className="space-y-2.5 sm:space-y-2">
                            <li>
                                <Link href="/terms" className="text-gray-700 dark:text-gray-300 hover:text-brand-orange transition-colors duration-200 text-sm py-1 block">
                                    Terms of service
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-gray-700 dark:text-gray-300 hover:text-brand-orange transition-colors duration-200 text-sm py-1 block">
                                    Privacy policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Office Location & Contact Section */}
            <div className="border-t border-gray-300 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {/* Office Location */}
                        <div>
                            <h4 className="text-gray-900 dark:text-gray-100 font-semibold text-sm mb-2">OFFICE LOCATION</h4>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">Washington, DC</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">3650 S Glebe Rd - Suite 665</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">Arlington, VA 22202</p>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-gray-900 dark:text-gray-100 font-semibold text-sm mb-2">CONTACT</h4>
                            <a 
                                href="tel:+17038254031" 
                                className="text-gray-700 dark:text-gray-300 hover:text-brand-orange transition-colors duration-200 text-sm block mb-1"
                            >
                                (703) 825-4031
                            </a>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">Monday - Friday 8AM - 5PM EST</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="border-t border-gray-300 dark:border-gray-800 bg-brand-cream dark:bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 md:gap-8">
                        <div className="flex-1">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                                Transforming supply chains through strategic expertise and innovative solutions.
                            </h2>
                        </div>
                        <div className="shrink-0 w-full sm:w-auto">
                            <Link
                                href="/contacts"
                                className="btn-primary text-sm w-full sm:w-auto justify-center sm:justify-start"
                            >
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" fill="white"/>
                                    <path d="M5.904 10.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" fill="#f68921"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-300 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
                        {/* Copyright */}
                        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm text-center sm:text-left order-3 sm:order-1 w-full sm:w-auto">
                            © {currentYear} Supply Chain Visions. All rights reserved.
                        </p>
                        
                        {/* Theme Toggle - Center on mobile */}
                        <div className="flex items-center gap-3 order-1 sm:order-2">
                            <div className="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
                                {/* System/Auto Theme */}
                                <button
                                    onClick={() => setTheme('system')}
                                    aria-label="System theme"
                                    className={`p-1.5 transition-all duration-200 flex items-center justify-center min-w-[32px] min-h-[32px] ${
                                        theme === 'system'
                                            ? 'bg-gray-300 dark:bg-gray-600 rounded-md'
                                            : 'rounded hover:bg-gray-300/50 dark:hover:bg-gray-600/50'
                                    }`}
                                >
                                    <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </button>
                                
                                {/* Light Theme */}
                                <button
                                    onClick={() => setTheme('light')}
                                    aria-label="Light theme"
                                    className={`p-1.5 transition-all duration-200 flex items-center justify-center min-w-[32px] min-h-[32px] ${
                                        theme === 'light'
                                            ? 'bg-gray-300 dark:bg-gray-600 rounded-md'
                                            : 'rounded hover:bg-gray-300/50 dark:hover:bg-gray-600/50'
                                    }`}
                                >
                                    <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </button>
                                
                                {/* Dark Theme */}
                                <button
                                    onClick={() => setTheme('dark')}
                                    aria-label="Dark theme"
                                    className={`p-1.5 transition-all duration-200 flex items-center justify-center min-w-[32px] min-h-[32px] ${
                                        theme === 'dark'
                                            ? 'bg-gray-300 dark:bg-gray-600 rounded-md'
                                            : 'rounded hover:bg-gray-300/50 dark:hover:bg-gray-600/50'
                                    }`}
                                >
                                    <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        
                        {/* Social Media */}
                        <div className="flex gap-3 sm:gap-4 order-2 sm:order-3">
                            <a
                                href="https://linkedin.com/company/scv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 dark:text-gray-300 hover:text-brand-orange transition-colors duration-200 p-1.5 sm:p-0 min-w-[40px] min-h-[40px] sm:min-w-0 sm:min-h-0 flex items-center justify-center"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com/scv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 dark:text-gray-300 hover:text-brand-orange transition-colors duration-200 p-1.5 sm:p-0 min-w-[40px] min-h-[40px] sm:min-w-0 sm:min-h-0 flex items-center justify-center"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com/scv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 dark:text-gray-300 hover:text-brand-orange transition-colors duration-200 p-1.5 sm:p-0 min-w-[40px] min-h-[40px] sm:min-w-0 sm:min-h-0 flex items-center justify-center"
                                aria-label="Twitter"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
