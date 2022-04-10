import Link from "next/link";

function MainNav(props) {
  const navLinks = props.navData;
  return (
    <nav className="-mt-8 flex flex-row bg-primary py-5 pr-16 pl-36 font-mono tracking-wider">
      {navLinks.map((navLink, index) => {
        return (
          <li className="list-none px-6 lowercase" key={index}>
            <Link href={navLink.link}>
              <a>{navLink.title}</a>
            </Link>
          </li>
        );
      })}
    </nav>
  );
}

export default MainNav;
