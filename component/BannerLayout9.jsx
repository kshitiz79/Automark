"use client";
import React from 'react';

const cards = [
    {
        title: "Health Insurance",
        desc: "Comprehensive health coverage for individuals and families. Access to cashless hospitalization across 10,000+ network hospitals with zero-compromise care.",
        features: [
            {
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                ),
                title: "Individual & Family Plans",
                desc: "Tailored health plans for individuals, family floaters, senior citizens, and critical illness — covering hospitalization, day-care, and OPD expenses."
            },
            {
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                ),
                title: "Group Employee Benefits",
                desc: "Attract and retain talent with structured Group Health, Group Term Life, and Group Personal Accident insurance programs for your workforce."
            }
        ],
        image: "/560390/1.png",
        progress: 88,
        progressDesc: "10,000+ cashless network hospitals across India for zero-hassle hospitalization."
    },
    {
        title: "Motor & Property Insurance",
        desc: "Complete vehicle protection from third-party liability to own damage and comprehensive cover. Fast claim settlement with 24/7 roadside assistance. Protect your home and its contents against fire, natural calamities, theft, and structural damage.",
        features: [
            {
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8l2-2z" />
                    </svg>
                ),
                title: "Motor Insurance",
                desc: "Car, two-wheeler, fleet, and commercial vehicle insurance — third-party, own damage, and comprehensive cover with fast claim settlement."
            },
            {
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                ),
                title: "Home & Property Insurance",
                desc: "Structure, contents, apartment, and landlord plans — protecting owned and rented homes against fire, calamities, and theft."
            }
        ],
        image: "/560390/2.png",
        progress: 62,
        progressDesc: "24/7 roadside assistance and fast claim settlement for all motor insurance policies."
    },
    {
        title: "Liability & Risk Management",
        desc: "Guard your business against legal and financial liabilities. We go beyond policies — analyzing your risk profile, identifying exposure gaps, and engineering a bespoke risk mitigation strategy aligned to your business objectives.",
        features: [
            {
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                ),
                title: "Liability Insurance",
                desc: "Professional Indemnity, Directors & Officers (D&O), Public Liability, and Product Liability — protecting your business from legal and financial exposure."
            },
            {
                icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                ),
                title: "Strategic Risk Management",
                desc: "Risk Audit, Gap Analysis, and Custom Programs — we engineer a bespoke risk mitigation strategy aligned to your business objectives."
            }
        ],
        image: "/560390/3.png",
        progress: 95,
        progressDesc: "Comprehensive risk audit and gap analysis to ensure zero coverage gaps in your portfolio."
    }
];

const CircularProgress = ({ percentage }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center bg-white rounded-full shadow-lg shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                    className="text-gray-100 stroke-current"
                    strokeWidth="8"
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="transparent"
                />
                <circle
                    strokeWidth="8"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="transparent"
                    stroke="#164f78"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    className="transition-all duration-1000 ease-in-out"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-bold text-gray-800">{percentage}%</span>
            </div>
        </div>
    );
};

const BannerLayout9 = () => {
    return (
        <section id="services" className="bg-gradient-to-b from-gray-50 to-gray-200 py-20 relative">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-wrap -mx-4 items-center mb-16">
                    <div className="w-full lg:w-7/12 px-4 mb-8 lg:mb-0">
                        <div className="mb-6">
                            <h2 className="font-semibold tracking-wide uppercase mb-3" style={{ color: '#164f78' }}>
                                What We Offer
                            </h2>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Comprehensive Insurance Solutions for Every Need
                            </h3>
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12 px-4 flex items-center justify-start lg:justify-end">
                        <div className="mr-8">
                            <span className="text-gray-500 font-medium">50+ Insurance Partners</span>
                        </div>
                        <a
                            href="#contact"
                            className="inline-flex items-center text-gray-900 transition-colors duration-300 group hover:text-[#164f78]"
                        >
                            <svg
                                className="w-14 h-14 transform transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                viewBox="0 0 64 64"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="m56 6h-48c-1.104 0-2 .896-2 2s.896 2 2 2h43.171l-44.585 44.586c-.781.781-.781 2.047 0 2.828.391.391.902.586 1.414.586s1.024-.195 1.414-.586l44.586-44.586v43.172c0 1.104.896 2 2 2s2-.896 2-2v-48c0-1.104-.896-2-2-2z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Stacking Cards Section */}
                <div className="space-y-8 lg:space-y-16 pb-20">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="lg:sticky bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                            style={{ top: `${100 + (index * 30)}px`, zIndex: index + 10 }}
                        >
                            <div className="p-8 lg:p-12">
                                <div className="mb-8 border-b border-gray-100 pb-6">
                                    <h4 className="text-3xl font-bold text-gray-900">{card.title}</h4>
                                </div>

                                <div className="flex flex-wrap -mx-4">
                                    <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
                                        <div className="flex mb-8">
                                            <div className="mr-4 mt-1 hidden sm:block" style={{ color: '#164f78' }}>
                                                <svg className="w-12 h-12" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="m56 6h-48c-1.104 0-2 .896-2 2s.896 2 2 2h43.171l-44.585 44.586c-.781.781-.781 2.047 0 2.828.391.391.902.586 1.414.586s1.024-.195 1.414-.586l44.586-44.586v43.172c0 1.104.896 2 2 2s2-.896 2-2v-48c0-1.104-.896-2-2-2z" fill="currentColor" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-gray-600 text-lg leading-relaxed">{card.desc}</p>
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-8 mb-10">
                                            {card.features.map((feature, fIndex) => (
                                                <div
                                                    key={fIndex}
                                                    className="bg-gray-50 rounded-xl p-6 transition-colors duration-300"
                                                    style={{ '--hover-bg': '#eef5fb' }}
                                                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#eef5fb'}
                                                    onMouseLeave={e => e.currentTarget.style.backgroundColor = ''}
                                                >
                                                    <div className="mb-4 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm" style={{ color: '#164f78' }}>
                                                        {feature.icon}
                                                    </div>
                                                    <h5 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h5>
                                                    <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap items-center gap-4">
                                            <a
                                                href="#contact"
                                                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded text-white transition-colors duration-300 group hover:opacity-90"
                                                style={{ backgroundColor: '#164f78' }}
                                            >
                                                <span className="mr-2">Get Free Quote</span>
                                                <svg className="w-3 h-3 transform transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="m56 6h-48c-1.104 0-2 .896-2 2s.896 2 2 2h43.171l-44.585 44.586c-.781.781-.781 2.047 0 2.828.391.391.902.586 1.414.586s1.024-.195 1.414-.586l44.586-44.586v43.172c0 1.104.896 2 2 2s2-.896 2-2v-48c0-1.104-.896-2-2-2z" fill="currentColor" />
                                                </svg>
                                            </a>
                                            <a href="#why-us" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300">
                                                Why Choose Us
                                            </a>
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-1/2 px-4">
                                        <div className="relative rounded-2xl overflow-hidden h-full min-h-[300px]">
                                            <img
                                                src={card.image}
                                                alt={card.title}
                                                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                                            />
                                            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-auto sm:w-80 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6 transform hover:-translate-y-2 transition-transform duration-300">
                                                <CircularProgress percentage={card.progress} />
                                                <p className="text-gray-700 text-sm font-medium leading-relaxed text-center sm:text-left">
                                                    {card.progressDesc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BannerLayout9;
