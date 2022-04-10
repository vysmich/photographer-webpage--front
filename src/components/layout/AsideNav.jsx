import Link from "next/link";
import Image from "next/image";

import en from "../../images/langIcon/en.png";
import cz from "../../images/langIcon/cz.png";

function LangSwitch(contextLocale) {
  const lang = contextLocale.contextLocale;
  return (
    <div className="absolute right-20 top-0 z-20 flex bg-primary p-3 font-mono text-sm lowercase text-white">
      <Link href="/" locale="en-US">
        <a className="mr-7 flex">
          <span className=" mr-1 mt-0.5">EN</span>
          <div
            className={
              lang == "en-US"
                ? " h-6 w-6 rounded-full border border-solid border-white p-0.5 "
                : " h-6 w-6  p-0.5"
            }
          >
            <Image width="25" height="25" src={en} alt="english flag icon" />
          </div>
        </a>
      </Link>
      <Link href="/" locale="cs-CZ">
        <a className="mr-7 flex">
          <span className=" mr-1 mt-0.5">CZ</span>
          <div
            className={
              lang == "cs-CZ"
                ? " h-6 w-6 rounded-full border border-solid border-white p-0.5 "
                : " h-6 w-6 p-0.5"
            }
          >
            <Image width="25" height="25" src={cz} alt="czech flag icon" />
          </div>
        </a>
      </Link>
      <Link href="/" locale="cs-CZ">
        <a className="mt-0.5">Login</a>
      </Link>
    </div>
  );
}

export default LangSwitch;
