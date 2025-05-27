import React from 'react';

interface LoadingAnimationProps {
  message?: string;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ 
  message = "Loading..." 
}) => {
  return (
    <div className="loading-container">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
          <div className="w-12 h-12 rounded-full border-t-4 border-purple-600 dark:border-pink-400 animate-spin absolute top-0 left-0"></div>
        </div>
        <div className="loading-text mt-4">{message}</div>
      </div>
    </div>
  );
};

export default LoadingAnimation;