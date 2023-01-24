import { useState, FC } from "react";
//componets
import BorderImg from "./BorderImg";
//types
import { Album } from "src/query/PortfolioGql";

interface AlbumTableProps {
  albumTableData: Album[];
}

const AlbumTable: FC<AlbumTableProps> = ({ albumTableData }) => {
  return (
    <div className=" relative bg-light pb-16">
      <div className="container  ">
        <ul className=" relative  flex flex-wrap justify-center  gap-8">
          {albumTableData.map((album) => (
            <li className="h-[300px] w-[330px] list-none" key={album.id}>
              <BorderImg
                imgUrl={
                  album.attributes.AlbumCover.data.attributes.formats.small.url
                }
                imgText={album.attributes.AlbumTitle}
                imgAlt={
                  album.attributes.AlbumCover.data.attributes.alternativeText
                }
                imgLink={"albums/" + album.attributes.Slug}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlbumTable;
