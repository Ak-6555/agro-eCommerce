import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Premium Rice Seeds',
    description: 'High-yield rice varieties specially developed for Bangladesh climate.',
    image: 'https://images.pexels.com/photos/7625108/pexels-photo-7625108.jpeg',
    category: 'Seeds'
  },
  {
    id: 2,
    name: 'Organic Fertilizers',
    description: 'Eco-friendly fertilizers that improve soil health and crop yield.',
    image: 'https://images.pexels.com/photos/6758233/pexels-photo-6758233.jpeg',
    category: 'Fertilizers'
  },
  {
    id: 3,
    name: 'Plant Protection',
    description: 'Effective pesticides and fungicides for crop protection.',
    image: 'https://images.pexels.com/photos/5186869/pexels-photo-5186869.jpeg',
    category: 'Pesticides'
  },
  {
    id: 4,
    name: 'Modern Farming Tools',
    description: 'Quality agricultural equipment for efficient farming operations.',
    image: 'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg',
    category: 'Equipment'
  }
];

const ProductsSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Featured Products</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Discover our range of high-quality agricultural products designed to enhance your farming productivity.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {product.category}
                </div>
              </div>
              <div className="p-5 flex flex-col h-[165px]">
                <h3 className="text-[18px] font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-[14px] text-gray-600">{product.description}</p>
                <div className="mt-auto">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                   12000 BDT
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-3 md:text-lg md:px-8"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;