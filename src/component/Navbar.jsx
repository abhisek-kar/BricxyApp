import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Bhubaneswar");

  const cities = ["Bhubaneswar", "Mumbai", "Bangalore", "Hyderabad", "Delhi"];

  return (
  <nav className="w-full bg-white relative">

      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} className="h-8" alt="BRICXY Logo" />
        </div>

        {/* Menu Links */}
        <div className="mt-3">
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <li className="hover:text-blue-600 text-[14px] cursor-pointer">How it works</li>
            <li className="hover:text-blue-600 text-[14px] cursor-pointer">Catalogue</li>
            <li className="hover:text-blue-600 text-[14px] cursor-pointer">Projects</li>
            <li className="hover:text-blue-600 text-[14px] cursor-pointer">Testimonial</li>
            <li className="hover:text-blue-600 text-[14px] cursor-pointer">Cost calculator</li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4 relative">
          
          {/* Location Selector */}
          <div
            className="flex items-center text-blue-600 cursor-pointer relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaMapMarkerAlt className="mr-1" />
            <span>{selectedCity}</span>
            <IoChevronDown className="ml-1" />
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-10 right-20 bg-white shadow-lg rounded-md w-40 z-50 border">
              {cities.map((city) => (
                <div
                  key={city}
                  onClick={() => {
                    setSelectedCity(city);
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                >
                  {city}
                </div>
              ))}
            </div>
          )}

          {/* Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Book a meeting
          </button>
        </div>
      </div>
    </nav>
  );
}
