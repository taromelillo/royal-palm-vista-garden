import { title_alt } from "@/config/fonts";
import Link from "next/link";
import { IoLeafOutline } from "react-icons/io5";

export function PageNotFound() {
  return (
    <div className="flex flex-col m-10 h-full justify-center items-center align-middle box-border">
      <h2 className={`${title_alt.className} text-7xl`}>404</h2>
      <p className="text-lg">Whoops! Sorry about that.</p>
      <Link href="/" className="flex items-center gap-2">
        <IoLeafOutline size={33} />
        <span className="text-xl font-bold">HOMEPAGE</span>
      </Link>
    </div>
  );
}
