import React from 'react';
import { CyberElement, categoryInfo } from '../types';

interface ElementCellProps {
  element: CyberElement;
  onClick: () => void;
  isSelected: boolean;
}

const ElementCell: React.FC<ElementCellProps> = ({ element, onClick, isSelected }) => {
  const categoryData = categoryInfo[element.category];
  
  return (
    <div
      onClick={onClick}
      className={`
        relative 
        cursor-pointer 
        rounded-lg 
        p-3 
        flex 
        flex-col 
        justify-between 
        h-24
        transition-all 
        duration-300 
        transform 
        ${isSelected ? 'scale-105 shadow-lg z-10' : 'hover:scale-105'} 
        overflow-hidden
      `}
      style={{
        backgroundColor: isSelected ? categoryData.hoverColor : categoryData.color,
        color: categoryData.textColor,
        boxShadow: isSelected ? `0 0 15px ${categoryData.color}` : 'none',
      }}
    >
      <div className="absolute top-1 right-2 text-xs opacity-70">
        {element.number}
      </div>
      <div className="text-2xl font-bold">{element.symbol}</div>
      <div className="text-xs truncate">{element.name}</div>
      <div className="absolute -bottom-2 -right-2 opacity-10 text-5xl font-bold">{element.symbol}</div>
    </div>
  );
};

export default ElementCell;