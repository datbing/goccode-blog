import Image from 'next/image';
import Link from 'next/link';
import { LayoutDashboard, FileText, Users, Settings, BookOpen, X } from 'lucide-react';

interface AdminSidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function AdminSidebar({ isOpen, setIsOpen }: AdminSidebarProps) {
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 dark:bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar chính */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 dark:bg-slate-950 border-r border-transparent dark:border-slate-800 text-white flex flex-col h-full transition-transform duration-300 ease-in-out
        lg:static lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/icon.png" alt="GocCode Logo" width={24} height={24} className="rounded-sm" />
            <span>
              <span className="font-bold tracking-wide">GocCode</span>
              <span className="font-bold tracking-wide text-red-400"> Dashboard</span>
            </span>
          </Link>
          
          {/* Nút Đóng (Chỉ hiện trên Mobile) */}
          <button onClick={() => setIsOpen(false)} className="lg:hidden text-slate-400 hover:text-white p-1">
            <X size={20} />
          </button>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link onClick={() => setIsOpen(false)} href="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link onClick={() => setIsOpen(false)} href="/admin/posts" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <FileText size={18} /> Quản lý bài viết
          </Link>
          <Link onClick={() => setIsOpen(false)} href="/admin/users" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <Users size={18} /> Quản lý user
          </Link>
          <Link onClick={() => setIsOpen(false)} href="/admin/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <Settings size={18} /> Cài đặt web
          </Link>
        </nav>
      </aside>
    </>
  );
}