'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui';
import Button from '@/components/ui/Button';

/**
 * Pricing Section - מחירים והרשמה בסגנון אפרוז
 * 
 * תכונות:
 * - כרטיסיות מחיר עם אפשרויות שונות
 * - עיצוב חום-תכלת
 * - כפתורי רכישה
 * - תוכן זהה לאפרוז
 */
const PricingSection: React.FC = () => {
  // Removed unused workshopPrice variable
  
  const accommodationOptions = [
    {
      id: 1,
      title: 'חדר זוגי',
      subtitle: '(לינה לאדם)',
      price: '₪350',
      originalPrice: '₪450',
      features: [
        'חדר זוגי נוח ומרווח',
        'שירותים פרטיים',
        'מרפסת עם נוף למדבר',
        'מזרון איכותי',
        'שטח אחסון אישי'
      ],
      isPopular: true,
      image: '/images/accommodation/room.webp',
      bookingUrl: 'https://nataraj.co.il/mitzukei-retreat'
    },
    {
      id: 2,
      title: 'בקתת עץ',
      subtitle: '(לינה לאדם)',
      price: '₪280',
      originalPrice: '₪380',
      features: [
        'בקתת עץ ייחודית',
        'חווית טבע מלאה',
        'נוף פנורמי למדבר',
        'אווירה רומנטית',
        'קרוב לאזורי הפעילות'
      ],
      isPopular: false,
      image: '/images/accommodation/cabin.webp',
      bookingUrl: 'https://nataraj.co.il/mitzukei-retreat'
    },
    {
      id: 3,
      title: 'אוהל',
      subtitle: '(לינה לאדם)',
      price: '₪200',
      originalPrice: '₪280',
      features: [
        'אוהל איכותי ומתקדם',
        'חווית קמפינג אמיתית',
        'התחברות מלאה לטבע',
        'מחיר משתלם',
        'אזור משותף נעים'
      ],
      isPopular: false,
      image: '/images/accommodation/tent.webp',
      bookingUrl: 'https://nataraj.co.il/mitzukei-retreat'
    }
  ];

  return (
    <section 
      className="py-10 md:py-16 bg-cream"
      id="pricing"
    >
      <Container>
        {/* Main white container wrapping everything like in About */}
        <div className="max-w-6xl mx-auto bg-white/90 rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg">
          
          {/* כותרת ראשית */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-6" style={{ color: '#56ACBF' }}>
              לינה וכרטיסים
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              בחרו את האפשרות המתאימה לכם ליומיים של חוויה במדבר
            </p>
          </div>

          {/* Quote banner with background image */}
          <div className="mb-16">
            <div 
              className="relative rounded-3xl p-12 md:p-16 overflow-hidden"
              style={{
                backgroundImage: 'url(/images/accommodation/room.webp)', // Using accommodation image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '300px'
              }}
            >
              {/* White overlay for readability (Afroz style) */}
              <div className="absolute inset-0 bg-white/45"></div>
              
              {/* Quote text */}
              <div className="relative z-10 text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-primary italic leading-relaxed">
                  &ldquo;מקום לנוח הוא מקום להתחדש&rdquo;
                </div>
              </div>
            </div>
          </div>

          {/* Workshop Price Section */}
          <div className="mb-16 animate-fade-in-up animate-delay-400">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-heading mb-4" style={{ color: '#56ACBF' }}>
                מחיר השתתפות בריטריט
              </h3>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                כל הפעילויות, המדיטציות וההנחיה המקצועית
                </p>
              </div>
              
            <div className="max-w-md mx-auto">
              <div className="bg-gradient-to-br from-orange-500/10 to-desert-blue/10 rounded-2xl p-8 text-center border-2 border-orange-500/30 shadow-lg">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  ₪680
                </div>
                <div className="text-lg text-text-secondary mb-4">
                  לאדם ליומיים
                </div>
                <div className="text-sm text-text-secondary">
                  *לינה וארוחות נמכרות בנפרד
                </div>
              </div>
            </div>
          </div>

          {/* Accommodation Options */}
          <div className="mb-16 animate-fade-in-up animate-delay-600">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-heading mb-4" style={{ color: '#56ACBF' }}>
              אפשרויות לינה
            </h3>
              <p className="text-lg text-text-secondary">
                בחרו את סוג הלינה המועדף עליכם במצוקי דרגות
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {accommodationOptions.map((option) => (
                <div
                  key={option.id}
                  className={`
                    bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 
                    hover:shadow-xl hover:-translate-y-2 border-2
                    ${option.isPopular ? 'border-orange-500 ring-2 ring-orange-500/20' : 'border-light-brown/30'}
                    group
                  `}
                >
                  {/* Popular Badge */}
                  {option.isPopular && (
                    <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold">
                      פופולרי
                    </div>
                  )}

                  {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={option.image}
                        alt={option.title}
                        fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-xl font-semibold">{option.title}</h4>
                    </div>
                    </div>
                    
                  {/* Content */}
                    <div className="p-6">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-desert-brown mb-1">
                        {option.price}
                      </div>
                      <div className="text-text-secondary text-sm">
                        {option.originalPrice && <span className="line-through text-gray-500 text-sm mr-2">{option.originalPrice}</span>}
                        ללילה לאדם
                      </div>
                      </div>

                    <ul className="space-y-2 text-sm text-text-secondary mb-6">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                              <span className="text-desert-blue mt-1">•</span>
                          {feature}
                            </li>
                          ))}
                        </ul>
                    
                    <div className="text-center">
                      <Button
                        href={option.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        size="md"
                        className="w-full"
                        aria-label={`הזמנת ${option.title}`}
                      >
                        הזמן עכשיו
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What's Included Section */}
          <div className="mb-16 animate-fade-in-up animate-delay-800">
            <div className="bg-cream/50 rounded-2xl p-8">
              <h3 className="text-2xl font-heading text-center mb-8" style={{ color: '#56ACBF' }}>
                מה כלול במחיר השתתפות
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Workshop */}
                <div key="workshop" className="text-center">
                    <div className="w-16 h-16 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-chalkboard-teacher text-2xl" style={{ color: '#56ACBF' }}></i>
                    </div>
                    <h4 className="font-semibold text-text-primary mb-2">
                      כל תכני הסדנא והמדיטציות
                    </h4>
                    <p className="text-text-secondary text-sm">
                      כל הפעילויות, המדיטציות וההנחיה המקצועית
                    </p>
                  </div>
                <div key="guidance" className="text-center">
                    <div className="w-16 h-16 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-hand-sparkles text-2xl" style={{ color: '#56ACBF' }}></i>
                    </div>
                    <h4 className="font-semibold text-text-primary mb-2">
                      הנחיה מקצועית לאורך כל הסופ&quot;ש
                    </h4>
                    <p className="text-text-secondary text-sm">
                      צוות מנחים מנוסים ומקצועיים
                    </p>
                  </div>
                <div key="accommodation" className="text-center">
                    <div className="w-16 h-16 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-hotel text-2xl" style={{ color: '#56ACBF' }}></i>
                    </div>
                    <h4 className="font-semibold text-text-primary mb-2">
                      לינה לפי האפשרות שבחרתם
                    </h4>
                    <p className="text-text-secondary text-sm">
                      חדר משותף, בקתה פרטית או אוהל
                    </p>
                  </div>
                <div key="materials" className="text-center">
                    <div className="w-16 h-16 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-book text-2xl" style={{ color: '#56ACBF' }}></i>
                    </div>
                    <h4 className="font-semibold text-text-primary mb-2">
                      חומרי תרגול וחוברות
              </h4>
                    <p className="text-text-secondary text-sm">
                      כל החומרים הנדרשים לתרגול
                    </p>
                </div>
              </div>
            </div>
          </div>

          {/* Food Contribution Section */}
          <div className="mb-16 animate-fade-in-up animate-delay-1000">
            <div className="bg-gradient-to-r from-green-500/10 to-desert-blue/10 rounded-2xl p-8 border border-green-500/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading text-green-600 mb-4">
                  ארוחות משותפות
                </h3>
                <p className="text-lg text-text-secondary">
                  נתארגן יחד לארוחות טעימות ומזינות במהלך הריטריט
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">
                    איך זה עובד:
              </h4>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-green-500 ml-2">•</span>
                      תרומה של 120₪ לאדם עבור כל הארוחות
                </li>
                    <li className="flex items-start">
                      <span className="text-green-500 ml-2">•</span>
                      ארוחות טבעוניות/צמחוניות טריות ומזינות
                </li>
                    <li className="flex items-start">
                      <span className="text-green-500 ml-2">•</span>
                      בישול משותף כחלק מהחוויה
                </li>
                    <li className="flex items-start">
                      <span className="text-green-500 ml-2">•</span>
                      אפשרות להביא מזון משלכם
                </li>
              </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      ₪120
                    </div>
                    <div className="text-text-secondary">
                      תרומה לארוחות משותפות
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Process */}
          <div className="mb-16 animate-fade-in-up animate-delay-1200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading mb-4" style={{ color: '#56ACBF' }}>
                תהליך ההרשמה
              </h3>
              <p className="text-lg text-text-secondary">
                שלושה שלבים פשוטים להבטחת מקומכם בריטריט
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Placeholder for registrationSteps */}
              {/* <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-semibold text-text-primary mb-3">
                    {step.title}
                  </h4>
                  <p className="text-text-secondary">
                    {step.description}
                  </p>
                </div> */}
                <div key="step1" className="text-center">
                    <div 
                      className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
                      style={{ backgroundColor: '#56ACBF' }}
                    >
                      1
                    </div>
                    <h4 className="text-xl font-semibold text-text-primary mb-3">
                      שיחה קצרה עם יובל להכרות ותיאום פרטים
              </h4>
                    <p className="text-text-secondary">
                      שיחה קצרה עם יובל להכרות ותיאום פרטים
                    </p>
                  </div>
                <div key="step2" className="text-center">
                    <div 
                      className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
                      style={{ backgroundColor: '#56ACBF' }}
                    >
                      2
                    </div>
                    <h4 className="text-xl font-semibold text-text-primary mb-3">
                      רישום וחיבור במערכת
                    </h4>
                    <p className="text-text-secondary">
                      רישום וחיבור במערכת
                    </p>
                  </div>
                <div key="step3" className="text-center">
                    <div 
                      className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
                      style={{ backgroundColor: '#56ACBF' }}
                    >
                      3
                    </div>
                    <h4 className="text-xl font-semibold text-text-primary mb-3">
                      הגעה לריטריט והתחלת החוויה
                    </h4>
                    <p className="text-text-secondary">
                      הגעה לריטריט והתחלת החוויה
                    </p>
                  </div>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="mb-16 animate-fade-in-up animate-delay-1400">
            <div className="bg-warm-white border border-light-brown/30 rounded-2xl p-8">
              <h3 className="text-2xl font-heading text-center mb-6" style={{ color: '#56ACBF' }}>
                מדיניות ביטול
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="text-3xl font-bold text-green-500 mb-2">100%</div>
                  <div className="font-semibold text-text-primary mb-2">החזר מלא</div>
                  <div className="text-text-secondary text-sm">
                    ביטול עד חודש לפני תחילת הריטריט
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="text-3xl font-bold text-orange-500 mb-2">80%</div>
                  <div className="font-semibold text-text-primary mb-2">החזר חלקי</div>
                  <div className="text-text-secondary text-sm">
                    ביטול 2-4 שבועות לפני תחילת הריטריט
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="text-3xl font-bold text-text-secondary mb-2">50%</div>
                  <div className="font-semibold text-text-primary mb-2">החזר חלקי</div>
                  <div className="text-text-secondary text-sm">
                    ביטול בשבועיים האחרונים
                  </div>
                </div>
              </div>
              
                <div className="text-center mt-6">
                  <p className="text-text-secondary text-sm">
                    במקרים מיוחדים (מחלה, אירועי משפחה) ניתן לתאם החזר או העברה לריטריט הבא
                  </p>
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
              
              <Button variant="primary" size="lg" href="#contact" aria-label="יצירת קשר לשאלות">
                בואו נדבר
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default PricingSection; 