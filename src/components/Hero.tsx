import React, { FC, useEffect } from "react";
//Components
import Image from "next/image";
//Types
import { IHero } from "../query/HomepageGql";
import { Fade, Slide } from "react-awesome-reveal";
import { useLocomotiveScroll } from "react-locomotive-scroll";

interface HeroProps {
  background: string;
  heroData: IHero;
}

const Hero: FC<HeroProps> = ({ background, heroData }) => {
  const { HeroHeading, HeroImage, HeroImageMobile } = heroData;
  const { url, alternativeText } = HeroImage.data.attributes;
  const heroImgMobile = HeroImageMobile?.data?.attributes.url;
  const heroImgMobileAlt = HeroImageMobile?.data?.attributes.alternativeText;
  return (
    <div>
      <Fade duration={500} triggerOnce>
        <div className="bg-light">
          <div
            data-scroll-direction="vertical"
            data-scroll
            data-scroll-speed="-8"
            data-scroll-position="top"
          >
            <div className=" relative hidden aspect-[16/8.5] w-full md:block">
              <Image
                src={url}
                objectFit="cover"
                layout="fill"
                priority
                alt={alternativeText}
                quality={85}
              />
            </div>
            <div className="relative aspect-[4/3] w-full md:hidden">
              <Image
                src={heroImgMobile ? heroImgMobile : url}
                objectFit="cover"
                layout="fill"
                priority
                alt={heroImgMobileAlt ? heroImgMobileAlt : alternativeText}
              />
            </div>
          </div>
        </div>

        {HeroHeading && (
          <div
            className={
              background +
              " relative top-1 flex items-center justify-center pt-10 "
            }
          >
            <h2 className="pb-16 text-center">{HeroHeading}</h2>
          </div>
        )}
      </Fade>
    </div>
  );
};

export default Hero;
