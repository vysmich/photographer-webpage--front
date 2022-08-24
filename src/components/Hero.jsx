import Image from "next/image";

function Hero(props) {
  const heading = props?.heroData?.HeroHeading || props.heroTitle;
  const heroImg =
    props?.heroData?.HeroImage.data.attributes.url || props.heroImg.url;

  return (
    <div className="   w-full">
      <div className="flex h-[10vh] items-center justify-center bg-bgsecondary">
        <h1 className="text-center">{heading}</h1>
      </div>
      <div className="relative h-[25vh] w-full sm:h-[40vh] md:h-[55vh]  lg:h-[80vh] ">
        <Image src={`${heroImg}`} objectFit="cover" layout="fill" priority />
      </div>
    </div>
  );
}

export default Hero;
