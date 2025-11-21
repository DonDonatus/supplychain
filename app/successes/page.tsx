"use client";

import Link from "next/link";
import Image from 'next/image';

export default function SuccessesPage() {
    const successStories = [
        {
            title: "ScaleUp America",
            category: "US Small Business Administration",
            description:
                "In support of the SBA's mission to grow entrepreneurship and create jobs across America, the SCV team was contracted to operate three ScaleUp America sites in small and rural communities on the east coast. Our programs in Roanoke, VA, Williamsport, PA, and Portland, ME created hundreds of full-time jobs and sustainable profit growth for nearly 300 small businesses.",
        },
        {
            title: "Warehousing Education and Resource Council",
            category: "Industry Standards Development",
            description:
                "The Supply Chain Visions team works hand in hand to develop the WERC standards for warehousing and distribution. Our team wrote the guides on warehouse management that have become industry standard. As part of our work with WERC, we regularly organize industry leaders to assess and review best practices to keep the industry on the cutting edge.",
        },
        {
            title: "IBEX Market Research for US Africa Command",
            category: "Defense Logistics Agency",
            description:
                "Leveraging our global network of resources, the SCV team successfully delivered detailed market research reports for multiple regions across Africa, Latin America, and the Caribbean. Our reports provided the DLA and its clients with valuable information on sources of nearly all classes of supply in each target area.",
        },
        {
            title: "IMCP Supply Chain Mapping",
            category: "US Small Business Administration",
            description:
                "The SCV team was contracted to assess three disrupted economies across the United States as part of the SBA's effort to support and grow the nation's vital manufacturing ecosystem. Our team reviewed the economic networks in northeast Tennessee, central Oklahoma, and southern Virginia to aid the SBA in creating resilient manufacturing supply chains.",
        },
        {
            title: "Afghan Carpet Center of Excellence",
            category: "US Department of Commerce",
            description:
                "The SCV team mapped the national value system for hand-woven carpets in Afghanistan as part of a Department of Commerce effort to restore economic independence to rural communities in the country. We began with a diversified value chain, damaged by decades of conflict, and organized producers into a community of informed participants.",
        },
        {
            title: "Skills Development",
            category: "United States Postal Service",
            description:
                "As the Postal Service continues to face erosion of their core business, combined with competitive pressure from players like FedEx, UPS, and Amazon, leadership has engaged SCV to help find and address opportunities through core skills development.",
        },
        {
            title: "Supply Chain Management School",
            category: "Veterans Affairs Acquisition Academy",
            description:
                "We deliver best-in-class education and professional development to the VA's supply chain workforce. Training happens at the VAAA campus in Maryland and over the web with distance-based learning. We address material and technical skills, VA-specific functional areas, and core activities.",
        },
        {
            title: "Life Cycle Cost Analysis",
            category: "US Trade & Development Agency",
            description:
                "SCV designed and developed the Life Cycle Cost Analysis Curriculum. USTDA aims to enhance the skills of partner countries. Based on the success of the first iteration with five partner nations, USTDA has extended work with SCV through 2025.",
        },
    ];

    const awards = [
        'Supply Chain Brain "Great Supply Chain Partner"',
        "Who's Who in America, Who's Who in the World, Who's Who in Science and Engineering, and Who's Who in Executives and Professionals",
        'Department of Defense recognition for "Selfless Service to the Nation and the People of Iraq"',
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-blue pt-32">
                {/* Background success growth image at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-64 opacity-25">
                    <Image
                        src="/home/don/.gemini/antigravity/brain/ef907607-9ac1-45ca-948b-bcfd09289d6e/hero_success_growth_1763723025152.png"
                        alt="Success Growth"
                        fill
                        className="object-cover object-bottom"
                    />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Our Successes
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Delivering excellence across industries and borders.
                        Explore our proven track record of transformative
                        projects.
                    </p>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {successStories.map((story, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-brand-blue hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="mb-4">
                                    <span className="inline-block px-4 py-1.5 bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider rounded-full">
                                        {story.category}
                                    </span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-brand-black mb-4">
                                    {story.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {story.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards & Recognition Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-black mb-3 md:mb-4">
                            Awards & Recognition
                        </h2>
                        <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-gray-200">
                        <ul className="space-y-6">
                            {awards.map((award, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-4 text-gray-700 text-base md:text-lg"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center mt-1">
                                        <svg
                                            className="w-4 h-4 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <span className="leading-relaxed flex-1">
                                        {award}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Publications Section */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-black mb-3 md:mb-4">
                            Publications
                        </h2>
                        <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-gray-200">
                        <p className="text-gray-700 text-lg mb-6 font-semibold">
                            Quarterly Editorials
                        </p>
                        <a
                            href="https://www.supplychainquarterly.com/blogs/1-reflections"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue-dark transition-all duration-200 shadow-md hover:shadow-lg"
                        >
                            View Our Contributions
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
