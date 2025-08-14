import React, { useState } from "react";
import reason1 from "../assets/reason1.png";
import reason2 from "../assets/reason2.png";
import reason3 from "../assets/reason3.png";

const QuestionSection = () => {
  const faqs = [
    {
      question: "How long does a typical home construction project take?",
      answer:
        "The timeline varies depending on the size and complexity of the project, but most projects take between 8 to 14 months from start to finish.",
    },
    {
      question: "Is Bricxy involved in getting government approvals and permits?",
      answer:
        "Yes, we handle all necessary approvals and permits to ensure your project complies with local regulations.",
    },
    {
      question: "Can I customize the design and materials used in my project?",
      answer:
        "Absolutely! We work closely with you to choose designs, finishes, and materials that match your preferences and budget.",
    },
    {
      question: "How is the construction quality monitored?",
      answer:
        "Our team conducts regular site inspections, quality checks, and progress updates to ensure every step meets our high standards.",
    },
    {
      question: "Do you provide post-handover support?",
      answer:
        "Yes, we offer ongoing support even after handover to address any concerns or needs you may have.",
    },
    {
      question: "Is there a warranty on the construction?",
      answer:
        "Yes, we provide a structural warranty (up to 10 years) and specific warranties for plumbing, electrical, and interior work depending on the package.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      {/* Reasons Section */}
      <div className="bg-[#7B5D4E] text-white rounded-2xl p-10 relative">
        <button className="absolute top-6 right-6 bg-white text-[#7B5D4E] px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition">
          Book a meeting
        </button>
        
        <h2 className="text-3xl font-light mb-12">
          Three reason to choose Bricxy
        </h2>

        {/* Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Reason 1 */}
          <div className="flex-1">
            <img src={reason1} alt="Reason 1" className="w-10 h-10 mb-4" />
            <h3 className="font-semibold  text-lg">End-to-End Expertise</h3>
            <p className="text-sm mt-2">
              From planning to handover, Bricxy handles every stage of
              construction under one roof. You get a roundtable team delivering
              seamless and zero communication gaps.
            </p>
          </div>
          {/* Reason 2 */}
          <div className="flex-1">
            <img src={reason2} alt="Reason 2" className="w-10 h-10 mb-4" />
            <h3 className="font-semibold text-lg">
              Quality Without Compromise
            </h3>
            <p className="text-sm mt-2">
              We use top-grade materials, vetted vendors, and skilled
              professionals to ensure your project stands the test of time —
              with full transparency and no shortcuts.
            </p>
          </div>
          {/* Reason 3 */}
          <div className="flex-1">
            <img src={reason3} alt="Reason 3" className="w-10 h-10 mb-4" />
            <h3 className="font-semibold text-lg">Built Around You</h3>
            <p className="text-sm mt-2">
              Every decision starts with your needs. Whether it's budget,
              design preferences, or timelines, we customize the experience to
              match your lifestyle — and keep you updated at every step.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#4D3F39] mb-4">
            All Questions are welcome
          </h2>
          <p className="text-[#4D3F39]">
            Unsure about something? Don't worry, we're here to help with all your <br/>questions, no matter what stage you're at.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-4xl border border-[#4D3F39] overflow-hidden">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[#4D3F39] font-medium">
                    {faq.question}
                  </span>
                  <span className="text-[#4D3F39] ">
                    {openIndex === index ? "▲" : "▼"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 bg-[#e0d7d3] pb-4">
                    <div className="border-t  border-gray-100 pt-4">
                      <p className="text-gray-700  text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
                {index < faqs.length - 1 && (
                  <div className="border-b border-gray-100"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;