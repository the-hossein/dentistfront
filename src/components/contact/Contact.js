import React from "react";
import { DivContainer, SectionBasicContact } from "./styleContact";
import BPicture from "../../../public/Assets/images/tst_picBanner.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Input from "../../tools/input/Input";
import SecondlyBtn from "../../tools/secondlyBtn/SecondlyBtn";
import { useTranslation } from "react-i18next";
import KarmaPn from "../../tools/pn/KarmaPn";
import Image from "next/image";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <SectionBasicContact>
      <DivContainer>
        <div className="text">
          <h1>{t("contact")}</h1>
          <p>{t("address_real")}</p>
          <p>{t("phone")} 09037891868</p>
         {/*  <p>{t("phone")} 2</p> */}
          {/* <span>{t("typeMessage")}</span> */}
       {/*    <Input type="text" /> */}
          {/* <div>
            <SecondlyBtn text={t("done")} fontFamily={"light"} />
          </div>
          <div className="icons">
            <InstagramIcon />
            <TelegramIcon />
            <PinterestIcon />
          </div> */}
          <KarmaPn />
        </div>
        <div className="banner">
          <Image src={BPicture} alt="banner" />
        </div>
      </DivContainer>
    </SectionBasicContact>
  );
};

export default Contact;
