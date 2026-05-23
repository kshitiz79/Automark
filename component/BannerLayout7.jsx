import React from 'react';

const cards = [
    {
        num: "01",
        title: "Understand Your Risk Profile",
        avatar: "/600by600/1.png",
        desc: "We begin by deeply analyzing your personal or business risk exposure before recommending anything. Our advisors assess your current coverage, identify gaps, and map your risk landscape end-to-end."
    },
    {
        num: "02",
        title: "Compare Across 50+ Insurers",
        avatar: "/600by600/2.png",
        desc: "We run a comprehensive multi-insurer comparison to identify the best coverage at the best price — with full transparency. No hidden commissions, no insurer bias. Just the right plan for you."
    },
    {
        num: "03",
        title: "Claims Advocacy & Renewal",
        avatar: "/600by600/3.png",
        desc: "We stand by you during claims — not just at sale. Our dedicated claims team advocates on your behalf for fair and fast settlements. Plus proactive renewal management so you never have a coverage gap."
    }
];

const BannerLayout7 = () => {
    return (
        <section
            id="why-us"
            className="relative py-24 bg-gray-900 bg-cover bg-center bg-fixed overflow-visible"
            style={{ backgroundImage: "url('/assets/images/banners/13.webp')" }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/65 z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-wrap -mx-4">

                    {/* Left Side (Sticky Header) */}
                    <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                        <div className="sticky top-32">
                            <h2 className="text-blue-400 font-semibold tracking-widest uppercase mb-4 text-sm sm:text-base">
                                Why Choose Us
                            </h2>
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Your Interests, Not the Insurer's.
                            </h3>
                        </div>
                    </div>

                    {/* Right Side (Sticky Scrolling Content) */}
                    <div className="w-full lg:w-1/2 px-4 relative">
                        {/* Banner text block - also sticky */}
                        <div
                            className="sticky backdrop-blur-md bg-white/10 p-8 sm:p-10 rounded-2xl border border-white/10 mb-8 shadow-2xl"
                            style={{ top: '8rem', zIndex: 10 }}
                        >
                            <h4 className="text-xl md:text-2xl font-bold text-white mb-6 leading-snug">
                                As an independent composite broker, we work with 50+ insurers — recommending what's best for you, not what pays us more. Our only obligation is to you.
                            </h4>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Our founding and advisory team brings combined decades of experience in insurance, risk management, and financial services. From quote to claim, our digital infrastructure ensures speed, transparency, and convenience — accessible from anywhere.
                            </p>
                        </div>

                        {/* Stacking Cards — Our Advisory Process */}
                        <div className="space-y-6 pb-12">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="sticky bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                                    style={{
                                        top: `${200 + (index * 40)}px`,
                                        zIndex: 20 + index
                                    }}
                                >
                                    <div className="flex items-start mb-8 pb-6 border-b border-gray-100">
                                        <span className="text-5xl font-black text-gray-200 mr-6 tracking-tighter leading-none mt-1">
                                            {card.num}
                                        </span>
                                        <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                                            {card.title}
                                        </h4>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                                        <div className="relative shrink-0">
                                            <img
                                                src={card.avatar}
                                                alt={`Step ${card.num}`}
                                                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                                                loading="lazy"
                                            />
                                            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white border-2 border-white shadow-md">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-lg leading-relaxed text-center sm:text-left">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerLayout7;
