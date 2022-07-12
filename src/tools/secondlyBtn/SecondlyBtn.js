import React from "react";
import { SecondlyButtonStyle } from "./styleSecondlyBtn";

const SecondlyBtn = ({ text, onClick, disabled }) => {
  return (
    <SecondlyButtonStyle onClick={onClick} disabled={disabled}>
      {text}
    </SecondlyButtonStyle>
  );
};

export default SecondlyBtn;
