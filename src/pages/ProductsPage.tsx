import React, { useState, useEffect } from 'react';

import ProductCard from '../components/products/ProductCard';
import ProductHero from '../components/products/ProductHero';
import ProductFilters from '../components/products/ProductFilters';

const products = [
  {
    id: 1,
    name: "Premium Rice Seeds",
    category: "Seeds",
    price: 250000,
    image: "https://images.pexels.com/photos/1359321/pexels-photo-1359321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "High-yield rice seeds perfect for Bangladesh's climate. Disease-resistant and drought-tolerant variety."
  },
  {
    id: 2,
    name: "Organic Fertilizer",
    category: "Fertilizers",
    price: 180000,
    image: "https://images.pexels.com/photos/9976767/pexels-photo-9976767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "100% organic fertilizer enriched with essential nutrients for healthy crop growth."
  },
  {
    id: 3,
    name: "Bio Pesticide",
    category: "Pesticides",
    price: 190200,
    image: "https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Eco-friendly pesticide that effectively controls pests while being safe for the environment."
  },
  {
    id: 4,
    name: "Garden Tool Set",
    category: "Tools",
    price: 3500,
    image: "https://images.pexels.com/photos/2736497/pexels-photo-2736497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Complete set of essential gardening tools made from high-quality materials."
  },
  {
    id: 5,
    name: "Water Pump",
    category: "Equipment",
    price: 15000,
    image: "https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Efficient water pump system for irrigation, featuring low power consumption."
  },
  {
    id: 6,
    name: "Wheat Seeds",
    category: "Seeds",
    price: 1800,
    image: "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Premium quality wheat seeds with high germination rate and disease resistance."
  },
  {
    id: 7,
    name: "NPK Fertilizer",
    category: "Fertilizers",
    price: 200200,
    image: "https://images.pexels.com/photos/15013397/pexels-photo-15013397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Balanced NPK fertilizer for optimal plant growth and development."
  },
  {
    id: 8,
    name: "Sprayer",
    category: "Equipment",
    price: 400500,
    image: "https://images.pexels.com/photos/5528994/pexels-photo-5528994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Professional-grade sprayer with adjustable nozzle and large capacity tank."
  }
];

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [selectedSort, setSelectedSort] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    document.title = 'Shop - NR Agro';
  }, []);

  useEffect(() => {
    let filtered = [...products];
    
    // Apply category filter
    if (selectedCategory !== 'All Products') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Apply sorting
    switch (selectedSort) {
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'price-low-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        // 'featured' sorting - keep original order
        break;
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, selectedSort]);

  return (
    <div>
      <ProductHero />
      
      <section className="py-12 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <ProductFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedSort={selectedSort}
            onSortChange={setSelectedSort}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-[#16A34A] text-white text-center">
        <div className=" mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Need Help Choosing?</h2>
          <p className="text-lg text-primary-100 mb-8">
            Our agricultural experts are here to help you select the right products for your needs.
            Get in touch with us for personalized recommendations.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white text-primary-700 ">
            Contact Our Experts
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;