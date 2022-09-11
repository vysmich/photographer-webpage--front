import React from "react";
import actionsGql from "../../src/query/ActionsGql";
import actionsCountGql from "../../src/query/ActionsCoutnGql";
import { getLayout } from "../../src/components/layout/Layout";

import ReactMarkdown from "react-markdown";
import Hero from "../../src/components/Hero";
import ActionPrice from "../../src/components/ActionPrice";
import SlideGallery from "../../src/components/SlideGallery";

const textPage = ({ hero, body, prices, contactData, gallery }) => {
  return (
    <div className="bg-secondary pb-16 text-center">
      <Hero heroData={hero} />
      <div className="container pb-10 pt-16">
        <div className="mb-10">
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
        <ActionPrice pricesData={prices} contactData={contactData} />
        <SlideGallery galleryData={gallery} />
      </div>
    </div>
  );
};

textPage.getLayout = getLayout;

export async function getStaticPaths(context) {
  const getAllRoutes = async (context) => {
    let allRoutes = [];
    for (const locale of context.locales) {
      const actionsCount = await actionsCountGql(locale);
      const actionsCountData = actionsCount.props.data;
      for (const count of actionsCountData) {
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
  return await actionsGql(context);
}

export default textPage;
