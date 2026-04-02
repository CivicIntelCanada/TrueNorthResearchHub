import { Source, CredibilityLevel, DataPoint } from '@/types';
import governmentSources from '../../data/sources/government.json';

// Color coding for credibility levels
export const CREDIBILITY_COLORS: Record<CredibilityLevel, string> = {
  primary: 'bg-green-500',
  secondary: 'bg-yellow-500',
  tertiary: 'bg-orange-500',
  contested: 'bg-red-500'
};

export const CREDIBILITY_LABELS: Record<CredibilityLevel, string> = {
  primary: 'Primary Source',
  secondary: 'Secondary Source',
  tertiary: 'Tertiary Source',
  contested: 'Contested/Unverified'
};

// Get all sources
export function getAllSources(): Source[] {
  return [
    ...governmentSources.sources,
    // Add other source files here as you create them
  ];
}

// Get source by ID
export function getSourceById(id: string): Source | undefined {
  return getAllSources().find(source => source.id === id);
}

// Get sources by category
export function getSourcesByCategory(category: string): Source[] {
  return getAllSources().filter(source => source.category === category);
}

// Get sources by credibility level
export function getSourcesByCredibility(level: CredibilityLevel): Source[] {
  return getAllSources().filter(source => source.credibility === level);
}

// Format citation
export function formatCitation(source: Source, date?: string): string {
  let citation = source.citationFormat;
  
  if (date) {
    const d = new Date(date);
    citation = citation.replace('YYYY', d.getFullYear().toString());
    citation = citation.replace('Month DD', d.toLocaleDateString('en-CA', { month: 'long', day: 'numeric' }));
  }
  
  return citation;
}

// Create archive link (using Wayback Machine)
export function createArchiveLink(url: string): string {
  return `https://web.archive.org/web/*/${url}`;
}

// Check if source needs update
export function needsUpdate(source: Source): boolean {
  if (!source.nextUpdate) return false;
  return new Date(source.nextUpdate) <= new Date();
}

// Get reliability badge color
export function getReliabilityColor(score: number): string {
  if (score >= 9) return 'text-green-600 bg-green-50';
  if (score >= 7) return 'text-blue-600 bg-blue-50';
  if (score >= 5) return 'text-yellow-600 bg-yellow-50';
  return 'text-red-600 bg-red-50';
}

// Mock data for starter (replace with real API calls later)
export function getMockInflationData(): DataPoint {
  return {
    value: 2.8,
    unit: '%',
    date: '2026-03-01',
    previousValue: 2.9,
    change: -0.1,
    trend: 'down',
    source: getSourceById('statscan-cpi')!,
    confidence: 'high'
  };
}

export function getMockUnemploymentData(): DataPoint {
  return {
    value: 6.4,
    unit: '%',
    date: '2026-03-01',
    previousValue: 6.5,
    change: -0.1,
    trend: 'down',
    source: getSourceById('statscan-labour')!,
    confidence: 'high'
  };
}

export function getMockPolicyRate(): DataPoint {
  return {
    value: 4.50,
    unit: '%',
    date: '2026-03-12',
    previousValue: 4.50,
    change: 0,
    trend: 'stable',
    source: getSourceById('bankofcanada-rates')!,
    confidence: 'high'
  };
}
