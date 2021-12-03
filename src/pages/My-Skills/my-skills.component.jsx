import React from 'react'
import { ThemeProvider } from 'styled-components'

import Logo from '../../components/Logo/logo.component'
import PowerButton from '../../components/Power-Button/power-button.component'
import SoundBar from '../../components/SoundBar/sound-bar.component'
import SocialIcons from '../../components/Social-Icon/social-icons.component'
import { lightTheme } from '../../components/Themes/themes.component'
import Title from '../../components/Title/title.component'

import { Design, Develope } from '../../components/SVGs/allSVGs'
import { Box, Description, Main, InnerTitle } from './my-skills.styles'

const MySkills = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <Logo theme='light'/>
                <SoundBar />
                <SocialIcons theme='light'/>
                <PowerButton/>

                <Main>
                    <InnerTitle>
                        <Design width={40} height={40} />Designer
                    </InnerTitle>
                    <Description>
                    Meticulous designer with a focus on the web design and passion for user frindly design.
                    </Description>
                    <Description>
                        <strong>I like to Design</strong>
                        <ul>
                            <li>
                                Web Design
                            </li>
                            <li>
                                Mobile Apps
                            </li>
                        </ul>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <ul>
                            <li>
                                Figma
                            </li>
                            
                        </ul>
                    </Description>
                </Main>

                <Main>
                    <InnerTitle>
                        <Develope width={40} height={40} /> Frontend Developer
                    </InnerTitle>
                    <Description>
                    Meticulous web developer with a focus on the front-end and passion for responsive website design and mobile-first approach.
                    </Description>
                    <Description>
                        <strong>Skills</strong>
                        <p>
                        Html, Css, JS, OOP, Bootstrap, Sass, React, Styled-Components, Material-UI, ANT-Design, Redux, React-Router, Firebase etc.
                        </p>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <p>
                        VScode, Github etc.
                        </p>
                    </Description>
                </Main>
                <Title text="SKILLS" top="80%" right="30%" />
            </Box>
        </ThemeProvider>
    )
}

export default MySkills
