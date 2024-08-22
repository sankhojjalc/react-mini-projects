import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { usePhotoData } from "./Hooks/usePhotoData";
import { Image } from "./components/Image";

const RenderImage = () => {
  const { albumId, photoId } = useParams();
  const { loadPhoto, data } = usePhotoData();

  useEffect(() => {
    loadPhoto(photoId);
  }, []);

  console.log("Final Data", data);

  return (
    <>
      <h1>
        Rendering Image from Album {albumId} and PhotoId {photoId}
      </h1>
      {data?.isLoading ? (
        <div
          style={{
            height: "600px",
            width: "600px",
            border: "1px solid black",
            background: "gray",
          }}
        ></div>
      ) : (
        <Image src={data?.individualPhoto?.url} />
      )}
      <div>{data?.individualPhoto?.title}</div>
    </>
  );
};

export default RenderImage;
