import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full py-12 px-4 bg-white">
      <h2 className="text-2xl sm:text-8xl font-bold text-gray-800 mb-4 sm:mb-6">Contact Us</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md text-sm sm:text-base">
        Have questions or want to get in touch? Feel free to reach out to us!
      </p>

      <div className="space-y-4 w-full max-w-md">
        <div className="flex items-center justify-center">
          <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span className="text-gray-700 text-sm sm:text-base">nawaznaveed8279@gmail.com</span>
        </div>

        <div className="flex items-center justify-center">
          <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
          <span className="text-gray-700 text-sm sm:text-base">+74 006 75 07</span>
        </div>

        <div className="flex items-center justify-center">
          <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <span className="text-gray-700 text-sm sm:text-base text-center">Colombo, dehiwala</span>
        </div>
      </div>

      <div className="mt-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300 text-sm sm:text-base">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;