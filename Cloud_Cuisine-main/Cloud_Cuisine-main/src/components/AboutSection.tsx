import React from 'react';
import { Users, Utensils, Clock, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="section-title mb-6">About Our Cloud Kitchen</h2>
            <p className="text-gray-600 mb-6">
              CloudCuisine was founded in 2023 with a simple mission: to bring exceptional 
              restaurant-quality meals to your doorstep. Unlike traditional restaurants, 
              our cloud kitchen model allows us to focus entirely on creating remarkable 
              food specifically designed for delivery.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of professional chefs, led by Executive Chef Michael Chen, crafts each 
              dish with passion and precision. We source only the freshest ingredients from 
              local suppliers, ensuring that every meal that leaves our kitchen meets our 
              exacting standards.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-amber-50 p-4 rounded-lg">
                <Users className="text-amber-600 mb-2" size={24} />
                <h3 className="font-medium text-lg mb-1">Expert Chefs</h3>
                <p className="text-sm text-gray-600">Trained professionals with years of culinary experience</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <Utensils className="text-amber-600 mb-2" size={24} />
                <h3 className="font-medium text-lg mb-1">Quality Ingredients</h3>
                <p className="text-sm text-gray-600">Fresh, locally-sourced produce and premium meats</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <Clock className="text-amber-600 mb-2" size={24} />
                <h3 className="font-medium text-lg mb-1">Fast Delivery</h3>
                <p className="text-sm text-gray-600">Hot, fresh meals delivered quickly to your door</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <Award className="text-amber-600 mb-2" size={24} />
                <h3 className="font-medium text-lg mb-1">Safe Handling</h3>
                <p className="text-sm text-gray-600">Highest standards of food safety and hygiene</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Chef preparing food" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/6103188/pexels-photo-6103188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Food preparation" 
                className="absolute -bottom-10 -left-10 w-2/3 rounded-lg shadow-xl border-4 border-white hidden md:block"
              />
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg border hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">4.8</div>
                  <div>
                    <p className="font-medium">Excellent</p>
                    <p className="text-sm text-gray-500">500+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;