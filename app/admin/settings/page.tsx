import React from 'react';
import { Save, Image as ImageIcon, DollarSign } from 'lucide-react'; 

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6 pb-12">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Cài đặt hệ thống</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Cấu hình thông tin cơ bản, SEO, quảng cáo và bảo mật cho trang Web.</p>
      </div>

      <div className="bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-8 transition-colors">
        
        {/* 1. Cài đặt chung */}
        <div className="border-b border-slate-100 dark:border-slate-800 pb-8 space-y-5">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">1. Cấu hình cơ bản</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Tên miền (Domain)</label>
              <input 
                type="text"
                placeholder="VD: goccode.vn"
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Tên trang Web (Site Title)</label>
              <input 
                type="text" 
                defaultValue="GocCode - Blog Công Nghệ" 
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Mô tả SEO ngắn (Meta Description)</label>
              <textarea 
                rows={2}
                defaultValue="Nơi chia sẻ góc nhìn chuyên sâu về Next.js, NestJS và kiến trúc hệ thống phần mềm." 
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-sm text-slate-800 dark:text-slate-200 outline-none focus:border-blue-500 resize-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* 2. Cấu hình SEO & Analytics */}
        <div className="border-b border-slate-100 dark:border-slate-800 pb-8 space-y-5">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">2. Tối ưu SEO & Phân tích</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Từ khóa mặc định (Meta Keywords)</label>
              <input 
                type="text" 
                defaultValue="Lập trình web, Next.js, NestJS, React, Backend, Frontend" 
                placeholder="Phân cách các từ khóa bằng dấu phẩy (,)"
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Google Analytics ID</label>
              <input 
                type="text" 
                placeholder="VD: G-XXXXXXXXXX" 
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 outline-none focus:border-blue-500 transition-colors uppercase"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Xác minh Search Console</label>
              <input 
                type="text" 
                placeholder="Mã thẻ HTML xác minh" 
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Ảnh bìa mặc định khi share link</label>
              <div className="flex items-center gap-4">
                <div className="w-32 h-20 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 overflow-hidden">
                  <ImageIcon size={24} />
                </div>
                <div className="flex-1">
                  <input 
                    type="text" 
                    defaultValue="https://goccode.vn/default-og.jpg" 
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 outline-none focus:border-blue-500 transition-colors mb-2"
                  />
                  <button className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">Tải ảnh mới lên</button>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 flex items-center justify-between p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-xl">
              <div>
                <p className="text-sm font-bold text-amber-900 dark:text-amber-500">Ngăn chặn công cụ tìm kiếm (NoIndex)</p>
                <p className="text-xs text-amber-700 dark:text-amber-600/80 mt-0.5">Yêu cầu Google không lập chỉ mục trang web này (Thường dùng khi đang fix bug).</p>
              </div>
              <input type="checkbox" className="w-5 h-5 accent-amber-600 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* 3. Cấu hình Quảng cáo */}
        <div className="border-b border-slate-100 dark:border-slate-800 pb-8 space-y-5">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            3. Quảng cáo & Kiếm tiền (Google AdSense)
          </h3>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Kích hoạt quảng cáo toàn trang (Auto Ads)</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Cho phép Google tự động chèn quảng cáo vào các vị trí phù hợp.</p>
              </div>
              <input type="checkbox" className="w-5 h-5 accent-emerald-600 cursor-pointer" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Google AdSense Publisher ID</label>
              <input 
                type="text" 
                placeholder="VD: ca-pub-1234567890123456" 
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 outline-none focus:border-blue-500 transition-colors font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Cấu hình tệp ads.txt</label>
              <textarea 
                rows={4}
                placeholder="google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0" 
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-sm text-slate-800 dark:text-slate-200 outline-none focus:border-blue-500 resize-y transition-colors font-mono"
              />
              <p className="text-xs text-slate-400 mt-2">Nhập mỗi dòng một cấu hình. Hệ thống sẽ tự động tạo đường dẫn <code>/ads.txt</code> dựa trên nội dung này.</p>
            </div>
          </div>
        </div>

        {/* 4. Cấu hình bảo mật */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">4. Quyền thành viên & Bình luận</h3>
          
          <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800/50 border-dashed">
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Cho phép người dùng đăng ký tài khoản</p>
              <p className="text-xs text-slate-400">Bật tính năng này nếu muốn làm blog đa tác giả công khai.</p>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-600 cursor-pointer" />
          </div>

          <div className="flex items-center justify-between py-2">
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Duyệt bình luận tự động</p>
              <p className="text-xs text-slate-400">Bình luận của người đọc sẽ hiển thị ngay mà không cần admin bấm duyệt.</p>
            </div>
            <input type="checkbox" className="w-5 h-5 accent-blue-600 cursor-pointer" />
          </div>
        </div>

        {/* Nút lưu */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-md shadow-blue-500/20 text-sm transition-all hover:-translate-y-0.5">
            <Save size={18} /> Lưu cấu hình hệ thống
          </button>
        </div>

      </div>
    </div>
  );
}