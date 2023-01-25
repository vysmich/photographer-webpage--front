//components
import Link from "next/link";
//hooks
import { useState } from "react";
import { useRouter } from "next/router";
//types
import { FC } from "react";
import { NavItem } from "src/query/HomepageGql";

interface MainNavProps {
  navData: NavItem[];
}

const MainNav: FC<MainNavProps> =({navData}) => {
  const [active, setActive] = useState(false);

  const currentRoute = useRouter().asPath;
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <nav className=" lg:pl-18 flex flex-1 flex-row bg-bgsecondary py-2 font-mono tracking-wider lg:py-0 xl:pl-12">
      <div
        className={`${
          active ? "" : "hidden"
        }   w-full xl:inline-flex xl:w-auto xl:flex-grow`}
      >
        <ul className="absolute right-0 mt-16 flex w-full flex-col items-center bg-bgsecondary xl:static xl:mt-0 xl:ml-auto xl:inline-flex xl:w-auto  xl:flex-row  xl:items-center">
          {navData.map((navLink, index) => {
            return (
              <li
                className="mb-4 list-none px-3 py-3 capitalize text-primary hover:text-dark  xl:mb-0 xxl:px-6 xxxl:px-7"
                onClick={handleClick}
                key={index}
              >
                <Link href={navLink.link}>
                  <a
                    className={
                      currentRoute == navLink.link ||
                      "/en" + currentRoute === navLink.link ||
                      currentRoute === navLink.link.slice(0, -2)
                        ? "whitespace-nowrap font-bold text-dark"
                        : " whitespace-nowrap"
                    }
                  >
                    {navLink.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <button
        className=" ml-auto inline-flex rounded p-3 text-primary outline-none hover:text-dark  xl:hidden"
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
