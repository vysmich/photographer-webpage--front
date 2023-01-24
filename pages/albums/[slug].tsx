import React from "react";
//components
import Hero from "../../src/components/Hero";
import SimpleReactLightbox from "simple-react-lightbox";
import ReactMarkdown from "react-markdown";
import MasonryGallery from "../../src/components/MasonryGallery";
//query
import albumGql from "../../src/query/AlbumGql";
import albumCountGql from "../../src/query/AlbumCountGql";
//types
import { GetStaticPaths, GetStaticProps } from "next";
import { NextPageWithLayout } from "../../pages/index";
import { AlbumProps } from "./../../src/query/AlbumGql";
import { AllRoutes } from "./../[slug]";

//layout
import { getLayout } from "../../src/components/layout/Layout";
import { IHero } from "./../../src/query/HomepageGql";
import { url } from "inspector";

const album: NextPageWithLayout<AlbumProps> = ({
  photos,
  cover,
  albumTitle,
  albumDescription,
}) => {
  console.log();
  const heroData: IHero = {
    HeroHeading: albumTitle,
    HeroImage: {
      data: {
        attributes: {
          url: cover.url,
          alternativeText: cover.alternativeText,
        },
      },
    },
    HeroImageMobile: {
      data: {
        attributes: {
          url: cover.url,
          alternativeText: cover.alternativeText,
        },
      },
    },
  };

  return (
    <div className=" bg-light">
      <Hero background={"bg-light"} heroData={heroData} />
      <section className="relative z-10 bg-light">
        <div className="container py-28">
          <ReactMarkdown className=" pb-10 text-center">
            {albumDescription}
          </ReactMarkdown>
          <SimpleReactLightbox>
            <MasonryGallery photos={photos} />
          </SimpleReactLightbox>
        </div>
      </section>
    </div>
  );
};

album.getLayout = getLayout;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const getAllRoutes = async (context) => {
    let allRoutes: AllRoutes[] = [];
    for (const locale of context.locales) {
      const albumListCount = await albumCountGql(locale);
      const albumListCountData = albumListCount.props.data;

      for (const count of albumListCountData) {
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

export const getStaticProps: GetStaticProps = async (context) => {
  return await albumGql(context);
};

export default album;
