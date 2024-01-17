import { auth } from '@/config/firebase';
import { create } from 'zustand';

interface AdminUser {
  adminToken: String | undefined;
  setAdminToken: (adminToken: AdminUser['adminToken']) => void;
  clearAdminToken: () => void;
}

export const useAdminUser = create<AdminUser>((set) => ({
  adminToken: auth.currentUser?.uid,
  setAdminToken: (token) => set({ adminToken: token }),
  clearAdminToken: () => set({ adminToken: undefined }),
}));
