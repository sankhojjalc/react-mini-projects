import { useEffect } from "react";
import { usePhotoData } from "./Hooks/usePhotoData";
export const RenderFolders = () => {
  const { data, loadAlbumData } = usePhotoData();
  useEffect(() => {
    loadAlbumData();
  }, []);

  console.log("data---->", data);
  return <h1>Rendering Folders</h1>;
};
