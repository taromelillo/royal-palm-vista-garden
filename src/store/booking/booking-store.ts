import { create } from 'zustand'

interface BookingDate {
    bookingDate: Date | null,
    setBookingDate: (bookingDate: BookingDate['bookingDate']) => void
    clearBookingDate: () => void
    bookingName: String,
    setBookingName: (bookingName: BookingDate['bookingName']) => void
    clearBookingName: () => void
}
export const useBookingDate = create<BookingDate>((set) => ({
    bookingDate: null,
    setBookingDate: (booking) => set({bookingDate: booking}),
    clearBookingDate: () => set({ bookingDate: null}),
    bookingName: '',
    setBookingName: (name) => set({bookingName: name }),
    clearBookingName: () => set({ bookingName: ''})
}))