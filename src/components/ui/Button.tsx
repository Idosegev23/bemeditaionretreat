'use client';

import React from 'react';
import Link from 'next/link';
import { ButtonProps } from '@/types';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
}) => {
  // Base styles for all buttons - עגלות בסיסית רק אם לא מועברת אחרת
  const hasCustomRounding = className.includes('rounded');
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium ${!hasCustomRounding ? 'rounded-md' : ''} border transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-desert-blue focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${className}
  `;

  // Variant styles
  const variantStyles = {
    primary: `
      bg-desert-blue text-warm-white border-desert-blue
      hover:bg-opacity-90 hover:shadow-md
      active:transform active:scale-95
    `,
    secondary: `
      bg-sand text-text-primary border-sand
      hover:bg-light-brown hover:shadow-md
      active:transform active:scale-95
    `,
    outline: `
      bg-transparent text-desert-blue border-desert-blue
      hover:bg-desert-blue hover:text-warm-white hover:shadow-md
      active:transform active:scale-95
    `,
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
  `.replace(/\s+/g, ' ').trim();

  // Handle smooth scroll for anchor links
  const handleClick = (e?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (href && href.startsWith('#') && e) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    if (onClick) {
      onClick();
    }
  };

  // If href is provided, render as Link
  if (href && !disabled) {
    if (href.startsWith('#')) {
      // For anchor links, use a regular anchor with smooth scroll
      return (
        <a
          href={href}
          className={buttonClasses}
          aria-label={ariaLabel}
          onClick={handleClick}
        >
          {children}
        </a>
      );
    } else {
      // For regular links, use Next.js Link
      return (
        <Link
          href={href}
          className={buttonClasses}
          aria-label={ariaLabel}
          onClick={handleClick}
        >
          {children}
        </Link>
      );
    }
  }

  // Render as button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button; 