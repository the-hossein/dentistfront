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
import newPic from "../../../public/Assets/images/samples/1.jpg";
import newPic2 from "../../../public/Assets/images/samples/2.jpg";
import newPic3 from "../../../public/Assets/images/samples/3.jpg";
import newPic4 from "../../../public/Assets/images/samples/4.jpg";
import newPic5 from "../../../public/Assets/images/samples/5.jpg";

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
              img={index === 0 ? newPic : index === 5 ? newPic2 : index === 3 ? newPic3 : index === 4 ? newPic5 : index === 2 ? pic2 : newPic4 }
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
