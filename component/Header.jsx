"use client";
import React, { useState } from 'react';

const navLinks = [
  { title: "Home", href: "#hero" },
  { title: "Services", href: "#services" },
  { title: "For Businesses", href: "#businesses" },
  { title: "Why Us", href: "#why-us" },
  { title: "e-Insurance", href: "#einsurance" },
  { title: "Contact", href: "#contact" },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-blue-700 text-white text-xs py-1.5 px-4 flex flex-wrap justify-between items-center gap-1">
        <span>IRDAI Registered Composite Broker</span>
        <div className="flex gap-4">
          <a href="mailto:care@automarkimf.com" className="hover:underline">care@automarkimf.com</a>
          <a href="mailto:claims@automarkimf.com" className="hover:underline">claims@automarkimf.com</a>
          <a href="tel:+919278190900" className="hover:underline">+91 92781 90900</a>
        </div>
      </div>

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-lg">A</span>
            </div>
            <div>
              <span className="text-lg font-black text-gray-900 leading-none block">Automark</span>
              <span className="text-xs text-blue-600 font-semibold tracking-widest uppercase leading-none">Services</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow"
            >
              Get Free Quote
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 rounded-md"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                >
                  {link.title}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 mx-3 text-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
