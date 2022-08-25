import Image from "next/image";
import Link from "next/link";

import BorderImg from "./BorderImg";

import tape from "../images/tape.png";

function MainCategoriesBanner({ gallery }) {
  console.log(gallery);
  return (
    <div className=" relative  bg-bgsecondary  py-10 xl:py-20">
      <div className="container grid gap-5 xl:grid-cols-4 ">
        {gallery.map((item) => (
          <div className="relative h-96">
            <BorderImg
              imgUrl={item.Image.data.attributes.url}
              imgText={item.CategoryName}
              imgAlt={item.Image.data.attributes.alternativeText}
              imgLink={item.Link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainCategoriesBanner;
