import { Login, Dashboard } from '@/components';
import { useAdminUser } from '@/store/admin/admin-store';

export const Admin = () => {
  const adminUser = useAdminUser((state) => state.adminToken);
  return;
  {
    adminUser === null ? <Login /> : <Dashboard />;
  }
};
