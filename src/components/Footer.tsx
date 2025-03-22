import React from 'react';
import { Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--primary)] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} DayZ Map Builder Guide
            </p>
            <p className="text-xs text-gray-300 mt-1">
              A comprehensive guide to creating custom maps for DayZ
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            
            <div className="flex items-center text-sm">
              <span className="mr-1">Made with</span>
              <Heart size={16} className="text-[var(--accent)] mx-1" />
              <span>for the DayZ community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
