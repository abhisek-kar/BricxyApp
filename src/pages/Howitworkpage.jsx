import React from "react";
import { motion } from "framer-motion";
import houseImg from "../assets/house.png";
import icon1 from "../assets/icon4.png";
import icon2 from "../assets/icon5.png";
import icon3 from "../assets/icon6.png";
import icon4 from "../assets/icon7.png";
import ProjectJourney from "./projrctourney";
import QuestionSection from "./questionsection";

export default function HowItWorks() {
  const steps = [
    "Meeting",
    "Plan & Design",
    "Interior",
    "Construction",
    "Handover"
  ];

  const [activeStep, setActiveStep] = React.useState("Meeting");
  const [activeIcon, setActiveIcon] = React.useState(0); // Tracks which icon is zoomed

  // Cycle through icons every 1.5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-[#F7F4EE] rounded-3xl flex flex-col lg:flex-row items-center gap-8 p-6 sm:p-8">
          {/* Left: Text */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4D3F39] leading-snug">
              From Vision to Completion <br />
              We Build Your Dream, <br />
              Step by Step.
            </h2>
            <p className="mt-4 text-[#4D3F39] text-sm sm:text-base">
              Our process is streamlined to take the stress out of construction.
              Whether it's a new home or a commercial project, we handle everything.
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src={houseImg} alt="House" className="w-full  rounded-2xl" />
          </motion.div>
        </div>

        {/* Step Navigation */}
        <motion.div
          className="flex justify-center gap-4 sm:gap-6 mt-8 flex-wrap"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          {steps.map((step) => (
            <button
              key={step}
              className={`pb-1 border-b-2 text-sm sm:text-base transition ${
                activeStep === step
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent text-gray-500 hover:text-blue-500"
              }`}
              onClick={() => setActiveStep(step)}
            >
              {step}
            </button>
          ))}
        </motion.div>
      </div>

      {/* BIM Technology Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 flex justify-center">
        <div className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] flex items-center justify-center">
          
          {/* Rotating dashed line */}
          <motion.div
            className="absolute w-full h-full rounded-full border-2 border-dashed border-gray-300"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />

          {/* Center text */}
          <div className="text-center px-4 text-xs sm:text-sm md:text-base z-10">
            <p className="text-blue-600 font-semibold">Powered by</p>
            <p className="text-blue-600 font-bold text-lg sm:text-xl">BIM Technology</p>
            <p className="text-xl sm:text-2xl font-bold text-[#4D3F39] mt-1">+</p>
            <p className="text-[#4D3F39] font-bold text-sm sm:text-lg">
              Everything you need <br /> in one place
            </p>
          </div>

          {/* Icons */}
          {[
            { img: icon1, label: "Design", color: "red-500", bg: "bg-red-50", border: "red-300", shadow: "red-200" },
            { img: icon2, label: "Construction", color: "gray-600", bg: "bg-[#F7F4EE]", border: "gray-300", shadow: "gray-300" },
            { img: icon3, label: "Interior", color: "gray-600", bg: "bg-blue-50", border: "gray-300", shadow: "blue-200" },
            { img: icon4, label: "Maintenance", color: "purple-500", bg: "bg-purple-50", border: "purple-300", shadow: "purple-200" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`absolute flex flex-col items-center ${index === 0
                  ? "-top-12 sm:-top-20 left-1/2 -translate-x-1/2"
                  : index === 1
                  ? "-right-12 sm:-right-20 top-1/2 -translate-y-1/2"
                  : index === 2
                  ? "-bottom-12 sm:-bottom-20 left-1/2 -translate-x-1/2"
                  : "-left-12 sm:-left-20 top-1/2 -translate-y-1/2"
                }`}
              animate={{
                scale: activeIcon === index ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`${item.bg} rounded-xl border border-${item.border} shadow-lg shadow-${item.shadow} flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20`}
              >
                <img src={item.img} alt={item.label} className="w-8 h-8 sm:w-10 sm:h-10" />
                <p className={`mt-1 text-xs sm:text-sm font-medium text-${item.color}`}>
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
       
      </div>
       <ProjectJourney/>
       <QuestionSection/>
    </div>
  );
}
