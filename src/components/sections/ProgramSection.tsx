'use client';

import React from 'react';
import { Container } from '@/components/ui';
import Button from '@/components/ui/Button';

/**
 * Program Section - תוכנית הסופ"ש בסגנון אפרוז
 * 
 * תכונות:
 * - יום שישי מעל יום שבת (לא לצד)
 * - עיצוב ברור ומסודר כמו אפרוז
 * - צבעים מתאימים למערכת החדשה
 */
const ProgramSection: React.FC = () => {
  // תוכנית יום שישי
  const fridaySchedule = [
    {
      time: '16:00',
      title: 'הגעה וקבלת פנים',
      description: 'הגעה למצוקי דרגות, קבלת פנים חמה והתמקמות במקום הקסום'
    },
    {
      time: '17:00',
      title: 'פתיחת הסופ"ש',
      description: 'מעגל פתיחה, היכרות, ושיתוף כוונות לסופ"ש'
    },
    {
      time: '18:00',
      title: 'טיול מדיטטיבי בטבע',
      description: 'הליכה שקטה במדבר, התחברות למקום ונוכחות פשוטה מול הנוף המרהיב'
    },
    {
      time: '19:30',
      title: 'ארוחת ערב משותפת',
      description: 'ארוחה קהילתית באווירה חמה ותומכת'
    },
    {
      time: '21:00',
      title: 'מדיטציה אקטיבית ומוזיקה',
      description: 'תרגול מדיטציה בתנועה, מוזיקה חיה ותנועה חופשית'
    },
    {
      time: '22:30',
      title: 'זמן חופשי ומנוחה',
      description: 'זמן אישי, שיחות בקבוצות קטנות, מנוחה'
    }
  ];

  // תוכנית יום שבת
  const saturdaySchedule = [
    {
      time: '07:00',
      title: 'מדיטציית שחרית',
      description: 'מדיטציה שקטה לקראת הזריחה, התחברות ליום החדש'
    },
    {
      time: '08:00',
      title: 'ארוחת בוקר',
      description: 'ארוחת בוקר קלה ומזינה'
    },
    {
      time: '09:30',
      title: 'כתיבה אינטואיטיבית',
      description: 'תרגול כתיבה פנימית, חקירה עצמית והתבוננות'
    },
    {
      time: '11:00',
      title: 'מדיטציות בתנועה',
      description: 'מגוון מדיטציות אקטיביות מבית אושו - תנועה והתבוננות פנימה'
    },
    {
      time: '12:30',
      title: 'ארוחת צהריים',
      description: 'ארוחה משותפת וזמן מנוחה'
    },
    {
      time: '14:00',
      title: 'זמן אישי במדבר',
      description: 'זמן להתבודדות, טיול אישי, מנוחה או צילום'
    },
    {
      time: '16:00',
      title: 'מעגל שיתוף',
      description: 'שיתוף החוויות, תובנות ותמיכה קבוצתית'
    },
    {
      time: '17:30',
      title: 'מדיטציית סיום',
      description: 'תרגול סיום, אינטגרציה של החוויה'
    },
    {
      time: '18:30',
      title: 'ארוחת סיום ופרידה',
      description: 'ארוחה חגיגית ופרידה חמה עד הפעם הבאה'
    }
  ];

  const TimeSlot = ({ time, title, description }: { time: string; title: string; description: string }) => (
    <li className="flex items-start gap-3 p-3 rounded-lg bg-white/70 border border-sand/40">
      <div className="mt-1 text-desert-brown text-sm font-semibold flex-shrink-0 min-w-[56px] text-right">{time}</div>
      <div className="flex-1">
        <div className="text-base md:text-lg font-semibold text-text-primary mb-1 text-right">{title}</div>
        <p className="text-sm md:text-base text-text-secondary leading-relaxed text-right">{description}</p>
      </div>
    </li>
  );

  const AccordionItem: React.FC<{
    id: string;
    title: string;
    subtitle?: string;
    schedule: typeof fridaySchedule;
    isOpen: boolean;
    onToggle: () => void;
  }> = ({ id, title, subtitle, schedule, isOpen, onToggle }) => {
    const headerId = `${id}-header`;
    const panelId = `${id}-panel`;
    return (
      <div className="border border-sand/50 rounded-xl overflow-hidden bg-white/80">
        <button
          id={headerId}
          type="button"
          className="w-full flex items-center justify-between px-4 py-3 md:px-6 md:py-4 text-right transition-colors duration-300 hover:bg-sand/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-desert-brown/60"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold text-text-primary">{title}</h3>
            {subtitle && <p className="text-sm text-text-secondary mt-1">{subtitle}</p>}
          </div>
          <span className={`text-2xl select-none transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-0'}`} aria-hidden>
            {isOpen ? '–' : '+'}
          </span>
        </button>
        <div
          id={panelId}
          role="region"
          aria-labelledby={headerId}
          className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}
        >
          <div className={`px-4 pb-4 md:px-6 md:pb-6 transform transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
            <ul className="space-y-3">
              {schedule.map((slot, idx) => (
                <TimeSlot key={idx} {...slot} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const [openId, setOpenId] = React.useState<'friday' | 'saturday' | null>('friday');

  return (
    <section 
      className="py-12 md:py-20 bg-cream"
      id="program"
    >
      <Container>
        {/* Main white container wrapping everything like in About */}
        <div className="max-w-6xl mx-auto bg-white/90 rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg">
          
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-desert-brown mb-3">
              תוכנית הסופ&quot;ש
            </h2>
            <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              שני ימים של נוכחות, תנועה ושקט פנימי – מתוכננים בפשטות ובהירות.
            </p>
          </div>

          {/* הוסר באנר הציטוט לטובת פשטות */}

          {/* יום שישי */}
          <div className="mb-6">
            <AccordionItem
              id="friday"
              title="יום שישי, 26 בספטמבר"
              subtitle="יום פתיחה – התחברות למקום ולקבוצה"
              schedule={fridaySchedule}
              isOpen={openId === 'friday'}
              onToggle={() => setOpenId(openId === 'friday' ? null : 'friday')}
            />
          </div>

          {/* יום שבת */}
          <div className="mb-8">
            <AccordionItem
              id="saturday"
              title="יום שבת, 27 בספטמבר"
              subtitle="יום העמקה – מדיטציות, כתיבה ואינטגרציה"
              schedule={saturdaySchedule}
              isOpen={openId === 'saturday'}
              onToggle={() => setOpenId(openId === 'saturday' ? null : 'saturday')}
            />
          </div>

          {/* הוסר: "מה כלול/לא כלול" – יועבר לסקשן הכרטיסים/מחירים */}

          {/* קריאה לפעולה */}
          <div className="text-center">
            <Button variant="primary" size="lg" href="#contact" aria-label="הרשמה לריטריט">
              הרשמה לריטריט
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ProgramSection; 