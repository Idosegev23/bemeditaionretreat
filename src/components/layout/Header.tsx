'use client';

import React, { useState, useEffect } from 'react';
import { Container } from '@/components/ui';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated navigation items according to requirements
  const navigationItems = [
    { href: '#hero', label: 'ראשי' },
    { href: '#about', label: 'על הרטריט' },
    { href: '#gallery', label: 'גלריה' },
    { href: '#program', label: 'תוכנית' },
    { href: '#location', label: 'על המקום' },
    { href: '#instructors', label: 'על המנחים' },
    { href: '#pricing', label: 'לינה וכרטיסים' },
    { href: '#testimonials', label: 'המלצות' },
    { href: '#faq', label: 'שאלות נפוצות' },
    { href: '#contact', label: 'יצירת קשר ורישום' },
  ];

  // Handle smooth scroll to section
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-warm-white/95 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
        }
      `}
      role="banner"
    >
      <Container>
        <nav 
          className="flex items-center justify-between h-16 lg:h-20"
          role="navigation"
          aria-label="תפריט ראשי"
        >
          {/* Logo */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
            className="flex items-center space-x-3 rtl:space-x-reverse focus:outline-none focus:ring-2 focus:ring-light-brown rounded-md p-1"
            aria-label="Be Meditation - חזרה לתחילת הדף"
          >
            {/* Logo from original site */}
            <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center">
              <img 
                src="/images/logo.png" 
                alt="לוגו Be Meditation" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-xl lg:text-2xl font-heading text-light-brown hover:text-orange-500 transition-colors">
              Be Meditation
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-text-primary hover:text-light-brown transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-text-primary hover:text-light-brown transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            <div className="relative w-6 h-6">
              <span 
                className={`
                  absolute h-0.5 w-6 bg-current transform transition-all duration-300
                  ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}
                `} 
              />
              <span 
                className={`
                  absolute h-0.5 w-6 bg-current transform transition-all duration-300 top-3
                  ${isMenuOpen ? 'opacity-0' : 'opacity-100'}
                `} 
              />
              <span 
                className={`
                  absolute h-0.5 w-6 bg-current transform transition-all duration-300
                  ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}
                `} 
              />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`
            lg:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'}
          `}
        >
          <div className="flex flex-col space-y-4 pt-4 border-t border-sand">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-right text-text-primary hover:text-light-brown transition-colors duration-200 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header; 