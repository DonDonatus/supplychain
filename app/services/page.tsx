'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
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
    ],
    benefits: [
      'Data-driven decision making',
      'Competitive advantage in global markets',
      'Strengthened community partnerships',
      'Sustainable economic growth'
    ],
    icon: (
      <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
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
    ],
    benefits: [
      'Clear strategic direction',
      'Improved organizational alignment',
      'Enhanced decision-making capabilities',
      'Measurable performance improvements'
    ],
    icon: (
      <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
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
    ],
    benefits: [
      'Streamlined operations',
      'Reduced operational costs',
      'Improved productivity',
      'Better resource utilization'
    ],
    icon: (
      <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
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
    ],
    benefits: [
      'Extended asset life',
      'Reduced total cost of ownership',
      'Improved system reliability',
      'Sustainable operations'
    ],
    icon: (
      <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
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
    ],
    benefits: [
      'Enhanced internal capabilities',
      'Reduced dependency on external resources',
      'Improved knowledge retention',
      'Stronger organizational resilience'
    ],
    icon: (
      <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
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
    ],
    benefits: [
      'Reduced supply chain disruptions',
      'Enhanced business resilience',
      'Improved supplier relationships',
      'Better risk visibility'
    ],
    icon: (
      <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
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
    ],
    benefits: [
      'Credible expert testimony',
      'Comprehensive technical analysis',
      'Clear, defensible opinions',
      'Extensive industry experience'
    ],
    icon: (
      <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  }
];

export default function ServicesPage() {
  const searchParams = useSearchParams();
  const [activeService, setActiveService] = useState(servicesData[0]);

  // Handle URL query parameter to navigate to specific service
  useEffect(() => {
    const serviceId = searchParams.get('service');
    if (serviceId) {
      const service = servicesData.find(s => s.id === serviceId);
      if (service) {
        setActiveService(service);
      }
    }
  }, [searchParams]);

  const handleServiceClick = (service: any) => {
    setActiveService(service);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-blue pt-32">
        {/* Background warehouse image at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 opacity-25">
          <Image
            src="/home/don/.gemini/antigravity/brain/ef907607-9ac1-45ca-948b-bcfd09289d6e/hero_warehouse_logistics_1763722964648.png"
            alt="Warehouse Logistics"
            fill
            className="object-cover object-bottom"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive supply chain solutions tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-10 md:gap-12">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-5 md:mb-6">Services</h2>
                <nav className="space-y-2">
                  {servicesData.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(service)}
                      className={`group w-full text-left px-5 py-4 rounded-xl transition-all duration-300 ${
                        activeService.id === service.id
                          ? 'bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white shadow-lg transform scale-105'
                          : 'text-gray-700 hover:bg-gray-100 hover:shadow-md hover:translate-x-1'
                      }`}
                    >
                      <span className="text-sm font-medium flex items-center gap-2">
                        {activeService.id === service.id && (
                          <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                        )}
                        {service.title}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Service Content */}
            <main className="lg:col-span-3">
              {/* Service Header Card */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white mb-10 shadow-2xl">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-orange/40 to-transparent"></div>
                
                <div className="relative z-10 p-10 md:p-14">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="p-5 bg-white/10 backdrop-blur-md rounded-2xl flex-shrink-0">
                      <div className="text-brand-orange">
                        {activeService.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-4 leading-tight">
                        {activeService.title.toUpperCase()}
                      </h2>
                      <div className="w-20 h-1.5 bg-brand-orange mb-5"></div>
                      <p className="text-base md:text-lg lg:text-xl text-white/90 font-normal leading-relaxed">
                        {activeService.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Details Card */}
              <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl border border-gray-100">
                {/* Overview */}
                <div className="mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-5">Overview</h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed font-normal">
                    {activeService.description}
                  </p>
                </div>

                <div className="border-t border-gray-200 my-10"></div>

                {/* Capabilities */}
                <div className="mb-10">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-5 md:mb-6">
                    {activeService.capabilities ? 'Key Capabilities' : 'What We Offer'}              </h3>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {activeService.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-base text-gray-700">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 my-10"></div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-5 md:mb-6">Key Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {activeService.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="group p-5 bg-gradient-to-br from-brand-blue/5 to-transparent rounded-2xl border-l-4 border-brand-blue hover:shadow-lg hover:border-brand-orange transition-all duration-300"
                      >
                        <p className="text-base text-gray-800 font-medium">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}