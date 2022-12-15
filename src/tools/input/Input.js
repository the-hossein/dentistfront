import React from "react";
import { InputContainer, InputStyle } from "./styleInput";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
      {valiStatus && <span>{t(`${textError}`)}</span>}
    </InputContainer>
  );
};

export default Input;
