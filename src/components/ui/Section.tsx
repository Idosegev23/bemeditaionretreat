import React from 'react';
import { SectionProps } from '@/types';

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'transparent',
  spacing = 'lg',
  id,
}) => {
  // Base styles for section
  const baseStyles = 'relative w-full';

  // Background variants
  const backgroundStyles = {
    transparent: 'bg-transparent',
    light: 'bg-sand/30',
    warm: 'bg-warm-white',
    image: 'bg-cover bg-center bg-no-repeat',
  };

  // Spacing variants
  const spacingStyles = {
    sm: 'py-12 sm:py-16',        // ~48px mobile, ~64px desktop
    md: 'py-16 sm:py-20 lg:py-24', // ~64px mobile, ~80px tablet, ~96px desktop
    lg: 'py-20 sm:py-24 lg:py-32', // ~80px mobile, ~96px tablet, ~128px desktop
  };

  const sectionClasses = `
    ${baseStyles}
    ${backgroundStyles[background]}
    ${spacingStyles[spacing]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <section 
      className={sectionClasses}
      id={id}
      role="region"
    >
      {children}
    </section>
  );
};

export default Section; 