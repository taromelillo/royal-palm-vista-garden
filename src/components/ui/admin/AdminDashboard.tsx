'use client';
import { Login, Dashboard } from '@/components';
import { useAdminUser } from '@/store/admin/admin-store';

export const AdminDashboard = () => {
  const adminUser = useAdminUser((state) => state.adminToken);
  return adminUser === null ? <Login /> : <Dashboard />;
};
