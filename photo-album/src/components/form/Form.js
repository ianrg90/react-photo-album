import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import useValidation from "../../hooks/use-validation";
import PhotosContext from "../../store/photos-context";
import Button from "../ui/Button";
import classes from "./Form.module.css";

function Form() {

  const { fetchPhotos } = useContext(PhotosContext);

  const history = useHistory();

  const {
    enteredValue: enteredTopic,
    valueIsValid: topicIsValid,
    hasError: topicHasError,
    valueChangeHandler: topicChangeHandler,
    inputTouchHandler: topicBlurHandler,
    reset: resetTopic,
  } = useValidation((topic) => topic.trim() !== "");

  //Optional values, therefore no input restrictions
  //The validation functions will always return true
  const {
    enteredValue: enteredOrientation,
    valueChangeHandler: orientationChangeHandler,
  } = useValidation((orientation) => typeof orientation === "string");

  const { enteredValue: enteredSize, valueChangeHandler: sizeChangeHandler } =
    useValidation((size) => typeof size === "string");

  function handleFormSubmittion(e) {
    e.preventDefault();
    if (!topicIsValid) {
      return;
    }
    fetchPhotos(
      `https://api.pexels.com/v1/search/?orientation=${enteredOrientation}&page=1&per_page=4&query=${enteredTopic}&size=${enteredSize}`
    );

    history.push(`/photos/${enteredTopic}`);

    resetTopic();
  }

  return (
    <form onSubmit={handleFormSubmittion} className={classes.form}>
      <div className={classes.wrapper}>
        <div
          className={
            topicHasError
              ? classes["control-input-invalid"]
              : classes["control-input"]
          }
        >
          <label htmlFor="searchQuery">Please select an album</label>
          <input
            value={enteredTopic}
            onChange={topicChangeHandler}
            onBlur={topicBlurHandler}
            autoComplete="off"
            id="searchQuery"
            type="text"
            placeholder="e.g. Tiger, Nature, Rocks"
          />
        </div>
        <div className={classes["control-input"]}>
          <label htmlFor="orientation">Select picture orientation</label>
          <select id="orientation" onChange={orientationChangeHandler}>
            <option label="Any" value="" />
            <option label="Portrait" value="portrait" />
            <option label="Landscape" value="landscape" />
            <option label="Square" value="square" />
          </select>
        </div>
        <div className={classes["control-input"]}>
          <label htmlFor="picture size">Select picture size</label>
          <select id="picture size" onChange={sizeChangeHandler}>
            <option label="Any" value="" />
            <option label="Small 4MP" value="small" />
            <option label="Medium 12MP" value="medium" />
            <option label="Large 24MP" value="large" />
          </select>
        </div>
        <Button text={"Search!"} disabled = {!enteredTopic}/>
      </div>
    </form>
  );
}

export default Form
