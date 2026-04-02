// Source credibility levels
export type CredibilityLevel = 'primary' | 'secondary' | 'tertiary' | 'contested';

// Source categories
export type SourceCategory = 'government' | 'media' | 'international' | 'academic' | 'think_tank';

// Political bias (for media sources)
export type PoliticalBias = 'none' | 'left' | 'centre-left' | 'centre' | 'centre-right' | 'right';

// Source interface
export interface Source {
  id: string;
  name: string;
  shortName: string;
  category: SourceCategory;
  subcategory: string;
  credibility: CredibilityLevel;
  biasRating: PoliticalBias;
  reliabilityScore: number; // 1-10
  updateFrequency: 'realtime' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly' | 'static';
  nextUpdate?: string; // ISO date
  urls: {
    main: string;
    api?: string;
    table?: string;
    rss?: string;
    archive?: string;
  };
  contact?: {
    name: string;
    email: string;
    phone?: string;
  };
  methodology?: string;
  citationFormat: string;
  lastVerified?: string;
}

// Data point with citation
export interface DataPoint {
  value: number | string;
  unit?: string;
  date: string;
  source: Source;
  previousValue?: number | string;
  change?: number;
  trend?: 'up' | 'down' | 'stable';
  methodology?: string;
  confidence?: 'high' | 'medium' | 'low';
}

// Topic section
export interface TopicSection {
  id: string;
  title: string;
  content: string;
  dataPoints?: DataPoint[];
  sources?: Source[];
  subsections?: TopicSection[];
}

// Topic page data
export interface Topic {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  lastUpdated: string;
  nextUpdate?: string;
  sections: TopicSection[];
  relatedTopics?: string[];
  externalSources?: Source[];
  debateQuestions?: string[];
  historicalContext?: string;
}

// Navigation breadcrumb
export interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

// Rabbit hole node (for explore mode)
export interface ExploreNode {
  id: string;
  title: string;
  content: string;
  parentId?: string;
  childrenIds: string[];
  sources: Source[];
  relatedNodes: string[];
  depth: number;
}
