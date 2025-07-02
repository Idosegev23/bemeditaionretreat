# System Patterns: ארכיטקטורה ודפוסי עיצוב

## ארכיטקטורת קומפוננטים

### היררכיית קומפוננטים
```
App Layout
├── Header (Navigation + Logo)
├── Main Content
│   ├── HeroSection
│   ├── AboutSection
│   ├── ProgramSection
│   ├── ScheduleSection
│   ├── InstructorsSection
│   ├── LocationSection
│   ├── PricingSection
│   ├── FAQSection
│   └── ContactSection
└── Footer
```

### קומפוננטים גלובליים נדרשים
- **Button** - כפתורים עם variants (primary, secondary, outline)
- **Container** - wrapper עם padding מותאם למסכים
- **Section** - wrapper לסקשנים עם spacing אחיד
- **Typography** - קומפוננטים לכותרות ופסקאות
- **Form** - קומפוננטי טפסים נגישים
- **Modal** - פופ-אפים ודיאלוגים
- **Accordion** - עבור FAQ ותוכן מתקפל

## דפוסי עיצוב מרכזיים

### Layout Patterns
1. **Container Pattern**
   - מקסימום רוחב: 1200px
   - Padding responsive: 16px mobile, 24px tablet, 32px desktop
   - Center alignment עם margin auto

2. **Grid System**
   - CSS Grid עבור layouts מורכבים
   - Flexbox עבור אלמנטים קטנים
   - Mobile-first breakpoints

3. **Section Pattern**
   - רווח אחיד בין סקשנים
   - Background variants: transparent, light, image
   - אופציונלי: divider בין סקשנים

### Component Patterns
1. **Card Pattern**
   - מידע מובנה (instructors, pricing)
   - Shadow עדין
   - Hover effects

2. **CTA Pattern**
   - כפתור ראשי בולט
   - כפתור משני עדין יותר
   - מיקומים אסטרטגיים בעמוד

3. **Content Hierarchy**
   - H1: כותרת ראשית (Hero)
   - H2: כותרות סקשנים
   - H3: כותרות משנה
   - Body text: תיאורים ותוכן

## ניהול מצב ונתונים

### מצב האפליקציה
```typescript
interface AppState {
  form: {
    isSubmitting: boolean;
    errors: Record<string, string>;
    values: FormData;
  };
  ui: {
    activeSection: string;
    modalOpen: boolean;
    mobileMenuOpen: boolean;
  };
  content: {
    language: 'he'; // תמיכה עתידית במולטי לשון
    theme: 'light' | 'dark';
  };
}
```

### ניהול טפסים
- Form validation בזמן אמת
- Error handling מקומי וגלובלי
- Success states עם הודעות ברורות
- Auto-save draft (אופציונלי)

## דפוסי UX/UI

### Navigation Patterns
1. **Desktop Navigation**
   - Fixed header עם לוגו + ניווט
   - Smooth scroll לסקשנים
   - Active state על הסקשן הנוכחי

2. **Mobile Navigation**
   - Hamburger menu מנופח
   - Full-screen overlay
   - Touch-friendly sizing

### מערכת צבעים
```css
:root {
  /* Desert Color Palette */
  --cream: #FDF6E3;
  --sand: #E5D4B1;
  --light-brown: #C7A882;
  --desert-blue: #7BA098;
  --warm-white: #FEFBF7;
  --text-primary: #3E3E3E;
  --text-secondary: #6B6B6B;
}
```

### Typography Scale
```css
:root {
  /* Hebrew-optimized fonts */
  --font-primary: 'Assistant', -apple-system, sans-serif;
  --font-heading: 'Secular One', 'Assistant', sans-serif;
  
  /* Type scale */
  --text-xs: 0.75rem;   /* 12px */
  --text-sm: 0.875rem;  /* 14px */
  --text-base: 1rem;    /* 16px */
  --text-lg: 1.125rem;  /* 18px */
  --text-xl: 1.25rem;   /* 20px */
  --text-2xl: 1.5rem;   /* 24px */
  --text-3xl: 1.875rem; /* 30px */
  --text-4xl: 2.25rem;  /* 36px */
}
```

## דפוסי נגישות

### Keyboard Navigation
- Tab order לוגי
- Focus indicators ברורים
- Skip links לתוכן מרכזי
- Escape לסגירת מודלים

### Screen Reader Support
- Semantic HTML עם landmarks
- ARIA labels מתאימים
- Alt text לכל התמונות
- Live regions לעדכונים דינמיים

### Color & Contrast
- ניגודיות מינימלית 4.5:1
- מידע לא מועבר רק בצבע
- Focus indicators ברורים
- תמיכה ב-high contrast mode

## דפוסי ביצועים

### Image Optimization
```typescript
// דפוס לטעינת תמונות מותאם
interface ImageConfig {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
}
```

### Code Splitting
- Page-level splitting אוטומטי
- Component-level lazy loading
- Third-party libraries נפרדים
- Critical CSS inline

### Caching Strategy
- Static assets: 1 year
- API responses: 5 minutes
- Images: 1 month
- Service worker עבור offline

## Error Handling Patterns

### Form Errors
- Inline validation מיידית
- Error summary בראש הטופס
- Clear error messages בעברית
- Recovery suggestions

### Global Errors
- Error boundary קומפוננטים
- Fallback UI עם retry options
- Logging לשירות חיצוני
- Graceful degradation

## הרחבה עתידית

### Internationalization
- מבנה מוכן לתרגום
- RTL/LTR switching
- מחרוזות בקבצים נפרדים
- Date/number formatting

### Content Management
- מבנה מוכן לCMS
- Dynamic content loading
- Image gallery expansion
- Blog integration ready

### E-commerce Integration
- Payment gateway ready
- Cart functionality structure
- User accounts foundation
- Order management system 