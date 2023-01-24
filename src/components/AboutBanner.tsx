//Components
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import BorderImg from "./BorderImg";
//Types
import { IAboutBanner } from "../query/HomepageGql";
import { FC } from "react";

//Animation
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

interface AboutBannerProps {
  aboutBannerData: IAboutBanner;
}

export const AboutBanner: FC<AboutBannerProps> = ({ aboutBannerData }) => {
  const { Title, subTitle, Content, psText, aboutGallery, btnText } =
    aboutBannerData;
  const [img1, img2] = aboutGallery;

  return (
    <section className="relative bg-secondary py-20">
      <Fade duration={1000} triggerOnce>
        <div className="container">
          <div className="grid items-center xl:grid-cols-2">
            <div className=" mb-8 xl:mb-0 xl:pr-36">
              <Slide direction="up" duration={1000} triggerOnce>
                <h2 className=" mb-8 text-center text-black">{Title}</h2>
              </Slide>
              <h3 className="mb-8 text-center font-mono tracking-wider text-base">
                {subTitle}
              </h3>
              <ReactMarkdown>{Content}</ReactMarkdown>
              <p className=" my-8 mr-8 text-right font-quitcher text-4xl">
                {psText}
              </p>
              {/* <div className="mt-12 flex justify-center">
                <Link href="/contact">
                  <a className="btn-primary">{btnText}</a>
                </Link>
              </div> */}
            </div>
            <div className="flex h-full items-center">
              <div className="relative mx-auto h-[450px] w-full xl:h-[600px]">
                <Image
                  src={img2.Image.data.attributes.formats.medium.url}
                  alt={img2.Image.data.attributes.alternativeText}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};
