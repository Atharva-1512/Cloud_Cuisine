import React from 'react';
import { testimonials } from '../data/testimonials';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-stone-50 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">What Our Customers Say</h2>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600">
            Don't just take our word for it. Here's what customers are saying about their 
            CloudCuisine experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="mt-16 text-center bg-white rounded-xl p-8 shadow-md max-w-3xl mx-auto relative">
          <Quote className="text-amber-200 absolute -top-6 left-1/2 transform -translate-x-1/2" size={72} />
          <h3 className="text-2xl font-medium mb-6">Ready to experience it yourself?</h3>
          <p className="text-gray-600 mb-8">
            Join thousands of satisfied customers who have made CloudCuisine their 
            preferred choice for delicious, restaurant-quality meals delivered to their doorstep.
          </p>
          <a href="#order" className="btn-primary">
            Order Now
          </a>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-200 rounded-full opacity-20"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-300 rounded-full opacity-20"></div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start mb-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm">{testimonial.date}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${i < testimonial.rating ? 'text-amber-400' : 'text-gray-300'}`}
            fill={i < testimonial.rating ? '#fbbf24' : 'none'}
          />
        ))}
      </div>
      
      <p className="text-gray-600">"{testimonial.comment}"</p>
    </div>
  );
};

export default TestimonialsSection;