import { auth } from '@/config/firebase';
import { create } from 'zustand';

interface AdminUser {
  adminToken: String | null;
  setAdminToken: (adminToken: AdminUser['adminToken']) => void;
  clearAdminToken: () => void;
}

export const useAdminUser = create<AdminUser>((set) => ({
  adminToken: auth.currentUser?.uid || null,
  setAdminToken: (token) => set({ adminToken: token }),
  clearAdminToken: () => set({ adminToken: null }),
}));
