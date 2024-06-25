'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaHome, FaChartLine, FaWallet, FaNewspaper } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 w-full max-w-sm bg-white border-t border-gray-200">
      <div className="flex justify-around p-2">
        <a href="#" className="flex flex-col items-center" onClick={() => router.push('/')}>
          <FaHome size={24} />
          <span className="text-xs">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center" onClick={() => router.push('/prediction')}>
          <FaChartLine size={24} />
          <span className="text-xs">Prediction</span>
        </a>
        <a href="#" className="flex flex-col items-center" onClick={() => router.push('/portfolio')}>
          <FaWallet size={24} />
          <span className="text-xs">Portfolio</span>
        </a>
        <a href="#" className="flex flex-col items-center" onClick={() => router.push('/news')}>
          <FaNewspaper size={24} />
          <span className="text-xs">News</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
