import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Góc Code - Blog Công Nghệ',
  description: 'Chia sẻ kiến thức lập trình, công nghệ và phát triển hệ thống.',
  keywords: ['blog công nghệ', 'lập trình', 'phát triển hệ thống', 'chia sẻ kiến thức'],
  icons: {
    icon: '/icon.ico',
    shortcut: '/icon.ico',
    apple: '/icon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="antialiased bg-[#f8fafc] text-slate-800 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-400">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster position="bottom-center" />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}