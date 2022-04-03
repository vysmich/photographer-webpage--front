import Link from "next/link";
import Image from "next/image";

import en from "../../images/langIcon/en.png";
import cz from "../../images/langIcon/cz.png";

function LangSwitch() {
  return (
    <div>
      <div className="absolute top-0 right-0 flex bg-primary p-3 text-white">
        <Link href="/" locale="en-US">
          <a className=" mr-7  flex">
            <span className=" mr-1">EN</span>
            <Image width="15" height="15" src={en} alt="english flag icon" />
          </a>
        </Link>
        <Link href="/" locale="cs-CZ">
          <a className=" mr-7 flex">
            <span className=" mr-1">CZ</span>
            <Image width="15" height="15" src={cz} alt="czech flag icon" />
          </a>
        </Link>
        <Link href="/" locale="cs-CZ">
          <a>Login</a>
        </Link>
      </div>
    </div>
  );
}

export default LangSwitch;
