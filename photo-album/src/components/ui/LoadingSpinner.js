import classes from "./LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div className={classes.center}>
      <div className={classes.spinner}></div>;
    </div>
  );
}

export default LoadingSpinner;
