import React from 'react'
import { ThemeProvider } from 'styled-components';

import Logo from '../../components/Logo/logo.component';
import PowerButton from '../../components/Power-Button/power-button.component';
import SocialIcons from '../../components/Social-Icon/social-icons.component';
import { darkTheme } from '../../components/Themes/themes.component';
import Title from '../../components/Title/title.component';

import Me from '../../assets/Images/about.png';
import { Box, Main, Photo } from './about.styles';

const About = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box>

                <Logo theme='dark'/>
                <SocialIcons theme='dark'/>
                <PowerButton />

                <Photo>
                    <img src={Me} alt="personal bitmoji" />
                </Photo>    
                <Main>
                    I'm a front-end developer located in Palestine. I love to create simple yet beautiful websites with great user experience.
                    <br /> <br/>
                    I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer.
                    <br/> <br/>
                    I believe everything is an Art when you put your consciousness in it. You can connect with me via social links or e-mail.
                </Main>

                <Title text="ABOUT" top="10%" left="5%" />
            </Box>
        </ThemeProvider>
        
    )
}

export default About;
