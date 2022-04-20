import Link from "next/link";
import Image from "next/image";

import BorderImg from "./BorderImg";

import reed from "../images/reed.png";

function AboutBanner(props) {
  const title = props.aboutBannerData.Title;
  const subtitle = props.aboutBannerData.subTitle;
  const content = props.aboutBannerData.Content;
  const psText = props.aboutBannerData.psText;
  const btnText = props.aboutBannerData.btnText;
  const [img1, img2] = props.aboutBannerData.aboutGallery;

  return (
    <div className="relative bg-secondary py-20">
      <div className="container">
        <div className="grid min-h-[750px] grid-cols-2">
          <div className=" pr-36">
            <h2 className=" mb-8 text-center text-black">{title}</h2>
            <h3 className="mb-8 text-center font-mono tracking-wider text-base">
              {subtitle}
            </h3>

            <div
              dangerouslySetInnerHTML={{
                __html: `${content}`,
              }}
            ></div>

            <p className=" my-8 mr-8 text-right font-quitcher text-4xl">
              {psText}
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <a className="  bg-primary py-3 px-20 text-center uppercase tracking-wider text-white">
                  {btnText}
                </a>
              </Link>
            </div>
          </div>
          <div className=" pl-10">
            <div className=" absolute top-[400px] z-10 h-[430px] w-[300px]">
              <BorderImg
                imgUrl={img1.Image.data.attributes.url}
                imgText={img1.CategoryName}
                imgAlt={img1.Image.data.attributes.alternativeText}
              />
              <div className="absolute -top-60 left-5 z-[-1] ">
                <Image src={reed} alt="reed" width={150} height={400} />
              </div>
            </div>
            <div className="mx-auto h-full max-h-[550px] w-full max-w-[400px]">
              <BorderImg
                imgUrl={img2.Image.data.attributes.url}
                imgText={img2.CategoryName}
                imgAlt={img2.Image.data.attributes.alternativeText}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;
