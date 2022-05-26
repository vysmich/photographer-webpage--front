import albumGql from "../../src/query/AlbumGql";

import SimpleReactLightbox from "simple-react-lightbox";
import ReactMarkdown from "react-markdown";

import Hero from "../../src/components/Hero";
import MasonryGallery from "../../src/components/MasonryGallery";

function album({ data }) {
  const photos = data.album.data.attributes.Photos.data;
  const cover = data.album.data.attributes.AlbumCover.data.attributes;
  const albumTitle = data.album.data.attributes.AlbumTitle;
  const albumDescription = data.album.data.attributes.EventDescription;
  return (
    <div className=" bg-light">
      <Hero heroTitle={albumTitle} heroImg={cover} />
      <div className="container py-28">
        <ReactMarkdown
          className=" pb-10 text-center"
          children={albumDescription}
        />
        <SimpleReactLightbox>
          <MasonryGallery photos={photos} />
        </SimpleReactLightbox>
      </div>
    </div>
  );
}
//TODO change for getStaticProps + StaticPaths + ISR
export async function getServerSideProps(context) {
  return await albumGql(context, context.query.id);
}
//export async function getStaticPaths(context) {
//  const { albumsID } = await albumGql(context, context.query.id);
//  return {
//    paths: albumsID.map((album) => ({
//      params: {
//        id: album.id,
//      },
//    })),
//    fallback: false,
//  };
//}

export default album;
