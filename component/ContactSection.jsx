"use client";
import React, { useState } from 'react';

const insuranceTypes = [
  "Health Insurance",
  "Motor Insurance",
  "Life Insurance",
  "Property Insurance",
  "Group Employee Benefits",
  "Commercial / Business",
  "Risk Management Consultation",
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", mobile: "", insuranceType: "", company: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", "467ca457-2f5c-4b1a-8e9f-8a5433732aac");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-14 items-start">
          {/* Left info */}
          <div className="lg:w-5/12">
            <p className="font-semibold uppercase tracking-widest text-sm mb-3" style={{ color: '#164f78' }}>Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
              Request a Free Consultation
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Tell us about your insurance needs and one of our expert advisors will reach out to you with a tailored recommendation — at no cost.
            </p>

            <div className="space-y-4">
              {[
                { href: "tel:+919278190900", label: "Call Us", value: "+91 92781 90900", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /> },
                { href: "mailto:care@automarkimf.com", label: "Customer Care", value: "care@automarkimf.com", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
                { href: "mailto:claims@automarkimf.com", label: "Claims Query", value: "claims@automarkimf.com", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                    style={{ backgroundColor: '#eef5fb', color: '#164f78' }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#164f78'; e.currentTarget.style.color = 'white'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#eef5fb'; e.currentTarget.style.color = '#164f78'; }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">{item.label}</div>
                    <div className="font-bold text-gray-900">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="lg:w-7/12 w-full">
            <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-gray-100">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Request Submitted</h3>
                  <p className="text-gray-500">We'll call you soon. Get My Free Quote →</p>
                  <p className="font-semibold mt-1" style={{ color: '#164f78' }}>We'll Call You Soon</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { name: "name", label: "Your Full Name *", type: "text", placeholder: "Enter your full name", required: true },
                    { name: "mobile", label: "Mobile Number *", type: "tel", placeholder: "+91 XXXXX XXXXX", required: true },
                    { name: "company", label: "Company Name (Optional)", type: "text", placeholder: "Your company name", required: false },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        required={field.required}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none transition"
                        onFocus={e => { e.currentTarget.style.borderColor = '#164f78'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(22,79,120,0.12)'; }}
                        onBlur={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.boxShadow = ''; }}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Insurance Type *</label>
                    <select
                      name="insuranceType"
                      value={form.insuranceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none transition bg-white text-gray-700"
                      onFocus={e => { e.currentTarget.style.borderColor = '#164f78'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(22,79,120,0.12)'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.boxShadow = ''; }}
                    >
                      <option value="">✓ Select Insurance Type</option>
                      {insuranceTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-white font-bold rounded-xl shadow-lg text-base transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#164f78' }}
                  >
                    Request Submitted — Get My Free Quote →
                  </button>
                  <p className="text-center text-xs text-gray-400">We'll Call You Soon</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
