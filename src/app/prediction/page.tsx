'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import SearchResult from '../../components/SearchResult';

const stocks = [
  { symbol: 'AAPL', name: 'Apple Inc.' },
  { symbol: 'MSFT', name: 'Microsoft Corporation' },
  { symbol: 'TSLA', name: 'Tesla, Inc.' },
  // 추가 주식 데이터
];

const PredictionPage: React.FC = () => {
  const [query, setQuery] = useState('');

  const filteredStocks = stocks.filter(stock =>
    stock.symbol.toLowerCase().includes(query.toLowerCase()) ||
    stock.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <Header />
      <div className="p-4 w-full max-w-sm">
        <SearchBar query={query} setQuery={setQuery} />
        {filteredStocks.map(stock => (
          <SearchResult key={stock.symbol} stock={stock} />
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default PredictionPage;
