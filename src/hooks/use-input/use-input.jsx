import { useReducer } from "react";
import { inputAction, onBlurAction, resetAction } from "./useInput.actions";
import { initialInputState, inputStateReducer } from "./useInput.reducer";

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch(inputAction(event.target.value));
  };

  const resetValueHandler = (value) => {
    dispatch(resetAction());
  };

  const valueOnBlurHandler = () => {
    dispatch(onBlurAction());
  };

  const setValueHandler = (value) => {
    dispatch(setValueHandler(value));
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueOnBlurHandler,
    resetValueHandler,
    setValueHandler,
  };
};

export default useInput;
