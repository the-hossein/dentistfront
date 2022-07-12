import React from 'react';
import { BasicSection, RowJustifyBetween } from '../../../styles/globalStyleComponents';
import { DivMain } from './styleAbout';
import aboutPic from '../../../public/Assets/images/about.png';
import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const About = () => {
    return (
        <BasicSection>
            <DivMain>
                <div className='child text'>
                    <h1>About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua 
                        Egestas purus viverra accumsan in nisl 
                        nisi Arcu cursus vitae congue mauris 
                        rhoncus aenean vel elit scelerisque In 
                        egestas erat imperdiet sed euismod nisi 
                        porta lorem mollis.
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua 
                        Egestas purus viverra accumsan in nisl 
                        nisi Arcu cursus vitae congue mauris 
                        rhoncus aenean vel elit scelerisque In 
                        egestas erat imperdiet sed euismod nisi 
                        porta lorem mollis
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua 
                        Egestas purus viverra accumsan in nisl 
                        nisi Arcu cursus vitae congue mauris 
                        rhoncus aenean vel elit scelerisque In 
                        egestas erat imperdiet sed euismod nisi 
                        porta lorem mollis
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua 
                        Egestas purus viverra accumsan in nisl 
                        nisi Arcu cursus vitae congue mauris 
                        rhoncus aenean vel elit scelerisque In 
                        egestas erat imperdiet sed euismod nisi 
                        porta lorem mollis
                    </p>
                    <div className='parent-col'>
                        <div className='col'>
                            <p>Phone 1: 00000000 </p>
                            <p>Phone 1: 00000000 </p>
                        </div>
                        <div className='col'>
                            <p>Adrress: hello world</p>
                            <div>
                                <InstagramIcon />
                                <TelegramIcon />
                                <PinterestIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='child pic'>
                    <img src={aboutPic.src} alt="Banner" />
                </div>
            </DivMain>
        </BasicSection>
    );
};

export default About;