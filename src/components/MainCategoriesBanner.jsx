import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Zoom } from "react-awesome-reveal";

import BorderImg from "./BorderImg";

function MainCategoriesBanner({ gallery, title, portfoliotBtn, content }) {
  return (
    <section className=" relative  bg-bgsecondary  py-10 xl:pb-20">
      <div className="container">
        <h2 className="pb-5 text-center">{title}</h2>
        <div className="text-center">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        <div className="my-10 flex justify-center">
          <Link href={portfoliotBtn.btnLink}>
            <a className="btn-primary">{portfoliotBtn.btnText}</a>
          </Link>
        </div>
        <div className=" grid gap-5 xl:grid-cols-4 ">
          <Zoom duration={1000}>
            {gallery.map((item) => (
              <div key={item.CategoryName} className="relative h-[500px]">
                <BorderImg
                  imgUrl={item.Image.data.attributes.url}
                  imgText={item.CategoryName}
                  imgAlt={item.Image.data.attributes.alternativeText}
                  imgLink={item.Link}
                />
              </div>
            ))}
          </Zoom>
        </div>
      </div>
    </section>
  );
}

export default MainCategoriesBanner;
