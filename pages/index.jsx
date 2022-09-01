import Hero from "../src/components/Hero";
import MainCategoriesBanner from "../src/components/MainCategoriesBanner";
import AboutBanner from "../src/components/AboutBanner";
import { getLayout } from "../src/components/layout/Layout";
import Head from "next/head";

import homepageGql from "../src/query/HomepageGql";

export default function Home({ hero, mainCategoriesBanner, aboutBanner, seo }) {
  return (
    <div>
      <Head>
        <title>{seo.SeoTitle}</title>
        <meta name="description" content={seo.SeoDescription} />
      </Head>
      <Hero background={"bg-bgsecondary"} heroData={hero} />
      <MainCategoriesBanner
        gallery={mainCategoriesBanner.Gallery}
        title={mainCategoriesBanner.Title}
        content={mainCategoriesBanner.Content}
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
