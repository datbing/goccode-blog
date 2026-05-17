import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] text-slate-800 font-sans bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Header />
      
      {/* Nội dung trang chủ hoặc trang bài viết sẽ nằm ở đây */}
      <main className="flex-grow max-w-6xl mx-auto w-full px-4">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}