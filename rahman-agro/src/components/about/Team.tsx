import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Ahmed Rahman',
    position: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'With over 20 years of experience in agriculture, Ahmed leads our company with vision and passion.'
  },
  {
    name: 'Fatima Khan',
    position: 'Chief Agricultural Officer',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Fatima brings her expertise in sustainable farming practices and agricultural innovation to our team.'
  },
  {
    name: 'Rahim Chowdhury',
    position: 'Head of Research',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Leading our research initiatives, Rahim works to develop cutting-edge agricultural solutions.'
  },
  {
    name: 'Nusrat Jahan',
    position: 'Operations Director',
    image: 'https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Nusrat ensures the smooth operation of our facilities and the delivery of our services.'
  }
];


const Team: React.FC = () => {
  return (
    <section className="py-12 pb bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Leadership Team</h2>
          <p className="text-lg text-secondary-700">
            Meet the passionate experts driving our mission to transform agriculture 
            through innovation, expertise, and dedication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.name}
              className="card overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-[360px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
              </div>
              <div className="pt-3">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                <p className="text-secondary-700">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;