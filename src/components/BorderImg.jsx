import Image from "next/image";
import Link from "next/link";

function BorderImg(props) {
  const imgUrl = props.imgUrl;
  const imgText = props.imgText;
  const imgAlt = props.imgAlt;
  const imgLink = props.imgLink;

  const body = (
    <figure
      className={"flex h-full flex-col " + (imgLink && "hover:grayscale")}
    >
      <picture
        className={
          "relative h-full w-full shadow-[0px_4px_6px_rgba(0,0,0,0.5)] " +
          (imgLink && "hover:grayscale")
        }
      >
        <Image src={`${imgUrl}`} alt={imgAlt} layout="fill" objectFit="cover" />
      </picture>
      {imgText && (
        <figcaption className="my-1 mr-5 h-7 text-right font-mono font-medium ">
          {imgText}
        </figcaption>
      )}
    </figure>
  );

  if (imgLink) {
    return (
      <Link href={imgLink}>
        <a>{body}</a>
      </Link>
    );
  } else {
    return body;
  }
}

export default BorderImg;
