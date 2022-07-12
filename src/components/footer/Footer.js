import React from "react";
import { RowJustifyBetween } from "../../../styles/globalStyleComponents";
import { FooterContainer } from "./styleFooter";

const Footer = () => {
  return (
    <FooterContainer>
      <RowJustifyBetween>
        <div>
          <h6>Phone 1: 00000000</h6>
          <h6>Phone 1: 00000000</h6>
        </div>
        <div>
          <h6>Address: St1st1 no1 un1</h6>
          <h6>Telegram: @loremipsem</h6>
        </div>
        <div>
          <h6>Instagram1:@instagram</h6>
          <h6>Instagram1:@instagram</h6>
        </div>
      </RowJustifyBetween>
    </FooterContainer>
  );
};

export default Footer;
