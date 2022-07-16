import React from "react";
import { SecondlyButtonStyle } from "./styleSecondlyBtn";

const SecondlyBtn = ({ text, onClick, disabled, size }) => {
  return (
    <SecondlyButtonStyle onClick={onClick} disabled={disabled} size={size}>
      {text}
    </SecondlyButtonStyle>
  );
};

export default SecondlyBtn;
