import classes from "./Button.module.css";

function Button(props) {
  const cssClasses = props.disabled
    ? classes["actions-disabled"]
    : classes.actions;

  return (
    <div className={cssClasses}>
      <button disabled={props.disabled} onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
}

export default Button;
