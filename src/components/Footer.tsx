
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xl font-semibold mb-2">實習期末報告</p>
          <p className="text-gray-400 mb-6">n8n工作流自動化研究專題</p>
          <div className="border-t border-gray-800 pt-6 mt-6">
            <p className="text-sm text-gray-400">&copy; {currentYear} 實習期末報告. 保留所有權利。</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
