import React from 'react';

const stats = [
  { value: "50+", label: "Insurance Partners" },
  { value: "2M+", label: "Policies Managed" },
  { value: "24/7", label: "Claims Support" },
  { value: "10+", label: "Years of Expertise" },
];

const partners = ["LIC", "HDFC Ergo", "TATA AIG", "ICICI Lombard", "SBI Life", "Bajaj Allianz", "New India"];

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-600/50 border border-blue-400/40 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            IRDAI Registered Composite Broker
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Smarter Risk.<br />
            <span className="text-blue-300">Stronger Protection.</span>
          </h1>

          <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl">
            Automark Services connects you to India's top insurers — delivering unbiased, expert-driven insurance and risk management solutions for individuals and enterprises alike.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 bg-white text-blue-700 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg text-base"
            >
              Get Your Free Quote
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-7 py-3.5 border-2 border-white/40 text-white font-bold rounded-full hover:bg-white/10 transition-colors text-base"
            >
              Explore Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-3xl font-black text-white">{stat.value}</div>
                <div className="text-sm text-blue-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted Partners */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-xs font-semibold tracking-widest text-blue-300 uppercase mb-4">Trusted Partners</p>
          <div className="flex flex-wrap gap-3">
            {partners.map((p) => (
              <span
                key={p}
                className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
