import BorderImg from "./BorderImg";
import FilterButtons from "./FilterButtons";
import { useState } from "react";

function AlbumTable({ albumTableData, categoriesData }) {
  return (
    <div className=" bg-secondary pb-16">
      <div className="container ">
        <ul className=" grid justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3 xxxl:grid-cols-4">
          {albumTableData.map((album) => (
            <li className="h-[300px] w-[330px] list-none" key={album.id}>
              <BorderImg
                imgUrl={album.attributes.AlbumCover.data.attributes.url}
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
}

export default AlbumTable;
