import React from 'react';
import { CyberElement, categoryInfo } from '../types';
import { X } from 'lucide-react';

interface ElementDetailProps {
  element: CyberElement;
  onClose: () => void;
}

const ElementDetail: React.FC<ElementDetailProps> = ({ element, onClose }) => {
  const categoryData = categoryInfo[element.category];
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div 
        className="bg-gray-900 rounded-xl p-6 max-w-md w-full relative overflow-hidden border border-gray-800"
        style={{
          boxShadow: `0 0 25px ${categoryData.color}30`
        }}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="flex items-start mb-4">
          <div 
            className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-lg mr-4"
            style={{ 
              backgroundColor: categoryData.color,
              color: categoryData.textColor
            }}
          >
            <span className="text-3xl font-bold">{element.symbol}</span>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white">{element.name}</h2>
            <div 
              className="text-sm px-2 py-1 rounded-full inline-block mt-1"
              style={{ 
                backgroundColor: `${categoryData.color}30`,
                color: categoryData.color
              }}
            >
              {element.category}
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <p className="text-gray-300 leading-relaxed">
            {element.description}
          </p>
          
          {element.relatedTerms && element.relatedTerms.length > 0 && (
            <div className="mt-4">
              <h3 className="text-white font-medium mb-2">Related Terms</h3>
              <div className="flex flex-wrap gap-2">
                {element.relatedTerms.map(term => (
                  <span 
                    key={term}
                    className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {element.learnMoreUrl && (
            <a
              href={element.learnMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 rounded-lg text-white font-medium transition-colors"
              style={{ 
                backgroundColor: categoryData.color,
                color: categoryData.textColor
              }}
            >
              Learn More
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ElementDetail;