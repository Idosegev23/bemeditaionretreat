'use client';

import React from 'react';
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
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const resumeTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // Autoplay every 3s. To change speed, edit intervalMs.
  React.useEffect(() => {
    if (isPaused) return;
    const intervalMs = 3000; // 3 seconds per image
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [isPaused]);

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    // Resume autoplay after 8s from manual interaction
    resumeTimeoutRef.current = setTimeout(() => setIsPaused(false), 8000);
  };

  return (
    <section 
      className="py-12 md:py-20 bg-cream"
      id="gallery"
    >
      <Container>
        {/* Main white container wrapping everything like in About */}
        <div 
          className="max-w-6xl mx-auto bg-white/90 rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* כותרת ללא תיאור מורכב */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading mb-6" style={{ color: '#4A9EB3' }}>
              גלריה
            </h2>
          </div>

          {/* Main image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg mb-6">
            <Image
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              fill
              priority
              className="object-cover m-0 rounded-none"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>

          {/* Hidden radio inputs like Afroz (selectors).
              לשינוי/הרחבה של התמונות, עדכנו את המערך galleryImages למעלה.
              בדפדופים באמצעות מקלדת: חיצים ימינה/שמאלה יבחרו קלטים בקבוצת radio */}
          <div className="sr-only" aria-hidden="true">
            {galleryImages.map((image, index) => (
              <input
                key={`input-${image.id}`}
                type="radio"
                id={`gallery-${index}`}
                name="gallery"
                className="gallery__selector"
                checked={index === activeIndex}
                onChange={() => handleManualSelect(index)}
              />
            ))}
          </div>

          {/* Thumbnails - labels for the hidden radio inputs */}
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 gap-3" role="radiogroup" aria-label="גלריית תמונות - בחרו תמונה">
            {galleryImages.map((image, index) => {
              const isActive = index === activeIndex;
              return (
                <label
                  key={`label-${image.id}`}
                  htmlFor={`gallery-${index}`}
                  onClick={() => handleManualSelect(index)}
                  role="radio"
                  aria-checked={isActive}
                  className="relative block w-full aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                  aria-label={`צפייה בתמונה ${index + 1}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover m-0 rounded-none"
                    sizes="240px"
                  />
                </label>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default GallerySection; 