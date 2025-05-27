import React from 'react';
import { Clock, Calendar } from 'lucide-react';

interface AgeResultProps {
  age: {
    years: number;
    months: number;
    days: number;
  };
}

const AgeResult: React.FC<AgeResultProps> = ({ age }) => {
  return (
    <div className="age-result">
      <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-pink-400 text-center">
        Your Age Results
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-purple-50 dark:bg-gray-800 p-4 rounded-lg text-center">
          <div className="flex justify-center mb-2">
            <Calendar className="text-purple-600 dark:text-pink-400" size={24} />
          </div>
          <div className="text-3xl font-bold text-purple-700 dark:text-pink-400">{age.years}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
        </div>
        
        <div className="bg-purple-50 dark:bg-gray-800 p-4 rounded-lg text-center">
          <div className="flex justify-center mb-2">
            <Clock className="text-purple-600 dark:text-pink-400" size={24} />
          </div>
          <div className="text-3xl font-bold text-purple-700 dark:text-pink-400">{age.months}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Months</div>
        </div>
        
        <div className="bg-purple-50 dark:bg-gray-800 p-4 rounded-lg text-center">
          <div className="flex justify-center mb-2">
            <Clock className="text-purple-600 dark:text-pink-400" size={24} />
          </div>
          <div className="text-3xl font-bold text-purple-700 dark:text-pink-400">{age.days}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Days</div>
        </div>
      </div>
      
      <div className="mt-6 text-center text-gray-600 dark:text-gray-400">
        <p>Scroll down to view personalized recommendations based on your age.</p>
      </div>
    </div>
  );
};

export default AgeResult;