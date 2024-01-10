'use client';

import { useBookingDate } from '@/store';
import { useRef } from 'react';

export const CheckoutForm = () => {
  const fullName = useBookingDate((state) => state.setBookingName);
  const name = useRef();
  const lasteName = useRef();
  const handleSubmit = () => {
    fullName('Nombre + Apellido');
  };
  return (
    <form
      //   onSubmit={handleSubmit}
      className="w-full h-full flex flex-col md:p-[3rem] justify-between items-center gap-8"
    >
      <header className="w-full flex flex-col justfy-center items-center">
        <h2 className="text-xl font-bold uppercase tracking-widest">
          Start booking
        </h2>
        <div className="w-full h-px bg-accent" />
      </header>

      <input
        type="text"
        name="name"
        id="name"
        // ref={name}
        placeholder="Name"
        className="w-full h-[3rem] text-accent bg-black border-b border-px border-accent focus:outline-none"
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last Name"
        className="w-full h-[3rem] text-accent bg-black border-b border-px border-accent focus:outline-none"
      />
      <button className="w-full h-[3rem] p-6 bg-accent text-main flex items-center justify-center rounded uppercase font-bold fade-in">
        Next
      </button>
    </form>
  );
};
