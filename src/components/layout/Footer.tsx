'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui';
import Button from '@/components/ui/Button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary py-16 footer-scope" role="contentinfo">
      <Container>
        <div className="max-w-4xl mx-auto">
          
          {/* Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            
            {/* Logo & About */}
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <Image 
                  src="/images/logo.png" 
                  alt="לוגו Be Meditation" 
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div className="text-3xl font-heading">
                  Be Meditation
                </div>
              </div>
              <p className="leading-relaxed">
                להכניס נשימה לתוך החיים.
                <br />
                להפוך נוכחות – לדרך חיים.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">קישורים מהירים</h4>
              <div className="space-y-2">
                <button
                  onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block mx-auto text-white/90 hover:text-white transition-colors"
                >
                  על הריטריט
                </button>
                <button
                  onClick={() => document.querySelector('#program')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block mx-auto text-white/90 hover:text-white transition-colors"
                >
                  התוכנית
                </button>
                <button
                  onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block mx-auto text-white/90 hover:text-white transition-colors"
                >
                  מחירים
                </button>
                <button
                  onClick={() => document.querySelector('#faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block mx-auto text-white/90 hover:text-white transition-colors"
                >
                  שאלות נפוצות
                </button>
              </div>
            </div>

            {/* Social Media & Contact */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4">עקבו אחרינו</h4>
              <div className="flex justify-center md:justify-start gap-4 mb-6">
                <a
                  href="https://www.instagram.com/be_meditation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/15 hover:bg-white/25 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="אינסטגרם"
                >
                  <i className="fab fa-instagram text-xl text-white"></i>
                </a>
                <a
                  href="https://www.facebook.com/JivanyBeMeditation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/15 hover:bg-white/25 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="פייסבוק"
                >
                  <i className="fab fa-facebook-f text-xl text-white"></i>
                </a>
                <a
                  href="https://wa.me/972547882715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/15 hover:bg-white/25 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <i className="fab fa-whatsapp text-xl text-white"></i>
                </a>
              </div>
              
              {/* Response Hours */}
              <p className="text-white/90 text-sm">
                זמני מענה: ראשון-חמישי 9:00-18:00
              </p>
            </div>
          </div>

          {/* Purchase & Updates CTA - Afroz-like colors */}
          <div className="mt-8 p-6 rounded-2xl bg-brown-teal text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {/* לרכישה - קישור ייעודי למי שכבר היה בסדנה */}
              <Button variant="primary" size="lg" href="/purchase" aria-label="לרכישה לחצו כאן" className="cta-button">
                לרכישה לחצו כאן
              </Button>
              {/* קבוצת עדכונים שקטה */}
              <Button variant="outline" size="lg" href="https://chat.whatsapp.com/" aria-label="הצטרפות לקבוצת עדכונים" className="cta-button-secondary">
                הצטרפו לקבוצת עדכונים שקטה
              </Button>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/80 leading-relaxed footer-note">
              © {currentYear} Be Meditation. כל הזכויות שמורות.
              <br />
              <span className="text-sm">
                נבנה באהבה לקהילת המדיטציה הישראלית 🙏
              </span>
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() => document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-12 h-12 bg-teal-500 hover:bg-teal-600 text-orange-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50"
            aria-label="חזרה לראש הדף"
          >
            <i className="fas fa-chevron-up"></i>
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 