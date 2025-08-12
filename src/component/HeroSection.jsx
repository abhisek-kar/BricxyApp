import React, { useState } from "react";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon 3.png";
import heroimg from "../assets/heroimg.png";
import jws from "../assets/jsw.png";
import tatasteel from "../assets/tatasteel.png";
import havells from "../assets/havells.png";
import kajaria from "../assets/kajaria.png";
import ultratech from "../assets/ultratech.png";
import acc from "../assets/Acc.png";
import dalmia from "../assets/Dalmia.png";
import cera from "../assets/cera.png";
import india from "../assets/india.png";

export default function HeroSection() {
  const [activeMenu, setActiveMenu] = useState("Design");

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#4D3F39] leading-tight">
            Simplifying home <br /> Construction
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#4D3F39]">
            Transforming construction into a seamless journey of precision,
            trust, and unmatched craftsmanship.
          </p>

          {/* Cities */}
          <div className="mt-6 text-xs sm:text-sm flex flex-wrap gap-2">
            <span className="text-[#4D3F39]">Popular in cities:</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full inline-flex items-center">
              <img src={india} className="w-4 h-4 mr-1" /> Mumbai
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full inline-flex items-center">
              <img src={india} className="w-4 h-4 mr-1" /> Bhubaneswar
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full inline-flex items-center">
              <img src={india} className="w-4 h-4 mr-1" /> Bangalore
            </span>
          </div>

          {/* CTA Button */}
          <button className="mt-6 bg-blue-600 text-white px-6 sm:px-10 py-2 rounded-lg text-base sm:text-lg">
            Book a meeting
          </button>

          {/* Stats */}
          <div className="mt-8 flex justify-between sm:space-x-6 text-center">
            <div className="flex-1">
              <img src={icon1} className="mx-auto w-10 sm:w-12" />
              <p className="font-bold text-sm sm:text-base">150+</p>
              <p className="text-[#4D3F39] text-[10px] sm:text-xs">
                Homes <br /> Delivered
              </p>
            </div>
            <div className="flex-1">
              <img src={icon2} className="mx-auto w-10 sm:w-12" />
              <p className="font-bold text-sm sm:text-base">1 year</p>
              <p className="text-[#4D3F39] text-[10px] sm:text-xs">
                Free <br /> Maintenance
              </p>
            </div>
            <div className="flex-1">
              <img src={icon3} className="mx-auto w-10 sm:w-12" />
              <p className="font-bold text-sm sm:text-base">+86</p>
              <p className="text-[#4D3F39] text-[10px] sm:text-xs">
                Best <br /> NPS Score
              </p>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="relative">
          <div className="bg-[#f8f6f1] p-6 sm:p-8 rounded-3xl h-auto relative overflow-visible flex flex-col items-center">
            <div className="flex justify-between items-center w-full">
              <h2 className="text-base sm:text-lg text-[#4D3F39] font-serif mb-2 font-bold">
                All in one place
              </h2>
            </div>

            {/* Menu below logo & button */}
            <div>
              <div className="flex flex-wrap gap-3 mb-1 justify-center">
                {["Design", "Construction", "Interior", "Handover"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => setActiveMenu(item)}
                      className={`px-3 py-1 rounded-full text-xs sm:text-sm transition-colors duration-300 ${
                        activeMenu === item
                          ? "bg-white text-black shadow"
                          : "text-[#4D3F39]"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>

              <p className="text-xs sm:text-sm font-bold text-[#4D3F39] text-right">
                Just in 4 easy steps!
              </p>
            </div>

            {/* House image */}
            <img
              src={heroimg}
              alt="House"
              className="absolute left-1/2 transform -translate-x-1/2 top-[110px] w-[80%] sm:w-[90%] rounded-lg z-10"
            />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-10 bg-white overflow-hidden">
        <h2 className="text-center text-lg sm:text-xl text-[#4D3F39] font-bold mb-6">
          Partners
        </h2>

        <div className="mx-auto overflow-hidden px-4 sm:px-0 sm:w-[900px]">
          <div className="flex animate-scroll gap-6">
            {[
              jws,
              tatasteel,
              havells,
              kajaria,
              ultratech,
              acc,
              dalmia,
              cera,
              jws,
              tatasteel,
              havells,
              kajaria,
              ultratech,
              acc,
              dalmia,
              cera,
            ].map((logo, idx) => (
              <div
                key={idx}
                className="h-12 sm:h-16 w-20 sm:w-24 flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={logo}
                  alt={`Partner ${idx}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
