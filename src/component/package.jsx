import {  PlusIcon } from "lucide-react";

export default function Package() {
  const plans = [
    {
      name: "Standard",
      price: "₹ 1265",
      subtitle: "per sq ft (Ex GST)",
      features: [
        "Design",
        "Structure", 
        "Flooring and dada",
        "Door and windows",
        "Plumbing accessories",
        "Painting",
        "Electrical",
        "Plumbing",
        "Railing & Handrails"
      ]
    },
    {
      name: "Premium",
      price: "₹ 1905", 
      subtitle: "per sq ft (Ex GST)",
      isPopular: true,
      features: [
        "Design",
        "Structure",
        "Flooring and dada", 
        "Door and windows",
        "Plumbing accessories",
        "Painting",
        "Electrical", 
        "Plumbing",
        "Railing & Handrails"
      ]
    },
    {
      name: "Luxury",
      price: "₹ 2525",
      subtitle: "per sq ft (Ex GST)",
      features: [
        "Design",
        "Structure",
        "Flooring and dada",
        "Door and windows", 
        "Plumbing accessories",
        "Painting",
        "Electrical",
        "Plumbing",
        "Railing & Handrails"
      ]
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl  font-bold text-[#4D3F39] mb-6">
            The affordable price to build<br />
            your dream home
          </h1>
          <p className=" text-[#4D3F39] text-base max-w-md mx-auto leading-relaxed">
            Always a clear overview while you collaborate with agents, manage 
            viewings, offers and sign the contracts. We built everything with you 
            at the center.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative bg-white rounded-4xl shadow-lg overflow-hidden">
              {/* Popular badge */}
              {plan.isPopular && (
            <div className="absolute -top-5 w-full text-center">
    <div className="bg-[#f3e2a2] text-[#5c513b] py-2 font-bold mt-2 rounded-t-3xl">
      Most popular package of the year
    </div>
  </div>
               
              )}
              
              {/* Card */}
              <div className="bg-[#F4F2EB] rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-3xl font-semibold text-gray-800">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    {plan.subtitle}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-[#c5bbbb] flex items-center justify-center mr-3 flex-shrink-0">
                        <PlusIcon className="w-3 h-3 text-[#493D34]" />
                      </div>
                      <span className="text-gray-700 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}