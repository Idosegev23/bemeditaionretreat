'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui';

/**
 * Gallery Section - גלריית תמונות בסגנון אפרוז
 * 
 * תכונות:
 * - תמונה גדולה אחת מוצגת
 * - תמונות ממוזערות בתחתית לניווט
 * - אנימציות חלקות בין תמונות
 * - עיצוב דומה לאפרוז
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
    alt: 'מחולת המדיטציה',
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
        {/* Main white container wrapping everything like in About */}
        <div className="max-w-4xl mx-auto bg-white/90 rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-desert-brown mb-6">
              גלריה
            </h2>
            <p className="text-lg text-text-secondary mb-4">
              תמונות של מצוקי דרגות, החוויות, המדיטציות והטבע המדברי הקסום - הרגעים האמיתיים של הריטריט
            </p>
            <div className="text-text-secondary font-medium text-sm">
              לחצו על התמונות המוקטנות לתצוגה מלאה
            </div>
          </div>

          {/* Quote banner with background image */}
          <div className="mb-12">
            <div 
              className="relative rounded-3xl p-12 md:p-16 overflow-hidden"
              style={{
                backgroundImage: 'url(/images/gallery/5.jpg)', // Using a gallery image
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
                  &ldquo;כל רגע במדבר הוא תמונה חיה של יופי ושקט&rdquo;
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority={selectedImage === 0}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-medium text-lg">
                  {galleryImages[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(index)}
                className={`
                  relative overflow-hidden rounded-md transition-all duration-300 
                  focus:outline-none 
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
                  {selectedImage === index && (
                    <div className="absolute inset-0 border-2 border-white" />
                  )}
                  {selectedImage !== index && (
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-200" />
                  )}
                </div>
              </button>
            ))}
          </div>
          
          <div className="text-center">
            <span className="text-text-secondary text-sm">
              {selectedImage + 1} מתוך {galleryImages.length}
            </span>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default GallerySection; 