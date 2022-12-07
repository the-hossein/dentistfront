import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BasicSection } from "../../../styles/globalStyleComponents";
import { Album, MainDiv, TextContainer } from "./styleDetail";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ButtonRound from "../../tools/buttonRound/ButtonRound";
import Link from "next/link";
import Image from "next/image";

import image_1 from "../../../public/Assets/images/tst_servicePic_1.jpg";
import image_2 from "../../../public/Assets/images/tst_servicePic_2.jpg";
import { useSelector } from "react-redux";

const DetailService = ({ id, dataService }) => {
  const lang = useSelector((state) => state.stateLang.lng);

  const { t } = useTranslation();

  return (
    <BasicSection>
      <MainDiv lang={lang}>
        <Link href="/service">
          <a>
            <span className="back">
              <ArrowLeftIcon />
              {t("back")}
            </span>
          </a>
        </Link>
        <TextContainer lang={lang}>
          <h1 onClick={() => console.log(dataService)}>{t("service")}</h1>
          <h2>{lang === "fa" ? dataService.title : dataService.titleEn} <span className="hashtag">#{dataService.category === 1 ? t("Treatment") : t("Beauty")} </span></h2>
          <p>
            {lang === "fa"
              ? dataService.description
              : dataService.descriptionEn}
          </p>
          <div className="btnContainer">
            <Link href="/appointment">
              <a>
                <ButtonRound text={t("Appointment")} width={"175px"} />
              </a>
            </Link>
          </div>
        </TextContainer>
        <Album lang={lang}>
          <div className="first-child">
            <Image src={image_1} alt="service image" />
          </div>
          <div className="second-child">
            <Image src={image_2} alt="service image" />
          </div>
        </Album>
      </MainDiv>
    </BasicSection>
  );
};

export default DetailService;
