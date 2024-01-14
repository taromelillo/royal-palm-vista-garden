import { auth } from '@/config/firebase';
import { User } from 'firebase/auth';
import { create } from 'zustand';

interface AdminUser {
  adminToken: User | null;
  setAdminToken: (adminToken: AdminUser['adminToken']) => void;
  clearAdminToken: () => void;
}

export const useAdminUser = create<AdminUser>((set) => ({
  adminToken: auth.currentUser,
  setAdminToken: (token) => set({ adminToken: token }),
  clearAdminToken: () => set({ adminToken: null }),
}));
