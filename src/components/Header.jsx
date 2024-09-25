import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors">
            <Camera className="h-8 w-8 animate-pulse" />
            <span className="text-2xl font-bold">Photo Restore</span>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/restore"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              New Image
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-gray-300 transition-colors"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md">
          <MobileNavLink to="/">Home</MobileNavLink>
          <MobileNavLink to="/about">About</MobileNavLink>
          <MobileNavLink to="/pricing">Pricing</MobileNavLink>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-white transition-colors duration-300"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children }) => (
  <Link
    to={to}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300"
  >
    {children}
  </Link>
);

export default Header;