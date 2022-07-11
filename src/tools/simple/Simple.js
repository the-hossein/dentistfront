import React from 'react';
import Image from 'next/image';
import { MainDiv } from './style';
import simple from '../../../public/Assets/images/simple.png';

const Simple = () => {
    return (
        <MainDiv>
            <div>
                <p>lorem lorem lorem lorem</p>
                <span>About About About</span>
            </div>
            <Image src={simple} alt="pic simple" />
        </MainDiv>
    );
};

export default Simple;