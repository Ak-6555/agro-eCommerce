import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
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
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="relative">
              <div className="h-full bg-green-700 text-white p-8 lg:p-12">
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
                    <div className="bg-white p-3 rounded-full mr-4">
                      <MapPin size={24} className="text-green-700" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Our Location</h4>
                      <p className="text-white">
                        5 No. Daulatpur,Jagadishpur ,Bishwanath, Sylhet
                      </p>
                      <p className='pt-1' > ৫ নং দৌলতপুর ,জগদীশপুর, বিশ্বনাথ, সিলেট
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
                    <div className="bg-white p-3 rounded-full mr-4">
                      <Phone size={24} className="text-green-700" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Phone Number</h4>
                      <p className="text-white">
                        +880 1791344987
                      </p>
                      <p className="text-white">
                        +880 1306465739
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
                    <div className="bg-white p-3 rounded-full mr-4">
                      <Mail size={24} className="text-green-700" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Email Address</h4>
                      <p className="text-white">
                        rahmanagrofarm@gmail.com
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
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-green-500 rounded-full hidden lg:block"></div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-green-400 rounded-full opacity-20 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;