'use client';
import { auth } from '@/config/firebase';
import { useAdminUser } from '@/store/admin/admin-store';
import { UserCredential, signInWithEmailAndPassword } from 'firebase/auth';
import React, { FormEvent, useRef } from 'react';

export const Login = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const setAdminToken = useAdminUser((state) => state.setAdminToken);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (userRef.current === null || passwordRef.current === null)
      throw Error('Login Error: please fill the input fields. . . ');

    const e = event.target as HTMLFormElement;

    signInWithEmailAndPassword(
      auth,
      userRef.current.value,
      passwordRef.current.value
    ).then(async (res: UserCredential) => {
      const uid = await res.user.getIdToken();
      console.log(uid);
      setAdminToken(uid);
      e.reset();
    });
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-[1rem]">
      <div className="w-full sm:max-w-[600px] ">
        <header className="w-full flex flex-col px-[3rem] justfy-center items-center gap-[1rem]">
          <h2 className="text-xl font-bold uppercase tracking-widest">Login</h2>
          <div className="w-full h-px bg-accent" />
        </header>
        <form
          onSubmit={(event) => handleSubmit(event)}
          className="w-full flex flex-col px-[3rem] md:p-[3rem] justify-center items-center my-[3rem] gap-8"
        >
          <input
            type="text"
            name="user"
            id="user"
            placeholder="User"
            ref={userRef}
            required
            className="w-full h-[3rem] text-accent bg-black border-b border-px border-accent focus:outline-none"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            ref={passwordRef}
            required
            className="w-full h-[3rem] text-accent bg-black border-b border-px border-accent focus:outline-none"
          />
          <button
            type="submit"
            className="w-full h-[3rem] p-6 bg-accent text-main flex items-center justify-center rounded uppercase font-bold fade-in"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
