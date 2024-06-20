import React from 'react';
import Header from '../components/Header';
import StockPrediction from '../components/StockPrediction';
import PortfolioAnalysis from '../components/PortfolioAnalysis';
import FinancialNews from '../components/FinancialNews';
import Navbar from '../components/Navbar';

const HomePage = () => (
  <div className="bg-gray-100 min-h-screen flex flex-col items-center">
    <Header />
    <div className="p-4 w-full max-w-sm">
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold">Welcome back, Alex!</h2>
        <p>Here's your personalized financial advice for today:</p>
        <div className="p-4 bg-gray-100 rounded-lg my-2">
          <p>Consider diversifying your portfolio to include more technology stocks.</p>
        </div>
      </div>
      <StockPrediction />
      <PortfolioAnalysis />
      <FinancialNews />
    </div>
    <Navbar />
  </div>
);

export default HomePage;
