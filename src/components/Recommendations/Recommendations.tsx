import React from 'react';
import KidsItems from './KidsItems';
import SchoolItems from './SchoolItems';
import AdultDocuments from './AdultDocuments';

interface RecommendationsProps {
  ageInYears: number;
}

const Recommendations: React.FC<RecommendationsProps> = ({ ageInYears }) => {
  const getTitle = () => {
    if (ageInYears < 5) {
      return "Essential Items for Your Little One";
    } else if (ageInYears >= 5 && ageInYears <= 18) {
      return "School & Learning Essentials";
    } else {
      return "Important Documents You're Eligible For";
    }
  };

  const getDescription = () => {
    if (ageInYears < 5) {
      return "Here are some essential items that can support your child's growth and development at this age.";
    } else if (ageInYears >= 5 && ageInYears <= 18) {
      return "Based on your age, here are some educational and school essentials that might be useful for you.";
    } else {
      return "As an adult, you're eligible for these important government documents in India. Click on the cards to visit the official websites.";
    }
  };

  const renderRecommendations = () => {
    if (ageInYears < 5) {
      return <KidsItems />;
    } else if (ageInYears >= 5 && ageInYears <= 18) {
      return <SchoolItems />;
    } else {
      return <AdultDocuments />;
    }
  };

  return (
    <div className="recommendations">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-700 dark:text-pink-400 mb-3">
          {getTitle()}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {getDescription()}
        </p>
      </div>
      
      {renderRecommendations()}
    </div>
  );
};

export default Recommendations;