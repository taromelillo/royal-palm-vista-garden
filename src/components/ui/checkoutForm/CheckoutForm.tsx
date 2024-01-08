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
      className="w-full h-full flex flex-col p-[1rem] justify-evenly items-center gap-8"
    >
      {/* <p>Day's not selected</p> */}
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        className="h-[3rem] text-accent bg-black border-b border-px border-accent focus:outline-none"
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last Name"
        className="h-[3rem] text-accent bg-black border-b border-px border-accent focus:outline-none"
        // style={{

        // }}
      />
    </form>
  );
};
