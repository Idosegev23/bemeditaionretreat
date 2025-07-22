'use client';

import React, { useState } from 'react';
import { Container, Button } from '@/components/ui';

/**
 * Contact Section - יצירת קשר והרשמה בסגנון אפרוז
 * 
 * תכונות:
 * - עיצוב זהה לאפרוז
 * - מעבר צבעים חום-תכלת
 * - שני כפתורים: פרטים + רכישה ישירה
 * - הסרת מייל והוספת WhatsApp
 * - ציטוט מחוץ לסקשן
 * - ולידציה מתקדמת
 */
const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    fullName: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Validation functions
  const validateName = (name: string): string => {
    if (!name.trim()) {
      return 'שם מלא הוא שדה חובה';
    }
    if (name.trim().length < 2) {
      return 'שם חייב להכיל לפחות 2 תווים';
    }
    if (!/^[א-ת\s]+$/.test(name.trim()) && !/^[a-zA-Z\s]+$/.test(name.trim())) {
      return 'שם יכול להכיל רק אותיות בעברית או באנגלית';
    }
    return '';
  };

  const validatePhone = (phone: string): string => {
    if (!phone.trim()) {
      return 'מספר טלפון הוא שדה חובה';
    }
    const phoneRegex = /^[\d\-\+\(\)\s]{9,15}$/;
    if (!phoneRegex.test(phone.trim())) {
      return 'מספר טלפון לא תקין (9-15 ספרות)';
    }
    return '';
  };

  const validateMessage = (message: string): string => {
    if (message.trim().length > 500) {
      return 'הודעה יכולה להכיל עד 500 תווים';
    }
    return '';
  };

  // Real-time validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear submit errors when user starts typing
    if (submitError) {
      setSubmitError(false);
    }

    // Real-time validation
    let error = '';
    switch (name) {
      case 'fullName':
        error = validateName(value);
        break;
      case 'phone':
        error = validatePhone(value);
        break;
      case 'message':
        error = validateMessage(value);
        break;
    }
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const nameError = validateName(formData.fullName);
    const phoneError = validatePhone(formData.phone);
    const messageError = validateMessage(formData.message);
    
    setErrors({
      fullName: nameError,
      phone: phoneError,
      message: messageError
    });

    // Check if there are any errors
    if (nameError || phoneError || messageError) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);
    
    try {
      const response = await fetch('https://hook.eu2.make.com/vd457sj9lhjo9outqedahlrawn5hm8fp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
          timestamp: new Date().toISOString(),
          source: 'retreat-website'
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ fullName: '', phone: '', message: '' });
        setErrors({ fullName: '', phone: '', message: '' });
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if form is valid
  const isFormValid = () => {
    return formData.fullName.trim() && 
           formData.phone.trim() && 
           !errors.fullName && 
           !errors.phone && 
           !errors.message;
  };

  return (
    <>
      {/* Contact Section with gradient background */}
      <section 
        id="contact"
        className="py-20 md:py-32 bg-gradient-to-b from-cream via-sand/30 to-green-500/20"
      >
        <Container>
          <div className="max-w-4xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-8" style={{ color: '#56ACBF' }}>
                רשמו לנו בוואטסאפ
              </h2>
              <div className="text-xl text-text-secondary">
                <i className="fab fa-whatsapp text-green-500 ml-2"></i>
                <a href="https://wa.me/972547882715" target="_blank" className="text-green-500 hover:text-green-600 font-semibold">
                  איריס: 054-7882715
                </a>
              </div>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              
              {/* Form Header */}
              <div className="text-center mb-8">
                <div className="text-4xl mb-4" style={{ color: '#56ACBF' }}>
                  <i className="fas fa-envelope"></i>
                </div>
                <h3 className="text-2xl font-heading mb-4" style={{ color: '#56ACBF' }}>
                  השאירו פרטים ונחזור אליכם
                </h3>
                <p className="text-text-secondary">
                  ניתן להתקשר ישירות לאיריס: 
                  <a href="tel:+972547882715" className="text-green-500 font-semibold mr-2">054-7882715</a>
                  או להשאיר פרטים כאן
                </p>
              </div>

              {/* Success Message */}
              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 text-center">
                  <i className="fas fa-check-circle text-green-500 text-2xl mb-2"></i>
                  <h4 className="text-lg font-semibold text-green-700 mb-2">הפרטים נשלחו בהצלחה!</h4>
                  <p className="text-green-600">תודה על הפנייה. אנחנו ניצור איתך קשר בהקדם האפשרי.</p>
                </div>
              )}

              {/* Error Message */}
              {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8 text-center">
                  <i className="fas fa-exclamation-circle text-red-500 text-2xl mb-2"></i>
                  <h4 className="text-lg font-semibold text-red-700 mb-2">אירעה שגיאה</h4>
                  <p className="text-red-600">
                    אנא נסה שוב או התקשר ישירות לאיריס: 
                    <a href="tel:+972547882715" className="font-semibold">054-7882715</a>
                  </p>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name and Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-text-primary mb-2">
                      שם מלא:
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-sand rounded-lg focus:ring-2 focus:border-transparent transition-colors"
                      style={{
                        '--tw-ring-color': '#56ACBF'
                      } as React.CSSProperties}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#56ACBF';
                        e.target.style.boxShadow = '0 0 0 2px rgba(86, 172, 191, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '';
                        e.target.style.boxShadow = '';
                      }}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-text-primary mb-2">
                      טלפון:
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-sand rounded-lg focus:ring-2 focus:border-transparent transition-colors"
                      style={{
                        '--tw-ring-color': '#56ACBF'
                      } as React.CSSProperties}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#56ACBF';
                        e.target.style.boxShadow = '0 0 0 2px rgba(86, 172, 191, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '';
                        e.target.style.boxShadow = '';
                      }}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
                    הודעה (אופציונלי):
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="שאלות או בקשות מיוחדות..."
                    className="w-full px-4 py-3 border border-sand rounded-lg focus:ring-2 focus:border-transparent transition-colors resize-none"
                    style={{
                      '--tw-ring-color': '#56ACBF'
                    } as React.CSSProperties}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#56ACBF';
                      e.target.style.boxShadow = '0 0 0 2px rgba(86, 172, 191, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '';
                      e.target.style.boxShadow = '';
                    }}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Two Action Buttons */}
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || !isFormValid()}
                    className="
                      w-full font-bold font-semibold
                      py-3 px-6 text-lg
                      rounded-full
                      shadow-lg hover:shadow-xl
                      transform hover:scale-105 hover:-translate-y-1
                      transition-all duration-300 ease-out
                      flex items-center justify-center gap-2
                      disabled:bg-gray-300 disabled:transform-none disabled:shadow-none
                    "
                    style={{
                      backgroundColor: isSubmitting || !isFormValid() ? '#D1D5DB' : '#56ACBF',
                      color: 'white'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting && isFormValid()) {
                        e.currentTarget.style.backgroundColor = '#4A9AAB';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting && isFormValid()) {
                        e.currentTarget.style.backgroundColor = '#56ACBF';
                      }
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        שולח...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        אשמח שתחזרו אליי לפרטים
                      </>
                    )}
                  </button>
                  
                  <a
                    href="https://nataraj.co.il/mitzukei-retreat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-full font-bold font-semibold
                      py-3 px-6 text-lg
                      rounded-full
                      shadow-lg hover:shadow-xl
                      transform hover:scale-105 hover:-translate-y-1
                      transition-all duration-300 ease-out
                      flex items-center justify-center gap-2 text-center
                    "
                    style={{
                      backgroundColor: '#56ACBF',
                      color: 'white'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#4A9AAB';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#56ACBF';
                    }}
                  >
                    <i className="fas fa-calendar-check"></i>
                    לרכישה לחצו כאן
                  </a>
                </div>
              </form>

              {/* Direct Contact Options */}
              <div className="mt-8 pt-6 border-t border-sand/30">
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="tel:+972547882715"
                    className="
                      flex items-center gap-2 font-bold
                      px-6 py-3
                      rounded-full
                      shadow-lg hover:shadow-xl
                      transform hover:scale-105 hover:-translate-y-1
                      transition-all duration-300 ease-out
                    "
                    style={{
                      backgroundColor: '#56ACBF',
                      color: 'white'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#4A9AAB';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#56ACBF';
                    }}
                  >
                    <i className="fas fa-phone"></i>
                    התקשר עכשיו
                  </a>
                  
                  <a
                    href="https://wa.me/972547882715"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500/10 hover:bg-green-500/20 text-green-600 px-4 py-2 rounded-lg transition-colors"
                  >
                    <i className="fab fa-whatsapp"></i>
                    WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* Quote Section - Outside of Contact עם תמונת רקע */}
      <section className="py-16 bg-gradient-to-b from-green-500/20 to-cream">
        <Container>
          <div 
            className="max-w-4xl mx-auto relative rounded-3xl p-12 md:p-16 overflow-hidden"
            style={{
              backgroundImage: 'url(/images/gallery/20.jpg)', // Using different gallery image
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '300px'
            }}
          >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Quote text */}
            <div className="relative z-10 text-center">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-white italic leading-relaxed" style={{
                textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
              }}>
                &ldquo;המסע הפנימי מתחיל ברגע שאנחנו מפסיקים לחכות לתנאים המושלמים&rdquo;
              </blockquote>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactSection;
