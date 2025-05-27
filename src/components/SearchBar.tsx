import React from 'react';
import { Search, X } from 'lucide-react';
import { ElementCategory } from '../types';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: ElementCategory | null;
  setSelectedCategory: (category: ElementCategory | null) => void;
  categories: ElementCategory[];
  categoryInfo: Record<ElementCategory, { color: string, hoverColor: string, textColor: string }>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
  categoryInfo
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="relative mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a term..."
          className="w-full bg-gray-800 text-white px-4 py-3 pl-12 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 transition-all"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm('')} 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <X size={18} />
          </button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            selectedCategory === null
              ? 'bg-white text-gray-900 font-medium'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          All Categories
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="px-3 py-1 rounded-full text-sm transition-colors"
            style={{
              backgroundColor: selectedCategory === category 
                ? categoryInfo[category].color
                : 'rgba(31, 41, 55, 0.5)',
              color: selectedCategory === category
                ? categoryInfo[category].textColor
                : '#d1d5db'
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;