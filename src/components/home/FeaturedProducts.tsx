import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../ProductCard';
import { products } from '../../data/products';

export default function FeaturedProducts() {
  const navigate = useNavigate();
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <button 
          onClick={() => navigate('/products')}
          className="text-purple-500 hover:text-purple-400"
        >
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="cursor-pointer"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}