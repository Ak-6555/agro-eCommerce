import React from 'react'
import Hero from '../components/Hero'
import ProductsSection from '../components/ProductsSection'
import AboutSection from '../components/AboutSection'
import TestimonialsSection from '../components/TestimonialsSection'
import NewsSection from '../components/NewsSection'
import ContactSection from '../components/ContactSection'

const HomePage: React.FC = () => {
  return (
    <div className="font-sans">
      <Hero />
      <ProductsSection />
      <AboutSection />
      <TestimonialsSection />
      <NewsSection />
      <ContactSection />
    </div>
  )
}

export default HomePage
