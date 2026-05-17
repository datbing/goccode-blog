import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Áp dụng cho mọi loại Bot (Google, Bing, Yahoo...)
      allow: '/', // Cho phép quét toàn bộ web
      disallow: ['/admin/', '/api/'], // CẤM quét khu vực quản trị và API
    },
    // Trỏ đường dẫn đến file sitemap để bot dễ tìm
    sitemap: 'https://goccode.vn/sitemap.xml',
  };
}