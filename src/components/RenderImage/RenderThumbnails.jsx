import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { usePhotoData } from "./Hooks/usePhotoData";
import { Image } from "./components/Image";

const RenderThumbnails = () => {
  const { albumId } = useParams();
  const navigate = useNavigate();
  const { loadPhotoData, data } = usePhotoData();

  useEffect(() => {
    loadPhotoData(albumId);
  }, []);

  return (
    <>
      <h1>Rendering Album: {albumId}</h1>
      {data?.isLoading ? (
        <h1>Fetching Album Details</h1>
      ) : (
        data?.individualAlbum.map((item) => (
          <span
            key={item?.albumId - item?.id}
            onClick={() => navigate(`photo/${item?.id}`)}
          >
            <Image
              src={item?.thumbnailUrl}
              alt={item?.title}
              style={{ cursor: "pointer" }}
            />
          </span>
        ))
      )}
    </>
  );
};

export default RenderThumbnails;
