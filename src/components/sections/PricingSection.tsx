'use client';

import React from 'react';
import Image from 'next/image';
import { Container, Button } from '@/components/ui';

/**
 * Pricing Section - לינה וכרטיסים
 * 
 * תכונות:
 * - חלוקה למחיר הסדנא ומחירי החדרים (לא כעסקת חבילה)
 * - שלושת המשבצות עם תמונות כמו באפרוז
 * - חלק מזון וארוחה משותפת
 * - דמי ביטול
 * - תהליך הרשמה משופר
 */
const PricingSection: React.FC = () => {
  // מחיר הסדנא (בנפרד מהלינה)
  const workshopPrice = {
    price: '850',
    title: 'מחיר הסדנא',
    description: 'כולל את כל הפעילויות המקצועיות והרוחניות',
    features: [
      'כל המדיטציות והפעילויות',
      'הנחיה מקצועית לאורך כל הסופ"ש',
      'חומרי תרגול וחוברות',
      'מרחב תמיכה קבוצתי',
      'ביטוח קבוצתי'
    ]
  };

  // אפשרויות לינה עם תמונות
  const accommodationOptions = [
    {
      id: 'shared-room',
      name: 'חדר משותף',
      subtitle: '(2-3 משתתפים)',
      image: '/images/accommodation/room.webp',
      alt: 'חדר משותף נוח עם מקלחת פרטית',
      description: 'חדר משופץ עם מיטות נפרדות',
      features: [
        'מיטות נפרדות נוחות',
        'שירותים ומקלחת צמודים',
        'חוויה משותפת ותומכת',
        'אווירה קהילתית חמה'
      ],
      price: '320',
      unit: 'ללילה למשתתף',
      highlighted: true,
      gradient: 'from-desert-blue/5 to-desert-blue/10',
      borderColor: 'border-desert-blue/30',
      buttonColor: 'bg-desert-blue hover:bg-desert-blue/90',
      badge: 'פופולרי'
    },
    {
      id: 'private-cabin',
      name: 'בקתת מדבר פרטית',
      subtitle: '(זוגית)',
      image: '/images/accommodation/cabin.webp',
      alt: 'בקתת עץ פרטית עם נוף למדבר',
      description: 'בקתה זוגית עם נוף פתוח למדבר',
      features: [
        'מיטה זוגית',
        'שירותים ומקלחת פרטיים',
        'מרפסת אינטימית',
        'נוף פנורמי למדבר'
      ],
      price: '520',
      unit: 'ללילה לזוג',
      highlighted: false,
      gradient: 'from-amber-50 to-orange-50',
      borderColor: 'border-amber-200',
      buttonColor: 'bg-amber-600 hover:bg-amber-700'
    },
    {
      id: 'shared-tent',
      name: 'אוהל משותף',
      subtitle: '(חאן)',
      image: '/images/accommodation/tent.webp',
      alt: 'אוהל משותף עם מזרנים באזור טבעי',
      description: 'מרחב פתוח עם מזרנים',
      features: [
        'מזרנים איכותיים',
        'שירותים ומקלחות סמוכים',
        'קרבה לאדמה',
        'חיבור פשוט ואותנטי'
      ],
      price: '180',
      unit: 'ללילה למשתתף',
      highlighted: false,
      gradient: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    }
  ];

  return (
    <section 
      className="py-20 md:py-32 bg-warm-white"
      id="pricing"
    >
      <Container>
        <div className="max-w-6xl mx-auto">
          
          {/* כותרת ראשית */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-text-primary mb-6">
              לינה וכרטיסים
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              בחרו את האפשרות שהכי מתאימה לכם - מחיר הסדנא ומחירי הלינה בנפרד
            </p>
          </div>

          {/* מחיר הסדנא */}
          <div className="mb-20 animate-fade-in-up animate-delay-200">
            <div className="bg-gradient-to-r from-cream/60 to-sand/40 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-heading text-text-primary mb-4">
                  {workshopPrice.title}
                </h3>
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-desert-blue">
                    {workshopPrice.price}
                  </span>
                  <span className="text-2xl text-desert-blue">₪</span>
                </div>
                <p className="text-lg text-text-secondary">
                  {workshopPrice.description}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-4">
                    מה כלול במחיר הסדנא:
                  </h4>
                  <ul className="space-y-2">
                    {workshopPrice.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-text-secondary">
                        <span className="text-desert-blue mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/60 rounded-xl p-6">
                  <p className="text-text-primary font-medium mb-2">
                    💡 חשוב לדעת:
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    מחיר הסדנא חל על כל המשתתפים ללא תלות באפשרות הלינה שתבחרו. 
                    הלינה נרכשת בנפרד לפי הטבלה למטה.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* אפשרויות לינה */}
          <div className="mb-16 animate-fade-in-up animate-delay-400">
            <h3 className="text-2xl md:text-3xl font-heading text-text-primary text-center mb-12">
              אפשרויות לינה
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accommodationOptions.map((option, index) => (
                <div
                  key={option.id}
                  className={`
                    relative group animate-fade-in-up animate-delay-${600 + index * 200}
                    ${option.highlighted ? 'lg:-mt-4 lg:mb-4' : ''}
                  `}
                >
                  
                  {/* Popular Badge */}
                  {option.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-desert-blue text-warm-white text-sm font-medium px-4 py-2 rounded-full shadow-lg">
                        {option.badge}
                      </div>
                    </div>
                  )}

                  <div className={`
                    relative bg-gradient-to-br ${option.gradient} 
                    rounded-2xl overflow-hidden shadow-lg hover:shadow-xl 
                    transition-all duration-300 border-2 ${option.borderColor}
                    group-hover:scale-105 group-hover:-translate-y-2
                    ${option.highlighted ? 'ring-2 ring-desert-blue/20' : ''}
                  `}>
                    
                    {/* תמונה */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={option.image}
                        alt={option.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/gallery/5.jpg'; // fallback
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    
                    {/* תוכן */}
                    <div className="p-6">
                      <div className="text-center mb-6">
                        <h4 className="text-xl md:text-2xl font-heading text-text-primary mb-2">
                          {option.name}
                        </h4>
                        {option.subtitle && (
                          <p className="text-text-secondary font-medium text-sm">
                            {option.subtitle}
                          </p>
                        )}
                        <p className="text-text-secondary text-sm mt-2">
                          {option.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <ul className="space-y-2 text-sm">
                          {option.features.map((feature, featureIndex) => (
                            <li 
                              key={featureIndex}
                              className="flex items-start gap-2 text-text-secondary"
                            >
                              <span className="text-desert-blue mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* מחיר */}
                      <div className="text-center mb-4">
                        <div className="flex items-baseline justify-center gap-1 mb-1">
                          <span className="text-2xl md:text-3xl font-bold text-text-primary">
                            {option.price}
                          </span>
                          <span className="text-lg text-text-primary">₪</span>
                        </div>
                        <p className="text-text-secondary text-sm font-medium">
                          {option.unit}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* מזון וארוחות */}
          <div className="mb-16 animate-fade-in-up animate-delay-1000">
            <div className="bg-cream/60 rounded-2xl p-8">
              <h4 className="text-xl font-heading text-text-primary mb-4 text-center flex items-center justify-center gap-3">
                <span className="text-2xl">🍽️</span>
                מזון וארוחות משותפות
              </h4>
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <p className="text-text-primary leading-relaxed">
                  הארוחות במהלך הסופ&quot;ש הן חלק מהחוויה הקהילתית והמחברת.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  <strong>כל משתתף יתבקש להביא משהו לארוחה המשותפת</strong> - 
                  זה יכול להיות סלט, פירות, לחם, גבינות, חומוס, או כל דבר אחר שתרצו לחלוק עם הקבוצה. 
                  זה יוצר אווירה של נתינה ושיתוף המעשירה את כולנו.
                </p>
                <div className="bg-white/60 rounded-xl p-4 text-sm text-text-secondary">
                  נתאם יחד לפני הסופ&quot;ש מי מביא מה, כדי שיהיה איזון ומגוון בארוחות
                </div>
              </div>
            </div>
          </div>

          {/* מה כלול ותהליך הרשמה */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 animate-fade-in-up animate-delay-1200">
            
            {/* מה כלול במחיר */}
            <div className="bg-warm-white rounded-2xl p-8 shadow-sm border border-sand/20">
              <h4 className="text-xl font-heading text-text-primary mb-6 flex items-center gap-3">
                <span className="text-2xl">✨</span>
                מה כלול במחיר הכולל
              </h4>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-desert-blue mt-1">•</span>
                  <span>כל תכני הסדנא והמדיטציות</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-desert-blue mt-1">•</span>
                  <span>הנחיה מקצועית לאורך כל הסופ&quot;ש</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-desert-blue mt-1">•</span>
                  <span>לינה לפי האפשרות שבחרתם</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-desert-blue mt-1">•</span>
                  <span>ארוחות משותפות (מביאים יחד)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-desert-blue mt-1">•</span>
                  <span>חומרי תרגול וחוברות</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-desert-blue mt-1">•</span>
                  <span>ביטוח קבוצתי בסיסי</span>
                </li>
              </ul>
            </div>

            {/* תהליך ההרשמה */}
            <div className="bg-warm-white rounded-2xl p-8 shadow-sm border border-sand/20">
              <h4 className="text-xl font-heading text-text-primary mb-6 flex items-center gap-3">
                <span className="text-2xl">📝</span>
                תהליך ההרשמה
              </h4>
              <div className="space-y-4">
                <p className="text-text-secondary leading-relaxed">
                  ההרשמה מתבצעת בשני שלבים:
                </p>
                
                <div className="bg-cream/40 rounded-xl p-4">
                  <h5 className="font-semibold text-text-primary mb-2">
                    🟢 למשתתפים חדשים:
                  </h5>
                  <p className="text-text-secondary text-sm">
                    שיחה קצרה עם יובל להכרות ותיאום פרטים, ואז רישום וחיב
                  </p>
                </div>
                
                <div className="bg-desert-blue/10 rounded-xl p-4">
                  <h5 className="font-semibold text-text-primary mb-2">
                    🟣 למשתתפים שכבר היו אצלנו:
                  </h5>
                  <p className="text-text-secondary text-sm">
                    אפשר לנפות ישירות לחן או להרשם ישירות דרך הקישור למטה
                  </p>
                </div>
                
                <div className="text-center mt-6 space-y-3">
                  <Button
                    variant="primary"
                    size="md"
                    href="#contact"
                    className="w-full bg-desert-blue hover:bg-desert-blue/90 text-warm-white"
                  >
                    לפרטים ושיחה
                  </Button>
                  <Button
                    variant="secondary"
                    size="md"
                    href="#contact"
                    className="w-full border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
                  >
                    רישום ישיר (למכירים)
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* דמי ביטול */}
          <div className="mb-16 animate-fade-in-up animate-delay-1400">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
              <h4 className="text-xl font-heading text-text-primary mb-6 text-center flex items-center justify-center gap-3">
                <span className="text-2xl">⚠️</span>
                מדיניות ביטול ודמי ביטול
              </h4>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white/60 rounded-xl p-4">
                    <h5 className="font-semibold text-green-700 mb-2">
                      עד 14 יום לפני
                    </h5>
                    <p className="text-sm text-text-secondary">
                      ביטול חינם - החזר מלא
                    </p>
                  </div>
                  <div className="bg-white/60 rounded-xl p-4">
                    <h5 className="font-semibold text-yellow-700 mb-2">
                      7-14 יום לפני
                    </h5>
                    <p className="text-sm text-text-secondary">
                      דמי ביטול 50% מהמחיר
                    </p>
                  </div>
                  <div className="bg-white/60 rounded-xl p-4">
                    <h5 className="font-semibold text-red-700 mb-2">
                      פחות מ-7 ימים
                    </h5>
                    <p className="text-sm text-text-secondary">
                      ללא החזר כספי
                    </p>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <p className="text-text-secondary text-sm">
                    במקרים מיוחדים (מחלה, אירועי משפחה) ניתן לתאם החזר או העברה לריטריט הבא
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* קריאה לפעולה סופית */}
          <div className="text-center animate-fade-in-up animate-delay-1600">
            <div className="space-y-6 max-w-2xl mx-auto">
              <p className="text-lg text-text-secondary leading-relaxed">
                יש לכם שאלות על המחירים או אפשרויות הלינה?
                <br />
                נשמח לעזור ולמצוא את האפשרות המושלמת עבורכם
              </p>
              
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
                aria-label="יצירת קשר לשאלות"
              >
                בואו נדבר 💚
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default PricingSection; 