import React from 'react';
import { FaHome, FaChartLine, FaWallet, FaNewspaper } from 'react-icons/fa';

const Navbar = () => (
  <div className="fixed bottom-0 w-full max-w-sm bg-white border-t border-gray-200">
    <div className="flex justify-around p-2">
      <a href="#home" className="flex flex-col items-center">
        <FaHome size={24} />
        <span className="text-xs">Home</span>
      </a>
      <a href="#prediction" className="flex flex-col items-center">
        <FaChartLine size={24} />
        <span className="text-xs">Prediction</span>
      </a>
      <a href="#portfolio" className="flex flex-col items-center">
        <FaWallet size={24} />
        <span className="text-xs">Portfolio</span>
      </a>
      <a href="#news" className="flex flex-col items-center">
        <FaNewspaper size={24} />
        <span className="text-xs">News</span>
      </a>
    </div>
  </div>
);

export default Navbar;
