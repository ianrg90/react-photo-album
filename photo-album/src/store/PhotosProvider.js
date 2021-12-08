import { useState } from "react";
import PhotosContext from "./photos-context";

const apiKey = "563492ad6f917000010000012bf2165ab96f42d08620a2085e68f123";

function PhotosProvider(props) {
  const [photoList, setPhotoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);
  const [isPhotoListMounted, setIsPhotoListMounted] = useState(false);

  const fetchPhotos = async (url) => {
    setError(null);
    setNoResults(false);
    setLoading(true);

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: apiKey,
        },
      });

      if (response.status === 429) {
        throw new Error(
          "You reached your maximum limit of request, please wait before trying again!"
        );
      } else if (response.status !== 200) {
        throw new Error(
          "Ops, something went wrong when trying to fetch photos"
        );
      }
      const data = await response.json();

      if (data.photos.length === 0) {
        setNoResults(true);
      }
      setPhotoList([data]);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
    window.scrollTo(0, 0);
  };

  function changePhotoListMountState(bol) {
    setIsPhotoListMounted(bol);
  }

  const photosContext = {
    fetchPhotos,
    photoList,
    loading,
    error,
    noResults,
    changePhotoListMountState,
    isPhotoListMounted,
  };

  return (
    <PhotosContext.Provider value={photosContext}>
      {props.children}
    </PhotosContext.Provider>
  );
}

export default PhotosProvider;
