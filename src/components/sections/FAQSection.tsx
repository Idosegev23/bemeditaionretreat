'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui';
import Button from '@/components/ui/Button';

const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqData = [
    {
      id: 1,
      question: 'מה כולל הרטריט?',
      answer: 'הרטריט כולל מגוון פעילויות מדיטציה, הליכות במדבר, שותפות בבישול וארוחות משותפות, ולינה במקום. כל הפעילויות מתרחשות במקום אחד ואנחנו נהיה יחד במשך כל הסוף השבוע.'
    },
    {
      id: 2,
      question: 'האם צריך ניסיון קודם במדיטציה?',
      answer: 'לא! הרטריט מתאים גם למתחילים וגם למתרגלים מנוסים. נתחיל מהבסיס ונתקדם יחד. כל אחד יוכל להשתתף ברמה שלו.'
    },
    {
      id: 3,
      question: 'מה כלול במחיר?',
      answer: 'המחיר כולל את כל הפעילויות של הרטריט, ארוחות משותפות, חומרי עזר לתרגילים. הלינה נמכרת בנפרד ויש מספר אפשרויות.'
    },
    {
      id: 4,
      question: 'איך מגיעים למקום?',
      answer: 'מצפה רמון נמצא בנגב הדרומי, כשעתיים נסיעה מתל אביב וירושלים. נשלח הוראות הגעה מפורטות לנרשמים.'
    },
    {
      id: 5,
      question: 'מה להביא איתי?',
      answer: 'שק שינה או מצעים, בגדים נוחים לתרגול, נעליים נוחות להליכה, בקבוק מים ומה שאתם צריכים ללילה. נשלח רשימה מפורטת לנרשמים.'
    },
    {
      id: 6,
      question: 'איך מבטלים?',
      answer: 'ביטול עד חודש לפני - החזר מלא. ביטול 2-4 שבועות לפני - 80% החזר. ביטול בשבועיים האחרונים - 50% החזר. אנחנו נעשה כל מאמץ למצוא פתרון המתאים לכולם.'
    }
  ];

  const toggleItem = (itemId: number) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <section 
      id="faq"
      className="py-10 md:py-16 bg-cream"
    >
      <Container>
        {/* Main white container wrapping everything like in About */}
        <div className="max-w-4xl mx-auto bg-white/90 rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg">
          
          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-6" style={{ color: '#56ACBF' }}>
            שאלות ששואלים אותנו הרבה
          </h2>
          
          {/* Central Quote עם תמונת רקע */}
          <div 
            className="relative rounded-3xl p-12 md:p-16 overflow-hidden mb-12"
            style={{
              backgroundImage: 'url(/images/gallery/12.jpg)', // Using different gallery image
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '300px'
            }}
          >
            {/* White overlay for readability (Afroz style) */}
            <div className="absolute inset-0 bg-white/45"></div>
            
            {/* Quote text */}
            <div className="relative z-10 text-center">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-primary italic leading-relaxed">
                &ldquo;הלא-ידוע הוא מרחב האפשרויות הגדול ביותר שלנו&rdquo;
              </blockquote>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 mb-12">
            {faqData.map((item) => (
              <div
                key={item.id}
                className={`
                  border border-light-brown/30 rounded-xl overflow-hidden 
                  transition-all duration-300 bg-white shadow-sm
                  ${openItem === item.id ? 'shadow-md' : 'hover:shadow-md'}
                `}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 text-right hover:bg-sand/10 transition-colors duration-200"
                  aria-expanded={openItem === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-text-primary">
                      {item.question}
                    </span>
                    <span className={`
                      text-2xl transform transition-transform duration-300
                      ${openItem === item.id ? 'rotate-45' : 'rotate-0'}
                    `} style={{ color: '#56ACBF' }}>
                      +
                    </span>
                  </div>
                </button>
                
                {openItem === item.id && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-6 pb-6 text-text-secondary leading-relaxed"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom section without buttons */}
          <div className="text-center bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#56ACBF' }}>
              לא מצאת את מה שחיפשת?
            </h3>
            <p className="text-text-secondary mb-6">
              אנחנו כאן בשבילך ונשמח לענות על כל שאלה נוספת
            </p>
            
            <Button variant="primary" size="lg" href="#contact" aria-label="מעבר לפרטים">
              אנחנו כאן בשבילך
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
