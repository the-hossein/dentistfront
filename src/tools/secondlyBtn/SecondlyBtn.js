import React from "react";
import { SecondlyButtonStyle } from "./styleSecondlyBtn";

const SecondlyBtn = ({ text, onClick, disabled, size, fontFamily }) => {
  return (
    <SecondlyButtonStyle onClick={onClick} disabled={disabled} size={size} fontFamily={fontFamily}>
      {text}
    </SecondlyButtonStyle>
  );
};

export default SecondlyBtn;
