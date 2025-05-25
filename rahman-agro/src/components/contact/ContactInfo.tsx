import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const infoVariants = {
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
    <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      
      <div className="space-y-6 mb-8">
        <motion.div 
          className="flex items-start"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={infoVariants}
        >
          <div className="bg-primary-100 p-3 rounded-full mr-4">
            <MapPin size={24} className="text-primary-600" />
          </div>
          <div>
            <h4 className="text-lg font-medium mb-1">Our Location</h4>
            <p className="text-secondary-700">
              123 Agriculture Road, Dhaka, Bangladesh
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-start"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={infoVariants}
        >
          <div className="bg-primary-100 p-3 rounded-full mr-4">
            <Phone size={24} className="text-primary-600" />
          </div>
          <div>
            <h4 className="text-lg font-medium mb-1">Phone Number</h4>
            <p className="text-secondary-700">
              +880 1234 567890
            </p>
            <p className="text-secondary-700">
              +880 9876 543210
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-start"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={infoVariants}
        >
          <div className="bg-primary-100 p-3 rounded-full mr-4">
            <Mail size={24} className="text-primary-600" />
          </div>
          <div>
            <h4 className="text-lg font-medium mb-1">Email Address</h4>
            <p className="text-secondary-700">
              info@nragro.com.bd
            </p>
            <p className="text-secondary-700">
              support@nragro.com.bd
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-start"
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={infoVariants}
        >
          <div className="bg-primary-100 p-3 rounded-full mr-4">
            <Clock size={24} className="text-primary-600" />
          </div>
          <div>
            <h4 className="text-lg font-medium mb-1">Working Hours</h4>
            <p className="text-secondary-700">
              Monday - Friday: 9:00 AM - 6:00 PM
            </p>
            <p className="text-secondary-700">
              Saturday: 9:00 AM - 2:00 PM
            </p>
          </div>
        </motion.div>
      </div>
      
      <div>
        <h4 className="text-lg font-medium mb-3">Follow Us</h4>
        <div className="flex space-x-4">
          <a href="#" className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-200">
            <Facebook size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-200">
            <Twitter size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-200">
            <Instagram size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-200">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;