'use client';

import { useState } from 'react';

export default function Home() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [bmr, setBmr] = useState('0.00');

  const handleCalculate = () => {
    const weightVal = parseFloat(weight);
    const heightVal = parseFloat(height);
    const ageVal = parseInt(age, 10);

    if (weightVal > 0 && heightVal > 0 && ageVal > 0) {
      let calculatedBmr;
      if (gender === 'male') {
        calculatedBmr =
          10 * weightVal + 6.25 * heightVal - 5 * ageVal + 5;
      } else {
        calculatedBmr =
          10 * weightVal + 6.25 * heightVal - 5 * ageVal - 161;
      }
      setBmr(calculatedBmr.toFixed(2));
    } else {
      setBmr('0.00');
    }
  };

  const handleReset = () => {
    setWeight('');
    setHeight('');
    setAge('');
    setGender('male');
    setBmr('0.00');
  };

  const isButtonDisabled =
    !weight ||
    !height ||
    !age ||
    parseFloat(weight) <= 0 ||
    parseFloat(height) <= 0 ||
    parseInt(age, 10) <= 0;

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50">
      {/* Main Card */}
      <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-md w-full mx-4 sm:mx-0 transform transition duration-300 hover:scale-105 border border-pink-200">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img
              src="https://placehold.co/120x120/fbcfe8/ec4899?text=BMR"
              alt="BMR Image"
              className="rounded-full shadow-lg border-4 border-pink-300"
            />
          </div>
          <h1 className="text-3xl font-bold text-pink-600 mb-2">
            BMR Calculator
          </h1>
          <p className="text-pink-400">คำนวณ BMR</p>
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
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-pink-700 mb-1"
            >
              ป้อนอายุ (ปี)
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition duration-200 text-gray-900"
              placeholder="0"
            />
          </div>

          {/* Gender */}
          <div>
            <p className="block text-sm font-medium text-pink-700 mb-2">
              เพศ:
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                  className="h-4 w-4 text-pink-500 border-gray-300 focus:ring-pink-400"
                />
                <label htmlFor="male" className="ml-2 text-gray-700">
                  ชาย
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                  className="h-4 w-4 text-pink-500 border-gray-300 focus:ring-pink-400"
                />
                <label htmlFor="female" className="ml-2 text-gray-700">
                  หญิง
                </label>
              </div>
            </div>
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
            คำนวณ BMR
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
            ค่า BMR ที่คำนวณได้:{' '}
            <span className="text-pink-500 font-extrabold">{bmr}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
