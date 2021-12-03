import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Github, Facebook, Twitter, Linkedin } from '../SVGs/allSVGs';
import { Icons, Line } from './social-icons.styles';
import { darkTheme } from '../Themes/themes.component';

const SocialIcons = (props) => {
    return (
        <Icons>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}
            >

                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://github.com/ahmedatif99"}}>
                    <Github width={25} height={25} fill={props.theme === "dark" ? darkTheme.text  : darkTheme.body  } />
                </NavLink>
            </motion.div>

            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.2}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://twitter.com/ahmed_atif_99"}}>
                    <Twitter width={25} height={25} fill={props.theme === "dark" ? darkTheme.text  : darkTheme.body  } />
                </NavLink>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.4}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://facebook.com/ahmedatif99"}}>
                    <Facebook width={25} height={25} fill={props.theme === "dark" ? darkTheme.text  : darkTheme.body  } />
                </NavLink>
            </motion.div>

            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.6}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://www.linkedin.com/in/ahmedatif/"}}>
                    <Linkedin width={25} height={25} fill={props.theme === "dark" ? darkTheme.text  : darkTheme.body  } />
                </NavLink>
            </motion.div>

            <Line color={props.theme}
                initial={
                    {
                        height:0
                    }
                }
                animate={{
                    height: '8rem'
                }}
                transition={{
                    type:'spring', duration:1, delay:0.8
                }}
            />
        </Icons>
    )
}

export default SocialIcons
