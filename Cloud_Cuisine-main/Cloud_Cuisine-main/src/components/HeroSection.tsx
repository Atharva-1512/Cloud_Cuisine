import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-20"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl">
          <h5 className="text-amber-400 mb-2 font-medium tracking-wider">PREMIUM QUALITY FOOD</h5>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Restaurant-Quality Meals <br />
            <span className="text-amber-400">Delivered</span> To Your Door
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
            Experience gourmet cuisine crafted by expert chefs, delivered fresh 
            from our cloud kitchen to your home or office.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#menu" 
              className="btn-primary flex items-center justify-center sm:justify-start gap-2"
            >
              Explore Menu
              <ArrowRight size={18} />
            </a>
            <a 
              href="#about" 
              className="btn-secondary flex items-center justify-center sm:justify-start gap-2 border-white text-white"
            >
              Our Story
            </a>
          </div>
          
          <div className="flex items-center mt-12 space-x-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">200+</span>
              <span className="text-sm opacity-80">Daily Orders</span>
            </div>
            <div className="h-10 w-px bg-white/30"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">15+</span>
              <span className="text-sm opacity-80">Professional Chefs</span>
            </div>
            <div className="h-10 w-px bg-white/30"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">4.8</span>
              <span className="text-sm opacity-80">Customer Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;