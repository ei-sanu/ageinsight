import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-50 dark:bg-gray-900 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-purple-700 dark:text-pink-400 mb-4">AgeInsight</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Your ultimate age calculator with personalized recommendations based on your age group.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ei-sanu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-700 dark:hover:text-pink-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://x.com/SomeshR82674271"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-700 dark:hover:text-pink-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/somesh-biswal-b73576320"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-700 dark:hover:text-pink-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-700 dark:text-pink-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.somesh.social/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-pink-400 transition-colors flex items-center gap-1"
                >
                  Developer <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-pink-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-pink-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-pink-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-700 dark:text-pink-400 mb-4">Useful Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.india.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-pink-400 transition-colors flex items-center gap-1"
                >
                  Government of India <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://sarathi.parivahan.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-pink-400 transition-colors flex items-center gap-1"
                >
                  Driving License <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.incometax.gov.in/iec/foportal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-pink-400 transition-colors flex items-center gap-1"
                >
                  PAN Card <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} AgeInsight. Developed by <a
              href="https://www.somesh.social/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 dark:text-pink-400 hover:underline"
            >
              somesh.social
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
