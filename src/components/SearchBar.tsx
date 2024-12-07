import React from 'react';
import { Search } from 'lucide-react';
import { useSearch } from '../context/SearchContext';

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className = '' }: SearchBarProps) {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <div className={`relative w-full ${className}`}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-gray-100 rounded-lg focus:ring-2 ring-purple-500 outline-none"
        placeholder="Search streetwear..."
      />
      <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
}