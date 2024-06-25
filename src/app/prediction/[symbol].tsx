'use client';

import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

const predictions: { [key: string]: { name: string; risePrediction: string; estimatedClosingPrice: string } } = {
  AAPL: {
    name: 'Apple Inc.',
    risePrediction: '10%',
    estimatedClosingPrice: '$150.75',
  },
  MSFT: {
    name: 'Microsoft Corporation',
    risePrediction: '5%',
    estimatedClosingPrice: '$250.50',
  },
  TSLA: {
    name: 'Tesla, Inc.',
    risePrediction: '8%',
    estimatedClosingPrice: '$650.25',
  },
  // 추가 예측 데이터
};

const PredictionPage: React.FC = () => {
  const router = useRouter();
  const { symbol } = router.query;
  const prediction = predictions[symbol as string];

  if (!prediction) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <Header />
      <div className="p-4 w-full max-w-sm">
        <div className="bg-white p-4 rounded-lg shadow my-4">
          <h2 className="text-xl font-bold">Today's Prediction</h2>
          <div className="p-4 bg-gray-100 rounded-lg my-2 flex items-center">
            <img src={`https://logo.clearbit.com/${symbol?.toString().toLowerCase()}.com`} alt={prediction.name} className="w-16 h-16 mr-4 rounded" />
            <div>
              <h3 className="font-bold">Rise Prediction</h3>
              <p>{prediction.name}</p>
              <p>Expected Rise: {prediction.risePrediction}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow my-4">
          <h2 className="text-xl font-bold">Estimated Closing Price</h2>
          <div className="p-4 bg-gray-100 rounded-lg my-2 flex items-center">
            <img src={`https://logo.clearbit.com/${symbol?.toString().toLowerCase()}.com`} alt={prediction.name} className="w-16 h-16 mr-4 rounded" />
            <div>
              <h3 className="font-bold">{prediction.name}</h3>
              <p>Estimated Closing: {prediction.estimatedClosingPrice}</p>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default PredictionPage;
