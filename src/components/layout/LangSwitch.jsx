import Link from "next/link";

function LangSwitch() {
  return (
    <div>
      <div className="   absolute bg-black text-red-50 sm:bg-slate-900">
        <Link href="/" locale="en-US">
          <a className=" mr-7 ">To EN</a>
        </Link>
        <Link href="/" locale="cs-CZ">
          <a>To CZ</a>
        </Link>

        <h1 className=" text my-5 text-center text-3xl font-bold text-red-700">
          data.Hero.HeroHeading
        </h1>
      </div>
    </div>
  );
}

export default LangSwitch;
