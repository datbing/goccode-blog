import React from 'react';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

interface PostCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
}

export default function PostCard({ title, excerpt, image, category }: PostCardProps) {
  return (
    <Link 
      href="/post" 
      className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
    >
      {/* Khung ảnh */}
      <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-800 overflow-hidden relative">
        <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/30 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      </div>
      
      {/* Nội dung Card */}
      <div className="p-6 flex-1 flex flex-col">
        <span className="text-[11px] font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 rounded-full w-max mb-4">
          {category}
        </span>
        
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">
          {title}
        </h2>
        
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 mb-6 flex-1">
          {excerpt}
        </p>
        
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 flex items-center justify-center text-[10px] font-bold">
              Đ
            </div>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Đào Xuân Đạt</span>
          </div>
          <span className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-medium">
            <Calendar size={14} /> 25/05/2026
          </span>
        </div>
      </div>
    </Link>
  );
}