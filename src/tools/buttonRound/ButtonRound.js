import React from "react";
import { ButtonRoundBasic } from "./styleButtonRound";

const ButtonRound = ({ width, click, text, status, reverse }) => {
  return (
    <ButtonRoundBasic width={width} onClick={click} status={status} reverse={reverse}>
      {text}
    </ButtonRoundBasic>
  );
};

export default ButtonRound;
