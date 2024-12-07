import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <div className="relative h-[600px] mb-16">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1600"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-4">
            Future of <span className="text-purple-500">Streetwear</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover our latest collection of urban tech wear designed for the modern explorer.
          </p>
          <Button size="lg" className="flex items-center">
            Shop New Arrivals
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}