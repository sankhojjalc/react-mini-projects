// Render folders
// User clicks on folder then render Images associated with the folder in a lazy load manner
// user clicks on the image, show image in expanded Modal view
// render the album using: https://jsonplaceholder.typicode.com/albums/
// render the album using: https://jsonplaceholder.typicode.com/albums/1/photos
// render the album using: https://jsonplaceholder.typicode.com/photos/1

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PhotoContextProvider } from "./context/PhotosContext.jsx";
import { RenderFolders } from "./RenderFolders.jsx";
import { RenderThumbnails } from "./RenderThumbnails.jsx";
import { RenderImage } from "./RenderImage.jsx";

export const RenderPhotos = () => {
  return (
    <PhotoContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={RenderFolders} />
          <Route path="/album/:albumId" Component={RenderThumbnails} />
          <Route
            path="/album/:albumId/photo/:photoId"
            Component={RenderImage}
          />
        </Routes>
      </BrowserRouter>
    </PhotoContextProvider>
  );
};
