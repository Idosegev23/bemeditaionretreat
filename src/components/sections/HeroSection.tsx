'use client';

import React from 'react';
import { Container, Button } from '@/components/ui';

/**
 * Hero Section - סקשן הפתיחה הראשי של האתר
 * 
 * תכונות עיקריות:
 * - וידאו ברקע (hero.mp4) שמתנגן אוטומטית כלופ ללא קול
 * - שכבת overlay שקופה לקריאות טובה של הטקסט
 * - תוכן מרוכז במרכז המסך
 * - רספונסיבי למובייל וטאבלט
 * - כפתור קריאה לפעולה שגולל חלק לסקשן הרשמה
 */
const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
      role="banner"
      aria-label="סקשן הירו - ריטריט מדיטציה במדבר"
    >
      {/* Video Background - וידאו ברקע */}
      <div className="absolute inset-0 w-full h-full">
        {/* Fallback Background - רקע גיבוי אם הוידאו לא נטען */}
        <div className="absolute inset-0 bg-gradient-to-br from-sand via-light-brown to-desert-blue opacity-90" />
        
        <video
          autoPlay
          muted
          playsInline
          loop
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
          poster="/images/hero-poster.jpg"
          onError={() => console.log('Video failed to load, using fallback background')}
          style={{ filter: 'sepia(20%) brightness(0.8)' }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay - שכבת רקע שקופה לקריאות הטקסט */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"
          aria-hidden="true"
        />
      </div>

      {/* Content Container - תוכן מרוכז */}
      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Headline - כותרת ראשית */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-warm-white mb-6 leading-tight hero-text-shadow animate-fade-in-up">
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

          {/* Call to Action Button - כפתור קריאה לפעולה יחיד */}
          <div className="flex justify-center items-center animate-fade-in-up animate-delay-400">
            <Button
              variant="primary"
              size="lg"
              href="#contact"
              className="
                bg-gradient-to-br from-desert-blue to-desert-blue/80 
                hover:from-desert-blue/95 hover:to-desert-blue/85
                text-warm-white font-semibold 
                px-16 py-6 text-lg
                rounded-full
                shadow-2xl hover:shadow-[0_20px_40px_rgba(123,160,152,0.3)]
                transform hover:scale-105 hover:-translate-y-1
                transition-all duration-500 ease-out
                min-w-[360px]
                backdrop-blur-lg
                border border-warm-white/20
                hover:border-warm-white/40
                relative overflow-hidden
                before:absolute before:inset-0 
                before:bg-gradient-to-r before:from-transparent before:via-warm-white/10 before:to-transparent
                before:translate-x-[-100%] hover:before:translate-x-[100%]
                before:transition-transform before:duration-700
                active:scale-100 active:translate-y-0
              "
              aria-label="עבור לטופס הרשמה לריטריט"
            >
              <span className="relative z-10">
                אני רוצה להצטרף לריטריט
              </span>
            </Button>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default HeroSection; 