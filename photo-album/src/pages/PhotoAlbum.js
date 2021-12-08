import React, { useContext, Fragment } from "react";
import { useHistory } from "react-router-dom";
import PhotosContext from "../store/photos-context";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import PhotoList from "../components/photos/PhotoList";

function PhotoAlbum() {
  const { photoList, loading, error, noResults } = useContext(PhotosContext);
  const history = useHistory();

  //if the list is empty redirect to "search"
  if (!loading && !error && !noResults && photoList.length === 0) {
    history.replace("/search");
  }

  return (
    <Fragment>
      {loading && <LoadingSpinner />}
      {error && <h3>{error}</h3>}
      {noResults && <h3>Sorry, there are no results for this topic</h3>}
      {!loading && !error && photoList.length !== 0 && !noResults && (
        <PhotoList info={photoList} />
      )}
    </Fragment>
  );
}

export default PhotoAlbum;
