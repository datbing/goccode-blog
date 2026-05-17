import Link from 'next/link';
import Image from 'next/image';
import { Lock } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4 transition-colors duration-300">
      <Link href="/" className="flex items-center gap-2 mb-8">
        <Image src="/icon.png" alt="GocCode" width={40} height={40} className="w-auto h-10" />
        <span className="text-3xl font-extrabold text-slate-900 dark:text-white">GocCode</span>
      </Link>

      <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Đăng nhập Admin</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Vui lòng nhập tài khoản quản trị viên</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email</label>
            <input 
              type="email" 
              placeholder="admin@goccode.vn" 
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Mật khẩu</label>
              <a href="#" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">Quên mật khẩu?</a>
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          
          <button 
            type="button"
            className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-colors mt-2"
          >
            <Lock size={18} /> Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}