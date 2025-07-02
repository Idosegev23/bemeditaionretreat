'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui';

/**
 * Location Section - "מרחב של שקט בין שמיים למדבר" - סקשן על המקום
 * 
 * תכונות:
 * - תמונה מרכזית פנורמית
 * - תיאור מפורט של מצוקי דרגות
 * - רשימת יתרונות עם אייקונים עדינים
 * - תמונות תומכות קטנות
 * - ציטוט מעודד
 * - עיצוב בצבעים בהירים ורכים
 */
const LocationSection: React.FC = () => {
  // Location features with simple icons
  const features = [
    {
      text: 'נוף פנורמי עוצר נשימה למדבר ולים המלח',
      icon: '🏔️'
    },
    {
      text: 'מרחב שקט ואינטימי, רחוק מהרעש',
      icon: '🤫'
    },
    {
      text: 'חדרים משופצים באווירה מדברית',
      icon: '🏡'
    },
    {
      text: 'בר מול הנוף עם תפריט מגוון',
      icon: '☕'
    },
    {
      text: 'בריכות שכשוך, מקלחות חוץ ודק מפנק',
      icon: '💧'
    },
    {
      text: 'מרחבים פתוחים לתרגול, טיול ומנוחה',
      icon: '🧘'
    }
  ];

  // Supporting images
  const supportingImages = [
    {
      src: '/images/location/facilities.webp',
      alt: 'מתקני מצוקי דרגות - מרחבי פעילות ונוחות',
      caption: 'מתקנים ומרחבי פעילות'
    },
    {
      src: '/images/location/desert-landscape.webp', 
      alt: 'נוף מדברי רחב ופתוח מהמצוק',
      caption: 'המרחב המדברי האינסופי'
    },
    {
      src: '/images/location/accommodation.webp',
      alt: 'אזור הלינה והמתקנים במצוקי דרגות',
      caption: 'חדרי הלינה המעוצבים'
    }
  ];

  // Placeholder for missing images
  const getImageWithFallback = (src: string, alt: string, className?: string) => (
    <div className={`relative bg-gradient-to-br from-cream/60 to-sand/40 rounded-2xl flex items-center justify-center overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `
              <div class="w-20 h-20 bg-light-brown/30 rounded-xl flex items-center justify-center">
                <span class="text-3xl">🏜️</span>
              </div>
            `;
          }
        }}
      />
    </div>
  );

  return (
    <section 
      className="py-24 md:py-32 bg-gradient-to-b from-cream/30 to-warm-white relative overflow-hidden"
      id="location"
    >
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-sand/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-light-brown/15 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Main Title */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-primary mb-8 leading-tight">
              מרחב של שקט
              <br />
              <span className="text-desert-blue">בין שמיים למדבר</span>
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              מצוקי דרגות - מקום קסום ועוצמתי בלב מדבר יהודה
            </p>
          </div>

          {/* Main Hero Image */}
          <div className="mb-20 animate-fade-in-up animate-delay-200">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-sand/10 to-light-brown/10 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
                  {getImageWithFallback(
                    '/images/location/main-view.webp',
                    'נוף פנורמי מרהיב של מצוקי דרגות והמדבר',
                    'w-full h-full'
                  )}
                </div>
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating caption */}
                <div className="absolute bottom-6 right-6 bg-warm-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-text-primary font-medium">נוף עוצר נשימה מהמצוק</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid: Text + Supporting Images */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
            
            {/* Main Description */}
            <div className="space-y-8 animate-fade-in-up animate-delay-400">
              
              {/* Main text */}
              <div className="bg-warm-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-sand/20">
                <p className="text-lg md:text-xl text-text-primary leading-relaxed mb-6">
                  האירוע מתקיים באחד המקומות הקסומים והעוצמתיים בארץ – 
                  <span className="font-semibold text-desert-blue"> מצוקי דרגות</span>.
                </p>
                
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  כפר נופש על מצוק, בקצה מדבר יהודה, המתנשא לגובה של 
                  <span className="font-medium text-text-primary"> 450 מטר</span>, 
                  עם נוף מלא לים המלח, להרי ירדן ולמרחב האינסופי של השקט.
                </p>
                
                <div className="bg-cream/60 rounded-xl p-6 border-r-4 border-desert-blue">
                  <p className="text-lg text-text-primary leading-relaxed italic">
                    זהו מקום שמבקש מאיתנו רק דבר אחד – לעצור. לנשום. להיות.
                    <br />
                    אנרגיה מדברית ייחודית, שקט נדיר, אוויר פתוח ומרחב מושלם להתמסרות לתהליך.
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-r from-desert-blue/5 to-sand/10 rounded-2xl p-8 border border-desert-blue/20">
                <blockquote className="text-xl text-text-primary italic leading-relaxed mb-4">
                  &ldquo;זה מקום שלא שוכחים. רק להיות שם כבר מרפא.&rdquo;
                </blockquote>
                <cite className="text-desert-blue font-medium">
                  – משתתפת מהריטריט הקודם
                </cite>
              </div>
            </div>

            {/* Supporting Images Grid */}
            <div className="grid gap-6 animate-fade-in-up animate-delay-600">
              {supportingImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 md:h-56">
                    {getImageWithFallback(
                      image.src,
                      image.alt,
                      'w-full h-full'
                    )}
                  </div>
                  
                  {/* Image caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-warm-white text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="animate-fade-in-up animate-delay-800">
            <h3 className="text-2xl md:text-3xl font-heading text-text-primary text-center mb-12">
              מה מחכה לכם במקום
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group bg-warm-white/70 backdrop-blur-sm rounded-2xl p-6 border border-sand/20 hover:border-desert-blue/30 shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in-up animate-delay-${1000 + index * 100}`}
                >
                  
                  {/* Feature icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-desert-blue/10 to-sand/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                  </div>
                  
                  {/* Feature text */}
                  <p className="text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                    {feature.text}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="mt-4 h-1 w-0 bg-gradient-to-r from-desert-blue to-sand rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20 animate-fade-in-up animate-delay-1200">
            <div className="max-w-2xl mx-auto space-y-6">
              
              {/* Decorative separator */}
              <div className="flex items-center justify-center space-x-4">
                <div className="h-px bg-gradient-to-r from-transparent via-desert-blue/30 to-transparent w-32"></div>
                <div className="w-3 h-3 bg-desert-blue/40 rounded-full"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-desert-blue/30 to-transparent w-32"></div>
              </div>
              
              <p className="text-lg text-text-secondary leading-relaxed">
                מקום שבו הזמן עוצר, והנשמה מוצאת את דרכה לבית
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default LocationSection; 