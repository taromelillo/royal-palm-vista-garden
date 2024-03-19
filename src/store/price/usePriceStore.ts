import { create } from 'zustand';

export interface Price {
  id: string;
  name: string;
  price: number;
}

interface PriceStore {
  prices: Price[];
  setPrices: (prices: Price[]) => void;
  addPrice: (price: Price) => void;
  updatePrice: (id: string, update: Partial<Price>) => void;
  deletePrice: (id: string) => void;
}

export const usePriceStore = create<PriceStore>((set) => ({
  prices: [],
  setPrices: (prices) => set({ prices }),
  addPrice: (price) => set((state) => ({ prices: [...state.prices, price] })),
  updatePrice: (id, update) =>
    set((state) => ({
      prices: state.prices.map((price) =>
        price.id === id ? { ...price, ...update } : price
      ),
    })),
  deletePrice: (id) =>
    set((state) => ({
      prices: state.prices.filter((price) => price.id !== id),
    })),
}));
