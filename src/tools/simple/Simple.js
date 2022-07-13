import React from 'react';
import Image from 'next/image';
import { MainDiv } from './style';
import simple from '../../../public/Assets/images/simple.png';
import { useSelector } from 'react-redux';

const Simple = () => {

    const lang = useSelector(state => state.stateLang.lng);

    return (
        <MainDiv lang={lang}>
            <div>
                <p>lorem lorem lorem lorem</p>
                <span>About About About</span>
            </div>
            <Image src={simple} alt="pic simple" />
        </MainDiv>
    );
};

export default Simple;