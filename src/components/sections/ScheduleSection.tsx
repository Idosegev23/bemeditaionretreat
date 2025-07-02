'use client';

import React from 'react';
import { Container } from '@/components/ui';

const ScheduleSection: React.FC = () => {
  // Friday Schedule
  const fridaySchedule = [
    { time: '09:00', activity: 'התכנסות', type: 'arrival' },
    { 
      time: '10:00', 
      activity: 'טיול מדיטטיבי בטבע', 
      description: 'בשילוב כוונה, הקשבה למסרים מהטבע, ושיתוף',
      type: 'meditation' 
    },
    { time: '12:00', activity: 'הפסקת צהריים וקבלת חדרים', type: 'break' },
    { 
      time: '13:30', 
      activity: 'מדיטציית קונדליני של אושו', 
      description: 'הקלאסיקה של המדיטציות האקטיביות – ניעור, ריקוד, התבוננות ומנוחה',
      type: 'meditation' 
    },
    { 
      time: '15:00', 
      activity: 'מבוא למדיטציה, שקט פנימי ותהליך מודעות', 
      description: 'הרצאה חווייתית עם ז׳יוואני',
      type: 'lecture' 
    },
    { 
      time: '18:00', 
      activity: 'קבלת שבת עם שירה מקודשת וסאונד הילינג', 
      description: 'עם דנה שירה',
      type: 'sacred' 
    },
    { time: '19:30', activity: 'ארוחת ערב משותפת', type: 'meal' },
    { 
      time: '20:30', 
      activity: 'Who is in?', 
      description: 'תהליך חקירה מעולם הזן בודהיזם',
      type: 'inquiry' 
    },
    { time: '22:00', activity: 'זמן חופשי – מדורה, נגינה, בר', type: 'free' }
  ];

  // Saturday Schedule
  const saturdaySchedule = [
    { time: '07:00', activity: 'צ׳י קונג עם שי וירג', type: 'movement' },
    { time: '08:30', activity: 'ארוחת בוקר', type: 'meal' },
    { 
      time: '09:30', 
      activity: 'מדיטציית ויפאסנה של אושו', 
      description: 'ישיבה שקטה, התבוננות בנשימה והליכה מודעת (הפסקה בשתיקה)',
      type: 'meditation' 
    },
    { 
      time: '11:00', 
      activity: 'סדנת אכילה מודעת עם גילי פז', 
      description: 'ומעגל שיתוף',
      type: 'workshop' 
    },
    { time: '13:00', activity: 'ארוחת צהריים במודעות', type: 'meal' },
    { 
      time: '', 
      activity: 'הפסקת צהריים', 
      description: 'לנוח, לאכול, לים',
      type: 'break' 
    },
    { time: '15:00', activity: 'מדיטציה בריקוד', type: 'meditation' },
    { time: '16:30', activity: 'מדיטציה ומעגל סיום', type: 'closing' }
  ];

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'meditation': return 'bg-desert-blue/20 border-desert-blue/30';
      case 'meal': return 'bg-orange-400/20 border-orange-400/30';
      case 'sacred': return 'bg-light-brown/30 border-light-brown/40';
      case 'lecture': return 'bg-sand/40 border-sand/50';
      case 'workshop': return 'bg-cream/60 border-cream/70';
      case 'movement': return 'bg-desert-blue/15 border-desert-blue/25';
      case 'inquiry': return 'bg-light-brown/25 border-light-brown/35';
      case 'arrival': return 'bg-sand/30 border-sand/40';
      case 'break': return 'bg-warm-white border-text-secondary/20';
      case 'free': return 'bg-warm-white border-text-secondary/20';
      case 'closing': return 'bg-light-brown/20 border-light-brown/30';
      default: return 'bg-warm-white border-text-secondary/20';
    }
  };

  const ScheduleItem = ({ time, activity, description, type }: {
    time: string;
    activity: string;
    description?: string;
    type: string;
  }) => (
    <div className="group mb-8 last:mb-0">
      <div className="flex items-start space-x-12 rtl:space-x-reverse rtl:space-x-0 rtl:space-s-12">
        {time && (
          <div className={`
            flex-shrink-0 px-4 py-2 rounded-xl border
            ${getActivityColor(type)}
            text-text-primary font-medium text-lg
            min-w-[80px] text-center
            shadow-sm ml-8
          `}>
            {time}
          </div>
        )}
        <div className="flex-grow space-y-2">
          <h3 className="text-xl md:text-2xl font-medium text-text-primary leading-relaxed">
            {activity}
          </h3>
          {description && (
            <p className="text-lg text-text-secondary leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <div className="flex space-x-2">
          <div className="w-1 h-1 bg-text-secondary/30 rounded-full"></div>
          <div className="w-1 h-1 bg-text-secondary/20 rounded-full"></div>
          <div className="w-1 h-1 bg-text-secondary/10 rounded-full"></div>
        </div>
      </div>
    </div>
  );

  const DayColumn = ({ title, schedule, dayClass }: {
    title: string;
    schedule: typeof fridaySchedule;
    dayClass: string;
  }) => (
    <div className={`${dayClass} space-y-8`}>
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-heading text-text-primary mb-4">
          {title}
        </h3>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-desert-blue/40 to-transparent mx-auto"></div>
      </div>
      <div className="space-y-8">
        {schedule.map((item, index) => (
          <ScheduleItem
            key={index}
            time={item.time}
            activity={item.activity}
            description={item.description}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section 
      className="py-24 md:py-32 bg-cream relative overflow-hidden"
      id="schedule"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-32 left-0 w-96 h-96 bg-sand/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-0 w-80 h-80 bg-warm-white/40 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-primary mb-8 leading-tight">
              לוח הסופ״ש
              <br />
              <span className="text-desert-blue">ננשום, ננוע, נתחבר</span>
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                לוח זמנים מפורט לסופ״ש שלם של נוכחות, תנועה ושקט במדבר
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 mb-20">
            <DayColumn
              title="יום שישי"
              schedule={fridaySchedule}
              dayClass="animate-fade-in-up animate-delay-200"
            />
            
            <div className="hidden lg:block absolute left-1/2 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-text-secondary/20 to-transparent transform -translate-x-1/2"></div>
            
            <DayColumn
              title="יום שבת"
              schedule={saturdaySchedule}
              dayClass="animate-fade-in-up animate-delay-400"
            />
          </div>

          <div className="text-center animate-fade-in-up animate-delay-600">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <div className="h-px bg-gradient-to-r from-transparent via-text-secondary/30 to-transparent w-32"></div>
                <div className="w-2 h-2 bg-text-secondary/40 rounded-full"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-text-secondary/30 to-transparent w-32"></div>
              </div>
              
              <div className="bg-warm-white/70 backdrop-blur-sm rounded-2xl p-8 border border-sand/30 shadow-sm">
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  <span className="text-text-primary font-medium">*</span> שימו לב – ייתכנו שינויים קלים בתוכנית בהתאם לזרימה ולמזג האוויר.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  <span className="text-text-primary font-medium">פירוט נוסף על המדיטציות והפעילויות – יעלה בקרוב *</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ScheduleSection; 