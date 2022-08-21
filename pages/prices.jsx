import pricesGql from "../src/query/PricesGql";
import { getLayout } from "../src/components/layout/Layout";

import ReactMarkdown from "react-markdown";

import Hero from "../src/components/Hero";
import Image from "next/image";
import Link from "next/link";

function prices({ hero, perex, priceLists }) {
  return (
    <div className=" bg-secondary pb-16">
      <Hero heroData={hero} />
      <div className="container">
        <ReactMarkdown className=" pb-10 pt-16 text-center">
          {perex}
        </ReactMarkdown>
        <div className="flex flex-wrap justify-center gap-12">
          {priceLists.map((list) => (
            <Link href={"pricelist/" + list.id} key={list.id}>
              <div className=" relative flex max-w-xs flex-col overflow-hidden rounded-md bg-white shadow-md transition-all hover:scale-105 md:flex-[50%] lg:flex-[31%]">
                <div className="relative h-72 w-full rounded-t-md object-cover object-center">
                  <Image
                    src={`http://localhost:1337${list.attributes.priceListHero.HeroImage.data.attributes.url}`}
                    alt={
                      list.attributes.priceListHero.HeroImage.data.attributes
                        .alternativeText
                    }
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-[1] flex-col justify-between px-6 pb-3 ">
                  <div className=" ">
                    <h2 className="text-center font-semibold tracking-wide text-6xl">
                      {list.attributes.priceListHero.HeroHeading}
                    </h2>
                    <ReactMarkdown>
                      {list.attributes.priceListPerex}
                    </ReactMarkdown>
                  </div>
                  <div className=" mb-3 text-center">
                    <p className="text-dark">{list.attributes.price}</p>
                    <Link href={"pricelist/" + list.id}>
                      <a className=" bg-primary   py-3 px-16 text-center uppercase tracking-wider text-white">
                        {list.attributes.priceListMoreBtn}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
prices.getLayout = getLayout;
export async function getStaticProps(context) {
  return await pricesGql(context);
}

export default prices;
