'use client';
import { useBookingDate } from '@/store/booking/useBookingDateStore';
import { CheckoutForm } from '../checkoutForm/CheckoutForm';
import './Checkout.css';
import WhatsappTemplate from '@/utlis/WhatsAppTemplate';

export const Checkout = () => {
  const bookingDate = useBookingDate((state) => state.bookingDate);
  const bookingName = useBookingDate((state) => state.bookingName);
  const { url } = WhatsappTemplate({ day: bookingDate, name: bookingName });
  return (
    <div className='w-full max-w-xl h-[400px] px-[2rem] my-[4rem]'>
      {bookingDate && bookingName ? (
        <div className='w-full h-full flex flex-col justify-between items-center text-accent transition-all duration-300 fade-in'>
          <header className='w-full h-[3rem] flex flex-col items-center justify-center gap-4'>
            <h2 className='text-xl font-bold uppercase tracking-widest'>
              {bookingDate !== null && bookingName !== ''
                ? bookingDate?.toDateString()
                : 'Day is not selected'}
            </h2>
            <div className='w-full h-px bg-accent' />
          </header>
          <main className='h-full flex flex-col justify-evenly w-full p-[.7rem]'>
            <div className='w-full flex justify-between items-center'>
              <p>Schedule: </p>
              <p>9:00 am - 18:00 pm</p>
            </div>
            <div className='w-full flex justify-between items-center'>
              <p>Price:</p>
              <p>{`price`}</p>
            </div>
          </main>
          <footer className='w-full '>
            <button className='w-full h-[3rem] p-6 bg-accent text-main flex items-center justify-center rounded uppercase font-bold fade-in'>
              <a href={url}>Book Now</a>
            </button>
          </footer>
        </div>
      ) : (
        <CheckoutForm />
      )}
    </div>
  );
};
