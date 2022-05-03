import BorderImg from "./BorderImg";

function AlbumTable({ albumTableData }) {
  console.log(albumTableData);
  return (
    <div className=" bg-secondary">
      <div className="container ">
        <ul className=" grid justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3">
          {albumTableData.map((album) => (
            <li className="h-[300px] w-[330px]" key={album.id}>
              <BorderImg
                imgUrl={album.attributes.AlbumCover.data.attributes.url}
                imgText={album.attributes.AlbumTitle}
                imgAlt={
                  album.attributes.AlbumCover.data.attributes.alternativeText
                }
                imgLink={"albums/" + album.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AlbumTable;
