import React from 'react';
import { CheckCircle, AlertCircle, MessageCircle, Mail, Camera, AlertTriangle } from 'lucide-react';
import heroimg from '../assets/heroimg.png';
export default function Journeypage() {
  return (
    <div className="min-h-screen  p-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl  font-bold text-[#4D3F39] mb-6">
          Your new home Journey<br/> awaits
        </h1>
       
        <p className="text-xl text-[#4D3F39]  max-w-2xl mx-auto">
          No more chaos. Just simple and seamless steps. With Anyone, the 
          entire home-buying process happens in one place.
        </p>
      </div>

      {/* Comparison Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
        {/* The Old Way */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#4D3F39] text-center">The old way</h2>
          
          <div className="bg-gray-100 rounded-2xl border-2 border-dashed border-gray-500  p-8 relative overflow-hidden">
            {/* Chaotic network visualization */}
            <div className="relative">
              {/* Central "You" node */}
              <div className="absolute top-16 left-8 bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-semibold text-sm z-10">
                You
              </div>
              
              {/* Various communication bubbles and connections */}
              <div className="space-y-4 ml-24 mt-4">
                {/* Message bubbles */}
                <div className="bg-white rounded-lg p-3 shadow-sm flex items-center gap-2 max-w-xs">
                  <span className="text-sm">How do I get approvals and who handles?</span>
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                </div>
                
                <div className="bg-yellow-100 rounded-lg p-3 shadow-sm flex items-center gap-2 max-w-xs ml-8">
                  <AlertCircle className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  <span className="text-sm">Why does the budget keep changing?</span>
                </div>
                
                <div className="bg-white rounded-lg p-3 shadow-sm flex items-center gap-2 max-w-xs">
                  <span className="text-sm">Contractor</span>
                  <MessageCircle className="w-4 h-4 text-green-500" />
                </div>
                
                <div className="bg-white rounded-lg p-3 shadow-sm flex items-center gap-2 max-w-xs ml-4">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Revised quotations</span>
                </div>
                
                <div className="bg-white rounded-lg p-3 shadow-sm flex items-center gap-2 max-w-xs ml-12">
                  <Camera className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Track construction progress</span>
                </div>
                
                <div className="bg-red-100 rounded-lg p-3 shadow-sm flex items-center gap-2 max-w-xs">
                  <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span className="text-sm">No one is answering at the site.</span>
                </div>
                
                <div className="bg-white rounded-lg p-3 shadow-sm flex items-center gap-2 max-w-xs ml-6">
                  <MessageCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Where's the latest floor plan?</span>
                </div>
              </div>
              
              {/* Additional node */}
              <div className="absolute bottom-8 right-8 bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-xs">👤</span>
                </div>
              </div>
              
              {/* Chaotic connecting lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 1}}>
                <path
                  d="M 60 80 Q 120 60 180 100 Q 240 140 280 120"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
                <path
                  d="M 80 100 Q 140 180 200 160 Q 280 140 320 180"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
                <path
                  d="M 60 80 Q 80 200 160 240 Q 240 280 300 240"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* The Bricxy Way */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#4D3F39] text-center">The Bricxy way</h2>
          
          <div className="bg-gray-100 border-2 border-dashed border-gray-500 rounded-2xl p-8 relative">
            {/* Simple linear flow */}
            <div className="flex flex-col items-center space-y-8">
              {/* You node */}
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-semibold text-sm">
                You
              </div>
              
              {/* Connecting line */}
              <div className="w-px h-12 bg-blue-300 border-dashed border-2 border-blue-300"></div>
              
              {/* Bricxy platform */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🏠</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">BRICXY</span>
                </div>
              </div>
              
              {/* Connecting line */}
              <div className="w-px h-12 bg-blue-300 border-dashed border-2 border-blue-300"></div>
              
              {/* Success node */}
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="max-w-5xl  mx-auto rounded-2xl overflow-hidden flex flex-col md:flex-row bg-[#7A685F]">
  <div className="flex items-center justify-center text-white p-6 md:w-1/2">
    <h2 className="text-2xl md:text-2xl font-semibold leading-tight">
      Managing construction?<br />
      <span className="font-normal text-2xl">Even your grandma could do it.</span>
    </h2>
  </div>
  <img
    src={heroimg}
    alt="Modern Home"
    className="md:w-1/2 "
  />
</div>

</div>


      
     
  );
}