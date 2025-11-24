'use client';

import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from './lib/servicesData';

export default function Home() {

    return (
        <main className="bg-white dark:bg-gray-900">
            {/* Hero Section with Container Background */}
            <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-blue pt-32">
                {/* Background image covering full section */}
                <div className="absolute inset-0">
                    <Image
                        src="/chain.jpg"
                        alt="Shipping Containers"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-brand-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 md:py-16 lg:py-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                        Transform Your Supply Chain Strategy
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed px-2">
                        Strategic consulting for modern supply chains. From optimization to risk management, we deliver results.
                    </p>
                    <Link
                        href="/contacts"
                        className="btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-xl hover:shadow-2xl"
                    >
                        Schedule Consultation
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" fill="white" />
                            <path d="M5.904 10.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" fill="#f68921" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* About Section */}
            <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                        {/* Left Content */}
                        <div className="order-2 md:order-1">
                            <div className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md mb-3 sm:mb-4 uppercase tracking-wide">
                                ABOUT US
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3 leading-tight">
                                Transforming Supply Chain Strategy
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                                Strategic consulting for modern supply chains. From optimization to risk management, we deliver results. Our team combines decades of industry-leading expertise with innovative solutions to help organizations navigate complex challenges and achieve sustainable growth.
                            </p>
                            <Link
                                href="/about"
                                className="btn-secondary text-sm sm:text-base"
                            >
                                Our Approach
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" fill="currentColor"/>
                                </svg>
                            </Link>
                        </div>

                        {/* Right Image */}
                        <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
                            <Image
                                src="/abou.jpg"
                                alt="Supply Chain Operations"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients Showcase Section */}
            <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Clients Heading */}
                    <div className="text-center mb-8 sm:mb-10 md:mb-12">
                        <div className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md mb-4 uppercase tracking-wide">
                            OUR CLIENTS
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
                            Trusted by Industry Leaders
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl mx-auto">
                            Over <span className="text-brand-orange font-semibold">100+ clients</span> across government, defense, aerospace, and commercial sectors worldwide
                        </p>
                    </div>

                    {/* Client Logos Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
                        <div className="flex items-center justify-center">
                            <Image src="/logo/nasa-logo.svg" alt="NASA" width={100} height={100} className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain" />
                        </div>
                        <div className="flex items-center justify-center">
                            <Image src="/logo/ustc.png" alt="USTC" width={100} height={100} className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain" />
                        </div>
                        <div className="flex items-center justify-center">
                            <Image src="/logo/airforce.png" alt="Air Force" width={100} height={100} className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain" />
                        </div>
                        <div className="flex items-center justify-center">
                            <Image src="/logo/africacom.png" alt="Africa Command" width={100} height={100} className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain" />
                        </div>
                        <div className="flex items-center justify-center col-span-2 sm:col-span-1">
                            <Image src="/logo/mda.png" alt="MDA" width={100} height={100} className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 items-start">
                        {/* Left Column - Header and Images (2/5 width) */}
                        <div className="lg:col-span-2">
                            <div className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md mb-4 uppercase tracking-wide">
                                OUR SERVICES
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
                                Expert Solutions for Modern Supply Chains
                            </h2>

                            {/* Images Grid */}
                            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2 sm:mb-3">
                                <div className="relative h-24 sm:h-32 md:h-40 lg:h-48 rounded-xl overflow-hidden">
                                    <Image
                                        src="/work.jpg"
                                        alt="Supply Chain Operations"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-24 sm:h-32 md:h-40 lg:h-48 rounded-xl overflow-hidden">
                                    <Image
                                        src="/worker.jpg"
                                        alt="Supply Chain Management"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="relative h-32 sm:h-40 md:h-52 lg:h-64 rounded-xl overflow-hidden">
                                <Image
                                    src="/office.jpg"
                                    alt="Warehouse Operations"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Column - Description and Services List (3/5 width) */}
                        <div className="lg:col-span-3">
                            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8">
                                From network optimization to risk management, we deliver strategic solutions that drive efficiency, reduce costs, and strengthen your competitive advantage.
                            </p>

                            <Link
                                href="/services"
                                className="btn-secondary text-sm mb-8"
                            >
                                Explore Our Services
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" fill="currentColor"/>
                                </svg>
                            </Link>

                            {/* What We Offer */}
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-5">
                                What We Offer
                            </h3>

                            <div className="space-y-3">
                                {servicesData.map((service) => (
                                    <Link
                                        key={service.id}
                                        href={`/services?service=${service.id}`}
                                        className="flex items-center justify-between p-3.5 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 group"
                                    >
                                        <span className="text-gray-900 dark:text-gray-100 font-normal text-base">{service.title}</span>
                                        <div className="shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 16 16" className="group-hover:scale-110 transition-transform duration-200">
                                                <circle cx="8" cy="8" r="8" fill="white" className="group-hover:fill-brand-orange transition-colors duration-200" />
                                                <path d="M5.904 10.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" fill="#f68921" className="group-hover:fill-white transition-colors duration-200" />
                                            </svg>
                                        </div>
                                    </Link>
                                ))}
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md mb-4 uppercase tracking-wide">
                            TESTIMONIALS
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
                            Client Success Stories
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl mx-auto">
                            Our clients across government, defense, aerospace, and commercial sectors have achieved measurable improvements in efficiency, risk mitigation, and cost savings.
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                        {/* Testimonial 1 */}
                        <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-4 sm:p-5 md:p-6 lg:p-7 hover:shadow-md hover:border-brand-blue/20 dark:hover:border-brand-blue/40 transition-all duration-300 group">
                            <div className="mb-5">
                                <svg className="w-10 h-10 text-brand-blue/20 group-hover:text-brand-blue/30 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                                &ldquo;The consulting team is always helpful and available to answer any questions. Their strategic insights are consistently on point, which is crucial for our business operations and supply chain optimization.&rdquo;
                            </p>
                                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <div className="relative w-12 h-12 shrink-0">
                                    <Image
                                        src="/man.jpg"
                                        alt="Thomas Pold"
                                        width={48}
                                        height={48}
                                        className="rounded-full object-cover ring-2 ring-brand-blue/10 group-hover:ring-brand-blue/20 transition-all duration-300"
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Thomas Pold</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">Supply Chain Director</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-4 sm:p-5 md:p-6 lg:p-7 hover:shadow-md hover:border-brand-blue/20 dark:hover:border-brand-blue/40 transition-all duration-300 group">
                            <div className="mb-5">
                                <svg className="w-10 h-10 text-brand-blue/20 group-hover:text-brand-blue/30 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                                &ldquo;We appreciate the strategic approach to supply chain risk management. The economic network analysis provided valuable insights that helped us identify and mitigate potential disruptions in our supply chain.&rdquo;
                            </p>
                                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <div className="relative w-12 h-12 shrink-0">
                                    <Image
                                        src="/woman.jpg"
                                        alt="Jenny Morphy"
                                        width={48}
                                        height={48}
                                        className="rounded-full object-cover ring-2 ring-brand-blue/10 group-hover:ring-brand-blue/20 transition-all duration-300"
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Jenny Morphy</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">VP of Supply Chain Operations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner Section */}
            <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight px-2">
                        Ready to Transform Your Supply Chain?
                    </h2>
                    <p className="text-white/90 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-2">
                        Partner with us to optimize your operations, reduce costs, and drive sustainable growth.
                    </p>
                    <Link
                        href="/contacts"
                        className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3"
                    >
                        Get Started Today
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" fill="white"/>
                            <path d="M5.904 10.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" fill="#f68921"/>
                        </svg>
                    </Link>
                </div>
            </section>
        </main>
    );
}
