import React from "react";
import { InputContainer, InputStyle } from "./styleInput";

const Input = ({
  placeHolder,
  valiStatus,
  textError,
  type,
  value,
  change,
  name,
  keyDown,
  legth,
  onFocus,
  disabled
}) => {
  return (
    <InputContainer>
      <InputStyle
        placeholder={placeHolder}
        type={type}
        value={value}
        onChange={change}
        name={name}
        onKeyDown={keyDown}
        maxLength={legth}
        onFocus={onFocus}
        disabled={disabled}
      />
      {valiStatus && <span>{textError}</span>}
    </InputContainer>
  );
};

export default Input;
