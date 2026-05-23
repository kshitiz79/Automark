import React from 'react';

const features = [
  "All policies in one centralized digital locker",
  "Instant access during claims — no paperwork delays",
  "Automatic renewal reminders and alerts",
  "Nominee management and policy updates online",
  "100% secure, IRDAI-regulated repository",
  "Completely free to open and maintain",
];

export default function EInsuranceSection() {
  return (
    <section id="einsurance" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-14 items-center">
          {/* Left */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-blue-600/50 border border-blue-400/40 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              IRDAI Initiative
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight">
              Open Your e-Insurance Account Today
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Store, manage, and access all your insurance policies in one secure digital repository authorized by IRDAI. No more lost documents, no more missed renewals.
            </p>
            <ul className="space-y-3 mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-blue-100 text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 bg-white text-blue-700 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg"
            >
              Open e-Insurance Account
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Right — visual card */}
          <div className="lg:w-1/2">
            <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white">e-Insurance Account</div>
                  <div className="text-blue-300 text-xs">IRDAI Authorized Repository</div>
                </div>
              </div>

              <div className="space-y-3">
                {["Health Insurance — Active", "Motor Insurance — Active", "Life Insurance — Active", "Home Insurance — Active"].map((policy) => (
                  <div key={policy} className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3">
                    <span className="text-sm text-white">{policy}</span>
                    <span className="w-2 h-2 bg-green-400 rounded-full" />
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/20 flex justify-between text-sm">
                <div>
                  <div className="text-blue-300 text-xs mb-1">Next Renewal</div>
                  <div className="text-white font-semibold">Auto-reminded</div>
                </div>
                <div>
                  <div className="text-blue-300 text-xs mb-1">Documents</div>
                  <div className="text-white font-semibold">All Digitized</div>
                </div>
                <div>
                  <div className="text-blue-300 text-xs mb-1">Cost</div>
                  <div className="text-green-400 font-semibold">Free</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
