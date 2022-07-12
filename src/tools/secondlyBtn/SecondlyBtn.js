import React from "react";
import { SecondlyButtonStyle } from "./styleSecondlyBtn";

const SecondlyBtn = ({ text, onClick }) => {
  return <SecondlyButtonStyle onClick={onClick}>{text}</SecondlyButtonStyle>;
};

export default SecondlyBtn;
