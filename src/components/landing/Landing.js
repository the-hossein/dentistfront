import React from 'react'
import { BasicSection, ButtonRoundBasic, MainDiv, RowJustifyBetween } from '../../../styles/globalStyleComponents';
import Image from 'next/image';
import picLanding from '../../../public/Assets/images/L-1.png';
import ButtonRound from '../../tools/buttonRound/ButtonRound';
import { ArrowText } from './style';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Simple from '../../tools/simple/Simple';

const Landing = () => {
  return (
    <BasicSection>
      <MainDiv>
        <div className='child text'>
          <div className='description'>
            <h1>Sadatabad</h1>
            <h2>Dental Group</h2>
            <p>slogan slogan slogan slogan slogan slogan slogan slogan</p>
          </div> 
          <RowJustifyBetween align={"flex-start"}>
            <ButtonRound
              text={"Make Appointment"}
              width={"205px"}
            />
            <ArrowText>
              <h2>Work Sample</h2>
              <ArrowLeftIcon fontSize="large" />
            </ArrowText>
          </RowJustifyBetween>
          <RowJustifyBetween align={"flex-end"}>
            <Simple />
            <ArrowText reverse>
              <h2>Dental Advice</h2>
              <ArrowLeftIcon fontSize="large" />
            </ArrowText>
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