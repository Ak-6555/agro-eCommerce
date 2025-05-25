import React, { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Map from '../components/contact/Map';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us - NR Agro';
  }, []);

  return (
    <div>
      <ContactHero />
      
      <section className="py-12 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      
      <section className=" bg-primary-600 text-white text-center">
        <div className="">
          <Map />
        </div>
      </section>
      
      <section className="py-12 bg-primary-600 text-white text-center">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Need Fast Support?</h2>
          <p className="text-lg text-primary-100 mb-8">
            Call our customer support team at <span className="font-bold">+880 1234 567890</span> 
            for immediate assistance with any of your queries or requirements.
          </p>
          <a href="tel:+8801234567890" className="inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white text-primary-700 hover:bg-gray-100">
            Call Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;