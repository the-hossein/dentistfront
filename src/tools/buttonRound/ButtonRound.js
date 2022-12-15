import React from "react";
import { ButtonRoundBasic } from "./styleButtonRound";

const ButtonRound = ({ width, click, text, status, reverse, height }) => {
  return (
    <ButtonRoundBasic width={width} height={height} onClick={click} status={status} reverse={reverse}>
      {text}
    </ButtonRoundBasic>
  );
};

export default ButtonRound;
