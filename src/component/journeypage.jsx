import React from "react";


import heroimg from "../assets/heroimg.png";
import oldwayimg from "../assets/old.png";
import bricxyway from "../assets/bricxyway.png";

export default function Journeypage() {
  return (
    <div className="min-h-screen px-6 md:px-12 py-6">
      {/* Header */}
      <div className="max-w-7xl px-6 md:px-12 mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-[#4D3F39] mb-6">
          Your new home Journey
          <br /> awaits
        </h1>
        <p className="text-xl text-[#4D3F39] max-w-2xl mx-auto">
          No more chaos. Just simple and seamless steps. With Anyone, the
          entire home-buying process happens in one place.
        </p>
      </div>

      {/* Comparison Section */}
       <div className="max-w-7xl px-6 md:px-12 mx-auto grid md:grid-cols-2 gap-12 mb-16">
      {/* Old Way */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-[#4D3F39] text-center">
          The old way
        </h2>
        <div className="bg-gray-100 rounded-4xl   p-4">
          <img
            src={oldwayimg}
            alt="The Old Way"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>

      {/* Bricxy Way */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-[#4D3F39] text-center">
          The Bricxy way
        </h2>
        <div className="bg-gray-100 rounded-4xl   p-4">
          <img
            src={bricxyway}
            alt="The Bricxy Way"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
      </div>
    
   


   

      {/* Bottom CTA Section */}
 <div className="max-w-7xl mx-auto px-6 py-10 md:px-12">
  <div className="relative bg-[#7A685F] rounded-2xl flex flex-col sm:flex-row items-center min-h-[150px] overflow-visible">
    {/* Text */}
    <div className="text-white py-6 md:py-8 w-full sm:w-1/2 z-10 px-6 md:px-12 text-center sm:text-left">
      <h3 className="text-lg sm:text-xl md:text-3xl leading-tight">
        Managing construction?
        <br />
        <span className="">Even your grandma could do it.</span>
      </h3>
    </div>

    {/* Image */}
    <div className="relative sm:absolute  bottom-0 right-0 md:right-6 lg:right-12 z-20">
      <img
        src={heroimg}
        alt="Modern Home"
        className="w-[80%] sm:w-[220px] md:w-[300px] lg:mb-[-28px]  lg:w-[380px] h-auto object-contain mx-auto sm:mx-0"
      />
    </div>
  </div>
</div>


    </div>
  );
}
