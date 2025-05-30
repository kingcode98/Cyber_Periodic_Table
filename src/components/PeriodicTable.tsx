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

  // Create the periodic table grid with proper spacing
  const grid = useMemo(() => {
    const mainGrid: (CyberElement | null)[][] = Array(7).fill(null).map(() => Array(18).fill(null));
    const lanthanideGrid: (CyberElement | null)[][] = Array(2).fill(null).map(() => Array(15).fill(null));
    
    filteredElements.forEach(element => {
      const num = element.number;
      
      // Place elements in their correct positions based on periodic table layout
      if (num <= 2) {
        mainGrid[0][num === 1 ? 0 : 17] = element;
      } else if (num <= 4) {
        mainGrid[1][num === 3 ? 0 : 1] = element;
      } else if (num <= 10) {
        mainGrid[1][num + 8] = element;
      } else if (num <= 12) {
        mainGrid[2][num === 11 ? 0 : 1] = element;
      } else if (num <= 18) {
        mainGrid[2][num - 1] = element;
      } else if (num <= 36) {
        const row = Math.floor((num - 19) / 18) + 3;
        const col = (num - 19) % 18;
        mainGrid[row][col] = element;
      } else if (num <= 54) {
        const row = Math.floor((num - 37) / 18) + 4;
        const col = (num - 37) % 18;
        mainGrid[row][col] = element;
      } else if (num <= 57) {
        const row = 5;
        const col = (num - 55) % 18;
        mainGrid[row][col] = element;
      }
    });

    return { mainGrid, lanthanideGrid };
  }, [filteredElements]);

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
      
      <div className="max-w-[1400px] mx-auto mt-8">
        {/* Main periodic table grid */}
        <div className="grid grid-cols-18 gap-1">
          {grid.mainGrid.map((row, rowIndex) => (
            <React.Fragment key={`row-${rowIndex}`}>
              {row.map((element, colIndex) => (
                <div 
                  key={`cell-${rowIndex}-${colIndex}`} 
                  className={`aspect-square ${
                    // Add appropriate gaps for lanthanides and actinides
                    rowIndex === 5 && colIndex === 2 ? 'col-span-10' : ''
                  }`}
                >
                  {element && (
                    <ElementCell
                      element={element}
                      onClick={() => setSelectedElement(element)}
                      isSelected={selectedElement?.id === element.id}
                    />
                  )}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>

        {/* Gap between main table and lanthanides/actinides */}
        <div className="h-8"></div>

        {/* Lanthanides and Actinides */}
        <div className="grid grid-cols-15 gap-1 ml-[8.33%]">
          {grid.lanthanideGrid.map((row, rowIndex) => (
            <div key={`special-row-${rowIndex}`} className="grid grid-cols-15 gap-1">
              {row.map((element, colIndex) => (
                <div key={`special-cell-${rowIndex}-${colIndex}`} className="aspect-square">
                  {element && (
                    <ElementCell
                      element={element}
                      onClick={() => setSelectedElement(element)}
                      isSelected={selectedElement?.id === element.id}
                    />
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