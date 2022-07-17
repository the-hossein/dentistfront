import React from "react";
import { RowJustifyBetween } from "../../../styles/globalStyleComponents";
import { FooterContainer } from "./styleFooter";

const Footer = () => {
  return (
    <FooterContainer>
      <RowJustifyBetween footer>
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
      <h3>.تمام حقوق برای <a target="_blank" href="https://karmaagy.com/" className="karma">کارما</a> محفوظ است و استفاده از مطالب <a target="_blank" href="https://karmaagy.com/" className="karma">کارما</a> تنها با ذکر نام <a target="_blank" href="https://karmaagy.com/" className="karma">کارما</a> و درج لینک مستقیم مجاز است </h3>
    </FooterContainer>
  );
};

export default Footer;
