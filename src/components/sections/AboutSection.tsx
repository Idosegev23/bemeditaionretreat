'use client';

import React from 'react';
import Image from 'next/image';
import { Container, Button } from '@/components/ui';

/**
 * About Section - סקשן אודות הריטריט עם תמונות ופריסה מתקדמת
 * 
 * תכונות:
 * - פריסה רספונסיבית: grid בדסקטופ, column במובייל
 * - שלוש תמונות: ראשית גדולה ושתיים תומכות
 * - אנימציות כניסה עדינות
 * - טקסט מפורט עם טיפוגרפיה איכותית
 * - כפתור קריאה לפעולה מרכזי
 */
const AboutSection: React.FC = () => {
  return (
    <section 
      className="py-20 md:py-32 bg-warm-white relative overflow-hidden"
      id="about"
    >
      <Container>
        <div className="max-w-7xl mx-auto">
          
          {/* Desktop Layout: Content + Main Image Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            
            {/* Text Content - מופיע ראשון במובייל, שני בדסקטופ */}
            <div className="lg:order-2 space-y-8 animate-fade-in-up">
              
              {/* Main Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-text-primary leading-tight">
                ריטריט של נוכחות,
                <br />
                <span className="text-desert-blue">תנועה ושקט</span>
                <br />
                במדבר
              </h2>

              {/* First Paragraph */}
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                בואו לנשום עמוק, לעצור רגע, ולהעניק לעצמנו מרחב אמיתי להתבוננות.
                <br />
                הסופ״ש הזה מזמין אותנו לצלול פנימה – לרוגע, לתחושת חופש, לחיבור עם עצמנו ועם אנשים שמבקשים תהליך דומה.
              </p>

              {/* Second Paragraph */}
              <p className="text-lg md:text-xl text-text-primary leading-relaxed">
                הריטריט מתקיים במצוקי דרגות – מקום עוצר נשימה בלב המדבר.
                <br />
                יומיים של מדיטציות בתנועה, כתיבה אינטואיטיבית, מוסיקה, שיחות עומק וטבע אין־סופי.
                <br />
                נחווה יחד שקט פנימי, פתיחה של הלב וכלים פשוטים שאפשר לקחת איתנו לחיים.
              </p>

              {/* Call to Action Button */}
              <div className="pt-6">
                <Button
                  variant="primary"
                  size="lg"
                  href="#contact"
                  className="
                    bg-gradient-to-r from-orange-500 to-orange-600
                    hover:from-orange-600 hover:to-orange-700
                    text-warm-white font-semibold 
                    px-10 py-4 text-lg
                    rounded-xl
                    shadow-lg hover:shadow-xl
                    transform hover:scale-105 hover:-translate-y-1
                    transition-all duration-300
                    border border-orange-400
                    hover:border-orange-300
                  "
                  aria-label="הרשמה לריטריט"
                >
                  להצטרפות לסופ״ש
                </Button>
              </div>
            </div>

            {/* Main Image - מופיע שני במובייל, ראשון בדסקטופ */}
            <div className="lg:order-1 animate-fade-in-up animate-delay-200">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-sand/20 to-light-brown/20 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/about1.jpg"
                    alt="התבוננות פנימית ומרחב אינסופי - ריטריט מדיטציה במדבר"
                    width={600}
                    height={500}
                    className="w-full h-[400px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  
                  {/* Overlay עדין */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Images Row */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            
            {/* About Image 2 */}
            <div className="animate-fade-in-up animate-delay-400">
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/about2.jpg"
                  alt="תקריב של תרגול - רגע אישי ואינטימי"
                  width={400}
                  height={300}
                  className="w-full h-[250px] md:h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-warm-white text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    רגעי התבוננות עמוקה
                  </p>
                </div>
              </div>
            </div>

            {/* About Image 3 */}
            <div className="animate-fade-in-up animate-delay-600">
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/about3.jpg"
                  alt="תרגול עם רקע מדברי עמוק - חיבור למרחב ולשורש"
                  width={400}
                  height={300}
                  className="w-full h-[250px] md:h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-warm-white text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    חיבור למרחב המדברי
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-sand/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-desert-blue/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection; 