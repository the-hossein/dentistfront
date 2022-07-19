import React from "react";
import { useTranslation } from "react-i18next";
import { BasicSection } from "../../../styles/globalStyleComponents";
import KarmaPn from "../../tools/pn/KarmaPn";
import CardSample from "./cardSamples/CardSample";
import { DivContainer } from "./styleSamples";
import pic1 from "../../../public/Assets/images/pic1.jpg";
import pic2 from "../../../public/Assets/images/pic2.jpg";
import pic3 from "../../../public/Assets/images/pic3.jpg";
import pic4 from "../../../public/Assets/images/pic4.jpg";

const Samples = () => {
  const { t } = useTranslation();

  return (
    <BasicSection>
      <DivContainer>
        <h1>{t("WSamples")}</h1>
        <div className="row">
          <div className="col">
            <CardSample id={"1"} img={pic1} />
            <CardSample id={"2"} img={pic2} />
          </div>
          <div className="col">
            <CardSample id={"3"} img={pic3} />
            <CardSample id={"4"} img={pic4} />
          </div>
        </div>
        <KarmaPn />
      </DivContainer>
    </BasicSection>
  );
};

export default Samples;
