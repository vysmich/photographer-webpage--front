import React from "react";
//components
import Head from "next/head";
import Hero from "../src/components/Hero";
import ReactMarkdown from "react-markdown";
import PriceCard from "../src/components/PriceCard";
import PriceCardWide from "../src/components/PriceCardWide";
//query
import pricesGql from "../src/query/PricesGql";
//types
import { NextPageWithLayout } from "../pages/index";
import { PricesProps } from "../src/query/PricesGql";
import { GetStaticProps } from "next";
//layout
import { getLayout } from "../src/components/layout/Layout";

const prices: NextPageWithLayout<PricesProps> = ({
  hero,
  perex,
  priceLists,
  contactData,
  seo,
}) => {
  return (
    <div className=" bg-secondary pb-16">
      <Head>
        <title>{seo.SeoTitle}</title>
        <meta name="description" content={seo.SeoDescription} />
      </Head>

      <Hero background="bg-light" heroData={hero} />
      <section className="relative -top-1 z-10 bg-light">
        <div className="container">
          <ReactMarkdown className=" pb-10 text-center">{perex}</ReactMarkdown>
          <div className="flex flex-wrap justify-center ">
            {priceLists
              .slice()
              .sort((a, b) => a.attributes.Order - b.attributes.Order)
              .map((list, index) => {
                if (index != 3)
                  return (
                    <PriceCard
                      key={list.attributes.Order}
                      list={list}
                      contactData={contactData}
                    />
                  );
                else
                  return (
                    <PriceCardWide
                      key={list.attributes.Order}
                      list={list}
                      contactData={contactData}
                    />
                  );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};
prices.getLayout = getLayout;
export const getStaticProps: GetStaticProps = async (context) => {
  return await pricesGql(context);
};

export default prices;
