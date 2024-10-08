import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { usePhotoData } from "./Hooks/usePhotoData";
import { Image } from "./components/Image";

const RenderImage = () => {
  const { albumId, photoId } = useParams();
  const { loadPhoto, data } = usePhotoData();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    loadPhoto(photoId);
  }, []);

  return (
    <>
      <h1>
        Rendering Image from Album {albumId} and PhotoId {photoId}
      </h1>
      {data?.isLoading && !imageLoaded && (
        <div
          style={{
            height: "600px",
            width: "600px",
            border: "1px solid black",
            background: "gray",
          }}
        ></div>
      )}
      {(data?.isLoading || imageLoaded) && (
        <Image
          src={data?.individualPhoto?.url}
          setImageLoaded={setImageLoaded}
        />
      )}
      <div>{data?.individualPhoto?.title}</div>
    </>
  );
};

export default RenderImage;
