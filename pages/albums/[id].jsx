import albumGql from "../../src/query/AlbumGql";
import Image from "next/image";

import Hero from "../../src/components/Hero";
function album({ data }) {
  const photos = data.album.data.attributes.Photos.data;
  const cover = data.album.data.attributes.AlbumCover.data.attributes;
  const albumTitle = data.album.data.attributes.AlbumTitle;
  const albumDescription = data.album.data.attributes.EventDescription;
  console.log("ff", photos);
  return (
    <div>
      <Hero heroTitle={albumTitle} heroImg={cover} />
      <div className="container my-28">
        <div className="gal columns-4 gap-0">
          {photos.map((photo) => (
            <img src={`http://localhost:1337${photo.attributes.url}`} />
          ))}
        </div>
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
