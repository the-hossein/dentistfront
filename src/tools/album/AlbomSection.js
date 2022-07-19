import React from 'react';
import { Container } from './albumStyle';
import Image from 'next/image';
import pic_1 from '../../../public/Assets/images/ServicePic3.jpg';
import pic_2 from '../../../public/Assets/images/pic2.jpg';
import pic_3 from '../../../public/Assets/images/L-1.jpg';



const AlbumSection = ({ reverse, lang }) => {
    return (
        <Container reverse={reverse} lang={lang}>
            <div className='first'>
                <Image src={pic_1} alt="banner" />
            </div>
            <div className='second' >
                <Image src={pic_2} alt="banner" />
                <Image src={pic_3} alt="banner" />
            </div>
        </Container>
    );
};

export default AlbumSection;