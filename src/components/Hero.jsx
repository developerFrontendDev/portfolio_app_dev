import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-8 pt-20">
      {/* Available for Freelance - positioned above the name with some space */}
      <div className="text-gray-700 text-sm font-sans mb-8 flex items-center">
        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
        AVAILABLE FOR FREELANCE
      </div>
      
      {/* First Name */}
      <h2 className="text-black text-5xl sm:text-7xl md:text-9xl font-bold font-sans leading-none">
        NAVEED
      </h2>
      
      {/* Last Name */}
      <h2 className="text-black text-5xl sm:text-7xl md:text-9xl font-bold font-sans leading-none mt-2">
        DEVELOPER
      </h2>
      
      {/* Location */}
      <p className="text-black text-lg sm:text-xl font-sans mt-8">
        BASED IN COLOMBO, SL
      </p>
      
      {/* Title */}
      <p className="text-black text-lg sm:text-xl font-sans mt-2 text-center">
        UI/UX DESIGNER + DEVELOPER
      </p>
    </div>
  );
};

export default Hero;