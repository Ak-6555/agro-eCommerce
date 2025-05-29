import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  bordered?: boolean;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  padding = 'md', 
  bordered = true,
  hoverable = false
}) => {
  const paddingMap = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-7'
  };
  
  const borderClass = bordered ? 'border border-gray-200' : '';
  const hoverClass = hoverable ? 'transition duration-300 hover:shadow-lg' : '';
  
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-sm 
        ${paddingMap[padding]} 
        ${borderClass} 
        ${hoverClass} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;