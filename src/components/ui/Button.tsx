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
  // Base styles for all buttons
  const hasCustomRounding = className.includes('rounded');
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium ${!hasCustomRounding ? 'rounded-full' : ''} border transition-all duration-200 btn-text-outline
    focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${className}
  `;

  // Updated variant styles with Afroz color scheme (teal background, orange text)
  const variantStyles = {
    primary: `
      bg-teal-500 text-orange-500 border-teal-500
      hover:bg-teal-600 hover:shadow-md
      active:transform active:scale-95
    `,
    secondary: `
      bg-teal-500/10 text-orange-500 border-teal-500
      hover:bg-teal-500/20 hover:shadow-md
      active:transform active:scale-95
    `,
    outline: `
      bg-transparent text-orange-500 border-teal-500
      hover:bg-teal-500 hover:text-orange-500 hover:shadow-md
      active:transform active:scale-95
    `,
    // Afroz-style button with slight transparency
    afroz: `
      bg-teal-500 bg-opacity-90 text-orange-500 border-teal-500
      hover:bg-opacity-100 hover:shadow-lg hover:transform hover:scale-105
      active:transform active:scale-95
      backdrop-blur-sm
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
    ${variantStyles[variant as keyof typeof variantStyles]}
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