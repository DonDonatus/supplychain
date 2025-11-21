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
  const [activeService, setActiveService] = useState(servicesData[0]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-blue pt-32">
        <div className="absolute inset-0">
          <Image
            src="/serve.jpg"
            alt="Our Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-blue/40"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive supply chain solutions tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`px-5 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeService.id === service.id
                    ? 'bg-brand-blue text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Service Header */}
            <div className="mb-12">
              <div className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md mb-4">
                {activeService.title.toUpperCase()}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {activeService.tagline}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {activeService.description}
              </p>
            </div>

            {/* Capabilities Grid */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Key Capabilities
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {activeService.capabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <p className="text-gray-900 text-sm font-normal">
                      {capability}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}