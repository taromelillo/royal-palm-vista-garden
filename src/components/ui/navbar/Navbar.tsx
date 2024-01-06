'use client';
import Link from 'next/link';
import { title_alt } from '@/config/fonts';
import { useUIStore } from '@/store';
import { IoMenuOutline } from 'react-icons/io5';
import styles from './Navbar.module.css';
import { Button } from '@/components';

export function Navbar() {
  const openMenu = useUIStore((state) => state.openSideMenu);
  return (
    <header
      className={`${styles.nav} + mt-0 flex justify-between items-center w-full pr-7 antialiased sticky top-[-1px] left-0`}
    >
      <nav className={` ${title_alt.className} + flex items-center`}>
        <Link href="/">
          <img
            src="royal-palm-logo.svg"
            alt="Royal Palm Vista Garden"
            className="h-24"
          />
        </Link>
        <h1 className="font-bold hidden sm:block">
          CS Royal Palm Vista Garden
        </h1>
      </nav>

      <div className="flex items-center gap-4 ">
        <div className="hidden sm:flex items- center gap-4">
          <Button path="/book" name="Book" />
          <Button path="/faq" name="FAQ" />
        </div>
        <IoMenuOutline
          className="flex sm:hidden"
          size={39}
          onClick={() => openMenu()}
        />
      </div>
    </header>
  );
}
