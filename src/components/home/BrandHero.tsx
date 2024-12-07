import React from 'react';
import { motion } from 'framer-motion';

export default function BrandHero() {
  return (
    <div className="h-screen relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/384761655.sd.mp4?s=383040d91428204fe28ce3e0336b382cb9f3c5af&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
      </motion.div>

      <div className="relative h-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-8xl md:text-9xl font-bold mb-6 text-white">UNKWN</h1>
          <div className="h-0.5 w-24 bg-purple-500 mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-gray-300 max-w-xl mx-auto px-4">
            Redefining streetwear for the digital age
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
            <span className="text-sm mb-2">Explore</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-0.5 h-12 bg-purple-500"
            />
          </div>
        </motion.button>
      </div>
    </div>
  );
}