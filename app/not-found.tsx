import Link from 'next/link';
import { Terminal, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center px-4 transition-colors duration-300">
      <div className="text-center space-y-6">
        <div className="flex justify-center text-blue-600 dark:text-blue-500 mb-4">
          <Terminal size={80} strokeWidth={1.5} />
        </div>
        <h1 className="text-6xl font-extrabold text-slate-900 dark:text-white">404</h1>
        <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300">Không tìm thấy trang</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          Lỗi 404: Có vẻ như bạn đã vào nhầm trang rồi.
        </p>
        <div className="pt-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-md transition-all hover:-translate-y-1"
          >
            <Home size={20} /> Về trang chủ GocCode
          </Link>
        </div>
      </div>
    </div>
  );
}