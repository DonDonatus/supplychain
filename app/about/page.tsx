'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import Globe to avoid SSR issues
const Globe3D = dynamic(() => import('@/components/ui/globe').then(mod => ({ default: mod.Globe })), { ssr: false });

export default function AboutPage() {
    const [selectedMember, setSelectedMember] = useState<number | null>(null);

    // Helper function to convert to Title Case
    const toTitleCase = (str: string) => {
        return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
    };

    // Get icon and color for each NAICS code using Heroicons outline
    const getNaicsIconWithColor = (code: string) => {
        const iconMap: Record<string, { icon: React.ReactElement; color: string }> = {
            '541330': {
                color: 'text-blue-600',
                icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                )
            },
            '541610': {
                color: 'text-purple-600',
                icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                )
            },
            '541611': {
                color: 'text-green-600',
                icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                )
            },
            '541613': {
                color: 'text-orange-600',
                icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                )
            },
            '541614': {
                color: 'text-red-600',
                icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                )
            },
            '541690': {
                color: 'text-indigo-600',
                icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                )
            },
            '611430': {
                color: 'text-pink-600',
                icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                    </svg>
                )
            },
            '611710': {
                color: 'text-teal-600',
                icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                )
            },
        };
        return iconMap[code] || {
            color: 'text-gray-600',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        };
    };

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
        { name: 'Jake Sones', role: 'CEO', description: 'is a seasoned executive strategy and financial management leader with experience supporting the Department of Defense (DoD) and the Department of Homeland Security (DHS). He has led the design, development, and implementation of innovative financial management systems and audit readiness solutions to meet evolving federal accounting, audit, and fiscal monitoring requirements. His leadership was instrumental in downgrading multiple material weaknesses across the DoD and driving the adoption of enterprise-wide technological solutions. His comprehensive expertise and cross-functional leadership continue to shape the future of financial management and audit strategy across the federal landscape.', image: '/team/jake.jpg' },
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
            <section className="relative min-h-[300px] sm:min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-blue pt-32">
                <div className="absolute inset-0">
                    <Image
                        src="/about.jpg"
                        alt="About Us"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/50 to-brand-black/70"></div>
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
                            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
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
                                    className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors shrink-0 ml-2 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
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

            {/* Our Vision Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12">
                        <div className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md mb-4 uppercase tracking-wide">
                            OUR VISION
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
                            Our Vision
                        </h2>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                            Across regions and borders around the globe, our team of experts uses decades of industry-leading and nationally recognized expertise to empower the connections between people, ideas, and things.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                            From organizing independent producers in Afghanistan into a business community competitive in a global market, to leading graduate and executive education through partnerships with top universities, we meet client needs by drawing on a deep bench of experts to analyze and execute strategic insights like no other organization can.
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Overview Banner Section */}
            <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight px-2">
                        Your Strategic Supply Chain Partner
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
                        <p className="text-gray-600 dark:text-gray-400 text-base max-w-2xl mx-auto">
                            Our certified capabilities across multiple industry classifications
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {naicsCodes.map((item, index) => {
                            const { icon, color } = getNaicsIconWithColor(item.code);
                            const bgColorClass = color.replace('text', 'bg').replace('600', '100');
                            return (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-5 hover:shadow-md transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${bgColorClass} ${color}`}>
                                            {icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className={`${color} text-lg font-bold mb-1.5`}>{item.code}</div>
                                            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">{toTitleCase(item.name)}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
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
                            <p className="text-gray-600 dark:text-gray-400 text-base mb-6">
                                Our team has delivered successful projects across 45+ countries spanning six continents.
                            </p>

                            {/* Countries list in columns */}
                            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-y-2">
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