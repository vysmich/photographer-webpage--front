import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

function MainNav(props) {
  const [active, setActive] = useState(false);

  const navLinks = props.navData;
  const router = useRouter();
  const currentRoute = router.pathname;

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
          {navLinks.map((navLink, index) => {
            return (
              <li
                className="mb-4 list-none px-3 py-3 capitalize text-primary hover:text-dark  xl:mb-0 xxl:px-6 xxxl:px-7"
                key={index}
              >
                <Link href={navLink.link}>
                  <a
                    className={
                      currentRoute === navLink.link ||
                      "/en" + currentRoute === navLink.link
                        ? "text-dark"
                        : ""
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
