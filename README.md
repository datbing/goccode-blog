# GocCode - Tech Blog Frontend

GocCode là dự án Blog cá nhân chia sẻ kiến thức công nghệ, lập trình và kiến trúc hệ thống. Đây là kho chứa mã nguồn Frontend, được xây dựng dựa trên Next.js App Router và Tailwind CSS. Dự án tập trung vào trải nghiệm người dùng (UX/UI), tối ưu chuẩn SEO và tích hợp sẵn giao diện quản trị (Admin Dashboard) hoàn chỉnh.

## Tính năng nổi bật

### Giao diện người dùng (Client)
- Hỗ trợ chế độ Sáng và Tối (Dark/Light Mode) với khả năng lưu cấu hình.
- Thiết kế đáp ứng (Responsive) trên các màn hình PC, Tablet và Mobile.
- Thanh điều hướng (Header) thông minh, tối ưu cấu trúc code (DRY).
- Trang chủ tích hợp bộ lọc bài viết động theo danh mục (Category Pills).
- Tối ưu hóa SEO: Hỗ trợ Meta Tags, Open Graph, tự động tạo file Robots.txt, Sitemap.xml và tích hợp cấu trúc dữ liệu JSON-LD.
- Trang báo lỗi 404 tùy chỉnh.

### Giao diện quản trị (Admin Dashboard)
- Trang Đăng nhập quản trị viên.
- Bảng quản lý bài viết: Tích hợp công cụ tìm kiếm và lọc dữ liệu theo danh mục, trạng thái.
- Tương tác mượt mà với hệ thống thông báo trạng thái (Toast Notifications).
- Trang Cấu hình hệ thống (Settings): Quản lý SEO, cấu hình Google Analytics, Search Console, Google AdSense và quyền hệ thống.

## Công nghệ và Thư viện sử dụng
- Framework: Next.js (App Router)
- Thư viện cốt lõi: React
- Định dạng giao diện: Tailwind CSS
- Quản lý Theme: next-themes
- Thư viện Icon: lucide-react
- Thư viện thông báo: react-hot-toast

## Cài đặt và khởi chạy dự án

1. Sao chép dự án về máy cục bộ:
bash
git clone https://github.com/datbing/goccode-blog.git
cd goccode-blog


2. Cài đặt các thư viện phụ thuộc:
bash
npm install


3. Khởi chạy môi trường phát triển:
bash
npm run dev


4. Xem dự án:
Mở trình duyệt và truy cập vào địa chỉ: `http://localhost:3000`

## Thông tin tác giả
Dự án được phát triển bởi datbing.