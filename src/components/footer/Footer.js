import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { RowJustifyBetween } from "../../../styles/globalStyleComponents";
import { FooterContainer } from "./styleFooter";

const Footer = () => {
  const lang=useSelector(state=>state.stateLang.lng)
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
  {  lang==="fa"?  <h3>.تمام حقوق برای <Link href="https://karmaagy.com/">
      <a target="_blank"  className="karma">کارما</a>
      </Link> محفوظ است و استفاده از مطالب <Link href="https://karmaagy.com/">
      <a target="_blank"  className="karma">کارما</a>
      </Link> تنها با ذکر نام <Link href="https://karmaagy.com/">
      <a target="_blank"  className="karma">کارما</a>
      </Link> و درج لینک مستقیم مجاز است </h3>:
      
      <h3>
         All rights reserved for <Link  href="https://karmaagy.com/">
        
        <a        target="_blank" >
          karma
        </a>
        </Link> and the use of <Link  href="https://karmaagy.com/">
        
        <a target="_blank" >
          karma
        </a>
        </Link> content is allowed only by mentioning the name of <Link  href="https://karmaagy.com/">
        
        <a target="_blank" >
          karma
        </a>
        </Link> and inserting a direct link
      </h3>
      }
    </FooterContainer>
  );
};

export default Footer;
