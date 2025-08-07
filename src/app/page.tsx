import {
  HeroSection,
  AboutSection,
  GallerySection,
  ProgramSection,
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

      {/* Location Section - על המקום - מיקום מחדש אחרי התוכנית */}
      <LocationSection />

      {/* Instructors Section - צוות המנחים */}
      <InstructorsSection />

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
