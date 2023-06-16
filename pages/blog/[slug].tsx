import React from "react";
//components
import Hero from "../../src/components/Hero";
import ReactMarkdown from "react-markdown";
//query
import textPageGql from "../../src/query/TextPageGql";
import textPageCountGql from "../../src/query/TextPageCoutnGql";
//types
import { GetStaticPaths, GetStaticProps } from "next";
import { NextPageWithLayout } from "../index";
import { AllRoutes } from "../[slug]";
//layout
import { getLayout } from "../../src/components/layout/Layout";
import blogGql, { BlogGql } from "../../src/query/BlogGql";
import SlideGallery from "../../src/components/SlideGallery";
import Head from "next/head";
import blogCountGql from "./../../src/query/BlogCountGql";

const textPage: NextPageWithLayout<BlogGql> = ({
  hero,
  title,
  text1,
  text2,
  gallery1,
  gallery2,
  blogSeo,
}) => {
  return (
    <div className="bg-secondary pb-16 text-center">
      <Head>
        <title>{blogSeo.SeoTitle}</title>
        <meta name="description" content={blogSeo.SeoDescription} />
      </Head>
      <Hero background="bg-light" heroData={hero} />
      <section className="relative z-10 bg-light">
        <div className="container">
          <h2 className="pb-10">{title}</h2>
          <ReactMarkdown>{text1}</ReactMarkdown>
          <SlideGallery galleryData={gallery1} />
          <ReactMarkdown>{text2}</ReactMarkdown>
          <SlideGallery galleryData={gallery2} />
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
      const blogListCount = await blogCountGql(locale);
      const blogListCountData = blogListCount.props.data;

      for (const count of blogListCountData) {
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
  return await blogGql(context);
}

export default textPage;
