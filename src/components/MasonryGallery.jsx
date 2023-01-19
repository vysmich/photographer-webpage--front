import { SRLWrapper } from "simple-react-lightbox";
import Masonry from "react-masonry-component";

const MasonryGallery = ({ photos }) => {
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
      <Masonry
        ref={masonryRef}
        className={"my-gallery-class"}
        elementType={"section"}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
        imagesLoadedOptions={imagesLoadedOptions}
      >
        {photos.map((photo) => (
          <div
            key={photo.id}
            className=" image-element-class mb-4 flex w-full overflow-hidden rounded shadow-[0px_4px_6px_rgba(0,0,0,0.5)] transition-all hover:grayscale sm:w-[48.5%] xl:w-[32%]"
          >
            <a href={`${photo.attributes.url}`}>
              <img
                loading="lazy"
                className="flex w-full "
                src={`${photo.attributes.formats.large.url}`}
              />
            </a>
          </div>
        ))}
      </Masonry>
    </SRLWrapper>
  );
};

export default MasonryGallery;
