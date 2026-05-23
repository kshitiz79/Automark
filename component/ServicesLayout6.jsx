"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const services = [
    {
        icon: "/SVG/icon1.svg",
        title: "Health Insurance",
        desc: "Comprehensive health coverage for individuals and families. Access to cashless hospitalization across 10,000+ network hospitals with zero-compromise care.",
        link: "#services",
    },
    {
        icon: "/SVG/icon2.svg",
        title: "Motor Insurance",
        desc: "Complete vehicle protection — from third-party liability to own damage and comprehensive cover. Fast claim settlement with 24/7 roadside assistance.",
        link: "#services",
    },
    {
        icon: "/SVG/icon3.svg",
        title: "Home & Property Insurance",
        desc: "Protect your home and its contents against fire, natural calamities, theft, and structural damage. Tailored plans for owned and rented homes.",
        link: "#services",
    },
    {
        icon: "/SVG/icon4.svg",
        title: "Group Employee Benefits",
        desc: "Attract and retain talent with structured employee benefit programs — including Group Health, Group Term Life, and Group Personal Accident insurance.",
        link: "#services",
    },
    {
        icon: "/SVG/icon5.svg",
        title: "Liability Insurance",
        desc: "Guard your business against legal and financial liabilities — from professional indemnity and directors & officers liability to public and product liability covers.",
        link: "#services",
    },
    {
        icon: "/SVG/icon6.svg",
        title: "Strategic Risk Management",
        desc: "We go beyond policies — analyzing your risk profile, identifying exposure gaps, and engineering a bespoke risk mitigation strategy aligned to your business objectives.",
        link: "#services",
    },
];

