import albumGql from "../../src/query/AlbumGql";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Hero from "../../src/components/Hero";
import Masonry from "react-masonry-component";

function album({ data }) {
  const photos = data.album.data.attributes.Photos.data;
  const cover = data.album.data.attributes.AlbumCover.data.attributes;
  const albumTitle = data.album.data.attributes.AlbumTitle;
  const albumDescription = data.album.data.attributes.EventDescription;

  const masonryOptions = {
    transitionDuration: 0,
    columnWidth: 200,
  };
  const imagesLoadedOptions = { background: ".my-bg-image-el" };

  return (
    <div>
      <Hero heroTitle={albumTitle} heroImg={cover} />
      <div className="container my-28">
        <ReactMarkdown
          className=" pb-10 text-center"
          children={albumDescription}
        />
        <Masonry
          className={"my-gallery-class"} // default ''
          elementType={"ul"} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
          {photos.map((photo) => (
            <img
              className="mb-2"
              src={`http://localhost:1337${photo.attributes.url}`}
            />
          ))}
        </Masonry>
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
