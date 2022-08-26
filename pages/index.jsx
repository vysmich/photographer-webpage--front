import Hero from "../src/components/Hero";
import MainCategoriesBanner from "../src/components/MainCategoriesBanner";
import AboutBanner from "../src/components/AboutBanner";
import { getLayout } from "../src/components/layout/Layout";

import homepageGql from "../src/query/HomepageGql";

export default function Home({ hero, mainCategoriesBanner, aboutBanner }) {
  // console.log(mainCategoriesBanner);
  return (
    <div>
      <Hero background={"bg-bgsecondary"} heroData={hero} />
      <MainCategoriesBanner
        gallery={mainCategoriesBanner.Gallery}
        title={mainCategoriesBanner.Title}
        contactBtn={mainCategoriesBanner.ContactButton}
        portfoliotBtn={mainCategoriesBanner.PortfolioButton}
      />
      <AboutBanner aboutBannerData={aboutBanner} />
    </div>
  );
}
Home.getLayout = getLayout;
export async function getStaticProps(context) {
  return homepageGql(context);
}
