import React from "react";
import { useTranslation } from "react-i18next";
import { BasicSection } from "../../../styles/globalStyleComponents";
import KarmaPn from "../../tools/pn/KarmaPn";
import CardSample from "./cardSamples/CardSample";
import { DivContainer } from "./styleSamples";
import pic1 from "../../../public/assets/images/pic1.jpg";
import pic2 from "../../../public/assets/images/pic2.jpg";
import pic3 from "../../../public/assets/images/pic3.jpg";
import pic4 from "../../../public/assets/images/pic4.jpg";
import newPic from "../../../public/assets/images/samples/1.jpg";
import newPic2 from "../../../public/assets/images/samples/2.jpg";
import newPic3 from "../../../public/assets/images/samples/3.jpg";
import newPic4 from "../../../public/assets/images/samples/4.jpg";
import newPic5 from "../../../public/assets/images/samples/5.jpg";

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
