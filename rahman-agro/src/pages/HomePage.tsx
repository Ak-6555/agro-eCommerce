import React from 'react'
import Hero from '../components/Hero'
import ProductsSection from '../components/ProductsSection'
import AboutSection from '../components/AboutSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'

const HomePage: React.FC = () => {
  return (
    <div className="font-sans">
      <Hero />
      <ProductsSection />
      <AboutSection />
      <div className="pb-20 -mt-8 bg-gray-50 grid grid-cols-2">
        <p></p>
       <div className='flex justify-center'>
          <a
            href="/about"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
          >
            Learn more about us
          </a>
       </div>
      </div>
      <TestimonialsSection />
      <div className="text-center py-8 md:pb-10 md:pt-24 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
          Have questions or need assistance? We're here to help!
        </p>
      </div>
     <div className='pb-16 bg-gray-50'> <ContactSection /></div>
    </div>
  )
}

export default HomePage
