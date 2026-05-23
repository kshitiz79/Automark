"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const slides = [
    {
        image: "/Header-img.png",
        title: "Smarter Risk. Stronger Protection.",
        subtitle: "Automark Services connects you to India's top insurers — delivering unbiased, expert-driven insurance and risk management solutions for individuals and enterprises alike.",
    },
    {
        image: "/Header-img-2.png",
        title: "Unbiased, Expert-Driven Insurance Solutions",
        subtitle: "From individual health coverage to enterprise-level risk management — we match you to the right plan from the right insurer, always putting your interests first.",
    },
];

const Slider = () => {
    return (
        <section className="relative w-full overflow-hidden">
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                spaceBetween={0}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={1000}
                navigation={{
                    nextEl: ".slider-next",
                    prevEl: ".slider-prev",
                }}
                className="w-full h-full p-0 m-0"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative flex items-center w-full max-h-[80vh] min-h-[600px] pt-[120px] pb-[60px] px-5 sm:px-8 lg:px-0 overflow-hidden">
                        {/* Background & Overlays */}
                        <div className="absolute inset-0 w-full h-full -z-20">
                            <img src={slide.image} alt="slide img" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute inset-0 w-full h-full bg-[#1b1a1a]/25 -z-10" style={{ backgroundImage: 'url(/assets/images/shapes/7.png)', backgroundPosition: 'top right', backgroundRepeat: 'no-repeat' }}></div>
                        <div className="absolute inset-0 w-full h-full opacity-60 -z-10" style={{ background: 'linear-gradient(to bottom, #1b1a1a 0%, #1b1a1a 20%, rgba(27, 26, 26, 0) 65%, rgba(27, 26, 26, 0) 100%)' }}></div>

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                            <div className="flex flex-wrap items-center justify-center lg:justify-start">
                                <div className="w-full xl:w-7/12 text-center lg:text-left">
                                    <div className="flex flex-col text-white">
                                        <span className="text-[14px] sm:text-[15px] lg:text-[17px] font-medium text-white/90 block mb-4 leading-relaxed max-w-[720px] mx-auto lg:mx-0">
                                            {slide.subtitle}
                                        </span>
                                        <h2 className="text-[34px] sm:text-[42px] lg:text-[58px] font-semibold text-white leading-[1.1] mb-6 max-w-[850px] mx-auto lg:mx-0">
                                            {slide.title}
                                        </h2>
                                        <a href="/contact-us" className="relative z-10 flex items-center justify-center w-[90px] h-[90px] lg:w-[130px] lg:h-[130px] rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 group mt-6 mx-auto lg:mx-0">
                                            <svg className="w-8 h-8 lg:w-12 lg:h-12 transform transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.7 101.7">
                                                <g fill="none" stroke="currentColor" strokeWidth="6">
                                                    <path d="m.7 101 100-100" strokeLinejoin="round"></path>
                                                    <path d="M.7 1h100" strokeWidth="9" strokeLinejoin="round"></path>
                                                    <path d="M100.7 1v100" strokeWidth="9" strokeLinejoin="round"></path>
                                                </g>
                                            </svg>
                                        </a>
                                        <div className="hidden 2xl:block max-w-[510px] mt-[110px]">
                                            <h3 className="text-[18px] text-white pb-[20px] mb-[15px] border-b border-white/35 relative font-bold">
                                                Grow your wealth
                                                <div className="absolute bottom-0 left-0 h-[1px] bg-white w-[30%]"></div>
                                            </h3>
                                            <div className="flex justify-between items-center">
                                                <p className="text-[15px] text-white mb-0">
                                                    We help our clients achieve their goals by providing expert consulting services.
                                                </p>
                                                <div className="flex gap-4">
                                                    <div className="slider-prev flex items-center justify-center w-10 h-10 border border-white/50 rounded-full hover:bg-white hover:text-black cursor-pointer transition-colors text-white z-20">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                                    </div>
                                                    <div className="slider-next flex items-center justify-center w-10 h-10 border border-white/50 rounded-full hover:bg-white hover:text-black cursor-pointer transition-colors text-white z-20">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Slider;