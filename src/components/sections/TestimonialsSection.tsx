'use client';

import React from 'react';
import { Container } from '@/components/ui';
import Button from '@/components/ui/Button';

/**
 * Testimonials Section - המלצות מהמשתתפים
 * 
 * תכונות:
 * - תוכן זהה לאפרוז
 * - עיצוב מותאם לצבעים החדשים
 * - ציטוט מרכזי בכותרת
 */
const TestimonialsSection: React.FC = () => {
  // Testimonials data copied exactly from Afroz
  const testimonials = [
    {
      id: 1,
      quote: "תתאר/י לעצמך מה זה לקחת שבוע ולהתחבר לעצמך, לאנשים שתומכים בך ולטבע - באי יווני, חוף, ועם נשמות בדרך התפתחות כמוך מכל רחבי העולם. קח/י זמן לעצמך - תן/י לעצמך מתנה בלתי נשכחת שיעלה אותך מדרגה!",
      name: "צ'רלי",
      title: "משתתף בריטריט"
    },
    {
      id: 2,
      quote: "לכל מי שמתעניין בסדנת אושו באפרוז (יוון)--סדנה מאד מומלצת במקום מקסים באי לסבוס עם אנשים מאד מיוחדים וז'וואני שאין עוד כמותו כמדריך, מלווה ותומך. יצאתי משם אחרי שבוע, נקי טהור ומלא מרץ.",
      name: "רמי",
      title: "משתתף בריטריט"
    },
    {
      id: 3,
      quote: "היה לי העונג להיות מקבוצת החלוצים, מחזור א׳ לאפרוז... הדבר הכי טוב שהענקתי לעצמי אי פעם. טיפול 10000 ללב ולרוח... הרגישות של ג׳בני לאחר והאבחנות שלו לפרטים היא פשוט פנומנלית... קדימה, תעופו לאפרוז 🕊️🇬🇷",
      name: "מיש",
      title: "משתתף בריטריט"
    },
    {
      id: 4,
      quote: "התפתחות אישית, טיפולים שפוטרים שנות של אתגרים, כיף, חברה בין לאומית וחברים שהופכים למשפחה - זאת חוויה של אפרוז! אסור לפספס!",
      name: "משתתף נוסף",
      title: "ריטריט 2023"
    },
    {
      id: 5,
      quote: "החוויה מומלצת בחום רב 🙂 השתתפתי במספר סדנאות, הגעתי במצבים שונים ועם פרטנרים שונים ותמיד תמיד נהניתי ורציתי עוד 🙂 איריס וז'יוואני מאפשרים מרחב רגוע, כייפי ומעשיר 🙂 תודה",
      name: "אסף רוזנברג",
      title: "משתתף בסדנאות"
    },
    {
      id: 6,
      quote: "יש הרבה חוויות בחיים, אבל רק אחת שנשארה לי בלב במיוחד: סדנת המדיטציה באפרוז עם ז'יוואני. בשבוע אחד פגשתי אנשים מהארץ ומהעולם – כאלה שמביאים שמחת חיים אמיתית, עומק וחיבור. המעגלים, המדיטציות, המסיבות והאווירה הייחודית באפרוז יצרו תחושה של בית – מרחב שממלא בהשראה ונותן כוח להמשך הדרך. מאז, נוצרו חברויות אמיתיות שממשיכות איתי גם מחוץ לסדנה. וכל פעם שאני נזכר בשבוע ההוא – אני מתמלא בטוב וחושב לעצמי: אולי השנה שוב?",
      name: "אייל",
      title: "משתתף בריטריט"
    }
  ];

  return (
    <section 
      className="py-12 md:py-20 bg-cream"
      id="testimonials"
    >
      <Container>
        {/* Main white container wrapping everything like in About */}
        <div className="max-w-6xl mx-auto bg-white/90 rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg">
          
          {/* כותרת עם ציטוט */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-8" style={{ color: '#56ACBF' }}>
              המלצות ממשתתפים
            </h2>
            
            {/* ציטוט מרכזי עם תמונת רקע */}
            <div 
              className="relative rounded-3xl p-12 md:p-16 overflow-hidden mb-12"
              style={{
                backgroundImage: 'url(/images/gallery/15.jpg)', // Using different gallery image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '300px'
              }}
            >
              {/* Light white overlay for readability (Afroz style) */}
              <div className="absolute inset-0 bg-white/40"></div>
              
              {/* Quote text */}
              <div className="relative z-10 text-center">
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-primary italic leading-relaxed">
                  &ldquo;התחברות עמוקה לעצמי ולאחרים שינתה את החיים שלי&rdquo;
                </blockquote>
              </div>
            </div>
          </div>

          {/* המלצות גריד */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-light-brown/20"
              >
                {/* ציטוט */}
                <blockquote className="text-text-secondary leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                
                {/* מידע על המליץ */}
                <div className="border-t border-sand/30 pt-4">
                  <h4 className="text-lg font-semibold mb-1" style={{ color: '#56ACBF' }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-text-secondary text-sm">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* כפתור קריאה לפעולה */}
          <div className="text-center">
            <Button variant="primary" size="lg" href="#contact" aria-label="מעבר לפרטים והרשמה">
              בואו להיות איתנו
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection; 