'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import Globe3D to avoid SSR issues with Three.js
const Globe3D = dynamic(() => import('../components/Globe3D'), { ssr: false });

export default function AboutPage() {
    const [selectedMember, setSelectedMember] = useState<number | null>(null);

    const naicsCodes = [
        { code: '541330', name: 'ENGINEERING SERVICES' },
        { code: '541610', name: 'MANAGEMENT CONSULTING SERVICES' },
        { code: '541611', name: 'ADMINISTRATIVE MANAGEMENT & GENERAL MANAGEMENT CONSULTING SERVICES' },
        { code: '541613', name: 'MARKETING CONSULTING SERVICES' },
        { code: '541614', name: 'PROCESS, PHYSICAL DISTRIBUTION, & LOGISTICS CONSULTING SERVICES' },
        { code: '541690', name: 'ECONOMIC CONSULTING SERVICES' },
        { code: '611430', name: 'PROFESSIONAL AND MANAGEMENT DEVELOPMENT TRAINING' },
        { code: '611710', name: 'EDUCATIONAL SUPPORT SERVICES' },
    ];

    const countries = [
        'Afghanistan', 'Bahrain', 'Bangladesh', 'Brazil', 'Canada', 'Central African Republic',
        'Chad', 'Colombia', 'Curacao', 'Democratic Republic of the Congo', 'El Salvador',
        'Eritrea', 'Finland', 'France', 'Germany', 'Ghana', 'Honduras', 'India', 'Iraq',
        'Ivory Coast', 'Japan', 'Jordan', 'Kenya', 'Kuwait', 'Liberia', 'Malaysia',
        'Mauritania', 'Mexico', 'Netherlands', 'Niger', 'Panama', 'Philippines', 'Qatar',
        'Saudi Arabia', 'Senegal', 'Sierra Leone', 'South Korea', 'South Sudan', 'Spain',
        'Tunisia', 'United Arab Emirates', 'United States', 'Vietnam', 'Yemen', 'Zimbabwe'
    ];

    const teamLeaders = [
        { name: 'Shawn Winn', role: 'Director', description: 'is an expert in business operations and transportation. He currently serves as a Director for Supply Chain Visions Inc. and manages projects and professional networks around the globe. His work includes supply chain and industrial base assessments for Maersk across the continent of Africa and the Departments of Defense and Commerce across the Middle East and Central Asia. Shawn holds a BBA from the College of William and Mary and an MBA from the University of Tennessee. He is a Certified Production and Inventory Control Manager with additional certifications in Lean Six Sigma/Continuous Process Improvement and supply chain technologies.', image: '/team/swin.png' },
        { name: 'Matt Hunt', role: 'Financial Management Expert', description: 'has spent the last decade providing financial management and strategic enterprise support to clients throughout the Department of Defense. His focus has been on development and implementation of solutions for complex enterprise challenges. He is an expert of organizational studies, change management, enterprise/program communication strategy, process improvement, training, and technical analysis. He has extensive knowledge of audit sustainment and policies as it relates to audit readiness and accounting standards.', image: '/team/mhunt.png' },
        { name: 'Mike Rudolph', role: 'Retired Marine Colonel', description: 'is a retired Marine Colonel with over 30 years of operational experience, proven leadership, and management success. He has worked around the globe solving business challenges, from small/local to regional and global reach. Mike has led organizations at all levels of complexity and responsibility to develop solutions that produced performance improvements and quantifiable return on investment by using proven leadership, management, and business processes. He is a writer for DC Velocity and a graduate of the University of Missouri, with advanced education from the University of North Carolina (UNC), Pennsylvania State University (Penn State), and Marine Corps University.', image: '/team/mrudolph.png' },
        { name: 'Rich Hardie', role: 'Logistics & Supply Chain Expert', description: 'has 30 years\' experience managing operations & developing logistics & supply chain processes in military, government & commercial environments. He was AT&T\'s Logistics Manager for a cutting-edge Army R&D program. He provided consulting services to the DLA, DoD Deputy Chief Management Office & the Pentagon. He played a key role in the development & implementation of in-theater financial & contract business systems for the DoD & U.S. Army Central Command. He deployed to Afghanistan & Iraq as a Logistics Civilian Augmentation Program Support Officer. He holds an MS in Supply Chain & Acquisition Management from UMD.', image: '/team/rhardie.png' },
        { name: 'Gerry Brown', role: 'Strategic Advisor', description: 'brings 30 years of experience in both large and small companies, public sector and private sector, both in the United States and internationally. He has been involved in several start-ups as a member of the management team. Gerry spent several years, as part of a US government economic development effort, working with businesses in Iraq and Afghanistan. Prior to joining Supply Chain Visions, Gerry held management roles in operations, finance, and sales and marketing at Chase Manhattan Bank, IBM, Accenture, HP and Black & Decker. He holds an MBA from the Yale School of Management, a BA from Amherst College, and an Advanced Certificate in Economics from the Fundacao Getulio Vargas in Rio De Janeiro, Brazil.', image: '/team/jbrown.png' },
        { name: 'Leila Hertzberg', role: 'Business Manager', description: 'is the Business Manager for Supply Chain Visions, coordinating administration, research, and responses. Leila has experience in academic, government, private sector, and nonprofit enterprises. Leila has planned and managed international conferences and academic exchanges around the world, including Washington, DC, Tokyo, Seoul, and Moscow, bringing together high-level government leaders to address strategic issues. With a Bachelor\'s from George Washington University in Sociology – minoring in Russian Language and Literature - and a Master\'s in International Affairs from George Washington, Leila brings a strategic perspective to global business issues. Leila is certified as a Program Management Professional (PMP). Leila edits scholarly books, journals, and conference papers on politics, economics, and military/strategic matters.', image: '/team/lhberg.png' },
        { name: 'Rose Lopez Keravuori', role: 'Brigadier General (Ret.)', description: '(currently on a leave of absence) BG Keravuori is an expert in intelligence and military logistics, assigned to USAFRICOM J2 in Stuttgart, Germany. Previously, BG Keravuori served as Brigade Commander, 259th Expeditionary Military Intelligence Brigade. In the private sector, Rose founded Rose Solutions over a decade ago. Prior to connecting with Supply Chain Visions, BG Keravuori was a Director of Business Development for a large prime contractor in the Washington, DC area, with a focus on stability operations. Before the business development role, Rose held numerous positions, including Program Director with P&L responsibility. A graduate of West Point, Rose also has a Master\'s Degree in International Relations from the University of Oxford and Master\'s in Strategic Studies from the US Army War College.', image: '/team/rlopez.png' }
    ];

    return (
        <main className="bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative min-h-[400px] sm:min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-blue pt-32">
                <div className="absolute inset-0">
                    <Image
                        src="/about.jpg"
                        alt="About Us"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-brand-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 md:py-16 lg:py-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                        About Us
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-2">
                        Trusted by leading organizations across government, defense, and private sectors
                    </p>
                </div>
            </section>

            {/* Team Leaders Section */}
            <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid xl:grid-cols-3 gap-8 sm:gap-12 md:gap-16 xl:gap-20 items-start">
                        <div className="max-w-xl xl:col-span-1">
                            <div className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md mb-3 sm:mb-4 uppercase tracking-wide">
                                OUR TEAM
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 leading-tight">
                                Meet our leadership
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                            We&apos;re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
                        </p>
                    </div>

                        <ul role="list" className="grid gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-12 sm:grid-cols-2 xl:col-span-2">
                        {teamLeaders.map((leader, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => setSelectedMember(index)}
                                    className="w-full text-left"
                                >
                                    <div className="flex items-center gap-x-3 sm:gap-x-4 md:gap-x-6 group cursor-pointer hover:opacity-80 transition-opacity">
                                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:size-16 shrink-0">
                                            <Image
                                                src={leader.image}
                                                alt={leader.name}
                                                fill
                                                className="rounded-full outline-1 -outline-offset-1 outline-black/5 object-cover"
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-sm sm:text-base font-semibold tracking-tight text-gray-900 dark:text-gray-100 leading-6 sm:leading-7">
                                                {leader.name}
                                            </h3>
                                            <p className="text-xs sm:text-sm font-semibold text-brand-orange leading-5 sm:leading-6">
                                                {leader.role}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>

                {/* Modal for Team Member Details */}
                {selectedMember !== null && (
                    <div
                        className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedMember(null)}
                    >
                        <div
                            className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl mx-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-start justify-between rounded-t-xl sm:rounded-t-2xl">
                                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 min-w-0 flex-1">
                                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 shrink-0">
                                        <div className="absolute inset-0 rounded-full overflow-hidden ring-2 sm:ring-4 ring-brand-orange">
                                            <Image
                                                src={teamLeaders[selectedMember].image}
                                                alt={teamLeaders[selectedMember].name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 truncate">
                                            {teamLeaders[selectedMember].name}
                                        </h3>
                                        <p className="text-sm sm:text-base text-brand-orange font-medium truncate">{teamLeaders[selectedMember].role}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors shrink-0 ml-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                                    aria-label="Close modal"
                                >
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
                                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <span className="font-semibold">{teamLeaders[selectedMember].name}</span>{' '}
                                    {teamLeaders[selectedMember].description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Company Overview Banner Section */}
            <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight px-2">
                        Experts the Experts Turn To
                    </h2>
                    <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
                        We partner with organizations to optimize supply chain performance. Our seasoned team combines strategic thinking with practical execution across government, aerospace, defense, and commercial sectors.
                    </p>
                </div>
            </section>

            {/* NAICS Codes Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md mb-4 uppercase tracking-wide">
                            CERTIFICATIONS
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
                            NAICS Codes
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl mx-auto">
                            Our certified capabilities across multiple industry classifications
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {naicsCodes.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-5 hover:shadow-md hover:border-brand-blue/20 dark:hover:border-brand-blue/40 transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-2 mb-2">
                                    <div className="w-1 h-6 bg-brand-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="flex-1">
                                        <div className="text-brand-blue text-lg font-bold mb-1.5">{item.code}</div>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Countries Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Globe Visualization */}
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-md aspect-square">
                                <Globe3D />
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div>
                            <div className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md mb-4 uppercase tracking-wide">
                                GLOBAL REACH
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
                                We Work Where Others Won&apos;t
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Our team has delivered successful projects across 45+ countries spanning six continents.
                            </p>

                            {/* Countries list in columns */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-y-2">
                                {countries.map((country, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></div>
                                        <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">{country}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner Section */}
            <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight px-2">
                        Join Our Network of Trusted Partners
                    </h2>
                    <p className="text-white/90 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-2">
                        Discover how our strategic supply chain expertise can transform your organization
                    </p>
                    <Link
                        href="/contacts"
                        className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3"
                    >
                        Become a Partner
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