import Link from "next/link";

function MainNav() {
  return (
    <nav className="absolute top-75vh z-10 text-white">
      <ul className="-mt-8 flex flex-row bg-primary py-5 pr-16 pl-36 font-mono tracking-wider">
        <li className=" px-6 lowercase">
          <Link href="">
            <a>Domů</a>
          </Link>{" "}
        </li>
        <li className=" px-6 lowercase">
          <Link href="">
            <a>Můj příběh</a>
          </Link>{" "}
        </li>
        <li className=" px-6 lowercase">
          <Link href="">
            <a>Portfolio</a>
          </Link>{" "}
        </li>
        <li className=" px-6 lowercase">
          <Link href="">
            <a>Mé služby</a>
          </Link>{" "}
        </li>
        <li className=" px-6 lowercase">
          <Link href="">
            <a>Kontakt</a>
          </Link>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
