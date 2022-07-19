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
            <CardService
              title={t("Pediatricdentistry")}
              lang={lang}
              img={ServicePic1}
            />
            <CardService
              title={t("Dentallaminate")}
              lang={lang}
              img={ServicePic2}
            />
            <CardService title={t("composite")} lang={lang} img={ServicePic3} />
          </div>
          <div className="child-row">
            <CardService
              title={t("Teethbleaching")}
              lang={lang}
              img={ServicePic4}
            />
            <CardService title={t("implant")} lang={lang} img={ServicePic5} />
          </div>
        </div>
        <div className="row">
          <div className="child-row">
            <CardService title={t("rootcanal")} lang={lang} img={ServicePic1} />
            <CardService
              title={t("Prosthesisandcover")}
              lang={lang}
              img={ServicePic2}
            />
            <CardService
              title={t("Orthodontic")}
              lang={lang}
              img={ServicePic3}
            />
          </div>
          <div className="child-row">
            <CardService
              title={t("gumsurgery")}
              lang={lang}
              img={ServicePic4}
            />
            <CardService
              title={t("Oralsurgery")}
              lang={lang}
              img={ServicePic5}
            />
          </div>
        </div>
        <div className="row">
          <div className="child-row">
            <CardService
              title={t("Frenectomysurgery")}
              lang={lang}
              img={ServicePic5}
            />
          </div>
        </div>
        <KarmaPn />
      </DivContainer>
    </BasicSection>
  );
};

export default Service;
