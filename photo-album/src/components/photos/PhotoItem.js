import React from "react";
import classes from "./PhotoItem.module.css";
import LazyLoad from "react-lazyload";

function PhotoItem(props) {


  return (
    <li className={classes["list-item"]}>
      <div className={classes.picture}>
        <a href={props.url} alt="Link to pexel API" target="_blank" rel = "noreferrer"> 
        <LazyLoad height = {props.height}  once>
          <img
            src={props.photo}
            alt={`Photograph taken by ${props.photographer} to Pexel API`}
          />
          </LazyLoad>
        </a>
      </div>
      <p>{`Picture taken by ${props.photographer}`}</p>
    </li>
  );
}

export default  PhotoItem;
