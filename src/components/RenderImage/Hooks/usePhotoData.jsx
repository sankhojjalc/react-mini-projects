import { useContext } from "react";

import { PhotoContext } from "../context/PhotosContext";
import { fetchData } from "../utils/fetchData";

export const usePhotoData = () => {
  const { data, setData } = useContext(PhotoContext);

  const loadAlbumData = () => {
    setData({ ...data, isLoading: true });
    fetchData("https://jsonplaceholder.typicode.com/albums").then((val) => {
      setData({ ...data, isLoading: false, albumData: val });
    });
  };

  const loadPhotoData = (albumId) => {
    setData({ ...data, isLoading: true, selectedAlbumId: albumId });
    fetchData(
      `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
    ).then((val) => {
      setData((prev) => ({ ...prev, isLoading: false, individualAlbum: val }));
    });
  };

  const loadPhoto = (photoId) => {
    setData({ ...data, isLoading: true, selectedPhotoId: photoId });
    fetchData(`https://jsonplaceholder.typicode.com/photos/${photoId}`).then(
      (val) => {
        setData({ ...data, isLoading: false, individualPhoto: val });
      }
    );
  };

  return {
    data,
    loadAlbumData,
    loadPhotoData,
    loadPhoto,
  };
};
