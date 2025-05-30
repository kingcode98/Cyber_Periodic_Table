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
        rounded-sm
        p-1
        flex 
        flex-col 
        items-center
        justify-between 
        h-full
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
      <div className="text-[10px] self-start opacity-70">
        {element.number}
      </div>
      <div className="text-center flex-1 flex flex-col justify-center">
        <div className="text-xl font-bold leading-none">
          {element.symbol}
        </div>
        <div className="text-[8px] leading-tight mt-0.5 font-medium max-w-full overflow-hidden text-ellipsis">
          {element.name}
        </div>
      </div>
    </div>
  );
};

export default ElementCell;