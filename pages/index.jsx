import Layout from "../src/components/layout/Layout";
import Hero from "../src/components/Hero";
import MainCategoriesBanner from "../src/components/MainCategoriesBanner";
import AboutBanner from "../src/components/AboutBanner";

import homepageGql from "../src/query/HomepageGql";

export default function Home({
  hero,
  layout,
  contextLocale,
  mainCategoriesBanner,
  aboutBanner,
}) {
  return (
    <Layout contextLocale={contextLocale} layoutData={layout}>
      <Hero heroData={hero} />
      <MainCategoriesBanner mainCategoriesBannerData={mainCategoriesBanner} />
      <AboutBanner aboutBannerData={aboutBanner} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  return homepageGql(context);
}
