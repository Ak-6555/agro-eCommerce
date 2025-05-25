import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import Mission from '../components/about/Mission';
import Team from '../components/about/Team';


const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - NR Agro';
  }, []);

  return (
    <div>
      <AboutHero/>
      <Mission />
      <Team />
      
      <section className="py-12 bg-primary-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Our Mission</h2>
          <p className="text-lg text-primary-100 mb-8">
            Together, we can revolutionize agriculture and create a more sustainable future. <br />
            Partner with us or join our team to be part of this important journey.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white text-primary-700 hover:bg-gray-100">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;