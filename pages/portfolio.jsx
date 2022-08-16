import ReactMarkdown from "react-markdown";

import Hero from "../src/components/Hero";
import AlbumTable from "../src/components/AlbumTable";

import portfolioGql from "../src/query/PortfolioGql";
import { getLayout } from "../src/components/layout/Layout";

function portfolio({ hero, perex, albums, categories }) {
  return (
    <div className="  bg-secondary">
      <Hero heroData={hero} />
      <div className="container mb-16 mt-20 text-center">
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
