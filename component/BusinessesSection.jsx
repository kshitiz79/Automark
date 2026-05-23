"use client";
import React from 'react';

const industries = [
  { icon: "/SVG/icon7.svg", title: "Manufacturing & Industrial", desc: "Fire, machinery breakdown, business interruption, and product liability — full-stack protection for your plant and operations." },
  { icon: "/SVG/icon8.svg", title: "Real Estate & Construction", desc: "Contractor's All Risk, Erection All Risk, builder's risk, and infrastructure cover — from foundation to handover." },
  { icon: "/SVG/icon9.svg", title: "Logistics & Fleet", desc: "Marine cargo, fleet motor insurance, goods-in-transit, and warehouse storage risks — protecting your supply chain at every node." },
  { icon: "/SVG/icon10.svg", title: "Technology & IT Firms", desc: "Cyber liability, professional indemnity, errors & omissions — shielding digital businesses from modern risks." },
  { icon: "/SVG/icon11.svg", title: "Healthcare & Pharma", desc: "Medical malpractice, clinical trial insurance, product liability, and hospital infrastructure protection." },
  { icon: "/SVG/icon12.svg", title: "BFSI & Financial Services", desc: "Bankers Blanket Bond, fidelity guarantees, D&O, EPLI — tailored covers for financial institutions and their leadership." },
  { icon: "/SVG/icon13.svg", title: "Energy & Infrastructure", desc: "Engineering lines, project insurance, operational risk management for power, renewable, and infrastructure sectors." },
  { icon: "/SVG/icon14.svg", title: "Education & NGOs", desc: "Student Personal Accident, staff group health, institutional liability, and event coverage for educational and non-profit entities." },
];

export default function BusinessesSection() {
  return (
    <section id="businesses" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-semibold uppercase tracking-widest text-sm mb-3" style={{ color: '#164f78' }}>For Businesses</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Commercial & Corporate Insurance Programs
          </h2>
          <p className="text-gray-500 text-lg">
            Purpose-built insurance frameworks for industries that face complex, high-value risks. We structure, place, and manage your entire commercial portfolio.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="group border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white h-full flex flex-col"
              onMouseEnter={e => e.currentTarget.style.borderColor = '#acd1eb'}
              onMouseLeave={e => e.currentTarget.style.borderColor = ''}
            >
              <div className="text-3xl mb-4">
                <img src={ind.icon} alt={ind.title} className="w-10 h-10 object-contain" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{ind.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-grow">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
