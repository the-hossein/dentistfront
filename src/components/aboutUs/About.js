import React from 'react';
import { BasicSection, RowJustifyBetween } from '../../../styles/globalStyleComponents';
import { DivMain } from './styleAbout';
import aboutPic from '../../../public/Assets/images/about.png';
import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const About = () => {

    const lang = useSelector(state => state.stateLang.lng)

    const { t } = useTranslation()

    return (
        <BasicSection>
            <DivMain lang={lang}>
                <div className='child text'>
                    <h1>{t("aboutus")}</h1>
                    <p>
                        {t("lorem40")}
                    </p>
                    <div className='parent-col'>
                        <div className='col'>
                            <p>{t("phone")}: 00000000 </p>
                            <p>{t("phone")}: 00000000 </p>
                        </div>
                        <div className='col'>
                            <p>{t("address")}: hello world</p>
                            <div>
                                <InstagramIcon />
                                <TelegramIcon />
                                <PinterestIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='child pic'>
                    <img src={aboutPic.src} alt="Banner" />
                </div>
            </DivMain>
        </BasicSection>
    );
};

export default About;