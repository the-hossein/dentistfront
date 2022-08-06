import React from 'react';
import { BasicSection, RowJustifyBetween } from '../../../styles/globalStyleComponents';
import { DivMain } from './styleAbout';
import aboutUs from '../../../public/Assets/images/aboutUs.jpg';
import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import KarmaPn from '../../tools/pn/KarmaPn';

const About = () => {

    const lang = useSelector(state => state.stateLang.lng)

    const { t } = useTranslation()

    return (
        <BasicSection>
            <DivMain lang={lang}>
                <div className='child text'>
                    <h1>{t("aboutus")}</h1>
                    <p>
                        {t("aboutUsText")}
                    </p>
                    <div className='parent-col'>
                        <div className='col'>
                            <p>{t("phone")}: 00000000 </p>
                            <p>{t("phone")}: 00000000 </p>
                        </div>
                        <div className='col'>
                            <p>{t("address")}:<span> {t("address_real")}</span></p>
                            <div>
                                <InstagramIcon />
                                <TelegramIcon />
                                <PinterestIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='child pic'>
                    <Image src={aboutUs} alt="Banner" />
                </div>
            </DivMain>
            <KarmaPn/>
        </BasicSection>
    );
};

export default About;