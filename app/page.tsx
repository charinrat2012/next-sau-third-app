import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";
import calculator from "./images/calculator.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Calculator Variety by DTI-SAU</title>
        <meta name="description" content="รวมเครื่องมือคำนวณหลากหลายจาก DTI-SAU" />
      </Head>

      <div className="bg-pink-50 flex items-center justify-center min-h-screen flex-col py-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 w-full max-w-7xl mx-auto transform transition-all duration-500 hover:scale-[1.01]">
          
          {/* Header */}
          <header className="flex flex-col items-center justify-center text-center mb-10 md:mb-16">
            <Image
              src={calculator}
              alt="โลโก้เว็บคำนวณ"
              width={150}
              height={150}
              className="w-28 h-28 md:w-36 md:h-36 rounded-full mb-4 md:mb-6 shadow-lg border-4 border-pink-200"
            />
            <h1 className="text-4xl md:text-6xl font-extrabold text-pink-800 leading-tight tracking-tight drop-shadow-sm">
              Calculator Variety
            </h1>
            <p className="text-lg md:text-xl text-pink-600 mt-3 font-medium">
              เครื่องมือคำนวณหลากหลายสไตล์
            </p>
            <p className="text-md md:text-lg text-gray-500 mt-1">
              พัฒนาโดย DTI-SAU
            </p>
          </header>

          {/* Cards */}
          <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
            {/* Money Share */}
            <Link href="/moneyshare" className="block transform transition-all duration-300 hover:scale-105 group">
              <div className="bg-gradient-to-br from-pink-400 to-pink-500 text-white rounded-2xl p-6 md:p-8 shadow-md flex flex-col items-center justify-center text-center h-full group-hover:shadow-xl group-hover:from-pink-500 group-hover:to-pink-600">
                <span className="text-4xl mb-4 transition-transform duration-300 group-hover:rotate-12">💰</span>
                <h2 className="text-xl md:text-2xl font-semibold drop-shadow-sm">คำนวณ Money Share</h2>
              </div>
            </Link>

            {/* BMI */}
            <Link href="/bmi" className="block transform transition-all duration-300 hover:scale-105 group">
              <div className="bg-gradient-to-br from-pink-300 to-pink-400 text-white rounded-2xl p-6 md:p-8 shadow-md flex flex-col items-center justify-center text-center h-full group-hover:shadow-xl group-hover:from-pink-400 group-hover:to-pink-500">
                <span className="text-4xl mb-4 transition-transform duration-300 group-hover:-rotate-12">⚖️</span>
                <h2 className="text-xl md:text-2xl font-semibold drop-shadow-sm">คำนวณ BMI</h2>
              </div>
            </Link>

            {/* BMR */}
            <Link href="/bmr" className="block transform transition-all duration-300 hover:scale-105 group">
              <div className="bg-gradient-to-br from-pink-200 to-pink-300 text-white rounded-2xl p-6 md:p-8 shadow-md flex flex-col items-center justify-center text-center h-full group-hover:shadow-xl group-hover:from-pink-300 group-hover:to-pink-400">
                <span className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">🏃</span>
                <h2 className="text-xl md:text-2xl font-semibold drop-shadow-sm">คำนวณ BMR</h2>
              </div>
            </Link>

            {/* Car Installment */}
            <Link href="/carinstallment" className="block transform transition-all duration-300 hover:scale-105 group">
              <div className="bg-gradient-to-br from-pink-300 to-pink-500 text-white rounded-2xl p-6 md:p-8 shadow-md flex flex-col items-center justify-center text-center h-full group-hover:shadow-xl group-hover:from-pink-400 group-hover:to-pink-600">
                <span className="text-4xl mb-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:rotate-6">🚗</span>
                <h2 className="text-xl md:text-2xl font-semibold drop-shadow-sm">คำนวณ Car Installment</h2>
              </div>
            </Link>

          </main>
        </div>

        {/* Footer */}
        <footer className="mt-10 md:mt-16 text-center text-pink-600 text-sm md:text-base font-medium">
          <p>Created with ❤️ by DTI_SAU 2025</p>
        </footer>
      </div>
    </>
  );
}
