import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import DatePicker from './DatePicker';
import LoadingAnimation from '../UI/LoadingAnimation';
import { calculateAge } from '../../utils/ageCalculator';
import AgeResult from './AgeResult';
import Recommendations from '../Recommendations/Recommendations';

const AgeCalculator: React.FC = () => {
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleDateChange = (date: Date | null) => {
    setBirthDate(date);
    // Reset results when date changes
    setAge(null);
    setShowResults(false);
  };

  const handleCalculateAge = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!birthDate) return;
    
    setIsCalculating(true);
    setShowResults(false);
    
    // Simulate calculation delay for animation
    setTimeout(() => {
      const calculatedAge = calculateAge(birthDate);
      setAge(calculatedAge);
      setIsCalculating(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="card p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-purple-700 dark:text-pink-400">
          Calculate Your Age
        </h2>
        
        <form onSubmit={handleCalculateAge} className="space-y-6">
          <div className="relative">
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Your Birth Date
            </label>
            <div className="relative">
              <DatePicker 
                selectedDate={birthDate} 
                onChange={handleDateChange} 
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-600 dark:text-pink-400" size={20} />
            </div>
          </div>
          
          <button 
            type="submit"
            disabled={!birthDate || isCalculating}
            className={`btn-primary w-full ${!birthDate ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            Calculate Age
          </button>
        </form>
        
        {isCalculating && (
          <div className="mt-8">
            <LoadingAnimation message="Calculating your age..." />
          </div>
        )}
        
        {showResults && age && (
          <div className="mt-8">
            <AgeResult age={age} />
          </div>
        )}
      </div>
      
      {showResults && age && (
        <div className="mt-8 fade-in">
          <Recommendations ageInYears={age.years} />
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;