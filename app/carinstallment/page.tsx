'use client';

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [carPrice, setCarPrice] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [downPayment, setDownPayment] = useState('15');
  const [loanPeriod, setLoanPeriod] = useState('24');
  const [monthlyPayment, setMonthlyPayment] = useState('0.00');

  const handleCalculate = () => {
    const carPriceVal = parseFloat(carPrice);
    const interestRateVal = parseFloat(interestRate);
    const downPaymentVal = parseFloat(downPayment);
    const loanPeriodVal = parseInt(loanPeriod, 10);

    if (carPriceVal > 0 && interestRateVal >= 0 && downPaymentVal >= 0 && loanPeriodVal > 0) {
      const downPaymentAmount = carPriceVal * (downPaymentVal / 100);
      const loanAmount = carPriceVal - downPaymentAmount;
      const loanPeriodInYears = loanPeriodVal / 12;
      const totalInterest = loanAmount * (interestRateVal / 100) * loanPeriodInYears;
      const totalPayment = loanAmount + totalInterest;
      const calculatedMonthlyPayment = totalPayment / loanPeriodVal;
      setMonthlyPayment(calculatedMonthlyPayment.toFixed(2));
    } else {
      setMonthlyPayment('0.00');
    }
  };

  const handleReset = () => {
    setName('');
    setCarPrice('');
    setInterestRate('');
    setDownPayment('15');
    setLoanPeriod('24');
    setMonthlyPayment('0.00');
  };

  const isButtonDisabled = !carPrice || !interestRate || !downPayment || !loanPeriod || parseFloat(carPrice) <= 0 || parseFloat(interestRate) < 0;

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-pink-50">
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-lg w-full mx-4 sm:mx-0 transform transition duration-300 hover:scale-105 hover:shadow-pink-200">
          
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <svg
                className="w-24 h-24 text-pink-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5S16.5 14.985 16.5 12 14.485 7.5 12 7.5zM12 12v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-pink-600 mb-2">
              Car Installment Calculator
            </h1>
            <p className="text-pink-400">คำนวณค่างวดรถ</p>
          </div>

          {/* Input Fields */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-pink-700 mb-1">กรอกชื่อ</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition duration-200 text-gray-900"
                placeholder="กรุณาป้อนชื่อของคุณ"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-pink-700 mb-1">กรอกราคารถ (บาท)</label>
              <input
                type="number"
                value={carPrice}
                onChange={(e) => setCarPrice(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition duration-200 text-gray-900"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-pink-700 mb-1">กรอกดอกเบี้ยต่อปี (%)</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition duration-200 text-gray-900"
                placeholder="0.00"
              />
            </div>

            <div>
              <p className="block text-sm font-medium text-pink-700 mb-2">เงินดาวน์ (%)</p>
              <div className="flex flex-wrap items-center justify-around space-x-2 space-y-2">
                {["15", "20", "25", "30", "35"].map((val) => (
                  <div className="flex items-center" key={val}>
                    <input
                      type="radio"
                      value={val}
                      checked={downPayment === val}
                      onChange={(e) => setDownPayment(e.target.value)}
                      className="h-4 w-4 text-pink-500 border-pink-300 rounded-full focus:ring-pink-400"
                    />
                    <label className="ml-2 text-pink-700">{val}%</label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-pink-700 mb-1">จำนวนเดือนที่ผ่อน</label>
              <select
                value={loanPeriod}
                onChange={(e) => setLoanPeriod(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition duration-200 text-gray-900"
              >
                <option value="24">24 เดือน</option>
                <option value="36">36 เดือน</option>
                <option value="48">48 เดือน</option>
                <option value="60">60 เดือน</option>
                <option value="72">72 เดือน</option>
                <option value="84">84 เดือน</option>
              </select>
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
              onClick={handleReset}
              className="flex-1 bg-pink-100 text-pink-700 font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-pink-200 transition duration-300 transform hover:scale-105 active:scale-95"
            >
              ล้างข้อมูล
            </button>
          </div>

          {/* Result Display */}
          <div className="mt-8 text-center text-pink-700 font-semibold text-lg">
            <p>
              ค่างวดรายเดือน{' '}
              <span className="text-pink-600 font-extrabold text-2xl">{monthlyPayment}</span> บาท
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
