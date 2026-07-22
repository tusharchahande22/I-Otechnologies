export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  industry: string;
  status: string;
  statusType: 'live' | 'dev' | 'vision';
  highlights: string[];
  image: string;
  link?: string;
}

export interface InnovationDomain {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
  metrics: string;
  badge: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  client: string;
  year: string;
  link?: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'ai' | 'cloud';
  icon: string;
  description: string;
  popularFor: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface ComparisonItem {
  title: string;
  iandoFeature: string;
  legacyFeature: string;
  icon: string;
}

export interface ScopeBlueprint {
  summary: string;
  techStack: string[];
  architecture: string;
  estimatedPhases: { phase: string; duration: string }[];
  aiRecommendations: string[];
}
