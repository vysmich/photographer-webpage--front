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
        <div className="grid min-h-[750px] xl:grid-cols-2">
          <div className=" xl:pr-36">
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
          <div className=" xl:mt relative mx-auto  mt-10 h-[500px] w-full max-w-[400px] xl:h-auto xl:max-w-none ">
            <div className="relative mx-auto h-[65%] w-[70%] sm:m-0 sm:ml-auto">
              <BorderImg
                imgUrl={img2.Image.data.attributes.url}
                imgText={img2.CategoryName}
                imgAlt={img2.Image.data.attributes.alternativeText}
              />
              <div className=" absolute top-[70%] left-[-49%] z-10 hidden h-[80%] w-[80%] sm:block">
                <BorderImg
                  imgUrl={img1.Image.data.attributes.url}
                  imgText={img1.CategoryName}
                  imgAlt={img1.Image.data.attributes.alternativeText}
                />
                <div className="absolute -top-60 left-4 z-[-1] hidden sm:block xxl:left-16 ">
                  <Image src={reed} alt="reed" width={150} height={400} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;
