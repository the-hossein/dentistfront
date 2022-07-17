import React from 'react';
import { useTranslation } from 'react-i18next';
import { BasicSection } from '../../../styles/globalStyleComponents';
import KarmaPn from '../../tools/pn/KarmaPn';
import CardSample from './cardSamples/CardSample';
import { DivContainer } from './styleSamples';

const Samples = () => {
    
    const { t } = useTranslation();

    return (
        <BasicSection>
            <DivContainer>
                <h1>{t("WSamples")}</h1>    
                <div className='row'>
                    <div className='col'>
                        <CardSample id={"1"} />
                        <CardSample id={"2"} />
                    </div>
                    <div className='col'>
                        <CardSample id={"3"} />
                        <CardSample id={"4"} />
                    </div>
                </div>
                <KarmaPn/>
            </DivContainer>            
        </BasicSection>
    );
};

export default Samples;