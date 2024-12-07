import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '../components/LoadingScreen';
import BrandHero from '../components/home/BrandHero';
import CategoryGrid from '../components/home/CategoryGrid';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Newsletter from '../components/home/Newsletter';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <div className="bg-black">
        <BrandHero />
        <div className="max-w-7xl mx-auto px-4">
          <CategoryGrid />
          <FeaturedProducts />
          <Newsletter />
        </div>
      </div>
    </>
  );
}