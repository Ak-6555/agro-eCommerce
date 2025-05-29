import React from 'react';
import { motion } from 'framer-motion';

const Map: React.FC = () => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        {/* Use a placeholder image instead of an actual map iframe for the demo */}
        <img 
          src="https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Map location"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay with map pin */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-primary-600 text-white px-4 py-2 rounded-lg shadow-lg">
            <span className="font-medium">Rahman Agro Headquarters</span>
          </div>
        </div>
        
        {/* Note about actual implementation */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center text-sm">
          In a production environment, this would be replaced with an actual Google Maps or OpenStreetMap integration
        </div>
      </div>
    </motion.div>
  );
};

export default Map;