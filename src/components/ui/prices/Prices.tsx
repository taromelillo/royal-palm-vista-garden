import { Price, usePriceStore } from '@/store';

import { useState } from 'react';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import { pricesSchema } from '@/utlis/validations/pricesSchema';
import clsx from 'clsx';
import { updatePrice } from '@/services/PriceService';

interface Props {
  data: Price;
}
export const Prices = ({ data }: Props) => {
  const updatePriceStore = usePriceStore((state) => state.updatePrice);
  const deletePriceStore = usePriceStore((state) => state.deletePrice);

  const [isVisible, setIsVisible] = useState(false);

  const handleDelete = async () => {
    try {
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
        title: 'Error deleting',
        timer: 2000,
        icon: 'error',
        background: 'black',
        color: '#c3b792',
        showConfirmButton: false,
      });
    }
  };

  const { values, handleChange, isSubmitting, handleSubmit, errors } =
    useFormik({
      initialValues: {
        name: data.name,
        price: data.price,
      },
      validationSchema: pricesSchema,
      validateOnChange: false,
      onSubmit: async () => {
        try {
          const newPrice = {
            name: values.name,
            price: Number(values.price),
          };

          await updatePrice(data.id, newPrice);
          updatePriceStore(data.id, newPrice);
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
      },
    });

  return (
    <article
      className='grid grid-cols-12 w-[350px] h-[75px] border border-accent shadow-inner shadow-accent rounded-xl fade-in'
      style={{
        height: !isVisible ? '75px' : '450px',
        transition: 'height 400ms',
      }}
    >
      <div
        className='grid grid-cols-12 col-span-12 w-full h-[75px] place-items-center items-center'
        onClick={() => setIsVisible(!isVisible)}
      >
        <div className='grid col-span-8 col-start-2 place-items-right w-full h-[75px] items-center'>
          <div className='flex'>{data.name}</div>
        </div>

        <div className='grid col-span-2 col-end-12 w-full h-[75px] place-items-end items-center'>
          $ {data.price}
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        autoComplete='off'
        className={clsx(
          'w-[350px] h-[350px] grid grid-cols-12 place-items-center fade-in',
          {
            hidden: !isVisible,
          }
        )}
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
            Update
          </button>
        </div>

        <div
          className={clsx('grid col-span-10 w-full col-start-2 fade-in mt-4', {
            hidden: !isVisible,
          })}
        >
          <button
            onClick={handleDelete}
            className='w-[100%] h-[3rem] bg-accent text-main flex items-center justify-center rounded uppercase font-bold fade-in'
          >
            Delete
          </button>
        </div>
      </form>
    </article>
  );
};
