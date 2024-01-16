'use client';
import ReactCalendar from 'react-calendar';
import { useBookingDate } from '@/store';
import useDateBooked from '@/hooks/useDateBooked';
import './Calendar.css';

export const Calendar = () => {
  const datesBooked = useDateBooked();
  const setBookingDate = useBookingDate((state) => state.setBookingDate);
  const isLoaded = datesBooked.length !== 0;

  return (
    <div className="h-[400px] w-full md:max-w-md  flex flex-col justify-center items-center">
      {isLoaded ? (
        <ReactCalendar
          minDate={new Date()}
          className="REACT-CALENDAR p-2 fade-in"
          view="month"
          tileDisabled={({ date, view }) =>
            view === 'month' && // Block day tiles only
            datesBooked.some(
              (dateBooked) =>
                date.getFullYear() === dateBooked.getFullYear() &&
                date.getMonth() === dateBooked.getMonth() &&
                date.getDate() === dateBooked.getDate()
            )
          }
          onClickDay={(date) => {
            setBookingDate(date);
          }}
          locale="en-US"
        />
      ) : (
        <div className="h-full w-full"></div>
      )}
    </div>
  );
};
