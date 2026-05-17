'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Eye, Search, FileX } from 'lucide-react';
import toast from 'react-hot-toast';

export default function AdminPostsPage() {
  // Dữ liệu mẫu
  const posts = [
    { id: 1, title: 'Xây dựng REST API chuẩn RESTful với NestJS', category: 'Backend', views: 1250, status: 'Đã xuất bản', date: '16/05/2026' },
    { id: 2, title: 'Tối ưu hóa App Home Control với Vite', category: 'Frontend', views: 840, status: 'Bản nháp', date: '14/05/2026' },
    { id: 3, title: 'Ứng dụng AI trong nhận diện hình ảnh', category: 'AI & Machine Learning', views: 2300, status: 'Đã xuất bản', date: '10/05/2026' },
  ];

  // 1. Tạo các State để lưu trữ điều kiện lọc
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả danh mục');
  const [selectedStatus, setSelectedStatus] = useState('Tất cả trạng thái');

  // 2. Xử lý logic lọc bài viết
  const filteredPosts = posts.filter((post) => {
    // Kiểm tra tên bài (không phân biệt hoa/thường)
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Kiểm tra danh mục
    const matchesCategory = selectedCategory === 'Tất cả danh mục' || post.category === selectedCategory;
    
    // Kiểm tra trạng thái
    const matchesStatus = selectedStatus === 'Tất cả trạng thái' || post.status === selectedStatus;

    // Trả về bài viết thỏa mãn CẢ 3 điều kiện
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Quản lý bài viết</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Hiển thị danh sách và trạng thái bài viết trên Blog.</p>
        </div>
        <Link 
          href="/admin/posts/create" 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-md text-sm transition-colors"
        >
          <Plus size={18} /> Viết bài mới
        </Link>
      </div>

      {/* KHU VỰC TÌM KIẾM & LỌC */}
      <div className="bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-4 transition-colors">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Tìm theo tiêu đề bài viết..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm outline-none focus:border-blue-500 text-slate-800 dark:text-slate-200"
          />
        </div>
        <div className="flex gap-2">
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-600 dark:text-slate-300 outline-none focus:border-blue-500"
          >
            <option value="Tất cả danh mục">Tất cả danh mục</option>
            <option value="Backend">Backend</option>
            <option value="Frontend">Frontend</option>
            <option value="AI & Machine Learning">AI & Machine Learning</option>
          </select>
          
          <select 
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-600 dark:text-slate-300 outline-none focus:border-blue-500"
          >
            <option value="Tất cả trạng thái">Tất cả trạng thái</option>
            <option value="Đã xuất bản">Đã xuất bản</option>
            <option value="Bản nháp">Bản nháp</option>
          </select>
        </div>
      </div>

      {/* BẢNG DỮ LIỆU */}
      <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden transition-colors">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                <th className="px-6 py-4">Bài viết</th>
                <th className="px-6 py-4 whitespace-nowrap">Danh mục</th>
                <th className="px-6 py-4 whitespace-nowrap">Trạng thái</th>
                <th className="px-6 py-4 whitespace-nowrap">Lượt xem</th>
                <th className="px-6 py-4 text-right whitespace-nowrap">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              
              {/* Kiểm tra nếu có dữ liệu thì map, không thì hiện bảng trống */}
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
                    <td className="px-6 py-4 min-w-[250px]">
                      <p className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug">{post.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{post.date}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md whitespace-nowrap">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${
                        post.status === 'Đã xuất bản' 
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' 
                          : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                      }`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                      {post.views.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => toast('Đang mở trang xem trước...')} className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors"><Eye size={16} /></button>
                        <button onClick={() => toast('Chuyển đến trang sửa bài...')} className="p-2 text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 bg-slate-50 dark:bg-slate-900 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg transition-colors"><Edit size={16} /></button>
                        <button onClick={() => toast.success('Đã xóa bài viết vào thùng rác!')} className="p-2 text-slate-400 hover:text-red-600 dark:hover:text-red-400 bg-slate-50 dark:bg-slate-900 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                /* Giao diện khi không tìm thấy kết quả */
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                      <FileX size={48} className="mb-4 opacity-50" />
                      <p className="text-base font-semibold text-slate-600 dark:text-slate-300">Không tìm thấy bài viết nào!</p>
                      <p className="text-sm mt-1">Thử thay đổi từ khóa hoặc bộ lọc danh mục xem sao.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}