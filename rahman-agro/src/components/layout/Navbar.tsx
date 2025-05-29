import React, { useState } from 'react';
import { Menu, X, ChevronDown, PhoneCall } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[100px]">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
            <div className="w-20 h-20">  
              <img src="/images/logoRahmanAgro.PNG" className='w-full h-full object-contain' alt="this is the logo" />
              </div>
              <span className="ml-2 text-[30px] font-extrabold tracking-tight text-green-600">Rahman Agro</span>
            </div>
            <div className="hidden md:ml-[100px] md:flex md:space-x-8">
              <a href="/" 
              className={`border-[#49b848] uppercase text-[#222D23] inline-flex items-center px-1 pt-1 border-b-1 text-base font-semibold ${location.pathname === "/" ? 'border-[#49b848] border-b-2' : ''}`}>
                Home
              </a>
              <div className="relative">
                <a href="/products" 
                  className={`text-[#222D23] uppercase hover:text-[#222D23] inline-flex items-center px-1 pt-1 border-b-1 text-base font-semibold ${location.pathname === "/products"? 'border-[#49b848] border-b-2' : ''}`}>
                  Products
                  {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
                </a>
                {/* {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-base text-[#222D23] hover:bg-gray-100">Seeds</a>
                      <a href="#" className="block px-4 py-2 text-base text-[#222D23] hover:bg-gray-100">Fertilizers</a>
                      <a href="#" className="block px-4 py-2 text-base text-[#222D23] hover:bg-gray-100">Pesticides</a>
                      <a href="#" className="block px-4 py-2 text-base text-[#222D23] hover:bg-gray-100">Equipment</a>
                    </div>
                  </div>
                )} */}
              </div>
            
              <a href="/about" 
              className={`border-transparent uppercase text-[#222D23] hover:border-green-300 hover:text-[#222D23] inline-flex items-center px-1 pt-1 border-b-2 text-base font-semibold ${location.pathname === "/about" ? 'border-[#49b848] border-b-2' : ''}`}>
                About Us
              </a>
              <a href="/contact" 
              className={`border-transparent uppercase text-[#222D23] hover:border-green-300 hover:text-[#222D23] inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium ${location.pathname === "/contact" ? 'border-[#49b848] border-b-2' : ''}`}>
                Contact
              </a>
            </div>
          </div>
          {/* <div className="hidden md:flex items-center gap-2">
            <Link to="/signup"  className="inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
             Sign up
            </Link>
            <Link to="/login" className="inline-flex items-center justify-center px-6 py-2  border-transparent rounded-full shadow-sm text-base hover:text-white font-medium text-green-600 border border-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
             Login
            </Link>
          </div> */}
          <div className="flex my-auto">
                <PhoneCall className="h-12 w-12 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#222D23] font-semibold">+880 1791344987</p>
                  <p className="text-[#222D23] pt-1 font-semibold">+880 1306465739</p>
                </div>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="bg-green-50 border-green-500 text-green-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Home
            </a>
            <button 
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Products
              <ChevronDown className="ml-1 inline-block h-4 w-4" />
            </button>
            {dropdownOpen && (
              <div className="pl-6">
                <a href="#" className="block pl-3 pr-4 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 text-base">Seeds</a>
                <a href="#" className="block pl-3 pr-4 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 text-base">Fertilizers</a>
                <a href="#" className="block pl-3 pr-4 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 text-base">Pesticides</a>
                <a href="#" className="block pl-3 pr-4 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 text-base">Equipment</a>
              </div>
            )}
            <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Services
            </a>
            <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              About Us
            </a>
            <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Contact
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <button className="flex-shrink-0 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;