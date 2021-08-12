import React, { useState } from "react";
import { validate } from "./validators";

const INPUT_STATES = {
  UNTOUCHED: "UNTOUCHED",
  VALID: "VALID",
  INVALID: "INVALID",
};

const Input = (props) => {
  const { label, id, validators, errorText } = props;
  const [isError, setIsError] = useState(false);
  const [cnt, setCtn] = useState(1);

  const changeHandler = (value) => {
    if (cnt <= 1) return;
    const isValid = validate(value, validators);
    if (isValid) setIsError(false);
    else setIsError(true);
  };

  const blurHandler = (value) => {
    const isValid = validate(value, validators);
    if (!isValid) setIsError(true);
    setCtn(cnt + 1);
  };

  return (
    <div
      className={`${isError ? "form-input--invalid form-input" : "form-input"}`}
      data-testid="form-input"
    >
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        onBlur={(e) => blurHandler(e.target.value)}
        onChange={(e) => changeHandler(e.target.value)}
      />
      <p>{isError && errorText}</p>
    </div>
  );
};

export default Input;
