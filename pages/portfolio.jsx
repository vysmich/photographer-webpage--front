import Hero from "../src/components/Hero";

import portfolioGql from "../src/query/PortfolioGql";

function portfolio({ hero }) {
  return (
    <div>
      <Hero heroData={hero} />
    </div>
  );
}

export async function getStaticProps(context) {
  return await portfolioGql(context);
}

export default portfolio;
