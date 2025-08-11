import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SK</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              SAIKIRAN
            </span>
          </div>

          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-gray-300">
              © {new Date().getFullYear()} SAIKIRAN. All Rights Reserved.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using</span>
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                React
              </a>
              <span>&</span>
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                Tailwind CSS
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;