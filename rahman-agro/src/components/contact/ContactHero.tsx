import React from 'react';
import { motion } from 'framer-motion';

const ContactHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-black/90 to-black/90 text-white pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('./images/bg.png')] bg-cover bg-center opacity-15"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-lg text-primary-100 mb-8">
            Have questions or want to learn more about our services? 
            We're here to help. Reach out to our team today.
          </p>
        </motion.div>
      </div>
      
    </section>
  );
};

export default ContactHero;