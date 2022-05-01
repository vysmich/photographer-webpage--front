import Layout from "../src/components/layout/Layout";
import Hero from "../src/components/Hero";
import MainCategoriesBanner from "../src/components/MainCategoriesBanner";
import AboutBanner from "../src/components/AboutBanner";

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

export async function getStaticProps(context) {
  return homepageGql(context);
}
