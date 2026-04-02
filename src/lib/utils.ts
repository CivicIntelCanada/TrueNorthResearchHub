import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Tailwind class merger - used by components
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Group array by key - used by SourceList
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    result[groupKey] = result[groupKey] || [];
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
}

// Format date
export function formatDate(date: string | Date, format: 'short' | 'long' = 'long'): string {
  const d = new Date(date);
  if (format === 'short') {
    return d.toLocaleDateString('en-CA');
  }
  return d.toLocaleDateString('en-CA', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

// Format number with commas
export function formatNumber(num: number, decimals = 0): string {
  return num.toLocaleString('en-CA', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

// Calculate percentage change
export function calculateChange(current: number, previous: number): number {
  return Number(((current - previous) / previous * 100).toFixed(2));
}

// Create URL-friendly slug
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50);
}

// Debounce function
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Generate citation
export function generateCitation(
  title: string,
  source: string,
  url: string,
  date: string
): string {
  return `${source}. (${new Date(date).getFullYear()}). "${title}". Retrieved ${new Date().toLocaleDateString('en-CA')} from ${url}`;
}
