import { createBooking } from '@/services/BookingService';
import { useBookingStore } from '@/store';
import { bookingSchema } from '@/utlis/validations/bookingSchema';
import { useFormik } from 'formik';
import moment from 'moment';
import Swal from 'sweetalert2';

export const BookingForm = () => {
  const addBookingStore = useBookingStore((state) => state.addBooking);

  const {
    handleSubmit,
    isSubmitting,
    handleChange,
    handleBlur,
    errors,
    values,
  } = useFormik({
    initialValues: { name: '', day: '', month: '', year: '' },
    validationSchema: bookingSchema,
    validateOnChange: false,
    onSubmit: async () => {
      try {
        const newBooking = {
          name: values.name,
          day: moment(`${values.year}/${values.month}/${values.day}`).toDate(),
        };
        console.log('Submitting', newBooking);
        await createBooking(newBooking).then((res) => {
          addBookingStore({
            id: res.id,
            name: values.name,
            day: {
              seconds: Number(newBooking.day) / 1000,
              nanoseconds: Number(newBooking.day) * 1000000,
            },
          });
        });

        Swal.fire({
          title: 'Created Succesfully',
          timer: 2000,
          icon: 'success',
          background: 'black',
          color: '#c3b792',
          showConfirmButton: false,
        });
      } catch (error) {
        Swal.fire({
          title: 'Error creating',
          timer: 2000,
          icon: 'error',
          background: 'black',
          color: '#c3b792',
          showConfirmButton: false,
        });
      }
    },
  });
  return (
    <div>
      <h3 className='uppercase text-accent text-lg my-6 text-center'>
        Create a booking
      </h3>
      <form
        onSubmit={handleSubmit}
        autoComplete='off'
        className='w-[350px] h-[320px] grid grid-cols-12 place-items-center gap-2'
      >
        <div className='grid w-full col-span-10 col-start-2 place-items-right'>
          <label htmlFor='name'>Name</label>
          <input
            value={values.name}
            onChange={handleChange}
            id='name'
            type='text'
            placeholder='Clint Silver'
            onBlur={handleBlur}
            className='w-[100%] h-[3rem] text-accent bg-black border-b border-px border-accent focus:outline-none'
          />
        </div>
        <div className='grid col-span-12 place-items-center'>
          {errors.name && <p className='text-red-500'>{errors.name}</p>}
        </div>
        <div className='grid col-span-4 place-items-right mt-4'>
          <label htmlFor='day'>Day</label>
          <input
            id='day'
            type='text'
            placeholder='17'
            value={values.day}
            onChange={handleChange}
            onBlur={handleBlur}
            className='w-[50px] h-[3rem] text-accent bg-black border-b border-px border-accent focus:outline-none'
          />
        </div>
        <div className='grid col-span-4 place-items-right mt-4'>
          <label htmlFor='month'>Month</label>
          <input
            id='month'
            type='text'
            placeholder='03'
            value={values.month}
            onChange={handleChange}
            onBlur={handleBlur}
            className='w-[50px] h-[3rem] text-accent bg-black border-b border-px border-accent focus:outline-none'
          />
        </div>
        <div className='grid col-span-4 place-items-right mt-4'>
          <label htmlFor='year'>Year</label>
          <input
            id='year'
            type='text'
            placeholder='2024'
            value={values.year}
            onChange={handleChange}
            onBlur={handleBlur}
            className='w-[50px] h-[3rem] text-accent bg-black border-b border-px border-accent focus:outline-none'
          />
        </div>

        <div className='grid col-span-4 col-start-1'>
          {errors.day && <p className='text-red-500'>{errors.day}</p>}
        </div>
        <div className='grid col-span-4 col-start-5'>
          {errors.month && <p className='text-red-500'>{errors.month}</p>}
        </div>
        <div className='grid col-span-4 col-start-9'>
          {errors.year && <p className='text-red-500'>{errors.year}</p>}
        </div>
        <div className='grid col-span-10 col-start-2 w-full place-items-right'>
          <button
            disabled={isSubmitting}
            type='submit'
            className='w-[100%] h-[3rem] bg-accent text-main flex items-center justify-center rounded uppercase font-bold fade-in'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
