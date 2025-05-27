import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-purple-700 dark:text-pink-400 hover:scale-105 transition-transform">
            AgeInsight
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className={`font-medium hover:text-purple-600 dark:hover:text-pink-400 transition-colors ${
                  location.pathname === '/' 
                    ? 'text-purple-700 dark:text-pink-400' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`font-medium hover:text-purple-600 dark:hover:text-pink-400 transition-colors ${
                  location.pathname === '/about' 
                    ? 'text-purple-700 dark:text-pink-400' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium hover:text-purple-600 dark:hover:text-pink-400 transition-colors ${
                  location.pathname === '/contact' 
                    ? 'text-purple-700 dark:text-pink-400' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                Contact
              </Link>
            </nav>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-purple-700" />
              )}
            </button>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-purple-700 dark:text-pink-400" />
            ) : (
              <Menu className="h-6 w-6 text-purple-700 dark:text-pink-400" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg absolute top-full left-0 right-0 fade-in">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-medium py-2 ${
                  location.pathname === '/' 
                    ? 'text-purple-700 dark:text-pink-400' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`font-medium py-2 ${
                  location.pathname === '/about' 
                    ? 'text-purple-700 dark:text-pink-400' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium py-2 ${
                  location.pathname === '/contact' 
                    ? 'text-purple-700 dark:text-pink-400' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                Contact
              </Link>
              <button 
                onClick={toggleTheme}
                className="flex items-center space-x-2 py-2"
              >
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </span>
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-yellow-400" />
                ) : (
                  <Moon className="h-5 w-5 text-purple-700" />
                )}
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;