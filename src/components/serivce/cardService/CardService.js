import React from 'react';
import { Card } from './styleCard_S';
import picService from "../../../../public/Assets/images/s-1.png";
import Image from 'next/image';


const CardService = ({ id, lang }) => {
    return (
        <Card lang={lang}>
            <Image src={picService} alt="service" />
            <div className='name'>
                Service {id}
            </div>
        </Card>
    );
};

export default CardService;