const ServicesLayout6 = () => {
    return (
        <section className="py-24 overflow-x-hidden relative">
            <div className="container mx-auto px-4">
                <div className="mb-[60px]">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <h2 className="text-[16px] font-semibold text-blue-600 mb-[12px]">
                                WHAT WE OFFER
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4">
                            <h3 className="text-[30px] md:text-[40px] font-medium mb-[20px] leading-tight">
                                Comprehensive Insurance Solutions for Every Need
                            </h3>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <p className="text-[17px] font-bold text-gray-800 mb-[20px]">
                                From individual health coverage to enterprise-level risk management — we match you to the right plan from the right insurer, always putting your interests first.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={1}
                            spaceBetween={15}
                            autoplay={{
                                delay: 6000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            breakpoints={{
                                600: { slidesPerView: 2 },
                                992: { slidesPerView: 3 },
                                1200: { slidesPerView: 4 },
                            }}
                            className="w-full cursor-[url(/assets/images/icons/cursor-drag.png),_auto]"
                        >
                            {services.map((service, index) => (
                                <SwiperSlide key={index} className="pb-10 !h-auto">
                                    <div className="bg-white rounded-[5px] shadow-[0_5px_43px_0_rgba(27,26,26,0.06)] hover:shadow-[0_5px_43px_0_rgba(27,26,26,0.1)] hover:bg-white transition-all duration-400 ease-in-out group h-full relative flex flex-col">
                                        <div className="p-[50px] flex-grow flex flex-col relative z-10">
                                            <div className="text-[48px] text-blue-600 mb-[32px] leading-none transition-all duration-300 group-hover:animate-[bounce_1s_linear_infinite]">
                                                <img src={service.icon} alt={service.title} className="w-[48px] h-[48px] object-contain" />
                                            </div>
                                            <h4 className="text-[22px] font-medium text-gray-900 mb-[21px] transition-all duration-300">
                                                <a href={service.link} className="hover:text-blue-600">
                                                    {service.title}
                                                </a>
                                            </h4>
                                            <p className="text-[15px] text-gray-500 mb-0 line-clamp-5 flex-grow transition-all duration-300">
                                                {service.desc}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-8/12 lg:w-1/2 px-4">
                        <p className="text-[15px] mt-[40px] mb-[30px] leading-relaxed max-w-[90%]">
                            We focus on helping clients shape the future of their business, and execute strategies on the changing face of the customer.
                            <a href="/contact-us" className="inline-flex items-center text-blue-600 font-bold ml-2 relative group/link pb-1 overflow-hidden">
                                <span className="mr-1">Schedule A Visit</span>
                                <div className="relative w-[10px] h-[10px]">
                                    <svg
                                        className="w-full h-full text-current absolute top-0 left-0 transition-transform duration-300 ease-[cubic-bezier(0.46,0.03,0.52,0.96)] group-hover/link:translate-x-[60px] group-hover/link:-translate-y-[60px]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 64 64"
                                    >
                                        <path d="m56 6h-48c-1.104 0-2 .896-2 2s.896 2 2 2h43.171l-44.585 44.586c-.781.781-.781 2.047 0 2.828.391.391.902.586 1.414.586s1.024-.195 1.414-.586l44.586-44.586v43.172c0 1.104.896 2 2 2s2-.896 2-2v-48c0-1.104-.896-2-2-2z" fill="currentColor"></path>
                                    </svg>
                                    <svg
                                        className="w-full h-full text-current absolute top-0 left-0 opacity-0 -translate-x-[60px] translate-y-[60px] transition-all duration-300 delay-100 ease-[cubic-bezier(0.46,0.03,0.52,0.96)] group-hover/link:translate-x-0 group-hover/link:translate-y-0 group-hover/link:opacity-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 64 64"
                                    >
                                        <path d="m56 6h-48c-1.104 0-2 .896-2 2s.896 2 2 2h43.171l-44.585 44.586c-.781.781-.781 2.047 0 2.828.391.391.902.586 1.414.586s1.024-.195 1.414-.586l44.586-44.586v43.172c0 1.104.896 2 2 2s2-.896 2-2v-48c0-1.104-.896-2-2-2z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <div className="absolute bottom-0 right-0 w-full h-[1px] bg-blue-600 transition-all duration-500 ease-out group-hover/link:w-0"></div>
                            </a>
                        </p>

                        <a href="/industries" className="inline-flex items-center justify-center bg-blue-600 text-white font-bold px-8 py-4 rounded hover:bg-blue-700 transition-colors duration-300 group/btn overflow-hidden">
                            <span className="mr-2">Explore All Industries</span>
                            <div className="relative w-[12px] h-[12px]">
                                <svg
                                    className="w-full h-full text-current absolute top-0 left-0 transition-transform duration-300 ease-[cubic-bezier(0.46,0.03,0.52,0.96)] group-hover/btn:translate-x-[60px] group-hover/btn:-translate-y-[60px]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 64 64"
                                >
                                    <path d="m56 6h-48c-1.104 0-2 .896-2 2s.896 2 2 2h43.171l-44.585 44.586c-.781.781-.781 2.047 0 2.828.391.391.902.586 1.414.586s1.024-.195 1.414-.586l44.586-44.586v43.172c0 1.104.896 2 2 2s2-.896 2-2v-48c0-1.104-.896-2-2-2z" fill="currentColor"></path>
                                </svg>
                                <svg
                                    className="w-full h-full text-current absolute top-0 left-0 opacity-0 -translate-x-[60px] translate-y-[60px] transition-all duration-300 delay-100 ease-[cubic-bezier(0.46,0.03,0.52,0.96)] group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 group-hover/btn:opacity-100"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 64 64"
                                >
                                    <path d="m56 6h-48c-1.104 0-2 .896-2 2s.896 2 2 2h43.171l-44.585 44.586c-.781.781-.781 2.047 0 2.828.391.391.902.586 1.414.586s1.024-.195 1.414-.586l44.586-44.586v43.172c0 1.104.896 2 2 2s2-.896 2-2v-48c0-1.104-.896-2-2-2z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesLayout6;
