'use client';

import { useBookingDate } from '@/store';
import { FormEvent, useRef } from 'react';

export const CheckoutForm = () => {
  const setBookingName = useBookingDate((state) => state.setBookingName);
  const name = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const e = event.target as HTMLFormElement;
    if (name.current === null || lastName.current === null)
      throw Error('Booking Form Error: please fill the input fields. . . ');
    const fullname = `${name.current.value} ${lastName.current.value}`;
    setBookingName(fullname);
    e.reset();
  };
  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className='w-full h-full flex flex-col md:p-[1rem] justify-between items-center py-8 gap-4'
    >
      <header className='w-full flex flex-col justfy-center items-center'>
        <h2 className='text-xl font-bold uppercase tracking-widest'>
          Book now
        </h2>
      </header>
      <div className='w-full h-px bg-accent' />

      <input
        type='text'
        name='name'
        id='name'
        required
        ref={name}
        placeholder='Name'
        className='w-full h-[3rem] text-accent bg-black border-b border-px border-accent focus:outline-none'
      />
      <input
        type='text'
        name='lastName'
        id='lastName'
        required
        ref={lastName}
        placeholder='Last Name'
        className='w-full h-[3rem] text-accent bg-black border-b border-px border-accent focus:outline-none'
      />
      <button
        type='submit'
        className='w-full h-[3rem] p-6 bg-accent text-main flex items-center justify-center rounded uppercase font-bold fade-in'
      >
        Next
      </button>
    </form>
  );
};
