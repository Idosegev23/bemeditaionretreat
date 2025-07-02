import { Container, Section, Button } from "@/components/ui";
import {
  HeroSection,
  AboutSection,
  ProgramSection,
  ScheduleSection,
  InstructorsSection,
  LocationSection,
  PricingSection,
  FAQSection,
  ContactSection
} from "@/components/sections";

export default function Home() {
  return (
    <>
      {/* Hero Section - סקשן הפתיחה עם וידאו ברקע */}
      <HeroSection />

      {/* About Section - תיאור הריטריט עם תמונות */}
      <AboutSection />

      {/* Program Section - מה מחכה לנו בסופ"ש */}
      <ProgramSection />

      {/* Schedule Section - לוח הזמנים המפורט */}
      <ScheduleSection />

      {/* Instructors Section - צוות המנחים */}
      <InstructorsSection />

      {/* Location Section - על המקום */}
      <LocationSection />

      {/* Pricing Section - מחירים ואפשרויות לינה */}
      <PricingSection />

      {/* FAQ Section - שאלות נפוצות */}
      <FAQSection />

      {/* Contact Section - יצירת קשר והרשמה */}
      <ContactSection />
    </>
  );
}
