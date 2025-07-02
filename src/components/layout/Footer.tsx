'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'פייסבוק',
      href: '#', // TODO: Replace with actual Facebook URL
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'אינסטגרם',
      href: '#', // TODO: Replace with actual Instagram URL
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.32-1.297C4.198 14.553 3.5 13.297 3.5 11.987s.698-2.566 1.629-3.703c.872-.808 2.023-1.297 3.32-1.297 1.297 0 2.448.49 3.32 1.297.931 1.137 1.629 2.393 1.629 3.703s-.698 2.566-1.629 3.703c-.872.808-2.023 1.297-3.32 1.297zm7.74-6.951c-.654 0-1.297-.327-1.64-.872-.218-.327-.327-.654-.327-1.078 0-.327.109-.654.327-1.078.343-.545.986-.872 1.64-.872.654 0 1.297.327 1.64.872.218.327.327.654.327 1.078 0 .327-.109.654-.327 1.078-.343.545-.986.872-1.64.872z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'וואטסאפ',
      href: '#', // TODO: Replace with actual WhatsApp URL
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { href: '#about', label: 'אודות הריטריט' },
    { href: '#program', label: 'התוכנית' },
    { href: '#instructors', label: 'המנחים' },
    { href: '#contact', label: 'יצירת קשר' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-sand/30 border-t border-light-brown" role="contentinfo">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <div className="text-2xl font-heading text-desert-blue mb-3">
                  Be Meditation
                </div>
                <p className="text-text-secondary leading-relaxed max-w-md">
                  ריטריטים של מדיטציה ונוכחות במדבר יהודה. 
                  חוויה מיוחדת של שקט פנימי וחיבור לטבע.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4 rtl:space-x-reverse">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-text-secondary hover:text-desert-blue transition-colors duration-200 p-2"
                    aria-label={`עקבו אחרינו ב${social.name}`}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-text-primary font-medium mb-4">קישורים מהירים</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-text-secondary hover:text-desert-blue transition-colors duration-200 text-right w-full"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-text-primary font-medium mb-4">יצירת קשר</h3>
              <div className="space-y-3 text-text-secondary">
                <div>
                  <span className="block text-sm font-medium text-text-primary mb-1">אימייל:</span>
                  <Link 
                    href="mailto:bemeditation.info@gmail.com"
                    className="hover:text-desert-blue transition-colors duration-200"
                  >
                    bemeditation.info@gmail.com
                  </Link>
                </div>
                
                <div>
                  <span className="block text-sm font-medium text-text-primary mb-1">ריטריט:</span>
                  <span className="text-sm">26-27 בספטמבר</span>
                </div>
                
                <div>
                  <span className="block text-sm font-medium text-text-primary mb-1">מיקום:</span>
                  <span className="text-sm">מצוקי דרגות, מדבר יהודה</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-light-brown mt-8 pt-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm text-text-secondary">
              <div className="mb-4 md:mb-0">
                <p>© {currentYear} Be Meditation. כל הזכויות שמורות.</p>
              </div>
              
              <div className="flex space-x-6 rtl:space-x-reverse">
                <Link href="#" className="hover:text-desert-blue transition-colors duration-200">
                  מדיניות פרטיות
                </Link>
                <Link href="#" className="hover:text-desert-blue transition-colors duration-200">
                  תנאי שימוש
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 