"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function ClientsPage() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [showAll, setShowAll] = useState(false);

    const clients = [
        { name: "United States Africa Command", sector: "public" },
        { name: "United States Air Force", sector: "public" },
        { name: "Missile Defense Agency", sector: "public" },
        { name: "U.S. Small Business Administration", sector: "public" },
        { name: "United States Transportation Command", sector: "public" },
        { name: "Operation Enduring Freedom", sector: "public" },
        { name: "United States Trade & Development Agency", sector: "public" },
        { name: "Department of Defense", sector: "public" },
        { name: "DoD Office of Economic Adjustment", sector: "public" },
        { name: "United States Marine Corps", sector: "public" },
        { name: "State of Pennsylvania", sector: "public" },
        { name: "NASA", sector: "public" },
        { name: "United States Postal Service", sector: "public" },
        { name: "Department of Veterans Affairs", sector: "public" },
        { name: "Department of Commerce", sector: "public" },
        { name: "Deloitte Consulting", sector: "private" },
        { name: "Lockheed Martin", sector: "private" },
        { name: "General Electric", sector: "private" },
        { name: "National Association of Electrical Distributors (NAED)", sector: "private" },
        { name: "Boeing", sector: "private" },
        { name: "PriceWaterhouse Coopers", sector: "private" },
        { name: "Rolls Royce", sector: "private" },
        { name: "Raytheon", sector: "private" },
        { name: "Pratt & Whitney", sector: "private" },
        { name: "GP Strategies", sector: "private" },
        { name: "BAE Systems", sector: "private" },
        { name: "Kohler", sector: "private" },
        { name: "Science Applications International Corporation", sector: "private" },
        { name: "Northrop Grumman", sector: "private" },
        { name: "Cisco Systems", sector: "private" },
        { name: "Auburn University", sector: "education" },
        { name: "University of Tennessee Knoxville", sector: "education" },
        { name: "Tufts University", sector: "education" },
        { name: "Wright State University", sector: "education" },
        { name: "University of North Texas", sector: "education" },
        { name: "Defense Acquisition University", sector: "education" },
        { name: "VA Acquisition Academy", sector: "education" },
    ];

    const testimonials = [
        {
            quote: "The consulting team is always helpful and available to answer any questions. Their strategic insights are consistently on point, which is crucial for our business operations and supply chain optimization.",
            author: "Thomas Pold",
            role: "Supply Chain Director",
        },
        {
            quote: "We appreciate the strategic approach to supply chain risk management. The economic network analysis provided valuable insights that helped us identify and mitigate potential disruptions in our supply chain.",
            author: "Jenny Morphy",
            role: "VP of Supply Chain Operations",
        },
        {
            quote: "Their expertise in logistics and supply chain management has been invaluable. The team consistently delivers innovative solutions that exceed expectations and drive measurable results.",
            author: "Client Representative",
            role: "Operations Manager",
        },
    ];

    const filters = [
        { id: 'all', label: 'All Clients' },
        { id: 'public', label: 'Government & Defense' },
        { id: 'private', label: 'Commercial Partners' },
        { id: 'education', label: 'Academic Institutions' },
    ];

    const filteredClients = activeFilter === 'all' 
        ? clients 
        : clients.filter(client => client.sector === activeFilter);

    const getFilterCount = (filterId: string) => {
        if (filterId === 'all') return clients.length;
        return clients.filter(c => c.sector === filterId).length;
    };

    // Mobile: show 6 initially (3 rows with 2 columns), desktop: show all
    const initialDisplayCount = 6;
    const displayClients = showAll 
        ? filteredClients 
        : filteredClients.slice(0, initialDisplayCount);
    const hasMore = filteredClients.length > initialDisplayCount;


    return (
        <main className="bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative min-h-[400px] sm:min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-blue pt-32">
                <div className="absolute inset-0">
                    <Image
                        src="/client.jpg"
                        alt="Our Clients"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/50 to-brand-black/70"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 md:py-16 lg:py-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                        Our Clients
                    </h1>
                    <p className="text-xs text-white/90 max-w-3xl mx-auto leading-relaxed px-2">
                        Trusted by leading organizations across government, defense, and private sectors
                    </p>
                </div>
            </section>

            {/* Clients Grid Section */}
            <section id="clients-section" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md mb-4 uppercase tracking-wide">
                            OUR CLIENTS
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
                            Our Clients
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-base max-w-2xl mx-auto">
                            Trusted partners across government, defense, commercial, and academic sectors
                        </p>
                    </motion.div>

                    {/* Filter Buttons */}
                    <motion.div 
                        className="flex flex-wrap gap-2 justify-center mb-4 sm:mb-6 px-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {filters.map((filter) => (
                            <motion.button
                                key={filter.id}
                                onClick={() => {
                                    setActiveFilter(filter.id);
                                    setShowAll(false); // Reset show all when filter changes
                                }}
                                className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer min-h-[36px] sm:min-h-[40px] ${
                                    activeFilter === filter.id
                                        ? 'bg-brand-blue text-white shadow-sm'
                                        : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
                                }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="whitespace-nowrap">{filter.label}</span> <span className="ml-1 sm:ml-1.5 text-xs opacity-75">({getFilterCount(filter.id)})</span>
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Clients List */}
                    <motion.div 
                        id="clients-grid"
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-2 sm:gap-y-3"
                    >
                        <AnimatePresence mode="popLayout">
                            {displayClients.map((client, index) => (
                                <motion.div
                                    key={client.name}
                                    layout
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ 
                                        duration: 0.2,
                                        delay: index * 0.01
                                    }}
                                    className="flex items-center gap-2 group"
                                >
                                    <span className="text-brand-blue shrink-0">•</span>
                                    <span className="text-gray-900 dark:text-gray-100 text-xs font-normal leading-relaxed group-hover:text-brand-blue dark:group-hover:text-brand-blue transition-colors duration-200">
                                        {client.name}
                                    </span>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Show More Link - Visible on all screen sizes when there are more items */}
                    {hasMore && !showAll && (
                        <motion.div
                            className="flex justify-center mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button
                                onClick={() => setShowAll(true)}
                                className="text-xs text-brand-blue hover:text-brand-blue-dark font-medium transition-colors duration-200"
                            >
                                Show All {filteredClients.length} Clients
                            </button>
                        </motion.div>
                    )}

                    {/* Show Less Link - Visible on all screen sizes when all are shown */}
                    {showAll && hasMore && (
                        <motion.div
                            className="flex justify-center mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button
                                onClick={() => {
                                    setShowAll(false);
                                    // Smooth scroll to top of section
                                    document.getElementById('clients-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                                className="text-xs text-brand-blue hover:text-brand-blue-dark font-medium transition-colors duration-200"
                            >
                                Show Less
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
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

            {/* Testimonials Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md mb-4 uppercase tracking-wide">
                            TESTIMONIALS
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
                            Client Success Stories
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
                            Our clients across government, defense, aerospace, and commercial sectors have achieved measurable improvements in efficiency, risk mitigation, and cost savings.
                        </p>
                    </motion.div>

                    {/* Testimonials Grid - Horizontal */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-4 sm:p-5 md:p-6 lg:p-7 hover:shadow-md hover:border-brand-blue/20 dark:hover:border-brand-blue/40 transition-all duration-300 group"
                            >
                                <div className="mb-5">
                                    <svg
                                        className="w-10 h-10 text-brand-blue/20 group-hover:text-brand-blue/30 transition-colors duration-300"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>
                                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-blue-dark shrink-0 ring-2 ring-brand-blue/10 group-hover:ring-brand-blue/20 transition-all duration-300"></div>
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}