import React, { FC } from "react";
//Components
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import BorderImg from "./BorderImg";
//Animation
import { Fade } from "react-awesome-reveal";
//Types
import { IMainCategoriesBanner } from "../query/HomepageGql";

export const MainCategoriesBanner: FC<IMainCategoriesBanner> = ({
  Gallery,
  Title,
  PortfolioButton,
  Content,
}) => {
  const { btnLink, btnText } = PortfolioButton;
  return (
    <section className=" relative  bg-bgsecondary  py-10 xl:pb-20">
      <div className="container">
        <Fade duration={1000} triggerOnce>
          <h2 className="pb-5 text-center">{Title}</h2>
          <div className="text-center">
            <ReactMarkdown>{Content}</ReactMarkdown>
          </div>
          <div className="my-10 flex justify-center">
            <Link href={btnLink}>
              <a className="btn-primary">{btnText}</a>
            </Link>
          </div>
          <div className=" grid gap-5 xl:grid-cols-4 ">
            {Gallery.map((item) => {
              const { url, alternativeText } = item.Image.data.attributes;
              const { CategoryName, Link } = item;
              return (
                <div key={CategoryName} className="relative h-[500px]">
                  <BorderImg
                    imgUrl={url}
                    imgText={CategoryName}
                    imgAlt={alternativeText}
                    imgLink={Link}
                  />
                </div>
              );
            })}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default IMainCategoriesBanner;
