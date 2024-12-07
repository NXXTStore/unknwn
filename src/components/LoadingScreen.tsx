import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 font-mono tracking-widest">
          UИКИШИ†
        </h1>
        <motion.div
          animate={{
            scaleX: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="h-0.5 w-24 bg-purple-500 mx-auto"
        />
      </motion.div>
    </motion.div>
  );
}