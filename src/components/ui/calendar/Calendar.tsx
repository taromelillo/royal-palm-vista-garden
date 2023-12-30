'use client';
import ReactCalendar from 'react-calendar';
import './Calendar.css';

interface DateCalendar {
  justDate: Date | null;
  dateTime: Date | null;
}

export const Calendar = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <ReactCalendar
        minDate={new Date()}
        className="REACT-CALENDAR p-2"
        view="month"
        onClickDay={(date) => console.log(date)}
        locale="en-GB"
      />
    </div>
  );
};
