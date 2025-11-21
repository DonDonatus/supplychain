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
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-blue pt-32">
                {/* Background partnership image at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-64 opacity-25">
                    <Image
                        src="/client.jpg"
                        alt="Partnership"
                        fill
                        className="object-cover object-bottom"
                    />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Our Clients
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Trusted by leading organizations across government,
                        defense, private sector, and higher education
                    </p>
                </div>
            </section>

            {/* Public Sector */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-blue mb-3 md:mb-4">
                            Public Sector
                        </h2>
                        <div className="w-20 h-1 bg-brand-orange"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {publicSector.map((client, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-brand-blue hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-5 h-5 text-brand-blue"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-gray-700 leading-relaxed font-normal">
                                        {client}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Private Sector */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-blue mb-3 md:mb-4">
                            Private Sector
                        </h2>
                        <div className="w-20 h-1 bg-brand-orange"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {privateSector.map((client, index) => (
                            <div
                                key={index}
                                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-brand-blue hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-5 h-5 text-brand-orange"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-semibold text-brand-black leading-tight">
                                        {client}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Higher Education */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-blue mb-3 md:mb-4">
                            Higher Education
                        </h2>
                        <div className="w-20 h-1 bg-brand-orange"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {higherEducation.map((client, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-brand-blue hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-5 h-5 text-brand-blue"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-semibold text-brand-black leading-tight">
                                        {client}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-black mb-3 md:mb-4">
                            What Our Clients Say
                        </h2>
                        <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200 hover:border-brand-blue transition-all duration-300"
                            >
                                <div className="mb-6">
                                    <svg
                                        className="w-10 h-10 text-brand-orange"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-6 italic">
                                    "{testimonial.quote}"
                                </p>
                                <div className="border-t border-gray-300 pt-4">
                                    <p className="font-bold text-brand-black">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {testimonial.role}
                                    </p>
                                    <p className="text-sm text-brand-blue font-semibold">
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
