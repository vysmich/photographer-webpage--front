import albumGql from "../../src/query/AlbumGql";
import albumCountGql from "../../src/query/AlbumCountGql";

import SimpleReactLightbox from "simple-react-lightbox";
import ReactMarkdown from "react-markdown";

import Hero from "../../src/components/Hero";
import MasonryGallery from "../../src/components/MasonryGallery";
import { array } from "yup";

function album({ data }) {
  const photos = data.album.data.attributes.Photos.data;
  const cover = data.album.data.attributes.AlbumCover.data.attributes;
  const albumTitle = data.album.data.attributes.AlbumTitle;
  const albumDescription = data.album.data.attributes.EventDescription;
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
//TODO change for getStaticProps + StaticPaths + ISR
export async function getStaticPaths() {
  const albumCount = await albumCountGql();

  return {
    paths: albumCount.props.data.albums.data.map((count) => ({
      params: { id: count.id },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  return await albumGql(context, context.params.id);
}

export default album;
