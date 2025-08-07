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
        {/* Background image - מעגל מדיטציה במדבר עם ים המלח */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/gallery/25.jpg)', // מעגל מדיטציה במדבר - תמונה עם ים המלח
            filter: 'brightness(1.0) contrast(1.1)' // מותאם לתמונה החדשה
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

          {/* Single CTA Button - כפתור שקוף בסגנון אפרוז */}
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
                backdrop-blur-md
                border-2 border-white/30 hover:border-white/50
                relative overflow-hidden
                active:scale-100 active:translate-y-0
                font-sans
                group
                bg-white/10 hover:bg-white/20
              "
              aria-label="הצטרפו לריטריט - פרטים נוספים"
            >
              {/* Button shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse" />
              
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