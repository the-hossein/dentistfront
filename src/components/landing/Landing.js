import React from 'react'
import { BasicSection, ButtonRoundBasic, MainDiv, RowJustifyBetween } from '../../../styles/globalStyleComponents';
import Image from 'next/image';
import picLanding from '../../../public/Assets/images/L-1.png';
import ButtonRound from '../../tools/buttonRound/ButtonRound';
import { ArrowText } from './style';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Simple from '../../tools/simple/Simple';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Landing = () => {
  
  const lang = useSelector(state => state.stateLang.lng)

  const { t }= useTranslation();

  return (
    <BasicSection>
      <MainDiv radiusImg={lang === "fa" ? true : false}>
        <div className='child text'>
          <div className='description'>
            <h1>{t("Sadatabad")}</h1>
            <h2>{t("company")}</h2>
            <p>slogan slogan slogan slogan slogan slogan slogan slogan</p>
          </div> 
          <RowJustifyBetween align={"flex-start"}>
            <ButtonRound
              text={t("Appointment")}
              width={"205px"}
            />
            <Link href='samples' replace>
            <ArrowText>
              <h2>Work Sample</h2>
              <ArrowLeftIcon fontSize="large" />
            </ArrowText>
            </Link>
          </RowJustifyBetween>
          <RowJustifyBetween align={"flex-end"}>
            <Simple />
            <Link href='/dentaladvince' replace>
            <ArrowText reverse>
              <h2>Dental Advice</h2>
              <ArrowLeftIcon fontSize="large" />
            </ArrowText>
            </Link>
          </RowJustifyBetween>
        </div>
        <div className='child banner'>
          <img src={picLanding.src} alt="dentist" />
        </div>
      </MainDiv>
    </BasicSection>
  )
}

export default Landing