'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from './lib/servicesData';

export default function Home() {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section with Container Background */}
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-blue pt-32">
        {/* Background image covering full section */}
        <div className="absolute inset-0">
          <Image
            src="/dock.jpg"
            alt="Shipping Containers"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-brand-blue/40"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Supply Chain Strategy
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Strategic consulting for modern supply chains. From optimization to risk management, we deliver results.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-brand-orange-dark transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Schedule Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Clients Showcase Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Clients Heading */}
          <div className="text-center mb-12">
            <p className="text-lg md:text-sm font-medium text-gray-900">
              Over <span className="text-brand-orange">100+ clients</span> All over the World
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="flex items-center justify-center gap-16 md:gap-24 lg:gap-32 mb-20">
            <div className="flex items-center justify-center">
              <Image src="/logo/nasa-logo.svg" alt="NASA" width={100} height={100} className="h-16 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/logo/ustc.png" alt="USTC" width={100} height={100} className="h-16 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/logo/airforce.png" alt="Air Force" width={100} height={100} className="h-16 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/logo/mda.png" alt="MDA" width={100} height={100} className="h-16 w-auto object-contain" />
            </div>
          </div>

          {/* About Section with Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-full mb-6">
                ABOUT US
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Transforming Supply Chain Strategy
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We partner with organizations to optimize supply chain performance. Our seasoned team combines strategic thinking with practical execution across government, aerospace, defense, and commercial sectors.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-brand-orange font-semibold text-lg border-2 border-brand-orange px-6 py-3 rounded-full hover:bg-brand-orange hover:text-white transition-all duration-300"
              >
                Our Approach
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/dock2.jpg"
                alt="Supply Chain Operations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Column - Header and Images (2/5 width) */}
            <div className="lg:col-span-2">
              <div className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md mb-4">
                OUR SERVICES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Expert Solutions for Modern Supply Chains
              </h2>

              {/* Images Grid */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/ware.jpg"
                    alt="Supply Chain Operations"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/ware.jpg"
                    alt="Supply Chain Management"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/ware.jpg"
                  alt="Warehouse Operations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column - Description and Services List (3/5 width) */}
            <div className="lg:col-span-3">
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                From network optimization to risk management, we deliver strategic solutions that drive efficiency, reduce costs, and strengthen your competitive advantage.
              </p>
              
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-brand-orange font-semibold text-base border-2 border-brand-orange px-5 py-2.5 rounded-full hover:bg-brand-orange hover:text-white transition-all duration-300 mb-10"
              >
                Explore Our Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* What We Offer */}
              <h3 className="text-2xl font-bold text-gray-900 mb-5">
                What We Offer
              </h3>

              <div className="space-y-3">
                {servicesData.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services?service=${service.id}`}
                    className="flex items-center justify-between p-3.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                  >
                    <span className="text-gray-900 font-normal text-base">{service.title}</span>
                    <div className="w-7 h-7 rounded-full border-2 border-brand-orange flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange transition-colors duration-200">
                      <svg className="w-3.5 h-3.5 text-brand-orange group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Header */}
            <div>
              <div className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md mb-4">
                SUCCESS STORIES
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                We are the experts the experts turn to.
              </h2>
              <Link
                href="/successes"
                className="inline-flex items-center gap-2 text-brand-orange font-semibold text-base border-2 border-brand-orange px-5 py-2.5 rounded-full hover:bg-brand-orange hover:text-white transition-all duration-300"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right Column - Content Card */}
            <div className="bg-white p-9 rounded-xl shadow-sm">
              <p className="text-gray-900 text-base md:text-lg leading-relaxed mb-6">
                Our <span className="text-brand-orange font-semibold">experts</span> are{' '}
                <span className="text-brand-orange font-semibold">strategists</span>,{' '}
                <span className="text-brand-orange font-semibold">planners</span>,{' '}
                <span className="text-brand-orange font-semibold">logisticians</span>,{' '}
                <span className="text-brand-orange font-semibold">scientists</span>,{' '}
                <span className="text-brand-orange font-semibold">trainers</span>,{' '}
                <span className="text-brand-orange font-semibold">educators</span>, and{' '}
                <span className="text-brand-orange font-semibold">data visualization professionals</span>.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                With more than 25 years of experience and are published across government, 
                business, aerospace, and defense.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
