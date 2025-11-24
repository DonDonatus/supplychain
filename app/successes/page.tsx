"use client";

import Image from 'next/image';
import { TrendingUp, Warehouse, Globe, Map, Mail, GraduationCap, BarChart3, Receipt } from 'lucide-react';

export default function SuccessesPage() {
    const successStories = [
        {
            title: "ScaleUp America",
            category: "US Small Business Administration",
            description:
                "In support of the SBA's mission to grow entrepreneurship and create jobs across America, the SCV team was contracted to operate three ScaleUp America sites in small and rural communities on the east coast. Our programs in Roanoke, VA, Williamsport, PA, and Portland, ME created hundreds of full-time jobs and sustainable profit growth for nearly 300 small businesses.",
            icon: TrendingUp,
            iconColor: { bg: 'bg-blue-100', text: 'text-blue-600' }
        },
        {
            title: "Warehousing Education and Resource Council",
            category: "Industry Standards Development",
            description:
                "The Supply Chain Visions team works hand in hand to develop the WERC standards for warehousing and distribution. Our team wrote the guides on warehouse management that have become industry standard. As part of our work with WERC, we regularly organize industry leaders to assess and review best practices to keep the industry on the cutting edge.",
            icon: Warehouse,
            iconColor: { bg: 'bg-green-100', text: 'text-green-600' }
        },
        {
            title: "IBEX Market Research for US Africa Command",
            category: "Defense Logistics Agency",
            description:
                "Leveraging our global network of resources, the SCV team successfully delivered detailed market research reports for multiple regions across Africa, Latin America, and the Caribbean. Our reports provided the DLA and its clients with valuable information on sources of nearly all classes of supply in each target area.",
            icon: Globe,
            iconColor: { bg: 'bg-purple-100', text: 'text-purple-600' }
        },
        {
            title: "IMCP Supply Chain Mapping",
            category: "US Small Business Administration",
            description:
                "The SCV team was contracted to assess three disrupted economies across the United States as part of the SBA's effort to support and grow the nation's vital manufacturing ecosystem. Our team reviewed the economic networks in northeast Tennessee, central Oklahoma, and southern Virginia to aid the SBA in creating resilient manufacturing supply chains.",
            icon: Map,
            iconColor: { bg: 'bg-orange-100', text: 'text-orange-600' }
        },
        {
            title: "Afghan Carpet Center of Excellence",
            category: "US Department of Commerce",
            description:
                "The SCV team mapped the national value system for hand-woven carpets in Afghanistan as part of a Department of Commerce effort to restore economic independence to rural communities in the country. We began with a diversified value chain, damaged by decades of conflict, and organized producers into a community of informed participants.",
            icon: Receipt,
            iconColor: { bg: 'bg-red-100', text: 'text-red-600' }
        },
        {
            title: "Skills Development",
            category: "United States Postal Service",
            description:
                "As the Postal Service continues to face erosion of their core business, combined with competitive pressure from players like FedEx, UPS, and Amazon, leadership has engaged SCV to help find and address opportunities through core skills development.",
            icon: Mail,
            iconColor: { bg: 'bg-indigo-100', text: 'text-indigo-600' }
        },
        {
            title: "Supply Chain Management School",
            category: "Veterans Affairs Acquisition Academy",
            description:
                "We deliver best-in-class education and professional development to the VA's supply chain workforce. Training happens at the VAAA campus in Maryland and over the web with distance-based learning. We address material and technical skills, VA-specific functional areas, and core activities.",
            icon: GraduationCap,
            iconColor: { bg: 'bg-pink-100', text: 'text-pink-600' }
        },
        {
            title: "Life Cycle Cost Analysis",
            category: "US Trade & Development Agency",
            description:
                "SCV designed and developed the Life Cycle Cost Analysis Curriculum. USTDA aims to enhance the skills of partner countries. Based on the success of the first iteration with five partner nations, USTDA has extended work with SCV through 2025.",
            icon: BarChart3,
            iconColor: { bg: 'bg-teal-100', text: 'text-teal-600' }
        },
    ];

    const awards = [
        'Supply Chain Brain "Great Supply Chain Partner"',
        "Who's Who in America, Who's Who in the World, Who's Who in Science and Engineering, and Who's Who in Executives and Professionals",
        'Department of Defense recognition for "Selfless Service to the Nation and the People of Iraq"',
    ];

    return (
        <main className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative min-h-[400px] sm:min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-blue pt-32">
                {/* Background success growth image at bottom */}
                <div className="absolute inset-0">
                    <Image
                        src="/success.png"
                        alt="Success Growth"
                        fill
                        className="object-cover "
                    />
               <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/50 to-brand-black/70"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 md:py-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                        Our Successes
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-2">
                        Delivering excellence across industries and borders.
                        Explore our proven track record of transformative
                        projects.
                    </p>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md mb-4 uppercase tracking-wide">
                            SUCCESS STORIES
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
                            Success Stories
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl mx-auto">
                            Proven results across industries and borders with measurable impact
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                        {successStories.map((story, index) => {
                            const Icon = story.icon;

                            return (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-4 sm:p-6 md:p-8 hover:shadow-md hover:border-brand-blue/20 dark:hover:border-brand-blue/40 transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                                        <div className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${story.iconColor.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ${story.iconColor.text}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-md uppercase tracking-wide">
                                                {story.category}
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
                                        {story.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {story.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Awards & Recognition Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md mb-4 uppercase tracking-wide">
                            AWARDS
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
                            Awards & Recognition
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl mx-auto">
                            Recognized by industry leaders and organizations for excellence and innovation
                        </p>
                    </div>

                    {/* Awards Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {awards.map((award, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-6 hover:shadow-md hover:border-brand-blue/20 dark:hover:border-brand-blue/40 transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Award number badge */}
                                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-xs font-bold text-brand-blue">
                                    {index + 1}
                                </div>

                                <p className="text-gray-900 dark:text-gray-100 font-semibold text-sm leading-relaxed pr-6">
                                    {award}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Publications Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md mb-4 uppercase tracking-wide">
                            PUBLICATIONS
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
                            Publications & Thought Leadership
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl mx-auto">
                            Read our industry insights and strategic perspectives in leading publications
                        </p>
                    </div>

                    <div className="grid md:grid-cols-1 gap-8">
                        <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-8 hover:shadow-md hover:border-brand-blue/20 dark:hover:border-brand-blue/40 transition-all duration-300">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0">
                                    <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-600 dark:text-gray-400 text-xs font-semibold uppercase tracking-wide mb-2">Supply Chain Quarterly</p>
                                    <h3 className="text-gray-900 dark:text-gray-100 text-lg font-bold mb-2">
                                        Quarterly Editorials
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                                        Read our thought leadership and industry insights published in Supply Chain Quarterly. Our team regularly contributes strategic perspectives on supply chain optimization, risk management, and economic network analysis.
                                    </p>
                                    <a
                                        href="https://www.supplychainquarterly.com/blogs/1-reflections"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary text-sm"
                                    >
                                        Read Articles
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                            <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" fill="currentColor"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
