import { SRLWrapper } from "simple-react-lightbox";
import chunk from "lodash.chunk";

const MasonryGallery = ({ photos }) => {
  const photosArrays = chunk(photos, 17);
  const options = {
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
    <SRLWrapper options={options}>
      {photosArrays.map((albumChunk, key) => (
        <div
          key={key}
          className="masonry grid-cols-[repeat(12, 1fr)] auto-rows-[35px]  gap-4 md:mt-4 md:grid"
        >
          {albumChunk.map((photo, key) => (
            <div key={key}>
              <a href={`${photo.attributes.url}`}>
                <img
                  loading="lazy"
                  className=" mb-4 h-full w-full object-cover shadow-[0px_4px_6px_rgba(0,0,0,0.5)] transition-all hover:grayscale"
                  src={`${photo.attributes.formats.large.url}`}
                />
              </a>
            </div>
          ))}
        </div>
      ))}
    </SRLWrapper>
  );
};

export default MasonryGallery;
