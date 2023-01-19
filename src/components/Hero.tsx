import React, { FC } from "react";
//Components
import Image from "next/image";
//Types
import { IHero } from "../query/HomepageGql";
import { Fade } from "react-awesome-reveal";

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
    <div className="w-full   ">
      <Fade duration={500} triggerOnce>
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

        {HeroHeading && (
          <div
            className={background + " flex items-center justify-center pt-10 "}
          >
            <h2 className="text-center">{HeroHeading}</h2>
          </div>
        )}
      </Fade>
    </div>
  );
};

export default Hero;
