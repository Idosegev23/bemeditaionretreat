'use client';

import React from 'react';
import { Container, Button } from '@/components/ui';

/**
 * Testimonials Section - המלצות ממשתתפים
 * 
 * תכונות:
 * - המלצות אמיתיות מהאתר המקורי מותאמות לריטריט במדבר
 * - עיצוב כרטיסי המלצות אלגנטי
 * - ציטוט מרכזי בכותרת
 */
const TestimonialsSection: React.FC = () => {
  // המלצות מהאתר המקורי מותאמות לריטריט במדבר
  const testimonials = [
    {
      id: 1,
      quote: "תתאר/י לעצמך מה זה לקחת סופ\"ש ולהתחבר לעצמך, לאנשים שתומכים בך ולטבע המדברי הקסום במצוקי דרגות. קח/י זמן לעצמך - תן/י לעצמך מתנה בלתי נשכחת שיעלה אותך מדרגה!",
      name: "צ'רלי",
      role: "משתתף בריטריט"
    },
    {
      id: 2,
      quote: "לכל מי שמתעניין בסדנת מדיטציה במדבר עם יובל - סדנה מאד מומלצת במקום מקסים במצוקי דרגות עם אנשים מאד מיוחדים ויובל שאין עוד כמותו כמדריך, מלווה ותומך. יצאתי משם אחרי הסופ\"ש, נקי טהור ומלא מרץ.",
      name: "רמי",
      role: "משתתף בריטריט"
    },
    {
      id: 3,
      quote: "היה לי העונג להיות מקבוצת החלוצים במדבר... הדבר הכי טוב שהענקתי לעצמי אי פעם. טיפול אמיתי ללב ולרוח... הרגישות של יובל לאחר והאבחנות שלו לפרטים היא פשוט פנומנלית... קדימה, בואו למדבר 🏜️✨",
      name: "מיש",
      role: "משתתף בריטריט"
    },
    {
      id: 4,
      quote: "התפתחות אישית, תהליכים שפותרים שנים של אתגרים, כיף, חברה איכותית וחברים שהופכים למשפחה - זאת חוויה של ריטריט במדבר! אסור לפספס!",
      name: "משתתף מדהים",
      role: "ריטריט 2023"
    },
    {
      id: 5,
      quote: "החוויה מומלצת בחום רב 🙂 השתתפתי במספר סדנאות של יובל, הגעתי במצבים שונים ותמיד תמיד נהניתי ורציתי עוד 🙂 יובל מאפשר מרחב רגוע, כייפי ומעשיר 🙂 תודה",
      name: "אסף רוזנברג",
      role: "משתתף בסדנאות"
    },
    {
      id: 6,
      quote: "יש הרבה חוויות בחיים, אבל רק אחת שנשארה לי בלב במיוחד: ריטריט המדיטציה במדבר עם יובל. בסופ\"ש אחד פגשתי אנשים מהארץ – כאלה שמביאים שמחת חיים אמיתית, עומק וחיבור. המעגלים, המדיטציות, והאווירה הייחודית במצוקי דרגות יצרו תחושה של בית – מרחב שממלא בהשראה ונותן כוח להמשך הדרך. מאז, נוצרו חברויות אמיתיות שממשיכות איתי גם מחוץ לסדנה. וכל פעם שאני נזכר בסופ\"ש ההוא – אני מתמלא בטוב וחושב לעצמי: אולי השנה שוב?",
      name: "אייל",
      role: "משתתף בריטריט"
    }
  ];

  return (
    <section 
      className="py-20 md:py-32 bg-gradient-to-b from-cream to-warm-white"
      id="testimonials"
    >
      <Container>
        <div className="max-w-6xl mx-auto">
          
          {/* כותרת עם ציטוט */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-text-primary mb-8">
              המלצות ממשתתפים
            </h2>
            
            {/* ציטוט מרכזי */}
            <div className="bg-gradient-to-r from-desert-blue/10 to-sand/20 rounded-2xl p-8 max-w-4xl mx-auto mb-8">
              <blockquote className="text-xl md:text-2xl text-text-primary font-light italic leading-relaxed">
                "התחברות עמוקה לעצמי ולאחרים שינתה את החיים שלי"
              </blockquote>
            </div>
          </div>

          {/* רשת כרטיסי המלצות */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`
                  bg-warm-white rounded-2xl p-6 shadow-lg hover:shadow-xl
                  transition-all duration-300 border border-sand/20
                  hover:border-desert-blue/30 hover:-translate-y-2
                  animate-fade-in-up animate-delay-${200 + index * 150}
                `}
              >
                
                {/* ציטוט */}
                <div className="mb-6">
                  <div className="text-4xl text-desert-blue/30 mb-4 leading-none">"</div>
                  <blockquote className="text-text-secondary leading-relaxed text-sm">
                    {testimonial.quote}
                  </blockquote>
                  <div className="text-4xl text-desert-blue/30 text-left leading-none -mt-2">"</div>
                </div>
                
                {/* מידע על המלצה */}
                <div className="border-t border-sand/30 pt-4">
                  <h4 className="text-lg font-semibold text-text-primary mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-text-secondary text-sm">
                    {testimonial.role}
                  </p>
                </div>
                
                {/* אלמנט עיצובי */}
                <div className="flex justify-center mt-4 space-x-1">
                  <div className="w-1 h-1 bg-desert-blue/60 rounded-full"></div>
                  <div className="w-1 h-1 bg-sand/60 rounded-full"></div>
                  <div className="w-1 h-1 bg-desert-blue/60 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>

          {/* קריאה לפעולה */}
          <div className="text-center animate-fade-in-up animate-delay-1200">
            <div className="bg-cream/60 rounded-2xl p-8 max-w-3xl mx-auto">
              <p className="text-lg text-text-primary leading-relaxed mb-6">
                רוצים להיות חלק מהחוויה הבאה? <br />
                הצטרפו אלינו לסופ"ש שישנה את חייכם
              </p>
              
              <Button
                variant="primary"
                size="lg"
                href="#pricing"
                className="
                  bg-gradient-to-r from-desert-blue to-desert-blue/90
                  hover:from-desert-blue/90 hover:to-desert-blue
                  text-warm-white font-semibold 
                  px-12 py-5 text-lg
                  rounded-xl
                  shadow-lg hover:shadow-xl
                  transform hover:scale-105 hover:-translate-y-1
                  transition-all duration-300
                  border border-desert-blue/30
                  hover:border-desert-blue/50
                "
                aria-label="קחו חלק במסע"
              >
                קחו חלק במסע
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection; 