"use client";
import React from 'react';

const insurers = [
  "LIC", "HDFC Ergo", "TATA AIG", "ICICI Lombard", "SBI Life",
  "Bajaj Allianz", "New India Assurance", "Star Health", "Niva Bupa",
  "Care Health", "ACKO", "Digit Insurance", "Oriental Insurance",
  "United India", "National Insurance", "Max Life", "Aditya Birla Health",
  "Future Generali",
];

const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "CFO, Manufacturing Co.",
    text: "Automark helped us restructure our entire commercial insurance portfolio. The savings were significant and the coverage is far more comprehensive than before.",
  },
  {
    name: "Priya Sharma",
    role: "HR Director, IT Firm",
    text: "Setting up our group health insurance was seamless. The team handled everything end-to-end and our employees are very happy with the coverage.",
  },
  {
    name: "Anil Kapoor",
    role: "Individual Client",
    text: "When I had a health claim, Automark's team was right there advocating for me. The settlement was fast and hassle-free. Truly a broker that works for you.",
  },
];

export default function NetworkSection() {
  return (
    <>
      {/* Network Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-semibold uppercase tracking-widest text-sm mb-3" style={{ color: '#164f78' }}>Our Network</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              50+ Insurer Partnerships
            </h2>
            <p className="text-gray-500 text-lg">
              We work with India's most trusted insurance brands so you always have the best options at the best price.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {insurers.map((name) => (
              <span
                key={name}
                className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 shadow-sm transition-colors cursor-default"
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#164f78'; e.currentTarget.style.color = '#164f78'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.color = ''; }}
              >
                {name}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm">
            … and 30+ more insurers across life, health, and general insurance categories.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="font-semibold uppercase tracking-widest text-sm mb-3" style={{ color: '#164f78' }}>Client Stories</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-gray-500 mt-3">Our reputation is built on outcomes — not just policies issued.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
