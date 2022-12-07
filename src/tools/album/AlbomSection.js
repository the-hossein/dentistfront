import React from 'react';
import { Container } from './albumStyle';



const AlbumSection = ({ reverse, lang, pic1, pic2, pic3 }) => {
    return (
        <Container reverse={reverse} lang={lang}>
            <div className='first'>
                <img width={"100%"} height={"100%"} cover src={pic2} alt="banner" />
            </div>
            <div className='second' >
                <img width={"100%"} height={"100%"} cover src={pic1} alt="banner" />
                <img width={"100%"} height={"100%"} cover src={pic3} alt="banner" />
            </div>
        </Container>
    );
};

export default AlbumSection;