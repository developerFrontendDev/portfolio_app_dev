import React from 'react';
import frame142 from '../assets/Frame 142.png';
import frame143 from '../assets/Frame 141.png';
import frame144 from '../assets/Frame 143.png';
import frame145 from '../assets/Group 289261.png';
import frame146 from '../assets/Group 289262.png';
import frame147 from '../assets/wakememain 1.png';
import frame148 from '../assets/registerwakeme 1.png';

const Gallery = () => {
  const images = [
    { id: 1, src: frame142, alt: 'Project 1' },
    { id: 2, src: frame143, alt: 'Project 2' },
    { id: 3, src: frame144, alt: 'Project 3' },
    { id: 4, src: frame145, alt: 'Project 4' },
    { id: 5, src: frame146, alt: 'Project 5' },
    { id: 6, src: frame147, alt: 'Project 6' },
    { id: 7, src: frame148, alt: 'Project 7' },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-6xl md:text-8xl font-bold text-center mb-12 text-black">
          <div>PROJECT</div>
          <div>GALLERY</div>
        </h2>

        {/* Single-row horizontal auto-scroll */}
        <div className="overflow-hidden">
          <div className="flex whitespace-nowrap animate-scroll will-change-transform">
            {/* Original images */}
            {images.map((image) => (
              <div key={image.id} className="inline-block mx-2">
                <div className="w-[280px] sm:w-[350px] h-[300px] sm:h-[400px] overflow-hidden rounded-lg shadow-md">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}

            {/* Duplicate images for seamless loop */}
            {images.map((image) => (
              <div key={`dup-${image.id}`} className="inline-block mx-2">
                <div className="w-[280px] sm:w-[350px] h-[300px] sm:h-[400px] overflow-hidden rounded-lg shadow-md">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind + custom animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .will-change-transform {
          will-change: transform;
        }
        
        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 30s;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;