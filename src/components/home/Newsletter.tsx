import React from 'react';
import Button from '../ui/Button';

export default function Newsletter() {
  return (
    <div className="bg-gray-900 rounded-lg p-8 mb-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Join the Movement</h2>
        <p className="text-gray-400 mb-6">
          Subscribe to our newsletter for exclusive drops, special offers, and urban culture news.
        </p>
        <form className="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 input-field"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </div>
  );
}