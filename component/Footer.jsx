import React from 'react';

const quickLinks = [
  { label: "Health Insurance", href: "#services" },
  { label: "Motor Insurance", href: "#services" },
  { label: "Group Employee Benefits", href: "#services" },
  { label: "Liability Insurance", href: "#services" },
  { label: "Strategic Risk Management", href: "#services" },
  { label: "e-Insurance Account", href: "#einsurance" },
];

const businessLinks = [
  { label: "Manufacturing & Industrial", href: "#businesses" },
  { label: "Technology & IT Firms", href: "#businesses" },
  { label: "BFSI & Financial Services", href: "#businesses" },
  { label: "Healthcare & Pharma", href: "#businesses" },
  { label: "Logistics & Fleet", href: "#businesses" },
  { label: "Energy & Infrastructure", href: "#businesses" },
];

const compliance = [
  { label: "IRDAI License No.", value: "Composite Broker" },
  { label: "License Type", value: "Direct & Reinsurance" },
  { label: "IBAI Membership", value: "Active Member" },
  { label: "Established", value: "Since 2013" },
  { label: "Entity Type", value: "Private Limited" },
  { label: "Compliance", value: "IRDAI 2018 Regulations" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Compliance bar */}
      <div className="bg-blue-900/60 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-4 text-center">
            Regulated. Transparent. Compliant.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {compliance.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-xs text-blue-400 mb-1">{item.label}</div>
                <div className="text-sm font-bold text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">A</span>
              </div>
              <div>
                <span className="text-lg font-black text-white leading-none block">Automark</span>
                <span className="text-xs text-blue-400 font-semibold tracking-widest uppercase leading-none">Services</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              India's trusted IRDAI-registered composite broker delivering unbiased, expert-driven insurance and risk management solutions since 2013.
            </p>
            <div className="space-y-2">
              <a href="tel:+919278190900" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 92781 90900
              </a>
              <a href="mailto:care@automarkimf.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                care@automarkimf.com
              </a>
              <a href="mailto:claims@automarkimf.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                claims@automarkimf.com
              </a>
            </div>
          </div>

          {/* Insurance Solutions */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Insurance Solutions</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Solutions */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Business Solutions</h4>
            <ul className="space-y-2.5">
              {businessLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Get Protected Today</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Talk to our experts and get a free, no-obligation insurance consultation tailored to your needs.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors text-sm shadow-lg"
            >
              Get Free Quote
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <div className="mt-8">
              <p className="text-xs text-gray-500 mb-3">Our Insurer Partners</p>
              <div className="flex flex-wrap gap-2">
                {["LIC", "HDFC Ergo", "TATA AIG", "ICICI Lombard", "SBI Life", "Bajaj Allianz"].map((p) => (
                  <span key={p} className="text-xs bg-white/5 border border-white/10 text-gray-400 px-2.5 py-1 rounded-full">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© 2025 Automark Services Pvt. Ltd. All rights reserved.</p>
          <p>IRDAI Registered Composite Broker | License No. — | IBAI Active Member</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
