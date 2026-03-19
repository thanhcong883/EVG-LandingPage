import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-border bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="font-bold text-xl text-primary flex items-center gap-2">
            <img src={logo} alt="EVG Cloud" className="h-8" />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#products" className="hover:text-primary transition-colors">Products</a>
            <a href="#solutions" className="hover:text-primary transition-colors">Solutions</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#resources" className="hover:text-primary transition-colors">Resources</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:block text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            Sign In
          </a>
          <a href="#" className="bg-[#155eef] hover:bg-[#004ecc] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Console
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
