'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Button } from '@/components/ui';

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

  // Navigation items
  const navigationItems = [
    { href: '#about', label: 'אודות הריטריט' },
    { href: '#program', label: 'התוכנית' },
    { href: '#schedule', label: 'לוח זמנים' },
    { href: '#instructors', label: 'המנחים' },
    { href: '#location', label: 'המקום' },
    { href: '#pricing', label: 'מחירים' },
    { href: '#contact', label: 'יצירת קשר' },
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
          <Link 
            href="/"
            className="flex items-center space-x-2 rtl:space-x-reverse"
            aria-label="Be Meditation - חזרה לעמוד הבית"
          >
            <div className="text-xl lg:text-2xl font-heading text-desert-blue">
              Be Meditation
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-text-primary hover:text-desert-blue transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => handleNavClick('#contact')}
            >
              להרשמה
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-text-primary hover:text-desert-blue transition-colors"
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
                className="text-right text-text-primary hover:text-desert-blue transition-colors duration-200 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            
            <div className="pt-4">
              <Button 
                variant="primary" 
                size="md"
                className="w-full"
                onClick={() => handleNavClick('#contact')}
              >
                להרשמה לריטריט
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header; 