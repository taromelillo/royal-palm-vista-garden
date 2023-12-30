'use client';

import { useUIStore } from '@/store';
import clsx from 'clsx';
import Link from 'next/link';
import {
  IoCalendarClearOutline,
  IoChatbubbleOutline,
  IoCloseOutline,
} from 'react-icons/io5';
import { Title } from '@/components';

export function Sidebar() {
  const isSideMenuOpened = useUIStore((state) => state.isSideMenuOpened);
  const closeMenu = useUIStore((state) => state.closeSideMenu);
  return (
    <div>
      {/* Background */}
      {isSideMenuOpened && <div className="flex bg-gray-500 " />}

      {/* Blur */}
      {isSideMenuOpened && (
        <div
          className={
            'fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30'
          }
        />
      )}

      {isSideMenuOpened && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      {/* Sidemenu */}
      <nav
        //todo: slide effect
        className={clsx(
          'fixed p-5 right-0 top-0 w-full sm:w-[500px] h-screen text-accent bg-black z-20 shadow-2xl transform transition-all duration-300',
          {
            'translate-x-full': !isSideMenuOpened,
          }
        )}
      >
        <div className="flex justify-between items-center w-full h-[44px]">
          <IoCloseOutline
            size={44}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => closeMenu()}
          />
          <Title title="CS Royal Palm Vista Garden" />
          {/* <h1>CS Royal Palm Vista Garden</h1> */}
        </div>

        <div className="w-full h-px bg-accent my-5" />
        <div className="relative mt-14">
          <Link
            href="/book"
            className="flex items-center mt-10 p-2 hover:bg-main rounded transition-all gap-4 font-bold"
            onClick={closeMenu}
          >
            <IoCalendarClearOutline size={22} />
            <span>Book</span>
          </Link>
          <Link
            href="/"
            className="flex items-center mt-10 p-2 hover:bg-main rounded transition-all gap-4 font-bold"
            onClick={closeMenu}
          >
            <IoChatbubbleOutline size={22} />
            <span>FAQ</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
