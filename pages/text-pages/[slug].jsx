import React from "react";
import textPageGql from "../../src/query/TextPageGql";
import textPageCountGql from "../../src/query/TextPageCoutnGql";
import { getLayout } from "../../src/components/layout/Layout";

import ReactMarkdown from "react-markdown";
import Hero from "../../src/components/Hero";

const textPage = ({ hero, title, body }) => {
  return (
    <div className="bg-secondary pb-16 text-center">
      <Hero heroData={hero} />
      <div className="container">
        <h2 className="pt-10 pb-10">{title}</h2>
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
    </div>
  );
};

textPage.getLayout = getLayout;

export async function getStaticPaths(context) {
  const getAllRoutes = async (context) => {
    let allRoutes = [];
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
}

export async function getStaticProps(context) {
  return await textPageGql(context);
}

export default textPage;
