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
        <div className="grid justify-center gap-12 lg:grid-cols-2">
          {priceLists.map((list) => (
            <div
              key={list.id}
              className=" relative flex  flex-col overflow-hidden rounded-md bg-white shadow-md transition-all  "
            >
              <div className="relative h-80 w-full rounded-t-md object-cover object-center">
                <Image
                  src={`${list.attributes.priceListHero.HeroImage.data.attributes.url}`}
                  alt={
                    list.attributes.priceListHero.HeroImage.data.attributes
                      .alternativeText
                  }
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-[1] flex-col justify-between px-6 pb-3 text-center ">
                <div className=" ">
                  <h2 className="my-5 text-center font-semibold tracking-wide text-6xl">
                    {list.attributes.priceListHero.HeroHeading}
                  </h2>
                  <ReactMarkdown>
                    {list.attributes.priceListPerex}
                  </ReactMarkdown>
                </div>
                <div className=" mb-3 text-center">
                  <p className="mt-10 text-dark text-lg">
                    {list.attributes.price}
                  </p>
                  <Link href={"/contact"}>
                    <a className=" btn-primary my-5 inline-block">
                      {list.attributes.priceListMoreBtn}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
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
