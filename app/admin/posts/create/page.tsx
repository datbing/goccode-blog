'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowLeft, Save, Eye, Image as ImageIcon } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';

// Import Quill Editor động để không bị lỗi Server-Side Rendering của Next.js
const ReactQuill = dynamic(() => import('react-quill-new'), { 
  ssr: false,
  loading: () => <div className="h-64 flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-400">Đang tải Editor...</div>
});
// Import file CSS giao diện cục tuyết (Snow) của Quill
import 'react-quill-new/dist/quill.snow.css';

export default function AdminCreatePostPage() {
  const [content, setContent] = useState('');

  const breadcrumbItems = [
    { label: 'Quản lý bài viết', href: '/admin/posts' },
    { label: 'Thêm bài viết mới' },
  ];

  // Cấu hình thanh công cụ (Giống hệt Word)
  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, false] }], // Thẻ tiêu đề
      ['bold', 'italic', 'underline', 'strike'], // Định dạng chữ
      [{ 'align': [] }], // Canh trái, giữa, phải, đều
      [{ 'color': [] }, { 'background': [] }], // Màu chữ, màu nền chữ
      [{ 'list': 'ordered'}, { 'list': 'bullet' }], // Danh sách
      ['blockquote', 'code-block'], // Trích dẫn, Khối code
      ['link', 'image'], // Chèn link, Chèn ảnh từ máy tính
      ['clean'] // Xóa định dạng
    ],
  };

  return (
    <div className="space-y-6 mx-auto pb-12">
      <div>
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Viết bài mới</h1>
          
          <div className="flex items-center gap-3">
            <Link 
              href="/admin/posts" 
              className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-xl transition-all bg-white dark:bg-slate-950"
            >
              <ArrowLeft size={16} /> Hủy bỏ
            </Link>
            <button className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-xl transition-all bg-white dark:bg-slate-950">
              <Eye size={16} /> Xem trước
            </button>
            <button className="flex items-center gap-1.5 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl shadow-md shadow-blue-500/10 transition-colors">
              <Save size={16} /> Xuất bản bài viết
            </button>
          </div>
        </div>
      </div>

      
        
        {/* CỘT TRÁI: Nội dung chính */}
      <div className="space-y-6">
        <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 transition-colors">
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Tiêu đề bài viết</label>
            <input 
              type="text" 
              placeholder="Nhập tiêu đề hấp dẫn tại đây..." 
              className="w-full text-lg font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors placeholder:text-slate-300 dark:placeholder:text-slate-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Mô tả ngắn / Tóm tắt</label>
            <textarea 
              rows={3}
              placeholder="Viết một đoạn tóm tắt ngắn để thu hút người đọc..." 
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-sm text-slate-800 dark:text-slate-200 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-all placeholder:text-slate-400 resize-none"
            />
          </div>

          {/* REACT QUILL EDITOR CHUẨN WORD Ở ĐÂY */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Nội dung bài viết</label>
            <div className="bg-white dark:bg-slate-950 rounded-xl">
              <ReactQuill 
                theme="snow" 
                value={content} 
                onChange={setContent} 
                modules={quillModules}
                placeholder="Bắt đầu viết nội dung của bạn..."
                className="h-[400px] pb-12" // pb-12 để chừa chỗ cho thanh công cụ dưới cùng không bị che mất nội dung
              />
            </div>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 transition-colors">
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Danh mục</label>
            <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 outline-none focus:border-blue-500 transition-all">
              <option>Backend</option>
              <option>Frontend</option>
              <option>AI & Machine Learning</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Thời gian đọc dự kiến</label>
            <input 
              type="text" 
              placeholder="Ví dụ: 5 phút đọc" 
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 outline-none focus:border-blue-500 transition-all placeholder:text-slate-400"
            />
          </div>

        </div>

        <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 transition-colors">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Ảnh bìa bài viết</label>
            <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100/50 dark:hover:bg-slate-900 cursor-pointer transition-colors group">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm text-slate-400 group-hover:text-blue-500 transition-colors">
                <ImageIcon size={20} />
              </div>
              <p className="mt-3 text-xs font-semibold text-slate-600 dark:text-slate-400 text-center">Tải ảnh lên</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}