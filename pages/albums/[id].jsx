import albumGql from "../../src/query/AlbumGql";

function album({ data }) {
  return <div>{data.album.data.attributes.AlbumTitle}</div>;
}

export async function getServerSideProps(context) {
  return await albumGql(context, context.query.id);
}

export default album;
