import React from "react";
//componets
import Head from "next/head";
import Hero from "../src/components/Hero";
import ReactMarkdown from "react-markdown";
import AlbumTable from "../src/components/AlbumTable";
//layout
import { getLayout } from "../src/components/layout/Layout";
//types
import { GetStaticProps } from "next";
import { PortfolioProps } from "../src/query/PortfolioGql";
import { NextPageWithLayout } from "../pages/index";
//query
import portfolioGql from "../src/query/PortfolioGql";

const portfolio: NextPageWithLayout<PortfolioProps> = ({
  hero,
  perex,
  albums,
  categories,
  seo,
}) => {
  return (
    <div className="  bg-secondary">
      <Head>
        <title>{seo.SeoTitle}</title>
        <meta name="description" content={seo.SeoDescription} />
      </Head>
      <Hero background="bg-light" heroData={hero} />
      <section className="relative z-10 bg-light">
        <div className="container pb-16 pt-5 text-center">
          <ReactMarkdown>{perex}</ReactMarkdown>
        </div>
      </section>
      <AlbumTable albumTableData={albums} />
    </div>
  );
};
portfolio.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async (context) => {
  return await portfolioGql(context);
};

export default portfolio;
