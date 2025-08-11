import React from 'react';

const ShieldAvatar: React.FC = () => {
  return (
    <div className="relative w-80 h-80">
      {/* Shield Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 transform rotate-3 rounded-3xl shadow-2xl"></div>
      <div className="absolute inset-2 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl shadow-inner"></div>
      
      {/* Shield Shape Container */}
      <div className="relative w-full h-full">
        <svg viewBox="0 0 320 320" className="w-full h-full">
          <defs>
            <clipPath id="shieldClip">
              <path d="M160 20 C220 20, 280 50, 280 120 C280 180, 220 280, 160 300 C100 280, 40 180, 40 120 C40 50, 100 20, 160 20 Z" />
            </clipPath>
          </defs>
          
          {/* Profile Image */}
          <image
            href="https://placehold.co/300x300/3B82F6/FFFFFF?text=SK"
            x="10"
            y="10"
            width="300"
            height="300"
            clipPath="url(#shieldClip)"
            className="object-cover"
          />
          
          {/* Shield Border */}
          <path
            d="M160 20 C220 20, 280 50, 280 120 C280 180, 220 280, 160 300 C100 280, 40 180, 40 120 C40 50, 100 20, 160 20 Z"
            fill="none"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
          />
        </svg>
        
        {/* Decorative Elements */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-blue-300 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/4 -right-3 w-3 h-3 bg-white rounded-full animate-pulse animation-delay-500"></div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-transparent rounded-3xl blur-xl transform scale-110 -z-10"></div>
    </div>
  );
};

export default ShieldAvatar;