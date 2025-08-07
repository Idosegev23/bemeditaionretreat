'use client';

import React from 'react';
import { Container } from '@/components/ui';

/**
 * Program Section - תוכנית הסופ"ש בסגנון אפרוז
 * 
 * תכונות:
 * - יום שישי מעל יום שבת (לא לצד)
 * - עיצוב ברור ומסודר כמו אפרוז
 * - צבעים מתאימים למערכת החדשה
 */
const ProgramSection: React.FC = () => {
  // תוכנית יום שישי
  const fridaySchedule = [
    {
      time: '16:00',
      title: 'הגעה וקבלת פנים',
      description: 'הגעה למצוקי דרגות, קבלת פנים חמה והתמקמות במקום הקסום'
    },
    {
      time: '17:00',
      title: 'פתיחת הסופ"ש',
      description: 'מעגל פתיחה, היכרות, ושיתוף כוונות לסופ"ש'
    },
    {
      time: '18:00',
      title: 'טיול מדיטטיבי בטבע',
      description: 'הליכה שקטה במדבר, התחברות למקום ונוכחות פשוטה מול הנוף המרהיב'
    },
    {
      time: '19:30',
      title: 'ארוחת ערב משותפת',
      description: 'ארוחה קהילתית באווירה חמה ותומכת'
    },
    {
      time: '21:00',
      title: 'מדיטציה אקטיבית ומוזיקה',
      description: 'תרגול מדיטציה בתנועה, מוזיקה חיה ותנועה חופשית'
    },
    {
      time: '22:30',
      title: 'זמן חופשי ומנוחה',
      description: 'זמן אישי, שיחות בקבוצות קטנות, מנוחה'
    }
  ];

  // תוכנית יום שבת
  const saturdaySchedule = [
    {
      time: '07:00',
      title: 'מדיטציית שחרית',
      description: 'מדיטציה שקטה לקראת הזריחה, התחברות ליום החדש'
    },
    {
      time: '08:00',
      title: 'ארוחת בוקר',
      description: 'ארוחת בוקר קלה ומזינה'
    },
    {
      time: '09:30',
      title: 'כתיבה אינטואיטיבית',
      description: 'תרגול כתיבה פנימית, חקירה עצמית והתבוננות'
    },
    {
      time: '11:00',
      title: 'מדיטציות בתנועה',
      description: 'מגוון מדיטציות אקטיביות מבית אושו - תנועה והתבוננות פנימה'
    },
    {
      time: '12:30',
      title: 'ארוחת צהריים',
      description: 'ארוחה משותפת וזמן מנוחה'
    },
    {
      time: '14:00',
      title: 'זמן אישי במדבר',
      description: 'זמן להתבודדות, טיול אישי, מנוחה או צילום'
    },
    {
      time: '16:00',
      title: 'מעגל שיתוף',
      description: 'שיתוף החוויות, תובנות ותמיכה קבוצתית'
    },
    {
      time: '17:30',
      title: 'מדיטציית סיום',
      description: 'תרגול סיום, אינטגרציה של החוויה'
    },
    {
      time: '18:30',
      title: 'ארוחת סיום ופרידה',
      description: 'ארוחה חגיגית ופרידה חמה עד הפעם הבאה'
    }
  ];

  const TimeSlot = ({ time, title, description }: { time: string; title: string; description: string }) => (
    <div className="flex items-start space-x-4 rtl:space-x-reverse p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex-shrink-0">
        <div 
          className="text-white px-3 py-2 rounded-lg font-semibold text-sm"
          style={{ backgroundColor: '#4A9EB3' }}
        >
          {time}
        </div>
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-text-primary mb-2">
          {title}
        </h4>
        <p className="text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <section 
      className="py-20 md:py-32 bg-cream"
      id="program"
    >
      <Container>
        {/* Main white container wrapping everything like in About */}
        <div className="max-w-6xl mx-auto bg-white/90 rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-desert-brown mb-6">
              תוכנית הסופ&quot;ש
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              שני ימים, שני מרחבים, חוויה אחת שלמה במדבר - 
              <br className="hidden sm:block" />
              יומיים של נוכחות, תנועה ושקט פנימי
            </p>
          </div>

          {/* Quote banner with background image */}
          <div className="mb-16">
            <div 
              className="relative rounded-3xl p-12 md:p-16 overflow-hidden"
              style={{
                backgroundImage: 'url(/images/gallery/10.jpg)', // Using a gallery image
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
                  &ldquo;הזמן הוא המתנה היקרה ביותר שאנחנו יכולים לתת לעצמנו&rdquo;
                </div>
              </div>
            </div>
          </div>

          {/* יום שישי */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-sand/30 via-light-brown/20 to-sand/30 rounded-xl p-8 mb-8">
              <h3 className="text-2xl md:text-3xl font-heading text-desert-brown mb-4 text-center">
                יום שישי, 26 בספטמבר
              </h3>
              <p className="text-lg text-text-secondary text-center">
                יום פתיחה - התחברות למקום ולקבוצה
              </p>
            </div>
            <div className="space-y-4">
              {fridaySchedule.map((item, index) => (
                <TimeSlot key={index} {...item} />
              ))}
            </div>
          </div>

          {/* יום שבת */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-sand/30 via-light-brown/20 to-sand/30 rounded-xl p-8 mb-8">
              <h3 className="text-2xl md:text-3xl font-heading text-desert-brown mb-4 text-center">
                יום שבת, 27 בספטמבר
              </h3>
              <p className="text-lg text-text-secondary text-center">
                יום העמקה - מדיטציות, כתיבה ואינטגרציה
              </p>
            </div>
            
            <div className="space-y-4">
              {saturdaySchedule.map((item, index) => (
                <TimeSlot key={index} {...item} />
              ))}
            </div>
          </div>

          {/* הערות חשובות */}
          <div className="bg-white rounded-xl p-8 mb-12 shadow-sm">
            <h4 className="text-xl font-semibold text-desert-brown mb-4 text-center">
              הערות חשובות
            </h4>
            <div className="grid md:grid-cols-2 gap-6 text-text-secondary">
              <div>
                <h5 className="font-semibold text-text-primary mb-2">מה כלול</h5>
                <ul className="space-y-1 text-sm">
                  <li>• כל הפעילויות והמדיטציות</li>
                  <li>• הנחיה מקצועית לאורך כל הסופ&quot;ש</li>
                  <li>• חומרי תרגול</li>
                  <li>• מרחב תמיכה קבוצתי</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-text-primary mb-2">מה לא כלול</h5>
                <ul className="space-y-1 text-sm">
                  <li>• לינה (נרשם בנפרד)</li>
                  <li>• ארוחות (מתארגנים יחד)</li>
                  <li>• הגעה למקום</li>
                  <li>• ביטוח אישי</li>
                </ul>
              </div>
            </div>
          </div>

          {/* קריאה לפעולה */}
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
              aria-label="הרשמה לריטריט"
            >
              הרשמה לריטריט 
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ProgramSection; 