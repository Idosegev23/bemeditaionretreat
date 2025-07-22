'use client';

import React from 'react';
import { Container } from '@/components/ui';

/**
 * Hero Section - סקשן הפתיחה הראשי של האתר
 * 
 * תכונות עיקריות:
 * - תמונת רקע בהירה ומזמינה
 * - כפתור יחיד עגול עם שקיפות (סגנון אפרוז)
 * - תוכן מרוכז במרכז המסך
 * - רספונסיבי למובייל וטאבלט
 */
const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
      role="banner"
      aria-label="סקשן הירו - ריטריט מדיטציה במדבר"
    >
      {/* Background Image - תמונת רקע בהירה יותר */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background image - using brighter, less desert-like image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/about1.jpg)', // Changed to a brighter image
            filter: 'brightness(1.1) contrast(1.1)' // Slightly less bright for better text readability
          }}
        />
        
        {/* Stronger overlay for better text readability */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"
          aria-hidden="true"
        />
      </div>

      {/* Content Container - תוכן מרוכז */}
      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Headline - כותרת ראשית */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-6 leading-tight animate-fade-in-up" style={{ 
            fontFamily: 'var(--font-decorative)',
            textShadow: '2px 2px 8px rgba(0,0,0,0.8), 1px 1px 4px rgba(0,0,0,0.9)'
          }}>
            סופ״ש של נוכחות,
            <br className="hidden sm:block" />
            תנועה ושקט
            <br className="hidden sm:block" />
            במדבר
          </h1>

          {/* Subtitle - תת כותרת עם פרטי האירוע */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-white mb-6 font-bold leading-relaxed animate-fade-in-up animate-delay-200" style={{
            textShadow: '1px 1px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.9)'
          }}>
            ריטריט מדיטציה חווייתי ומעמיק | 26–27 בספטמבר | מצוקי דרגות
          </h2>

          {/* Description Paragraph - פסקת תיאור */}
          <p className="text-3xl md:text-4xl text-white mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up animate-delay-400" style={{
            textShadow: '1px 1px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.9)',
            color: 'white',
            textAlign: 'center'
          }}>
            הצטרפו אלינו ליומיים של חיבור פנימי, מדיטציות אקטיביות, תנועה, מוזיקה, 
            טבע עוצר נשימה ואנשים טובים, במקום קסום במדבר יהודה.
          </p>

          {/* Single CTA Button - כפתור יחיד בסגנון אפרוז */}
          <div className="flex justify-center items-center animate-fade-in-up animate-delay-600">
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="
                text-white font-bold 
                px-12 py-4 text-xl
                rounded-full
                shadow-2xl hover:shadow-3xl
                transform hover:scale-105 hover:-translate-y-2
                transition-all duration-300 ease-out
                min-w-[320px]
                backdrop-blur-sm
                border-2 border-white/20 hover:border-white/30
                relative overflow-hidden
                active:scale-100 active:translate-y-0
                font-sans
                group
              "
              style={{
                backgroundColor: '#56ACBF',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4A9AAB';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#56ACBF';
              }}
              aria-label="הצטרפו לריטריט - פרטים נוספים"
            >
              {/* Button shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse" />
              
              <span className="relative z-10 flex items-center justify-center gap-2">
                אני רוצה להצטרף לריטריט
              </span>
            </button>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default HeroSection; 