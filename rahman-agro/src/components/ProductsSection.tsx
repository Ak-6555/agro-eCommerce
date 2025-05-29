import React from 'react';
import ProductCard from './products/ProductCard';
import { DemoProducts } from '../data';

// interface Product {
//   productId: string;
//   name: string;
//   category: string;
//   price: number;
//   description: string;
//   productImage: string;
//   inStock: boolean;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     name: 'Premium Rice Seeds',
//     description: 'High-yield rice varieties specially developed for Bangladesh climate.',
//     image: 'https://images.pexels.com/photos/7625108/pexels-photo-7625108.jpeg',
//     category: 'Seeds'
//   },
//   {
//     id: 2,
//     name: 'Organic Fertilizers',
//     description: 'Eco-friendly fertilizers that improve soil health and crop yield.',
//     image: 'https://images.pexels.com/photos/6758233/pexels-photo-6758233.jpeg',
//     category: 'Fertilizers'
//   },
//   {
//     id: 3,
//     name: 'Plant Protection',
//     description: 'Effective pesticides and fungicides for crop protection.',
//     image: 'https://images.pexels.com/photos/5186869/pexels-photo-5186869.jpeg',
//     category: 'Pesticides'
//   },
//   {
//     id: 4,
//     name: 'Modern Farming Tools',
//     description: 'Quality agricultural equipment for efficient farming operations.',
//     image: 'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg',
//     category: 'Equipment'
//   }
// ];

const ProductsSection: React.FC = () => {

  // const [products, setProducts] = useState<Product[]>([]);


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

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Featured Products</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Discover our range of high-quality deshi cow products.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {DemoProducts?.slice(0, 6).map((product) => (
              <ProductCard key={product.productId} product={product} />
            ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/products" 
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