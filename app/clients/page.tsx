"use client";

import Image from 'next/image';

export default function ClientsPage() {
    const publicSector = [
        "United States Africa Command",
        "United States Air Force",
        "Missile Defense Agency",
        "U.S. Small Business Administration",
        "United States Transportation Command",
        "Operation Enduring Freedom",
        "United States Trade & Development Agency",
        "Department of Defense",
        "DoD Office of Economic Adjustment",
        "United States Marine Corps",
        "State of Pennsylvania",
        "NASA",
        "United States Postal Service",
        "Department of Veterans Affairs",
        "Department of Commerce",
    ];

    const privateSector = [
        "Deloitte Consulting",
        "Lockheed Martin",
        "General Electric",
        "National Association of Electrical Distributors (NAED)",
        "Boeing",
        "PriceWaterhouse Coopers",
        "Rolls Royce",
        "Raytheon",
        "Pratt & Whitney",
        "GP Strategies",
        "BAE Systems",
        "Kohler",
        "Science Applications International Corporation",
        "Northrop Grumman",
        "Cisco Systems",
    ];

    const higherEducation = [
        "Auburn University",
        "University of Tennessee Knoxville",
        "Tufts University",
        "Wright State University",
        "University of North Texas",
        "Defense Acquisition University",
        "VA Acquisition Academy",
    ];

    const testimonials = [
        {
            quote: "The SCV team delivered exceptional results, transforming our supply chain operations and creating sustainable growth across multiple regions.",
            author: "Client Representative",
            company: "US Small Business Administration",
            role: "Program Director",
        },
        {
            quote: "Their expertise in logistics and supply chain management has been invaluable. The team consistently delivers innovative solutions that exceed expectations.",
            author: "Client Representative",
            company: "Defense Logistics Agency",
            role: "Operations Manager",
        },
        {
            quote: "Working with SCV has been transformative for our organization. Their strategic approach and deep industry knowledge make them an invaluable partner.",
            author: "Client Representative",
            company: "Veterans Affairs",
            role: "Training Director",
        },
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-blue pt-32">
                <div className="absolute inset-0">
                    <Image
                        src="/client.jpg"
                        alt="Our Clients"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-brand-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Our Clients
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Trusted by leading organizations across government, defense, and private sectors
                    </p>
                </div>
            </section>

            {/* Public Sector */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10">
                        <div className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md mb-4">
                            PUBLIC SECTOR
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Government & Defense
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {publicSector.map((client, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
                            >
                                <p className="text-gray-900 text-sm font-normal">
                                    {client}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Private Sector */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10">
                        <div className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md mb-4">
                            PRIVATE SECTOR
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Commercial Partners
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {privateSector.map((client, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200"
                            >
                                <p className="text-gray-900 text-sm font-normal">
                                    {client}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Higher Education */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10">
                        <div className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md mb-4">
                            HIGHER EDUCATION
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Academic Institutions
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {higherEducation.map((client, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
                            >
                                <p className="text-gray-900 text-sm font-normal">
                                    {client}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10">
                        <div className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md mb-4">
                            TESTIMONIALS
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            What Our Clients Say
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-sm"
                            >
                                <div className="mb-4">
                                    <svg
                                        className="w-8 h-8 text-brand-orange"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    {testimonial.quote}
                                </p>
                                <div className="border-t border-gray-200 pt-4">
                                    <p className="font-semibold text-gray-900 text-sm">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        {testimonial.role}
                                    </p>
                                    <p className="text-xs text-brand-orange font-medium mt-1">
                                        {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}