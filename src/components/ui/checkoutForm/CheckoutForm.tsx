'use client';

import { useBookingDate } from '@/store';

export const CheckoutForm = () => {
  const fullName = useBookingDate((state) => state.bookingName);
  const handleSubmit = () => {
    // event.preventDefault();
  };
  return (
    <form
      //   onSubmit={handleSubmit}
      className="w-full h-full flex flex-col md:p-[3rem] justify-between items-center gap-8"
    >
      {/* <p>Day's not selected</p> */}
      <input
        type="text"
        name="name"
        id="name"
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
