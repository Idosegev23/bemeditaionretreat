'use client';

import React from 'react';
import { Container, Button } from '@/components/ui';

/**
 * Hero Section - סקשן הפתיחה הראשי של האתר
 * 
 * תכונות עיקריות:
 * - תמונת רקע (במקום וידאו) לביצועים טובים יותר
 * - שכבת overlay עדינה לקריאות טובה של הטקסט
 * - תוכן מרוכז במרכז המסך
 * - רספונסיבי למובייל וטאבלט
 * - שני כפתורים - לפרטים ולרכישה ישירה
 */
const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
      role="banner"
      aria-label="סקשן הירו - ריטריט מדיטציה במדבר"
    >
      {/* Background Image - תמונת רקע */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background image with better brightness */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/gallery/1.jpg)',
            filter: 'brightness(0.75) sepia(10%)'
          }}
        />
        
        {/* Overlay - שכבת רקע עדינה יותר לקריאות הטקסט */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40"
          aria-hidden="true"
        />
      </div>

      {/* Content Container - תוכן מרוכז */}
      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Headline - כותרת ראשית */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-warm-white mb-6 leading-tight hero-text-shadow animate-fade-in-up" style={{ fontFamily: 'var(--font-decorative)' }}>
            סופ״ש של נוכחות,
            <br className="hidden sm:block" />
            <span className="text-sand"> תנועה ושקט </span>
            <br className="hidden sm:block" />
            במדבר
          </h1>

          {/* Subtitle - תת כותרת עם פרטי האירוע */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-cream mb-6 font-light leading-relaxed hero-text-shadow animate-fade-in-up animate-delay-200">
            ריטריט מדיטציה חווייתי ומעמיק
            <br className="block sm:hidden" />
            <span className="hidden sm:inline"> | </span>
            <span className="text-sand font-medium">26–27 בספטמבר</span>
            <br className="block sm:hidden" />
            <span className="hidden sm:inline"> | </span>
            מצוקי דרגות
          </h2>

          {/* Description Paragraph - פסקת תיאור */}
          <p className="text-lg md:text-xl text-warm-white/90 mb-10 leading-relaxed max-w-3xl mx-auto hero-text-shadow animate-fade-in-up animate-delay-400">
            הצטרפו אלינו ליומיים של חיבור פנימי, מדיטציות אקטיביות, תנועה, מוזיקה, 
            טבע עוצר נשימה ואנשים טובים, במקום קסום במדבר יהודה.
          </p>

          {/* Call to Action Buttons - כפתורי קריאה לפעולה */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-600">
            
            {/* Primary Button - כפתור ראשי לפרטים (עיצוב אפרוז) */}
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="
                bg-gray-400/40 hover:bg-gray-500/50
                text-white font-medium 
                px-8 py-4 text-lg
                rounded-2xl
                border-3 border-white/70 hover:border-white/90
                shadow-lg hover:shadow-xl
                transform hover:scale-105 hover:-translate-y-1
                transition-all duration-300 ease-out
                min-w-[280px] sm:min-w-[320px]
                backdrop-blur-sm
                relative overflow-hidden
                active:scale-100 active:translate-y-0
                font-sans
              "
              aria-label="עבור לטופס יצירת קשר לפרטים"
            >
              <span className="relative z-10">
                אני רוצה להצטרף לריטריט
              </span>
            </button>

            {/* Secondary Button - כפתור רכישה ישירה */}
            <button
              onClick={() => {
                // TODO: Add direct purchase link
                alert('כפתור רכישה ישירה - נחבר לדף התשלום');
              }}
              className="
                bg-light-brown/80 hover:bg-light-brown/90
                text-warm-white font-medium 
                px-8 py-4 text-lg
                rounded-2xl
                border-2 border-light-brown/60 hover:border-light-brown/80
                shadow-lg hover:shadow-xl
                transform hover:scale-105 hover:-translate-y-1
                transition-all duration-300 ease-out
                min-w-[280px] sm:min-w-[320px]
                backdrop-blur-sm
                relative overflow-hidden
                active:scale-100 active:translate-y-0
                font-sans
              "
              aria-label="רכישה ישירה לריטריט"
            >
              <span className="relative z-10">
                לרכישה ישירה לחצו כאן
              </span>
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up animate-delay-1000">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default HeroSection; 