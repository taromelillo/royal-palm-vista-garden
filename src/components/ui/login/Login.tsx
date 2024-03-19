'use client';
import { auth } from '@/config/firebase';
import { useAdminUser } from '@/store/admin/useAdminStore';
import { authSchema } from '@/utlis/validations/authSchema';
import { UserCredential, signInWithEmailAndPassword } from 'firebase/auth';
import { useFormik } from 'formik';
import React, { FormEvent, useRef } from 'react';
import Swal from 'sweetalert2';

export const Login = () => {
  const setAdminToken = useAdminUser((state) => state.setAdminToken);

  const { values, isSubmitting, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: { user: '', password: '' },
      validateOnChange: false,
      validationSchema: authSchema,
      onSubmit: async () => {
        try {
          signInWithEmailAndPassword(auth, values.user, values.password)
            .then(async (res: UserCredential) => {
              const uid = await res.user.getIdToken();
              setAdminToken(uid);
            })
            .catch((res) => {
              Swal.fire({
                title: 'Email or Password is wrong.',
                timer: 2000,
                icon: 'error',
                background: 'black',
                color: '#c3b792',
                showConfirmButton: false,
              });
            });
        } catch (error) {
          Swal.fire({
            title: 'Error logging',
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
    <div className='w-full h-screen flex flex-col justify-center items-center gap-[1rem]'>
      <div className='w-full sm:max-w-[600px] '>
        <header className='w-full flex flex-col px-[3rem] justfy-center items-center gap-[1rem]'>
          <h2 className='text-xl font-bold uppercase tracking-widest'>Login</h2>
          <div className='w-full h-px bg-accent' />
        </header>
        <form
          onSubmit={handleSubmit}
          className='w-full flex flex-col px-[3rem] md:p-[3rem] justify-center items-center my-[3rem] gap-8'
        >
          <div className='w-full flex flex-col items-right'>
            <label htmlFor='user' className='uppercase font-bold'>
              Email
            </label>
            <input
              type='text'
              name='user'
              id='user'
              placeholder='email@email.com'
              value={values.user}
              onChange={handleChange}
              className='w-full h-[3rem] text-accent bg-black border-b border-px border-accent focus:outline-none'
            />
            <p className='text-red-500 text-sm'>
              {' '}
              {errors.user && errors.user}
            </p>
          </div>

          <div className='w-full flex flex-col items-right'>
            <label htmlFor='password' className='uppercase font-bold'>
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='********'
              value={values.password}
              onChange={handleChange}
              className='w-full h-[3rem] text-accent bg-black border-b border-px border-accent focus:outline-none'
            />
            <p className='text-red-500 text-sm'>
              {' '}
              {errors.password && errors.password}
            </p>
          </div>

          <button
            disabled={isSubmitting}
            type='submit'
            className='w-full h-[3rem] p-6 bg-accent text-main flex items-center justify-center rounded uppercase font-bold fade-in'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
