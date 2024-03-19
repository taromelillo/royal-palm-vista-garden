import { udpdateBooking, deleteBooking } from '@/services/BookingService';
import { Booking, useBookingStore } from '@/store';
import clsx from 'clsx';
import moment from 'moment';
import { FormEvent, useRef, useState } from 'react';
import { IoCalendar, IoPersonOutline } from 'react-icons/io5';

import Swal from 'sweetalert2';

interface Props {
  data: Booking;
}

export const Bookings = ({ data }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);

  const updateBookingStore = useBookingStore((state) => state.updateBooking);
  const deleteBookingStore = useBookingStore((state) => state.deleteBooking);

  const deleteHandler = async (id: string) => {
    try {
      await deleteBooking(id);
      deleteBookingStore(id);
      Swal.fire({
        title: 'Deleted Succesfully',
        timer: 2000,
        icon: 'success',
        background: 'black',
        color: '#c3b792',
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        title: 'Error deleting',
        timer: 2000,
        icon: 'error',
        background: 'black',
        color: '#c3b792',
        showConfirmButton: false,
      });
    }
  };

  const dayRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
    id: string
  ) => {
    event?.preventDefault();
    if (
      nameRef.current === null ||
      dayRef.current === null ||
      monthRef.current === null ||
      yearRef.current === null
    )
      throw Error('Update Error: fill the input fields please. . . ');

    const e = event.target as HTMLFormElement;

    const updateData = {
      name: nameRef.current.value,
      day: moment(
        `${yearRef.current.value}/${monthRef.current.value}/${dayRef.current.value}`
      ).toDate(),
    };

    try {
      await udpdateBooking(id, updateData);

      updateBookingStore(id, {
        name: updateData.name,
        day: {
          seconds: Number(updateData.day) / 1000,
          nanoseconds: Number(updateData.day) * 1000000,
        },
      });

      Swal.fire({
        title: 'Updated Succesfully',
        timer: 2000,
        icon: 'success',
        background: 'black',
        color: '#c3b792',
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        title: 'Error updating',
        timer: 2000,
        icon: 'error',
        background: 'black',
        color: '#c3b792',
        showConfirmButton: false,
      });
    }
  };
  return (
    <article
      className='flex flex-col justify-centeritems-center gap-8 w-full sm:w-[500px] border border-accent p-8 rounded-xl shadow-inner shadow-accent transition-all transition-[height] duration-500 gap-8 fade-in'
      style={{
        height: !isVisible ? '150px' : '425px',
        transition: 'height 400ms',
      }}
    >
      <div className='flex flex-col w-full gap-8'>
        <div
          className='flex justify-between w-full'
          onClick={() => setIsVisible(!isVisible)}
        >
          <button>
            <IoCalendar size={23} />
          </button>
          {moment.unix(data.day.seconds).toDate().toLocaleDateString()}
        </div>
        <div className='flex w-full h-full items-center justify-between transition-all duration-300'>
          <button>
            <IoPersonOutline size={23} />
          </button>
          {data.name}
        </div>
      </div>

      <div
        className={clsx(
          'flex flex-col w-full transition-all duration-300 gap-8 fade-in',
          {
            hidden: !isVisible,
          }
        )}
      >
        <form
          className='flex flex-col w-full gap-4'
          onSubmit={(event) => handleSubmit(event, data.id)}
        >
          <div className='flex w-full items-center justify-between transition-all duration-300'>
            <input
              type='text'
              name='name'
              id='name'
              defaultValue={data.name}
              ref={nameRef}
              required
              className='w-[50%] h-[3rem] text-accent bg-black border-b border-px border-accent focus:outline-none'
            />
          </div>
          <div className='flex w-full items-center justify-between transition-all duration-300'>
            <input
              type='text'
              name='day'
              id='day'
              defaultValue={moment.unix(data.day.seconds).format('DD')}
              ref={dayRef}
              required
              maxLength={2}
              minLength={2}
              className='w-[14%] h-[3rem] text-accent bg-black border-b border-px border-accent focus:outline-none'
            />
            <input
              type='text'
              name='month'
              id='month'
              defaultValue={moment.unix(data.day.seconds).format('MM')}
              ref={monthRef}
              required
              maxLength={2}
              minLength={2}
              className='w-[14%] h-[3rem] text-accent bg-black border-b border-px border-accent focus:outline-none'
            />
            <input
              type='text'
              name='year'
              id='year'
              defaultValue={moment.unix(data.day.seconds).format('YYYY')}
              ref={yearRef}
              required
              maxLength={4}
              minLength={4}
              className='w-[20%] h-[3rem] text-accent bg-black border-b border-px border-accent focus:outline-none'
            />
          </div>

          <button
            type='submit'
            className='h-[3rem] p-6 bg-accent text-main flex items-center justify-center rounded uppercase font-bold fade-in'
          >
            <span>Update</span>
          </button>
        </form>
        <button
          onClick={() => deleteHandler(data.id)}
          className='h-[3rem] p-6 bg-accent text-main flex items-center justify-center rounded uppercase font-bold fade-in'
        >
          <span>Delete</span>
        </button>
      </div>
    </article>
  );
};
