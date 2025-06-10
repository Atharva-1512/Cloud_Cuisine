import React, { useState } from 'react';
import { faqs } from '../data/faqs';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Frequently Asked Questions</h2>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600">
            Find answers to common questions about our cloud kitchen services,
            delivery, and more.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href="#contact" className="btn-secondary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ faq }: { faq: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mb-4 border-b border-gray-200 pb-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium py-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="text-amber-600" size={20} />
        ) : (
          <ChevronDown className="text-amber-600" size={20} />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 pl-0 md:pl-4 animate-fadeIn">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQSection;