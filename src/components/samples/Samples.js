import React from "react";
import { useTranslation } from "react-i18next";
import { BasicSection } from "../../../styles/globalStyleComponents";
import KarmaPn from "../../tools/pn/KarmaPn";
import CardSample from "./cardSamples/CardSample";
import { DivContainer } from "./styleSamples";

const Samples = ({ data }) => {
  const { t } = useTranslation();

  return (
    <BasicSection>
      <DivContainer>
        <h1 onClick={() => console.log(data)}>{t("WSamples")}</h1>
        <div className="row">
          {data.map((item, index) => (
            <CardSample
              key={item.id}
              id={item.id}
              img={item.imageFile1.filePath}
              // img={"https://fanavaryrayan.ir/back.jpg"}
              name={item.title}
              nameEn={item.titleEn}
            />
          ))}
        </div>
        <KarmaPn />
      </DivContainer>
    </BasicSection>
  );
};

export default Samples;
