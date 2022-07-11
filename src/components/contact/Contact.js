import React from 'react';
import { BasicSection } from '../../../styles/globalStyleComponents';
import { DivContainer, SectionBasicContact } from './styleContact';
import picBanner from '../../../public/Assets/images/registrPic.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import PinterestIcon from '@mui/icons-material/Pinterest';


const Contact = () => {
    return (
        <SectionBasicContact>
            <DivContainer>
                <div className='text'>
                    <h1>Contact Us</h1>
                    <p>Address 1</p>
                    <p>Phone 1</p>
                    <p>Phone 2</p>
                    <span>type Message</span>
                    <input type='text' />
                    <div>
                        <button>Done</button>
                    </div>
                    <div className='icons'>
                        <InstagramIcon />
                        <TelegramIcon />
                        <PinterestIcon />
                    </div>
                </div>
                <div className='banner'>
                    <img src={picBanner.src} alt='banner' />
                </div>
            </DivContainer>
        </SectionBasicContact>
    );
};

export default Contact;