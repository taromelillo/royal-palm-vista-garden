import { create } from 'zustand';

interface BookingDate {
  bookingDate: Date | null;
  setBookingDate: (bookingDate: Date) => void;
  clearBookingDate: () => void;

  bookingName: string;
  setBookingName: (bookingName: string) => void;
  clearBookingName: () => void;
}

export const useBookingDate = create<BookingDate>((set) => ({
  bookingDate: null,
  setBookingDate: (booking: Date) => set({ bookingDate: booking }),
  clearBookingDate: () => set({ bookingDate: null }),
  bookingName: '',
  setBookingName: (name: string) => set({ bookingName: name }),
  clearBookingName: () => set({ bookingName: '' }),
}));
