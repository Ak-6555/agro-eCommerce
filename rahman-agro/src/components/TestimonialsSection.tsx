import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Rahman Agro's premium rice seeds have significantly increased my yield. Their technical support team is always available to help with any questions.",
    author: "Ashraful Islam",
    role: "Rice Farmer, Dhaka"
  },
  {
    id: 2,
    content: "The organic fertilizers from Rahman Agro have improved my soil quality tremendously. I've been using their products for 5 years and couldn't be happier with the results.",
    author: "Fatima Begum",
    role: "Vegetable Farmer, Chittagong"
  },
  {
    id: 3,
    content: "As a commercial farmer, I rely on consistent quality. Rahman Agro has never disappointed me with their reliable products and timely delivery.",
    author: "Mohammad Rahman",
    role: "Commercial Farmer, Sylhet"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handlePrev = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-green-800 relative overflow-hidden">
      <div className="absolute opacity-10 top-0 left-0 w-full h-full">
        <img
          src="https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-green-100">
            Hear from the farmers who have transformed their farms with our products.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute -top-10 -left-8 text-green-500 opacity-50">
            <Quote size={80} />
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-10 min-h-[300px] flex flex-col justify-between">
            <div className="mb-6">
              <p className="text-xl text-gray-700 italic">
                {testimonials[currentIndex].content}
              </p>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[currentIndex].author.charAt(0)}
                </div>
              </div>
              <div className="ml-4">
                <div className="text-lg font-medium text-gray-900">{testimonials[currentIndex].author}</div>
                <div className="text-base text-gray-600">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <div 
                  key={index} 
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors duration-200"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;