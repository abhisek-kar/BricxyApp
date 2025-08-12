import React from 'react'
import logoonly from '../assets/logoonly.png';
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footersection = () => {
  return (
    <footer className="mt-10">
  {/* Top Section */}
  <div className="bg-[#F7F6F5] rounded-t-4xl">
    <div className="max-w-5xl mx-auto px-6 py-10 md:px-12 flex flex-col md:flex-row justify-between">
      
      {/* Column 1 */}
      <div className="mb-8 md:mb-0 md:w-1/2">
        <div className="flex items-center mb-4">
          <img src={logoonly} alt="Bricxy" className="h-8 mr-2" />
          <span className="text-lg font-bold">BRICXY</span>
        </div>
        <p className="text-[#4D3F39] mb-4 max-w-sm">
          Browse ideas, exploring options and book a meeting with our expert consultants to finalise your design
        </p>
        <p className="text-[#4D3F39] font-semibold">Get in touch</p>
        <p className="text-[#4D3F39]">support.homes@bricxy.com</p>
        <p className="text-[#4D3F39] mb-4">Call us : +91 98447 83544</p>
        
        <p className="font-semibold">Social</p>
        <div className="flex space-x-2 mt-2">
          <a href="#" aria-label="YouTube" className="hover:text-[#7A685F] transition">
            <FaYoutube className="text-[#4D3F39]" size={20} />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-[#7A685F] transition">
            <FaFacebookSquare className="text-[#4D3F39]" size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-[#7A685F] transition">
            <RiInstagramFill className="text-[#4D3F39]" size={20} />
          </a>
        </div>
      </div>

      {/* Column 2 */}
      <div className="mb-8 md:mb-0">
        <h3 className="font-semibold text-[#4D3F39] mb-3">Company</h3>
        <ul className="space-y-2 text-[#4D3F39]">
          <li><a href="#">About us</a></li>
          <li><a href="#">How it works</a></li>
          <li><a href="#">Our projects</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <h3 className="font-semibold text-[#4D3F39] mb-3">Legal</h3>
        <ul className="space-y-2 text-[#4D3F39]">
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy policy</a></li>
        </ul>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="bg-[#7A685F] text-white text-center py-4 text-sm">
    © 2025 Bricxy. All rights reserved.
  </div>
</footer>


  )
}

export default Footersection;