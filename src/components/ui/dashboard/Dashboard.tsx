'use client';

import { useFetchBookings, useFetchPrices } from '@/hooks';
import './Dashboard.css';

import { Bookings } from '../bookings/Bookings';
import { BookingForm } from '../bookings/BookingForm';
import { Prices } from '../prices/Prices';
import { PriceForm } from '../prices/PriceForm';

export const Dashboard = () => {
  const { bookings: datesBooked } = useFetchBookings();
  const { prices } = useFetchPrices();

  return (
    <section className='max-w-[1000px] mt-24 w-full flex flex-col mx-auto min-h-[700px] items-center p-[1rem] gap-14'>
      <PriceForm />

      <h3 className='uppercase text-accent text-lg my-6 text-center'>
        Pricing List
      </h3>

      {prices &&
        prices.map((price) => {
          return <Prices data={price} key={price.id} />;
        })}

      <div className='w-full h-[1px] bg-accent' />
      <BookingForm />

      <h3 className='uppercase text-accent text-lg my-6 text-center'>
        Bookings List
      </h3>
      {datesBooked &&
        datesBooked.map((booking) => {
          return <Bookings data={booking} key={booking.id} />;
        })}
    </section>
  );
};
