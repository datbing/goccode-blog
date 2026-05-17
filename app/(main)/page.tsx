'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// 1. Danh sách Category chuẩn cấu trúc (có catSlug và catName)
const CATEGORIES = [
  { catSlug: 'all', catName: 'Tất cả' },
  { catSlug: 'backend', catName: 'Backend' },
  { catSlug: 'frontend', catName: 'Frontend' },
  { catSlug: 'ai-ml', catName: 'AI & Machine Learning' },
  { catSlug: 'devops', catName: 'DevOps' },
  { catSlug: 'ui-ux', catName: 'UI/UX Design' },
  { catSlug: 'life', catName: 'Chia sẻ trải nghiệm' }
];

// 2. Cập nhật bài viết sử dụng cấu trúc chuẩn
const MOCK_POSTS = [
  { id: 1, title: 'Xây dựng REST API chuẩn RESTful với NestJS', catSlug: 'backend', catName: 'Backend', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80', date: '16/05/2026' },
  { id: 2, title: 'Tối ưu hóa App Home Control với Vite & TailwindCSS', catSlug: 'frontend', catName: 'Frontend', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80', date: '14/05/2026' },
  { id: 3, title: 'Ứng dụng Computer Vision nhận diện cử chỉ tay', catSlug: 'ai-ml', catName: 'AI & Machine Learning', image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?w=800&q=80', date: '12/05/2026' },
  { id: 4, title: 'Triển khai CI/CD tự động với GitHub Actions', catSlug: 'devops', catName: 'DevOps', image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80', date: '10/05/2026' },
  { id: 5, title: 'Tâm sự: Hành trình từ Fresher lên Mid-level', catSlug: 'life', catName: 'Chia sẻ trải nghiệm', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', date: '08/05/2026' },
];

export default function HomePage() {
  // Quản lý state dựa trên catSlug thay vì catName
  const [activeSlug, setActiveSlug] = useState('all');

  // Logic lọc chuẩn: Lấy các bài có catSlug khớp với slug đang chọn
  const filteredPosts = activeSlug === 'all' 
    ? MOCK_POSTS 
    : MOCK_POSTS.filter(post => post.catSlug === activeSlug);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      <div className="mb-10 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3 transition-colors">
          Khám phá kiến thức
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg transition-colors">
          Những chia sẻ về lập trình, công nghệ và phát triển hệ thống.
        </p>
      </div>

      {/* THANH DANH MỤC */}
      <div className="relative mb-10">
        <div className="flex items-center gap-3 overflow-x-auto pb-4 hide-scrollbar snap-x">
          {CATEGORIES.map((category) => (
            <button
              key={category.catSlug}
              onClick={() => setActiveSlug(category.catSlug)}
              className={`
                snap-start whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                ${activeSlug === category.catSlug 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }
              `}
            >
              {category.catName}
            </button>
          ))}
        </div>
      </div>

      {/* DANH SÁCH BÀI VIẾT */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link href={`/post/${post.id}`} key={post.id} className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block flex flex-col">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">
                  {post.catName}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <div className="mt-auto text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {post.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 transition-colors">
          <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">
            Chưa có bài viết nào trong danh mục này!
          </p>
        </div>
      )}

    </div>
  );
}