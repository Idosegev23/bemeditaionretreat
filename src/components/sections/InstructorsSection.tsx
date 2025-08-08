'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui';

/**
 * Instructors Section - "הנחיה מתוך נוכחות, ניסיון ורגישות" - סקשן צוות המנחים
 * 
 * תכונות:
 * - מנחה ראשי בבלוק בולט ומפורט
 * - שאר המנחים בגריד רספונסיבי
 * - תמונות עגולות עם hover effects עדינים
 * - עיצוב מתון ורגוע
 * - ציטוט אישי למנחה הראשי
 */
const InstructorsSection: React.FC = () => {
  // Main instructor data
  const mainInstructor = {
    name: 'ז׳יוואני יובל',
    image: '/images/instructors/jivani-yuval.jpg',
    role: 'מנחה ראשי',
    description: `מתרגל ומנחה מדיטציות מבית אושו מעל 20 שנה.
ממקימי פסטיבל נאטראז׳ ומרכז OSHO TLV.
מטפל בגישה הוליסטית (NLP, הילינג, פסיכותרפיה גופנית), ומביא גישה נגישה, מאפשרת ועמוקה.
מפיק סדנאות Be Meditation, וסופי שבוע של חיבור, שקט ומודעות.
מנגן קלרינט להנאתו.`,
    quote: 'אני מאמין שחיבור לשקט הפנימי קיים אצל כל אחד – רק צריך לפתוח לו מרחב'
  };

  // Supporting instructors data
  const supportingInstructors = [
    {
      name: 'דנה שירה',
      image: '/images/instructors/dana-shira.jpg',
      specialty: 'קבלת שבת ושירת סאונד הילינג',
      description: 'מנחה טקסים וחיבורים דרך מוזיקה מקודשת וצלילים.'
    },
    {
      name: 'גילי פז',
      image: '/images/instructors/gili-paz.jpg',
      specialty: 'הנחיית סדנת אכילה מודעת',
      description: 'מלווה תהליכים של נוכחות, תזונה והקשבה לגוף.'
    },
    {
      name: 'שי וירג',
      image: '/images/instructors/shai-virg.jpg',
      specialty: 'הנחיית צ׳י קונג',
      description: 'מדריך וותיק בשיטת הצ׳י קונג, מחבר בין תנועה, נשימה ואיזון פנימי.'
    }
  ];

  // Placeholder for missing images
  const getImageWithFallback = (src: string, alt: string) => (
              <div className="relative w-full h-full bg-gradient-to-br from-desert-blue-light/40 to-desert-brown/30 rounded-2xl flex items-center justify-center overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `
              <div class="w-16 h-16 bg-desert-blue/20 rounded-xl flex items-center justify-center">
                <span class="text-2xl font-heading text-desert-blue">${alt.charAt(0)}</span>
              </div>
            `;
          }
        }}
      />
    </div>
  );

  return (
    <section 
      className="py-16 md:py-24 bg-warm-white relative overflow-hidden"
      id="instructors"
    >
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-80 h-80 bg-desert-blue-light/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-desert-brown/20 rounded-full blur-3xl"></div>
      </div>

      <Container>
        {/* Main white container wrapping everything like in About */}
        <div className="max-w-6xl mx-auto bg-white/90 rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg relative z-10">
          
          {/* Main Title */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-primary mb-8 leading-tight">
              הנחיה מתוך
              <br />
              <span className="text-desert-blue">נוכחות, ניסיון ורגישות</span>
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              צוות מנחים מנוסה ומסור לליווי חוויה של עומק ואמת
            </p>
          </div>

          {/* Quote banner with background image */}
          <div className="mb-16">
            <div 
              className="relative rounded-3xl p-12 md:p-16 overflow-hidden"
              style={{
                backgroundImage: 'url(/images/gallery/18.jpg)', // Using a gallery image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '300px'
              }}
            >
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* Quote text */}
              <div className="relative z-10 text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-light text-white italic leading-relaxed" style={{
                  textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
                }}>
                  &ldquo;המורה האמיתי הוא זה שמעורר אותך להיות המורה של עצמך&rdquo;
                </div>
              </div>
            </div>
          </div>

          {/* Main Instructor - Featured */}
          <div className="mb-24 animate-fade-in-up animate-delay-200">
            <div className="bg-cream/60 rounded-3xl p-8 md:p-12 shadow-lg border border-desert-blue-light/30">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                
                {/* Main Instructor Image */}
                <div className="group flex-shrink-0">
                  <div className="relative w-48 h-48 md:w-56 md:h-56">
                    {getImageWithFallback(mainInstructor.image, mainInstructor.name)}
                  </div>
                </div>
                
                {/* Main Instructor Content */}
                <div className="flex-grow text-center lg:text-right space-y-6">
                  <div>
                    <div className="text-lg text-desert-blue font-medium mb-2">
                      {mainInstructor.role}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-heading text-text-primary mb-4">
                      {mainInstructor.name}
                    </h3>
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-text-secondary leading-relaxed whitespace-pre-line">
                      {mainInstructor.description}
                    </p>
                  </div>
                  
                  {/* Additional personal note - not as formal quote */}
                  <div className="mt-4">
                    <p className="text-text-secondary leading-relaxed italic">
                      {mainInstructor.quote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Instructors Grid */}
          <div className="mb-20 animate-fade-in-up animate-delay-600">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportingInstructors.map((instructor) => (
                <div 
                  key={instructor.name}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* Instructor Image */}
                  <div className="flex justify-center mb-6">
                    <div className="relative w-24 h-24 md:w-32 md:h-32">
                      {getImageWithFallback(instructor.image, instructor.name)}
                    </div>
                  </div>
                  
                  {/* Instructor Info */}
                  <div className="text-center">
                    <h4 className="text-xl font-heading text-text-primary mb-2">
                      {instructor.name}
                    </h4>
                    <div className="text-desert-blue font-medium mb-4 text-sm">
                      {instructor.specialty}
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {instructor.description}
                    </p>
                    
                    {/* Small decorative element */}
                    <div className="mt-6 flex justify-center space-x-2">
                      <div className="w-2 h-2 bg-desert-blue rounded-full opacity-60"></div>
                      <div className="w-2 h-2 bg-desert-blue-light rounded-full opacity-40"></div>
                      <div className="w-2 h-2 bg-desert-brown rounded-full opacity-30"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-20 animate-fade-in-up animate-delay-1000">
            <div className="max-w-3xl mx-auto space-y-6">
              
              {/* Decorative separator */}
              <div className="flex items-center justify-center space-x-4">
                <div className="h-px bg-gradient-to-r from-transparent via-desert-blue/30 to-transparent w-32"></div>
                <div className="w-3 h-3 bg-desert-blue/40 rounded-full"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-desert-blue/30 to-transparent w-32"></div>
              </div>
              
              <p className="text-lg text-text-secondary leading-relaxed">
                כל מנחה מביא איתו שנות ניסיון, חכמה ורגישות ליצירת מרחב בטוח ומזמין
                <br />
                למסע של גילוי עצמי ושקט פנימי
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default InstructorsSection; 