import React, {useState} from 'react';
import { motion } from 'framer-motion';

import PowerButton from '../../components/Power-Button/power-button.component';
import Logo from '../../components/Logo/logo.component';
import SocialIcons from '../../components/Social-Icon/social-icons.component';
import Intro from '../../components/Intro/intro.component';
import { CenterLogo } from '../../components/SVGs/allSVGs';

import { 
    MainContainer, Container, Contact, 
    WORK, BottomBar, ABOUT, SKILLS, 
    Center, DarkDiv } from './main-directory.styles'

const MainDirectory = () => {

    const [click, setclick] = useState(false)

    const handleClick = () => setclick(!click)
    return (
        <MainContainer>
            <DarkDiv click={click} />
            <Container>
                <PowerButton theme={click ? 'dark' : 'light'} />
                <Logo theme={click ? 'dark' : 'light'}/>
                <SocialIcons theme={click ? 'dark' : 'light'} />
                <Center click={click}>
                    <CenterLogo onClick={() => handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
                    <span>Click here</span>
                </Center>

                <Contact target="_blank" to={{pathname: "mailto:ahmedahmed1919a@gmail.com"}}>
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale:0.9}}
                    >
                        Say Hi..
                    </motion.h2>
                </Contact>

                <WORK to='/work' click={click}>
                    <motion.h2
                        initial={{
                            y: 400,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 70,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale:0.9}}
                    >
                        Work
                    </motion.h2>
                </WORK>

                <BottomBar>
                    <ABOUT to='/about' click={click}>
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale:0.9}}
                        >
                            About
                        </motion.h2>
                    </ABOUT>

                    <SKILLS to='/skills'>
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale:0.9}}
                        >
                            My Skills
                        </motion.h2>
                    </SKILLS>
                </BottomBar>

            </Container>
            {
                click ? <Intro click={click} /> : null
            }
        </MainContainer>
    )
}

export default MainDirectory
