import React, { useState, useEffect } from 'react';
import { Menu, X, ChefHat } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <ChefHat size={32} className={`${isScrolled ? 'text-brand-red' : 'text-white'}`} />
          <span className={`text-xl font-serif font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            CloudCuisine
          </span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          <NavLinks isScrolled={isScrolled} />
        </div>
        
        <button 
          className={`md:hidden focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <NavLinks isMobile />
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ isScrolled = true, isMobile = false }: { isScrolled?: boolean; isMobile?: boolean }) => {
  const linkClass = isMobile 
    ? 'text-gray-800 hover:text-amber-600 transition-colors font-medium'
    : `${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-600 transition-colors font-medium`;
  
  return (
    <>
      <a href="#home" className={linkClass}>Home</a>
      <a href="#menu" className={linkClass}>Menu</a>
      <a href="#about" className={linkClass}>About</a>
      <a href="#testimonials" className={linkClass}>Testimonials</a>
      <a href="#contact" className={linkClass}>Contact</a>
      <a 
        href="#order" 
        className={isMobile 
          ? "bg-amber-600 text-white py-2 px-4 rounded-lg text-center"
          : "bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg transition-colors"
        }
      >
        Order Now
      </a>
    </>
  );
};

export default Header;