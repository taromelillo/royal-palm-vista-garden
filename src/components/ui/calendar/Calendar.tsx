'use client';
import ReactCalendar from 'react-calendar';
import './Calendar.css';
import useFirestore from '@/hooks/useFirestore';
import { useBookingDate } from '@/store';

interface DateCalendar {
  justDate: Date | null;
  dateTime: Date | null;
}

export const Calendar = () => {
  const [data] = useFirestore({ database: 'bookings' });
  console.log(data.bookings[0]);
  const setBookingDate = useBookingDate((state) => state.setBookingDate);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <ReactCalendar
        minDate={new Date('ph-Philippines')}
        className="REACT-CALENDAR p-2"
        view="month"
        onClickDay={(date) => setBookingDate(date)}
        locale="en-US"
      />
    </div>
  );
};
