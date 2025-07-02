import React from 'react';
import { ContainerProps } from '@/types';

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
}) => {
  // Base styles for container
  const baseStyles = 'mx-auto px-4 sm:px-6 lg:px-8';

  // Size variants
  const sizeStyles = {
    sm: 'max-w-2xl',      // ~672px
    md: 'max-w-4xl',      // ~896px  
    lg: 'max-w-6xl',      // ~1152px
    xl: 'max-w-7xl',      // ~1280px
  };

  const containerClasses = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
};

export default Container; 