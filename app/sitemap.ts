import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://goccode.vercel.app/';

  // Demo: Sau này bạn sẽ gọi API NestJS ở đây để lấy danh sách toàn bộ URL bài viết
  // const posts = await fetch(`${baseUrl}/api/posts`).then(res => res.json());

  const MOCK_POSTS = [
    { slug: 'xay-dung-rest-api-chuan-restful-voi-nestjs', updatedAt: '2026-05-16T00:00:00.000Z' },
  ];

  // Map dữ liệu bài viết thành chuẩn Sitemap của Next.js
  const postUrls = MOCK_POSTS.map((post) => ({
    url: `${baseUrl}/post`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const, // Báo cho bot biết bài viết có thể được cập nhật hàng tuần
    priority: 0.8, // Độ ưu tiên (0.8 là rất cao đối với bài viết chi tiết)
  }));

  return [
    // 1. Thêm trang chủ
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily', // Trang chủ cập nhật hàng ngày
      priority: 1.0, // Ưu tiên tuyệt đối cao nhất
    },
    // 3. Rải toàn bộ link bài viết (đã map ở trên) vào đây
    ...postUrls,
  ];
}