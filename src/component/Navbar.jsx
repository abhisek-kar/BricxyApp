import React, { useState, useEffect, useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // city dropdown (desktop & mobile)
  const [selectedCity, setSelectedCity] = useState("Bhubaneswar");
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu

  const desktopCityRef = useRef(null);
  const mobileCityRef = useRef(null);
  const backdropRef = useRef(null);

  const cities = ["Bhubaneswar", "Mumbai", "Bangalore", "Hyderabad", "Delhi"];


  useEffect(() => {
    function handleDocumentClick(e) {

      if (
        desktopCityRef.current &&
        !desktopCityRef.current.contains(e.target)
      ) {
        // only close desktop dropdown if mobile drawer isn't actively controlling it
        if (!menuOpen) setIsOpen(false);
      }

      // mobile dropdown inside drawer
      if (menuOpen && mobileCityRef.current && !mobileCityRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleDocumentClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  // lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="w-full bg-white relative z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center  px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} className="h-8 cursor-pointer" alt="BRICXY Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="mt-3 hidden md:block">
          <ul className="flex space-x-8 text-[#4D3F39] font-medium">
            <li>
              <Link
                to="/how-it-works"
                className="hover:text-blue-600 text-[14px]"
              >
                How it works
              </Link>
            </li>
            <li>
              <Link to="/catlogue" className="hover:text-blue-600 text-[14px]">
                Catalogue
              </Link>
            </li>{" "}
            <li>
              <Link
                to="/how-it-works"
                className="hover:text-blue-600 text-[14px]"
              >
                Projects
              </Link>
            </li>{" "}
            <li>
              <Link
                to="/how-it-works"
                className="hover:text-blue-600 text-[14px]"
              >
                Testimonial
              </Link>
            </li>
            <li>
              <Link
                to="/how-it-works"
                className="hover:text-blue-600 text-[14px]"
              >
                Cost calculator
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side (Desktop) */}
        <div className="hidden md:flex items-center space-x-4 relative">
          {/* Location Selector (desktop) */}
          <div
            ref={desktopCityRef}
            className="flex items-center text-blue-600 cursor-pointer relative"
            onClick={() => setIsOpen((v) => !v)}
          >
            <FaMapMarkerAlt className="mr-1" />
            <span>{selectedCity}</span>
            <IoChevronDown className="ml-1" />
          </div>

          {/* Dropdown Menu (desktop) */}
          {isOpen && !menuOpen && (
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

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => {
              setMenuOpen(true);
              setIsOpen(false); // close city dropdown when opening drawer
            }}
            aria-label="Open menu"
          >
            <GiHamburgerMenu size={24} className="text-[#4D3F39]" />
          </button>
        </div>
      </div>

      {/* Mobile Overlay + Drawer */}
      {menuOpen && (
        <div
          ref={backdropRef}
          className="fixed inset-0 z-50 flex bg-black/40 md:hidden"
          onMouseDown={(e) => {
            if (e.target === backdropRef.current) {
              setMenuOpen(false);
              setIsOpen(false);
            }
          }}
        >
          {/* Drawer */}
          <div className="ml-auto w-fit max-w-[80%] min-w-[240px] bg-white h-full p-6 overflow-y-auto">
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setIsOpen(false);
                }}
                aria-label="Close menu"
              >
                <IoMdClose size={26} className="text-[#4D3F39]" />
              </button>
            </div>

            {/* Mobile Links */}
            <motion.ul
              className="mt-6 space-y-4 text-[#4D3F39] font-medium"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {[
                { label: "How it works", link: "/how-it-works" },
                { label: "Catalogue", link: "/catlogue" },
                { label: "Projects", link: "#" },
                { label: "Testimonial", link: "#" },
                { label: "Cost calculator", link: "#" },
              ].map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ scale: 1.05, color: "#2563eb" }}
                >
                  <Link
                    to={item.link}
                    className="text-[16px]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            {/* Location selector */}
            <div className="mt-6" ref={mobileCityRef}>
              <div
                className="flex items-center text-blue-600 cursor-pointer"
                onClick={() => setIsOpen((v) => !v)}
              >
                <FaMapMarkerAlt className="mr-2" />
                <span>{selectedCity}</span>
                <IoChevronDown className="ml-2" />
              </div>

              {isOpen && (
                <div className="mt-3 bg-white shadow-lg rounded-md w-full z-50 border">
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
            </div>

            {/* CTA */}
            <button
              className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Book a meeting
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
