'use client';

import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

export default function AdminLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-50 font-sans overflow-hidden transition-colors duration-300 relative">
      {/* Sidebar nhận state để biết lúc nào mở, lúc nào đóng */}
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header nhận hàm mở Sidebar */}
        <AdminHeader onMenuClick={() => setIsSidebarOpen(true)} />
        
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}