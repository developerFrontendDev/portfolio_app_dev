import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 bg-transparent py-3 sm:py-4 px-4 sm:px-8 flex justify-between items-center transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Left side - Time */}
      <div className="text-gray-400 text-sm font-sans">
        LOCAL/7:OCT
      </div>

      {/* Right side - Contact */}
      <div className="text-black text-sm sm:text-lg font-bold uppercase tracking-wider bg-white border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2 transition-colors duration-300 hover:bg-black hover:text-white hover:border-black">
        CONTACT NOW
      </div>
    </nav>
  );
};

export default Navbar;