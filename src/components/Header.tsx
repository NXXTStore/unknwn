import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SearchBar from './SearchBar';

export default function Header() {
  const { state } = useCart();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-100" />
              ) : (
                <Menu className="h-6 w-6 text-gray-100" />
              )}
            </button>
            
            <div 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Flame className="h-8 w-8 text-purple-500" />
              <span className="text-2xl font-bold text-gray-100">BOLT</span>
            </div>
          </div>

          <div className="hidden md:flex flex-1 max-w-2xl mx-6">
            <SearchBar />
          </div>

          <div className="flex items-center space-x-6">
            <div 
              onClick={() => navigate('/checkout')}
              className="relative cursor-pointer"
            >
              <ShoppingCart className="h-6 w-6 text-gray-100" />
              <span className="absolute -top-2 -right-2 h-5 w-5 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                {state.items.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="space-y-2">
              {['New Arrivals', 'Hoodies', 'T-Shirts', 'Pants', 'Accessories'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-lg"
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="mt-4">
              <SearchBar />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}