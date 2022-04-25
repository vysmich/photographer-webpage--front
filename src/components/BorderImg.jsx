import Image from "next/image";
import Link from "next/link";

function BorderImg(props) {
  const imgUrl = props.imgUrl;
  const imgText = props.imgText;
  const imgAlt = props.imgAlt;
  const imgLink = props.imgLink;

  const body = (
    <div
      className={
        "flex h-full flex-col rounded-lg  bg-white  p-1  xxl:p-2 " +
        (imgLink && "hover:grayscale")
      }
    >
      <div className="inline-block h-full w-full border border-border bg-white  p-1 xxl:p-2">
        <div className=" relative h-full w-full ">
          <Image
            src={`http://localhost:1337${imgUrl}`}
            alt={imgAlt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <p className="my-1 mr-5 h-7 text-right font-mono font-medium lowercase">
        {imgText}
      </p>
    </div>
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
