import { IoLogoFacebook } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer
      className="h-24 w-full flex justify-evenly md:justify-between md:p-8 items-center border-t border-accent"
      // style={{boxShadow: }}
    >
      CS Royal Palm Vista Garden
      <IoLogoFacebook className="text-accent" size={33} />
    </footer>
  );
};
