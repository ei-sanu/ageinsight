import React, { useEffect } from 'react';

const About: React.FC = () => {
  useEffect(() => {
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
      aboutContent.classList.add('fade-in');
    }
  }, []);

  return (
    <div className="py-24 px-4 min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl about-content">
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

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            About AgeInsight
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto"></div>
        </div>

        <div className="prose dark:prose-invert prose-lg max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            AgeInsight is more than just an age calculator. It's a comprehensive platform designed to provide personalized recommendations based on your age group. Whether you're a parent looking for essential items for your toddler, a student needing school supplies, or an adult seeking information on important documents, AgeInsight is here to guide you.
          </p>

          <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-lg mb-10">
            <h2 className="text-2xl font-semibold text-purple-700 dark:text-pink-400 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our mission is to simplify age-related decisions by providing accurate calculations and relevant, personalized recommendations. We believe that different life stages come with different needs, and we're here to help you navigate them.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-purple-700 dark:text-pink-400 mb-4">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 dark:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-purple-700 dark:text-pink-400 font-bold text-xl">1</div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-pink-400 mb-2">Enter Your Birth Date</h3>
              <p className="text-gray-600 dark:text-gray-400">Use our intuitive date picker to select your birth date.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 dark:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-purple-700 dark:text-pink-400 font-bold text-xl">2</div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-pink-400 mb-2">Get Precise Age Calculation</h3>
              <p className="text-gray-600 dark:text-gray-400">Receive your exact age in years, months, and days with perfect accuracy.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 dark:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-purple-700 dark:text-pink-400 font-bold text-xl">3</div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-pink-400 mb-2">View Personalized Recommendations</h3>
              <p className="text-gray-600 dark:text-gray-400">Get age-appropriate recommendations for products, services, or documents.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-purple-700 dark:text-pink-400 mb-4">
            Age-Based Recommendations
          </h2>

          <ul className="space-y-4 mb-10">
            <li className="flex items-start">
              <span className="bg-purple-100 dark:bg-gray-800 p-1 rounded-full mr-3 mt-1">
                <svg className="w-4 h-4 text-purple-700 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <div>
                <span className="font-medium text-purple-700 dark:text-pink-400">Ages 0-5:</span>
                <span className="text-gray-700 dark:text-gray-300"> Essential items for early childhood development, including toys, books, and nutritional products.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 dark:bg-gray-800 p-1 rounded-full mr-3 mt-1">
                <svg className="w-4 h-4 text-purple-700 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <div>
                <span className="font-medium text-purple-700 dark:text-pink-400">Ages 6-18:</span>
                <span className="text-gray-700 dark:text-gray-300"> Educational resources, school supplies, and learning tools tailored to different age groups within this range.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 dark:bg-gray-800 p-1 rounded-full mr-3 mt-1">
                <svg className="w-4 h-4 text-purple-700 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <div>
                <span className="font-medium text-purple-700 dark:text-pink-400">Ages 18+:</span>
                <span className="text-gray-700 dark:text-gray-300"> Information about essential documents like driving licenses, PAN cards, voter IDs, and other official documents you become eligible for as an adult in India.</span>
              </div>
            </li>
          </ul>

          <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-8 rounded-lg text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Start Using AgeInsight Today</h2>
            <p className="mb-6">Discover the power of age-based recommendations and make informed decisions for every stage of life.</p>
            <a href="/" className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Try the Age Calculator
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
