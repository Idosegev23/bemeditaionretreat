'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui';

/**
 * Location Section - על המקום
 * 
 * תכונות:
 * - עיצוב ענייני וקצר
 * - תמונה אחת של המקום
 * - טקסט קצר על מצוקי דרגות
 * - נקודות עיקריות
 */
const LocationSection: React.FC = () => {
  return (
    <section 
      className="py-20 md:py-28 bg-warm-white"
      id="location"
    >
      <Container>
        <div className="max-w-5xl mx-auto">
          
          {/* כותרת */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading text-text-primary mb-6">
              על המקום
            </h2>
            <p className="text-xl text-text-secondary">
              מצוקי דרגות - מקום קסום ועוצמתי בלב מדבר יהודה
            </p>
          </div>

          {/* תוכן ראשי */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* תמונת המקום */}
            <div className="animate-fade-in-up animate-delay-200">
              <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                <div className="relative h-[350px] md:h-[400px]">
                  <Image
                    src="/images/location/main-view.webp"
                    alt="נוף מרהיב ממצוקי דרגות"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/gallery/8.jpg'; // fallback image
                    }}
                  />
                </div>
                
                {/* כיתוב */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="text-white font-medium">
                    נוף עוצר נשימה על המדבר והים המלח
                  </p>
                </div>
              </div>
            </div>

            {/* תוכן טקסטואלי */}
            <div className="space-y-6 animate-fade-in-up animate-delay-400">
              
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
              <div className="bg-cream/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-text-primary mb-4">
                  מה מיוחד במקום:
                </h4>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-desert-blue mr-2">•</span>
                    נוף פנורמי עוצר נשימה למדבר ולים המלח
                  </li>
                  <li className="flex items-start">
                    <span className="text-desert-blue mr-2">•</span>
                    מרחב שקט ואינטימי, רחוק מהרעש
                  </li>
                  <li className="flex items-start">
                    <span className="text-desert-blue mr-2">•</span>
                    מרחבים פתוחים מושלמים לתרגול ומדיטציה
                  </li>
                  <li className="flex items-start">
                    <span className="text-desert-blue mr-2">•</span>
                    שבילי טיול במדבר ונקודות תצפית מרהיבות
                  </li>
                </ul>
              </div>

              {/* ציטוט */}
              <div className="bg-gradient-to-r from-desert-blue/10 to-sand/10 rounded-xl p-6 border-r-4 border-desert-blue">
                <blockquote className="text-lg text-text-primary italic leading-relaxed">
                  "זה מקום שמבקש מאיתנו רק דבר אחד – לעצור. לנשום. להיות."
                </blockquote>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default LocationSection; 