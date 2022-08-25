import Image from "next/image";

function Hero(props) {
  const heading = props?.heroData?.HeroHeading || props.heroTitle;
  const heroImg =
    props?.heroData?.HeroImage.data.attributes.url || props.heroImg.url;
  const heroImgMobile =
    props?.heroData?.HeroImageMobile?.data?.attributes?.url ||
    props.heroImgMobile?.url;
  return (
    <div className="   w-full">
      {/* <div className="flex items-center justify-center bg-bgsecondary xl:h-[90px]">
        <h1 className="text-center">{heading}</h1>
      </div> */}
      <div className=" relative hidden aspect-[16/9] w-full md:block">
        <Image src={heroImg} objectFit="cover" layout="fill" priority />
      </div>
      <div className="relative aspect-[4/3] w-full md:hidden">
        <Image
          src={heroImgMobile ? heroImgMobile : heroImg}
          objectFit="cover"
          layout="fill"
          priority
        />
      </div>
    </div>
  );
}

export default Hero;
