import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Award } from 'lucide-react';

const Mission: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      }
    })
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Vision</h2>
          <p className="text-lg text-secondary-700">
            At Rahman Agro, we're dedicated to transforming the agricultural landscape through sustainable practices,
            innovation, and community empowerment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <motion.div 
            className="card p-8"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
          >
            <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Target size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Our Mission</h3>
            <p className="text-secondary-700">
              To provide innovative, sustainable agricultural solutions that enhance productivity
              while preserving natural resources and promoting environmental sustainability.
              We aim to empower farmers with knowledge and technology to improve their livelihoods.
            </p>
          </motion.div>
          
          <motion.div 
            className="card p-8"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
          >
            <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Lightbulb size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Our Vision</h3>
            <p className="text-secondary-700">
              To be the leading agricultural company in Bangladesh, recognized for our commitment to
              sustainability, innovation, and excellence. We envision a future where sustainable
              farming practices are the norm, ensuring food security and environmental harmony.
            </p>
          </motion.div>
          
          <motion.div 
            className="card p-8"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
          >
            <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Award size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Our Values</h3>
            <p className="text-secondary-700">
              Integrity, Innovation, Sustainability, and Excellence guide everything we do.
              We believe in ethical business practices, continuous improvement, environmental
              stewardship, and delivering superior quality in all our products and services.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;