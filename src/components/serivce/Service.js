import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { BasicSection } from '../../../styles/globalStyleComponents';
import CardService from './cardService/CardService';
import { DivContainer } from './serviceStyle';

const Service = () => { 

    const lang = useSelector(state => state.stateLang.lng);

    const { t } = useTranslation();

    return (
        <BasicSection>
            <DivContainer>
                <h1>{t("service")}</h1>
                <div className='row' >
                    <div className='child-row'>
                        <CardService id={"1"} lang={lang} />
                        <CardService id={"2"} lang={lang} />
                        <CardService id={"3"} lang={lang} />
                    </div>
                    <div className='child-row'>
                        <CardService id={"4"} lang={lang} />
                        <CardService id={"5"} lang={lang} />
                    </div>
                    
                </div>
            </DivContainer>
        </BasicSection>
    );
};

export default Service;