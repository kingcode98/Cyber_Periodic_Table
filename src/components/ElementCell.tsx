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
        p-2
        flex 
        flex-col 
        justify-between 
        h-28
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
      <div className="text-xs opacity-70 absolute top-1 left-2">
        {element.number}
      </div>
      <div className="text-center mt-4">
        <div className="text-2xl font-bold">{element.symbol}</div>
        <div className="text-[10px] leading-tight mt-1 font-medium">
          {element.name}
        </div>
      </div>
    </div>
  );
};

export default ElementCell;