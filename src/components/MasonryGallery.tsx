import React, { FC } from "react";
//components
import { SRLWrapper } from "simple-react-lightbox";
import Masonry, { MasonryPropTypes } from "react-masonry-component";
//query
import { Photo } from "src/query/AlbumGql";

interface MasonryGalleryProps {
  photos: Photo[];
}

interface MasonryExtendedTypes extends MasonryPropTypes {
  children: React.ReactNode;
}

const MasonryExtended: FC<MasonryExtendedTypes> = ({
  children,
  ...props
}): JSX.Element => {
  return <Masonry {...props}>{children}</Masonry>;
};

const MasonryGallery: FC<MasonryGalleryProps> = ({ photos }) => {
  const masonryOptions = {
    transitionDuration: 0,
    gutter: 16,
    fitWidth: false,
    itemSelector: ".image-element-class",
    percentPosition: true,
    resize: true,
  };

  const imagesLoadedOptions = { background: ".my-bg-image-el" };

  const optionsSRL = {
    settings: {
      overlayColor: "rgba(0 0 0 / 0.97)",
      hideControlsAfter: 3000,
    },
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showThumbnailsButton: false,
    },
    caption: {
      showCaption: false,
    },
  };

  return (
    <SRLWrapper options={optionsSRL}>
      <MasonryExtended
        className={"my-gallery-class"}
        elementType={"section"}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {photos.map((photo) => (
          <div
            key={photo.id}
            className=" image-element-class mb-4 flex w-full overflow-hidden rounded shadow-[0px_4px_6px_rgba(0,0,0,0.5)] transition-all hover:grayscale sm:w-[48.5%] xl:w-[32%]"
          >
            <a href={`${photo.attributes.formats.large.url}`}>
              <img
                loading="lazy"
                className="flex w-full "
                src={`${photo.attributes.formats.medium.url}`}
              />
            </a>
          </div>
        ))}
      </MasonryExtended>
    </SRLWrapper>
  );
};

export default MasonryGallery;
