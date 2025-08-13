import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";

const ProjectJourney = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Meeting, Planning & Design",
      description: `We start with a detailed site analysis and gather your requirements to align goals.
Our architects work from functional layouts to vivid 3D designs to bring your vision to life.
Every project is monitored and reviewed with you to ensure aesthetics and feasibility are balanced.`,
      image: image1,
      imageBg: "bg-red-50",
    },
    {
      step: "Step 2",
      title: "Material Selection",
      description: `We help you select quality, durable materials that suit your budget and design.
From cement to tiles and fixtures, every choice is backed by price recommendations.
Full transparency in providing options so you know exactly which go into your project.`,
      image: image2,
      imageBg: "bg-pink-50",
    },
    {
      step: "Step 3",
      title: "Construction",
      description: `Our skilled teams execute with precision, following approved plans down to the last detail.
We maintain daily on-site supervision and share regular progress updates with you.
Each phase undergoes strict quality checks to ensure structural safety and integrity.`,
      image: image3,
      imageBg: "bg-yellow-50",
    },
    {
      step: "Step 4",
      title: "Interior Finishing",
      description: `From custom wardrobes to lighting design, we tailor interiors to match your lifestyle.
Our designs focus on both functionality and aesthetic harmony across spaces.
We offer modern modular options or fully customized setups based on your preferences.`,
      image: image4,
      imageBg: "bg-blue-50",
    },
    {
      step: "Step 5",
      title: "Handover & Beyond",
      description: `After a thorough final inspection, we clean, polish, and prepare your home for move-in.
All documents, warranties, and service manuals are provided at the time of handover.
Our support continues even after delivery — we're just a call away for any future needs.`,
      image: image5,
      imageBg: "bg-purple-50",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#4D3F39]">
          A guided journey through every phase of your project.
        </h2>
        <p className="text-[#4D3F39] mt-4 max-w-2xl mx-auto">
          From planning to handover, we follow a structured process to ensure
          quality, clarity, and timely delivery — with you at the center of it all.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-16">
        {steps.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            {/* Image */}
            <div
              className={`${item.imageBg} p-6 rounded-xl flex justify-center items-center w-full md:w-1/2`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="max-w-full h-auto rounded-lg"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <span className="text-sm font-semibold text-gray-500">
                {item.step}
              </span>
              <h3 className="text-2xl font-semibold text-[#4D3F39] mt-2">
                {item.title}
              </h3>
              <p className="text-[#4D3F39] mt-4 whitespace-pre-line">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectJourney;
