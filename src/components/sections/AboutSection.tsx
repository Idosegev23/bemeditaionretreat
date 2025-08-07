'use client';

import React from 'react';
import { Container } from '@/components/ui';

/**
 * About Section - על הרטריט (זהה לאפרוז)
 * 
 * תכונות:
 * - פתיח מרכזי כמו באפרוז
 * - ציטוט באנר
 * - קונטיינרים לבנים עגולים
 * - צבע טורקיז לכותרות (#56a8bf)
 */
const AboutSection: React.FC = () => {
  // Grid items with containers like in Afroz
  const experienceItems = [
    {
      id: 'meditation',
      icon: 'fas fa-om',
      title: 'מדיטציות',
      description: 'תגלו שיטות מדיטציה חדשות ותרגולים לעבודה עם הגוף והתודעה שילוו אתכם הרבה אחרי שהריטריט ייגמר'
    },
    {
      id: 'nature',
      icon: 'fas fa-mountain',
      title: 'טבע מדברי מרהיב',
      description: 'נפגש במקום קסום במצוקי דרגות, עם נוף עוצר נשימה אל המדבר והים המלח'
    },
    {
      id: 'movement',
      icon: 'fas fa-heart',
      title: 'תנועה ומוזיקה',
      description: 'נתחבר לגוף שלנו דרך תנועה חופשית, ריקוד ומוזיקה מרפאת שמעוררת את הנשמה'
    },
    {
      id: 'writing',
      icon: 'fas fa-feather-alt',
      title: 'כתיבה אינטואיטיבית',
      description: 'נחקור את העולם הפנימי שלנו דרך כתיבה ספונטנית וחיבור לתהליכים פנימיים'
    },
    {
      id: 'community',
      icon: 'fas fa-users',
      title: 'קהילה תומכת',
      description: 'נחוה קהילה תומכת, בלי מסכות, במקום עוצמתי בטבע עם אנשים איכותיים'
    },
    {
      id: 'silence',
      icon: 'fas fa-dove',
      title: 'שקט ומרחב אישי',
      description: 'זמן לפנייה פנימית, להקשבה לעצמנו ולמצוא מקום של שקט וחיבור פנימי'
    }
  ];

  return (
    <section 
      className="py-20 md:py-32 bg-cream text-center"
      id="about"
    >
      <Container>
        {/* Main white container wrapping everything like in Afroz */}
        <div className="max-w-6xl mx-auto bg-white/90 rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg">
          
          {/* Hidden title like in Afroz */}
          <h2 className="hidden">על הרטריט</h2>
          
          {/* Central introduction - much bigger, lighter weight and perfectly centered */}
          <div className="mb-16">
            <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-text-primary font-light leading-relaxed max-w-7xl mx-auto text-center px-4">
              מסע עומק וחופש לגוף ולנפש של סופ״ש במדבר יהודה הקסום והמרפא.
              <br className="my-4" />
              בקבוצה אינטימית של אנשים איכותיים, ניפגש במקום קסום, תומך ומרגיע במצוקי דרגות.
              <br className="my-4" />
              יחד נעמיק אל תוך עולם המדיטציות, נעבור תהליך של מודעות, חיבור והתחדשות עם תנועה, כתיבה ושקט – ונחגוג את החיים עם הרבה שמחה, טבע מדברי מרהיב ואנשים טובים.
              <br className="my-4" />
              הזדמנות לחוות וליצור שינוי פנימי אמיתי ומרפא בחיים שלכם בדרך קלילה, עמוקה, ומהנה.
              <br className="my-4" />
              משתתפי הריטריט מעידים שהחוויה שינתה את חייהם - והפכה לחלק בלתי נפרד מהם. בגוף, בלב ובנשמה.
            </p>
          </div>

          {/* Quote banner with background image and white text */}
          <div className="mb-16">
            <div 
              className="relative rounded-3xl p-12 md:p-16 overflow-hidden"
              style={{
                backgroundImage: 'url(/images/gallery/8.jpg)', // Using one of the gallery images
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
                  &ldquo;החיים הם מסע, וכל רגע בו הוא הזדמנות להתעורר ולצמוח&rdquo;
                </div>
              </div>
            </div>
          </div>

          {/* What awaits us - with turquoise color and white containers */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-heading mb-12 flex items-center justify-center gap-3" style={{ color: '#4A9EB3' }}>
              <i className="fas fa-heart"></i>
              מה מחכה לנו?
            </h3>
            
            {/* Experience grid with white containers like Afroz */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experienceItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Icon at the top */}
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-md flex items-center justify-center mb-4">
                      <i className={`${item.icon} text-3xl`} style={{ color: '#4A9EB3' }}></i>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-gray-100 text-center" style={{ color: '#4A9EB3' }}>
                    {item.title}
                  </h4>
                  <p className="text-text-secondary leading-relaxed text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="
                text-white font-bold 
                px-12 py-4 text-lg
                rounded-full
                shadow-lg hover:shadow-xl
                transform hover:scale-105 hover:-translate-y-1
                transition-all duration-300 ease-out
              "
              style={{
                backgroundColor: '#4A9EB3',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#398EA0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#4A9EB3';
              }}
              aria-label="מעבר לפרטים והרשמה"
            >
              בואו להיות איתנו
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default AboutSection; 