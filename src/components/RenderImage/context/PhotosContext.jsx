import { useState, createContext } from "react";

export const PhotoContext = createContext();

const initialValue = {
  albumData: [],
  individualAlbum: [],
  individualPhoto: {},
  selectedAlbumId: null,
  selectedPhotoId: null,
  isLoading: false,
};

export const PhotoContextProvider = ({ children }) => {
  const [data, setData] = useState(initialValue);
  return (
    <PhotoContext.Provider value={{ data, setData }}>
      {children}
    </PhotoContext.Provider>
  );
};
