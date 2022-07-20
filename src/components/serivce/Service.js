import React, { useEffect, useLayoutEffect, useState } from "react";
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
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Scrollbar,
  Mousewheel,
  Autoplay,
  EffectFade
} from "swiper";

const Service = () => {
  const lang = useSelector((state) => state.stateLang.lng);

  const [size, setSize] = useState(0);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <BasicSection>
      <DivContainer>
        <h1>{t("service")}</h1>
        <Swiper
          modules={[Scrollbar, Mousewheel, Autoplay]}
          className="mySwiper"
          slidesPerView={size <= 868 ? 2 : size >= 1200 ? 5 : 3}
          spaceBetween={size <= 868 ? 40 : 0}
          grabCursor={true}
          mousewheel={true}
          autoplay
          loop
        >
          <SwiperSlide>
            <CardService
              title={t("Pediatricdentistry")}
              lang={lang}
              img={ServicePic1}
              id={1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardService
              title={t("Dentallaminate")}
              lang={lang}
              img={ServicePic2}
              id={2}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CardService title={t("composite")} lang={lang} img={ServicePic3} id={3} />
          </SwiperSlide>

          <SwiperSlide>
            <CardService
              title={t("Teethbleaching")}
              lang={lang}
              img={ServicePic4}
              id={4}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CardService title={t("Implant")} lang={lang} img={ServicePic5} id={5} />
          </SwiperSlide>

          <SwiperSlide>
            <CardService title={t("Rootcanal")} lang={lang} img={ServicePic1} id={6} />
          </SwiperSlide>
          <SwiperSlide>
            <CardService
              title={t("Prosthesisandcover")}
              lang={lang}
              img={ServicePic2}
              id={7}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CardService
              title={t("Orthodontic")}
              lang={lang}
              img={ServicePic3}
              id={8}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CardService
              title={t("Gumsurgery")}
              lang={lang}
              img={ServicePic4}
              id={9}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardService
              title={t("Oralsurgery")}
              lang={lang}
              img={ServicePic5}
              id={10}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardService
              title={t("Frenectomysurgery")}
              lang={lang}
              img={ServicePic5}
              id={11}
            />
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="row">
              <div className="child-row">
                <CardService
                  title={t("rootcanal")}
                  lang={lang}
                  img={ServicePic1}
                />
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="child-row">
                <CardService
                  title={t("Frenectomysurgery")}
                  lang={lang}
                  img={ServicePic5}
                />
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>

        <KarmaPn />
      </DivContainer>
    </BasicSection>
  );
};

export default Service;
