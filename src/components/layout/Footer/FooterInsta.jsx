import Image from "next/image";

import firstPic from "../../../images/children.jpg";
import secondPic from "../../../images/father.jpg";
import thirdPic from "../../../images/love.jpg";
import fourthPic from "../../../images/sunset.jpg";

function FooterInsta({ text }) {
  return (
    <div className="relative mx-auto max-w-4xl xxl:max-w-5xl ">
      <p className=" -left-32 py-5 text-center font-quitcher  text-5xl  xl:absolute xl:top-8 ">
        {text}
      </p>
      <div className=" relative mx-auto grid max-w-xs grid-cols-2 justify-items-center sm:max-w-xl sm:grid-cols-4 md:max-w-2xl xxl:max-w-3xl">
        <div className="relative mb-7 h-32 w-32 border-8 border-secondary md:mb-0 md:h-40 md:w-40">
          <Image objectFit="cover" layout="fill" src={firstPic} alt="Footer" />
        </div>
        <div className="relative mb-7 h-32 w-32 border-8 border-secondary md:mb-0 md:h-40 md:w-40">
          <Image objectFit="cover" layout="fill" src={secondPic} alt="Footer" />
        </div>
        <div className="relative mb-7 h-32 w-32 border-8 border-secondary md:mb-0 md:h-40 md:w-40">
          <Image objectFit="cover" layout="fill" src={thirdPic} alt="Footer" />
        </div>
        <div className="relative mb-7 h-32 w-32 border-8 border-secondary md:mb-0 md:h-40 md:w-40">
          <Image objectFit="cover" layout="fill" src={fourthPic} alt="Footer" />
        </div>
      </div>
    </div>
  );
}

export default FooterInsta;
