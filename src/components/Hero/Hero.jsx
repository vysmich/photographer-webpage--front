import Image from "next/image";

function Hero(props) {
  const heading = props.hero.HeroHeading;
  const heroImg = props.hero.HeroImage.data.attributes.url;
  console.log(heroImg);
  return (
    <div className=" relative h-75vh w-full">
      <div className=" absolute top-0 left-0 h-full w-full brightness-75">
        <Image
          src={`http://localhost:1337${heroImg}`}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="container flex h-full items-center justify-center">
        <h1 className="relative  z-50 text-center">{heading}</h1>
      </div>
    </div>
  );
}

export default Hero;
