/* import React, { useState } from 'react';
import { menuItems, categories } from '../data/menuItems';
import { Star } from 'lucide-react';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <section id="menu" className="py-20 bg-stone-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Our Delicious Menu</h2>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600">
            Explore our diverse menu of chef-crafted dishes made with fresh, high-quality ingredients.
            From comfort food classics to innovative fusion creations.
          </p>
        </div>
        
        <div className="mb-10">
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
            <div className="flex overflow-x-auto pb-2 gap-2 md:gap-4">
              <CategoryButton 
                category="All" 
                active={activeCategory === 'All'} 
                onClick={() => setActiveCategory('All')} 
              />
              {categories.map(category => (
                <CategoryButton 
                  key={category}
                  category={category} 
                  active={activeCategory === category}
                  onClick={() => setActiveCategory(category)} 
                />
              ))}
            </div>
            
            <div className="relative min-w-[250px]">
              <input
                type="text"
                placeholder="Search menu..."
                className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map(item => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No menu items found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

const CategoryButton = ({ 
  category, 
  active, 
  onClick 
}: { 
  category: string; 
  active: boolean; 
  onClick: () => void;
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
        active 
          ? 'bg-amber-600 text-white' 
          : 'bg-white text-gray-700 hover:bg-amber-100'
      }`}
      onClick={onClick}
    >
      {category}
    </button>
  );
};

const FoodCard = ({ item }: { item: any }) => {
  return (
    <div className="food-card group">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="food-card-img group-hover:scale-105 transition-transform duration-500"
        />
        {item.popular && (
          <div className="absolute top-3 right-3 bg-amber-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
            <Star size={12} className="mr-1" fill="white" />
            Popular
          </div>
        )}
        {item.vegetarian && (
          <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
            Vegetarian
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-lg">{item.name}</h3>
          <span className="font-bold text-amber-700">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="category-badge bg-gray-100 text-gray-700">
            {item.category}
          </span>
          <button className="text-amber-700 font-medium hover:text-amber-800 text-sm">
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuSection; */


import React, { useState } from 'react';
import { menuItems, categories } from '../data/menuItems';
import { Star } from 'lucide-react';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <section id="menu" className="py-20 bg-stone-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Our Delicious Menu</h2>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600">
            Explore our diverse menu of chef-crafted dishes made with fresh, high-quality ingredients.
            From comfort food classics to innovative fusion creations.
          </p>
        </div>
        
        <div className="mb-10">
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
            <div className="flex overflow-x-auto pb-2 gap-2 md:gap-4">
              <CategoryButton 
                category="All" 
                active={activeCategory === 'All'} 
                onClick={() => setActiveCategory('All')} 
              />
              {categories.map(category => (
                <CategoryButton 
                  key={category}
                  category={category} 
                  active={activeCategory === category}
                  onClick={() => setActiveCategory(category)} 
                />
              ))}
            </div>
            
            <div className="relative min-w-[250px]">
              <input
                type="text"
                placeholder="Search menu..."
                className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                {item.popular && (
                  <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 rounded-full text-sm">
                    Popular
                  </div>
                )}
                {item.vegetarian && (
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
                    Veg
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <span className="text-xl font-bold text-amber-600">₹{(item.price * 10).toFixed(0)}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <button className="w-full bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No menu items found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

const CategoryButton = ({ 
  category, 
  active, 
  onClick 
}: { 
  category: string; 
  active: boolean; 
  onClick: () => void;
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
        active 
          ? 'bg-amber-600 text-white' 
          : 'bg-white text-gray-700 hover:bg-amber-100'
      }`}
      onClick={onClick}
    >
      {category}
    </button>
  );
};

export default MenuSection;