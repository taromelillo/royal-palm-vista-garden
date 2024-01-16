import { priceService } from '@/services/IndexServices';
import { create } from 'zustand';

interface Price {
  bookingPrice: number;
}

export const usePrice = create<Promise<any>>(async (set) => ({
  bookingPrice: await priceService.get().then((res: any) => {
    return res;
  }),
}));
