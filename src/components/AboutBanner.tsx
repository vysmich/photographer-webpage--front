//Components 
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import BorderImg from "./BorderImg";
//Types
import { IAboutBanner  } from "../query/HomepageGql";
import { FC } from 'react';
//Images
import reed from "../images/reed.png";
//Animation
import { Fade } from "react-awesome-reveal";

interface AboutBannerProps {
  aboutBannerData: IAboutBanner;
}

export const AboutBanner: FC<AboutBannerProps> = ({ aboutBannerData }) => {
  const { Title, subTitle, Content, psText, aboutGallery } = aboutBannerData;
  const [img1, img2] = aboutGallery;

  return (
    <section className="relative bg-secondary py-20">
      <Fade duration={1000} triggerOnce>
        <div className="container">
          <div className="grid min-h-[750px] xl:grid-cols-2">
            <div className=" xl:pr-36">
              <h2 className=" mb-8 text-center text-black">{Title}</h2>
              <h3 className="mb-8 text-center font-mono tracking-wider text-base">
                {subTitle}
              </h3>
              <ReactMarkdown>{Content}</ReactMarkdown>
              <p className=" my-8 mr-8 text-right font-quitcher text-4xl">
                {psText}
              </p>
            </div>
            <div className=" xl:mt relative mx-auto  mt-10 w-full max-w-[400px] sm:h-[500px] xl:h-auto xl:max-w-none ">
              <div className="relative mx-auto h-[300px] w-full sm:m-0 sm:ml-auto sm:h-[65%] sm:w-[70%]">
                <BorderImg
                  imgUrl={img2.Image.data.attributes.url}
                  imgText={img2.CategoryName}
                  imgAlt={img2.Image.data.attributes.alternativeText}
                />
                <div className=" absolute top-[70%] left-[-49%] z-10 hidden h-[80%]  w-[80%] sm:block">
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
      </Fade>
    </section>
  );
};

