
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xl font-semibold mb-2">第三十屆專業實習期末報告</p>
          <p className="text-gray-400 mb-6"></p>
          <div className="border-t border-gray-800 pt-6 mt-6">
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
