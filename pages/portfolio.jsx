import ReactMarkdown from "react-markdown";

import Hero from "../src/components/Hero";
import AlbumTable from "../src/components/AlbumTable";
import Head from "next/head";

import portfolioGql from "../src/query/PortfolioGql";
import { getLayout } from "../src/components/layout/Layout";

function portfolio({ hero, perex, albums, categories, seo }) {
  return (
    <div className="  bg-secondary">
      <Head>
        <title>{seo.SeoTitle}</title>
        <meta name="description" content={seo.SeoDescription} />
      </Head>
      <Hero heroData={hero} />
      <div className="container mb-16 mt-5 text-center">
        <ReactMarkdown>{perex}</ReactMarkdown>
      </div>
      <AlbumTable albumTableData={albums} categoriesData={categories} />
    </div>
  );
}
portfolio.getLayout = getLayout;
export async function getStaticProps(context) {
  return await portfolioGql(context);
}

export default portfolio;
