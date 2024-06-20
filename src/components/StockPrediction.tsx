import React from 'react';

const StockPrediction = () => (
  <div className="p-4 bg-white rounded-lg shadow my-4 w-full max-w-sm">
    <h2 className="text-xl font-bold">Featured Stock Predictions</h2>
    <div className="flex items-center my-2">
      <img src="/path/to/stock-image.jpg" alt="Tech Stocks Surge" className="w-16 h-16 mr-4 rounded"/>
      <div>
        <h3 className="font-bold">Tech Stocks Surge</h3>
        <p>Apple and Microsoft stocks are expected to rise this week.</p>
      </div>
    </div>
  </div>
);

export default StockPrediction;
