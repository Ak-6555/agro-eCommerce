import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-green-900 pt-20">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg"
          alt="Agriculture field"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-700 mix-blend-multiply" />
      </div>
      <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block">Sustainable Farming</span>
            <span className="block text-green-300">For a Better Tomorrow</span>
          </h1>
          <p className="mt-6 max-w-lg text-xl text-white sm:max-w-3xl">
            Rahman Agro is a leading provider of high-quality agricultural products and services in Bangladesh. We're committed to supporting farmers with innovative solutions for sustainable farming.
          </p>
          <div className="mt-10 sm:flex">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
              >
                Explore Products
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="text-white w-full h-12 md:h-20 lg:h-24"
          viewBox="0 0 1440 96"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 96L60 80C120 64 240 32 360 21.3C480 10.7 600 21.3 720 37.3C840 53.3 960 74.7 1080 74.7C1200 74.7 1320 53.3 1380 42.7L1440 32V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V96Z" />
        </svg>
      </div> */}
    </div>
  );
};

export default Hero;