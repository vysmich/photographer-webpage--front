import albumGql from "../../src/query/AlbumGql";
import albumCountGql from "../../src/query/AlbumCountGql";
import { getLayout } from "../../src/components/layout/Layout";

import SimpleReactLightbox from "simple-react-lightbox";
import ReactMarkdown from "react-markdown";

import Hero from "../../src/components/Hero";
import MasonryGallery from "../../src/components/MasonryGallery";

function album({ photos, cover, albumTitle, albumDescription }) {
  return (
    <div className=" bg-light">
      <Hero heroTitle={albumTitle} heroImg={cover} />
      <div className="container py-28">
        <ReactMarkdown className=" pb-10 text-center">
          {albumDescription}
        </ReactMarkdown>
        <SimpleReactLightbox>
          <MasonryGallery photos={photos} />
        </SimpleReactLightbox>
      </div>
    </div>
  );
}
album.getLayout = getLayout;
export async function getStaticPaths(context) {
  const getAllRoutes = async (context) => {
    let allRoutes = [];
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
}

export async function getStaticProps(context) {
  return await albumGql(context);
}

export default album;
