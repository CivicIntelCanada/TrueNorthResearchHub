'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const pathname = usePathname();
  
  // Auto-generate from path if no items provided
  const breadcrumbItems = items || generateBreadcrumbs(pathname);

  if (breadcrumbItems.length <= 1) return null;

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn("py-3 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b", className)}
    >
      <ol className="flex items-center flex-wrap gap-2 text-sm max-w-7xl mx-auto">
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-gray-400 mx-2 flex-shrink-0" />
            )}
            
            {item.isCurrent ? (
              <span className="font-medium text-gray-900" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-1"
              >
                {index === 0 && <Home className="w-4 h-4" />}
                <span className={index === 0 ? 'hidden sm:inline' : ''}>
                  {item.label}
                </span>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Helper to generate breadcrumbs from URL path
function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const paths = pathname.split('/').filter(Boolean);
  const items: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];
  
  let currentPath = '';
  paths.forEach((path, index) => {
    currentPath += `/${path}`;
    const isLast = index === paths.length - 1;
    
    // Format label (replace hyphens with spaces, capitalize)
    const label = path
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
    
    items.push({
      label,
      href: currentPath + '/',
      isCurrent: isLast
    });
  });
  
  return items;
}

// Back button component
export function BackButton({ className }: { className?: string }) {
  return (
    <button
      onClick={() => window.history.back()}
      className={cn(
        "inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors",
        className
      )}
    >
      ← Back
    </button>
  );
}

// Escape hatch for rabbit holes
export function EscapeHatch({ to = '/', label = "Exit to Home" }: { to?: string; label?: string }) {
  return (
    <Link
      href={to}
      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
    >
      <Home className="w-4 h-4" />
      {label}
    </Link>
  );
}
