import React from 'react';
import { BasicSection } from '../../../styles/globalStyleComponents';
import { Album, DivText, MainDiv } from './styleOurTeam';
import Image from 'next/image';

import office from '../../../public/assets/images/officeK.jpg';
import office_1 from '../../../public/assets/images/office_1.jpg';
import office_2 from '../../../public/assets/images/office_2.jpg';
import office_3 from '../../../public/assets/images/teamPic_2.jpg';
import office_4 from '../../../public/assets/images/teamPic.jpg';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Unit from '../../tools/unit/Unit';

import sina from '../../../public/assets/images/sina.jpg';
import milad from '../../../public/assets/images/milad.jpg';
import erfanPic from '../../../public/assets/images/tst_erfan.jpg';
import aliPic from '../../../public/assets/images/tst_ali.jpg';
import hoseinPic from '../../../public/assets/images/tst_hossein.jpg';
import fatemehPic from '../../../public/assets/images/tst_fatemeh.jpg';
import ardalenPic from '../../../public/assets/images/tst_ardalan.jpg';
import parmidaPic from '../../../public/assets/images/parmida.jpg';
import yasi from '../../../public/assets/images/yasi.jpg';
import jhina from '../../../public/assets/images/jhina.jpg';
import FazelehPic from '../../../public/assets/images/tst_fazeleh.jpg';
import mohadese from '../../../public/assets/images/mohadese.jpg';
import sara from '../../../public/assets/images/sara.jpg';
import yasii from '../../../public/assets/images/yasii.jpg';
import faezehPic from '../../../public/assets/images/tst_faezeh.jpg';

//slider
import { Swiper, SwiperSlide } from "swiper/react";

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
            images: [FazelehPic, mohadese]
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