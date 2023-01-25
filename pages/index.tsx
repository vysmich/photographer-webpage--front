import React, { ReactElement, ReactNode } from "react";
//Components
import Head from "next/head";
import Hero from "../src/components/Hero";
import { MainCategoriesBanner } from "../src/components/MainCategoriesBanner";
import { AboutBanner } from "../src/components/AboutBanner";
//Layout
import { getLayout } from "../src/components/layout/Layout";
//Types
import { GetStaticProps, NextPage } from "next";
import { HomepageProps, LayoutData } from "../src/query/HomepageGql";
//Query
import homepageGql from "../src/query/HomepageGql";


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (
    page: ReactElement,
    {
      layoutData,
    }: {
      layoutData: LayoutData;
    }
  ) => ReactNode;
};

const Home: NextPageWithLayout<HomepageProps> = ({
  hero,
  mainCategoriesBanner,
  aboutBanner,
  seo,
}) => {
  const { Title, Content, PortfolioButton, Gallery } = mainCategoriesBanner;
  const { SeoTitle, SeoDescription } = seo;

  return (
    <>
      <Head>
        <title>{SeoTitle}</title>
        <meta name="description" content={SeoDescription} />
      </Head>
      <Hero background={"bg-bgsecondary"} heroData={hero} />

      <MainCategoriesBanner
        Gallery={Gallery}
        Title={Title}
        Content={Content}
        PortfolioButton={PortfolioButton}
      />
      <AboutBanner aboutBannerData={aboutBanner} />
    </>
  );
};
Home.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async (context) => {
  return homepageGql(context);
};

export default Home;
