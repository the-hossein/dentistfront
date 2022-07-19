import React from 'react';
import Image from 'next/image';
import { MainDiv } from './style';
import simple from '../../../public/Assets/images/simple.png';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const Simple = () => {

    const lang = useSelector(state => state.stateLang.lng);

    return (
        <MainDiv lang={lang}>
            <div>
                <Link href="/ourteam">
                    <a><h1>Our Team</h1></a>
                </Link>
            </div>
            <div className='karmaLogo'>
                <Image src={simple} alt="pic simple" />
            </div>
        </MainDiv>
    );
};

export default Simple;