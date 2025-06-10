import React from 'react';
import { ChefHat, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat size={32} className="text-amber-400" />
              <span className="text-xl font-serif font-bold">CloudCuisine</span>
            </div>
            <p className="text-gray-400 mb-6">
              Delivering exceptional, restaurant-quality meals straight to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 hover:bg-amber-600 p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-amber-600 p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-amber-600 p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-amber-400 transition-colors">Menu</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-amber-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Online Ordering</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Food Delivery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Catering</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Corporate Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact Info</h3>
            <address className="not-italic text-gray-400">
              <p>123 Culinary Boulevard</p>
              <p>Foodie District, FC 12345</p>
              <p className="mt-3">(555) 123-4567</p>
              <p>info@cloudcuisine.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {currentYear} CloudCuisine. All rights reserved.</p>
          <div className="flex mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;