import { create } from 'zustand'

interface BookingDate {
    bookingDate: Date | null,
    setBookingDate: (bookingDate: BookingDate['bookingDate']) => void
    clearBookingDate: () => void
}
export const useBookingDate = create<BookingDate>((set) => ({
    bookingDate: null,
    setBookingDate: (booking) => set({bookingDate: booking}),
    clearBookingDate: () => set({ bookingDate: null})
}))