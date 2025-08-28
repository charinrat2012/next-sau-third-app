'use client'; 

import { useState } from 'react';

export default function Home() {
  const [amount, setAmount] = useState('');
  const [people, setPeople] = useState('');
  const [result, setResult] = useState('0.00');

  const handleCalculate = () => {
    const totalAmount = parseFloat(amount);
    const numberOfPeople = parseInt(people, 10);

    if (totalAmount > 0 && numberOfPeople > 0) {
      const share = totalAmount / numberOfPeople;
      setResult(share.toFixed(2));
    } else {
      setResult('0.00');
    }
  };

  const handleClear = () => {
    setAmount('');
    setPeople('');
    setResult('0.00');
  };

  const isButtonDisabled =
    !amount ||
    !people ||
    parseFloat(amount) <= 0 ||
    parseInt(people, 10) <= 0;

  return (
    <>
      {/* Main Container */}
      <div className="flex items-center justify-center min-h-screen bg-pink-50">
        {/* Card Container */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-sm w-full mx-4 sm:mx-0 transform transition duration-300 hover:scale-105 hover:shadow-pink-200">
          
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <img
                src="https://placehold.co/100x100/f9a8d4/fff?text=💰"
                alt="Money Share Image"
                className="rounded-full shadow-lg border-4 border-pink-200"
              />
            </div>
            <h1 className="text-3xl font-bold text-pink-600 mb-2">
              Money Share Calculator
            </h1>
            <p className="text-pink-400">คำนวณเงินที่ต้องหารกัน</p>
          </div>

          {/* Input Fields */}
          <div className="space-y-6">
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-pink-700 mb-1"
              >
                ป้อนจำนวนเงิน
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition duration-200 text-gray-900"
                placeholder="0.00"
              />
            </div>
            <div>
              <label
                htmlFor="people"
                className="block text-sm font-medium text-pink-700 mb-1"
              >
                ป้อนจำนวนคน
              </label>
              <input
                type="number"
                id="people"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition duration-200 text-gray-900"
                placeholder="0"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <button
              onClick={handleCalculate}
              className={`flex-1 font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300 transform active:scale-95 ${
                isButtonDisabled
                  ? 'bg-pink-200 text-pink-100 cursor-not-allowed'
                  : 'bg-pink-500 text-white hover:bg-pink-600 hover:scale-105'
              }`}
              disabled={isButtonDisabled}
            >
              คำนวณ
            </button>
            <button
              onClick={handleClear}
              className="flex-1 bg-pink-100 text-pink-700 font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-pink-200 transition duration-300 transform hover:scale-105 active:scale-95"
            >
              ล้างข้อมูล
            </button>
          </div>

          {/* Result Display */}
          <div className="mt-8 text-center text-pink-700 font-semibold text-lg">
            <p>
              หารกันคนละ{' '}
              <span className="text-pink-600 font-extrabold text-2xl">{result}</span>{' '}
              บาท
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-sm text-pink-400 text-center">
        Dev by Charinrat SAU Team
      </div>
    </>
  );
}
