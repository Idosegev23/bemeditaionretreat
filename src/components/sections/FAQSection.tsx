'use client';

import React, { useState } from 'react';
import { Container, Button } from '@/components/ui';

/**
 * FAQ Section - "שאלות ששואלים אותנו הרבה" - סקשן שאלות נפוצות
 * 
 * תכונות:
 * - Accordion אינטראקטיבי עם אנימציות
 * - 5 שאלות נפוצות עם תשובות מפורטות
 * - עיצוב נגיש ויפה
 * - CTA בסוף לשאלות נוספות
 * - רספונסיבי מלא
 */
const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  // FAQ data מבוסס על השאלות מהאתר המקורי
  const faqData = [
    {
      id: 1,
      question: 'מה היתרון בקבוצה מונחית?',
      answer: 'קבוצה מאפשרת תמיכה רבה, והנחיה נותנת הכוונה בתהליך וכלים מעשיים. לתרגל מדיטציה ולהטמיע בדרך כלל לא קל לעשות לבד.',
      icon: '👥'
    },
    {
      id: 2,
      question: 'מה זה מדיטציות של אושו?',
      answer: 'המדיטציות האקטיביות של אושו הן מדיטציות שנוצרו במיוחד לאדם המערבי בחברה המודרנית. הן מחולקות לשלבים, כוללות תנועה, ומאפשרות מעבר הדרגתי למדיטציה שקטה.',
      icon: '🕉️'
    },
    {
      id: 3,
      question: 'האם יש צורך בניסיון קודם?',
      answer: 'לא בהכרח. חלק מהמשתתפים מגיעים ללא ניסיון מוקדם, עם רצון לתהליך אישי וחקירה פנימית ועם פתיחות להכרת עולם חדש.',
      icon: '🌱'
    },
    {
      id: 4,
      question: 'האם כדאי לי לבוא לבד?',
      answer: 'בהחלט! לבוא לבד מאפשר חופש מהרגלים ומחויבות חברתית, ויוצר הזדמנות למפגש עם אנשים חדשים במרחב נעים, בטוח ומזמין.',
      icon: '🤗'
    },
    {
      id: 5,
      question: 'כמה משתתפים יהיו?',
      answer: 'בין 12 ל־15 משתתפים, כדי לשמור על אינטימיות ותשומת לב לכל משתתף.',
      icon: '🏜️'
    }
  ];

  const toggleItem = (itemId: number) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <section 
      className="py-24 md:py-32 bg-gradient-to-b from-cream/30 to-warm-white relative overflow-hidden"
      id="faq"
    >
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-desert-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sand/30 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <div className="max-w-4xl mx-auto relative z-10">
          
          {/* Main Title */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-primary mb-8 leading-tight">
              שאלות ששואלים
              <br />
              <span className="text-desert-blue">אותנו הרבה</span>
            </h2>
            
            {/* ציטוט מרכזי מהאתר המקורי */}
            <div className="bg-gradient-to-r from-desert-blue/10 to-sand/20 rounded-2xl p-8 max-w-4xl mx-auto mb-8">
              <blockquote className="text-xl md:text-2xl text-text-primary font-light italic leading-relaxed">
                "הלא-ידוע הוא מרחב האפשרויות הגדול ביותר שלנו"
              </blockquote>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-6 mb-20">
            {faqData.map((item, index) => (
              <div
                key={item.id}
                className={`
                  group animate-fade-in-up animate-delay-${200 + index * 150}
                  bg-warm-white/80 backdrop-blur-sm
                  rounded-2xl border-2 border-sand/20
                  hover:border-desert-blue/30 hover:shadow-lg
                  transition-all duration-300
                  ${openItem === item.id ? 'border-desert-blue/40 shadow-xl' : ''}
                `}
              >
                
                {/* Question Header - Clickable */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-right p-8 flex items-center justify-between gap-6 focus:outline-none focus:ring-2 focus:ring-desert-blue/50 rounded-2xl"
                  aria-expanded={openItem === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  
                  {/* Question Text & Icon */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading text-text-primary leading-relaxed text-right">
                      {item.question}
                    </h3>
                  </div>

                  {/* Expand/Collapse Icon */}
                  <div className={`
                    flex-shrink-0 w-8 h-8 flex items-center justify-center
                    transition-transform duration-300
                    ${openItem === item.id ? 'rotate-180' : ''}
                  `}>
                    <svg 
                      className="w-6 h-6 text-desert-blue" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer Content - Expandable */}
                <div
                  id={`faq-answer-${item.id}`}
                  className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${openItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="px-8 pb-8">
                    <div className="pt-4 border-t border-sand/20">
                      <p className="text-lg md:text-xl text-text-secondary leading-relaxed text-right">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="animate-fade-in-up animate-delay-1000">
            
            {/* Separator */}
            <div className="flex items-center justify-center mb-12">
              <div className="h-px bg-gradient-to-r from-transparent via-desert-blue/30 to-transparent w-32"></div>
              <div className="w-3 h-3 bg-desert-blue/40 rounded-full mx-4"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-desert-blue/30 to-transparent w-32"></div>
            </div>

            {/* Contact CTA */}
            <div className="text-center bg-gradient-to-br from-desert-blue/5 to-sand/10 rounded-3xl p-12 border border-sand/20">
              
              <div className="text-5xl mb-6">🤔</div>
              
              <h3 className="text-2xl md:text-3xl font-heading text-text-primary mb-4">
                לא מצאת את התשובה שחיפשת?
              </h3>
              
              <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
                אנחנו כאן בשבילך! שלחי לנו הודעה או תתקשרי – נשמח לענות על כל שאלה 
                ולעזור לך להחליט אם הריטריט מתאים לך.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                
                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/972123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center gap-3
                    bg-green-600 hover:bg-green-700 text-warm-white
                    px-8 py-4 rounded-xl font-semibold
                    shadow-lg hover:shadow-xl
                    transform hover:scale-105
                    transition-all duration-300
                    border-0 focus:outline-none focus:ring-2 focus:ring-green-600
                  "
                  aria-label="שלח הודעה בווטסאפ"
                >
                  <span className="text-xl">📱</span>
                  שלחי הודעה בווטסאפ
                </a>

                {/* Contact Form Button */}
                <Button
                  variant="secondary"
                  size="lg"
                  href="#contact"
                  className="
                    bg-transparent border-2 border-desert-blue text-desert-blue
                    hover:bg-desert-blue hover:text-warm-white
                    px-8 py-4 rounded-xl font-semibold
                    flex items-center gap-3
                    transition-all duration-300
                  "
                  aria-label="מלא טופס יצירת קשר"
                >
                  <span className="text-xl">✉️</span>
                  מלאי טופס יצירת קשר
                </Button>
              </div>

              {/* Additional Contact Info */}
              <div className="mt-8 pt-8 border-t border-sand/20">
                <p className="text-text-secondary leading-relaxed">
                  <span className="font-medium text-text-primary">זמני מענה:</span>
                  <br />
                  ימים א׳-ה׳ 9:00-18:00 | שישי 9:00-14:00
                  <br />
                  <span className="text-sm opacity-75">נחזור אליך בהקדם האפשרי ♡</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
