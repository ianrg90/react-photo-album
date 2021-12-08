import { Fragment, useContext, useEffect } from "react";
import { Prompt } from "react-router-dom";
import PhotosContext from "../../store/photos-context";
import Button from "../ui/Button";
import PhotoItem from "./PhotoItem";
import classes from "./PhotoList.module.css";

function PhotoList(props) {
  const { fetchPhotos, changePhotoListMountState, isPhotoListMounted } =useContext(PhotosContext);
  const info = props.info[0];
  const { next_page: nextPage, prev_page: prevPage } = info;

  useEffect(() => {
    changePhotoListMountState(true);

    return () => {
      changePhotoListMountState(false);
    };
  }, [changePhotoListMountState]);

  function handlePageChange(e) {
    return e.target.innerHTML === "Next"
      ? fetchPhotos(nextPage)
      : fetchPhotos(prevPage);
  }

  

  const photosList = info.photos.map((photo) => {
    return (
      <PhotoItem
        key={photo.id}
        photographer={photo.photographer}
        photo={photo.src.large}
        url = {photo.url}
        height = {photo.height}
      />
    );
  });

  return (
    <Fragment>
      <Prompt
        when={isPhotoListMounted}
        message={(location) =>
          "Do you want to leave the page ? The fetched photos will be lost!"
        }
      />
      <ul className={classes.ul}>{photosList}</ul>
      <div className={classes.actions}>
        {prevPage && <Button onClick={handlePageChange} text="Previous" />}
        {nextPage && <Button onClick={handlePageChange} text="Next" />}
      </div>
    </Fragment>
  );
}

export default PhotoList;
