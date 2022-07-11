import React from 'react';
import { HeaderBasic, Navbar, UlMenu } from '../../../styles/globalStyleComponents';
import ButtonRound from '../../tools/buttonRound/ButtonRound';

const Header = () => {
    return (
        <HeaderBasic>
            <Navbar>
                <UlMenu>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Samples</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </UlMenu>
            </Navbar>
            <ButtonRound text={"Login"} />
        </HeaderBasic>
    );
};

export default Header;