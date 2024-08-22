import { useEffect } from "react";
import { usePhotoData } from "./Hooks/usePhotoData";
import { FolderSvg } from "./components/Folder.jsx";

const RenderFolders = () => {
  const { data, loadAlbumData } = usePhotoData();
  useEffect(() => {
    loadAlbumData();
  }, []);

  return data?.isLoading ? (
    <h1>Loading</h1>
  ) : (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "space-evenly",
      }}
    >
      {data?.albumData?.map((item) => (
        <FolderSvg key={item.id} item={item} />
      ))}
    </div>
  );
};

export default RenderFolders;
