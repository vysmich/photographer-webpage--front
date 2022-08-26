import Image from "next/image";
import Link from "next/link";

import BorderImg from "./BorderImg";

function MainCategoriesBanner({ gallery, title, contactBtn, portfoliotBtn }) {
  return (
    <section className=" relative  bg-bgsecondary  py-10 xl:pb-20">
      <div className="container">
        <h2 className="pb-5 text-center">{title}</h2>
        <div className=" grid gap-5 xl:grid-cols-4 ">
          {gallery.map((item) => (
            <div key={item.CategoryName} className="relative h-96">
              <BorderImg
                imgUrl={item.Image.data.attributes.url}
                imgText={item.CategoryName}
                imgAlt={item.Image.data.attributes.alternativeText}
                imgLink={item.Link}
              />
            </div>
          ))}
        </div>
        <div className="mt-20 flex justify-evenly">
          <Link href={portfoliotBtn.btnLink}>
            <a className="  bg-primary py-3 px-20 text-center uppercase tracking-wider text-white">
              {portfoliotBtn.btnText}
            </a>
          </Link>
          <Link href={contactBtn.btnLink}>
            <a className="  bg-primary py-3 px-20 text-center uppercase tracking-wider text-white">
              {contactBtn.btnText}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MainCategoriesBanner;
