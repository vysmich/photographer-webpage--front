import Image from "next/image";

function Hero(props) {
  console.log(props);
  const heading = props?.heroData?.HeroHeading || props.heroTitle;
  const heroImg =
    props?.heroData?.HeroImage.data.attributes.url || props.heroImg.url;

  return (
    <div className=" relative h-75vh w-full">
      <div className=" absolute top-0 left-0 h-full w-full brightness-75">
        <Image
          src={`http://localhost:1337${heroImg}`}
          objectFit="cover"
          layout="fill"
          priority
        />
      </div>
      <div className="container flex h-full items-center justify-center">
        <h1 className="relative  z-50 text-center">{heading}</h1>
      </div>
    </div>
  );
}

export default Hero;
