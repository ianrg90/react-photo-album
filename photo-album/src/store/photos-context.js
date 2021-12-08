import React from "react";

const PhotosContext = React.createContext({
    fetchPhotos : (parameters) => {},
    photoList: [],
    loading: false,
    error: null,
    noResults: false,
    changePhotoListMountState : () => {},
    isPhotoListMounted: false
})

export default PhotosContext