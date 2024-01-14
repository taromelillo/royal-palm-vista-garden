import { auth } from '@/config/firebase';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <section className="min-h-screen">{children}</section>;
}
