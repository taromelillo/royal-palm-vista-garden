import { fetchBookings } from '@/services/BookingService';
import { useBookingStore } from '@/store';
import { useEffect, useState } from 'react';

export const useFetchBookings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>({});

  const bookings = useBookingStore((state) => state.bookings);
  const setBookings = useBookingStore((state) => state.setBookings);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const bookings = await fetchBookings();
        setIsLoading(false);
        if (bookings) setBookings(bookings);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    })();
  }, []);

  return { bookings, isLoading, error };
};
