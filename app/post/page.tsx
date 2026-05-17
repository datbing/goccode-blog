import Link from 'next/link';
import { ArrowLeft, Share2, Bookmark, Calendar } from 'lucide-react';
import type { Metadata } from 'next';

// SEO Optimization
export async function generateMetadata(): Promise<Metadata> {
  const post = {
    title: "Xây dựng REST API chuẩn RESTful với NestJS",
    excerpt: "Hướng dẫn từng bước thiết kế cơ sở dữ liệu, quản lý module...",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop",
    slug: "xay-dung-rest-api-chuan-restful-voi-nestjs",
    // Tạo mảng từ khóa cho bài viết
    tags: ["NestJS", "Backend", "RESTful API", "TypeScript", "NodeJS", "Lập trình Web"]
  };

  return {
    title: `${post.title} | goccode`,
    description: post.excerpt,
    keywords: post.tags, 
    // 2. THÊM CANONICAL URL TẠI ĐÂY (Giúp Google biết đây là link gốc, không phải link copy)
    alternates: {
      canonical: `https://goccode.vn/post/${post.slug}`, 
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    }
  };
}

export default function PostDemoPage() {

  // SEO Optization
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Xây dựng REST API chuẩn RESTful với NestJS',
    image: 'https://images.unsplash.com/photo-1555066931...',
    author: {
      '@type': 'Person',
      name: 'Đào Xuân Đạt',
    },
    datePublished: '2026-05-16',
  };
  return (
    <article className="mx-auto bg-white dark:bg-slate-900 sm:p-12 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm mt-4 mb-12 transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Nút quay lại */}
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
        Trở về trang chủ
      </Link>
      
      {/* Header bài viết */}
      <div className="mb-8">
        <span className="inline-block text-xs font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full mb-4 transition-colors">
          Backend
        </span>
        <h1 className="text-3xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-[1.2] tracking-tight transition-colors">
          Xây dựng REST API chuẩn RESTful với NestJS
        </h1>
      </div>
      
      {/* Thông tin Tác giả */}
      <div className="flex items-center justify-between py-6 border-y border-slate-100 dark:border-slate-800 mb-8 transition-colors">
        <div className="flex items-center gap-4">
          {/* Avatar đảo ngược màu */}
          <div className="w-12 h-12 bg-slate-900 dark:bg-slate-100 rounded-full flex items-center justify-center text-white dark:text-slate-900 font-bold text-lg shadow-md transition-colors">
            Đ
          </div>
          <div>
            <p className="font-bold text-slate-900 dark:text-white transition-colors">Đào Xuân Đạt</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-0.5 transition-colors">
              <Calendar size={14} /> 16/05/2026
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2.5 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
            <Share2 size={20} />
          </button>
          <button className="p-2.5 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-colors">
            <Bookmark size={20} />
          </button>
        </div>
      </div>

      {/* Ảnh bìa */}
      <div className="rounded-2xl overflow-hidden mb-10 shadow-sm border border-slate-100 dark:border-slate-800">
        <img 
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80" 
          alt="NestJS" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Nội dung bài viết */}
      <div className="text-lg text-slate-700 dark:text-slate-300 leading-loose transition-colors">
        <p className="mb-6 font-medium text-xl text-slate-800 dark:text-slate-200 transition-colors">
          NestJS mang đến một bộ kiến trúc phần mềm hoàn chỉnh, sử dụng Dependency Injection và có cấu trúc Module cực kỳ rõ ràng, dễ bảo trì cho các dự án lớn.
        </p>
        
        <p className="mb-6">
          Khi làm việc với các dự án thực tế, việc thiết kế một cấu trúc thư mục tốt từ đầu là vô cùng quan trọng. Khác với ExpressJS cho phép bạn tự do (đôi khi là bừa bãi) đặt file ở bất cứ đâu, NestJS ép bạn vào một khuôn khổ chuẩn mực giống như Angular.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 transition-colors">
          Cấu trúc chuẩn của một Module
        </h2>
        <p className="mb-6">
          Một module cơ bản để quản lý bài viết (Posts) sẽ bao gồm Controller (tiếp nhận Request), Service (Xử lý logic), và DAO hoặc Repository (Tương tác với Database). Việc chia tách các hàm xử lý database ra riêng giúp code dễ dàng mở rộng hơn.
        </p>

        {/* Khung code mẫu (Giữ nguyên nền tối, chỉ thêm viền cho nổi bật ở chế độ Dark Mode) */}
        <div className="bg-[#0f172a] text-slate-300 p-6 rounded-xl font-mono text-sm leading-relaxed overflow-x-auto shadow-inner my-8 border border-transparent dark:border-slate-700/50">
          <span className="text-blue-400">import</span> {'{ Module }'} <span className="text-blue-400">from</span> '@nestjs/common';<br/>
          <span className="text-blue-400">import</span> {'{ PostsController }'} <span className="text-blue-400">from</span> './posts.controller';<br/>
          <span className="text-blue-400">import</span> {'{ PostsService }'} <span className="text-blue-400">from</span> './posts.service';<br/>
          <br/>
          <span className="text-emerald-400">@Module</span>({'{'}<br/>
          &nbsp;&nbsp;controllers: [PostsController],<br/>
          &nbsp;&nbsp;providers: [PostsService],<br/>
          {'}'})<br/>
          <span className="text-blue-400">export class</span> PostsModule {'{}'}
        </div>
      </div>
    </article>
  );
}