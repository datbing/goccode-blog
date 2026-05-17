import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-800 dark:text-slate-200 font-semibold">{item.label}</span>
          )}
          {idx < items.length - 1 && <ChevronRight size={14} className="text-slate-400" />}
        </div>
      ))}
    </nav>
  );
}