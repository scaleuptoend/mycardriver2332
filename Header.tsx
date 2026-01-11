
import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white pt-10 pb-6 border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
        <div 
          className="relative group cursor-pointer transition-transform duration-300 hover:scale-105" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Logo className="h-20 md:h-24" />
          <div className="sr-only">
            <h1>MyCar Driver - Chennai Acting Driver Service</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
