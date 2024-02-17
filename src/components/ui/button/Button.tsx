import Link from "next/link";
import "./Button.css";

interface ButtonProps {
  path: string;
  name: string;
}

export const Button = ({ path, name }: ButtonProps) => {
  return (
    <div>
      <Link href={path} className='text-accent font-bold link'>
        {name}
      </Link>
    </div>
  );
};
