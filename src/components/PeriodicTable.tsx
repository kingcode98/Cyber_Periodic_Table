import React, { useState, useMemo } from 'react';
import ElementCell from './ElementCell';
import ElementDetail from './ElementDetail';
import SearchBar from './SearchBar';
import CategoryLegend from './CategoryLegend';
import { CyberElement, ElementCategory } from '../types';
import { cyberElements, categoryInfo } from '../data/elements';

const PeriodicTable: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<CyberElement | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ElementCategory | null>(null);
  
  const categories = useMemo(() => {
    return Object.values(ElementCategory);
  }, []);
  
  const filteredElements = useMemo(() => {
    return cyberElements.filter(element => {
      const matchesSearch = element.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            element.symbol.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? element.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Calculate the number of rows needed based on the total elements
  const numRows = Math.ceil(cyberElements.length / 8);

  // Organize elements into a grid
  const rows = useMemo(() => {
    const grid: (CyberElement | null)[][] = Array(numRows).fill(null).map(() => Array(8).fill(null));
    
    filteredElements.forEach((element) => {
      const rowIndex = Math.floor((element.number - 1) / 8);
      const colIndex = (element.number - 1) % 8;
      if (rowIndex >= 0 && rowIndex < numRows) {
        grid[rowIndex][colIndex] = element;
      }
    });
    
    return grid;
  }, [filteredElements, numRows]);

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        categoryInfo={categoryInfo}
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-4">
          {rows.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="grid grid-cols-8 gap-3">
              {row.map((element, colIndex) => (
                <div key={`cell-${rowIndex}-${colIndex}`} className="aspect-square">
                  {element ? (
                    <ElementCell
                      element={element}
                      onClick={() => setSelectedElement(element)}
                      isSelected={selectedElement?.id === element.id}
                    />
                  ) : (
                    <div className="h-full"></div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <CategoryLegend categories={categories} />
      
      {selectedElement && (
        <ElementDetail 
          element={selectedElement} 
          onClose={() => setSelectedElement(null)} 
        />
      )}
    </div>
  );
};

export default PeriodicTable;