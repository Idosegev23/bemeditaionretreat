'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui';

/**
 * Gallery Section - גלריית תמונות עם עיצוב דומה לאפרוז
 * 
 * תכונות:
 * - תמונה גדולה אחת מוצגת
 * - תמונות ממוזערות בתחתית לניווט
 * - אנימציות חלקות בין תמונות
 * - רספונסיבי למובייל
 */

// תמונות הגלריה - תמונות אמיתיות מהריטריט
const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/1.jpg',
    alt: 'נוף מדברי במצוקי דרגות',
    description: 'הנוף המרהיב ממקום הריטריט'
  },
  {
    id: 2,
    src: '/images/gallery/2.jpg',
    alt: 'מדיטציה בטבע',
    description: 'רגעי התבוננות עמוקה בטבע'
  },
  {
    id: 3,
    src: '/images/gallery/3.jpg',
    alt: 'קבוצת המשתתפים',
    description: 'קבוצה אינטימית ותומכת'
  },
  {
    id: 4,
    src: '/images/gallery/4.jpg',
    alt: 'זריחה במדבר',
    description: 'זריחה מרהיבה במצוקי דרגות'
  },
  {
    id: 5,
    src: '/images/gallery/5.jpg',
    alt: 'מרחב המדיטציה',
    description: 'המרחב הקדוש שלנו'
  },
  {
    id: 6,
    src: '/images/gallery/6.jpg',
    alt: 'רגעי חברות',
    description: 'חיבורים אמיתיים'
  },
  {
    id: 7,
    src: '/images/gallery/7.jpg',
    alt: 'נוף מרהיב',
    description: 'טבע מדברי קסום'
  },
  {
    id: 8,
    src: '/images/gallery/8.jpg',
    alt: 'מחלת המדיטציה',
    description: 'מקום קדוש לתרגול'
  },
  {
    id: 9,
    src: '/images/gallery/9.jpg',
    alt: 'קבוצה במדיטציה',
    description: 'מעגל מדיטציה במדבר'
  },
  {
    id: 10,
    src: '/images/gallery/10.jpg',
    alt: 'שקיעה במדבר',
    description: 'שקיעות קסומות במצוקי דרגות'
  },
  {
    id: 11,
    src: '/images/gallery/11.jpg',
    alt: 'נוף פנורמי',
    description: 'מבט על הכפר והמצוקים'
  },
  {
    id: 12,
    src: '/images/gallery/12.jpg',
    alt: 'טבע מדברי',
    description: 'הטבע הפראי של המדבר'
  },
  {
    id: 13,
    src: '/images/gallery/13.jpg',
    alt: 'ירח מעל המצוק',
    description: 'לילה קסום במדבר'
  },
  {
    id: 14,
    src: '/images/gallery/14.jpg',
    alt: 'נוף המצוקים',
    description: 'מראות עוצרי נשימה'
  },
  {
    id: 15,
    src: '/images/gallery/15.jpg',
    alt: 'חוויית הקבוצה',
    description: 'רגעי שיתוף וחיבור'
  }
];

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section 
      className="py-20 md:py-32 bg-cream"
      id="gallery"
    >
      <Container>
        <div className="max-w-4xl mx-auto">
          
          {/* כותרת וחיאור */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-text-primary mb-6">
              גלריה
            </h2>
            
            <p className="text-lg text-text-primary mb-4">
              תמונות מהריטריט, החוויות, המדיטציות והטבע המדברי הקסום - הרגעים האמיתיים של הסופ&quot;ש
            </p>
            
            <div className="text-text-secondary font-medium">
              לחצו על התמונות המוקטנות לתצוגה מלאה
            </div>
          </div>

          {/* תמונה ראשית */}
          <div className="mb-8">
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority={selectedImage === 0}
              />
              
              {/* כיתוב התמונה */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-medium text-lg">
                  {galleryImages[selectedImage].description}
                </p>
              </div>
            </div>
          </div>

          {/* תמונות ממוזערות */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(index)}
                className={`
                  relative overflow-hidden rounded-lg transition-all duration-300 
                  focus:outline-none focus:ring-2 focus:ring-desert-blue focus:ring-offset-2
                  ${selectedImage === index 
                    ? 'ring-3 ring-desert-blue shadow-lg transform scale-105' 
                    : 'hover:scale-105 hover:shadow-md'
                  }
                `}
                aria-label={`הצג תמונה: ${image.alt}`}
              >
                <div className="relative w-20 h-16 md:w-24 md:h-18">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                  
                  {/* Overlay לתמונה שלא נבחרה */}
                  {selectedImage !== index && (
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-200" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* אינדיקטור מספר תמונה */}
          <div className="text-center mt-6">
            <span className="text-text-secondary text-sm">
              {selectedImage + 1} מתוך {galleryImages.length}
            </span>
          </div>

          {/* כפתורי ניווט */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1)}
              className="
                bg-white/80 hover:bg-white text-text-primary
                p-3 rounded-full shadow-lg hover:shadow-xl
                transition-all duration-300 transform hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-desert-blue focus:ring-offset-2
              "
              aria-label="תמונה קודמת"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <span className="text-text-secondary font-medium">
              ניווט
            </span>
            
            <button
              onClick={() => setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0)}
              className="
                bg-white/80 hover:bg-white text-text-primary
                p-3 rounded-full shadow-lg hover:shadow-xl
                transition-all duration-300 transform hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-desert-blue focus:ring-offset-2
              "
              aria-label="תמונה הבאה"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default GallerySection; 