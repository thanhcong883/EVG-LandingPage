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
            <div className="relative group cursor-pointer">
              <span className="hover:text-primary transition-colors flex items-center gap-1">Products <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></span>
              <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 w-48 rounded">
                <a href="#cloud-server" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary">Cloud Server</a>
                <a href="#cdn" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary">Product CDN</a>
                <a href="#streaming" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary">Streaming Platform</a>
              </div>
            </div>
            <a href="#about" className="hover:text-primary transition-colors">About us</a>
            <div className="relative group cursor-pointer">
              <span className="hover:text-primary transition-colors flex items-center gap-1">Blog <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></span>
              <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 w-48 rounded">
                <a href="#tech-hub" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary">Tech Hub</a>
                <a href="#events" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary">Announcement & Event</a>
                <a href="#promotion" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary">Promotion</a>
              </div>
            </div>
            <a href="#support" className="hover:text-primary transition-colors">Support</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:block text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            Log in
          </a>
          <span className="text-gray-300">|</span>
          <div className="text-sm font-medium cursor-pointer flex items-center gap-1">
             EN/VI <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
          <a href="#" className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Dùng thử miễn phí
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
