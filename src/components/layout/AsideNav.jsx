import Link from "next/link";
import Image from "next/image";

import en from "../../images/langIcon/en.png";
import cz from "../../images/langIcon/cz.png";

function LangSwitch(contextLocale) {
  const lang = contextLocale.contextLocale;
  return (
    <div className=" absolute left-4 top-2 z-20 flex bg-primary p-3 font-mono lowercase  text-white text-sm lg:left-auto lg:top-auto lg:right-20 lg:top-0 ">
      <Link href="/" locale="en">
        <a className=" mr-2 flex lg:mr-7">
          <span className=" mr-1 mt-0.5">EN</span>
        </a>
      </Link>
      <Link href="/" locale="cs-CZ">
        <a className=" mr-2 flex lg:mr-7">
          <span className=" mr-1 mt-0.5">CZ</span>
        </a>
      </Link>
      <Link href="/" locale="cs-CZ">
        <a className="mt-0.5">Login</a>
      </Link>
    </div>
  );
}

export default LangSwitch;
