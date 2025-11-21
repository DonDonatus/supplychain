'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AboutPage() {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);

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
    { name: 'Shawn Winn', title: 'Team Leader', description: 'is an expert in business operations and transportation. He currently serves as a Director for Supply Chain Visions Inc. and manages projects and professional networks around the globe. His work includes supply chain and industrial base assessments for Maersk across the continent of Africa and the Departments of Defense and Commerce across the Middle East and Central Asia. Shawn holds a BBA from the College of William and Mary and an MBA from the University of Tennessee. He is a Certified Production and Inventory Control Manager with additional certifications in Lean Six Sigma/Continuous Process Improvement and supply chain technologies.', image: '/swin.png' },
    { name: 'Matt Hunt', title: 'Team Leader', description: 'has spent the last decade providing financial management and strategic enterprise support to clients throughout the Department of Defense. His focus has been on development and implementation of solutions for complex enterprise challenges. He is an expert of organizational studies, change management, enterprise/program communication strategy, process improvement, training, and technical analysis. He has extensive knowledge of audit sustainment and policies as it relates to audit readiness and accounting standards.', image: '/mhunt.png' },
    { name: 'Mike Rudolph', title: 'Team Leader', description: 'is a retired Marine Colonel with over 30 years of operational experience, proven leadership, and management success. He has worked around the globe solving business challenges, from small/local to regional and global reach. Mike has led organizations at all levels of complexity and responsibility to develop solutions that produced performance improvements and quantifiable return on investment by using proven leadership, management, and business processes. He is a writer for DC Velocity and a graduate of the University of Missouri, with advanced education from the University of North Carolina (UNC), Pennsylvania State University (Penn State), and Marine Corps University.', image: '/mrudolph.png' },
    { name: 'Rich Hardie', title: 'Team Leader', description: 'has 30 years\' experience managing operations & developing logistics & supply chain processes in military, government & commercial environments. He was AT&T\'s Logistics Manager for a cutting-edge Army R&D program. He provided consulting services to the DLA, DoD Deputy Chief Management Office & the Pentagon. He played a key role in the development & implementation of in-theater financial & contract business systems for the DoD & U.S. Army Central Command. He deployed to Afghanistan & Iraq as a Logistics Civilian Augmentation Program Support Officer. He holds an MS in Supply Chain & Acquisition Management from UMD.', image: '/rhardie.png' },
    { name: 'Gerry Brown', title: 'Team Leader', description: 'brings 30 years of experience in both large and small companies, public sector and private sector, both in the United States and internationally. He has been involved in several start-ups as a member of the management team. Gerry spent several years, as part of a US government economic development effort, working with businesses in Iraq and Afghanistan. Prior to joining Supply Chain Visions, Gerry held management roles in operations, finance, and sales and marketing at Chase Manhattan Bank, IBM, Accenture, HP and Black & Decker. He holds an MBA from the Yale School of Management, a BA from Amherst College, and an Advanced Certificate in Economics from the Fundacao Getulio Vargas in Rio De Janeiro, Brazil.', image: '/jbrown.png' },
    { name: 'Leila Hertzberg', title: 'Team Leader', description: 'is the Business Manager for Supply Chain Visions, coordinating administration, research, and responses. Leila has experience in academic, government, private sector, and nonprofit enterprises. Leila has planned and managed international conferences and academic exchanges around the world, including Washington, DC, Tokyo, Seoul, and Moscow, bringing together high-level government leaders to address strategic issues. With a Bachelor\'s from George Washington University in Sociology – minoring in Russian Language and Literature - and a Master\'s in International Affairs from George Washington, Leila brings a strategic perspective to global business issues. Leila is certified as a Program Management Professional (PMP). Leila edits scholarly books, journals, and conference papers on politics, economics, and military/strategic matters.', image: '/lhberg.png' },
    { name: 'Rose Lopez Keravuori', title: 'Team Leader', description: '(currently on a leave of absence) BG Keravuori is an expert in intelligence and military logistics, assigned to USAFRICOM J2 in Stuttgart, Germany. Previously, BG Keravuori served as Brigade Commander, 259th Expeditionary Military Intelligence Brigade. In the private sector, Rose founded Rose Solutions over a decade ago. Prior to connecting with Supply Chain Visions, BG Keravuori was a Director of Business Development for a large prime contractor in the Washington, DC area, with a focus on stability operations. Before the business development role, Rose held numerous positions, including Program Director with P&L responsibility. A graduate of West Point, Rose also has a Master\'s Degree in International Relations from the University of Oxford and Master\'s in Strategic Studies from the US Army War College.', image: '/rlopez.png' }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(teamLeaders.length / itemsPerPage);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-blue pt-32">
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            About Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Trusted by leading organizations across government, defense, and private sectors
          </p>
        </div>
      </section>

      {/* NAICS Codes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md mb-4">
              CERTIFICATIONS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              NAICS Codes
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {naicsCodes.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="text-brand-blue text-lg font-bold mb-1">{item.code}</div>
                <p className="text-gray-900 text-sm font-normal">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md mb-4">
              GLOBAL REACH
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              We Work Where Others Won't
            </h2>
            <p className="text-gray-600">Some of the countries we've touched</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {countries.map((country, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-3 hover:bg-gray-100 transition-colors duration-200 text-center"
              >
                <p className="text-gray-900 text-sm font-normal">{country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Leaders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md mb-4">
              OUR TEAM
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Team Leaders
            </h2>
          </div>

          {/* Navigation - Mobile: Dots only, Desktop: Arrows + Dots */}
          <div className="flex justify-center items-center gap-4 mb-12">
            {/* Desktop arrows */}
            <button
              onClick={() => setCurrentTeamIndex(Math.max(0, currentTeamIndex - itemsPerPage))}
              disabled={currentTeamIndex === 0}
              className="hidden sm:block p-2 rounded-md bg-brand-blue text-white hover:bg-brand-blue-dark disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              aria-label="Previous team members"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Pagination dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTeamIndex(idx * itemsPerPage)}
                  className={`transition-all duration-200 rounded-full ${
                    Math.floor(currentTeamIndex / itemsPerPage) === idx
                      ? 'bg-brand-blue w-8 h-2'
                      : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentTeamIndex(Math.min(teamLeaders.length - itemsPerPage, currentTeamIndex + itemsPerPage))}
              disabled={currentTeamIndex >= teamLeaders.length - itemsPerPage}
              className="hidden sm:block p-2 rounded-md bg-brand-blue text-white hover:bg-brand-blue-dark disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              aria-label="Next team members"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Team Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamLeaders.slice(currentTeamIndex, currentTeamIndex + itemsPerPage).map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-200"
              >
                {/* Team Member Image */}
                <div className="relative h-80 bg-gray-100">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Team Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-brand-blue text-sm font-medium mb-3">{leader.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-6">
                    {leader.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="flex sm:hidden justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentTeamIndex(Math.max(0, currentTeamIndex - itemsPerPage))}
              disabled={currentTeamIndex === 0}
              className="p-3 rounded-md bg-brand-blue text-white hover:bg-brand-blue-dark disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              aria-label="Previous"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentTeamIndex(Math.min(teamLeaders.length - itemsPerPage, currentTeamIndex + itemsPerPage))}
              disabled={currentTeamIndex >= teamLeaders.length - itemsPerPage}
              className="p-3 rounded-md bg-brand-blue text-white hover:bg-brand-blue-dark disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              aria-label="Next"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}