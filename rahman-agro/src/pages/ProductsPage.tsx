/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import ProductCard from '../components/products/ProductCard';
import ProductHero from '../components/products/ProductHero';
import { DemoProducts } from '../data';
import ProductFilters from '../components/products/ProductFilters';

interface Product {
  productId: string;
  name: string;
  category: string;
  price: number;
  description: string;
  productImage: string;
  inStock: boolean;
}


const ProductsPage: React.FC = () => {
  const [selectedCategory,setSelectedCategory] = useState('All Products');
  const [selectedSort,setSelectedSort] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    document.title = 'Products - Rahman Agro';
  }, []);

  const [products] = useState<Product[]>(DemoProducts);


  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axiosInstance.get<Product[]>('/products');
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error('Failed to fetch products:', error);
  //     }
  //   };
  
  //   fetchProducts();
  // }, []);

  useEffect(() => {
    let filtered = [...products];
    
    // Apply category filter
    if (selectedCategory !== 'All Products') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Apply sorting
    // switch (selectedSort) {
    //   case 'newest':
    //     filtered.sort((a, b) => b.id - a.id);
    //     break;
    //   case 'price-low-high':
    //     filtered.sort((a, b) => a.price - b.price);
    //     break;
    //   case 'price-high-low':
    //     filtered.sort((a, b) => b.price - a.price);
    //     break;
    //   default:
    //     // 'featured' sorting - keep original order
    //     break;
    // }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, selectedSort]);

  return (
    <div>
      <ProductHero />
      
      <section className="py-12 md:py-12 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20">
          <ProductFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedSort={selectedSort}
            onSortChange={setSelectedSort}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.productId} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-green-700 text-white text-center">
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