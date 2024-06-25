'use client';

import React from 'react';

interface SearchResultProps {
  stock: {
    symbol: string;
    name: string;
  };
}

const SearchResult: React.FC<SearchResultProps> = ({ stock }) => (
  <div className="p-4 bg-white rounded-lg shadow my-2 flex items-center cursor-pointer">
    <div className="mr-4">
      <img src={`https://logo.clearbit.com/${stock.symbol.toLowerCase()}.com`} alt={stock.name} className="w-16 h-16 rounded" />
    </div>
    <div>
      <h3 className="font-bold">{stock.symbol}</h3>
      <p>{stock.name}</p>
    </div>
  </div>
);

export default SearchResult;
