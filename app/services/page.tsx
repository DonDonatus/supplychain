'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const servicesData = [
    {
        id: 'economic-network-analysis',
        title: 'Economic Network Analysis',
        tagline: 'Understanding the economic forces that drive your supply chain',
        description: "SCV's network analysis and development engineers are committed to capitalize on their existing base of industry leaders and stakeholders. By developing an understanding of what makes each regional or industrial economy unique, SCV's experts can combine the strengths of the community with a fresh perspective on how to make those strengths stand out in an increasingly competitive national and global marketplace.",
        capabilities: [
            'Strategy & Implementation Planning',
            'Industrial Base Management',
            'Market Diversification Support',
            'Ecosystem Analysis (SWOT, Geospatial Value Chain, Heat, etc.)',
            'Cluster Collaboration Programs',
            'Advocacy Creation',
            'Business Education & Advising',
            'Demand Identification & Generation'
        ]
    },
    {
        id: 'strategy-enablement',
        title: 'Strategy Enablement',
        tagline: 'Empowering your organization with actionable strategies',
        description: 'Our strategy enablement services help organizations develop and execute comprehensive strategies that align with their business objectives and market realities.',
        capabilities: [
            'Strategic Planning & Roadmapping',
            'Organizational Alignment',
            'Change Management',
            'Performance Metrics Development',
            'Stakeholder Engagement',
            'Risk Assessment & Mitigation'
        ]
    },
    {
        id: 'operational-alignment',
        title: 'Operational Alignment',
        tagline: 'Synchronizing your operations for maximum efficiency',
        description: 'We help organizations align their operational processes with strategic goals, ensuring seamless execution and optimal resource utilization.',
        capabilities: [
            'Process Optimization',
            'Workflow Analysis & Design',
            'Resource Allocation',
            'Performance Monitoring',
            'Continuous Improvement Programs',
            'Cross-functional Coordination'
        ]
    },
    {
        id: 'lifecycle-sustainment',
        title: 'Lifecycle Sustainment',
        tagline: 'Sustaining excellence throughout the entire lifecycle',
        description: 'Our lifecycle sustainment services ensure your systems and processes remain effective, efficient, and relevant throughout their operational life.',
        capabilities: [
            'Maintenance Planning',
            'Asset Management',
            'Modernization Strategies',
            'End-of-Life Planning',
            'Obsolescence Management',
            'Sustainability Programs'
        ]
    },
    {
        id: 'knowledge-transfer',
        title: 'Knowledge Transfer',
        tagline: 'Building internal expertise for long-term success',
        description: 'We facilitate effective knowledge transfer to build your organization\'s internal capabilities and ensure sustainable expertise development.',
        capabilities: [
            'Training Program Development',
            'Mentorship Programs',
            'Documentation & Best Practices',
            'Skills Assessment',
            'Capability Building',
            'Succession Planning'
        ]
    },
    {
        id: 'supply-chain-risk-management',
        title: 'Supply Chain Risk Management',
        tagline: 'Protecting your supply chain from disruption',
        description: 'Our risk management services help identify, assess, and mitigate supply chain vulnerabilities to ensure business continuity and resilience.',
        capabilities: [
            'Risk Assessment & Analysis',
            'Vulnerability Identification',
            'Mitigation Strategy Development',
            'Business Continuity Planning',
            'Supplier Risk Evaluation',
            'Crisis Management Support'
        ]
    },
    {
        id: 'expert-witness',
        title: 'Expert Witness',
        tagline: 'Authoritative expertise when it matters most',
        description: 'Our expert witness services provide authoritative testimony and analysis for legal proceedings involving supply chain, logistics, and operational matters.',
        capabilities: [
            'Expert Testimony',
            'Technical Analysis',
            'Report Preparation',
            'Deposition Support',
            'Case Strategy Consultation',
            'Industry Standards Interpretation'
        ]
    }
];

