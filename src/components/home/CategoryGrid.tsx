import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    name: 'Hoodies',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500',
  },
  {
    name: 'T-Shirts',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500',
  },
  {
    name: 'Pants',
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500',
  },
  {
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500',
  },
];

export default function CategoryGrid() {
  const navigate = useNavigate();

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="relative group cursor-pointer overflow-hidden rounded-lg"
            onClick={() => navigate(`/category/${category.name.toLowerCase()}`)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-xl font-bold text-white">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}