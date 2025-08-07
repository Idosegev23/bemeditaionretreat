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
  return (
    <section 
      className="py-20 md:py-32 bg-cream"
      id="gallery"
    >
      <Container>
        {/* Main white container wrapping everything like in About */}
        <div className="max-w-6xl mx-auto bg-white/90 rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg">
          
          {/* כותרת ללא תיאור מורכב */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading mb-6" style={{ color: '#4A9EB3' }}>
              גלריה
            </h2>
          </div>

          {/* Grid תמונות מרובעות בסגנון אפרוז - ללא כותרות */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 group cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                {/* Overlay עדין על hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* 📝 הוראות עריכה - להוספת תמונות חדשות */}
          <div className="mt-8 text-center">
            <div className="text-text-secondary text-sm bg-gray-50 rounded-lg p-4 border-l-4 border-blue-400">
              <strong>📝 הוראות עריכה:</strong> להוספת תמונות חדשות:
              <br />1. העלו קבצים לתיקייה <code className="bg-gray-200 px-2 py-1 rounded mx-1">/public/images/gallery/</code>
              <br />2. עדכנו את רשימת <code className="bg-gray-200 px-2 py-1 rounded mx-1">galleryImages</code> 
              בשורות 18-109 בקובץ <code className="bg-gray-200 px-2 py-1 rounded mx-1">GallerySection.tsx</code>
              <br />3. הוסיפו אלמנט חדש עם id, src, alt ו-description
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default GallerySection; 