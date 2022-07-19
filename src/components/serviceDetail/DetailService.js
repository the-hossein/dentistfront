import React from 'react';
import { useTranslation } from 'react-i18next';
import { BasicSection } from '../../../styles/globalStyleComponents';
import { Album, MainDiv, TextContainer } from './styleDetail';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useRouter } from 'next/router';
import ButtonRound from '../../tools/buttonRound/ButtonRound';
import Link from 'next/link';
import Image from 'next/image';

import image_1 from "../../../public/Assets/images/ServicePic1.jpg";
import image_2 from "../../../public/Assets/images/ServicePic2.jpg";
import { useSelector } from 'react-redux';


const DetailService = () => {

    const lang = useSelector(state => state.stateLang.lng);

    const { t } = useTranslation();
    const router = useRouter();
    const params = router.query.serviceId;

    return (
        <BasicSection>
        <MainDiv lang={lang}>
            <Link href="/service">
                <a><span className='back'><ArrowLeftIcon />{t("back")}</span></a>
            </Link>
            <TextContainer lang={lang}>
                <h1>{t("service")}</h1>
                <h2>{t("detailService")} {params} </h2>
                <p>
                    {t("lorem20")}
                </p>
                <div className='btnContainer'>
                <Link href="/appointment" >
                    <a>
                  <ButtonRound text={t("Appointment")} width={"175px"} />
                    </a>
                </Link>
                </div>
            </TextContainer>
            <Album lang={lang}>
                <div className='first-child'>
                    <Image src={image_1} alt="service image" />
                </div>
                <div className='second-child'>
                    <Image src={image_2} alt="service image" />
                </div>
            </Album>
        </MainDiv>
        </BasicSection>
    );
};

export default DetailService;