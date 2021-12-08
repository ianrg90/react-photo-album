import { useState } from "react";

function useValidation(validateInput) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateInput(enteredValue);
  const hasError = !valueIsValid && isTouched;

  function valueChangeHandler(e) {
    setEnteredValue(e.target.value);
  }

  function inputTouchHandler() {
    setIsTouched(true);
  }

  function reset() {
    setEnteredValue("");
    setIsTouched(false)
  }

  return {
    enteredValue,
    valueIsValid,
    hasError,
    valueChangeHandler,
    inputTouchHandler,
    reset,
  };
}

export default useValidation
