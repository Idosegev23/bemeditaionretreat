'use client';

import React from 'react';
import { Container, Button } from '@/components/ui';

/**
 * Pricing Section - לבחור את הדרך שנכונה לך להתמסר - סקשן מחירים ואפשרויות לינה
 * 
 * תכונות:
 * - 3 כרטיסי לינה עם מחירים שונים
 * - עיצוב אלגנטי ולא אגרסיבי
 * - כפתורי CTA ברורים
 * - מידע על מה כלול במחיר
 * - רספונסיבי מלא
 */
const PricingSection: React.FC = () => {
  // Pricing options data
  const pricingOptions = [
    {
      id: 'private-cabin',
      name: 'בקתת מדבר פרטית',
      icon: '🏡',
      description: 'בקתה זוגית עם נוף פתוח למדבר',
      features: [
        'מיטה זוגית',
        'שירותים ומקלחת פרטיים',
        'מרפסת אינטימית',
        'נוף פנורמי למדבר'
      ],
      price: '2,800',
      unit: 'למשתתף',
      highlighted: false,
      gradient: 'from-amber-50 to-orange-50',
      borderColor: 'border-amber-200',
      buttonColor: 'bg-amber-600 hover:bg-amber-700'
    },
    {
      id: 'shared-room',
      name: 'חדר משותף',
      subtitle: '(3–4 משתתפות)',
      icon: '👥',
      description: 'חדר משופץ עם מיטות נפרדות',
      features: [
        'מיטות נפרדות נוחות',
        'שירותים ומקלחת צמודים', 
        'חוויה משותפת ותומכת',
        'אווירה קהילתית חמה'
      ],
      price: '2,200',
      unit: 'למשתתף',
      highlighted: true,
      gradient: 'from-desert-blue/5 to-desert-blue/10',
      borderColor: 'border-desert-blue/30',
      buttonColor: 'bg-desert-blue hover:bg-desert-blue/90',
      badge: 'פופולרי'
    },
    {
      id: 'shared-tent',
      name: 'אוהל משותף',
      subtitle: '(חאן)',
      icon: '⛺',
      description: 'מרחב פתוח עם מזרנים',
      features: [
        'מזרנים איכותיים',
        'שירותים ומקלחות סמוכים',
        'קרבה לאדמה',
        'חיבור פשוט ואותנטי'
      ],
      price: '1,750',
      unit: 'למשתתף',
      highlighted: false,
      gradient: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    }
  ];

  return (
    <section 
      className="py-24 md:py-32 bg-gradient-to-b from-warm-white to-cream/50 relative overflow-hidden"
      id="pricing"
    >
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 right-10 w-80 h-80 bg-sand/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-10 w-96 h-96 bg-light-brown/20 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Main Title */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-primary mb-8 leading-tight">
              לבחור את הדרך
              <br />
              <span className="text-desert-blue">שנכונה לך להתמסר</span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                אנחנו מציעים מספר סוגי לינה ונרשמים – כדי שכל אחת ואחד יוכלו לבחור את הדרך שנכונה עבורם.
              </p>
              
              <p className="text-lg text-text-primary leading-relaxed bg-warm-white/70 rounded-xl px-6 py-4 border border-sand/20">
                כל האפשרויות כוללות את כל תכני הסדנה, ארוחות מפנקות, לינה במצוקי דרגות וחוויה מלאה.
              </p>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
            {pricingOptions.map((option, index) => (
              <div
                key={option.id}
                className={`
                  relative group animate-fade-in-up animate-delay-${200 + index * 200}
                  ${option.highlighted ? 'lg:-mt-6 lg:mb-6' : ''}
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

                {/* Card */}
                <div className={`
                  relative bg-gradient-to-br ${option.gradient} 
                  rounded-3xl p-8 shadow-lg hover:shadow-xl 
                  transition-all duration-300 border-2 ${option.borderColor}
                  group-hover:scale-105 group-hover:-translate-y-2
                  ${option.highlighted ? 'ring-2 ring-desert-blue/20' : ''}
                `}>
                  
                  {/* Card Header */}
                  <div className="text-center mb-8">
                    
                    {/* Icon */}
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {option.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-heading text-text-primary mb-2">
                      {option.name}
                    </h3>
                    
                    {/* Subtitle */}
                    {option.subtitle && (
                      <p className="text-text-secondary font-medium">
                        {option.subtitle}
                      </p>
                    )}
                    
                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed mt-4">
                      {option.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <ul className="space-y-3">
                      {option.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-center gap-3 text-text-primary"
                        >
                          <div className="w-2 h-2 bg-desert-blue/60 rounded-full flex-shrink-0"></div>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-4xl md:text-5xl font-bold text-text-primary">
                        {option.price}
                      </span>
                      <span className="text-2xl text-text-primary">₪</span>
                    </div>
                    <p className="text-text-secondary font-medium">
                      {option.unit}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    <Button
                      variant="primary"
                      size="lg"
                      href="#contact"
                      className={`
                        ${option.buttonColor} text-warm-white font-semibold 
                        px-8 py-4 rounded-xl w-full
                        shadow-lg hover:shadow-xl
                        transform hover:scale-105
                        transition-all duration-300
                        border-0
                      `}
                      aria-label={`הרשמה ל${option.name}`}
                    >
                      להרשמה
                    </Button>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-8 h-8 opacity-20">
                    <div className="w-full h-full border-t-2 border-r-2 border-text-primary/20 rounded-tr-lg"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="animate-fade-in-up animate-delay-800">
            
            {/* Separator */}
            <div className="flex items-center justify-center mb-12">
              <div className="h-px bg-gradient-to-r from-transparent via-desert-blue/30 to-transparent w-32"></div>
              <div className="w-3 h-3 bg-desert-blue/40 rounded-full mx-4"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-desert-blue/30 to-transparent w-32"></div>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* What's Included */}
              <div className="bg-warm-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-sand/20">
                <h4 className="text-xl font-heading text-text-primary mb-4 flex items-center gap-3">
                  <span className="text-2xl">✨</span>
                  מה כלול במחיר
                </h4>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-desert-blue rounded-full"></div>
                    <span>כל המחירים כוללים מע"מ</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-desert-blue rounded-full"></div>
                    <span>תכנים מלאים של הריטריט</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-desert-blue rounded-full"></div>
                    <span>לינה במצוקי דרגות</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-desert-blue rounded-full"></div>
                    <span>כל הארוחות והכיבוד</span>
                  </li>
                </ul>
              </div>

              {/* Payment Process */}
              <div className="bg-warm-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-sand/20">
                <h4 className="text-xl font-heading text-text-primary mb-4 flex items-center gap-3">
                  <span className="text-2xl">💬</span>
                  תהליך ההרשמה
                </h4>
                <p className="text-text-secondary leading-relaxed mb-4">
                  התשלום יתבצע לאחר שיחה אישית קצרה ותיאום פרטים.
                </p>
                <p className="text-text-primary font-medium">
                  נשמח להכיר אותך ולוודא שהריטריט מתאים לך! 🙏
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20 animate-fade-in-up animate-delay-1000">
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                יש לך שאלות על אפשרויות הלינה או התשלום?
                <br />
                נשמח לעזור ולמצוא את האפשרות המושלמת עבורך
              </p>
              
              <Button
                variant="secondary"
                size="lg"
                href="#contact"
                className="
                  bg-transparent border-2 border-desert-blue text-desert-blue
                  hover:bg-desert-blue hover:text-warm-white
                  px-10 py-4 rounded-xl
                  font-semibold transition-all duration-300
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