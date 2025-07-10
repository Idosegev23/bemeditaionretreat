import {
  HeroSection,
  AboutSection,
  GallerySection,
  ProgramSection,
  ScheduleSection,
  InstructorsSection,
  LocationSection,
  PricingSection,
  TestimonialsSection,
  FAQSection,
  ContactSection
} from "@/components/sections";

export default function Home() {
  return (
    <>
      {/* Hero Section - סקשן הפתיחה עם תמונה ברקע */}
      <HeroSection />

      {/* About Section - תיאור הריטריט עם תמונות */}
      <AboutSection />

      {/* Gallery Section - גלריית תמונות */}
      <GallerySection />

      {/* Program Section - תוכנית הסופ"ש */}
      <ProgramSection />

      {/* Schedule Section - לוח הזמנים המפורט */}
      <ScheduleSection />

      {/* Instructors Section - צוות המנחים */}
      <InstructorsSection />

      {/* Location Section - על המקום */}
      <LocationSection />

      {/* Pricing Section - מחירים ואפשרויות לינה */}
      <PricingSection />

      {/* Testimonials Section - המלצות ממשתתפים */}
      <TestimonialsSection />

      {/* FAQ Section - שאלות נפוצות */}
      <FAQSection />

      {/* Contact Section - יצירת קשר והרשמה */}
      <ContactSection />
    </>
  );
}
