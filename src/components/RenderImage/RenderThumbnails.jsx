import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { usePhotoData } from "./Hooks/usePhotoData";

export const RenderThumbnails = () => {
  const { albumId } = useParams();
  const { loadPhotoData, data } = usePhotoData();

  useEffect(() => {
    loadPhotoData(albumId);
  }, []);

  console.log("data--->", data);
  return <h1>Rendering Thumbnail</h1>;
};
