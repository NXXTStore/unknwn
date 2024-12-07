import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';
import Button from './ui/Button';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="card p-4 flex flex-col">
      <div className="relative group">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-gray-100 mb-2">{product.title}</h3>
      
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < product.rating
                ? 'text-purple-500 fill-current'
                : 'text-gray-600'
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-400 text-sm line-clamp-2 mb-4 flex-grow">
        {product.description}
      </p>
      
      <div className="mt-auto">
        <div className="text-xl font-bold text-purple-500 mb-2">
          ${product.price.toFixed(2)}
        </div>
      </div>
    </div>
  );
}