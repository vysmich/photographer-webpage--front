import AlbumTable from "../src/components/AlbumTable";
import Hero from "../src/components/Hero";

import portfolioGql from "../src/query/PortfolioGql";

function portfolio({ hero, albums }) {
  return (
    <div>
      <Hero heroData={hero} />
      <AlbumTable albumTableData={albums} />
    </div>
  );
}

export async function getStaticProps(context) {
  return await portfolioGql(context);
}

export default portfolio;
