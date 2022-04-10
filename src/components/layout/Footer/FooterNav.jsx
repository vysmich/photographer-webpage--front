import Link from "next/link";

function FooterNav(props) {
  const navLinks = props.links;
  return (
    <nav className="hidden h-full w-full grid-cols-2 gap-y-3 py-12 text-center uppercase lg:grid ">
      {navLinks.map((navLink, index) => {
        return (
          <li className={index == 4 ? "hidden " : "list-none"} key={index}>
            <Link href={navLink.link}>
              <a>{navLink.title}</a>
            </Link>
          </li>
        );
      })}
    </nav>
  );
}

export default FooterNav;
