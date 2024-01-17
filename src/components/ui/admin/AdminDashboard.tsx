'use client';
import { Login, Dashboard } from '@/components';
import { useAdminUser } from '@/store/admin/admin-store';

export const AdminDashboard = () => {
  const adminToken = useAdminUser((state) => state.adminToken);
  return adminToken ? <Dashboard /> : <Login />;
};
