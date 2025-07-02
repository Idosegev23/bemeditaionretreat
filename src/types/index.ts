export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  'aria-label'?: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'transparent' | 'light' | 'warm' | 'image';
  spacing?: 'sm' | 'md' | 'lg';
  id?: string;
}

export interface InstructorData {
  id: string;
  name: string;
  role: string;
  description: string;
  image?: string;
  bio?: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  description?: string;
  type: 'activity' | 'meal' | 'break' | 'meditation';
  day: 'friday' | 'saturday';
}

export interface PricingOption {
  id: string;
  name: string;
  price: number;
  description?: string;
  features?: string[];
  highlighted?: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  joinWhatsApp?: boolean;
  message?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category?: 'nature' | 'activities' | 'people' | 'location';
} 