import React from "react";
import {
  BasicSection,
  ButtonRoundBasic,
  MainDiv,
  RowJustifyBetween,
  RowJustifyBetweenHome
} from "../../../styles/globalStyleComponents";
import Image from "next/image";
import picLanding from "../../../public/Assets/images/L-1.png";
import ButtonRound from "../../tools/buttonRound/ButtonRound";
import { ArrowText } from "./style";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Simple from "../../tools/simple/Simple";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Landing = () => {
  const lang = useSelector((state) => state.stateLang.lng);

  const { t } = useTranslation();

  return (
    <BasicSection>
      <MainDiv radiusImg={lang === "fa" ? true : false}>
        <div className="child text">
          <div className="description">
            <h1>{t("Sadatabad")}</h1>
            <h2>{t("company")}</h2>
            <p className="slogan" >slogan slogan slogan slogan slogan slogan slogan slogan</p>
          </div>
          <RowJustifyBetweenHome align={"flex-start"}>
            <div className="col">
              <Link href="/appointment" >
             <a>

                  <ButtonRound text={t("Appointment")} width={"205px"} />
             </a>
            
              </Link>
              <Simple />
            </div>
            <div className="col col-text">
              <div className="child-col">
                <Link href="/samples" replace>
                  <ArrowText>
                    <h2>Work Sample</h2>
                    <ArrowLeftIcon fontSize="large" />
                  </ArrowText>
                </Link>
              </div>
              <div className="child-col">
                <Link href="/dentaladvince" replace>
                  <ArrowText reverse>
                    <h2>Dental Advice</h2>
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
    </BasicSection>
  );
};

export default Landing;
