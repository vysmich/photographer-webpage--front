import Image from "next/image";
import Link from "next/link";

import BorderImg from "./BorderImg";

import tape from "../images/tape.png";

function MainCategoriesBanner(props) {
  const { ClaimOne, ClaimTwo } = props.mainCategoriesBannerData;
  const [img1, img2, img3] = props.mainCategoriesBannerData.Gallery;

  return (
    <div className=" relative  bg-bgsecondary py-10 xl:py-20">
      <div className="container flex flex-col-reverse xl:flex-row">
        <div className="relative xl:basis-1/3 ">
          <div className=" relative z-10 mx-auto mb-10 mt-8 h-[300px]  w-full rounded-lg bg-white sm:w-[80%]  md:w-[60%] xl:mx-0  xl:mb-0 xl:h-[300px] xl:max-w-[250px]   xxxl:h-[420px] xxxl:max-w-[360px] ">
            <BorderImg
              imgUrl={img1.Image.data.attributes.url}
              imgText={img1.CategoryName}
              imgAlt={img1.Image.data.attributes.alternativeText}
              imgLink={img1.Link}
            />
          </div>
          <div className=" relative mx-auto   h-[300px] w-full rounded-lg    sm:w-[80%]  md:w-[60%] xl:absolute xl:left-[120px] xl:top-[245px] xl:h-[280px]  xl:w-full xxl:top-[250px] xxl:left-[110px] xxl:h-[300px] xxxl:top-[320px] xxxl:left-[160px] xxxl:h-[350px]   ">
            <BorderImg
              imgUrl={img2.Image.data.attributes.url}
              imgText={img2.CategoryName}
              imgAlt={img2.Image.data.attributes.alternativeText}
              imgLink={img2.Link}
            />
            <div className="absolute left-[40%] -top-7 w-1/3 grayscale">
              <Image src={tape} width={200} height={80} />
            </div>
          </div>
        </div>

        <div className=" xl:basis-2/3">
          <div className="ml-auto flex flex-col  xl:flex-row">
            <div className="mb-8 flex flex-col xl:mb-0 xl:w-[60%]">
              <h2 className="subheading relative text-center font-quitcher text-primary text-5xl xl:mr-8 xxl:text-6xl xxxl:text-8xl ">
                {ClaimOne}
              </h2>
              <p className="ml-auto mt-6 text-center font-ptserif font-medium tracking-wider xl:mr-8 xl:w-[60%] xxl:mt-10 xxl:text-base  xxxl:text-lg">
                {ClaimTwo}
              </p>
            </div>

            <div className="image-pin  relative mx-auto   h-[300px] w-full   sm:w-[80%] md:w-[60%]  xl:h-[550px] xl:w-[50%]  xxxl:h-[630px] xxxl:w-[40%]">
              <BorderImg
                imgUrl={img3.Image.data.attributes.url}
                imgText={img3.CategoryName}
                imgAlt={img3.Image.data.attributes.alternativeText}
                imgLink={img3.Link}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCategoriesBanner;
