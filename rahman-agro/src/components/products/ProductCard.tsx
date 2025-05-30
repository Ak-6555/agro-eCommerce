import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: {
    productId: string;
    name: string;
    category: string;
    price: number;
    description: string;
    productImage: string;
    inStock: boolean;
  };

}


const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      className="bg-white rounded shadow-md overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
        <img
          src={`/images/goru/${product.productId}.jpg`}
          alt="Product"
          className="w-full min-h-[290px] object-cover object-center scale-105 group-hover:scale-[1.15] transition-transform duration-500"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white text-primary-600 px-6 py-2 rounded-full font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-primary-600 hover:text-white">
            View Details
          </button>
        </div> */}
      </div>

      <div className="p-6">
        <div className="mb-4">
          {/* <span className="text-sm font-medium text-primary-600 mb-2 block">
            {product.category}
          </span> */}
          <h3 className="text-xl font-bold mb-2">{product.name}</h3>
          <p className="text-secondary-700 text-sm line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-black">
            {"000.00"} BDT
          </span>
          <button className="inline-flex items-center justify-center px-4 py-2 rounded font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#16A34A] text-white hover:bg-primary-600 focus:ring-primary-600">
            <ShoppingCart size={18} className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;