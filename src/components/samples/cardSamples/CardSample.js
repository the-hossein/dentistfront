import React from 'react';
import { Card } from './CardSamplesStyle';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const CardSample = ({ id,img, name, nameEn }) => {

    const lang = useSelector(state => state.stateLang.lng);

    return (
        <Card lang={lang} >
            <img src={img} alt="samples" />
            <Link href={`/samples/${id}`}><a><div className='showCase' >
                {lang === "fa" ? name : nameEn}
            </div></a></Link>
        </Card>
    );
};

export default CardSample;