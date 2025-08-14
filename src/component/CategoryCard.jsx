import React from "react";

export default function CategoryCard({
  planCode,
  image,
  sqft,
  bedrooms,
  bathrooms,
}) {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col w-full h-full">
      <h2 className="text-3xl font-[100] text-[#4D3F398F] mb-3 text-left">
        {planCode}
      </h2>

      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt={planCode}
          className="max-w-[140px] h-auto object-contain"
        />
      </div>

      <div className="flex justify-around w-full pt-1">
        <div className="text-center">
          <p className="text-xs text-[#4D3F39] uppercase tracking-wide text-left">
            SQFT
          </p>
          <p className="text-base font-semibold text-[#4D3F39B2]">
            {sqft.toLocaleString()}
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs text-[#4D3F39] uppercase tracking-wide">
            BEDROOM
          </p>
          <p className="text-base font-semibold text-[#4D3F39B2] text-left">
            {bedrooms}
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs text-[#4D3F39] uppercase tracking-wide">
            BATHROOM
          </p>
          <p className="text-base font-semibold text-[#4D3F39B2] text-left">
            {bathrooms}
          </p>
        </div>
      </div>
    </div>
  );
}
