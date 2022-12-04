import React from 'react';
import { Album, DivText, MainDiv } from './styleOurTeam';

import office from '../../../public/assets/images/tst_officeK.jpg';
import officeNum1 from '../../../public/assets/images/tst_office_1.jpg';
import officeNum2 from '../../../public/assets/images/tst_office_2.jpg';
import officeNum3 from '../../../public/assets/images/teamPic_2.jpg';
import officeNum4 from '../../../public/assets/images/teamPic.jpg';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Unit from '../../tools/unit/Unit';

import sina from '../../../public/assets/images/sina.jpg';
import miladPic from '../../../public/assets/images/tst_milad.jpg';
import erfanPic from '../../../public/assets/images/tst_erfan.jpg';
import aliPic from '../../../public/assets/images/tst_ali.jpg';
import hoseinPic from '../../../public/assets/images/tst_hossein.jpg';
import fatemehPic from '../../../public/assets/images/tst_fatemeh.jpg';
import ardalenPic from '../../../public/assets/images/tst_ardalan.jpg';
import parmidaPic from '../../../public/assets/images/tst_parmida.jpg';
import FazelehPic from '../../../public/assets/images/tst_fazeleh.jpg';
import mohadesePic from '../../../public/assets/images/tst_mohadese.jpg';
import faezehPic from '../../../public/assets/images/tst_faezeh.jpg';

//slider
import { Swiper, SwiperSlide } from "swiper/react";

import { Scrollbar, Mousewheel, Autoplay, EffectFade } from "swiper";


const OurTeam = () => {

    const { t } = useTranslation();

    const teamMa = [
        {
            unit: t("manager"),
            description: t("managerDes"),
            images: [sina, miladPic]
        }
    ];

    const teamIt = [
        {
            unit: t("itTeam"),
            description: t("itTeamDes"),
            images: [hoseinPic, erfanPic, fatemehPic, aliPic]
        }
    ];
    const teamUi = [
        {
            unit: t("uiTeam"),
            description: t("uiTeamDes"),
            images: [ardalenPic, parmidaPic, faezehPic]
        }
    ];
    const teamCW = [
        {
            unit: t("cwTeam"),
            description: t("cwTeamDes"),
            images: [FazelehPic, mohadesePic]
        }
    ];


    

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
                            <img src={officeNum3.src} alt="Karma" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={officeNum2.src} alt="Karma" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={officeNum1.src} alt="Karma" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={officeNum4.src} alt="Karma" />
                        </SwiperSlide>
                    </Swiper>
                    </a>
                </Link>
            </Album>
        </MainDiv>
    );
};

export default OurTeam;