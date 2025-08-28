'use client';

import { useState } from 'react';

export default function Home() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('0.00');

  const handleCalculate = () => {
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);

    if (weightInKg > 0 && heightInCm > 0) {
      const heightInM = heightInCm / 100;
      const calculatedBmi = weightInKg / (heightInM * heightInM);
      setBmi(calculatedBmi.toFixed(2));
    } else {
      setBmi('0.00');
    }
  };

  const handleReset = () => {
    setWeight('');
    setHeight('');
    setBmi('0.00');
  };

  const isButtonDisabled =
    !weight || !height || parseFloat(weight) <= 0 || parseFloat(height) <= 0;

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50">
      {/* Main Card */}
      <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-sm w-full mx-4 sm:mx-0 transform transition duration-300 hover:scale-105 border border-pink-200">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img
              src="https://placehold.co/120x120/fbcfe8/ec4899?text=BMI"
              alt="BMI Image"
              className="rounded-full shadow-lg border-4 border-pink-300"
            />
          </div>
          <h1 className="text-3xl font-bold text-pink-600 mb-2">
            BMI Calculator
          </h1>
          <p className="text-pink-400">คำนวณ BMI</p>
        </div>

        {/* Inputs */}
        <div className="space-y-6">
          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-pink-700 mb-1"
            >
              ป้อนน้ำหนัก (กิโลกรัม)
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition duration-200 text-gray-900"
              placeholder="0"
            />
          </div>
          <div>
            <label
              htmlFor="height"
              className="block text-sm font-medium text-pink-700 mb-1"
            >
              ป้อนส่วนสูง (เซนติเมตร)
            </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
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
            คำนวณ BMI
          </button>
          <button
            onClick={handleReset}
            className="flex-1 bg-pink-100 text-pink-700 font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-pink-200 transition duration-300 transform hover:scale-105 active:scale-95"
          >
            รีเซ็ต
          </button>
        </div>

        {/* Result */}
        <div className="mt-8 text-center text-pink-600 font-semibold text-lg">
          <p>
            ค่า BMI ที่คำนวณได้:{' '}
            <span className="text-pink-500 font-extrabold">{bmi}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
