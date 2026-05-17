import React from 'react';
import AdminLayoutWrapper from '@/components/layout/AdminLayoutWrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard | GocCode',
  robots: { index: false, follow: false }
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminLayoutWrapper>
      {children}
    </AdminLayoutWrapper>
  );
}