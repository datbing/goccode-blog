import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] dark:bg-slate-950 và dark:text-slate-50 text-slate-800 font-sans">
      <Header />
      <main className="flex-grow max-w-6xl mx-auto w-full px-4 pt-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}