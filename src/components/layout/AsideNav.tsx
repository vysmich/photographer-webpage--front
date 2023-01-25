//components
import Link from "next/link";
//hooks
import { useRouter } from "next/router";
//types
import { FC } from "react";


const LangSwitch: FC = () => {
  const {locale} = useRouter();
  return (
    <div className="flex flex-1 justify-start pl-3 font-mono text-primary  text-sm xl:top-0 xl:left-auto   xl:right-20 xl:justify-end  xl:bg-bgsecondary  xl:p-3  ">
      <Link href="/" locale="en">
        <a className=" mr-2 flex items-center lg:mr-7">
          <span
            className={
              locale == "en"
                ? " mr-1 mt-0.5 font-bold text-dark"
                : " mr-1 mt-0.5"
            }
          >
            EN
          </span>
        </a>
      </Link>
      <Link href="/" locale="cs-CZ">
        <a className=" mr-2 flex items-center lg:mr-7">
          <span
            className={
              locale == "cs-CZ"
                ? " mr-1 mt-0.5 font-bold text-dark"
                : " mr-1 mt-0.5"
            }
          >
            CZ
          </span>
        </a>
      </Link>
      {/* <Link href="/" locale="cs-CZ">
        <a className="mt-0.5">Login</a>
      </Link> */}
    </div>
  );
}

export default LangSwitch;
