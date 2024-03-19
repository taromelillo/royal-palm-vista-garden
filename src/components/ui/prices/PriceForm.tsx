import { createPrice } from '@/services/PriceService';
import { usePriceStore } from '@/store';
import { pricesSchema } from '@/utlis/validations/pricesSchema';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';

export const PriceForm = () => {
  const addPriceStore = usePriceStore((state) => state.addPrice);

  const { values, handleChange, isSubmitting, handleSubmit, errors } =
    useFormik({
      initialValues: {
        name: '',
        price: '',
      },
      validationSchema: pricesSchema,
      validateOnChange: false,
      onSubmit: async () => {
        try {
          const newPrice = {
            name: values.name,
            price: Number(values.price),
          };
          await createPrice(newPrice).then((res) =>
            addPriceStore({ id: res.id, ...newPrice })
          );

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
    <>
      <h3 className='uppercase text-accent text-lg my-6 text-center'>
        Create a price
      </h3>

      <form
        onSubmit={handleSubmit}
        autoComplete='off'
        className='w-[350px] h-[320px] grid grid-cols-12 place-items-center'
      >
        <div className='grid col-span-10 col-start-2 w-full place-items-right'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            value={values.name}
            onChange={handleChange}
            id='name'
            className='w-full h-[3rem] text-accent bg-black border-b border-px border-accent focus:outline-none'
          />
        </div>
        <div className='grid col-span-10 col-start-2'>
          {errors.name && <p className='text-red-500'>{errors.name}</p>}
        </div>
        <div className='grid col-span-10 col-start-2 w-full place-items-right'>
          <label htmlFor='price'>Price</label>
          <input
            type='text'
            value={values.price}
            onChange={handleChange}
            id='price'
            className='w-full h-[3rem] text-accent bg-black border-b border-px border-accent focus:outline-none'
          />
        </div>
        <div className='grid col-span-10 col-start-2'>
          {errors.price && <p className='text-red-500'>{errors.price}</p>}
        </div>

        <div className='grid col-span-10 w-full col-start-2'>
          <button
            disabled={isSubmitting}
            type='submit'
            className='w-[100%] h-[3rem] bg-accent text-main flex items-center justify-center rounded uppercase font-bold fade-in'
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
};
