import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { BasicSection } from "../../../styles/globalStyleComponents";
import KarmaPn from "../../tools/pn/KarmaPn";
import CardService from "./cardService/CardService";
import { DivContainer } from "./serviceStyle";
import ServicePic1 from "../../../public/Assets/images/ServicePic1.jpg";
import ServicePic2 from "../../../public/Assets/images/ServicePic2.jpg";
import ServicePic3 from "../../../public/Assets/images/ServicePic3.jpg";
import ServicePic4 from "../../../public/Assets/images/ServicePic4.jpg";
import ServicePic5 from "../../../public/Assets/images/pic4.jpg";

const Service = () => {
  const lang = useSelector((state) => state.stateLang.lng);

  const { t } = useTranslation();

  return (
    <BasicSection>
      <DivContainer>
        <h1>{t("service")}</h1>
        <div className="row">
          <div className="child-row">
            <CardService id={"1"} lang={lang} img={ServicePic1} />
            <CardService id={"2"} lang={lang} img={ServicePic2} />
            <CardService id={"3"} lang={lang} img={ServicePic3} />
          </div>
          <div className="child-row">
            <CardService id={"4"} lang={lang} img={ServicePic4} />
            <CardService id={"5"} lang={lang} img={ServicePic5} />
          </div>
        </div>
        <KarmaPn />
      </DivContainer>
    </BasicSection>
  );
};

export default Service;
