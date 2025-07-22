'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
      id="header"
      style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        // More desert/brown background - based on Afroz but more brownish
        backgroundColor: 'rgba(237, 224, 196, 0.85)', 
        zIndex: 1000,
        boxShadow: '0 3px 8px rgba(237, 224, 196, 0.2)',
        transition: 'background-color 0.3s ease',
        padding: '0.2rem 0',
        borderBottom: 'none'
      }}
    >
      <nav 
        id="navbar"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.3rem 2rem',
          maxWidth: '1300px',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        {/* Logo Container - Updated colors */}
        <div 
          className="logo-container"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <Image 
            id="logo"
            src="/images/logo.png" 
            alt="לוגו Be Meditation" 
            width={60}
            height={60}
            style={{
              maxHeight: '60px',
              maxWidth: '60px',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              margin: 0,
              transition: 'max-height 0.3s ease',
              padding: '2px',
              background: 'transparent',
              verticalAlign: 'middle'
            }}
          />
          <span 
            className="header-logo-text"
            style={{
              fontSize: '1.3rem',
              fontWeight: 500,
              color: '#D9A443', // Brown/gold color from Afroz
              fontFamily: "'Heebo', sans-serif", // Changed to match Afroz
              order: -1 // Place text before logo in LTR
            }}
          >
            Be Meditation
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul 
          id="nav-links"
          style={{
            listStyle: 'none',
            display: isMobile ? 'none' : 'flex',
            padding: 0,
            margin: 0
          }}
        >
          {navigationItems.map((item) => (
            <li 
              key={item.href}
              style={{ marginRight: '1.5rem' }}
            >
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                style={{
                  color: '#2c3e50',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)',
                  padding: '0.5rem 0',
                  transition: 'color 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = '#D9A443'; // Brown hover color
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = '#2c3e50';
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button - Updated colors */}
        <button
          id="mobile-menu-toggle"
          className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: isMobile ? 'flex' : 'none',
            width: '45px',
            height: '45px',
            position: 'relative',
            backgroundColor: '#C7A882', // Desert brown color
            borderRadius: '50%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px',
            border: 'none',
            cursor: 'pointer'
          }}
          aria-label="תפריט"
        >
          <span className="hamburger-bar" style={{
            display: 'block',
            width: '25px',
            height: '3px',
            margin: '3px 0',
            backgroundColor: '#6B4E3D', // Darker brown
            borderRadius: '3px',
            transition: 'all 0.3s ease',
            transform: isMenuOpen ? 'translateY(6px) rotate(45deg)' : 'none'
          }}></span>
          <span className="hamburger-bar" style={{
            display: 'block',
            width: '25px',
            height: '3px',
            margin: '3px 0',
            backgroundColor: '#6B4E3D',
            borderRadius: '3px',
            transition: 'all 0.3s ease',
            opacity: isMenuOpen ? 0 : 1
          }}></span>
          <span className="hamburger-bar" style={{
            display: 'block',
            width: '25px',
            height: '3px',
            margin: '3px 0',
            backgroundColor: '#6B4E3D',
            borderRadius: '3px',
            transition: 'all 0.3s ease',
            transform: isMenuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none'
          }}></span>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && isMobile && (
          <ul 
            id="nav-links-mobile"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '80%',
              height: '100vh',
              backgroundColor: 'rgba(255, 255, 255, 0.97)',
              boxShadow: '-5px 0 15px rgba(0, 0, 0, 0.1)',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: '70px 0 30px',
              transition: 'right 0.4s ease',
              zIndex: 5,
              overflowY: 'auto',
              listStyle: 'none',
              margin: 0,
              display: 'flex'
            }}
          >
            {navigationItems.map((item) => (
              <li 
                key={item.href}
                style={{
                  margin: '8px 0',
                  width: '100%',
                  textAlign: 'center',
                  padding: '0 20px'
                }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    padding: '8px 0',
                    display: 'block',
                    color: '#2c3e50',
                    borderBottom: '1px solid rgba(0, 95, 115, 0.1)',
                    textDecoration: 'none'
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header; 