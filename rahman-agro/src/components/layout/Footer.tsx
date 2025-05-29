import React from 'react';
import { Leaf, Mail, PhoneCall, MapPin, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-2xl font-bold">Rahman Agro</span>
            </div>
            <p className="text-gray-400">
              Providing high-quality agricultural products and services to farmers across Bangladesh since 2001.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-green-700 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                </svg>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-green-700 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-green-700 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-green-400 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-400 hover:text-green-400 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-green-400 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Cows
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Goats
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Fishes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">5 No. Daulatpur,Jagadishpur ,Bishwanath, Sylhet</p>
                  <p className="text-gray-400 pt-1">৫ নং দৌলতপুর ,জগদীশপুর, বিশ্বনাথ, সিলেট</p>
                </div>
              </li>
              <li className="flex">
                <PhoneCall className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">+880 1791344987</p>
                  <p className="text-gray-400 pt-1">+880 1306465739</p>
                </div>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">rahmanagrofarm@gmail.com</span>
              </li>
            </ul>
                     </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Rahman Agro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;