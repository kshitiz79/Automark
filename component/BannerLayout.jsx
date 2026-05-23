import React from 'react';

const BannerLayout = () => {
    return (
        <section className="banner-layout8 py-20 relative overflow-visible bg-white">
            <div className="container mx-auto px-4">
                {/* Top Sticky Header Section */}
                <div className="relative z-10 sticky top-30 flex flex-wrap -mx-4 bg-white">
                    <div className="w-full md:w-2/3 lg:w-1/2 px-4 xl:px-0">
                        <div className="mb-12 group">
                            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-3">
                                IRDAI Registered Composite Broker
                            </h2>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                                Smarter Risk. Stronger Protection.
                            </h3>
                            <a
                                href="#contact"
                                className="inline-flex items-center text-gray-900 hover:text-blue-600 transition-colors duration-300"
                            >
                                <svg
                                    className="w-16 h-16 transform transition-transform group-hover:-translate-y-2 group-hover:translate-x-2"
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
                </div>

                {/* Bottom Content Section */}
                <div className="flex relative z-10 flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 lg:ml-[50%]">
                        <div className="mb-8">
                            <p className="font-bold text-gray-800 mb-8 text-xl leading-relaxed">
                                Automark Services connects you to India's top insurers — delivering unbiased, expert-driven insurance and risk management solutions for individuals and enterprises alike.
                            </p>
                            <p className="text-gray-600 mb-12 text-lg leading-relaxed">
                                As an independent composite broker, our only obligation is to you — not to any insurance company. We work with 50+ providers to recommend what's best for you, not what pays us more.
                            </p>
                        </div>

                        {/* Image Banner */}
                        <div className="relative mb-12 group overflow-hidden rounded-xl shadow-lg">
                            <img
                                src="/in.png"
                                alt="Automark Services — Insurance & Risk Management"
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Stats + CTA */}
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full sm:w-7/12 px-4">
                                <div className="mb-8">
                                    {/* Stats row */}
                                    <div className="grid grid-cols-2 gap-6 mb-8">
                                        {[
                                            { value: "50+", label: "Insurance Partners" },
                                            { value: "2M+", label: "Policies Managed" },
                                            { value: "24/7", label: "Claims Support" },
                                            { value: "10+", label: "Years of Expertise" },
                                        ].map((stat) => (
                                            <div key={stat.label}>
                                                <div className="text-3xl font-black text-blue-600">{stat.value}</div>
                                                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        From individual health coverage to enterprise-level risk management — we match you to the right plan from the right insurer, always putting your interests first.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full sm:w-5/12 px-4 mt-8 sm:mt-0">
                                <div className="border-t-4 border-blue-600 pt-8 sticky top-32">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-2xl font-bold mb-8 text-gray-900 [text-wrap:balance]">
                                        Unbiased Insurance Advisory — Your Interests, Not the Insurer's!
                                    </h4>
                                    <div className="flex flex-col gap-3">
                                        <a
                                            href="#contact"
                                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded text-white bg-blue-600 hover:bg-gray-900 transition-colors duration-300 group w-full sm:w-auto"
                                        >
                                            <span className="mr-3">Get Free Quote</span>
                                            <svg
                                                className="w-4 h-4 transform transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                                viewBox="0 0 64 64"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="m56 6h-48c-1.104 0-2 .896-2 2s.896 2 2 2h43.171l-44.585 44.586c-.781.781-.781 2.047 0 2.828.391.391.902.586 1.414.586s1.024-.195 1.414-.586l44.586-44.586v43.172c0 1.104.896 2 2 2s2-.896 2-2v-48c0-1.104-.896-2-2-2z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            href="#services"
                                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors duration-300 w-full sm:w-auto"
                                        >
                                            Explore Services
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trusted Partners */}
                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">Trusted Partners</p>
                            <div className="flex flex-wrap gap-2">
                                {["LIC", "HDFC Ergo", "TATA AIG", "ICICI Lombard", "SBI Life", "Bajaj Allianz", "New India"].map((p) => (
                                    <span key={p} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-semibold text-gray-600">
                                        {p}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerLayout;
