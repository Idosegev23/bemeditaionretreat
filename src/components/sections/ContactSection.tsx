'use client';

import React, { useState } from 'react';
import { Container, Button } from '@/components/ui';

/**
 * Contact Section - "רוצה להצטרף אלינו?" - סקשן יצירת קשר והרשמה
 * 
 * תכונות:
 * - טופס הרשמה מתקדם עם ולידציה
 * - שליחה לוובהוק Make.com
 * - אפשרויות יצירת קשר ישיר
 * - כפתור ווטסאפ צף
 * - פוטר עם קישורים לרשתות
 * - עיצוב נקי ומרווח
 */
const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    joinWhatsApp: false
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validation function
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'שם מלא הוא שדה חובה';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'מספר טלפון הוא שדה חובה';
    } else if (!/^[\d\-\+\(\)\s]+$/.test(formData.phone)) {
      newErrors.phone = 'מספר טלפון לא תקין';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'כתובת אימייל היא שדה חובה';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'כתובת אימייל לא תקינה';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://hook.eu2.make.com/vd457sj9lhjo9outqedahlrawn5hm8fp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          joinWhatsApp: formData.joinWhatsApp,
          timestamp: new Date().toISOString(),
          source: 'retreat-website'
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ fullName: '', phone: '', email: '', joinWhatsApp: false });
      } else {
        throw new Error('שליחה נכשלה');
      }
    } catch (error) {
      alert('אירעה שגיאה בשליחת הטופס. אנא נסו שוב או צרו קשר ישירות.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <>
      {/* Main Contact Section */}
      <section 
        className="py-24 md:py-32 bg-gradient-to-b from-warm-white to-cream/50 relative overflow-hidden"
        id="contact"
      >
        
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-80 h-80 bg-desert-blue/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-sand/30 rounded-full blur-3xl"></div>
        </div>

        <Container>
          <div className="max-w-4xl mx-auto relative z-10">
            
            {/* Main Title */}
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-primary mb-8 leading-tight">
                רוצה <span className="text-desert-blue">להצטרף אלינו</span>?
              </h2>
              
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                השאירו פרטים בטופס, ונחזור אליכם עם כל המידע.
                <br />
                ניתן גם לפנות ישירות לחן בוואטסאפ או בטלפון – נשמח ללוות אתכם ברוגע ובאהבה.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Contact Form */}
              <div className="animate-fade-in-up animate-delay-200">
                
                {submitSuccess ? (
                  /* Success Message */
                  <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-12 text-center">
                    <div className="text-6xl mb-6">🙏</div>
                    <h3 className="text-2xl font-heading text-green-800 mb-4">
                      תודה רבה!
                    </h3>
                    <p className="text-lg text-green-700 leading-relaxed">
                      קיבלנו את הפרטים שלכם ונחזור אליכם בהקדם.
                      <br />
                      אנחנו מאוד מתרגשים לראות אתכם בריטריט! ♡
                    </p>
                  </div>
                ) : (
                  /* Registration Form */
                  <div className="bg-warm-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-sand/20">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      
                      {/* Full Name Field */}
                      <div>
                        <label 
                          htmlFor="fullName" 
                          className="block text-lg font-medium text-text-primary mb-3"
                        >
                          שם מלא *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`
                            w-full px-6 py-4 text-lg rounded-xl border-2 transition-all duration-300
                            bg-warm-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-desert-blue/50
                            ${errors.fullName ? 'border-red-400 focus:border-red-400' : 'border-sand/30 focus:border-desert-blue'}
                          `}
                          placeholder="איך קוראים לך?"
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>
                        )}
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label 
                          htmlFor="phone" 
                          className="block text-lg font-medium text-text-primary mb-3"
                        >
                          טלפון *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`
                            w-full px-6 py-4 text-lg rounded-xl border-2 transition-all duration-300
                            bg-warm-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-desert-blue/50
                            ${errors.phone ? 'border-red-400 focus:border-red-400' : 'border-sand/30 focus:border-desert-blue'}
                          `}
                          placeholder="050-123-4567"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label 
                          htmlFor="email" 
                          className="block text-lg font-medium text-text-primary mb-3"
                        >
                          אימייל *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`
                            w-full px-6 py-4 text-lg rounded-xl border-2 transition-all duration-300
                            bg-warm-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-desert-blue/50
                            ${errors.email ? 'border-red-400 focus:border-red-400' : 'border-sand/30 focus:border-desert-blue'}
                          `}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                        )}
                      </div>

                      {/* WhatsApp Checkbox */}
                      <div className="flex items-start gap-4 p-4 bg-desert-blue/5 rounded-xl border border-desert-blue/20">
                        <input
                          type="checkbox"
                          id="joinWhatsApp"
                          name="joinWhatsApp"
                          checked={formData.joinWhatsApp}
                          onChange={handleInputChange}
                          className="mt-1 w-5 h-5 text-desert-blue border-2 border-desert-blue/30 rounded focus:ring-desert-blue"
                        />
                        <label 
                          htmlFor="joinWhatsApp" 
                          className="text-lg text-text-primary leading-relaxed cursor-pointer"
                        >
                          אשמח להצטרף לקבוצת עדכונים שקטה בווטסאפ
                          <span className="block text-sm text-text-secondary mt-1">
                            (עדכונים חשובים בלבד, ללא הפרעות)
                          </span>
                        </label>
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        size="lg"
                        className={`
                          w-full py-5 text-xl font-semibold rounded-xl
                          bg-amber-500 hover:bg-amber-600 text-warm-white
                          shadow-lg hover:shadow-xl
                          transform hover:scale-105 disabled:scale-100
                          transition-all duration-300
                          border-0 disabled:opacity-50 disabled:cursor-not-allowed
                        `}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-3">
                            <div className="w-6 h-6 border-2 border-warm-white/30 border-t-warm-white rounded-full animate-spin"></div>
                            שולח...
                          </span>
                        ) : (
                          '🙏 אני רוצה להצטרף לריטריט'
                        )}
                      </Button>

                      {/* Privacy Note */}
                      <p className="text-sm text-text-secondary text-center leading-relaxed">
                        כל הפרטים נשמרים בפרטיות מלאה. אין צורך בתשלום בשלב זה.
                      </p>
                    </form>
                  </div>
                )}
              </div>

              {/* Direct Contact Options */}
              <div className="animate-fade-in-up animate-delay-400 space-y-8">
                
                {/* Contact Cards */}
                <div className="space-y-6">
                  
                  {/* Phone Contact */}
                  <div className="bg-warm-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-sand/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-heading text-text-primary">
                          שיחה ישירה
                        </h3>
                        <p className="text-text-secondary">
                          חן – 052-4700478
                        </p>
                      </div>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      זמינה לשאלות ותיאום פרטים
                    </p>
                  </div>

                  {/* Email Contact */}
                  <div className="bg-warm-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-sand/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">✉️</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-heading text-text-primary">
                          אימייל
                        </h3>
                        <p className="text-text-secondary">
                          bemeditation.info@gmail.com
                        </p>
                      </div>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      לשאלות מפורטות ומידע נוסף
                    </p>
                  </div>
                </div>

                {/* Motivational Quote */}
                <div className="bg-gradient-to-br from-desert-blue/5 to-sand/10 rounded-2xl p-8 border border-sand/20 text-center">
                  <div className="text-4xl mb-4">🌅</div>
                  <blockquote className="text-lg text-text-primary leading-relaxed italic mb-4">
                    "המסע של אלף קילומטר מתחיל בצעד אחד"
                  </blockquote>
                  <p className="text-text-secondary">
                    המסע שלכם מתחיל כאן ועכשיו 💚
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 left-8 z-50 animate-bounce-slow">
        <a
          href="https://wa.me/972527000478"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-3 bg-green-500 hover:bg-green-600 
            text-warm-white px-6 py-4 rounded-full shadow-2xl
            transition-all duration-300 transform hover:scale-105
            text-lg font-semibold
          "
          aria-label="דברו איתנו בווטסאפ"
        >
          <span className="text-2xl">💬</span>
          <span className="hidden sm:inline">דברו איתנו בווטסאפ</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-text-primary text-warm-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            
            {/* Footer Content */}
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              
              {/* Logo & About */}
              <div className="text-center md:text-right">
                <div className="text-3xl font-heading mb-4">
                  Be Meditation
                </div>
                <p className="text-warm-white/80 leading-relaxed">
                  להכניס נשימה לתוך החיים.
                  <br />
                  להפוך נוכחות – לדרך חיים.
                </p>
              </div>

              {/* Quick Links */}
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-4">קישורים מהירים</h4>
                <div className="space-y-2">
                  <a href="#about" className="block text-warm-white/80 hover:text-warm-white transition-colors">
                    על הריטריט
                  </a>
                  <a href="#program" className="block text-warm-white/80 hover:text-warm-white transition-colors">
                    התוכנית
                  </a>
                  <a href="#pricing" className="block text-warm-white/80 hover:text-warm-white transition-colors">
                    מחירים
                  </a>
                  <a href="#faq" className="block text-warm-white/80 hover:text-warm-white transition-colors">
                    שאלות נפוצות
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="text-center md:text-left">
                <h4 className="text-lg font-semibold mb-4">עקבו אחרינו</h4>
                <div className="flex justify-center md:justify-start gap-4">
                  <a
                    href="https://www.facebook.com/JivanyBeMeditation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-warm-white/10 hover:bg-warm-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="פייסבוק"
                  >
                    <span className="text-xl">📘</span>
                  </a>
                  <a
                    href="https://www.instagram.com/be_meditation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-warm-white/10 hover:bg-warm-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="אינסטגרם"
                  >
                    <span className="text-xl">📷</span>
                  </a>
                  <a
                    href="https://www.bemeditation.co.il/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-warm-white/10 hover:bg-warm-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="אתר בי מדיטיישן"
                  >
                    <span className="text-xl">🌐</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-warm-white/20 pt-8 text-center">
              <p className="text-warm-white/60 leading-relaxed">
                © 2024 Be Meditation. כל הזכויות שמורות.
                <br />
                <span className="text-sm">
                  נבנה באהבה לקהילת המדיטציה הישראלית 🙏
                </span>
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default ContactSection;
