import React from 'react';
import { BasicSection } from '../../../styles/globalStyleComponents';
import CardSample from './cardSamples/CardSample';
import { DivContainer } from './styleSamples';

const Samples = () => {
    return (
        <BasicSection>
            <DivContainer>
                <h1>Work Samples</h1>    
                <div className='row'>
                    <CardSample id={"1"} />
                    <CardSample id={"2"} />
                    <CardSample id={"3"} />
                    <CardSample id={"4"} />
                </div>
            </DivContainer>            
        </BasicSection>
    );
};

export default Samples;