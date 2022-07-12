import React from 'react';
import { Card } from './CardSamplesStyle';
import Image from 'next/image';
import drSamples from '../../../../public/Assets/images/s-1.png';
import Link from 'next/link';

const CardSample = ({ id }) => {
    return (
        <Card>
            <Image src={drSamples} alt="samples" />
            <div className='showCase' >
                <Link href={`/samples/${id}`}><a>Section {id}</a></Link>
            </div>
        </Card>
    );
};

export default CardSample;