import type { Metadata } from 'next';
import { title } from '@/config/fonts';
import './globals.css';
import { Navbar, Sidebar } from '@/components';

export const metadata: Metadata = {
  title: 'Royal Palm Vista Garden',
  description: 'Private Pool & Cafe',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={title.className}>
        <Navbar />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
