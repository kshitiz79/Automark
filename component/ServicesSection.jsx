import React from 'react';

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Health Insurance",
    desc: "Comprehensive health coverage for individuals and families. Access to cashless hospitalization across 10,000+ network hospitals with zero-compromise care.",
    tags: ["Individual", "Family Floater", "Senior Citizen", "Critical Illness"],
    color: "bg-red-50 text-red-600",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8l2-2z" />
      </svg>
    ),
    title: "Motor Insurance",
    desc: "Complete vehicle protection — from third-party liability to own damage and comprehensive cover. Fast claim settlement with 24/7 roadside assistance.",
    tags: ["Car", "Two-Wheeler", "Fleet", "Commercial Vehicle"],
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Home & Property Insurance",
    desc: "Protect your home and its contents against fire, natural calamities, theft, and structural damage. Tailored plans for owned and rented homes.",
    tags: ["Structure", "Contents", "Apartment", "Landlord"],
    color: "bg-green-50 text-green-600",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Group Employee Benefits",
    desc: "Attract and retain talent with structured employee benefit programs — including Group Health, Group Term Life, and Group Personal Accident insurance.",
    tags: ["Group Health", "Group Term Life", "GPA", "EDLI"],
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Liability Insurance",
    desc: "Guard your business against legal and financial liabilities — from professional indemnity and directors & officers liability to public and product liability covers.",
    tags: ["Professional Indemnity", "D&O", "Public Liability"],
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Strategic Risk Management",
    desc: "We go beyond policies — analyzing your risk profile, identifying exposure gaps, and engineering a bespoke risk mitigation strategy aligned to your business objectives.",
    tags: ["Risk Audit", "Gap Analysis", "Custom Programs", "Advisory"],
    color: "bg-teal-50 text-teal-600",
  },
];

const process = [
  {
    num: "1",
    title: "Understand Your Risk Profile",
    desc: "We begin by deeply analyzing your personal or business risk exposure before recommending anything.",
  },
  {
    num: "2",
    title: "Compare Across 50+ Insurers",
    desc: "We run a comprehensive multi-insurer comparison to identify the best coverage at the best price — with full transparency.",
  },
  {
    num: "3",
    title: "Structured Policy Issuance",
    desc: "Paperwork handled end-to-end. Digital policy delivery with secure e-insurance account management.",
  },
  {
    num: "4",
    title: "Claims Advocacy & Renewal",
    desc: "We stand by you during claims — not just at sale. Plus proactive renewal management so you never have a coverage gap.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-3">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Comprehensive Insurance Solutions for Every Need
          </h2>
          <p className="text-gray-500 text-lg">
            From individual health coverage to enterprise-level risk management — we match you to the right plan from the right insurer, always putting your interests first.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((s) => (
            <div
              key={s.title}
              className="group border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${s.color}`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Our Advisory Process */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-10 lg:p-14 text-white">
          <div className="text-center mb-12">
            <p className="text-blue-300 font-semibold uppercase tracking-widest text-sm mb-3">Our Advisory Process</p>
            <h2 className="text-3xl font-black">How We Work For You</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.num} className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-black mb-4">
                  {step.num}
                </div>
                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-blue-200 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
