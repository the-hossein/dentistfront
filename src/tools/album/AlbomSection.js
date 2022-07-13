import React from 'react';
import { Container } from './albumStyle';
import Image from 'next/image';
import pic_1 from '../../../public/Assets/images/about.png';
import pic_2 from '../../../public/Assets/images/s-1.png';
import pic_3 from '../../../public/Assets/images/registrPic.png';



const AlbumSection = ({ reverse, lang }) => {
    return (
        <Container reverse={reverse} lang={lang}>
            <div className='first'>
                <img src={pic_1.src} alt="banner" />
            </div>
            <div className='second' >
                <img src={pic_2.src} alt="banner" />
                <img src={pic_3.src} alt="banner" />
            </div>
        </Container>
    );
};

export default AlbumSection;