export default function ServicesPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Auto-rotate through services every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setActiveIndex((prev) => (prev + 1) % servicesData.length);
                setIsAnimating(false);
            }, 300);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const activeService = servicesData[activeIndex];

    const handleServiceClick = (index: number) => {
        if (index !== activeIndex) {
            setIsAnimating(true);
            setTimeout(() => {
                setActiveIndex(index);
                setIsAnimating(false);
            }, 300);
        }
    };

    return (
        <main className="bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative min-h-[400px] sm:min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-blue pt-32">
                <div className="absolute inset-0">
                    <Image
                        src="/service.jpg"
                        alt="Our Services"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-brand-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 md:py-16 lg:py-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                        Our Services
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-2">
                        Comprehensive supply chain solutions tailored to your unique needs
                    </p>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md mb-4 uppercase tracking-wide">
                            OUR SERVICES
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
                            Our Services
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl mx-auto">
                            Comprehensive solutions tailored to your unique supply chain challenges
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                        {/* Left Column - Service List */}
                        <div className="space-y-1.5 sm:space-y-2 order-2 lg:order-1 max-h-[400px] sm:max-h-none overflow-y-auto lg:overflow-visible pr-2 sm:pr-0">
                            {servicesData.map((service, index) => (
                                <button
                                    key={service.id}
                                    onClick={() => handleServiceClick(index)}
                                    className={`w-full text-left p-2.5 sm:p-3 md:p-3.5 rounded-lg border transition-all duration-300 cursor-pointer min-h-[48px] sm:min-h-[56px] md:min-h-[60px] ${activeIndex === index
                                            ? 'border-brand-blue bg-brand-blue/5 dark:bg-brand-blue/10 shadow-md'
                                            : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-brand-blue/30 dark:hover:border-brand-blue/50 hover:shadow-sm hover:bg-gray-50/50 dark:hover:bg-gray-700/50'
                                        }`}
                                >
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className={`shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center text-xs font-bold transition-all duration-300 ${activeIndex === index
                                                ? 'bg-brand-blue text-white'
                                                : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 group-hover:bg-brand-blue/20'
                                            }`}>
                                            {index + 1}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className={`text-xs sm:text-sm font-bold transition-colors ${activeIndex === index ? 'text-brand-blue' : 'text-gray-900 dark:text-gray-100'
                                                }`}>
                                                {service.title}
                                            </h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1 hidden sm:block">{service.tagline}</p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Right Column - Service Details */}
                        <div className="lg:sticky lg:top-24 lg:self-start order-1 lg:order-2">
                            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all duration-300">
                                <div
                                    className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                                        }`}
                                >
                                    {/* Service Header */}
                                    <div className="mb-4 sm:mb-6">
                                        <div className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-2 sm:px-2.5 py-1 rounded-md mb-2 uppercase tracking-wide">
                                            {activeService.title}
                                        </div>
                                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 leading-tight">
                                            {activeService.tagline}
                                        </h2>
                                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {activeService.description}
                                        </p>
                                    </div>

                                    {/* Capabilities */}
                                    <div>
                                        <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">
                                            Key Capabilities
                                        </h3>
                                        <div className="grid gap-1.5 sm:gap-2">
                                            {activeService.capabilities.map((capability, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start gap-2 sm:gap-2.5 bg-gray-50 dark:bg-gray-800 rounded-md p-2 sm:p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                                >
                                                    <div className="shrink-0 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-brand-blue/10 flex items-center justify-center mt-0.5">
                                                        <svg className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <p className="text-gray-900 dark:text-gray-100 text-xs font-normal flex-1 leading-relaxed">
                                                        {capability}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Progress Indicator with Label */}
                                    <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 sm:mb-3">Service {activeIndex + 1} of {servicesData.length}</p>
                                        <div className="flex items-center gap-1 sm:gap-1.5">
                                            {servicesData.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleServiceClick(index)}
                                                    className={`h-1 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80 min-w-[8px] ${index === activeIndex ? 'bg-brand-blue w-6 sm:w-8' : 'bg-gray-300 dark:bg-gray-600 w-2'
                                                        }`}
                                                    aria-label={`Go to service ${index + 1}`}
                                                />
                                            ))}
                                        </div>
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