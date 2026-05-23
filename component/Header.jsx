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
      {/* Top bar — dark navy */}

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src="logo.png" alt="logo" width="100px" height="100px" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#164f78]"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white rounded-full shadow transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#164f78' }}
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
                  className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-[#164f78] hover:bg-brand-50"
                >
                  {link.title}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 mx-3 text-center px-5 py-2.5 text-sm font-semibold text-white rounded-full"
                style={{ backgroundColor: '#164f78' }}
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
