import React, { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactSection from '../components/ContactSection';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us - Rahman Agro';
  }, []);

  return (
    <div>
      <ContactHero />
      
      <section className="py-12 md:py-12 bg-gray-50">
      <ContactSection />
      </section>
      
      <section className=" bg-green-600 text-white text-center">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57935.0361721087!2d91.61481375661639!3d24.831733596822247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751033c51fa2355%3A0x12ba2541c5be37f1!2sDaulatpur!5e0!3m2!1sen!2sbd!4v1748547291826!5m2!1sen!2sbd" width="100%" height="650" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
      
      <section className="py-12 bg-green-700 text-white text-center">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Need Fast Support?</h2>
          <p className="text-lg text-primary-100 mb-8">
            Call our customer support team at <span className="font-bold"> +880 1791344987 </span> 
            for immediate assistance with any of your queries or requirements.
          </p>
          <a href="tel:+8801791344987" className="inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white text-primary-700 hover:bg-gray-100">
            Call Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;