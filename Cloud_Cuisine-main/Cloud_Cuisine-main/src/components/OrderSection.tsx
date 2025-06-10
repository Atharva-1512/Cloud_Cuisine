import React, { useState } from 'react';
import { ShoppingBag, MapPin, Clock, ExternalLink } from 'lucide-react';

const OrderSection = () => {
  const [orderMethod, setOrderMethod] = useState<'direct' | 'partners'>('direct');
  
  return (
    <section id="order" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Place Your Order</h2>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600">
            Hungry? We're just a few clicks away. Choose your preferred ordering method
            and enjoy delicious food delivered to your doorstep.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-50 p-4 rounded-xl mb-10">
            <div className="grid grid-cols-2 gap-4">
              <button
                className={`py-4 rounded-lg font-medium flex items-center justify-center transition-all ${
                  orderMethod === 'direct'
                    ? 'bg-white shadow-md text-amber-700' 
                    : 'bg-transparent text-gray-500 hover:bg-white/50'
                }`}
                onClick={() => setOrderMethod('direct')}
              >
                <ShoppingBag className="mr-2" size={20} />
                Order Directly
              </button>
              <button
                className={`py-4 rounded-lg font-medium flex items-center justify-center transition-all ${
                  orderMethod === 'partners' 
                    ? 'bg-white shadow-md text-amber-700' 
                    : 'bg-transparent text-gray-500 hover:bg-white/50'
                }`}
                onClick={() => setOrderMethod('partners')}
              >
                <ExternalLink className="mr-2" size={20} />
                Delivery Partners
              </button>
            </div>
          </div>
          
          {orderMethod === 'direct' ? (
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h3 className="text-xl font-medium mb-6">Order Directly From Us</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-gray-700 mb-2">Delivery Address</label>
                  <input
                    type="text"
                    id="address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Street address"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      id="city"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-gray-700 mb-2">State</label>
                    <input
                      type="text"
                      id="state"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-gray-700 mb-2">ZIP Code</label>
                    <input
                      type="text"
                      id="zip"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="ZIP code"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="instructions" className="block text-gray-700 mb-2">Delivery Instructions (Optional)</label>
                  <textarea
                    id="instructions"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Any special instructions for delivery"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Proceed to Menu Selection
                </button>
              </form>
              
              <div className="mt-8 flex items-start border-t border-gray-200 pt-6">
                <div className="bg-amber-100 p-2 rounded-full mr-3">
                  <Clock className="text-amber-600" size={18} />
                </div>
                <div className="text-sm text-gray-600">
                  <p className="font-medium text-gray-800">Estimated Delivery Time: 30-45 minutes</p>
                  <p>Delivery times may vary based on your location and current order volume.</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h3 className="text-xl font-medium mb-6">Order Through Our Delivery Partners</h3>
              <p className="text-gray-600 mb-8">
                You can also order CloudCuisine through your favorite food delivery apps. 
                Click on any of the options below to place your order.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a href="#" className="border border-gray-200 rounded-lg p-4 text-center hover:border-amber-500 hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-600 font-bold">App1</span>
                  </div>
                  <h4 className="font-medium">DoorDash</h4>
                </a>
                <a href="#" className="border border-gray-200 rounded-lg p-4 text-center hover:border-amber-500 hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold">App2</span>
                  </div>
                  <h4 className="font-medium">Uber Eats</h4>
                </a>
                <a href="#" className="border border-gray-200 rounded-lg p-4 text-center hover:border-amber-500 hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-600 font-bold">App3</span>
                  </div>
                  <h4 className="font-medium">Grubhub</h4>
                </a>
              </div>
              
              <div className="mt-8 flex items-start border-t border-gray-200 pt-6">
                <div className="bg-amber-100 p-2 rounded-full mr-3">
                  <MapPin className="text-amber-600" size={18} />
                </div>
                <div className="text-sm text-gray-600">
                  <p className="font-medium text-gray-800">Service Area</p>
                  <p>We deliver within a 5-mile radius of our kitchen location. Delivery fees and 
                  minimum order requirements may vary by platform.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderSection;