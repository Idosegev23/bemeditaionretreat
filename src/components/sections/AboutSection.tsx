'use client';

import React from 'react';
import Image from 'next/image';
import { Container, Button } from '@/components/ui';

/**
 * About Section - סקשן אודות הריטריט עם מבנה דומה לאפרוז
 * 
 * תכונות:
 * - פתיח עם תמונה מצד
 * - "הסדנא תעסוק הפעם.."
 * - "מה מחכה לנו" עם משבצות
 * - "האירוע מתאים לכולם"
 */
const AboutSection: React.FC = () => {
  return (
    <section 
      className="py-20 md:py-32 bg-warm-white"
      id="about"
    >
      <Container>
        <div className="max-w-7xl mx-auto">
          
          {/* פתיח ראשוני */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            
            {/* תמונה ראשית */}
            <div className="animate-fade-in-up">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-sand/20 to-light-brown/20 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/gallery/3.jpg"
                    alt="ריטריט מדיטציה במדבר - נוכחות ושקט"
                    width={600}
                    height={500}
                    className="w-full h-[400px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* תוכן פתיח */}
            <div className="space-y-6 animate-fade-in-up animate-delay-200">
              
              {/* כותרת ראשית */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-text-primary leading-tight text-center">
                סופ״ש של נוכחות,
                <br />
                <span className="text-desert-blue">תנועה ושקט</span>
                <br />
                במדבר
              </h2>

              {/* פתיח כללי */}
              <p className="text-lg md:text-xl text-text-primary leading-relaxed text-center">
                סופ&quot;ש של חיבור פנימי, מדיטציות אקטיביות, תנועה ושקט במקום קסום במדבר יהודה.
                <br />
                בקבוצה אינטימית של אנשים איכותיים, ניפגש במקום עוצר נשימה שמזמין להעמקה פנימית.
                <br />
                יחד נעמיק אל תוך עולם המדיטציות, נעבור תהליך של מודעות וחיבור עם תנועה, מוזיקה ושקט – ונחגוג את החיים עם הרבה שמחה, טבע מדברי מרהיב וקבוצה תומכת.
                <br />
                הזדמנות לחוות וליצור שינוי פנימי אמיתי ומרפא בחיים שלכם בדרך קלילה, עמוקה, ומהנה.
              </p>
            </div>
          </div>

          {/* ציטוט באנר */}
          <div className="text-center mb-20 animate-fade-in-up animate-delay-400">
            <div className="bg-gradient-to-r from-sand/20 via-desert-blue/10 to-sand/20 rounded-2xl p-8 md:p-12">
              <blockquote className="text-2xl md:text-3xl font-light text-text-primary italic">
                &ldquo;החיים הם מסע, וכל רגע בו הוא הזדמנות להתעורר ולצמוח&rdquo;
              </blockquote>
            </div>
          </div>

          {/* הסדנא תעסוק הפעם */}
          <div className="mb-20 text-center animate-fade-in-up animate-delay-600">
            <h3 className="text-2xl md:text-3xl font-heading text-text-primary mb-6">
              הסדנא תעסוק הפעם ב:
            </h3>
            <div className="max-w-4xl mx-auto">
              <ul className="text-lg md:text-xl text-text-primary leading-relaxed space-y-3">
                <li>• מדיטציות אקטיביות בטבע - שילוב של תנועה והתבוננות פנימה</li>
                <li>• כתיבה אינטואיטיבית ותרגולי מודעות</li>
                <li>• תנועה חופשית ומוזיקה מרפאת</li>
                <li>• שיחות עומק ומעגלי שיתוף</li>
                <li>• זמן אישי במרחב המדברי המרהיב</li>
              </ul>
            </div>
          </div>

          {/* מה מחכה לנו */}
          <div className="mb-20 animate-fade-in-up animate-delay-800">
            <h3 className="text-3xl md:text-4xl font-heading text-text-primary mb-12 text-center">
              <i className="fas fa-heart text-desert-blue mr-3"></i>
              מה מחכה לנו?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* מדיטציות */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                  <i className="fas fa-om text-desert-blue mr-3"></i>
                  מדיטציות
                </h4>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  תגלו שיטות מדיטציה חדשות ותרגולים לעבודה עם הגוף והתודעה שילוו אתכם הרבה אחרי שהריטריט ייגמר
                </p>
                <ul className="text-sm text-text-primary space-y-2">
                  <li>• מגוון מדיטציות אקטיביות - שמשלבות תנועה והתבוננות פנימה</li>
                  <li>• גילוי מה מביאה המדיטציה לחיינו - איך לשלב אותה בחיי היומיום</li>
                  <li>• מרחב מדיטטיבי בטבע - שלווה ושקט פנימי</li>
                  <li>• תובנות משמעותיות ואינטגרציה של החוויה</li>
                </ul>
              </div>

              {/* תהליך מודעות */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                  <i className="fas fa-brain text-desert-blue mr-3"></i>
                  תהליך מודעות
                </h4>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  תתנתקו מהיום־יום ותחזרו מלאים באנרגיה חדשה ותחושת התחדשות פנימית
                </p>
                <ul className="text-sm text-text-primary space-y-2">
                  <li>• כלים לתהליך מודעות - להבין ולהכיר את החלקים בתוכנו</li>
                  <li>• התחברות פנימה לעצמנו – גם יחד, גם לבד</li>
                  <li>• חוויית חופש אמיתי - לקיחת אחריות על מה שקורה בתוכנו</li>
                  <li>• אווירה רגועה - התמזגות בתדר האנרגטי של המקום</li>
                </ul>
              </div>

              {/* חיבור קבוצתי */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                  <i className="fas fa-hands-helping text-desert-blue mr-3"></i>
                  חיבור קבוצתי ותמיכה
                </h4>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  אתם באים לפגוש את עצמכם, אבל אתם לא לבד
                </p>
                <ul className="text-sm text-text-primary space-y-2">
                  <li>• קבוצה אינטימית ואיכותית - תמיכה אנושית אמיתית</li>
                  <li>• מעגלי שיתוף המאפשרים לחקור ביחד ולמצוא מענה לשאלות עמוקות</li>
                  <li>• הילה תומכת של אנשים מדהימים שהופכים לחברים לדרך</li>
                </ul>
              </div>

              {/* הנאות החיים */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                  <i className="fas fa-glass-cheers text-desert-blue mr-3"></i>
                  הנאות החיים
                </h4>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  ויחד עם כל זה תהנו, תחגגו ותכייפו - חיבור של עומק ושמחה!
                </p>
                <ul className="text-sm text-text-primary space-y-2">
                  <li>• פעילויות ערב מגוונות: מוזיקה, תנועה חופשית ומדיטציות מיוחדות</li>
                  <li>• טיולים מדיטטיביים בטבע המדברי המרהיב</li>
                  <li>• זמן להנות מהמקום הקסום ושקיעות עוצרות נשימה</li>
                  <li>• ארוחות משותפות ואווירה חמה ותומכת</li>
                </ul>
              </div>
            </div>
          </div>

          {/* האירוע מתאים לכולם */}
          <div className="text-center mb-12 animate-fade-in-up animate-delay-1000">
            <div className="bg-gradient-to-r from-desert-blue/10 via-sand/20 to-desert-blue/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-heading text-text-primary mb-6">
                האירוע מתאים לכולם
              </h3>
              <p className="text-lg md:text-xl text-text-primary leading-relaxed max-w-4xl mx-auto">
                לא נדרש ניסיון קודם במדיטציה. הריטריט מתאים לכל מי שמחפש להעמיק פנימה, 
                לחוות רוגע ושלווה, ולהכיר אנשים עם ערכים דומים. 
                בין אם אתם מתחילים או מנוסים - המקום והקבוצה יתמכו בכם בדיוק במקום שבו אתם נמצאים.
              </p>
            </div>
          </div>

          {/* כפתור קריאה לפעולה */}
          <div className="text-center animate-fade-in-up animate-delay-1200">
            <Button
              variant="primary"
              size="lg"
              href="#contact"
              className="
                bg-gradient-to-r from-orange-500 to-orange-600
                hover:from-orange-600 hover:to-orange-700
                text-warm-white font-semibold 
                px-12 py-5 text-lg
                rounded-xl
                shadow-lg hover:shadow-xl
                transform hover:scale-105 hover:-translate-y-1
                transition-all duration-300
                border border-orange-400
                hover:border-orange-300
              "
              aria-label="מעבר לפרטים והרשמה"
            >
              בואו להיות איתנו
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default AboutSection; 