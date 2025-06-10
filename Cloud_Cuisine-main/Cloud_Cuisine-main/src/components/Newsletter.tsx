import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-brand-red py-12 text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-serif font-medium mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-white/80">
              Stay updated with new menu items, special offers, and promotions.
            </p>
          </div>
          
          <div className="w-full md:w-auto">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg text-gray-800 w-full sm:w-64 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;