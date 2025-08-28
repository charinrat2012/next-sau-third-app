// import Image from "next/image";
import Head from 'next/head';
import bmi from "./images/bmi.png" ;
import moneyshare from "./images/moneyshare.png" ;
import carinstallment from "./images/carinstallment.png" ;
import bmr from "./images/bmr.png" ;
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen flex-col">
      {/* คอนเทนเนอร์หลักสำหรับเนื้อหาทั้งหมด (กรอบสีขาว) */}
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 w-full max-w-7xl mx-4 my-8">
        
        {/* ส่วนหัวของหน้าเว็บ (โลโก้และข้อความ) */}
        <header className="flex flex-col items-center justify-center text-center mb-10 md:mb-16">
          {/* โลโก้เว็บ: ใช้แท็ก img ธรรมดาตามโค้ดเดิมของคุณ */}
          <img src="https://placehold.co/150x150/d1d5db/ffffff?text=LOGO" alt="โลโก้เว็บคำนวณ" className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 md:mb-6 shadow-md" />
          
          {/* ข้อความส่วนหัว */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Calculator Varity</h1>
          <p className="text-lg md:text-xl text-gray-600 mt-2">คำนวณ By DTI-SAU</p>
        </header>

        {/* ส่วนของเมนูลิงก์ไปยังเพจต่างๆ */}
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          {/* การ์ดสำหรับลิงก์แต่ละหน้า */}
          {/* การ์ดคำนวณ Money Share */}
          <Link href="/moneyshare" className="block transform transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-2xl p-6 md:p-8 shadow-md flex flex-col items-center justify-center text-center h-full">
              <span className="text-4xl mb-4">💰</span>
              <h2 className="text-xl md:text-2xl font-semibold">คำนวณ Money Share</h2>
            </div>
          </Link>

          {/* การ์ดคำนวณ BMI */}
          <Link href="/bmi" className="block transform transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-r from-lime-400 to-green-500 text-white rounded-2xl p-6 md:p-8 shadow-md flex flex-col items-center justify-center text-center h-full">
              <span className="text-4xl mb-4">⚖️</span>
              <h2 className="text-xl md:text-2xl font-semibold">คำนวณ BMI</h2>
            </div>
          </Link>

          {/* การ์ดคำนวณ BMR */}
          <Link href="/bmr" className="block transform transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-2xl p-6 md:p-8 shadow-md flex flex-col items-center justify-center text-center h-full">
              <span className="text-4xl mb-4">🏃</span>
              <h2 className="text-xl md:text-2xl font-semibold">คำนวณ BMR</h2>
            </div>
          </Link>

          {/* การ์ดคำนวณ Car Installment */}
          <Link href="/carinstallment" className="block transform transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-r from-violet-400 to-fuchsia-500 text-white rounded-2xl p-6 md:p-8 shadow-md flex flex-col items-center justify-center text-center h-full">
              <span className="text-4xl mb-4">🚗</span>
              <h2 className="text-xl md:text-2xl font-semibold">คำนวณ Car Installment</h2>
            </div>
          </Link>

        </main>

      </div>
      
      {/* ส่วนท้าย (Footer) ที่อยู่ข้างนอกกรอบสีขาว */}
      <footer className="mt-10 md:mt-16 text-center text-gray-500 text-sm md:text-base">
        <p>Created by DTI_SAU 20225</p>
      </footer>
      
    </div>
  );
}