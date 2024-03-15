import Link from "next/link";

import { LuChevronDown } from "react-icons/lu";

export const Menu = () => {
  return (
    <ul className=" flex flex-col lg:flex-row lg:items-center gap-5">
      <li>
        <Link
          href="/"
          className=" border-b-2 border-transparent hover:border-black transition-colors duration-300"
        >
          Pricing
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="border-b-2 border-transparent hover:border-black transition-colors duration-300"
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className=" flex items-center gap-3 border-b-2 border-transparent hover:border-black transition-colors duration-300 "
        >
          Features
          <LuChevronDown />
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="border-b-2 border-transparent hover:border-black transition-colors duration-300"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};
