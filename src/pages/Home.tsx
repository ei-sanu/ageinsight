import { ArrowDown } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import AgeCalculator from '../components/AgeCalculator/AgeCalculator';

const Home: React.FC = () => {
  const calculatorRef = useRef<HTMLDivElement>(null);

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.classList.add('fade-in');
    }
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fade-in {
            animation: fadeIn 1s ease-out forwards;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-100 dark:from-gray-900 dark:to-purple-900">
        <div className="container mx-auto px-4 py-16 hero-content">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-purple-800 dark:text-pink-400">
              <span className="block">Discover Your</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Perfect Age Solutions
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              Calculate your exact age and get personalized recommendations based on your life stage. From children's essentials to adult documentation needs.
            </p>

            <button
              onClick={scrollToCalculator}
              className="btn-primary animate-pulse hover:animate-none"
            >
              Calculate Your Age
            </button>

            <div className="mt-12 text-center">
              <button
                onClick={scrollToCalculator}
                className="inline-flex flex-col items-center text-purple-600 dark:text-pink-400 hover:text-purple-800 dark:hover:text-pink-300 transition-colors"
                aria-label="Scroll down"
              >
                <span className="text-sm mb-2">Scroll Down</span>
                <ArrowDown className="animate-bounce" size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Background decoration elements */}
        <div className="absolute top-1/4 left-1/6 w-12 h-12 rounded-full bg-pink-300 dark:bg-pink-600 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-20 h-20 rounded-full bg-purple-300 dark:bg-purple-600 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-8 h-8 rounded-full bg-pink-300 dark:bg-pink-600 opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </section>

      {/* Calculator Section */}
      <section ref={calculatorRef} className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-pink-400 mb-4">
              Age Calculator
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Enter your birth date to calculate your exact age in years, months, and days.
              We'll also provide personalized recommendations based on your age group.
            </p>
          </div>

          <AgeCalculator />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-purple-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-pink-400 mb-4">
              Why Use Our Age Calculator
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our calculator offers more than just age calculation. Discover the unique features that make it special.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center hover:scale-105 transition-transform">
              <div className="bg-purple-100 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-pink-400 mb-3">
                Precise Calculation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get your exact age calculated down to years, months, and days with perfect accuracy.
              </p>
            </div>

            <div className="card p-6 text-center hover:scale-105 transition-transform">
              <div className="bg-purple-100 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-pink-400 mb-3">
                Personalized Recommendations
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Receive custom suggestions and resources based on your specific age group.
              </p>
            </div>

            <div className="card p-6 text-center hover:scale-105 transition-transform">
              <div className="bg-purple-100 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-pink-400 mb-3">
                Instant Results
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get immediate calculations and recommendations with our fast, responsive interface.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
