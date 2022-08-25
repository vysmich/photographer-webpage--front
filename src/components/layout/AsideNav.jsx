import Link from "next/link";
import Image from "next/image";

import en from "../../images/langIcon/en.png";
import cz from "../../images/langIcon/cz.png";

function LangSwitch(contextLocale) {
  const lang = contextLocale.contextLocale;
  return (
    <div className="flex flex-1 justify-start p-3 font-mono  text-primary text-sm xl:top-0   xl:left-auto xl:right-20  xl:justify-end  xl:bg-bgsecondary  ">
      <Link href="/" locale="en">
        <a className=" mr-2 flex items-center lg:mr-7">
          <span className=" mr-1 mt-0.5">EN</span>
        </a>
      </Link>
      <Link href="/" locale="cs-CZ">
        <a className=" mr-2 flex items-center lg:mr-7">
          <span className=" mr-1 mt-0.5">CZ</span>
        </a>
      </Link>
      {/* <Link href="/" locale="cs-CZ">
        <a className="mt-0.5">Login</a>
      </Link> */}
    </div>
  );
}

export default LangSwitch;
