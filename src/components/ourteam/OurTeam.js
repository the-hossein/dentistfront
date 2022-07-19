import React from 'react';
import { BasicSection } from '../../../styles/globalStyleComponents';
import { Album, DivText, MainDiv } from './styleOurTeam';
import Image from 'next/image';

import office from '../../../public/Assets/images/officeK.jpg';
import office_1 from '../../../public/Assets/images/A-1.jpg';
import office_2 from '../../../public/Assets/images/A-2.jpg';
import office_3 from '../../../public/Assets/images/teamPic_2.jpg';
import office_4 from '../../../public/Assets/images/teamPic.jpg';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Unit from '../../tools/unit/Unit';

import sina from '../../../public/Assets/images/Sina.jpg';
import milad from '../../../public/Assets/images/Milad.jpg';
import erfan from '../../../public/Assets/images/Erfan.jpg';
import ali from '../../../public/Assets/images/Ali.jpg';
import hosein from '../../../public/Assets/images/Hossein.jpg';
import fatemeh from '../../../public/Assets/images/Fatemeh.jpg';
import ardalen from '../../../public/Assets/images/Ardalan.jpg';
import parmida from '../../../public/Assets/images/Parmida.jpg';
import yasi from '../../../public/Assets/images/Yasi.jpg';
import jhina from '../../../public/Assets/images/Jhina.jpg';
import Fazeleh from '../../../public/Assets/images/Fazeleh.jpg';
import mohadese from '../../../public/Assets/images/Mohadese.jpg';
import sara from '../../../public/Assets/images/Sara.jpg';
import yasii from '../../../public/Assets/images/Yasii.jpg';
import faezeh from '../../../public/Assets/images/Faezeh.jpg';

//slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Pagination, Scrollbar, Mousewheel, Autoplay, EffectFade } from "swiper";


const OurTeam = () => {

    const { t } = useTranslation();

    const teamMa = [
        {
            unit: t("manager"),
            description: t("managerDes"),
            images: [sina, milad]
        }
    ];

    const teamIt = [
        {
            unit: t("itTeam"),
            description: t("itTeamDes"),
            images: [hosein, erfan, fatemeh, ali]
        }
    ];
    const teamUi = [
        {
            unit: t("uiTeam"),
            description: t("uiTeamDes"),
            images: [ardalen, parmida, faezeh]
        }
    ];
    const teamCW = [
        {
            unit: t("cwTeam"),
            description: t("cwTeamDes"),
            images: [Fazeleh, mohadese]
        }
    ];

    const teamDi = [
        {
            unit: t("diTeam"),
            description: t("diTeamDes"),
            images: [sara, yasii]
        }
    ];

    const teamPg = [{
        unit: t("pgTeam"),
        description: t("pgTeam"),
        images: [faezeh]
    }]
    

    return (
        <MainDiv>
            <DivText>
                <h1>{t("karmaTeam")}</h1>
                <p>{t("lorem20")}</p>
                <Unit 
                    data={teamMa}
                />
                <Unit 
                    data={teamIt}
                />
                <Unit 
                    data={teamUi}
                />
                <Unit 
                    data={teamCW}
                />
                {/* <Unit 
                    data={teamDi}
                /> */}
                {/* <Unit 
                    data={teamPg}
                /> */}
            </DivText>
            <Album>
                <Link href="https://karmaagy.com/">
                    <a target={"_blank"}>
                    <Swiper
                        direction={"vertical"}
                        effect={"fade"}
                        pagination={{
                        clickable: true,
                        }}
                        mousewheel={true}
                        scrollbar={{
                            hide: true
                        }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Scrollbar, Mousewheel, Autoplay, EffectFade]}
                        className="swiperKarma"
                    >
                        <SwiperSlide>
                            <img src={office.src} alt="Karma" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={office_3.src} alt="Karma" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={office_2.src} alt="Karma" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={office_1.src} alt="Karma" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={office_4.src} alt="Karma" />
                        </SwiperSlide>
                    </Swiper>
                    </a>
                </Link>
            </Album>
        </MainDiv>
    );
};

export default OurTeam;