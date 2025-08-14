import React from "react";
import catlouge1 from "../assets/Catlouge/catlouge1.svg";
import WeDeliverForm from "../component/WeDeliverForm";
import CategorySlider from "../component/CategorySlider";

export default function Catlogue() {
  return (
    <>
      <style>
        {`
          @keyframes slideInLeft {
            0% {
              opacity: 0;
              transform: translateX(-50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            0% {
              opacity: 0;
              transform: translateX(50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-slideInLeft {
            animation: slideInLeft 0.8s ease-out forwards;
          }

          .animate-slideInRight {
            animation: slideInRight 0.8s ease-out forwards;
          }
        `}
      </style>

      <div className="w-full bg-white flex flex-col md:flex-row items-center justify-center px-8 sm:px-12 md:px-20 lg:px-32 xl:px-48 py-12 gap-12">
        <div className="flex-1 text-center md:text-left animate-slideInLeft">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-[500] text-[#4D3F39] leading-snug">
            From Vision to Completion <br />
            We Build Your Dream, <br />
            Step by Step.
          </h2>
          <p className="mt-4 text-[#4D3F39] text-sm md:text-base max-w-md">
            Our process is streamlined to take the stress out of construction.
            Whether it’s a new home or a commercial project, we handle
            everything.
          </p>
          <button className="mt-6 px-8 py-2 bg-[#1853E4] text-white rounded-md hover:bg-blue-700 cursor-pointer transition text-sm md:text-base">
            Book a meeting
          </button>
        </div>

        <div className="flex-1 flex justify-center animate-slideInRight">
          <img
            src={catlouge1}
            alt="Catalogue"
            className="w-full max-w-md rounded-[2rem] object-cover"
          />
        </div>
      </div>
      <CategorySlider />
      <WeDeliverForm />
    </>
  );
}
