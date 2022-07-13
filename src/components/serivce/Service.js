import React from 'react';
import { useTranslation } from 'react-i18next';
import { BasicSection } from '../../../styles/globalStyleComponents';
import CardService from './cardService/CardService';
import { DivContainer } from './serviceStyle';

const Service = () => { 

    const { t } = useTranslation();

    return (
        <BasicSection>
            <DivContainer>
                <h1>{t("service")}</h1>
                <div className='row' >
                    <CardService id={"1"} />
                    <CardService id={"2"} />
                    <CardService id={"3"} />
                    <CardService id={"4"} />
                    <CardService id={"5"} />
                </div>
            </DivContainer>
        </BasicSection>
    );
};

export default Service;