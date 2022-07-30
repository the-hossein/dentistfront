import React from "react";
import { BasicSection } from "../../../styles/globalStyleComponents";
import { DivContainer, SectionBasicContact } from "./styleContact";
import picBanner from "../../../public/Assets/images/contactUs.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Input from "../../tools/input/Input";
import SecondlyBtn from "../../tools/secondlyBtn/SecondlyBtn";
import { t } from "i18next";
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
          <p>{t("address")} 1</p>
          <p>{t("phone")} 1</p>
          <p>{t("phone")} 2</p>
          <span>{t("typeMessage")}</span>
          <Input type="text" />
          <div>
            <SecondlyBtn text={t("done")} fontFamily={"light"} />
          </div>
          <div className="icons">
            <InstagramIcon />
            <TelegramIcon />
            <PinterestIcon />
          </div>
          <KarmaPn />
        </div>
        <div className="banner">
          <Image src={picBanner} alt="banner" />
        </div>
      </DivContainer>
    </SectionBasicContact>
  );
};

export default Contact;
