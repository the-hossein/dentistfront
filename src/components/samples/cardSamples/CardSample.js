import React from 'react';
import { Card } from './CardSamplesStyle';
import Image from 'next/image';

import Link from 'next/link';

const CardSample = ({ id,img }) => {
    return (
        <Card>
            <Image src={img} alt="samples" />
            <div className='showCase' >
                <Link href={`/samples/${id}`}><a>Section {id}</a></Link>
            </div>
        </Card>
    );
};

export default CardSample;