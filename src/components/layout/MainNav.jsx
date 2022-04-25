import LangSwitch from "./AsideNav";
import Link from "next/link";
import { useState } from "react";

function MainNav(props) {
  const navLinks = props.navData;
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex flex-row bg-primary py-2 pl-12 font-mono tracking-wider lg:-mt-8 lg:py-5 lg:pl-36 lg:pr-16 ">
      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:w-auto lg:flex-grow`}
      >
        <div className="mt-12 flex w-full flex-col items-center lg:mt-0 lg:ml-auto lg:inline-flex lg:h-auto lg:w-auto  lg:flex-row  lg:items-center">
          {navLinks.map((navLink, index) => {
            return (
              <li className="mb-4 list-none px-7 lowercase lg:mb-0" key={index}>
                <Link href={navLink.link}>
                  <a>{navLink.title}</a>
                </Link>
              </li>
            );
          })}
        </div>
      </div>
      <button
        className=" hover:bg-gray-900 ml-auto inline-flex rounded p-3 text-white outline-none hover:text-white lg:hidden"
        onClick={handleClick}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
}

export default MainNav;
