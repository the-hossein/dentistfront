import React from "react";
import {
  BasicSection,
  ButtonRoundBasic,
  MainDiv,
  RowJustifyBetween,
  RowJustifyBetweenHome
} from "../../../styles/globalStyleComponents";
import Image from "next/image";
import picLanding from "../../../public/Assets/images/pic3.jpg";
import ButtonRound from "../../tools/buttonRound/ButtonRound";
import { ArrowText } from "./style";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Simple from "../../tools/simple/Simple";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import KarmaPn from "../../tools/pn/KarmaPn";

const Landing = () => {
  const lang = useSelector((state) => state.stateLang.lng);

  const { t } = useTranslation();

  return (
    <BasicSection>
      <MainDiv radiusImg={lang === "fa" ? true : false} lang={lang}>
        <div className="child text">
          <div className="description">
            <h1>{t("Sadatabad")}</h1>
            <h2>{t("company")}</h2>
            <p className="slogan" >{t("slogan")}</p>
          </div>
          <RowJustifyBetweenHome align={"flex-start"} >
            <div className="col">
              <Link href="/appointment" >
             <a>
                  <ButtonRound text={t("Appointment")} width={"205px"} height={"50px"} />
             </a>
            
              </Link>
            {/*   <Simple /> */}
            </div>
            <div className="col col-text">
              <div className="child-col">
                <Link href="/samples" replace>
                  <ArrowText first>
                    <h2>{t("WSamples")}</h2>
                    <ArrowLeftIcon fontSize="large" />
                  </ArrowText>
                </Link>
              </div>
              <div className="child-col">
                <Link href="/dentaladvince" replace>
                  <ArrowText reverse>
                    <h2>{t("dentalAdvice")}</h2>
                    <ArrowLeftIcon fontSize="large" />
                  </ArrowText>
                </Link>
              </div>
            </div>
          </RowJustifyBetweenHome>
        </div>
        <div className="child banner">
          <img src={picLanding.src} alt="dentist" />
        </div>
      </MainDiv>
      <KarmaPn/>
    </BasicSection>
  );
};

export default Landing;
