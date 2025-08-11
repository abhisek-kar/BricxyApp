import React, { useState } from "react";

import { FaHome } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import heroimg from "../assets/heroimg.png";
import jws from "../assets/jsw.png";
import tatasteel from "../assets/tatasteel.png";
import havells from "../assets/havells.png";
import kajaria from "../assets/kajaria.png";
import ultratech from "../assets/ultratech.png";
import acc from "../assets/acc.png";
import dalmia from "../assets/dalmia.png";
import cera from "../assets/cera.png";
import india from "../assets/india.png";

export default function HeroSection() {
      const [activeMenu, setActiveMenu] = useState("Design");

  return (
    <div className="bg-white">
         {/* <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
       */}

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div>
          <h1 className="text-5xl font-serif font-bold text-shadow-amber-900 leading-tight">
            Simplifying home <br /> Construction
          </h1>
          <p className="mt-4 text-gray-600">
            Transforming construction into a seamless journey of precision,
            trust, and unmatched craftsmanship.
          </p>

          {/* Cities */}
          <div className="mt-6 text-sm">
            <span className="text-gray-500">Popular in cities: </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full inline-flex items-center mr-2">
              <img src={india}/> Mumbai
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full inline-flex items-center mr-2">
            <img src={india}/> Bhubaneswar
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full inline-flex items-center">
             <img src={india}/> Bangalore
            </span>
          </div>

          {/* CTA Button */}
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
            Book a meeting
          </button>

          {/* Stats */}
          <div className="mt-8 flex space-x-10 text-center">
            <div>
              <FaHome className="mx-auto text-gray-600 text-2xl" />
              <p className="font-bold">150+</p>
              <p className="text-gray-500 text-sm">Homes Delivered</p>
            </div>
            <div>
              <BsShieldCheck className="mx-auto text-gray-600 text-2xl" />
              <p className="font-bold">1 year</p>
              <p className="text-gray-500 text-sm">Free Maintenance</p>
            </div>
            <div>
              <HiOutlineUsers className="mx-auto text-gray-600 text-2xl" />
              <p className="font-bold">+86</p>
              <p className="text-gray-500 text-sm">Best NPS Score</p>
            </div>
          </div>
        </div>

        {/* Right content */}
     
   <div className="relative">
        <div className="bg-[#f8f6f1] p-8 rounded-3xl h-60 relative overflow-visible flex flex-col items-center">
          <div className="flex justify-between items-center w-full ">
            <h2 className="text-lg font-serif mb-2 font-bold">All in one place</h2>
            
          </div>

          {/* Menu below logo & button as buttons */}
   <div>
  <div className="flex gap-6 mb-1">
    {["Design", "Construction", "Interior", "Handover"].map((item) => (
      <button
        key={item}
        onClick={() => setActiveMenu(item)}
        className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
          activeMenu === item
            ? "bg-white text-blue-600 shadow"
            : "text-gray-500"
        }`}
      >
        {item}
      </button>
    ))}
  </div>

  <p className="text-sm font-bold text-gray-600 text-right">Just in 4 easy steps!</p>
</div>



    {/* House image floating out */}
    <img
            src={heroimg}
            alt="House"
            className="absolute left-1/2 transform -translate-x-1/2 top-[110px] w-[90%] rounded-lg  z-10"
          />
  </div>
</div>


      </section>

      {/* Partners */}
     <section className="py-10 bg-white">
  <h2 className="text-center text-xl font-serif font-bold mb-6">
    Partners
  </h2>
  <div className="flex flex-wrap justify-center gap-6 px-6">
    <div className="h-16 w-24 flex items-center justify-center">
      <img src={jws} alt="JWS" className="max-h-full max-w-full object-contain" />
    </div>
    <div className="h-16 w-24 flex items-center justify-center">
      <img src={tatasteel} alt="Tata Steel" className="max-h-full max-w-full object-contain" />
    </div>
    <div className="h-16 w-24 flex items-center justify-center">
      <img src={havells} alt="Havells" className="max-h-full max-w-full object-contain" />
    </div>
    <div className="h-16 w-24 flex items-center justify-center">
      <img src={kajaria} alt="Kajaria" className="max-h-full max-w-full object-contain" />
    </div>
    <div className="h-16 w-24 flex items-center justify-center">
      <img src={ultratech} alt="UltraTech" className="max-h-full max-w-full object-contain" />
    </div>
    <div className="h-16 w-24 flex items-center justify-center">
      <img src={acc} alt="ACC" className="max-h-full max-w-full object-contain" />
    </div>
    <div className="h-16 w-24 flex items-center justify-center">
      <img src={dalmia} alt="Dalmia" className="max-h-full max-w-full object-contain" />
    </div>
    <div className="h-16 w-24 flex items-center justify-center">
      <img src={cera} alt="Cera" className="max-h-full max-w-full object-contain" />
    </div>
  </div>
</section>

    </div>
   
  );
}
