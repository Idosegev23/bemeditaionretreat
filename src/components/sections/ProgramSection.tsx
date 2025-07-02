'use client';

import React from 'react';
import Image from 'next/image';
import { Container, Button } from '@/components/ui';

/**
 * Program Section - "מה מחכה לנו?" - סקשן תוכנית עם קארדים עם תמונות רקע
 * 
 * תכונות:
 * - 6 קארדים עם תמונות רקע מתאימות לתוכן
 * - overlay טקסט על התמונות
 * - פריסה grid רספונסיבית
 * - אנימציות כניסה מדורגות
 * - עיצוב מתקדם עם hover effects
 */
const ProgramSection: React.FC = () => {
  // Program activities data with background images
  const programActivities = [
    {
      id: 'breathe-move-connect',
      title: 'ננשום. ננוע. נתחבר.',
      description: 'נפתח את הסופ״ש בטיול מדיטטיבי בטבע – הליכה שקטה, הקשבה, ונוכחות פשוטה מול הנוף.',
      image: '/images/program/walking-meditation.webp',
      delay: 'animate-delay-200'
    },
    {
      id: 'practice',
      title: 'ניכנס לתוך תרגול',
      description: 'עם מדיטציות אקטיביות מבית אושו, שמניעות אותנו מתנועה אל שקט. נחווה גם רגעים של שקט ישיבה, נשימה, והתבוננות.',
      image: '/images/program/active-meditation.webp',
      delay: 'animate-delay-400'
    },
    {
      id: 'music-dance',
      title: 'נרקוד. נשיר. ננגן.',
      description: 'המוזיקה החיה, התדר, השירה המקודשת – כל אלה ילוו אותנו לאורך כל הסופ״ש.',
      image: '/images/program/music-dance.webp',
      delay: 'animate-delay-600'
    },
    {
      id: 'meet-people',
      title: 'נפגוש אנשים כמונו',
      description: 'שמבקשים רגע של אמת, הקשבה, ודרך חדשה להתחבר לעצמם. נהיה לבד – ונהיה ביחד. ננוע בין פנים לחוץ.',
      image: '/images/program/group-connection.webp',
      delay: 'animate-delay-800'
    },
    {
      id: 'write-share-rest',
      title: 'נכתוב. נשתף. ננוח.',
      description: 'יהיו רגעים של יצירה, כתיבה אינטואיטיבית, זמן של שקט מוחלט – וגם זמן של שמחה פשוטה.',
      image: '/images/program/writing-silence.webp',
      delay: 'animate-delay-1000'
    },
    {
      id: 'between-moments',
      title: 'ובין לבין',
      description: 'אוכל טוב, צחוק, נוף מרהיב, אוויר מדברי צלול – ומרחב שנועד בדיוק לזה.',
      image: '/images/program/desert-life.webp',
      delay: 'animate-delay-1200'
    }
  ];

  return (
    <section 
      className="py-24 md:py-32 bg-warm-white relative overflow-hidden"
      id="program"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-sand/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-light-brown/20 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Main Title */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-primary mb-8 leading-tight">
              מה מחכה לנו
              <br />
              <span className="text-desert-blue">בסופ״ש הקרוב?</span>
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto">
              שישה רגעים, שישה מרחבים, חוויה אחת שלמה במדבר
            </p>
          </div>

          {/* Program Cards Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            {programActivities.map((activity, index) => (
              <div
                key={activity.id}
                className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ${activity.delay} animate-fade-in-up`}
                style={{ minHeight: '400px' }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-heading text-warm-white leading-tight">
                      {activity.title}
                    </h3>
                    <p className="text-warm-white/90 text-lg leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                  
                  {/* Decorative accent */}
                  <div className="mt-6 flex space-x-2">
                    <div className="w-2 h-2 bg-desert-blue rounded-full opacity-80"></div>
                    <div className="w-2 h-2 bg-sand rounded-full opacity-60"></div>
                    <div className="w-2 h-2 bg-light-brown rounded-full opacity-40"></div>
                  </div>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-desert-blue/50 rounded-2xl transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 animate-fade-in-up animate-delay-1400">
            <div className="space-y-6">
              {/* Decorative line */}
              <div className="flex items-center justify-center space-x-4">
                <div className="h-px bg-gradient-to-r from-transparent via-desert-blue/30 to-transparent w-32"></div>
                <div className="w-3 h-3 bg-desert-blue/40 rounded-full"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-desert-blue/30 to-transparent w-32"></div>
              </div>
              
              <p className="text-text-secondary text-lg mb-8">
                מוכנים לצלול פנימה?
              </p>
              
              <Button
                variant="primary"
                size="lg"
                href="#schedule"
                className="
                  bg-gradient-to-r from-desert-blue to-desert-blue/80
                  hover:from-desert-blue/90 hover:to-desert-blue
                  text-warm-white font-semibold 
                  px-10 py-4 text-lg
                  rounded-xl
                  shadow-lg hover:shadow-xl
                  transform hover:scale-105 hover:-translate-y-1
                  transition-all duration-300
                  border border-desert-blue/30
                  hover:border-desert-blue/50
                "
                aria-label="צפייה בלוח הזמנים המפורט"
              >
                לצפייה בלוח הסופ״ש המלא
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ProgramSection; 