import Image from "next/image";

function Hero(props, { background }) {
  const heading = props?.heroData?.HeroHeading || props.heroTitle;
  const heroImg =
    props?.heroData?.HeroImage.data.attributes.url || props.heroImg.url;
  const heroImgMobile =
    props?.heroData?.HeroImageMobile?.data?.attributes?.url ||
    props.heroImgMobile?.url;
  console.log(props.background);
  return (
    <div className="w-full   ">
      <div className=" relative hidden aspect-[16/6] w-full md:block">
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

      {heading && (
        <div
          className={
            props.background + " flex items-center justify-center pt-10 "
          }
        >
          <h2 className="text-center">{heading}</h2>
        </div>
      )}
    </div>
  );
}

export default Hero;
