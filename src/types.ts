export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  badge: string;
  features: string[];
  techStack: string[];
  deliverables: string[];
}

export interface ProjectCase {
  id: string;
  title: string;
  category: 'saas' | 'mobile' | 'ai' | 'cloud';
  categoryLabel: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  techStack: string[];
  mockupType: 'dashboard' | 'mobile' | 'ai-chat' | 'cloud-metrics';
  status: 'Concluído' | 'Em Produção' | 'Enterprise';
}

export interface EstimatorOption {
  id: string;
  label: string;
  description: string;
  baseDays: number;
  icon: string;
}

export interface EstimatorFeature {
  id: string;
  label: string;
  category: string;
  extraDays: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'contratacao' | 'tecnico' | 'prazos' | 'seguranca';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  highlight: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budgetRange: string;
  message: string;
}
