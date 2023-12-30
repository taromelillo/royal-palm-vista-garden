'use client';
import Link from 'next/link';
import { title, title_alt } from '@/config/fonts';
import { useUIStore } from '@/store';
import { IoMenuOutline } from 'react-icons/io5';

export function Navbar() {
  const openMenu = useUIStore((state) => state.openSideMenu);
  return (
    <header className="flex justify-between items-center w-full pr-7 antialiased">
      <nav className={` ${title_alt.className} + flex items-center`}>
        <Link href="/">
          <img
            src="royal-palm-logo.svg"
            alt="Royal Palm Vista Garden"
            className="h-24"
          />
        </Link>
        <h1 className="font-bold hidden md:block">
          CS Royal Palm Vista Garden
        </h1>
      </nav>

      <div className="flex items-center gap-4 ">
        <Link
          href="/book"
          className="hidden md:flex items-center p-2 hover:bg-main rounded transition-all"
        >
          Book
        </Link>
        <Link
          href="/faq"
          className="hidden md:flex items-center p-2 hover:bg-main rounded  transition-all"
        >
          FAQ
        </Link>

        <IoMenuOutline
          className="flex md:hidden"
          size={39}
          onClick={() => openMenu()}
        />
      </div>
    </header>
  );
}
