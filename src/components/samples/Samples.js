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
              img={index % 2 === 0 ? pic1 : index % 6 === 0 ? pic2 : pic3 }
              name={item.name}
              nameEn={item.nameEn}
            />
          ))}
        </div>
        <KarmaPn />
      </DivContainer>
    </BasicSection>
  );
};

export default Samples;
