import React from 'react';
import { Container } from './albumStyle';
import Image from 'next/image';
import pic_1 from '../../../public/Assets/images/ServicePic3.jpg';
import pic_2 from '../../../public/Assets/images/pic2.jpg';
import pic_3 from '../../../public/Assets/images/L-1.jpg';



const AlbumSection = ({ reverse, lang, pic1, pic2, pic3 }) => {
    return (
        <Container reverse={reverse} lang={lang}>
            <div className='first'>
                <Image width={"100%"} height={"100%"} cover src={pic2 ? pic2 : pic_1} alt="banner" />
            </div>
            <div className='second' >
                <Image width={"100%"} height={"100%"} cover src={pic1 ? pic1 : pic_2} alt="banner" />
                <Image width={"100%"} height={"100%"} cover src={pic3 ? pic3 : pic_3} alt="banner" />
            </div>
        </Container>
    );
};

export default AlbumSection;