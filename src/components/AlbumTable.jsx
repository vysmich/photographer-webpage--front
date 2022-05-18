import BorderImg from "./BorderImg";
import FilterButtons from "./FilterButtons";
import { useState } from "react";

function AlbumTable({ albumTableData, categoriesData }) {
  const [categoryFilterState, setcategoryFilterState] = useState("Vše");

  const filterCategory = (category) => {
    return albumTableData.filter(
      (album) =>
        album.attributes.categories.data[0]?.attributes?.Categories == category
    );
  };
  console.log(categoryFilterState);

  return (
    <div className=" bg-secondary pb-16">
      <div className="container ">
        <FilterButtons
          state={setcategoryFilterState}
          categoriesData={categoriesData}
        />

        <ul className=" grid justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3 xxxl:grid-cols-4">
          {categoryFilterState == "Vše" && "All"
            ? albumTableData.map((album) => (
                <li className="h-[300px] w-[330px]" key={album.id}>
                  <BorderImg
                    imgUrl={album.attributes.AlbumCover.data.attributes.url}
                    imgText={album.attributes.AlbumTitle}
                    imgAlt={
                      album.attributes.AlbumCover.data.attributes
                        .alternativeText
                    }
                    imgLink={"albums/" + album.id}
                  />
                </li>
              ))
            : filterCategory(categoryFilterState).map((album) => (
                <li className="h-[300px] w-[330px]" key={album.id}>
                  <BorderImg
                    imgUrl={album.attributes.AlbumCover.data.attributes.url}
                    imgText={album.attributes.AlbumTitle}
                    imgAlt={
                      album.attributes.AlbumCover.data.attributes
                        .alternativeText
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
