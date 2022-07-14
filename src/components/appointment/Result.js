import React, { createRef, useState } from "react";

import { useSelector } from "react-redux";
import toPersianNum, { convertDate, convertISOS } from "../../tools/helper";
import { ResultStyle } from "./styleAppoinment";

import { useScreenshot, createFileName } from "use-react-screenshot";
import { useTranslation } from "react-i18next";

const Result = () => {
  const state = useSelector((state) => state.stateAppoinment);
  const lang = useSelector((state) => state.stateLang.lng);
  const { t } = useTranslation();
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0
  });
  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };
  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);
  return (
    <>
      <ResultStyle ref={ref}>
        <ul>
          <li>
            <span>{t("appoinment")}</span>
            <span>{state.reservitionResult.id}</span>
          </li>
          <li>
            <span>
              {t("Services")}:{t(`${state.reservitionResult.services}`)}
            </span>
          </li>
          <li>
            <span>
              {t("date")}:{state.reservitionResult.date}
            </span>
          </li>
          <li>
            <span>
              {t("time")}: {state.reservitionResult.time}
            </span>
          </li>
        </ul>
        <div>
          <h6>{t("Conditionandrules")}</h6>
          <p>{t("ruleText")}</p>
        </div>
      </ResultStyle>
      <button className="saveGallery submitBtn" onClick={downloadScreenshot}>
        {t("SavetoGallery")}
      </button>
    </>
  );
};

export default Result;
