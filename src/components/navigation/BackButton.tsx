'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BackButtonProps {
  className?: string;
  fallbackUrl?: string;
  label?: string;
}

export default function BackButton({ 
  className, 
  fallbackUrl = '/',
  label = 'Back'
}: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (window.history.length > 2) {
      router.back();
    } else {
      router.push(fallbackUrl);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-lg hover:bg-gray-50 hover:text-blue-600 transition-colors",
        className
      )}
    >
      <ArrowLeft className="w-4 h-4" />
      {label}
    </button>
  );
}
