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
    <footer className="text-white" style={{ backgroundColor: '#072e49' }}>
      {/* Compliance bar */}
      <div style={{ backgroundColor: 'rgba(7,46,73,0.9)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {compliance.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-xs mb-1" style={{ color: '#7ab5dc' }}>{item.label}</div>
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
              <img src="logo.png" alt="logo" width="100px" height="100px" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              India's trusted IRDAI-registered composite broker delivering unbiased, expert-driven insurance and risk management solutions since 2013.
            </p>
            <div className="space-y-2">
              {[
                { href: "tel:+919278190900", text: "+91 92781 90900", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /> },
                { href: "mailto:care@automarkimf.com", text: "care@automarkimf.com", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
                { href: "mailto:claims@automarkimf.com", text: "claims@automarkimf.com", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
              ].map((item) => (
                <a key={item.href} href={item.href} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <svg className="w-4 h-4 shrink-0" style={{ color: '#7ab5dc' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          {/* Insurance Solutions */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Insurance Solutions</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#164f78' }} />
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
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#164f78' }} />
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
              className="inline-flex items-center px-6 py-3 text-white font-bold rounded-full text-sm shadow-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#164f78' }}
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
                  <span key={p} className="text-xs text-gray-400 px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
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
