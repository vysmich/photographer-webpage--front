import Hero from "../src/components/Hero";
import MainCategoriesBanner from "../src/components/MainCategoriesBanner";
import AboutBanner from "../src/components/AboutBanner";
import { getLayout } from "../src/components/layout/Layout";

import homepageGql from "../src/query/HomepageGql";

export default function Home({ hero, mainCategoriesBanner, aboutBanner }) {
  return (
    <div>
      <Hero heroData={hero} />
      <MainCategoriesBanner mainCategoriesBannerData={mainCategoriesBanner} />
      <AboutBanner aboutBannerData={aboutBanner} />
    </div>
  );
}
Home.getLayout = getLayout;
export async function getStaticProps(context) {
  return homepageGql(context);
}
