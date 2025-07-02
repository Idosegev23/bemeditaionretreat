# Tech Context: טכנולוגיות ומגבלות טכניות

## מחסנית טכנולוגיות מומלצת

### Frontend Framework
**Next.js 14** עם App Router
- רינדור שרת לביצועים מעולים
- SEO אופטימלי
- תמיכה מובנית בRTL לעברית
- מערכת ניתוב מתקדמת

### Styling
**Tailwind CSS** עם הגדרות מותאמות
- מערכת צבעים מדברית מותאמת
- Responsive design מהיר
- Utility-first עבור פיתוח מהיר
- תמיכה מלאה בRTL

### UI Components
**Headless UI** או **Radix UI**
- נגישות מובנית
- קומפוננטים גמישים
- תמיכה בתקן נגישות ישראלי AA

### Forms & Validation
**React Hook Form** + **Zod**
- ביצועים מעולים
- ולידציה טייפ-סייפ
- חוויית משתמש חלקה

### אנימציות
**Framer Motion**
- אנימציות חלקות ועדינות
- ביצועים מיטביים
- תאימות מובנית לנגישות

## דרישות טכניות חובה

### נגישות (WCAG 2.1 AA)
- תמיכה בקוראי מסך
- ניווט במקלדת
- ניגודיות צבעים תקנית
- טקסטים אלטרנטיביים לתמונות
- תווית ARIA מלאה

### ביצועים
- Core Web Vitals מעולים
- Lazy loading לתמונות
- קומפרסיה מתקדמת
- CDN לתכנים סטטיים
- Bundle optimization

### רספונסיביות
- Mobile-first approach
- גריד מותאם לכל המכשירים
- Touch-friendly אינטראקציות
- בדיקה על מכשירים מרובים

## אינטגרציות נדרשות

### Email/CRM
חיבור למערכת אוטומציה:
- Make.com (המלצה ראשונה)
- Zapier (חלופה)
- EmailJS (לפיתוח מהיר)

### Social Sharing
- WhatsApp Business API
- Facebook Share API
- Instagram (קישור לפרופיל)
- מתכנת שיתוף מובנה

### Analytics
- Google Analytics 4
- Facebook Pixel
- Heat mapping (Hotjar)

## הגדרות פיתוח

### סביבת פיתוח
```bash
Node.js 18+
TypeScript עבור type safety
ESLint + Prettier עבור איכות קוד
```

### Build & Deploy
- Vercel (המלצה ראשונה)
- Netlify (חלופה)
- CI/CD אוטומטי
- Environment variables מוגנות

### מבנה קבצים מומלץ
```
src/
├── app/ (App Router)
├── components/ (Reusable components)
├── lib/ (Utilities & config)
├── styles/ (Global styles)
└── types/ (TypeScript types)
```

## אבטחה ופרטיות

### הגנת מידע
- HTTPS חובה
- הצפנת נתונים רגישים
- תקנות GDPR compliance
- חוק הגנת הפרטיות הישראלי

### בדיקות אבטחה
- Input sanitization
- CSRF protection
- Rate limiting על טפסים
- זיהוי בוטים בסיסי

## תחזוקה ועדכונים

### מודולריות
- קומפוננטים עצמאיים
- קוד מתועד היטב
- הפרדה בין לוגיקה לעיצוב
- מבנה תיקיות אינטואיטיבי

### מוניטורינג
- Error tracking (Sentry)
- Performance monitoring
- Uptime monitoring
- User feedback collection

## גיבויים והמשכיות
- קוד ב-Git repository
- גיבויי קבצים סטטיים
- גיבוי הגדרות CDN
- תיעוד סביבת פרודקשן 