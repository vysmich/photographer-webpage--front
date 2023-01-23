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
      <Hero background="bg-light" heroData={hero} />
      <section className="relative z-10 bg-light">
        <div className="container pb-16 pt-5 text-center">
          <ReactMarkdown>{perex}</ReactMarkdown>
        </div>
      </section>
      <AlbumTable albumTableData={albums} categoriesData={categories} />
    </div>
  );
}
portfolio.getLayout = getLayout;
export async function getStaticProps(context) {
  return await portfolioGql(context);
}

export default portfolio;
