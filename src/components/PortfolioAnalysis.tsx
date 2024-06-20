import React from 'react';

const PortfolioAnalysis = () => (
  <div className="p-4 bg-white rounded-lg shadow my-4 w-full max-w-sm">
    <h2 className="text-xl font-bold">Portfolio Analysis</h2>
    <div className="flex items-center my-2">
      <img src="/path/to/portfolio-image.jpg" alt="Diversified Portfolio" className="w-16 h-16 mr-4 rounded"/>
      <div>
        <h3 className="font-bold">Diversified Portfolio</h3>
        <p>Your portfolio is well-diversified across various sectors.</p>
      </div>
    </div>
  </div>
);

export default PortfolioAnalysis;
