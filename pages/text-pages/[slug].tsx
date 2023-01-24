import React from "react";
//components
import Hero from "../../src/components/Hero";
import ReactMarkdown from "react-markdown";
//query
import textPageGql from "../../src/query/TextPageGql";
import textPageCountGql from "../../src/query/TextPageCoutnGql";
//types
import { TextPageProps } from "../../src/query/TextPageGql";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextPageWithLayout } from "../../pages/index";
import { AllRoutes } from "./../[slug]";
//layout
import { getLayout } from "../../src/components/layout/Layout";

const textPage: NextPageWithLayout<TextPageProps> = ({ hero, title, body }) => {
  return (
    <div className="bg-secondary pb-16 text-center">
      <Hero background="bg-light" heroData={hero} />
      <section className="relative z-10 bg-light">
        <div className="container">
          <h2 className="pb-10">{title}</h2>
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
      </section>
    </div>
  );
};

textPage.getLayout = getLayout;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const getAllRoutes = async (context) => {
    let allRoutes: AllRoutes[] = [];
    for (const locale of context.locales) {
      const priceListCount = await textPageCountGql(locale);
      const priceListCountData = priceListCount.props.data;

      for (const count of priceListCountData) {
        allRoutes.push({
          params: { slug: count.attributes.Slug },
          locale: locale,
        });
      }
    }
    return allRoutes;
  };

  return {
    paths: await getAllRoutes(context),
    fallback: false, // can also be true or 'blocking'
  };
};

export async function getStaticProps(context) {
  return await textPageGql(context);
}

export default textPage;
