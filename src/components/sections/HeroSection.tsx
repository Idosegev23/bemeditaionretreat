'use client';

import React from 'react';
import { Container } from '@/components/ui';
import Button from '@/components/ui/Button';

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
            backgroundImage: 'url(/images/gallery/22.jpg)', // תמונת הירו הראשית
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
          
          {/* Main Headline - כותרת ראשית (גודל לפי globals.css: h1=2.5rem, מובייל 1.8rem) */}
          <h1 className="font-heading text-white mb-4 leading-tight animate-fade-in-up" style={{ 
            fontFamily: 'var(--font-decorative)',
            textShadow: '2px 2px 8px rgba(0,0,0,0.8), 1px 1px 4px rgba(0,0,0,0.9)'
          }}>
            סופ״ש של נוכחות,
            <br className="hidden sm:block" />
            תנועה ושקט
            <br className="hidden sm:block" />
            במדבר
          </h1>

          {/* Subtitle - תת כותרת עם פרטי האירוע (hero-subtitle לפי המפרט) */}
          <h2 className="hero-subtitle text-white mb-4 font-bold leading-relaxed animate-fade-in-up animate-delay-200" style={{
            textShadow: '1px 1px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.9)'
          }}>
            ריטריט מדיטציה חווייתי ומעמיק | 26–27 בספטמבר | מצוקי דרגות
          </h2>

          {/* Description Paragraph - פסקת תיאור (p גלובלי 1.1rem) */}
          <p className="text-white mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in-up animate-delay-400" style={{
            textShadow: '1px 1px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.9)',
            color: 'white',
            textAlign: 'center'
          }}>
            הצטרפו אלינו ליומיים של חיבור פנימי, מדיטציות אקטיביות, תנועה, מוזיקה, 
            טבע עוצר נשימה ואנשים טובים, במקום קסום במדבר יהודה.
          </p>

          {/* Single CTA Button - אחיד */}
          <div className="flex justify-center items-center animate-fade-in-up animate-delay-600">
            <Button variant="primary" size="lg" href="#contact" aria-label="הצטרפו לריטריט - פרטים נוספים">
              אני רוצה להצטרף לריטריט
            </Button>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default HeroSection; 