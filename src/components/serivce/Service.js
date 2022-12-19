import React, { useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { BasicSection } from "../../../styles/globalStyleComponents";
import KarmaPn from "../../tools/pn/KarmaPn";
import CardService from "./cardService/CardService";
import { DivContainer } from "./serviceStyle";
import ServicePic1 from "../../../public/Assets/images/tst_servicePic_1.jpg";
import ServicePic2 from "../../../public/Assets/images/tst_servicePic_2.jpg";
import ServicePic3 from "../../../public/Assets/images/tst_servicePic_3.jpg";
import ServicePic4 from "../../../public/Assets/images/tst_servicePic_4.jpg";
import ServicePic5 from "../../../public/Assets/images/tst_pic_4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Mousewheel, Autoplay } from "swiper";
import "swiper/css/pagination";
import services from "../../tools/dataApi/services";



const Service = () => {
  const setPic = (num) => {
    
    console.log(num);
    switch (num) {
      case 1:
        return ServicePic1;
      case 2:
        return ServicePic2;
      case 3:
        return ServicePic3;
      case 4:
        return ServicePic4;
      case 5:
        return ServicePic5;
      default:
        return ServicePic5;
        break;
    }
  };
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
        <h1 onClick={() => console.log(setPic())}>{t("service")}</h1>
        <Swiper
          modules={[Scrollbar, Mousewheel, Autoplay, Pagination]}
          className="mySwiper"
          slidesPerView={size <= 868 ? 2 : size >= 1200 ? 5 : 3}
          spaceBetween={size <= 868 ? 40 : 0}
          grabCursor={true}
          pagination={{
            dynamicBullets: true,
          }}
          mousewheel={true}
          autoplay
          loop
        >
          {services.map((item) => (
            <SwiperSlide key={item.id}>
              <CardService
                title={lang === "fa" ? item.title : item.titleEn}
                lang={lang}
                img={setPic(item.img)}
                id={item.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <KarmaPn />
      </DivContainer>
    </BasicSection>
  );
};

export default Service;
