import React from 'react';
import { Users, Award, ShieldCheck } from 'lucide-react';

interface Feature {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    name: 'Expert Team',
    description: 'Our team of agricultural experts provides customized solutions for your farming needs.',
    icon: <Users className="h-10 w-10 text-green-600" />
  },
  {
    name: 'Quality Assurance',
    description: 'All our products undergo rigorous quality checks to ensure the best results for farmers.',
    icon: <Award className="h-10 w-10 text-green-600" />
  },
  {
    name: 'Safe Products',
    description: 'We prioritize eco-friendly products that are safe for farmers, consumers, and the environment.',
    icon: <ShieldCheck className="h-10 w-10 text-green-600" />
  },

];

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/aboutus.jpg"
                alt="Farmer in the field"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="absolute -bottom-[100px] -right-6 bg-white rounded-lg shadow-lg p-6 max-w-xs hidden md:block">
              <p className="text-2xl font-bold text-green-700">20+ Years</p>
              <p className="text-gray-600">Serving Bangladesh's Agriculture Sector</p>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-[40px] mb-7">
                About <span className='text-green-600'>Rahman Agro</span>
              </h2>
              <p className="text-lg text-gray-600">
                Founded in 2001, Rahman Agro has been at the forefront of agricultural innovation in Bangladesh. 
                Our mission is to enhance agricultural productivity while promoting sustainable farming practices that preserve our environment for future generations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                      <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;