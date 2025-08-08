'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui';

/**
 * Location Section - על המקום
 * 
 * תכונות:
 * - עיצוב ענייני וקצר כמו אפרוז
 * - תמונה אחת של המקום
 * - טקסט קצר על מצוקי דרגות
 * - נקודות עיקריות
 */
const LocationSection: React.FC = () => {
  return (
    <section 
      className="py-12 md:py-18 bg-cream"
      id="location"
    >
      <Container>
        {/* Main white container wrapping everything like in About */}
        <div className="max-w-5xl mx-auto bg-white/90 rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg">
          
          {/* כותרת */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-desert-brown mb-6">
              על המקום
            </h2>
            <p className="text-xl text-text-secondary">
              מצוקי דרגות - מקום קסום ועוצמתי בלב מדבר יהודה
            </p>
          </div>

          {/* Quote banner with background image */}
          <div className="mb-12">
            <div 
              className="relative rounded-3xl p-12 md:p-16 overflow-hidden"
              style={{
                backgroundImage: 'url(/images/location/main-view.webp)', // Using location image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '300px'
              }}
            >
              {/* White overlay for readability (Afroz style) */}
              <div className="absolute inset-0 bg-white/45"></div>
              
              {/* Quote text */}
              <div className="relative z-10 text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-primary italic leading-relaxed">
                  &ldquo;המדבר מדבר אל הנשמה בשפה ששקט וחכמה&rdquo;
                </div>
              </div>
            </div>
          </div>

          {/* תוכן ראשי */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-8">
            
            {/* תמונה */}
            <div className="flex-shrink-0 lg:w-1/2">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/location/main-view.webp"
                  alt="נוף מצוקי דרגות"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* תוכן */}
            <div className="lg:w-1/2 space-y-6">
              
              {/* תיאור ראשי */}
              <div>
                <p className="text-lg md:text-xl text-text-primary leading-relaxed mb-4">
                  הריטריט מתקיים במצוקי דרגות - כפר נופש על מצוק המתנשא לגובה 450 מטר, 
                  עם נוף מרהיב לים המלח, להרי ירדן ולמרחב המדברי האינסופי.
                </p>
                
                <p className="text-lg text-text-secondary leading-relaxed">
                  זהו מקום של שקט נדיר, אוויר צלול ואנרגיה מדברית ייחודית - 
                  מרחב מושלם להתמסרות לתהליך ולהתחברות פנימית.
                </p>
              </div>

              {/* מה מיוחד במקום */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-desert-brown mb-4">
                  מה מיוחד במקום:
                </h4>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-orange-500 ml-2">•</span>
                    נוף פנורמי עוצר נשימה למדבר ולים המלח
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 ml-2">•</span>
                    מרחב שקט ואינטימי, רחוק מהרעש
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 ml-2">•</span>
                    מרחבים פתוחים מושלמים לתרגול ומדיטציה
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 ml-2">•</span>
                    שבילי טיול במדבר ונקודות תצפית מרהיבות
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default LocationSection; 