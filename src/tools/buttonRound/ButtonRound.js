import React from 'react';
import { ButtonRoundBasic } from '../../../styles/globalStyleComponents';

const ButtonRound = ({ width, click, text, status }) => {
    return (
        <ButtonRoundBasic
            width={width}
            onClick={click}
            status={status}
        >
            {text}
        </ButtonRoundBasic>
    );
};

export default ButtonRound;