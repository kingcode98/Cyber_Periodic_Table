import React from 'react';
import { ElementCategory, categoryInfo } from '../types';

interface CategoryLegendProps {
  categories: ElementCategory[];
}

const CategoryLegend: React.FC<CategoryLegendProps> = ({ categories }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8 px-4">
      <h3 className="text-white text-sm mb-3 font-medium">Legend:</h3>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <div key={category} className="flex items-center">
            <div 
              className="w-4 h-4 rounded-sm mr-2"
              style={{ backgroundColor: categoryInfo[category].color }}
            ></div>
            <span className="text-gray-300 text-sm">{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryLegend;