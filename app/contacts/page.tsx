'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactsPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <main className="bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative min-h-[400px] sm:min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-blue pt-32">
                <div className="absolute inset-0">
                    <Image
                        src="/contact.jpg"
                        alt="Contact Us"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/50 to-brand-black/70"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 md:py-16 lg:py-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                        Let&apos;s Start a Conversation
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-2">
                        Ready to transform your supply chain? Our team is here to help you succeed.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start">
                        {/* Left Column - Contact Form */}
                        <div className="order-2 lg:order-1">
                            <div className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md mb-3 sm:mb-4 uppercase tracking-wide">
                                GET IN TOUCH
                            </div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 leading-tight">
                                Schedule Your Consultation
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                                Fill out the form below and our team will get back to you within 24 hours.
                            </p>

                            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-4 sm:p-5 md:p-6 space-y-4 sm:space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1.5">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                                    <div>
                                        <label htmlFor="company" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none transition-all"
                                            placeholder="Your Company"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none transition-all"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1.5">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none transition-all resize-none"
                                        placeholder="Tell us about your supply chain challenges..."
                                    />
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="btn-primary w-full text-sm px-6 py-3 rounded-lg shadow-sm hover:shadow-md"
                                >
                                    Send Message
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                        <circle cx="8" cy="8" r="8" fill="white" />
                                        <path d="M5.904 10.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" fill="#f68921" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Right Column - Contact Information */}
                        <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
                            {/* Contact Info Card */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-5 md:p-6 border-l-4 border-brand-orange hover:shadow-md transition-all duration-300">
                                <div className="space-y-4">
                                    <a href="mailto:info@scvsupplychain.com" className="flex items-center gap-3.5 group">
                                        <div className="w-9 h-9 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                                            <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-900 dark:text-gray-100 text-sm font-medium group-hover:text-brand-orange transition-colors">
                                            info@scvsupplychain.com
                                        </span>
                                    </a>

                                    <a href="tel:+15550000000" className="flex items-center gap-3.5 group">
                                        <div className="w-9 h-9 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                                            <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-900 dark:text-gray-100 text-sm font-medium group-hover:text-brand-orange transition-colors">
                                            +1 (555) 000-0000
                                        </span>
                                    </a>

                                    <div className="flex items-start gap-3.5">
                                        <div className="w-9 h-9 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                                            <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-900 dark:text-gray-100 text-sm font-medium leading-relaxed pt-1.5">
                                            123 Supply Chain Way, Suite 100<br />
                                            City, State 12345
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Office Hours Card */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-5 md:p-6 border-l-4 border-brand-blue hover:shadow-md transition-all duration-300">
                                <h3 className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 uppercase tracking-wider">Office Hours</h3>
                                <div className="space-y-2 sm:space-y-2.5">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 dark:text-gray-400 text-xs font-medium">Mon - Fri</span>
                                        <span className="text-gray-900 dark:text-gray-100 text-xs font-semibold tabular-nums">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 dark:text-gray-400 text-xs font-medium">Saturday</span>
                                        <span className="text-gray-900 dark:text-gray-100 text-xs font-semibold tabular-nums">10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 dark:text-gray-400 text-xs font-medium">Sunday</span>
                                        <span className="text-gray-900 dark:text-gray-100 text-xs font-semibold">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}