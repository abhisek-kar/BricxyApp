import React from "react";

export default function WeDeliverForm() {
  return (
    <div className="w-full flex justify-center px-6 py-12">
      <div className="bg-[#F4F2EA] rounded-[43px] shadow-sm p-8 md:p-10 max-w-6xl w-full">
        <h2 className="text-center text-2xl md:text-2xl font-[500] text-[#4D3F39]">
          You Dream. <span className="font-[500]">We deliver.</span>
        </h2>
        <p className="text-center text-sm md:text-base text-[#4D3F39] mt-2 font-[400]">
          Ready to build your dream home? Schedule a free consultation today and
          <br />
          begin the journey of turning your dream into reality.
        </p>

        <div className="w-full flex justify-center px-4">
          <form className="mt-8 space-y-4 w-full max-w-[95%] md:max-w-[85%] lg:max-w-[70%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full name"
                className="border border-[#8F868247] rounded-[8px] px-4 py-3 w-full text-base outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-[#8F868247] rounded-[8px] px-4 py-3 w-full text-base outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Mobile number"
                className="border border-[#8F868247] rounded-[8px] mt-2 px-4 py-3 w-full text-base outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Choose city"
                defaultValue="Bengaluru"
                className="border border-[#8F868247] rounded-[8px] mt-2 px-4 py-3 w-full text-base outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="border border-[#8F868247] rounded-[8px] px-4 py-3 mt-2 w-full text-base outline-none focus:border-blue-500 text-gray-500">
                <option>0-3 months</option>
                <option>3-6 months</option>
                <option>6-12 months</option>
                <option>More than 1 year</option>
              </select>
              <input
                type="text"
                placeholder="Enter budget"
                className="border border-[#8F868247] rounded-[8px] px-4 py-3 mt-2 w-full text-base outline-none focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-start gap-2 text-sm text-[#4D3F39]">
                <input type="checkbox" className="mt-1" />I agree to receive
                WhatsApp notification for communication purpose
              </label>
              <label className="flex items-start gap-2 text-sm text-[#4D3F39]">
                <input type="checkbox" className="mt-1" />I agree to{" "}
                <span className="text-blue-600 underline cursor-pointer">
                  Privacy policy
                </span>{" "}
                and{" "}
                <span className="text-blue-600 underline cursor-pointer">
                  Terms and condition
                </span>
              </label>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-4 px-12 py-2 bg-[#1853E4] text-white rounded-md hover:bg-blue-700 transition text-base cursor-pointer"
              >
                Book a meeting
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
