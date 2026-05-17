import React from 'react';

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Tổng quan hệ thống</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
          <p className="text-sm text-slate-500 dark:text-slate-400">Tổng số bài viết</p>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">124</p>
        </div>
        <div className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
          <p className="text-sm text-slate-500 dark:text-slate-400">Lượt truy cập</p>
          <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mt-2">45.2K</p>
        </div>
        <div className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
          <p className="text-sm text-slate-500 dark:text-slate-400">Bình luận mới</p>
          <p className="text-3xl font-bold text-amber-600 dark:text-amber-400 mt-2">89</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 transition-colors duration-300">
        <h2 className="font-bold text-slate-800 dark:text-slate-100 mb-4">Bài viết gần đây</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex justify-between items-center py-3 border-b border-slate-100 dark:border-slate-800/60 last:border-0">
              <div>
                <p className="font-medium text-slate-900 dark:text-slate-200">Tiêu đề bài viết demo số {item}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Đăng ngày 16/05/2026</p>
              </div>
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Chỉnh sửa</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}